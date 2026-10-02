"use client";

import React, { useState } from "react";
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
  const [activeStep, setActiveStep] = useState<number>(0);

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
          Click through each architectural stage to see how sensitive context is isolated before external model evaluation.
        </p>
      </div>

      {/* 4 Steps Interactive Pipeline with Visual Flow Indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-4 sm:gap-5 relative z-10 mb-6 sm:mb-8">
        {workflowSteps.map((s, idx) => {
          const isCurrent = activeStep === idx;
          const Icon = s.icon;
          return (
            <div key={idx} className="relative flex flex-col justify-between">
              <motion.div
                whileHover={{ scale: 1.01 }}
                onClick={() => setActiveStep(idx)}
                className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between h-full min-h-[200px] ${
                  isCurrent
                    ? "border-[#2E936F] dark:border-teal bg-[#F0FDF4] dark:bg-navy-900 shadow-lg ring-1 ring-[#2E936F]/40"
                    : "border-slate-200 dark:border-navy-700/60 bg-slate-50 dark:bg-navy-900/50 hover:border-[#2E936F]/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`p-2.5 rounded-xl shrink-0 ${
                        isCurrent ? "bg-[#2E936F] text-white" : "bg-slate-200 dark:bg-navy-800 text-[#2E936F] dark:text-teal"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-xs sm:text-sm font-mono font-extrabold text-[#F15E1C] dark:text-amber">STAGE {s.step}</span>
                      {idx < 3 && (
                        <ArrowRight className="hidden 2xl:block h-4 w-4 text-[#2E936F]/60 dark:text-teal/60 ml-1" />
                      )}
                    </div>
                  </div>
                  <h4 className="font-extrabold text-lg sm:text-xl text-navy-900 dark:text-white mb-2 leading-snug">{s.title}</h4>
                  <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{s.desc}</p>
                </div>

                <div className="pt-3.5 border-t border-slate-200/80 dark:border-navy-700/60 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-300 truncate font-medium">{s.scope}</span>
                  <span className="text-xs sm:text-xs font-mono font-bold text-[#2E936F] dark:text-teal bg-[#2E936F]/10 dark:bg-teal/10 px-2.5 py-1 rounded-md shrink-0">
                    {s.badge}
                  </span>
                </div>
              </motion.div>

              {/* Mobile / Vertical step connector */}
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
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-[#2E936F] dark:text-teal shrink-0" />
            <span className="text-xs sm:text-sm font-mono font-extrabold text-[#2E936F] dark:text-teal uppercase tracking-wider">
              OMNiGRC Controlled VPC &amp; Database
            </span>
          </div>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Tenant isolation, PostgreSQL persistence, risk histories, and human approval states reside securely within OMNiGRC infrastructure.
          </p>
        </div>

        <div className="space-y-2 md:border-l border-slate-200 dark:border-navy-700/60 md:pl-6">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-[#2E936F] dark:text-teal shrink-0" />
            <span className="text-xs sm:text-sm font-mono font-extrabold text-[#2E936F] dark:text-teal uppercase tracking-wider">
              External Stateless AI Boundary
            </span>
          </div>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            External models receive only sanitized text strings for clause correlation. Zero training on customer data. Zero retention.
          </p>
        </div>
      </div>
    </div>
  );
};
