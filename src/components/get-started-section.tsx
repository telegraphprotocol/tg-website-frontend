
import { Badge } from "@/components/ui/badge"
import {  BookOpen, Network, Users, Hand } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function GetStartedSection() {
  const items = [
    {
      icon: BookOpen,
      title: "Guide",
      description:
        "Start building in minutes. Simple steps to launch your project smoothly.",
    },
    {
      icon: Network,
      title: "Node",
      description:
        "Run your own node. No signup needed — earn rewards, support the network.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Join the network today. Build, connect, and grow with a global community.",
    },
  ]

  return (
    <section id="get-started" className="px-4 py-20">
      <div className="container mx-auto max-w-7xl">
      <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <AnimateOnScroll direction="up" delay={0.1}>
            <div className="flex flex-col gap-2 lg:items-start items-center lg:text-left text-center">
              <Badge variant="topTitle" className="mb-4 w-fit">
                <Hand className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                <span>Get Started</span>
              </Badge>
              <h2 className="text-4xl text-foreground lg:text-5xl font-space-grotesk max-w-3xl leading-[1.2]">
              Get started now.
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.2}>
            <div className="flex flex-col gap-1 lg:text-right text-center justify-end items-center lg:items-end lg:max-w-sm">
              <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis orci sit amet lobortis tristique. Aliquam euismod lacinia tortor.
              </p>
           </div>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <AnimateOnScroll key={index} direction="up" delay={0.1 + index * 0.1}>
                <div className="justify-center items-center flex flex-col gap-4 group">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-foreground drop-shadow-md group-hover:bg-primary transition-all duration-300">
                  <Icon className="h-5 w-5 text-background" />
                </div>
                <div className="flex flex-col gap-2 text-center">
                  <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-base text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 lg:max-w-sm">{item.description}</p>
                </div>
              </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}

