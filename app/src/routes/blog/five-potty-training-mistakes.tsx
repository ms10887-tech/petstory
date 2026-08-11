import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/five-potty-training-mistakes")({
  head: () => ({
    meta: [
      { title: "The 5 Potty Training Mistakes Most New Owners Make — The Pet Story Co." },
      {
        name: "description",
        content:
          "Taking them out too often. Punishing after the fact. Inconsistent schedules. These are the mistakes that make potty training take twice as long.",
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
            <span className="text-xs text-[#5B5854]">7 min read</span>
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#1C1B1A] md:text-5xl">
            The 5 Potty Training Mistakes Most New Owners Make
          </h1>

          <p className="mt-4 text-xl text-[#5B5854]">
            Taking them out too often. Punishing after the fact. Inconsistent
            schedules. These are the mistakes that make potty training take
            twice as long.
          </p>
        </div>

        <div className="mx-auto max-w-5xl px-6 pb-4">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-[#D8D3C9]">
            <img
              src="https://d8j0ntlcm91z4.cloudfront.net/user_3BVOCUyRScpz8iFauYUPmc87TGI/hf_20260719_202859_f201070e-df2a-4d62-abf2-ffab10000de3.png"
              alt="Dad Dog teaching puppy how to use a potty bell"
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
              If potty training feels like it's taking forever, you might be
              making one of these five common mistakes. They're not obvious,
              and most new owners don't realize they're doing anything wrong.
              But each one slows down the process and makes training harder
              for both you and your puppy.
            </p>
            <p>
              The good news is that every one of these mistakes is easy to
              fix. And once you do, you'll probably see improvement within
              just a few days.
            </p>

            <h2>Mistake 1: Taking them out too often</h2>
            <p>
              "Every hour on the hour" sounds like a good plan. But here's
              the problem: if you take a puppy out every 60 minutes, he never
              builds up the ability to hold it. He also never develops the
              feeling of "I need to go" that he needs to learn how to
              communicate to you.
            </p>
            <p>
              Think of it like this: if you never let yourself get hungry,
              you'd never learn to recognize when you're hungry. Same idea.
              A puppy needs to feel the urge to go so he can learn what
              that feeling means and what to do about it.
            </p>
            <p>
              <strong>What to do instead:</strong> Start with a realistic
              schedule based on your puppy's age. Very young puppies (8-10
              weeks) might need to go out every 1-2 hours. Older puppies can
              go longer. Gradually increase the time between trips as they
              get better at holding it. The goal is building up their
              bladder control, not preventing any feeling of urgency.
            </p>

            <h2>Mistake 2: Punishing after the fact</h2>
            <p>
              You come home. There's a mess on the carpet. You point at it
              and say "bad dog!" or rub his nose in it. You think he's
              learning not to do it again. But he's not.
            </p>
            <p>
              A puppy's brain doesn't connect punishment with something
              that happened minutes ago. When you get mad, he doesn't think
              "I shouldn't have gone inside." He thinks "when my human
              comes home, bad things happen." He learns to fear you coming
              home. He learns to hide when he has an accident. He learns to
              go into another room where you won't see him.
            </p>
            <p>
              <strong>What to do instead:</strong> If there's an accident,
              just clean it up. No reaction. No scolding. No pointing. Just
              clean it and move on. The lesson you want him to learn is
              "going outside is good," not "going inside is bad." You teach
              the first one through praise and rewards when he goes in the
              right place. You don't teach the second one at all.
            </p>

            <h2>Mistake 3: Inconsistent schedules</h2>
            <p>
              Dogs are creatures of habit. When things happen at the same
              time every day, their bodies adjust. Their digestion adjusts.
              Their internal clock adjusts. Everything gets easier.
            </p>
            <p>
              When the schedule is different every day — 8am one day, 10am
              the next, 11am on weekends — his body never knows what to
              expect. He can't build a rhythm. He has accidents not because
              he's stubborn, but because he has no idea when he'll get to
              go outside next.
            </p>
            <p>
              <strong>What to do instead:</strong> Pick fixed times and
              stick to them as much as possible. First thing in the
              morning, after meals, after playtime, before bed. These are
              the predictable times every day. The more consistent you are,
              the faster he'll learn.
            </p>

            <h2>Mistake 4: Using the wrong cue</h2>
            <p>
              A lot of people use a phrase like "go potty" or "hurry up"
              when they want their puppy to go. That's fine in theory, but
              most people use it wrong. They say it before the puppy has
              even had a chance to sniff around. They say it over and over.
              The puppy learns to tune it out.
            </p>
            <p>
              The cue becomes background noise instead of a signal.
            </p>
            <p>
              <strong>What to do instead:</strong> Pick one short phrase or
              word. Say it only right as he's starting to go — not before.
              That way he connects the word with the actual action. Once
              he's made that connection, you can start saying it just
              before you think he's about to go. If he doesn't go within a
              minute or two, take him back inside and try again later.
            </p>

            <h2>Mistake 5: Giving up too soon</h2>
            <p>
              Most puppies take weeks, not days, to be fully potty trained.
              A lot of people expect results in a week. When that doesn't
              happen, they get frustrated. They start scolding. They start
              second-guessing themselves. They try a new method, then
              another, then another.
            </p>
            <p>
              Every time you change the method, you reset the learning
              process. The puppy has to figure out a whole new set of
              rules. The confusion sets him back.
            </p>
            <p>
              <strong>What to do instead:</strong> Pick a method and stick
              with it for at least 2-3 weeks. If there's some progress —
              even slow progress — keep going. If there's absolutely zero
              improvement after a few weeks, then consider making a change.
              But be honest with yourself about whether you've been
              consistent enough to give the method a real chance.
            </p>

            <h2>The bottom line</h2>
            <p>
              Potty training isn't complicated. It's just consistent. The
              puppy who gets taken out at the same times every day, who gets
              praised every time he goes outside, and who never gets in
              trouble for accidents — that's the puppy who learns fastest.
            </p>
            <p>
              He's not being stubborn. He's not trying to make you mad.
              He's just a puppy who needs someone to show him, clearly and
              patiently, what the rules are.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#D8D3C9] bg-[#F3EFE7]">
        <div className="mx-auto max-w-2xl px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold text-[#1C1B1A] md:text-3xl">
            Want a day-by-day plan you can follow?
          </h2>
          <p className="mx-auto mt-4 text-[#5B5854]">
            We reviewed a structured 7-day potty training system with clear
            schedules, signal guides, and troubleshooting for common problems.
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
