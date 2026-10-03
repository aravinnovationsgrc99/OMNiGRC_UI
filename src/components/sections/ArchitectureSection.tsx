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

          {/* 8 Connected Nodes Grid (2 cols on mobile UI, 4 cols on desktop) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 relative">
            {(
              [
                {
                  step: "01",
                  label: "Analyst UI",
                  sub: "Initiates Request",
                  icon: UserCheck,
                  iconBg: "bg-[#EAF7F1] dark:bg-emerald-950/50 text-[#2E936F] dark:text-emerald-400",
                  badgeBg: "bg-[#EAF7F1] dark:bg-emerald-950/60 text-[#2E936F] dark:text-emerald-300",
                  labelColor: "text-[#2E936F] dark:text-emerald-400",
                },
                {
                  step: "02",
                  label: "API Layer",
                  sub: "Auth & Rate Limit",
                  icon: Server,
                  iconBg: "bg-[#EEF4FF] dark:bg-blue-950/50 text-[#2563EB] dark:text-blue-400",
                  badgeBg: "bg-[#EEF4FF] dark:bg-blue-950/60 text-[#2563EB] dark:text-blue-300",
                  labelColor: "text-[#2563EB] dark:text-blue-400",
                },
                {
                  step: "03",
                  label: "Minimization Layer",
                  sub: "Sanitized Payload",
                  icon: Lock,
                  iconBg: "bg-[#F4EFFE] dark:bg-purple-950/50 text-[#7C3AED] dark:text-purple-400",
                  badgeBg: "bg-[#F4EFFE] dark:bg-purple-950/60 text-[#7C3AED] dark:text-purple-300",
                  labelColor: "text-[#7C3AED] dark:text-purple-400",
                },
                {
                  step: "04",
                  label: "Tiered Router",
                  sub: "Cost & Speed Router",
                  icon: GitMerge,
                  iconBg: "bg-[#EAF7F5] dark:bg-teal-950/50 text-[#0D9488] dark:text-teal-400",
                  badgeBg: "bg-[#EAF7F5] dark:bg-teal-950/60 text-[#0D9488] dark:text-teal-300",
                  labelColor: "text-[#0D9488] dark:text-teal-400",
                },
                {
                  step: "05",
                  label: "External LLM API",
                  sub: "Gemini & Claude Router",
                  icon: Cpu,
                  cardBg: "border-2 border-[#FAB60A] bg-[#FFFDF3] dark:bg-amber-950/20 shadow-md",
                  iconBg: "bg-[#FEF3C7] dark:bg-amber-900/50 text-[#D97706] dark:text-amber-400",
                  badgeBg: "bg-[#FEF3C7] dark:bg-amber-900/60 text-[#D97706] dark:text-amber-300",
                  labelColor: "text-[#D97706] dark:text-amber-400",
                  highlight: true,
                },
                {
                  step: "06",
                  label: "Response Validator",
                  sub: "Schema & Confidence",
                  icon: FileCode,
                  iconBg: "bg-[#EEF2FF] dark:bg-indigo-950/50 text-[#4F46E5] dark:text-indigo-400",
                  badgeBg: "bg-[#EEF2FF] dark:bg-indigo-950/60 text-[#4F46E5] dark:text-indigo-300",
                  labelColor: "text-[#4F46E5] dark:text-indigo-400",
                },
                {
                  step: "07",
                  label: "Human Review & Sign-Off",
                  sub: "Explicit Approval Gate",
                  icon: ShieldCheck,
                  cardBg: "border-2 border-[#2E936F] bg-[#F0FDF4] dark:bg-emerald-950/30 shadow-md ring-1 ring-[#2E936F]/30",
                  iconBg: "bg-[#2E936F] text-white",
                  badgeBg: "bg-[#2E936F] text-white",
                  labelColor: "text-[#2E936F] dark:text-emerald-400",
                  critical: true,
                },
                {
                  step: "08",
                  label: "Primary DB",
                  sub: "Structured Audit Record",
                  icon: Database,
                  iconBg: "bg-[#EAF7F1] dark:bg-emerald-950/50 text-[#2E936F] dark:text-emerald-400",
                  badgeBg: "bg-[#EAF7F1] dark:bg-emerald-950/60 text-[#2E936F] dark:text-emerald-300",
                  labelColor: "text-[#2E936F] dark:text-emerald-400",
                },
              ] as Array<{
                step: string;
                label: string;
                sub: string;
                icon: React.ElementType;
                iconBg: string;
                badgeBg: string;
                labelColor: string;
                cardBg?: string;
                highlight?: boolean;
                critical?: boolean;
              }>
            ).map((node, nIdx) => {
              const NodeIcon = node.icon;
              return (
                <div key={nIdx} className="relative group h-full">
                  <div
                    className={`h-full p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                      node.cardBg
                        ? node.cardBg
                        : "bg-white dark:bg-[#0A111F]/90 border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md"
                    }`}
                  >
                    {/* Top Row: Icon Badge on left, Step Circle on right */}
                    <div className="flex items-start justify-between gap-2 mb-3 sm:mb-4">
                      <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 ${node.iconBg}`}>
                        <NodeIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full font-mono text-xs font-bold flex items-center justify-center shrink-0 ${node.badgeBg}`}>
                        {node.step}
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="min-w-0">
                      <span className={`block text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-0.5 sm:mb-1 ${node.labelColor}`}>
                        STAGE {node.step}
                      </span>
                      <h4 className="text-xs sm:text-base font-extrabold text-navy-900 dark:text-white mb-0.5 sm:mb-1 leading-tight sm:leading-snug">
                        {node.label}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium leading-normal">
                        {node.sub}
                      </p>
                    </div>
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
