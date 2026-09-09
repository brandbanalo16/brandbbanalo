<?php

declare(strict_types=1);

/**
 * Brandbanalo Pvt Ltd - Universal Form Mail Handler
 *
 * Supports multiple form types with one endpoint:
 * - Contact Form
 * - Lead Generation Form
 * - Inquiry Form
 * - Newsletter Signup (optional)
 *
 * Output: JSON (success/error)
 *
 * Requirements:
 * - PHP 7.4+
 * - PHPMailer (install via Composer)
 *
 * Setup:
 * 1) `composer install` (creates `vendor/`)
 * 2) Copy `php/config.example.php` to `php/config.php` and fill SMTP + admin email
 */

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Only allow POST
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// Load config
$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Server configuration missing (config.php).']);
    exit;
}
/** @var array<string,mixed> $config */
$config = require $configPath;

// Direct inclusion of PHPMailer (no Composer needed)
require_once __DIR__ . '/lib/PHPMailer/Exception.php';
require_once __DIR__ . '/lib/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/lib/PHPMailer/SMTP.php';

require_once __DIR__ . '/lib/mailer.php';
require_once __DIR__ . '/templates/admin-email.php';
require_once __DIR__ . '/templates/user-email.php';

// ---- Helpers
function bb_json_input(): array
{
    $raw = file_get_contents('php://input');
    if (!$raw) return [];
    $ct = strtolower((string)($_SERVER['CONTENT_TYPE'] ?? ''));
    if (strpos($ct, 'application/json') === false) return [];
    $decoded = json_decode($raw, true);
    return is_array($decoded) ? $decoded : [];
}

function bb_trim(?string $v): string
{
    return trim((string)$v);
}

function bb_clean_string(?string $v, int $maxLen = 200): string
{
    $s = bb_trim($v);
    $s = preg_replace('/\s+/u', ' ', $s) ?? $s;
    if (mb_strlen($s) > $maxLen) $s = mb_substr($s, 0, $maxLen);
    return $s;
}

function bb_clean_message(?string $v, int $maxLen = 4000): string
{
    $s = bb_trim($v);
    if (mb_strlen($s) > $maxLen) $s = mb_substr($s, 0, $maxLen);
    return $s;
}

function bb_clean_email(?string $v): string
{
    $s = strtolower(bb_trim($v));
    $s = filter_var($s, FILTER_SANITIZE_EMAIL) ?: $s;
    return $s;
}

function bb_clean_phone(?string $v, int $maxLen = 30): string
{
    $s = bb_trim($v);
    $s = preg_replace('/[^\d+\-\s().]/', '', $s) ?? $s;
    if (mb_strlen($s) > $maxLen) $s = mb_substr($s, 0, $maxLen);
    return $s;
}

function bb_client_ip(): string
{
    // Basic shared-hosting friendly extraction
    $keys = ['HTTP_CF_CONNECTING_IP', 'HTTP_X_FORWARDED_FOR', 'REMOTE_ADDR'];
    foreach ($keys as $k) {
        $v = (string)($_SERVER[$k] ?? '');
        if ($v === '') continue;
        // XFF can contain multiple IPs
        $v = explode(',', $v)[0];
        return trim($v);
    }
    return '';
}

function bb_fail(int $status, string $message, array $extra = []): void
{
    http_response_code($status);
    echo json_encode(array_merge(['ok' => false, 'error' => $message], $extra));
    exit;
}

// ---- Inputs (supports form-encoded, multipart, or JSON)
$json = bb_json_input();
$in = array_merge($_POST, $json);

$security = $config['security'] ?? [];
$honeypotName = (string)($security['honeypot_field'] ?? 'website');
$honeypotVal = (string)($in[$honeypotName] ?? '');
if ($honeypotVal !== '') {
    // Pretend success to discourage bots
    echo json_encode(['ok' => true, 'message' => 'Submitted']);
    exit;
}

// Basic rate limiting (session-based)
if (!headers_sent() && ($security['enable_rate_limit'] ?? true)) {
    if (session_status() !== PHP_SESSION_ACTIVE) {
        session_start();
    }
    $minSeconds = (int)($security['min_seconds_between_submissions'] ?? 8);
    $ip = bb_client_ip();
    $key = 'bb_last_submit_' . sha1($ip);
    $last = (int)($_SESSION[$key] ?? 0);
    $now = time();
    if ($last > 0 && ($now - $last) < $minSeconds) {
        bb_fail(429, 'Please wait a moment and try again.');
    }
    $_SESSION[$key] = $now;
}

// Form type routing (for subject / labeling)
$formTypeRaw = bb_clean_string((string)($in['form_type'] ?? 'Contact Form'), 60);
$allowedTypes = [
    'Contact Form',
    'Lead Generation Form',
    'Inquiry Form',
    'Newsletter Signup',
    'Sidebar Contact Form',
];
// Normalize unknown values to "Contact Form"
$formType = in_array($formTypeRaw, $allowedTypes, true) ? $formTypeRaw : 'Contact Form';

