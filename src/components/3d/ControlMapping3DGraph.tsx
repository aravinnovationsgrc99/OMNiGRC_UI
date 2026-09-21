"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Cpu,
  UserCheck,
  ArrowRight,
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
    <div className="relative w-full rounded-3xl border border-teal/30 bg-[#0A111F]/95 p-6 sm:p-10 shadow-2xl overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <Badge variant="ai" icon={<Sparkles className="h-3 w-3" />} className="mb-2">
          DATA MINIMIZATION ARCHITECTURE
        </Badge>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          The Auditable AI Control Mapping Pipeline
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-2">
          Click through each architectural stage to see how sensitive context is isolated before external model evaluation.
        </p>
      </div>

      {/* 4 Steps Interactive Pipeline with Visual Flow Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 relative z-10 mb-8">
        {workflowSteps.map((s, idx) => {
          const isCurrent = activeStep === idx;
          const Icon = s.icon;
          return (
            <div key={idx} className="relative flex flex-col">
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between h-full ${
                  isCurrent
                    ? "border-teal bg-navy-900 shadow-xl shadow-teal/20 ring-1 ring-teal/50"
                    : "border-navy-700/60 bg-navy-900/50 hover:border-teal/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-2.5 rounded-xl ${
                        isCurrent ? "bg-teal text-white" : "bg-navy-800 text-teal"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-mono font-bold text-amber">STAGE {s.step}</span>
                      {idx < 3 && (
                        <ArrowRight className="hidden md:block h-4 w-4 text-teal/60 ml-1" />
                      )}
                    </div>
                  </div>
                  <h4 className="font-bold text-base text-white mb-2">{s.title}</h4>
                  <p className="text-xs text-slate-200 leading-relaxed mb-4">{s.desc}</p>
                </div>

                <div className="pt-3 border-t border-navy-700/60 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-300">{s.scope}</span>
                  <span className="text-[10px] font-mono font-semibold text-teal bg-teal/10 px-2 py-0.5 rounded">
                    {s.badge}
                  </span>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Architectural Isolation Visualizer Callout */}
      <div className="p-5 sm:p-6 rounded-2xl border border-navy-700/60 bg-navy-900/70 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-teal" />
            <span className="text-xs font-mono font-bold text-teal uppercase">
              OMNiGRC Controlled VPC & Database
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Tenant isolation, PostgreSQL persistence, risk histories, and human approval states reside securely within OMNiGRC infrastructure.
          </p>
        </div>

        <div className="space-y-2 md:border-l border-navy-700/60 md:pl-6">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-teal" />
            <span className="text-xs font-mono font-bold text-teal uppercase">
              External Stateless AI Boundary
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            External models receive only sanitized text strings for clause correlation. Zero training on customer data. Zero retention.
          </p>
        </div>
      </div>
    </div>
  );
};
