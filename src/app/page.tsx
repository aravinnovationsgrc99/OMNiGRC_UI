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

          {/* 5. ONE FRAMEWORK ENGINE SECTION */}
          <section className="relative w-full bg-transparent px-4 sm:px-6 lg:px-8 py-space-section border-b border-slate-200/60 dark:border-navy-700/60 overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 text-center">
              <div className="max-w-3xl mx-auto space-y-3">
                <span className="text-[12px] font-mono uppercase tracking-widest text-[#F15E1C] dark:text-amber font-bold inline-block">
                  ONE FRAMEWORK ENGINE
                </span>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0d1b36] dark:text-white tracking-tight">
                  Every standard that matters.
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
                  Map controls once, stay compliant everywhere — SOC 2, ISO 27001, GDPR, DPDP, ISO 42001, HIPAA, and more, all mapped to the same evidence base.
                </p>
              </div>

              <div className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-navy-700/60 bg-white/40 dark:bg-navy-950/40 backdrop-blur-sm p-4 sm:p-space-card">
                <FrameworkOrrery title="ONE FRAMEWORK ENGINE" compact={true} />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto pt-2 text-xs font-mono text-[#5a4138] dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2E936F] dark:bg-teal-400 animate-pulse" />
                  <span>Map Once · Reuse Across Frameworks · One Evidence Base</span>
                </div>
                <Link
                  href="/frameworks"
                  className="inline-flex items-center gap-1.5 font-bold text-[#F15E1C] dark:text-orange-400 hover:text-[#ce4700] dark:hover:text-orange-300 transition-colors"
                >
                  <span>Explore Framework Mappings</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
{/*  =========================================================================  */}
{/*  4. EXPANDED PLATFORM CAPABILITIES (Phase-17 Feature Ecosystem)            */}
{/*  =========================================================================  */}
<section className="w-full bg-transparent px-4 md:px-8 py-space-section">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-8">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest">COMPLETE GRC SUITE</span>
<h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white font-bold mt-1 tracking-tight">Engineered for the full governance &amp; audit lifecycle.</h2>
<p className="text-base text-slate-600 dark:text-slate-300 mt-2">
          Modular capabilities designed to support growing teams without bloated enterprise lock-in or endless professional services hours.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/*  Feature 1  */}
<Link href="/products/vulnerabilities" className="bg-white dark:bg-[#0A111F] p-space-card rounded-xl shadow-sm hover:shadow-md hover:border-[#2E936F]/40 transition-all flex flex-col justify-between border border-slate-300 dark:border-navy-700/60 group block"><div><div className="w-12 h-12 rounded-lg bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-6"><Circle className="h-5 w-5 shrink-0" /></div><h3 className="text-xl text-slate-900 dark:text-white font-bold group-hover:text-[#2E936F] dark:group-hover:text-teal transition-colors">Vulnerability Management</h3><p className="text-base text-slate-600 dark:text-slate-300 mt-2">Ingest CVE findings from security scanners. Map vulnerabilities directly to affected technical assets and evaluate associated risk exposure.</p></div><div className="mt-6 pt-space-sm font-mono text-xs text-teal-600 dark:text-teal-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1"><span>Vulnerability-to-Asset Mapping</span><ArrowRight className="h-3.5 w-3.5" /></div></Link>
{/*  Feature 2  */}
<Link href="/products/policies" className="bg-white dark:bg-[#0A111F] p-space-card rounded-xl shadow-sm hover:shadow-md hover:border-[#2E936F]/40 transition-all flex flex-col justify-between border border-slate-300 dark:border-navy-700/60 group block">
<div>
<div className="w-12 h-12 rounded-lg bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white flex items-center justify-center mb-6">
<FileText className="h-5 w-5 shrink-0" />
</div>
<h3 className="text-xl text-slate-900 dark:text-white font-bold group-hover:text-[#2E936F] dark:group-hover:text-teal transition-colors">Policy &amp; Document Governance</h3>
<p className="text-base text-slate-600 dark:text-slate-300 mt-2">
              Version-controlled policy authoring with automated annual review triggers, markdown revisions, and recorded executive sign-offs.
            </p>
