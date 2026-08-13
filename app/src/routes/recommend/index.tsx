import { createFileRoute, Link } from "@tanstack/react-router";
import { NewsletterForm } from "../../components/NewsletterForm";

const AMAZON_TAG = "wisepawsstori-20";

function amazonLink(asin: string): string {
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

export const Route = createFileRoute("/recommend/")({
  head: () => ({
    meta: [
      { title: "Recommendations — The Pet Story Co." },
      {
        name: "description",
        content:
          "Products and methods we recommend for real pet problems. Each one earned its place through a story.",
      },
    ],
  }),
  component: RecommendIndex,
});

type Product = {
  title: string;
  excerpt: string;
  category: string;
  price?: string;
  image?: string;
  type: "review" | "amazon";
  url?: string;
  asin?: string;
  featured?: boolean;
};

function RecommendIndex() {
  const recommendations: Product[] = [
    {
      title: "Potty Training in 7 Days",
      excerpt:
        "A structured 7-day method that works with a dog's natural instincts instead of against them. For puppies, rescues, and even adults who never quite got it.",
      category: "Potty training",
      url: "/recommend/potty-training",
      type: "review",
      price: "~$19",
      image: "/products/potty-training-7-days/main-guide.png",
      featured: true,
    },
    {
      title: "Glad for Pets Activated Carbon Training Pads",
      excerpt:
        "Disposable training pads with activated carbon for odor control and a leak-resistant design. A practical option for the first weeks of potty training or apartment living.",
      category: "Potty training",
      asin: "B08D3Y5YVB",
      type: "amazon",
      image: "/products/amazon/glad-pads.png",
      featured: true,
    },
    {
      title: "GREEN LIFESTYLE Washable Pee Pads",
      excerpt:
        "Reusable, machine-washable pads with a non-slip backing. A useful lower-waste alternative to disposable pads for repeat accidents and indoor training areas.",
      category: "Potty training",
      asin: "B09G4CKKYT",
      type: "amazon",
      image: "/products/amazon/green-lifestyle-pads.jpg",
    },
    {
      title: "Rocco & Roxie Stain & Odor Eliminator",
      excerpt:
        "An enzyme-based cleaner made for pet stains and odors on carpets and other water-safe surfaces. A sensible cleanup companion while your puppy is still learning.",
      category: "Cleaning",
      asin: "B00CKFL93K",
      type: "amazon",
      image: "/products/amazon/rocco-roxie-cleaner.png",
      featured: true,
    },
    {
      title: "Wellness Soft Puppy Bites Training Treats",
      excerpt:
        "Soft, bite-sized puppy treats that are easy to use as quick rewards. Keep portions small and reward immediately after your puppy toilets in the right place.",
      category: "Treats",
      asin: "B08MV5Y4BM",
      type: "amazon",
      image: "/products/amazon/wellness-puppy-bites.jpg",
    },
    {
      title: "PoochieBells Adjustable Dog Doorbell",
      excerpt:
        "Adjustable door bells you can teach your puppy to ring before going outside. They support a clear potty routine and can be positioned at your dog's nose height.",
      category: "Potty training",
      asin: "B07NJ1YKBJ",
      type: "amazon",
      image: "/products/amazon/poochiebells.jpg",
    },
  ];

  return (
    <div className="bg-[#FAF8F4]">
      {/* Hero */}
      <section className="border-b border-[#D8D3C9]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="eyebrow mb-4 block">Recommendations</span>
          <h1 className="text-4xl font-semibold tracking-tight text-[#1C1B1A] md:text-5xl">
            Things we actually recommend.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-[#5B5854]">
            Every product on this page earned its place by solving a real
            problem from one of our stories. We only recommend what we believe
            genuinely helps.
          </p>
        </div>
      </section>

      {/* Products */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="space-y-6">
            {recommendations.map((rec, i) => (
              <div
                key={i}
                className="group block overflow-hidden rounded-2xl border border-[#D8D3C9] bg-white transition-all hover:-translate-y-1 hover:border-[#B8654A]"
              >
                {rec.type === "review" && rec.url ? (
                  <Link to={rec.url} className="block">
                    <ProductCardContent rec={rec} />
                  </Link>
                ) : (
                  <a
                    href={amazonLink(rec.asin!)}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className="block"
                  >
                    <ProductCardContent rec={rec} />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Affiliate disclosure */}
          <div className="mt-16 rounded-2xl border border-dashed border-[#D8D3C9] bg-[#F3EFE7] p-12 text-center">
            <p className="text-sm font-medium text-[#1C1B1A]">
              More recommendations coming soon
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-[#5B5854]">
              We add new recommendations as we work through more stories.
              Subscribe below and we'll let you know when the next one is
              ready.
            </p>
            <NewsletterForm compact />
          </div>
        </div>
      </section>

      {/* Affiliate disclosure */}
      <section className="border-t border-[#D8D3C9] bg-[#F3EFE7]">
        <div className="mx-auto max-w-3xl px-6 py-10 text-center">
          <p className="text-sm text-[#5B5854]">
            <strong>Affiliate disclosure:</strong> As an Amazon Associate I earn
            from qualifying purchases. Other links may also be affiliate links,
            which means we may earn a commission if you buy through them. This
            doesn't change the price for you.
          </p>
        </div>
      </section>
    </div>
  );
}

function ProductCardContent({ rec }: { rec: Product }) {
  return (
    <div className="grid gap-6 p-6 md:grid-cols-3 md:p-8">
      <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-[#F3EFE7] md:col-span-1">
        {rec.image ? (
          <img
            src={rec.image}
            alt={rec.title}
            loading="lazy"
            className="h-full w-full object-contain p-3"
          />
        ) : (
          <div className="text-center">
            {rec.type === "amazon" ? (
            <div className="px-5 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#B8654A]/10 text-xl text-[#B8654A]">
                {rec.category === "Cleaning" ? "Clean" : rec.category === "Treats" ? "Treat" : "Train"}
              </span>
              <span className="mt-3 block text-xs text-[#5B5854]">
                Product details on Amazon
              </span>
            </div>
            ) : (
              <span className="text-xs text-[#5B5854]">Product image</span>
            )}
          </div>
        )}
      </div>
      <div className="md:col-span-2">
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-[#B8654A]">
            {rec.category}
          </span>
          {rec.featured && (
            <span className="rounded-full bg-[#B8654A]/10 px-2 py-0.5 text-xs font-medium text-[#B8654A]">
              Top pick
            </span>
          )}
        </div>
        <h3 className="mt-2 text-xl font-semibold text-[#1C1B1A] group-hover:text-[#B8654A]">
          {rec.title}
        </h3>
        <p className="mt-3 text-[#5B5854]">{rec.excerpt}</p>
        <div className="mt-4 flex items-center gap-4">
          {rec.price && (
            <span className="rounded-lg bg-[#F3EFE7] px-3 py-1 text-sm font-medium text-[#1C1B1A]">
              {rec.price}
            </span>
          )}
          {rec.type === "review" ? (
            <span className="inline-flex items-center gap-1 text-sm font-medium text-[#B8654A]">
              Read our full review
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-sm font-medium text-[#B8654A]">
              Check price on Amazon
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
