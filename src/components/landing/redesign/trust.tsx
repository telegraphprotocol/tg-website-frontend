import { Reveal } from "../fx/reveal";
import { Box, Section, SectionHeading } from "./shared";

const items = [
  { heading: "Independent validators", text: "no stake in who wins" },
  {
    heading: "Open scoring logic",
    text: "public, deterministic and replaceable",
  },
  {
    heading: "Paid by real demand",
    text: "miners earn when someone pays for their answer",
  },
  {
    heading: "A 2% protocol fee",
    text: "the protocol owns no supply, so the ranking is the only thing it sells",
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
