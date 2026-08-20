<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

/**
 * @param array<string,mixed> $config
 */
function bb_create_mailer(array $config): PHPMailer
{
    $mail = new PHPMailer(true);
    $smtp = $config['smtp'] ?? [];

    $mail->isSMTP();
    $mail->Host       = (string)($smtp['host'] ?? '');
    $mail->Port       = (int)($smtp['port'] ?? 587);
    $mail->SMTPAuth   = true;
    $mail->Username   = (string)($smtp['username'] ?? '');
    $mail->Password   = (string)($smtp['password'] ?? '');

    $encryption = (string)($smtp['encryption'] ?? 'tls');
    if ($encryption === 'ssl') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    } else {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    }

    // Reasonable defaults for shared hosting
    $mail->SMTPAutoTLS = true;
    $mail->CharSet = 'UTF-8';

    // Disable verbose output in production. Use SMTP::DEBUG_SERVER temporarily if needed.
    $mail->SMTPDebug = SMTP::DEBUG_OFF;

    $fromEmail = (string)($smtp['from_email'] ?? $smtp['username'] ?? '');
    $fromName  = (string)($smtp['from_name'] ?? ($config['company_name'] ?? ''));

    $mail->setFrom($fromEmail, $fromName);

    if (!empty($smtp['reply_to_email'])) {
        $mail->addReplyTo((string)$smtp['reply_to_email'], (string)($smtp['reply_to_name'] ?? $fromName));
    }

    $mail->isHTML(true);

    return $mail;
}

/**
 * Sends the mail or captures it to a local file if debug_local is enabled.
 *
 * @param PHPMailer $mail
 * @param array<string,mixed> $config
 * @return bool
 */
function bb_send_mail(PHPMailer $mail, array $config): bool
{
    $debugLocal = $config['debug_local'] ?? false;
    $captureDir = $config['captured_emails_dir'] ?? __DIR__ . '/../captured_emails';

    if ($debugLocal) {
        if (!is_dir($captureDir)) {
            mkdir($captureDir, 0777, true);
        }

        // Create a unique filename
        $timestamp = date('Y-m-d_H-i-s');
        $subject = preg_replace('/[^a-zA-Z0-9_\-]/', '_', $mail->Subject);
        $filename = "{$timestamp}_{$subject}.html";
        $filePath = $captureDir . '/' . $filename;

        // Build a simple HTML wrapper for the capture
        $to = '';
        foreach ($mail->getToAddresses() as $addr) {
            $to .= ($addr[1] ?? '') . " <" . ($addr[0] ?? '') . ">, ";
        }

        $captureContent = "<!-- METADATA
Subject: {$mail->Subject}
To: {$to}
Date: " . date('r') . "
-->
<div style='background:#f4f4f4; padding:20px; border-bottom:2px solid #ccc; margin-bottom:20px; font-family:sans-serif;'>
    <p><strong>Subject:</strong> " . htmlspecialchars($mail->Subject) . "</p>
    <p><strong>To:</strong> " . htmlspecialchars(rtrim($to, ', ')) . "</p>
    <p><strong>Date:</strong> " . date('Y-m-d H:i:s') . "</p>
</div>
" . $mail->Body;

        return (bool)file_put_contents($filePath, $captureContent);
    }

    return $mail->send();
}

