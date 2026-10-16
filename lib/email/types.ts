export interface EmailMessage {
  from: string;
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

/**
 * Abstraction over the email provider (Dependency Inversion):
 * business logic depends on this interface, not on Resend.
 */
export interface EmailSender {
  send(message: EmailMessage): Promise<{ id?: string }>;
}
