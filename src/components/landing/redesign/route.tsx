import { Fragment } from "react";
import { Reveal } from "../fx/reveal";
import { ArrowRightLine, Box, Section, SectionHeading } from "./shared";

const steps = [
  { num: "1", label: "Resolve intent", text: "match the job being asked" },
  {
    num: "2",
    label: "Read the ranking",
    text: "the current finalized leaderboard",
  },
  { num: "3", label: "Route", text: "to the best eligible miner" },
];

export function Route() {
  return (
    <Section>
      <SectionHeading
        lede='One request goes in. One ranked answer comes back, with a receipt
that proves why it won. The ranking for every intent runs
continuously in the background, so a request never waits for it.'
      >
        One ranked answer.
      </SectionHeading>

      <Reveal delay={150} className="mt-14">
        <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-[0.8fr_auto_2fr_auto_0.9fr]">
          <Box className="text-left">
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[var(--tg-fg-faint)]">
              A request
            </span>
            <p className="mt-3 text-[13px] leading-[1.7] text-[var(--tg-fg-dim)]">
              from a human, app or agent
            </p>
          </Box>

          <ArrowRightLine className="hidden w-8 md:block" />

          <Box className="border-[var(--tg-line-strong)] bg-[var(--tg-surface-strong)]">
            <div className="text-center">
              <span className="block text-[13px] font-medium text-[var(--tg-fg)]">
                Telegraph
              </span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-[var(--tg-fg-faint)]">
                One ranking per intent
              </span>
            </div>
            <div className="mt-6 flex items-stretch">
              {steps.map((s, i) => (
                <Fragment key={s.num}>
                  <div className="flex min-h-[110px] flex-1 basis-0 flex-col items-center justify-start rounded-sm border border-[var(--tg-line)] bg-[var(--tg-bg)] px-3 py-4 text-center">
                    <span className="block text-[11px] text-[var(--tg-fg-faint)]">
                      {s.num}
                    </span>
                    <p className="mt-1.5 text-[12px] font-medium text-[var(--tg-fg)]">
                      {s.label}
                    </p>
                    <p className="mt-1.5 text-[11px] leading-[1.5] text-[var(--tg-fg-dim)]">
                      {s.text}
                    </p>
                  </div>
                  {i < steps.length - 1 ? (
                    <span
                      aria-hidden
                      className="mx-1.5 hidden h-px w-3 shrink-0 self-center bg-[var(--tg-line-strong)] sm:block"
                    />
                  ) : null}
                </Fragment>
              ))}
            </div>
          </Box>

          <ArrowRightLine className="hidden w-8 md:block" />

          <Box className="text-left">
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[var(--tg-fg-faint)]">
              One answer
            </span>
            <div className="mt-3 space-y-1 text-[12px] text-[var(--tg-fg-dim)]">
              <p>who produced it</p>
              <p>their rank for that intent</p>
              <p>at what confidence</p>
            </div>
            <p className="mt-4 border-t border-[var(--tg-line)] pt-3 text-[11px] uppercase tracking-[0.2em] text-[var(--tg-fg-faint)]">
              from $0.01
            </p>
          </Box>
        </div>
      </Reveal>
    </Section>
  );
}
