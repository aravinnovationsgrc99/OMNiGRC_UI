"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  ShieldCheck,
  LayoutDashboard,
  LineChart,
  Clock,
  AlertTriangle,
  ArrowRight,
  Layers,
  FileCheck,
  ShieldAlert,
  Zap,
  RotateCcw
} from "lucide-react";

export default function SecurityLeadersPage() {
  const [activeStage, setActiveStage] = useState<number>(1);

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
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200 dark:bg-navy-800 text-primary font-mono text-xs uppercase tracking-wider border border-slate-300 dark:border-navy-700">
                <ShieldCheck className="w-4 h-4" />
                <span>SOLUTIONS FOR CISOS &amp; SECURITY LEADERSHIP</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-[50px] lg:leading-[58px] text-slate-900 dark:text-white font-bold tracking-tight">
                Executive Risk Visibility Without <span className="text-primary">Operational Blind Spots</span>
              </h1>

              {/* Subhead */}
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                CISOs need risk clarity grounded in technical truth. OMNiGRC connects high-level executive dashboards directly down to cloud infrastructure assets, control testing status, and active remediation workflows.
              </p>

              {/* CTA Cluster */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-all shadow-md"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Request Executive Briefing</span>
                </Link>
                <a
                  href="#operating-model"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-900 dark:text-white font-medium text-sm transition-all border border-slate-200 dark:border-navy-700"
                >
                  <span>See Executive Flow</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Hero Visual: CISO Governance Portal */}
            <div className="lg:col-span-5 relative">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-xl flex flex-col gap-4 border border-slate-200 dark:border-navy-700">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-navy-800">
                  <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">CISO GOVERNANCE PORTAL</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-mono text-[11px] font-semibold">
                    EXECUTIVE VIEW
                  </span>
                </div>
                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-200/60 dark:border-navy-800">
                    <span className="text-slate-800 dark:text-slate-200 font-medium">Multi-Framework Posture</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">ALIGNMENT VISIBLE</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-200/60 dark:border-navy-800">
                    <span className="text-slate-800 dark:text-slate-200 font-medium">Residual Risk Exposure</span>
                    <span className="text-primary font-bold">QUANTIFIED</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-200/60 dark:border-navy-800">
                    <span className="text-slate-800 dark:text-slate-200 font-medium">Audit Workpapers</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">DOSSIERS READY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: EXECUTIVE PAIN POINTS */}
        <section className="w-full bg-slate-50 dark:bg-[#16233F]/60 py-20 border-y border-slate-200 dark:border-navy-700/60">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <div className="font-mono text-xs text-primary uppercase tracking-wider mb-2 font-semibold">
                THE EXECUTIVE CHALLENGE
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Bridging the gap between board reporting and operational truth.
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                Security leaders are often forced to choose between high-level subjective surveys and overwhelming technical noise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between border border-slate-200 dark:border-navy-700">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Subjective Risk Dashboards</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Color-coded heatmaps detached from actual technical assets create false confidence right before third-party audits.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-navy-800 font-mono text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Risk: Ungrounded board claims</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between border border-slate-200 dark:border-navy-700">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Unclear SLA Accountability</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Vulnerability findings and audit CAPAs stall across engineering teams without clear ownership or governance tracking.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-navy-800 font-mono text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>Risk: Silent SLA degradation</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between border border-slate-200 dark:border-navy-700">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Audit Fire Drills</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Scrambling for evidence right before annual audit fieldwork distracts engineering and delays strategic security initiatives.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-navy-800 font-mono text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Risk: Operational disruption</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: STRATEGIC CAPABILITIES */}
        <section className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mb-12">
            <div className="font-mono text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 font-semibold">
              EXECUTIVE GOVERNANCE ENGINES
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Defensible GRC oversight built on connected telemetry.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
              Equip your leadership team with structured controls, asset-centric risk scoring, and verified audit workpapers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm flex flex-col justify-between gap-4 border border-slate-200 dark:border-navy-700">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <LineChart className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white border border-slate-200 dark:border-navy-700">CAP-01</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">5×5 Risk Scoring &amp; Asset Mapping</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Calculate inherent vs. residual risk grounded in technical asset dependencies, vendor relationships, and threat scenarios.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-200/60 dark:border-navy-800">
                <span className="text-slate-600 dark:text-slate-400">Residual Risk Threshold</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Low (Tier-1 Attested)</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm flex flex-col justify-between gap-4 border border-slate-200 dark:border-navy-700">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white border border-slate-200 dark:border-navy-700">CAP-02</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Vulnerability Remediation Governance</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Governance layer over scanner findings—tracks remediation owners and target SLAs with executive sign-off before SLA expiration.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-200/60 dark:border-navy-800">
                <span className="text-slate-600 dark:text-slate-400">Critical Vulnerability SLA</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">SLA Target Active</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm flex flex-col justify-between gap-4 border border-slate-200 dark:border-navy-700">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white border border-slate-200 dark:border-navy-700">CAP-03</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Incident-to-Asset Traceability</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Governed incident records linked directly to technical assets, audit workpapers, and regulatory notification timelines.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-200/60 dark:border-navy-800">
                <span className="text-slate-600 dark:text-slate-400">Incident Traceability</span>
                <span className="text-primary font-bold">ASST-104 → CAPA Closed</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm flex flex-col justify-between gap-4 border border-slate-200 dark:border-navy-700">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white border border-slate-200 dark:border-navy-700">CAP-04</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Advisory AI with Human Verification</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Secure advisory control mapping where AI assists clause correlations and humans retain absolute sign-off authority.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A111F] flex items-center justify-between font-mono text-xs border border-slate-200/60 dark:border-navy-800">
                <span className="text-slate-600 dark:text-slate-400">Human Sign-off Gate</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Mandatory Verification</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: INTERACTIVE EXECUTIVE FLOW */}
        <section className="w-full bg-slate-50 dark:bg-[#16233F]/60 py-24 border-y border-slate-200 dark:border-navy-700/60" id="operating-model">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="font-mono text-xs text-primary uppercase tracking-wider mb-2 font-semibold">
                ILLUSTRATIVE EXECUTIVE FLOW (DEMO DATA)
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Risk → Exposure → Action → Verification
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Click each stage below to inspect how an infrastructure signal transitions through human review to an auditor-verified workpaper.
              </p>
            </div>

            {/* 4-Stage Tab Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <button
                onClick={() => setActiveStage(1)}
                className={`text-left p-5 rounded-2xl shadow-md transition-all flex flex-col justify-between border ${
                  activeStage === 1
                    ? "bg-white dark:bg-[#0A111F] border-primary ring-2 ring-primary/20 text-slate-900 dark:text-white"
                    : "bg-white dark:bg-[#0A111F] border-slate-200 dark:border-navy-700 hover:border-slate-300 dark:hover:border-navy-600 text-slate-900 dark:text-white opacity-75 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-primary">STAGE 01</span>
                  <span className="px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-600 dark:text-rose-400 font-mono text-[10px] font-semibold">High Priority</span>
                </div>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Identified Risk</span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">RSK-019</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Production API Exposure</p>
              </button>

              <button
                onClick={() => setActiveStage(2)}
                className={`text-left p-5 rounded-2xl shadow-md transition-all flex flex-col justify-between border ${
                  activeStage === 2
                    ? "bg-white dark:bg-[#0A111F] border-emerald-500 ring-2 ring-emerald-500/20 text-slate-900 dark:text-white"
                    : "bg-white dark:bg-[#0A111F] border-slate-200 dark:border-navy-700 hover:border-slate-300 dark:hover:border-navy-600 text-slate-900 dark:text-white opacity-75 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">STAGE 02</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-semibold">Asset Linked</span>
                </div>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Technical Exposure</span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">ASST-104</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">AWS K8s Core Cluster</p>
              </button>

              <button
                onClick={() => setActiveStage(3)}
                className={`text-left p-5 rounded-2xl shadow-md transition-all flex flex-col justify-between border ${
                  activeStage === 3
                    ? "bg-white dark:bg-[#0A111F] border-primary ring-2 ring-primary/20 text-slate-900 dark:text-white"
                    : "bg-white dark:bg-[#0A111F] border-slate-200 dark:border-navy-700 hover:border-slate-300 dark:hover:border-navy-600 text-slate-900 dark:text-white opacity-75 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-primary">STAGE 03</span>
                  <span className="px-2 py-0.5 rounded-full bg-primary/15 text-primary font-mono text-[10px] font-semibold">Active SLA</span>
                </div>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Governed Action</span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">ACT-082</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">DevOps SLA Tracking</p>
              </button>

              <button
                onClick={() => setActiveStage(4)}
                className={`text-left p-5 rounded-2xl shadow-md transition-all flex flex-col justify-between border ${
                  activeStage === 4
                    ? "bg-white dark:bg-[#0A111F] border-emerald-500 ring-2 ring-emerald-500/20 text-slate-900 dark:text-white"
                    : "bg-white dark:bg-[#0A111F] border-slate-200 dark:border-navy-700 hover:border-slate-300 dark:hover:border-navy-600 text-slate-900 dark:text-white opacity-75 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">STAGE 04</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-semibold">Verified</span>
                </div>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Defensible Record</span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">ATTEST-99</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Auditor-Verified Entry</p>
              </button>
            </div>

            {/* Stage Detail Display Box */}
            <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-[#0A111F] shadow-lg border border-slate-200 dark:border-navy-700">
              {activeStage === 1 && (
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                  <div className="flex flex-col gap-3 max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-primary">STAGE 01: IDENTIFIED RISK</span>
                      <span className="px-2.5 py-0.5 rounded bg-rose-500/15 text-rose-600 dark:text-rose-400 font-mono text-xs font-bold">
                        Score: 20 / 25
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">RSK-019: Production API Credential Exposure</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Production API Credential Exposure Risk prioritized at High following external attack surface delta inspection. Bound directly to active cloud cluster.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveStage(2)}
                    className="py-3 px-6 rounded-lg bg-primary text-white font-medium text-xs hover:bg-primary/90 transition-all flex items-center gap-2 shadow-sm"
                  >
                    <span>Advance to Technical Exposure</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {activeStage === 2 && (
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                  <div className="flex flex-col gap-3 max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">STAGE 02: TECHNICAL EXPOSURE</span>
                      <span className="px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">
                        Asset: ASST-104
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Linked Asset: AWS Kubernetes Core Cluster</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      1 active scanner finding linked with zero unverified auto-patching assumptions. Human verification gate enforced before SLA trigger.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveStage(3)}
                    className="py-3 px-6 rounded-lg bg-primary text-white font-medium text-xs hover:bg-primary/90 transition-all flex items-center gap-2 shadow-sm"
                  >
                    <span>Advance to Governed Action</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {activeStage === 3 && (
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                  <div className="flex flex-col gap-3 max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-primary">STAGE 03: GOVERNED ACTION</span>
                      <span className="px-2.5 py-0.5 rounded bg-primary/15 text-primary font-mono text-xs font-bold">
                        Action: ACT-082
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Remediation Assigned &amp; Active SLA</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Remediation assigned to Lead DevOps engineer; target SLA active with 14 days remaining before CISO escalation threshold.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveStage(4)}
                    className="py-3 px-6 rounded-lg bg-primary text-white font-medium text-xs hover:bg-primary/90 transition-all flex items-center gap-2 shadow-sm"
                  >
                    <span>Advance to Defensible Record</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {activeStage === 4 && (
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                  <div className="flex flex-col gap-3 max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">STAGE 04: DEFENSIBLE RECORD</span>
                      <span className="px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">
                        Record: ATTEST-99
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Auditor-Verified Governance Entry</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Lead sign-off logged in application audit log; SOC 2 workpaper dossier and executive report updated.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveStage(1)}
                    className="py-3 px-6 rounded-lg bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-900 dark:text-white font-medium text-xs transition-all flex items-center gap-2 border border-slate-200 dark:border-navy-700"
                  >
                    <RotateCcw className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    <span>Reset Flow Simulator</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 5: RELEVANT EXECUTIVE MODULES */}
        <section className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mb-12">
            <div className="font-mono text-xs text-primary uppercase tracking-wider mb-2 font-semibold">
              ORCHESTRATED MODULES
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Executive Modules Built for Clarity
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
              Explore the core OMNiGRC operational workflows designed specifically for high-assurance security leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/products/risk-register"
              className="group p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-navy-700 flex flex-col justify-between"
            >
              <div>
                <ShieldAlert className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Risk Register</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Asset-centric risk scoring for executive visibility.
                </p>
              </div>
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Inspect Module <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/products/remediation"
              className="group p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-navy-700 flex flex-col justify-between"
            >
              <div>
                <Clock className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-3" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Remediation Register</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Unified SLA tracking across vulnerability findings and CAPA items.
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
                <FileCheck className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Audit Management</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Structured workpapers and read-only auditor access.
                </p>
              </div>
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Inspect Module <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/products/control-mapping"
              className="group p-6 rounded-2xl bg-white dark:bg-[#16233F] shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-navy-700 flex flex-col justify-between"
            >
              <div>
                <Layers className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-3" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Control Mapping</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Unified controls mapped across SOC 2, ISO 27001, and HIPAA.
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
                  Bring defensible oversight to your security program.
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  Connect executive risk reporting directly to operational reality with OMNiGRC.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium text-sm shadow-md transition-all"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Schedule CISO Executive Briefing</span>
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
