"use client";

import React from "react";
import {
  Shield,
  Lock,
  Cpu,
  UserCheck,
  ArrowRight,
  ArrowDown,
  Sparkles,
  Database,
} from "lucide-react";

const workflowSteps = [
  {
    step: "01",
    title: "Analyst UI & Input",
    scope: "OMNiGRC Boundary",
    desc: "Analyst inputs internal security control description.",
    icon: Shield,
    badge: "Tenant Scoped",
  },
  {
    step: "02",
    title: "Payload Minimization",
    scope: "OMNiGRC Boundary",
    desc: "Strips org names, PII, and tenant context.",
    icon: Lock,
    badge: "Sanitized Payload",
  },
  {
    step: "03",
    title: "Tiered Model Router",
    scope: "External LLM API",
    desc: "Routes sanitized text to Gemini or Claude Haiku.",
    icon: Cpu,
    badge: "Stateless Routing",
  },
  {
    step: "04",
    title: "Validation & Sign-off",
    scope: "OMNiGRC Boundary",
    desc: "Schema validated; human approves clause match.",
    icon: UserCheck,
    badge: "Human Decides",
  },
];

export const ControlMapping3DGraph: React.FC = () => {
  const renderCardContent = (s: typeof workflowSteps[0]) => {
    const Icon = s.icon;
    return (
      <div className="p-5 rounded-2xl border border-slate-200/90 dark:border-navy-700/80 bg-white dark:bg-navy-900/90 shadow-sm flex flex-col justify-between h-full space-y-4">
        {/* TOP SECTION: Icon on Left, STAGE + Title + Desc on Right */}
        <div className="flex items-start gap-4 w-full">
          {/* Soft Green Icon Square */}
          <div className="w-12 h-12 rounded-2xl bg-[#E8F8F0] dark:bg-emerald-950/60 text-[#2E936F] dark:text-emerald-400 flex items-center justify-center shrink-0 border border-[#2E936F]/20">
            <Icon className="h-6 w-6" />
          </div>

          {/* Text Info */}
          <div className="space-y-1 min-w-0 flex-1">
            <span className="text-xs font-mono font-bold text-[#F15E1C] dark:text-amber uppercase tracking-wider block">
              STAGE {s.step}
            </span>
            <h4 className="font-extrabold text-base sm:text-lg text-navy-900 dark:text-white leading-snug">
              {s.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 leading-relaxed font-medium pt-0.5">
              {s.desc}
            </p>
          </div>
        </div>

        {/* BOTTOM SECTION: Scope on Left, Pill Badge on Right */}
        <div className="pt-3 border-t border-slate-100 dark:border-navy-700/60 flex items-center justify-between gap-2">
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-medium">
            {s.scope}
          </span>
          <span className="text-xs font-mono font-semibold text-[#2E936F] dark:text-teal bg-[#E8F8F0] dark:bg-teal/15 px-3 py-1 rounded-lg">
            {s.badge}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full rounded-3xl border border-slate-200/90 dark:border-navy-700/60 bg-white dark:bg-[#0A111F]/95 p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-300/60 dark:border-amber-700/50 bg-[#FFFBEB] dark:bg-amber-950/30 text-amber-900 dark:text-amber-300 font-mono text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
          <Sparkles className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
          <span>DATA MINIMIZATION ARCHITECTURE</span>
        </div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-snug">
          The Auditable AI Control Mapping Pipeline
        </h3>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-2 leading-relaxed font-medium max-w-2xl mx-auto">
          Explore each architectural stage to see how sensitive context is isolated before external model evaluation.
        </p>
      </div>

      {/* DESKTOP UI LAYOUT (Matching attached reference image) */}
      <div className="relative z-10 mb-8 hidden md:block">
        {/* SVG Connector Path wrapping around from Stage 02 down to Stage 03 */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Loop line from Stage 02 right edge to Stage 03 top left */}
          <path
            d="M 98% 25% H 101.5% A 12 12 0 0 1 102.7% 33% V 46% A 12 12 0 0 1 101.5% 54% H 3.5% A 12 12 0 0 0 2.3% 62% V 70%"
            stroke="#2E936F"
            strokeWidth="1.5"
            className="opacity-80"
          />
          {/* Arrow tip entering Stage 03 top */}
          <path
            d="M 2.3% 70% L 0.5% 65% L 4.1% 65% Z"
            fill="#2E936F"
            className="opacity-90"
          />
        </svg>

        {/* 2x2 Grid of Stage Cards */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-6 relative z-10">
          {/* Stage 01 */}
          <div className="relative">
            {renderCardContent(workflowSteps[0])}
            {/* Inline Right Arrow between Stage 01 & Stage 02 */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-[#2E936F] z-20">
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>

          {/* Stage 02 */}
          <div className="relative">
            {renderCardContent(workflowSteps[1])}
          </div>

          {/* Stage 03 */}
          <div className="relative">
            {renderCardContent(workflowSteps[2])}
            {/* Inline Right Arrow between Stage 03 & Stage 04 */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-[#2E936F] z-20">
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>

          {/* Stage 04 */}
          <div className="relative">
            {renderCardContent(workflowSteps[3])}
          </div>
        </div>
      </div>

      {/* MOBILE UI FALLBACK LAYOUT (preserved until mobile directions provided) */}
      <div className="grid grid-cols-1 gap-4 relative z-10 mb-6 md:hidden">
        {workflowSteps.map((s, idx) => (
          <div key={idx} className="relative flex flex-col">
            {renderCardContent(s)}
            {idx < 3 && (
              <div className="flex justify-center my-2">
                <ArrowDown className="h-5 w-5 text-[#2E936F] dark:text-teal/60" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Callout Bar (2 Equal Columns) */}
      <div className="p-4 sm:p-5 rounded-2xl border border-[#D0F2E3] dark:border-navy-700/60 bg-[#F2FBF7] dark:bg-navy-900/90 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        {/* Left Column: OMNIGRC CONTROLLED VPC & DATABASE */}
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-100/70 dark:bg-emerald-950/60 text-[#2E936F] dark:text-teal-400 flex items-center justify-center shrink-0 border border-[#2E936F]/20">
            <Database className="h-5 w-5" />
          </div>
          <div className="space-y-0.5 min-w-0">
            <span className="text-xs font-mono font-bold text-[#2E936F] dark:text-teal uppercase tracking-wider block">
              OMNiGRC CONTROLLED VPC &amp; DATABASE
            </span>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-snug">
              All customer data, risks, and approvals stay safe inside your isolated cloud.
            </p>
          </div>
        </div>

        {/* Right Column: EXTERNAL STATELESS AI BOUNDARY */}
        <div className="flex items-center gap-3.5 md:border-l border-[#D0F2E3] dark:border-navy-700/60 md:pl-5">
          <div className="w-10 h-10 rounded-xl bg-emerald-100/70 dark:bg-emerald-950/60 text-[#2E936F] dark:text-teal-400 flex items-center justify-center shrink-0 border border-[#2E936F]/20">
            <Shield className="h-5 w-5" />
          </div>
          <div className="space-y-0.5 min-w-0">
            <span className="text-xs font-mono font-bold text-[#2E936F] dark:text-teal uppercase tracking-wider block">
              EXTERNAL STATELESS AI BOUNDARY
            </span>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-snug">
              AI receives clean text only. Zero customer data stored. Zero model training.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlMapping3DGraph;
