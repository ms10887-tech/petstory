import { createFileRoute, Link } from "@tanstack/react-router";
import { trackGuideOfferClick } from "../../components/MetaTracking";

const GUIDE_URL = "https://www.betterdailyguide.site/ds24/potty-training-in-7-days#aff=ms10887";

export const Route = createFileRoute("/recommend/potty-training")({
  head: () => ({
    meta: [
      { title: "Potty Training in 7 Days: Offer Overview — The Pet Story Co." },
      {
        name: "description",
          content:
          "An independent overview of the publisher's Potty Training in 7 Days offer, its advertised contents, and the limits behind the seven-day claim.",
      },
      { property: "og:title", content: "Potty Training in 7 Days: Offer Overview — The Pet Story Co." },
      {
        property: "og:description",
        content: "What the publisher says is included, who the offer may suit, and why seven days is not a guarantee. We have not tested the guide.",
      },
      { property: "og:url", content: "https://thepetstoryco.com/recommend/potty-training" },
      { name: "twitter:title", content: "Potty Training in 7 Days: Offer Overview — The Pet Story Co." },
      {
        name: "twitter:description",
        content: "An independent look at the publisher's offer and its seven-day claim. We have not tested the guide.",
      },
    ],
    links: [{ rel: "canonical", href: "https://thepetstoryco.com/recommend/potty-training" }],
  }),
  component: PottyTrainingRecommend,
});

