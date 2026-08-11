import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — The Pet Story Co." },
      {
        name: "description",
          content:
          "Our privacy policy. How we handle your data and what we do with email addresses.",
      },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="bg-[#FAF8F4]">
      <section className="border-b border-[#D8D3C9]">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <span className="eyebrow mb-4 block">Legal</span>
          <h1 className="text-4xl font-semibold tracking-tight text-[#1C1B1A] md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-xl text-[#5B5854]">
            How we handle your data. Short, honest, no fine print.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="prose-custom">
            <h2>What we collect</h2>
            <p>
              If you subscribe to our email list, we collect your email
              address. That's it. No tracking pixels. No selling to third
              parties. No building secret profiles.
            </p>

            <h2>What we use it for</h2>
            <p>
              We use your email address to send you new stories and updates
              from The Pet Story Co. That's the whole reason you signed up,
              right?
            </p>
            <p>
              We'll never send you more than one email per story. No weekly
              newsletters. No daily digests. Just a note when there's
              something new worth your time.
            </p>

            <h2>What we don't do</h2>
            <ul>
              <li>We don't sell your email to anyone.</li>
              <li>We don't share your data with third parties for marketing purposes.</li>
              <li>We don't track you across other websites.</li>
              <li>We don't send spam.</li>
            </ul>

            <h2>Unsubscribing</h2>
            <p>
              Every email has an unsubscribe link. Click it, and you're off
              the list immediately. No hard feelings.
            </p>

            <h2>Analytics</h2>
            <p>
              We use basic website analytics to understand how many people
              visit the site and which pages they read. This data is
              anonymized and used only to improve the site.
            </p>

            <h2>Cookies</h2>
            <p>
              We use minimal cookies to remember basic preferences. No
              third-party advertising cookies. No cross-site tracking.
            </p>

            <h2>Questions?</h2>
            <p>
              If you have questions about our privacy practices, please{" "}
              <a href="/contact" className="text-[#B8654A] underline">
                get in touch
              </a>
              .
            </p>

            <p className="text-sm text-[#5B5854]">
              Last updated: July 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
