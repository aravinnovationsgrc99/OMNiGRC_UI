import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CustomerTrustSection } from "@/components/sections/CustomerTrustSection";
import { CoverageSection } from "@/components/sections/CoverageSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { UnifiedPlatformSection } from "@/components/sections/UnifiedPlatformSection";
import { StagesOfTrustSection } from "@/components/sections/StagesOfTrustSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A111F] text-slate-100 selection:bg-teal/30 selection:text-white">
      <Header />
      <main>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Trust / Positioning (Built around lean GRC workflows) */}
        <CustomerTrustSection />

        {/* 3. Documented Framework Coverage & Regional Hosting */}
        <CoverageSection />

        {/* 4. The GRC Problem: Fragmented vs Connected GRC — "The Reality of Lean GRC" */}
        <ProblemSection />

        {/* 5. Unified OMNiGRC Approach: Four Core Workflows */}
        <UnifiedPlatformSection />

        {/* 6. Customer Journey Stages of Trust */}
        <StagesOfTrustSection />

        {/* 7. AI Control Mapping Architecture & Trust Model */}
        <ArchitectureSection />

        {/* 8. Why OMNiGRC: Sweet spot for Lean Teams */}
        <ComparisonSection />

        {/* 9. Practical GRC Operational Scenarios */}
        <TestimonialsSection />

        {/* 10. Final CTA & Newsletter */}
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
