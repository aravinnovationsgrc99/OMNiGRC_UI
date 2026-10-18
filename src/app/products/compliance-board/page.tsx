import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ComplianceBoardInteractive } from "@/components/workflows/ComplianceBoardInteractive";
import {
  Calendar,
  Kanban,
  ArrowDown,
  Activity,
  Columns,
  Network,
  PenTool,
  BookOpen,
  CheckSquare,
  Badge,
  Paperclip,
  ListChecks,
  Settings,
  UserCheck,
  CheckCircle2,
  Link as LinkIcon,
  Eye,
  Bolt,
  ArrowRight,
  Check,
  Lock,
  Circle,
  AlertTriangle,
  Shield,
  FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "Compliance Board | OMNiGRC Connected Workflows",
  description: "Replace Pre-Audit Panic with a Continuous Compliance Board. Eliminate pre-audit panic with a predictable 30/60/90-day operational cadence.",
};

export default function ComplianceBoardPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />
      <main className="flex-1 w-full pt-16 bg-transparent min-h-screen">
<div className="flex flex-col w-full">
{/*  Top Hero Header Section with Asymmetric Balance  */}
<section className="relative w-full overflow-hidden bg-transparent bg-grid-mesh-adaptive pt-4 sm:pt-6 lg:pt-6 xl:pt-8 pb-3 sm:pb-6 lg:pb-6 xl:pb-8">
  {/* Ambient glowing motion orbs matching other pages */}
  <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ffdbcf]/30 dark:bg-teal/10 rounded-full blur-3xl pointer-events-none -z-10 ambient-motion-1" />
  <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#2E936F]/10 dark:bg-teal/5 rounded-full blur-3xl pointer-events-none -z-10" />

<div className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch">
{/*  Text Column (7 Cols)  */}
<div className="lg:col-span-7 flex flex-col items-center sm:items-start text-center sm:text-left justify-between gap-3 sm:gap-4">
<div>
<h1 className="text-xl min-[360px]:text-2xl sm:text-3xl lg:text-[38px] xl:text-[44px] 2xl:text-[48px] text-slate-900 dark:text-white tracking-tight mb-3 sm:mb-4 font-bold max-w-2xl leading-tight text-center sm:text-left w-full">
  Replace Pre-Audit Panic with a <span className="text-[#006c4d] dark:text-teal-400">Continuous Compliance Board.</span>
</h1>
<p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mb-4 sm:mb-6 leading-relaxed text-left">Eliminate pre-audit panic. OMNiGRC turns control tests, evidence collection, and vendor sign-offs into a predictable 30/60/90-day operational cadence.</p>
</div>
<div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-2.5 sm:gap-4 mb-4 sm:mb-6 w-full [&>*]:w-full [&>*]:sm:w-auto [&>*]:max-w-sm [&>*]:text-center">
<a className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-lg bg-teal-600 dark:bg-teal-500 text-white text-xs sm:text-sm font-semibold hover:bg-teal-700 dark:hover:bg-teal-400 transition-all shadow-md text-center" data-path="request-demo" href="/demo">
<Circle className="h-4 w-4 shrink-0" />
              Explore Compliance Board Demo
            </a>
