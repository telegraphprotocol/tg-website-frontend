import { CtaButton } from "../cta-button";
import { Reveal } from "../fx/reveal";
import { Typewriter } from "../fx/typewriter";

type Way = {
  index: string;
  title: string;
  subtitle?: string;
  audience?: string;
  body: string;
  cta: string;
  href: string;
  external?: boolean;
  badge?: string;
};

const ways: Way[] = [
  {
    index: "01",
    title: "Become a Provider",
    audience:
      "Any developers, data providers, indie hackers, ML engineers, research labs — anyone with a useful API.",
    body: "Register as a provider by wrapping any API behind a simple config file — a weather forecast, a compliance check, a logistics API, a price-direction model, a dataset, anything that takes a request and returns an answer. When a consumer needs it for an Intent, you serve the result. You're paid exclusively from real usage — every time your result is bought, the buyer's USDC purchases Machina from the open market and sends it to you. The better you rank for an Intent, the more paid demand you win and the more you earn.",
    cta: "Start Earning",
    href: "https://docs.telegraphprotocol.com/",
    external: true,
  },
  {
    index: "02",
    title: "Become an Evaluator",
    audience: "Developers, domain experts, data scientists, validator specialists.",
    body: "Build the Evaluator that determines how a provider's performance is measured for an Intent. Validators run it to score every provider, and you earn a share of the 20% Evaluator emission pool. The more validators rely on your Evaluator, the larger your portion — distributed automatically via on-chain Hash-Math. You never sell it; you're compensated directly by the protocol for keeping the grading honest, and a better Evaluator can replace the current standard.",
    cta: "Get Paid",
    href: "https://docs.telegraphprotocol.com/",
    external: true,
  },
  {
    index: "03",
    title: "Explore Alexandria",
    subtitle: "How Humans Query the Network",
    body: "Alexandria is the human interface into Telegraph. Ask in plain language and the best-ranked provider for the Intent serves your answer. Pay per request and receive a cryptographic receipt.",
    cta: "Explore Now",
    href: "https://alexandria.telegraphprotocol.com",
    external: true,
    badge: "Beta",
  },
  {
    index: "04",
    title: "Build with Telegraph",
    subtitle: "Build with Reliable Intelligence",
    body: "Plug in once and get the best-ranked intelligence for the job from every kind of provider. No vendor management, no sourcing — just verifiable intelligence.",
    cta: "Get an Edge",
    href: "https://docs.telegraphprotocol.com/",
    external: true,
  },
  {
    index: "05",
    title: "Run a Validator",
    subtitle: "Verify the Network",
    body: "Operate validator infrastructure that verifies and finalizes the network's rankings. Earn protocol rewards for keeping the network live and auditable.",
    cta: "Earn Rewards",
    href: "https://node.telegraphprotocol.com/",
    external: true,
  },
];

function WayCard({ way, delay }: { way: Way; delay: number }) {
  return (
    <Reveal
      delay={delay}
      className="group relative flex h-full flex-col gap-5 border border-[var(--tg-line)] bg-[var(--tg-bg)] p-7 transition-colors hover:border-[var(--tg-line-strong)] md:p-8"
    >
      <span className="tg-corner tg-corner-tl" aria-hidden />
      <span className="tg-corner tg-corner-tr" aria-hidden />
      <span className="tg-corner tg-corner-bl" aria-hidden />
      <span className="tg-corner tg-corner-br" aria-hidden />

      <div className="flex items-baseline justify-between gap-4">
        <span className="text-[11px] tracking-[0.18em] text-[var(--tg-fg-faint)]">
          {way.index}
        </span>
        <span className="h-px flex-1 bg-[var(--tg-line-soft)]" />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="m-0 flex items-center gap-2 text-[17px] font-medium leading-[1.3] tracking-[0.005em] text-[var(--tg-fg)] md:text-[18px]">
          {way.title}
          {way.badge ? (
            <span className="rounded-sm border border-[var(--tg-line-strong)] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-[var(--tg-fg-faint)]">
              {way.badge}
            </span>
          ) : null}
        </h3>
        {way.subtitle ? (
          <p className="m-0 text-[13px] leading-[1.55] text-[var(--tg-fg-dim)]">
            {way.subtitle}
          </p>
        ) : null}
      </div>

      {way.audience ? (
        <div className="border-l-2 border-[var(--tg-line-strong)] pl-3 transition-colors group-hover:border-[var(--tg-fg-faint)]">
          <p className="m-0 text-[10px] uppercase tracking-[0.22em] text-[var(--tg-fg-faint)]">
            Who it&apos;s for
          </p>
          <p className="m-0 mt-1 text-[12.5px] leading-[1.55] text-[var(--tg-fg-dim)]">
            {way.audience}
          </p>
        </div>
      ) : null}

      <p className="m-0 flex-1 text-pretty text-[13.5px] leading-[1.8] text-[var(--tg-fg-dim)]">
        {way.body}
      </p>

      <div className="pt-2">
        <CtaButton
          href={way.href}
          target={way.external ? "_blank" : "_self"}
          variant="dark"
        >
          {way.cta}
        </CtaButton>
      </div>
    </Reveal>
  );
}

export function WaysToEarn() {
  return (
    <section className="bg-[var(--tg-bg)] px-6 py-20 sm:px-8 md:py-[140px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 max-w-[720px] md:mb-16">
          <Typewriter
            text="Everyone in the Telegraph network earns from real usage"
            className="block m-0 mb-5 text-[clamp(22px,2.2vw,32px)] font-medium leading-[1.25] tracking-[0.005em] text-[var(--tg-fg)]"
          />
          <Reveal
            as="p"
            variant="blur"
            delay={150}
            className="m-0 text-pretty text-[13.5px] leading-[1.85] text-[var(--tg-fg-dim)]"
          >
            Providers compete on performance, Evaluators compete over how it is
            measured, and Validators verify and finalize the result. Pick the
            part that fits — paid demand follows performance, and every
            provider, whatever API they bring, earns the moment it is needed.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ways.map((w, i) => (
            <WayCard key={w.index} way={w} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
