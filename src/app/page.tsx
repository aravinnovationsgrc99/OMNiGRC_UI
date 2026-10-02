"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SolarFrameworkSection } from "@/components/sections/SolarFrameworkSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { SecurityStackSection } from "@/components/sections/SecurityStackSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { CoverageSection } from "@/components/sections/CoverageSection";
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

          {/* 2. SOLAR FRAMEWORK SECTION (Immediately following Hero) */}
          <SolarFrameworkSection />

          {/* 3. PROBLEM SECTION: Fragmentation vs Operating Layer */}
          <ProblemSection />

          {/* 4. AUDIENCE SECTION: One Workflow. Every Team Size */}
          <AudienceSection />

          {/* 5. WORKFLOW SECTION: One Thread, Not Four Silos */}
          <WorkflowSection />

          {/* 6. FULL SECURITY STACK */}
          <SecurityStackSection />

          {/* 7. AI ARCHITECTURE / HUMAN APPROVAL */}
          <ArchitectureSection />

          {/* 8. CONTROL MAPPING ENGINE & REGIONAL HOSTING */}
          <CoverageSection />

          {/* 9. DEPLOYMENT FLEXIBILITY */}
          <DeploymentSection />

          {/* 10. FINAL CTA / CONVERSION SECTION */}
          <FinalCtaSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
