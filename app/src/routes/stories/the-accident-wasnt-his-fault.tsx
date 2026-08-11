import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/stories/the-accident-wasnt-his-fault")({
  head: () => ({
    meta: [
      { title: "The Accident Wasn't His Fault — The Pet Story Co." },
      {
        name: "description",
        content:
          "Puppy keeps having accidents inside. Dad Dog sits down with him to figure out what's really going on.",
      },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <div className="bg-[#FAF8F4]">
      {/* Approved brand introduction video */}
      <section className="border-b border-[#D8D3C9]">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <Link to="/stories" className="text-sm text-[#B8654A] hover:underline">
            ← All stories
          </Link>
          <div className="mt-6 aspect-video overflow-hidden rounded-2xl border border-[#D8D3C9] bg-[#1C1B1A]">
            <video
              controls
              playsInline
              preload="metadata"
              poster="https://d8j0ntlcm91z4.cloudfront.net/user_3BVOCUyRScpz8iFauYUPmc87TGI/hf_20260719_201725_b1415888-910e-4d40-85c0-86707c365dc6.png"
              className="h-full w-full object-cover"
              aria-label="Meet The Pet Story Co. brand introduction"
            >
              <source src="/videos/meet-the-pet-story-co.mp4" type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          </div>
        </div>
      </section>

      {/* Story details */}
      <section className="border-b border-[#D8D3C9]">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-3">
          <div className="md:col-span-2">
            <span className="eyebrow mb-4 block">Potty training</span>
            <h1 className="text-3xl font-semibold tracking-tight text-[#1C1B1A] md:text-5xl">
              The Accident Wasn't His Fault
            </h1>
            <p className="mt-6 text-xl text-[#5B5854]">
              Puppy has accidents every day. He feels terrible about them. Dad
              Dog sits down with him and discovers the problem isn't the
              puppy. It's that nobody ever showed him a clear routine.
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border border-[#D8D3C9] bg-white p-5">
              <p className="text-xs font-medium text-[#B8654A]">In this story</p>
              <ul className="mt-3 space-y-2 text-sm text-[#5B5854]">
                <li>• Why punishment makes accidents worse</li>
                <li>• How to read "I need to go" signals</li>
                <li>• A simple potty schedule that works</li>
                <li>• What consistency actually looks like</li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#D8D3C9] bg-white p-5">
              <p className="text-xs font-medium text-[#B8654A]">Characters</p>
              <ul className="mt-3 space-y-2 text-sm text-[#5B5854]">
                <li>• Dad Dog</li>
                <li>• Puppy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="border-b border-[#D8D3C9] bg-[#F3EFE7]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-[#1C1B1A]">What you'll learn from this story</h2>
          <div className="prose-custom mt-6">
            <p>
              This story isn't just about potty training. It's about the
              difference between a dog being "stubborn" and a dog being
              confused. Most of the time, it's confusion.
            </p>
            <p>
              You'll see, through the characters' conversation, how:
            </p>
            <ul>
              <li>Dogs learn through consistent patterns, not through correction after the fact</li>
              <li>A clear, predictable schedule prevents most accidents before they happen</li>
              <li>Punishment after the accident doesn't teach the right lesson — it just teaches fear</li>
              <li>Learning to read your dog's signals is more important than any schedule</li>
              <li>When the routine is clear, most puppies catch on quickly</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Soft CTA to bridge page */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold text-[#1C1B1A] md:text-3xl">
            Want a step-by-step potty training method?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#5B5854]">
            We looked at a structured 7-day potty training program that works
            with a dog's natural instincts instead of against them. Here's what
            we found.
          </p>
          <Link to="/recommend/potty-training" className="btn-primary mt-8 inline-flex">
            Read our recommendation
          </Link>
          <p className="mt-4 text-xs text-[#5B5854]">
            Affiliate link · We may earn a commission at no extra cost to you
          </p>
        </div>
      </section>
    </div>
  );
}
