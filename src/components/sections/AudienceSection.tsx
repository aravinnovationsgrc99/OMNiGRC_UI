"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Users,
  Shield,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Layers,
  ArrowDown,
} from "lucide-react";

export const AudienceSection: React.FC = () => {
  const [activeRole, setActiveRole] = useState<"solo" | "team" | "ciso">("team");

  const roles = [
    {
      id: "solo",
      title: "Solo Practitioner",
      badge: "CAPACITY CONSTRAINED · 1 PERSON",
      icon: User,
      focus: "Keep risk, controls, and evidence organized without operational overhead or spreadsheet drift.",
      workflowRail: "Risk → Controls → Testing → Evidence",
      details: [
        "Single standardized 5x5 risk scoring without duplicate logs",
        "Map safeguards once across ISO 27001 and SOC 2 requirements",
        "Maintain clean auditor workpapers without pre-audit panic",
      ],
      link: "/solutions/lean-security-teams",
    },
    {
      id: "team",
      title: "Lean Security Team",
      badge: "CROSS-FUNCTIONAL · 2–10 PEOPLE",
      icon: Users,
      focus: "Coordinate risk, controls, and rolling testing across a small team with automated reminders.",
      workflowRail: "Risk → Controls → Testing → Evidence",
      details: [
        "Assign clear control ownership & 30/60/90-day testing cadences",
        "Centralized asset & vendor inventory with PII data flow tracing",
        "Advisory AI suggests clause crosswalks with mandatory human approval",
      ],
      link: "/solutions/lean-security-teams",
    },
    {
      id: "ciso",
      title: "Security Lead / CISO",
      badge: "EXECUTIVE VISIBILITY · ENTERPRISE SCALE",
      icon: Shield,
      focus: "Maintain continuous visibility across risk posture, remediation SLAs, and audit readiness.",
      workflowRail: "Risk → Controls → Testing → Evidence",
      details: [
        "Board-ready risk distribution & unmitigated exposure tracking",
        "Multi-framework compliance crosswalks without multiplying work",
        "Defensible evidence reference links for independent auditors",
      ],
      link: "/solutions/security-leaders",
    },
  ];

  const currentRole = roles.find((r) => r.id === activeRole) || roles[1];

  return (
    <section className="relative w-full bg-transparent px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-b border-slate-200/60 dark:border-navy-700/60 overflow-hidden">
      {/* Background Soft Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#2E936F]/10 blur-3xl"
      />

      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight">
            One workflow. Every team size.
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl">
            From solo practitioner to security lead, OMNiGRC organizes risk, controls, and evidence around how you actually work.
          </p>
        </div>

        {/* Core Product Message Callout Banner */}
        <div className="max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl border border-[#2E936F]/40 bg-white dark:bg-navy-900/90 text-center text-xs sm:text-sm font-mono text-navy-900 dark:text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2E936F] dark:bg-teal-400 animate-pulse" />
            <span className="font-extrabold text-[#F15E1C] dark:text-[#FAB60A]">SAME OPERATING ENGINE:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold">
            <span className="px-2.5 py-1 rounded-lg bg-[#E6F4EF] dark:bg-navy-950 border border-[#2E936F]/30 dark:border-slate-700 text-[#2E936F] dark:text-slate-200 font-mono">
              01. RISK
            </span>
            <span className="text-[#2E936F]">→</span>
            <span className="px-2.5 py-1 rounded-lg bg-[#E6F4EF] dark:bg-navy-950 border border-[#2E936F]/30 dark:border-slate-700 text-[#2E936F] dark:text-slate-200 font-mono">
              02. CONTROLS
            </span>
            <span className="text-[#2E936F]">→</span>
            <span className="px-2.5 py-1 rounded-lg bg-[#E6F4EF] dark:bg-navy-950 border border-[#2E936F]/30 dark:border-slate-700 text-[#2E936F] dark:text-slate-200 font-mono">
              03. TESTING
            </span>
            <span className="text-[#2E936F]">→</span>
            <span className="px-2.5 py-1 rounded-lg bg-[#E6F4EF] dark:bg-navy-950 border border-[#2E936F]/30 dark:border-slate-700 text-[#2E936F] dark:text-slate-200 font-mono">
              04. EVIDENCE
            </span>
          </div>
        </div>

        {/* Interactive Role Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-4xl mx-auto">
          {roles.map((r) => {
            const Icon = r.icon;
            const isSelected = activeRole === r.id;
            return (
              <button
                key={r.id}
                onClick={() => setActiveRole(r.id as any)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                  isSelected
                    ? "border-[#2E936F] bg-white dark:bg-navy-800 shadow-xl ring-2 ring-[#2E936F]/40"
                    : "border-slate-200 dark:border-navy-700/60 bg-white/70 dark:bg-navy-900/60 hover:border-slate-300 dark:hover:border-navy-600"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div
                      className={`p-2.5 rounded-xl ${
                        isSelected
                          ? "bg-[#2E936F] text-white"
                          : "bg-slate-100 dark:bg-navy-950 text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase text-[#F15E1C] dark:text-amber">
                      {r.id.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base sm:text-lg text-navy-900 dark:text-white">
                    {r.title}
                  </h3>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Same Workflow</span>
                  <span className="text-[#2E936F] font-bold">Scale {r.id === "solo" ? "1x" : r.id === "team" ? "10x" : "100x"}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Role Content Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRole.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-[#2E936F]/40 bg-white/90 dark:bg-navy-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-md space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-[#F15E1C] dark:text-amber tracking-widest block mb-1">
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

              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                {currentRole.focus}
              </p>

              <div className="space-y-3 pt-2">
                {currentRole.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-navy-950/70 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3"
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

        {/* Downward Thread Indicator */}
        <div className="flex flex-col items-center justify-center text-center pt-2">
          <div className="w-0.5 h-8 bg-gradient-to-b from-[#2E936F] to-transparent animate-pulse" />
          <span className="text-[10px] font-mono text-[#2E936F] dark:text-teal font-bold tracking-widest uppercase mt-1">
            EXPLORE THE CONNECTED THREAD ↓
          </span>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
