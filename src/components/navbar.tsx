import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
            src="/logo.png"
            alt="Telegraph"
            width={28}
            height={28}
            className="h-5 w-auto"
          />
          <span className="font-medium hidden md:block">Telegraph</span>
        </Link>

        <div className="flex items-center gap-3">
          <CtaButton href="/marketplace" variant="dark" arrow={false}>
            <span>Marketplace</span>
          </CtaButton>
          <CtaButton href="#launch" arrow={false}>
            <span>
              <span className="hidden md:inline">Launch</span> Terminal
            </span>
          </CtaButton>
        </div>
      </div>
    </header>
  );
}
