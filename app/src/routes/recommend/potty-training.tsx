import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/recommend/potty-training")({
  head: () => ({
    meta: [
      { title: "Potty Training Method Recommendation — The Pet Story Co." },
      {
        name: "description",
          content:
          "Our honest review of a 7-day structured potty training method that works with a dog's natural instincts. For puppies, adults, and rescues.",
      },
    ],
  }),
  component: PottyTrainingRecommend,
});

function PottyTrainingRecommend() {
  return (
    <div className="bg-[#FAF8F4]">
      {/* Hero */}
      <section className="border-b border-[#D8D3C9]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Link to="/recommend" className="text-sm text-[#B8654A] hover:underline">
            ← All recommendations
          </Link>

          <div className="mt-6">
            <span className="eyebrow mb-4 block">Our recommendation</span>
            <h1 className="text-4xl font-semibold tracking-tight text-[#1C1B1A] md:text-5xl">
              Potty Training in 7 Days
            </h1>
            <p className="mt-6 text-xl text-[#5B5854]">
              A structured method that works with a dog's natural instincts
              instead of punishing the confusion. Here's what we think of it.
            </p>
          </div>

          {/* Disclosure */}
          <div className="mt-8 rounded-xl border border-[#D8D3C9] bg-[#F3EFE7] p-4">
            <p className="text-sm text-[#5B5854]">
              <strong>Affiliate disclosure:</strong> If you buy through links on
              this page, we may earn a commission at no extra cost to you. We
              only recommend what we believe genuinely helps. This review is our
              honest opinion.
            </p>
          </div>
        </div>
      </section>

      {/* Quick verdict */}
      <section className="border-b border-[#D8D3C9] bg-[#F3EFE7]">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-[#1C1B1A]">Our quick verdict</h2>
            <div className="prose-custom mt-4">
              <p>
                This is the most complete, most practical potty training guide
                we've found for people who work full-time and don't have hours
                a day to dedicate to training.
              </p>
              <p>
                What we like most: the whole method is built around the idea
                that dogs learn through clear, consistent patterns, not through
                punishment. That matches exactly what we try to show in our
                stories.
              </p>
              <p>
                What you should know: "7 days" is a guide, not a guarantee.
                Some dogs take longer. Some have medical or behavioral issues
                this guide can't solve. It works best when you can follow the
                schedule consistently.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border border-[#D8D3C9] bg-white p-5">
              <p className="text-xs font-medium text-[#B8654A]">Best for</p>
              <ul className="mt-3 space-y-1.5 text-sm text-[#5B5854]">
                <li>• New puppy owners</li>
                <li>• Busy people who work full-time</li>
                <li>• Rescue dogs with unknown history</li>
                <li>• Anyone who's tried other methods and failed</li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#D8D3C9] bg-white p-5">
              <p className="text-xs font-medium text-[#B8654A]">Price</p>
              <p className="mt-2 text-2xl font-semibold text-[#1C1B1A]">
                ~$19
              </p>
              <p className="mt-1 text-xs text-[#5B5854]">
                Digital guide, one-time payment
              </p>
            </div>
            <a
              href="https://www.betterdailyguide.site/ds24/potty-training-in-7-days#aff=ms10887"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              Get the method
            </a>
            <p className="text-center text-xs text-[#5B5854]">
              Affiliate link · We may earn a commission
            </p>
          </div>
        </div>
      </section>

      {/* What's in it */}
      <section className="border-b border-[#D8D3C9]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-[#1C1B1A]">What's in the method</h2>
          <div className="prose-custom mt-6">
            <p>
              The guide is built around a simple 3-phase framework that
              progresses over 7 days:
            </p>

            <h3>Phase 1 — Pattern establishment (Days 1-2)</h3>
            <p>
              Setting up a consistent schedule that matches your dog's natural
              elimination rhythm. Same times, same place, same cue word. No
              punishment. No confusion. Just a clear routine.
            </p>

            <h3>Phase 2 — Signal recognition (Days 3-5)</h3>
            <p>
              Learning to read your dog's "I need to go" signals before the
              accident happens. Circling, sniffing, sudden silence, heading
              toward a corner. Most accidents are predictable if you know what
              to watch for.
            </p>

            <h3>Phase 3 — Independence building (Days 6-7)</h3>
            <p>
              Moving from a strict schedule to a more flexible routine where
              your dog communicates their needs to you. The goal is a dog who
              tells you when they need to go, not one who depends on you
              watching the clock.
            </p>

            <p>
              The guide also includes bonus sections on crate training,
              emergency cleanup and odor removal, puppy-specific modifications,
              and strategies for apartment living without a yard.
            </p>
          </div>
        </div>
      </section>

      {/* What we like */}
      <section className="border-b border-[#D8D3C9] bg-[#F3EFE7]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-[#1C1B1A]">What we like about it</h2>
          <div className="mt-6 space-y-6">
            {[
              {
                title: "It's built around consistency, not punishment",
                body: "This is the biggest one. The entire method is based on preventing accidents through a clear routine, not on correcting your dog after the fact. Dogs don't understand punishment after the fact — they just learn to fear you.",
              },
              {
                title: "It's designed for busy people",
                body: "Most potty training advice assumes you're home all day. This guide was written specifically for people who work full-time. It includes schedules that work around typical 9-to-5 hours and strategies for when you can't be there.",
              },
              {
                title: "It works for all ages",
                body: "Puppies, adult rescues, even senior dogs who never got the hang of it. The principles are the same — you just adjust the schedule and expectations. That's important for a brand that might grow into different stories.",
              },
              {
                title: "It includes the apartment / no-yard scenario",
                body: "A lot of guides only cover houses with backyards. This one has a full section on high-rises, balconies, grass pads, and indoor alternatives.",
              },
              {
                title: "The price is accessible",
                body: "At roughly $19, it's cheaper than one carpet cleaning or one hour with a trainer. If it works, you've saved way more than the cost.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-[#D8D3C9] bg-white p-6">
                <h3 className="text-lg font-semibold text-[#1C1B1A]">{item.title}</h3>
                <p className="mt-2 text-[#5B5854]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we don't love */}
      <section className="border-b border-[#D8D3C9]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-[#1C1B1A]">What we don't love</h2>
          <p className="mt-4 text-[#5B5854]">
            Honest review means mentioning the downsides too.
          </p>
          <div className="mt-6 space-y-6">
            {[
              {
                title: "The sales page uses bold claims",
                body: "The sales page makes strong claims about results ('works for ANY dog,' 'fully trained in 7 days'). In reality, results vary. Some dogs take longer. Some have medical or behavioral issues this guide alone can't fix. Don't take the sales copy literally.",
              },
              {
                title: "It's a digital PDF, not video",
                body: "The main product is a written guide. Some people learn better from video demonstrations. The guide is clear and well-structured, but if you need to see it done, you won't find that here.",
              },
              {
                title: "It requires consistency",
                body: "This is less a criticism of the method and more a reality check. It works — if you follow it consistently. If you can't stick to the schedule for the first week, you'll see slower results.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-[#D8D3C9] bg-white p-6">
                <h3 className="text-lg font-semibold text-[#1C1B1A]">{item.title}</h3>
                <p className="mt-2 text-[#5B5854]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for / not for */}
      <section className="border-b border-[#D8D3C9] bg-[#F3EFE7]">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 py-16 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-[#1C1B1A]">Who this is for</h3>
            <ul className="mt-4 space-y-3">
              {[
                "New puppy owners who feel overwhelmed",
                "People who work full-time and can't be home all day",
                "Rescue dog owners whose dog never got house training",
                "Anyone who's tried other methods and they didn't work",
                "People who want a clear, step-by-step plan",
                "Apartment dwellers without a yard",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#5B5854]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7A8C6F" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#1C1B1A]">Who this is NOT for</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Dogs with medical issues causing accidents (see a vet first)",
                "People who can't commit to a consistent week of training",
                "Anyone looking for a 'magic pill' with zero effort",
                "Dogs with severe anxiety or trauma (may need a professional)",
                "If your dog has health issues — always consult a vet first",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#5B5854]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B8654A" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold text-[#1C1B1A] md:text-3xl">
            If it feels like a match, give it a try.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#5B5854]">
            It's about the cost of one carpet cleaning. And it comes with a
            60-day money-back guarantee, so if it doesn't work for you and
            your dog, you haven't lost anything.
          </p>
          <a
            href="https://www.betterdailyguide.site/ds24/potty-training-in-7-days#aff=ms10887"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex"
          >
            Get the method
          </a>
          <p className="mt-4 text-xs text-[#5B5854]">
            Affiliate link · We may earn a commission at no extra cost to you
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-[#D8D3C9] bg-[#F3EFE7]">
        <div className="mx-auto max-w-3xl px-6 py-10">
          <p className="text-sm text-[#5B5854]">
            <strong>Disclaimer:</strong> This information is for educational
            purposes only and is not intended as professional veterinary or
            behavioral therapy advice. Individual results may vary based on
            effort, consistency, your dog's temperament, age, and adherence to
            the program guidelines. Always consult with your veterinarian
            before beginning any new training program, especially if your dog
            has existing health or behavioral issues. This product does not
            guarantee specific results and is not a substitute for professional
            veterinary care or certified animal behaviorist consultation when
            needed.
          </p>
        </div>
      </section>
    </div>
  );
}
