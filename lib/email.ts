import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

/**
 * Resend client + helpers for delivering form submissions to your inbox.
 *
 * Setup:
 *   1. Create a free account at https://resend.com
 *   2. Create an API key (Dashboard → API Keys)
 *   3. Add it to .env.local as RESEND_API_KEY=re_xxxxxxxx
 *   4. On the free tier you can send FROM "onboarding@resend.dev" TO the
 *      email you signed up with. To use your own domain later, verify it in
 *      Resend and change EMAIL_FROM below.
 */

const resendApiKey = process.env.RESEND_API_KEY;

// Where the notification lands — defaults to your public contact email.
const TO_EMAIL = process.env.EMAIL_TO ?? siteConfig.contact.email;

// On the free tier keep this as onboarding@resend.dev (no domain needed).
const FROM_EMAIL = process.env.EMAIL_FROM ?? "Portfolio <onboarding@resend.dev>";

const resend = resendApiKey ? new Resend(resendApiKey) : null;

type EmailPayload = {
  subject: string;
  /** [label, value] rows rendered into the email body. */
  rows: [string, string | undefined][];
  /** Reply-To so you can just hit "reply" to answer the sender. */
  replyTo?: string;
};

function renderHtml(rows: [string, string | undefined][]) {
  const items = rows
    .filter(([, value]) => value && value.trim() !== "")
    .map(
      ([label, value]) =>
        `<tr>
           <td style="padding:8px 12px;font-weight:600;color:#111;vertical-align:top;white-space:nowrap">${label}</td>
           <td style="padding:8px 12px;color:#333;white-space:pre-wrap">${escapeHtml(
             value as string
           )}</td>
         </tr>`
    )
    .join("");

  return `<div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px">
    <table style="width:100%;border-collapse:collapse;border:1px solid #eee;border-radius:8px;overflow:hidden">
      ${items}
    </table>
  </div>`;
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Sends a form submission to your inbox.
 * Returns { ok: false } (without throwing) if delivery isn't configured,
 * so the API route can decide how to respond.
 */
export async function sendFormEmail({ subject, rows, replyTo }: EmailPayload) {
  if (!resend) {
    console.warn(
      "[email] RESEND_API_KEY not set — skipping email. Add it to .env.local."
    );
    return { ok: false as const, skipped: true as const };
  }

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject,
    replyTo,
    html: renderHtml(rows),
  });

  if (error) {
    console.error("[email] Resend error:", error);
    return { ok: false as const, skipped: false as const };
  }

  return { ok: true as const };
}
