import { FormEvent, useState } from "react";
import { subscribeToNewsletter } from "../lib/api/brevo.functions";

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    try {
      await subscribeToNewsletter({ data: { email, website: "" } });
      setEmail("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <form className={`mx-auto flex flex-col gap-3 sm:flex-row ${compact ? "mt-6 max-w-sm" : "mt-8 max-w-md"}`} onSubmit={handleSubmit}>
        <input type="email" name="email" required autoComplete="email" aria-label="Email address" value={email}
          onChange={(event) => setEmail(event.target.value)} placeholder="your@email.com"
          className={`flex-1 rounded-full border border-[#D8D3C9] bg-white px-5 text-[#1C1B1A] placeholder:text-[#5B5854]/60 focus:border-[#B8654A] focus:outline-none ${compact ? "py-2.5 text-sm" : "py-3"}`} />
        <button type="submit" disabled={status === "loading"} className="btn-sage disabled:opacity-60">
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
      <p className={`mt-3 text-sm ${status === "error" ? "text-red-700" : "text-[#5D7257]"}`} aria-live="polite">
        {status === "success" && "You're in! The next story will arrive in your inbox."}
        {status === "error" && "Something went wrong. Please try again."}
      </p>
    </div>
  );
}
