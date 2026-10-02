import { HeroStats } from "../redesign/hero-stats";

export function EarnHero() {
  return (
    <section className="relative flex flex-col items-center justify-center border-b border-[var(--tg-line)] px-4 py-24 text-center md:px-8 md:py-32">
      <h1 className="m-0 mb-6 max-w-[900px] text-balance text-[clamp(27px,4.8vw,58px)] font-normal leading-[1.1] tracking-[0.005em] text-[var(--tg-fg)]">
        Earn on Telegraph
      </h1>

      <p className="m-0 mx-auto mb-5 max-w-[640px] text-pretty text-[clamp(14px,1.3vw,17px)] leading-[1.7] text-[var(--tg-fg)]">
        Supply intelligence. Improve how it is measured. Verify the network.
        Bring demand.
      </p>

      <p className="m-0 mx-auto max-w-[640px] text-pretty text-[14px] leading-[1.85] text-[var(--tg-fg-dim)]">
        Telegraph is the network that turns intelligence into a graded
        commodity. Providers compete on measured performance within each
        Intent, paid demand routes through the resulting rankings, and the
        participants who supply, evaluate and secure the network are rewarded
        through the protocol economy.
      </p>

      <HeroStats />
    </section>
  );
}
