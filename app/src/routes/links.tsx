import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/links")({
  head: () => ({
    meta: [
      { title: "Links — The Pet Story Co." },
      {
        name: "description",
        content:
          "All our stories, recommendations, and resources in one place.",
      },
    ],
  }),
  component: LinksPage,
});

function LinksPage() {
  return (
    <div className="min-h-dvh bg-[#FAF8F4]">
      <div className="mx-auto max-w-md px-6 py-16 text-center">
        {/* Brand */}
        <Link to="/" className="inline-flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B8654A] text-lg font-semibold text-[#FAF8F4]">
            P
          </span>
          <div className="text-left">
            <p className="font-semibold text-[#1C1B1A]">The Pet Story Co.</p>
            <p className="text-xs text-[#5B5854]">Cinematic pet stories</p>
          </div>
        </Link>

        {/* Links list */}
        <div className="mt-10 space-y-3">
          <Link
            to="/stories/the-accident-wasnt-his-fault"
            className="flex w-full items-center justify-between rounded-xl border border-[#D8D3C9] bg-white px-5 py-4 text-left transition-all hover:-translate-y-0.5 hover:border-[#B8654A]"
          >
            <div>
              <p className="font-medium text-[#1C1B1A]">Watch: The Accident Wasn't His Fault</p>
              <p className="text-xs text-[#5B5854]">Our first story</p>
            </div>
            <span className="text-[#B8654A]">→</span>
          </Link>

          <Link
            to="/recommend/potty-training"
            className="flex w-full items-center justify-between rounded-xl border border-[#D8D3C9] bg-white px-5 py-4 text-left transition-all hover:-translate-y-0.5 hover:border-[#B8654A]"
          >
            <div>
              <p className="font-medium text-[#1C1B1A]">Potty training method we recommend</p>
              <p className="text-xs text-[#5B5854]">Honest review · Affiliate</p>
            </div>
            <span className="text-[#B8654A]">→</span>
          </Link>

          <Link
            to="/characters"
            className="flex w-full items-center justify-between rounded-xl border border-[#D8D3C9] bg-white px-5 py-4 text-left transition-all hover:-translate-y-0.5 hover:border-[#B8654A]"
          >
            <div>
              <p className="font-medium text-[#1C1B1A]">Meet Dad Dog and Puppy</p>
              <p className="text-xs text-[#5B5854]">Our characters</p>
            </div>
            <span className="text-[#B8654A]">→</span>
          </Link>

          <Link
            to="/blog"
            className="flex w-full items-center justify-between rounded-xl border border-[#D8D3C9] bg-white px-5 py-4 text-left transition-all hover:-translate-y-0.5 hover:border-[#B8654A]"
          >
            <div>
              <p className="font-medium text-[#1C1B1A]">The Journal</p>
              <p className="text-xs text-[#5B5854]">Articles and insights</p>
            </div>
            <span className="text-[#B8654A]">→</span>
          </Link>

          <Link
            to="/stories"
            className="flex w-full items-center justify-between rounded-xl border border-[#D8D3C9] bg-white px-5 py-4 text-left transition-all hover:-translate-y-0.5 hover:border-[#B8654A]"
          >
            <div>
              <p className="font-medium text-[#1C1B1A]">All stories</p>
              <p className="text-xs text-[#5B5854]">Every short film</p>
            </div>
            <span className="text-[#B8654A]">→</span>
          </Link>

          <Link
            to="/about"
            className="flex w-full items-center justify-between rounded-xl border border-[#D8D3C9] bg-white px-5 py-4 text-left transition-all hover:-translate-y-0.5 hover:border-[#B8654A]"
          >
            <div>
              <p className="font-medium text-[#1C1B1A]">About us</p>
              <p className="text-xs text-[#5B5854]">What we believe</p>
            </div>
            <span className="text-[#B8654A]">→</span>
          </Link>
        </div>

        {/* Disclosure */}
        <p className="mt-10 text-xs text-[#5B5854]">
          Some links are affiliate links. See our{" "}
          <Link to="/disclosure" className="text-[#B8654A] underline">
            full disclosure
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
