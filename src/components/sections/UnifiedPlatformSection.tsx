"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldAlert,
  Server,
  GitMerge,
  CalendarCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Database,
  Layers,
  Activity,
  UserCheck,
  ExternalLink,
} from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { FRAMEWORKS } from "@/lib/frameworks";
import { PILLARS } from "@/lib/pillars";

export const UnifiedPlatformSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillar3FrameworkAlignments = [
    { code: "ISO27001", clause: "A.8.2 Access rights review cadence", conf: "98%" },
    { code: "ISO42001", clause: "A.7.3 Algorithmic access control", conf: "96%" },
    { code: "SOC2", clause: "CC6.2 & CC6.3 Credential revocation", conf: "95%" },
    { code: "GDPR", clause: "Article 32 Security of processing", conf: "91%" },
    { code: "DPDP", clause: "Section 8(5) Security safeguards", conf: "90%" },
    { code: "HIPAA", clause: "§164.312(a) Technical Access Control", conf: "94%" },
  ];

  const pillars = PILLARS.map((p, idx) => ({
    id: p.slug,
    title: `Pillar ${idx + 1}: ${p.name}`,
    tag: p.badge.toUpperCase(),
    shortDesc: p.oneLiner,
    points: p.features,
    interactiveType: idx === 0 ? "risk-matrix" : idx === 1 ? "asset-graph" : idx === 2 ? "control-mapper" : "kanban-board",
  }));

  return (
    <section id="core-workflows" className="relative bg-slate-100 dark:bg-[#16233F] py-10 sm:py-24 border-t border-slate-200 dark:border-navy-700/60 overflow-hidden transition-colors duration-200">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] sm:h-[700px] w-[90vw] max-w-[900px] rounded-full bg-teal/10 blur-[140px]" />

      <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-amber mb-3 font-semibold">
            THE FOUR CORE WORKFLOWS
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight mb-4">
            Everything connects. Nothing lives in isolation.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg">
            Explore how OMNiGRC brings risk, assets, control mapping, and compliance testing into one unified workflow.
          </p>
        </div>

        {/* 4 Pillar Selection Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {pillars.map((pillar, idx) => {
            const isSelected = activePillar === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(idx)}
                className={`p-3 sm:p-4 rounded-2xl border text-left transition-all duration-200 ${
                  isSelected
                    ? "border-teal bg-white dark:bg-navy-900 shadow-lg shadow-teal/20 scale-[1.02]"
                    : "border-slate-200 dark:border-navy-700/60 bg-white/60 dark:bg-[#0A111F]/60 hover:border-teal/40 dark:hover:bg-navy-900/60"
                }`}
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber font-bold block mb-1">
                  {pillar.tag}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-navy-900 dark:text-white leading-snug truncate">
                  {pillar.title.split(": ")[1]}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display of the Selected Pillar */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-teal/30 bg-white dark:bg-navy-900/90 p-6 sm:p-10 shadow-2xl backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Pillar Details & Points */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-teal uppercase bg-teal/10 px-3 py-1 rounded-full inline-block mb-3">
                    {pillars[activePillar].tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white mb-3">
                    {pillars[activePillar].title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                    {pillars[activePillar].shortDesc}
                  </p>

                  {/* Inline Mini-Diagram / Icon Flow Visual per Workflow Tab */}
                  <div aria-hidden="true" className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0A111F]/80 border border-teal/30 font-mono text-xs">
                    {activePillar === 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[10px] text-amber font-bold uppercase">
                          <span>5x5 Likelihood × Impact Matrix Flow</span>
                          <span className="text-teal">Quantified</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] text-navy-900 dark:text-slate-200">
                          <span className="px-2 py-0.5 rounded bg-teal/20 text-teal font-bold">Inherent Risk</span>
                          <ArrowRight className="h-3 w-3 text-amber shrink-0" />
                          <span className="px-2 py-0.5 rounded bg-amber/20 text-amber font-bold">5x5 Score</span>
                          <ArrowRight className="h-3 w-3 text-amber shrink-0" />
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold">Residual Score</span>
                        </div>
                      </div>
                    )}

                    {activePillar === 1 && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[10px] text-amber font-bold uppercase">
                          <span>Dependency Node Flow</span>
                          <span className="text-teal">Traced</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] text-navy-900 dark:text-slate-200">
                          <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-600 dark:text-sky-300 font-bold">Asset</span>
                          <ArrowRight className="h-3 w-3 text-amber shrink-0" />
                          <span className="px-2 py-0.5 rounded bg-amber/20 text-amber font-bold">PII Stream</span>
                          <ArrowRight className="h-3 w-3 text-amber shrink-0" />
                          <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-600 dark:text-purple-300 font-bold">Vendor</span>
                          <ArrowRight className="h-3 w-3 text-amber shrink-0" />
                          <span className="px-2 py-0.5 rounded bg-teal/20 text-teal font-bold">Control</span>
                        </div>
                      </div>
                    )}

                    {activePillar === 2 && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[10px] text-amber font-bold uppercase">
                          <span>Map-Once Crosswalk Alignment</span>
                          <span className="text-teal">AI + Human</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] text-navy-900 dark:text-slate-200">
                          <span className="px-2 py-0.5 rounded bg-teal/20 text-teal font-bold">1 Control</span>
                          <ArrowRight className="h-3 w-3 text-purple-400 shrink-0" />
                          <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-600 dark:text-purple-300 font-bold">AI Matcher</span>
                          <ArrowRight className="h-3 w-3 text-purple-400 shrink-0" />
                          <span className="px-2 py-0.5 rounded bg-amber/20 text-amber font-bold">6 Frameworks</span>
                        </div>
                      </div>
                    )}

                    {activePillar === 3 && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[10px] text-amber font-bold uppercase">
                          <span>Rolling Kanban Testing Cadence</span>
                          <span className="text-teal">Audit-Ready</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] text-navy-900 dark:text-slate-200">
                          <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-500 dark:text-rose-300 font-bold">30d Due</span>
                          <ArrowRight className="h-3 w-3 text-amber shrink-0" />
                          <span className="px-2 py-0.5 rounded bg-amber/20 text-amber font-bold">60d Due</span>
                          <ArrowRight className="h-3 w-3 text-amber shrink-0" />
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold">90d Due</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  {pillars[activePillar].points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-teal shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-navy-700/60">
                  <Link
                    href="/get-a-demo"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-teal hover:text-white transition-colors group"
                  >
                    <span>Request a walkthrough of this workflow</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Interactive Demonstration Mockup */}
              <div className="lg:col-span-7">
                {activePillar === 0 && (
                  /* Pillar 1: Risk Matrix Interactive View */
                  <div className="rounded-2xl border border-slate-200 dark:border-navy-700/60 bg-slate-50 dark:bg-[#0A111F] p-5 sm:p-6 shadow-xl space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-navy-700/60 pb-3">
                      <div className="flex items-center gap-2">
                        <ShieldAlert className="h-4 w-4 text-teal" />
                        <span className="text-xs font-mono font-bold text-navy-900 dark:text-white">
                          Risk Quantification Engine (5x5 Matrix)
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-teal-700 dark:text-teal-300">14 Active Risks</span>
                    </div>

                    <div className="grid grid-cols-5 gap-1.5 text-center text-[10px] font-mono">
                      {[
                        { label: "5,1 Low", color: "green" },
                        { label: "5,2 Med", color: "yellow" },
                        { label: "5,3 High", color: "gold" },
                        { label: "5,4 Crit", color: "orange" },
                        { label: "5,5 Crit", color: "orange" },
                        { label: "4,1 Low", color: "green" },
                        { label: "4,2 Med", color: "yellow" },
                        { label: "4,3 Med", color: "yellow" },
                        { label: "4,4 High", color: "gold" },
                        { label: "4,5 Crit", color: "orange" },
                        { label: "3,1 Low", color: "green" },
                        { label: "3,2 Low", color: "green" },
                        { label: "3,3 Med", color: "yellow" },
                        { label: "3,4 High", color: "gold" },
                        { label: "3,5 High", color: "gold" },
                        { label: "2,1 Low", color: "green" },
                        { label: "2,2 Low", color: "green" },
                        { label: "2,3 Low", color: "green" },
                        { label: "2,4 Med", color: "yellow" },
                        { label: "2,5 Med", color: "yellow" },
                        { label: "1,1 Low", color: "green" },
                        { label: "1,2 Low", color: "green" },
                        { label: "1,3 Low", color: "green" },
                        { label: "1,4 Low", color: "green" },
                        { label: "1,5 Low", color: "green" },
                      ].map((cell, cIdx) => (
                        <div
                          key={cIdx}
                          className={`p-2 rounded font-bold transition-all ${
                            cell.color === "orange"
                              ? "bg-rose text-white shadow-sm"
                              : cell.color === "gold"
                              ? "bg-amber/30 text-amber border border-amber/40"
                              : cell.color === "yellow"
                              ? "bg-amber/20 text-amber border border-amber/30"
                              : "bg-teal/15 text-teal-700 dark:text-teal-300 font-bold border border-teal/20"
                          }`}
                        >
                          {cell.label.split(" ")[1]}
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 flex items-center justify-between text-xs">
                      <div>
                        <p className="font-bold text-navy-900 dark:text-white">RSK-042: Database Backup Restoration Failure</p>
                        <p className="text-[11px] text-slate-400">Likelihood: 3 • Impact: 4 • Treatment: Mitigate via CTRL-012</p>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-teal/20 text-teal-700 dark:text-teal-300 font-mono font-bold text-xs">
                        Residual: Low
                      </span>
                    </div>
                  </div>
                )}

                {activePillar === 1 && (
                  /* Pillar 2: Asset & Relationship Graph View */
                  <div className="rounded-2xl border border-navy-700/60 bg-[#0A111F] p-5 sm:p-6 shadow-xl space-y-4">
                    <div className="flex items-center justify-between border-b border-navy-700/60 pb-3">
                      <div className="flex items-center gap-2">
                        <Server className="h-4 w-4 text-amber" />
                        <span className="text-xs font-mono font-bold text-white">
                          Asset ↔ Vendor ↔ Risk ↔ Control Relationship Flow
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-amber">Interactive Graph</span>
                    </div>

                    <div className="p-4 rounded-xl bg-navy-900 border border-navy-700/60 space-y-3">
                       <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700/60 text-xs">
                        <div className="flex items-center gap-2">
                          <Database className="h-4 w-4 text-teal" />
                           <span className="font-bold text-navy-900 dark:text-white">Asset: AWS RDS PostgreSQL (Cluster-Prod)</span>
                        </div>
                        <span className="text-[10px] font-mono text-amber bg-amber/10 px-2 py-0.5 rounded">
                          PII Data Flow
                        </span>
                      </div>

                      <div className="pl-6 border-l-2 border-teal/40 space-y-2 text-xs">
                        <div className="p-2 rounded-lg bg-[#0A111F]/70 border border-navy-700/60 flex items-center justify-between">
                           <span className="text-slate-600 dark:text-slate-300">Vendor: Amazon Web Services Inc.</span>
                          <span className="text-xs font-mono font-bold text-teal-700 dark:text-teal-300">SOC 2 Verified</span>
                        </div>
                        <div className="p-2 rounded-lg bg-[#0A111F]/70 border border-navy-700/60 flex items-center justify-between">
                           <span className="text-slate-600 dark:text-slate-300">Linked Risk: RSK-019 (Unauthorized Data Access)</span>
                          <span className="text-[10px] font-mono text-amber">High Impact</span>
                        </div>
                         <div className="p-2 rounded-lg bg-white dark:bg-[#0A111F]/70 border border-teal/30 flex items-center justify-between">
                           <span className="text-slate-700 dark:text-slate-200 font-semibold">Associated Control: CTRL-088 (KMS AES-256 Encryption)</span>
                          <span className="text-xs font-mono font-bold text-teal-700 dark:text-teal-300">Enforced</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activePillar === 2 && (
                  /* Pillar 3: Control Mapping & AI Suggestion View */
                  <div className="rounded-2xl border border-navy-700/60 bg-[#0A111F] p-5 sm:p-6 shadow-xl space-y-4">
                    <div className="flex items-center justify-between border-b border-navy-700/60 pb-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-amber" />
                        <span className="text-xs font-mono font-bold text-white">
                          Map-Once Clause Alignment (AI Advisory + Human Review)
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-teal-700 dark:text-teal-300">Human Verified</span>
                    </div>

                    <div className="p-4 rounded-xl bg-navy-900 border border-navy-700/60 space-y-3">
                       <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#0A111F] border border-teal/30">
                        <p className="text-[10px] font-mono text-amber font-bold uppercase">Source Internal Control:</p>
                         <p className="text-xs font-bold text-navy-900 dark:text-white mt-1">CTRL-005: Quarterly User Access & Privilege Reviews</p>
                         <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">
                          &quot;Privileged access rights to production databases are reviewed and recertified every 90 days by team leads.&quot;
                        </p>
                      </div>

                      <div className="space-y-1.5 text-xs">
                        <p className="text-[10px] font-mono text-slate-400 uppercase">AI Suggested Framework Alignments:</p>
                        {pillar3FrameworkAlignments.map((m, mIdx) => {
                          const fwObj = FRAMEWORKS.find((f) => f.code === m.code);
                          return (
                            <div
                              key={mIdx}
                              className="p-2 rounded-lg bg-white dark:bg-[#0A111F]/80 border border-slate-200 dark:border-navy-700/60 flex items-center justify-between text-[11px]"
                            >
                              <span className="font-bold text-amber">{fwObj?.name || m.code}:</span>
                               <span className="text-slate-600 dark:text-slate-300 truncate max-w-[200px] sm:max-w-none">{m.clause}</span>
                              <span className="font-mono font-bold text-teal-700 dark:text-teal-300 text-xs">{m.conf} match</span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="p-2 rounded-lg bg-teal/15 border border-teal/30 flex items-center justify-between text-xs">
                        <span className="text-teal-700 dark:text-teal-300 font-bold flex items-center gap-1.5">
                          <UserCheck className="h-3.5 w-3.5" /> Approved by GRC Analyst
                        </span>
                         <span className="text-[10px] font-mono text-slate-500 dark:text-slate-300">Saved to Postgres</span>
                      </div>
                    </div>
                  </div>
                )}

                {activePillar === 3 && (
                  /* Pillar 4: Compliance Testing Board View */
                  <div className="rounded-2xl border border-navy-700/60 bg-[#0A111F] p-5 sm:p-6 shadow-xl space-y-4">
                    <div className="flex items-center justify-between border-b border-navy-700/60 pb-3">
                      <div className="flex items-center gap-2">
                        <CalendarCheck className="h-4 w-4 text-teal" />
                        <span className="text-xs font-mono font-bold text-white">
                          Testing Cadence & Owner Kanban Board
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-amber">Rolling 30/60/90d</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2.5 text-xs">
                      {/* Column 1: Next 30 Days */}
                      <div className="p-3 rounded-xl bg-navy-900 border border-navy-700/60 space-y-2">
                        <div className="flex items-center justify-between text-xs font-mono font-bold text-teal-700 dark:text-teal-300 uppercase">
                          <span>Next 30 Days</span>
                          <span className="bg-teal/20 px-1.5 py-0.5 rounded">2 Due</span>
                        </div>
                        <div className="p-2 rounded bg-[#0A111F] border border-navy-700/60 text-[11px]">
                           <p className="font-bold text-navy-900 dark:text-white">MFA Configuration Test</p>
                           <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Owner: SecOps Lead</p>
                          <p className="text-[9px] font-mono text-amber mt-1">Due in 6 days</p>
                        </div>
                      </div>

                      {/* Column 2: 30-60 Days */}
                      <div className="p-3 rounded-xl bg-navy-900 border border-navy-700/60 space-y-2">
                        <div className="flex items-center justify-between text-[10px] font-mono font-bold text-amber uppercase">
                          <span>30 - 60 Days</span>
                          <span className="bg-amber/20 px-1.5 py-0.5 rounded">3 Due</span>
                        </div>
                        <div className="p-2 rounded bg-[#0A111F] border border-navy-700/60 text-[11px]">
                           <p className="font-bold text-navy-900 dark:text-white">Vendor SOC 2 Check</p>
                           <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Owner: Procurement</p>
                          <p className="text-[9px] font-mono text-amber mt-1">Due in 38 days</p>
                        </div>
                      </div>

                      {/* Column 3: 60-90 Days */}
                      <div className="p-3 rounded-xl bg-navy-900 border border-navy-700/60 space-y-2">
                        <div className="flex items-center justify-between text-xs font-mono font-bold text-teal-700 dark:text-teal-300 uppercase">
                          <span>60 - 90 Days</span>
                          <span className="bg-teal/20 px-1.5 py-0.5 rounded">1 Due</span>
                        </div>
                        <div className="p-2 rounded bg-[#0A111F] border border-navy-700/60 text-[11px]">
                           <p className="font-bold text-navy-900 dark:text-white">Annual DRP Simulation</p>
                           <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Owner: CTO</p>
                          <p className="text-xs font-mono font-bold text-teal-700 dark:text-teal-300 mt-1">Due in 74 days</p>
                        </div>
                      </div>
                    </div>

                     <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 flex items-center justify-between text-[11px]">
                       <span className="text-slate-600 dark:text-slate-300">Auditor Export Readiness:</span>
                      <span className="text-teal-700 dark:text-teal-300 font-mono font-bold text-xs">100% On Schedule</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
