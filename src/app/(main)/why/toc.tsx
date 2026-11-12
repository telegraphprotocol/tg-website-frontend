"use client";

import { useEffect, useState } from "react";
import { Eyebrow } from "@/components/landing/redesign/shared";

export function Toc({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const update = () => {
      // The current section is the last heading that has scrolled past the top offset.
      let current = "";
      for (const { id } of items) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [items]);

  return (
    <nav aria-label="In this essay" className="hidden lg:block">
      <div className="sticky top-28 border-l border-[var(--tg-line)] pl-5">
        <Eyebrow>In this essay</Eyebrow>
        <ol className="m-0 mt-4 flex list-none flex-col gap-3 p-0">
          {items.map(({ id, label }) => {
            const on = id === active;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={on ? "true" : undefined}
                  className={`-ml-[21px] block border-l-2 pl-[19px] text-[13px] leading-[1.5] no-underline transition-colors ${
                    on
                      ? "border-[var(--tg-fg)] font-medium text-[var(--tg-fg)]"
                      : "border-transparent text-[var(--tg-fg-dim)] hover:text-[var(--tg-fg)]"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
