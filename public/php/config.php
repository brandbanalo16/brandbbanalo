<?php
/**
 * SMTP + Admin configuration.
 *
 * Fill in the values below (especially SMTP username/password).
 * This file is ignored by git via `.gitignore`.
 */

return [
    // Branding
    'company_name' => 'Brand Banalo Pvt Ltd',
    'website_url' => 'https://brandbanalo.com',
    'logo_url' => null, // Optional public logo URL

    // Admin notification destination
    'admin_email' => 'info@brandbanalo.com',
    'admin_name' => 'Brandbanalo Team',

    // SMTP (Gmail App Password recommended)
    'smtp' => [
        // Gmail: smtp.gmail.com / 587 / tls
        'host' => 'smtp.gmail.com',
        'port' => 587,
        'encryption' => 'tls', // 'tls' or 'ssl'

        // Your SMTP login (for Gmail, your full gmail address)
        'username' => 'info@brandbanalo.com',

        // Paste your APP PASSWORD here (for Gmail: 16-char app password)
        'password' => 'culewdrbqbffntwq',

        // Best deliverability: keep from_email the same as username (Gmail requirement)
        'from_email' => 'info@brandbanalo.com',
        'from_name' => 'Brandbanalo Pvt Ltd',

        // Where replies should go when admin hits "Reply"
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

        // reCAPTCHA-ready structure (optional)
        'recaptcha' => [
            'enabled' => false,
            'secret_key' => '',
        ],
    ],

    // Local Debugging (automatically enabled on localhost, disabled on live server)
    'debug_local' => (
        isset($_SERVER['HTTP_HOST']) && 
        (strpos($_SERVER['HTTP_HOST'], 'localhost') !== false || strpos($_SERVER['HTTP_HOST'], '127.0.0.1') !== false)
    ),
    'captured_emails_dir' => __DIR__ . '/captured_emails',
];

