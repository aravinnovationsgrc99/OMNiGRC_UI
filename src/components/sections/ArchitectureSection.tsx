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
  ArrowDown,
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
      borderColor: "border-teal",
      badgeColor: "text-teal bg-teal/10",
    },
    {
      id: 2,
      name: "STEP 3 - 5: TIERED MODEL ROUTER & EXTERNAL CALL",
      title: "2. Tiered Model Router & Clause Analysis",
      desc: "Sanitized control text and candidate framework clauses are routed to high-speed LLM APIs. Tier 1 (Gemini 2.5 Flash-Lite) and Tier 2 (Claude Haiku 4.5).",
      icon: Cpu,
      boundary: "External LLM API (Ephemeral & Stateless)",
      items: ["Gemini Top Tier Model — Tier 1", "Claude Haiku Top Tier Model — Tier 2", "Tiered Model Routing", "Zero-Retention Call"],
      borderColor: "border-amber",
      badgeColor: "text-amber bg-amber/10",
    },
    {
      id: 3,
      name: "STEP 6 - 8: VALIDATION, HUMAN APPROVAL & PERSISTENCE",
      title: "3. Schema Validation & Mandatory Human Decision",
      desc: "Model responses are parsed and validated against strict framework taxonomies. Human analyst reviews, adjusts confidence, and approves before committing to PostgreSQL.",
      icon: UserCheck,
      boundary: "OMNiGRC Controlled Database",
      items: ["Clause Validation Engine", "Mandatory Human Approval", "PostgreSQL Persistence", "Full Audit History"],
      borderColor: "border-teal-300",
      badgeColor: "text-teal-300 bg-teal/10",
    },
  ];

  return (
    <section className="relative bg-slate-50 dark:bg-[#0A111F] py-8 sm:py-12 border-t border-slate-200 dark:border-navy-700/60 overflow-hidden transition-colors duration-200">
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
        <div className="mb-10 rounded-3xl border border-teal/40 bg-gradient-to-r from-teal/15 via-white dark:via-navy-900/90 to-amber/15 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="px-3.5 py-1.5 rounded-full bg-[#FAB60A]/20 dark:bg-amber/15 border border-[#FAB60A]/30 dark:border-amber/30 text-navy-900 dark:text-amber text-xs font-mono font-bold uppercase">
                Core Operating Principle
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-navy-900 dark:text-white tracking-tight">
                AI ASSISTS. <br />
                <span className="text-teal">HUMANS DECIDE.</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                OMNiGRC never makes unsupervised compliance decisions. AI provides advisory clause correlations, accompanied by confidence indicators. Human approval is mandatory.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#0A111F]/80 border border-teal/30 dark:border-teal/40 backdrop-blur-sm space-y-2.5">
                <span className="text-xs sm:text-sm font-mono font-bold text-teal uppercase flex items-center gap-1.5">
                  <CheckCircle2 className="h-4.5 w-4.5 text-teal" /> What is SENT to LLMs:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-teal shrink-0" /> Generic control text
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-teal shrink-0" /> Target framework clause
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-teal shrink-0" /> Taxonomy definition
                  </li>
                </ul>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#0A111F]/80 border border-rose-400/30 dark:border-rose/30 backdrop-blur-sm space-y-2.5">
                <span className="text-xs sm:text-sm font-mono font-bold text-rose-400 uppercase flex items-center gap-1.5">
                  <XCircle className="h-4.5 w-4.5 text-rose-400" /> What is NEVER Sent:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-rose-400 shrink-0" /> Organization name or brand
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-rose-400 shrink-0" /> User identities &amp; employee data
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-rose-400 shrink-0" /> Unrelated risk &amp; asset records
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Real 8-Stage Connected AI Flow Diagram */}
        <div className="mb-10 rounded-3xl border border-slate-700/60 bg-[#091222] dark:bg-navy-900/95 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b1b2d] border border-[#2E936F]/30 text-slate-300 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E936F]" />
              <span>Advisory AI Pipeline</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              8-Stage AI API Execution Pipeline
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
              From analyst trigger to structured database record, every step is isolated, sanitized, and human-supervised.
            </p>
          </div>

          {/* PIPELINE STAGES - ROW 1 (STAGES 01-04) & ROW 2 (STAGES 05-08) */}
          <div className="space-y-6">
            {/* ROW 1: STAGES 01 TO 04 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch relative">
              {[
                {
                  step: "01",
                  label: "Analyst UI",
                  sub: "Initiates Request",
                  icon: UserCheck,
                },
                {
                  step: "02",
                  label: "API Layer",
                  sub: "Auth & Rate Limit",
                  icon: Server,
                },
                {
                  step: "03",
                  label: "Minimization Layer",
                  sub: "Sanitized Advisory Payload",
                  icon: Lock,
                },
                {
                  step: "04",
                  label: "Tiered Router",
                  sub: "Cost & Speed Router",
                  icon: GitMerge,
                },
              ].map((node, idx) => {
                const NodeIcon = node.icon;
                return (
                  <div key={idx} className="relative flex flex-col min-w-0">
                    <div className="flex-1 p-5 sm:p-6 rounded-2xl border border-slate-700/70 bg-[#060e1a] hover:border-slate-600 transition-all flex flex-col justify-between space-y-4 min-h-[145px]">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-extrabold text-[#00d2b4] uppercase tracking-wider">
                          STAGE {node.step}
                        </span>
                        <div className="w-8 h-8 rounded-xl bg-navy-950 border border-slate-700/80 flex items-center justify-center text-[#00d2b4]">
                          <NodeIcon className="h-4 w-4" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base font-extrabold text-white leading-snug">{node.label}</h4>
                        <p className="text-xs text-slate-300 font-mono mt-1.5 leading-relaxed">{node.sub}</p>
                      </div>
                    </div>

                    {/* Desktop Horizontal Connector Arrow (Between columns) */}
                    {idx < 3 && (
                      <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#0b1b2d] border border-[#2E936F]/40 items-center justify-center text-[#00d2b4] shadow-md">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* DESKTOP INTER-ROW CONNECTOR (ROW 1 TO ROW 2 TRANSITION) */}
            <div className="hidden lg:flex justify-end pr-8 -my-2 z-10">
              <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0b1b2d] border border-[#2E936F]/40 text-[#00d2b4] text-xs font-mono font-bold shadow-md">
                <span>Execution Flow</span>
                <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
              </div>
            </div>

            {/* ROW 2: STAGES 05 TO 08 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch relative">
              {[
                {
                  step: "05",
                  label: "External LLM API",
                  sub: "Gemini 2.5 Flash / Claude Haiku",
                  icon: Cpu,
                  highlight: true,
                },
                {
                  step: "06",
                  label: "Response Validator",
                  sub: "Schema & Confidence Check",
                  icon: FileCode,
                },
                {
                  step: "07",
                  label: "Human Review & Sign-Off",
                  sub: "Explicit Approval Gate",
                  icon: ShieldCheck,
                  critical: true,
                },
                {
                  step: "08",
                  label: "Primary DB",
                  sub: "Structured Audit Record",
                  icon: Database,
                },
              ].map((node, idx) => {
                const NodeIcon = node.icon;
                return (
                  <div key={idx} className="relative flex flex-col min-w-0">
                    <div
                      className={`flex-1 p-5 sm:p-6 rounded-2xl border transition-all flex flex-col justify-between space-y-4 min-h-[145px] ${
                        node.critical
                          ? "border-[#2E936F] bg-[#2E936F]/15 shadow-lg shadow-[#2E936F]/10 ring-1 ring-[#2E936F]/40"
                          : node.highlight
                          ? "border-[#FAB60A]/60 bg-[#FAB60A]/10"
                          : "border-slate-700/70 bg-[#060e1a] hover:border-slate-600"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-xs font-mono font-extrabold uppercase tracking-wider ${node.critical ? "text-[#00d2b4]" : node.highlight ? "text-[#FAB60A]" : "text-[#00d2b4]"}`}>
                          STAGE {node.step} {node.critical && "• HUMAN GATE"}
                        </span>
                        <div
                          className={`w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 ${
                            node.critical
                              ? "bg-[#2E936F] text-white border-[#2E936F]"
                              : node.highlight
                              ? "bg-[#FAB60A]/20 text-[#FAB60A] border-[#FAB60A]/40"
                              : "bg-navy-950 text-[#00d2b4] border-slate-700/80"
                          }`}
                        >
                          <NodeIcon className="h-4 w-4" />
                        </div>
                      </div>

                      <div>
                        <h4 className="text-base font-extrabold text-white leading-snug">{node.label}</h4>
                        <p className="text-xs text-slate-300 font-mono mt-1.5 leading-relaxed">{node.sub}</p>
                      </div>
                    </div>

                    {/* Desktop Horizontal Connector Arrow (Between columns in Row 2) */}
                    {idx < 3 && (
                      <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#0b1b2d] border border-[#2E936F]/40 items-center justify-center text-[#00d2b4] shadow-md">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Interactive SVG Architecture Flow Visualizer (Replacing 3 stacked cards with compact animated visual) */}
        <div className="mt-8">
          <ArchitectureFlowVisualizer />
        </div>
      </div>
    </section>
  );
};
