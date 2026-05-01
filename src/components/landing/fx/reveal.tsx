"use client";

import { ReactNode } from "react";
import { useInView } from "./use-in-view";

type Variant = "slide" | "blur" | "fade";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  variant?: Variant;
  as?: "div" | "section" | "header" | "ul" | "li" | "p" | "span";
};

const variantClass: Record<Variant, string> = {
  slide: "tg-reveal",
  blur: "tg-reveal-blur",
  fade: "tg-reveal-fade",
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.15,
  variant = "slide",
  as = "div",
}: Props) {
  const { ref, inView } = useInView<HTMLElement>(threshold);
  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref}
      className={`${variantClass[variant]} ${inView ? "is-in" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
