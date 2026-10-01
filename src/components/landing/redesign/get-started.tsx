import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Hammer,
  Plug,
  Search,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "../fx/reveal";
import { Section, SectionHeading } from "./shared";

const items: {
  label: string;
  text: string;
  who: string;
  href: string;
  icon: LucideIcon;
  span: string;
}[] = [
  {
    label: "Query",
    text: "Use Alexandria",
    who: "Consumers",
    href: "https://alexandria.telegraphprotocol.com",
    icon: Search,
    span: "lg:col-span-2",
  },
  {
    label: "Supply",
    text: "Connect your model / API / dataset",
    who: "Providers",
    href: "https://integrate.telegraphprotocol.com",
    icon: Plug,
    span: "lg:col-span-2",
  },
  {
    label: "Build",
    text: "Build an app, integration or Evaluator",
    who: "Builders + Evaluators",
    href: "https://docs.telegraphprotocol.com/",
    icon: Hammer,
    span: "lg:col-span-2",
  },
  {
    label: "Verify",
    text: "Run a Validator",
    who: "Validators",
    href: "https://node.telegraphprotocol.com/",
    icon: ShieldCheck,
    span: "lg:col-span-3",
  },
  {
    label: "Read",
    text: "Read the protocol",
    who: "Everyone",
    href: "/whitepaper",
    icon: BookOpen,
    span: "sm:col-span-2 lg:col-span-3",
  },
];

export function GetStarted() {
  return (
    <Section>
      <SectionHeading>Get started.</SectionHeading>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {items.map((item, i) => {
          const external = item.href.startsWith("http");
          const Icon = item.icon;
          const Arrow = external ? ArrowUpRight : ArrowRight;
          return (
            <Reveal key={item.label} delay={i * 100} className={item.span}>
              <Link
                href={item.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex h-full min-h-[190px] flex-col rounded-md border border-[var(--tg-line-strong)] bg-[var(--tg-surface)] p-6 text-left no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--tg-surface-hi)]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--tg-line-strong)] bg-[var(--tg-bg)]">
                    <Icon className="h-[18px] w-[18px] text-[var(--tg-fg)]" />
                  </span>
                  <span className="font-mono text-[11px] text-[var(--tg-fg-faint)]">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="m-0 mt-6 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--tg-fg-faint)]">
                  {item.label}
                </h3>
                <p className="m-0 mt-2 text-[17px] leading-[1.4] text-[var(--tg-fg)]">
                  {item.text}
                </p>

                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="rounded-full border border-[var(--tg-line-strong)] bg-[var(--tg-bg)] px-3 py-1 text-[11px] text-[var(--tg-fg-dim)]">
                    {item.who}
                  </span>
                  <Arrow className="h-4 w-4 text-[var(--tg-fg-dim)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[var(--tg-fg)]" />
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
