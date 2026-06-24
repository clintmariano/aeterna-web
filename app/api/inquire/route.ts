import { NextResponse } from "next/server";
import { Resend } from "resend";

// Where inquiries are delivered, and the verified sender domain address.
const TO_EMAIL = "inquire@aeterna-ehr.com";
const FROM_EMAIL = "Aeterna Website <noreply@aeterna-ehr.com>";

type InquiryBody = {
  name?: string;
  clinic?: string;
  email?: string;
  phone?: string;
  inquiryType?: string;
  message?: string;
  company?: string; // honeypot
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
  if (body.company) {
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

  // Basic email sanity check.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Misconfiguration — log server-side, show a friendly message.
    console.error("RESEND_API_KEY is not set; cannot send inquiry email.");
    return NextResponse.json(
      { error: "Email is not configured yet. Please try again later." },
      { status: 503 }
    );
  }

  const clinic = body.clinic?.trim() || "—";
  const phone = body.phone?.trim() || "—";
  const inquiryType = body.inquiryType?.trim() || "General inquiry";

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
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

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "We couldn't send your message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to send inquiry:", err);
    return NextResponse.json(
      { error: "We couldn't send your message. Please try again." },
      { status: 500 }
    );
  }
}
