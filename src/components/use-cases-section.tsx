"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { CloudLightning, TrendingUp, Brain, Coins } from "lucide-react"
import { Badge } from "./ui/badge"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(0)

  const useCases = [
    {
      icon: CloudLightning,
      title: "Predict the Weather with Zeus",
      subtitle: "Predictive weather risk automation.",
      description:
        "A gold mine faces extreme weather that can shut down operations and delay shipments. Zeus is a decentralized weather forecasting network built for low-latency, production-grade delivery. Telegraph connects this intelligence to the mine, allowing operators to buy current signals (e.g., “flood risk,” “hail probability”) or commission Forecast Subnet miners to predict specific site risks. A miner doesn't just “report the weather”; they ingest Zeus data to output a specific “Shutdown Probability” for that mine's exact coordinates. Telegraph verifies this prediction, stamps it with an on-chain receipt (confidence, cost, timestamp), and delivers it via Port contracts. This feeds the mine’s automation systems, allowing operators to reposition equipment and reroute logistics before the weather becomes a shutdown event.",
      image: "/section/globe.png",
    },
    {
      icon: TrendingUp,
      title: "Predict the Value with Score",
      subtitle: "Verifiable asset valuation growth",
      description: "A football club trying to sell media rights has a problem: it invests heavily in talent and brand, but it’s hard to prove that value before it shows up in the financial results. Score is a computer-vision network that turns match footage into structured performance data. Telegraph delivers these live signals, but more importantly, allows the club to query Forecast miners for verifiable projections like “Audience Growth Probability,” “Media-Rights Uplift,” or “Valuation Delta.” Instead of vague “brand” claims, miners compete to predict quantifiable metrics (e.g., “Probability of 20% viewership growth next quarter”). Telegraph publishes these verified forecasts on-chain, giving the club auditable, time-stamped evidence of asset growth to justify higher pricing for IP rights and sponsorship inventory.",
      image: "/section/score.png",
    },
    {
      icon: Brain,
      title: "Predict the Headlines with Bitmind",
      subtitle: "Real-time truth signal hedging",
      description: "A hedge fund faces massive drawdown risk when synthetic war footage or political deepfakes go viral. Bitmind is a synthetic media detection network that identifies AI-generated content. Telegraph allows the fund to instantly consume these “Truth Signals.” When a suspicious video hits the market, the fund doesn't just guess; they query the network for a “Deepfake Probability Score.” Miners run targeted verification models on the specific clip, and Telegraph delivers the signed, verified result (e.g., “99.8% Artificial”) to the fund’s trading desk in real-time. This allows the algorithm to hedge positions or take the counter-trade against the panic while the market is still reacting to the noise.",
      image: "/section/bitmind.png",
    },
    {
      icon: Coins,
      title: "Signal-Backed Stablecoin",
      subtitle: "Predictive stablecoin risk management",
      description: "A stablecoin issuer’s biggest threat is market panic that moves faster than price oracles. With Telegraph, the protocol moves from reactive to predictive. The issuer commissions Forecast miners to produce a live “Depeg Risk Probability” signal. Miners aggregate data from multiple subnets—liquidity shifts, social sentiment (FUD), and collateral volatility—to predict stress events before they break the peg. Telegraph delivers this verified probability on-chain, allowing the stablecoin’s smart contracts to automatically adjust risk controls—tightening collateral ratios, raising fees, or rebalancing reserves—based on verified intelligence rather than lagging price moves.",
      image: "/section/stablecoin.png",
    },
  ]

  const activeCase = useCases[activeTab]
  const Icon = activeCase.icon

  return (
    <section id="use-cases" className="px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 text-center max-w-3xl mx-auto">
         <Badge variant="topTitle" className="mb-4 w-fit">
            <Brain className="h-4 w-4 text-primary flex-shrink-0" />
            <span>Use Cases</span>
          </Badge>
          <h2 className="mb-6 text-4xl text-foreground md:text-5xl lg:text-5xl font-space-grotesk font-normal leading-[1.2]">
            Use cases.
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
            Verified, time-stamped intelligence signals from competitive miner
            models—ready to plug into any market or app.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-muted relative overflow-hidden group border border-border/50 transition-all duration-300 min-h-[400px]">
        {/*
          <div className="absolute inset-0 opacity-70 scale-100">
            <Image
              src="/section/vector.svg"
              alt="Vector pattern"
              fill
              className="object-cover"
            />
          </div>
          */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 p-8">
          <div className="flex items-center justify-center">
            <div className="w-full rounded-lg bg-muted p-8 text-center relative overflow-hidden">
              <Image
                src={activeCase.image}
                alt={activeCase.title}
                width={800}
                height={800}
                className="object-cover absolute inset-0"
              />
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <div className="mb-1 flex items-start gap-4">
                <div className="flex flex-col gap-2">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-medium text-foreground">
                    {activeCase.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {activeCase.description}
              </p>
            </Card>
          </div>
        </div>
        </div>
        <div className="grid grid-cols-4 mt-8">
          {useCases.map((useCase, index) => {
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className="relative text-left group"
              >
                <div
                  className={`h-[2px] w-full mb-2 transition-all duration-300 ${
                    activeTab === index ? "bg-primary" : "bg-muted group-hover:bg-foreground/10"
                  }`}
                />
                <div className="flex flex-col gap-1 py-2">
                  <span className={cn("text-sm font-semibold", activeTab === index ? "text-foreground" : "text-foreground/70 group-hover:text-foreground/90 transition-all duration-300")}>
                    {useCase.title}
                  </span>
                  <span className="text-sm text-muted-foreground  line-clamp-1">
                    {useCase.subtitle}
                  </span>
                 
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

