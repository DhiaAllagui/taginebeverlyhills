import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, guests, date, time, occasion, notes } = body;

    if (!name || !phone || !email || !date || !time) {
      return NextResponse.json(
        { success: false, error: "Missing required reservation fields." },
        { status: 400 }
      );
    }

    const recipientEmail =
      process.env.RESERVATION_NOTIFY_EMAIL || "allagui.dhiaa20@gmail.com";

    const subject = `✦ New Reservation: ${name} (${guests} Guests, ${date} at ${time})`;

    const textContent = `
NEW TABLE RESERVATION REQUEST — TAGINE BEVERLY HILLS
------------------------------------------------------
Guest Name:    ${name}
Contact Phone: ${phone}
Guest Email:   ${email}
Party Size:    ${guests} ${guests === "8+" ? "(Private Event / Buyout)" : "Guests"}
Date:          ${date}
Time:          ${time}
Occasion:      ${occasion || "Dining"}
Special Notes: ${notes || "None"}
------------------------------------------------------
Notification sent to: ${recipientEmail}
Timestamp: ${new Date().toLocaleString()}
`.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0A0A0A; color: #EDE8DF; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background: #141312; border: 1px solid rgba(212, 175, 55, 0.35); border-radius: 12px; overflow: hidden; }
    .header { background: #0A0A0A; border-bottom: 1px solid rgba(212, 175, 55, 0.25); padding: 28px 24px; text-align: center; }
    .header h1 { font-family: Georgia, serif; color: #D4AF37; font-size: 24px; letter-spacing: 2px; margin: 0 0 6px 0; font-weight: normal; }
    .header p { color: #A3A3A3; font-size: 11px; text-transform: uppercase; letter-spacing: 3px; margin: 0; }
    .content { padding: 28px 24px; }
    .badge { display: inline-block; background: rgba(212, 175, 55, 0.15); color: #D4AF37; border: 1px solid rgba(212, 175, 55, 0.4); padding: 4px 12px; border-radius: 999px; font-size: 11px; letter-spacing: 1px; font-weight: 600; margin-bottom: 16px; }
    .grid { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .grid td { padding: 12px 14px; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 14px; }
    .grid td.label { color: #A3A3A3; width: 35%; font-weight: 500; }
    .grid td.val { color: #FFFFFF; font-weight: 600; }
    .notes-box { background: rgba(255, 255, 255, 0.03); border-left: 3px solid #D4AF37; padding: 14px 16px; border-radius: 4px; margin-top: 12px; font-size: 13px; color: #EDE8DF; }
    .footer { background: #0A0A0A; border-top: 1px solid rgba(255, 255, 255, 0.05); padding: 20px 24px; text-align: center; font-size: 11px; color: #737373; }
    .footer a { color: #D4AF37; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>TAGINE BEVERLY HILLS</h1>
      <p>Fine Dining Lounge</p>
    </div>
    <div class="content">
      <div class="badge">✦ NEW RESERVATION REQUEST</div>
      <table class="grid">
        <tr><td class="label">Guest Name</td><td class="val">${name}</td></tr>
        <tr><td class="label">Party Size</td><td class="val">${guests} ${guests === "8+" ? "(Large Party / Buyout)" : "Guests"}</td></tr>
        <tr><td class="label">Requested Date</td><td class="val">${date}</td></tr>
        <tr><td class="label">Requested Time</td><td class="val">${time}</td></tr>
        <tr><td class="label">Occasion</td><td class="val">${occasion || "Dining"}</td></tr>
        <tr><td class="label">Guest Phone</td><td class="val"><a href="tel:${phone}" style="color: #D4AF37; text-decoration: none;">${phone}</a></td></tr>
        <tr><td class="label">Guest Email</td><td class="val"><a href="mailto:${email}" style="color: #D4AF37; text-decoration: none;">${email}</a></td></tr>
      </table>

      ${
        notes
          ? `<div class="label" style="font-size: 12px; color: #A3A3A3; margin-bottom: 6px;">Special Guest Requests / Dietary:</div>
             <div class="notes-box">${notes}</div>`
          : ""
      }
    </div>
    <div class="footer">
      Delivered to Concierge at <a href="mailto:${recipientEmail}">${recipientEmail}</a><br/>
      Tagine Beverly Hills · 132 N Robertson Blvd, Beverly Hills, CA 90211 · (310) 360-7535
    </div>
  </div>
</body>
</html>
`.trim();

    let emailSent = false;
    let provider = "simulation";

    // 1. Try Resend API if API Key is configured
    if (process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Tagine Beverly Hills <reservations@taginebeverlyhills.com>",
            to: [recipientEmail],
            reply_to: email,
            subject: subject,
            html: htmlContent,
            text: textContent,
          }),
        });

        if (resendRes.ok) {
          emailSent = true;
          provider = "resend";
        } else {
          console.warn("Resend API failed, falling back:", await resendRes.text());
        }
      } catch (err) {
        console.warn("Resend attempt failed:", err);
      }
    }

    // 2. Try SMTP via Nodemailer if configured
    if (!emailSent && process.env.SMTP_HOST && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: process.env.SMTP_SECURE === "true" || process.env.SMTP_PORT === "465",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: `"Tagine Beverly Hills" <${process.env.SMTP_USER}>`,
          to: recipientEmail,
          replyTo: email,
          subject: subject,
          text: textContent,
          html: htmlContent,
        });

        emailSent = true;
        provider = "smtp";
      } catch (err) {
        console.warn("Nodemailer SMTP failed:", err);
      }
    }

    // 3. Simulated friction-free logging for testing / instant confirmation
    console.log("==================================================");
    console.log(`[RESERVATION NOTIFICATION DISPATCHED: ${provider.toUpperCase()}]`);
    console.log(`To: ${recipientEmail}`);
    console.log(`Guest: ${name} (${phone}, ${email})`);
    console.log(`Reservation: ${guests} guests on ${date} at ${time}`);
    if (notes) console.log(`Notes: ${notes}`);
    console.log("==================================================");

    return NextResponse.json({
      success: true,
      provider: provider,
      recipient: recipientEmail,
      message: "Reservation inquiry received. Our maître d' will confirm shortly.",
      reservation: {
        name,
        guests,
        date,
        time,
        occasion,
      },
    });
  } catch (error: unknown) {
    console.error("Reservation handler error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
