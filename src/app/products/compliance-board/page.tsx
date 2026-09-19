import React from "react";
import type { Metadata } from "next";
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
  FileText,
  Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Compliance Board — OMNiGRC Connected Workflows",
  description: "Replace Pre-Audit Panic with a Continuous Compliance Board. Eliminate pre-audit panic with a predictable 30/60/90-day operational cadence.",
};

export default function ComplianceBoardPage() {
  return (
    <div className="min-h-screen bg-[#faf8ff] dark:bg-[#0A111F] text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />
      <main className="flex-1 w-full pt-20 sm:pt-24 bg-transparent min-h-screen">
<div className="flex flex-col w-full">
{/*  Top Hero Header Section with Asymmetric Balance  */}
<section className="relative w-full overflow-hidden bg-white dark:bg-[#0A111F] py-16 md:py-24">
<div className="max-w-[1440px] mx-auto px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
{/*  Text Column (7 Cols)  */}
<div className="lg:col-span-7 flex flex-col items-start">
<div className="inline-flex items-center gap-2 px-space-sm py-space-xs rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 font-mono text-xs tracking-wider uppercase mb-6">
<Circle className="h-5 w-5 shrink-0" />
            CORE WORKFLOW 04: OPERATIONAL TESTING &amp; CADENCE
          </div>
<h1 className="text-4xl text-slate-900 dark:text-white tracking-tight mb-6 font-bold max-w-2xl">
            Replace Pre-Audit Panic with a Continuous Compliance Board.
          </h1>
<p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mb-8 leading-relaxed">Eliminate pre-audit panic. OMNiGRC turns control tests, evidence collection, and vendor sign-offs into a predictable 30/60/90-day operational cadence.</p>
<div className="flex flex-wrap items-center gap-4 mb-12">
<a className="inline-flex items-center justify-center gap-2 px-space-lg py-4 rounded-lg bg-teal-600 dark:bg-teal-500 text-white text-sm hover:bg-teal-600 dark:bg-teal-500-container transition-all shadow-md" data-path="request-demo" href="#">
<Circle className="h-5 w-5 shrink-0" />
              Explore Compliance Board Demo
            </a>
<a className="inline-flex items-center justify-center gap-2 px-space-lg py-4 rounded-lg bg-slate-50 dark:bg-[#16233F] text-slate-900 dark:text-white text-sm hover:bg-slate-100 dark:bg-navy-800 transition-colors" href="#board-section">
<Circle className="h-5 w-5 shrink-0" />
              See How It Works
            </a>
</div>
</div>
{/*  Hero Visual / Realtime Cadence Metric Cluster (5 Cols)  */}
<div className="lg:col-span-5 relative">
<div className="relative bg-slate-50 dark:bg-[#16233F] rounded-xl p-8 shadow-sm">
<div className="flex items-center justify-between pb-space-sm mb-6">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-amber-600 dark:bg-amber-500 animate-ping"></span>
<span className="font-mono text-xs text-slate-900 dark:text-white font-semibold tracking-wide">OPERATIONAL RADAR (TEST ENVIRONMENT)</span>
</div>
<span className="text-xs text-slate-600 dark:text-slate-300 bg-white dark:bg-[#0A111F] px-space-xs py-0.5 rounded">Illustrative Model</span>
</div>
{/*  Mini Sparkline / Cadence Graphic  */}
<div className="bg-white dark:bg-[#0A111F] rounded-lg p-6 shadow-sm mb-6">
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
<div className="grid grid-cols-2 gap-2 font-mono text-xs"><div className="bg-white dark:bg-[#0A111F] p-4 rounded-lg flex flex-col"><span className="font-code-sm text-body-sm text-slate-900 dark:text-white font-semibold">Telemetry Feed</span><span className="text-slate-900 dark:text-white font-bold truncate">AWS + Okta + GitHub</span></div><div className="bg-white dark:bg-[#0A111F] p-4 rounded-lg flex flex-col"><span className="font-code-sm text-body-sm text-slate-900 dark:text-white font-semibold">Proof Hash</span><span className="text-amber-600 dark:text-amber-500 font-bold truncate">sha256:e3b0c442...</span></div></div>
</div>
</div>
</div>
{/*  Operational Metrics Bar (Illustrative Sample Values)  */}
<div className="mt-8 pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-slate-50 dark:bg-[#16233F] rounded-xl p-6 flex items-start gap-6 shadow-sm">
<div className="p-space-xs rounded-lg bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300">
<Circle className="h-5 w-5 shrink-0" />
</div>
<div>
<div className="text-xs text-slate-600 dark:text-slate-300 uppercase tracking-wider">Cadence Architecture</div>
<div className="text-xl text-slate-900 dark:text-white font-semibold">Rolling 30 / 60 / 90 Days</div>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-space-xs">Quarterly audits transformed into deterministic weekly sync rituals.</p>
</div>
</div>
<div className="bg-slate-50 dark:bg-[#16233F] rounded-xl p-6 flex items-start gap-6 shadow-sm">
<div className="p-space-xs rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300">
<Network className="h-5 w-5 shrink-0" />
</div>
<div>
<div className="text-xs text-slate-600 dark:text-slate-300 uppercase tracking-wider">Deterministic Flow</div>
<div className="text-xl text-slate-900 dark:text-white font-semibold">Req → Task → Owner → Proof</div>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-space-xs">Unbroken accountability from auditor request to engineering output.</p>
</div>
</div>
<div className="bg-slate-50 dark:bg-[#16233F] rounded-xl p-6 flex items-start gap-6 shadow-sm">
<div className="p-space-xs rounded-lg bg-tertiary-fixed text-on-tertiary-fixed">
<Circle className="h-5 w-5 shrink-0" />
</div>
<div>
<div className="text-xs text-slate-600 dark:text-slate-300 uppercase tracking-wider">Defensible Posture</div>
<div className="text-xl text-slate-900 dark:text-white font-semibold">Defensible Historical Record</div>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-space-xs">Immutable timestamps and logs ready for zero-friction sampling.</p>
</div>
</div>
</div>
</div>
</section>
{/*  Interactive 30/60/90 Compliance Board Feature Section  */}
<section className="w-full py-16 md:py-24 bg-surface" id="board-section">
<div className="max-w-[1440px] mx-auto px-8">
{/*  Section Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
<div>
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest">Interactive Workbench Preview</span>
<h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white font-bold mt-space-xs">Continuous Compliance Operational Board</h2>
<p className="text-base text-slate-600 dark:text-slate-300 mt-space-xs">Click on any card to inspect control mapping, historical evidence hashes, and verification audit trails.</p>
</div>
<div className="flex items-center gap-2 self-start md:self-auto bg-white dark:bg-[#0A111F] p-space-xs rounded-lg shadow-sm">
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
<section className="w-full py-16 md:py-24 bg-white dark:bg-[#0A111F]">
<div className="max-w-[1440px] mx-auto px-8">
<div className="max-w-3xl mb-12">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest">Architectural Methodology</span>
<h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white font-bold mt-space-xs">The 7-Stage Continuous Compliance Lifecycle</h2>
<p className="text-base text-slate-600 dark:text-slate-300 mt-space-xs">
          Instead of episodic compliance sprints, every requirement is grounded in a deterministic operational lifecycle that moves reliably toward audit certainty.
        </p>
</div>
{/*  7-Stage Grid Sequence  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><div className="bg-slate-50 dark:bg-[#16233F] p-6 rounded-xl shadow-sm flex flex-col justify-between"><div><div className="flex items-center justify-between mb-4"><span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold">STAGE 01</span><Circle className="h-5 w-5 shrink-0" /></div><h3 className="text-xl text-slate-900 dark:text-white font-bold mb-space-xs">Regulatory Clause</h3><p className="text-sm text-slate-900 dark:text-white font-medium">Deconstruct SOC 2, ISO 27001, HIPAA, and DPDP mandates into concrete rules.</p></div><div className="mt-6 pt-space-xs font-mono text-xs text-slate-900 dark:text-white font-bold">Deterministic Mapping</div></div><div className="bg-slate-50 dark:bg-[#16233F] p-6 rounded-xl shadow-sm flex flex-col justify-between"><div><div className="flex items-center justify-between mb-4"><span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold">STAGE 02</span><Circle className="h-5 w-5 shrink-0" /></div><h3 className="text-xl text-slate-900 dark:text-white font-bold mb-space-xs">Operational Task</h3><p className="text-sm text-slate-900 dark:text-white font-medium">Convert legal mandates into scheduled recurring 30/60/90-day sprint cards.</p></div><div className="mt-6 pt-space-xs font-mono text-xs text-slate-900 dark:text-white font-bold">Cadence Automation</div></div><div className="bg-slate-50 dark:bg-[#16233F] p-6 rounded-xl shadow-sm flex flex-col justify-between"><div><div className="flex items-center justify-between mb-4"><span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold">STAGE 03</span><Circle className="h-5 w-5 shrink-0" /></div><h3 className="text-xl text-slate-900 dark:text-white font-bold mb-space-xs">Assigned Owner</h3><p className="text-sm text-slate-900 dark:text-white font-medium">Route each task directly to an engineer or lead with explicit SLA timelines.</p></div><div className="mt-6 pt-space-xs font-mono text-xs text-slate-900 dark:text-white font-bold">Role-Based SLA</div></div><div className="bg-slate-50 dark:bg-[#16233F] p-6 rounded-xl shadow-sm flex flex-col justify-between"><div><div className="flex items-center justify-between mb-4"><span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold">STAGE 04</span><Circle className="h-5 w-5 shrink-0" /></div><h3 className="text-xl text-slate-900 dark:text-white font-bold mb-space-xs">Evidence Vault</h3><p className="text-sm text-slate-900 dark:text-white font-medium">Collect system configs, logs, and screenshots stamped with cryptographic hashes.</p></div><div className="mt-6 pt-space-xs font-mono text-xs text-slate-900 dark:text-white font-bold">Proof Ingestion</div></div><div className="bg-slate-50 dark:bg-[#16233F] p-6 rounded-xl shadow-sm flex flex-col justify-between"><div><div className="flex items-center justify-between mb-4"><span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold">STAGE 05</span><Circle className="h-5 w-5 shrink-0" /></div><h3 className="text-xl text-slate-900 dark:text-white font-bold mb-space-xs">Testing &amp; Sanity</h3><p className="text-sm text-slate-900 dark:text-white font-medium">Run automated checks and peer reviews to confirm full control efficacy.</p></div><div className="mt-6 pt-space-xs font-mono text-xs text-slate-900 dark:text-white font-bold">Dual-Control Audit</div></div><div className="bg-slate-50 dark:bg-[#16233F] p-6 rounded-xl shadow-sm flex flex-col justify-between"><div><div className="flex items-center justify-between mb-4"><span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold">STAGE 06</span><Circle className="h-5 w-5 shrink-0" /></div><h3 className="text-xl text-slate-900 dark:text-white font-bold mb-space-xs">Remediation Loop</h3><p className="text-sm text-slate-900 dark:text-white font-medium">Auto-flag deviations and assign fixes before external auditors enter the room.</p></div><div className="mt-6 pt-space-xs font-mono text-xs text-slate-900 dark:text-white font-bold">Closed Feedback</div></div><div className="bg-slate-50 dark:bg-[#16233F] p-6 rounded-xl shadow-sm flex flex-col justify-between lg:col-span-2"><div><div className="flex items-center justify-between mb-4"><span className="font-mono text-xs text-amber-600 dark:text-amber-500 font-bold">STAGE 07</span><Circle className="h-5 w-5 shrink-0" /></div><h3 className="text-xl text-slate-900 dark:text-white font-bold mb-space-xs">Audit-Ready Certified State</h3><p className="text-sm text-slate-900 dark:text-white font-medium">Export tamper-proof audit packages ready for instant external assessor sign-off.</p></div><div className="mt-6 pt-space-xs font-mono text-xs text-amber-600 dark:text-amber-500 font-bold">Continuous Certification</div></div></div>
</div>
</section>
{/*  Editorial Visual Storytelling Section  */}
<section className="w-full py-16 md:py-24 bg-surface">
<div className="max-w-[1440px] mx-auto px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-6">
<img className="w-full h-96 object-cover rounded-xl shadow-md" data-alt="A modern enterprise security operations room with software engineers reviewing continuous compliance telemetry monitors, warm natural sunlight through floor to ceiling windows, deep slate and peach UI accents, professional high-assurance corporate technology atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6HdgaARVLFnE4KC7RQJAlAsSfE47ssBBdNQdRMbzA0aT0eo2YNwpSP6QKbWNkPEuPd47zsLKrXMFeWGibcMPPu-MwnM0MmNk0_ZAI0suc1c75Egygb0GlbsPcQ3JgPAgpplC3n7QcnsX5paKqMlKn94eXrbQ66o4tXct9WDcbzTjUJmb2xZAWgAqB94ejKwyIUbAjBAdfqTjDTa2mM6dQqoyjK2YyRXz4O0oyaaRKnplItxoAcrYezg" />
</div>
<div className="lg:col-span-6 flex flex-col gap-6">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest">Procedural Assurance</span>
<h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white font-bold leading-tight">
            Stop Treating Audits as Annual Crises. Build Continuous Institutional Trust.
          </h2>
<p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Standard compliance operations rely on spreadsheets that grow obsolete the moment they are saved. OMNiGRC keeps evidence live, verifiable, and synchronised across product cycles, ensuring that external audits become mere verification walkthroughs instead of all-hands scrambles.
          </p>
<div className="flex items-center gap-6 pt-space-xs">
<div className="flex items-center gap-2 text-sm text-slate-900 dark:text-white">
<Circle className="h-5 w-5 shrink-0" /> Zero Spreadsheets
            </div>
<div className="flex items-center gap-2 text-sm text-slate-900 dark:text-white">
<Circle className="h-5 w-5 shrink-0" /> Automated Cadence
            </div>
<div className="flex items-center gap-2 text-sm text-slate-900 dark:text-white">
<Circle className="h-5 w-5 shrink-0" /> Audit Ready
            </div>
</div>
</div>
</div>
</div>
</section>
{/*  Practical Team Benefits  */}
<section className="w-full py-16 md:py-24 bg-white dark:bg-[#0A111F]">
<div className="max-w-[1440px] mx-auto px-8">
<div className="text-center max-w-2xl mx-auto mb-12">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest">Built for Security Teams &amp; Leaders</span>
<h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white font-bold mt-space-xs">Engineered for Frictionless Governance</h2>
<p className="text-base text-slate-600 dark:text-slate-300 mt-space-xs">Practical design choices that directly improve how cross-functional engineering teams handle recurring compliance obligations.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div className="bg-slate-50 dark:bg-[#16233F] p-8 rounded-xl shadow-sm flex flex-col justify-between"><div><div className="w-12 h-12 rounded-lg bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 flex items-center justify-center mb-6"><Circle className="h-5 w-5 shrink-0" /></div><h3 className="text-xl text-slate-900 dark:text-white font-bold mb-space-xs">Transparent Ownership</h3><p className="text-base text-slate-900 dark:text-white font-medium leading-relaxed">Every control is mapped to a designated team lead with clear deadlines and exact proof requirements.</p></div><div className="mt-6 pt-space-xs text-sm text-teal-600 dark:text-teal-400 font-bold flex items-center gap-1">Zero Unowned Controls <ArrowRight className="h-5 w-5 shrink-0" /></div></div><div className="bg-slate-50 dark:bg-[#16233F] p-8 rounded-xl shadow-sm flex flex-col justify-between"><div><div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 flex items-center justify-center mb-6"><Circle className="h-5 w-5 shrink-0" /></div><h3 className="text-xl text-slate-900 dark:text-white font-bold mb-space-xs">Evidence Reference Linking</h3><p className="text-base text-slate-900 dark:text-white font-medium leading-relaxed">Proof logs, CLI transcripts, and architecture diagrams link directly to requirements in an immutable vault.</p></div><div className="mt-6 pt-space-xs text-sm text-amber-600 dark:text-amber-500 font-bold flex items-center gap-1">Deterministic Traceability <ArrowRight className="h-5 w-5 shrink-0" /></div></div><div className="bg-slate-50 dark:bg-[#16233F] p-8 rounded-xl shadow-sm flex flex-col justify-between"><div><div className="w-12 h-12 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center mb-6"><Circle className="h-5 w-5 shrink-0" /></div><h3 className="text-xl text-slate-900 dark:text-white font-bold mb-space-xs">Continuous Posture Visibility</h3><p className="text-base text-slate-900 dark:text-white font-medium leading-relaxed">Security executives get live, automated compliance health scores without interrupting engineering sprint cycles.</p></div><div className="mt-6 pt-space-xs text-sm text-tertiary font-bold flex items-center gap-1">Instant Audit Readiness <ArrowRight className="h-5 w-5 shrink-0" /></div></div></div>
</div>
</section>
{/*  Technical Context Image & Architecture Accent  */}
<section className="w-full py-16 md:py-24 bg-surface">
<div className="max-w-[1440px] mx-auto px-8">
<div className="bg-slate-50 dark:bg-[#16233F] rounded-xl p-8 shadow-sm">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-5 flex flex-col gap-4">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest">Continuous Evidence Vault Pipeline</span>
<h3 className="font-headline-md text-headline-md text-slate-900 dark:text-white font-bold">Direct Orchestration to Verification Repositories</h3>
<p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Every card on the Compliance Board is cryptographically tied to immutable logs stored in the local evidence vault. Auditing bodies can independently verify timestamps, payload signatures, and remediation commits.
            </p>
<div className="p-4 bg-white dark:bg-[#0A111F] rounded-lg font-mono text-xs text-slate-900 dark:text-white flex flex-col gap-1 mt-space-xs"><span className="text-amber-600 dark:text-amber-500 font-bold font-mono text-xs">// CLI Verification Hook</span><span className="text-slate-900 dark:text-white font-bold font-mono text-xs">$ omnigrc verify --board CAD-2025-Q2 --control CTRL-004</span><span className="text-amber-600 dark:text-amber-500 font-bold font-mono text-xs">&gt; Verification successful: SHA256 checksum confirmed valid.</span></div>
</div>
<div className="lg:col-span-7">
<img className="w-full h-80 object-cover rounded-lg shadow-sm" data-alt="High-resolution interface demonstration showing cloud infrastructure control pipelines, data hash signatures, cryptographic proof tokens, modern slate and warm amber enterprise UI styling, clean typography and sharp data density." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXQRruDnyYbhOxt82gbQjg4SPjEONfbETSfRW3knYIM2hnddOTpYuHOtovl5-KvIilbnO4vTvSIVUwm8vzW3yaL1Qis7t9iYj4zOPknrsl88cjiqse2NmZGhHYHIA3eK6h5P5A3JCL_evmySy1t9XI-Iwx-MCJAA_xvEP_TYg6E-2GaQvaY9EVDIYr9lK5YergcHlJDic_IgSWo5reLzLMKjAx6s3GtePKshETvY9412MTG2Xgr14nJg" />
</div>
</div>
</div>
</div>
</section>
{/*  High-Intent Conversion CTA Banner  */}
<section className="w-full py-16 md:py-24 bg-white dark:bg-[#0A111F]">
<div className="max-w-[1440px] mx-auto px-8">
<div className="relative overflow-hidden bg-gradient-to-br from-surface-container-low via-surface-container-high to-surface-container-low p-12 rounded-xl shadow-md text-center flex flex-col items-center">
<span className="inline-flex items-center gap-2 px-space-sm py-space-xs rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 font-mono text-xs uppercase tracking-wider mb-4">
<Zap className="h-5 w-5 shrink-0" /> Seamless Onboarding
        </span>
<h2 className="text-4xl text-slate-900 dark:text-white font-bold max-w-2xl mb-4">
          Ready to bring clarity to your compliance cadence?
        </h2>
<p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mb-8">
          Transform fragmented audit preparation into a calm, continuous operational discipline. Schedule a technical briefing with our GRC engineering leads.
        </p>
<div className="flex flex-wrap items-center justify-center gap-4">
<a className="inline-flex items-center justify-center gap-2 px-space-xl py-4 rounded-lg bg-teal-600 dark:bg-teal-500 text-white text-sm hover:bg-teal-600 dark:bg-teal-500-container transition-all shadow-md" data-path="request-demo" href="#">
            Request a Technical Demo
          </a>
<a className="inline-flex items-center justify-center gap-2 px-space-lg py-4 rounded-lg bg-white dark:bg-[#0A111F] text-slate-900 dark:text-white text-sm hover:bg-slate-100 dark:bg-navy-800 transition-colors shadow-sm" data-path="vulnerabilities" href="#">
            View Vulnerability Management <ArrowRight className="h-5 w-5 shrink-0" />
</a>
</div>
<div className="mt-8 flex items-center justify-center gap-8 text-slate-600 dark:text-slate-300 font-mono text-xs">
<span className="flex items-center gap-1"><Circle className="h-5 w-5 shrink-0" /> Zero AI Retention</span>
<span className="flex items-center gap-1"><Circle className="h-5 w-5 shrink-0" /> SOC 2 Type II Certified</span>
<span className="flex items-center gap-1"><Circle className="h-5 w-5 shrink-0" /> Self-Host Option</span>
</div>
</div>
</div>
</section>
{/*  Interactive JavaScript Logic for Board Inspection Pane  */}

</div>
</main>
      <Footer />
    </div>
  );
}
