import type { EmailSender } from "@/lib/email/types";
import { SITE } from "@/lib/site";
import { contactEmailHtml, contactEmailSubject } from "./email-template";
import type { ContactInput } from "./validation";

/** Use case: deliver a validated contact request. Sender is injected (testable, swappable). */
export async function submitContact(input: ContactInput, sender: EmailSender) {
  return sender.send({
    from: SITE.email.noreply,
    to: SITE.email.support,
    replyTo: input.email,
    subject: contactEmailSubject(input),
    html: contactEmailHtml(input),
  });
}
