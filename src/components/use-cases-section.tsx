"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { CloudLightning, TrendingUp, Brain, Coins } from "lucide-react";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const useCases = [
    {
      icon: CloudLightning,
      title: "Predict the Weather with Zeus",
      subtitle: "Gold Mine Disruption",
      description:
        "A gold mine faces extreme weather that can shut down operations. Telegraph connects intelligence from Zeus—an open-source weather network—directly to the mine’s systems. Operators can buy real-time site-risk alerts (e.g., “Shutdown Probability > 80%”). We verify the signal, stamp it with an on-chain receipt, and deliver it via Port contracts to trigger automated hedging before the storm hits.",
      image: "/use-cases/1a.png",
    },
    {
      icon: TrendingUp,
      title: "Verify the Match with Score",
      subtitle: "Automated Market Settlement",
      description:
        "A prediction market needs to settle a bet on 'Did Haaland score?'. Telegraph delivers computer-vision analytics from Score (SN44) to provide verifiable proof of the event. Instead of waiting for slow manual updates, the market gets an auditable, time-stamped 'Yes/No' signal to trigger instant payouts.",
      image: "/use-cases/2a.png",
    },
    {
      icon: Brain,
      title: "Predict the Headlines with Bitmind",
      subtitle: "Hedge Fund Risk",
      description:
        "A hedge fund faces drawdown risk when synthetic war footage goes viral. Telegraph allows the fund to instantly consume “Truth Signals” from Bitmind, a competitive deepfake-detection company. When a suspicious video hits the market, the desk pulls a “Deepfake Probability Score” via the protocol. We deliver the signed, verified result (e.g., “99.8% Artificial”) in real time, allowing the algorithm to hedge positions while others panic.",
      image: "/use-cases/3a.png",
    },
    {
      icon: Coins,
      title: "Signal-Backed Stablecoin",
      subtitle: "Depeg Risk Management",
      description:
        "A stablecoin issuer’s biggest threat is panic that moves faster than price oracles. With Telegraph, the protocol moves from reactive to predictive. The issuer accesses a live “Depeg Risk Probability” signal that aggregates liquidity shifts and social sentiment (FUD). This predicts stress events before they break the peg, allowing smart contracts to automatically adjust risk controls",
      image: "/use-cases/4a.png",
    },
  ];

  const activeCase = useCases[activeTab];
  const Icon = activeCase.icon;

  const handleTabChange = (index: number) => {
    setOpacity(0);
    setTimeout(() => {
      setActiveTab(index);
      setOpacity(1);
    }, 300);
  };

  return (
    <section id="use-cases" className="px-4 lg:py-24 py-20">
      <div className="container mx-auto max-w-7xl">
        <AnimateOnScroll direction="up" delay={0.1}>
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <Badge variant="topTitle" className="mb-4 w-fit">
              <Brain className="h-4 w-4 text-primary flex-shrink-0" />
              <span>Business</span>
            </Badge>
            <h2 className="mb-6 text-4xl text-foreground lg:text-5xl lg:text-5xl font-space-grotesk font-normal leading-[1.2]">
              Use cases.
            </h2>
            <p className="mb-4 lg:text-lg text-base leading-relaxed text-muted-foreground">
              Verified, time-stamped intelligence signals from competitive miner
              models—ready to plug into any market or app.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-8">
          <AnimateOnScroll
            direction="fade"
            delay={0.2}
            className="lg:order-1 order-2"
          >
            <div className="relative overflow-hidden rounded-3xl bg-muted relative overflow-hidden group lg:border lg:border-border/50 transition-all duration-300 min-h-[400px]">
              <div className="absolute inset-0 opacity-30 scale-100">
                <Image
                  src="/section/vector.svg"
                  alt="Vector pattern"
                  fill
                  className="object-cover"
                  aria-hidden="true"
                />
              </div>
              <div className="grid grid-cols-1 lg:gap-12 gap-6 lg:grid-cols-2 lg:p-8 p-0 items-start justify-center relative z-10">
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-xs p-4 sm:p-8 text-center relative overflow-hidden aspect-square">
                    <div className=" transition-opacity duration-300">
                      <Image
                        src={activeCase.image}
                        alt={`${activeCase.title} use case visualization for Telegraph Protocol`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6 h-full">
                  <div
                    className="transition-opacity duration-300 h-full"
                    style={{ opacity }}
                  >
                    <Card className="h-full items-start justify-start lg:p-5">
                      <div className="mb-1 flex items-start gap-4">
                        <div className="flex flex-col gap-2">
                          <Icon className="h-6 w-6 text-primary" />
                          <h3 className="text-lg font-medium text-foreground">
                            {activeCase.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground lg:mt-1">
                        {activeCase.description}
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll
            direction="up"
            delay={0.3}
            className="lg:order-2 order-1"
          >
            <div className="grid lg:grid-cols-4 grid-cols-1 items-start justify-start">
              {useCases.map((useCase, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => handleTabChange(index)}
                    className="relative text-left group cursor-pointer"
                  >
                    <div
                      className={`lg:h-[2px] h-[0px] w-full lg:mb-2 transition-all duration-300 rounded-full${
                        activeTab === index
                          ? "lg:bg-transparent bg-primary"
                          : "lg:bg-transparent bg-muted lg:group-hover:bg-foreground/10"
                      }`}
                    />
                    <div
                      className={cn(
                        "flex flex-col gap-1 lg:py-2 py-4 lg:px-0 px-2 lg:rounded-none rounded-full",
                        activeTab === index
                          ? "lg:bg-transparent bg-primary/10"
                          : "lg:bg-transparent",
                      )}
                    >
                      <span
                        className={cn(
                          "text-sm lg:font-semibold font-medium lg:text-left text-center",
                          activeTab === index
                            ? "text-foreground"
                            : "text-foreground/70 group-hover:text-foreground/90 transition-all duration-300",
                        )}
                      >
                        {useCase.title}
                      </span>
                      <span className="text-sm text-muted-foreground line-clamp-1 lg:block hidden">
                        {useCase.subtitle}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
