import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/stories/")({
  head: () => ({
    meta: [
      { title: "Stories — The Pet Story Co." },
      {
        name: "description",
        content:
          "Cinematic short stories about dogs and the problems they work through together.",
      },
    ],
  }),
  component: StoriesIndex,
});

function StoriesIndex() {
  const stories = [
    {
      title: "The Accident Wasn't His Fault",
      excerpt:
        "Puppy keeps having accidents inside. Dad Dog sits down with him to figure out what's really going on.",
      duration: "90 seconds",
      topic: "Potty training",
      url: "/stories/the-accident-wasnt-his-fault",
      featured: true,
    },
  ];

  return (
    <div className="bg-[#FAF8F4]">
      <section className="border-b border-[#D8D3C9]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="eyebrow mb-4 block">The stories</span>
          <h1 className="text-4xl font-semibold tracking-tight text-[#1C1B1A] md:text-5xl">
            Every story is about something real.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-[#5B5854]">
            Short cinematic stories about dogs. They talk. They learn. And
            somewhere in there, you will too.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            {stories.map((story, i) => (
              <Link
                key={i}
                to={story.url}
                className="group overflow-hidden rounded-2xl border border-[#D8D3C9] bg-white transition-all hover:-translate-y-1 hover:border-[#B8654A]"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="https://d8j0ntlcm91z4.cloudfront.net/user_3BVOCUyRScpz8iFauYUPmc87TGI/hf_20260719_201725_b1415888-910e-4d40-85c0-86707c365dc6.png"
                    alt="The Accident Wasn't His Fault - story thumbnail"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>
                  {story.featured && (
                    <span className="absolute left-4 top-4 rounded-full bg-[#B8654A] px-3 py-1 text-xs font-medium text-[#FAF8F4]">
                      New
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-[#B8654A]">{story.topic}</span>
                    <span className="text-xs text-[#5B5854]">• {story.duration}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-[#1C1B1A] group-hover:text-[#B8654A]">
                    {story.title}
                  </h3>
                  <p className="mt-3 text-[#5B5854]">{story.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-dashed border-[#D8D3C9] bg-[#F3EFE7] p-12 text-center">
            <p className="text-sm font-medium text-[#1C1B1A]">More stories coming soon</p>
            <p className="mt-2 max-w-md mx-auto text-sm text-[#5B5854]">
              New stories every few weeks. Subscribe below and we'll email you
              when the next one is ready.
            </p>
            <form className="mx-auto mt-6 flex max-w-sm flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-full border border-[#D8D3C9] bg-white px-5 py-2.5 text-sm text-[#1C1B1A] placeholder:text-[#5B5854]/60 focus:border-[#B8654A] focus:outline-none"
              />
              <button type="submit" className="btn-sage">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
