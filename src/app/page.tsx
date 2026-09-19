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
    <div className="min-h-screen bg-[#faf8ff] dark:bg-[#0A111F] text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:bg-teal/30 dark:selection:text-white antialiased">
      <Header />

      <main className="w-full pt-16">
<div className="flex flex-col w-full">
{/*  =========================================================================  */}
{/*  1. HERO SECTION (Clear, High-Converting, Light Canvas + Pipeline Demo)    */}
{/*  =========================================================================  */}
<section className="relative w-full bg-white dark:bg-[#0A111F] px-4 md:px-8 pt-6 pb-16 md:pb-24">
{/*  Ambient Warm Peach Glow behind Hero  */}
<div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-100/20 dark:bg-teal-900/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
<div className="absolute top-1/3 left-10 w-80 h-80 bg-surface-variant/40 rounded-full blur-2xl pointer-events-none -z-10"></div>
<div className="max-w-7xl mx-auto flex flex-col items-center text-center">
{/*  Eyebrow Pill  */}
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 mb-6 shadow-sm">
<span className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-500 animate-pulse"></span>
<span className="font-mono text-xs font-semibold tracking-wider uppercase">THE CONNECTED GRC OPERATING LAYER • EXPANDED V2.4</span>
</div>
{/*  Main Headline  */}
<h1 className="max-w-4xl text-4xl md:text-[56px] md:leading-[64px] text-slate-900 dark:text-white font-bold tracking-tight mb-6">
        Unified risk, asset, and control management for lean GRC teams.
      </h1>
{/*  Subheadline  */}
<p className="max-w-3xl text-lg text-slate-600 dark:text-slate-300 font-medium mb-8">
        Connect risk registers, asset inventories, control mapping, compliance testing, and defensible audit evidence into one operating workflow. Advisory AI suggests; human oversight approves.
      </p>
{/*  Primary & Secondary CTAs  */}
<div className="flex flex-wrap items-center justify-center gap-6 mb-8">
<a className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-sm font-semibold text-white bg-teal-600 dark:bg-teal-500 hover:bg-teal-600 dark:bg-teal-500-container shadow-md hover:shadow-lg transition-all active:scale-[0.98]" data-path="request-demo" href="#">
<span className="">Request a Walkthrough</span>
<CalendarCheck className="h-5 w-5 shrink-0" />
</a>
<a className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-900 dark:text-white bg-white dark:bg-[#0A111F] hover:bg-slate-50 dark:bg-[#16233F] shadow-sm transition-all" href="#workflows-preview">
<span className="">Explore Live Workflows</span>
<ArrowRight className="h-5 w-5 shrink-0" />
</a>
</div>
{/*  Quick Trust Badges  */}
<div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-sm text-slate-600 dark:text-slate-300 mb-12">
<span className="font-semibold text-slate-900 dark:text-white">Documented Framework Coverage:</span>
<span className="inline-flex items-center gap-1"><CheckCircle2 className="h-5 w-5 shrink-0" /> ISO 27001</span>
<span className="inline-flex items-center gap-1"><CheckCircle2 className="h-5 w-5 shrink-0" /> ISO 42001</span>
<span className="inline-flex items-center gap-1"><CheckCircle2 className="h-5 w-5 shrink-0" /> SOC 2 Type II</span>
<span className="inline-flex items-center gap-1"><CheckCircle2 className="h-5 w-5 shrink-0" /> GDPR / UK GDPR</span>
<span className="inline-flex items-center gap-1"><CheckCircle2 className="h-5 w-5 shrink-0" /> DPDP Act 2023</span>
<span className="inline-flex items-center gap-1"><CheckCircle2 className="h-5 w-5 shrink-0" /> HIPAA</span>
</div>
{/*  Interactive Risk to Evidence Pipeline Component  */}
<div className="w-full bg-slate-50 dark:bg-[#16233F] rounded-xl shadow-lg p-6 md:p-8 text-left">
<div className="flex flex-wrap items-center justify-between gap-4 mb-6">
<div className="flex items-center gap-2">
<span className="inline-flex w-3 h-3 rounded-full bg-amber-600 dark:bg-amber-500"></span>
<span className="text-sm text-slate-900 dark:text-white font-bold uppercase tracking-wider">Interactive Operating Rail: Risk to Evidence Pipeline</span>
</div>
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-semibold bg-white dark:bg-[#0A111F] px-2.5 py-1 rounded-full shadow-sm">
            Live PostgreSQL Crosswalk Stream
          </span>
</div>
{/*  Horizontal Pipeline Step Nodes  */}
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 md:gap-4 mb-6">
<div className="bg-white dark:bg-[#0A111F] p-4 rounded-lg shadow-sm flex flex-col justify-between group hover:bg-teal-100/30 dark:bg-teal-900/30 transition-colors cursor-pointer">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold">01 RISK</span>
<span className="text-xs text-slate-900 dark:text-white font-semibold mt-1">5×5 Matrix</span>
<span className="text-sm text-slate-600 dark:text-slate-300 text-[11px] mt-0.5">RSK-042 Likelihood 3</span>
</div>
<div className="bg-white dark:bg-[#0A111F] p-4 rounded-lg shadow-sm flex flex-col justify-between group hover:bg-teal-100/30 dark:bg-teal-900/30 transition-colors cursor-pointer">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold">02 ASSETS</span>
<span className="text-xs text-slate-900 dark:text-white font-semibold mt-1">Cloud / Infra</span>
<span className="text-sm text-slate-600 dark:text-slate-300 text-[11px] mt-0.5">RDS Postgres Prod</span>
</div>
<div className="bg-white dark:bg-[#0A111F] p-4 rounded-lg shadow-sm flex flex-col justify-between group hover:bg-teal-100/30 dark:bg-teal-900/30 transition-colors cursor-pointer">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold">03 CONTROLS</span>
<span className="text-xs text-slate-900 dark:text-white font-semibold mt-1">Map-Once</span>
<span className="text-sm text-slate-600 dark:text-slate-300 text-[11px] mt-0.5">CTRL-012 Automated</span>
</div>
<div className="bg-white dark:bg-[#0A111F] p-4 rounded-lg shadow-sm flex flex-col justify-between group hover:bg-teal-100/30 dark:bg-teal-900/30 transition-colors cursor-pointer">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold">04 TESTING</span>
<span className="text-xs text-slate-900 dark:text-white font-semibold mt-1">30-Day Cadence</span>
<span className="text-sm text-slate-600 dark:text-slate-300 text-[11px] mt-0.5">Automated Drill Pass</span>
</div>
<div className="bg-white dark:bg-[#0A111F] p-4 rounded-lg shadow-sm flex flex-col justify-between group hover:bg-teal-100/30 dark:bg-teal-900/30 transition-colors cursor-pointer">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold">05 AUDIT</span>
<span className="text-xs text-slate-900 dark:text-white font-semibold mt-1">Cross-Framework</span>
<span className="text-sm text-slate-600 dark:text-slate-300 text-[11px] mt-0.5">ISO 27001 + SOC 2</span>
</div>
<div className="bg-white dark:bg-[#0A111F] p-4 rounded-lg shadow-sm flex flex-col justify-between group hover:bg-teal-100/30 dark:bg-teal-900/30 transition-colors cursor-pointer">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold">06 ACTIONS</span>
<span className="text-xs text-slate-900 dark:text-white font-semibold mt-1">Remediation</span>
<span className="text-sm text-slate-600 dark:text-slate-300 text-[11px] mt-0.5">SLA Verified (0 Open)</span>
</div>
<div className="bg-white dark:bg-[#0A111F] p-4 rounded-lg shadow-sm flex flex-col justify-between group hover:bg-teal-100/30 dark:bg-teal-900/30 transition-colors cursor-pointer">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold">07 VAULT</span>
<span className="text-xs text-slate-900 dark:text-white font-semibold mt-1">Defensible Evidence</span>
<span className="text-sm text-slate-600 dark:text-slate-300 text-[11px] mt-0.5">SHA-256 Verified</span>
</div>
</div>
{/*  Telemetry High-Contrast Inspection Inset  */}
<div className="bg-slate-900 dark:bg-black text-white rounded-lg p-6 font-mono text-xs shadow-inner flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<div className="flex items-center gap-4 flex-wrap"><span className="inline-flex items-center px-2 py-0.5 rounded bg-amber-600 dark:bg-amber-500 text-white text-label-sm font-label-sm uppercase font-bold tracking-wide">DEMO STREAM</span><span className="text-[#A5B4FC] font-semibold">Live Trace (Illustrative Demo Data):</span><span className="text-white">Active Risk: <strong className="text-teal-700 dark:text-teal-400">RSK-042 (Backup Failure)</strong></span><span className="text-slate-400">→ Linked Control <strong className="text-amber-700 dark:text-amber-400">CTRL-012</strong></span><span className="text-slate-400">→ Evidence Reference Linked</span><span className="text-slate-400">→ Audit Logged</span></div>
<div className="flex items-center gap-2">
<span className="text-slate-500 text-[11px]">Sync: 4.2ms</span>
<CheckCircle2 className="h-5 w-5 shrink-0" />
</div>
</div>
</div>
</div>
</section>
{/*  =========================================================================  */}
{/*  2. THE FRAGMENTATION PROBLEM: Spreadsheets vs Unified Operations          */}
{/*  =========================================================================  */}
<section className="w-full bg-slate-50 dark:bg-[#16233F] px-4 md:px-8 py-16 md:py-24">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-8">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest">THE REALITY OF LEAN GRC</span>
<h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white font-bold mt-1 tracking-tight">
          Compliance isn't hard because of frameworks.<br/>It's hard because work is fragmented.
        </h2>
<p className="text-base text-slate-600 dark:text-slate-300 mt-2">
          Lean teams get stuck between disconnected spreadsheets and heavyweight enterprise GRC suites. OMNiGRC bridges that gap with a unified operating layer.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div className="bg-white dark:bg-[#0A111F] rounded-xl p-8 shadow-md flex flex-col justify-between"><div><div className="flex items-center justify-between mb-6"><span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-xs font-semibold"><AlertTriangle className="h-5 w-5 shrink-0" /> Fragmented GRC Reality (Manual)</span><span className="font-mono text-xs text-red-600 dark:text-red-400 font-semibold">High Friction</span></div><div className="space-y-space-md text-slate-900 dark:text-white"><div className="flex items-start gap-4"><XCircle className="h-5 w-5 shrink-0" /><div><h4 className="text-sm text-slate-900 dark:text-white font-bold">Isolated Spreadsheets</h4><p className="text-sm text-slate-600 dark:text-slate-300">Risk logs and asset inventories stored in disparate sheets that drift immediately after sign-off (Jira &amp; Google Workspace sync on Planned Roadmap).</p></div></div><div className="flex items-start gap-4"><XCircle className="h-5 w-5 shrink-0" /><div><h4 className="text-sm text-slate-900 dark:text-white font-bold">Scattered Manual Tickets</h4><p className="text-sm text-slate-600 dark:text-slate-300">Ad-hoc tasks and spreadsheets completely detached from regulatory control requirements and clause IDs.</p></div></div><div className="flex items-start gap-4"><XCircle className="h-5 w-5 shrink-0" /><div><h4 className="text-sm text-slate-900 dark:text-white font-bold">Email Evidence Chasing</h4><p className="text-sm text-slate-600 dark:text-slate-300">Endless message threads asking engineering leads for screenshots and evidence links 48 hours prior to audits.</p></div></div><div className="flex items-start gap-4"><XCircle className="h-5 w-5 shrink-0" /><div><h4 className="text-sm text-slate-900 dark:text-white font-bold">Missed Testing Cadences</h4><p className="text-sm text-slate-600 dark:text-slate-300">Zero rolling visibility into recurring access reviews, backup drill validation, or third-party vendor check-ins.</p></div></div></div></div><div className="mt-8 p-4 rounded-lg bg-slate-100 dark:bg-navy-800 font-mono text-xs text-slate-600 dark:text-slate-300">Resulting Impact: Duplicate mapping work, frantic pre-audit sprints, and zero posture confidence.</div></div><div className="bg-teal-100/20 dark:bg-teal-900/20 rounded-xl p-8 shadow-md flex flex-col justify-between"><div><div className="flex items-center justify-between mb-6"><span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-xs font-semibold"><CheckCircle2 className="h-5 w-5 shrink-0" /> Connected OMNiGRC Operations</span><span className="font-mono text-xs text-amber-600 dark:text-amber-500 font-semibold">Continuous Posture</span></div><div className="space-y-space-md text-slate-900 dark:text-white"><div className="flex items-start gap-4"><CheckCircle2 className="h-5 w-5 shrink-0" /><div><h4 className="text-sm text-slate-900 dark:text-white font-bold">5×5 Likelihood × Impact Risk Scoring</h4><p className="text-sm text-slate-600 dark:text-slate-300">Risks are mapped directly to technical assets, with single standardized 5×5 risk matrix evaluation.</p></div></div><div className="flex items-start gap-4"><CheckCircle2 className="h-5 w-5 shrink-0" /><div><h4 className="text-sm text-slate-900 dark:text-white font-bold">Map-Once Control Logic</h4><p className="text-sm text-slate-600 dark:text-slate-300">Define a policy once; Advisory AI assists with cross-mapping across ISO 27001, SOC 2, HIPAA, and DPDP.</p></div></div><div className="flex items-start gap-4"><CheckCircle2 className="h-5 w-5 shrink-0" /><div><h4 className="text-sm text-slate-900 dark:text-white font-bold">Continuous 30/60/90-Day Cadence</h4><p className="text-sm text-slate-600 dark:text-slate-300">Automated task triggers with assigned engineering leads, rolling SLA reminders, and document reference links.</p></div></div><div className="flex items-start gap-4"><CheckCircle2 className="h-5 w-5 shrink-0" /><div><h4 className="text-sm text-slate-900 dark:text-white font-bold">Structured Application Audit Trail</h4><p className="text-sm text-slate-600 dark:text-slate-300">Detailed change tracking, user timestamps, and exportable audit packs with structured reference records.</p></div></div></div></div><div className="mt-8 p-4 rounded-lg bg-white dark:bg-[#0A111F] font-mono text-xs text-slate-900 dark:text-white font-medium shadow-sm flex items-center justify-between"><span className="">Audit Posture: Continuous &amp; Tracked</span><span className="text-amber-600 dark:text-amber-500 font-bold">Audit-Ready Workflow</span></div></div></div>
</div>
</section>
{/*  =========================================================================  */}
{/*  2.5. WHO IS OMNIGRC FOR? (Audience-Entry Workflows Section)               */}
{/*  =========================================================================  */}
<section className="w-full bg-white dark:bg-[#0A111F] px-4 md:px-8 py-16 md:py-24 border-b border-surface-container-high/60">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-8">
<div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 font-mono text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
        TAILORED OPERATING WORKFLOWS
      </div>
<h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white font-bold mt-1 tracking-tight">
        Built for the teams carrying governance in the real world.
      </h2>
<p className="text-base text-slate-600 dark:text-slate-300 mt-2">
        Whether you are a solo practitioner or leading security strategy, OMNiGRC organizes risk, controls, and evidence around how you actually work.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Audience Card 1  */}
<div className="bg-slate-50 dark:bg-[#16233F] rounded-xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-surface-container-high/70 group">
<div>
<div className="flex items-center justify-between gap-2 mb-4">
<span className="inline-flex items-center px-2 py-0.5 rounded bg-teal-100/40 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 font-code-sm text-[10px] font-bold tracking-wider uppercase">
              CAPACITY CONSTRAINED
            </span>
<Zap className="h-5 w-5 shrink-0" />
</div>
<h3 className="text-xl text-slate-900 dark:text-white font-bold">Lean Security Teams</h3>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            Replace spreadsheet sprawl and frantic evidence chasing with connected risk and rolling 30/60/90-day testing.
          </p>
<div className="mt-6 p-4 rounded-lg bg-white dark:bg-[#0A111F] border border-surface-container-high">
<span className="font-code-sm text-[10px] text-slate-600 dark:text-slate-300 uppercase tracking-wider block font-semibold mb-1">Workflow Rail</span>
<span className="font-mono text-xs text-slate-900 dark:text-white font-medium block">Risk → Controls → Testing → Evidence</span>
</div>
</div>
<div className="mt-8 pt-space-sm border-t border-surface-container-high">
<a className="text-sm text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-600 dark:text-teal-400-container inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform" data-path="solutions-lean-security-teams" href="/solutions/lean-security-teams">
<span>Explore for Lean Teams →</span>
</a>
</div>
</div>
{/*  Audience Card 2  */}
<div className="bg-slate-50 dark:bg-[#16233F] rounded-xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-surface-container-high/70 group">
<div>
<div className="flex items-center justify-between gap-2 mb-4">
<span className="inline-flex items-center px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-500 font-code-sm text-[10px] font-bold tracking-wider uppercase">
              EXECUTIVE VISIBILITY
            </span>
<Shield className="h-5 w-5 shrink-0" />
</div>
<h3 className="text-xl text-slate-900 dark:text-white font-bold">Security Leaders &amp; CISOs</h3>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            Gain real-time posture oversight across unmitigated risks, asset exposures, remediation SLAs, and incident history.
          </p>
<div className="mt-6 p-4 rounded-lg bg-white dark:bg-[#0A111F] border border-surface-container-high">
<span className="font-code-sm text-[10px] text-slate-600 dark:text-slate-300 uppercase tracking-wider block font-semibold mb-1">Workflow Rail</span>
<span className="font-mono text-xs text-slate-900 dark:text-white font-medium block">Risk → Exposure → Action → Verification</span>
</div>
</div>
<div className="mt-8 pt-space-sm border-t border-surface-container-high">
<a className="text-sm text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-600 dark:text-teal-400-container inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform" data-path="solutions-security-leaders" href="/solutions/security-leaders">
<span>Explore for Security Leaders →</span>
</a>
</div>
</div>
{/*  Audience Card 3  */}
<div className="bg-slate-50 dark:bg-[#16233F] rounded-xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-surface-container-high/70 group">
<div>
<div className="flex items-center justify-between gap-2 mb-4">
<span className="inline-flex items-center px-2 py-0.5 rounded bg-tertiary-fixed text-tertiary font-code-sm text-[10px] font-bold tracking-wider uppercase">
              MULTI-FRAMEWORK CADENCE
            </span>
<Circle className="h-5 w-5 shrink-0" />
</div>
<h3 className="text-xl text-slate-900 dark:text-white font-bold">Compliance Managers</h3>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            Map controls once across ISO, SOC 2, and DPDP, assign clear ownership, and maintain continuous audit workpapers.
          </p>
<div className="mt-6 p-4 rounded-lg bg-white dark:bg-[#0A111F] border border-surface-container-high">
<span className="font-code-sm text-[10px] text-slate-600 dark:text-slate-300 uppercase tracking-wider block font-semibold mb-1">Workflow Rail</span>
<span className="font-mono text-xs text-slate-900 dark:text-white font-medium block">Requirement → Control → Owner → Evidence</span>
</div>
</div>
<div className="mt-8 pt-space-sm border-t border-surface-container-high">
<a className="text-sm text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-600 dark:text-teal-400-container inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform" data-path="solutions-compliance-managers" href="/solutions/compliance-managers">
<span>Explore for Compliance Managers →</span>
</a>
</div>
</div>
{/*  Audience Card 4  */}
<div className="bg-slate-50 dark:bg-[#16233F] rounded-xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-surface-container-high/70 group">
<div>
<div className="flex items-center justify-between gap-2 mb-4">
<span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-variant text-slate-900 dark:text-white font-code-sm text-[10px] font-bold tracking-wider uppercase">
              SCALING GOVERNANCE
            </span>
<TrendingUp className="h-5 w-5 shrink-0" />
</div>
<h3 className="text-xl text-slate-900 dark:text-white font-bold">SaaS &amp; Growing Organizations</h3>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            Unify expanding enterprise customer security reviews and compliance audits without multiplying operational overhead.
          </p>
<div className="mt-6 p-4 rounded-lg bg-white dark:bg-[#0A111F] border border-surface-container-high">
<span className="font-code-sm text-[10px] text-slate-600 dark:text-slate-300 uppercase tracking-wider block font-semibold mb-1">Workflow Rail</span>
<span className="font-mono text-xs text-slate-900 dark:text-white font-medium block">One Workflow → Multi-Standard Coverage</span>
</div>
</div>
<div className="mt-8 pt-space-sm border-t border-surface-container-high">
<a className="text-sm text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-600 dark:text-teal-400-container inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform" data-path="solutions-saas-growing-organizations" href="/solutions/saas-growing-organizations">
<span>Explore for SaaS Teams →</span>
</a>
</div>
</div>
</div>
</div>
</section>
{/*  =========================================================================  */}
{/*  3. ONE CONNECTED GRC WORKFLOW (Central Operating Layer & Tabs)             */}
{/*  =========================================================================  */}
<section className="w-full bg-white dark:bg-[#0A111F] px-4 md:px-8 py-16 md:py-24" id="workflows-preview">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
<div>
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest">THE FOUR CORE WORKFLOWS</span>
<h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white font-bold mt-1 tracking-tight">Everything connects. Nothing lives in isolation.</h2>
<p className="text-base text-slate-600 dark:text-slate-300 mt-1">A single operating layer connecting every phase of the security and audit lifecycle.</p>
</div>
<div className="flex items-center gap-2">
<span className="font-mono text-xs text-slate-600 dark:text-slate-300 font-medium">Auto-crosswalk enabled</span>
<Circle className="h-5 w-5 shrink-0" />
</div>
</div>
{/*  4 Pillars Navigation Grid  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="bg-teal-100/20 dark:bg-teal-900/20 p-6 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-all">
<div className="w-10 h-10 rounded-lg bg-teal-600 dark:bg-teal-500 text-white flex items-center justify-center mb-4">
<Circle className="h-5 w-5 shrink-0" />
</div>
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-semibold uppercase">Pillar 01</span>
<h3 className="text-xl text-slate-900 dark:text-white font-bold mt-0.5">Risk Register</h3>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Standardized 5×5 Likelihood × Impact scoring linked directly to technical assets.</p>
</div>
<div className="bg-slate-50 dark:bg-[#16233F] p-6 rounded-xl shadow-sm cursor-pointer hover:bg-teal-100 dark:bg-teal-900/40/10 transition-all">
<div className="w-10 h-10 rounded-lg bg-slate-900 dark:bg-black text-white flex items-center justify-center mb-4">
<Circle className="h-5 w-5 shrink-0" />
</div>
<span className="font-mono text-xs text-slate-600 dark:text-slate-300 font-semibold uppercase">Pillar 02</span>
<h3 className="text-xl text-slate-900 dark:text-white font-bold mt-0.5">Asset &amp; Inventory</h3>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Cloud infra, SaaS vendors, databases, and DPDP data flow context.</p>
</div>
<div className="bg-slate-50 dark:bg-[#16233F] p-6 rounded-xl shadow-sm cursor-pointer hover:bg-teal-100 dark:bg-teal-900/40/10 transition-all">
<div className="w-10 h-10 rounded-lg bg-amber-600 dark:bg-amber-500 text-white flex items-center justify-center mb-4">
<Circle className="h-5 w-5 shrink-0" />
</div>
<span className="font-mono text-xs text-slate-600 dark:text-slate-300 font-semibold uppercase">Pillar 03</span>
<h3 className="text-xl text-slate-900 dark:text-white font-bold mt-0.5">Map-Once Controls</h3>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">One security safeguard cross-correlated to 6 standards simultaneously.</p>
</div>
<div className="bg-slate-50 dark:bg-[#16233F] p-6 rounded-xl shadow-sm cursor-pointer hover:bg-teal-100 dark:bg-teal-900/40/10 transition-all">
<div className="w-10 h-10 rounded-lg bg-tertiary text-on-tertiary flex items-center justify-center mb-4">
<Circle className="h-5 w-5 shrink-0" />
</div>
<span className="font-mono text-xs text-slate-600 dark:text-slate-300 font-semibold uppercase">Pillar 04</span>
<h3 className="text-xl text-slate-900 dark:text-white font-bold mt-0.5">Compliance Board</h3>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Rolling 30/60/90-day task cadence, SLA tracking, and audit export.</p>
</div>
</div>
{/*  Live Interactive Visual Showcase (5x5 Matrix + Linked Control Panel)  */}
<div className="bg-slate-50 dark:bg-[#16233F] rounded-xl p-6 md:p-8 shadow-md">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/*  Left: 5x5 Heatmap Matrix  */}
<div className="lg:col-span-5 bg-white dark:bg-[#0A111F] p-6 rounded-lg shadow-sm">
<div className="flex items-center justify-between mb-4"><span className="text-sm text-slate-900 dark:text-white font-bold">5×5 Likelihood × Impact Matrix</span><span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-semibold">14 Active Risks (Illustrative Demo Data)</span></div>
<p className="text-sm text-slate-600 dark:text-slate-300 mb-6">Real-time risk distribution across technical assets &amp; business operations.</p>
{/*  5x5 CSS Grid  */}
<div className="grid grid-cols-5 gap-1.5 aspect-square max-w-sm mx-auto mb-4">
<div className="bg-amber-100 dark:bg-amber-900/40/50 rounded flex items-center justify-center font-code-sm text-[10px] text-amber-800 dark:text-amber-300">L1</div>
<div className="bg-amber-100 dark:bg-amber-900/40/50 rounded flex items-center justify-center font-code-sm text-[10px] text-amber-800 dark:text-amber-300">L2</div>
<div className="bg-tertiary-fixed rounded flex items-center justify-center font-code-sm text-[10px] text-on-tertiary-fixed">M3</div>
<div className="bg-teal-100 dark:bg-teal-900/40 rounded flex items-center justify-center font-code-sm text-[10px] text-teal-800 dark:text-teal-300">H4</div>
<div className="bg-red-100 dark:bg-red-900/30 rounded flex items-center justify-center font-code-sm text-[10px] text-red-800 dark:text-red-300 font-bold">C5</div>
<div className="bg-amber-100 dark:bg-amber-900/40/50 rounded flex items-center justify-center font-code-sm text-[10px] text-amber-800 dark:text-amber-300">L1</div>
<div className="bg-amber-100 dark:bg-amber-900/40/50 rounded flex items-center justify-center font-code-sm text-[10px] text-amber-800 dark:text-amber-300">L2</div>
<div className="bg-tertiary-fixed rounded flex items-center justify-center font-code-sm text-[10px] text-on-tertiary-fixed">M3</div>
<div className="bg-teal-100 dark:bg-teal-900/40-dim rounded flex items-center justify-center font-code-sm text-[10px] text-teal-800 dark:text-teal-300 relative shadow">
<span className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-500 absolute -top-1 -right-1 animate-ping"></span>
<span className="font-bold">RSK-042</span>
</div>
<div className="bg-red-100 dark:bg-red-900/30 rounded flex items-center justify-center font-code-sm text-[10px] text-red-800 dark:text-red-300 font-bold">C5</div>
<div className="bg-amber-100 dark:bg-amber-900/40/50 rounded flex items-center justify-center font-code-sm text-[10px] text-amber-800 dark:text-amber-300">L1</div>
<div className="bg-amber-100 dark:bg-amber-900/40/50 rounded flex items-center justify-center font-code-sm text-[10px] text-amber-800 dark:text-amber-300">L2</div>
<div className="bg-tertiary-fixed rounded flex items-center justify-center font-code-sm text-[10px] text-on-tertiary-fixed">M3</div>
<div className="bg-teal-100 dark:bg-teal-900/40 rounded flex items-center justify-center font-code-sm text-[10px] text-teal-800 dark:text-teal-300">H4</div>
<div className="bg-red-100 dark:bg-red-900/30 rounded flex items-center justify-center font-code-sm text-[10px] text-red-800 dark:text-red-300">C5</div>
<div className="bg-amber-100 dark:bg-amber-900/40/50 rounded flex items-center justify-center font-code-sm text-[10px] text-amber-800 dark:text-amber-300">L1</div>
<div className="bg-amber-100 dark:bg-amber-900/40/50 rounded flex items-center justify-center font-code-sm text-[10px] text-amber-800 dark:text-amber-300">L2</div>
<div className="bg-amber-100 dark:bg-amber-900/40/50 rounded flex items-center justify-center font-code-sm text-[10px] text-amber-800 dark:text-amber-300">L3</div>
<div className="bg-tertiary-fixed rounded flex items-center justify-center font-code-sm text-[10px] text-on-tertiary-fixed">M4</div>
<div className="bg-teal-100 dark:bg-teal-900/40 rounded flex items-center justify-center font-code-sm text-[10px] text-teal-800 dark:text-teal-300">H5</div>
<div className="bg-amber-100 dark:bg-amber-900/40/50 rounded flex items-center justify-center font-code-sm text-[10px] text-amber-800 dark:text-amber-300">L1</div>
<div className="bg-amber-100 dark:bg-amber-900/40/50 rounded flex items-center justify-center font-code-sm text-[10px] text-amber-800 dark:text-amber-300">L2</div>
<div className="bg-amber-100 dark:bg-amber-900/40/50 rounded flex items-center justify-center font-code-sm text-[10px] text-amber-800 dark:text-amber-300">L3</div>
<div className="bg-amber-100 dark:bg-amber-900/40/50 rounded flex items-center justify-center font-code-sm text-[10px] text-amber-800 dark:text-amber-300">L4</div>
<div className="bg-tertiary-fixed rounded flex items-center justify-center font-code-sm text-[10px] text-on-tertiary-fixed">M5</div>
</div>
<div className="flex items-center justify-between font-mono text-xs text-slate-600 dark:text-slate-300">
<span className="">Likelihood →</span>
<span className="">Impact ↑</span>
</div>
</div>
{/*  Right: Live Inspection Detail Card  */}
<div className="lg:col-span-7 bg-white dark:bg-[#0A111F] p-6 rounded-lg shadow-sm flex flex-col justify-between"><div><div className="flex flex-wrap items-center justify-between gap-2 mb-4"><div className="flex items-center gap-2"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 font-mono text-xs font-semibold">SELECTED: RSK-042</span><span className="inline-flex items-center px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white font-code-sm text-[10px] font-medium">(Illustrative Demo Data)</span></div><span className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-500 text-xs font-bold"><CheckCircle2 className="h-5 w-5 shrink-0" /> ACTIVE CONTROL LINKED</span></div><h4 className="text-xl text-slate-900 dark:text-white font-bold">Database Backup Restoration Failure</h4><p className="text-base text-slate-600 dark:text-slate-300 mt-1">Risk of automated snapshot restoration failure on production database assets in disaster recovery scenarios.</p><div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-space-md p-4 rounded-lg bg-slate-50 dark:bg-[#16233F]"><div><span className="font-mono text-xs text-slate-600 dark:text-slate-300 block">Risk Scoring</span><span className="text-sm text-red-600 dark:text-red-400 font-bold">5×5 Score: 16 (High)</span></div><div><span className="font-mono text-xs text-slate-600 dark:text-slate-300 block">Target Asset (Asset-to-Risk)</span><span className="text-sm text-slate-900 dark:text-white font-bold">AST-019 (Prod DB)</span></div><div><span className="font-mono text-xs text-slate-600 dark:text-slate-300 block">Owner</span><span className="text-sm text-slate-900 dark:text-white font-bold">P. Dev (SecOps)</span></div></div><div className="p-4 rounded-lg bg-teal-100/20 dark:bg-teal-900/20 mb-4"><div className="flex items-center justify-between mb-1"><span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold">LINKED CONTROL: CTRL-012</span><span className="font-mono text-xs text-slate-900 dark:text-white font-medium">Advisory AI Suggested (Reviewed)</span></div><div className="text-sm text-slate-900 dark:text-white font-bold">Automated Daily Snapshot &amp; 30-Day Air-Gapped Test Restoration</div><div className="flex flex-wrap gap-1.5 mt-2"><span className="px-2 py-0.5 rounded bg-white dark:bg-[#0A111F] font-mono text-xs text-slate-900 dark:text-white shadow-sm">ISO 27001: A.8.13</span><span className="px-2 py-0.5 rounded bg-white dark:bg-[#0A111F] font-mono text-xs text-slate-900 dark:text-white shadow-sm">SOC 2: CC9.1, A1.2</span><span className="px-2 py-0.5 rounded bg-white dark:bg-[#0A111F] font-mono text-xs text-slate-900 dark:text-white shadow-sm">HIPAA: § 164.308(a)(7)</span><span className="px-2 py-0.5 rounded bg-white dark:bg-[#0A111F] font-mono text-xs text-slate-900 dark:text-white shadow-sm">DPDP: Sec 8(5)</span></div></div></div><div className="flex items-center justify-between pt-space-sm text-sm text-slate-600 dark:text-slate-300"><span className="">Evidence Record: <strong className="font-code-sm text-slate-900 dark:text-white">ev-drill-2026-03 (External Document Link)</strong></span><a className="text-teal-600 dark:text-teal-400 font-semibold hover:underline inline-flex items-center gap-1" data-path="request-demo" href="#"><span className="">View Full Control Map</span><ArrowRight className="h-5 w-5 shrink-0" /></a></div></div>
</div>
</div>
</div>
</section>
{/*  =========================================================================  */}
{/*  4. EXPANDED PLATFORM CAPABILITIES (Phase-17 Feature Ecosystem)            */}
{/*  =========================================================================  */}
<section className="w-full bg-slate-50 dark:bg-[#16233F] px-4 md:px-8 py-16 md:py-24">
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
<div className="bg-white dark:bg-[#0A111F] p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"><div><div className="w-12 h-12 rounded-lg bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-6"><Circle className="h-5 w-5 shrink-0" /></div><h3 className="text-xl text-slate-900 dark:text-white font-bold">Vulnerability Management</h3><p className="text-base text-slate-600 dark:text-slate-300 mt-2">Ingest CVE findings from security scanners. Map vulnerabilities directly to affected technical assets and evaluate associated risk exposure.</p></div><div className="mt-6 pt-space-sm font-mono text-xs text-teal-600 dark:text-teal-400 font-semibold">Vulnerability-to-Asset Mapping →</div></div>
{/*  Feature 2  */}
<div className="bg-white dark:bg-[#0A111F] p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-lg bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white flex items-center justify-center mb-6">
<FileText className="h-5 w-5 shrink-0" />
</div>
<h3 className="text-xl text-slate-900 dark:text-white font-bold">Policy &amp; Document Governance</h3>
<p className="text-base text-slate-600 dark:text-slate-300 mt-2">
              Version-controlled policy authoring with automated annual review triggers, markdown revisions, and cryptographic executive sign-offs.
            </p>
</div>
<div className="mt-6 pt-space-sm font-mono text-xs text-slate-900 dark:text-white font-semibold">
            Git-Style Versioning &amp; Approvals →
          </div>
</div>
{/*  Feature 3  */}
<div className="bg-white dark:bg-[#0A111F] p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-500 flex items-center justify-center mb-6">
<Circle className="h-5 w-5 shrink-0" />
</div>
<h3 className="text-xl text-slate-900 dark:text-white font-bold">Vendor &amp; Third-Party Risk</h3>
<p className="text-base text-slate-600 dark:text-slate-300 mt-2">
              Automated vendor onboarding questionnaires (SIG Lite, CAIQ), SOC 2 report ingestion, SLA monitoring, and DPDP sub-processor tracking.
            </p>
</div>
<div className="mt-6 pt-space-sm font-mono text-xs text-amber-600 dark:text-amber-500 font-semibold">
            DPDP / GDPR Data Flow Aware →
          </div>
</div>
{/*  Feature 4  */}
<div className="bg-white dark:bg-[#0A111F] p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"><div><div className="w-12 h-12 rounded-lg bg-tertiary-fixed text-tertiary flex items-center justify-center mb-6"><Circle className="h-5 w-5 shrink-0" /></div><h3 className="text-xl text-slate-900 dark:text-white font-bold">Evidence Vault &amp; Reference Records</h3><p className="text-base text-slate-600 dark:text-slate-300 mt-2">Structured evidence tracking and external document/reference links. Organize proof links, collector logs, and compliance records cleanly for audit review.</p></div><div className="mt-6 pt-space-sm font-mono text-xs text-tertiary font-semibold">Evidence Records &amp; Reference Links →</div></div>
{/*  Feature 5  */}
<div className="bg-white dark:bg-[#0A111F] p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center mb-6">
<Circle className="h-5 w-5 shrink-0" />
</div>
<h3 className="text-xl text-slate-900 dark:text-white font-bold">Incident &amp; Breach Response</h3>
<p className="text-base text-slate-600 dark:text-slate-300 mt-2">
              Structured triage workflows linked to GDPR 72-hour notifications and DPDP Data Protection Board of India reporting clocks.
            </p>
</div>
<div className="mt-6 pt-space-sm font-mono text-xs text-red-600 dark:text-red-400 font-semibold">
            Regulatory Clocks &amp; Playbooks →
          </div>
</div>
{/*  Feature 6  */}
<div className="bg-white dark:bg-[#0A111F] p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-lg bg-slate-900 dark:bg-black text-white flex items-center justify-center mb-6">
<Circle className="h-5 w-5 shrink-0" />
</div>
<h3 className="text-xl text-slate-900 dark:text-white font-bold">MSSP Partner &amp; Multi-Tenancy</h3>
<p className="text-base text-slate-600 dark:text-slate-300 mt-2">
              Purpose-built administration console for security advisory firms and MSSPs to oversee dozens of client compliance posture environments centrally.
            </p>
</div>
<div className="mt-6 pt-space-sm font-mono text-xs text-slate-900 dark:text-white font-semibold">
            Multi-Tenant Portfolio View →
          </div>
</div>
</div>
</div>
</section>
{/*  =========================================================================  */}
{/*  5. TRANSPARENT ADVISORY AI PIPELINE (Technical Panel, Dark High-Contrast)   */}
{/*  =========================================================================  */}
<section className="w-full bg-[#0F172A] text-white px-4 md:px-8 py-16 md:py-24">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-12"><span className="font-mono text-xs text-amber-600 dark:text-amber-500 font-bold uppercase tracking-widest">TRANSPARENT AI ARCHITECTURE</span><h2 className="text-3xl md:text-4xl text-[#F8FAFC] font-bold mt-1 tracking-tight">AI assists. Humans decide. Payload minimization.</h2><p className="text-base text-[#94A3B8] mt-2">Advisory AI with payload minimization &amp; human approval. OMNiGRC provides advisory clause correlations with confidence suggestions; human sign-off is mandatory before any persistence.</p></div>
{/*  8-Stage Execution Pipeline Visualization  */}
<div className="mb-12">
<div className="flex items-center justify-between mb-6">
<span className="text-sm text-[#F8FAFC] font-semibold">End-to-End Advisory AI Pipeline Execution:</span>
<span className="font-mono text-xs text-[#38BDF8]">Stateless • Ephemeral Execution</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-[#1E293B] p-6 rounded-lg shadow-sm">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400-fixed font-bold">STAGE 01</span>
<h4 className="text-sm text-[#F8FAFC] font-bold mt-1">Analyst UI Trigger</h4>
<p className="text-sm text-[#94A3B8] mt-1">Practitioner initiates control crosswalk suggestion in workspace.</p>
</div>
<div className="bg-[#1E293B] p-6 rounded-lg shadow-sm">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400-fixed font-bold">STAGE 02</span>
<h4 className="text-sm text-[#F8FAFC] font-bold mt-1">API &amp; Rate Limiting</h4>
<p className="text-sm text-[#94A3B8] mt-1">Tenant verification, token metering, and strict quota safeguards.</p>
</div>
<div className="bg-[#1E293B] p-6 rounded-lg shadow-sm border-l-2 border-[#2E936F]">
<span className="font-mono text-xs text-amber-600 dark:text-amber-500 font-bold">STAGE 03</span>
<h4 className="text-sm text-[#F8FAFC] font-bold mt-1">PII Redaction Engine</h4>
<p className="text-sm text-[#94A3B8] mt-1">Strips names, internal IPs, secrets, and customer tenant IDs.</p>
</div>
<div className="bg-[#1E293B] p-6 rounded-lg shadow-sm">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400-fixed font-bold">STAGE 04</span>
<h4 className="text-sm text-[#F8FAFC] font-bold mt-1">Tiered Model Router</h4>
<p className="text-sm text-[#94A3B8] mt-1">Routes to low-latency or reasoning model based on query complexity.</p>
</div>
<div className="bg-[#1E293B] p-6 rounded-lg shadow-sm">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400-fixed font-bold">STAGE 05</span>
<h4 className="text-sm text-[#F8FAFC] font-bold mt-1">Sanitized LLM Call</h4>
<p className="text-sm text-[#94A3B8] mt-1">Clause cross-reference evaluation using zero-data-retention APIs.</p>
</div>
<div className="bg-[#1E293B] p-6 rounded-lg shadow-sm">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400-fixed font-bold">STAGE 06</span>
<h4 className="text-sm text-[#F8FAFC] font-bold mt-1">Schema Validator</h4>
<p className="text-sm text-[#94A3B8] mt-1">Pydantic validation: ensures strictly typed ISO / SOC clauses.</p>
</div>
<div className="bg-[#1E293B] p-6 rounded-lg shadow-sm border-l-2 border-primary">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold">STAGE 07</span>
<h4 className="text-sm text-[#F8FAFC] font-bold mt-1">Human Review &amp; Sign-off</h4>
<p className="text-sm text-[#94A3B8] mt-1">Mandatory CISO / GRC lead confirmation before persistence.</p>
</div>
<div className="bg-[#1E293B] p-6 rounded-lg shadow-sm border-l-2 border-[#2E936F]"><span className="font-mono text-xs text-amber-600 dark:text-amber-500 font-bold">STAGE 08</span><h4 className="text-sm text-[#F8FAFC] font-bold mt-1">Application Audit Log</h4><p className="text-sm text-[#94A3B8] mt-1">Approved suggestion records and practitioner audit trail logged with tenant isolation.</p></div>
</div>
</div>
{/*  Data Privacy Guarantee Split Box  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#1E293B] p-8 rounded-xl">
<div className="p-6 rounded-lg bg-[#0F172A]">
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
<div className="p-6 rounded-lg bg-[#0F172A]">
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
<section className="w-full bg-white dark:bg-[#0A111F] px-4 md:px-8 py-16 md:py-24">
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
<div className="p-6 rounded-lg bg-slate-50 dark:bg-[#16233F] text-center shadow-sm hover:bg-teal-100/20 dark:bg-teal-900/20 transition-all cursor-pointer">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold block">ISMS</span>
<span className="text-sm text-slate-900 dark:text-white font-bold mt-1 block">ISO 27001:2022</span>
<span className="text-sm text-slate-600 dark:text-slate-300 text-[11px] mt-1 block">93 Controls</span>
</div>
<div className="p-6 rounded-lg bg-slate-50 dark:bg-[#16233F] text-center shadow-sm hover:bg-teal-100/20 dark:bg-teal-900/20 transition-all cursor-pointer">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold block">AIMS</span>
<span className="text-sm text-slate-900 dark:text-white font-bold mt-1 block">ISO 42001:2023</span>
<span className="text-sm text-slate-600 dark:text-slate-300 text-[11px] mt-1 block">AI Governance</span>
</div>
<div className="p-6 rounded-lg bg-slate-50 dark:bg-[#16233F] text-center shadow-sm hover:bg-teal-100/20 dark:bg-teal-900/20 transition-all cursor-pointer">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold block">TRUST</span>
<span className="text-sm text-slate-900 dark:text-white font-bold mt-1 block">SOC 2 Type II</span>
<span className="text-sm text-slate-600 dark:text-slate-300 text-[11px] mt-1 block">TSC Criteria</span>
</div>
<div className="p-6 rounded-lg bg-slate-50 dark:bg-[#16233F] text-center shadow-sm hover:bg-teal-100/20 dark:bg-teal-900/20 transition-all cursor-pointer">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold block">PRIVACY</span>
<span className="text-sm text-slate-900 dark:text-white font-bold mt-1 block">GDPR / UK</span>
<span className="text-sm text-slate-600 dark:text-slate-300 text-[11px] mt-1 block">Articles 28–35</span>
</div>
<div className="p-6 rounded-lg bg-slate-50 dark:bg-[#16233F] text-center shadow-sm hover:bg-teal-100/20 dark:bg-teal-900/20 transition-all cursor-pointer">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold block">INDIA LAW</span>
<span className="text-sm text-slate-900 dark:text-white font-bold mt-1 block">DPDP Act 2023</span>
<span className="text-sm text-slate-600 dark:text-slate-300 text-[11px] mt-1 block">Fiduciary Rules</span>
</div>
<div className="p-6 rounded-lg bg-slate-50 dark:bg-[#16233F] text-center shadow-sm hover:bg-teal-100/20 dark:bg-teal-900/20 transition-all cursor-pointer">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold block">HEALTHCARE</span>
<span className="text-sm text-slate-900 dark:text-white font-bold mt-1 block">HIPAA Security</span>
<span className="text-sm text-slate-600 dark:text-slate-300 text-[11px] mt-1 block">ePHI Safeguards</span>
</div>
</div>
{/*  Realistic Crosswalk Matrix Table  */}
<div className="bg-slate-50 dark:bg-[#16233F] rounded-xl p-6 md:p-8 shadow-sm overflow-hidden">
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
<section className="w-full bg-slate-50 dark:bg-[#16233F] px-4 md:px-8 py-16 md:py-24">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-8">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest">DEPLOYMENT FLEXIBILITY</span>
<h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white font-bold mt-1 tracking-tight">Built for regional data residency &amp; infrastructure sovereignty.</h2>
<p className="text-base text-slate-600 dark:text-slate-300 mt-2">
          From fast startup deployments to highly regulated air-gapped defense infrastructure, choose the operational model that matches your compliance posture.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"><div className="bg-white dark:bg-[#0A111F] p-8 rounded-xl shadow-sm flex flex-col justify-between"><div><div className="flex items-center justify-between mb-4"><span className="font-mono text-xs text-amber-600 dark:text-amber-500 font-bold uppercase">MODEL 01</span><span className="px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-xs font-semibold">Fastest Onboarding</span></div><h3 className="text-xl text-slate-900 dark:text-white font-bold">Shared Multi-Tenant SaaS</h3><p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">Fully managed cloud service with application-level tenant isolation, automated daily backups, and instant onboarding for growing teams.</p><ul className="mt-6 space-y-2 text-sm text-slate-900 dark:text-white"><li className="flex items-center gap-2"><Circle className="h-5 w-5 shrink-0" /> Application-level tenant isolation</li><li className="flex items-center gap-2"><Circle className="h-5 w-5 shrink-0" /> Zero Infrastructure Burden</li><li className="flex items-center gap-2"><Circle className="h-5 w-5 shrink-0" /> Continuous Automated Upgrades</li></ul></div><div className="mt-8 pt-space-sm font-mono text-xs text-teal-600 dark:text-teal-400 font-semibold">Deploy in &lt; 5 minutes →</div></div><div className="bg-emerald-50 dark:bg-[#06241C] border border-emerald-200 dark:border-emerald-700/60 p-8 rounded-xl shadow-sm flex flex-col justify-between"><div><div className="flex items-center justify-between mb-4"><span className="font-mono text-xs text-emerald-800 dark:text-emerald-300 font-bold uppercase">MODEL 02</span><span className="px-2.5 py-0.5 rounded-full bg-emerald-600 dark:bg-emerald-500 text-white text-xs font-semibold">Dedicated Cloud</span></div><h3 className="text-xl text-slate-900 dark:text-white font-bold">Dedicated Private MSSP</h3><p className="text-sm text-slate-700 dark:text-emerald-100/90 mt-2 leading-relaxed">Dedicated isolated tenant VPC with customer-managed encryption keys, dedicated storage, and partner administration consoles.</p><ul className="mt-6 space-y-2 text-sm text-slate-900 dark:text-slate-100"><li className="flex items-center gap-2"><Circle className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" /> Dedicated VPC &amp; Compute</li><li className="flex items-center gap-2"><Circle className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" /> Customer-Managed Encryption Keys</li><li className="flex items-center gap-2"><Circle className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" /> Multi-Client Partner Support</li></ul></div><div className="mt-8 pt-space-sm font-mono text-xs text-emerald-700 dark:text-emerald-300 font-bold">Configured in 24 hours →</div></div><div className="bg-white dark:bg-[#0A111F] p-8 rounded-xl shadow-sm flex flex-col justify-between"><div><div className="flex items-center justify-between mb-4"><span className="font-mono text-xs text-slate-600 dark:text-slate-300 font-bold uppercase">MODEL 03</span><span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white text-xs font-semibold">Customer Infrastructure</span></div><h3 className="text-xl text-slate-900 dark:text-white font-bold">Containerized Docker Deployment</h3><p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">Containerized Docker deployment run directly inside your AWS, Azure, GCP, or on-premises environment with full infrastructure custody.</p><ul className="mt-6 space-y-2 text-sm text-slate-900 dark:text-white"><li className="flex items-center gap-2"><Circle className="h-5 w-5 shrink-0" /> Customer-Controlled Infrastructure</li><li className="flex items-center gap-2"><Circle className="h-5 w-5 shrink-0" /> Air-Gapped Capable Deployment</li><li className="flex items-center gap-2"><Circle className="h-5 w-5 shrink-0" /> Containerized Docker Architecture</li></ul></div><div className="mt-8 pt-space-sm font-mono text-xs text-slate-900 dark:text-white font-semibold">Docker Architecture Specs →</div></div></div>
{/*  Regional Residency Badge Banner  */}
<div className="bg-white dark:bg-[#0A111F] rounded-xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6"><div className="flex items-center gap-4"><Circle className="h-5 w-5 shrink-0" /><div><div className="text-sm text-slate-900 dark:text-white font-bold">Data Residency &amp; Regional Deployment Options:</div><div className="text-sm text-slate-600 dark:text-slate-300">Single-region dedicated instance hosting available upon request (India / UK / EU). Global routing is configured per contract tenant requirements.</div></div></div><div className="flex items-center gap-2 flex-shrink-0"><span className="inline-flex items-center px-2 py-1 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-mono text-xs font-semibold">Tenant Configured</span></div></div>
</div>
</section>
{/*  =========================================================================  */}
{/*  8. FINAL CONVERSION SECTION (Warm Peach Card + Live Trust Badges)         */}
{/*  =========================================================================  */}
<section className="w-full bg-white dark:bg-[#0A111F] px-4 md:px-8 py-16 md:py-24">
<div className="max-w-7xl mx-auto">
<div className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 dark:from-[#062019] dark:via-[#0B2C23] dark:to-[#051A14] border border-emerald-200 dark:border-emerald-700/60 rounded-2xl p-8 md:p-12 shadow-xl overflow-hidden">
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
