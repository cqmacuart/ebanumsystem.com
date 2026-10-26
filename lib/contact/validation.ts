import { isServiceValue, type ServiceValue } from "./services";

export interface ContactInput {
  name: string;
  email: string;
  website: string | null;
  service: ServiceValue;
  message: string;
}

export type ValidationResult =
  | { ok: true; data: ContactInput }
  | { ok: false; error: string };

const LIMITS = { name: 200, email: 254, website: 500, message: 5000 } as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

function parseWebsite(raw: string): string | null | undefined {
  if (!raw) return null;
  try {
    const url = new URL(raw.includes("://") ? raw : `https://${raw}`);
    // Block javascript:, data:, etc. — this value ends up as a link in an email.
    return url.protocol === "http:" || url.protocol === "https:" ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

export function validateContact(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") return { ok: false, error: "Invalid payload" };
  const b = body as Record<string, unknown>;

  const name = str(b.name);
  const email = str(b.email);
  const service = str(b.service);
  const message = str(b.message);
  const website = parseWebsite(str(b.website));

  if (!name || !email || !service || !message) return { ok: false, error: "Required fields missing" };
  if (name.length > LIMITS.name) return { ok: false, error: "Name is too long" };
  if (email.length > LIMITS.email || !EMAIL_RE.test(email)) return { ok: false, error: "Invalid email" };
  if (message.length > LIMITS.message) return { ok: false, error: "Message is too long" };
  if (str(b.website).length > LIMITS.website || website === undefined) return { ok: false, error: "Invalid website URL" };
  if (!isServiceValue(service)) return { ok: false, error: "Invalid service" };

  return {
    ok: true,
    data: { name, email, website, service, message },
  };
}

/** Honeypot: real users never see or fill this field. */
export const HONEYPOT_FIELD = "company";
export const isBot = (body: unknown) =>
  !!body && typeof body === "object" && str((body as Record<string, unknown>)[HONEYPOT_FIELD]) !== "";
