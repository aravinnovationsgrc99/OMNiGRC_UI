import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CustomerTrustSection } from "@/components/sections/CustomerTrustSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { UnifiedPlatformSection } from "@/components/sections/UnifiedPlatformSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { CoverageSection } from "@/components/sections/CoverageSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 selection:bg-brand-orange/30 selection:text-white">
      <Header />
      <main>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Trust / Positioning (Built around lean GRC workflows) */}
        <CustomerTrustSection />

        {/* 3. The GRC Problem: Fragmented vs Connected GRC */}
        <ProblemSection />

        {/* 4. Unified OMNiGRC Approach: Four Core Workflows */}
        <UnifiedPlatformSection />

        {/* 5. AI Control Mapping Architecture & Trust Model */}
        <ArchitectureSection />

        {/* 6. Documented Framework Coverage & Regional Hosting */}
        <CoverageSection />

        {/* 7. Practical GRC Operational Scenarios */}
        <TestimonialsSection />

        {/* 8. Why OMNiGRC: Sweet spot for Lean Teams */}
        <ComparisonSection />

        {/* 9. Final CTA & Newsletter */}
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
