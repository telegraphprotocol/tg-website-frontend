import { Fragment } from "react";
import { Reveal } from "../fx/reveal";
import { CtaButton } from "../cta-button";
import { Section, SectionHeading } from "./shared";

const rows: {
  label: string;
  closed: { heading: string; text: string };
  open: { heading: string; text: string };
}[] = [
  {
    label: "The terminal",
    closed: { heading: "ChatGPT, Claude", text: "one company's model behind a chat box" },
    open: { heading: "Alexandria", text: "the highest ranked answer, with a receipt" },
  },
  {
    label: "The layer underneath",
    closed: { heading: "OpenAI, Anthropic", text: "trains and owns the models it serves" },
    open: { heading: "Telegraph protocol", text: "ranks and verifies every model, permissionlessly" },
  },
  {
    label: "The supply",
    closed: { heading: "One lab", text: "whatever that lab built" },
    open: { heading: "Every model in the world", text: "competing per intent, paid on accuracy" },
  },
];

export function Alexandria() {
  return (
    <Section>
      <SectionHeading
        lede={
          <>
            Alexandria is the interface. Telegraph is the ranking network
            underneath. Closed products can only serve what their company
            built.{" "}
            <strong className="font-medium text-[var(--tg-fg)]">
              Alexandria routes to whatever is currently best for the intent -
              ChatGPT, Claude and every other model are just miners competing
              for it.
            </strong>
          </>
        }
      >
        Alexandria.
      </SectionHeading>

      {/* Mobile: stacked rows */}
      <div className="mt-14 flex flex-col gap-8 md:hidden">
        {rows.map((row, i) => (
          <Reveal key={row.label} delay={i * 100}>
            <div>
              <span className="text-[13px] font-medium text-[var(--tg-fg)]">
                {row.label}
              </span>
              <div className="mt-3 grid grid-cols-1 gap-3">
                <div className="rounded-sm border border-[var(--tg-line)] bg-[var(--tg-surface)] px-5 py-4 text-center">
                  <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[var(--tg-fg-faint)]">
                    Closed
                  </span>
                  <p className="m-0 text-[14px] font-medium text-[var(--tg-fg)]">
                    {row.closed.heading}
                  </p>
                  <p className="m-0 mt-1.5 text-[12px] leading-[1.6] text-[var(--tg-fg-dim)]">
                    {row.closed.text}
                  </p>
                </div>
                <div className="rounded-sm border border-[var(--tg-line)] bg-[var(--tg-surface)] px-5 py-4 text-center">
                  <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[var(--tg-fg-faint)]">
                    Open and permissionless
                  </span>
                  <p className="m-0 text-[14px] font-medium text-[var(--tg-fg)]">
                    {row.open.heading}
                  </p>
                  <p className="m-0 mt-1.5 text-[12px] leading-[1.6] text-[var(--tg-fg-dim)]">
                    {row.open.text}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Desktop: 3-column table */}
      <Reveal delay={150} className="mt-14 hidden md:block">
        <div className="grid grid-cols-[160px_1fr_1fr] gap-x-5 gap-y-4">
          <span />
          <span className="text-center text-[11px] uppercase tracking-[0.2em] text-[var(--tg-fg-faint)]">
            Closed
          </span>
          <span className="text-center text-[11px] uppercase tracking-[0.2em] text-[var(--tg-fg-faint)]">
            Open and permissionless
          </span>

          {rows.map((row) => (
            <Fragment key={row.label}>
              <div className="flex items-center">
                <span className="text-[13px] text-[var(--tg-fg)]">
                  {row.label}
                </span>
              </div>
              <div className="rounded-sm border border-[var(--tg-line)] bg-[var(--tg-surface)] px-5 py-4 text-center">
                <p className="m-0 text-[14px] font-medium text-[var(--tg-fg)]">
                  {row.closed.heading}
                </p>
                <p className="m-0 mt-1.5 text-[12px] leading-[1.6] text-[var(--tg-fg-dim)]">
                  {row.closed.text}
                </p>
              </div>
              <div className="rounded-sm border border-[var(--tg-line)] bg-[var(--tg-surface)] px-5 py-4 text-center">
                <p className="m-0 text-[14px] font-medium text-[var(--tg-fg)]">
                  {row.open.heading}
                </p>
                <p className="m-0 mt-1.5 text-[12px] leading-[1.6] text-[var(--tg-fg-dim)]">
                  {row.open.text}
                </p>
              </div>
            </Fragment>
          ))}
        </div>
      </Reveal>

      <Reveal delay={250} className="mt-10 text-center">
        <CtaButton
          href="https://alexandria.telegraphprotocol.com"
          target="_blank"
          className="h-10 border border-black/10 hover:!bg-neutral-300"
        >
          Try Alexandria
        </CtaButton>
      </Reveal>
    </Section>
  );
}
