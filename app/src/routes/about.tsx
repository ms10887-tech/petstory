import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Pet Story Co." },
      {
        name: "description",
        content:
          "We tell cinematic stories about dogs that teach us how to care for them better. Honest, gentle, and always from the dog's perspective.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="bg-[#FAF8F4]">
      <section className="border-b border-[#D8D3C9]">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <span className="eyebrow mb-4 block">About</span>
          <h1 className="text-4xl font-semibold tracking-tight text-[#1C1B1A] md:text-5xl">
            Pet advice that doesn't lecture.
          </h1>
          <p className="mt-6 text-xl text-[#5B5854]">
            The Pet Story Co. makes short cinematic stories about dogs. The
            dogs talk. The advice is real. And nothing ever feels like a sales
            pitch.
          </p>
        </div>
      </section>

      <section className="border-b border-[#D8D3C9]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-[#1C1B1A]">What we believe</h2>
          <div className="prose-custom mt-6">
            <p>
              Most pet advice sounds like it was written by someone who's never
              actually had a dog that didn't already come pre-trained. It's
              rigid, it's judgmental, and it makes you feel like you're doing
              everything wrong.
            </p>
            <p>
              We think there's a better way. Instead of starting with rules, we
              start with the story. What does the dog understand? What is he
              trying to communicate? What has nobody ever clearly shown him?
            </p>
            <p>
              Every one of our stories follows the same structure: a real pet
              problem, a conversation between the characters, a moment of
              understanding, and practical guidance that follows naturally from
              the story.
            </p>
            <p>
              We sometimes recommend products that can help. When we do, the
              product always solves a problem that already exists in the story.
              We never reverse-engineer a story to sell something.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#D8D3C9] bg-[#F3EFE7]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-[#1C1B1A]">Our characters</h2>
          <div className="mt-6 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#1C1B1A]">Dad Dog</h3>
              <p className="mt-2 text-[#5B5854]">
                A mature golden retriever with a calm, steady presence. He's
                been around long enough to know that most problems aren't
                anyone's fault — they're just misunderstandings. He speaks in
                short, honest sentences. He never lectures. He has a slightly
                deep voice and a warm, patient way of explaining things.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1C1B1A]">Puppy</h3>
              <p className="mt-2 text-[#5B5854]">
                A young golden retriever who's genuinely trying his best. He
                hates letting people down. He feels things deeply — shame when
                he has an accident, relief when he gets it right, excitement
                when he learns something new. His voice is younger and higher.
                He's not a comedy character. He's sincere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-[#1C1B1A]">Affiliate disclosure</h2>
          <div className="prose-custom mt-6">
            <p>
              Some of the products we recommend earn us a small commission if
              you decide to buy. This doesn't change the price for you. It
              helps us keep making stories.
            </p>
            <p>
              We only recommend products we believe genuinely solve a real
              problem. If we don't think it's good, we won't recommend it. The
              story always comes first.
            </p>
            <p>
              You can read our full <a href="/disclosure" className="text-[#B8654A] underline">affiliate disclosure here</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
