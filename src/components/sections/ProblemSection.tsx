"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileSpreadsheet,
  Mail,
  Ticket,
  CalendarX,
  ShieldCheck,
  Zap,
  CheckCircle2,
  XCircle,
  Database,
  GitMerge,
} from "lucide-react";

export const ProblemSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"fragmented" | "connected">("fragmented");

  const fragmentedIssues = [
    {
      icon: FileSpreadsheet,
      title: "Isolated Spreadsheets",
      detail: "Risk logs and asset inventories stored in disparate Excel/Google sheets that drift instantly.",
    },
    {
      icon: Ticket,
      title: "Scattered Tickets",
      detail: "Ad-hoc task tickets in Jira/Trello disconnected from compliance control requirements.",
    },
    {
      icon: Mail,
      title: "Email Evidence Chasing",
      detail: "Endless email threads asking engineering leads for screenshots before audits.",
    },
    {
      icon: CalendarX,
      title: "Missed Testing Cadences",
      detail: "No rolling visibility into recurring access reviews, backup tests, or vendor check-ins.",
    },
  ];

  const connectedSolutions = [
    {
      icon: Database,
      title: "Unified Risk & Asset Layer",
      detail: "Every asset and vendor is mapped directly to its associated risks and protective controls.",
    },
    {
      icon: GitMerge,
      title: "Map-Once Control Engine",
      detail: "Define a security control once. AI suggests matching clauses across 5 frameworks for human approval.",
    },
    {
      icon: Zap,
      title: "Continuous Testing Board",
      detail: "Kanban workflow with owner assignments, rolling 30/60/90-day visibility, and evidence history.",
    },
    {
      icon: ShieldCheck,
      title: "Defensible Audit Trails",
      detail: "Every change, human review, and compliance verification is immutably logged in PostgreSQL.",
    },
  ];

  return (
    <section className="relative bg-white dark:bg-[#0A111F] section-rhythm border-t border-slate-200 dark:border-navy-700/60 transition-colors duration-200 overflow-hidden">
      {/* Background soft glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[85vw] max-w-[800px] rounded-full bg-teal/10 blur-[130px]" />

      <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <span className="text-[13px] font-mono uppercase tracking-widest text-[#D4521A] dark:text-amber mb-3 font-semibold inline-block">
            THE REALITY OF LEAN GRC
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight mb-4">
            Compliance isn&apos;t hard because of frameworks. <br className="hidden sm:inline" />
            <span className="text-teal">It&apos;s hard because work is fragmented.</span>
          </h2>
          <p className="text-[#334155] dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
            Lean teams get stuck between disconnected spreadsheets and heavyweight enterprise GRC suites. OMNiGRC bridges that gap with a unified operating layer.
          </p>

          {/* Pain Callout Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 font-mono text-xs">
            <span className="px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-500 font-semibold flex items-center gap-1.5">
              <XCircle className="h-3.5 w-3.5" /> Disconnected Spreadsheets
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#FAB60A]/20 border border-[#FAB60A]/30 text-navy-900 dark:bg-amber/10 dark:border-amber/30 dark:text-amber font-semibold flex items-center gap-1.5">
              <XCircle className="h-3.5 w-3.5" /> Duplicate Policy Authoring
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#2E936F]/10 border border-[#2E936F]/30 text-[#2E936F] dark:bg-teal/10 dark:border-teal/30 dark:text-teal font-semibold flex items-center gap-1.5">
              <XCircle className="h-3.5 w-3.5" /> Pre-Audit Scrambles
            </span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-xl bg-slate-200 dark:bg-navy-900 border border-slate-300 dark:border-navy-700/60">
            <button
              onClick={() => setActiveTab("fragmented")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "fragmented"
                  ? "bg-white dark:bg-navy-800 text-rose-600 dark:text-teal shadow-md"
                  : "text-slate-500 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white"
              }`}
            >
              <XCircle className="h-4 w-4" /> Fragmented GRC Reality
            </button>
            <button
              onClick={() => setActiveTab("connected")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "connected"
                  ? "bg-teal text-white shadow-md shadow-teal/30"
                  : "text-slate-500 dark:text-slate-400 hover:text-navy-900 dark:hover:text-white"
              }`}
            >
              <CheckCircle2 className="h-4 w-4" /> Connected OMNiGRC Operations
            </button>
          </div>
        </div>

        {/* Animated Single-Panel Display */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "fragmented" && (
              <motion.div
                key="fragmented"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="rounded-3xl border border-rose-400/30 bg-white dark:bg-navy-900/80 p-6 sm:p-8 flex flex-col gap-6 shadow-xl shadow-rose-500/5"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-navy-700/60">
                  <span className="text-[13px] font-mono font-bold uppercase tracking-wider text-rose-500 flex items-center gap-1.5">
                    <XCircle className="h-4 w-4 text-rose-500" /> Fragmented Operations
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">Without OMNiGRC</span>
                </div>
                <div className="space-y-3">
                  {fragmentedIssues.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-rose-500/5 dark:bg-[#0A111F]/70 border border-rose-400/20 dark:border-navy-700/60 flex items-start gap-3"
                      >
                        <div className="p-2 rounded-lg bg-rose-500/10 text-rose-500 shrink-0 mt-0.5">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-[#0F172A] dark:text-slate-200">{item.title}</h3>
                          <p className="text-[13px] text-[#475569] dark:text-slate-400 mt-0.5 leading-relaxed">{item.detail}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="p-4 rounded-xl bg-rose-500/8 border border-rose-500/20 text-xs text-rose-600 dark:text-rose-400">
                  <strong className="block mb-1">Resulting Impact:</strong>
                  Duplicate mapping work, audit preparation scramble, and zero confidence in posture between audits.
                </div>
              </motion.div>
            )}

            {activeTab === "connected" && (
              <motion.div
                key="connected"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="rounded-3xl border border-[#2E936F]/40 dark:border-teal/40 bg-white dark:bg-navy-900/90 p-6 sm:p-8 flex flex-col gap-6 shadow-xl shadow-teal/10"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-navy-700/60">
                  <span className="text-[13px] font-mono font-bold uppercase tracking-wider text-[#2E936F] dark:text-teal flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4" /> Connected OMNiGRC Workflow
                  </span>
                  <span className="text-[11px] font-mono text-[#FAB60A] dark:text-amber">Unified Operating Layer</span>
                </div>
                <div className="space-y-3">
                  {connectedSolutions.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#2E936F]/5 dark:bg-[#0A111F]/80 border border-[#2E936F]/20 dark:border-navy-700/60 flex items-start gap-3 hover:border-[#2E936F]/40 dark:hover:border-teal/30 transition-all"
                      >
                        <div className="p-2 rounded-lg bg-[#2E936F]/15 text-[#2E936F] dark:text-teal shrink-0 mt-0.5">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-[#0F172A] dark:text-white">{item.title}</h3>
                          <p className="text-[13px] text-[#334155] dark:text-slate-300 mt-0.5 leading-relaxed">{item.detail}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="p-4 rounded-xl bg-[#2E936F]/10 border border-[#2E936F]/30 text-xs text-[#1A5C45] dark:text-teal-300 font-medium">
                  <strong className="block mb-1 text-[#2E936F] dark:text-white">OMNiGRC Advantage:</strong>
                  Single source of truth where risk, asset, control, and testing workflows inform each other seamlessly.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
