import { NextRequest, NextResponse } from "next/server";
import https from "node:https";

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
    const body = await req.json();
    const { url } = body as { url?: string };

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    const trimmedUrl = url.trim().slice(0, 500);

    const data = await sendEmail({
      from: "Ebano Labs <noreply@ebanumsystem.com>",
      to: "support@ebanumsystem.com",
      subject: `Free Audit Request — ${trimmedUrl}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #C9922A; margin-bottom: 8px;">New Free Audit Request</h2>
          <p style="color: #666; margin-bottom: 24px;">Someone submitted their website for a free audit.</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; background: #f5f5f5; font-weight: 600; width: 120px;">Website URL</td>
              <td style="padding: 12px; background: #fafafa;">
                <a href="${trimmedUrl}" style="color: #C9922A;">${trimmedUrl}</a>
              </td>
            </tr>
          </table>
          <p style="margin-top: 24px; color: #999; font-size: 12px;">Sent from ebanumsystem.com — Free Audit form</p>
        </div>
      `,
    });

    console.log("Resend sent (audit):", data?.id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Audit email error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
