"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  Mail,
  Ticket,
  CalendarX,
  Layers,
  ArrowRight,
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
    <section className="relative bg-[#0B0F17] py-16 sm:py-24 border-t border-slate-800 overflow-hidden">
      {/* Background soft glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[85vw] max-w-[800px] rounded-full bg-brand-orange/10 blur-[130px]" />

      <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-yellow mb-3 font-semibold inline-block">
            THE REALITY OF LEAN GRC
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Compliance isn&apos;t hard because of frameworks. <br className="hidden sm:inline" />
            <span className="text-brand-orange">It&apos;s hard because work is fragmented.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            Lean teams get stuck between disconnected spreadsheets and heavyweight enterprise GRC suites. OMNiGRC bridges that gap with a unified operating layer.
          </p>
        </div>

        {/* Interactive Comparison Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setActiveTab("fragmented")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "fragmented"
                  ? "bg-slate-800 text-brand-orange shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <XCircle className="h-4 w-4" /> Fragmented GRC Reality
            </button>
            <button
              onClick={() => setActiveTab("connected")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "connected"
                  ? "bg-brand-orange text-white shadow-md shadow-brand-orange/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <CheckCircle2 className="h-4 w-4" /> Connected OMNiGRC Operations
            </button>
          </div>
        </div>

        {/* Comparison Visual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left / State Card */}
          <div className="lg:col-span-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                  <XCircle className="h-4 w-4 text-red-400" /> Fragmented Operations
                </span>
                <span className="text-[11px] font-mono text-slate-500">Without OMNiGRC</span>
              </div>
              <div className="space-y-4">
                {fragmentedIssues.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3"
                    >
                      <div className="p-2 rounded-lg bg-red-500/10 text-red-400 shrink-0 mt-0.5">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-200">{item.title}</h4>
                        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-300">
              <strong className="block mb-1">Resulting Impact:</strong>
              Duplicate mapping work, audit preparation scramble, and zero confidence in posture between audits.
            </div>
          </div>

          {/* Right / Connected OMNiGRC Card */}
          <div className="lg:col-span-6 rounded-3xl border border-brand-orange/40 bg-slate-900/90 p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-brand-orange/10">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-green flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-brand-green" /> Connected OMNiGRC Workflow
                </span>
                <span className="text-[11px] font-mono text-brand-yellow">Unified Operating Layer</span>
              </div>
              <div className="space-y-4">
                {connectedSolutions.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3 hover:border-brand-orange/30 transition-all"
                    >
                      <div className="p-2 rounded-lg bg-brand-green/15 text-brand-green shrink-0 mt-0.5">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{item.title}</h4>
                        <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-brand-green/15 border border-brand-green/30 text-xs text-brand-green font-medium">
              <strong className="block mb-1 text-white">OMNiGRC Advantage:</strong>
              Single source of truth where risk, asset, control, and testing workflows inform each other seamlessly.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
