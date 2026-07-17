import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { DecodeText } from "../fx/decode-text";
import { Reveal } from "../fx/reveal";

type Article = {
  id: string;
  outlet: string;
  title: string;
  summary: string;
  publishedAt: string;
  publishedLabel: string;
  href: string;
  cover: string;
  coverAlt: string;
};

const articles: Article[] = [
  {
    id: "03",
    outlet: "0xSammy on X",
    title: "Machines Will Become Our Masters",
    summary:
      "The protocols building for machine customers — a breakdown of the emerging machine economy stack, naming Telegraph alongside peaq, xMaquina, Auki, CrunchDAO, and OpenServ as infrastructure for autonomous, machine-to-machine commerce.",
    publishedAt: "2026-07-09",
    publishedLabel: "Jul 9, 2026",
    href: "https://x.com/i/article/2075174035885862914",
    cover: "/media/WJoBQyLi_400x400.jpg",
    coverAlt: "Machines Will Become Our Masters",
  },
  {
    id: "02",
    outlet: "e27",
    title:
      "Agentic commerce's dirty secret: The data powering AI purchases is often wrong",
    summary:
      "Why the next wave of agent-led commerce depends on verifiable, trustworthy data — and how Telegraph's settlement layer addresses the integrity gap behind autonomous purchases.",
    publishedAt: "2026-06-23",
    publishedLabel: "Jun 23, 2026",
    href: "https://e27.co/agentic-commerces-dirty-secret-the-data-powering-ai-purchases-is-often-wrong-20260623/",
    cover: "/media/agentic-commerce-e27.png",
    coverAlt: "e27 — Agentic commerce's dirty secret",
  },
  {
    id: "01",
    outlet: "The Open Source Press",
    title: "Telegraph Wants to Be the Visa of Machine Intelligence",
    summary:
      "A look at Telegraph's vision for a verified intelligence marketplace — a settlement rail where AI models supply trusted answers to the autonomous agents acting on them.",
    publishedAt: "2026-06-08",
    publishedLabel: "Jun 8, 2026",
    href: "https://www.theopensourcepress.com/telegraph-wants-to-be-the-visa-of-machine-intelligence/",
    cover: "/telegraph-social-card.jpg",
    coverAlt: "Telegraph Wants to Be the Visa of Machine Intelligence",
  },
];

function ArticleCard({ item }: { item: Article }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative grid grid-cols-1 border border-[var(--tg-line)] bg-[var(--tg-bg)] no-underline transition-colors duration-200 hover:border-[var(--tg-line-strong)] md:grid-cols-[minmax(0,42%)_1fr]"
    >
      <span className="tg-corner tg-corner-tl" aria-hidden />
      <span className="tg-corner tg-corner-tr" aria-hidden />
      <span className="tg-corner tg-corner-bl" aria-hidden />
      <span className="tg-corner tg-corner-br" aria-hidden />

      <div className="relative aspect-[16/9] overflow-hidden border-b border-[var(--tg-line-soft)] bg-[#0c0c0c] md:aspect-auto md:border-b-0 md:border-r">
        <Image
          src={item.cover}
          alt={item.coverAlt}
          fill
          sizes="(min-width: 768px) 42vw, 100vw"
          className="object-cover opacity-90 transition-all duration-300 group-hover:scale-[1.02] group-hover:opacity-100"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0"
        />
      </div>

      <div className="flex flex-col p-7 md:p-9">
        <header className="mb-5 flex items-center gap-3">
          <span className="text-[11px] tracking-[0.22em] text-[var(--tg-fg-faint)]">
            PRESS / {item.id}
          </span>
          <span className="h-px flex-1 bg-[var(--tg-line-soft)]" />
          <time
            dateTime={item.publishedAt}
            className="text-[10px] uppercase tracking-[0.18em] text-[var(--tg-fg-faint)]"
          >
            {item.publishedLabel}
          </time>
        </header>

        <p className="m-0 mb-3 text-[12px] uppercase tracking-[0.16em] text-[var(--tg-fg-dim)]">
          {item.outlet}
        </p>
        <h3 className="m-0 mb-4 text-pretty text-[20px] font-medium leading-[1.35] tracking-[0.005em] text-[var(--tg-fg)] transition-colors duration-200 group-hover:text-white md:text-[22px]">
          {item.title}
        </h3>
        <p className="m-0 mb-6 text-pretty text-[13.5px] leading-[1.8] text-[var(--tg-fg-dim)]">
          {item.summary}
        </p>

        <div className="mt-auto flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-[var(--tg-fg-dim)] transition-colors duration-200 group-hover:text-[var(--tg-fg)]">
          Read on {item.outlet}
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </div>
      </div>
    </a>
  );
}

export function MediaArticles() {
  return (
    <section className="bg-[var(--tg-bg)] px-6 py-20 sm:px-8 md:py-[110px]">
      <div className="mx-auto max-w-[1080px]">
        <div className="mb-12 md:mb-16">
          <DecodeText
            text="Coverage"
            className="block m-0 mb-5 text-[clamp(22px,2.2vw,30px)] font-normal tracking-[0.005em] text-[var(--tg-fg)]"
          />
          <Reveal
            as="p"
            variant="blur"
            delay={150}
            className="m-0 max-w-[620px] text-pretty text-[13.5px] leading-[1.85] text-[var(--tg-fg-dim)]"
          >
            Selected articles, listed most recent first. Click through to read
            each piece in full on the publishing outlet.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-5 md:gap-6">
          {articles.map((item) => (
            <ArticleCard key={item.id} item={item} />
          ))}
        </div>

        <Reveal
          as="p"
          variant="blur"
          delay={250}
          className="mx-auto mt-16 max-w-[520px] text-center text-[12px] leading-[1.8] text-[var(--tg-fg-faint)]"
        >
          For press inquiries, reach out at{" "}
          <a
            href="mailto:info@telegraphprotocol.com"
            className="text-[var(--tg-fg-dim)] underline-offset-4 hover:text-[var(--tg-fg)] hover:underline"
          >
            info@telegraphprotocol.com
          </a>
          .
        </Reveal>
      </div>
    </section>
  );
}
