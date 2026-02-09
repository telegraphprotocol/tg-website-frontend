"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plug, Radio, Settings } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function HeroSection() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <section
      id="home"
      className="flex min-h-72 items-center justify-center px-4 lg:py-32 py-20"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-0">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <AnimateOnScroll direction="up" delay={0.1}>
              <h1 className="mb-6 font-space-grotesk leading-tight tracking-tight text-foreground lg:text-5xl text-4xl">
                Know the truth before it happens.
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll direction="up" delay={0.2}>
              <p className="mb-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
                Telegraph turns real-world intelligence into market-ready{" "}
                <span className="font-semibold">signals</span>.<br /> AI workers
                develop models that produce probabilities, scores, alerts, and
                classifications for what's happening now and what's likely next.
                Telegraph fetches and verifies those outputs, then publishes a
                time-stamped on-chain receipt with who, when, confidence, and
                cost. Any market or app can pay per verified inference and plug
                these standardized signals into pricing, risk, and automated
                decisions.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll direction="up" delay={0.3}>
              <p className="mb-12 lg:text-lg text-base text-muted-foreground font-space-grotesk font-medium">
                Signals move faster than headlines.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll direction="up" delay={0.4}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Button
                  size="hero-primary"
                  className="bg-primary hover:bg-primary/90 group"
                  onClick={() => setOpenDialog(true)}
                >
                  <Plug className="h-4 w-4" />
                  Launch Terminal
                  <ArrowRight className="h-4 w-4 opacity-30 group-hover:translate-x-0 transition-all duration-200 group-hover:opacity-100 -translate-x-0.5" />
                </Button>
                <Button
                  variant="secondary"
                  size="hero-secondary"
                  asChild
                  className="group"
                >
                  <Link href="/marketplace">
                    <Radio className="h-4 w-4" />
                    Marketplace
                    <ArrowRight className="h-4 w-4 opacity-30 group-hover:translate-x-0 transition-all duration-200 group-hover:opacity-100 -translate-x-0.5" />
                  </Link>
                </Button>
                <Button
                  variant="secondary"
                  size="hero-secondary"
                  asChild
                  className="group"
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
              </div>
            </AnimateOnScroll>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 group">
            <AnimateOnScroll direction="left" delay={0.4}>
              <div className="relative w-full max-w-md lg:max-w-xl group-hover:scale-[1.02] transition-all duration-700">
                <Image
                  src="/hero/hero-signal.svg"
                  alt="Market-ready Signal"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  priority
                  draggable={false}
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              Coming Soon
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-muted-foreground text-[15px]">
            Launch Terminal will be available soon. Stay tuned!
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </section>
  );
}
