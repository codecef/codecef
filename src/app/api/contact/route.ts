import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type TicketPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const fallbackFrom = process.env.SMTP_FROM ?? process.env.SMTP_USER;

const smtpConfig = {
  host: process.env.SMTP_HOST ?? "smtp.hostinger.com",
  port: Number(process.env.SMTP_PORT ?? 465),
  secure:
    process.env.SMTP_SECURE === "true" ||
    Number(process.env.SMTP_PORT ?? 465) === 465,
  auth: {
    user: process.env.SMTP_USER ?? "team@codecef.com",
    pass: process.env.SMTP_PASS ?? "dummy-email-password",
  },
};

export async function POST(request: Request) {
  try {
    const { name, email, message }: TicketPayload = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json(
        {
          error:
            "Mail service is not configured. Please set SMTP_USER and SMTP_PASS.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport(smtpConfig);

    await transporter.sendMail({
      from: fallbackFrom ?? "support@example.com",
      to: process.env.SUPPORT_INBOX ?? "support@example.com",
      replyTo: email,
      subject: `New support ticket from ${name}`,
      text: message,
      html: `
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send support ticket", error);

    return NextResponse.json(
      { error: "Unable to send your message. Please try again later." },
      { status: 500 }
    );
  }
}

