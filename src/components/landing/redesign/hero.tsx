import { HeroAsk } from "./hero-ask";
import { HeroStats } from "./hero-stats";

export function RedesignHero() {
  return (
    <section className="relative flex min-h-[calc(100vh-72px)] flex-col items-center justify-center border-b border-[var(--tg-line)] px-4 py-20 text-center md:px-8">
      <h1 className="m-0 mb-6 max-w-[900px] text-balance text-[clamp(34px,6vw,72px)] font-normal leading-[1.1] tracking-[0.005em] text-[var(--tg-fg)]">
        A network that turns intelligence into a graded commodity.
      </h1>

      <p className="m-0 mx-auto max-w-[640px] text-pretty text-[clamp(14px,1.3vw,17px)] leading-[1.7] text-[var(--tg-fg-dim)]">
        Ranked by performance. Driven by demand.
        <br />
        Plug in once. Get the best-ranked intelligence for the job.
      </p>

      <HeroAsk />

      <HeroStats />
    </section>
  );
}
