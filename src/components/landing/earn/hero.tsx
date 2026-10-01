import { Reveal } from "../fx/reveal";
import { Typewriter } from "../fx/typewriter";

export function EarnHero() {
  return (
    <section className="bg-[var(--tg-bg)] px-6 py-24 sm:px-8 md:py-[140px]">
      <div className="mx-auto max-w-[860px] text-center">
        <Typewriter
          as="h1"
          text="Earn on Telegraph"
          speed={30}
          className="block m-0 mb-6 text-balance text-[clamp(28px,3.2vw,44px)] font-medium leading-[1.2] tracking-[-0.005em] text-[var(--tg-fg)]"
        />
        <Reveal
          as="p"
          delay={150}
          variant="blur"
          className="mx-auto m-0 max-w-[620px] text-pretty text-[14px] leading-[1.85] text-[var(--tg-fg-dim)]"
        >
          Telegraph is the network that turns intelligence into a graded
          commodity. Providers are ranked by performance for each Intent and
          rewarded when paid demand follows — whether what they provide is a
          model, an API, a dataset, an algorithm, a search system or a tool.
          Whether you supply intelligence, build Evaluators, run a Validator,
          or build with the network, there is a path to earn — and it starts
          here.
        </Reveal>
      </div>
    </section>
  );
}