</div>
<div className="mt-6 pt-space-sm font-mono text-xs text-slate-900 dark:text-white font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
            <span>Git-Style Versioning &amp; Approvals</span><ArrowRight className="h-3.5 w-3.5" />
          </div>
</Link>
{/*  Feature 3  */}
<Link href="/products/vendors" className="bg-white dark:bg-[#0A111F] p-space-card rounded-xl shadow-sm hover:shadow-md hover:border-amber-500/40 transition-all flex flex-col justify-between border border-slate-300 dark:border-navy-700/60 group block">
<div>
<div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-500 flex items-center justify-center mb-6">
<Circle className="h-5 w-5 shrink-0" />
</div>
<h3 className="text-xl text-slate-900 dark:text-white font-bold group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">Vendor &amp; Third-Party Risk</h3>
<p className="text-base text-slate-600 dark:text-slate-300 mt-2">
              Automated vendor onboarding questionnaires (SIG Lite, CAIQ), SOC 2 report ingestion, SLA monitoring, and DPDP sub-processor tracking.
            </p>
</div>
<div className="mt-6 pt-space-sm font-mono text-xs text-amber-600 dark:text-amber-500 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
            <span>DPDP / GDPR Data Flow Aware</span><ArrowRight className="h-3.5 w-3.5" />
          </div>
</Link>
{/*  Feature 4  */}
<Link href="/products/evidence" className="bg-white dark:bg-[#0A111F] p-space-card rounded-xl shadow-sm hover:shadow-md hover:border-teal/40 transition-all flex flex-col justify-between border border-slate-300 dark:border-navy-700/60 group block"><div><div className="w-12 h-12 rounded-lg bg-tertiary-fixed text-tertiary flex items-center justify-center mb-6"><Circle className="h-5 w-5 shrink-0" /></div><h3 className="text-xl text-slate-900 dark:text-white font-bold group-hover:text-[#2E936F] dark:group-hover:text-teal transition-colors">Evidence Vault &amp; Reference Records</h3><p className="text-base text-slate-600 dark:text-slate-300 mt-2">Structured evidence tracking and external document/reference links. Organize proof links, collector logs, and compliance records cleanly for audit review.</p></div><div className="mt-6 pt-space-sm font-mono text-xs text-tertiary font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1"><span>Evidence Records &amp; Reference Links</span><ArrowRight className="h-3.5 w-3.5" /></div></Link>
{/*  Feature 5  */}
<Link href="/products/remediation" className="bg-white dark:bg-[#0A111F] p-space-card rounded-xl shadow-sm hover:shadow-md hover:border-red-500/40 transition-all flex flex-col justify-between border border-slate-300 dark:border-navy-700/60 group block">
<div>
<div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center mb-6">
<Circle className="h-5 w-5 shrink-0" />
</div>
<h3 className="text-xl text-slate-900 dark:text-white font-bold group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Incident &amp; Breach Response</h3>
<p className="text-base text-slate-600 dark:text-slate-300 mt-2">
              Structured triage workflows linked to GDPR 72-hour notifications and DPDP Data Protection Board of India reporting clocks.
            </p>
</div>
<div className="mt-6 pt-space-sm font-mono text-xs text-red-600 dark:text-red-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
            <span>Regulatory Clocks &amp; Playbooks</span><ArrowRight className="h-3.5 w-3.5" />
          </div>
