import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/why-puppy-accidents-arent-his-fault")({
  head: () => ({
    meta: [
      { title: "Why Your Puppy's Accidents Aren't His Fault — The Pet Story Co." },
      {
        name: "description",
        content:
          "He's not being stubborn. He's confused. Here's what's probably actually going on, and what to do instead of getting frustrated.",
      },
    ],
  }),
  component: BlogPost,
});

function BlogPost() {
  return (
    <article className="bg-[#FAF8F4]">
      {/* Header image */}
      <section className="border-b border-[#D8D3C9]">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <Link to="/blog" className="text-sm text-[#B8654A] hover:underline">
            ← Back to the journal
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <span className="text-xs font-medium text-[#B8654A]">Potty training</span>
            <span className="text-xs text-[#5B5854]">·</span>
            <span className="text-xs text-[#5B5854]">6 min read</span>
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#1C1B1A] md:text-5xl">
            Why Your Puppy's Accidents Aren't His Fault
          </h1>

          <p className="mt-4 text-xl text-[#5B5854]">
            He's not being stubborn. He's confused. Here's what's probably
            actually going on, and what to do instead of getting frustrated.
          </p>
        </div>

        <div className="mx-auto max-w-5xl px-6 pb-4">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-[#D8D3C9]">
            <img
              src="https://d8j0ntlcm91z4.cloudfront.net/user_3BVOCUyRScpz8iFauYUPmc87TGI/hf_20260719_202859_a9a3a2d1-664a-4e78-ac79-8296974de82d.png"
              alt="Puppy looking guilty beside an accident, Dad Dog watching gently"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article content */}
      <section>
        <div className="mx-auto max-w-2xl px-6 py-16">
          <div className="prose-custom">
            <p>
              If you've come home to find another puddle on the floor, you've
              probably had the thought: <em>why won't he just learn?</em> He
              looks guilty. He knows he did something wrong. So why does he
              keep doing it?
            </p>
            <p>
              Here's the thing: he probably doesn't know. Not really. He knows
              you're upset when you come home and find a mess. But he doesn't
              connect the feeling of needing to go with the solution of going
              outside. That connection hasn't been made clear to him yet.
            </p>

            <h2>The problem isn't the puppy. It's the system.</h2>
            <p>
              Most people approach potty training backwards. They wait for the
              puppy to have an accident, then correct him. But a puppy doesn't
              understand punishment after the fact. By the time you find the
              mess, his brain has already moved on to whatever he's doing
              now.
            </p>
            <p>
              What he does understand is patterns. When things happen the
              same way every day, he learns what to expect. That's how dogs
              learn best — through consistency and routine, not through
              correction after something has already gone wrong.
            </p>

            <blockquote>
              A puppy who has accidents every day isn't stubborn. He's a
              puppy who hasn't been given a clear, consistent routine.
            </blockquote>

            <h2>Three things that are probably causing the accidents</h2>

            <h3>1. The schedule is inconsistent</h3>
            <p>
              If you take him out at 8am one day and 10am the next, he can't
              build a rhythm. Dogs have internal clocks, just like we do.
              When the routine changes, their body can't predict when they'll
              get to go outside next.
            </p>

            <h3>2. You're not watching for the signals</h3>
            <p>
              He's probably telling you he needs to go — you just don't
              speak his language yet. Circling, sniffing, suddenly going
              quiet, heading toward the door, or wandering off to a corner —
              these are all early warning signs. If you can catch them, you
              can prevent the accident before it happens.
            </p>

            <h3>3. Punishment is making it worse</h3>
            <p>
              When you get mad about an accident, you're not teaching him
              not to go inside. You're teaching him not to go inside where
              you can see him. Puppies who get punished for accidents start
              hiding them — going into another room, behind the couch, under
              the table. Now you have the same number of accidents, but you
              find them later and they're harder to clean.
            </p>

            <h2>What actually works</h2>
            <p>
              The fix is simple, but it requires consistency:
            </p>
            <ol>
              <li>Take him out at the same times every day</li>
              <li>Praise and reward immediately when he goes outside</li>
              <li>Learn his "I need to go" signals and act on them fast</li>
              <li>When there's an accident, just clean it up — no reaction</li>
              <li>Be patient. This takes weeks, not days</li>
            </ol>

            <p>
              The key shift is going from "fixing" accidents to preventing
              them. When you're on a consistent schedule, you know roughly
              when he needs to go, and you can get him outside before it
              becomes a problem. Every successful trip outside reinforces
              the right habit.
            </p>

            <h2>When to ask for help</h2>
            <p>
              Most potty training struggles are just routine problems. But
              if your puppy is suddenly having more accidents after weeks
              of being clean, or if he seems to be going more frequently
              than normal, it might be worth checking with a vet. Sometimes
              accidents are a sign of a health issue, not a training issue.
            </p>
            <p>
              Otherwise? Give it time. Give him a clear routine. And
              remember — he's trying his best. He just needs someone to
              show him what "right" looks like.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#D8D3C9] bg-[#F3EFE7]">
        <div className="mx-auto max-w-2xl px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold text-[#1C1B1A] md:text-3xl">
            Want a clear, step-by-step routine?
          </h2>
          <p className="mx-auto mt-4 text-[#5B5854]">
            We looked at a structured 7-day potty training method that works
            with a dog's natural instincts instead of against them.
          </p>
          <Link to="/recommend/potty-training" className="btn-primary mt-8 inline-flex">
            Read our recommendation
          </Link>
          <p className="mt-4 text-xs text-[#5B5854]">
            Affiliate link · We may earn a commission at no extra cost to you
          </p>
        </div>
      </section>
    </article>
  );
}