<a className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-lg bg-white/80 dark:bg-[#16233F] text-slate-900 dark:text-white text-xs sm:text-sm font-semibold hover:bg-slate-100 dark:bg-navy-800 transition-colors shadow-sm text-center border border-slate-200 dark:border-navy-700" href="#board-section">
<Circle className="h-4 w-4 shrink-0" />
              See How It Works
            </a>
</div>
</div>
{/*  Hero Visual / Realtime Cadence Metric Cluster (5 Cols)  */}
<div className="lg:col-span-5 relative flex flex-col justify-center">
<div className="relative bg-white/90 dark:bg-[#16233F]/95 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-navy-700/60 h-full flex flex-col justify-between">
<div className="flex items-center justify-between pb-space-sm mb-6">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-amber-600 dark:bg-amber-500 animate-ping"></span>
<span className="font-mono text-xs text-slate-900 dark:text-white font-semibold tracking-wide">OPERATIONAL RADAR (TEST ENVIRONMENT)</span>
</div>
<span className="text-xs text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-[#0A111F] px-space-xs py-0.5 rounded">Illustrative Model</span>
</div>
{/*  Mini Sparkline / Cadence Graphic  */}
<div className="bg-slate-50 dark:bg-[#0A111F] rounded-lg p-6 shadow-sm mb-6 border border-slate-200 dark:border-navy-800">
<div className="flex items-center justify-between mb-space-xs">
<span className="text-sm text-slate-900 dark:text-white">30-Day Testing Velocity</span>
<span className="font-mono text-xs text-amber-600 dark:text-amber-500 font-bold">94.2% On Track</span>
</div>
<svg className="w-full h-12 text-teal-600 dark:text-teal-400" fill="none" preserveAspectRatio="none" viewBox="0 0 300 48">
<path d="M0,38 L30,34 L60,36 L90,24 L120,28 L150,14 L180,20 L210,10 L240,16 L270,6 L300,8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<path d="M0,38 L30,34 L60,36 L90,24 L120,28 L150,14 L180,20 L210,10 L240,16 L270,6 L300,8 L300,48 L0,48 Z" fill="currentColor" fill-opacity="0.08"></path>
</svg>
</div>
{/*  Structured Telemetry Pills  */}
<div className="grid grid-cols-2 gap-2 font-mono text-xs"><div className="bg-slate-50 dark:bg-[#0A111F] p-4 rounded-lg flex flex-col border border-slate-200 dark:border-navy-800"><span className="font-code-sm text-body-sm text-slate-900 dark:text-white font-semibold">Telemetry Feed</span><span className="text-slate-900 dark:text-white font-bold truncate">AWS + Okta + GitHub</span></div><div className="bg-slate-50 dark:bg-[#0A111F] p-4 rounded-lg flex flex-col border border-slate-200 dark:border-navy-800"><span className="font-code-sm text-body-sm text-slate-900 dark:text-white font-semibold">Proof Hash</span><span className="text-amber-600 dark:text-amber-500 font-bold truncate">sha256:e3b0c442...</span></div></div>
</div>
</div>
</div>
{/*  Operational Metrics Bar (Illustrative Sample Values)  */}
<div className="mt-6 sm:mt-8 pt-4 sm:pt-6 grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6 items-stretch">
<div className="bg-white/85 dark:bg-[#16233F]/90 backdrop-blur-sm rounded-xl p-4 sm:p-5 lg:p-6 flex items-start gap-4 sm:gap-6 shadow-sm border border-slate-200 dark:border-navy-700/60 h-full">
<div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 shrink-0">
<Circle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
</div>
<div>
<div className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-300 uppercase tracking-wider font-semibold">Cadence Architecture</div>
<div className="text-base sm:text-lg lg:text-xl text-slate-900 dark:text-white font-semibold">Rolling 30 / 60 / 90 Days</div>
<p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">Quarterly audits transformed into deterministic weekly sync rituals.</p>
</div>
</div>
<div className="bg-white/85 dark:bg-[#16233F]/90 backdrop-blur-sm rounded-xl p-4 sm:p-5 lg:p-6 flex items-start gap-4 sm:gap-6 shadow-sm border border-slate-200 dark:border-navy-700/60 h-full">
<div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 shrink-0">
<Network className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
</div>
<div>
<div className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-300 uppercase tracking-wider font-semibold">Deterministic Flow</div>
<div className="text-base sm:text-lg lg:text-xl text-slate-900 dark:text-white font-semibold">Req → Task → Owner → Proof</div>
<p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">Unbroken accountability from auditor request to engineering output.</p>
</div>
</div>
<div className="bg-white/85 dark:bg-[#16233F]/90 backdrop-blur-sm rounded-xl p-4 sm:p-5 lg:p-6 flex items-start gap-4 sm:gap-6 shadow-sm border border-slate-200 dark:border-navy-700/60 h-full">
<div className="p-2 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 shrink-0">
<Circle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
</div>
<div>
<div className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-300 uppercase tracking-wider font-semibold">Defensible Posture</div>
<div className="text-base sm:text-lg lg:text-xl text-slate-900 dark:text-white font-semibold">Defensible Historical Record</div>
<p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">Structured timestamps and logs ready for zero-friction sampling.</p>
</div>
</div>
</div>
</div>
</section>
{/*  Interactive 30/60/90 Compliance Board Feature Section  */}
<section className="w-full py-3.5 sm:py-6 lg:py-6 xl:py-7 bg-transparent" id="board-section">
<div className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
{/*  Section Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-4 sm:mb-6 gap-4 sm:gap-6">
<div>
<span className="font-mono text-[10px] sm:text-xs text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest block text-center sm:text-left">Interactive Workbench Preview</span>
<h2 className="text-xl min-[360px]:text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white font-bold mt-2 sm:mt-3 tracking-tight leading-tight text-left lg:whitespace-nowrap">
  Continuous Compliance Operational Board
</h2>
<p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 mt-2 sm:mt-3 text-left">Click on any card to inspect control mapping, historical evidence hashes, and verification audit trails.</p>
</div>
<div className="flex items-center gap-2 self-center sm:self-start md:self-auto bg-white/90 dark:bg-[#0A111F] p-space-xs rounded-lg shadow-sm border border-slate-200 dark:border-navy-700">
<span className="inline-flex items-center gap-2 px-space-sm py-space-xs rounded bg-slate-200 dark:bg-navy-700 text-xs text-slate-900 dark:text-white font-medium">
<span className="w-2 h-2 rounded-full bg-amber-600 dark:bg-amber-500"></span> Live Demo Sandbox
          </span>
<span className="font-mono text-xs text-slate-600 dark:text-slate-300 px-space-xs">Data Mode: Simulated Sample</span>
</div>
</div>
{/*  Board Layout Grid: 5 Column View on Desktop  */}
<ComplianceBoardInteractive />
</div>
</section>
{/*  Editorial Section: The 7-Stage Continuous Compliance Lifecycle  */}
<section className="w-full py-3.5 sm:py-6 lg:py-6 xl:py-7 bg-transparent border-t border-slate-200/60 dark:border-navy-700/60">
<div className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
<div className="max-w-3xl mb-4 sm:mb-6 text-left">
<span className="font-mono text-[10px] sm:text-xs text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest block">Architectural Methodology</span>
<h2 className="text-xl min-[360px]:text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white font-bold mt-2 sm:mt-3 tracking-tight leading-tight text-left lg:whitespace-nowrap">
  The 7-Stage Continuous Compliance Lifecycle
</h2>
<p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 mt-2 sm:mt-3 text-justify sm:text-left leading-relaxed">
  Instead of episodic compliance sprints, every requirement is grounded in a deterministic operational lifecycle that moves reliably toward audit certainty.
</p>
</div>
{/*  7-Stage Grid Sequence  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 items-stretch">
  {/* Stage 01 */}
  <div className="bg-white/90 dark:bg-[#16233F]/95 backdrop-blur-md border border-slate-200/90 dark:border-navy-700/70 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group hover:-translate-y-0.5">
    <div>
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-navy-800/80">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">STAGE 01</span>
        <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
          <Circle className="h-4 w-4 shrink-0 stroke-[2.2]" />
        </div>
      </div>
      <div className="pt-3 pb-2">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight text-left mb-2">
          Regulatory Clause
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left">
          Deconstruct SOC 2, ISO 27001, HIPAA, and DPDP mandates into concrete rules.
        </p>
      </div>
    </div>
    <div className="pt-3 mt-4 border-t border-slate-100 dark:border-navy-800/80 flex items-center justify-between">
      <span className="font-mono text-xs font-bold text-slate-900 dark:text-white tracking-tight">
        Deterministic Mapping
      </span>
    </div>
  </div>

  {/* Stage 02 */}
  <div className="bg-white/90 dark:bg-[#16233F]/95 backdrop-blur-md border border-slate-200/90 dark:border-navy-700/70 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group hover:-translate-y-0.5">
    <div>
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-navy-800/80">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">STAGE 02</span>
        <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
          <Circle className="h-4 w-4 shrink-0 stroke-[2.2]" />
        </div>
      </div>
      <div className="pt-3 pb-2">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight text-left mb-2">
          Operational Task
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left">
          Convert legal mandates into scheduled recurring 30/60/90-day sprint cards.
        </p>
      </div>
    </div>
    <div className="pt-3 mt-4 border-t border-slate-100 dark:border-navy-800/80 flex items-center justify-between">
      <span className="font-mono text-xs font-bold text-slate-900 dark:text-white tracking-tight">
        Cadence Automation
      </span>
    </div>
  </div>

  {/* Stage 03 */}
  <div className="bg-white/90 dark:bg-[#16233F]/95 backdrop-blur-md border border-slate-200/90 dark:border-navy-700/70 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group hover:-translate-y-0.5">
    <div>
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-navy-800/80">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">STAGE 03</span>
        <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
          <Circle className="h-4 w-4 shrink-0 stroke-[2.2]" />
        </div>
      </div>
      <div className="pt-3 pb-2">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight text-left mb-2">
          Assigned Owner
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left">
          Route each task directly to an engineer or lead with explicit SLA timelines.
        </p>
      </div>
    </div>
    <div className="pt-3 mt-4 border-t border-slate-100 dark:border-navy-800/80 flex items-center justify-between">
      <span className="font-mono text-xs font-bold text-slate-900 dark:text-white tracking-tight">
        Role-Based SLA
      </span>
    </div>
  </div>

  {/* Stage 04 */}
  <div className="bg-white/90 dark:bg-[#16233F]/95 backdrop-blur-md border border-slate-200/90 dark:border-navy-700/70 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group hover:-translate-y-0.5">
    <div>
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-navy-800/80">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">STAGE 04</span>
        <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
          <Circle className="h-4 w-4 shrink-0 stroke-[2.2]" />
        </div>
      </div>
      <div className="pt-3 pb-2">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight text-left mb-2">
          Evidence Vault
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left">
          Collect system configs, logs, and screenshots stamped with recorded timestamps.
        </p>
      </div>
    </div>
    <div className="pt-3 mt-4 border-t border-slate-100 dark:border-navy-800/80 flex items-center justify-between">
      <span className="font-mono text-xs font-bold text-slate-900 dark:text-white tracking-tight">
        Proof Ingestion
      </span>
    </div>
  </div>

  {/* Stage 05 */}
  <div className="bg-white/90 dark:bg-[#16233F]/95 backdrop-blur-md border border-slate-200/90 dark:border-navy-700/70 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group hover:-translate-y-0.5">
    <div>
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-navy-800/80">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">STAGE 05</span>
        <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
          <Circle className="h-4 w-4 shrink-0 stroke-[2.2]" />
        </div>
      </div>
      <div className="pt-3 pb-2">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight text-left mb-2">
          Testing &amp; Sanity
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left">
          Run automated checks and peer reviews to confirm full control efficacy.
        </p>
      </div>
    </div>
    <div className="pt-3 mt-4 border-t border-slate-100 dark:border-navy-800/80 flex items-center justify-between">
      <span className="font-mono text-xs font-bold text-slate-900 dark:text-white tracking-tight">
        Dual-Control Audit
      </span>
    </div>
  </div>

  {/* Stage 06 */}
  <div className="bg-white/90 dark:bg-[#16233F]/95 backdrop-blur-md border border-slate-200/90 dark:border-navy-700/70 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group hover:-translate-y-0.5">
    <div>
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-navy-800/80">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">STAGE 06</span>
        <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
          <Circle className="h-4 w-4 shrink-0 stroke-[2.2]" />
        </div>
      </div>
      <div className="pt-3 pb-2">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight text-left mb-2">
          Remediation Loop
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left">
          Auto-flag deviations and assign fixes before external auditors enter the room.
        </p>
      </div>
    </div>
    <div className="pt-3 mt-4 border-t border-slate-100 dark:border-navy-800/80 flex items-center justify-between">
      <span className="font-mono text-xs font-bold text-slate-900 dark:text-white tracking-tight">
        Closed Feedback
      </span>
    </div>
  </div>

  {/* Stage 07 */}
  <div className="bg-white/90 dark:bg-[#16233F]/95 backdrop-blur-md border border-slate-200/90 dark:border-navy-700/70 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group hover:-translate-y-0.5 md:col-span-2 lg:col-span-2">
    <div>
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-navy-800/80">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-500">STAGE 07</span>
        <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-500 flex items-center justify-center shrink-0">
          <Circle className="h-4 w-4 shrink-0 stroke-[2.2]" />
        </div>
      </div>
      <div className="pt-3 pb-2">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight text-left mb-2">
          Audit-Ready Certified State
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left max-w-xl">
          Export tamper-proof audit packages ready for instant external assessor sign-off.
        </p>
      </div>
    </div>
    <div className="pt-3 mt-4 border-t border-slate-100 dark:border-navy-800/80 flex items-center justify-between">
      <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-500 tracking-tight">
        Continuous Certification
      </span>
    </div>
  </div>
</div>
</div>
</section>
{/*  Editorial Visual Storytelling Section  */}
<section className="w-full py-3.5 sm:py-6 lg:py-6 xl:py-7 bg-transparent border-t border-slate-200/60 dark:border-navy-700/60">
<div className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
<div className="lg:col-span-6">
<img className="w-full h-56 sm:h-72 lg:h-96 object-cover rounded-xl shadow-md" data-alt="A modern enterprise security operations room with software engineers reviewing continuous compliance telemetry monitors, warm natural sunlight through floor to ceiling windows, deep slate and peach UI accents, professional high-assurance corporate technology atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6HdgaARVLFnE4KC7RQJAlAsSfE47ssBBdNQdRMbzA0aT0eo2YNwpSP6QKbWNkPEuPd47zsLKrXMFeWGibcMPPu-MwnM0MmNk0_ZAI0suc1c75Egygb0GlbsPcQ3JgPAgpplC3n7QcnsX5paKqMlKn94eXrbQ66o4tXct9WDcbzTjUJmb2xZAWgAqB94ejKwyIUbAjBAdfqTjDTa2mM6dQqoyjK2YyRXz4O0oyaaRKnplItxoAcrYezg" />
</div>
<div className="lg:col-span-6 flex flex-col gap-3 sm:gap-6">
<span className="font-mono text-[10px] sm:text-xs text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest block text-center sm:text-left">Procedural Assurance</span>
<h2 className="text-xl min-[360px]:text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-tight text-left">
  Stop Treating Audits as Annual Crises. <span className="text-[#006c4d] dark:text-teal-400">Build Continuous Institutional Trust.</span>
</h2>
<p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-justify sm:text-left">
  Standard compliance operations rely on spreadsheets that grow obsolete the moment they are saved. OMNiGRC keeps evidence live, verifiable, and synchronised across product cycles, ensuring that external audits become mere verification walkthroughs instead of all-hands scrambles.
</p>
<div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-1">
<div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-900 dark:text-white font-medium">
<Circle className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-teal-600 dark:text-teal-400" /> Zero Spreadsheets
</div>
<div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-900 dark:text-white font-medium">
<Circle className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-teal-600 dark:text-teal-400" /> Automated Cadence
</div>
<div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-900 dark:text-white font-medium">
<Circle className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-teal-600 dark:text-teal-400" /> Audit Ready
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Practical Team Benefits  */}
<section className="w-full py-3.5 sm:py-6 lg:py-6 xl:py-7 bg-transparent border-t border-slate-200/60 dark:border-navy-700/60">
<div className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
<div className="text-left max-w-2xl mb-4 sm:mb-6">
<span className="font-mono text-[10px] sm:text-xs text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest block text-left">Built for Security Teams &amp; Leaders</span>
<h2 className="text-2xl min-[360px]:text-[26px] min-[400px]:text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white font-extrabold mt-2 sm:mt-3 tracking-tight leading-tight text-left lg:whitespace-nowrap">
  Engineered for Frictionless Governance
