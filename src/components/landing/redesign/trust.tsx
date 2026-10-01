import { Reveal } from "../fx/reveal";
import { Box, Section, SectionHeading } from "./shared";

const items = [
  {
    heading: "Independent Validators",
    text: "verify protocol execution and finalized rankings",
  },
  {
    heading: "Competitive Evaluation",
    text: "the grading standard can be challenged",
  },
  {
    heading: "Open Supply",
    text: "providers compete under the same Intent-specific measurement",
  },
  {
    heading: "Real Demand",
    text: "providers earn from fulfilled paid usage",
  },
];

export function Trust() {
  return (
    <Section>
      <SectionHeading
        lede={
          <>
            A ranking only means something if nobody can pay their way to the
            top.{" "}
            <strong className="font-medium text-[var(--tg-fg)]">
              A single company ranking intelligence is a company selling
              placement, so no single company runs the scoring.
            </strong>
          </>
        }
      >
        Nobody can buy the top spot.
      </SectionHeading>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.heading} delay={i * 100}>
            <Box className="h-full text-center">
              <h3 className="m-0 text-[15px] font-medium text-[var(--tg-fg)]">
                {item.heading}
              </h3>
              <p className="mt-2.5 text-[13px] leading-[1.6] text-[var(--tg-fg-dim)]">
                {item.text}
              </p>
            </Box>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
