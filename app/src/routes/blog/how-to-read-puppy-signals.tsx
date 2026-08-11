import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/how-to-read-puppy-signals")({
  head: () => ({
    meta: [
      { title: "How to Read Your Puppy's 'I Need to Go' Signals — The Pet Story Co." },
      {
        name: "description",
        content:
          "Circling, sniffing, sudden silence, heading toward a corner. Learn the signals before the accident happens.",
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
            <span className="text-xs font-medium text-[#B8654A]">Behavior</span>
            <span className="text-xs text-[#5B5854]">·</span>
            <span className="text-xs text-[#5B5854]">5 min read</span>
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#1C1B1A] md:text-5xl">
            How to Read Your Puppy's "I Need to Go" Signals
          </h1>

          <p className="mt-4 text-xl text-[#5B5854]">
            Circling, sniffing, sudden silence, heading toward a corner.
            Learn the signals before the accident happens.
          </p>
        </div>

        <div className="mx-auto max-w-5xl px-6 pb-4">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-[#D8D3C9]">
            <img
              src="https://d8j0ntlcm91z4.cloudfront.net/user_3BVOCUyRScpz8iFauYUPmc87TGI/hf_20260719_202859_64969042-b028-4c7f-885c-681c4ee095ef.png"
              alt="Dad Dog teaching puppy to read potty signals"
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
              Most potty training advice focuses on schedules and reward
              systems. But there's a skill that matters even more: learning
              to read your puppy. He's telling you he needs to go every
              single time. You just haven't learned his language yet.
            </p>
            <p>
              Dogs don't come with an instruction manual, but they do come
              with a pretty consistent set of behaviors that mean "I need
              to go outside right now." The earlier you can spot them, the
              more accidents you can prevent — and every prevented accident
              is one step closer to being fully house-trained.
            </p>

            <h2>The six most common signals</h2>

            <h3>1. Circling</h3>
            <p>
              This is the classic one. Your puppy starts walking in tight
              circles, nose to the floor, like he's looking for something.
              He is — he's looking for the right spot to go. In the wild,
              dogs circle to flatten grass and check for predators before
              eliminating. Your living room carpet triggers the same
              instinct. When you see circling, grab him and head outside.
              Immediately.
            </p>

            <h3>2. Sniffing intensely</h3>
            <p>
              Dogs experience the world through their nose. When a puppy
              starts sniffing the floor with unusual intensity — not the
              casual "what's this smell" sniff, but focused, deliberate,
              head-down sniffing — he's searching for a place to go. If
              he's already had accidents in the house, he might be sniffing
              out the spot where he went before, because dogs tend to
              return to the same place if the scent is still there.
            </p>

            <h3>3. Sudden silence</h3>
            <p>
              This one is easy to miss, but it's one of the most reliable
              signals. If your puppy was just running around playing, and
              then suddenly he goes quiet and disappears — that's not
              "he's found a toy to chew on." That's "he's found a private
              corner to have an accident." If your noisy puppy goes
              silent, go find him. Nine times out of ten, he's up to
              something.
            </p>

            <h3>4. Heading toward a door or a specific corner</h3>
            <p>
              Once a puppy starts to figure out that outside is the right
              place, he'll start trying to get there. If he walks toward
              the door, scratches at it, stares at it, or paces by it —
              that's him saying "let me out." Same thing if he heads
              toward the same corner of the room every time — he's picked
              a "bathroom spot" in his head.
            </p>

            <h3>5. Whining or restlessness</h3>
            <p>
              Some puppies will vocalize when they need to go. It might
              be a soft whine, a little bark, or just a general sense of
              "I'm uncomfortable and I don't know why." If your puppy is
              fidgeting, can't settle, and keeps getting up and sitting
              back down, that's a good sign he needs to go out.
            </p>

            <h3>6. Squatting or lifting a leg</h3>
            <p>
              This is the last signal, and by the time you see it, it's
              probably already too late. But if you catch him mid-squat,
              you can still scoop him up and get him outside. The key is
              to catch the earlier signals so you never get to this point.
            </p>

            <h2>How to respond when you see a signal</h2>
            <p>
              When you spot one of these signals, don't say anything.
              Don't yell, don't call his name, don't react dramatically.
              Just calmly pick him up or gently herd him toward the door.
              Getting excited or loud can make him forget why he needed to
              go in the first place, or worse, make him afraid to show you
              signals next time.
            </p>
            <p>
              Once you get outside, wait. Give him a minute or two. When
              he goes, praise him immediately and give him a treat. You
              want him to connect the dots: "when I feel this feeling, I
              should go to the door, and then when I go outside, good
              things happen."
            </p>

            <blockquote>
              The goal isn't to catch every accident. The goal is to
              learn his signals well enough that accidents become rare.
            </blockquote>

            <h2>Why some signals are easy to miss</h2>
            <p>
              The biggest mistake new owners make is assuming their puppy
              will communicate the same way a human would. We go to the
              door and knock or wait. A puppy might just sit there and
              stare. We ask "do you need to go out?" — a puppy doesn't
              understand the question, and even if he did, he can't answer
              in words.
            </p>
            <p>
              You have to meet him halfway. Watch what he does. Learn his
              patterns. Notice the small changes in his behavior. The
              signals are there. You just have to learn to see them.
            </p>

            <p>
              And remember — even when you miss a signal and there's an
              accident, it's not his fault. He didn't know how to tell you
              clearly enough, or you didn't see it. Either way, the
              solution is the same: keep watching, keep learning each
              other, and stay consistent with the routine.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#D8D3C9] bg-[#F3EFE7]">
        <div className="mx-auto max-w-2xl px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold text-[#1C1B1A] md:text-3xl">
            Want a clear, step-by-step potty training routine?
          </h2>
          <p className="mx-auto mt-4 text-[#5B5854]">
            We reviewed a structured 7-day method that focuses on signals,
            timing, and consistency rather than punishment.
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
