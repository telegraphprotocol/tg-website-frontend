import { Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function OurTeamSection() {
  const teamMembers = [
    {
      name: "Mark Basa",
      role: "Founder & CEO",
      description: "TBA",
      image: null,
    },
    {
      name: "Ahmed Ali",
      role: "Co-founder & CTO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      image: null,
    },
  ]

  return (
    <section id="our-team" className="px-4 lg:py-24 py-20">
      <div className="container mx-auto max-w-7xl">
      <AnimateOnScroll direction="up" delay={0.1}>
        <div className="mb-12 text-center max-w-3xl mx-auto">
           <Badge variant="topTitle" className="mb-4 w-fit">
              <Users className="h-4 w-4 text-primary flex-shrink-0" />
              <span>Our Team</span>
            </Badge>
            <h2 className="mb-6 text-4xl text-foreground lg:text-5xl lg:text-5xl font-space-grotesk font-normal leading-[1.2]">
              Our team.
            </h2>
            <p className="mb-4 lg:text-lg text-base leading-relaxed text-muted-foreground">
              We're global team of early blockchain, PR, and business experts,
              that are building the rails for the signal economy.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 max-w-2xl mx-auto">
          {teamMembers.map((member, index) => (
            <AnimateOnScroll key={index} direction="up" delay={0.1 + index * 0.1}>
              <Card className="hover:translate-y-[-4px] transition-all duration-300 h-full items-start justify-start">
              <div className="mb-4 aspect-[4/3] w-full rounded-lg bg-muted"></div>
              <h3 className="mb-1 text-lg font-medium text-foreground">
                {member.name}
                {member.role && (
                  <span className="font-normal text-muted-foreground/70 text-base ml-1">
                    {" "}
                    {member.role}
                  </span>
                )}
              </h3>
              <p className="text-sm text-muted-foreground lg:min-h-[42px]">
                {member.description}
              </p>
            </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

