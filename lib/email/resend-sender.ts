import "server-only";
import https from "node:https";
import type { EmailMessage, EmailSender } from "./types";

const TIMEOUT_MS = 10_000;

/**
 * Resend transport over raw HTTPS.
 * `family: 4` forces IPv4 — kept on purpose: the hosting environment has
 * had broken IPv6 egress, which is why the official SDK (fetch) was not used.
 */
export class ResendEmailSender implements EmailSender {
  constructor(private readonly apiKey: string) {
    if (!apiKey) throw new Error("RESEND_API_KEY is not configured");
  }

  send(message: EmailMessage): Promise<{ id?: string }> {
    const body = JSON.stringify({
      from: message.from,
      to: message.to,
      subject: message.subject,
      html: message.html,
      ...(message.replyTo ? { reply_to: message.replyTo } : {}),
    });

    return new Promise((resolve, reject) => {
      const req = https.request(
        {
          hostname: "api.resend.com",
          family: 4,
          path: "/emails",
          method: "POST",
          timeout: TIMEOUT_MS,
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(body),
          },
        },
        (res) => {
          let data = "";
          res.setEncoding("utf8");
          res.on("data", (chunk: string) => (data += chunk));
          res.on("end", () => {
            let parsed: { id?: string; message?: string } = {};
            try {
              parsed = data ? JSON.parse(data) : {};
            } catch {
              // Non-JSON response (e.g. gateway error page) — handled below.
            }
            const status = res.statusCode ?? 0;
            if (status >= 400 || status === 0) {
              reject(new Error(`Resend HTTP ${status}: ${parsed.message ?? "unknown error"}`));
            } else {
              resolve({ id: parsed.id });
            }
          });
        },
      );
      req.on("timeout", () => req.destroy(new Error("Resend request timed out")));
      req.on("error", reject);
      req.end(body);
    });
  }
}

let instance: EmailSender | null = null;

/** Lazily-created singleton so env is read at request time, not build time. */
export function getEmailSender(): EmailSender {
  instance ??= new ResendEmailSender(process.env.RESEND_API_KEY ?? "");
  return instance;
}
