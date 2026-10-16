import { escapeHtml } from "@/lib/email/escape-html";
import { SITE } from "@/lib/site";
import { serviceLabel } from "./services";
import type { ContactInput } from "./validation";

const row = (label: string, valueHtml: string, extraTdStyle = "") => `
  <tr>
    <td style="padding:12px;background:#f5f5f5;font-weight:600;width:130px;vertical-align:top;">${label}</td>
    <td style="padding:12px;background:#fafafa;${extraTdStyle}">${valueHtml}</td>
  </tr>`;

/** All user input is escaped — the form must not be able to inject HTML into your inbox. */
export function contactEmailHtml(input: ContactInput): string {
  const name = escapeHtml(input.name);
  const email = escapeHtml(input.email);
  const website = input.website
    ? `<a href="${escapeHtml(input.website)}" style="color:#C9922A;">${escapeHtml(input.website)}</a>`
    : "—";

  return `
  <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#333;">
    <h2 style="color:#C9922A;margin-bottom:8px;">New Contact Form Submission</h2>
    <p style="color:#666;margin-bottom:24px;">Someone reached out via the ${SITE.name} contact form.</p>
    <table style="width:100%;border-collapse:collapse;">
      ${row("Name", name)}
      ${row("Email", `<a href="mailto:${email}" style="color:#C9922A;">${email}</a>`)}
      ${row("Website", website)}
      ${row("Service", escapeHtml(serviceLabel(input.service)))}
      ${row("Message", escapeHtml(input.message), "white-space:pre-wrap;")}
    </table>
    <p style="margin-top:24px;color:#999;font-size:12px;">Sent from ${new URL(SITE.url).host} — Contact form</p>
  </div>`;
}

export const contactEmailSubject = (input: ContactInput) =>
  // Strip CR/LF so input can never break the subject header.
  `New Contact Form — ${input.name} (${serviceLabel(input.service)})`.replace(/[\r\n]+/g, " ");
