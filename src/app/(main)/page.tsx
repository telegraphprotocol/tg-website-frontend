import { Hero } from "@/components/landing/hero";
import { Inspire } from "@/components/landing/inspire";
import { Flywheel } from "@/components/landing/flywheel";
import { Category } from "@/components/landing/category";
// Temporarily hidden — Machines Improving Machines (redundant with Flywheel)
// import { Improve } from "@/components/landing/improve";
import { Liquidity } from "@/components/landing/liquidity";
import { Buy } from "@/components/landing/buy";
import { Marketplace } from "@/components/landing/marketplace";
import { How } from "@/components/landing/how";
import { Access } from "@/components/landing/access";
import { Power } from "@/components/landing/power";
import { Path } from "@/components/landing/path";
import { BuildCta } from "@/components/landing/build-cta";
import { LandingLoaderGate } from "@/components/landing/landing-loader-gate";
import { StructuredData } from "@/components/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData />
      <LandingLoaderGate imageSources={["/images/landing/hero-bg.png"]}>
        <Hero />
        <Inspire />
        <Flywheel />
        <Category />
        {/* <Improve /> */}
        <Liquidity />
        <Buy />
        <Marketplace />
        <How />
        <Access />
        <Power />
        <Path />
        <BuildCta />
      </LandingLoaderGate>
    </>
  );
}
