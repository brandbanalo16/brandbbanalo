<?php

declare(strict_types=1);

/**
 * @param array<string,string|null> $data
 * @param array<string,mixed> $config
 */
function bb_user_email_html(array $data, array $config): string
{
  $company = htmlspecialchars((string) ($config['company_name'] ?? 'Brandbanalo Pvt Ltd'));
  $website = (string) ($config['website_url'] ?? '');
  $websiteEsc = htmlspecialchars($website);
  $logoUrl = $config['logo_url'] ?? null;

  $name = htmlspecialchars((string) ($data['name'] ?? ''));
  $formType = htmlspecialchars((string) ($data['form_type'] ?? 'your request'));
  $submittedAt = htmlspecialchars((string) ($data['submitted_at'] ?? ''));

  $accent = '#3b286d';
  $muted = '#64748b';
  $border = '#e5e7eb';
  $bg = '#f8fafc';

  $logoBlock = '';
  if (is_string($logoUrl) && $logoUrl !== '') {
    $logoEsc = htmlspecialchars($logoUrl);
    $logoBlock = <<<HTML
          <tr>
            <td align="center" style="padding:18px 22px 0 22px;">
              <img src="{$logoEsc}" alt="{$company}" width="140" style="display:block;max-width:140px;height:auto;border:0;outline:none;text-decoration:none;">
            </td>
          </tr>
        HTML;
  }

  $ctaBlock = '';
  if ($website !== '') {
    $ctaBlock = <<<HTML
          <tr>
            <td align="center" style="padding:0 22px 22px 22px;">
              <a href="{$websiteEsc}" style="display:inline-block;background:{$accent};color:#ffffff;text-decoration:none;font-weight:700;border-radius:12px;padding:12px 18px;font-size:14px;">
                Visit Website
              </a>
            </td>
          </tr>
        HTML;
  }

  return <<<HTML
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Thanks from {$company}</title>
  </head>
  <body style="margin:0;padding:0;background:{$bg};font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:{$bg};padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="640" cellspacing="0" cellpadding="0" border="0" style="width:640px;max-width:640px;background:#ffffff;border:1px solid {$border};border-radius:16px;overflow:hidden;">
            {$logoBlock}
            <tr>
              <td style="padding:22px;background:linear-gradient(135deg,#fdf5f6 0%,#f4e8fb 100%);border-bottom:1px solid {$border};">
                <div style="font-size:18px;line-height:1.35;color:#111827;font-weight:800;">
                  Thank you, {$name}
                </div>
                <div style="font-size:13px;color:{$muted};margin-top:8px;line-height:1.6;">
                  We’ve received {$formType}. Our team will review it and get back to you soon.
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:18px 22px 6px 22px;">
                <div style="font-size:12px;color:{$muted};font-weight:700;letter-spacing:.06em;text-transform:uppercase;">Confirmation</div>
                <div style="font-size:14px;color:#111827;line-height:1.65;margin-top:10px;">
                  <strong>Submitted:</strong> {$submittedAt}<br>
                  If you have additional details to share, just reply to this email.
                </div>
              </td>
            </tr>

            {$ctaBlock}

            <tr>
              <td style="padding:16px 22px;background:#0b1220;color:#cbd5e1;">
                <div style="font-size:12px;line-height:1.6;">
                  <strong style="color:#ffffff;">{$company}</strong><br>
                  This is an automated email. Please do not share sensitive information via this channel.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
HTML;
}

