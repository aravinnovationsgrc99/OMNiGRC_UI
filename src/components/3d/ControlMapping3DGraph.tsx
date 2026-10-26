"use client";

import React from "react";
import {
  Shield,
  Lock,
  Cpu,
  UserCheck,
  ArrowRight,
  ArrowDown,
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

export interface ControlMapping3DGraphProps {
  hideHeader?: boolean;
  className?: string;
}

export const ControlMapping3DGraph: React.FC<ControlMapping3DGraphProps> = ({
  hideHeader = false,
  className = "",
}) => {
  const renderCardContent = (s: typeof workflowSteps[0]) => {
    const Icon = s.icon;
    return (
      <div className="p-3.5 sm:p-4.5 rounded-2xl border border-slate-200/90 dark:border-navy-700/80 bg-white dark:bg-navy-900/90 shadow-sm flex flex-col justify-between h-full space-y-3">
        {/* TOP SECTION: Icon on Left, STAGE + Title + Desc on Right */}
        <div className="flex items-start gap-3 sm:gap-3.5 w-full">
          {/* Soft Green Icon Square */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#E8F8F0] dark:bg-emerald-950/60 text-[#2E936F] dark:text-emerald-400 flex items-center justify-center shrink-0 border border-[#2E936F]/20">
            <Icon className="h-5 w-5" />
          </div>

          {/* Text Info */}
          <div className="space-y-0.5 min-w-0 flex-1">
            <span className="text-[11px] sm:text-xs font-mono font-bold text-[#F15E1C] dark:text-[#FF7A3D] uppercase tracking-wider block">
              STAGE {s.step}
            </span>
            <h4 className="font-extrabold text-sm sm:text-base lg:text-[17px] text-navy-900 dark:text-white leading-snug">
              {s.title}
            </h4>
            <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal pt-0.5">
              {s.desc}
            </p>
          </div>
        </div>

        {/* BOTTOM SECTION: Scope on Left, Pill Badge on Right */}
        <div className="pt-2.5 sm:pt-3 border-t border-slate-100 dark:border-navy-700/60 flex items-center justify-between gap-2">
          <span className="text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 font-medium">
            {s.scope}
          </span>
          <span className="text-[11px] sm:text-xs font-mono font-bold text-[#2E936F] dark:text-teal bg-[#E8F8F0] dark:bg-teal/15 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg shrink-0 border border-[#2E936F]/20">
            {s.badge}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className={`relative w-full rounded-3xl border border-slate-200/90 dark:border-navy-700/60 bg-white dark:bg-[#0A111F]/95 p-4 sm:p-6 lg:p-7 shadow-xl overflow-hidden ${className}`}>
      {/* Section Header (Hidden when used alongside hero title) */}
      {!hideHeader && (
        <div className="text-left w-full space-y-2 mb-4 sm:mb-6">
          <h3 className="text-xl min-[380px]:text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-snug w-full">
            The Auditable AI Control Mapping Pipeline
          </h3>
          <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium w-full">
            Explore each architectural stage to see how sensitive context is isolated before external model evaluation.
          </p>
        </div>
      )}

      {/* DESKTOP UI LAYOUT (Clean 2x2 Grid with Horizontal Center Arrows) */}
      <div className="relative z-10 mb-4 sm:mb-5 hidden md:block">
        <div className="grid grid-cols-2 gap-x-8 lg:gap-x-10 gap-y-4 lg:gap-y-5 relative z-10 items-stretch">
          {/* Stage 01 */}
          <div className="relative h-full">
            {renderCardContent(workflowSteps[0])}
            {/* Inline Right Arrow between Stage 01 & Stage 02 */}
            <div className="absolute -right-6 lg:-right-7 top-1/2 -translate-y-1/2 text-[#2E936F] z-20 flex items-center justify-center">
              <ArrowRight className="h-5 w-5 stroke-[2.2]" />
            </div>
          </div>

          {/* Stage 02 */}
          <div className="relative h-full">
            {renderCardContent(workflowSteps[1])}
          </div>

          {/* Stage 03 */}
          <div className="relative h-full">
            {renderCardContent(workflowSteps[2])}
            {/* Inline Right Arrow between Stage 03 & Stage 04 */}
            <div className="absolute -right-6 lg:-right-7 top-1/2 -translate-y-1/2 text-[#2E936F] z-20 flex items-center justify-center">
              <ArrowRight className="h-5 w-5 stroke-[2.2]" />
            </div>
          </div>

          {/* Stage 04 */}
          <div className="relative h-full">
            {renderCardContent(workflowSteps[3])}
          </div>
        </div>
      </div>

      {/* MOBILE UI TIMELINE LAYOUT (Cards stacked directly without side timeline) */}
      <div className="space-y-2.5 sm:space-y-3 relative z-10 mb-4 sm:mb-5 md:hidden">
        {workflowSteps.map((s, idx) => (
          <div key={idx} className="w-full">
            {renderCardContent(s)}
          </div>
        ))}
      </div>

      {/* Bottom Callout Bar (2 Equal Columns on Desktop, Stacked on Mobile) */}
      <div className="p-3.5 sm:p-4.5 lg:p-5 rounded-2xl border border-[#D0F2E3] dark:border-navy-700/60 bg-[#F2FBF7] dark:bg-navy-950/70 grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5 items-center">
        {/* Left Column: OMNIGRC CONTROLLED VPC & DATABASE */}
        <div className="flex items-center gap-3 sm:gap-3.5">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#E8F8F0] dark:bg-emerald-950/60 text-[#2E936F] dark:text-teal-400 flex items-center justify-center shrink-0 border border-[#2E936F]/20">
            <Database className="h-5 w-5" />
          </div>
          <div className="space-y-0.5 min-w-0">
            <span className="text-[11px] sm:text-xs font-mono font-bold text-[#2E936F] dark:text-teal uppercase tracking-wider block">
              OMNiGRC CONTROLLED VPC &amp; DATABASE
            </span>
            <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 font-medium leading-snug">
              All customer data, risks, and approvals stay safe inside your isolated cloud.
            </p>
          </div>
        </div>

        {/* Right Column: EXTERNAL STATELESS AI BOUNDARY */}
        <div className="flex items-center gap-3 sm:gap-3.5 md:border-l border-[#D0F2E3] dark:border-navy-700/60 md:pl-5 lg:md:pl-6">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#E8F8F0] dark:bg-emerald-950/60 text-[#2E936F] dark:text-teal-400 flex items-center justify-center shrink-0 border border-[#2E936F]/20">
            <Shield className="h-5 w-5" />
          </div>
          <div className="space-y-0.5 min-w-0">
            <span className="text-[11px] sm:text-xs font-mono font-bold text-[#2E936F] dark:text-teal uppercase tracking-wider block">
              EXTERNAL STATELESS AI BOUNDARY
            </span>
            <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 font-medium leading-snug">
              AI receives clean text only. Zero customer data stored. Zero model training.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlMapping3DGraph;
