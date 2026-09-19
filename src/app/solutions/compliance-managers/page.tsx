"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  FileCheck,
  Calendar,
  Network,
  Kanban,
  Link2,
  AlertTriangle,
  ArrowRight,
  RotateCcw,
  Scale
} from "lucide-react";

export default function ComplianceManagersPage() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <div className="min-h-screen bg-[#faf8ff] dark:bg-[#0A111F] text-slate-900 dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-slate-900 dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />
      <div className="flex flex-col w-full pt-16">
        {/* SECTION 1: HERO */}
        <section className="relative w-full max-w-7xl mx-auto px-6 pt-10 md:pt-14 pb-16 overflow-hidden">
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary/5 dark:bg-teal/10 blur-3xl pointer-events-none -z-10"></div>
          <div className="absolute left-1/3 bottom-0 w-72 h-72 rounded-full bg-secondary/10 dark:bg-amber/10 blur-3xl pointer-events-none -z-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col items-start gap-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200 dark:bg-navy-800 text-primary font-mono text-xs uppercase tracking-wider border border-slate-300 dark:border-navy-700">
                <FileCheck className="w-4 h-4" />
                <span>SOLUTIONS FOR COMPLIANCE MANAGERS &amp; GRC LEADS</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[50px] lg:leading-[58px] text-slate-900 dark:text-white font-bold tracking-tight">
                Continuous Compliance Without <span className="text-primary">Audit Season Chaos</span>
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                Transform once-a-year audit panics into continuous, predictable compliance operations. Map controls once across ISO 27001, SOC 2, HIPAA, and DPDP while keeping evidence indices continuously updated.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-all shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Compliance Walkthrough</span>
                </Link>
                <a
                  href="#operating-model"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-900 dark:text-white font-medium text-sm transition-all border border-slate-200 dark:border-navy-700"
                >
                  <span>See Compliance Pipeline</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="lg:col-span-5 relative">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-xl flex flex-col gap-4 border border-slate-200 dark:border-navy-700">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-navy-800">
                  <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">COMPLIANCE ENGINE COCKPIT</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-mono text-[11px] font-semibold">
                    MULTI-FRAMEWORK
                  </span>
                </div>
                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-200/60 dark:border-navy-800">
                    <span className="text-slate-800 dark:text-slate-200 font-medium">Framework Crosswalk</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">MAP-ONCE ACTIVE</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-200/60 dark:border-navy-800">
                    <span className="text-slate-800 dark:text-slate-200 font-medium">Evidence References</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">INDEXED &amp; VERIFIED</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-200/60 dark:border-navy-800">
                    <span className="text-slate-800 dark:text-slate-200 font-medium">Auditor Access</span>
                    <span className="text-primary font-bold">READ-ONLY DOSSIERS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: PAIN POINTS */}
        <section className="w-full bg-slate-50 dark:bg-[#16233F]/60 py-20 border-y border-slate-200 dark:border-navy-700/60">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <div className="font-mono text-xs text-primary uppercase tracking-wider mb-2 font-semibold">
                THE COMPLIANCE CHALLENGE
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Eliminating duplicated effort across overlapping frameworks.
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                Compliance managers spend a significant portion of their time re-collecting the same evidence for different auditors and standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between border border-slate-200 dark:border-navy-700">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Redundant Framework Audits</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Testing access controls separately for SOC 2, ISO 27001, and HIPAA creates massive internal audit fatigue.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-navy-800 font-mono text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Drag: Duplicated work across standards</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between border border-slate-200 dark:border-navy-700">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                    <Link2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Stale Evidence Files</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Local PDF uploads become obsolete within weeks, forcing compliance teams to re-request screenshots.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-navy-800 font-mono text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Drag: Outdated proof at audit time</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between border border-slate-200 dark:border-navy-700">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Unorganized Auditor Requests</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Managing auditor requests over email attachments leads to missing workpapers and delayed audit completion.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-navy-800 font-mono text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Drag: Protracted audit fieldwork</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: SOLUTION ENGINES */}
        <section className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mb-12">
            <div className="font-mono text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 font-semibold">
              COMPLIANCE OPERATING CAPABILITIES
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Structured framework mapping and automated cadence tracking.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
              Equip your GRC practice with reusable controls, evidence indexing, and structured auditor workpaper dossiers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm flex flex-col justify-between gap-4 border border-slate-200 dark:border-navy-700">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Network className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white border border-slate-200 dark:border-navy-700">CROSSWALK ENGINE</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Map-Once Framework Crosswalk</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Map single internal safeguards to ISO 27001, SOC 2, HIPAA, and DPDP. Human review ratifies every mapping before audit commit.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-200/60 dark:border-navy-800">
                <span className="text-slate-600 dark:text-slate-400">Framework Crosswalk</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">1 Safeguard → N Clauses</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm flex flex-col justify-between gap-4 border border-slate-200 dark:border-navy-700">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Link2 className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white border border-slate-200 dark:border-navy-700">EVIDENCE INDEX</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Centralized Evidence Reference Index</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Index external cloud log URLs, S3 bucket pointers, and Jira ticket references with integrity verification and human sign-off.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-200/60 dark:border-navy-800">
                <span className="text-slate-600 dark:text-slate-400">Evidence Storage Overhead</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Zero Binary Dumping</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm flex flex-col justify-between gap-4 border border-slate-200 dark:border-navy-700">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Kanban className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white border border-slate-200 dark:border-navy-700">CADENCE BOARD</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">30/60/90-Day Cadence Scheduler</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Schedule periodic access reviews, policy attestations, and penetration test remediations to run automatically on cadence.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-200/60 dark:border-navy-800">
                <span className="text-slate-600 dark:text-slate-400">Testing Cadences</span>
                <span className="text-primary font-bold">Automated Scheduling</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm flex flex-col justify-between gap-4 border border-slate-200 dark:border-navy-700">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white border border-slate-200 dark:border-navy-700">AUDITOR DOSSIERS</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Read-Only Auditor Access Dossiers</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Package verified evidence references and workpapers into clean read-only digital binders for CPA firms and ISO registrars.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-200/60 dark:border-navy-800">
                <span className="text-slate-600 dark:text-slate-400">Auditor Workpapers</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Single-Click Packaging</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: INTERACTIVE COMPLIANCE PIPELINE */}
        <section className="w-full bg-slate-50 dark:bg-[#16233F]/60 py-24 border-y border-slate-200 dark:border-navy-700/60" id="operating-model">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="font-mono text-xs text-primary uppercase tracking-wider mb-2 font-semibold">
                ILLUSTRATIVE COMPLIANCE PIPELINE (DEMO DATA)
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Framework Mandate → Safeguard Mapping → Evidence Index → Audit Dossier
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Click each step below to inspect how a compliance mandate turns into an auditor-verified workpaper dossier.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <button
                onClick={() => setActiveStep(1)}
                className={`text-left p-5 rounded-2xl shadow-md transition-all flex flex-col gap-1 border ${
                  activeStep === 1
                    ? "bg-white dark:bg-[#0A111F] border-primary ring-2 ring-primary/20 text-slate-900 dark:text-white"
                    : "bg-white dark:bg-[#0A111F] border-slate-200 dark:border-navy-700 hover:border-slate-300 dark:hover:border-navy-600 text-slate-900 dark:text-white opacity-75 hover:opacity-100"
                }`}
              >
                <span className="font-mono text-xs font-bold text-primary">STEP 01</span>
                <span className="text-base font-bold text-slate-900 dark:text-white mt-1">1. Mandate Clause</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">SOC 2 CC6.1 Access Rule</span>
              </button>

              <button
                onClick={() => setActiveStep(2)}
                className={`text-left p-5 rounded-2xl shadow-md transition-all flex flex-col gap-1 border ${
                  activeStep === 2
                    ? "bg-white dark:bg-[#0A111F] border-emerald-500 ring-2 ring-emerald-500/20 text-slate-900 dark:text-white"
                    : "bg-white dark:bg-[#0A111F] border-slate-200 dark:border-navy-700 hover:border-slate-300 dark:hover:border-navy-600 text-slate-900 dark:text-white opacity-75 hover:opacity-100"
                }`}
              >
                <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">STEP 02</span>
                <span className="text-base font-bold text-slate-900 dark:text-white mt-1">2. Safeguard Crosswalk</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Map to ISO A.5.15 &amp; HIPAA</span>
              </button>

              <button
                onClick={() => setActiveStep(3)}
                className={`text-left p-5 rounded-2xl shadow-md transition-all flex flex-col gap-1 border ${
                  activeStep === 3
                    ? "bg-white dark:bg-[#0A111F] border-primary ring-2 ring-primary/20 text-slate-900 dark:text-white"
                    : "bg-white dark:bg-[#0A111F] border-slate-200 dark:border-navy-700 hover:border-slate-300 dark:hover:border-navy-600 text-slate-900 dark:text-white opacity-75 hover:opacity-100"
                }`}
              >
                <span className="font-mono text-xs font-bold text-primary">STEP 03</span>
                <span className="text-base font-bold text-slate-900 dark:text-white mt-1">3. Evidence Reference</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Okta Log Export Pointer</span>
              </button>

              <button
                onClick={() => setActiveStep(4)}
                className={`text-left p-5 rounded-2xl shadow-md transition-all flex flex-col gap-1 border ${
                  activeStep === 4
                    ? "bg-white dark:bg-[#0A111F] border-emerald-500 ring-2 ring-emerald-500/20 text-slate-900 dark:text-white"
                    : "bg-white dark:bg-[#0A111F] border-slate-200 dark:border-navy-700 hover:border-slate-300 dark:hover:border-navy-600 text-slate-900 dark:text-white opacity-75 hover:opacity-100"
                }`}
              >
                <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">STEP 04</span>
                <span className="text-base font-bold text-slate-900 dark:text-white mt-1">4. Auditor Dossier</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Read-Only Workpapers</span>
              </button>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-[#0A111F] shadow-lg border border-slate-200 dark:border-navy-700">
              {activeStep === 1 && (
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                  <div className="flex flex-col gap-3 max-w-xl">
                    <span className="font-mono text-xs font-bold text-primary">STEP 01: FRAMEWORK MANDATE</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">SOC 2 CC6.1 Logical Access Controls</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Deconstruct compliance mandates into structured internal rules and operational requirements.
                    </p>
                  </div>
                  <button onClick={() => setActiveStep(2)} className="py-2.5 px-5 rounded-lg bg-primary text-white font-medium text-xs flex items-center gap-1.5 shadow-sm hover:bg-primary/90 transition-all">
                    <span>Inspect Safeguard Crosswalk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {activeStep === 2 && (
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                  <div className="flex flex-col gap-3 max-w-xl">
                    <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">STEP 02: SAFEGUARD CROSSWALK</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Multi-Framework Advisory Mapping</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Advisory AI proposes crosswalks to ISO 27001:2022 A.5.15 and HIPAA §164.312(a). Compliance officer explicitly ratifies the mapping.
                    </p>
                  </div>
                  <button onClick={() => setActiveStep(3)} className="py-2.5 px-5 rounded-lg bg-primary text-white font-medium text-xs flex items-center gap-1.5 shadow-sm hover:bg-primary/90 transition-all">
                    <span>Inspect Evidence Reference</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {activeStep === 3 && (
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                  <div className="flex flex-col gap-3 max-w-xl">
                    <span className="font-mono text-xs font-bold text-primary">STEP 03: EVIDENCE REFERENCE INDEX</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">External Log Export Pointer Indexed</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Index customer Okta S3 export log reference with verification SHA-256 hash. Zero raw file re-hosting required.
                    </p>
                  </div>
                  <button onClick={() => setActiveStep(4)} className="py-2.5 px-5 rounded-lg bg-primary text-white font-medium text-xs flex items-center gap-1.5 shadow-sm hover:bg-primary/90 transition-all">
                    <span>View Auditor Workpaper Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {activeStep === 4 && (
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                  <div className="flex flex-col gap-3 max-w-xl">
                    <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">STEP 04: AUDITOR WORKPAPER DOSSIER</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Read-Only Auditor Access Granted</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Time-bounded digital workpaper package compiled for external CPA firm sign-off.
                    </p>
                  </div>
                  <button onClick={() => setActiveStep(1)} className="py-2.5 px-5 rounded-lg bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-900 dark:text-white font-medium text-xs flex items-center gap-1.5 border border-slate-200 dark:border-navy-700">
                    <RotateCcw className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                    <span>Reset Pipeline Simulator</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 5: RELEVANT MODULES */}
        <section className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mb-12">
            <div className="font-mono text-xs text-primary uppercase tracking-wider mb-2 font-semibold">
              ORCHESTRATED MODULES
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Core Modules for Compliance Teams
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
              Explore the specialized GRC modules designed to streamline framework governance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/products/control-mapping"
              className="group p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-navy-700 flex flex-col justify-between"
            >
              <div>
                <Network className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Control Mapping</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Map-once crosswalk engine across SOC 2, ISO, and HIPAA.
                </p>
              </div>
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Inspect Module <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/products/evidence"
              className="group p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-navy-700 flex flex-col justify-between"
            >
              <div>
                <Link2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-3" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Evidence Index</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Centralized external pointer index with verification log trace.
                </p>
              </div>
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Inspect Module <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/products/compliance-board"
              className="group p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-navy-700 flex flex-col justify-between"
            >
              <div>
                <Kanban className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Compliance Board</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Kanban cadence scheduler for recurring testing cycles.
                </p>
              </div>
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Inspect Module <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/products/audits"
              className="group p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-navy-700 flex flex-col justify-between"
            >
              <div>
                <FileCheck className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-3" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Audit Management</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Workpaper packaging and auditor read-only portals.
                </p>
              </div>
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Inspect Module <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </section>

        {/* SECTION 6: BOTTOM CTA */}
        <section className="w-full bg-slate-50 dark:bg-[#16233F]/60 py-24 border-t border-slate-200 dark:border-navy-700/60">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-br from-slate-100 to-slate-50 dark:from-[#0A111F] dark:to-[#16233F] rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-lg border border-slate-200 dark:border-navy-700">
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                  Streamline your framework compliance program.
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  Deliver predictable audit outcomes with OMNiGRC's connected compliance operating layer.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium text-sm shadow-md transition-all"
                  >
                    <FileCheck className="w-4 h-4" />
                    <span>Request Compliance Walkthrough</span>
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
