"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileSpreadsheet,
  Mail,
  Ticket,
  Clock,
  CheckCircle2,
  XCircle,
  BarChart3,
  Sparkles,
  AlertTriangle,
  Layers,
  Zap,
  Target,
} from "lucide-react";

export const ProblemSection: React.FC = () => {
  const [viewState, setViewState] = useState<"fragmented" | "connected">("fragmented");

  const fragmentedItems = [
    {
      label: "SPREADSHEETS",
      detail: "Risk & asset inventories in separate sheets that drift immediately.",
      icon: FileSpreadsheet,
      badge: "Isolated",
    },
    {
      label: "TICKETS",
      detail: "Ad-hoc tasks completely detached from control & clause IDs.",
      icon: Ticket,
      badge: "Isolated",
    },
    {
      label: "EMAIL CHASING",
      detail: "Scattered message threads requesting screenshots 48h before audits.",
      icon: Mail,
      badge: "Isolated",
    },
    {
      label: "CADENCE GAPS",
      detail: "Zero rolling visibility into access reviews or vendor check-ins.",
      icon: Clock,
      badge: "Isolated",
    },
  ];

  const connectedItems = [
    {
      label: "RISK REGISTER",
      detail: "5x5 Likelihood x Impact scoring continuously auto-linked to active assets.",
      icon: AlertTriangle,
      badge: "Unified",
    },
    {
      label: "ASSET INVENTORY",
      detail: "Cloud resources, SaaS, and PII data flows automatically cataloged.",
      icon: Layers,
      badge: "Unified",
    },
    {
      label: "CONTROL MAPPING",
      detail: "Define one security safeguard and auto-crosswalk across global standards.",
      icon: Zap,
      badge: "Unified",
    },
    {
      label: "EVIDENCE VAULT",
      detail: "Automated, cryptographically verifiable proof gathered on schedule.",
      icon: CheckCircle2,
      badge: "Unified",
    },
  ];

  return (
    <section className="relative w-full bg-transparent px-4 sm:px-6 lg:px-8 py-6 sm:py-10 border-b border-slate-200/60 dark:border-navy-700/60 overflow-hidden">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#F15E1C]/10 dark:bg-[#F15E1C]/15 blur-3xl"
      />

      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading & Subtitle (Vertically Centered on Desktop) */}
          <div className="lg:col-span-5 text-left space-y-3 sm:space-y-4 my-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight">
              Compliance Doesn&apos;t Fail on Frameworks,<br className="hidden lg:block" />{" "}
              <span className="text-[#F15E1C]">It Fails on Fragmentation.</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
              OMNiGRC bridges the gap between disconnected spreadsheets and heavy enterprise suites.
            </p>
          </div>

          {/* Right Column: Toggle Button Bar + Card Table */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Top Segmented Tab Switcher */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-xl p-1.5 rounded-2xl bg-slate-200/80 dark:bg-navy-900 border border-slate-300/80 dark:border-navy-700/80 grid grid-cols-2 gap-1.5 shadow-inner">
                <button
                  onClick={() => setViewState("fragmented")}
                  className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                    viewState === "fragmented"
                      ? "bg-white dark:bg-navy-800 text-[#F15E1C] shadow-md border border-[#F15E1C]/30"
                      : "text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white"
                  }`}
                >
                  <XCircle className="h-4 w-4 text-[#F15E1C] shrink-0" />
                  <span className="whitespace-normal text-center leading-snug">Fragmented Workstreams</span>
                </button>
                <button
                  onClick={() => setViewState("connected")}
                  className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                    viewState === "connected"
                      ? "bg-[#2E936F] text-white shadow-md shadow-[#2E936F]/30"
                      : "text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white"
                  }`}
                >
                  <Target className="h-4 w-4 shrink-0" />
                  <span className="whitespace-normal text-center leading-snug">OMNiGRC Operating Layer</span>
                </button>
              </div>
            </div>

            {/* Visual Card Display */}
            <div className="w-full">
              <AnimatePresence mode="wait">
                {viewState === "fragmented" ? (
                  <motion.div
                    key="fragmented-view"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                    className="rounded-3xl border border-amber-200/80 dark:border-rose-900/40 bg-[#FFFDFB] dark:bg-[#0D1526] p-5 sm:p-8 shadow-xl relative space-y-4 sm:space-y-5"
                  >
                    {/* Header Line inside Card */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 pb-4 border-b border-amber-200/60 dark:border-navy-700/80">
                      <div className="flex items-center gap-2">
                        <XCircle className="h-5 w-5 text-[#F15E1C] shrink-0" />
                        <span className="text-xs sm:text-sm font-mono font-black uppercase tracking-wider text-[#F15E1C]">
                          DISCONNECTED SYSTEMS &amp; FRICTION
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-medium">
                        High Friction • Manual Work
                      </span>
                    </div>

                    {/* Vertical Stack of 4 Cards */}
                    <div className="space-y-3">
                      {fragmentedItems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={idx}
                            className="p-4 sm:p-5 rounded-2xl border border-amber-200/60 dark:border-navy-800 bg-white dark:bg-[#0A111F]/80 flex items-start sm:items-center gap-3.5 sm:gap-4 shadow-sm hover:border-[#F15E1C]/40 transition-colors"
                          >
                            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#FFEFEA] dark:bg-rose-950/40 text-[#F15E1C] flex items-center justify-center shrink-0 border border-[#F15E1C]/20">
                              <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2 mb-1">
                                <h4 className="font-mono text-xs sm:text-sm font-extrabold text-[#F15E1C] uppercase tracking-wider truncate">
                                  {item.label}
                                </h4>
                                <span className="px-2.5 py-0.5 rounded-md bg-[#FFE4DE] dark:bg-rose-950/80 text-[#E5484D] dark:text-rose-300 text-[10px] sm:text-xs font-mono font-bold shrink-0">
                                  {item.badge}
                                </span>
                              </div>
                              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                                {item.detail}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Bottom Impact Banner Card */}
                    <div className="p-4 sm:p-5 rounded-2xl border border-[#FDBAAB] dark:border-rose-900/60 bg-[#FFECE8] dark:bg-rose-950/30 flex items-center gap-3.5 sm:gap-4">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#FDBAAB]/40 dark:bg-rose-900/50 text-[#E5484D] dark:text-rose-300 flex items-center justify-center shrink-0">
                        <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <p className="text-xs sm:text-sm font-extrabold text-[#E5484D] dark:text-rose-300 leading-snug">
                        Resulting Impact: Duplicate work, audit scrambles &amp; low posture confidence.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="connected-view"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                    className="rounded-3xl border border-[#2E936F]/40 dark:border-[#2E936F]/60 bg-[#F5FDF9] dark:bg-[#0A1A14] p-5 sm:p-8 shadow-xl relative space-y-4 sm:space-y-5"
                  >
                    {/* Header Line inside Card */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 pb-4 border-b border-[#2E936F]/30 dark:border-[#2E936F]/30">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#2E936F] shrink-0" />
                        <span className="text-xs sm:text-sm font-mono font-black uppercase tracking-wider text-[#2E936F] dark:text-teal-300">
                          OMNiGRC OPERATING LAYER
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#2E936F] dark:text-teal-400 font-bold">
                        Continuous Posture • Live Sync
                      </span>
                    </div>

                    {/* Vertical Stack of 4 Cards */}
                    <div className="space-y-3">
                      {connectedItems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={idx}
                            className="p-4 sm:p-5 rounded-2xl border border-[#2E936F]/30 dark:border-teal/30 bg-white dark:bg-[#0C241C] flex items-start sm:items-center gap-3.5 sm:gap-4 shadow-sm hover:border-[#2E936F] transition-colors"
                          >
                            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#E6F4EF] dark:bg-emerald-950/60 text-[#2E936F] dark:text-emerald-400 flex items-center justify-center shrink-0 border border-[#2E936F]/30">
                              <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2 mb-1">
                                <h4 className="font-mono text-xs sm:text-sm font-extrabold text-[#2E936F] dark:text-teal-300 uppercase tracking-wider truncate">
                                  {item.label}
                                </h4>
                                <span className="px-2.5 py-0.5 rounded-md bg-[#E6F4EF] dark:bg-emerald-950 text-[#2E936F] dark:text-emerald-300 text-[10px] sm:text-xs font-mono font-bold shrink-0">
                                  {item.badge}
                                </span>
                              </div>
                              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                                {item.detail}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Bottom Impact Banner Card */}
                    <div className="p-4 sm:p-5 rounded-2xl border border-[#2E936F]/40 bg-[#E6F4EF] dark:bg-emerald-950/40 flex items-center gap-3.5 sm:gap-4">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#2E936F]/20 text-[#2E936F] dark:text-emerald-300 flex items-center justify-center shrink-0">
                        <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <p className="text-xs sm:text-sm font-extrabold text-[#2E936F] dark:text-emerald-300 leading-snug">
                        Resulting Impact: Continuous audit readiness, zero scrambles &amp; live compliance.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

