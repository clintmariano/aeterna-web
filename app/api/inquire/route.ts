import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Inquiries are sent from and delivered to this address (a Zoho mailbox alias).
const INQUIRE_EMAIL = "inquire@aeterna-ehr.com";

// nodemailer needs the Node.js runtime (not the edge runtime).
export const runtime = "nodejs";

type InquiryBody = {
  name?: string;
  clinic?: string;
  email?: string;
  phone?: string;
  inquiryType?: string;
  message?: string;
  contact_time_pref?: string; // honeypot
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: InquiryBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — silently accept and drop bot submissions.
  if (body.contact_time_pref) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email, and message." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // Zoho SMTP credentials, supplied via Vercel environment variables.
  // SMTP_USER  = the full Zoho mailbox login (e.g. clint.mariano@aeterna-ehr.com
  //              or inquire@aeterna-ehr.com)
  // SMTP_PASS  = a Zoho app-specific password (NOT the normal login password)
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    console.error("SMTP_USER / SMTP_PASS are not set; cannot send inquiry.");
    return NextResponse.json(
      { error: "Email is not configured yet. Please try again later." },
      { status: 503 }
    );
  }

  const clinic = body.clinic?.trim() || "—";
  const phone = body.phone?.trim() || "—";
  const inquiryType = body.inquiryType?.trim() || "General inquiry";

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.zoho.com",
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true, // SSL on 465
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      // Send AS the authenticated mailbox (SMTP_USER) to avoid self-addressed
      // mail and "send-as" restrictions; deliver TO the inquire alias.
      from: `"Aeterna Website" <${user}>`,
      to: INQUIRE_EMAIL,
      replyTo: `"${name}" <${email}>`,
      subject: `New ${inquiryType.toLowerCase()} from ${name}`,
      text: [
        `Inquiry type: ${inquiryType}`,
        `Name: ${name}`,
        `Clinic: ${clinic}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: system-ui, sans-serif; color: #0f172a;">
          <h2 style="color:#0d9488; margin-bottom: 4px;">New ${escapeHtml(
            inquiryType
          )}</h2>
          <table style="border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding:4px 12px 4px 0; color:#64748b;">Name</td><td>${escapeHtml(
              name
            )}</td></tr>
            <tr><td style="padding:4px 12px 4px 0; color:#64748b;">Clinic</td><td>${escapeHtml(
              clinic
            )}</td></tr>
            <tr><td style="padding:4px 12px 4px 0; color:#64748b;">Email</td><td>${escapeHtml(
              email
            )}</td></tr>
            <tr><td style="padding:4px 12px 4px 0; color:#64748b;">Phone</td><td>${escapeHtml(
              phone
            )}</td></tr>
          </table>
          <p style="margin-top:16px; white-space:pre-wrap;">${escapeHtml(
            message
          )}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to send inquiry via SMTP:", err);
    return NextResponse.json(
      { error: "We couldn't send your message. Please try again." },
      { status: 502 }
    );
  }
}
