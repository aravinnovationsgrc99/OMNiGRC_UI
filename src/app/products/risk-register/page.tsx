import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Risk Register | OMNiGRC Connected Workflows",
  description: "Maintain continuous risk registers with calibrated 5x5 Likelihood × Impact scoring mapped directly to tracked infrastructure assets.",
};

export default function RiskRegisterPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />
      <main className="flex-1 w-full pt-16 bg-transparent min-h-screen">
<div className="flex flex-col w-full">
        {/*  Hero Section (Clean Analytical Typography Focus)  */}
        <section className="w-full px-3 sm:px-6 lg:px-8 xl:px-12 pt-4 sm:pt-6 lg:pt-6 xl:pt-8 pb-4 sm:pb-6 lg:pb-6 xl:pb-8 bg-grid-mesh-adaptive text-center lg:text-left overflow-hidden">
          <div className="w-full max-w-7xl lg:max-w-[95%] xl:max-w-[94%] 2xl:max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4 sm:space-y-5 lg:space-y-5 xl:space-y-6 mx-auto lg:mx-0 w-full max-w-full min-w-0">
              <h1 className="text-[26px] min-[360px]:text-[29px] min-[390px]:text-[32px] min-[410px]:text-[34px] min-[430px]:text-[36px] sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[48px] 2xl:text-[54px] font-black tracking-tight leading-[1.14] lg:leading-[1.08] text-center lg:text-left w-full max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                <span className="block whitespace-nowrap text-slate-900 dark:text-white">
                  Calibrated Risk Registers
                </span>
                <span className="block mt-1 sm:mt-1.5 lg:mt-1 bg-gradient-to-r from-[#F15E1C] via-[#ea580c] to-[#d97706] bg-clip-text text-transparent whitespace-nowrap">
                  Directly Connected
                </span>
                <span className="block mt-0.5 sm:mt-1 lg:mt-0.5 bg-gradient-to-r from-[#F15E1C] via-[#ea580c] to-[#d97706] bg-clip-text text-transparent whitespace-nowrap">
                  to Assets
                </span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-[15.5px] xl:text-[16.5px] text-slate-600 dark:text-slate-300 max-w-sm sm:max-w-lg lg:max-w-[540px] xl:max-w-[580px] leading-relaxed text-center lg:text-left mx-auto lg:mx-0 px-2 lg:px-0">
                Maintain continuous risk registers with calibrated 5×5 Likelihood × Impact scoring mapped directly to tracked infrastructure assets.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 lg:gap-4 w-full max-w-md lg:max-w-none mx-auto lg:mx-0 pt-1 sm:pt-2">
                <a 
                  className="w-full sm:w-auto flex-1 lg:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 lg:px-5 lg:py-2.5 rounded-2xl bg-[#005f4e] hover:bg-[#004d3f] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all text-center lg:text-left" 
                  href="#matrix-view"
                >
                  <Circle className="h-5 w-5 shrink-0 stroke-[2.2]" />
                  <span className="lg:hidden">Explore Risk Register Demo</span>
                  <span className="hidden lg:flex flex-col leading-tight">
                    <span>Explore Risk</span>
                    <span>Register Demo</span>
                  </span>
                </a>
                <a 
                  className="w-full sm:w-auto flex-1 lg:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 lg:px-6 lg:py-3.5 rounded-2xl bg-white dark:bg-navy-800 text-slate-900 dark:text-white text-xs sm:text-sm font-bold hover:bg-slate-50 dark:hover:bg-navy-700 transition-colors text-center border border-slate-200/90 dark:border-navy-700 shadow-sm whitespace-nowrap" 
                  href="#audit-log"
                >
                  <span>View Audit Logging</span>
                  <ArrowRight className="h-4 w-4 shrink-0 stroke-[2.2]" />
                </a>
              </div>
              {/*  Metric strip  */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 lg:gap-4 xl:gap-5 w-full pt-2 sm:pt-3 lg:pt-3 max-w-xl lg:max-w-none mx-auto lg:mx-0">
                <div className="p-3 sm:p-4 lg:py-4 lg:px-3 xl:py-5 xl:px-4 rounded-2xl bg-white dark:bg-[#16233F] border border-slate-100 dark:border-navy-700/60 shadow-md shadow-slate-200/50 dark:shadow-none flex flex-col items-center text-center justify-between min-w-0 transition-transform hover:-translate-y-0.5">
                  <span className="block font-mono text-[9.5px] min-[360px]:text-[10px] sm:text-xs lg:text-[11px] xl:text-xs text-slate-600 dark:text-slate-300 uppercase tracking-tight font-bold truncate w-full text-center">Tracked Risks</span>
                  <span className="block text-2xl min-[360px]:text-[26px] sm:text-3xl lg:text-3xl xl:text-4xl font-black text-slate-900 dark:text-white my-1 sm:my-1.5 lg:my-1 text-center">142</span>
                  <span className="block text-[10.5px] min-[360px]:text-[11px] sm:text-xs lg:text-xs text-amber-700 dark:text-amber-400 font-semibold leading-tight text-center">
                    100% bound
                  </span>
                </div>
                <div className="p-3 sm:p-4 lg:py-4 lg:px-3 xl:py-5 xl:px-4 rounded-2xl bg-white dark:bg-[#16233F] border border-slate-100 dark:border-navy-700/60 shadow-md shadow-slate-200/50 dark:shadow-none flex flex-col items-center text-center justify-between min-w-0 transition-transform hover:-translate-y-0.5">
                  <span className="block font-mono text-[9.5px] min-[360px]:text-[10px] sm:text-xs lg:text-[11px] xl:text-xs text-slate-600 dark:text-slate-300 uppercase tracking-tight font-bold truncate w-full text-center">Asset Coverage</span>
                  <span className="block text-2xl min-[360px]:text-[26px] sm:text-3xl lg:text-3xl xl:text-4xl font-black text-slate-900 dark:text-white my-1 sm:my-1.5 lg:my-1 text-center">94.2%</span>
                  <span className="block text-[10.5px] min-[360px]:text-[11px] sm:text-xs lg:text-xs text-slate-600 dark:text-slate-300 font-medium leading-tight text-center">
                    Asset linked
                  </span>
                </div>
                <div className="p-3 sm:p-4 lg:py-4 lg:px-3 xl:py-5 xl:px-4 rounded-2xl bg-white dark:bg-[#16233F] border border-slate-100 dark:border-navy-700/60 shadow-md shadow-slate-200/50 dark:shadow-none flex flex-col items-center text-center justify-between min-w-0 transition-transform hover:-translate-y-0.5">
                  <span className="block font-mono text-[9.5px] min-[360px]:text-[10px] sm:text-xs lg:text-[11px] xl:text-xs text-slate-600 dark:text-slate-300 uppercase tracking-tight font-bold truncate w-full text-center">Recalc Latency</span>
                  <span className="block text-2xl min-[360px]:text-[26px] sm:text-3xl lg:text-3xl xl:text-4xl font-black text-teal-700 dark:text-teal-400 my-1 sm:my-1.5 lg:my-1 text-center">&lt; 1.2s</span>
                  <span className="block text-[10.5px] min-[360px]:text-[11px] sm:text-xs lg:text-xs text-slate-600 dark:text-slate-300 font-medium leading-tight text-center">
                    Live sync
                  </span>
                </div>
              </div>
            </div>
            {/*  Hero Visual Card with Visual Asset  */}
            <div className="relative w-full min-w-0">
              <div className="rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl bg-white dark:bg-[#0A111F] p-3.5 sm:p-6 lg:p-6 space-y-3 sm:space-y-4 lg:space-y-4 text-center border border-slate-200 dark:border-navy-700/60">
                <div className="flex items-center justify-between gap-2 min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-600 dark:bg-red-500 shrink-0"></span>
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500 shrink-0"></span>
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500 shrink-0"></span>
                    <span className="font-mono text-[10px] min-[360px]:text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 truncate ml-1">omni-risk-engine-daemon</span>
                  </div>
                  <span className="font-mono text-[10px] sm:text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white shrink-0">v3.42-hotpatch</span>
                </div>
                <div className="relative rounded-lg lg:rounded-xl overflow-hidden h-48 sm:h-60 lg:h-64 xl:h-72 w-full">
                  <img className="w-full h-full object-cover" data-alt="Enterprise SecOps monitoring center showing security analysts analyzing cloud infrastructure risk heatmaps and live telemetry dashboards in a warm modern light-filled engineering workspace with architectural orange and slate accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0pJsovCAqksc75OL5Qhrqv--cbsqwpwipwejm2s_DWsuq2I2gss2xKY0Vlz9P9yLWsOIO9GUXUWV_Xml0-H2TjrOfYqD5BiXxQwzdLVCsX6QPRQWt0als3LpyX-QKUVuvewJHzH8FsiS22fD1HnkoiPwidNbYjpf80EqR5DIrJfjw36NEcpg1j5Lwtpw8wH2-lyFitRhOr-dDa9ywcrZf7UoqnCbMD_Vr8GRiQ6zppyFtWMBM6bP5cA" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end justify-center p-3 sm:p-6 text-center">
                    <div className="text-white text-center w-full">
                      <p className="font-mono text-[9px] sm:text-xs text-slate-300">EVENT RECORDED #4419</p>
                      <p className="text-xs sm:text-sm font-semibold text-white">AWS KMS rotation verified: Risk score calibrated for AST-059</p>
                    </div>
                  </div>
                </div>
                <div className="p-2.5 sm:p-4 rounded-lg lg:rounded-xl bg-slate-50 dark:bg-[#16233F] flex items-center justify-start gap-2.5 min-w-0">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-teal-600 dark:text-teal-400" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">Auto-Evidence Ledger attached</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  Interactive 5x5 Matrix Section  */}
        <section className="w-full px-3 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-10 md:py-16 lg:py-8 xl:py-10 bg-slate-50 dark:bg-[#16233F] text-left" id="matrix-view">
          <div className="w-full max-w-7xl lg:max-w-[95%] xl:max-w-[94%] 2xl:max-w-[1720px] mx-auto space-y-4 sm:space-y-6 text-left">
            <div className="flex flex-col items-start text-left gap-2 sm:gap-3 max-w-3xl lg:max-w-none">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-teal-600 dark:text-teal-400 uppercase font-bold tracking-wider text-left">Dynamic Risk Calibration</span>
                <span className="px-2 py-0.5 rounded font-mono text-[10px] sm:text-xs font-semibold bg-slate-200 dark:bg-navy-700 text-slate-600 dark:text-slate-300 text-left">(Illustrative Demo Data)</span>
              </div>
              <h2 className="text-[19px] min-[350px]:text-[21px] min-[390px]:text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white font-bold mt-1 tracking-tight leading-snug text-left lg:whitespace-nowrap">
                Interactive 5×5 Likelihood × Impact Heatmap
              </h2>
              <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 mt-1 leading-relaxed text-left max-w-2xl lg:max-w-none lg:whitespace-nowrap">
                Calibrated 5×5 Likelihood × Impact matrix reflecting direct Asset-to-Risk linkage. Click any cell to inspect risk scoring.
              </p>
              <div className="flex items-center gap-2 bg-white dark:bg-[#0A111F] px-3 py-2 rounded-lg shadow-sm border mt-1">
                <Circle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-teal-600" />
                <span className="text-xs font-semibold text-slate-900 dark:text-white text-left">5x5 Likelihood × Impact Scoring</span>
              </div>
            </div>
            {/*  Matrix Workspace Container  */}
            <RiskMatrix />
          </div>
        </section>

        {/*  Risk Treatments Explained Section  */}
        <section className="w-full px-3 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-10 md:py-16 lg:py-8 xl:py-10 text-left">
          <div className="w-full max-w-7xl lg:max-w-[95%] xl:max-w-[94%] 2xl:max-w-[1720px] mx-auto space-y-4 sm:space-y-6 text-left">
            <div className="text-left max-w-3xl lg:max-w-none space-y-1.5 sm:space-y-2">
              <span className="font-mono text-xs text-teal-600 dark:text-teal-400 uppercase font-bold tracking-wider text-left">Operational Treatment Taxonomy</span>
              <h2 className="text-[19px] min-[350px]:text-[21px] min-[390px]:text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-snug text-left lg:whitespace-nowrap">
                The Four Core Risk Treatments, Automated
              </h2>
              <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-left max-w-2xl lg:max-w-none lg:whitespace-nowrap mt-1 sm:mt-2">
                Every quantified entry in OMNiGRC is bound to an actionable, legally defensible treatment path. No ambiguity, no neglected risks forgotten in spreadsheets.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
              {/*  Card 1: Mitigate  */}
              <div className="p-3.5 sm:p-4 md:p-5 rounded-xl bg-white dark:bg-[#0A111F] shadow-sm hover:shadow-md flex flex-col justify-between gap-2.5 sm:gap-3 hover:-translate-y-0.5 transition-all border border-slate-200/80 dark:border-navy-700/60">
                <div className="flex flex-col gap-2 sm:gap-2.5 w-full">
                  {/* Mobile header (< lg) - preserved */}
                  <div className="flex lg:hidden items-center justify-between gap-2 w-full">
                    <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-amber-600 dark:bg-amber-500 flex items-center justify-center text-white shrink-0">
                        <CheckCircle2 className="h-4 w-4 shrink-0" />
                      </div>
                      <h3 className="text-sm sm:text-base text-slate-900 dark:text-white font-bold truncate">Control Safeguards</h3>
                    </div>
                    <span className="px-2 py-0.5 rounded font-mono text-[10px] sm:text-xs font-semibold bg-amber-600 dark:bg-amber-500 text-white shrink-0 whitespace-nowrap">
                      STRATEGY: MITIGATE
                    </span>
                  </div>
                  {/* Desktop header (>= lg) - fully visible without truncation */}
                  <div className="hidden lg:flex flex-col gap-2.5 w-full">
                    <div className="flex items-center justify-between gap-2 w-full">
                      <div className="w-8 h-8 rounded-lg bg-amber-600 dark:bg-amber-500 flex items-center justify-center text-white shrink-0">
                        <CheckCircle2 className="h-4 w-4 shrink-0" />
                      </div>
                      <span className="px-2 py-0.5 rounded font-mono text-[10px] xl:text-[11px] font-semibold bg-amber-600 dark:bg-amber-500 text-white shrink-0 whitespace-nowrap">
                        STRATEGY: MITIGATE
                      </span>
                    </div>
                    <h3 className="text-base text-slate-900 dark:text-white font-bold leading-snug">
                      Control Safeguards
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-snug sm:leading-relaxed text-justify sm:text-left">
                    Direct mapping to technical, physical, or administrative controls with continuous test verification and dynamic score suppression.
                  </p>
                </div>
                <div className="py-1.5 sm:py-2 px-2.5 rounded-lg bg-slate-50 dark:bg-[#16233F] border border-slate-100 dark:border-navy-700/50 flex flex-wrap items-center justify-between gap-x-2 gap-y-0.5 w-full mt-1 sm:mt-1.5">
                  <span className="font-mono text-[11px] sm:text-xs text-slate-900 dark:text-white font-semibold">Active: 104 Risks</span>
                  <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">Continuous API checks</span>
                </div>
              </div>

              {/*  Card 2: Accept  */}
              <div className="p-3.5 sm:p-4 md:p-5 rounded-xl bg-white dark:bg-[#0A111F] shadow-sm hover:shadow-md flex flex-col justify-between gap-2.5 sm:gap-3 hover:-translate-y-0.5 transition-all border border-slate-200/80 dark:border-navy-700/60">
                <div className="flex flex-col gap-2 sm:gap-2.5 w-full">
                  {/* Mobile header (< lg) - preserved */}
                  <div className="flex lg:hidden items-center justify-between gap-2 w-full">
                    <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shrink-0">
                        <Circle className="h-4 w-4 shrink-0" />
                      </div>
                      <h3 className="text-sm sm:text-base text-slate-900 dark:text-white font-bold truncate">Executive Sign-Off</h3>
                    </div>
                    <span className="px-2 py-0.5 rounded font-mono text-[10px] sm:text-xs font-semibold bg-tertiary text-on-tertiary shrink-0 whitespace-nowrap">
                      STRATEGY: ACCEPT
                    </span>
                  </div>
                  {/* Desktop header (>= lg) - fully visible without truncation */}
                  <div className="hidden lg:flex flex-col gap-2.5 w-full">
                    <div className="flex items-center justify-between gap-2 w-full">
                      <div className="w-8 h-8 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shrink-0">
                        <Circle className="h-4 w-4 shrink-0" />
                      </div>
                      <span className="px-2 py-0.5 rounded font-mono text-[10px] xl:text-[11px] font-semibold bg-tertiary text-on-tertiary shrink-0 whitespace-nowrap">
                        STRATEGY: ACCEPT
                      </span>
                    </div>
                    <h3 className="text-base text-slate-900 dark:text-white font-bold leading-snug">
                      Executive Sign-Off
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-snug sm:leading-relaxed text-justify sm:text-left">
                    Formal risk acceptance with documented business justification, non-delegable CISO authorization, and strict expiration date alerts.
                  </p>
                </div>
                <div className="py-1.5 sm:py-2 px-2.5 rounded-lg bg-slate-50 dark:bg-[#16233F] border border-slate-100 dark:border-navy-700/50 flex flex-wrap items-center justify-between gap-x-2 gap-y-0.5 w-full mt-1 sm:mt-1.5">
                  <span className="font-mono text-[11px] sm:text-xs text-slate-900 dark:text-white font-semibold">Active: 18 Risks</span>
                  <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">90-day review cycles</span>
                </div>
              </div>

              {/*  Card 3: Transfer  */}
              <div className="p-3.5 sm:p-4 md:p-5 rounded-xl bg-white dark:bg-[#0A111F] shadow-sm hover:shadow-md flex flex-col justify-between gap-2.5 sm:gap-3 hover:-translate-y-0.5 transition-all border border-slate-200/80 dark:border-navy-700/60">
                <div className="flex flex-col gap-2 sm:gap-2.5 w-full">
                  {/* Mobile header (< lg) - preserved */}
                  <div className="flex lg:hidden items-center justify-between gap-2 w-full">
                    <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-navy-700 flex items-center justify-center text-slate-900 dark:text-white shrink-0">
                        <Circle className="h-4 w-4 shrink-0" />
                      </div>
                      <h3 className="text-sm sm:text-base text-slate-900 dark:text-white font-bold truncate">Contractual Offload</h3>
                    </div>
                    <span className="px-2 py-0.5 rounded font-mono text-[10px] sm:text-xs font-semibold bg-slate-200 dark:bg-navy-700est text-slate-900 dark:text-white shrink-0 whitespace-nowrap">
                      STRATEGY: TRANSFER
                    </span>
                  </div>
                  {/* Desktop header (>= lg) - fully visible without truncation */}
                  <div className="hidden lg:flex flex-col gap-2.5 w-full">
                    <div className="flex items-center justify-between gap-2 w-full">
                      <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-navy-700 flex items-center justify-center text-slate-900 dark:text-white shrink-0">
                        <Circle className="h-4 w-4 shrink-0" />
                      </div>
                      <span className="px-2 py-0.5 rounded font-mono text-[10px] xl:text-[11px] font-semibold bg-slate-200 dark:bg-navy-700est text-slate-900 dark:text-white shrink-0 whitespace-nowrap">
                        STRATEGY: TRANSFER
                      </span>
                    </div>
                    <h3 className="text-base text-slate-900 dark:text-white font-bold leading-snug">
                      Contractual Offload
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-snug sm:leading-relaxed text-justify sm:text-left">
                    Cyber insurance underwriting and third-party vendor indemnification contracts linked directly into our automated Vendor Inventory.
                  </p>
                </div>
                <div className="py-1.5 sm:py-2 px-2.5 rounded-lg bg-slate-50 dark:bg-[#16233F] border border-slate-100 dark:border-navy-700/50 flex flex-wrap items-center justify-between gap-x-2 gap-y-0.5 w-full mt-1 sm:mt-1.5">
                  <span className="font-mono text-[11px] sm:text-xs text-slate-900 dark:text-white font-semibold">Active: 12 Risks</span>
                  <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">SLA policy linked</span>
                </div>
              </div>

              {/*  Card 4: Avoid  */}
              <div className="p-3.5 sm:p-4 md:p-5 rounded-xl bg-white dark:bg-[#0A111F] shadow-sm hover:shadow-md flex flex-col justify-between gap-2.5 sm:gap-3 hover:-translate-y-0.5 transition-all border border-slate-200/80 dark:border-navy-700/60">
                <div className="flex flex-col gap-2 sm:gap-2.5 w-full">
                  {/* Mobile header (< lg) - preserved */}
                  <div className="flex lg:hidden items-center justify-between gap-2 w-full">
                    <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center text-teal-800 dark:text-teal-300 shrink-0">
                        <Circle className="h-4 w-4 shrink-0" />
                      </div>
                      <h3 className="text-sm sm:text-base text-slate-900 dark:text-white font-bold truncate">Sunset &amp; Decommission</h3>
                    </div>
                    <span className="px-2 py-0.5 rounded font-mono text-[10px] sm:text-xs font-semibold bg-teal-600 dark:bg-teal-500 text-white shrink-0 whitespace-nowrap">
                      STRATEGY: AVOID
                    </span>
                  </div>
                  {/* Desktop header (>= lg) - fully visible without truncation */}
                  <div className="hidden lg:flex flex-col gap-2.5 w-full">
                    <div className="flex items-center justify-between gap-2 w-full">
                      <div className="w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center text-teal-800 dark:text-teal-300 shrink-0">
                        <Circle className="h-4 w-4 shrink-0" />
                      </div>
                      <span className="px-2 py-0.5 rounded font-mono text-[10px] xl:text-[11px] font-semibold bg-teal-600 dark:bg-teal-500 text-white shrink-0 whitespace-nowrap">
                        STRATEGY: AVOID
                      </span>
                    </div>
                    <h3 className="text-base text-slate-900 dark:text-white font-bold leading-snug">
                      Sunset &amp; Decommission
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-snug sm:leading-relaxed text-justify sm:text-left">
                    Permanently eliminating exposure by terminating high-risk microservices, unmaintained legacy software, or risky geographical routes.
                  </p>
                </div>
                <div className="py-1.5 sm:py-2 px-2.5 rounded-lg bg-slate-50 dark:bg-[#16233F] border border-slate-100 dark:border-navy-700/50 flex flex-wrap items-center justify-between gap-x-2 gap-y-0.5 w-full mt-1 sm:mt-1.5">
                  <span className="font-mono text-[11px] sm:text-xs text-slate-900 dark:text-white font-semibold">Active: 8 Risks</span>
                  <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">Tear-down completed</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  Continuous vs Point-in-Time Comparison & PostgreSQL Audit Log  */}
        <section className="w-full px-3 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-10 md:py-16 lg:py-8 xl:py-10 bg-slate-50 dark:bg-[#16233F] text-left" id="audit-log">
          <div className="w-full max-w-7xl lg:max-w-[95%] xl:max-w-[94%] 2xl:max-w-[1720px] mx-auto space-y-4 sm:space-y-8 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
              <div className="lg:col-span-5 space-y-3 sm:space-y-4 flex flex-col items-start text-left">
                <span className="font-mono text-xs text-teal-600 dark:text-teal-400 uppercase font-bold tracking-wider text-left">Dynamic Architecture</span>
                <h2 className="text-[19px] min-[350px]:text-[21px] min-[390px]:text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-snug text-left">
                  Continuous Calibration vs. Annual Stagnation
                </h2>
                <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  Annual or quarterly audit checklists hide the fact that security controls fail unpredictably between review intervals. OMNiGRC turns risk scoring into an autonomic nervous system.
                </p>
                {/*  Interactive Comparison Toggle Cards  */}
                <div className="space-y-2 sm:space-y-3 w-full">
                  <div className="p-3.5 sm:p-5 rounded-xl bg-white dark:bg-[#0A111F] shadow-sm space-y-2 flex flex-col items-start text-left">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xs sm:text-sm font-semibold text-red-600 dark:text-red-400 text-left">The Static Spreadsheet Problem</span>
                      <XCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-red-500" />
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-justify">
                      Scores freeze in Excel spreadsheets for 12 months. When a WAF rule is misconfigured or a key backup script silently fails, your residual risk stays green while production sits defenseless.
                    </p>
                  </div>
                  <div className="p-3.5 sm:p-5 rounded-xl bg-white dark:bg-[#0A111F] shadow-md space-y-2 flex flex-col items-start text-left">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xs sm:text-sm font-semibold text-amber-600 dark:text-amber-500 text-left">The OMNiGRC Real-Time Engine</span>
                      <Circle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-amber-500" />
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-justify">When telemetry detects state change at 03:15 UTC, RSK-042 risk score immediately updates to 16 (High) and posts an entry to the append-only audit log.</p>
                  </div>
                </div>
              </div>
              {/*  Structured Audit Log Terminal (Telemetry surface)  */}
              <div className="lg:col-span-7 rounded-xl bg-slate-900 dark:bg-black text-white p-3.5 sm:p-6 md:p-8 shadow-xl space-y-3 sm:space-y-4 flex flex-col justify-between text-left">
                <div className="space-y-1.5 sm:space-y-2 flex flex-col items-start text-left">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-surface-container-lowest/10 w-full text-left">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-600 dark:bg-amber-500 animate-pulse"></span>
                      <span className="font-mono text-xs font-bold text-surface-container-lowest">Append-Only Audit Logging</span>
                    </div>
                    <span className="font-mono text-[10px] sm:text-xs text-slate-400">audit_log_stream = active</span>
                  </div>
                  <p className="font-mono text-[10px] sm:text-xs text-slate-400 truncate text-left w-full">SELECT timestamp, risk_id, new_score, trigger_event, user_id FROM omni_risk_audit_stream LIMIT 4;</p>
                </div>
                {/*  Log entries table  */}
                <div className="space-y-1.5 sm:space-y-2 font-mono text-xs overflow-x-auto text-left">
                  {/*  Entry 1  */}
                  <div className="p-2.5 sm:p-3.5 rounded bg-white dark:bg-[#0A111F]/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-teal-700 dark:text-teal-400">2026-03-30 08:41:12 UTC</span>
                      <span className="px-1.5 py-0.5 rounded bg-white dark:bg-[#0A111F]/10 text-surface-container-lowest">RSK-042</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <span>16 → <strong className="text-amber-700 dark:text-amber-400">4</strong></span>
                      <span>[CTRL-012 PASS]</span>
                      <span className="text-surface-container-lowest text-2xs">sig: p_dev_lead</span>
                    </div>
                  </div>
                  {/*  Entry 2  */}
                  <div className="p-2.5 sm:p-3.5 rounded bg-white dark:bg-[#0A111F]/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-teal-700 dark:text-teal-400">2026-03-30 04:12:05 UTC</span>
                      <span className="px-1.5 py-0.5 rounded bg-white dark:bg-[#0A111F]/10 text-surface-container-lowest">RSK-029</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <span>12 → <strong className="text-amber-700 dark:text-amber-400">3</strong></span>
                      <span>[CTRL-015 REMEDIATED]</span>
                      <span className="text-surface-container-lowest text-2xs">sig: auto_bot</span>
                    </div>
                  </div>
                  {/*  Entry 3  */}
                  <div className="p-2.5 sm:p-3.5 rounded bg-white dark:bg-[#0A111F]/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-teal-700 dark:text-teal-400">2026-03-29 23:19:40 UTC</span>
                      <span className="px-1.5 py-0.5 rounded bg-white dark:bg-[#0A111F]/10 text-surface-container-lowest">RSK-009</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <span>8 → <strong className="text-red-600 dark:text-red-400 font-bold">20</strong></span>
                      <span>[VPC DRIFT DETECTED]</span>
                      <span className="text-surface-container-lowest text-2xs">sig: daemon_alert</span>
                    </div>
                  </div>
                  {/*  Entry 4  */}
                  <div className="p-2.5 sm:p-3.5 rounded bg-white dark:bg-[#0A111F]/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-teal-700 dark:text-teal-400">2026-03-29 17:02:11 UTC</span>
                      <span className="px-1.5 py-0.5 rounded bg-white dark:bg-[#0A111F]/10 text-surface-container-lowest">RSK-078</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500">
                      <span>6 → <strong className="text-amber-700 dark:text-amber-400">2</strong></span>
                      <span>[SCIM SYNC SUCCESS]</span>
                      <span className="text-surface-container-lowest text-2xs">sig: d_chen_eng</span>
                    </div>
                  </div>
                </div>
                <div className="pt-2 flex flex-wrap items-center justify-between text-slate-500 font-mono text-[10px] sm:text-xs text-left gap-2">
                  <span className="truncate text-left">Log Sequence ID: seq_8c37f_91aa4</span>
                  <span className="inline-flex items-center gap-1 text-amber-700 dark:text-amber-400 shrink-0 text-left">
                    <Circle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" /> Append-Only Audit Trail
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  Cross-Workflow Linkage Diagram  */}
        <section className="w-full px-3 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-10 md:py-16 lg:py-8 xl:py-10 text-left">
          <div className="w-full max-w-7xl lg:max-w-[95%] xl:max-w-[94%] 2xl:max-w-[1720px] mx-auto space-y-4 sm:space-y-6 lg:space-y-8 text-left">
            <div className="text-left max-w-3xl lg:max-w-none space-y-1.5 sm:space-y-2">
              <span className="font-mono text-xs text-teal-600 dark:text-teal-400 uppercase font-bold tracking-wider text-left">Total Ecosystem Interoperability</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-snug text-left lg:whitespace-nowrap">
                <span className="block lg:inline">The Continuous </span>
                <span className="block lg:inline">Assurance Lifecycle</span>
              </h2>
              <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-left max-w-2xl lg:max-w-none lg:whitespace-nowrap mt-1 sm:mt-2">
                How an identified risk traverses every workflow module inside OMNiGRC, turning raw technical signals into indisputable audit evidence.
              </p>
            </div>
            {/*  Process Diagram Strip  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-stretch">
              {/* Step 1 */}
              <div className="bg-white/90 dark:bg-[#16233F]/95 backdrop-blur-md border border-slate-200/90 dark:border-navy-700/70 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group hover:-translate-y-0.5 text-left">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-navy-800/80">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">01 / DISCOVERY</span>
                    <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                      <Circle className="h-4 w-4 shrink-0 stroke-[2.2]" />
                    </div>
                  </div>
                  <div className="pt-3 pb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight text-left mb-2">
                      Risk Identified
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left">
                      Threat modeled or ingested via threat feeds.
                    </p>
                  </div>
                </div>
                <div className="pt-3 mt-4 border-t border-slate-100 dark:border-navy-800/80 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-900 dark:text-white tracking-tight">
                    RSK-042
                  </span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white/90 dark:bg-[#16233F]/95 backdrop-blur-md border border-slate-200/90 dark:border-navy-700/70 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group hover:-translate-y-0.5 text-left">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-navy-800/80">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">02 / MAPPING</span>
                    <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                      <Circle className="h-4 w-4 shrink-0 stroke-[2.2]" />
                    </div>
                  </div>
                  <div className="pt-3 pb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight text-left mb-2">
                      Asset Linked
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left">
                      Direct Asset-to-Risk linkage for targeted impact evaluation.
                    </p>
                  </div>
                </div>
                <div className="pt-3 mt-4 border-t border-slate-100 dark:border-navy-800/80 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-900 dark:text-white tracking-tight">
                    AST-059
                  </span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white/90 dark:bg-[#16233F]/95 backdrop-blur-md border border-slate-200/90 dark:border-navy-700/70 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group hover:-translate-y-0.5 text-left">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-navy-800/80">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">03 / QUANTIFY</span>
                    <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                      <Circle className="h-4 w-4 shrink-0 stroke-[2.2]" />
                    </div>
                  </div>
                  <div className="pt-3 pb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight text-left mb-2">
                      Vulnerability Scored
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left">
                      CVSS / EPSS factors calibrate inherent score.
                    </p>
                  </div>
                </div>
                <div className="pt-3 mt-4 border-t border-slate-100 dark:border-navy-800/80 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-red-600 dark:text-red-400 tracking-tight">
                    Score: 16 (High)
                  </span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white/90 dark:bg-[#16233F]/95 backdrop-blur-md border border-slate-200/90 dark:border-navy-700/70 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group hover:-translate-y-0.5 text-left">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-navy-800/80">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">04 / DEFENSE</span>
                    <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-500 flex items-center justify-center shrink-0">
                      <Shield className="h-4 w-4 shrink-0 stroke-[2.2]" />
                    </div>
                  </div>
                  <div className="pt-3 pb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight text-left mb-2">
                      Control Mitigated
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left">
                      Automated tests suppress residual likelihood.
                    </p>
                  </div>
                </div>
                <div className="pt-3 mt-4 border-t border-slate-100 dark:border-navy-800/80 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-500 tracking-tight">
                    CTRL-012 PASS
                  </span>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white/90 dark:bg-[#16233F]/95 backdrop-blur-md border border-slate-200/90 dark:border-navy-700/70 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group hover:-translate-y-0.5 text-left">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-navy-800/80">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">05 / POSTURE</span>
                    <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                      <Circle className="h-4 w-4 shrink-0 stroke-[2.2]" />
                    </div>
                  </div>
                  <div className="pt-3 pb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight text-left mb-2">
                      Compliance Board
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left">
                      ISO 27001 Annex A.8.13 reflected as Green.
                    </p>
                  </div>
                </div>
                <div className="pt-3 mt-4 border-t border-slate-100 dark:border-navy-800/80 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-teal-600 dark:text-teal-400 tracking-tight">
                    Status: 99.4%
                  </span>
                </div>
              </div>

              {/* Step 6 */}
              <div className="bg-white/90 dark:bg-[#16233F]/95 backdrop-blur-md border border-slate-200/90 dark:border-navy-700/70 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full group hover:-translate-y-0.5 text-left">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-navy-800/80">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">06 / VERIFIED</span>
                    <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-500 flex items-center justify-center shrink-0">
                      <Circle className="h-4 w-4 shrink-0 stroke-[2.2]" />
                    </div>
                  </div>
                  <div className="pt-3 pb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight text-left mb-2">
                      Auditor Evidence
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left">
                      Recorded evidence status stored in Evidence Vault.
                    </p>
                  </div>
                </div>
                <div className="pt-3 mt-4 border-t border-slate-100 dark:border-navy-800/80 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-900 dark:text-white tracking-tight">
                    ev-drill-2026
                  </span>
                </div>
              </div>
            </div>
            {/*  Additional visual element with high-contrast scrim overlay  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6 pt-3 sm:pt-6 text-left">
              <div className="rounded-xl overflow-hidden shadow-md relative h-48 sm:h-64 md:h-72 group text-left">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Technical audit team conducting a live SOC 2 and ISO 27001 readiness review" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwmADheLRX4BL2XPXGlJ8sHuYk2_DKGEKp2BFHM2PfacagOqMse21f3YebRlL1O3rqGF4fcS00rOcgxPoIV8oigZBIzD3BEBr5QYkQXb0quOIugNtmQ7jnHb-MSDSXHF5EtxLn7H9kLAWWsK3F2iFXTfte7OlGSL1eN9aoyLsJ_uGzs7CGlAXaMH1Wm_RFH1GaB2XLVv8UIXieM-DcJ8cxXRZexdbwXi_xNpBtp0M5xgHXha8jMo0hYQ" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-transparent p-4 sm:p-6 flex flex-col items-start justify-end text-white text-left">
                  <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-400 mb-1 text-left">Auditor Portal Integration</span>
                  <h3 className="text-base sm:text-xl font-extrabold text-white mb-1 sm:mb-2 drop-shadow-sm text-left">Zero Friction External Audits</h3>
                  <p className="text-xs sm:text-sm text-slate-100 font-medium leading-relaxed drop-shadow text-justify max-w-md">Provide read-only auditor scopes directly tied to cryptographic evidence hashes, eliminating spreadsheet emails.</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md relative h-48 sm:h-64 md:h-72 group text-left">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Cloud architect and CISO validating automated infrastructure risk matrix" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXlxKTHJAqB34WBIPqOY_Cg9vqIvdeZTQRWcvE-Cxd4JHYLiL9AOdybhX7zo9S_fi86B7iq4SITwupCvn1-O9XUVliAkDLjDbohnOXsOjHsrZOslvLU9vkorKP_zfPSkZqOXO7A6My7UtgQziNqBwRdyd1EvMNIouMrVQHpg51E9gwWZvTAmusNWs5gooCstDzfwv0-JR-H43VYuHcnT1k_W1IoZWDkdWTZ2JAkWMKL5yDUELOtG1Nmg" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-transparent p-4 sm:p-6 flex flex-col items-start justify-end text-white text-left">
                  <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-teal-400 mb-1 text-left">Automated CAPA Remediation</span>
                  <h3 className="text-base sm:text-xl font-extrabold text-white mb-1 sm:mb-2 drop-shadow-sm text-left">Closed-Loop Incident Resolution</h3>
                  <p className="text-xs sm:text-sm text-slate-100 font-medium leading-relaxed drop-shadow text-justify max-w-md">When automated tests detect policy drift, CAPA tickets auto-dispatch directly to Jira, GitHub, or ServiceNow.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  Bottom Conversion CTA Banner  */}
        <section className="w-full px-3 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-10 md:py-16 lg:py-8 xl:py-10 bg-slate-200 dark:bg-navy-700 text-left">
          <div className="w-full max-w-7xl lg:max-w-[95%] xl:max-w-[94%] 2xl:max-w-[1720px] mx-auto rounded-xl bg-white dark:bg-[#0A111F] p-4 sm:p-8 lg:p-12 shadow-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-8 text-left">
            <div className="space-y-2 sm:space-y-3 max-w-2xl flex flex-col items-start text-left">
              <h2 className="text-[18px] min-[350px]:text-[20px] min-[380px]:text-[22px] sm:text-3xl md:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-snug text-left">
                Tired of maintaining stale risk spreadsheets?
              </h2>
              <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                Request a tailored walkthrough with our technical architects to see your AWS, GCP, and GitHub assets mapped into a dynamic 5x5 matrix within 48 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4 flex-shrink-0 w-full sm:w-auto">
              <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-lg bg-teal-600 dark:bg-teal-500 text-white text-xs sm:text-sm font-semibold hover:bg-teal-700 dark:hover:bg-teal-600 transition-all shadow-md text-center" data-path="request-a-demo" href="#">
                <Circle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                <span>Request a Tailored Walkthrough</span>
              </a>
              <a className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-lg bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white text-xs sm:text-sm font-semibold hover:bg-slate-200 dark:hover:bg-navy-700 transition-colors text-center" data-path="compliance-board" href="#">
                <span>View Compliance Board</span>
              </a>
            </div>
          </div>
        </section>

        {/* Related Article Banner */}
        <section className="w-full px-3 sm:px-6 lg:px-8 xl:px-12 pb-6 sm:pb-12 lg:pb-8 text-left">
          <div className="w-full max-w-7xl lg:max-w-[95%] xl:max-w-[94%] 2xl:max-w-[1720px] mx-auto p-3.5 sm:p-5 lg:p-6 rounded-xl bg-slate-100 dark:bg-[#16233F] border border-slate-200 dark:border-navy-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between text-left gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3 text-left">
              <div className="text-left">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white text-left">How to Build an Effective Cybersecurity Risk Register</h4>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 text-justify">Step-by-step methodology for identifying, assessing, and managing digital risks.</p>
              </div>
            </div>
            <Link
              href="/resources/blog/how-to-build-effective-cybersecurity-risk-register"
              className="w-full sm:w-auto px-4 py-2 rounded-lg bg-[#F15E1C] text-white text-xs font-bold hover:bg-[#ce4700] transition-colors shrink-0 text-center"
            >
              Read Guide &rarr;
            </Link>
          </div>
        </section>
      </div>
    </main>
      <Footer />
    </div>
  );
}
