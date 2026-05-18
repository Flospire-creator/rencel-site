import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const VALID_SERVICES = [
  "AI Procurement Intelligence",
  "Supply Chain Automation",
  "Digital Twin Solutions",
  "Custom SaaS Development",
  "Global Sourcing",
  "Logistics Management",
  "Other",
];

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    // Require Origin header from an allowlisted domain (CSRF protection)
    const origin = request.headers.get("origin");
    const allowedOrigins = [
      "https://www.rencelprocurements.co.uk",
      "https://rencelprocurements.co.uk",
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3003",
    ];
    if (!origin || !allowedOrigins.includes(origin)) {
      return NextResponse.json({ error: "Forbidden." }, { status: 403 });
    }

    const body = await request.json();
    const { name, email, company, service, message, website } = body;

    // Honeypot: real users never see or fill this. Bots do. Silently drop.
    if (website && typeof website === "string" && website.length > 0) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (typeof name !== "string" || name.length > 200) {
      return NextResponse.json({ error: "Invalid name." }, { status: 400 });
    }
    if (typeof email !== "string" || email.length > 254 || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }
    if (company && (typeof company !== "string" || company.length > 200)) {
      return NextResponse.json({ error: "Invalid company name." }, { status: 400 });
    }
    if (service && !VALID_SERVICES.includes(service)) {
      return NextResponse.json({ error: "Invalid service selection." }, { status: 400 });
    }
    if (typeof message !== "string" || message.length > 5000) {
      return NextResponse.json({ error: "Message is too long." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Rencel Website <onboarding@resend.dev>",
      to: "uxflonw@gmail.com",
      replyTo: email,
      subject: `New enquiry from ${esc(name)}${company ? ` at ${esc(company)}` : ""}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        ${company ? `<p><strong>Company:</strong> ${esc(company)}</p>` : ""}
        ${service ? `<p><strong>Interested In:</strong> ${esc(service)}</p>` : ""}
        <hr />
        <p><strong>Message:</strong></p>
        <p>${esc(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
