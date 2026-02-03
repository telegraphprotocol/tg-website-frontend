import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Plug, Radio, Settings } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-72 items-center justify-center px-4 lg:py-32 py-20"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="mb-6 font-space-grotesk leading-tight tracking-tight text-foreground text-5xl">
          Know the truth before it happens.
        </h1>
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
          Telegraph turns real-world intelligence into market-ready <span className="font-semibold">signals</span>.<br/> AI
          workers develop models that produce probabilities, scores, alerts, and
          classifications for what's happening now and what's likely next.
          Telegraph fetches and verifies those outputs, then publishes a
          time-stamped on-chain receipt with who, when, confidence, and cost.
          Any market or app can pay per verified inference and plug these
          standardized signals into pricing, risk, and automated decisions.
        </p>
        <p className="mb-12 text-xl text-muted-foreground font-space-grotesk font-medium">
          Signals move faster than headlines.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="hero-primary"
            className="bg-primary text-primary-foreground hover:bg-primary/90 group"
            asChild
          >
            <Link href="/#integrate">
            <Plug className="h-4 w-4" />
              Integrate Signals
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
              Explore Signal Directory
              <ArrowRight className="h-4 w-4 opacity-30 group-hover:translate-x-0 transition-all duration-200 group-hover:opacity-100 -translate-x-0.5" />

            </Link>
          </Button>
          <Button
            variant="secondary"
            size="hero-secondary"
            asChild
            className="group"
          >
            <Link href="/#nodes">
              <Settings className="h-4 w-4" />
              Run a Node
              <ArrowRight className="h-4 w-4 opacity-30 group-hover:translate-x-0 transition-all duration-200 group-hover:opacity-100 -translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

