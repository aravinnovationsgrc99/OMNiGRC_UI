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
        <section className="relative w-full max-w-7xl mx-auto px-6 pt-10 md:pt-14 pb-16 overflow-hidden bg-grid-mesh-adaptive">
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary/5 dark:bg-teal/10 blur-3xl pointer-events-none -z-10"></div>
          <div className="absolute left-1/3 bottom-0 w-72 h-72 rounded-full bg-secondary/10 dark:bg-amber/10 blur-3xl pointer-events-none -z-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col items-start gap-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200 dark:bg-navy-800 text-primary font-mono text-xs uppercase tracking-wider border border-slate-300 dark:border-navy-700">
                <TrendingUp className="w-4 h-4" />
                <span>SOLUTIONS FOR GROWING SAAS ORGANIZATIONS</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[50px] lg:leading-[58px] text-slate-900 dark:text-white font-bold tracking-tight">
                Scale Governance alongside your <span className="text-primary">Company Growth</span>
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                As your SaaS company expands into mid-market and enterprise deals, compliance demands compound rapidly. OMNiGRC provides reusable control structures that grow with your team.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-all shadow-md"
                >
                  <Zap className="w-4 h-4" />
                  <span>Request Growth Walkthrough</span>
                </Link>
                <a
                  href="#operating-model"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-900 dark:text-white font-medium text-sm transition-all border border-slate-200 dark:border-navy-700"
                >
                  <span>See Scaling Pipeline</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="lg:col-span-5 relative">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-xl flex flex-col gap-4 border border-slate-200 dark:border-navy-700">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-navy-800">
                  <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">SAAS GOVERNANCE ENGINE</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-mono text-[11px] font-semibold">
                    ENTERPRISE READY
                  </span>
                </div>
                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-200/60 dark:border-navy-800">
                    <span className="text-slate-800 dark:text-slate-200 font-medium">Reusable Safeguards</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">CROSSWALK READY</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-200/60 dark:border-navy-800">
                    <span className="text-slate-800 dark:text-slate-200 font-medium">Vendor Risk Tracking</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold font-mono">SUPPLY CHAIN TRACKED</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-200/60 dark:border-navy-800">
                    <span className="text-slate-800 dark:text-slate-200 font-medium">Audit Preparation</span>
                    <span className="text-primary font-bold font-mono">CONTINUOUS</span>
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
                THE SAAS SCALING CHALLENGE
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Governance complexity shouldn't slow down product momentum.
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                Growing SaaS teams face mounting customer security questionnaires, vendor reviews, and multi-framework demands.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between border border-slate-200 dark:border-navy-700">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Enterprise Deal Friction</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Prospects demand SOC 2 Type II and ISO 27001 proof before signing contracts, stalling sales velocity.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-navy-800 font-mono text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Risk: Delayed deal cycles</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between border border-slate-200 dark:border-navy-700">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                    <Network className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Vendor &amp; Sub-processor Sprawl</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Adopting new cloud tools without structured third-party risk tracking introduces unmonitored supply-chain risks.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-navy-800 font-mono text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Risk: Ungoverned vendor surface</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between border border-slate-200 dark:border-navy-700">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Multi-Framework Overlap</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
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
        <section className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mb-12">
            <div className="font-mono text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 font-semibold">
              GROWTH GOVERNANCE CAPABILITIES
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Built to scale with your architecture and customer requirements.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
              Structure reusable controls, manage vendor dependencies, and maintain continuous audit readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm flex flex-col justify-between gap-4 border border-slate-200 dark:border-navy-700">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Network className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white border border-slate-200 dark:border-navy-700">REUSABLE BASELINES</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Reusable Control Baselines</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Establish core safeguards once and map them across expanding customer requirements and security frameworks.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-200/60 dark:border-navy-800">
                <span className="text-slate-600 dark:text-slate-400">Control Reusability</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Multi-Framework Crosswalk</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm flex flex-col justify-between gap-4 border border-slate-200 dark:border-navy-700">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white border border-slate-200 dark:border-navy-700">VENDOR RISK</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Vendor &amp; Sub-processor Governance</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Track SaaS vendor dependencies, security attestations, and DPDP sub-processor agreements in a single inventory.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-200/60 dark:border-navy-800">
                <span className="text-slate-600 dark:text-slate-400">Vendor Inventory</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Sub-processor Aware</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: INTERACTIVE SCALING PIPELINE */}
        <section className="w-full bg-slate-50 dark:bg-[#16233F]/60 py-24 border-y border-slate-200 dark:border-navy-700/60" id="operating-model">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="font-mono text-xs text-primary uppercase tracking-wider mb-2 font-semibold">
                ILLUSTRATIVE SCALING PIPELINE (DEMO DATA)
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Growth Milestone → Governance Requirement → Safeguard → Audit Readiness
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Click each step below to inspect how organizational growth triggers structured governance expansion.
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
                <span className="text-base font-bold text-slate-900 dark:text-white mt-1">1. Growth Milestone</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Enterprise Sales Target</span>
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
                <span className="text-base font-bold text-slate-900 dark:text-white mt-1">2. Governance Requirement</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">SOC 2 Type II Mandate</span>
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
                <span className="text-base font-bold text-slate-900 dark:text-white mt-1">3. Reusable Safeguard</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Access &amp; Encryption Baseline</span>
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
                <span className="text-base font-bold text-slate-900 dark:text-white mt-1">4. Audit Readiness</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Verified Workpaper Dossier</span>
              </button>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-[#0A111F] shadow-lg border border-slate-200 dark:border-navy-700">
              {activeStep === 1 && (
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                  <div className="flex flex-col gap-3 max-w-xl">
                    <span className="font-mono text-xs font-bold text-primary">STEP 01: GROWTH MILESTONE</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Moving Up-Market to Enterprise Clients</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Securing enterprise deals requires proving security posture and continuous control maintenance.
                    </p>
                  </div>
                  <button onClick={() => setActiveStep(2)} className="py-2.5 px-5 rounded-lg bg-primary text-white font-medium text-xs flex items-center gap-1.5 shadow-sm hover:bg-primary/90 transition-all">
                    <span>Inspect Governance Requirement</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {activeStep === 2 && (
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                  <div className="flex flex-col gap-3 max-w-xl">
                    <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">STEP 02: GOVERNANCE REQUIREMENT</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">SOC 2 Type II &amp; ISO 27001 Alignment</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Establish baseline framework requirements without building isolated spreadsheet silos.
                    </p>
                  </div>
                  <button onClick={() => setActiveStep(3)} className="py-2.5 px-5 rounded-lg bg-primary text-white font-medium text-xs flex items-center gap-1.5 shadow-sm hover:bg-primary/90 transition-all">
                    <span>Inspect Reusable Safeguard</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {activeStep === 3 && (
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                  <div className="flex flex-col gap-3 max-w-xl">
                    <span className="font-mono text-xs font-bold text-primary">STEP 03: REUSABLE SAFEGUARD</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Unified Control Execution</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Define baseline controls once and let Advisory AI suggest crosswalks to SOC 2 and ISO 27001 clauses.
                    </p>
                  </div>
                  <button onClick={() => setActiveStep(4)} className="py-2.5 px-5 rounded-lg bg-primary text-white font-medium text-xs flex items-center gap-1.5 shadow-sm hover:bg-primary/90 transition-all">
                    <span>Inspect Audit Readiness</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {activeStep === 4 && (
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                  <div className="flex flex-col gap-3 max-w-xl">
                    <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">STEP 04: AUDIT READINESS</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Auditor-Verified Workpaper Dossiers</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Package evidence references into read-only dossiers for auditor fieldwork.
                    </p>
                  </div>
                  <button onClick={() => setActiveStep(1)} className="py-2.5 px-5 rounded-lg bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-900 dark:text-white font-medium text-xs flex items-center gap-1.5 border border-slate-200 dark:border-navy-700">
                    <RotateCcw className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                    <span>Reset Simulator</span>
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
              Core Modules for Growing SaaS
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
              Adopt specialized GRC modules as your governance program scales.
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
                  Map-once crosswalk across SOC 2, ISO 27001, and HIPAA.
                </p>
              </div>
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Inspect Module <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/products/vendors"
              className="group p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-navy-700 flex flex-col justify-between"
            >
              <div>
                <Building2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-3" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Vendor Risk</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Third-party SaaS and sub-processor governance inventory.
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
                <Link2 className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Evidence Index</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Centralized cloud URI pointers with verification logs.
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
        <section className="w-full bg-slate-50 dark:bg-[#16233F]/60 py-24 border-t border-slate-200 dark:border-navy-700/60">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-br from-slate-100 to-slate-50 dark:from-[#0A111F] dark:to-[#16233F] rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-lg border border-slate-200 dark:border-navy-700">
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                  Scale your SaaS security governance with confidence.
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  Accelerate enterprise deal velocity with OMNiGRC's connected governance operating layer.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium text-sm shadow-md transition-all"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Request SaaS Growth Walkthrough</span>
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
