import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { sendContactMessage } from "../lib/api/brevo.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Pet Story Co." },
      {
        name: "description",
          content:
          "Get in touch with The Pet Story Co.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    setStatus("loading");
    try {
      await sendContactMessage({
        data: {
          email: String(fields.get("email") ?? ""),
          subject: String(fields.get("subject") ?? ""),
          message: String(fields.get("message") ?? ""),
          website: String(fields.get("website") ?? ""),
        },
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-[#FAF8F4]">
      <section className="border-b border-[#D8D3C9]">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <span className="eyebrow mb-4 block">Contact</span>
          <h1 className="text-4xl font-semibold tracking-tight text-[#1C1B1A] md:text-5xl">
            Say hello.
          </h1>
          <p className="mt-6 text-xl text-[#5B5854]">
            Questions, suggestions, or a story idea? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="rounded-2xl border border-[#D8D3C9] bg-white p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#1C1B1A]">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-[#D8D3C9] bg-[#FAF8F4] px-4 py-3 text-[#1C1B1A] placeholder:text-[#5B5854]/60 focus:border-[#B8654A] focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#1C1B1A]">
                  What's this about?
                </label>
                <select name="subject" className="w-full rounded-xl border border-[#D8D3C9] bg-[#FAF8F4] px-4 py-3 text-[#1C1B1A] focus:border-[#B8654A] focus:outline-none">
                  <option>General question</option>
                  <option>Story idea</option>
                  <option>Press / media</option>
                  <option>Partnership</option>
                  <option>Something else</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#1C1B1A]">
                  Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  minLength={10}
                  placeholder="Tell us what's on your mind..."
                  className="w-full rounded-xl border border-[#D8D3C9] bg-[#FAF8F4] px-4 py-3 text-[#1C1B1A] placeholder:text-[#5B5854]/60 focus:border-[#B8654A] focus:outline-none"
                />
              </div>
              <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <button type="submit" disabled={status === "loading"} className="btn-primary w-full justify-center disabled:opacity-60">
                {status === "loading" ? "Sending…" : "Send message"}
              </button>
            </form>
            <p className={`mt-4 text-center text-sm ${status === "error" ? "text-red-700" : "text-[#5D7257]"}`} aria-live="polite">
              {status === "success" && "Thanks! Your message has been sent."}
              {status === "error" && "We couldn't send your message. Please try again."}
            </p>
            <p className="mt-4 text-center text-xs text-[#5B5854]">
              We usually respond within 1-2 business days.
            </p>
          </div>

          <div className="mt-10 text-center">
            <p className="text-[#5B5854]">
              Or email us directly at{" "}
              <a href="mailto:hello@thepetstory.co" className="text-[#B8654A] underline">
                hello@thepetstory.co
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
