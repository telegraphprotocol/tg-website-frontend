import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "ghost" | "dark";

const styles: Record<Variant, string> = {
  primary: "bg-[#f2f2f2] text-[#000000] hover:bg-white",
  ghost:
    "bg-[rgba(20,20,20,0.6)] text-[var(--tg-fg)] backdrop-blur hover:bg-[rgba(30,30,30,0.7)]",
  dark: "bg-[#1a1a1a] text-[var(--tg-fg)]  hover:bg-[#222]",
};

export function CtaButton({
  href,
  variant = "primary",
  target = "_self",
  className = "",
  children,
  arrow = true,
}: {
  href: string;
  variant?: Variant;
  target?: string;
  className?: string;
  children: ReactNode;
  arrow?: boolean;
}) {
  return (
    <Link
      href={href}
      target={target}
      className={`group inline-flex items-center gap-2.5 whitespace-nowrap rounded-sm px-[18px] py-[11px] text-[14px] font-medium leading-none no-underline transition-all ${styles[variant]} ${className}`}
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
