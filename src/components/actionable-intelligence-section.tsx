import {
  Zap,
  Percent,
  Bell,
  Trophy,
  List,
  Network,
  FileText,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function ActionableIntelligenceSection() {
  return (
    <section id="actionable-intelligence" className="px-4 lg:py-24 py-20">
      <div className="container mx-auto max-w-7xl">
        <AnimateOnScroll direction="up" delay={0.1}>
          <div className="mb-12 text-center">
            <Badge variant="topTitle" className="mb-4 w-fit">
              <Zap className="h-4 w-4 text-primary flex-shrink-0" />
              <span>Actionable Intelligence</span>
            </Badge>
            <h2 className="mb-6 text-4xl text-foreground lg:text-5xl lg:text-5xl font-space-grotesk font-normal max-w-3xl mx-auto leading-[1.2]">
              We are the signal layer for global markets.
            </h2>
            <p className="mb-4 lg:text-lg text-base leading-relaxed text-muted-foreground">
              Telegraph turns real-world intelligence into market-ready signals. AI
              workers develop models that produce probabilities, scores, alerts,
              and classifications for what's happening now and what's likely next.
              Telegraph fetches and verifies those outputs, then publishes a
              time-stamped on-chain receipt with who, when, confidence, and cost.
              Any market or app can pay per verified inference and plug these
              standardized signals into pricing, risk, and automated decisions.
            </p>
            <p className="lg:text-lg text-base leading-relaxed text-muted-foreground">
              A Signal is verified intelligence your apps or agents can act on—a
              probability, score, alert, or classification—produced by AI workers
              and published on-chain with a receipt: who produced it, when, with
              what confidence, and at what cost. Because signals are standardized
              and auditable, any market—especially prediction markets—can ingest
              open inference as a composable input for pricing, risk, and UX, so
              you don't just react to outcomes—you can position for them before
              they happen.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:gap-12 gap-6 lg:grid-cols-2">
          <AnimateOnScroll direction="left" delay={0.2}>
            <div>
              <h3 className="mb-8 lg:text-xl text-lg font-medium text-foreground">
                A signal is a verified unit of intelligence:
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <AnimateOnScroll direction="up" delay={0.3}>
                  <div className="flex flex-row gap-4 items-center hover:translate-y-[-3px] transition-all duration-200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-card border drop-shadow-sm flex-shrink-0">
                      <Percent className="h-6 w-6 text-primary flex-shrink-0" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-medium text-foreground">Probability</h4>
                      <p className="text-sm text-muted-foreground">
                        Likelihood of events.
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll direction="up" delay={0.4}>
                  <div className="flex flex-row gap-4 items-center hover:translate-y-[-3px] transition-all duration-200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-card border drop-shadow-sm flex-shrink-0">
                      <Bell className="h-6 w-6 text-primary flex-shrink-0" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-medium text-foreground">Alert</h4>
                      <p className="text-sm text-muted-foreground">
                        Real-time market alerts.
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll direction="up" delay={0.5}>
                  <div className="flex flex-row gap-4 items-center hover:translate-y-[-3px] transition-all duration-200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-card border drop-shadow-sm flex-shrink-0">
                      <Trophy className="h-6 w-6 text-primary flex-shrink-0" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-medium text-foreground">Score</h4>
                      <p className="text-sm text-muted-foreground">
                        AI performance ratings.
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll direction="up" delay={0.6}>
                  <div className="flex flex-row gap-4 items-center hover:translate-y-[-3px] transition-all duration-200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-card border drop-shadow-sm flex-shrink-0">
                      <List className="h-6 w-6 text-primary flex-shrink-0" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-medium text-foreground">
                        Classification
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Smart data categorization.
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={0.2}>
            <div>
              <h3 className="mb-8 lg:text-xl text-lg font-medium text-foreground">
                Signals are:
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <AnimateOnScroll direction="up" delay={0.3}>
                  <div className="flex flex-row gap-4 items-center hover:translate-y-[-3px] transition-all duration-200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-card border drop-shadow-sm flex-shrink-0">
                      <Zap className="h-6 w-6 text-primary flex-shrink-0" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-medium text-foreground">
                        Produced By Miners
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Distributed AI outputs.
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll direction="up" delay={0.4}>
                  <div className="flex flex-row gap-4 items-center hover:translate-y-[-3px] transition-all duration-200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-card border drop-shadow-sm flex-shrink-0">
                      <Network className="h-6 w-6 text-primary flex-shrink-0" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-medium text-foreground">
                        Verified By Nodes
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Protocol-level output validation.
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll direction="up" delay={0.5} className="lg:col-span-2">
                  <div className="flex flex-row gap-4 items-center hover:translate-y-[-3px] transition-all duration-200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-card border drop-shadow-sm flex-shrink-0">
                      <FileText className="h-6 w-6 text-primary flex-shrink-0" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-medium text-foreground">
                        Published On-Chain With A Receipt
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Who • Confidence • Cost
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
            </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}

