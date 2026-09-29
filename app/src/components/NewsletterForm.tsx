import { useId, useState } from "react";

const SIGNUP_ACTION =
  "https://e4a79429.sibforms.com/serve/MUIFAOIK5XZMvQ1n_4dNoHrXduIgnc53dPRzUdEQAA3vL-4CnDTuvE-_cix1OIviJASkLzqTZpY9Q9A08eToS_vOIyMXxhPyriA1lWkzXXERB8KCH1qNyWejljxV3FVVu0lNCFHRGbJGWY5D1suXBYmKTwR65QB76d-V06s3Hdcs_QIBqGFwf-ykVLi3kCGKyOa4a52ZLbo5pJidhg==";

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const frameName = `newsletter-result-${useId().replace(/:/g, "")}`;
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  return (
    <div className={`mx-auto w-full max-w-[540px] ${compact ? "mt-6" : "mt-8"}`}>
      {status === "sent" && (
        <p role="status" className="rounded-2xl bg-white px-6 py-5 text-center text-[#302A27]">
          Almost done! Check your inbox and click the confirmation link to join The Pet Story Co. newsletter.
        </p>
      )}
      <form
        action={SIGNUP_ACTION}
        method="POST"
        target={frameName}
        onSubmit={() => setStatus("submitting")}
        className={status === "sent" ? "hidden" : undefined}
      >
        <label htmlFor={`newsletter-email-${compact ? "compact" : "full"}`} className="sr-only">
          Email address for The Pet Story Co. newsletter
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id={`newsletter-email-${compact ? "compact" : "full"}`}
            name="EMAIL"
            type="email"
            required
            autoComplete="email"
            placeholder="Your email address"
            className="min-w-0 flex-1 rounded-full border border-[#D9C7B5] bg-white px-5 py-3 text-[#302A27] outline-none transition focus:border-[#B8654A] focus:ring-2 focus:ring-[#B8654A]/25"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-full bg-[#B8654A] px-7 py-3 font-semibold text-white transition hover:bg-[#9F5037] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8654A] disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : "Subscribe"}
          </button>
        </div>
        <input type="text" name="email_address_check" value="" readOnly className="hidden" tabIndex={-1} aria-hidden="true" />
        <input type="hidden" name="locale" value="en" />
        <input type="hidden" name="html_type" value="simple" />
        <p className="mt-3 text-center text-xs text-[#5B5854]">
          Check your inbox to confirm your subscription.
        </p>
      </form>
      <iframe
        name={frameName}
        title="Newsletter signup response"
        className="hidden"
        onLoad={() => {
          if (status === "submitting") setStatus("sent");
        }}
      />
    </div>
  );
}