function PottyTrainingRecommend() {
  const productImages = [
    { src: "/products/potty-training-7-days/main-guide.png", alt: "Potty Training in 7 Days digital guide cover", label: "Main guide" },
    { src: "/products/potty-training-7-days/bonus-crate-training.png", alt: "Crate Training Mastery bonus guide cover", label: "Crate training" },
    { src: "/products/potty-training-7-days/bonus-cleanup.png", alt: "Emergency Cleanup and Odor Elimination bonus guide cover", label: "Cleanup guide" },
    { src: "/products/potty-training-7-days/bonus-puppy-fast-track.png", alt: "Puppy Potty Training Fast-Track bonus guide cover", label: "Puppy fast-track" },
    { src: "/products/potty-training-7-days/bonus-apartment.png", alt: "Apartment and Small Space Solutions bonus guide cover", label: "Apartment guide" },
  ];

  return (
    <div className="bg-[#FAF8F4]">
      {/* Hero */}
      <section className="border-b border-[#D8D3C9]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Link to="/recommend" className="text-sm text-[#B8654A] hover:underline">
            ← All recommendations
          </Link>

          <div className="mt-6">
            <span className="eyebrow mb-4 block">Affiliate offer overview</span>
            <h1 className="text-4xl font-semibold tracking-tight text-[#1C1B1A] md:text-5xl">
              Potty Training in 7 Days
            </h1>
            <p className="mt-6 text-xl text-[#5B5854]">
              What the publisher says is included, who it may suit, and what
              to check before you buy.
            </p>
          </div>

          {/* Disclosure */}
          <div className="mt-8 rounded-xl border border-[#D8D3C9] bg-[#F3EFE7] p-4">
            <p className="text-sm text-[#5B5854]">
              <strong>Affiliate disclosure:</strong> If you buy through links on
              this page, we may earn a commission at no extra cost to you. We
              have not purchased or independently tested the guide. This page
              evaluates the public offer, not the results of the product itself.
            </p>
          </div>
          <a
            href={GUIDE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackGuideOfferClick}
            className="btn-primary mt-6 inline-flex"
          >
            View the guide offer
          </a>
          <p className="mt-2 text-xs text-[#5B5854]">
            Affiliate link · Check the publisher's current price and terms before buying.
          </p>
        </div>
      </section>

      {/* Product view */}
      <section className="border-b border-[#D8D3C9] bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow mb-3 block">Advertised bundle</span>
            <h2 className="text-2xl font-semibold text-[#1C1B1A] md:text-3xl">
              What the publisher says is included
            </h2>
            <p className="mt-3 text-[#5B5854]">
              The sales page currently advertises one main guide and four bonus
              guides as digital PDF downloads. Confirm the bundle at checkout.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
            <figure className="overflow-hidden rounded-2xl border border-[#D8D3C9] bg-[#F3EFE7] p-5 sm:p-8">
              <img
                src={productImages[0].src}
                alt={productImages[0].alt}
                className="mx-auto aspect-[2/3] max-h-[580px] w-full object-contain drop-shadow-xl"
              />
              <figcaption className="mt-5 text-center text-sm font-medium text-[#5B5854]">
                Main guide · Potty Training in 7 Days
              </figcaption>
            </figure>

            <div className="grid grid-cols-2 gap-4">
              {productImages.slice(1).map((image) => (
                <figure
                  key={image.src}
                  className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#D8D3C9] bg-[#FAF8F4] p-3 sm:p-4"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="mx-auto aspect-[2/3] min-h-0 w-full flex-1 object-contain drop-shadow-md"
                  />
                  <figcaption className="mt-3 text-center text-xs font-medium text-[#5B5854] sm:text-sm">
                    {image.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-[#5B5854]">
            The publisher controls the digital product, delivery, pricing, and
            bundle contents. These cover images do not verify what is inside
            the files. No physical books are shipped.
          </p>
        </div>
      </section>

      {/* Quick verdict */}
      <section className="border-b border-[#D8D3C9] bg-[#F3EFE7]">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-[#1C1B1A]">Our take on the offer</h2>
            <div className="prose-custom mt-4">
              <p>
                The sales page describes a day-by-day potty-training plan,
                schedules for busy owners, and troubleshooting topics. That
                may appeal to owners who want a written plan.
              </p>
              <p>
                We like the emphasis on consistency and avoiding punishment.
                Those ideas match the approach we show in our stories, but we
                have not verified how well the paid guide teaches them.
              </p>
              <p>
                The publisher's seven-day promise is much stronger than we can
                verify. Some dogs take longer, and medical or behavioral issues
                may require a veterinarian or qualified professional.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border border-[#D8D3C9] bg-white p-5">
              <p className="text-xs font-medium text-[#B8654A]">May interest</p>
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
                Advertised price; verify the total at checkout
              </p>
            </div>
            <a
              href={GUIDE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackGuideOfferClick}
              className="btn-primary w-full justify-center"
            >
              View the publisher's offer
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
          <h2 className="text-2xl font-semibold text-[#1C1B1A]">What the sales page describes</h2>
          <div className="prose-custom mt-6">
            <p>
              We have not seen the paid PDF, so these are the publisher's
              descriptions, not independently verified contents:
            </p>
            <ul>
              <li>A day-by-day training plan and schedules intended for busy households.</li>
              <li>Guidance on noticing your dog's signals before an accident.</li>
              <li>Troubleshooting topics such as nighttime accidents and setbacks.</li>
              <li>Adjustments the publisher says are provided for different ages and homes.</li>
            </ul>
            <p>
              The advertised bonuses cover crate training, cleanup, puppies,
              and apartment living. The seller can change the offer, so check
              the current checkout details before buying.
            </p>
          </div>
        </div>
      </section>

      {/* What we like */}
      <section className="border-b border-[#D8D3C9] bg-[#F3EFE7]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-[#1C1B1A]">What appeals to us about the offer</h2>
          <div className="mt-6 space-y-6">
            {[
              {
                title: "It's built around consistency, not punishment",
                body: "The publisher emphasizes a consistent routine and says it avoids punishment. We support that approach, but have not assessed the paid instructions.",
              },
              {
                title: "It addresses busy schedules",
                body: "The publisher says the guide includes schedules for people who work full-time. Check the offer details to see whether the suggested routine fits your own day.",
              },
              {
                title: "It discusses different dogs",
                body: "The offer is presented for puppies and older dogs, but their needs and progress can differ. A guide cannot promise the same outcome for every dog.",
              },
              {
                title: "It includes the apartment / no-yard scenario",
                body: "The advertised bundle includes an apartment and small-space guide. Check the publisher's current bundle contents before buying.",
              },
              {
                title: "The price is accessible",
                body: "The price was approximately $19 when we checked. Confirm the current total and terms on the publisher's checkout before paying.",
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
          <h2 className="text-2xl font-semibold text-[#1C1B1A]">What gives us pause</h2>
          <p className="mt-4 text-[#5B5854]">
            These points matter before choosing any paid training guide.
          </p>
          <div className="mt-6 space-y-6">
            {[
              {
                title: "The sales page uses bold claims",
                body: "The sales page makes strong claims about results ('works for ANY dog,' 'fully trained in 7 days'). In reality, results vary. Some dogs take longer. Some have medical or behavioral issues this guide alone can't fix. Don't take the sales copy literally.",
              },
              {
                title: "It's a digital PDF, not video",
                body: "The offer describes a written digital guide, not video lessons. If you prefer demonstrations, check the format carefully before buying.",
              },
              {
                title: "It requires consistency",
                body: "Training usually takes repeated practice, and no schedule guarantees a result within a week. Your dog's needs may call for a different pace or professional advice.",
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
            <h3 className="text-xl font-semibold text-[#1C1B1A]">Who may want to look closer</h3>
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
            <h3 className="text-xl font-semibold text-[#1C1B1A]">When a guide may not be enough</h3>
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
            If it sounds useful, check the offer.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#5B5854]">
            Review the publisher's current price, bundle, and refund terms
            before buying. The seven-day timeline is not a guaranteed result
            for every dog.
          </p>
          <a
            href={GUIDE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackGuideOfferClick}
            className="btn-primary mt-8 inline-flex"
          >
            View the publisher's offer
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
