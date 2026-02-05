import { Zap, Plug, Route, Brain, FileText, ArrowRight, Activity } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import Link from "next/link"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function ProcessSection() {
  const steps = [
    {
      title: "Request",
      description: "A market contract calls a Telegraph Port",
      icon: <Plug className="h-6 w-6 text-primary" />
    },
    {
      title: "Route",
      description: "Nodes listen, validate, and route the payload",
      icon: <Route className="h-6 w-6 text-primary" />
    },
    {
      title: "Infer",
      description: "The subnet produces inference",
      icon: <Brain className="h-6 w-6 text-primary" />
    },
    {
      title: "Publish",
      description: "Nodes write the signal on-chain with proof",
      icon: <FileText className="h-6 w-6 text-primary" />
    },
    {
      title: "Act",
      description: "Callback triggers market logic",
      icon: <Activity className="h-6 w-6 text-primary" />
    },
  ]

  return (
    <section id="how-it-works" className="px-4 lg:py-24 py-20">
      <div className="container mx-auto max-w-7xl">
        <AnimateOnScroll direction="up" delay={0.1}>
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <Badge variant="topTitle" className="mb-4 w-fit">
              <Zap className="h-4 w-4 text-primary flex-shrink-0" />
              <span>The Process</span>
            </Badge>
            <h2 className="mb-6 text-4xl text-foreground lg:text-5xl lg:text-5xl font-space-grotesk font-normal leading-[1.2]">
              Connecting is easy.
            </h2>
            <p className="mb-4 lg:text-lg text-base leading-relaxed text-muted-foreground">
            Connect to a Port, then place simple, standard requests (what you need, where, how often, and your max spend) to pull in the right signals—each delivered with clear receipts like source, time, confidence, and cost—while your Port budget handles payment and settlement automatically so it scales smoothly as you grow. 
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 overflow-hidden">
          <AnimateOnScroll direction="left" delay={0.2}>
            <div className="lg:space-y-8 space-y-6">
              {steps.map((step, index) => (
                <AnimateOnScroll key={index} direction="up" delay={0.1 + index * 0.1}>
                  <div className="flex gap-4 w-full group">
                <div className={cn("flex flex-row gap-4 items-center w-full", index !== steps.length - 1 && "lg:border-b lg:border-border/50 lg:pb-8")}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-card border drop-shadow-sm group-hover:-translate-x-[-6px] transition-all duration-200">
                    {step.icon}
                  </div>
                  <div className="flex flex-col gap-1 group-hover:-translate-x-[-6px] transition-all duration-200">
                  <h4 className="font-medium text-foreground">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
              </div>
              </AnimateOnScroll>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={0.3}>
            <div className="relative overflow-hidden rounded-lg bg-muted relative overflow-hidden group border border-border/50">
            <div className="absolute inset-0 opacity-30 scale-[1.7]">
              <Image
                src="/section/vector.svg"
                alt="Vector pattern"
                fill
                className="object-cover"
                aria-hidden="true"
              />
            </div>
            <div className="relative z-10 flex h-full min-h-[400px] items-center justify-center -bottom-16 -right-16 p-8 group-hover:-bottom-12 group-hover:-right-12 transition-all duration-400 drop-shadow-md">
              <Image
                src="/section/process.png"
                alt="Telegraph Protocol signal processing and verification workflow"
                width={800}
                height={800}
                className="object-cover"
                draggable={false}
                loading="lazy"
              />
            </div>
          </div>
          </AnimateOnScroll>
        </div>
        <AnimateOnScroll direction="up" delay={0.4}>
          <div className="flex justify-center">
            <Button variant="secondary" size="section-secondary" className="mt-12 group" asChild>
            <Link href="mailto:info@telegraphprotocop.com">
              Contact us
              <ArrowRight className="h-4 w-4 opacity-30 group-hover:translate-x-0 transition-all duration-200 group-hover:opacity-100 -translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>

    </section>
  )
}

