import { Reveal } from "../fx/reveal";
import { CtaButton } from "../cta-button";
import { AnjomanPreview } from "./anjoman-preview";
import { Section, SectionHeading } from "./shared";

export function Anjoman() {
  return (
    <Section>
      <SectionHeading
        wide
        lede="Telegraph is the network underneath. Anjoman is the interface on top."
      >
        Anjoman is how humans and machines
        <br />
        query the network.
      </SectionHeading>

      <Reveal delay={150} className="mt-14">
        <AnjomanPreview />
      </Reveal>

      <Reveal delay={250} className="mt-10 text-center">
        <CtaButton
          href="https://anjoman.ai"
          target="_blank"
          className="h-10 border border-black/10 hover:!bg-neutral-300"
        >
          Try Anjoman
        </CtaButton>
      </Reveal>
    </Section>
  );
}
