import { RedesignHero } from "@/components/landing/redesign/hero";
import { Market } from "@/components/landing/redesign/market";
import { Loop } from "@/components/landing/redesign/loop";
import { Problem } from "@/components/landing/redesign/problem";
import { Route } from "@/components/landing/redesign/route";
import { Lanes } from "@/components/landing/redesign/lanes";
import { Alexandria } from "@/components/landing/redesign/alexandria";
import { RedesignFlywheel } from "@/components/landing/redesign/flywheel";
import { Mining } from "@/components/landing/redesign/mining";
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
        <Market />
        <Loop />
        <Problem />
        <Route />
        <Lanes />
        <Alexandria />
        <RedesignFlywheel />
        <Mining />
        <Trust />
        <GetStarted />
        <Hood />
      </ThemeScope>
    </>
  );
}
