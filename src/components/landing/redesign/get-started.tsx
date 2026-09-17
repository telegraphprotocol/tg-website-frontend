import Link from "next/link";
import { Reveal } from "../fx/reveal";
import { Section, SectionHeading } from "./shared";

const items = [
  {
    label: "Ask",
    text: "Get a ranked answer in Alexandria",
    href: "https://alexandria.telegraphprotocol.com",
  },
  {
    label: "Supply",
    text: "Plug in your API as a miner",
    href: "https://integrate.telegraphprotocol.com",
  },
  {
    label: "Build",
    text: "Integrate /ask into your app or agent",
    href: "https://docs.telegraphprotocol.com/",
  },
  {
    label: "Read",
    text: "The full protocol in the whitepaper",
    href: "/Telegraph%20Protocol%20Whitepaper%20V2.0.pdf",
  },
];

export function GetStarted() {
  return (
    <Section>
      <SectionHeading align="center">Get started.</SectionHeading>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.label} delay={i * 100}>
            <Link
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group block h-full rounded-sm border border-[var(--tg-line)] bg-[var(--tg-surface)] p-6 text-left no-underline transition-colors hover:border-[var(--tg-line-strong)]"
            >
              <h3 className="m-0 text-[15px] font-medium text-[var(--tg-fg)]">
                {item.label}
              </h3>
              <p className="mt-2.5 text-[13px] leading-[1.6] text-[var(--tg-fg-dim)]">
                {item.text}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
