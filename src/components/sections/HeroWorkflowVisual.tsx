"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Database,
  Lock,
  Sparkles,
  Check,
  Play,
  Pause,
} from "lucide-react";

interface StepData {
  id: number;
  stepNumber: string;
  badge: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  accentColor: string;
  badgeBg: string;
  visualItems: { label: string; sub: string; icon: React.ElementType; status: string }[];
  highlightMetric: { value: string; label: string };
}

const STEPS: StepData[] = [
  {
    id: 0,
    stepNumber: "01",
    badge: "INPUT",
    title: "Connect Infrastructure",
    subtitle: "Cloud, databases, SaaS, and identity auto-linked into one inventory.",
    icon: Server,
    accentColor: "#F15E1C",
    badgeBg: "bg-[#F15E1C]/10 border-[#F15E1C]/30 text-[#F15E1C]",
    visualItems: [
      { label: "AWS & Cloud Infrastructure", sub: "142 Active Cloud Resources", icon: Server, status: "Connected" },
      { label: "Okta & Access Control", sub: "MFA & User Access Enforced", icon: Lock, status: "Connected" },
      { label: "Production Databases", sub: "Encrypted & Air-gapped Backups", icon: Database, status: "Connected" },
    ],
    highlightMetric: { value: "100%", label: "Asset Visibility" },
  },
  {
    id: 1,
    stepNumber: "02",
    badge: "CORE ENGINE",
    title: "Map Controls Once",
    subtitle: "Define one security safeguard and auto-crosswalk it across 6 global standards.",
    icon: Zap,
    accentColor: "#2E936F",
    badgeBg: "bg-[#2E936F]/10 border-[#2E936F]/30 text-[#2E936F]",
    visualItems: [
      { label: "ISO 27001 & ISO 42001", sub: "Access & Data Security Clauses", icon: CheckCircle2, status: "Mapped" },
      { label: "SOC 2 Type II", sub: "Trust Services Criteria CC6.1 & CC9.1", icon: CheckCircle2, status: "Mapped" },
      { label: "GDPR & DPDP Act 2023", sub: "Data Protection Safeguards", icon: CheckCircle2, status: "Mapped" },
    ],
    highlightMetric: { value: "6-in-1", label: "Framework Crosswalk" },
  },
  {
    id: 2,
    stepNumber: "03",
    badge: "OUTPUT",
    title: "Always Audit-Ready",
    subtitle: "Automated evidence gathering with zero last-minute audit stress.",
    icon: ShieldCheck,
    accentColor: "#FAB60A",
    badgeBg: "bg-[#FAB60A]/15 border-[#FAB60A]/40 text-[#D4521A]",
    visualItems: [
      { label: "Automated Drills & Tests", sub: "Verified Every 30 Days", icon: ShieldCheck, status: "Verified" },
      { label: "Defensible Evidence Vault", sub: "Cryptographically Signed Proof", icon: Lock, status: "Verified" },
      { label: "Zero Open Remediation SLAs", sub: "Continuous Compliance Board", icon: Sparkles, status: "100% Pass" },
    ],
    highlightMetric: { value: "0 Days", label: "Audit Preparation Time" },
  },
];

export const HeroWorkflowVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Auto-cycle steps smoothly every 4 seconds unless paused by interaction
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const current = STEPS[activeStep];

  return (
    <div className="relative w-full max-w-5xl 2xl:max-w-6xl mx-auto my-3 sm:my-6 px-2 sm:px-4">
      {/* Soft Ambient Warm Aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2 bg-gradient-to-r from-[#2E936F]/15 via-[#FAB60A]/10 to-[#F15E1C]/15 blur-3xl opacity-50 rounded-3xl"
      />

      {/* LIGHT-THEMED MAIN CONTAINER CARD */}
      <div className="relative z-10 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-4 sm:p-6 md:p-8 shadow-2xl text-navy-900 dark:text-white space-y-6">
        
        {/* HEADER BAR: 3 STEP SELECTOR TABS */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-navy-800">
          <div className="flex items-center justify-between sm:justify-start gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F4EF] dark:bg-navy-800 border border-[#2E936F]/30 text-[#2E936F] dark:text-teal text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-[#2E936F]" />
              <span>Compliance Pipeline</span>
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="sm:hidden text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-navy-900 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-navy-800 border border-slate-200 dark:border-navy-700 font-semibold"
            >
              {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
              <span>{isPlaying ? "Pause" : "Play"}</span>
            </button>
          </div>

          {/* Step Buttons (Desktop & Mobile Tabs) */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 bg-slate-100 dark:bg-navy-950 p-1.5 rounded-xl border border-slate-200 dark:border-navy-800">
            {STEPS.map((s, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  className={`flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-extrabold transition-all duration-200 ${
                    isActive
                      ? "bg-[#2E936F] text-white shadow-md scale-[1.02]"
                      : "text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-navy-800/60"
                  }`}
                >
                  <span className="font-mono text-[10px] sm:text-xs opacity-80">{s.stepNumber}.</span>
                  <span className="truncate">{s.title.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE STEP SPOTLIGHT CONTENT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
          >
            {/* LEFT SIDE: STEP DETAILS & METRIC (5 COLS) */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="space-y-2">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-extrabold border ${current.badgeBg}`}>
                  STEP {current.stepNumber} • {current.badge}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-snug">
                  {current.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                  {current.subtitle}
                </p>
              </div>

              {/* Metric Card */}
              <div className="p-4 rounded-xl bg-[#F8FAFC] dark:bg-navy-950 border border-slate-200 dark:border-navy-800 flex items-center justify-between gap-4 shadow-sm">
                <div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block font-bold">
                    {current.highlightMetric.label}
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#2E936F]">
                    {current.highlightMetric.value}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#E6F4EF] dark:bg-[#2E936F]/20 border border-[#2E936F]/30 flex items-center justify-center shrink-0">
                  <Check className="h-5 w-5 text-[#2E936F]" />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: 3 VISUAL EXPRESSIVE CARDS (7 COLS) */}
            <div className="lg:col-span-7 space-y-3">
              {current.visualItems.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                    className="p-3.5 sm:p-4 rounded-xl border border-slate-200 dark:border-navy-800 bg-[#F8FAFC] dark:bg-navy-950 hover:border-[#2E936F]/50 transition-all flex items-center justify-between gap-3 text-left shadow-sm"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-[#E6F4EF] dark:bg-navy-900 border border-[#2E936F]/30 flex items-center justify-center shrink-0 text-[#2E936F]">
                        <ItemIcon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm sm:text-base font-extrabold text-navy-900 dark:text-white truncate">
                          {item.label}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium truncate">
                          {item.sub}
                        </p>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full bg-[#E6F4EF] dark:bg-[#2E936F]/20 text-[#2E936F] border border-[#2E936F]/30 text-xs font-mono font-bold shrink-0">
                      ✓ {item.status}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* BOTTOM PROGRESS TRACKER & CONTROLS */}
        <div className="pt-2 border-t border-slate-200 dark:border-navy-800 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline font-semibold">Click any step to explore:</span>
            <div className="flex items-center gap-1.5">
              {STEPS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeStep === idx ? "w-8 bg-[#2E936F]" : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to step ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="hidden sm:flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-navy-900 transition-colors font-bold"
          >
            {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            <span>{isPlaying ? "Pause Auto-Cycle" : "Play Auto-Cycle"}</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default HeroWorkflowVisual;
