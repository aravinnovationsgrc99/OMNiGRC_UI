"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserCheck,
  ArrowRight,
  ShieldCheck,
  Lock,
  Cpu,
  Database,
  FileCode,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const phases = [
  {
    id: 0,
    tabTitle: "1. Ingestion & Minimization",
    title: "1. Authenticated Ingestion & Data Minimization",
    userAction: "Analyst initiates control mapping. Data minimization pipeline strips organization names, employee IDs, and PII.",
    nextProcess: "Next Step: Tiered Model Router & Clause Analysis",
    accentColor: "#2E936F",
  },
  {
    id: 1,
    tabTitle: "2. Tiered AI Router",
    title: "2. Tiered Model Router & Clause Analysis",
    userAction: "Sanitized controls are routed to high-speed LLMs (Gemini 2.5 & Claude Haiku) for clause analysis.",
    nextProcess: "Next Step: Schema Validation & Mandatory Human Decision",
    accentColor: "#FAB60A",
  },
  {
    id: 2,
    tabTitle: "3. Approval & Storage",
    title: "3. Schema Validation & Mandatory Human Decision",
    userAction: "GRC Analyst inspects AI confidence (96%), approves mapping, and commits record to PostgreSQL.",
    nextProcess: "Final State: Structured Audit Record Committed to PostgreSQL",
    accentColor: "#F15E1C",
  },
];

