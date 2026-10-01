import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Bot,
  Gauge,
  Plug,
  Search,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "../fx/reveal";
import { Section, SectionHeading } from "./shared";

type Item = {
  label: string;
  text: string;
  who: string;
  href: string;
  icon: LucideIcon;
};

// The main call to action: get people building agents on Telegraph
const BUILD: Item & { sub: string; cta: string } = {
  label: "Build",
  text: "Build an agent",
  sub: "Plug in once and get the best-ranked intelligence for the job, for your agent, app or integration.",
  cta: "Start building",
  who: "Builders",
  href: "https://docs.telegraphprotocol.com/",
  icon: Bot,
};

// The two ways to put intelligence on the network, side by side
const SUPPLY_SIDE: Item[] = [
  {
    label: "Supply",
    text: "Connect your model / API / dataset",
    who: "Providers",
    href: "https://integrate.telegraphprotocol.com/register?mode=hash",
    icon: Plug,
  },
  {
    label: "Evaluate",
    text: "Build an Evaluator",
    who: "Evaluators",
    href: "https://integrate.telegraphprotocol.com/wasm",
    icon: Gauge,
  },
];

const MORE: Item[] = [
  {
    label: "Query",
    text: "Use Alexandria",
    who: "Consumers",
    href: "https://alexandria.telegraphprotocol.com",
    icon: Search,
  },
  {
    label: "Verify",
    text: "Reserve a validator slot",
    who: "Validators",
    href: "https://node.telegraphprotocol.com/",
    icon: ShieldCheck,
  },
  {
    label: "Read",
    text: "Read the whitepaper",
    who: "Everyone",
    href: "/whitepaper",
    icon: BookOpen,
  },
];

const cardBase =
  "group flex h-full flex-col rounded-md border text-left no-underline transition-all duration-200 hover:-translate-y-0.5";

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-[var(--tg-line-strong)] bg-[var(--tg-bg)] px-3 py-1 text-[11px] text-[var(--tg-fg-dim)]">
      {children}
    </span>
  );
}

function Card({ item }: { item: Item }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cardBase} min-h-[170px] border-[var(--tg-line-strong)] bg-[var(--tg-surface)] p-6 hover:bg-[var(--tg-surface-hi)]`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--tg-line-strong)] bg-[var(--tg-bg)]">
        <Icon className="h-[18px] w-[18px] text-[var(--tg-fg)]" />
      </span>
      <h3 className="m-0 mt-5 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--tg-fg-faint)]">
        {item.label}
      </h3>
      <p className="m-0 mt-2 text-[17px] leading-[1.4] text-[var(--tg-fg)]">
        {item.text}
      </p>
      <div className="mt-auto flex items-center justify-between pt-5">
        <Tag>{item.who}</Tag>
        <ArrowUpRight className="h-4 w-4 text-[var(--tg-fg-dim)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[var(--tg-fg)]" />
      </div>
    </Link>
  );
}

export function GetStarted() {
  return (
    <Section>
      <SectionHeading>Get started.</SectionHeading>

      <div className="mt-14 flex flex-col gap-5">
        {/* Primary: build agents */}
        <Reveal>
          <Link
            href={BUILD.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${cardBase} border-[var(--tg-fg)] bg-[var(--tg-surface-strong)] p-7 hover:bg-[var(--tg-surface-hi)] md:flex-row md:items-center md:justify-between md:gap-10 md:p-9`}
          >
            <div className="flex items-start gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-[var(--tg-fg)] bg-[var(--tg-bg)]">
                <BUILD.icon className="h-6 w-6 text-[var(--tg-fg)]" />
              </span>
              <div>
                <h3 className="m-0 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--tg-fg-faint)]">
                  {BUILD.label}
                </h3>
                <p className="m-0 mt-2 text-[clamp(22px,2.4vw,30px)] leading-[1.2] text-[var(--tg-fg)]">
                  {BUILD.text}
                </p>
                <p className="m-0 mt-3 max-w-[560px] text-pretty text-[14px] leading-[1.7] text-[var(--tg-fg-dim)]">
                  {BUILD.sub}
                </p>
                <div className="mt-4">
                  <Tag>{BUILD.who}</Tag>
                </div>
              </div>
            </div>
            <span className="mt-6 inline-flex shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-sm bg-[var(--tg-fg)] px-6 py-3.5 text-[14px] font-medium text-[var(--tg-bg)] transition-opacity group-hover:opacity-85 md:mt-0">
              {BUILD.cta}
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </Reveal>

        {/* Providers and Evaluators, side by side */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {SUPPLY_SIDE.map((item, i) => (
            <Reveal key={item.label} delay={(i + 1) * 100} className="h-full">
              <Card item={item} />
            </Reveal>
          ))}
        </div>

        {/* Everything else */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {MORE.map((item, i) => (
            <Reveal key={item.label} delay={(i + 3) * 100} className="h-full">
              <Card item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
