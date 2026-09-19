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
  Check,
  FileCheck,
  ShieldAlert
} from "lucide-react";

export default function LeanSecurityTeamsPage() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <div className="min-h-screen bg-background text-on-surface antialiased flex flex-col justify-between">
      <Header />
      <div className="flex flex-col w-full">
        {/* SECTION 1: HERO */}
        <section className="relative w-full max-w-7xl mx-auto px-6 pt-28 md:pt-32 pb-16 overflow-hidden">
          {/* Decorative Glow Accents */}
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none -z-10"></div>
          <div className="absolute left-1/3 bottom-0 w-72 h-72 rounded-full bg-secondary/10 blur-3xl pointer-events-none -z-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col items-start gap-5">
              {/* Eyebrow Pill - Positioned safely below navbar */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-primary font-mono text-xs uppercase tracking-wider border border-outline-variant/30">
                <Users className="w-4 h-4" />
                <span>SOLUTIONS FOR LEAN SECURITY TEAMS</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-[50px] lg:leading-[58px] text-on-surface font-bold tracking-tight">
                Stop spreadsheet sprawl. Run GRC with a <span className="text-primary">lean, connected workflow</span>.
              </h1>

              {/* Subhead */}
              <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
                When one or two practitioners manage risk, vendor reviews, and recurring testing, fragmented sheets cause instant drift. OMNiGRC unites your core governance in one operating layer.
              </p>

              {/* CTA cluster */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#operating-model"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-on-primary font-medium text-sm hover:bg-primary/90 transition-all shadow-md"
                >
                  <span>See the GRC Workflow</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-medium text-sm transition-all border border-outline-variant/30"
                >
                  <Calendar className="w-4 h-4 text-on-surface-variant" />
                  <span>Request a Walkthrough</span>
                </Link>
              </div>

              {/* Value Badges Bar */}
              <div className="pt-4 flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/20 text-on-surface font-mono text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                  <span>Zero Consultant Bloat</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/20 text-on-surface font-mono text-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                  <span>Human Verification Required</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/20 text-on-surface font-mono text-xs">
                  <Terminal className="w-3.5 h-3.5 text-secondary" />
                  <span>Structured Application Logging</span>
                </div>
              </div>
            </div>

            {/* Hero Visual: Real-time Snapshot Card */}
            <div className="lg:col-span-5 relative">
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-xl flex flex-col gap-4 border border-outline-variant/30">
                <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
                    <span className="font-mono text-xs font-semibold text-on-surface">LEAN OPS TELEMETRY</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                    SCOPE: PRIMARY
                  </span>
                </div>

                {/* Mini Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20 flex flex-col">
                    <span className="font-mono text-[11px] text-on-surface-variant">Active Safeguards</span>
                    <span className="text-xl font-bold text-on-surface mt-1">48 / 48</span>
                    <span className="font-mono text-[10px] text-secondary mt-0.5">Human Ratified</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20 flex flex-col">
                    <span className="font-mono text-[11px] text-on-surface-variant">Next Audit Cadence</span>
                    <span className="text-xl font-bold text-primary mt-1">14 Days</span>
                    <span className="font-mono text-[10px] text-on-surface-variant mt-0.5">SOC 2 Type II Window</span>
                  </div>
                </div>

                {/* Real-time Event Strip */}
                <div className="p-3.5 rounded-xl bg-surface-container text-on-surface flex flex-col gap-1 border border-outline-variant/30 font-mono text-xs">
                  <div className="flex items-center justify-between text-on-surface-variant text-[11px]">
                    <span>SYSTEM TRACE</span>
                    <span>LOG RECORD #08821</span>
                  </div>
                  <div className="text-secondary font-semibold truncate">
                    ✓ CTRL-012: DB Snapshot verification recorded
                  </div>
                  <div className="text-[11px] text-on-surface-variant">
                    Sign-off: security-lead@internal • Verified
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span className="text-xs font-medium text-on-surface">Compliance Readiness</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-secondary/15 text-secondary font-mono text-xs font-semibold">
                    Nominal State
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE CAPACITY REALITY (PAIN POINTS) */}
        <section className="w-full bg-surface-container-low py-20 border-y border-outline-variant/20">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <div className="font-mono text-xs text-primary uppercase tracking-wider mb-2 font-semibold">
                THE CAPACITY REALITY
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-on-surface">
                Limited team bandwidth shouldn't mean pre-audit panic.
              </h2>
              <p className="text-base text-on-surface-variant mt-3 leading-relaxed">
                Lean teams spend most of their time reconciling stale rows instead of safeguarding infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Challenge Card 1 */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/30">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Grid className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-on-surface mb-2">Disconnected Spreadsheets</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Risk registers in Excel drift from actual asset reality within days. Cloud resources scale up, but formulas stay frozen in v3_final.xlsx.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-outline-variant/20 font-mono text-xs text-primary flex items-center gap-1.5">
                  <TrendingDown className="w-4 h-4 shrink-0" />
                  <span>Result: Unmapped attack surfaces</span>
                </div>
              </div>

              {/* Challenge Card 2 */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/30">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-on-surface mb-2">Scattered Evidence Work</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Chasing engineers for screenshots over messaging and email creates friction. Assets change, timestamps mismatch, and auditor trust erodes.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-outline-variant/20 font-mono text-xs text-primary flex items-center gap-1.5">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>Result: Hours lost per audit cycle</span>
                </div>
              </div>

              {/* Challenge Card 3 */}
              <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/30">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-on-surface mb-2">Missed Cadences</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Recurring access reviews, backup recovery drills, and policy sign-offs slip silently without an operational cadence scheduler.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-outline-variant/20 font-mono text-xs text-primary flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Result: Sudden audit non-conformities</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: HOW OMNiGRC ADDRESSES LEAN CONSTRAINTS */}
        <section className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mb-12">
            <div className="font-mono text-xs text-secondary uppercase tracking-wider mb-2 font-semibold">
              ENGINEERED FOR LEAN TEAMS
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-on-surface">
              One unified engine. Connected risk, assets, controls, and testing.
            </h2>
            <p className="text-base text-on-surface-variant mt-3 leading-relaxed">
              Built so a solo practitioner can maintain enterprise-grade posture without adding administrative headcount.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Capability 1 */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-4 border border-outline-variant/30">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                    <Grid className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-surface-container text-on-surface border border-outline-variant/30">
                    MODULE: RSK-CORE
                  </span>
                </div>
                <h3 className="text-lg font-bold text-on-surface mb-2">5×5 Risk Scoring &amp; Direct Asset Linkage</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Quantify residual risk with intuitive likelihood and impact matrices. Every risk directly binds to cloud instances, SaaS vendors, or data tiers so you immediately understand business blast radius.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between font-mono text-xs border border-outline-variant/20">
                <span className="text-on-surface-variant">Residual Score Threshold: ≤ 8 (Tolerable)</span>
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
              </div>
            </div>

            {/* Capability 2 */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-4 border border-outline-variant/30">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                    <Network className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-surface-container text-on-surface border border-outline-variant/30">
                    ADVISORY AI ASSISTED
                  </span>
                </div>
                <h3 className="text-lg font-bold text-on-surface mb-2">Map Once Across Standards</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Define one baseline security safeguard (e.g., MFA Enforcement) and let advisory AI suggest mappings across ISO 27001, SOC 2, HIPAA, and DPDP. Human review is strictly mandatory before any framework commits.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between font-mono text-xs border border-outline-variant/20">
                <span className="text-on-surface-variant">1 Safeguard → 4 Frameworks</span>
                <span className="text-secondary font-semibold">Human Review Required</span>
              </div>
            </div>

            {/* Capability 3 */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-4 border border-outline-variant/30">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                    <Kanban className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-surface-container text-on-surface border border-outline-variant/30">
                    CADENCE BOARD
                  </span>
                </div>
                <h3 className="text-lg font-bold text-on-surface mb-2">Rolling 30/60/90-Day Compliance Board</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  A pragmatic Kanban-style cadence tracker for monthly user access reviews, quarterly backup drills, and annual third-party penetration tests. Prevent forgotten operational controls.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between font-mono text-xs border border-outline-variant/20">
                <span className="text-on-surface-variant">Rolling Cadences Scheduled</span>
                <span className="text-primary font-semibold">Scheduled Alerts</span>
              </div>
            </div>

            {/* Capability 4 */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-4 border border-outline-variant/30">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                    <Link2 className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-surface-container text-on-surface border border-outline-variant/30">
                    EVIDENCE INDEX
                  </span>
                </div>
                <h3 className="text-lg font-bold text-on-surface mb-2">Centralized Evidence References</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Index external document URLs, S3 buckets, Datadog dashboard snapshots, and verification logs without file storage bloat. Your cloud storage remains your single source of truth.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between font-mono text-xs border border-outline-variant/20">
                <span className="text-on-surface-variant">Zero Raw Binary Upload Overhead</span>
                <span className="text-secondary font-semibold">Reference Validated</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: INTERACTIVE WORKFLOW VISUALIZATION (Faithful Reconstruction of 4 Panes) */}
        <section className="w-full bg-surface-container py-24 border-y border-outline-variant/20" id="operating-model">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <div className="font-mono text-xs text-primary uppercase tracking-wider mb-2 font-semibold">
                  ILLUSTRATIVE OPERATING WORKFLOW (DEMO DATA)
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-on-surface">
                  Risk → Controls → Testing → Evidence
                </h2>
                <p className="text-base text-on-surface-variant mt-2 max-w-xl leading-relaxed">
                  Click each step below to inspect how a real database backup failure incident flows through the OMNiGRC engine.
                </p>
              </div>
              <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-surface-container-highest text-on-surface border border-outline-variant/30 self-start">
                Interactive Pipeline Simulator
              </span>
            </div>

            {/* 4-Step Interactive Pipeline Strip */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {/* Step 1 Tab Button */}
              <button
                onClick={() => setActiveStep(1)}
                className={`text-left p-5 rounded-2xl shadow-md transition-all flex flex-col gap-1 border ${
                  activeStep === 1
                    ? "bg-surface-container-lowest border-primary ring-2 ring-primary/20"
                    : "bg-surface-container-lowest border-outline-variant/30 hover:border-outline-variant opacity-75 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded ${activeStep === 1 ? "bg-primary text-on-primary" : "bg-surface-container text-on-surface"}`}>
                    STEP 01
                  </span>
                  <span className="font-mono text-xs text-on-surface-variant font-semibold">IDENTIFY</span>
                </div>
                <span className="text-base font-bold text-on-surface">1. Risk Logging</span>
                <span className="text-xs text-on-surface-variant font-mono">RSK-042: Database failure</span>
              </button>

              {/* Step 2 Tab Button */}
              <button
                onClick={() => setActiveStep(2)}
                className={`text-left p-5 rounded-2xl shadow-md transition-all flex flex-col gap-1 border ${
                  activeStep === 2
                    ? "bg-surface-container-lowest border-secondary ring-2 ring-secondary/20"
                    : "bg-surface-container-lowest border-outline-variant/30 hover:border-outline-variant opacity-75 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded ${activeStep === 2 ? "bg-secondary text-on-secondary" : "bg-surface-container text-on-surface"}`}>
                    STEP 02
                  </span>
                  <span className="font-mono text-xs text-on-surface-variant font-semibold">MAP</span>
                </div>
                <span className="text-base font-bold text-on-surface">2. Control Link</span>
                <span className="text-xs text-on-surface-variant font-mono">CTRL-012 Snapshot Drill</span>
              </button>

              {/* Step 3 Tab Button */}
              <button
                onClick={() => setActiveStep(3)}
                className={`text-left p-5 rounded-2xl shadow-md transition-all flex flex-col gap-1 border ${
                  activeStep === 3
                    ? "bg-surface-container-lowest border-primary ring-2 ring-primary/20"
                    : "bg-surface-container-lowest border-outline-variant/30 hover:border-outline-variant opacity-75 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded ${activeStep === 3 ? "bg-primary text-on-primary" : "bg-surface-container text-on-surface"}`}>
                    STEP 03
                  </span>
                  <span className="font-mono text-xs text-on-surface-variant font-semibold">OPERATE</span>
                </div>
                <span className="text-base font-bold text-on-surface">3. Cadence Testing</span>
                <span className="text-xs text-on-surface-variant font-mono">90-Day Cadence board</span>
              </button>

              {/* Step 4 Tab Button */}
              <button
                onClick={() => setActiveStep(4)}
                className={`text-left p-5 rounded-2xl shadow-md transition-all flex flex-col gap-1 border ${
                  activeStep === 4
                    ? "bg-surface-container-lowest border-secondary ring-2 ring-secondary/20"
                    : "bg-surface-container-lowest border-outline-variant/30 hover:border-outline-variant opacity-75 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded ${activeStep === 4 ? "bg-secondary text-on-secondary" : "bg-surface-container text-on-surface"}`}>
                    STEP 04
                  </span>
                  <span className="font-mono text-xs text-on-surface-variant font-semibold">AUDIT</span>
                </div>
                <span className="text-base font-bold text-on-surface">4. Evidence Reference</span>
                <span className="text-xs text-on-surface-variant font-mono">External Cloud URL log</span>
              </button>
            </div>

            {/* Step Content Display Box (Revealed based on activeStep) */}
            <div className="p-6 md:p-8 rounded-2xl bg-surface-container-lowest shadow-lg border border-outline-variant/30">
              {activeStep === 1 && (
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                  <div className="flex flex-col gap-3 max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-error/15 text-error font-semibold">
                        RISK RECORD: RSK-042
                      </span>
                      <span className="text-xs text-on-surface-variant font-mono">5×5 Score: 12 (Moderate/High)</span>
                    </div>
                    <h3 className="text-2xl font-bold text-on-surface">Database Backup Failure &amp; Data Exposure</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      The primary customer transaction cluster (Postgres-Prod-01) experiences data loss in the event of an unmonitored snapshot outage or replication lag.
                    </p>
                    <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                      <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
                        <span className="text-on-surface-variant">Likelihood (3/5)</span>
                        <p className="font-sans text-xs text-on-surface mt-1 font-medium">Operational glitch potential</p>
                      </div>
                      <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
                        <span className="text-on-surface-variant">Impact (4/5)</span>
                        <p className="font-sans text-xs text-on-surface mt-1 font-medium">Service disruption &amp; SLA risk</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-96 p-5 rounded-xl bg-surface-container-low flex flex-col gap-3 border border-outline-variant/20">
                    <span className="font-mono text-xs text-on-surface uppercase font-bold">Bound Cloud Assets</span>
                    <div className="p-2.5 rounded-lg bg-surface-container-lowest flex items-center justify-between text-xs font-mono border border-outline-variant/20">
                      <span className="text-on-surface font-medium truncate">aws:rds:us-east-1:pg-cluster-01</span>
                      <Link2 className="w-3.5 h-3.5 text-secondary shrink-0 ml-2" />
                    </div>
                    <div className="p-2.5 rounded-lg bg-surface-container-lowest flex items-center justify-between text-xs font-mono border border-outline-variant/20">
                      <span className="text-on-surface font-medium truncate">aws:s3:us-east-1:wal-archive-bucket</span>
                      <Link2 className="w-3.5 h-3.5 text-secondary shrink-0 ml-2" />
                    </div>
                    <button
                      onClick={() => setActiveStep(2)}
                      className="mt-2 w-full py-2.5 rounded-lg bg-primary text-on-primary font-medium text-xs hover:bg-primary/90 transition-all flex items-center justify-center gap-1.5 shadow-sm"
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
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-secondary/15 text-secondary font-semibold">
                        SAFEGUARD: CTRL-012
                      </span>
                      <span className="text-xs text-on-surface-variant font-mono">Advisory Multi-Mapping</span>
                    </div>
                    <h3 className="text-2xl font-bold text-on-surface">Automated DB Snapshot &amp; Periodic Restoration Drill</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Every production database must execute automated nightly snapshots retained for 35 days, coupled with a mandatory quarterly point-in-time test restoration to staging.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                      <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface border border-outline-variant/30">SOC 2 CC9.1</span>
                      <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface border border-outline-variant/30">ISO 27001:2022 A.8.13</span>
                      <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface border border-outline-variant/30">HIPAA §164.308(a)(7)</span>
                    </div>
                  </div>

                  <div className="w-full lg:w-96 p-5 rounded-xl bg-surface-container-low flex flex-col gap-3 border border-outline-variant/20">
                    <span className="font-mono text-xs text-on-surface uppercase font-bold">Safeguard Ownership</span>
                    <div className="p-3 rounded-lg bg-surface-container-lowest flex flex-col text-xs border border-outline-variant/20">
                      <span className="font-bold text-on-surface">Assigned Custodian: DevOps Lead</span>
                      <span className="text-on-surface-variant mt-0.5">Automated webhook sync enabled</span>
                    </div>
                    <button
                      onClick={() => setActiveStep(3)}
                      className="mt-2 w-full py-2.5 rounded-lg bg-primary text-on-primary font-medium text-xs hover:bg-primary/90 transition-all flex items-center justify-center gap-1.5 shadow-sm"
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
                      <span className="text-xs text-on-surface-variant font-mono">Current Cycle: Active Quarter</span>
                    </div>
                    <h3 className="text-2xl font-bold text-on-surface">Quarterly Restoration Drill Executed</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Task automatically spawned on the Lean Cadence Board. Practitioner initiated automated snapshot restore on staging, verified DB integrity via script, and logged run logs.
                    </p>
                    <div className="p-3 rounded-xl bg-secondary/15 text-secondary font-mono text-xs border border-secondary/20 font-semibold">
                      ✓ Drill completed: RTO measured at 14m 20s (Target: &lt; 1 hour). Passed.
                    </div>
                  </div>

                  <div className="w-full lg:w-96 p-5 rounded-xl bg-surface-container-low flex flex-col gap-3 border border-outline-variant/20">
                    <span className="font-mono text-xs text-on-surface uppercase font-bold">Task Status</span>
                    <div className="p-3 rounded-lg bg-surface-container-lowest flex items-center justify-between text-xs font-mono border border-outline-variant/20">
                      <span className="text-secondary font-bold">STATUS: VERIFIED BY LEAD</span>
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    </div>
                    <button
                      onClick={() => setActiveStep(4)}
                      className="mt-2 w-full py-2.5 rounded-lg bg-primary text-on-primary font-medium text-xs hover:bg-primary/90 transition-all flex items-center justify-center gap-1.5 shadow-sm"
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
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface font-semibold border border-outline-variant/30">
                        RECORD LOG: EV-2025-03-Q1
                      </span>
                      <span className="text-xs text-secondary font-mono font-semibold">Zero-Knowledge Reference</span>
                    </div>
                    <h3 className="text-2xl font-bold text-on-surface">External Cloud Backup Log URL Indexed</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      No confidential SQL dumps are stored in OMNiGRC. The engine saves the verified CloudWatch / Datadog run-URL, accompanied by an integrity hash for auditor inspection.
                    </p>
                    <div className="p-3.5 rounded-xl bg-surface-container text-on-surface flex flex-col gap-1 font-mono text-xs border border-outline-variant/30">
                      <span className="text-on-surface-variant">URI: s3://telemetry-evidence-vault/restorations/2025-q1-pg.log</span>
                      <span className="text-secondary font-semibold">HASH: c837f482a...9811b7a6 (WAL Verified)</span>
                      <span className="text-on-surface-variant text-[11px]">Attested by: SecOps Lead on 2026-03-12 14:32 UTC</span>
                    </div>
                  </div>

                  <div className="w-full lg:w-96 p-5 rounded-xl bg-surface-container-low flex flex-col gap-3 border border-outline-variant/20">
                    <span className="font-mono text-xs text-on-surface uppercase font-bold">Auditor Access Ready</span>
                    <div className="p-3 rounded-lg bg-surface-container-lowest flex flex-col text-xs border border-outline-variant/20">
                      <span className="font-bold text-on-surface">Auditor Read-Only Export</span>
                      <span className="text-on-surface-variant mt-0.5">Ready for export to auditor workpaper dossier.</span>
                    </div>
                    <button
                      onClick={() => setActiveStep(1)}
                      className="mt-2 w-full py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-medium text-xs transition-all flex items-center justify-center gap-1.5 border border-outline-variant/30"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-on-surface-variant" />
                      <span>Reset Pipeline Simulator</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 5: RELEVANT MODULES TO EXPLORE NEXT */}
        <section className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mb-12">
            <div className="font-mono text-xs text-primary uppercase tracking-wider mb-2 font-semibold">
              MODULAR ARCHITECTURE
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-on-surface">
              Explore Core GRC Workflows
            </h2>
            <p className="text-base text-on-surface-variant mt-3 leading-relaxed">
              Adopt modules incrementally as your lean team expands governance breadth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/products/risk-register"
              className="group p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all border border-outline-variant/30 flex flex-col justify-between"
            >
              <div>
                <ShieldAlert className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-bold text-on-surface mb-2">Risk Register</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  5x5 scoring bound directly to cloud infrastructure assets.
                </p>
              </div>
              <span className="font-mono text-xs text-secondary font-semibold mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Inspect Module <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/products/compliance-board"
              className="group p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all border border-outline-variant/30 flex flex-col justify-between"
            >
              <div>
                <Kanban className="w-8 h-8 text-secondary mb-3" />
                <h3 className="text-lg font-bold text-on-surface mb-2">Compliance Board</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  30/60/90-day task tracking for recurring operational cadences.
                </p>
              </div>
              <span className="font-mono text-xs text-secondary font-semibold mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Inspect Module <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/products/control-mapping"
              className="group p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all border border-outline-variant/30 flex flex-col justify-between"
            >
              <div>
                <Network className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-bold text-on-surface mb-2">Control Mapping</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Map-once crosswalk across SOC 2, ISO 27001, HIPAA, and DPDP.
                </p>
              </div>
              <span className="font-mono text-xs text-secondary font-semibold mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Inspect Module <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/products/evidence"
              className="group p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all border border-outline-variant/30 flex flex-col justify-between"
            >
              <div>
                <FileCheck className="w-8 h-8 text-secondary mb-3" />
                <h3 className="text-lg font-bold text-on-surface mb-2">Evidence Index</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Index external cloud URL pointers without binary storage overhead.
                </p>
              </div>
              <span className="font-mono text-xs text-secondary font-semibold mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Inspect Module <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </section>

        {/* SECTION 6: BOTTOM CTA */}
        <section className="w-full bg-surface-container-low py-24 border-t border-outline-variant/20">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-br from-surface-container to-surface-container-low rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-lg border border-outline-variant/30">
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-4">
                  Ready to bring order to your security operations?
                </h2>
                <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
                  Experience how OMNiGRC helps lean security teams maintain enterprise-grade compliance without the burnout.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-lg bg-primary hover:bg-primary/90 text-on-primary font-medium text-sm shadow-md transition-all"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Schedule Lean Team Walkthrough</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
