"use client";

import {
  Wrench,
  Cpu,
  Bot,
  Code2,
  Layers,
  Terminal,
  ArrowRight,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import Link from "next/link";
import { Card } from "./ui/card";
import { useTheme } from "next-themes";

const floatingIcons = [
  {
    Icon: Wrench,
    position: "right-32 top-[calc(50%-6rem)] -translate-y-1/2",
    rotate: "rotate-6",
    hoverRotate: "group-hover:rotate-[22deg] group-hover:scale-125",
  },
  {
    Icon: Cpu,
    position: "right-20 top-1/2 -translate-y-1/2",
    rotate: "-rotate-3",
    hoverRotate: "group-hover:-rotate-[18deg] group-hover:scale-110",
  },
  {
    Icon: Bot,
    position: "right-40 top-[calc(50%+6rem)] -translate-y-1/2",
    rotate: "rotate-[8deg]",
    hoverRotate: "group-hover:rotate-[26deg] group-hover:scale-110",
  },
  {
    Icon: Code2,
    position: "left-32 top-[calc(50%+5.5rem)] -translate-y-1/2",
    rotate: "-rotate-6",
    hoverRotate: "group-hover:-rotate-[22deg] group-hover:scale-120",
  },
  {
    Icon: Layers,
    position: "left-20 top-1/2 -translate-y-1/2",
    rotate: "rotate-3",
    hoverRotate: "group-hover:rotate-[18deg] group-hover:scale-105",
  },
  {
    Icon: Terminal,
    position: "left-40 top-[calc(50%-5.5rem)] -translate-y-1/2",
    rotate: "-rotate-[8deg]",
    hoverRotate: "group-hover:-rotate-[26deg] group-hover:scale-115",
  },
] as const;

export function ToolLayerSection() {
  const theme = useTheme();
  const isDark = theme.theme === "dark";
  return (
    <section id="tool-layer" className="px-4 lg:py-24 py-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <AnimateOnScroll direction="up" delay={0.1}>
          <Card className="group relative overflow-hidden rounded-4xl border bg-card">
            {isDark ? (
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: "url('/tool-layer/lines.svg')",
                  backgroundRepeat: "repeat-x",
                  backgroundPosition: "left center",
                  backgroundSize: "auto 100%",
                }}
                aria-hidden
              />
            ) : (
              <div
                className="absolute inset-0 opacity-80"
                style={{
                  backgroundImage: "url('/tool-layer/lines.svg')",
                  backgroundRepeat: "repeat-x",
                  backgroundPosition: "left center",
                  backgroundSize: "auto 100%",
                }}
                aria-hidden
              />
            )}

            {floatingIcons.map(({ Icon, position, rotate, hoverRotate }, i) => (
              <AnimateOnScroll
                key={i}
                direction="up"
                delay={0.95}
                className={`absolute ${position} hidden lg:flex`}
              >
                <div
                  className={`${rotate} ${hoverRotate} transition-transform duration-500 flex items-center justify-center w-12 h-12 rounded-lg bg-background/80 border border-border/50 text-primary`}
                  aria-hidden
                >
                  <Icon className="h-6 w-6" />
                </div>
              </AnimateOnScroll>
            ))}

            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-12 lg:py-20 lg:px-16">
              <AnimateOnScroll direction="up" delay={0.15}>
                <h2 className="mb-6 text-4xl text-foreground lg:text-5xl font-space-grotesk font-normal max-w-3xl mx-auto leading-[1.2]">
                  The Tool Layer for{" "}
                  <span className="font-semibold">AI Agents</span>.
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll direction="up" delay={0.25}>
                <p className="mb-8 lg:text-lg text-base leading-relaxed text-muted-foreground max-w-3xl mx-auto">
                  Telegraph wraps complex Bittensor subnets into simple
                  &apos;Tools&apos; for your AI Agents. Whether you are building
                  on OpenClaw, Eliza, or custom bots, you can request verifiable
                  intelligence (like get_deepfake_score or get_market_signal)
                  via a simple API call. You handle the logic; we handle the
                  infrastructure and verification.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll direction="up" delay={0.35}>
                <Button
                  size="hero-primary"
                  className="bg-primary hover:bg-primary/90 group"
                  asChild
                >
                  <Link
                    href="https://telegraph-2.gitbook.io/telegraph"
                    target="_blank"
                  >
                    <Settings className="h-4 w-4" />
                    Start Building
                    <ArrowRight className="h-4 w-4 opacity-30 group-hover:translate-x-0 transition-all duration-200 group-hover:opacity-100 -translate-x-0.5" />
                  </Link>
                </Button>
              </AnimateOnScroll>
            </div>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
