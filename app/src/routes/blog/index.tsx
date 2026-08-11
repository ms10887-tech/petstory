import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Journal — The Pet Story Co." },
      {
        name: "description",
        content:
          "Articles and insights about dog training, behavior, and care. Practical advice told through stories.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const posts = [
    {
      title: "Why Your Puppy's Accidents Aren't His Fault",
      excerpt:
        "He's not being stubborn. He's confused. Here's what's probably actually going on, and what to do instead of getting frustrated.",
      category: "Potty training",
      date: "July 2026",
      url: "/blog/why-puppy-accidents-arent-his-fault",
    },
    {
      title: "The 5 Potty Training Mistakes Most New Owners Make",
      excerpt:
        "Taking them out too often. Punishing after the fact. Inconsistent schedules. These are the mistakes that make potty training take twice as long.",
      category: "Potty training",
      date: "July 2026",
      url: "/blog/five-potty-training-mistakes",
    },
    {
      title: "How to Read Your Puppy's 'I Need to Go' Signals",
      excerpt:
        "Circling, sniffing, sudden silence, heading toward a corner. Learn the signals before the accident happens.",
      category: "Behavior",
      date: "July 2026",
      url: "/blog/how-to-read-puppy-signals",
    },
  ];

  return (
    <div className="bg-[#FAF8F4]">
      <section className="border-b border-[#D8D3C9]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="eyebrow mb-4 block">The Journal</span>
          <h1 className="text-4xl font-semibold tracking-tight text-[#1C1B1A] md:text-5xl">
            Practical advice, told through stories.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-[#5B5854]">
            Articles about dog training, behavior, and care. Short. Honest.
            No lectures.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="space-y-8">
            {posts.map((post, i) => (
              <Link
                key={i}
                to={post.url}
                className="group block border-b border-[#D8D3C9] pb-8 last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-[#B8654A]">{post.category}</span>
                  <span className="text-xs text-[#5B5854]">·</span>
                  <span className="text-xs text-[#5B5854]">{post.date}</span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold text-[#1C1B1A] group-hover:text-[#B8654A] md:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-3 text-lg text-[#5B5854]">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#B8654A]">
                  Read article
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
