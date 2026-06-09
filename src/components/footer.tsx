import Link from "next/link";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";

const features = [
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  { label: "Lorem Ipsum", isNew: true },
] as const;
const solutions = [
  "Lorem Ipsum",
  { label: "Lorem Ipsum", isNew: true },
  "Lorem Ipsum",
  "Lorem Ipsum",
] as const;
const resources = [
  "Lorem Ipsum",
  "Lorem Ipsum",
  "Lorem Ipsum",
  { label: "Lorem Ipsum", isNew: true },
] as const;
const socials = [
  { label: "Discord", href: "#" },
  { label: "Twitter", href: "https://x.com/Telegraphprotoc" },
];

type Item = string | { label: string; isNew?: boolean };

function Col({ title, items }: { title: string; items: readonly Item[] }) {
  return (
    <div>
      <h4 className="m-0 mb-5 text-[13px] font-medium text-[var(--tg-fg)] tracking-[0.005em]">
        {title}
      </h4>
      <ul className="m-0 flex list-none flex-col gap-4 p-0">
        {items.map((item, i) => {
          const obj = typeof item === "string" ? { label: item } : item;
          return (
            <li key={i}>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-[13px] text-[var(--tg-fg-dim)] transition-colors hover:text-[var(--tg-fg)] no-underline"
              >
                {obj.label}
                {"isNew" in obj && obj.isNew ? <Badge /> : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Badge() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] text-[var(--tg-fg)]">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
      New
    </span>
  );
}

export function Footer() {
  return (
    <footer className="bg-[var(--tg-bg)] px-8 py-9 border-t border-[var(--tg-line)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-start justify-between gap-4 text-[12px] text-[var(--tg-fg)] md:flex-row md:items-center">
          <span>© 2026 Telegraph Protocol. All Rights Reserved.</span>
          <div className="flex flex-wrap items-center gap-5 md:gap-8">
            <Link
              href="/Machina_Token_Price_Scenarios_v66.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm border border-amber-500/80 bg-amber-500/10 px-2.5 py-1 text-amber-400 no-underline transition-colors hover:border-amber-400 hover:bg-amber-500/15 hover:text-amber-300"
            >
              MACHINA: Token Report
            </Link>
            <Link
              href="mailto:info@telegraphprotocol.com"
              className="text-[var(--tg-fg-dim)] no-underline hover:text-[var(--tg-fg)]"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="text-[var(--tg-fg-dim)] no-underline hover:text-[var(--tg-fg)]"
            >
              Privacy Policy
            </Link>
            {/* <Link
              href="/terms"
              className="text-[var(--tg-fg-dim)] no-underline hover:text-[var(--tg-fg)]"
            >
              Terms of Service
            </Link> */}
            <Link
              href="/earn"
              className="text-[var(--tg-fg-dim)] no-underline hover:text-[var(--tg-fg)]"
            >
              Earn
            </Link>
            <Link
              href="/Whitepapers%20-%20Telegraph%20Protocol.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--tg-fg-dim)] no-underline hover:text-[var(--tg-fg)]"
            >
              Whitepaper
            </Link>
            <span
              aria-hidden
              className="hidden h-3.5 w-px bg-[var(--tg-line)] md:inline-block"
            />
            <div className="flex items-center gap-4">
              <Link
                href="https://x.com/Telegraphprotoc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegraph on X"
                className="inline-flex items-center text-[var(--tg-fg-dim)] no-underline transition-colors hover:text-[var(--tg-fg)]"
              >
                <FaXTwitter className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="https://discord.gg/telegraphprotocol"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegraph on Discord"
                className="inline-flex items-center text-[var(--tg-fg-dim)] no-underline transition-colors hover:text-[var(--tg-fg)]"
              >
                <FaDiscord className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
