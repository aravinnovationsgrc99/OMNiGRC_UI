import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  ShieldAlert,
  Server,
  Sparkles,
  CalendarCheck,
  Shield,
  ChevronDown,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  AlertCircle,
  Ban,
  ArrowRightLeft,
  Target,
  LayoutDashboard,
  TrendingUp,
  Sliders,
  History,
  Lock,
  Verified,
  CheckCircle2,
  XCircle,
  Zap,
  Circle,
  FileText,
  CheckSquare
} from "lucide-react";
import { RiskMatrix } from "@/components/workflows/RiskMatrix";

export const metadata: Metadata = {
  title: "Risk Register — OMNiGRC Connected Workflows",
  description: "Maintain continuous risk registers with calibrated 5x5 Likelihood × Impact scoring mapped directly to tracked infrastructure assets.",
};

export default function RiskRegisterPage() {
  return (
    <div className="min-h-screen bg-[#faf8ff] dark:bg-[#0A111F] text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />
      <main className="flex-1 w-full pt-16 bg-transparent min-h-screen">
<div className="flex flex-col w-full">
{/*  Top Context Ribbon  */}
<section className="w-full bg-slate-50 dark:bg-[#16233F] px-8 py-4">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-600 dark:bg-amber-500 text-white text-xs">
<Circle className="h-5 w-5 shrink-0" /> LIVE ENGINE
        </span>
<span className="font-mono text-xs text-slate-600 dark:text-slate-300 font-medium">Telemetry sync: continuous recalculation active</span>
</div>
<div className="flex items-center gap-6">
<span className="font-mono text-xs text-slate-900 dark:text-white">Tenant: <strong className="font-semibold text-teal-600 dark:text-teal-400">ent-us-east-cluster</strong></span>
<span className="font-mono text-xs text-slate-600 dark:text-slate-300">Frameworks: ISO 27001 • SOC 2 • ISO 42001</span>
</div>
</div>
</section>
{/*  Hero Section (Clean Analytical Typography Focus)  */}
<section className="w-full px-8 pt-space-xl pb-space-lg">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 flex flex-col items-start space-y-space-md">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white">
<Shield className="h-5 w-5 shrink-0" />
<span className="text-xs uppercase tracking-wider text-slate-900 dark:text-white">Core Workflow 01: Quantified Risk Management</span>
</div>
<h1 className="text-4xl tracking-tight text-slate-900 dark:text-white font-bold">Calibrated 5x5 Risk Registers Directly Connected to Assets</h1>
<p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">Maintain continuous risk registers with calibrated 5x5 Likelihood × Impact scoring mapped directly to tracked infrastructure assets.</p>
<div className="flex flex-wrap items-center gap-6 pt-space-xs">
<a className="inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-teal-600 dark:bg-teal-500-container text-white text-sm font-semibold hover:bg-teal-600 dark:bg-teal-500 transition-all duration-150 shadow-md hover:shadow-lg" href="#matrix-view">
<Circle className="h-5 w-5 shrink-0" />
<span className="">Explore Risk Register Demo</span>
</a>
<a className="inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white text-sm font-semibold hover:bg-slate-200 dark:bg-navy-700 transition-colors" href="#audit-log"><span className="">View Audit Logging</span><ArrowRight className="h-5 w-5 shrink-0" /></a>
</div>
{/*  Metric strip  */}
<div className="grid grid-cols-3 gap-6 w-full pt-6">
<div className="p-6 rounded-xl bg-slate-50 dark:bg-[#16233F]">
<span className="block font-mono text-xs text-slate-600 dark:text-slate-300 uppercase">Tracked Risks</span>
<span className="block font-headline-md text-headline-md font-bold text-slate-900 dark:text-white mt-1">142</span>
<span className="block text-sm text-amber-600 dark:text-amber-500 font-medium mt-0.5">100% telemetry bound</span>
</div>
<div className="p-6 rounded-xl bg-slate-50 dark:bg-[#16233F]"><span className="block font-mono text-xs text-slate-600 dark:text-slate-300 uppercase">Asset Coverage</span><span className="block font-headline-md text-headline-md font-bold text-slate-900 dark:text-white mt-1">94.2%</span><span className="block text-sm text-slate-600 dark:text-slate-300 mt-0.5">Direct Asset-to-Risk linkage</span></div>
<div className="p-6 rounded-xl bg-slate-50 dark:bg-[#16233F]">
<span className="block font-mono text-xs text-slate-600 dark:text-slate-300 uppercase">Recalc Latency</span>
<span className="block font-headline-md text-headline-md font-bold text-teal-600 dark:text-teal-400 mt-1">&lt; 1.2s</span>
<span className="block text-sm text-slate-600 dark:text-slate-300 mt-0.5">Post control failure</span>
</div>
</div>
</div>
{/*  Hero Visual Card with Visual Asset  */}
<div className="lg:col-span-5 relative">
<div className="rounded-xl overflow-hidden shadow-xl bg-white dark:bg-[#0A111F] p-6 space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-red-600 dark:bg-red-500"></span>
<span className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></span>
<span className="w-3 h-3 rounded-full bg-amber-600 dark:bg-amber-500"></span>
<span className="font-mono text-xs text-slate-600 dark:text-slate-300 ml-2">omni-risk-engine-daemon</span>
</div>
<span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white">v3.42-hotpatch</span>
</div>
<div className="relative rounded-lg overflow-hidden h-60">
<img className="w-full h-full object-cover" data-alt="Enterprise SecOps monitoring center showing security analysts analyzing cloud infrastructure risk heatmaps and live telemetry dashboards in a warm modern light-filled engineering workspace with architectural orange and slate accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0pJsovCAqksc75OL5Qhrqv--cbsqwpwipwejm2s_DWsuq2I2gss2xKY0Vlz9P9yLWsOIO9GUXUWV_Xml0-H2TjrOfYqD5BiXxQwzdLVCsX6QPRQWt0als3LpyX-QKUVuvewJHzH8FsiS22fD1HnkoiPwidNbYjpf80EqR5DIrJfjw36NEcpg1j5Lwtpw8wH2-lyFitRhOr-dDa9ywcrZf7UoqnCbMD_Vr8GRiQ6zppyFtWMBM6bP5cA" />
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex items-end p-6">
<div className="text-white">
<p className="font-mono text-xs text-surface-container-highest">EVENT RECORDED #4419</p>
<p className="text-sm font-semibold text-white">AWS KMS rotation verified — Risk score calibrated for AST-059</p>
</div>
</div>
</div>
<div className="p-4 rounded-lg bg-slate-50 dark:bg-[#16233F] flex items-center justify-between">
<div className="flex items-center gap-2">
<CheckCircle2 className="h-5 w-5 shrink-0" />
<span className="text-sm font-medium text-slate-900 dark:text-white">Auto-Evidence Ledger attached</span>
</div>
<span className="font-mono text-xs text-slate-600 dark:text-slate-300 font-mono">SHA256: 9b2d...f041</span>
</div>
</div>
</div>
</div>
</section>
{/*  Interactive 5x5 Matrix Section  */}
<section className="w-full px-8 py-16 md:py-24 bg-slate-50 dark:bg-[#16233F]" id="matrix-view">
<div className="max-w-7xl mx-auto space-y-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6"><div><div className="flex items-center gap-2"><span className="font-mono text-xs text-teal-600 dark:text-teal-400 uppercase font-bold tracking-wider">Dynamic Risk Calibration</span><span className="px-2 py-0.5 rounded font-mono text-xs font-semibold bg-slate-200 dark:bg-navy-700 text-slate-600 dark:text-slate-300">(Illustrative Demo Data)</span></div><h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white font-bold mt-1">Interactive 5x5 Likelihood × Impact Heatmap</h2><p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mt-1">Calibrated 5x5 Likelihood × Impact matrix reflecting direct Asset-to-Risk linkage. Click any cell to inspect risk scoring.</p></div><div className="flex items-center gap-2 bg-white dark:bg-[#0A111F] px-3 py-2 rounded-lg shadow-sm border"><Circle className="h-5 w-5 shrink-0" /><span className="text-xs font-semibold text-slate-900 dark:text-white">5x5 Likelihood × Impact Scoring</span></div></div>
{/*  Matrix Workspace Container  */}
<RiskMatrix />
</div>
</section>
{/*  Risk Treatments Explained Section  */}
<section className="w-full px-8 py-16 md:py-24">
<div className="max-w-7xl mx-auto space-y-space-lg">
<div className="text-center max-w-3xl mx-auto space-y-space-xs">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 uppercase font-bold tracking-wider">Operational Treatment Taxonomy</span>
<h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white font-bold">The Four Core Risk Treatments, Automated</h2>
<p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Every quantified entry in OMNiGRC is bound to an actionable, legally defensible treatment path. No ambiguity, no neglected risks forgotten in spreadsheets.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Card 1: Mitigate  */}
<div className="p-8 rounded-xl bg-white dark:bg-[#0A111F] shadow-md flex flex-col justify-between space-y-space-md hover:-translate-y-1 transition-transform">
<div className="space-y-space-sm">
<div className="w-12 h-12 rounded-xl bg-amber-600 dark:bg-amber-500-fixed flex items-center justify-center text-white-fixed">
<CheckCircle2 className="h-5 w-5 shrink-0" />
</div>
<div className="inline-block px-2.5 py-0.5 rounded font-mono text-xs font-semibold bg-amber-600 dark:bg-amber-500 text-white">
              STRATEGY: MITIGATE
            </div>
<h3 className="text-xl text-slate-900 dark:text-white font-bold">Control Safeguards</h3>
<p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Direct mapping to technical, physical, or administrative controls with continuous test verification and dynamic score suppression.
            </p>
</div>
<div className="pt-space-sm bg-slate-50 dark:bg-[#16233F] p-4 rounded-lg">
<span className="block font-mono text-xs text-slate-900 dark:text-white font-semibold">Active: 104 Risks</span>
<span className="block text-sm text-slate-600 dark:text-slate-300">Continuous API checks</span>
</div>
</div>
{/*  Card 2: Accept  */}
<div className="p-8 rounded-xl bg-white dark:bg-[#0A111F] shadow-md flex flex-col justify-between space-y-space-md hover:-translate-y-1 transition-transform">
<div className="space-y-space-sm">
<div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
<Circle className="h-5 w-5 shrink-0" />
</div>
<div className="inline-block px-2.5 py-0.5 rounded font-mono text-xs font-semibold bg-tertiary text-on-tertiary">
              STRATEGY: ACCEPT
            </div>
<h3 className="text-xl text-slate-900 dark:text-white font-bold">Executive Sign-Off</h3>
<p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Formal risk acceptance with documented business justification, non-delegable CISO authorization, and strict expiration date alerts.
            </p>
</div>
<div className="pt-space-sm bg-slate-50 dark:bg-[#16233F] p-4 rounded-lg">
<span className="block font-mono text-xs text-slate-900 dark:text-white font-semibold">Active: 18 Risks</span>
<span className="block text-sm text-slate-600 dark:text-slate-300">90-day review cycles</span>
</div>
</div>
{/*  Card 3: Transfer  */}
<div className="p-8 rounded-xl bg-white dark:bg-[#0A111F] shadow-md flex flex-col justify-between space-y-space-md hover:-translate-y-1 transition-transform">
<div className="space-y-space-sm">
<div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-navy-700 flex items-center justify-center text-slate-900 dark:text-white">
<Circle className="h-5 w-5 shrink-0" />
</div>
<div className="inline-block px-2.5 py-0.5 rounded font-mono text-xs font-semibold bg-slate-200 dark:bg-navy-700est text-slate-900 dark:text-white">
              STRATEGY: TRANSFER
            </div>
<h3 className="text-xl text-slate-900 dark:text-white font-bold">Contractual Offload</h3>
<p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Cyber insurance underwriting and third-party vendor indemnification contracts linked directly into our automated Vendor Inventory.
            </p>
</div>
<div className="pt-space-sm bg-slate-50 dark:bg-[#16233F] p-4 rounded-lg">
<span className="block font-mono text-xs text-slate-900 dark:text-white font-semibold">Active: 12 Risks</span>
<span className="block text-sm text-slate-600 dark:text-slate-300">SLA policy linked</span>
</div>
</div>
{/*  Card 4: Avoid  */}
<div className="p-8 rounded-xl bg-white dark:bg-[#0A111F] shadow-md flex flex-col justify-between space-y-space-md hover:-translate-y-1 transition-transform">
<div className="space-y-space-sm">
<div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center text-teal-800 dark:text-teal-300">
<Circle className="h-5 w-5 shrink-0" />
</div>
<div className="inline-block px-2.5 py-0.5 rounded font-mono text-xs font-semibold bg-teal-600 dark:bg-teal-500 text-white">
              STRATEGY: AVOID
            </div>
<h3 className="text-xl text-slate-900 dark:text-white font-bold">Sunset &amp; Decommission</h3>
<p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Permanently eliminating exposure by terminating high-risk microservices, unmaintained legacy software, or risky geographical routes.
            </p>
</div>
<div className="pt-space-sm bg-slate-50 dark:bg-[#16233F] p-4 rounded-lg">
<span className="block font-mono text-xs text-slate-900 dark:text-white font-semibold">Active: 8 Risks</span>
<span className="block text-sm text-slate-600 dark:text-slate-300">Tear-down completed</span>
</div>
</div>
</div>
</div>
</section>
{/*  Continuous vs Point-in-Time Comparison & PostgreSQL Immutable Audit Log  */}
<section className="w-full px-8 py-16 md:py-24 bg-slate-50 dark:bg-[#16233F]" id="audit-log">
<div className="max-w-7xl mx-auto space-y-space-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
<div className="lg:col-span-5 space-y-space-md">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 uppercase font-bold tracking-wider">Dynamic Architecture</span>
<h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white font-bold">Continuous Calibration vs. Annual Stagnation</h2>
<p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Annual or quarterly audit checklists hide the fact that security controls fail unpredictably between review intervals. OMNiGRC turns risk scoring into an autonomic nervous system.
          </p>
{/*  Interactive Comparison Toggle Cards  */}
<div className="space-y-space-sm">
<div className="p-6 rounded-xl bg-white dark:bg-[#0A111F] shadow-sm space-y-1">
<div className="flex items-center justify-between">
<span className="text-sm font-semibold text-red-600 dark:text-red-400">The Static Spreadsheet Problem</span>
<XCircle className="h-5 w-5 shrink-0" />
</div>
<p className="text-sm text-slate-600 dark:text-slate-300">
                Scores freeze in Excel spreadsheets for 12 months. When a WAF rule is misconfigured or a key backup script silently fails, your residual risk stays green while production sits defenseless.
              </p>
</div>
<div className="p-6 rounded-xl bg-white dark:bg-[#0A111F] shadow-md space-y-1">
<div className="flex items-center justify-between">
<span className="text-sm font-semibold text-amber-600 dark:text-amber-500">The OMNiGRC Real-Time Engine</span>
<Circle className="h-5 w-5 shrink-0" />
</div>
<p className="text-sm text-slate-600 dark:text-slate-300">When telemetry detects state change at 03:15 UTC, RSK-042 risk score immediately updates to 16 (High) and posts an entry to the append-only audit log.</p>
</div>
</div>
</div>
{/*  Immutable Audit Log Terminal (Telemetry surface)  */}
<div className="lg:col-span-7 rounded-xl bg-slate-900 dark:bg-black text-white p-8 shadow-xl space-y-space-md flex flex-col justify-between">
<div className="space-y-space-xs"><div className="flex items-center justify-between pb-2 border-b border-surface-container-lowest/10"><div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-amber-600 dark:bg-amber-500 animate-pulse"></span><span className="font-mono text-xs font-bold text-surface-container-lowest">Append-Only Audit Logging</span></div><span className="font-mono text-xs text-slate-500">audit_log_stream = active</span></div><p className="font-mono text-xs text-slate-500">SELECT timestamp, risk_id, new_score, trigger_event, user_id FROM omni_risk_audit_stream LIMIT 4;</p></div>
{/*  Log entries table  */}
<div className="space-y-2 font-mono text-xs overflow-x-auto">
{/*  Entry 1  */}
<div className="p-4 rounded bg-white dark:bg-[#0A111F]/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
<div className="flex items-center gap-2">
<span className="text-teal-700 dark:text-teal-400">2026-03-30 08:41:12 UTC</span>
<span className="px-1.5 py-0.5 rounded bg-white dark:bg-[#0A111F]/10 text-surface-container-lowest">RSK-042</span>
</div>
<div className="flex items-center gap-2 text-slate-500">
<span className="">16 → <strong className="text-amber-700 dark:text-amber-400">4</strong></span>
<span className="">[CTRL-012 PASS]</span>
<span className="text-surface-container-lowest text-[11px]">sig: p_dev_lead</span>
</div>
</div>
{/*  Entry 2  */}
<div className="p-4 rounded bg-white dark:bg-[#0A111F]/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
<div className="flex items-center gap-2">
<span className="text-teal-700 dark:text-teal-400">2026-03-30 04:12:05 UTC</span>
<span className="px-1.5 py-0.5 rounded bg-white dark:bg-[#0A111F]/10 text-surface-container-lowest">RSK-029</span>
</div>
<div className="flex items-center gap-2 text-slate-500">
<span className="">12 → <strong className="text-amber-700 dark:text-amber-400">3</strong></span>
<span className="">[CTRL-015 REMEDIATED]</span>
<span className="text-surface-container-lowest text-[11px]">sig: auto_bot</span>
</div>
</div>
{/*  Entry 3  */}
<div className="p-4 rounded bg-white dark:bg-[#0A111F]/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
<div className="flex items-center gap-2">
<span className="text-teal-700 dark:text-teal-400">2026-03-29 23:19:40 UTC</span>
<span className="px-1.5 py-0.5 rounded bg-white dark:bg-[#0A111F]/10 text-surface-container-lowest">RSK-009</span>
</div>
<div className="flex items-center gap-2 text-slate-500">
<span className="">8 → <strong className="text-red-600 dark:text-red-400-container font-bold">20</strong></span>
<span className="">[VPC DRIFT DETECTED]</span>
<span className="text-surface-container-lowest text-[11px]">sig: daemon_alert</span>
</div>
</div>
{/*  Entry 4  */}
<div className="p-4 rounded bg-white dark:bg-[#0A111F]/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
<div className="flex items-center gap-2">
<span className="text-teal-700 dark:text-teal-400">2026-03-29 17:02:11 UTC</span>
<span className="px-1.5 py-0.5 rounded bg-white dark:bg-[#0A111F]/10 text-surface-container-lowest">RSK-078</span>
</div>
<div className="flex items-center gap-2 text-slate-500">
<span className="">6 → <strong className="text-amber-700 dark:text-amber-400">2</strong></span>
<span className="">[SCIM SYNC SUCCESS]</span>
<span className="text-surface-container-lowest text-[11px]">sig: d_chen_eng</span>
</div>
</div>
</div>
<div className="pt-2 flex items-center justify-between text-slate-500 font-mono text-xs"><span className="">Log Sequence ID: seq_8c37f_91aa4</span><span className="inline-flex items-center gap-1 text-amber-700 dark:text-amber-400"><Circle className="h-5 w-5 shrink-0" /> Append-Only Audit Trail</span></div>
</div>
</div>
</div>
</section>
{/*  Cross-Workflow Linkage Diagram  */}
<section className="w-full px-8 py-16 md:py-24">
<div className="max-w-7xl mx-auto space-y-space-lg">
<div className="text-center max-w-3xl mx-auto space-y-space-xs">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 uppercase font-bold tracking-wider">Total Ecosystem Interoperability</span>
<h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white font-bold">The Continuous Assurance Lifecycle</h2>
<p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          How an identified risk traverses every workflow module inside OMNiGRC, turning raw technical signals into indisputable audit evidence.
        </p>
</div>
{/*  Process Diagram Strip  */}
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
{/*  Step 1  */}
<div className="p-6 rounded-xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between space-y-space-sm hover:shadow-md transition-shadow">
<div className="space-y-space-xs">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold">01 / DISCOVERY</span>
<div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-teal-600 dark:text-teal-400">
<Circle className="h-5 w-5 shrink-0" />
</div>
<h4 className="text-xl text-slate-900 dark:text-white font-semibold">Risk Identified</h4>
<p className="text-sm text-slate-600 dark:text-slate-300">Threat modeled or ingested via threat feeds.</p>
</div>
<span className="font-mono text-xs text-slate-900 dark:text-white font-mono">RSK-042</span>
</div>
{/*  Step 2  */}
<div className="p-6 rounded-xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between space-y-space-sm hover:shadow-md transition-shadow">
<div className="space-y-space-xs">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold">02 / MAPPING</span>
<div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-teal-600 dark:text-teal-400">
<Circle className="h-5 w-5 shrink-0" />
</div>
<h4 className="text-xl text-slate-900 dark:text-white font-semibold">Asset Linked</h4>
<p className="text-sm text-slate-600 dark:text-slate-300">Direct Asset-to-Risk linkage for targeted impact evaluation.</p>
</div>
<span className="font-mono text-xs text-slate-900 dark:text-white font-mono">AST-059</span>
</div>
{/*  Step 3  */}
<div className="p-6 rounded-xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between space-y-space-sm hover:shadow-md transition-shadow">
<div className="space-y-space-xs">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold">03 / QUANTIFY</span>
<div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-teal-600 dark:text-teal-400">
<Circle className="h-5 w-5 shrink-0" />
</div>
<h4 className="text-xl text-slate-900 dark:text-white font-semibold">Vulnerability Scored</h4>
<p className="text-sm text-slate-600 dark:text-slate-300">CVSS / EPSS factors calibrate inherent score.</p>
</div>
<span className="font-mono text-xs text-red-600 dark:text-red-400 font-mono">Score: 16 (High)</span>
</div>
{/*  Step 4  */}
<div className="p-6 rounded-xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between space-y-space-sm hover:shadow-md transition-shadow">
<div className="space-y-space-xs">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold">04 / DEFENSE</span>
<div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-amber-600 dark:text-amber-500">
<Shield className="h-5 w-5 shrink-0" />
</div>
<h4 className="text-xl text-slate-900 dark:text-white font-semibold">Control Mitigated</h4>
<p className="text-sm text-slate-600 dark:text-slate-300">Automated tests suppress residual likelihood.</p>
</div>
<span className="font-mono text-xs text-amber-600 dark:text-amber-500 font-mono">CTRL-012 PASS</span>
</div>
{/*  Step 5  */}
<div className="p-6 rounded-xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between space-y-space-sm hover:shadow-md transition-shadow">
<div className="space-y-space-xs">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold">05 / POSTURE</span>
<div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-teal-600 dark:text-teal-400">
<Circle className="h-5 w-5 shrink-0" />
</div>
<h4 className="text-xl text-slate-900 dark:text-white font-semibold">Compliance Board</h4>
<p className="text-sm text-slate-600 dark:text-slate-300">ISO 27001 Annex A.8.13 reflected as Green.</p>
</div>
<span className="font-mono text-xs text-amber-600 dark:text-amber-500 font-mono">Status: 99.4%</span>
</div>
{/*  Step 6  */}
<div className="p-6 rounded-xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between space-y-space-sm hover:shadow-md transition-shadow">
<div className="space-y-space-xs">
<span className="font-mono text-xs text-teal-600 dark:text-teal-400 font-bold">06 / VERIFIED</span>
<div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-amber-600 dark:text-amber-500">
<Circle className="h-5 w-5 shrink-0" />
</div>
<h4 className="text-xl text-slate-900 dark:text-white font-semibold">Auditor Evidence</h4>
<p className="text-sm text-slate-600 dark:text-slate-300">Immutable hash stored in Evidence Vault.</p>
</div>
<span className="font-mono text-xs text-slate-900 dark:text-white font-mono">ev-drill-2026</span>
</div>
</div>
{/*  Additional visual element to satisfy photo-rich guidance  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
<div className="rounded-xl overflow-hidden shadow-md relative h-64">
<img className="w-full h-full object-cover" data-alt="Technical audit team conducting a live SOC 2 and ISO 27001 readiness review in a modern glass-walled conference room with high-resolution monitors displaying risk scores and compliance telemetry in soft ambient light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwmADheLRX4BL2XPXGlJ8sHuYk2_DKGEKp2BFHM2PfacagOqMse21f3YebRlL1O3rqGF4fcS00rOcgxPoIV8oigZBIzD3BEBr5QYkQXb0quOIugNtmQ7jnHb-MSDSXHF5EtxLn7H9kLAWWsK3F2iFXTfte7OlGSL1eN9aoyLsJ_uGzs7CGlAXaMH1Wm_RFH1GaB2XLVv8UIXieM-DcJ8cxXRZexdbwXi_xNpBtp0M5xgHXha8jMo0hYQ" />
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/85 via-inverse-surface/30 to-transparent p-6 flex flex-col justify-end text-white">
<span className="text-xs uppercase tracking-wider text-amber-600 dark:text-amber-500-container">Auditor Portal Integration</span>
<p className="text-xl font-bold">Zero Friction External Audits</p>
<p className="text-sm text-slate-500">Provide read-only auditor scopes directly tied to evidence hashes instead of emailing unencrypted spreadsheets.</p>
</div>
</div>
<div className="rounded-xl overflow-hidden shadow-md relative h-64">
<img className="w-full h-full object-cover" data-alt="Cloud architect and chief information security officer validating an automated infrastructure risk matrix on modern portable workstations inside a sleek technical operations hub with vibrant warm orange accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXlxKTHJAqB34WBIPqOY_Cg9vqIvdeZTQRWcvE-Cxd4JHYLiL9AOdybhX7zo9S_fi86B7iq4SITwupCvn1-O9XUVliAkDLjDbohnOXsOjHsrZOslvLU9vkorKP_zfPSkZqOXO7A6My7UtgQziNqBwRdyd1EvMNIouMrVQHpg51E9gwWZvTAmusNWs5gooCstDzfwv0-JR-H43VYuHcnT1k_W1IoZWDkdWTZ2JAkWMKL5yDUELOtG1Nmg" />
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/85 via-inverse-surface/30 to-transparent p-6 flex flex-col justify-end text-white">
<span className="text-xs uppercase tracking-wider text-teal-600 dark:text-teal-400-fixed">Automated CAPA Remediation</span>
<p className="text-xl font-bold">Closed-Loop Incident Resolution</p>
<p className="text-sm text-slate-500">When tests detect policy drift, corrective and preventive action tickets auto-dispatch to Jira, GitHub, or ServiceNow.</p>
</div>
</div>
</div>
</div>
</section>
{/*  Bottom Conversion CTA Banner  */}
<section className="w-full px-8 py-16 md:py-24 bg-slate-200 dark:bg-navy-700">
<div className="max-w-7xl mx-auto rounded-xl bg-white dark:bg-[#0A111F] p-12 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8">
<div className="space-y-space-xs max-w-2xl">
<div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 text-xs">
<Circle className="h-5 w-5 shrink-0" />
<span className="">Zero Stale Spreadsheets</span>
</div>
<h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white font-bold">
          Tired of maintaining stale risk spreadsheets?
        </h2>
<p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Request a tailored walkthrough with our technical architects to see your AWS, GCP, and GitHub assets mapped into a dynamic 5x5 matrix within 48 hours.
        </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full lg:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-space-xl py-3.5 rounded-lg bg-teal-600 dark:bg-teal-500-container text-white text-sm font-semibold hover:bg-teal-600 dark:bg-teal-500 transition-all shadow-md" data-path="request-a-demo" href="#">
<Circle className="h-5 w-5 shrink-0" />
<span className="">Request a Tailored Walkthrough</span>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-space-lg py-3.5 rounded-lg bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white text-sm font-semibold hover:bg-slate-200 dark:bg-navy-700 transition-colors" data-path="compliance-board" href="#">
<span className="">View Compliance Board</span>
</a>
</div>
</div>
</section>
</div>

</main>
      <Footer />
    </div>
  );
}
