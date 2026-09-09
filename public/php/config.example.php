<?php
/**
 * Copy this file to `php/config.php` and fill in real values.
 * Keep `php/config.php` out of git.
 */

return [
    // Branding
    'company_name' => 'Brandbanalo Pvt Ltd',
    'website_url' => 'https://brandbanalo.com',
    'logo_url' => null, // Optional: public URL to a logo image (PNG/JPG)

    // Where admin notifications go
    'admin_email' => 'info@brandbanalo.com',
    'admin_name' => 'Brandbanalo Team',

    // SMTP credentials
    'smtp' => [
        'host' => 'smtp.gmail.com',
        'port' => 587,
        'encryption' => 'tls', // 'tls' or 'ssl'
        'username' => 'info@brandbanalo.com',
        'password' => 'cule wdrb qbff ntwq',
        'from_email' => 'info@brandbanalo.com',
        'from_name' => 'Brandbanalo Pvt Ltd',
        // Optional (recommended): separate reply-to mailbox for replies from admin
        'reply_to_email' => 'info@brandbanalo.com',
        'reply_to_name' => 'Brandbanalo Support',
    ],

    // Security / anti-spam
    'security' => [
        // Honeypot field name expected in forms (should stay empty)
        'honeypot_field' => 'website',

        // Minimum seconds between submissions per IP (basic rate limit)
        'min_seconds_between_submissions' => 8,

        // Enable/disable basic rate limiting via PHP session
        'enable_rate_limit' => true,

        // If you later add reCAPTCHA: keep structure ready
        'recaptcha' => [
            'enabled' => false,
            'secret_key' => '',
        ],
    ],
];

