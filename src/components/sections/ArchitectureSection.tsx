"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Lock,
  Cpu,
  UserCheck,
  Database,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Server,
  FileCode,
  GitMerge,
} from "lucide-react";
import dynamic from "next/dynamic";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const ControlMapping3DGraph = dynamic(
  () => import("@/components/3d/ControlMapping3DGraph").then((m) => m.ControlMapping3DGraph),
  { ssr: false }
);

const ArchitectureFlowVisualizer = dynamic(
  () => import("@/components/ui/ArchitectureFlowVisualizer").then((m) => m.ArchitectureFlowVisualizer),
  { ssr: false }
);

export const ArchitectureSection: React.FC = () => {
  const [activeTier, setActiveTier] = useState<number | null>(null);

  const architectureLayers = [
    {
      id: 1,
      name: "STEP 1 - 2: TENANT INGESTION & DATA MINIMIZATION",
      title: "1. Authenticated Ingestion & Data Minimization",
      desc: "Analyst initiates control mapping. The data minimization layer sanitizes the payload, stripping organization names, employee identifiers, and unrelated asset/risk information.",
      icon: Lock,
      boundary: "OMNiGRC Controlled VPC",
      items: ["Tenant-Scoped API", "Sanitized Payload Pipeline", "Data Minimization", "Strict Schema Formatting"],
      borderColor: "border-[#2E936F]",
      badgeColor: "text-[#2E936F] bg-[#2E936F]/10",
    },
    {
      id: 2,
      name: "STEP 3 - 5: TIERED MODEL ROUTER & EXTERNAL CALL",
      title: "2. Tiered Model Router & Clause Analysis",
      desc: "Sanitized control text and candidate framework clauses are routed to high-speed LLM APIs. Tier 1 (Gemini 2.5 Flash-Lite) and Tier 2 (Claude Haiku 4.5).",
      icon: Cpu,
      boundary: "External LLM API (Ephemeral & Stateless)",
      items: ["Gemini Top Tier Model — Tier 1", "Claude Haiku Top Tier Model — Tier 2", "Tiered Model Routing", "Zero-Retention Call"],
      borderColor: "border-[#FAB60A]",
      badgeColor: "text-[#b07d00] bg-[#FAB60A]/10",
    },
    {
      id: 3,
      name: "STEP 6 - 8: VALIDATION, HUMAN APPROVAL & PERSISTENCE",
      title: "3. Schema Validation & Mandatory Human Decision",
      desc: "Model responses are parsed and validated against strict framework taxonomies. Human analyst reviews, adjusts confidence, and approves before committing to PostgreSQL.",
      icon: UserCheck,
      boundary: "OMNiGRC Controlled Database",
      items: ["Clause Validation Engine", "Mandatory Human Approval", "PostgreSQL Persistence", "Full Audit History"],
      borderColor: "border-[#2E936F]",
      badgeColor: "text-[#2E936F] bg-[#2E936F]/10",
    },
  ];

  return (
    <section className="relative bg-white dark:bg-[#0A111F] py-8 sm:py-12 border-t border-slate-200 dark:border-navy-700/60 overflow-hidden transition-colors duration-200">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-mono uppercase tracking-widest text-[#F15E1C] dark:text-amber mb-3 font-bold"
          >
            TRANSPARENT AI ARCHITECTURE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight mb-4"
          >
            AI assists. Humans decide.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Every AI suggestion is logged, reversible, and gated behind explicit approval — nothing writes to your compliance record without a human signing off.
          </motion.p>
        </div>

        {/* 3D Pipeline Visualizer */}
        <div className="mb-8 sm:mb-10">
          <ControlMapping3DGraph />
        </div>

        {/* AI Trust Model: "AI ASSISTS. HUMANS DECIDE." Dedicated Callout */}
        <div className="mb-10 rounded-3xl border border-[#2E936F]/30 dark:border-teal/40 bg-gradient-to-r from-[#F0FDF4] via-white dark:via-navy-900/90 to-[#FFFBEB] p-6 sm:p-8 shadow-lg backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="px-3.5 py-1.5 rounded-full bg-[#FAB60A]/20 dark:bg-amber/15 border border-[#FAB60A]/30 dark:border-amber/30 text-navy-900 dark:text-amber text-xs font-mono font-bold uppercase">
                Core Operating Principle
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-navy-900 dark:text-white tracking-tight">
                AI ASSISTS. <br />
                <span className="text-[#2E936F] dark:text-teal-400">HUMANS DECIDE.</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                OMNiGRC never makes unsupervised compliance decisions. AI provides advisory clause correlations, accompanied by confidence indicators. Human approval is mandatory.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0A111F]/80 border border-[#2E936F]/30 dark:border-teal/40 shadow-sm space-y-2.5">
                <span className="text-xs sm:text-sm font-mono font-bold text-[#2E936F] dark:text-teal-300 uppercase flex items-center gap-1.5">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#2E936F] dark:text-teal-400" /> What is SENT to LLMs:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#2E936F] shrink-0" /> Generic control text
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#2E936F] shrink-0" /> Target framework clause
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#2E936F] shrink-0" /> Taxonomy definition
                  </li>
                </ul>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0A111F]/80 border border-rose-300 dark:border-rose/30 shadow-sm space-y-2.5">
                <span className="text-xs sm:text-sm font-mono font-bold text-rose-600 dark:text-rose-400 uppercase flex items-center gap-1.5">
                  <XCircle className="h-4.5 w-4.5 text-rose-500 dark:text-rose-400" /> What is NEVER Sent:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-rose-500 shrink-0" /> Organization name or brand
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-rose-500 shrink-0" /> User identities &amp; employee data
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-rose-500 shrink-0" /> Unrelated risk &amp; asset records
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Real 8-Stage Connected AI Flow Diagram (Clean Enterprise Light Theme Default) */}
        <div className="mb-10 rounded-3xl border border-slate-200 dark:border-navy-700/80 bg-white dark:bg-navy-900/90 p-6 sm:p-10 shadow-xl backdrop-blur-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="px-3.5 py-1.5 rounded-full bg-[#2E936F]/10 dark:bg-teal/15 text-[#2E936F] dark:text-teal-300 text-xs font-mono font-bold uppercase tracking-widest border border-[#2E936F]/30 dark:border-teal/30">
              ADVISORY AI PIPELINE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white mt-2 tracking-tight">
              8-Stage AI API Execution Pipeline
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1 font-medium">
              From analyst trigger to structured database record, every step is isolated, sanitized, and human-supervised.
            </p>
          </div>

          {/* 8 Connected Nodes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative">
            {(
              [
                {
                  step: "01",
                  label: "Analyst UI",
                  sub: "Initiates Request",
                  icon: UserCheck,
                  color: "green",
                },
                {
                  step: "02",
                  label: "API Layer",
                  sub: "Auth & Rate Limit",
                  icon: Server,
                  color: "green",
                },
                {
                  step: "03",
                  label: "Minimization Layer",
                  sub: "Sanitized Payload",
                  icon: Lock,
                  color: "amber",
                },
                {
                  step: "04",
                  label: "Tiered Router",
                  sub: "Cost & Speed Router",
                  icon: GitMerge,
                  color: "amber",
                },
                {
                  step: "05",
                  label: "External LLM API",
                  sub: "Gemini & Claude Router",
                  icon: Cpu,
                  color: "amber",
                  highlight: true,
                },
                {
                  step: "06",
                  label: "Response Validator",
                  sub: "Schema & Confidence",
                  icon: FileCode,
                  color: "green",
                },
                {
                  step: "07",
                  label: "Human Review & Sign-Off",
                  sub: "Explicit Approval Gate",
                  icon: ShieldCheck,
                  color: "green",
                  critical: true,
                },
                {
                  step: "08",
                  label: "Primary DB",
                  sub: "Structured Audit Record",
                  icon: Database,
                  color: "green",
                },
              ] as Array<{
                step: string;
                label: string;
                sub: string;
                icon: React.ElementType;
                color: string;
                highlight?: boolean;
                critical?: boolean;
              }>
            ).map((node, nIdx) => {
              const NodeIcon = node.icon;
              return (
                <div key={nIdx} className="relative group">
                  <div
                    className={`h-full min-h-[115px] p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                      node.critical
                        ? "border-[#2E936F] bg-[#F0FDF4] dark:bg-[#2E936F]/20 shadow-md ring-1 ring-[#2E936F]/40"
                        : node.highlight
                        ? "border-[#FAB60A]/70 bg-[#FFFBEB] dark:bg-amber-950/30 shadow-md"
                        : "border-slate-200 dark:border-slate-700/50 bg-white dark:bg-[#0A111F]/90 hover:border-[#2E936F]/50 hover:bg-slate-50/80 dark:hover:bg-navy-900 shadow-sm"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className={`text-[11px] font-mono font-bold truncate ${node.critical ? "text-[#2E936F] dark:text-teal-300" : "text-[#2E936F] dark:text-teal-400"}`}>
                        STAGE {node.step} {node.critical && "• HUMAN GATE"}
                      </span>
                      <div className={`p-1.5 rounded-lg shrink-0 ${
                        node.critical
                          ? "bg-[#2E936F] text-white"
                          : node.highlight
                          ? "bg-[#FAB60A]/20 text-[#b07d00] dark:text-[#FAB60A]"
                          : "bg-[#2E936F]/10 text-[#2E936F] dark:bg-teal/15 dark:text-teal border border-[#2E936F]/20"
                      }`}>
                        <NodeIcon className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-sm sm:text-base font-extrabold text-navy-900 dark:text-white mb-0.5 leading-tight truncate">{node.label}</h4>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 font-mono leading-tight truncate" title={node.sub}>{node.sub}</p>
                    </div>

                    {nIdx < 7 && nIdx !== 3 && (
                      <div aria-hidden="true" className="hidden md:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-[#2E936F]">
                        <ArrowRight className="h-4 w-4 text-[#2E936F]" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive SVG Architecture Flow Visualizer */}
        <div className="mt-8">
          <ArchitectureFlowVisualizer />
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
