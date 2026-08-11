import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/characters")({
  head: () => ({
    meta: [
      { title: "Meet the Characters — The Pet Story Co." },
      {
        name: "description",
        content:
          "Dad Dog and Puppy. Two golden retrievers working through life's small problems together.",
      },
    ],
  }),
  component: Characters,
});

function Characters() {
  return (
    <div className="bg-[#FAF8F4]">
      <section className="border-b border-[#D8D3C9]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="eyebrow mb-4 block">The cast</span>
          <h1 className="text-4xl font-semibold tracking-tight text-[#1C1B1A] md:text-5xl">
            Meet Dad Dog and Puppy.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-[#5B5854]">
            Two golden retrievers. One home. A lot of figuring things out
            together.
          </p>
        </div>
      </section>

      {/* Dad Dog */}
      <section className="border-b border-[#D8D3C9]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:gap-16">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-[#D8D3C9]">
              <img
                src="https://d8j0ntlcm91z4.cloudfront.net/user_3BVOCUyRScpz8iFauYUPmc87TGI/hf_20260719_201725_6536288c-34cf-4411-b270-9beb4ffaaa28.png"
                alt="Dad Dog, mature golden retriever"
                className="h-full w-full object-cover"
              />
            </div>
          <div className="flex flex-col justify-center">
            <span className="text-sm font-medium text-[#B8654A]">Dad Dog</span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1C1B1A] md:text-4xl">
              Calm. Wise. A little tired.
            </h2>
            <div className="prose-custom mt-6">
              <p>
                Dad Dog is a mature golden retriever who has seen a lot in his
                years. He remembers being a puppy himself — the confusion, the
                accidents, the feeling of letting someone down.
              </p>
              <p>
                He doesn't get angry. He doesn't lecture. He just sits down,
                looks you in the eye, and tells you what he knows. His voice
                is slightly deep and steady. He pauses a lot. He never rushes
                to conclusions.
              </p>
              <p>
                His greatest gift is understanding what someone is actually
                trying to say, even when they can't find the words. Especially
                when they can't find the words.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-[#D8D3C9] bg-white p-4">
                <p className="text-xs font-medium text-[#B8654A]">Breed</p>
                <p className="mt-1 text-sm text-[#1C1B1A]">Golden Retriever</p>
              </div>
              <div className="rounded-xl border border-[#D8D3C9] bg-white p-4">
                <p className="text-xs font-medium text-[#B8654A]">Voice</p>
                <p className="mt-1 text-sm text-[#1C1B1A]">Warm, slightly deep</p>
              </div>
              <div className="rounded-xl border border-[#D8D3C9] bg-white p-4">
                <p className="text-xs font-medium text-[#B8654A]">Personality</p>
                <p className="mt-1 text-sm text-[#1C1B1A]">Patient, steady, kind</p>
              </div>
              <div className="rounded-xl border border-[#D8D3C9] bg-white p-4">
                <p className="text-xs font-medium text-[#B8654A]">Collar</p>
                <p className="mt-1 text-sm text-[#1C1B1A]">Leather, dark brown</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Puppy */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:gap-16">
          <div className="order-2 flex flex-col justify-center md:order-1">
            <span className="text-sm font-medium text-[#7A8C6F]">Puppy</span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1C1B1A] md:text-4xl">
              Trying his best. Always.
            </h2>
            <div className="prose-custom mt-6">
              <p>
                Puppy is young, earnest, and deeply motivated not to let
                anyone down. He wants to get things right. He really does. But
                sometimes the world is confusing, and nobody's explained the
                rules clearly, and things just happen.
              </p>
              <p>
                He feels everything intensely. The shame of an accident. The
                pride of getting it right. The joy of being praised. He's not
                a comedy character — he's sincere. His face is expressive.
                His ears say everything his words can't.
              </p>
              <p>
                He trusts Dad Dog completely. Even when he doesn't understand
                what's being asked, he trusts that Dad Dog will help him
                figure it out.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-[#D8D3C9] bg-white p-4">
                <p className="text-xs font-medium text-[#7A8C6F]">Breed</p>
                <p className="mt-1 text-sm text-[#1C1B1A]">Golden Retriever</p>
              </div>
              <div className="rounded-xl border border-[#D8D3C9] bg-white p-4">
                <p className="text-xs font-medium text-[#7A8C6F]">Voice</p>
                <p className="mt-1 text-sm text-[#1C1B1A]">Younger, higher</p>
              </div>
              <div className="rounded-xl border border-[#D8D3C9] bg-white p-4">
                <p className="text-xs font-medium text-[#7A8C6F]">Personality</p>
                <p className="mt-1 text-sm text-[#1C1B1A]">Sincere, eager, sensitive</p>
              </div>
              <div className="rounded-xl border border-[#D8D3C9] bg-white p-4">
                <p className="text-xs font-medium text-[#7A8C6F]">Collar</p>
                <p className="mt-1 text-sm text-[#1C1B1A]">Fabric, light blue</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-[#D8D3C9]">
                <img
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_3BVOCUyRScpz8iFauYUPmc87TGI/hf_20260719_201725_b1415888-910e-4d40-85c0-86707c365dc6.png"
                  alt="Puppy, young golden retriever"
                  className="h-full w-full object-cover"
                />
              </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#D8D3C9] bg-[#F3EFE7]">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold text-[#1C1B1A] md:text-3xl">
            Watch their first story together.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#5B5854]">
            "The Accident Wasn't His Fault" — the story that started it all.
          </p>
          <Link to="/stories/the-accident-wasnt-his-fault" className="btn-primary mt-8 inline-flex">
            Watch the story
          </Link>
        </div>
      </section>
    </div>
  );
}