</h2>
<p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 mt-2 sm:mt-3 text-left leading-relaxed">Practical design choices that directly improve how cross-functional engineering teams handle recurring compliance obligations.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch"><div className="bg-white/85 dark:bg-[#16233F]/90 backdrop-blur-sm border border-slate-200 dark:border-navy-700/60 p-5 sm:p-6 lg:p-8 rounded-xl shadow-sm flex flex-col justify-between h-full"><div><div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 flex items-center justify-center mb-4 sm:mb-6"><Circle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" /></div><h3 className="text-lg sm:text-xl text-slate-900 dark:text-white font-bold mb-2 text-left">Transparent Ownership</h3><p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed text-left">Every control is mapped to a designated team lead with clear deadlines and exact proof requirements.</p></div><div className="mt-4 sm:mt-6 pt-1 text-xs sm:text-sm text-teal-600 dark:text-teal-400 font-bold flex items-center justify-center sm:justify-start gap-1">Zero Unowned Controls <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" /></div></div><div className="bg-white/85 dark:bg-[#16233F]/90 backdrop-blur-sm border border-slate-200 dark:border-navy-700/60 p-5 sm:p-6 lg:p-8 rounded-xl shadow-sm flex flex-col justify-between h-full"><div><div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 flex items-center justify-center mb-4 sm:mb-6"><Circle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" /></div><h3 className="text-lg sm:text-xl text-slate-900 dark:text-white font-bold mb-2 text-left">Evidence Reference Linking</h3><p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed text-left">Proof logs, CLI transcripts, and architecture diagrams link directly to requirements in the evidence index.</p></div><div className="mt-4 sm:mt-6 pt-1 text-xs sm:text-sm text-amber-600 dark:text-amber-500 font-bold flex items-center justify-center sm:justify-start gap-1">Deterministic Traceability <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" /></div></div><div className="bg-white/85 dark:bg-[#16233F]/90 backdrop-blur-sm border border-slate-200 dark:border-navy-700/60 p-5 sm:p-6 lg:p-8 rounded-xl shadow-sm flex flex-col justify-between h-full"><div><div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 flex items-center justify-center mb-4 sm:mb-6"><Circle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" /></div><h3 className="text-lg sm:text-xl text-slate-900 dark:text-white font-bold mb-2 text-left">Continuous Posture Visibility</h3><p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed text-left">Security executives get live, automated compliance health scores without interrupting engineering sprint cycles.</p></div><div className="mt-4 sm:mt-6 pt-1 text-xs sm:text-sm text-teal-600 dark:text-teal-400 font-bold flex items-center justify-center sm:justify-start gap-1">Instant Audit Readiness <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" /></div></div></div>
</div>
</section>
{/*  Technical Context Image & Architecture Accent  */}
<section className="w-full py-3.5 sm:py-6 lg:py-6 xl:py-7 bg-transparent border-t border-slate-200/60 dark:border-navy-700/60">
<div className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
<div className="bg-white/85 dark:bg-[#16233F]/90 backdrop-blur-sm border border-slate-200 dark:border-navy-700/60 rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-5 flex flex-col gap-4">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest text-center sm:text-left">Continuous Evidence Vault Pipeline</span>
<h3 className="text-xl sm:text-2xl lg:text-3xl text-slate-900 dark:text-white font-bold tracking-tight leading-snug text-center sm:text-left">Direct Orchestration to Verification Repositories</h3>
<p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-left">
              Every card on the Compliance Board is connected to structured logs in the evidence index. Auditing bodies can independently verify timestamps, reviewer attestations, and remediation commits.
            </p>
