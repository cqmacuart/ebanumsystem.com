import { NextRequest, NextResponse } from "next/server";
import https from "node:https";

interface ContactPayload {
  name?: string;
  email?: string;
  website?: string;
  service?: string;
  message?: string;
}

function sendEmail(payload: object): Promise<{ id?: string }> {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(payload);
    const req = https.request(
      {
        hostname: "api.resend.com",
        family: 4,
        path: "/emails",
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(body),
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          const parsed = JSON.parse(data);
          if (res.statusCode && res.statusCode >= 400) {
            reject(new Error(parsed.message ?? `HTTP ${res.statusCode}`));
          } else {
            resolve(parsed);
          }
        });
      }
    );
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload;
    const { name, email, website, service, message } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 }
      );
    }

    const safeName = String(name).slice(0, 200);
    const safeEmail = String(email).slice(0, 200);
    const safeWebsite = website ? String(website).slice(0, 500) : "—";
    const safeService = String(service).slice(0, 100);
    const safeMessage = String(message).slice(0, 5000);

    const data = await sendEmail({
      from: "Ebano Labs <noreply@ebanumsystem.com>",
      to: "support@ebanumsystem.com",
      reply_to: safeEmail,
      subject: `New Contact Form — ${safeName} (${safeService})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #C9922A; margin-bottom: 8px;">New Contact Form Submission</h2>
          <p style="color: #666; margin-bottom: 24px;">Someone reached out via the Ebano Labs contact form.</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; background: #f5f5f5; font-weight: 600; width: 130px;">Name</td>
              <td style="padding: 12px; background: #fafafa;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background: #f5f5f5; font-weight: 600;">Email</td>
              <td style="padding: 12px; background: #fafafa;">
                <a href="mailto:${safeEmail}" style="color: #C9922A;">${safeEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; background: #f5f5f5; font-weight: 600;">Website</td>
              <td style="padding: 12px; background: #fafafa;">${safeWebsite}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background: #f5f5f5; font-weight: 600;">Service</td>
              <td style="padding: 12px; background: #fafafa;">${safeService}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background: #f5f5f5; font-weight: 600; vertical-align: top;">Message</td>
              <td style="padding: 12px; background: #fafafa; white-space: pre-wrap;">${safeMessage}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; color: #999; font-size: 12px;">Sent from ebanolabs.com — Contact form</p>
        </div>
      `,
    });

    console.log("Resend sent (contact):", data?.id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
