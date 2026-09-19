"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
  Database
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
    <div className="min-h-screen bg-[#faf8ff] text-[#0d1b36] selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] antialiased">
      <Header />

      <main className="w-full pt-24 sm:pt-28">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION                                                           */}
        {/* ========================================================================= */}
        <section className="relative w-full bg-[#faf8ff] px-4 sm:px-6 lg:px-8 pt-4 pb-12 overflow-hidden">
          {/* Ambient Warm Glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ffdbcf]/30 rounded-full blur-3xl pointer-events-none -z-10 ambient-motion-1" />
          <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#d9e2ff]/40 rounded-full blur-2xl pointer-events-none -z-10 ambient-motion-2" />

          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdbcf] text-[#380d00] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F15E1C] animate-pulse" />
              <span className="font-mono text-xs font-semibold tracking-wider uppercase">
                THE CONNECTED GRC OPERATING LAYER • V2.4
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-[56px] lg:leading-[64px] text-[#0d1b36] font-extrabold tracking-tight mb-6">
              Unified risk, asset, and control management for lean GRC teams.
            </h1>

            {/* Subheadline */}
            <p className="max-w-3xl text-base sm:text-lg text-[#5a4138] font-medium mb-8 leading-relaxed">
              Connect risk registers, asset inventories, control mapping, compliance testing, and defensible audit evidence into one operating workflow. Advisory AI suggests; human oversight approves.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#F15E1C] to-[#D4521A] hover:shadow-lg transition-all active:scale-[0.98] shadow-md"
              >
                <span>Request a Walkthrough</span>
                <CalendarCheck className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="#workflows-preview"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-[#0d1b36] bg-white hover:bg-slate-100 shadow-sm transition-all border border-slate-200"
              >
                <span>Explore Live Workflows</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Framework Quick Badges */}
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs text-[#5a4138] mb-12">
              <span className="font-semibold text-[#0d1b36]">Documented Framework Coverage:</span>
              <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-[#006c4d]" /> ISO 27001</span>
              <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-[#006c4d]" /> ISO 42001</span>
              <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-[#006c4d]" /> SOC 2 Type II</span>
              <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-[#006c4d]" /> GDPR / UK GDPR</span>
              <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-[#006c4d]" /> DPDP Act 2023</span>
              <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-[#006c4d]" /> HIPAA</span>
            </div>

            {/* Interactive Risk to Evidence Pipeline Component */}
            <div className="w-full bg-[#f1f3ff] rounded-2xl shadow-xl p-6 sm:p-8 text-left border border-slate-200">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="inline-flex w-3 h-3 rounded-full bg-[#006c4d]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0d1b36]">
                    Interactive Operating Rail: Risk to Evidence Pipeline
                  </span>
                </div>
                <span className="font-mono text-xs text-[#F15E1C] font-semibold bg-white px-3 py-1 rounded-full shadow-sm border border-slate-200">
                  Live Crosswalk Trace Stream
                </span>
              </div>

              {/* Pipeline Nodes Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-3 mb-6">
                {railSteps.map((step, idx) => (
                  <button
                    key={step.num}
                    onClick={() => setActiveRailStep(idx)}
                    className={`p-3 rounded-xl transition-all text-left flex flex-col justify-between border ${
                      activeRailStep === idx
                        ? "bg-[#ffdbcf] border-[#F15E1C] shadow-sm"
                        : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <span className="font-mono text-xs font-bold text-[#F15E1C]">{step.num} {step.name}</span>
                    <span className="text-xs font-semibold text-[#0d1b36] mt-1">{step.label}</span>
                    <span className="text-[11px] text-[#5a4138] mt-0.5">{step.detail}</span>
                  </button>
                ))}
              </div>

              {/* High-Contrast Telemetry Bar */}
              <div className="bg-[#23304c] text-[#edf0ff] rounded-xl p-4 font-mono text-xs shadow-inner flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#006c4d] text-white text-[10px] uppercase font-bold tracking-wider">
                    TRACE VIEW
                  </span>
                  <span className="text-[#95f6cb] font-semibold">{railSteps[activeRailStep].trace}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                  <span>Sync: 4.2ms</span>
                  <CheckCircle2 className="h-4 w-4 text-[#95f6cb]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. THE FRAGMENTATION PROBLEM                                               */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#f1f3ff] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="font-mono text-xs text-[#F15E1C] font-bold uppercase tracking-widest">
                THE REALITY OF LEAN GRC
              </span>
              <h2 className="text-2xl sm:text-4xl text-[#0d1b36] font-bold mt-2 tracking-tight">
                Compliance isn&apos;t hard because of frameworks.<br />It&apos;s hard because work is fragmented.
              </h2>
              <p className="text-sm sm:text-base text-[#5a4138] mt-3">
                Lean teams get stuck between disconnected spreadsheets and heavyweight enterprise GRC suites. OMNiGRC bridges that gap with a unified operating layer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Fragmented GRC Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-semibold">
                      <AlertTriangle className="h-3.5 w-3.5" /> Fragmented GRC (Manual)
                    </span>
                    <span className="font-mono text-xs text-red-600 font-semibold">High Friction</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-[#0d1b36]">Isolated Spreadsheets</h4>
                        <p className="text-xs text-[#5a4138]">Risk logs and asset inventories stored in disparate sheets that drift immediately after sign-off.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-[#0d1b36]">Scattered Manual Tickets</h4>
                        <p className="text-xs text-[#5a4138]">Ad-hoc tasks and spreadsheets completely detached from regulatory control requirements.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-[#0d1b36]">Email Evidence Chasing</h4>
                        <p className="text-xs text-[#5a4138]">Endless message threads asking engineering leads for screenshots and evidence links prior to audits.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-[#0d1b36]">Missed Testing Cadences</h4>
                        <p className="text-xs text-[#5a4138]">Zero rolling visibility into recurring access reviews, backup drill validation, or vendor check-ins.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-3 rounded-lg bg-slate-100 font-mono text-xs text-[#5a4138]">
                  Resulting Impact: Duplicate mapping work, frantic pre-audit sprints, and low posture confidence.
                </div>
              </div>

              {/* Connected OMNiGRC Card */}
              <div className="bg-[#ffdbcf]/20 rounded-2xl p-6 sm:p-8 shadow-sm border border-[#ffdbcf] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#95f6cb] text-[#00513a] text-xs font-semibold">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Connected OMNiGRC Operations
                    </span>
                    <span className="font-mono text-xs text-[#006c4d] font-semibold">Continuous Posture</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#006c4d] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-[#0d1b36]">5×5 Likelihood × Impact Risk Scoring</h4>
                        <p className="text-xs text-[#5a4138]">Risks mapped directly to technical assets with single standardized 5×5 risk matrix evaluation.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#006c4d] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-[#0d1b36]">Map-Once Control Logic</h4>
                        <p className="text-xs text-[#5a4138]">Define a policy once; Advisory AI assists with cross-mapping across ISO 27001, SOC 2, HIPAA, and DPDP.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#006c4d] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-[#0d1b36]">Continuous 30/60/90-Day Cadence</h4>
                        <p className="text-xs text-[#5a4138]">Automated task triggers with assigned engineering leads, SLA reminders, and document reference links.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#006c4d] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-[#0d1b36]">Structured Application Audit Trail</h4>
                        <p className="text-xs text-[#5a4138]">Detailed change tracking, user timestamps, and exportable audit packs with structured reference records.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-3 rounded-lg bg-white font-mono text-xs text-[#0d1b36] shadow-sm flex items-center justify-between">
                  <span>Audit Posture: Continuous &amp; Tracked</span>
                  <span className="text-[#006c4d] font-bold">Audit-Ready Workflow</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. AUDIENCE SECTIONS                                                      */}
        {/* ========================================================================= */}
        <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ffdbcf] text-[#380d00] font-mono text-xs font-bold tracking-wider uppercase mb-3 shadow-sm">
                TAILORED OPERATING WORKFLOWS
              </div>
              <h2 className="text-2xl sm:text-4xl text-[#0d1b36] font-bold tracking-tight">
                Built for the teams carrying governance in the real world.
              </h2>
              <p className="text-sm sm:text-base text-[#5a4138] mt-2">
                Whether you are a solo practitioner or leading security strategy, OMNiGRC organizes risk, controls, and evidence around how you actually work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="bg-[#f1f3ff] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-slate-200 group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#ffdbcf] text-[#F15E1C] font-mono text-[10px] font-bold uppercase">
                      CAPACITY CONSTRAINED
                    </span>
                    <Zap className="h-5 w-5 text-[#F15E1C] group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0d1b36]">Lean Security Teams</h3>
                  <p className="text-xs text-[#5a4138] mt-2 leading-relaxed">
                    Replace spreadsheet sprawl and frantic evidence chasing with connected risk and rolling 30/60/90-day testing.
                  </p>
                  <div className="mt-4 p-2.5 rounded-lg bg-white border border-slate-200">
                    <span className="font-mono text-[10px] text-[#5a4138] uppercase font-semibold block mb-1">Workflow Rail</span>
                    <span className="font-mono text-xs text-[#0d1b36] font-medium block">Risk → Controls → Testing → Evidence</span>
                  </div>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-200">
                  <Link href="/solutions/lean-security-teams" className="text-xs font-semibold text-[#F15E1C] hover:text-[#ce4700] inline-flex items-center gap-1">
                    <span>Explore for Lean Teams</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#f1f3ff] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-slate-200 group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#95f6cb] text-[#00513a] font-mono text-[10px] font-bold uppercase">
                      EXECUTIVE VISIBILITY
                    </span>
                    <Shield className="h-5 w-5 text-[#006c4d] group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0d1b36]">Security Leaders &amp; CISOs</h3>
                  <p className="text-xs text-[#5a4138] mt-2 leading-relaxed">
                    Gain real-time posture oversight across unmitigated risks, asset exposures, remediation SLAs, and incident history.
                  </p>
                  <div className="mt-4 p-2.5 rounded-lg bg-white border border-slate-200">
                    <span className="font-mono text-[10px] text-[#5a4138] uppercase font-semibold block mb-1">Workflow Rail</span>
                    <span className="font-mono text-xs text-[#0d1b36] font-medium block">Risk → Exposure → Action → Verification</span>
                  </div>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-200">
                  <Link href="/solutions/security-leaders" className="text-xs font-semibold text-[#F15E1C] hover:text-[#ce4700] inline-flex items-center gap-1">
                    <span>Explore for Security Leaders</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#f1f3ff] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-slate-200 group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#ffdea6] text-[#795600] font-mono text-[10px] font-bold uppercase">
                      MULTI-FRAMEWORK CADENCE
                    </span>
                    <CalendarCheck className="h-5 w-5 text-[#795600] group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0d1b36]">Compliance Managers</h3>
                  <p className="text-xs text-[#5a4138] mt-2 leading-relaxed">
                    Map controls once across ISO, SOC 2, and DPDP, assign clear ownership, and maintain continuous audit workpapers.
                  </p>
                  <div className="mt-4 p-2.5 rounded-lg bg-white border border-slate-200">
                    <span className="font-mono text-[10px] text-[#5a4138] uppercase font-semibold block mb-1">Workflow Rail</span>
                    <span className="font-mono text-xs text-[#0d1b36] font-medium block">Requirement → Control → Owner → Evidence</span>
                  </div>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-200">
                  <Link href="/solutions/compliance-managers" className="text-xs font-semibold text-[#F15E1C] hover:text-[#ce4700] inline-flex items-center gap-1">
                    <span>Explore for Compliance Managers</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-[#f1f3ff] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-slate-200 group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded bg-slate-200 text-[#0d1b36] font-mono text-[10px] font-bold uppercase">
                      SCALING GOVERNANCE
                    </span>
                    <Building2 className="h-5 w-5 text-[#0d1b36] group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0d1b36]">SaaS &amp; Growing Orgs</h3>
                  <p className="text-xs text-[#5a4138] mt-2 leading-relaxed">
                    Unify expanding enterprise customer security reviews and compliance audits without multiplying operational overhead.
                  </p>
                  <div className="mt-4 p-2.5 rounded-lg bg-white border border-slate-200">
                    <span className="font-mono text-[10px] text-[#5a4138] uppercase font-semibold block mb-1">Workflow Rail</span>
                    <span className="font-mono text-xs text-[#0d1b36] font-medium block">One Workflow → Multi-Standard Coverage</span>
                  </div>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-200">
                  <Link href="/solutions/saas-growing-organizations" className="text-xs font-semibold text-[#F15E1C] hover:text-[#ce4700] inline-flex items-center gap-1">
                    <span>Explore for SaaS Teams</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. TRANSPARENT ADVISORY AI PIPELINE                                       */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#0F172A] text-slate-100 px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="font-mono text-xs text-[#006c4d] font-bold uppercase tracking-widest">
                TRANSPARENT AI ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-4xl text-white font-bold mt-2 tracking-tight">
                AI assists. Humans decide. Payload minimization.
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-2">
                Advisory AI with payload minimization &amp; human approval. OMNiGRC provides advisory clause correlations with confidence suggestions; human sign-off is mandatory before any persistence.
              </p>
            </div>

            {/* 8-Stage Execution Pipeline */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-white">End-to-End Advisory AI Pipeline Execution:</span>
                <span className="font-mono text-xs text-sky-400">Stateless • Ephemeral Execution</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-[#1E293B] p-4 rounded-xl">
                  <span className="font-mono text-xs text-[#ffb59a] font-bold">STAGE 01</span>
                  <h4 className="text-xs font-bold text-white mt-1">Analyst UI Trigger</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Practitioner initiates control crosswalk suggestion in workspace.</p>
                </div>
                <div className="bg-[#1E293B] p-4 rounded-xl">
                  <span className="font-mono text-xs text-[#ffb59a] font-bold">STAGE 02</span>
                  <h4 className="text-xs font-bold text-white mt-1">API &amp; Rate Limiting</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Tenant verification, token metering, and strict quota safeguards.</p>
                </div>
                <div className="bg-[#1E293B] p-4 rounded-xl border-l-2 border-[#006c4d]">
                  <span className="font-mono text-xs text-[#95f6cb] font-bold">STAGE 03</span>
                  <h4 className="text-xs font-bold text-white mt-1">PII Redaction Engine</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Strips names, internal IPs, secrets, and customer tenant IDs.</p>
                </div>
                <div className="bg-[#1E293B] p-4 rounded-xl">
                  <span className="font-mono text-xs text-[#ffb59a] font-bold">STAGE 04</span>
                  <h4 className="text-xs font-bold text-white mt-1">Tiered Model Router</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Routes to low-latency or reasoning model based on query complexity.</p>
                </div>
                <div className="bg-[#1E293B] p-4 rounded-xl">
                  <span className="font-mono text-xs text-[#ffb59a] font-bold">STAGE 05</span>
                  <h4 className="text-xs font-bold text-white mt-1">Sanitized LLM Call</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Clause cross-reference evaluation using zero-data-retention APIs.</p>
                </div>
                <div className="bg-[#1E293B] p-4 rounded-xl">
                  <span className="font-mono text-xs text-[#ffb59a] font-bold">STAGE 06</span>
                  <h4 className="text-xs font-bold text-white mt-1">Schema Validator</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Pydantic validation: ensures strictly typed ISO / SOC clauses.</p>
                </div>
                <div className="bg-[#1E293B] p-4 rounded-xl border-l-2 border-[#F15E1C]">
                  <span className="font-mono text-xs text-[#F15E1C] font-bold">STAGE 07</span>
                  <h4 className="text-xs font-bold text-white mt-1">Human Review &amp; Sign-off</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Mandatory CISO / GRC lead confirmation before persistence.</p>
                </div>
                <div className="bg-[#1E293B] p-4 rounded-xl border-l-2 border-[#006c4d]">
                  <span className="font-mono text-xs text-[#95f6cb] font-bold">STAGE 08</span>
                  <h4 className="text-xs font-bold text-white mt-1">Application Audit Log</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Approved suggestion records logged with tenant isolation.</p>
                </div>
              </div>
            </div>

            {/* Split Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#1E293B] p-6 sm:p-8 rounded-2xl">
              <div className="p-4 rounded-xl bg-[#0F172A]">
                <div className="flex items-center gap-2 text-[#95f6cb] mb-3 text-xs font-bold">
                  <CheckCircle2 className="h-4 w-4" /> WHAT IS SENT TO EXTERNAL LLMS
                </div>
                <ul className="space-y-2 font-mono text-xs text-slate-300">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#006c4d]" /> Generic control safeguard descriptions</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#006c4d]" /> Target standard taxonomy clause definitions</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#006c4d]" /> Technical criteria requirements (e.g. MFA, Encryption)</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-[#0F172A]">
                <div className="flex items-center gap-2 text-red-400 mb-3 text-xs font-bold">
                  <XCircle className="h-4 w-4" /> WHAT IS NEVER TRANSMITTED
                </div>
                <ul className="space-y-2 font-mono text-xs text-slate-300">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Organization names, brand identities, or tenant IDs</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Customer PII, employee names, or authorization tokens</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Proprietary source code, keys, or confidential audit findings</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. FINAL CTA SECTION                                                      */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#faf8ff] px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center border-t border-slate-200">
          <div className="max-w-4xl mx-auto">
            <span className="font-mono text-xs text-[#F15E1C] font-bold uppercase tracking-widest mb-3 block">
              READY TO UNIFY YOUR GRC OPERATIONS?
            </span>
            <h2 className="text-3xl sm:text-5xl text-[#0d1b36] font-extrabold tracking-tight mb-6">
              Experience connected GRC without spreadsheet sprawl.
            </h2>
            <p className="text-sm sm:text-base text-[#5a4138] mb-8 leading-relaxed max-w-2xl mx-auto">
              Schedule a technical walkthrough tailored to your target frameworks and operational workflows.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#F15E1C] to-[#D4521A] hover:shadow-xl transition-all shadow-md"
              >
                <span>Request a Demo Walkthrough</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
