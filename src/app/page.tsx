import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CustomerTrustSection } from "@/components/sections/CustomerTrustSection";
import { StagesOfTrustSection } from "@/components/sections/StagesOfTrustSection";
import { UnifiedPlatformSection } from "@/components/sections/UnifiedPlatformSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { CoverageSection } from "@/components/sections/CoverageSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 selection:bg-brand-cyan/30 selection:text-white">
      <Header />
      <main>
        <HeroSection />
        <CustomerTrustSection />
        <StagesOfTrustSection />
        <UnifiedPlatformSection />
        <ArchitectureSection />
        <CoverageSection />
        <TestimonialsSection />
        <ComparisonSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
