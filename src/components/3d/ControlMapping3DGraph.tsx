"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Cpu,
  UserCheck,
  Database,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const workflowSteps = [
  {
    step: "01",
    title: "Analyst UI & Input",
    scope: "OMNiGRC Boundary",
    desc: "Analyst creates or imports an internal security control description.",
    icon: Shield,
    badge: "Tenant Scoped",
  },
  {
    step: "02",
    title: "Redaction & Minimization",
    scope: "OMNiGRC Boundary",
    desc: "Org names, employee identities, and unrelated tenant data are stripped.",
    icon: Lock,
    badge: "Zero Sensitive Data",
  },
  {
    step: "03",
    title: "Tiered Model Router",
    scope: "External LLM API",
    desc: "Tier 1: Gemini 2.5 Flash-Lite • Tier 2: Claude Haiku • Fallback: DeepSeek.",
    icon: Cpu,
    badge: "Minimized Payload",
  },
  {
    step: "04",
    title: "Validation & Human Decision",
    scope: "OMNiGRC Boundary",
    desc: "Schema checked, confidence calculated, human analyst approves before saving.",
    icon: UserCheck,
    badge: "Human Decides",
  },
];

export const ControlMapping3DGraph: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <div className="relative w-full rounded-3xl border border-brand-orange/30 bg-slate-950/95 p-6 sm:p-10 shadow-2xl overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <Badge variant="ai" icon={<Sparkles className="h-3 w-3" />} className="mb-2">
          DATA MINIMIZATION ARCHITECTURE
        </Badge>
        <h3 className="text-xl sm:text-3xl font-extrabold text-white">
          The Auditable AI Control Mapping Pipeline
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-2">
          Click through each architectural stage to see how sensitive context is isolated before external model evaluation.
        </p>
      </div>

      {/* 4 Steps Interactive Pipeline */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10 mb-8">
        {workflowSteps.map((s, idx) => {
          const isCurrent = activeStep === idx;
          const Icon = s.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveStep(idx)}
              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isCurrent
                  ? "border-brand-orange bg-slate-900 shadow-xl shadow-brand-orange/20"
                  : "border-slate-800 bg-slate-900/50 hover:border-slate-700"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`p-2 rounded-xl ${
                      isCurrent ? "bg-brand-orange text-white" : "bg-slate-800 text-brand-orange"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-brand-yellow">STAGE {s.step}</span>
                </div>
                <h4 className="font-bold text-sm text-white mb-1">{s.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed mb-3">{s.desc}</p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[9px] font-mono text-slate-400">{s.scope}</span>
                <span className="text-[10px] font-mono font-semibold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded">
                  {s.badge}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Architectural Isolation Visualizer Callout */}
      <div className="p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/70 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-brand-green" />
            <span className="text-xs font-mono font-bold text-brand-green uppercase">
              OMNiGRC Controlled VPC & Database
            </span>
          </div>
          <p className="text-xs text-slate-300">
            Tenant isolation, PostgreSQL persistence, risk histories, and human approval states reside securely within OMNiGRC infrastructure.
          </p>
        </div>

        <div className="space-y-2 md:border-l border-slate-800 md:pl-6">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-brand-orange" />
            <span className="text-xs font-mono font-bold text-brand-orange uppercase">
              External Stateless AI Boundary
            </span>
          </div>
          <p className="text-xs text-slate-300">
            External models receive only sanitized text strings for clause correlation. Zero training on customer data. Zero retention.
          </p>
        </div>
      </div>
    </div>
  );
};
