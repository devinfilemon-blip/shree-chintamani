function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildContactEmailText(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}): string {
  return [
    "SCLE India — New Website Enquiry",
    "────────────────────────────────",
    "",
    `Inquiry Type : ${data.subject}`,
    `Name         : ${data.name}`,
    `Email        : ${data.email}`,
    `Phone        : ${data.phone}`,
    "",
    "Message:",
    data.message,
    "",
    "────────────────────────────────",
    "Reply directly to this email to respond to the customer.",
    "Shree Chintamani Logistics & Exports India Pvt. Ltd.",
  ].join("\n");
}

export function buildContactEmailHtml(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}): string {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const phone = escapeHtml(data.phone);
  const subject = escapeHtml(data.subject);
  const message = escapeHtml(data.message).replace(/\n/g, "<br>");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Enquiry — SCLE India</title>
</head>
<body style="margin:0;padding:0;background-color:#eef1f5;font-family:Arial,Helvetica,sans-serif;color:#1a2b3c;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#eef1f5;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 30px rgba(0,51,102,0.10);">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#003366 0%,#1a4a7a 100%);padding:28px 32px;">
              <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#ffb088;font-weight:bold;">
                SCLE India Website
              </p>
              <h1 style="margin:0;font-size:24px;line-height:1.3;color:#ffffff;font-weight:700;">
                New Customer Enquiry
              </h1>
              <p style="margin:10px 0 0;font-size:14px;line-height:1.5;color:rgba(255,255,255,0.82);">
                A visitor submitted the contact form on your website.
              </p>
            </td>
          </tr>

          <!-- Inquiry badge -->
          <tr>
            <td style="padding:24px 32px 0;">
              <span style="display:inline-block;background:#fff3e8;color:#f26522;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:8px 14px;border-radius:999px;border:1px solid #ffd4b8;">
                ${subject}
              </span>
            </td>
          </tr>

          <!-- Contact details -->
          <tr>
            <td style="padding:24px 32px 8px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding:14px 0;border-bottom:1px solid #edf0f4;">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#7a8798;">Full Name</p>
                    <p style="margin:0;font-size:16px;font-weight:600;color:#003366;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 0;border-bottom:1px solid #edf0f4;">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#7a8798;">Email Address</p>
                    <p style="margin:0;font-size:16px;">
                      <a href="mailto:${email}" style="color:#f26522;text-decoration:none;font-weight:600;">${email}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 0;border-bottom:1px solid #edf0f4;">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#7a8798;">Phone Number</p>
                    <p style="margin:0;font-size:16px;">
                      <a href="tel:${phone}" style="color:#003366;text-decoration:none;font-weight:600;">${phone}</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:8px 32px 28px;">
              <p style="margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#7a8798;">Customer Message</p>
              <div style="background:#f8fafc;border:1px solid #e6ebf2;border-left:4px solid #f26522;border-radius:8px;padding:18px 20px;">
                <p style="margin:0;font-size:15px;line-height:1.7;color:#334155;">${message}</p>
              </div>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:0 32px 28px;">
              <table role="presentation" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="border-radius:8px;background:#f26522;">
                    <a href="mailto:${email}?subject=Re:%20SCLE%20India%20Enquiry" style="display:inline-block;padding:13px 22px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;">
                      Reply to ${name}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;padding:18px 32px;border-top:1px solid #edf0f4;">
              <p style="margin:0;font-size:12px;line-height:1.6;color:#7a8798;text-align:center;">
                Shree Chintamani Logistics &amp; Exports India Pvt. Ltd.<br />
                <span style="color:#f26522;font-weight:600;">DELIVERING TRUST ACROSS BORDERS</span>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
