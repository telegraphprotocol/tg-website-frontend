import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "ghost" | "dark" | "accent" | "themed";

const styles: Record<Variant, string> = {
  primary: "bg-[#f2f2f2] text-[#000000] hover:bg-white",
  ghost:
    "bg-[rgba(20,20,20,0.6)] text-[var(--tg-fg)] backdrop-blur hover:bg-[rgba(30,30,30,0.7)]",
  dark: "bg-[#1a1a1a] text-[var(--tg-fg)]  hover:bg-[#222]",
  // Inverts with the page theme: light button on dark, dark button on light
  themed:
    "bg-[var(--tg-fg)] text-[var(--tg-bg)] hover:bg-[var(--tg-fg-dim)] hover:text-[var(--tg-bg)]",
  accent:
    "border border-[#f05c2b]/60 bg-gradient-to-r from-[#f05c2b]/25 to-[#f05c2b]/10 text-[#ffd9cc] shadow-[0_0_24px_rgba(240,92,43,0.25)] backdrop-blur hover:border-[#f05c2b] hover:from-[#f05c2b]/40 hover:to-[#f05c2b]/20 hover:shadow-[0_0_32px_rgba(240,92,43,0.45)]",
};

export function CtaButton({
  href,
  variant = "primary",
  target = "_self",
  className = "",
  children,
  arrow = true,
  onClick,
}: {
  href: string;
  variant?: Variant;
  target?: string;
  className?: string;
  children: ReactNode;
  arrow?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      target={target}
      onClick={onClick}
      className={`group tg-glitch-hover inline-flex items-center gap-2.5 whitespace-nowrap rounded-sm px-[18px] py-[11px] text-[14px] font-medium leading-none no-underline transition-all ${styles[variant]} ${className}`}
    >
      {children}
      {arrow ? (
        <span
          aria-hidden
          className="inline-block transition-transform duration-200 group-hover:translate-x-1"
        >
          <ArrowRight className="h-4 w-4" />
        </span>
      ) : null}
    </Link>
  );
}