<div className="p-4 bg-slate-50 dark:bg-[#0A111F] rounded-lg font-mono text-xs text-slate-900 dark:text-white flex flex-col gap-1 mt-space-xs border border-slate-200 dark:border-navy-800"><span className="text-amber-600 dark:text-amber-500 font-bold font-mono text-xs">// CLI Verification Hook</span><span className="text-slate-900 dark:text-white font-bold font-mono text-xs">$ omnigrc verify --board CAD-2025-Q2 --control CTRL-004</span><span className="text-amber-600 dark:text-amber-500 font-bold font-mono text-xs">&gt; Verification successful: Record status confirmed valid.</span></div>
</div>
<div className="lg:col-span-7">
<img className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-sm" data-alt="High-resolution interface demonstration showing cloud infrastructure control pipelines, data hash signatures, evidence record tokens, modern slate and warm amber enterprise UI styling, clean typography and sharp data density." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXQRruDnyYbhOxt82gbQjg4SPjEONfbETSfRW3knYIM2hnddOTpYuHOtovl5-KvIilbnO4vTvSIVUwm8vzW3yaL1Qis7t9iYj4zOPknrsl88cjiqse2NmZGhHYHIA3eK6h5P5A3JCL_evmySy1t9XI-Iwx-MCJAA_xvEP_TYg6E-2GaQvaY9EVDIYr9lK5YergcHlJDic_IgSWo5reLzLMKjAx6s3GtePKshETvY9412MTG2Xgr14nJg" />
</div>
</div>
</div>
</div>
</section>
{/*  High-Intent Conversion CTA Banner  */}
<section className="w-full py-4 sm:py-8 lg:py-8 xl:py-9 bg-transparent border-t border-slate-200/60 dark:border-navy-700/60">
<div className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
<div className="relative overflow-hidden bg-gradient-to-br from-surface-container-low via-surface-container-high to-surface-container-low p-4 sm:p-8 lg:p-10 rounded-xl shadow-md text-center flex flex-col items-center">
<h2 className="text-[20px] min-[360px]:text-[22px] min-[400px]:text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white font-bold max-w-2xl mb-3 sm:mb-4 tracking-tight leading-tight sm:leading-snug text-center lg:whitespace-nowrap">
  Ready to bring clarity to your compliance cadence?
