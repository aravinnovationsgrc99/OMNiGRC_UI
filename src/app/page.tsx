import React from "react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SolarFrameworkSection } from "@/components/sections/SolarFrameworkSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { CoverageSection } from "@/components/sections/CoverageSection";
import { HomeBlogSection } from "@/components/sections/HomeBlogSection";
import { DeploymentSection } from "@/components/sections/DeploymentSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:bg-teal/30 dark:selection:text-white antialiased">
      <Header />

      <main className="w-full pt-16">
        <div className="flex flex-col w-full">
          {/* 1. HERO SECTION */}
          <HeroSection />

          {/* 2. SOLAR FRAMEWORK TAXONOMIES */}
          <SolarFrameworkSection />

          {/* 3. PROBLEM SECTION: Fragmentation vs Operating Layer */}
          <ProblemSection />

          {/* 4. AUDIENCE SECTION: One Workflow. Every Team Size */}
          <AudienceSection />

          {/* 5. AI ARCHITECTURE & HUMAN APPROVAL */}
          <ArchitectureSection />

          {/* 6. REGIONAL HOSTING AWARENESS */}
          <CoverageSection />

          {/* 7. BLOG PREVIEW — Latest posts from the GRC editorial desk */}
          <HomeBlogSection />

          {/* 8. DEPLOYMENT FLEXIBILITY */}
          <DeploymentSection />

          {/* 9. FINAL CTA / CONVERSION SECTION */}
          <FinalCtaSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
