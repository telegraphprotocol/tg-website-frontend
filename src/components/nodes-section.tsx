"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Network, ArrowRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function NodesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0)
  const nodeRunners = [
    {
      name: "Tao.com",
      description: "The fifth largest validator on the Bittensor network.",
      logoBg: "bg-foreground",
      logoText: "T",
    },
    {
      name: "WildSage Labs",
      description: "The seventh largest validator on the Bittensor network.",
      logoBg: "bg-foreground",
      logoText: "S",
    },
    {
      name: "Rizzo",
      description: "The fourteenth largest validator on the Bittensor network.",
      logoBg: "bg-foreground",
      logoText: "R",
    },
    {
      name: "Coming soon",
      description: "TBA",
      logoBg: "bg-foreground",
      logoText: "?",
    },
  ]

  return (
    <section id="nodes" className="relative overflow-hidden px-4 lg:py-24 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="flex flex-col gap-2 lg:items-start items-center lg:text-left text-center">
              <Badge variant="topTitle" className="mb-4 w-fit">
                <Network className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                <span>Nodes</span>
              </Badge>
              <h2 className="text-4xl text-foreground lg:text-5xl font-space-grotesk leading-[1.2]">
                Telegraph node runners.
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.2}>
            <div className="flex flex-col gap-1 lg:max-w-md lg:text-right text-left justify-end items-center lg:items-end">
              <p className="text-muted-foreground">
                Our open-source nodes power the Telegraph protocol.
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium">Node runners earn fees</span> for
                supporting transactions.
              </p>
              <p className="text-muted-foreground">
                Want to buy and run a node?
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

        <AnimateOnScroll direction="fade" delay={0.3}>
          <div className="relative my-20 flex items-center justify-center -bottom-28 pointer-events-none lg:block hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/section/globe.png"
                alt="Globe"
                width={800}
                height={800}
                className="mx-auto opacity-60 w-full"
                draggable={false}
                loading="lazy"
              />
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:grid-cols-4 relative z-20">
          {nodeRunners.map((runner, index) => {
            const isHovered = hoveredIndex === index
            return (
              <AnimateOnScroll key={index} direction="up" delay={0.1 + index * 0.1}>
                <div
                  className="flex flex-col gap-4 group relative z-20"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(0)}
                >
                  <div className="flex flex-col items-center lg:items-start gap-4 lg:text-left text-center">
                    <div
                      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${runner.logoBg} text-background drop-shadow-md transition-all duration-300 ${
                        isHovered ? "bg-primary" : ""
                      }`}
                    >
                      <span className="text-lg font-semibold">{runner.logoText}</span>
                    </div>
                    <h3
                      className={`text-xl font-medium transition-colors duration-300 ${
                        isHovered ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {runner.name}
                    </h3>
                  </div>
                  <p
                    className={`mb-4 text-base transition-colors duration-300 text-center lg:text-left ${
                      isHovered ? "text-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    {runner.description}
                  </p>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}

