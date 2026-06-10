import { CtaButton } from "./cta-button";
import { DecodeText } from "./fx/decode-text";
import { Reveal } from "./fx/reveal";

export function BuildCta() {
  return (
    <section className="bg-[var(--tg-bg)] px-6 py-24 text-center md:px-8 md:py-[120px]">
      <div className="mx-auto max-w-[780px]">
        <DecodeText
          text="The Network That Builds Itself"
          className="block m-0 mb-7 text-[clamp(22px,2.2vw,30px)] font-normal leading-[1.35] tracking-[0.005em] text-[var(--tg-fg)]"
          duration={1300}
        />
        <Reveal
          as="p"
          delay={200}
          variant="blur"
          className="mx-auto m-0 mb-10 max-w-[720px] text-pretty text-[14px] leading-[1.85] text-[var(--tg-fg-dim)]"
        >
          Every dollar invested in AI anywhere in the world makes Telegraph
          better - for free. Telegraph does not train AI models and does not
          need to. Every frontier lab, every open-source project, every new
          model that gets funded and shipped simply becomes a better supplier
          on the Telegraph network. The billions being poured into AI
          infrastructure are, in effect, subsidising the protocol&apos;s supply
          side at no cost.
        </Reveal>
        <Reveal delay={350} className="flex flex-wrap justify-center gap-3">
          <CtaButton
            href="https://terminal.telegraphprotocol.com/intelligence-terminal"
            target="_blank"
            arrow={true}
          >
            Launch Terminal
          </CtaButton>
          <CtaButton
            href="https://docs.telegraphprotocol.com/"
            target="_blank"
            variant="dark"
            arrow={true}
          >
            Read the Docs &amp; Build
          </CtaButton>
        </Reveal>
      </div>
    </section>
  );
}
