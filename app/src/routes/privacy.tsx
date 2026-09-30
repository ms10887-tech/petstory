import { createFileRoute } from "@tanstack/react-router";
import { META_PIXEL_ENABLED, resetAdvertisingChoice } from "../components/MetaTracking";

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
              address. If you use the contact form, we receive your email
              address, selected subject, and message so we can reply.
            </p>

            <h2>What we use it for</h2>
            <p>
              We use newsletter addresses to send new stories and updates
              from The Pet Story Co. We use contact-form information only to
              respond to your message.
            </p>
            <p>
              You can unsubscribe from newsletter emails at any time using
              the link in each email.
            </p>

            <h2>What we don't do</h2>
            <ul>
              <li>We don't sell your email to anyone.</li>
              <li>We use Brevo to process newsletter subscriptions and contact messages, but do not sell your information to advertisers.</li>
              <li>We don't track you across other websites.</li>
              <li>We don't send spam.</li>
            </ul>

            <h2>Unsubscribing</h2>
            <p>
              Every email has an unsubscribe link. Click it, and you're off
              the list immediately. No hard feelings.
            </p>

            <h2>Advertising and analytics</h2>
            <p>
              If Meta ad measurement is enabled, we ask for your choice before
              loading the Meta Pixel. If you allow it, Meta may receive your
              page visits and clicks on our guide-offer links and may use
              cookies for ad measurement. If you decline, we do not load the
              Pixel. No purchase information is sent from our site; checkout
              happens on the publisher's website.
            </p>
            {META_PIXEL_ENABLED && (
              <button type="button" onClick={resetAdvertisingChoice} className="text-[#B8654A] underline">
                Change my advertising choice
              </button>
            )}

            <h2>Questions?</h2>
            <p>
              If you have questions about our privacy practices, please{" "}
              <a href="/contact" className="text-[#B8654A] underline">
                get in touch
              </a>
              .
            </p>

            <p className="text-sm text-[#5B5854]">
              Last updated: September 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
