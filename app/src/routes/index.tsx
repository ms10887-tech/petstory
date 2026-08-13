import { createFileRoute, Link } from "@tanstack/react-router";
import { NewsletterForm } from "../components/NewsletterForm";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bg-[#FAF8F4]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-28">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <span className="eyebrow mb-6 block">Cinematic pet stories</span>
              <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-[#1C1B1A] md:text-6xl">
                Every accident has a story behind it.
              </h1>
              <p className="mt-6 max-w-md text-lg text-[#5B5854]">
                Short cinematic stories where dogs talk to each other about the
                things no one ever taught them. Watch, learn, and care for them
                better.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/stories" className="btn-primary">
                  Watch the stories
                </Link>
                <Link to="/recommend" className="btn-secondary">
                  Browse recommendations
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-[#D8D3C9]">
                <img
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_3BVOCUyRScpz8iFauYUPmc87TGI/hf_20260719_202453_a9e7bf65-4df1-4b06-b0f1-04bbe9019f37.png"
                  alt="Dad Dog and Puppy together in a sunlit living room"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Decorative floating shapes */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#B8654A]/10 -z-10" />
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-[#7A8C6F]/10 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY / ABOUT */}
      <section className="border-t border-[#D8D3C9] bg-[#F3EFE7]">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <span className="eyebrow mb-4 block">Why stories</span>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1C1B1A] md:text-4xl">
            Training advice sinks in better when it comes from someone who
            understands.
          </h2>
          <p className="mt-6 text-lg text-[#5B5854]">
            Most pet advice sounds like a lecture. Your dog doesn't understand
            lectures. Neither do you, honestly. We tell short, cinematic stories
            from the dog's perspective — the confusion, the effort, the small
            wins — so you can see the problem from their side before you try
            to fix it.
          </p>
          <p className="mt-4 text-lg text-[#5B5854]">
            Every story leads to practical guidance. Every product we recommend
            solves a problem that already exists in the story.
          </p>
        </div>
      </section>

      {/* MEET THE CHARACTERS */}
      <section className="border-t border-[#D8D3C9]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow mb-4 block">The cast</span>
            <h2 className="text-3xl font-semibold tracking-tight text-[#1C1B1A] md:text-4xl">
              Meet Dad Dog and Puppy.
            </h2>
            <p className="mt-4 text-lg text-[#5B5854]">
              Two golden retrievers. One who's been around long enough to know
              what's what, and one who's still figuring it out.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {/* Dad Dog */}
            <div className="overflow-hidden rounded-2xl border border-[#D8D3C9] bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_3BVOCUyRScpz8iFauYUPmc87TGI/hf_20260719_201725_6536288c-34cf-4411-b270-9beb4ffaaa28.png"
                  alt="Dad Dog, mature golden retriever"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1C1B1A]">Dad Dog</h3>
                <p className="mt-1 text-sm text-[#B8654A]">Mature golden retriever</p>
                <p className="mt-3 text-[#5B5854]">
                  Calm, wise, and warm. He's seen it all — chewed shoes, missed
                  signals, accidents in the same spot. He doesn't lecture. He
                  just tells it like it is, from a dog's point of view. Slightly
                  deep voice. Patient. A little tired, but always there.
                </p>
              </div>
            </div>

            {/* Puppy */}
            <div className="overflow-hidden rounded-2xl border border-[#D8D3C9] bg-white md:mt-12">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_3BVOCUyRScpz8iFauYUPmc87TGI/hf_20260719_201725_b1415888-910e-4d40-85c0-86707c365dc6.png"
                  alt="Puppy, young golden retriever"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1C1B1A]">Puppy</h3>
                <p className="mt-1 text-sm text-[#7A8C6F]">Young golden retriever</p>
                <p className="mt-3 text-[#5B5854]">
                  Small, earnest, and trying his best. He hates letting anyone
                  down, but he doesn't always understand what's expected.
                  Expressive face, big eyes, young voice. Not comedic — he
                  genuinely feels things deeply.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link to="/characters" className="btn-secondary">
              Read their full bios
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / 3-STEP STORY FLOW */}
      <section className="border-t border-[#D8D3C9] bg-[#F3EFE7]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#1C1B1A] md:text-4xl">
              How each story works.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "A problem",
                body: "We start with something real. Accidents inside. Chewed shoes. Separation anxiety. Something you've probably dealt with too.",
              },
              {
                step: "02",
                title: "A story",
                body: "Dad Dog and Puppy work through it. Not as a lesson, as a conversation. You see the confusion, the effort, and what finally makes it click.",
              },
              {
                step: "03",
                title: "A way forward",
                body: "Every story naturally leads to practical guidance and, when it makes sense, a product or method that can help. Never pushed. Always earned.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <span className="text-sm font-medium text-[#B8654A]">{item.step}</span>
                <h3 className="mt-2 text-xl font-semibold text-[#1C1B1A]">{item.title}</h3>
                <p className="mt-3 text-[#5B5854]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="border-t border-[#D8D3C9]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <span className="eyebrow mb-4 block">Latest story</span>
              <h2 className="text-3xl font-semibold tracking-tight text-[#1C1B1A] md:text-4xl">
                The Accident Wasn't His Fault
              </h2>
            </div>
            <Link to="/stories" className="hidden text-sm font-medium text-[#B8654A] hover:underline md:inline">
              All stories →
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#D8D3C9] bg-white">
            <div className="aspect-[16/9] overflow-hidden relative">
              <img
                src="https://d8j0ntlcm91z4.cloudfront.net/user_3BVOCUyRScpz8iFauYUPmc87TGI/hf_20260719_201725_b1415888-910e-4d40-85c0-86707c365dc6.png"
                alt="Featured story - The Accident Wasn't His Fault"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="grid gap-6 p-8 md:grid-cols-3 md:gap-12">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-semibold text-[#1C1B1A]">
                  The puppy isn't stubborn. The routine just wasn't clear.
                </h3>
                <p className="mt-4 text-[#5B5854]">
                  Puppy has accidents every day. He feels bad about them. Dad Dog
                  sits down with him and figures out what's actually going on —
                  nobody ever showed him a clear, consistent schedule.
                </p>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-sm font-medium text-[#1C1B1A]">What you'll learn</p>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start gap-2 text-sm text-[#5B5854]">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#B8654A]" />
                      Why punishment makes accidents worse
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#5B5854]">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#B8654A]" />
                      How to read "I need to go" signals
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#5B5854]">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#B8654A]" />
                      A simple schedule that actually works
                    </li>
                  </ul>
                </div>
                <Link to="/stories/the-accident-wasnt-his-fault" className="btn-primary mt-6 inline-flex">
                  Watch the story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECOMMENDED READS / BLOG */}
      <section className="border-t border-[#D8D3C9] bg-[#F3EFE7]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <span className="eyebrow mb-4 block">From the journal</span>
              <h2 className="text-3xl font-semibold tracking-tight text-[#1C1B1A] md:text-4xl">
                Read before you clean the next mess.
              </h2>
            </div>
            <Link to="/blog" className="hidden text-sm font-medium text-[#B8654A] hover:underline md:inline">
              All articles →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Why Your Puppy's Accidents Aren't His Fault",
                excerpt:
                  "He's not being stubborn. He's confused. Here's what's probably actually going on, and what to do instead of getting frustrated.",
                category: "Potty training",
                url: "/blog/why-puppy-accidents-arent-his-fault",
                image:
                  "https://d8j0ntlcm91z4.cloudfront.net/user_3BVOCUyRScpz8iFauYUPmc87TGI/hf_20260719_202859_a9a3a2d1-664a-4e78-ac79-8296974de82d.png",
              },
              {
                title: "The 5 Potty Training Mistakes Most New Owners Make",
                excerpt:
                  "Taking them out too often. Punishing after the fact. Inconsistent schedules. These are the mistakes that make potty training take twice as long.",
                category: "Potty training",
                url: "/blog/five-potty-training-mistakes",
                image:
                  "https://d8j0ntlcm91z4.cloudfront.net/user_3BVOCUyRScpz8iFauYUPmc87TGI/hf_20260719_202859_f201070e-df2a-4d62-abf2-ffab10000de3.png",
              },
              {
                title: "How to Read Your Puppy's 'I Need to Go' Signals",
                excerpt:
                  "Circling, sniffing, sudden silence, heading toward a corner. Learn the signals before the accident happens.",
                category: "Behavior",
                url: "/blog/how-to-read-puppy-signals",
                image:
                  "https://d8j0ntlcm91z4.cloudfront.net/user_3BVOCUyRScpz8iFauYUPmc87TGI/hf_20260719_202859_64969042-b028-4c7f-885c-681c4ee095ef.png",
              },
            ].map((post, i) => (
              <Link
                key={i}
                to={post.url}
                className="group overflow-hidden rounded-xl border border-[#D8D3C9] bg-white transition-all hover:-translate-y-1 hover:border-[#B8654A]"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-[#B8654A]">{post.category}</span>
                  <h3 className="mt-2 text-lg font-semibold text-[#1C1B1A] group-hover:text-[#B8654A]">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#5B5854]">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL SIGNUP */}
      <section className="border-t border-[#D8D3C9]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="eyebrow mb-4 block">Stay in the story</span>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1C1B1A] md:text-4xl">
            Get the next story in your inbox.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[#5B5854]">
            One email per story. No spam. No weekly newsletter noise. Just a new
            dog story and a practical lesson when it's ready.
          </p>

          <NewsletterForm />
          <p className="mt-4 text-xs text-[#5B5854]">
            No spam. Unsubscribe anytime. We'd never sell your email.
          </p>
        </div>
      </section>
    </div>
  );
}
