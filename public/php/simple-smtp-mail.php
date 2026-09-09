<?php
/**
 * Simple SMTP mail sender (no Composer, no PHPMailer).
 * Works with Gmail SMTP using App Password (AUTH LOGIN + STARTTLS).
 *
 * Usage:
 * 1) Fill $SMTP_* variables below
 * 2) Run: php php/simple-smtp-mail.php
 *
 * NOTE:
 * - For production websites, PHPMailer is still recommended.
 * - This script is intentionally simple and self-contained.
 */

declare(strict_types=1);

// =========================
// CONFIG (edit these)
// =========================
$SMTP_HOST = 'smtp.gmail.com';
$SMTP_PORT = 587;              // 587 = STARTTLS
$SMTP_USER = 'info@brandbanalo.com';
$SMTP_PASS = 'culewdrbqbffntwq';

$FROM_EMAIL = $SMTP_USER;      // Gmail requires from_email == authenticated user
$FROM_NAME = 'Brandbanalo Pvt Ltd';

$TO_EMAIL = 'admin@brandbanalo.com';
$TO_NAME = 'Brandbanalo Team';

$SUBJECT = 'SMTP Test Email - Brandbanalo';
$HTML_BODY = '<h2 style="margin:0 0 8px 0;">SMTP Test</h2><p>This is a test email sent via <b>simple SMTP PHP</b>.</p>';
$TEXT_BODY = "SMTP Test\nThis is a test email sent via simple SMTP PHP.";

// =========================
// SMTP IMPLEMENTATION
// =========================

function smtp_read($fp): string
{
    $data = '';
    while (!feof($fp)) {
        $line = fgets($fp, 515);
        if ($line === false)
            break;
        $data .= $line;
        // Multi-line responses have a hyphen after the status code, final has a space.
        if (preg_match('/^\d{3}\s/', $line))
            break;
    }
    return $data;
}

function smtp_expect($fp, array $okCodes, string $context): void
{
    $resp = smtp_read($fp);
    if (!preg_match('/^(\d{3})/', $resp, $m)) {
        throw new RuntimeException("SMTP invalid response during {$context}: " . trim($resp));
    }
    $code = (int) $m[1];
    if (!in_array($code, $okCodes, true)) {
        throw new RuntimeException("SMTP error during {$context} ({$code}): " . trim($resp));
    }
}

function smtp_send($fp, string $cmd, array $okCodes, string $context): void
{
    fwrite($fp, $cmd . "\r\n");
    smtp_expect($fp, $okCodes, $context);
}

function rfc2047(string $text): string
{
    // UTF-8 Base64 encoded header
    $b64 = base64_encode($text);
    return "=?UTF-8?B?{$b64}?=";
}

function build_mime_message(
    string $fromEmail,
    string $fromName,
    string $toEmail,
    string $toName,
    string $subject,
    string $htmlBody,
    string $textBody
): string {
    $boundary = 'bndry_' . bin2hex(random_bytes(12));
    $date = gmdate('D, d M Y H:i:s') . ' +0000';

    $headers = [];
    $headers[] = 'Date: ' . $date;
    $headers[] = 'From: ' . rfc2047($fromName) . " <{$fromEmail}>";
    $headers[] = 'To: ' . rfc2047($toName) . " <{$toEmail}>";
    $headers[] = 'Subject: ' . rfc2047($subject);
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = "Content-Type: multipart/alternative; boundary=\"{$boundary}\"";

    $parts = [];
    $parts[] = "--{$boundary}";
    $parts[] = "Content-Type: text/plain; charset=UTF-8";
    $parts[] = "Content-Transfer-Encoding: 7bit";
    $parts[] = "";
    $parts[] = $textBody;
    $parts[] = "";

    $parts[] = "--{$boundary}";
    $parts[] = "Content-Type: text/html; charset=UTF-8";
    $parts[] = "Content-Transfer-Encoding: 7bit";
    $parts[] = "";
    $parts[] = $htmlBody;
    $parts[] = "";

    $parts[] = "--{$boundary}--";
    $parts[] = "";

    return implode("\r\n", $headers) . "\r\n\r\n" . implode("\r\n", $parts);
}

function smtp_mail_send_login_starttls(
    string $host,
    int $port,
    string $user,
    string $pass,
    string $fromEmail,
    string $fromName,
    string $toEmail,
    string $toName,
    string $subject,
    string $htmlBody,
    string $textBody
): void {
    $fp = stream_socket_client(
        "tcp://{$host}:{$port}",
        $errno,
        $errstr,
        20,
        STREAM_CLIENT_CONNECT
    );

    if (!$fp) {
        throw new RuntimeException("SMTP connect failed: {$errstr} ({$errno})");
    }

    stream_set_timeout($fp, 20);
    smtp_expect($fp, [220], 'connect');

    $ehloHost = 'localhost';
    smtp_send($fp, "EHLO {$ehloHost}", [250], 'EHLO');

    // STARTTLS
    smtp_send($fp, "STARTTLS", [220], 'STARTTLS');
    if (!stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
        throw new RuntimeException('Failed to enable TLS encryption');
    }

    // EHLO again after TLS
    smtp_send($fp, "EHLO {$ehloHost}", [250], 'EHLO after TLS');

    // AUTH LOGIN
    smtp_send($fp, "AUTH LOGIN", [334], 'AUTH LOGIN');
    smtp_send($fp, base64_encode($user), [334], 'AUTH USER');
    smtp_send($fp, base64_encode($pass), [235], 'AUTH PASS');

    // MAIL FROM / RCPT TO
    smtp_send($fp, "MAIL FROM:<{$fromEmail}>", [250], 'MAIL FROM');
    smtp_send($fp, "RCPT TO:<{$toEmail}>", [250, 251], 'RCPT TO');

    // DATA
    smtp_send($fp, "DATA", [354], 'DATA');
    $msg = build_mime_message($fromEmail, $fromName, $toEmail, $toName, $subject, $htmlBody, $textBody);

    // Dot-stuffing: lines starting with '.' must be prefixed with another '.'
    $msg = preg_replace('/^\./m', '..', $msg) ?? $msg;

    fwrite($fp, $msg . "\r\n.\r\n");
    smtp_expect($fp, [250], 'message body');

    // QUIT
    smtp_send($fp, "QUIT", [221], 'QUIT');
    fclose($fp);
}

// =========================
// RUN TEST
// =========================
try {
    smtp_mail_send_login_starttls(
        $SMTP_HOST,
        $SMTP_PORT,
        $SMTP_USER,
        $SMTP_PASS,
        $FROM_EMAIL,
        $FROM_NAME,
        $TO_EMAIL,
        $TO_NAME,
        $SUBJECT,
        $HTML_BODY,
        $TEXT_BODY
    );
    echo "OK: Email sent.\n";
} catch (Throwable $e) {
    echo "ERROR: " . $e->getMessage() . "\n";
    exit(1);
}

