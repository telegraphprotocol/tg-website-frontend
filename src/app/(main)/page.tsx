import { RedesignHero } from "@/components/landing/redesign/hero";
import { LiveDemo } from "@/components/landing/redesign/live-demo";
import { Rough } from "@/components/landing/redesign/rough";
import { Network } from "@/components/landing/redesign/network";
import { EvaluatorCompetition } from "@/components/landing/redesign/evaluator-competition";
import { Lanes } from "@/components/landing/redesign/lanes";
import { Alexandria } from "@/components/landing/redesign/alexandria";
import { RedesignFlywheel } from "@/components/landing/redesign/flywheel";
import { Machina } from "@/components/landing/redesign/machina";
import { Trust } from "@/components/landing/redesign/trust";
import { GetStarted } from "@/components/landing/redesign/get-started";
import { Hood } from "@/components/landing/redesign/hood";
import { ThemeScope } from "@/components/landing/redesign/theme-scope";
import { StructuredData } from "@/components/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData />
      <ThemeScope>
        <RedesignHero />
        <LiveDemo />
        <Rough />
        <Network />
        <Lanes />
        <EvaluatorCompetition />
        <RedesignFlywheel />
        <Alexandria />
        <Machina />
        <Trust />
        <GetStarted />
        <Hood />
      </ThemeScope>
    </>
  );
}
