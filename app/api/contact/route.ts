import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { buildContactEmailHtml, buildContactEmailText } from "../../lib/contactEmailTemplate";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

function validatePayload(data: ContactPayload): string | null {
  const name = data.name?.trim();
  const email = data.email?.trim();
  const phone = data.phone?.trim();
  const subject = data.subject?.trim();
  const message = data.message?.trim();

  if (!name || !email || !phone || !subject || !message) {
    return "Please fill in all required fields.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Please enter a valid email address.";
  }
  if (message.length < 10) {
    return "Message must be at least 10 characters.";
  }
  return null;
}

export async function POST(request: Request) {
  const smtpEmail = process.env.SMTP_EMAIL;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!smtpEmail || !smtpPassword || !contactEmail) {
    return NextResponse.json(
      { ok: false, error: "Email service is not configured. Please contact us by phone." },
      { status: 500 },
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const validationError = validatePayload(body);
  if (validationError) {
    return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
  }

  const { name, email, phone, subject, message } = {
    name: body.name.trim(),
    email: body.email.trim(),
    phone: body.phone.trim(),
    subject: body.subject.trim(),
    message: body.message.trim(),
  };

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpEmail,
        pass: smtpPassword,
      },
    });

    await transporter.sendMail({
      from: `"SCLE India Website" <${smtpEmail}>`,
      to: contactEmail,
      replyTo: email,
      subject: `New Enquiry: ${subject} — ${name} | SCLE India`,
      text: buildContactEmailText({ name, email, phone, subject, message }),
      html: buildContactEmailHtml({ name, email, phone, subject, message }),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form email error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send email. Please call or email us directly." },
      { status: 500 },
    );
  }
}
