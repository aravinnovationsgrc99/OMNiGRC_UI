"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const FrameworkOrrery = dynamic(
  () => import("@/components/3d/FrameworkOrrery").then((m) => m.FrameworkOrrery),
  { ssr: false }
);
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { SecurityStackSection } from "@/components/sections/SecurityStackSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { CoverageSection } from "@/components/sections/CoverageSection";
import { DeploymentSection } from "@/components/sections/DeploymentSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import {
  Shield,
  ShieldAlert,
  Server,
  Sparkles,
  CalendarCheck,
  CheckCircle2,
  ArrowRight,
  Zap,
  Lock,
  FileCheck2,
  Globe,
  Award,
  AlertTriangle,
  XCircle,
  Bug,
  FileText,
  Building2,
  Clock,
  Layers,
  Activity,
  ChevronRight,
  Database,
  Circle,
  TrendingUp
} from "lucide-react";

export default function Home() {
  const [activeRailStep, setActiveRailStep] = useState(0);

  const railSteps = [
    { num: "01", name: "RISK", label: "5×5 Matrix", detail: "RSK-042 Likelihood 3", trace: "Active Risk: RSK-042 (Backup Failure)" },
    { num: "02", name: "ASSETS", label: "Cloud / Infra", detail: "RDS Postgres Prod", trace: "Linked Asset: AST-019 (Prod DB Cluster)" },
    { num: "03", name: "CONTROLS", label: "Map-Once", detail: "CTRL-012 Automated", trace: "Linked Control: CTRL-012 (Isolated Test Restoration)" },
    { num: "04", name: "TESTING", label: "30-Day Cadence", detail: "Automated Drill Pass", trace: "Testing Cadence: Verified 30-Day Operational Test" },
    { num: "05", name: "AUDIT", label: "Cross-Framework", detail: "ISO 27001 + SOC 2", trace: "Audit Mapping: ISO 27001 A.8.13 + SOC 2 CC9.1" },
    { num: "06", name: "ACTIONS", label: "Remediation", detail: "SLA Verified (0 Open)", trace: "Remediation Status: 0 Open SLAs Pending" },
    { num: "07", name: "VAULT", label: "Defensible Evidence", detail: "Reference Link Verified", trace: "Defensible Record: Document Link ev-drill-2026-03" },
  ];

  return (
    <div className="min-h-screen bg-transparent text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:bg-teal/30 dark:selection:text-white antialiased">
      <Header />

      <main className="w-full pt-16">
        <div className="flex flex-col w-full">
          {/* 1. HERO SECTION */}
          <HeroSection />
          {/* 2. PROBLEM SECTION: Fragmentation vs Operating Layer */}
          <ProblemSection />

          {/* 3. AUDIENCE SECTION: One Workflow. Every Team Size */}
          <AudienceSection />

          {/* 4. WORKFLOW SECTION: One Thread, Not Four Silos */}
          <WorkflowSection />

          {/* SECTION 01: FULL SECURITY STACK */}
          <SecurityStackSection />

          {/* SECTION 02: AI ARCHITECTURE / HUMAN APPROVAL */}
          <ArchitectureSection />

          {/* SECTION 03: CONTROL MAPPING ENGINE */}
          <CoverageSection />

          {/* SECTION 04: DEPLOYMENT FLEXIBILITY */}
          <DeploymentSection />
          {/* FINAL CTA / CONVERSION SECTION */}
          <FinalCtaSection />
</div>
</main>

      <Footer />
    </div>
  );
}
