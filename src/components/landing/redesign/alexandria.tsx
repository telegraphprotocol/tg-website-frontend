import { Reveal } from "../fx/reveal";
import { CtaButton } from "../cta-button";
import { AlexandriaPreview } from "./alexandria-preview";
import { Section, SectionHeading } from "./shared";

export function Alexandria() {
  return (
    <Section>
      <SectionHeading
        wide
        lede="Telegraph is the network underneath. Alexandria is the interface on top."
      >
        Alexandria is how humans and machines
        <br />
        query the network.
      </SectionHeading>

      <Reveal delay={150} className="mt-14">
        <AlexandriaPreview />
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
