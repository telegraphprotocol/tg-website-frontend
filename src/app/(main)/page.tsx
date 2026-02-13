import { HeroSection } from "@/components/hero-section";
import { NodesSection } from "@/components/nodes-section";
import { ProcessSection } from "@/components/process-section";
import { SignalsSection } from "@/components/signals-section";
import { ActionableIntelligenceSection } from "@/components/actionable-intelligence-section";
import { UseCasesSection } from "@/components/use-cases-section";
import { OurTeamSection } from "@/components/our-team-section";
import { GetStartedSection } from "@/components/get-started-section";
import { ToolLayerSection } from "@/components/tool-layer-section";
import { StructuredData } from "@/components/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData />
      <main>
        <HeroSection />
        <SignalsSection />
        <NodesSection />
        <ActionableIntelligenceSection />
        <ProcessSection />
        <UseCasesSection />
        <OurTeamSection />
        <GetStartedSection />
        <ToolLayerSection />
      </main>
    </>
  );
}
