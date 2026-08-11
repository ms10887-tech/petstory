import { createFileRoute, Link } from "@tanstack/react-router";

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it really take to potty train a puppy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most puppies start getting the hang of it within 4 to 6 weeks of consistent training, but fully trained usually takes 4 to 6 months. The key is consistency — a clear schedule, frequent bathroom breaks, and the same routine every time. Puppies under 12 weeks old have very little bladder control and physically can't hold it longer than 2-3 hours. By 6 months, most can hold it through the night if trained properly. A structured 7-day method can accelerate this significantly by building a clear routine from day one.",
      },
    },
    {
      "@type": "Question",
      name: "Why does my puppy have accidents right after coming back inside?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This is one of the most common problems new owners face. The reason is almost always one of three things: overstimulation (too many smells and sounds outside distract them), wrong timing (they didn't actually need to go when you took them out), or incomplete emptying (they only peed a little). The fix: wait longer outside. If they don't go within 5 minutes, bring them inside, wait 10 minutes in a calm space, then try again. Always praise heavily when they do go outside.",
      },
    },
    {
      "@type": "Question",
      name: "Should I punish my puppy for having accidents inside?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Punishment after the fact does not work and can make things worse. Your puppy doesn't connect the punishment to the accident that happened 5 minutes ago. They connect it to you finding the mess, which teaches them to hide or be afraid. What works instead: clean the accident thoroughly with an enzymatic cleaner, adjust your schedule so you're taking them out more often, and reward them heavily when they go in the right place.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I take my puppy out to pee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A good rule of thumb: your puppy can hold it for roughly 1 hour per month of age. So a 2-month-old needs to go out every 2 hours, a 3-month-old every 3 hours, and so on up to about 8 hours max for adult dogs. In practice, take them out first thing in the morning, after every meal (15-20 minutes after eating), after naps, after play sessions, before bed, and once during the night for puppies under 4 months. A structured schedule is the single most important factor in potty training success.",
      },
    },
    {
      "@type": "Question",
      name: "What are the signs that my puppy needs to go?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most puppies show clear signals before an accident. Watch for: circling and sniffing the floor intently, heading toward a door or corner they've used before, sudden restlessness like pacing or whining, sniffing their own rear end, heading for the door and sitting by it, or sudden quietness — if a playful puppy goes silent, they may be concentrating on something else. Learning to spot these signals will prevent most accidents before they happen.",
      },
    },
    {
      "@type": "Question",
      name: "Why does my puppy pee when excited or scared?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This is called submissive urination or excitement peeing, and it's very common in young puppies. It's not a potty training issue — it's an emotional response. Puppies outgrow it as they gain confidence. To help: greet your puppy calmly without excited voices, avoid leaning over them, crouch down to their level, and don't make direct eye contact when they're nervous. Punishing this makes it worse as it confirms to the puppy that they should be scared. If the behavior continues past 6-8 months, consult your vet.",
      },
    },
    {
      "@type": "Question",
      name: "Is crate training helpful for potty training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, when used correctly. Dogs naturally avoid soiling their sleeping space, so a properly sized crate can be a powerful training tool. The crate should be just big enough for your puppy to stand, turn around, and lie down. If it's too big, they'll use one corner as a bathroom. The key rules: never use the crate as punishment, never leave a puppy in a crate longer than they can physically hold it, and always take them outside immediately after crate time. Crate training works best when combined with a clear schedule and consistent routines.",
      },
    },
    {
      "@type": "Question",
      name: "How do I potty train my puppy at night?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nighttime training follows the same principles as daytime training with a few adjustments. Limit water 1-2 hours before bed and give them a final bathroom break right before sleep. For puppies under 4 months, set an alarm for the middle of the night and take them out quietly with no play or excitement. Use the crate — a puppy who sleeps in a crate is less likely to have accidents because they don't want to soil their sleeping area. Don't punish middle-of-the-night accidents; if your puppy had an accident in the crate overnight, the crate time was too long. Most puppies can sleep through the night by 4-5 months with consistent nighttime routines.",
      },
    },
    {
      "@type": "Question",
      name: "My 6-month-old puppy still has accidents. Is this normal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's not uncommon but it's worth investigating. A 6-month-old puppy should have good bladder control and a solid understanding of where to go. If they're still having regular accidents, consider: medical issues like urinary tract infections which can cause sudden regression, schedule gaps if your routine has changed, incomplete training if the current method isn't working, or too much freedom — at 6 months, many owners give their puppy too much unsupervised access to the house. A vet visit is the first step to rule out medical issues.",
      },
    },
    {
      "@type": "Question",
      name: "What's the biggest mistake new owners make with potty training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Inconsistency. The number one reason potty training takes longer than it should is that the rules change. One day the puppy is let out every hour. The next day, everyone's busy and they're left for four hours. The puppy gets confused, has an accident, gets punished for something they don't understand, and the whole process breaks down. Other common mistakes include punishing after the fact, not cleaning accidents with enzymatic cleaner, giving too much freedom too early, not watching for signals, and having an inconsistent schedule between family members.",
      },
    },
  ],
};

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Potty Training FAQ — The Pet Story Co." },
      {
        name: "description",
        content:
          "Answers to the most common potty training questions: how long it takes, why accidents happen, what signals to watch for, and when to get help. Real advice from our stories.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqStructuredData),
      },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  {
    question: "How long does it really take to potty train a puppy?",
    answer: (
      <>
        <p>
          Most puppies start getting the hang of it within 4 to 6 weeks of
          consistent training, but "fully trained" usually takes 4 to 6 months.
          The key word is <em>consistent</em> — a clear schedule, frequent
          bathroom breaks, and the same routine every time.
        </p>
        <p>
          Puppies under 12 weeks old have very little bladder control. They
          physically can't hold it longer than 2-3 hours. As they grow, their
          capacity increases. By 6 months, most can hold it through the night
          if trained properly.
        </p>
        <p>
          A structured 7-day method can accelerate this significantly by
          building a clear routine from day one. We reviewed one{" "}
          <Link to="/recommend/potty-training" className="text-[#B8654A] underline">
            here
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    question: "Why does my puppy have accidents right after coming back inside?",
    answer: (
      <>
        <p>
          This is one of the most frustrating — and most common — problems new
          owners face. Your puppy goes outside, doesn't do anything, then walks
          through the door and pees on the floor.
        </p>
        <p>
          The reason is almost always one of three things:{" "}
          <strong>overstimulation</strong> (too many smells and sounds outside
          distract them), <strong>wrong timing</strong> (they didn't actually
          need to go when you took them out), or{" "}
          <strong>incomplete emptying</strong> (they only peed a little).
        </p>
        <p>
          The fix: wait longer outside. If they don't go within 5 minutes, bring
          them inside, wait 10 minutes in a calm space, then try again. And
          always praise heavily when they do go outside.
        </p>
        <p>
          Our story{" "}
          <Link to="/stories/the-accident-wasnt-his-fault" className="text-[#B8654A] underline">
            "The Accident Wasn't His Fault"
          </Link>{" "}
          explores this exact problem from the puppy's perspective.
        </p>
      </>
    ),
  },
  {
    question: "Should I punish my puppy for having accidents inside?",
    answer: (
      <>
        <p>
          No. Punishment after the fact does not work — and it can make things
          worse. Your puppy doesn't connect the punishment to the accident that
          happened 5 minutes ago. They connect it to <em>you</em> finding the
          mess, which teaches them to hide or be afraid.
        </p>
        <p>
          What works instead: clean the accident thoroughly with an enzymatic
          cleaner (regular cleaners don't remove the smell), adjust your
          schedule so you're taking them out more often, and reward them
          heavily when they go in the right place.
        </p>
        <p>
          We wrote a full article on this:{" "}
          <Link to="/blog/why-puppy-accidents-arent-his-fault" className="text-[#B8654A] underline">
            Why Your Puppy's Accidents Aren't His Fault
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    question: "How often should I take my puppy out to pee?",
    answer: (
      <>
        <p>
          A good rule of thumb: your puppy can hold it for roughly 1 hour per
          month of age. So a 2-month-old needs to go out every 2 hours, a
          3-month-old every 3 hours, and so on — up to about 8 hours max for
          adult dogs.
        </p>
        <p>
          But that's the maximum. In practice, take them out:
        </p>
        <ul>
          <li>First thing in the morning</li>
          <li>After every meal (15-20 minutes after eating)</li>
          <li>After naps</li>
          <li>After play sessions</li>
          <li>Before bed</li>
          <li>Once during the night (for puppies under 4 months)</li>
        </ul>
        <p>
          A structured schedule is the single most important factor in potty
          training success. The{" "}
          <Link to="/recommend/potty-training" className="text-[#B8654A] underline">
            7-day method we reviewed
          </Link>{" "}
          provides a complete daily schedule.
        </p>
      </>
    ),
  },
  {
    question: "What are the signs that my puppy needs to go?",
    answer: (
      <>
        <p>
          Every puppy is different, but most show clear signals before an
          accident. Learn to spot these and you'll prevent most accidents before
          they happen:
        </p>
        <ul>
          <li>Circling and sniffing the floor intently</li>
          <li>Heading toward a door or corner they've used before</li>
          <li>Sudden restlessness — pacing or whining</li>
          <li>Sniffing their own rear end</li>
          <li>Heading for the door and sitting by it</li>
          <li>
            Sudden quiet — if a playful puppy goes silent, they may be
            concentrating on something else
          </li>
        </ul>
        <p>
          We wrote a detailed guide on reading these signals:{" "}
          <Link to="/blog/how-to-read-puppy-signals" className="text-[#B8654A] underline">
            How to Read Your Puppy's 'I Need to Go' Signals
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    question: "Why does my puppy pee when excited or scared?",
    answer: (
      <>
        <p>
          This is called <strong>submissive urination</strong> or{" "}
          <strong>excitement peeing</strong>, and it's very common in young
          puppies. It's not a potty training issue — it's an emotional response.
          Puppies outgrow it as they gain confidence.
        </p>
        <p>
          To help: greet your puppy calmly (no excited voices), avoid leaning
          over them, crouch down to their level, and don't make direct eye
          contact when they're nervous. Punishing this makes it worse — it
          confirms to the puppy that they should be scared.
        </p>
        <p>
          If the behavior continues past 6-8 months, consult your vet. It could
          indicate a medical issue like a urinary tract infection.
        </p>
      </>
    ),
  },
  {
    question: "Is crate training helpful for potty training?",
    answer: (
      <>
        <p>
          Yes — when used correctly. Dogs naturally avoid soiling their sleeping
          space, so a properly sized crate can be a powerful training tool. The
          crate should be just big enough for your puppy to stand, turn around,
          and lie down. If it's too big, they'll use one corner as a bathroom.
        </p>
        <p>
          The key rules: never use the crate as punishment, never leave a puppy
          in a crate longer than they can physically hold it, and always take
          them outside immediately after crate time.
        </p>
        <p>
          Crate training works best when combined with a clear schedule and
          consistent routines — the same approach used in structured potty
          training programs like{" "}
          <Link to="/recommend/potty-training" className="text-[#B8654A] underline">
            this one
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    question: "How do I potty train my puppy at night?",
    answer: (
      <>
        <p>
          Nighttime training follows the same principles as daytime training,
          with a few adjustments:
        </p>
        <ul>
          <li>
            <strong>Limit water 1-2 hours before bed.</strong> Give them a final
            bathroom break right before sleep.
          </li>
          <li>
            <strong>Set an alarm.</strong> For puppies under 4 months, set an
            alarm for the middle of the night. Take them out quietly, no play,
            no excitement — just business.
          </li>
          <li>
            <strong>Use the crate.</strong> A puppy who sleeps in a crate is
            less likely to have accidents because they don't want to soil their
            sleeping area.
          </li>
          <li>
            <strong>Don't punish middle-of-the-night accidents.</strong> If your
            puppy had an accident in the crate overnight, the crate time was too
            long. Adjust your schedule.
          </li>
        </ul>
        <p>
          Most puppies can sleep through the night by 4-5 months with consistent
          nighttime routines.
        </p>
      </>
    ),
  },
  {
    question: "My 6-month-old puppy still has accidents. Is this normal?",
    answer: (
      <>
        <p>
          It's not uncommon, but it's worth investigating. A 6-month-old puppy
          should have good bladder control and a solid understanding of where
          to go. If they're still having regular accidents, consider:
        </p>
        <ul>
          <li>
            <strong>Medical issues:</strong> Urinary tract infections are common
            and can cause sudden regression. A vet visit is the first step.
          </li>
          <li>
            <strong>Schedule gaps:</strong> Has your routine changed? New work
            hours, new family member, less frequent breaks?
          </li>
          <li>
            <strong>Incomplete training:</strong> Some puppies need a more
            structured approach. If the current method isn't working, a
            different method might.
          </li>
          <li>
            <strong>Too much freedom:</strong> At 6 months, many owners give
            their puppy too much unsupervised access to the house. Scaling back
            supervision can help.
          </li>
        </ul>
        <p>
          If you've ruled out medical issues, a structured{" "}
          <Link to="/recommend/potty-training" className="text-[#B8654A] underline">
            7-day training method
          </Link>{" "}
          can help reset the routine.
        </p>
      </>
    ),
  },
  {
    question: "What's the biggest mistake new owners make with potty training?",
    answer: (
      <>
        <p>
          Inconsistency. The number one reason potty training takes longer than
          it should is that the rules change. One day the puppy is let out every
          hour. The next day, everyone's busy and they're left for four hours.
          The puppy gets confused, has an accident, gets punished for something
          they don't understand, and the whole process breaks down.
        </p>
        <p>
          Other common mistakes:
        </p>
        <ul>
          <li>Punishing after the fact (the most damaging)</li>
          <li>Not cleaning accidents with enzymatic cleaner</li>
          <li>Giving too much freedom too early</li>
          <li>Not watching for signals</li>
          <li>Inconsistent schedule between family members</li>
        </ul>
        <p>
          We wrote a full breakdown:{" "}
          <Link to="/blog/five-potty-training-mistakes" className="text-[#B8654A] underline">
            The 5 Potty Training Mistakes Most New Owners Make
          </Link>
          .
        </p>
      </>
    ),
  },
];

function FaqPage() {
  return (
    <div className="bg-[#FAF8F4]">
      {/* Hero */}
      <section className="border-b border-[#D8D3C9]">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <span className="eyebrow mb-4 block">FAQ</span>
          <h1 className="text-4xl font-semibold tracking-tight text-[#1C1B1A] md:text-5xl">
            Potty training questions, answered.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-[#5B5854]">
            Real answers to the questions every new puppy owner asks. No
            judgment. Just what actually works.
          </p>
        </div>
      </section>

      {/* FAQ items */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="space-y-0 divide-y divide-[#D8D3C9]">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group py-6 open:pb-10"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-left text-lg font-semibold text-[#1C1B1A] hover:text-[#B8654A] [&::-webkit-details-marker]:hidden">
                  <span className="leading-snug">{faq.question}</span>
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-[#D8D3C9] text-sm text-[#5B5854] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="prose-custom mt-6 max-w-none">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to bridge page */}
      <section className="border-t border-[#D8D3C9] bg-[#F3EFE7]">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold text-[#1C1B1A] md:text-3xl">
            Want a complete step-by-step plan?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#5B5854]">
            We reviewed a structured 7-day potty training program that works
            with a dog's natural instincts. It covers the exact schedule,
            feeding routine, and signals to watch for — day by day.
          </p>
          <Link to="/recommend/potty-training" className="btn-primary mt-8 inline-flex">
            Read our full review
          </Link>
          <p className="mt-4 text-xs text-[#5B5854]">
            Affiliate link · We may earn a commission at no extra cost to you
          </p>
        </div>
      </section>
    </div>
  );
}