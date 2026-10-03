"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldAlert,
  Server,
  Zap,
  CalendarCheck,
  ArrowRight,
  Layers,
  AlertTriangle,
  CheckCircle2,
  Lock,
  Database,
  FileCheck2,
  ShieldCheck,
  CheckCircle,
  Activity,
} from "lucide-react";

export const WorkflowSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"pillars" | "crosswalk" | "matrix">("pillars");
  const [selectedControl, setSelectedControl] = useState<string>("CTRL-084");
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

  // Auto-advance active stage highlight
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % pipelineStages.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [isAutoPlaying, pipelineStages.length]);

  const sampleControls = [
    {
      id: "CTRL-084",
      name: "Mandatory Passkeys & MFA",
      desc: "Enforce multi-factor authentication across all workforce & production access points.",
      mappings: [
        { code: "ISO 27001", clause: "A.8.5" },
        { code: "SOC 2", clause: "CC6.1" },
        { code: "GDPR", clause: "Art. 32" },
        { code: "DPDP", clause: "Sec 8(5)" },
        { code: "ISO 42001", clause: "A.7.3" },
        { code: "HIPAA", clause: "§164.312(a)" },
      ],
    },
    {
      id: "CTRL-012",
      name: "Automated Daily Snapshot & Restore Test",
      desc: "Perform air-gapped database backups with mandatory 30-day restoration drill testing.",
      mappings: [
        { code: "ISO 27001", clause: "A.8.13" },
        { code: "SOC 2", clause: "CC9.1" },
        { code: "GDPR", clause: "Art. 32" },
        { code: "DPDP", clause: "Sec 8(5)" },
        { code: "ISO 42001", clause: "A.6.2" },
        { code: "HIPAA", clause: "§164.308(a)" },
      ],
    },
  ];

  const fourPillars = [
    {
      id: "pillar-01",
      num: "01",
      label: "PILLAR 01",
      title: "Risk Register",
      desc: "Standardized 5×5 Likelihood × Impact scoring linked directly to technical assets.",
      href: "/products/risk-register",
      icon: ShieldAlert,
      accentColor: "#F15E1C",
      tileBg: "bg-gradient-to-br from-[#F15E1C]/15 via-[#F15E1C]/10 to-[#F15E1C]/5 dark:from-[#F15E1C]/25 dark:to-[#F15E1C]/10",
      borderColor: "border-[#F15E1C]/25 dark:border-[#F15E1C]/35",
      textColor: "text-[#F15E1C]",
      arrowBg: "bg-[#F15E1C]/10 text-[#F15E1C] group-hover:bg-[#F15E1C] group-hover:text-white dark:bg-[#F15E1C]/20 dark:text-orange-400",
    },
    {
      id: "pillar-02",
      num: "02",
      label: "PILLAR 02",
      title: "Asset & Inventory",
      desc: "Cloud infra, SaaS vendors, databases, and DPDP data flow context.",
      href: "/products/asset-inventory",
      icon: Server,
      accentColor: "#2E936F",
      tileBg: "bg-gradient-to-br from-[#2E936F]/15 via-[#2E936F]/10 to-[#2E936F]/5 dark:from-[#2E936F]/25 dark:to-[#2E936F]/10",
      borderColor: "border-[#2E936F]/25 dark:border-[#2E936F]/35",
      textColor: "text-[#2E936F]",
      arrowBg: "bg-[#2E936F]/10 text-[#2E936F] group-hover:bg-[#2E936F] group-hover:text-white dark:bg-[#2E936F]/20 dark:text-emerald-400",
    },
    {
      id: "pillar-03",
      num: "03",
      label: "PILLAR 03",
      title: "Map-Once Controls",
      desc: "One security safeguard cross-correlated to 6 standards simultaneously.",
      href: "/products/control-mapping",
      icon: Zap,
      accentColor: "#FAB60A",
      tileBg: "bg-gradient-to-br from-[#FAB60A]/20 via-[#FAB60A]/12 to-[#FAB60A]/5 dark:from-[#FAB60A]/25 dark:to-[#FAB60A]/10",
      borderColor: "border-[#FAB60A]/30 dark:border-[#FAB60A]/40",
      textColor: "text-[#FAB60A] dark:text-amber-400",
      arrowBg: "bg-[#FAB60A]/15 text-[#b07d00] dark:text-[#FAB60A] group-hover:bg-[#FAB60A] group-hover:text-navy-950 dark:bg-[#FAB60A]/20",
    },
    {
      id: "pillar-04",
      num: "04",
      label: "PILLAR 04",
      title: "Evidence & Assurance",
      desc: "Unified evidence collection, test management, and audit readiness.",
      href: "/products/compliance-board",
      icon: FileCheck2,
      accentColor: "#F15E1C",
      tileBg: "bg-gradient-to-br from-[#F7D7B0]/40 via-[#F7D7B0]/20 to-[#F15E1C]/5 dark:from-[#F15E1C]/20 dark:to-[#F7D7B0]/10",
      borderColor: "border-[#F15E1C]/25 dark:border-[#F15E1C]/35",
      textColor: "text-[#F15E1C] dark:text-orange-400",
      arrowBg: "bg-[#F15E1C]/10 text-[#F15E1C] group-hover:bg-[#F15E1C] group-hover:text-white dark:bg-[#F15E1C]/20 dark:text-orange-400",
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

  const currentControl =
    sampleControls.find((c) => c.id === selectedControl) || sampleControls[0];
  const activeStage = pipelineStages[activeStageIndex];

  return (
    <section className="relative w-full bg-transparent px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-4 sm:pb-6 border-b border-slate-200/60 dark:border-navy-700/60 overflow-hidden" id="workflows-preview">
      {/* Background Ambient Soft Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-[#2E936F]/10 blur-3xl"
      />

      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="text-left space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight">
            Everything connects. <span className="text-[#2E936F]">Nothing lives in isolation.</span>
          </h2>
        </div>

        {/* --------------------------------------------------------------- */}
        {/* INTERACTIVE OPERATING RAIL & 6 FRAMEWORKS (LIGHT THEME DEFAULT) */}
        {/* --------------------------------------------------------------- */}
        <div className="space-y-4">
          {/* Top Framework Mapping Header Line */}
          <div className="text-center space-y-3">
            <p className="text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-300">
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

          {/* MAIN OPERATING RAIL CARD */}
          <div className="rounded-3xl border border-slate-200 dark:border-navy-700/80 bg-white dark:bg-[#070e1c] p-4 sm:p-6 lg:p-7 shadow-xl text-navy-900 dark:text-white overflow-hidden relative space-y-5">
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#F15E1C] dark:bg-[#FAB60A] shadow-md shadow-amber-500/50 shrink-0" />
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

        {/* Navigation Tabs for Interactive Explorations */}
        <div className="flex justify-center pt-4">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-700/80 shadow-inner">
            <button
              onClick={() => setActiveTab("pillars")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                activeTab === "pillars"
                  ? "bg-[#2E936F] text-white shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white"
              }`}
            >
              Structured Four Pillars
            </button>
            <button
              onClick={() => setActiveTab("crosswalk")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                activeTab === "crosswalk"
                  ? "bg-[#2E936F] text-white shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white"
              }`}
            >
              ⚡ Auto-Crosswalk Demo
            </button>
            <button
              onClick={() => setActiveTab("matrix")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                activeTab === "matrix"
                  ? "bg-[#2E936F] text-white shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white"
              }`}
            >
              5x5 Heatmap Matrix
            </button>
          </div>
        </div>

        {/* Dynamic Display Area (Full Width Across All Screens) */}
        <div className="w-full mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "pillars" && (
              <motion.div
                key="pillars-view"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="w-full space-y-4"
              >
                {/* Concept / Subheading Header Row (Matching Image 2) */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-2.5 sm:gap-3 pb-3 border-b border-slate-200/80 dark:border-slate-800 w-full">
                  <span className="text-xs font-mono font-bold uppercase text-[#F15E1C] tracking-wider shrink-0">
                    CONCEPT 2
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white tracking-tight shrink-0">
                    Structured <span className="text-[#F15E1C]">four pillars.</span>
                  </h3>
                  <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">|</span>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                    From risk to evidence, everything connected in one workflow.
                  </p>
                </div>

                {/* 4 HORIZONTAL PILLARS GRID (Matching Image 2) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
                  {fourPillars.map((pillar, idx) => {
                    const Icon = pillar.icon;
                    return (
                      <motion.div
                        key={pillar.id}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.35, delay: idx * 0.08 }}
                        className="w-full"
                      >
                        <Link
                          href={pillar.href}
                          className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-slate-200/90 dark:border-navy-700/80 bg-white/95 dark:bg-navy-900 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full h-full min-h-[220px] space-y-4"
                        >
                          {/* TOP ROW: Icon Container + Arrow Button */}
                          <div className="flex items-center justify-between w-full">
                            <div
                              className={`w-12 h-12 rounded-xl border ${pillar.borderColor} ${pillar.tileBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm shrink-0`}
                            >
                              <Icon className={`h-6 w-6 ${pillar.textColor}`} />
                            </div>

                            <div
                              className={`w-9 h-9 rounded-full flex items-center justify-center border ${pillar.borderColor} ${pillar.arrowBg} transition-all duration-300 shadow-sm shrink-0`}
                            >
                              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          </div>

                          {/* MIDDLE: Monospaced Label + Bold Title */}
                          <div className="space-y-1 w-full">
                            <span className={`font-mono text-xs font-extrabold uppercase tracking-wider ${pillar.textColor} block`}>
                              {pillar.label}
                            </span>
                            <h4 className="text-lg sm:text-xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-snug group-hover:text-[#2E936F] transition-colors">
                              {pillar.title}
                            </h4>
                          </div>

                          {/* BOTTOM: Readable Description */}
                          <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 w-full">
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                              {pillar.desc}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {activeTab === "crosswalk" && (
              <motion.div
                key="crosswalk-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 md:p-10 rounded-3xl border-2 border-[#2E936F]/60 bg-white dark:bg-navy-950 text-navy-900 dark:text-white shadow-xl backdrop-blur-xl space-y-6 sm:space-y-8"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="space-y-1">
                    <span className="text-xs sm:text-sm font-mono text-[#F15E1C] dark:text-amber font-extrabold uppercase tracking-widest flex items-center gap-2">
                      <Zap className="h-4 w-4 text-[#F15E1C] animate-pulse" />
                      ⚡ AUTO-CROSSWALK DEMONSTRATION
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-navy-900 dark:text-white tracking-tight">
                      1 Security Control → 6 Standard Mappings
                    </h3>
                  </div>

                  {/* Control Selector Buttons */}
                  <div className="flex items-center gap-2.5 font-mono">
                    {sampleControls.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setSelectedControl(c.id)}
                        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                          selectedControl === c.id
                            ? "bg-[#2E936F] text-white shadow-lg shadow-[#2E936F]/30 scale-105"
                            : "bg-slate-100 dark:bg-navy-950 text-slate-700 dark:text-slate-300 hover:text-navy-900 border border-slate-300 dark:border-slate-700"
                        }`}
                      >
                        {c.id}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selected Control Details Box */}
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-navy-950/90 border border-slate-200 dark:border-slate-700/80 shadow-inner space-y-2">
                  <span className="text-sm sm:text-base md:text-lg font-mono font-extrabold text-[#b07d00] dark:text-[#FAB60A] block">
                    {currentControl.id}: {currentControl.name}
                  </span>
                  <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-100 font-medium leading-relaxed">
                    {currentControl.desc}
                  </p>
                </div>

                {/* Mapping Conduit Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 md:gap-5">
                  {currentControl.mappings.map((m, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="p-4 sm:p-5 rounded-2xl border border-[#2E936F]/40 bg-[#F0FDF4] dark:bg-navy-900/90 hover:border-[#2E936F] text-center space-y-1.5 shadow-sm transition-all"
                    >
                      <span className="text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-300 font-extrabold uppercase tracking-wider block">
                        {m.code}
                      </span>
                      <span className="text-sm sm:text-base md:text-lg font-mono font-extrabold text-[#2E936F] dark:text-teal-300 block">
                        {m.clause}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "matrix" && (
              <motion.div
                key="matrix-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-navy-700/80 bg-white dark:bg-navy-900 shadow-xl space-y-6"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-mono font-extrabold text-navy-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-[#F15E1C]" />
                    5x5 Likelihood x Impact Risk Matrix
                  </span>
                  <span className="text-xs font-mono text-[#2E936F] font-extrabold">
                    Asset-Linked Risk Scoring
                  </span>
                </div>

                {/* 5x5 Heatmap Matrix */}
                <div className="grid grid-cols-5 gap-1.5 max-w-md mx-auto text-center font-mono text-xs font-bold">
                  {[
                    { lvl: "C", score: 25, color: "bg-rose-500/80 text-white" },
                    { lvl: "C", score: 20, color: "bg-rose-500/80 text-white" },
                    { lvl: "H", score: 15, color: "bg-[#FAB60A]/30 text-[#FAB60A]" },
                    { lvl: "H", score: 12, color: "bg-[#FAB60A]/30 text-[#FAB60A]" },
                    { lvl: "M", score: 10, color: "bg-[#FAB60A]/20 text-[#FAB60A]" },

                    { lvl: "C", score: 20, color: "bg-rose-500/80 text-white" },
                    { lvl: "H", score: 16, color: "bg-[#FAB60A]/30 text-[#FAB60A]" },
                    { lvl: "H", score: 12, color: "bg-[#FAB60A]/30 text-[#FAB60A]" },
                    { lvl: "M", score: 8, color: "bg-[#FAB60A]/20 text-[#FAB60A]" },
                    { lvl: "M", score: 6, color: "bg-[#FAB60A]/20 text-[#FAB60A]" },

                    { lvl: "H", score: 15, color: "bg-[#FAB60A]/30 text-[#FAB60A]" },
                    { lvl: "H", score: 12, color: "bg-[#FAB60A]/30 text-[#FAB60A]" },
                    { lvl: "M", score: 9, color: "bg-[#FAB60A]/20 text-[#FAB60A]" },
                    { lvl: "M", score: 6, color: "bg-[#FAB60A]/20 text-[#FAB60A]" },
                    { lvl: "L", score: 4, color: "bg-[#2E936F]/20 text-[#2E936F]" },

                    { lvl: "M", score: 10, color: "bg-[#FAB60A]/20 text-[#FAB60A]" },
                    { lvl: "M", score: 8, color: "bg-[#FAB60A]/20 text-[#FAB60A]" },
                    { lvl: "M", score: 6, color: "bg-[#FAB60A]/20 text-[#FAB60A]" },
                    { lvl: "L", score: 4, color: "bg-[#2E936F]/20 text-[#2E936F]" },
                    { lvl: "L", score: 2, color: "bg-[#2E936F]/20 text-[#2E936F]" },

                    { lvl: "L", score: 5, color: "bg-[#2E936F]/20 text-[#2E936F]" },
                    { lvl: "L", score: 4, color: "bg-[#2E936F]/20 text-[#2E936F]" },
                    { lvl: "L", score: 3, color: "bg-[#2E936F]/20 text-[#2E936F]" },
                    { lvl: "L", score: 2, color: "bg-[#2E936F]/20 text-[#2E936F]" },
                    { lvl: "L", score: 1, color: "bg-[#2E936F]/20 text-[#2E936F]" },
                  ].map((cell, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-lg border border-slate-300 dark:border-slate-700/30 ${cell.color}`}
                    >
                      {cell.score}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Connection Thread to Framework Engine Section */}
        <div className="flex flex-col items-center justify-center text-center pt-2">
          <div className="w-0.5 h-8 bg-gradient-to-b from-[#2E936F] to-transparent animate-pulse" />
          <span className="text-xs font-mono text-[#2E936F] dark:text-teal font-extrabold tracking-widest uppercase mt-1">
            CONNECTS INTO FRAMEWORK ENGINE ↓
          </span>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
