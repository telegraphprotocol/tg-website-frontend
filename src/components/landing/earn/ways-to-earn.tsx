import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Gauge,
  Plug,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "../fx/reveal";
import { Section, SectionHeading } from "../redesign/shared";

type Way = {
  label: string;
  title: string;
  body: string;
  note: string;
  who: string;
  cta: string;
  href: string;
  icon: LucideIcon;
};

// Same destinations as the homepage "Get started" section
const ways: Way[] = [
  {
    label: "Supply intelligence",
    title: "Become a Miner",
    body: "Register a model, API, dataset, algorithm, search system or tool against an Intent. Miners compete on measured performance and earn from fulfilled paid Consumer demand.",
    note: "Miners are demand-funded - not paid from protocol emissions.",
    who: "Miners",
    cta: "Connect intelligence",
    href: "https://integrate.telegraphprotocol.com/register?mode=hash",
    icon: Plug,
  },
  {
    label: "Improve the measurement",
    title: "Build an Evaluator",
    body: "Evaluators define how Miner performance is measured for an Intent. Competing Evaluators can challenge the current Canonical Evaluator, and a stronger method can replace it.",
    note: "Eligible Canonical Evaluators participate in the protocol's Evaluator reward mechanism.",
    who: "Evaluators",
    cta: "Build an Evaluator",
    href: "https://integrate.telegraphprotocol.com/wasm",
    icon: Gauge,
  },
  {
    label: "Secure the network",
    title: "Run a Validator",
    body: "Validators independently verify protocol execution, reproduce the required evaluation work and participate in finalizing Telegraph state.",
    note: "Validators receive the fixed Validator share of MACHINA emissions for protocol work, subject to the protocol rules.",
    who: "Validators",
    cta: "Reserve a validator slot",
    href: "https://node.telegraphprotocol.com/",
    icon: ShieldCheck,
  },
  {
    label: "Bring demand",
    title: "Build with Telegraph",
    body: "Connect an application, agent or machine workflow to ranked intelligence through Telegraph. Consumer demand is what creates Miner revenue and drives the network economy.",
    note: "Builders can also participate in grants, bounties and ecosystem programs where available.",
    who: "Builders",
    cta: "Build with Telegraph",
    href: "https://integrate.telegraphprotocol.com/integrate",
    icon: Bot,
  },
];

function WayCard({ way }: { way: Way }) {
  const Icon = way.icon;
  return (
    <Link
      href={way.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-md border border-[var(--tg-line-strong)] bg-[var(--tg-surface)] p-6 text-left no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--tg-surface-hi)]"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--tg-line-strong)] bg-[var(--tg-bg)]">
        <Icon className="h-[18px] w-[18px] text-[var(--tg-fg)]" />
      </span>
      <h3 className="m-0 mt-5 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--tg-fg-faint)]">
        {way.label}
      </h3>
      <p className="m-0 mt-2 text-[20px] leading-[1.3] text-[var(--tg-fg)]">
        {way.title}
      </p>
      <p className="m-0 mt-3 text-pretty text-[13.5px] leading-[1.75] text-[var(--tg-fg-dim)]">
        {way.body}
      </p>
      <p className="m-0 mt-4 flex-1 border-l-2 border-[var(--tg-line-strong)] pl-3 text-pretty text-[12.5px] leading-[1.6] text-[var(--tg-fg-dim)]">
        {way.note}
      </p>
      <div className="mt-6 flex items-center justify-between gap-3">
        <span className="rounded-full border border-[var(--tg-line-strong)] bg-[var(--tg-bg)] px-3 py-1 text-[11px] text-[var(--tg-fg-dim)]">
          {way.who}
        </span>
        <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-[var(--tg-fg)] px-4 py-2.5 text-[13px] font-medium text-[var(--tg-bg)] transition-opacity group-hover:opacity-85">
          {way.cta}
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

export function WaysToEarn() {
  return (
    <Section>
      <SectionHeading lede="Routing is ranking-based. Miners are paid from fulfilled demand, while Validators and Evaluators are rewarded through emission-based mechanisms.">
        Ways to earn
      </SectionHeading>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
        {ways.map((w, i) => (
          <Reveal key={w.title} delay={i * 100} className="h-full">
            <WayCard way={w} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
