<?php

declare(strict_types=1);

/**
 * @param array<string,string|null> $data
 * @param array<string,mixed> $config
 */
function bb_admin_email_html(array $data, array $config): string
{
  $company = htmlspecialchars((string) ($config['company_name'] ?? 'Brandbanalo Pvt Ltd'));
  $formType = htmlspecialchars((string) ($data['form_type'] ?? 'Form Submission'));
  $submittedAt = htmlspecialchars((string) ($data['submitted_at'] ?? ''));

  $name = htmlspecialchars((string) ($data['name'] ?? ''));
  $email = htmlspecialchars((string) ($data['email'] ?? ''));
  $phone = htmlspecialchars((string) ($data['phone'] ?? ''));
  $service = htmlspecialchars((string) ($data['service'] ?? ''));
  $companyName = htmlspecialchars((string) ($data['company_name'] ?? ''));
  $message = nl2br(htmlspecialchars((string) ($data['message'] ?? '')));
  $ip = htmlspecialchars((string) ($data['ip'] ?? ''));
  $ua = htmlspecialchars((string) ($data['user_agent'] ?? ''));

  $accent = '#3b286d';
  $muted = '#64748b';
  $border = '#e5e7eb';
  $bg = '#f8fafc';

  return <<<HTML
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>{$company} - New Lead</title>
  </head>
  <body style="margin:0;padding:0;background:{$bg};font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:{$bg};padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="640" cellspacing="0" cellpadding="0" border="0" style="width:640px;max-width:640px;background:#ffffff;border:1px solid {$border};border-radius:16px;overflow:hidden;">
            <tr>
              <td style="padding:22px 22px 14px 22px;background:linear-gradient(135deg,#fdf5f6 0%,#f4e8fb 100%);border-bottom:1px solid {$border};">
                <div style="font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:{$muted};font-weight:700;">New Submission</div>
                <div style="font-size:22px;line-height:1.25;color:#111827;font-weight:800;margin-top:6px;">
                  {$formType}
                </div>
                <div style="font-size:13px;color:{$muted};margin-top:6px;">
                  Submitted: <strong style="color:#111827;">{$submittedAt}</strong>
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:18px 22px 6px 22px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 12px;border:1px solid {$border};border-radius:12px;background:#fff;">
                      <div style="font-size:12px;color:{$muted};font-weight:700;">Name</div>
                      <div style="font-size:15px;color:#111827;font-weight:700;margin-top:4px;">{$name}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:0 22px 6px 22px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;">
                  <tr>
                    <td width="50%" style="padding:10px 12px;border:1px solid {$border};border-radius:12px;background:#fff;">
                      <div style="font-size:12px;color:{$muted};font-weight:700;">Email</div>
                      <div style="font-size:14px;color:#111827;margin-top:4px;">
                        <a href="mailto:{$email}" style="color:{$accent};text-decoration:none;font-weight:700;">{$email}</a>
                      </div>
                    </td>
                    <td width="12"></td>
                    <td width="50%" style="padding:10px 12px;border:1px solid {$border};border-radius:12px;background:#fff;">
                      <div style="font-size:12px;color:{$muted};font-weight:700;">Phone</div>
                      <div style="font-size:14px;color:#111827;margin-top:4px;font-weight:700;">{$phone}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:0 22px 6px 22px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;">
                  <tr>
                    <td width="50%" style="padding:10px 12px;border:1px solid {$border};border-radius:12px;background:#fff;">
                      <div style="font-size:12px;color:{$muted};font-weight:700;">Service</div>
                      <div style="font-size:14px;color:#111827;margin-top:4px;font-weight:700;">{$service}</div>
                    </td>
                    <td width="12"></td>
                    <td width="50%" style="padding:10px 12px;border:1px solid {$border};border-radius:12px;background:#fff;">
                      <div style="font-size:12px;color:{$muted};font-weight:700;">Company</div>
                      <div style="font-size:14px;color:#111827;margin-top:4px;font-weight:700;">{$companyName}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:0 22px 18px 22px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:14px 12px;border:1px solid {$border};border-radius:12px;background:#fff;">
                      <div style="font-size:12px;color:{$muted};font-weight:700;">Message</div>
                      <div style="font-size:14px;color:#111827;margin-top:8px;line-height:1.55;">{$message}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:0 22px 22px 22px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:12px;border:1px dashed {$border};border-radius:12px;background:#fbfbff;">
                      <div style="font-size:12px;color:{$muted};font-weight:700;margin-bottom:6px;">Technical details</div>
                      <div style="font-size:12px;color:{$muted};line-height:1.5;">
                        IP: <strong style="color:#111827;">{$ip}</strong><br>
                        User-Agent: <span style="color:#111827;">{$ua}</span>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:16px 22px;background:#0b1220;color:#cbd5e1;">
                <div style="font-size:12px;line-height:1.6;">
                  <strong style="color:#ffffff;">{$company}</strong><br>
                  This is an automated notification from your website forms.
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