</Link>
{/*  Feature 6  */}
<Link href="/solutions/mssp" className="bg-white dark:bg-[#0A111F] p-space-card rounded-xl shadow-sm hover:shadow-md hover:border-[#2E936F]/40 transition-all flex flex-col justify-between border border-slate-300 dark:border-navy-700/60 group block">
<div>
<div className="w-12 h-12 rounded-lg bg-slate-900 dark:bg-black text-white flex items-center justify-center mb-6">
<Circle className="h-5 w-5 shrink-0" />
</div>
<h3 className="text-xl text-slate-900 dark:text-white font-bold group-hover:text-[#2E936F] dark:group-hover:text-teal transition-colors">MSSP Partner &amp; Multi-Tenancy</h3>
<p className="text-base text-slate-600 dark:text-slate-300 mt-2">
              Purpose-built administration console for security advisory firms and MSSPs to oversee dozens of client compliance posture environments centrally.
            </p>
</div>
<div className="mt-6 pt-space-sm font-mono text-xs text-slate-900 dark:text-white font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
            <span>Multi-Tenant Portfolio View</span><ArrowRight className="h-3.5 w-3.5" />
          </div>
</Link>
</div>
</div>
</section>
{/*  =========================================================================  */}
{/*  5. TRANSPARENT ADVISORY AI PIPELINE (Technical Panel, Dark High-Contrast)   */}
{/*  =========================================================================  */}
<section className="w-full bg-[#0F172A] text-white px-4 md:px-8 py-space-section">
<div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs text-amber-500 font-bold uppercase tracking-widest">TRANSPARENT AI ARCHITECTURE</span>
          <h2 className="text-3xl md:text-4xl text-[#F8FAFC] font-bold mt-1 tracking-tight">AI assists. Humans decide.</h2>
          <p className="text-base text-[#94A3B8] mt-2">Advisory AI suggests clause correlations; mandatory human approval keeps your team in full control.</p>
        </div>
        {/*  8-Stage Execution Pipeline Visualization  */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm text-[#F8FAFC] font-semibold">End-to-End Advisory AI Pipeline Execution Sequence:</span>
            <span className="font-mono text-xs text-[#38BDF8]">Stateless • Ephemeral Execution</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-[#1E293B] p-space-card rounded-xl border border-slate-700/50 relative group">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-teal-400 font-bold">STAGE 01</span>
                <span className="text-xs text-slate-500 font-mono">01 → 02</span>
              </div>
              <h4 className="text-sm text-white font-bold">Initiate crosswalk request</h4>
              <p className="text-xs text-[#94A3B8] mt-1.5 leading-relaxed">Practitioner triggers control crosswalk suggestion in workspace.</p>
            </div>
            <div className="bg-[#1E293B] p-space-card rounded-xl border border-slate-700/50 relative group">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-teal-400 font-bold">STAGE 02</span>
                <span className="text-xs text-slate-500 font-mono">02 → 03</span>
              </div>
              <h4 className="text-sm text-white font-bold">Enforce security & quota limits</h4>
              <p className="text-xs text-[#94A3B8] mt-1.5 leading-relaxed">Tenant verification, token metering, and strict quota safeguards.</p>
            </div>
            <div className="bg-[#1E293B] p-space-card rounded-xl border-l-4 border-amber-500 border-t border-r border-b border-slate-700/50 relative group">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-amber-400 font-bold">STAGE 03</span>
                <span className="text-xs text-slate-500 font-mono">03 → 04</span>
              </div>
              <h4 className="text-sm text-white font-bold">Sanitize data payload</h4>
              <p className="text-xs text-[#94A3B8] mt-1.5 leading-relaxed">Strips org names, PII, and sensitive context before external routing.</p>
            </div>
            <div className="bg-[#1E293B] p-space-card rounded-xl border border-slate-700/50 relative group">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-teal-400 font-bold">STAGE 04</span>
                <span className="text-xs text-slate-500 font-mono">04 → 05</span>
              </div>
              <h4 className="text-sm text-white font-bold">Route query to ideal model</h4>
              <p className="text-xs text-[#94A3B8] mt-1.5 leading-relaxed">Directs query to low-latency or reasoning model based on complexity.</p>
            </div>
            <div className="bg-[#1E293B] p-space-card rounded-xl border border-slate-700/50 relative group">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-teal-400 font-bold">STAGE 05</span>
                <span className="text-xs text-slate-500 font-mono">05 → 06</span>
              </div>
              <h4 className="text-sm text-white font-bold">Evaluate control correlations</h4>
              <p className="text-xs text-[#94A3B8] mt-1.5 leading-relaxed">Clause cross-referencing via zero-retention model APIs.</p>
            </div>
            <div className="bg-[#1E293B] p-space-card rounded-xl border border-slate-700/50 relative group">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-teal-400 font-bold">STAGE 06</span>
                <span className="text-xs text-slate-500 font-mono">06 → 07</span>
              </div>
              <h4 className="text-sm text-white font-bold">Validate response schema</h4>
              <p className="text-xs text-[#94A3B8] mt-1.5 leading-relaxed">Pydantic check ensuring strictly typed ISO/SOC clause output.</p>
            </div>
            <div className="bg-[#1E293B] p-space-card rounded-xl border-l-4 border-teal-500 border-t border-r border-b border-slate-700/50 relative group">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-teal-400 font-bold">STAGE 07</span>
                <span className="text-xs text-slate-500 font-mono">07 → 08</span>
              </div>
              <h4 className="text-sm text-white font-bold">Human review & sign-off</h4>
              <p className="text-xs text-[#94A3B8] mt-1.5 leading-relaxed">Mandatory CISO / GRC lead confirmation before persistence.</p>
            </div>
            <div className="bg-[#1E293B] p-space-card rounded-xl border-l-4 border-amber-500 border-t border-r border-b border-slate-700/50 relative group">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-amber-400 font-bold">STAGE 08</span>
                <span className="text-xs text-emerald-400 font-mono font-bold">Complete ✓</span>
              </div>
              <h4 className="text-sm text-white font-bold">Log audit-ready record</h4>
              <p className="text-xs text-[#94A3B8] mt-1.5 leading-relaxed">Approved suggestions logged in tenant-isolated audit trail.</p>
            </div>
          </div>
        </div>
{/*  Data Privacy Guarantee Split Box  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#1E293B] p-space-card rounded-xl border border-slate-700/50">
<div className="p-space-card rounded-lg bg-[#0F172A] border border-slate-700/50">
<div className="flex items-center gap-2 text-amber-600 dark:text-amber-500 mb-4 text-sm font-bold">
<CheckCircle2 className="h-5 w-5 shrink-0" />
            WHAT IS SENT TO EXTERNAL LLMS
          </div>
<ul className="space-y-2 text-sm text-[#CBD5E1]">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-500"></span> Generic control safeguard descriptions</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-500"></span> Target standard taxonomy clause definitions</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-500"></span> Technical criteria requirements (e.g. MFA, Encryption)</li>
</ul>
</div>
<div className="p-space-card rounded-lg bg-[#0F172A] border border-slate-700/50">
<div className="flex items-center gap-2 text-red-600 dark:text-red-400 mb-4 text-sm font-bold">
<Circle className="h-5 w-5 shrink-0" />
            WHAT IS NEVER TRANSMITTED
          </div>
<ul className="space-y-2 text-sm text-[#CBD5E1]">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-500"></span> Organization names, brand identities, or tenant IDs</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-500"></span> Customer PII, employee names, or authorization tokens</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-500"></span> Proprietary source code, keys, or confidential audit findings</li>
</ul>
</div>
</div>
</div>
</section>
{/*  =========================================================================  */}
{/*  6. INTERACTIVE FRAMEWORK CROSSWALK & MATRIX                                 */}
{/*  =========================================================================  */}
<section className="w-full bg-white dark:bg-[#0A111F] px-4 md:px-8 py-space-section">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-8">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest">DOCUMENTED FRAMEWORK COVERAGE</span>
<h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white font-bold mt-1 tracking-tight">Six frameworks supported natively out of the box.</h2>
<p className="text-base text-slate-600 dark:text-slate-300 mt-2">
          One primary control definition maps seamlessly across global cybersecurity, data protection, and artificial intelligence regulations.
        </p>
</div>
{/*  Framework Badges Grid  */}
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
<div className="p-space-card rounded-lg bg-slate-50 dark:bg-[#16233F] text-center shadow-sm hover:bg-teal-100/20 dark:bg-teal-900/20 transition-all cursor-pointer border border-slate-300 dark:border-navy-700">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold block">ISMS</span>
<span className="text-sm text-slate-900 dark:text-white font-bold mt-1 block">ISO 27001:2022</span>
<span className="text-2xs text-slate-600 dark:text-slate-300 mt-1 block">93 Controls</span>
</div>
<div className="p-space-card rounded-lg bg-slate-50 dark:bg-[#16233F] text-center shadow-sm hover:bg-teal-100/20 dark:bg-teal-900/20 transition-all cursor-pointer border border-slate-300 dark:border-navy-700">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold block">AIMS</span>
<span className="text-sm text-slate-900 dark:text-white font-bold mt-1 block">ISO 42001:2023</span>
<span className="text-2xs text-slate-600 dark:text-slate-300 mt-1 block">AI Governance</span>
</div>
<div className="p-space-card rounded-lg bg-slate-50 dark:bg-[#16233F] text-center shadow-sm hover:bg-teal-100/20 dark:bg-teal-900/20 transition-all cursor-pointer border border-slate-300 dark:border-navy-700">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold block">TRUST</span>
<span className="text-sm text-slate-900 dark:text-white font-bold mt-1 block">SOC 2 Type II</span>
<span className="text-2xs text-slate-600 dark:text-slate-300 mt-1 block">TSC Criteria</span>
</div>
<div className="p-space-card rounded-lg bg-slate-50 dark:bg-[#16233F] text-center shadow-sm hover:bg-teal-100/20 dark:bg-teal-900/20 transition-all cursor-pointer border border-slate-300 dark:border-navy-700">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold block">PRIVACY</span>
<span className="text-sm text-slate-900 dark:text-white font-bold mt-1 block">GDPR / UK</span>
<span className="text-2xs text-slate-600 dark:text-slate-300 mt-1 block">Articles 28–35</span>
</div>
<div className="p-space-card rounded-lg bg-slate-50 dark:bg-[#16233F] text-center shadow-sm hover:bg-teal-100/20 dark:bg-teal-900/20 transition-all cursor-pointer border border-slate-300 dark:border-navy-700">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold block">INDIA LAW</span>
<span className="text-sm text-slate-900 dark:text-white font-bold mt-1 block">DPDP Act 2023</span>
<span className="text-2xs text-slate-600 dark:text-slate-300 mt-1 block">Fiduciary Rules</span>
</div>
<div className="p-space-card rounded-lg bg-slate-50 dark:bg-[#16233F] text-center shadow-sm hover:bg-teal-100/20 dark:bg-teal-900/20 transition-all cursor-pointer border border-slate-300 dark:border-navy-700">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold block">HEALTHCARE</span>
<span className="text-sm text-slate-900 dark:text-white font-bold mt-1 block">HIPAA Security</span>
<span className="text-2xs text-slate-600 dark:text-slate-300 mt-1 block">ePHI Safeguards</span>
</div>
</div>
{/*  Realistic Crosswalk Matrix Table  */}
<div className="bg-slate-50 dark:bg-[#16233F] rounded-xl p-space-card shadow-sm border border-slate-300 dark:border-navy-700 overflow-hidden">
<div className="flex items-center justify-between mb-6"><div><div className="flex items-center gap-2"><h3 className="text-xl text-slate-900 dark:text-white font-bold">Practical Crosswalk Example: Map-Once in Action</h3><span className="inline-flex items-center px-2 py-0.5 rounded bg-slate-200 dark:bg-navy-700est text-slate-900 dark:text-white font-code-sm text-[10px] font-medium">(Illustrative Demo Data)</span></div><p className="text-sm text-slate-600 dark:text-slate-300">See how a single organizational control connects to multiple framework requirements.</p></div><span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-mono text-xs font-semibold">1 Control = Multi-Standard Mapping</span></div>
<div className="overflow-x-auto">
<table className="w-full text-left bg-white dark:bg-[#0A111F] rounded-lg shadow-sm">
<thead className="bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white text-sm border-b border-surface-container-high">
<tr>
<th className="p-4 md:p-6">OMNiGRC Control</th>
<th className="p-4 md:p-6">ISO 27001:2022</th>
<th className="p-4 md:p-6">SOC 2 Type II</th>
<th className="p-4 md:p-6">DPDP Act 2023</th>
<th className="p-4 md:p-6">HIPAA Security</th>
<th className="p-4 md:p-6">Audit Status</th>
</tr>
</thead>
<tbody className="text-sm text-slate-900 dark:text-white">
<tr className="hover:bg-teal-100 dark:bg-teal-900/40/10 transition-colors">
<td className="p-4 md:p-6">
<div className="text-sm font-bold text-slate-900 dark:text-white">Access Control &amp; Least Privilege</div>
<div className="font-mono text-xs text-teal-600 dark:text-teal-400">CTRL-004</div>
</td>
<td className="p-4 md:p-6 font-code-sm">Clause A.9.2, A.9.4</td>
<td className="p-4 md:p-6 font-code-sm">CC6.1, CC6.3</td>
<td className="p-4 md:p-6 font-code-sm">Section 8(5)</td>
<td className="p-4 md:p-6 font-code-sm">§ 164.312(a)(1)</td>
<td className="p-4 md:p-6">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-label-sm font-bold">Verified</span>
</td>
</tr>
<tr className="hover:bg-teal-100 dark:bg-teal-900/40/10 transition-colors">
<td className="p-4 md:p-6">
<div className="text-sm font-bold text-slate-900 dark:text-white">At-Rest &amp; In-Transit Encryption</div>
<div className="font-mono text-xs text-teal-600 dark:text-teal-400">CTRL-009</div>
</td>
<td className="p-4 md:p-6 font-code-sm">Clause A.8.24</td>
<td className="p-4 md:p-6 font-code-sm">CC6.6, CC6.7</td>
<td className="p-4 md:p-6 font-code-sm">Section 8(4)</td>
<td className="p-4 md:p-6 font-code-sm">§ 164.312(e)(1)</td>
<td className="p-4 md:p-6">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-label-sm font-bold">Verified</span>
</td>
</tr>
<tr className="hover:bg-teal-100 dark:bg-teal-900/40/10 transition-colors">
<td className="p-4 md:p-6">
<div className="text-sm font-bold text-slate-900 dark:text-white">AI Model Safety &amp; Training Data Verification</div>
<div className="font-mono text-xs text-teal-600 dark:text-teal-400">CTRL-088</div>
</td>
<td className="p-4 md:p-6 font-code-sm">Clause A.8.1 (Context)</td>
<td className="p-4 md:p-6 font-code-sm">CC7.1 (System Ops)</td>
<td className="p-4 md:p-6 font-code-sm">Section 9 (Consent)</td>
<td className="p-4 md:p-6 font-code-sm">ISO 42001: B.5.2</td>
<td className="p-4 md:p-6">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm font-bold">Under Review</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>
{/*  =========================================================================  */}
{/*  7. DEPLOYMENT ARCHITECTURE (Shared SaaS, Private MSSP, Self-Hosted)        */}
{/*  =========================================================================  */}
<section className="w-full bg-slate-50 dark:bg-[#16233F] px-4 md:px-8 py-space-section border-t border-slate-300 dark:border-navy-700">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-8">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest">DEPLOYMENT FLEXIBILITY</span>
<h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white font-bold mt-1 tracking-tight">Built for regional data residency &amp; infrastructure sovereignty.</h2>
<p className="text-base text-slate-600 dark:text-slate-300 mt-2">
          From fast startup deployments to highly regulated air-gapped defense infrastructure, choose the operational model that matches your compliance posture.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
{/*  MODEL 01  */}
<Link href="/demo" className="bg-white dark:bg-[#0A111F] p-space-card rounded-xl shadow-sm hover:shadow-md hover:border-[#2E936F]/40 transition-all flex flex-col justify-between border border-slate-300 dark:border-navy-700/60 group block"><div><div className="flex items-center justify-between mb-4"><span className="font-mono text-xs text-amber-600 dark:text-amber-500 font-bold uppercase">MODEL 01</span><span className="px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-xs font-semibold">Fastest Onboarding</span></div><h3 className="text-xl text-slate-900 dark:text-white font-bold group-hover:text-[#2E936F] dark:group-hover:text-teal transition-colors">Shared Multi-Tenant SaaS</h3><p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">Fully managed cloud service with application-level tenant isolation, automated daily backups, and instant onboarding for growing teams.</p><ul className="mt-6 space-y-2 text-sm text-slate-900 dark:text-white"><li className="flex items-center gap-2"><Circle className="h-5 w-5 shrink-0" /> Application-level tenant isolation</li><li className="flex items-center gap-2"><Circle className="h-5 w-5 shrink-0" /> Zero Infrastructure Burden</li><li className="flex items-center gap-2"><Circle className="h-5 w-5 shrink-0" /> Continuous Automated Upgrades</li></ul></div><div className="mt-8 pt-space-sm font-mono text-xs text-teal-600 dark:text-teal-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1"><span>Deploy in &lt; 5 minutes</span><ArrowRight className="h-3.5 w-3.5" /></div></Link>
{/*  MODEL 02  */}
<Link href="/solutions/mssp" className="bg-emerald-50 dark:bg-[#06241C] border border-emerald-300 dark:border-emerald-700/60 p-space-card rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group block"><div><div className="flex items-center justify-between mb-4"><span className="font-mono text-xs text-emerald-800 dark:text-emerald-300 font-bold uppercase">MODEL 02</span><span className="px-2.5 py-0.5 rounded-full bg-emerald-600 dark:bg-emerald-500 text-white text-xs font-semibold">Dedicated Cloud</span></div><h3 className="text-xl text-slate-900 dark:text-white font-bold group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">Dedicated Private MSSP</h3><p className="text-sm text-slate-700 dark:text-emerald-100/90 mt-2 leading-relaxed">Dedicated isolated tenant VPC with customer-managed encryption keys, dedicated storage, and partner administration consoles.</p><ul className="mt-6 space-y-2 text-sm text-slate-900 dark:text-slate-100"><li className="flex items-center gap-2"><Circle className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" /> Dedicated VPC &amp; Compute</li><li className="flex items-center gap-2"><Circle className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" /> Customer-Managed Encryption Keys</li><li className="flex items-center gap-2"><Circle className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" /> Multi-Client Partner Support</li></ul></div><div className="mt-8 pt-space-sm font-mono text-xs text-emerald-700 dark:text-emerald-300 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1"><span>Configured in 24 hours</span><ArrowRight className="h-3.5 w-3.5" /></div></Link>
{/*  MODEL 03  */}
<Link href="/how-it-works" className="bg-white dark:bg-[#0A111F] p-space-card rounded-xl shadow-sm hover:shadow-md hover:border-[#2E936F]/40 transition-all flex flex-col justify-between border border-slate-300 dark:border-navy-700/60 group block"><div><div className="flex items-center justify-between mb-4"><span className="font-mono text-xs text-slate-600 dark:text-slate-300 font-bold uppercase">MODEL 03</span><span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white text-xs font-semibold">Customer Infrastructure</span></div><h3 className="text-xl text-slate-900 dark:text-white font-bold group-hover:text-[#2E936F] dark:group-hover:text-teal transition-colors">Containerized Docker Deployment</h3><p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">Containerized Docker deployment run directly inside your AWS, Azure, GCP, or on-premises environment with full infrastructure custody.</p><ul className="mt-6 space-y-2 text-sm text-slate-900 dark:text-white"><li className="flex items-center gap-2"><Circle className="h-5 w-5 shrink-0" /> Customer-Controlled Infrastructure</li><li className="flex items-center gap-2"><Circle className="h-5 w-5 shrink-0" /> Air-Gapped Capable Deployment</li><li className="flex items-center gap-2"><Circle className="h-5 w-5 shrink-0" /> Containerized Docker Architecture</li></ul></div><div className="mt-8 pt-space-sm font-mono text-xs text-slate-900 dark:text-white font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1"><span>Docker Architecture Specs</span><ArrowRight className="h-3.5 w-3.5" /></div></Link></div>
{/*  Regional Residency Badge Banner  */}
<div className="bg-white dark:bg-[#0A111F] rounded-xl p-space-card shadow-sm border border-slate-300 dark:border-navy-700 flex flex-col sm:flex-row items-center justify-between gap-6"><div className="flex items-center gap-4"><Circle className="h-5 w-5 shrink-0" /><div><div className="text-sm text-slate-900 dark:text-white font-bold">Data Residency &amp; Regional Deployment Options:</div><div className="text-sm text-slate-600 dark:text-slate-300">Single-region dedicated instance hosting available upon request (India / UK / EU). Global routing is configured per contract tenant requirements.</div></div></div><div className="flex items-center gap-2 flex-shrink-0"><span className="inline-flex items-center px-2 py-1 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-mono text-xs font-semibold">Tenant Configured</span></div></div>
</div>
</section>
{/*  =========================================================================  */}
{/*  8. FINAL CONVERSION SECTION (Warm Peach Card + Live Trust Badges)         */}
{/*  =========================================================================  */}
<section className="w-full bg-white dark:bg-[#0A111F] px-4 md:px-8 py-space-section">
<div className="max-w-7xl mx-auto">
<div className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 dark:from-[#062019] dark:via-[#0B2C23] dark:to-[#051A14] border border-emerald-300 dark:border-emerald-700/60 rounded-2xl p-space-card md:p-12 shadow-xl overflow-hidden">
{/*  Subtle background glow  */}
<div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-600/20 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-600 dark:bg-emerald-500 text-white font-mono text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
<Zap className="h-4 w-4 shrink-0 text-white" />
            READY FOR AUDIT DAY
          </div>
<h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white font-extrabold tracking-tight">
            Connect your risk, assets, and controls today.
          </h2>
<p className="text-base md:text-lg text-slate-700 dark:text-emerald-100/90 font-medium mt-4 mb-8 leading-relaxed">
            Move away from disconnected spreadsheets. Experience a modern, unified GRC operating workflow designed specifically for lean security teams.
          </p>
<div className="flex flex-wrap items-center gap-4 mb-8">
<a className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-sm font-bold text-white bg-[#2E936F] dark:bg-emerald-500 hover:bg-[#237457] dark:hover:bg-emerald-400 shadow-md hover:shadow-lg transition-all active:scale-[0.98]" data-path="request-demo" href="/demo">
<span className="">Request a Demo</span>
<ArrowRight className="h-5 w-5 shrink-0 ml-1.5" />
</a>
<a className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-900 dark:text-white bg-white dark:bg-navy-900 hover:bg-slate-50 dark:hover:bg-navy-800 border border-slate-200 dark:border-navy-700 shadow-sm transition-all" data-path="pricing" href="/pricing">
<span className="">Explore Pricing &amp; Calculator</span>
</a>
</div>
{/*  Live Trust Assurance Line  */}
<div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-space-sm font-mono text-xs text-slate-800 dark:text-emerald-200/90"><span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span> SOC 2 Type II In-Progress</span><span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span> Application-Level Tenant Isolation</span><span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span> Advisory AI with Payload Minimization &amp; Human Approval</span></div>
</div>
</div>
</div>
</section>
</div>
</main>

      <Footer />
    </div>
  );
}
