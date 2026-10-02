"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Database,
  Lock,
  Sparkles,
  Layers,
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
    badgeBg: "bg-[#F15E1C]/15 border-[#F15E1C]/40 text-[#F15E1C]",
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
    badgeBg: "bg-[#2E936F]/15 border-[#2E936F]/40 text-[#00d2b4]",
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
    badgeBg: "bg-[#FAB60A]/15 border-[#FAB60A]/40 text-[#FAB60A]",
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
      {/* Soft Ambient Background Aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2 bg-gradient-to-r from-[#2E936F]/20 via-[#FAB60A]/15 to-[#F15E1C]/20 blur-3xl opacity-40 rounded-3xl"
      />

      {/* MAIN CONTAINER CARD */}
      <div className="relative z-10 rounded-2xl sm:rounded-3xl border border-slate-300 dark:border-navy-700/80 bg-[#0c1628] dark:bg-[#070e1c] p-4 sm:p-6 md:p-8 shadow-2xl text-white space-y-6">
        
        {/* HEADER BAR: 3 STEP SELECTOR TABS */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
          <div className="flex items-center justify-between sm:justify-start gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b1b2d] border border-[#2E936F]/30 text-slate-300 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E936F]" />
              <span>Compliance Pipeline</span>
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="sm:hidden text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800"
            >
              {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
              <span>{isPlaying ? "Pause" : "Play"}</span>
            </button>
          </div>

          {/* Step Buttons (Desktop & Mobile Tabs) */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 bg-[#040914] p-1.5 rounded-xl border border-slate-800/80">
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
                      : "text-slate-400 hover:text-white hover:bg-slate-900/60"
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

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  {current.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                  {current.subtitle}
                </p>
              </div>

              {/* High Expression Metric Card */}
              <div className="p-4 rounded-xl bg-[#040812] border border-slate-800/80 flex items-center justify-between gap-4 shadow-inner">
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                    {current.highlightMetric.label}
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#00d2b4]">
                    {current.highlightMetric.value}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#00d2b4]/10 border border-[#00d2b4]/30 flex items-center justify-center shrink-0">
                  <Check className="h-5 w-5 text-[#00d2b4]" />
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
                    className="p-3.5 sm:p-4 rounded-xl border border-slate-800 bg-[#060d1a] hover:border-slate-700 hover:bg-[#091428] transition-all flex items-center justify-between gap-3 text-left shadow-md"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-navy-950 border border-slate-700/80 flex items-center justify-center shrink-0 text-[#00d2b4]">
                        <ItemIcon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm sm:text-base font-extrabold text-white truncate">
                          {item.label}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-400 font-medium truncate">
                          {item.sub}
                        </p>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full bg-[#2E936F]/20 text-[#00d2b4] border border-[#2E936F]/40 text-xs font-mono font-bold shrink-0">
                      ✓ {item.status}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* BOTTOM PROGRESS TRACKER & CONTROLS */}
        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">Click any step to explore:</span>
            <div className="flex items-center gap-1.5">
              {STEPS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeStep === idx ? "w-8 bg-[#00d2b4]" : "w-2 bg-slate-700 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to step ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
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
