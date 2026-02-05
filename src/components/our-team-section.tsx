"use client"

import { useState } from "react"
import { Users } from "lucide-react"
import { SiX } from "react-icons/si"
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import Link from "next/link"

export function OurTeamSection() {
  const [openDialog, setOpenDialog] = useState<number | null>(null)

  const teamMembers = [
    {
      name: "Mark Basa",
      role: "CEO & Co-Founder",
      description: "Mark leads Telegraph's commercial and business strategy. He is the founder of PRvalidator, the only public relations validator on Bittensor, and has secured hundreds of pieces of earned coverage for the network.",
      description2: "He has worked with companies backed by Coinbase Ventures and Uniswap Labs, resulting in articles in tier-one publications, and previously served as Brand Director for a layer-1 project. He also co-founded a Web3 game studio that raised capital from Japan's largest VCs. From 2011 to 2013, he graduated from an early Microsoft incubator, where he built a Bitcoin-enabled loyalty points app.",
      image: "/team/mark.jpg",
      linkedinLink: "https://www.linkedin.com/in/mark-basa/",
    },
    {
      name: "Ahmed Ali",
      role: "CTO & Co-Founder",
      description:
        "Ahmed is a Lead Protocol Architect building high-frequency blockchain infrastructure. He leads engineering at Telegraph, where he built the cross-chain messaging layer that integrates Bittensor intelligence into EVM networks.",
      description2: "Previously at RYT Chain, Ahmed designed the 'Proof of Majority' consensus, optimizing the engine to reduce transaction pipeline latency from 3 seconds to 75 microseconds. He also engineered Optimism Layer-2 scaling infrastructure for Epic Chain and implemented Zero-Knowledge Proofs (ZKPs) for institutional privacy. Ahmed turns complex distributed systems into production-grade rails.",
      image: "/team/ahmed.jpg",
      xLink: "https://x.com/1xahmedali",
      githubLink: "https://github.com/1xahmed",
      linkedinLink: "https://www.linkedin.com/in/1xahmed/",
    },
  ]

  return (
    <section id="our-team" className="px-4 lg:py-24 py-20">
      <div className="container mx-auto max-w-7xl">
      <AnimateOnScroll direction="up" delay={0.1}>
        <div className="mb-12 text-center max-w-3xl mx-auto">
           <Badge variant="topTitle" className="mb-4 w-fit">
              <Users className="h-4 w-4 text-primary flex-shrink-0" />
              <span>People</span>
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
              <Card className="group hover:translate-y-[-4px] transition-all duration-300 h-full items-start justify-start relative overflow-hidden">
              <div className="mb-4 aspect-[4/3] w-full rounded-lg bg-muted relative">
                {/*<Image src={member.image} alt={member.name} fill className="object-cover rounded-xl" draggable={false} loading="lazy" />*/}
              </div>
              <h3 className="mb-1 text-lg font-medium text-foreground">
                {member.name}
                {member.role && (
                  <span className="font-normal text-muted-foreground/70 text-base ml-1">
                    {" "}
                    {member.role}
                  </span>
                )}
              </h3>
              <p className="text-sm text-muted-foreground lg:min-h-[42px] h-full">
                {member.description}
              </p>
              <div className="flex items-center gap-2 justify-end w-full mb-2">
                {member.xLink && (
                <Link href={member.xLink} target="_blank" className="text-muted-foreground/50 hover:text-primary transition-colors duration-300">
                  <SiX className="h-3.5 w-3.5" />
                </Link>
                )}
                {member.githubLink && (
                  <Link href={member.githubLink} target="_blank" className="text-muted-foreground/50 hover:text-primary transition-colors duration-300">
                    <LuGithub className="h-4 w-4" />
                  </Link>
                )}
                {member.linkedinLink && (
                  <Link href={member.linkedinLink} target="_blank" className="text-muted-foreground/50 hover:text-primary transition-colors duration-300">
                    <FiLinkedin className="h-4 w-4" />
                  </Link>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"></div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-[5px] translate-y-0 transition-all duration-400 z-10">
                <Button
                  onClick={() => setOpenDialog(index)}
                  className="rounded-full font-medium"
                  variant="outline"
                  size="sm"
                >
                  Read More
                </Button>
              </div>
            </Card>
            </AnimateOnScroll>
          ))}
        </div>

        {teamMembers.map((member, index) => (
          <Dialog key={index} open={openDialog === index} onOpenChange={(open) => setOpenDialog(open ? index : null)}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold">
                  {member.name}
                  {member.role && (
                    <span className="font-normal text-muted-foreground/70 text-lg ml-2">
                      {member.role}
                    </span>
                  )}
                </DialogTitle>
              </DialogHeader>
              <DialogDescription className="space-y-4 text-muted-foreground text-[15px]">
                <p>
                  {member.description}
                </p>
                {member.description2 && (
                  <p>
                    {member.description2}
                  </p>
                )}
                <div className="flex items-center gap-3 pt-0">
                  {member.xLink && (
                    <Link href={member.xLink} target="_blank" className="text-muted-foreground/70 hover:text-primary transition-colors duration-300">
                      <SiX className="h-4.5 w-4.5" />
                    </Link>
                  )}
                  {member.githubLink && (
                    <Link href={member.githubLink} target="_blank" className="text-muted-foreground/70 hover:text-primary transition-colors duration-300">
                      <LuGithub className="h-5 w-5" />
                    </Link>
                  )}
                  {member.linkedinLink && (
                    <Link href={member.linkedinLink} target="_blank" className="text-muted-foreground/70   hover:text-primary transition-colors duration-300">
                      <FiLinkedin className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </DialogDescription>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  )
}

