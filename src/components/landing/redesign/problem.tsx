import { Reveal } from "../fx/reveal";
import { Box, Section, SectionHeading } from "./shared";

export function Problem() {
  return (
    <Section>
      <SectionHeading
        lede="The intelligence for every specific job already exists across
models, APIs, datasets and tools. The demand is arriving from humans,
apps, agents and machines. What is missing is the open market between
them."
      >
        The problem we&apos;ve solved.
      </SectionHeading>

      <Reveal delay={150} className="mt-14">
        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-[1fr_1.1fr_1fr]">
          <Box className="flex flex-col justify-center">
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[var(--tg-fg-faint)]">
              Supply, already built
            </span>
            <p className="mt-3 text-[13px] leading-[1.7] text-[var(--tg-fg-dim)]">
              models, APIs, datasets, tools
            </p>
          </Box>

          <Box className="flex flex-col items-center justify-center border-dashed border-[var(--tg-line-strong)] text-center">
            <p className="text-[13px] leading-[1.7] text-[var(--tg-fg)]">
              no neutral market
              <br />
              to measure and rank intelligence
            </p>
          </Box>

          <Box className="flex flex-col justify-center text-right md:text-right">
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[var(--tg-fg-faint)]">
              Demand, arriving
            </span>
            <p className="mt-3 text-[13px] leading-[1.7] text-[var(--tg-fg-dim)]">
              humans, apps, agents, machines
            </p>
          </Box>
        </div>
      </Reveal>
    </Section>
  );
}
