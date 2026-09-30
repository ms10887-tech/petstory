import { createFileRoute } from "@tanstack/react-router";

const CONTACT_EMAIL = "hello@thepetstoryco.com";

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
          <div className="rounded-2xl border border-[#D8D3C9] bg-white p-8 text-center sm:p-12">
            <h2 className="text-2xl font-semibold text-[#1C1B1A]">Email us directly</h2>
            <p className="mx-auto mt-4 max-w-lg text-[#5B5854]">
              For questions, story ideas, press, or partnerships, write to us at:
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-5 inline-block break-all text-xl font-semibold text-[#B8654A] underline underline-offset-4"
            >
              {CONTACT_EMAIL}
            </a>
            <div className="mt-8">
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn-primary inline-flex">
                Write an email
              </a>
            </div>
            <p className="mt-5 text-sm text-[#5B5854]">
              If the button doesn't open your email app, copy the address above.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
