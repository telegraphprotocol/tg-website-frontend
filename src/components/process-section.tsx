import { Zap, Percent, Plug, Route, Brain, FileText, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import Link from "next/link"

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
      icon: <ArrowRight className="h-6 w-6 text-primary" />
    },
  ]

  return (
    <section id="how-it-works" className="px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <Badge variant="topTitle" className="mb-4 w-fit">
            <Zap className="h-4 w-4 text-primary flex-shrink-0" />
            <span>The Process</span>
          </Badge>
          <h2 className="mb-6 text-4xl text-foreground md:text-5xl lg:text-5xl font-space-grotesk font-normal leading-[1.2]">
            Connecting is easy.
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
          Connect to a Port, then place simple, standard requests (what you need, where, how often, and your max spend) to pull in the right signals—each delivered with clear receipts like source, time, confidence, and cost—while your Port budget handles payment and settlement automatically so it scales smoothly as you grow. 
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-8">
            {steps.map((step, index) => (
              
              <div key={index} className="flex gap-4 w-full group">
                <div className={cn("flex flex-row gap-4 items-center w-full group-hover:-translate-x-[-3px] transition-all duration-200", index !== steps.length - 1 && "border-b border-border/50 pb-8")}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-card border drop-shadow-sm">
                    {step.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                  <h4 className="font-medium text-foreground">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-lg bg-muted relative overflow-hidden group border border-border/50">
            <div className="absolute inset-0 opacity-70 scale-120">
              <Image
                src="/section/vector.svg"
                alt="Vector pattern"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-10 flex h-full min-h-[400px] items-center justify-center -bottom-16 -right-16 p-8 group-hover:-bottom-12 group-hover:-right-12 transition-all duration-400 drop-shadow-md">
              <Image
                src="/section/process.png"
                alt="Process"
                width={800}
                height={800}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button variant="secondary" size="section-secondary" className="mt-12 group" asChild>
            <Link href="/#contact">
              Contact us
              <ArrowRight className="h-4 w-4 opacity-30 group-hover:translate-x-0 transition-all duration-200 group-hover:opacity-100 -translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>

    </section>
  )
}

