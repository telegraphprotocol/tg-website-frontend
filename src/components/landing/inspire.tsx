import { Reveal } from "./fx/reveal";
import { Typewriter } from "./fx/typewriter";

type Lineage = {
  id: string;
  name: string;
  year: string;
  role: string;
  current?: boolean;
};

const lineage: Lineage[] = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    year: "2009",
    role: "Secures the ledger",
  },
  {
    id: "bittensor",
    name: "Bittensor",
    year: "2021",
    role: "Opens AI production",
  },
  {
    id: "telegraph",
    name: "Telegraph",
    year: "Now",
    role: "Delivers verified intelligence agents can trust",
    current: true,
  },
];

export function Inspire() {
  return (
    <section className="bg-[var(--tg-bg)] px-6 py-24 sm:px-8 md:py-[140px]">
      <div className="mx-auto max-w-[1080px]">
        <Typewriter
          text="Inspired By Bitcoin And Bittensor"
          className="block mb-5 text-center text-[clamp(22px,2.2vw,30px)] font-medium tracking-[0.005em] text-[var(--tg-fg)]"
        />
        <Reveal
          as="p"
          delay={100}
          className="mx-auto m-0 mb-16 max-w-[560px] text-pretty text-center text-[14px] leading-[1.8] text-[var(--tg-fg-dim)] md:mb-20"
        >
          Three open networks, three different jobs. Telegraph takes the same
          principle — trust earned through competition, not permission — and
          applies it to machine intelligence.
        </Reveal>

        <Reveal
          variant="blur"
          className="relative mx-auto max-w-[880px]"
        >
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[27px] hidden h-px bg-[var(--tg-line)] md:block"
          />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
            {lineage.map((l) => (
              <div
                key={l.id}
                className="relative flex flex-col items-center text-center"
              >
                {l.current ? (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-1 h-9 w-9 rounded-full bg-[var(--tg-fg)] opacity-[0.1] blur-md animate-pulse"
                  />
                ) : null}
                <span
                  aria-hidden
                  className="relative z-10 mb-5 flex h-[13px] w-[13px] items-center justify-center"
                >
                  {l.current ? (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--tg-fg-dim)] opacity-40" />
                  ) : null}
                  <span
                    className={`relative flex h-[13px] w-[13px] items-center justify-center rounded-full border bg-[var(--tg-bg)] ${
                      l.current
                        ? "border-[var(--tg-fg)]"
                        : "border-[var(--tg-line-strong)]"
                    }`}
                  >
                    <span
                      className={`h-[5px] w-[5px] rounded-full ${
                        l.current ? "bg-[var(--tg-fg)]" : "bg-[var(--tg-fg-dim)]"
                      }`}
                    />
                  </span>
                </span>
                <span className="mb-1.5 text-[11px] uppercase tracking-[0.18em] text-[var(--tg-fg-faint)]">
                  {l.year}
                </span>
                <h3 className="relative m-0 mb-2 text-[16px] font-medium text-[var(--tg-fg)]">
                  {l.name}
                </h3>
                <p className="relative m-0 max-w-[220px] text-pretty text-[13.5px] leading-[1.6] text-[var(--tg-fg-dim)]">
                  {l.role}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          as="p"
          delay={200}
          className="mx-auto m-0 mt-16 max-w-[620px] text-pretty text-center text-[13.5px] leading-[1.8] text-[var(--tg-fg-dim)] md:mt-20"
        >
          Any developer can wrap a model, dataset, or API and get paid the
          moment a machine needs it — verified, priced, and settled on-chain,
          with no permission required.
        </Reveal>
      </div>
    </section>
  );
}
