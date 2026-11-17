import { RedesignHero } from "@/components/landing/redesign/hero";
import type { Metadata } from "next";
import { Explainer } from "@/components/landing/redesign/explainer";
import { LiveDemo } from "@/components/landing/redesign/live-demo";
import { Rough } from "@/components/landing/redesign/rough";
import { Network } from "@/components/landing/redesign/network";
import { EvaluatorCompetition } from "@/components/landing/redesign/evaluator-competition";
import { Lanes } from "@/components/landing/redesign/lanes";
import { Anjoman } from "@/components/landing/redesign/anjoman";
import { RedesignFlywheel } from "@/components/landing/redesign/flywheel";
import { Machina } from "@/components/landing/redesign/machina";
import { Trust } from "@/components/landing/redesign/trust";
import { GetStarted } from "@/components/landing/redesign/get-started";
import { Hood } from "@/components/landing/redesign/hood";
import { ThemeScope } from "@/components/landing/redesign/theme-scope";
import { StructuredData } from "@/components/structured-data";

// video.twimg.com rejects requests that carry another site's referrer (403), which
// stops the embedded X video from playing.
export const metadata: Metadata = {
  referrer: "no-referrer",
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <ThemeScope>
        <RedesignHero />
        <Explainer />
        <LiveDemo />
        <Rough />
        <Network />
        <Lanes />
        <EvaluatorCompetition />
        <RedesignFlywheel />
        <Anjoman />
        <Machina />
        <Trust />
        <GetStarted />
        <Hood />
      </ThemeScope>
    </>
  );
}
