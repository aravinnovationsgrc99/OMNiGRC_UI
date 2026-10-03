"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Cpu,
  UserCheck,
  ArrowRight,
  ArrowDown,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

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

  return (
    <div className="relative w-full rounded-3xl border border-slate-200 dark:border-teal/30 bg-white dark:bg-[#0A111F]/95 p-5 sm:p-7 lg:p-8 shadow-xl overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
        <Badge variant="ai" icon={<Sparkles className="h-3.5 w-3.5" />} className="mb-3 px-3 py-1 text-xs">
          DATA MINIMIZATION ARCHITECTURE
        </Badge>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-snug">
          The Auditable AI Control Mapping Pipeline
        </h3>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
          Explore each architectural stage to see how sensitive context is isolated before external model evaluation.
        </p>
      </div>

      {/* 4 Steps Architectural Pipeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 relative z-10 mb-6 sm:mb-8">
        {workflowSteps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="relative flex flex-col h-full">
              <div
                className="p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-navy-700/80 bg-white/95 dark:bg-navy-900/90 shadow-sm flex flex-col justify-between h-full space-y-3"
              >
                {/* TOP ROW: Icon Box on Left, STAGE + Title in Middle, Arrow Button on Far Right */}
                <div className="flex items-start justify-between gap-2.5 w-full">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    {/* Left Icon Badge Box */}
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-[#2E936F] dark:text-teal-400 flex items-center justify-center shrink-0 border border-[#2E936F]/20"
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Middle Section: STAGE XX + Main Title */}
                    <div className="min-w-0 space-y-0.5">
                      <span className="text-xs font-mono font-extrabold text-[#F15E1C] dark:text-amber block uppercase">
                        STAGE {s.step}
                      </span>
                      <h4 className="font-extrabold text-sm sm:text-base text-navy-900 dark:text-white leading-snug">
                        {s.title}
                      </h4>
                    </div>
                  </div>

                  {/* Far Right Circular Arrow CTA Button */}
                  <div
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 border border-slate-200 dark:border-navy-700 bg-slate-50 dark:bg-navy-800 text-slate-500 dark:text-slate-400"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>

                {/* MIDDLE SECTION: Description Text Below Both */}
                <div className="pt-0.5">
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {s.desc}
                  </p>
                </div>

                {/* BOTTOM SECTION: Divider Line + Scope & Badge Pill */}
                <div className="pt-2 border-t border-slate-200/80 dark:border-navy-700/60 flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-[11px] sm:text-xs font-mono text-slate-600 dark:text-slate-300 font-medium">
                    {s.scope}
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-[#2E936F] dark:text-teal bg-[#2E936F]/10 dark:bg-teal/15 px-2 py-0.5 rounded-md">
                    {s.badge}
                  </span>
                </div>
              </div>

              {/* Mobile / Vertical step connector arrow */}
              {idx < 3 && (
                <div className="flex justify-center my-2 sm:hidden">
                  <ArrowDown className="h-5 w-5 text-[#2E936F] dark:text-teal/60 animate-pulse" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Architectural Isolation Visualizer Callout */}
      <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-navy-700/60 bg-slate-50 dark:bg-navy-900/70 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-center">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-[#2E936F] dark:text-teal shrink-0" />
            <span className="text-xs sm:text-sm font-mono font-extrabold text-[#2E936F] dark:text-teal uppercase tracking-wider">
              OMNiGRC Controlled VPC &amp; Database
            </span>
          </div>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            All customer data, risks, and approvals stay safe inside your isolated cloud.
          </p>
        </div>

        <div className="space-y-1.5 md:border-l border-slate-200 dark:border-navy-700/60 md:pl-6">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-[#2E936F] dark:text-teal shrink-0" />
            <span className="text-xs sm:text-sm font-mono font-extrabold text-[#2E936F] dark:text-teal uppercase tracking-wider">
              External Stateless AI Boundary
            </span>
          </div>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            AI receives clean text only. Zero customer data stored. Zero model training.
          </p>
        </div>
      </div>
    </div>
  );
};
