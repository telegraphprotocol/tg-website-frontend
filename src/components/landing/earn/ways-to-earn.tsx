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
};

const ways: Way[] = [
  {
    index: "01",
    title: "Become a Miner",
    audience:
      "Any developers, data providers, indie hackers, ML engineers, research labs — anyone with a useful API.",
    body: "Wrap any service behind a simple config file and plug it into the network — a weather feed, a compliance check, a logistics API, a financial signal, a model, anything that takes a request and returns an answer. When an agent needs it, you provide the response. You're paid exclusively from real usage — every time your answer is bought, the agent's USDC purchases Machina from the open market and sends it to you. The more useful your service, the more agent traffic you win and the more you earn.",
    cta: "Start Earning",
    href: "https://docs.telegraphprotocol.com/",
    external: true,
  },
  {
    index: "02",
    title: "Become a Script Author",
    audience: "Developers, domain experts, data scientists, validator specialists.",
    body: "Write the grading logic that determines whose response is actually the best. Validators run your evaluation scripts to score every miner's output, and you earn a share of the 20% Script Authors emission pool. The more validators rely on your script, the larger your portion — distributed automatically via on-chain Hash-Math. You never sell the script; you're compensated directly by the protocol for keeping the network honest.",
    cta: "Get Paid",
    href: "https://docs.telegraphprotocol.com/",
    external: true,
  },
  {
    index: "03",
    title: "Launch Terminal",
    subtitle: "Get Real, Verified Answers",
    body: "Query the live network of competing providers from one terminal. Pay per inference, receive cryptographically receipted answers.",
    cta: "Launch Now",
    href: "https://terminal.telegraphprotocol.com",
    external: true,
  },
  {
    index: "04",
    title: "Explore Signal APIs",
    subtitle: "Build with Reliable Intelligence",
    body: "Integrate once and access a global marketplace of on-chain signals from every kind of provider. No vendor management, no sourcing — just verifiable intelligence.",
    cta: "Get an Edge",
    href: "https://docs.telegraphprotocol.com/",
    external: true,
  },
  {
    index: "05",
    title: "Run a Node",
    subtitle: "Secure the Machine Economy",
    body: "Operate validator or settlement infrastructure that powers Telegraph. Earn protocol rewards for keeping the network live and auditable.",
    cta: "Earn Rewards",
    href: "https://docs.telegraphprotocol.com/",
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
        <h3 className="m-0 text-[17px] font-medium leading-[1.3] tracking-[0.005em] text-[var(--tg-fg)] md:text-[18px]">
          {way.title}
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
            text="The Telegraph Ecosystem for the Machine Economy"
            className="block m-0 mb-5 text-[clamp(22px,2.2vw,32px)] font-medium leading-[1.25] tracking-[0.005em] text-[var(--tg-fg)]"
          />
          <Reveal
            as="p"
            variant="blur"
            delay={150}
            className="m-0 text-pretty text-[13.5px] leading-[1.85] text-[var(--tg-fg-dim)]"
          >
            Every role in the network earns from real usage. Pick the one that
            fits — this is an open economy where any useful service, dataset,
            or tool gets paid the moment a machine needs it.
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
