import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import {
  Radio,
  ArrowRight,
  Droplet,
  Megaphone,
  Activity,
  FileText,
} from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function SignalsSection() {
  const signals = [
    {
      icon: Droplet,
      title: "Weather Signals",
      description:
        "Buy on-demand, location-specific weather and environmental forecasts (temperature, rain, wind, pressure, etc.) for a chosen time window, so you can know what conditions are likely to be and make better decisions (planning, operations, or trading) using a verified, time-stamped result.",
    },
    {
      icon: Megaphone,
      title: "Media Signals",
      description:
        "Buy authenticity checks for a specific piece of media (image/video/etc.) that tells you whether it's likely real or AI-generated, with a confidence score, so you can avoid being fooled by deepfakes and make safer decisions for moderation, brand safety, or fraud prevention—again as a verified, time-stamped result.",
    },
    {
      icon: Activity,
      title: "Sport Signals",
      description:
        "Buy automated football match analytics that convert video into actionable data —player and ball tracking, key event detection (e.g., goals/fouls), and predictive/value metrics—so you can power scouting, performance analysis, or betting without expensive traditional tracking feeds.",
    },
    {
      icon: FileText,
      title: "Content Signals",
      description:
        'Buy a text authenticity check that scores a piece of writing with a "likely AI-generated vs human-written" probability (a robotic-likelihood style score), so you can quickly flag suspicious content and enforce trust policies in education, publishing, social platforms, and moderation workflows.',
    },
  ]

  return (
    <section id="signals" className="px-4 py-20">
      <div className="container mx-auto max-w-7xl">
      <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="flex flex-col gap-2 lg:items-start items-center lg:text-left text-center">
              <Badge variant="topTitle" className="mb-4 w-fit">
                <Radio className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                <span>Signals</span>
              </Badge>
              <h2 className="text-4xl text-foreground lg:text-5xl font-space-grotesk max-w-3xl leading-[1.2]">
              Buy these signals from the best AI models.
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.2}>
            <div className="flex flex-col gap-1 lg:max-w-md lg:text-right text-left justify-end items-center lg:items-end">
              <p className="text-muted-foreground font-medium">
              Can't find a signal? 
              </p>
              <p className="text-muted-foreground">
                Request one.
              </p>
           
              <Button variant="secondary" size="section-secondary" className="w-fit lg:mt-2 mt-4 group" asChild>
                <Link href="/#contact">
                  Contact us
                  <ArrowRight className="h-4 w-4 opacity-30 group-hover:translate-x-0 transition-all duration-200 group-hover:opacity-100 -translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:grid-cols-4">
          {signals.map((signal, index) => {
            const Icon = signal.icon
            return (
              <AnimateOnScroll key={index} direction="up" delay={0.1 + index * 0.1}>
                <Card className="hover:translate-y-[-4px] transition-all duration-300">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-[#f05c2b] drop-shadow-md">
                      <Icon className="h-5 w-5 text-background" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground">
                      {signal.title}
                    </h3>
                  </div>
                  <p className="mb-1 text-sm leading-relaxed text-muted-foreground">
                    {signal.description}
                  </p>
                </div>
                {/*
                <Button variant="secondary" size="section-secondary" className="w-fit group mt-5" asChild>
                  <Link href={`/#${signal.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    Learn more
                    <ArrowRight className="h-4 w-4 opacity-30 group-hover:translate-x-0 transition-all duration-200 group-hover:opacity-100 -translate-x-0.5" />
                  </Link>
                </Button>
                */}
              </Card>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}

