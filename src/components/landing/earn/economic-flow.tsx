import { Reveal } from "../fx/reveal";
import { ArrowDownLine, Box, Section, SectionHeading } from "../redesign/shared";

const boxText = "text-center text-[14px] leading-[1.6] text-[var(--tg-fg)]";

export function EconomicFlow() {
  return (
    <Section className="border-b-0">
      <SectionHeading align="center">How value moves through Telegraph</SectionHeading>

      <Reveal className="mx-auto mt-14 flex max-w-[720px] flex-col gap-4">
        <Box className={boxText}>Consumers buy intelligence in USDC</Box>
        <ArrowDownLine />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Box className={boxText}>2% → Protocol Treasury</Box>
          <Box className={boxText}>98% → Miner settlement</Box>
        </div>
        <ArrowDownLine />
        <Box className={boxText}>
          Miner settlement value acquires MACHINA through the protocol
          settlement process
        </Box>
        <ArrowDownLine />
        <Box className={boxText}>
          Validators and Evaluators participate in the separate fixed MACHINA
          emission economy
        </Box>
      </Reveal>

      <Reveal delay={150}>
        <p className="mx-auto m-0 mt-8 max-w-[560px] text-center text-pretty text-[12.5px] leading-[1.8] text-[var(--tg-fg-dim)]">
          Miners earn from paid demand. Validators and Evaluators are rewarded
          through protocol emissions. These are separate economic flows.
        </p>
      </Reveal>
    </Section>
  );
}
