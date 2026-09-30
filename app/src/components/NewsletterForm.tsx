import { useState, type FormEvent } from "react";

import { subscribeToNewsletter } from "../lib/api/newsletter.functions";

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");

    try {
      const result = await subscribeToNewsletter({
        data: {
          email: String(data.get("EMAIL") ?? "").trim(),
          website: String(data.get("website") ?? ""),
        },
      });
      setStatus(result.success ? "success" : "error");
      if (result.success) form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={`mx-auto w-full max-w-[540px] ${compact ? "mt-6" : "mt-8"}`}>
      <form onSubmit={handleSubmit}>
        <label htmlFor={`newsletter-email-${compact ? "compact" : "full"}`} className="sr-only">
          Email address for The Pet Story Co. newsletter
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id={`newsletter-email-${compact ? "compact" : "full"}`}
            name="EMAIL"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder="Your email address"
            onChange={() => status !== "idle" && setStatus("idle")}
            className="min-w-0 flex-1 rounded-full border border-[#D9C7B5] bg-white px-5 py-3 text-[#302A27] outline-none transition focus:border-[#B8654A] focus:ring-2 focus:ring-[#B8654A]/25"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-full bg-[#B8654A] px-7 py-3 font-semibold text-white transition hover:bg-[#9F5037] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8654A]"
          >
            {status === "submitting" ? "Submitting…" : "Subscribe"}
          </button>
        </div>
        <input type="text" name="website" className="hidden" tabIndex={-1} aria-hidden="true" autoComplete="off" />
        <p className="mt-3 text-center text-sm text-[#5B5854]" role="status" aria-live="polite">
          {status === "success"
            ? "Almost done! Check your inbox and click the confirmation link to join."
            : status === "error"
              ? "We couldn't submit your email. Please try again in a moment."
              : "We'll email you a confirmation link. Please check your inbox after subscribing."}
        </p>
      </form>
    </div>
  );
}
