"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Users,
  Shield,
  ArrowRight,
  CheckCircle2,
  Settings,
  Zap,
  FileText,
  Lock,
  BarChart3,
  Database,
} from "lucide-react";

export const AudienceSection: React.FC = () => {
  const [activeRole, setActiveRole] = useState<"solo" | "team" | "ciso">("team");

  const roles = [
    {
      id: "solo",
      title: "Solo Practitioner",
      subtext: "Get started quickly with a simple, structured workflow.",
      badge: "CAPACITY CONSTRAINED · 1 PERSON",
      icon: User,
      accentColor: "#F15E1C",
      iconBoxBg: "bg-[#FFF0E5] border-[#F15E1C]/30 text-[#F15E1C]",
      arrowBoxBg: "bg-[#FFF0E5] text-[#F15E1C] border-[#F15E1C]/30",
      scaleText: "1x",
      scaleColor: "text-[#F15E1C]",
      focus: "Keep risk, controls, and evidence organized without operational overhead or spreadsheet drift.",
      workflowRail: "Risk → Controls → Testing → Evidence",
      details: [
        "Single standardized 5x5 risk scoring without duplicate logs",
        "Map safeguards once across ISO 27001 and SOC 2 requirements",
        "Maintain clean auditor workpapers without pre-audit panic",
      ],
    },
    {
      id: "team",
      title: "Lean Security Team",
      subtext: "Coordinate risk, controls, and testing with automated reminders.",
      badge: "CROSS-FUNCTIONAL · 2–10 PEOPLE",
      icon: Users,
      accentColor: "#2E936F",
      iconBoxBg: "bg-[#E6F4EF] border-[#2E936F]/30 text-[#2E936F]",
      arrowBoxBg: "bg-[#E6F4EF] text-[#2E936F] border-[#2E936F]/30",
      scaleText: "10x",
      scaleColor: "text-[#2E936F]",
      focus: "Coordinate risk, controls, and rolling testing across a small team with automated reminders.",
      workflowRail: "Risk → Controls → Testing → Evidence",
      details: [
        "Assign clear control ownership & 30/60/90-day testing cadences",
        "Centralized asset & vendor inventory with PII data flow tracing",
        "Advisory AI suggests clause crosswalks with mandatory human approval",
      ],
    },
    {
      id: "ciso",
      title: "Security Lead / CISO",
      subtext: "Enterprise-wide visibility and control across multiple teams.",
      badge: "EXECUTIVE VISIBILITY · ENTERPRISE SCALE",
      icon: Shield,
      accentColor: "#FAB60A",
      iconBoxBg: "bg-[#FFFBE6] border-[#FAB60A]/40 text-[#D4521A]",
      arrowBoxBg: "bg-[#FFFBE6] text-[#D4521A] border-[#FAB60A]/40",
      scaleText: "100x",
      scaleColor: "text-[#D4521A]",
      focus: "Maintain continuous visibility across risk posture, remediation SLAs, and audit readiness.",
      workflowRail: "Risk → Controls → Testing → Evidence",
      details: [
        "Board-ready risk distribution & unmitigated exposure tracking",
        "Multi-framework compliance crosswalks without multiplying work",
        "Defensible evidence reference links for independent auditors",
      ],
    },
  ];

  const currentRole = roles.find((r) => r.id === activeRole) || roles[1];

  return (
    <section className="relative w-full bg-transparent px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8 border-b border-slate-200/60 dark:border-navy-700/60 overflow-hidden">
      {/* Soft Ambient Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-[#2E936F]/10 blur-3xl"
      />

      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="w-full text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight">
            One workflow. <span className="text-[#F15E1C]">Every team size.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto">
            From solo practitioner to security lead, OMNiGRC organizes risk, controls, and evidence around how you actually work.
          </p>
        </div>

        {/* SAME OPERATING ENGINE BANNER (Matching Image 2) */}
        <div className="w-full p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 dark:border-navy-700/80 bg-white/95 dark:bg-navy-900 shadow-sm backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono font-bold">
            <div className="w-8 h-8 rounded-xl bg-[#FFF0E5] dark:bg-navy-950 flex items-center justify-center shrink-0 border border-[#F15E1C]/30 text-[#F15E1C]">
              <Settings className="h-4 w-4" />
            </div>
            <span className="text-[#F15E1C] uppercase tracking-wider font-extrabold">SAME OPERATING ENGINE</span>
            <span className="text-slate-300 dark:text-slate-700 hidden md:inline ml-1">|</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono font-bold">
            {/* 01. RISK */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#E6F4EF] dark:bg-navy-950 border border-[#2E936F]/30 text-[#2E936F]">
              <FileText className="h-3.5 w-3.5 text-[#2E936F]" />
              <span>01. RISK</span>
            </div>
            <span className="text-slate-400 font-bold">→</span>

            {/* 02. CONTROLS */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFF0E5] dark:bg-navy-950 border border-[#F15E1C]/30 text-[#F15E1C]">
              <Lock className="h-3.5 w-3.5 text-[#F15E1C]" />
              <span>02. CONTROLS</span>
            </div>
            <span className="text-slate-400 font-bold">→</span>

            {/* 03. TESTING */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFFBE6] dark:bg-navy-950 border border-[#FAB60A]/40 text-[#D4521A]">
              <BarChart3 className="h-3.5 w-3.5 text-[#D4521A]" />
              <span>03. TESTING</span>
            </div>
            <span className="text-slate-400 font-bold">→</span>

            {/* 04. EVIDENCE */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#E6F4EF] dark:bg-navy-950 border border-[#2E936F]/30 text-[#2E936F]">
              <Database className="h-3.5 w-3.5 text-[#2E936F]" />
              <span>04. EVIDENCE</span>
            </div>
          </div>
        </div>

        {/* 3 ROLE SELECTOR CARDS GRID (Matching Image 2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full">
          {roles.map((r) => {
            const Icon = r.icon;
            const isSelected = activeRole === r.id;
            return (
              <button
                key={r.id}
                onClick={() => setActiveRole(r.id as any)}
                className={`p-5 sm:p-6 rounded-2xl text-left transition-all duration-200 relative flex flex-col justify-between space-y-4 group w-full ${
                  isSelected
                    ? "border-2 border-[#2E936F] bg-[#E6F4EF]/60 dark:bg-navy-800/90 shadow-lg ring-1 ring-[#2E936F]/20"
                    : "border border-slate-200 dark:border-navy-700 bg-white/90 dark:bg-navy-900 hover:border-slate-300 dark:hover:border-navy-600 hover:shadow-md"
                }`}
              >
                <div className="space-y-4 w-full">
                  <div className="flex items-center justify-between w-full">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${r.iconBoxBg}`}>
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                      isSelected
                        ? "bg-[#2E936F] text-white border-[#2E936F] shadow-sm"
                        : `${r.arrowBoxBg} group-hover:scale-105`
                    }`}>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-lg sm:text-xl text-navy-900 dark:text-white">
                      {r.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed mt-1">
                      {r.subtext}
                    </p>
                  </div>
                </div>

                <div className="pt-3.5 border-t border-slate-200/80 dark:border-navy-700/80 flex items-center justify-between text-xs font-mono w-full">
                  <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1">
                    <Zap className="h-3.5 w-3.5 text-[#F15E1C]" /> Same workflow
                  </span>
                  <span className="font-bold text-slate-500 dark:text-slate-400">
                    <span className="text-slate-300 dark:text-slate-600 mr-1.5">|</span> Scale <span className={`font-extrabold ${r.scaleColor}`}>{r.scaleText}</span>
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* ACTIVE ROLE SPOTLIGHT CONTENT CARD (Full width stretch) */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRole.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full rounded-3xl border border-[#2E936F]/40 bg-white/95 dark:bg-navy-900 p-6 sm:p-8 shadow-xl backdrop-blur-md space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800 w-full">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-[#F15E1C] tracking-widest block mb-1">
                    {currentRole.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white">
                    {currentRole.title} Operational Focus
                  </h3>
                </div>

                <div className="px-3.5 py-1.5 rounded-xl bg-[#E6F4EF] dark:bg-emerald-950/60 border border-[#2E936F]/30 text-xs font-mono text-[#2E936F] dark:text-teal font-extrabold shrink-0">
                  Workflow Rail: {currentRole.workflowRail}
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 font-medium leading-relaxed w-full">
                {currentRole.focus}
              </p>

              <div className="space-y-3 pt-2 w-full">
                {currentRole.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-navy-950/70 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3 w-full"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#2E936F] shrink-0" />
                    <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default AudienceSection;

