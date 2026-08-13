import { createServerFn } from "@tanstack/react-start";
import process from "node:process";
import { z } from "zod";

const BREVO_API = "https://api.brevo.com/v3";
const NEWSLETTER_LIST_ID = 8;

function apiKey() {
  const value = process.env.BREVO_API_KEY;
  if (!value) throw new Error("Email service is not configured.");
  return value;
}

async function brevo(path: string, body: unknown) {
  const response = await fetch(`${BREVO_API}${path}`, {
    method: "POST",
    headers: { accept: "application/json", "api-key": apiKey(), "content-type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    console.error("Brevo request failed", response.status, await response.text());
    throw new Error("We couldn't complete that request. Please try again.");
  }
}

export const subscribeToNewsletter = createServerFn({ method: "POST" })
  .validator(z.object({ email: z.string().trim().email(), website: z.string().max(0).optional() }))
  .handler(async ({ data }) => {
    if (data.website) return { ok: true };
    await brevo("/contacts", { email: data.email.toLowerCase(), listIds: [NEWSLETTER_LIST_ID], updateEnabled: true });
    return { ok: true };
  });

const contactSchema = z.object({
  email: z.string().trim().email(),
  subject: z.string().trim().min(1).max(80),
  message: z.string().trim().min(10).max(5000),
  website: z.string().max(0).optional(),
});

function escapeHtml(value: string) {
  const entities: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" };
  return value.replace(/[&<>'"]/g, (character) => entities[character]);
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator(contactSchema)
  .handler(async ({ data }) => {
    if (data.website) return { ok: true };
    const safeEmail = escapeHtml(data.email);
    const safeSubject = escapeHtml(data.subject);
    const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br />");
    await brevo("/smtp/email", {
      sender: { name: "The Pet Story Co.", email: "moneymail766@gmail.com" },
      to: [{ name: "The Pet Story Co.", email: "ms10887@gmail.com" }],
      replyTo: { email: data.email },
      subject: `[Pet Story website] ${data.subject}`,
      htmlContent: `<html><body style="font-family:Arial,sans-serif;color:#1c1b1a"><h2>New website message</h2><p><strong>From:</strong> ${safeEmail}</p><p><strong>Topic:</strong> ${safeSubject}</p><hr><p>${safeMessage}</p></body></html>`,
    });
    return { ok: true };
  });
