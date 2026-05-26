import Link from "next/link";
import { Coins, Terminal } from "lucide-react";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { CtaButton } from "./landing/cta-button";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex h-[72px] items-center border-b border-[var(--tg-line)] bg-[#010101]/50 backdrop-blur-md supports-[backdrop-filter]:bg-[#010101]/55">
      <div className="flex w-full items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          aria-label="Telegraph home"
          className="flex items-center gap-2.5 text-[17px] font-medium text-[var(--tg-fg)] no-underline"
        >
          <Image
            src="/t-logo.png"
            alt="Telegraph"
            width={28}
            height={28}
            className="h-5 w-auto"
          />
          <span className="font-medium hidden md:block">Telegraph</span>
        </Link>

        <div className="flex items-center gap-2 md:gap-3">
          <Link
            href="https://x.com/Telegraphprotoc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegraph on X"
            className="inline-flex items-center justify-center rounded-sm bg-[#1a1a1a] p-[11px] text-[var(--tg-fg)] transition-colors hover:bg-[#222]"
          >
            <FaXTwitter className="h-4 w-4" aria-hidden />
          </Link>
          <CtaButton
            href="https://discord.gg/telegraphprotocol"
            target="_blank"
            variant="dark"
            arrow={false}
          >
            <FaDiscord className="h-4 w-4 opacity-90" aria-hidden />
            <span className="hidden md:inline">Join Community</span>
          </CtaButton>
          <CtaButton href="/earn" variant="dark" arrow={false}>
            <Coins className="h-4 w-4 opacity-80" aria-hidden />
            <span>Earn</span>
          </CtaButton>
          <CtaButton
            href="https://telegraph-terminal.vercel.app"
            target="_blank"
            arrow={false}
          >
            <Terminal className="h-4 w-4" strokeWidth={2.5} aria-hidden />
            <span className="font-semibold">
              <span className="hidden md:inline">Launch</span> Terminal
            </span>
          </CtaButton>
        </div>
      </div>
    </header>
  );
}