</h2>
<p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mb-5 sm:mb-6 text-center leading-relaxed">
  Transform fragmented audit preparation into a calm, continuous operational discipline. Schedule a technical briefing with our GRC engineering leads.
</p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-lg bg-teal-600 dark:bg-teal-500 text-white text-xs sm:text-sm font-semibold hover:bg-teal-700 dark:hover:bg-teal-400 transition-all shadow-md text-center" data-path="request-demo" href="#">
            Request a Technical Demo
          </a>
<a className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-lg bg-white dark:bg-[#0A111F] text-slate-900 dark:text-white text-xs sm:text-sm font-semibold hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors shadow-sm text-center" data-path="vulnerabilities" href="#">
            View Vulnerability Management <ArrowRight className="h-4 w-4 shrink-0" />
</a>
</div>
<div className="mt-5 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-slate-600 dark:text-slate-300 font-mono text-[10px] sm:text-xs">
<span className="flex items-center gap-1.5"><Circle className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-teal-600 dark:text-teal-400" /> Zero AI Retention</span>
<span className="flex items-center gap-1.5"><Circle className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-teal-600 dark:text-teal-400" /> SOC 2 Type II Certified</span>
<span className="flex items-center gap-1.5"><Circle className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-teal-600 dark:text-teal-400" /> Self-Host Option</span>
</div>
</div>
</div>
</section>

        {/* Related Article Banner */}
        <section className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 pb-6 sm:pb-8 pt-0">
          <div className="p-3.5 sm:p-5 rounded-xl bg-slate-100 dark:bg-[#16233F] border border-slate-300 dark:border-navy-700/60 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-[#2E936F]/10 text-[#2E936F] dark:text-teal font-mono text-[10px] sm:text-xs font-bold uppercase shrink-0">COMPLIANCE ESSENTIALS</span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Compliance vs. Pre-Audit Preparation: What Businesses Need to Know</h4>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mt-0.5">Why businesses should move from frantic audit scrambles to continuous readiness.</p>
              </div>
            </div>
            <Link
              href="/resources/blog/compliance-vs-pre-audit-preparation-what-businesses-need-to-know"
              className="w-full sm:w-auto text-center px-4 py-2 rounded-lg bg-[#2E936F] text-white text-xs font-bold hover:bg-[#2E936F]/90 transition-colors shrink-0"
            >
              Read Article &rarr;
            </Link>
          </div>
        </section>
{/*  Interactive JavaScript Logic for Board Inspection Pane  */}

</div>
</main>
      <Footer />
    </div>
  );
}
