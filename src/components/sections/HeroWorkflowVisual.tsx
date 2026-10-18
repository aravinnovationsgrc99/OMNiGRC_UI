"use client";

import React, { useState, useEffect } from "react";
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
    subtitle: "Cloud, databases, SaaS, and identity auto-linked into one unified inventory.",
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
      { label: "SOC 2 Type II", sub: "CC6.1 & CC9.1 Trust Criteria", icon: CheckCircle2, status: "Mapped" },
      { label: "GDPR & DPDP Act 2023", sub: "Data Protection Safeguards", icon: CheckCircle2, status: "Mapped" },
    ],
    highlightMetric: { value: "6-in-1", label: "Framework Crosswalk" },
  },
  {
    id: 2,
    stepNumber: "03",
    badge: "OUTPUT",
    title: "Audit-Ready Posture",
    subtitle: "Automated evidence gathering with continuous proof and zero audit panic.",
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

  return (
    <div className="relative w-full max-w-5xl 2xl:max-w-6xl mx-auto my-3 sm:my-6 px-1 sm:px-2">
      {/* Soft Ambient Warm Aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2 bg-gradient-to-r from-[#2E936F]/15 via-[#FAB60A]/10 to-[#F15E1C]/15 blur-3xl opacity-50 rounded-3xl"
      />

      {/* LIGHT-THEMED MAIN CONTAINER CARD */}
      <div className="relative z-10 w-full rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-4 sm:p-6 lg:p-6 xl:p-7 shadow-2xl text-navy-900 dark:text-white flex flex-col justify-between gap-5 sm:gap-6">
        
        {/* HEADER BAR: 3 STEP SELECTOR TABS */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-slate-200 dark:border-navy-800 shrink-0">
          <div className="flex items-center justify-between sm:justify-start gap-2">
            <span className="text-xs sm:text-sm font-bold text-navy-900 dark:text-white">Compliance Pipeline</span>

            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="sm:hidden text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-navy-800 border border-slate-200 dark:border-navy-700 font-semibold"
            >
              {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
              <span>{isPlaying ? "Pause" : "Play"}</span>
            </button>
          </div>

          {/* Step Buttons (Desktop & Mobile Tabs) */}
          <div className="w-full sm:w-[320px] shrink-0 grid grid-cols-3 gap-1 sm:gap-1.5 bg-slate-100 dark:bg-navy-950 p-1 sm:p-1.5 rounded-xl border border-slate-200 dark:border-navy-800">
            {STEPS.map((s, idx) => {
              const isActive = activeStep === idx;
              const buttonText = idx === 0 ? "Connect" : idx === 1 ? "Map" : "Audit";
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  className={`flex items-center justify-center gap-1 sm:gap-1.5 px-1.5 sm:px-3 py-2 rounded-lg text-xs sm:text-sm font-bold transition-colors duration-150 select-none ${
                    isActive
                      ? "bg-[#2E936F] text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-navy-800/60"
                  }`}
                >
                  <span className="font-mono text-[10px] sm:text-xs opacity-75 shrink-0">{s.stepNumber}.</span>
                  <span className="whitespace-nowrap leading-none">{buttonText}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE STEP SPOTLIGHT CONTENT - STACKED GRID CELL (Zero Height Collapse / Constant Dimensions) */}
        <div className="relative w-full grid grid-cols-1 grid-rows-1">
          {STEPS.map((s, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <div
                key={s.id}
                className={`col-start-1 col-end-2 row-start-1 row-end-2 w-full transition-all duration-300 ease-in-out ${
                  isCurrent
                    ? "opacity-100 translate-y-0 pointer-events-auto z-10"
                    : "opacity-0 translate-y-1 pointer-events-none z-0 invisible select-none"
                }`}
                aria-hidden={!isCurrent}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
                  {/* LEFT SIDE: STEP DETAILS & METRIC (5 COLS) */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-4 text-left">
                    <div className="space-y-2">
                      <div className="min-h-[2.75rem] sm:min-h-[4rem] flex items-center justify-center sm:justify-start">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight text-center sm:text-left">
                          {s.title}
                        </h3>
                      </div>

                      <div className="min-h-[3rem] sm:min-h-[4rem] flex items-start">
                        <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed text-left">
                          {s.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Metric Card */}
                    <div className="h-[76px] sm:h-[84px] p-3.5 sm:p-4 rounded-xl bg-[#F8FAFC] dark:bg-navy-950 border border-slate-200 dark:border-navy-800 flex items-center justify-between gap-4 shadow-sm shrink-0">
                      <div className="min-w-0">
                        <span className="text-[10px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block font-bold">
                          {s.highlightMetric.label}
                        </span>
                        <span className="text-2xl sm:text-3xl font-extrabold text-[#2E936F] leading-none block mt-1">
                          {s.highlightMetric.value}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-[#E6F4EF] dark:bg-[#2E936F]/20 border border-[#2E936F]/30 flex items-center justify-center shrink-0">
                        <Check className="h-5 w-5 text-[#2E936F]" />
                      </div>
                    </div>
                  </div>

                  {/* RIGHT SIDE: 3 VISUAL EXPRESSIVE CARDS (7 COLS) */}
                  <div className="lg:col-span-7 space-y-3 flex flex-col justify-between">
                    {s.visualItems.map((item, itemIdx) => {
                      const ItemIcon = item.icon;
                      return (
                        <div
                          key={itemIdx}
                          className="min-h-[72px] sm:min-h-[76px] px-3 sm:px-4 py-2.5 rounded-xl border border-slate-200 dark:border-navy-800 bg-[#F8FAFC] dark:bg-navy-950 hover:border-[#2E936F]/50 transition-colors flex items-center justify-between gap-2.5 sm:gap-3 text-left shadow-sm"
                        >
                          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E6F4EF] dark:bg-navy-900 border border-[#2E936F]/30 flex items-center justify-center shrink-0 text-[#2E936F]">
                              <ItemIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="text-xs sm:text-sm font-extrabold text-navy-900 dark:text-white leading-snug">
                                {item.label}
                              </h4>
                              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium leading-normal">
                                {item.sub}
                              </p>
                            </div>
                          </div>

                          <span className="px-2.5 py-1 rounded-full bg-[#E6F4EF] dark:bg-[#2E936F]/20 text-[#2E936F] border border-[#2E936F]/30 text-[10px] sm:text-xs font-mono font-bold shrink-0 whitespace-nowrap">
                            ✓ {item.status}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM PROGRESS TRACKER & CONTROLS */}
        <div className="pt-3 border-t border-slate-200 dark:border-navy-800 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline font-semibold">Click any step to explore:</span>
            <div className="flex items-center gap-1.5">
              {STEPS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
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
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="hidden sm:flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white transition-colors font-bold"
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
