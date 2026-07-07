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
          Telegraph is an open machine economy where any useful service —
          data, models, tools, or expertise — gets priced, traded, and
          rewarded. Whether you provide signals, write the grading logic, run
          infrastructure, or build with verified answers, there is a path to
          earn — and it starts here.
        </Reveal>
      </div>
    </section>
  );
}
