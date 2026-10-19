"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Zap,
  Building2,
  TrendingUp,
  Network,
  AlertTriangle,
  ArrowRight,
  FileCheck,
  Link2,
  RotateCcw,
  Scale
} from "lucide-react";

export default function SaaSGrowingOrganizationsPage() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <div className="min-h-screen bg-transparent text-slate-900 dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-slate-900 dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />
      <div className="flex flex-col w-full pt-16">
        {/* SECTION 1: HERO */}
        <section className="relative w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 pt-4 sm:pt-6 lg:pt-6 xl:pt-8 pb-3 sm:pb-6 lg:pb-6 xl:pb-8 overflow-hidden bg-grid-mesh-adaptive">
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary/5 dark:bg-teal/10 blur-3xl pointer-events-none -z-10"></div>
          <div className="absolute left-1/3 bottom-0 w-72 h-72 rounded-full bg-secondary/10 dark:bg-amber/10 blur-3xl pointer-events-none -z-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-between items-start text-left gap-4 sm:gap-5">
              <div className="flex flex-col gap-2.5 sm:gap-3.5 w-full">
                <h1 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] lg:leading-[1.15] text-slate-900 dark:text-white font-bold tracking-tight text-left">
                  Scale Governance alongside your <span className="text-primary">Company Growth</span>
                </h1>

                <p className="text-left text-sm sm:text-base lg:text-[17px] text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed text-justify">
                  As your SaaS company expands into mid-market and enterprise deals, compliance demands compound rapidly. OMNiGRC provides reusable control structures that grow with your team.
                </p>

                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-2.5 sm:gap-3.5 pt-1 w-full">
                  <Link
                    href="/demo"
                    className="w-full sm:w-auto max-w-sm inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-all shadow-md text-center"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Request Growth Walkthrough</span>
                  </Link>
                  <a
                    href="#operating-model"
                    className="w-full sm:w-auto max-w-sm inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-900 dark:text-white font-medium text-sm transition-all border border-slate-300 dark:border-navy-700 text-center"
                  >
                    <span>See Scaling Pipeline</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="w-full pt-4 border-t border-slate-200/80 dark:border-navy-700/80 grid grid-cols-3 gap-2 sm:gap-3">
                <div className="p-2 sm:p-2.5 rounded-xl bg-white/70 dark:bg-[#16233F]/70 border border-slate-200 dark:border-navy-700">
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Controls</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Crosswalk Ready</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-white/70 dark:bg-[#16233F]/70 border border-slate-200 dark:border-navy-700">
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Vendors</div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">Supply-Chain Tracked</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-white/70 dark:bg-[#16233F]/70 border border-slate-200 dark:border-navy-700">
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Readiness</div>
                  <div className="text-xs sm:text-sm font-bold text-primary">Continuous Proof</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="lg:col-span-5 relative h-full flex flex-col justify-between">
              <div className="h-full p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-xl flex flex-col justify-between border border-slate-300 dark:border-navy-700">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-navy-800">
                  <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">SAAS GOVERNANCE ENGINE</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-mono text-[11px] font-semibold">
                    ENTERPRISE READY
                  </span>
                </div>
                <div className="space-y-2.5 my-auto py-3">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-300/60 dark:border-navy-800">
                    <span className="text-slate-800 dark:text-slate-200 font-medium">Reusable Safeguards</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">CROSSWALK READY</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-300/60 dark:border-navy-800">
                    <span className="text-slate-800 dark:text-slate-200 font-medium">Vendor Risk Tracking</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold font-mono">SUPPLY CHAIN TRACKED</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-300/60 dark:border-navy-800">
                    <span className="text-slate-800 dark:text-slate-200 font-medium">Audit Preparation</span>
                    <span className="text-primary font-bold font-mono">CONTINUOUS</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>Growth Velocity</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">Enterprise Fast-Track</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: PAIN POINTS */}
        <section className="w-full bg-slate-50 dark:bg-[#16233F]/60 py-3 sm:py-4.5 lg:py-5 xl:py-6 border-y border-slate-200 dark:border-navy-700/60">
          <div className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
            <div className="text-left max-w-3xl mb-3.5 sm:mb-5">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white text-left">
                Governance complexity shouldn't slow down product momentum.
              </h2>
              <p className="text-left text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed text-justify">
                Growing SaaS teams face mounting customer security questionnaires, vendor reviews, and multi-framework demands.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between border border-slate-300 dark:border-navy-700">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-left">Enterprise Deal Friction</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                    Prospects demand SOC 2 Type II and ISO 27001 proof before signing contracts, stalling sales velocity.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-navy-800 font-mono text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Risk: Delayed deal cycles</span>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between border border-slate-300 dark:border-navy-700">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                    <Network className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-left">Vendor &amp; Sub-processor Sprawl</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                    Adopting new cloud tools without structured third-party risk tracking introduces unmonitored supply-chain risks.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-navy-800 font-mono text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Risk: Ungoverned vendor surface</span>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between border border-slate-300 dark:border-navy-700">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-left">Multi-Framework Overlap</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                    Adding HIPAA, ISO 42001, or DPDP Act compliance on top of SOC 2 causes duplicate work when managed manually.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-navy-800 font-mono text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Risk: Engineering distraction</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: SOLUTION CAPABILITIES */}
        <section className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 py-3 sm:py-4.5 lg:py-5 xl:py-6">
          <div className="text-left max-w-3xl mb-3.5 sm:mb-5">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white text-left">
              Built to scale with your architecture and customer requirements.
            </h2>
            <p className="text-left text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed text-justify">
              Structure reusable controls, manage vendor dependencies, and maintain continuous audit readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm flex flex-col justify-between gap-4 border border-slate-300 dark:border-navy-700">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Network className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white border border-slate-300 dark:border-navy-700">REUSABLE BASELINES</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-left">Reusable Control Baselines</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  Establish core safeguards once and map them across expanding customer requirements and security frameworks.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-300/60 dark:border-navy-800">
                <span className="text-slate-600 dark:text-slate-400">Control Reusability</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Multi-Framework Crosswalk</span>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm flex flex-col justify-between gap-4 border border-slate-300 dark:border-navy-700">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white border border-slate-300 dark:border-navy-700">VENDOR RISK</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-left">Vendor &amp; Sub-processor Governance</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  Track SaaS vendor dependencies, security attestations, and DPDP sub-processor agreements in a single inventory.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-300/60 dark:border-navy-800">
                <span className="text-slate-600 dark:text-slate-400">Vendor Inventory</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Sub-processor Aware</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: INTERACTIVE SCALING PIPELINE */}
        <section className="w-full bg-slate-50 dark:bg-[#16233F]/60 py-3 sm:py-4.5 lg:py-5 xl:py-6 border-y border-slate-200 dark:border-navy-700/60" id="operating-model">
          <div className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
            <div className="text-left max-w-3xl mb-3.5 sm:mb-5">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white text-left">
                Growth Milestone → Governance Requirement → Safeguard → Audit Readiness
              </h2>
              <p className="text-left text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed text-justify">
                Click each step below to inspect how organizational growth triggers structured governance expansion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-5">
              <button
                onClick={() => setActiveStep(1)}
                className={`text-left p-4 sm:p-5 rounded-2xl shadow-md transition-all flex flex-col gap-1 border ${
                  activeStep === 1
                    ? "bg-white dark:bg-[#0A111F] border-primary ring-2 ring-primary/20 text-slate-900 dark:text-white"
                    : "bg-white dark:bg-[#0A111F] border-slate-300 dark:border-navy-700 hover:border-slate-300 dark:hover:border-navy-600 text-slate-900 dark:text-white opacity-75 hover:opacity-100"
                }`}
              >
                <span className="font-mono text-xs font-bold text-primary">STEP 01</span>
                <span className="text-base font-bold text-slate-900 dark:text-white mt-1">1. Growth Milestone</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Enterprise Sales Target</span>
              </button>

              <button
                onClick={() => setActiveStep(2)}
                className={`text-left p-4 sm:p-5 rounded-2xl shadow-md transition-all flex flex-col gap-1 border ${
                  activeStep === 2
                    ? "bg-white dark:bg-[#0A111F] border-emerald-500 ring-2 ring-emerald-500/20 text-slate-900 dark:text-white"
                    : "bg-white dark:bg-[#0A111F] border-slate-300 dark:border-navy-700 hover:border-slate-300 dark:hover:border-navy-600 text-slate-900 dark:text-white opacity-75 hover:opacity-100"
                }`}
              >
                <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">STEP 02</span>
                <span className="text-base font-bold text-slate-900 dark:text-white mt-1">2. Governance Requirement</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">SOC 2 Type II Mandate</span>
              </button>

              <button
                onClick={() => setActiveStep(3)}
                className={`text-left p-4 sm:p-5 rounded-2xl shadow-md transition-all flex flex-col gap-1 border ${
                  activeStep === 3
                    ? "bg-white dark:bg-[#0A111F] border-primary ring-2 ring-primary/20 text-slate-900 dark:text-white"
                    : "bg-white dark:bg-[#0A111F] border-slate-300 dark:border-navy-700 hover:border-slate-300 dark:hover:border-navy-600 text-slate-900 dark:text-white opacity-75 hover:opacity-100"
                }`}
              >
                <span className="font-mono text-xs font-bold text-primary">STEP 03</span>
                <span className="text-base font-bold text-slate-900 dark:text-white mt-1">3. Reusable Safeguard</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Access &amp; Encryption Baseline</span>
              </button>

              <button
                onClick={() => setActiveStep(4)}
                className={`text-left p-4 sm:p-5 rounded-2xl shadow-md transition-all flex flex-col gap-1 border ${
                  activeStep === 4
                    ? "bg-white dark:bg-[#0A111F] border-emerald-500 ring-2 ring-emerald-500/20 text-slate-900 dark:text-white"
                    : "bg-white dark:bg-[#0A111F] border-slate-300 dark:border-navy-700 hover:border-slate-300 dark:hover:border-navy-600 text-slate-900 dark:text-white opacity-75 hover:opacity-100"
                }`}
              >
                <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">STEP 04</span>
                <span className="text-base font-bold text-slate-900 dark:text-white mt-1">4. Audit Readiness</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Verified Workpaper Dossier</span>
              </button>
            </div>

            <div className="p-5 sm:p-6 lg:p-7 rounded-2xl bg-white dark:bg-[#0A111F] shadow-lg border border-slate-300 dark:border-navy-700">
              {activeStep === 1 && (
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start justify-between">
                  <div className="flex flex-col gap-3 max-w-xl">
                    <span className="font-mono text-xs font-bold text-primary">STEP 01: GROWTH MILESTONE</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white text-left">Moving Up-Market to Enterprise Clients</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                      Securing enterprise deals requires proving security posture and continuous control maintenance.
                    </p>
                  </div>
                  <button onClick={() => setActiveStep(2)} className="w-full sm:w-auto py-2.5 px-5 rounded-lg bg-primary text-white font-medium text-xs flex items-center justify-center gap-1.5 shadow-sm hover:bg-primary/90 transition-all">
                    <span>Inspect Governance Requirement</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {activeStep === 2 && (
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start justify-between">
                  <div className="flex flex-col gap-3 max-w-xl">
                    <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">STEP 02: GOVERNANCE REQUIREMENT</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white text-left">SOC 2 Type II &amp; ISO 27001 Alignment</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                      Establish baseline framework requirements without building isolated spreadsheet silos.
                    </p>
                  </div>
                  <button onClick={() => setActiveStep(3)} className="w-full sm:w-auto py-2.5 px-5 rounded-lg bg-primary text-white font-medium text-xs flex items-center justify-center gap-1.5 shadow-sm hover:bg-primary/90 transition-all">
                    <span>Inspect Reusable Safeguard</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {activeStep === 3 && (
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start justify-between">
                  <div className="flex flex-col gap-3 max-w-xl">
                    <span className="font-mono text-xs font-bold text-primary">STEP 03: REUSABLE SAFEGUARD</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white text-left">Unified Control Execution</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                      Define baseline controls once and let Advisory AI suggest crosswalks to SOC 2 and ISO 27001 clauses.
                    </p>
                  </div>
                  <button onClick={() => setActiveStep(4)} className="w-full sm:w-auto py-2.5 px-5 rounded-lg bg-primary text-white font-medium text-xs flex items-center justify-center gap-1.5 shadow-sm hover:bg-primary/90 transition-all">
                    <span>Inspect Audit Readiness</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {activeStep === 4 && (
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start justify-between">
                  <div className="flex flex-col gap-3 max-w-xl">
                    <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">STEP 04: AUDIT READINESS</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white text-left">Auditor-Verified Workpaper Dossiers</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                      Package evidence references into read-only dossiers for auditor fieldwork.
                    </p>
                  </div>
                  <button onClick={() => setActiveStep(1)} className="w-full sm:w-auto py-2.5 px-5 rounded-lg bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-900 dark:text-white font-medium text-xs flex items-center justify-center gap-1.5 border border-slate-300 dark:border-navy-700">
                    <RotateCcw className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                    <span>Reset Simulator</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 5: RELEVANT MODULES */}
        <section className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 py-3 sm:py-4.5 lg:py-5 xl:py-6">
          <div className="text-left max-w-3xl mb-3.5 sm:mb-5">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white text-left">
              Core Modules for Growing SaaS
            </h2>
            <p className="text-left text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed text-justify">
              Adopt specialized GRC modules as your governance program scales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            <Link
              href="/products/control-mapping"
              className="group p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm hover:shadow-md transition-all border border-slate-300 dark:border-navy-700 flex flex-col justify-between"
            >
              <div>
                <Network className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-left">Control Mapping</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  Map-once crosswalk across SOC 2, ISO 27001, and HIPAA.
                </p>
              </div>
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Inspect Module <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/products/vendors"
              className="group p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm hover:shadow-md transition-all border border-slate-300 dark:border-navy-700 flex flex-col justify-between"
            >
              <div>
                <Building2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-3" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-left">Vendor Risk</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  Third-party SaaS and sub-processor governance inventory.
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
                <Link2 className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-left">Evidence Index</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  Centralized cloud URI pointers with verification logs.
                </p>
              </div>
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Inspect Module <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/products/audits"
              className="group p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm hover:shadow-md transition-all border border-slate-300 dark:border-navy-700 flex flex-col justify-between"
            >
              <div>
                <FileCheck className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-3" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-left">Audit Management</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  Workpaper dossier packaging and auditor portals.
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 sm:mb-3 text-left leading-tight">
                  Scale your SaaS security governance with confidence.
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 text-left text-justify leading-relaxed max-w-2xl">
                  Accelerate enterprise deal velocity with OMNiGRC's connected governance operating layer.
                </p>
              </div>
              <div className="flex sm:justify-start md:justify-end shrink-0">
                <Link
                  href="/demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#F15E1C] to-[#D4521A] hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-md text-xs sm:text-sm text-center whitespace-nowrap"
                >
                  <Zap className="w-4 h-4" />
                  <span>Request SaaS Growth Walkthrough</span>
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