// Common fields
$name = bb_clean_string((string)($in['name'] ?? ''), 120);
$email = bb_clean_email((string)($in['email'] ?? ''));
$phone = bb_clean_phone((string)($in['phone'] ?? ''));
$message = bb_clean_message((string)($in['message'] ?? ''));
$service = bb_clean_string((string)($in['service'] ?? ''), 120);
$companyName = bb_clean_string((string)($in['company_name'] ?? ''), 160);

// Newsletter can omit message/phone/name; other forms typically require at least name+email
if ($formType === 'Newsletter Signup') {
    if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        bb_fail(422, 'Please enter a valid email address.');
    }
} else {
    if ($name === '') bb_fail(422, 'Name is required.');
    if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) bb_fail(422, 'A valid email is required.');
    if ($message === '') bb_fail(422, 'Message is required.');
}

// Optional reCAPTCHA (structure ready; implement verification when enabled)
if (($security['recaptcha']['enabled'] ?? false) === true) {
    // Expect frontend sends `recaptcha_token`
    // Implement server verification here when you enable it.
    // bb_fail(501, 'reCAPTCHA verification not configured.');
}

$submittedAt = (new DateTime('now', new DateTimeZone('Asia/Kolkata')))->format('d M Y, h:i A T');
$ip = bb_client_ip();
$ua = bb_clean_string((string)($_SERVER['HTTP_USER_AGENT'] ?? ''), 240);

/** @var array<string,string|null> $payload */
$payload = [
    'form_type' => $formType,
    'submitted_at' => $submittedAt,
    'name' => $name,
    'email' => $email,
    'phone' => $phone,
    'message' => $message,
    'service' => $service,
    'company_name' => $companyName,
    'ip' => $ip,
    'user_agent' => $ua,
];

$company = (string)($config['company_name'] ?? 'Brandbanalo Pvt Ltd');
$adminEmail = (string)($config['admin_email'] ?? '');
$adminName = (string)($config['admin_name'] ?? $company);

if ($adminEmail === '' || !filter_var($adminEmail, FILTER_VALIDATE_EMAIL)) {
    bb_fail(500, 'Admin email is not configured.');
}

try {
    // --- Admin email
    $adminMail = bb_create_mailer($config);
    $adminMail->clearAllRecipients();
    $adminMail->addAddress($adminEmail, $adminName);

    // Make replies go to the user (admin can hit Reply)
    if ($email !== '' && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $adminMail->addReplyTo($email, $name !== '' ? $name : $email);
    }

    // Routing based on form type
    $type_label = !empty($formType) ? $formType : "Contact Form";
    $subject = "New Inquiry: " . $type_label;

    switch (strtolower(str_replace(' ', '_', $formType))) {
        case 'lead_gen':
        case 'lead_generation':
        case 'lead_generation_form':
            $subject = "New Lead Generation Inquiry";
            break;
        case 'consultation':
            $subject = "New Consultation Request";
            break;
        case 'service_inquiry':
            $subject = "New Service Inquiry: " . ($service !== '' ? $service : 'General');
            break;
        case 'sidebar_contact_form':
            $subject = "New Sidebar Inquiry - " . ($name !== '' ? $name : $email);
            break;
        default:
            $subject = sprintf('[%s] %s - %s', $company, $formType, $name !== '' ? $name : $email);
            break;
    }

    $email_body = bb_admin_email_html($payload, $config);

    $adminMail->Subject = $subject;
    $adminMail->Body = $email_body;
    $adminMail->AltBody = "New submission\n\nForm: {$formType}\nName: {$name}\nEmail: {$email}\nPhone: {$phone}\nService: {$service}\nCompany: {$companyName}\n\nMessage:\n{$message}\n\nSubmitted: {$submittedAt}";
    bb_send_mail($adminMail, $config);

    // --- User auto-reply (only if email is valid)
    if ($email !== '' && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $userMail = bb_create_mailer($config);
        $userMail->clearAllRecipients();
        $userMail->addAddress($email, $name !== '' ? $name : $email);
        $userMail->Subject = sprintf('Thanks for reaching %s', $company);
        $userMail->Body = bb_user_email_html($payload, $config);
        $userMail->AltBody = "Thanks for contacting {$company}. We received your submission ({$formType}) on {$submittedAt}. We'll get back to you soon.";
        bb_send_mail($userMail, $config);
    }

    echo json_encode([
        'ok' => true,
        'message' => 'Thanks! Your submission has been received.',
    ]);
} catch (Throwable $e) {
    // Log the error to a file for debugging on the live server
    error_log(date('Y-m-d H:i:s') . ' - Mail Error: ' . $e->getMessage() . PHP_EOL, 3, __DIR__ . '/error_log.txt');

    // Don’t leak sensitive SMTP errors to users
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'error' => 'We could not send your message right now. Please try again later.',
    ]);
}

