## PHP Mail System (PHPMailer + SMTP)

This folder provides a **plug-and-play mail handler** for all website forms:

- Admin gets a modern HTML email with all fields + metadata
- User gets an automatic thank-you email
- Secure handling: validation + sanitization + honeypot + basic rate limit
- JSON responses (good for AJAX)

### 1) Install PHPMailer

From the project root:

```bash
composer install
```

This creates `vendor/` in the project root.

### 2) Configure SMTP + Admin

Copy and edit:

- `php/config.example.php` → `php/config.php`

Fill:
- `admin_email`
- SMTP host/port/encryption/username/password/from_email

### 3) Endpoint

Your universal endpoint is:

- `php/mail-handler.php`

If your site is deployed on shared hosting, this can be accessed like:

- `/php/mail-handler.php`

### 4) Form Integration

Send any form (AJAX or normal POST) to `/php/mail-handler.php` with:

- `form_type`: `Contact Form` | `Lead Generation Form` | `Inquiry Form` | `Newsletter Signup`
- `name`, `email`, `phone`, `message`, `service`, `company_name` (as needed)
- Honeypot: include an input named `website` (must stay empty)

See example:
- `php/examples/contact-form.html`

