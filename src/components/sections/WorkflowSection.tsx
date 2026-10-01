"use client";

import React, { useState } from "react";
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
} from "lucide-react";

export const WorkflowSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"pillars" | "crosswalk" | "matrix">("pillars");
  const [selectedControl, setSelectedControl] = useState<string>("CTRL-084");

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

  const currentControl =
    sampleControls.find((c) => c.id === selectedControl) || sampleControls[0];

  return (
    <section className="relative w-full bg-transparent px-4 sm:px-6 lg:px-8 py-10 sm:py-16 border-b border-slate-200/60 dark:border-navy-700/60 overflow-hidden" id="workflows-preview">
      {/* Background Ambient Soft Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-[#2E936F]/10 blur-3xl"
      />

      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#2E936F]/40 bg-[#2E936F]/10 text-[#F15E1C] dark:text-amber text-[10px] sm:text-xs font-mono tracking-wider uppercase font-semibold shadow-sm">
            <Layers className="h-3.5 w-3.5 text-[#2E936F]" />
            <span>FOUR CORE PILLARS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight">
            Everything connects. Nothing lives in isolation.
          </h2>

          <div className="pt-1">
            <span className="inline-block px-4 py-1.5 rounded-xl bg-navy-900 text-white font-mono text-xs sm:text-sm font-bold shadow-md border border-[#2E936F]/40">
              RISK, ASSETS, CONTROLS, EVIDENCE — ONE THREAD, NOT FOUR SILOS.
            </span>
          </div>

          <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto">
            A single operating layer connecting every phase of the security, risk, and audit lifecycle.
          </p>
        </div>

        {/* ⚡ AUTO-CROSSWALK FEATURE BANNER */}
        <div className="max-w-4xl mx-auto p-4 rounded-2xl border-2 border-[#2E936F] bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-[#F15E1C] dark:text-amber animate-pulse" />
            <span className="font-extrabold text-[#F15E1C] dark:text-amber">
              ⚡ AUTO-CROSSWALK ENABLED
            </span>
            <span className="text-slate-400 hidden xs:inline">•</span>
            <span className="text-slate-200">Mapped Once, Applies Everywhere</span>
          </div>
          <span className="px-3 py-1 rounded-lg bg-[#2E936F]/20 text-[#2E936F] dark:text-teal border border-[#2E936F]/40 text-2xs font-bold">
            6 Frameworks Mapped
          </span>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1 rounded-2xl bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-700/80 shadow-inner">
            <button
              onClick={() => setActiveTab("pillars")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "pillars"
                  ? "bg-[#2E936F] text-white shadow-md"
                  : "text-slate-500 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white"
              }`}
            >
              Structured Four Pillars
            </button>
            <button
              onClick={() => setActiveTab("crosswalk")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "crosswalk"
                  ? "bg-[#2E936F] text-white shadow-md"
                  : "text-slate-500 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white"
              }`}
            >
              ⚡ Auto-Crosswalk Demo
            </button>
            <button
              onClick={() => setActiveTab("matrix")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "matrix"
                  ? "bg-[#2E936F] text-white shadow-md"
                  : "text-slate-500 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white"
              }`}
            >
              5x5 Heatmap Matrix
            </button>
          </div>
        </div>

        {/* Dynamic Display Area */}
        <div className="max-w-3xl lg:max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "pillars" && (
              <motion.div
                key="pillars-view"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 sm:space-y-4 md:space-y-5"
              >
                {fourPillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={pillar.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.35, delay: idx * 0.08 }}
                    >
                      <Link
                        href={pillar.href}
                        className="group relative flex flex-row items-center justify-between gap-4 sm:gap-5 md:gap-6 p-5 md:p-5 lg:p-6 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-navy-700/80 bg-white/95 dark:bg-navy-900/95 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-md"
                      >
                        {/* LEFT: Rich Square Icon Container (ALWAYS LEFT, EVEN ON MOBILE) */}
                        <div
                          className={`w-20 h-20 md:w-22 md:h-22 lg:w-24 lg:h-24 shrink-0 rounded-2xl md:rounded-3xl border ${pillar.borderColor} ${pillar.tileBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm`}
                        >
                          <Icon className={`h-10 w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 ${pillar.textColor}`} />
                        </div>

                        {/* MIDDLE: Pillar Label, Heading & Description (ALWAYS LEFT ALIGNED) */}
                        <div className="flex-1 min-w-0 text-left space-y-0.5 sm:space-y-1">
                          <span className={`font-mono text-xs md:text-xs lg:text-sm font-extrabold uppercase tracking-wider ${pillar.textColor} block`}>
                            {pillar.label}
                          </span>
                          <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-snug group-hover:text-[#2E936F] transition-colors">
                            {pillar.title}
                          </h3>
                          <p className="text-xs md:text-xs lg:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                            {pillar.desc}
                          </p>
                        </div>

                        {/* RIGHT: Circular Arrow CTA Button (ALWAYS RIGHT, VERTICALLY CENTERED) */}
                        <div
                          className={`w-11 h-11 md:w-12 md:h-12 lg:w-13 lg:h-13 shrink-0 rounded-full flex items-center justify-center border ${pillar.borderColor} ${pillar.arrowBg} transition-all duration-300 shadow-sm`}
                        >
                          <ArrowRight className="h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1.5 transition-transform duration-300" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {activeTab === "crosswalk" && (
              <motion.div
                key="crosswalk-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 md:p-10 rounded-3xl border-2 border-[#2E936F]/60 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white shadow-2xl backdrop-blur-xl space-y-6 sm:space-y-8"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div className="space-y-1">
                    <span className="text-xs sm:text-sm font-mono text-[#F15E1C] dark:text-amber font-extrabold uppercase tracking-widest flex items-center gap-2">
                      <Zap className="h-4 w-4 text-[#F15E1C] animate-pulse" />
                      ⚡ AUTO-CROSSWALK DEMONSTRATION
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
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
                            : "bg-navy-950 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500"
                        }`}
                      >
                        {c.id}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selected Control Details Box */}
                <div className="p-5 sm:p-6 rounded-2xl bg-navy-950/90 border border-slate-700/80 shadow-inner space-y-2">
                  <span className="text-sm sm:text-base md:text-lg font-mono font-extrabold text-[#FAB60A] block">
                    {currentControl.id}: {currentControl.name}
                  </span>
                  <p className="text-xs sm:text-sm md:text-base text-slate-100 font-medium leading-relaxed">
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
                      className="p-4 sm:p-5 rounded-2xl border-2 border-[#2E936F]/50 bg-navy-900/90 hover:bg-navy-850 hover:border-[#2E936F] text-center space-y-1.5 shadow-md transition-all"
                    >
                      <span className="text-xs sm:text-sm font-mono text-slate-300 font-extrabold uppercase tracking-wider block">
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
                className="p-6 sm:p-8 rounded-3xl border border-slate-300 dark:border-navy-700/80 bg-white dark:bg-navy-900 shadow-xl space-y-6"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-mono font-bold text-navy-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-[#F15E1C]" />
                    5x5 Likelihood x Impact Risk Matrix
                  </span>
                  <span className="text-2xs font-mono text-[#2E936F] font-bold">
                    Asset-Linked Risk Scoring
                  </span>
                </div>

                {/* 5x5 Heatmap Matrix */}
                <div className="grid grid-cols-5 gap-1.5 max-w-md mx-auto text-center font-mono text-2xs font-bold">
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
                      className={`p-2.5 rounded-lg border border-slate-700/30 ${cell.color}`}
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
          <span className="text-[10px] font-mono text-[#2E936F] dark:text-teal font-bold tracking-widest uppercase mt-1">
            CONNECTS INTO FRAMEWORK ENGINE ↓
          </span>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
