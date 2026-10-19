"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Users,
  Zap,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Grid,
  Network,
  Kanban,
  Link2,
  TrendingDown,
  Clock,
  AlertTriangle,
  ArrowRight,
  RotateCcw,
  FileCheck,
  ShieldAlert
} from "lucide-react";

export default function LeanSecurityTeamsPage() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <div className="min-h-screen bg-transparent text-slate-900 dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-slate-900 dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />
      <div className="flex flex-col w-full pt-16">
        {/* SECTION 1: HERO */}
        <section className="relative w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 pt-3 sm:pt-5 lg:pt-5 xl:pt-6 pb-2.5 sm:pb-4 lg:pb-4 xl:pb-5 overflow-hidden bg-grid-mesh-adaptive">
          {/* Decorative Glow Accents */}
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary/5 dark:bg-teal/10 blur-3xl pointer-events-none -z-10"></div>
          <div className="absolute left-1/3 bottom-0 w-72 h-72 rounded-full bg-secondary/10 dark:bg-amber/10 blur-3xl pointer-events-none -z-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-between items-start gap-4 sm:gap-5 w-full">
              <div className="flex flex-col gap-2.5 sm:gap-3.5 w-full">
                {/* Headline */}
                <h1 className="text-[24px] min-[360px]:text-[28px] min-[400px]:text-[32px] sm:text-4xl lg:text-[44px] xl:text-[48px] 2xl:text-[52px] text-slate-900 dark:text-white font-extrabold tracking-tight leading-tight text-justify sm:text-left w-full">
                  <span className="block sm:inline">Stop spreadsheet sprawl. </span>
                  <span className="block sm:inline">Run GRC with a </span>
                  <span className="block sm:inline text-primary">lean, connected workflow.</span>
                </h1>

                {/* Subhead */}
                <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed text-justify sm:text-left w-full">
                  When one or two practitioners manage risk, vendor reviews, and recurring testing, fragmented sheets cause instant drift. OMNiGRC unites your core governance in one operating layer.
                </p>

                {/* CTA cluster */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-2.5 sm:gap-4 pt-1 w-full">
                  <a
                    href="#operating-model"
                    className="w-full sm:w-auto max-w-sm inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-lg bg-primary text-white font-semibold text-xs sm:text-sm hover:bg-primary/90 transition-all shadow-md text-center"
                  >
                    <span>See the GRC Workflow</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </a>
                  <Link
                    href="/demo"
                    className="w-full sm:w-auto max-w-sm inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-lg bg-white/80 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-900 dark:text-white font-semibold text-xs sm:text-sm transition-all border border-slate-200 dark:border-navy-700 shadow-sm text-center"
                  >
                    <Calendar className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0" />
                    <span>Request a Walkthrough</span>
                  </Link>
                </div>
              </div>

              {/* Value Badges Bar */}
              <div className="pt-2 flex flex-wrap items-center justify-start gap-2 w-full">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/85 dark:bg-[#16233F]/90 border border-slate-200 dark:border-navy-700 text-slate-900 dark:text-slate-200 font-mono text-[10px] sm:text-xs shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Zero Consultant Bloat</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/85 dark:bg-[#16233F]/90 border border-slate-200 dark:border-navy-700 text-slate-900 dark:text-slate-200 font-mono text-[10px] sm:text-xs shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Human Verification Required</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/85 dark:bg-[#16233F]/90 border border-slate-200 dark:border-navy-700 text-slate-900 dark:text-slate-200 font-mono text-[10px] sm:text-xs shadow-xs">
                  <Terminal className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Structured Application Logging</span>
                </div>
              </div>
            </div>

            {/* Hero Visual: Real-time Snapshot Card */}
            <div className="lg:col-span-5 relative flex flex-col justify-center">
              <div className="p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-[#16233F]/95 shadow-xl flex flex-col justify-between gap-3.5 border border-slate-300 dark:border-navy-700 h-full backdrop-blur-sm">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-navy-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-mono text-xs font-semibold text-slate-900 dark:text-white">LEAN OPS TELEMETRY</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300">
                    SCOPE: PRIMARY
                  </span>
                </div>

                {/* Mini Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] border border-slate-200/60 dark:border-navy-800 flex flex-col">
                    <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">Active Safeguards</span>
                    <span className="text-xl font-bold text-slate-900 dark:text-white mt-1">48 / 48</span>
                    <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 mt-0.5">Human Ratified</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] border border-slate-200/60 dark:border-navy-800 flex flex-col">
                    <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">Next Audit Cadence</span>
                    <span className="text-xl font-bold text-primary mt-1">14 Days</span>
                    <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">SOC 2 Type II Window</span>
                  </div>
                </div>

                {/* Real-time Event Strip */}
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-[#0A111F] text-slate-900 dark:text-slate-100 flex flex-col gap-1 border border-slate-200/60 dark:border-navy-800 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-2xs">
                    <span>SYSTEM TRACE</span>
                    <span>LOG RECORD #08821</span>
                  </div>
                  <div className="text-emerald-600 dark:text-emerald-400 font-semibold truncate">
                    ✓ CTRL-012: DB Snapshot verification recorded
                  </div>
                  <div className="text-2xs text-slate-500 dark:text-slate-400">
                    Sign-off: security-lead@internal • Verified
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-xs font-medium text-slate-900 dark:text-white">Compliance Readiness</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold">
                    Nominal State
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE CAPACITY REALITY (PAIN POINTS) */}
        <section className="w-full bg-slate-50 dark:bg-[#16233F]/60 py-3 sm:py-4.5 lg:py-5 xl:py-6 border-y border-slate-200 dark:border-navy-700/60">
          <div className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
            <div className="w-full mb-3.5 sm:mb-5 text-left">
              <div className="font-mono text-xs text-primary uppercase tracking-wider mb-1 font-semibold text-left">
                THE CAPACITY REALITY
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-left">
                Limited team bandwidth shouldn&apos;t mean pre-audit panic.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed text-left text-justify max-w-3xl">
                Lean teams spend most of their time reconciling stale rows instead of safeguarding infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-stretch">
              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between border border-slate-300 dark:border-navy-700">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Grid className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-left">Disconnected Spreadsheets</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left text-justify">
                    Risk registers in Excel drift from actual asset reality within days. Cloud resources scale up, but formulas stay frozen in v3_final.xlsx.
                  </p>
                </div>
                <div className="mt-5 sm:mt-6 pt-3 border-t border-slate-100 dark:border-navy-800 font-mono text-xs text-primary flex items-center gap-1.5">
                  <TrendingDown className="w-4 h-4 shrink-0" />
                  <span>Result: Unmapped attack surfaces</span>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between border border-slate-300 dark:border-navy-700">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-left">Scattered Evidence Work</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left text-justify">
                    Chasing engineers for screenshots over messaging and email creates friction. Assets change, timestamps mismatch, and auditor trust erodes.
                  </p>
                </div>
                <div className="mt-5 sm:mt-6 pt-3 border-t border-slate-100 dark:border-navy-800 font-mono text-xs text-primary flex items-center gap-1.5">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>Result: Hours lost per audit cycle</span>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between border border-slate-300 dark:border-navy-700">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-left">Missed Cadences</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left text-justify">
                    Recurring access reviews, backup recovery drills, and policy sign-offs slip silently without an operational cadence scheduler.
                  </p>
                </div>
                <div className="mt-5 sm:mt-6 pt-3 border-t border-slate-100 dark:border-navy-800 font-mono text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Result: Sudden audit non-conformities</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: HOW OMNiGRC ADDRESSES LEAN CONSTRAINTS */}
        <section className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 py-3 sm:py-4.5 lg:py-5 xl:py-6">
          <div className="w-full mb-3.5 sm:mb-5 text-left">
            <div className="font-mono text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1 font-semibold text-left">
              ENGINEERED FOR LEAN TEAMS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-left">
              One unified engine. Connected risk, assets, controls, and testing.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed text-left text-justify max-w-3xl">
              Built so a solo practitioner can maintain enterprise-grade posture without adding administrative headcount.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch">
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm flex flex-col justify-between gap-4 border border-slate-300 dark:border-navy-700">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Grid className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white border border-slate-200 dark:border-navy-700">
                    MODULE: RSK-CORE
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-left">5×5 Risk Scoring &amp; Direct Asset Linkage</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left text-justify">
                  Quantify residual risk with intuitive likelihood and impact matrices. Every risk directly binds to cloud instances, SaaS vendors, or data tiers so you immediately understand business blast radius.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-200/60 dark:border-navy-800">
                <span className="text-slate-600 dark:text-slate-400">Residual Score Threshold: ≤ 8 (Tolerable)</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm flex flex-col justify-between gap-4 border border-slate-300 dark:border-navy-700">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Network className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white border border-slate-200 dark:border-navy-700">
                    ADVISORY AI ASSISTED
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-left">Map Once Across Standards</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left text-justify">
                  Define one baseline security safeguard (e.g., MFA Enforcement) and let advisory AI suggest mappings across ISO 27001, SOC 2, HIPAA, and DPDP. Human review is strictly mandatory before any framework commits.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-200/60 dark:border-navy-800">
                <span className="text-slate-600 dark:text-slate-400">1 Safeguard → 4 Frameworks</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Human Review Required</span>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm flex flex-col justify-between gap-4 border border-slate-300 dark:border-navy-700">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Kanban className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white border border-slate-200 dark:border-navy-700">
                    CADENCE BOARD
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-left">Rolling 30/60/90-Day Compliance Board</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left text-justify">
                  A pragmatic Kanban-style cadence tracker for monthly user access reviews, quarterly backup drills, and annual third-party penetration tests. Prevent forgotten operational controls.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-200/60 dark:border-navy-800">
                <span className="text-slate-600 dark:text-slate-400">Rolling Cadences Scheduled</span>
                <span className="text-primary font-semibold">Scheduled Alerts</span>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm flex flex-col justify-between gap-4 border border-slate-300 dark:border-navy-700">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Link2 className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white border border-slate-200 dark:border-navy-700">
                    EVIDENCE INDEX
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-left">Centralized Evidence References</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left text-justify">
                  Index external document URLs, S3 buckets, Datadog dashboard snapshots, and verification logs without file storage bloat. Your cloud storage remains your single source of truth.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-200/60 dark:border-navy-800">
                <span className="text-slate-600 dark:text-slate-400">Zero Raw Binary Upload Overhead</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Reference Validated</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: INTERACTIVE WORKFLOW VISUALIZATION */}
        <section className="w-full bg-slate-50 dark:bg-[#16233F]/60 py-3 sm:py-4.5 lg:py-5 xl:py-6 border-y border-slate-200 dark:border-navy-700/60" id="operating-model">
          <div className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-3.5 sm:mb-5">
              <div>
                <div className="font-mono text-xs text-primary uppercase tracking-wider mb-1 font-semibold text-left">
                  ILLUSTRATIVE OPERATING WORKFLOW (DEMO DATA)
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-left">
                  Risk → Controls → Testing → Evidence
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1.5 max-w-xl leading-relaxed text-left text-justify">
                  Click each step below to inspect how a real database backup failure incident flows through the OMNiGRC engine.
                </p>
              </div>
              <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white border border-slate-200 dark:border-navy-700 self-start">
                Interactive Pipeline Simulator
              </span>
            </div>

            {/* 4-Step Interactive Pipeline Strip */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3.5 sm:mb-5">
              <button
                onClick={() => setActiveStep(1)}
                className={`text-left p-4 sm:p-5 rounded-2xl shadow-md transition-all flex flex-col gap-1 border ${
                  activeStep === 1
                    ? "bg-white dark:bg-[#0A111F] border-primary ring-2 ring-primary/20 text-slate-900 dark:text-white"
                    : "bg-white dark:bg-[#0A111F] border-slate-200 dark:border-navy-700 hover:border-slate-300 dark:hover:border-navy-600 text-slate-900 dark:text-white opacity-75 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded ${activeStep === 1 ? "bg-primary text-white" : "bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white"}`}>
                    STEP 01
                  </span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 font-semibold">IDENTIFY</span>
                </div>
                <span className="text-base font-bold text-slate-900 dark:text-white">1. Risk Logging</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">RSK-042: Database failure</span>
              </button>

              <button
                onClick={() => setActiveStep(2)}
                className={`text-left p-4 sm:p-5 rounded-2xl shadow-md transition-all flex flex-col gap-1 border ${
                  activeStep === 2
                    ? "bg-white dark:bg-[#0A111F] border-emerald-500 ring-2 ring-emerald-500/20 text-slate-900 dark:text-white"
                    : "bg-white dark:bg-[#0A111F] border-slate-200 dark:border-navy-700 hover:border-slate-300 dark:hover:border-navy-600 text-slate-900 dark:text-white opacity-75 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded ${activeStep === 2 ? "bg-emerald-600 dark:bg-emerald-500 text-white" : "bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white"}`}>
                    STEP 02
                  </span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 font-semibold">MAP</span>
                </div>
                <span className="text-base font-bold text-slate-900 dark:text-white">2. Control Link</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">CTRL-012 Snapshot Drill</span>
              </button>

              <button
                onClick={() => setActiveStep(3)}
                className={`text-left p-4 sm:p-5 rounded-2xl shadow-md transition-all flex flex-col gap-1 border ${
                  activeStep === 3
                    ? "bg-white dark:bg-[#0A111F] border-primary ring-2 ring-primary/20 text-slate-900 dark:text-white"
                    : "bg-white dark:bg-[#0A111F] border-slate-200 dark:border-navy-700 hover:border-slate-300 dark:hover:border-navy-600 text-slate-900 dark:text-white opacity-75 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded ${activeStep === 3 ? "bg-primary text-white" : "bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white"}`}>
                    STEP 03
                  </span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 font-semibold">OPERATE</span>
                </div>
                <span className="text-base font-bold text-slate-900 dark:text-white">3. Cadence Testing</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">90-Day Cadence board</span>
              </button>

              <button
                onClick={() => setActiveStep(4)}
                className={`text-left p-4 sm:p-5 rounded-2xl shadow-md transition-all flex flex-col gap-1 border ${
                  activeStep === 4
                    ? "bg-white dark:bg-[#0A111F] border-emerald-500 ring-2 ring-emerald-500/20 text-slate-900 dark:text-white"
                    : "bg-white dark:bg-[#0A111F] border-slate-200 dark:border-navy-700 hover:border-slate-300 dark:hover:border-navy-600 text-slate-900 dark:text-white opacity-75 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded ${activeStep === 4 ? "bg-emerald-600 dark:bg-emerald-500 text-white" : "bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white"}`}>
                    STEP 04
                  </span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 font-semibold">AUDIT</span>
                </div>
                <span className="text-base font-bold text-slate-900 dark:text-white">4. Evidence Reference</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">External Cloud URL log</span>
              </button>
            </div>

            {/* Step Content Display Box */}
            <div className="p-5 sm:p-6 lg:p-7 rounded-2xl bg-white dark:bg-[#0A111F] shadow-lg border border-slate-300 dark:border-navy-700">
              {activeStep === 1 && (
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                  <div className="flex flex-col gap-3 max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-rose-500/15 text-rose-600 dark:text-rose-400 font-semibold">
                        RISK RECORD: RSK-042
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">5×5 Score: 12 (Moderate/High)</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-left">Database Backup Failure &amp; Data Exposure</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left text-justify">
                      The primary customer transaction cluster (Postgres-Prod-01) experiences data loss in the event of an unmonitored snapshot outage or replication lag.
                    </p>
                    <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#16233F] border border-slate-200/60 dark:border-navy-800">
                        <span className="text-slate-500 dark:text-slate-400">Likelihood (3/5)</span>
                        <p className="font-sans text-xs text-slate-900 dark:text-white mt-1 font-medium text-left">Operational glitch potential</p>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#16233F] border border-slate-200/60 dark:border-navy-800">
                        <span className="text-slate-500 dark:text-slate-400">Impact (4/5)</span>
                        <p className="font-sans text-xs text-slate-900 dark:text-white mt-1 font-medium text-left">Service disruption &amp; SLA risk</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-96 p-5 rounded-xl bg-slate-50 dark:bg-[#16233F] flex flex-col gap-3 border border-slate-200/60 dark:border-navy-800">
                    <span className="font-mono text-xs text-slate-900 dark:text-white uppercase font-bold text-left">Bound Cloud Assets</span>
                    <div className="p-2.5 rounded-lg bg-white dark:bg-[#0A111F] flex items-center justify-between text-xs font-mono border border-slate-200/60 dark:border-navy-800">
                      <span className="text-slate-900 dark:text-white font-medium truncate">aws:rds:us-east-1:pg-cluster-01</span>
                      <Link2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 ml-2" />
                    </div>
                    <div className="p-2.5 rounded-lg bg-white dark:bg-[#0A111F] flex items-center justify-between text-xs font-mono border border-slate-200/60 dark:border-navy-800">
                      <span className="text-slate-900 dark:text-white font-medium truncate">aws:s3:us-east-1:wal-archive-bucket</span>
                      <Link2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 ml-2" />
                    </div>
                    <button
                      onClick={() => setActiveStep(2)}
                      className="mt-2 w-full py-2.5 rounded-lg bg-primary text-white font-medium text-xs hover:bg-primary/90 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <span>Inspect Linked Safeguards</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                  <div className="flex flex-col gap-3 max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-semibold">
                        SAFEGUARD: CTRL-012
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Advisory Multi-Mapping</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-left">Automated DB Snapshot &amp; Periodic Restoration Drill</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left text-justify">
                      Every production database must execute automated nightly snapshots retained for 35 days, coupled with a mandatory quarterly point-in-time test restoration to staging.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                      <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white border border-slate-200 dark:border-navy-700">SOC 2 CC9.1</span>
                      <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white border border-slate-200 dark:border-navy-700">ISO 27001:2022 A.8.13</span>
                      <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white border border-slate-200 dark:border-navy-700">HIPAA §164.308(a)(7)</span>
                    </div>
                  </div>

                  <div className="w-full lg:w-96 p-5 rounded-xl bg-slate-50 dark:bg-[#16233F] flex flex-col gap-3 border border-slate-200/60 dark:border-navy-800">
                    <span className="font-mono text-xs text-slate-900 dark:text-white uppercase font-bold text-left">Safeguard Ownership</span>
                    <div className="p-3 rounded-lg bg-white dark:bg-[#0A111F] flex flex-col text-xs border border-slate-200/60 dark:border-navy-800 text-left">
                      <span className="font-bold text-slate-900 dark:text-white">Assigned Custodian: DevOps Lead</span>
                      <span className="text-slate-500 dark:text-slate-400 mt-0.5">Automated webhook sync enabled</span>
                    </div>
                    <button
                      onClick={() => setActiveStep(3)}
                      className="mt-2 w-full py-2.5 rounded-lg bg-primary text-white font-medium text-xs hover:bg-primary/90 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <span>View Cadence Schedule</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                  <div className="flex flex-col gap-3 max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-primary/15 text-primary font-semibold">
                        CADENCE: 90-DAY INTERVAL
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Current Cycle: Active Quarter</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-left">Quarterly Restoration Drill Executed</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left text-justify">
                      Task automatically spawned on the Lean Cadence Board. Practitioner initiated automated snapshot restore on staging, verified DB integrity via script, and logged run logs.
                    </p>
                    <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-mono text-xs border border-emerald-500/20 font-semibold text-left">
                      ✓ Drill completed: RTO measured at 14m 20s (Target: &lt; 1 hour). Passed.
                    </div>
                  </div>

                  <div className="w-full lg:w-96 p-5 rounded-xl bg-slate-50 dark:bg-[#16233F] flex flex-col gap-3 border border-slate-200/60 dark:border-navy-800">
                    <span className="font-mono text-xs text-slate-900 dark:text-white uppercase font-bold text-left">Task Status</span>
                    <div className="p-3 rounded-lg bg-white dark:bg-[#0A111F] flex items-center justify-between text-xs font-mono border border-slate-200/60 dark:border-navy-800">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">STATUS: VERIFIED BY LEAD</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    </div>
                    <button
                      onClick={() => setActiveStep(4)}
                      className="mt-2 w-full py-2.5 rounded-lg bg-primary text-white font-medium text-xs hover:bg-primary/90 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <span>Inspect Indexed Evidence</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {activeStep === 4 && (
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                  <div className="flex flex-col gap-3 max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white font-semibold border border-slate-200 dark:border-navy-700">
                        RECORD LOG: EV-2025-03-Q1
                      </span>
                      <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono font-semibold">Zero-Knowledge Reference</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-left">External Cloud Backup Log URL Indexed</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left text-justify">
                      No confidential SQL dumps are stored in OMNiGRC. The engine saves the verified CloudWatch / Datadog run-URL, accompanied by an integrity hash for auditor inspection.
                    </p>
                    <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-[#16233F] text-slate-900 dark:text-white flex flex-col gap-1 font-mono text-xs border border-slate-200/60 dark:border-navy-800 text-left">
                      <span className="text-slate-500 dark:text-slate-400">URI: s3://telemetry-evidence-vault/restorations/2025-q1-pg.log</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">HASH: c837f482a...9811b7a6 (WAL Verified)</span>
                      <span className="text-slate-500 dark:text-slate-400 text-2xs">Attested by: SecOps Lead on 2026-03-12 14:32 UTC</span>
                    </div>
                  </div>

                  <div className="w-full lg:w-96 p-5 rounded-xl bg-slate-50 dark:bg-[#16233F] flex flex-col gap-3 border border-slate-200/60 dark:border-navy-800">
                    <span className="font-mono text-xs text-slate-900 dark:text-white uppercase font-bold text-left">Auditor Access Ready</span>
                    <div className="p-3 rounded-lg bg-white dark:bg-[#0A111F] flex flex-col text-xs border border-slate-200/60 dark:border-navy-800 text-left">
                      <span className="font-bold text-slate-900 dark:text-white">Auditor Read-Only Export</span>
                      <span className="text-slate-500 dark:text-slate-400 mt-0.5">Ready for export to auditor workpaper dossier.</span>
                    </div>
                    <button
                      onClick={() => setActiveStep(1)}
                      className="mt-2 w-full py-2.5 rounded-lg bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-900 dark:text-white font-medium text-xs transition-all flex items-center justify-center gap-1.5 border border-slate-200 dark:border-navy-700"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                      <span>Reset Pipeline Simulator</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 5: RELEVANT MODULES TO EXPLORE NEXT */}
        <section className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 py-3 sm:py-4.5 lg:py-5 xl:py-6">
          <div className="w-full mb-3.5 sm:mb-5 text-left">
            <div className="font-mono text-xs text-primary uppercase tracking-wider mb-1 font-semibold text-left">
              MODULAR ARCHITECTURE
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-left">
              Explore Core GRC Workflows
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed text-left text-justify max-w-3xl">
              Adopt modules incrementally as your lean team expands governance breadth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
            <Link
              href="/products/risk-register"
              className="group p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm hover:shadow-md transition-all border border-slate-300 dark:border-navy-700 flex flex-col justify-between"
            >
              <div>
                <ShieldAlert className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-left">Risk Register</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left text-justify">
                  5x5 scoring bound directly to cloud infrastructure assets.
                </p>
              </div>
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Inspect Module <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/products/compliance-board"
              className="group p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm hover:shadow-md transition-all border border-slate-300 dark:border-navy-700 flex flex-col justify-between"
            >
              <div>
                <Kanban className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-3" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-left">Compliance Board</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left text-justify">
                  30/60/90-day task tracking for recurring operational cadences.
                </p>
              </div>
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Inspect Module <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/products/control-mapping"
              className="group p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm hover:shadow-md transition-all border border-slate-300 dark:border-navy-700 flex flex-col justify-between"
            >
              <div>
                <Network className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-left">Control Mapping</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left text-justify">
                  Map-once crosswalk across SOC 2, ISO 27001, HIPAA, and DPDP.
                </p>
              </div>
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Inspect Module <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/products/evidence"
              className="group p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm hover:shadow-md transition-all border border-slate-300 dark:border-navy-700 flex flex-col justify-between"
            >
              <div>
                <FileCheck className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-3" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-left">Evidence Index</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left text-justify">
                  Index external cloud URL pointers without binary storage overhead.
                </p>
              </div>
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Inspect Module <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </section>

        {/* SECTION 6: BOTTOM CTA */}
        <section className="w-full bg-slate-50 dark:bg-[#16233F]/60 py-3.5 sm:py-5 lg:py-6 xl:py-7 border-t border-slate-200 dark:border-navy-700/60">
          <div className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
            <div className="bg-gradient-to-br from-slate-100 to-slate-50 dark:from-[#0A111F] dark:to-[#16233F] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-slate-300 dark:border-navy-700 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1 min-w-0 pr-4 sm:pr-6 text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 sm:mb-3 text-left leading-tight">
                  Ready to bring order to your security operations?
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 text-left text-justify leading-relaxed max-w-2xl">
                  Experience how OMNiGRC helps lean security teams maintain enterprise-grade compliance without the burnout.
                </p>
              </div>
              <div className="flex sm:justify-start md:justify-end shrink-0">
                <Link
                  href="/demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#F15E1C] to-[#D4521A] hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-md text-xs sm:text-sm text-center whitespace-nowrap"
                >
                  <Zap className="w-4 h-4" />
                  <span>Schedule Lean Team Walkthrough</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
