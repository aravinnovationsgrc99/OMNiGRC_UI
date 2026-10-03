"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  CheckCircle,
  CheckCircle2,
  Activity,
} from "lucide-react";

export const IsometricHeroVisual: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const pipelineStages = [
    {
      step: "01",
      label: "01 RISK",
      title: "5×5 Matrix",
      sub: "RSK-042 Likelihood 3",
      traceRisk: "RSK-042 (Backup Failure)",
      traceControl: "CTRL-012",
      traceStatus: "Active Risk Scored in Matrix",
    },
    {
      step: "02",
      label: "02 ASSETS",
      title: "Cloud / Infra",
      sub: "RDS Database Prod",
      traceRisk: "RSK-042",
      traceControl: "Bound to RDS Database Prod",
      traceStatus: "Asset Inventory Verified",
    },
    {
      step: "03",
      label: "03 CONTROLS",
      title: "Map-Once",
      sub: "CTRL-012 Automated",
      traceRisk: "RSK-042 (Backup Failure)",
      traceControl: "CTRL-012 (Snapshot Test)",
      traceStatus: "Map-Once Safeguard Active",
    },
    {
      step: "04",
      label: "04 TESTING",
      title: "30-Day Cadence",
      sub: "Automated Drill Pass",
      traceRisk: "RSK-042",
      traceControl: "CTRL-012",
      traceStatus: "Automated Restoration Drill Passed",
    },
    {
      step: "05",
      label: "05 AUDIT",
      title: "Cross-Framework",
      sub: "ISO 27001 + SOC 2",
      traceRisk: "RSK-042",
      traceControl: "CTRL-012 (ISO 27001 A.8.13)",
      traceStatus: "Cross-Mapped to 6 Standards",
    },
    {
      step: "06",
      label: "06 ACTIONS",
      title: "Remediation",
      sub: "SLA Verified (0 Open)",
      traceRisk: "RSK-042",
      traceControl: "SLA Compliant",
      traceStatus: "Remediation SLA Verified (0 Open)",
    },
    {
      step: "07",
      label: "07 VAULT",
      title: "Defensible Evidence",
      sub: "Evidence Verified",
      traceRisk: "RSK-042",
      traceControl: "CTRL-012 Evidence Vault",
      traceStatus: "Evidence Reference Linked & SHA-256 Signed",
    },
  ];

  const frameworkBadges = [
    { name: "ISO 27001", href: "/frameworks/iso-27001" },
    { name: "ISO 42001", href: "/frameworks/iso-42001" },
    { name: "SOC 2 Type II", href: "/frameworks/soc-2" },
    { name: "GDPR / UK GDPR", href: "/frameworks/gdpr" },
    { name: "DPDP Act 2023", href: "/frameworks/dpdp" },
    { name: "HIPAA Security", href: "/frameworks/hipaa" },
  ];

  // Auto-advance active stage highlight
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % pipelineStages.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [isAutoPlaying, pipelineStages.length]);

  const activeStage = pipelineStages[activeStageIndex];

  return (
    <div className="relative w-full max-w-5xl 2xl:max-w-6xl mx-auto my-2 sm:my-4 px-2 sm:px-4 space-y-4 sm:space-y-5">
      {/* Background Soft Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 bg-gradient-to-r from-[#2E936F]/20 via-[#FAB60A]/15 to-[#F15E1C]/20 blur-3xl opacity-60 rounded-3xl"
      />

      {/* SECTION HEADER & TITLE */}
      <div className="text-center space-y-3 relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight">
          Everything connects. Nothing lives in isolation.
        </h2>

        <div className="pt-1">
          <span className="inline-block px-4 py-1.5 rounded-xl bg-white dark:bg-[#0a1528] text-navy-900 dark:text-white font-mono text-xs sm:text-sm font-extrabold shadow-md border border-[#2E936F]/40 tracking-wider">
            RISK, ASSETS, CONTROLS, EVIDENCE: ONE THREAD, NOT FOUR SILOS.
          </span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
          A single operating layer connecting every phase of the security, risk, and audit lifecycle.
        </p>
      </div>

      {/* FRAMEWORK BADGES ROW */}
      <div className="text-center space-y-3 relative z-10">
        <p className="text-xs sm:text-sm font-mono font-semibold text-slate-600 dark:text-slate-300">
          Supported out of the box: map a single control across 6 global standards:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {frameworkBadges.map((fw, idx) => (
            <Link
              key={idx}
              href={fw.href}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50/90 dark:bg-emerald-950/60 border border-[#2E936F]/40 text-[#00513A] dark:text-teal-300 text-xs sm:text-sm font-mono font-extrabold shadow-sm hover:border-[#2E936F] hover:scale-105 transition-all"
            >
              <CheckCircle className="h-3.5 w-3.5 text-[#2E936F] dark:text-teal-400 shrink-0" />
              <span>{fw.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* MAIN OPERATING RAIL CARD (CLEAN LIGHT THEME DEFAULT) */}
      <div className="relative z-10 rounded-3xl border border-slate-200 dark:border-navy-700/80 bg-white dark:bg-[#070e1c] p-4 sm:p-6 lg:p-7 shadow-xl text-navy-900 dark:text-white overflow-hidden space-y-5">
        {/* Card Header Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-[#F15E1C] dark:bg-[#FAB60A] shadow-md shadow-amber-500/50 shrink-0 animate-pulse" />
            <h3 className="font-mono text-xs sm:text-sm md:text-base font-extrabold tracking-wider uppercase text-navy-900 dark:text-white">
              INTERACTIVE OPERATING RAIL: RISK TO EVIDENCE PIPELINE
            </h3>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0FDF4] dark:bg-navy-950 border border-[#2E936F]/40 text-[#2E936F] dark:text-teal-300 text-xs font-mono font-extrabold shadow-sm">
            <Activity className="h-3.5 w-3.5 text-[#2E936F] dark:text-teal-400 animate-pulse" />
            <span>Live Database Crosswalk Stream</span>
          </div>
        </div>

        {/* 7 Pipeline Stages */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3 w-full min-w-0">
          {pipelineStages.map((stg, idx) => {
            const isActive = activeStageIndex === idx;
            return (
              <button
                key={stg.step}
                onClick={() => {
                  setActiveStageIndex(idx);
                  setIsAutoPlaying(false);
                }}
                className={`p-2.5 sm:p-3 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[96px] min-w-0 w-full overflow-hidden ${
                  isActive
                    ? "border-[#2E936F] bg-[#F0FDF4] dark:bg-[#0f243a] shadow-md ring-1 ring-[#2E936F]/40 scale-[1.02]"
                    : "border-slate-200 dark:border-slate-800/90 bg-slate-50/80 dark:bg-[#060c18]/90 hover:border-[#2E936F]/40 hover:bg-white dark:hover:bg-[#091324]"
                }`}
              >
                <span
                  className={`text-[10px] xl:text-xs font-mono font-extrabold uppercase tracking-wider block truncate min-w-0 ${
                    isActive ? "text-[#2E936F] dark:text-teal-300" : "text-[#2E936F]/80 dark:text-teal-400/80"
                  }`}
                >
                  {stg.label}
                </span>
                <div className="min-w-0 w-full overflow-hidden space-y-0.5">
                  <h4 className="text-xs xl:text-sm font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight truncate min-w-0" title={stg.title}>
                    {stg.title}
                  </h4>
                  <p className="text-[10px] xl:text-[11px] font-mono text-slate-600 dark:text-slate-400 font-medium truncate min-w-0 block" title={stg.sub}>
                    {stg.sub}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom Terminal Demo Stream Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#040810] border border-slate-200 dark:border-slate-800/90 font-mono text-xs sm:text-sm shadow-sm space-y-3 min-w-0">
          {/* Header row: DEMO STREAM badge on left, Sync indicator on right */}
          <div className="flex items-center justify-between gap-2 border-b border-slate-200/80 dark:border-slate-800/80 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-[#FAB60A] text-navy-950 font-black text-[10px] sm:text-xs uppercase tracking-wider shrink-0 shadow-sm">
                DEMO STREAM
              </span>
              <span className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 font-bold hidden sm:inline">
                Live Trace (Illustrative Demo Data)
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-mono shrink-0">
              <span>
                Sync: <strong className="text-navy-900 dark:text-slate-200">4.2ms</strong>
              </span>
              <CheckCircle2 className="h-4 w-4 text-[#2E936F]" />
            </div>
          </div>

          {/* Main Live Trace Flow */}
          <div className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed space-y-2">
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold sm:hidden">
              Live Trace (Illustrative Demo Data):
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-100/80 dark:bg-emerald-950/60 text-[#2E936F] dark:text-emerald-300 font-extrabold border border-[#2E936F]/30">
                Risk: {activeStage.traceRisk}
              </span>
              <span className="text-[#FAB60A] font-extrabold">→</span>
              <span className="px-2.5 py-1 rounded-lg bg-amber-100/80 dark:bg-amber-950/60 text-[#F15E1C] dark:text-amber-300 font-extrabold border border-[#FAB60A]/30">
                Control: {activeStage.traceControl}
              </span>
              <span className="text-[#2E936F] font-extrabold">→</span>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-100/80 dark:bg-emerald-950/60 text-[#2E936F] dark:text-emerald-300 font-extrabold border border-[#2E936F]/30">
                {activeStage.traceStatus}
              </span>
              <span className="text-[#2E936F] font-extrabold">→</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-200/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-extrabold">
                ✓ Audit Logged
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsometricHeroVisual;
