"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileSpreadsheet,
  Mail,
  Ticket,
  Clock,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Layers,
  ArrowDown,
  Sparkles,
  Zap,
} from "lucide-react";

export const ProblemSection: React.FC = () => {
  const [viewState, setViewState] = useState<"fragmented" | "connected">("fragmented");

  const fragmentedItems = [
    {
      label: "SPREADSHEETS",
      detail: "Risk & asset inventories in separate sheets that drift immediately.",
      icon: FileSpreadsheet,
    },
    {
      label: "TICKETS",
      detail: "Ad-hoc tasks completely detached from control & clause IDs.",
      icon: Ticket,
    },
    {
      label: "EMAIL CHASING",
      detail: "Scattered message threads requesting screenshots 48h before audits.",
      icon: Mail,
    },
    {
      label: "CADENCE GAPS",
      detail: "Zero rolling visibility into access reviews or vendor check-ins.",
      icon: Clock,
    },
  ];

  const connectedPillars = [
    { name: "RISK", desc: "5x5 Scoring linked to assets", icon: AlertTriangle },
    { name: "ASSETS", desc: "Cloud & PII data flows", icon: Layers },
    { name: "CONTROLS", desc: "Map-once safeguards", icon: Zap },
    { name: "EVIDENCE", desc: "Defensible reference vault", icon: CheckCircle2 },
  ];

  return (
    <section className="relative w-full bg-transparent px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-b border-slate-200/60 dark:border-navy-700/60 overflow-hidden">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#F15E1C]/10 blur-3xl"
      />

      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-3">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight">
            Compliance doesn&apos;t fail on frameworks. <br className="hidden xs:inline" />
            <span className="text-[#F15E1C] dark:text-teal-400">It fails on fragmentation.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl">
            Lean teams get stuck between disconnected spreadsheets and heavyweight enterprise suites. OMNiGRC is the operating layer in between.
          </p>
        </div>

        {/* State Toggle Switcher */}
        <div className="flex justify-center">
          <div className="inline-flex p-1 rounded-2xl bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-700/80 shadow-inner">
            <button
              onClick={() => setViewState("fragmented")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                viewState === "fragmented"
                  ? "bg-white dark:bg-navy-800 text-[#F15E1C] shadow-md border border-[#F15E1C]/30"
                  : "text-slate-500 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white"
              }`}
            >
              <XCircle className="h-4 w-4 text-[#F15E1C]" /> Fragmented Workstreams
            </button>
            <button
              onClick={() => setViewState("connected")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                viewState === "connected"
                  ? "bg-[#2E936F] text-white shadow-md shadow-[#2E936F]/30"
                  : "text-slate-500 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white"
              }`}
            >
              <CheckCircle2 className="h-4 w-4" /> OMNiGRC Operating Layer
            </button>
          </div>
        </div>

        {/* Visual Story Display */}
        <div className="w-full max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {viewState === "fragmented" ? (
              <motion.div
                key="fragmented-view"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="rounded-3xl border border-[#F15E1C]/30 bg-white/80 dark:bg-navy-900/90 p-5 sm:p-8 shadow-xl backdrop-blur-md relative overflow-hidden"
              >
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-mono font-bold uppercase text-[#F15E1C] flex items-center gap-1.5">
                    <XCircle className="h-4 w-4" /> Disconnected Systems & Friction
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    High Friction · Manual Work
                  </span>
                </div>

                {/* 4 Disconnected Nodes Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                  {fragmentedItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl border border-dashed border-[#F15E1C]/40 bg-[#F15E1C]/5 dark:bg-navy-950/70 space-y-1.5 transition-transform hover:-translate-y-0.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-extrabold text-[#F15E1C] flex items-center gap-1.5">
                            <Icon className="h-4 w-4 shrink-0" />
                            {item.label}
                          </span>
                          <span className="text-[9px] font-mono text-red-500 font-bold px-1.5 py-0.5 rounded bg-red-500/10">
                            Isolated
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="p-3.5 rounded-xl bg-[#F15E1C]/10 border border-[#F15E1C]/30 text-xs font-mono text-[#F15E1C] dark:text-amber font-semibold flex items-center justify-between">
                  <span>Resulting Impact: Duplicate work, audit scrambles & low posture confidence.</span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="connected-view"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="rounded-3xl border border-[#2E936F]/50 bg-white/90 dark:bg-navy-900/95 p-5 sm:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden"
              >
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-mono font-bold uppercase text-[#2E936F] dark:text-teal flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4" /> OMNiGRC Connected Operating Layer
                  </span>
                  <span className="text-[10px] font-mono text-amber font-bold">
                    Continuous Posture
                  </span>
                </div>

                {/* Central Connecting Layer Visualization */}
                <div className="p-5 rounded-2xl border-2 border-[#2E936F] bg-[#2E936F]/10 dark:bg-navy-950 text-center mb-6 shadow-lg relative">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-[#F15E1C] dark:text-amber font-bold mb-1">
                    <Sparkles className="h-4 w-4" />
                    <span>SINGLE UNIFIED LAYER</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-navy-900 dark:text-white">
                    OMNiGRC OPERATING LAYER
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 font-medium">
                    Unifies Risk, Assets, Controls, and Evidence into one live operational thread.
                  </p>
                </div>

                {/* 4 Connected Workstream Nodes */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  {connectedPillars.map((p, idx) => {
                    const Icon = p.icon;
                    return (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl border border-[#2E936F]/40 bg-[#2E936F]/5 dark:bg-navy-950/80 text-center space-y-1"
                      >
                        <div className="p-1.5 rounded-lg bg-[#2E936F]/20 text-[#2E936F] dark:text-teal w-fit mx-auto">
                          <Icon className="h-4 w-4" />
                        </div>
                        <h4 className="font-mono text-xs font-bold text-navy-900 dark:text-white">
                          {p.name}
                        </h4>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                          {p.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Story Continuation Conduit (Visual Bridge to Next Section) */}
        <div className="flex flex-col items-center justify-center text-center pt-2">
          <div className="w-0.5 h-8 bg-gradient-to-b from-[#2E936F] to-transparent animate-pulse" />
          <span className="text-[10px] font-mono text-[#2E936F] dark:text-teal font-bold tracking-widest uppercase mt-1">
            ONE WORKFLOW CONTINUES ↓
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
