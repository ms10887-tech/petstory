import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/disclosure")({
  head: () => ({
    meta: [
      { title: "Affiliate Disclosure — The Pet Story Co." },
      {
        name: "description",
          content:
          "Our affiliate disclosure. How we make recommendations and how affiliate links work.",
      },
    ],
  }),
  component: Disclosure,
});

function Disclosure() {
  return (
    <div className="bg-[#FAF8F4]">
      <section className="border-b border-[#D8D3C9]">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <span className="eyebrow mb-4 block">Legal</span>
          <h1 className="text-4xl font-semibold tracking-tight text-[#1C1B1A] md:text-5xl">
            Affiliate Disclosure
          </h1>
          <p className="mt-6 text-xl text-[#5B5854]">
            How we make recommendations and what affiliate links mean.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="prose-custom">
            <h2>What are affiliate links?</h2>
            <p>
              Some of the links on this website are affiliate links. That means
              if you click through and make a purchase, we may receive a small
              commission at no additional cost to you.
            </p>

            <h2>How we decide what to recommend</h2>
            <p>
              We only recommend products and services that we believe genuinely
              solve a real problem. Every recommendation starts with a story —
              a real issue that dogs and their owners actually face. If a
              product can help with that issue, and we believe it's good value,
              we may recommend it.
            </p>
            <p>
              We do not reverse-engineer stories to sell products. The story
              always comes first. The product recommendation follows only if
              it makes sense within the story.
            </p>

            <h2>What you should know</h2>
            <ul>
              <li>The price you pay is always the same — it never costs you extra to use our links.</li>
              <li>We earn a commission only if you decide to buy through our link.</li>
              <li>Affiliate commissions are how we fund the creation of more stories.</li>
              <li>Our recommendations are honest. We never recommend something we don't believe in just for the commission.</li>
            </ul>

            <h2>Dog training disclaimer</h2>
            <p>
              The content on this website is for educational purposes only and
              is not intended as professional veterinary or behavioral therapy
              advice. Individual results may vary based on effort, consistency,
              your dog's temperament, age, and adherence to any program
              guidelines.
            </p>
            <p>
              Always consult with your veterinarian before beginning any new
              training program, especially if your dog has existing health or
              behavioral issues. This content is not a substitute for
              professional veterinary care or certified animal behaviorist
              consultation when needed.
            </p>

            <h2>Questions?</h2>
            <p>
              If you have questions about this disclosure or any of our
              recommendations, please <a href="/contact" className="text-[#B8654A] underline">get in touch</a>.
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
