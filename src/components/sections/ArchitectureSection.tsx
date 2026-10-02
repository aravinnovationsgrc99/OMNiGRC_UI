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

const ControlMapping3DGraph = dynamic(
  () => import("@/components/3d/ControlMapping3DGraph").then((m) => m.ControlMapping3DGraph),
  { ssr: false }
);

const ArchitectureFlowVisualizer = dynamic(
  () => import("@/components/ui/ArchitectureFlowVisualizer").then((m) => m.ArchitectureFlowVisualizer),
  { ssr: false }
);

export const ArchitectureSection: React.FC = () => {
  return (
    <section className="relative bg-white dark:bg-[#0A111F] py-4 sm:py-6 border-t border-slate-200 dark:border-navy-700/60 overflow-hidden transition-colors duration-200">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full text-left space-y-2 mb-6 sm:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight w-full"
          >
            AI assists. <span className="text-[#2E936F]">Humans decide.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg font-medium leading-relaxed w-full max-w-4xl"
          >
            Every AI suggestion is logged, reversible, and gated behind explicit approval: nothing writes to your compliance record without a human signing off.
          </motion.p>
        </div>

        {/* 3D Pipeline Visualizer */}
        <div className="mb-8 sm:mb-10">
          <ControlMapping3DGraph />
        </div>

        {/* AI Trust Model: "AI ASSISTS. HUMANS DECIDE." Dedicated Callout */}
        <div className="mb-10 rounded-3xl border-2 border-[#2E936F]/40 dark:border-[#2E936F]/60 bg-gradient-to-r from-white via-[#F0FDF4] to-[#FFFDF5] dark:from-[#0E1A33] dark:via-[#112242] dark:to-[#0E1A33] p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="px-3.5 py-1.5 rounded-full bg-[#FAB60A]/20 dark:bg-[#FAB60A]/25 border border-[#FAB60A]/40 dark:border-[#FAB60A]/50 text-[#b07d00] dark:text-[#FAB60A] text-xs font-mono font-black uppercase tracking-wider shadow-sm">
                Core Operating Principle
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 dark:text-white tracking-tight leading-none">
                AI ASSISTS. <br />
                <span className="text-[#2E936F] dark:text-[#36B386]">HUMANS DECIDE.</span>
              </h3>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-100 leading-relaxed font-semibold">
                OMNiGRC never makes unsupervised compliance decisions. AI provides advisory clause correlations, accompanied by confidence indicators. Human approval is mandatory.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WHAT IS SENT TO LLMS */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#122820] border-2 border-[#2E936F]/40 dark:border-[#2E936F]/60 shadow-md space-y-3">
                <span className="text-xs sm:text-sm font-mono font-black text-[#2E936F] dark:text-[#42D49F] uppercase flex items-center gap-1.5 tracking-wider">
                  <CheckCircle2 className="h-5 w-5 text-[#2E936F] dark:text-[#42D49F]" /> WHAT IS SENT TO LLMS:
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-bold">
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-[#2E936F] dark:bg-[#42D49F] shrink-0" /> Generic control text
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-[#2E936F] dark:bg-[#42D49F] shrink-0" /> Target framework clause
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-[#2E936F] dark:bg-[#42D49F] shrink-0" /> Taxonomy definition
                  </li>
                </ul>
              </div>

              {/* WHAT IS NEVER SENT */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#2D1219] border-2 border-rose-300 dark:border-rose-700/60 shadow-md space-y-3">
                <span className="text-xs sm:text-sm font-mono font-black text-rose-600 dark:text-rose-400 uppercase flex items-center gap-1.5 tracking-wider">
                  <XCircle className="h-5 w-5 text-rose-500 dark:text-rose-400" /> WHAT IS NEVER SENT:
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-bold">
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-rose-500 dark:bg-rose-400 shrink-0" /> Organization name or brand
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-rose-500 dark:bg-rose-400 shrink-0" /> User identities &amp; employee data
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-rose-500 dark:bg-rose-400 shrink-0" /> Unrelated risk &amp; asset records
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
