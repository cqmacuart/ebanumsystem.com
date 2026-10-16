import { NextRequest, NextResponse } from "next/server";
import { getEmailSender } from "@/lib/email/resend-sender";
import { submitContact } from "@/lib/contact/submit-contact";
import { isBot, validateContact } from "@/lib/contact/validation";
import { clientIp, createRateLimiter } from "@/lib/http/rate-limit";

const MAX_BODY_BYTES = 16 * 1024;
const rateLimit = createRateLimiter({ limit: 5, windowMs: 10 * 60 * 1000 });

/** Thin controller: parse → guard → validate → delegate to the use case. */
export async function POST(req: NextRequest) {
  const { allowed, retryAfterSec } = rateLimit(clientIp(req.headers));
  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": String(retryAfterSec) } },
    );
  }

  if (Number(req.headers.get("content-length") ?? 0) > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Payload too large" }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Pretend success so bots don't learn they were filtered.
  if (isBot(body)) return NextResponse.json({ success: true });

  const result = validateContact(body);
  if (!result.ok) return NextResponse.json({ error: result.error }, { status: 400 });

  try {
    const { id } = await submitContact(result.data, getEmailSender());
    console.info("contact: email sent", id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("contact: email failed", err instanceof Error ? err.message : err);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }
}
