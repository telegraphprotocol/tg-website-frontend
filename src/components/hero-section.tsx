import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Plug, Radio, Settings } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-72 items-center justify-center px-4 lg:py-32 py-20"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <AnimateOnScroll direction="up" delay={0.1}>
          <h1 className="mb-6 font-space-grotesk leading-tight tracking-tight text-foreground text-5xl">
            Know the truth before it happens.
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll direction="up" delay={0.2}>
          <p className="mb-6 text-base leading-relaxed text-muted-foreground lg:text-xl">
            Telegraph turns real-world intelligence into market-ready <span className="font-semibold">signals</span>.<br/> AI
            workers develop models that produce probabilities, scores, alerts, and
            classifications for what's happening now and what's likely next.
            Telegraph fetches and verifies those outputs, then publishes a
            time-stamped on-chain receipt with who, when, confidence, and cost.
            Any market or app can pay per verified inference and plug these
            standardized signals into pricing, risk, and automated decisions.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll direction="up" delay={0.3}>
          <p className="mb-12 lg:text-xl text-base text-muted-foreground font-space-grotesk font-medium">
            Signals move faster than headlines.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll direction="up" delay={0.4}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="hero-primary"
              className="bg-primary hover:bg-primary/90 group"
              asChild
            >
              <Link href="https://telegraph-2.gitbook.io/telegraph" target="_blank">
              <Plug className="h-4 w-4" />
                Start Building
                <ArrowRight className="h-4 w-4 opacity-30 group-hover:translate-x-0 transition-all duration-200 group-hover:opacity-100 -translate-x-0.5" />
              </Link>
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
              <Link href="https://telegraph-2.gitbook.io/telegraph/node-overview/registering-a-telegraph-node" target="_blank">
                <Settings className="h-4 w-4" />
                Run a Node
                <ArrowRight className="h-4 w-4 opacity-30 group-hover:translate-x-0 transition-all duration-200 group-hover:opacity-100 -translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