export const ArchitectureFlowVisualizer: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-rotation with 7-second pacing
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = phases[activePhase];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="w-full max-w-5xl 2xl:max-w-6xl mx-auto rounded-3xl border border-slate-200 dark:border-teal/30 shadow-xl bg-white dark:bg-navy-900/90 p-4 sm:p-7 lg:p-8 text-navy-900 dark:text-white transition-all duration-300"
    >
      {/* Clean Minimalist Tab Buttons Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-6">
        {phases.map((p, idx) => {
          const isActive = activePhase === idx;
          return (
            <button
              key={p.id}
              onClick={() => setActivePhase(idx)}
              className={`relative flex items-center justify-center text-center px-4 py-3 rounded-xl font-extrabold text-xs sm:text-sm transition-all duration-300 ${
                isActive
                  ? "bg-[#16233F] dark:bg-teal text-white shadow-lg ring-2 ring-[#2E936F] dark:ring-teal-400"
                  : "bg-slate-100/90 dark:bg-navy-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200/80 dark:hover:bg-navy-700/80 border border-slate-200 dark:border-navy-700"
              }`}
            >
              <span>{p.tabTitle}</span>
              {isActive && !isPaused && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 7, ease: "linear" }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#2E936F] origin-left rounded-b-xl"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Responsive Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Column: Phase Context & User Workflow */}
        <div className="lg:col-span-5 space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-lg sm:text-xl font-extrabold text-[#16233F] dark:text-white leading-tight">
                {current.title}
              </h3>

              {/* What User Does in This Phase Card — Standard Tailwind Padding & Crisp Layout */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF7EF] dark:bg-orange-950/20 border border-[#E8C090] dark:border-orange-900/40 space-y-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-[#F15E1C] shrink-0" />
                  <span className="text-xs font-mono font-bold text-[#D4521A] uppercase tracking-wider">
                    What User Does in This Phase:
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#16233F] dark:text-slate-200 font-semibold leading-relaxed">
                  {current.userAction}
                </p>
              </div>

              {/* Next Process Connector — Complete text wrap (no truncation) */}
              <div className="p-3.5 rounded-xl bg-[#F0FDF7] dark:bg-emerald-950/20 border border-[#2E936F]/30 dark:border-teal/30 flex items-start gap-2.5 text-xs font-mono font-semibold text-[#2E936F] dark:text-teal-300">
                <ArrowRight className="h-4 w-4 shrink-0 mt-0.5" />
                <span className="leading-snug break-words whitespace-normal font-bold">
                  {current.nextProcess}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: High-Visibility Visual Cards with Animated Amber Scanning Beam */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-200 dark:border-navy-700/60 bg-[#FAFBFB] dark:bg-navy-950/50 p-5 sm:p-7 shadow-inner relative overflow-hidden min-h-[260px] flex flex-col justify-center">
          
          {/* Bright Amber Scanning Beam Animation (Sweeps 100% top 0% to bottom 100% of container) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`beam-${activePhase}`}
              initial={{ top: "0%", opacity: 0 }}
              animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.2, delay: 0.2, ease: "linear" }}
              className="absolute left-0 right-0 h-10 bg-gradient-to-b from-transparent via-[#FAB60A]/40 to-[#FAB60A]/70 border-b-2 border-[#FAB60A] shadow-[0_4px_20px_#FAB60A] pointer-events-none z-30"
            />
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {/* PHASE 1 VISUAL: Ingestion & Redaction */}
            {activePhase === 0 && (
              <motion.div
                key="phase0-visual"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="w-full"
              >
                {/* Node Workflow: Clean Responsive Cards */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* Node 1: Raw Input */}
                  <div className="w-full sm:w-1/3 bg-white dark:bg-navy-900 p-4 rounded-xl border border-slate-200 dark:border-navy-700 shadow-sm text-center space-y-1.5">
                    <div className="inline-flex p-2.5 rounded-lg bg-orange-50 dark:bg-orange-950/30 text-[#F15E1C] dark:text-orange-400 mb-1">
                      <FileCode className="h-6 w-6" />
                    </div>
                    <p className="text-xs font-extrabold text-[#16233F] dark:text-white">Control Input</p>
                    <span className="inline-block text-[10px] font-mono font-bold bg-[#F15E1C]/10 text-[#D4521A] dark:text-orange-300 px-2.5 py-0.5 rounded">
                      CTRL-005 (MFA)
                    </span>
                  </div>

                  {/* Redactor Engine Center */}
                  <div className="flex flex-col items-center justify-center shrink-0 py-2 sm:py-0">
                    <div className="relative flex items-center justify-center p-3.5 rounded-full bg-[#2E936F] text-white shadow-md">
                      <Lock className="h-6 w-6" />
                      <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-[#2E936F]"
                      />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#2E936F] mt-1.5">
                      Minimization Layer
                    </span>
                  </div>

                  {/* Node 3: Clean Payload */}
                  <div className="w-full sm:w-1/3 bg-white dark:bg-navy-900 p-4 rounded-xl border border-slate-200 dark:border-navy-700 shadow-sm text-center space-y-1.5">
                    <div className="inline-flex p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-[#2E936F] dark:text-emerald-400 mb-1">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <p className="text-xs font-extrabold text-[#16233F] dark:text-white">Clean Payload</p>
                    <span className="inline-block text-[10px] font-mono font-bold bg-[#2E936F]/10 text-[#2E936F] dark:text-emerald-400 px-2.5 py-0.5 rounded">
                      Sanitized Payload
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* PHASE 2 VISUAL: Tiered Model Router */}
            {activePhase === 1 && (
              <motion.div
                key="phase1-visual"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="w-full"
              >
                {/* Router Node & Dual Output Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  {/* Smart Router Box */}
                  <div className="sm:col-span-4 bg-white dark:bg-navy-900 p-4 rounded-xl border border-slate-200 dark:border-navy-700 shadow-sm text-center space-y-1.5">
                    <div className="inline-flex p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/30 text-[#FAB60A] dark:text-amber-400 mb-1">
                      <Cpu className="h-6 w-6" />
                    </div>
                    <p className="text-xs font-extrabold text-[#16233F] dark:text-white">Model Router</p>
                    <span className="inline-block text-[10px] font-mono font-bold bg-[#FAB60A]/20 text-[#16233F] dark:text-amber-200 px-2.5 py-0.5 rounded">
                      Cost &amp; Speed
                    </span>
                  </div>

                  {/* Dual Model Outputs */}
                  <div className="sm:col-span-8 space-y-2.5">
                    <div className="bg-white dark:bg-navy-900 p-3.5 rounded-xl border border-[#F15E1C]/30 dark:border-orange-500/30 shadow-sm flex items-center justify-between">
                      <div>
                        <p className="text-xs font-extrabold text-[#16233F] dark:text-white">Tier 1: Gemini 2.5 Flash-Lite</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">High-speed clause correlation</p>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-[#2E936F]/10 text-[#2E936F] font-mono font-bold text-[10px] shrink-0">
                        96% ISO Match
                      </span>
                    </div>

                    <div className="bg-white dark:bg-navy-900 p-3.5 rounded-xl border border-[#2E936F]/30 dark:border-teal/30 shadow-sm flex items-center justify-between">
                      <div>
                        <p className="text-xs font-extrabold text-[#16233F] dark:text-white">Tier 2: Claude Haiku 4.5</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">High-precision clause reasoning</p>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-[#2E936F]/10 text-[#2E936F] font-mono font-bold text-[10px] shrink-0">
                        94% SOC 2 Match
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* PHASE 3 VISUAL: Approval & Storage */}
            {activePhase === 2 && (
              <motion.div
                key="phase2-visual"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="w-full"
              >
                {/* Node Workflow: Clean Responsive Cards */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* Node 1: AI Suggestions */}
                  <div className="w-full sm:w-1/3 bg-white dark:bg-navy-900 p-4 rounded-xl border border-slate-200 dark:border-navy-700 shadow-sm text-center space-y-1.5">
                    <div className="inline-flex p-2.5 rounded-lg bg-orange-50 dark:bg-orange-950/30 text-[#F15E1C] dark:text-orange-400 mb-1">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <p className="text-xs font-extrabold text-[#16233F] dark:text-white">AI Candidate</p>
                    <span className="inline-block text-[10px] font-mono font-bold bg-[#F15E1C]/10 text-[#D4521A] dark:text-orange-300 px-2.5 py-0.5 rounded">
                      96% Confidence
                    </span>
                  </div>

                  {/* Human Sign-Off Center */}
                  <div className="flex flex-col items-center justify-center shrink-0 py-2 sm:py-0">
                    <div className="relative flex items-center justify-center p-3.5 rounded-full bg-[#F15E1C] text-white shadow-md">
                      <UserCheck className="h-6 w-6" />
                      <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-[#F15E1C]"
                      />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#F15E1C] mt-1.5">
                      Human Sign-Off
                    </span>
                  </div>

                  {/* Node 3: PostgreSQL Database */}
                  <div className="w-full sm:w-1/3 bg-white dark:bg-navy-900 p-4 rounded-xl border border-slate-200 dark:border-navy-700 shadow-sm text-center space-y-1.5">
                    <div className="inline-flex p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-[#2E936F] dark:text-emerald-400 mb-1">
                      <Database className="h-6 w-6" />
                    </div>
                    <p className="text-xs font-extrabold text-[#16233F] dark:text-white">PostgreSQL DB</p>
                    <span className="inline-block text-[10px] font-mono font-bold bg-[#2E936F]/10 text-[#2E936F] dark:text-emerald-400 px-2.5 py-0.5 rounded">
                      Audit Log
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
