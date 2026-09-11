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

export const UnifiedPlatformSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: "risk-register",
      title: "Pillar 1: Risk Register & Scoring",
      tag: "RISK VISIBILITY",
      shortDesc:
        "Log risks, quantify Likelihood × Impact, assign treatment plans, and track residual risk reduction over time.",
      points: [
        "Structured 5x5 Likelihood and Impact scoring matrix",
        "Direct linkage from risks to mitigating controls and assets",
        "Treatment plans: Accept, Mitigate, Transfer, or Avoid",
        "Historical score evolution and audit-ready risk history",
      ],
      interactiveType: "risk-matrix",
    },
    {
      id: "asset-inventory",
      title: "Pillar 2: Asset & Inventory Management",
      tag: "RELATIONSHIP GRAPH",
      shortDesc:
        "Maintain a live record of hardware, cloud resources, vendors, and data flows with direct dependency tracing.",
      points: [
        "Hardware, software, SaaS vendors, and databases in one view",
        "Data flow tracking and classification (PII, Financial, Sensitive)",
        "Vendor dependency and third-party risk context",
        "Direct mapping to related security controls and risk items",
      ],
      interactiveType: "asset-graph",
    },
    {
      id: "control-mapping",
      title: "Pillar 3: AI-Assisted Control Mapping",
      tag: "MAP ONCE, COMPLY MANY",
      shortDesc:
        "Define your security control once. Advisory AI suggests matching clauses across 5 documented frameworks.",
      points: [
        "Pre-loaded with ISO 27001, SOC 2, GDPR/UK GDPR, DPDP, Essential 8",
        "Advisory AI suggests candidate clause matches with confidence scores",
        "Mandatory human review and approval before persistence",
        "Zero duplicate control overhead across multiple framework audits",
      ],
      interactiveType: "control-mapper",
    },
    {
      id: "compliance-board",
      title: "Pillar 4: Compliance Testing Board",
      tag: "OPERATIONAL CADENCE",
      shortDesc:
        "Kanban and calendar views for control ownership, recurring testing dates, and rolling 30/60/90-day visibility.",
      points: [
        "Control ownership assigned to individual engineers or team leads",
        "Recurring testing cadence (Monthly, Quarterly, Semi-Annual, Annual)",
        "Rolling 30, 60, and 90-day upcoming evidence deadlines",
        "Defensible testing history ready for external audit review",
      ],
      interactiveType: "kanban-board",
    },
  ];

  return (
    <section id="core-workflows" className="relative bg-[#0F172A] py-16 sm:py-24 border-t border-slate-800 overflow-hidden">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] sm:h-[700px] w-[90vw] max-w-[900px] rounded-full bg-brand-orange/10 blur-[140px]" />

      <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-brand-yellow mb-3 font-semibold">
            THE FOUR CORE WORKFLOWS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Everything connects. Nothing lives in isolation.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg">
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
                className={`p-4 rounded-2xl border text-left transition-all duration-200 ${
                  isSelected
                    ? "border-brand-orange bg-slate-900 shadow-lg shadow-brand-orange/20 scale-[1.02]"
                    : "border-slate-800 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-900/60"
                }`}
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-yellow font-bold block mb-1">
                  {pillar.tag}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-white leading-snug truncate">
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
            className="rounded-3xl border border-brand-orange/30 bg-slate-900/90 p-6 sm:p-10 shadow-2xl backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Pillar Details & Points */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase bg-brand-orange/10 px-3 py-1 rounded-full inline-block mb-3">
                    {pillars[activePillar].tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                    {pillars[activePillar].title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {pillars[activePillar].shortDesc}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {pillars[activePillar].points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-brand-green shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200">{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <Link
                    href="/get-a-demo"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-orange hover:text-white transition-colors group"
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
                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 sm:p-6 shadow-xl space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2">
                        <ShieldAlert className="h-4 w-4 text-brand-orange" />
                        <span className="text-xs font-mono font-bold text-white">
                          Risk Quantification Engine (5x5 Matrix)
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-brand-green">14 Active Risks</span>
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
                              ? "bg-brand-orange/80 text-white shadow-sm"
                              : cell.color === "gold"
                              ? "bg-brand-gold/30 text-brand-gold border border-brand-gold/40"
                              : cell.color === "yellow"
                              ? "bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30"
                              : "bg-brand-green/15 text-brand-green border border-brand-green/20"
                          }`}
                        >
                          {cell.label.split(" ")[1]}
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                      <div>
                        <p className="font-bold text-white">RSK-042: Database Backup Restoration Failure</p>
                        <p className="text-[11px] text-slate-400">Likelihood: 3 • Impact: 4 • Treatment: Mitigate via CTRL-012</p>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-brand-orange/20 text-brand-orange font-mono font-bold text-[10px]">
                        Residual: Low
                      </span>
                    </div>
                  </div>
                )}

                {activePillar === 1 && (
                  /* Pillar 2: Asset & Relationship Graph View */
                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 sm:p-6 shadow-xl space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2">
                        <Server className="h-4 w-4 text-brand-gold" />
                        <span className="text-xs font-mono font-bold text-white">
                          Asset ↔ Vendor ↔ Risk ↔ Control Relationship Flow
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-brand-peach">Interactive Graph</span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                        <div className="flex items-center gap-2">
                          <Database className="h-4 w-4 text-brand-orange" />
                          <span className="font-bold text-white">Asset: AWS RDS PostgreSQL (Cluster-Prod)</span>
                        </div>
                        <span className="text-[10px] font-mono text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded">
                          PII Data Flow
                        </span>
                      </div>

                      <div className="pl-6 border-l-2 border-brand-orange/40 space-y-2 text-xs">
                        <div className="p-2 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                          <span className="text-slate-300">Vendor: Amazon Web Services Inc.</span>
                          <span className="text-[10px] font-mono text-brand-green">SOC 2 Verified</span>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                          <span className="text-slate-300">Linked Risk: RSK-019 (Unauthorized Data Access)</span>
                          <span className="text-[10px] font-mono text-brand-yellow">High Impact</span>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-950/70 border border-brand-green/30 flex items-center justify-between">
                          <span className="text-slate-200 font-semibold">Associated Control: CTRL-088 (KMS AES-256 Encryption)</span>
                          <span className="text-[10px] font-mono text-brand-green">Enforced</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activePillar === 2 && (
                  /* Pillar 3: Control Mapping & AI Suggestion View */
                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 sm:p-6 shadow-xl space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-brand-gold" />
                        <span className="text-xs font-mono font-bold text-white">
                          Map-Once Clause Alignment (AI Advisory + Human Review)
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-brand-green">Human Verified</span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                      <div className="p-3 rounded-lg bg-slate-950 border border-brand-orange/30">
                        <p className="text-[10px] font-mono text-brand-yellow font-bold uppercase">Source Internal Control:</p>
                        <p className="text-xs font-bold text-white mt-1">CTRL-005: Quarterly User Access & Privilege Reviews</p>
                        <p className="text-[11px] text-slate-300 mt-1">
                          &quot;Privileged access rights to production databases are reviewed and recertified every 90 days by team leads.&quot;
                        </p>
                      </div>

                      <div className="space-y-1.5 text-xs">
                        <p className="text-[10px] font-mono text-slate-400 uppercase">AI Suggested Framework Alignments:</p>
                        {[
                          { fw: "ISO 27001:2022", clause: "A.9.2.5 Review of user access rights", conf: "98%" },
                          { fw: "SOC 2 Type II", clause: "CC6.2 & CC6.3 Access credential revocation", conf: "95%" },
                          { fw: "GDPR / UK GDPR", clause: "Article 32 Security of processing (Access)", conf: "91%" },
                          { fw: "DPDP Act 2023", clause: "Section 8(5) Reasonable security safeguards", conf: "90%" },
                          { fw: "Essential 8", clause: "Restrict Administrative Privileges (Maturity 2)", conf: "94%" },
                        ].map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-2 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-between text-[11px]"
                          >
                            <span className="font-bold text-brand-peach">{m.fw}:</span>
                            <span className="text-slate-300 truncate max-w-[200px] sm:max-w-none">{m.clause}</span>
                            <span className="font-mono text-brand-green text-[10px]">{m.conf} match</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-2 rounded-lg bg-brand-green/15 border border-brand-green/30 flex items-center justify-between text-xs">
                        <span className="text-brand-green font-semibold flex items-center gap-1.5">
                          <UserCheck className="h-3.5 w-3.5" /> Approved by GRC Analyst
                        </span>
                        <span className="text-[10px] font-mono text-slate-300">Saved to Postgres</span>
                      </div>
                    </div>
                  </div>
                )}

                {activePillar === 3 && (
                  /* Pillar 4: Compliance Testing Board View */
                  <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 sm:p-6 shadow-xl space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2">
                        <CalendarCheck className="h-4 w-4 text-brand-green" />
                        <span className="text-xs font-mono font-bold text-white">
                          Testing Cadence & Owner Kanban Board
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-brand-yellow">Rolling 30/60/90d</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2.5 text-xs">
                      {/* Column 1: Next 30 Days */}
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between text-[10px] font-mono font-bold text-brand-orange uppercase">
                          <span>Next 30 Days</span>
                          <span className="bg-brand-orange/20 px-1.5 py-0.5 rounded">2 Due</span>
                        </div>
                        <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[11px]">
                          <p className="font-bold text-white">MFA Configuration Test</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">Owner: SecOps Lead</p>
                          <p className="text-[9px] font-mono text-brand-gold mt-1">Due in 6 days</p>
                        </div>
                      </div>

                      {/* Column 2: 30-60 Days */}
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between text-[10px] font-mono font-bold text-brand-gold uppercase">
                          <span>30 - 60 Days</span>
                          <span className="bg-brand-gold/20 px-1.5 py-0.5 rounded">3 Due</span>
                        </div>
                        <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[11px]">
                          <p className="font-bold text-white">Vendor SOC 2 Check</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">Owner: Procurement</p>
                          <p className="text-[9px] font-mono text-brand-yellow mt-1">Due in 38 days</p>
                        </div>
                      </div>

                      {/* Column 3: 60-90 Days */}
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between text-[10px] font-mono font-bold text-brand-green uppercase">
                          <span>60 - 90 Days</span>
                          <span className="bg-brand-green/20 px-1.5 py-0.5 rounded">1 Due</span>
                        </div>
                        <div className="p-2 rounded bg-slate-950 border border-slate-800 text-[11px]">
                          <p className="font-bold text-white">Annual DRP Simulation</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">Owner: CTO</p>
                          <p className="text-[9px] font-mono text-brand-green mt-1">Due in 74 days</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-[11px]">
                      <span className="text-slate-300">Auditor Export Readiness:</span>
                      <span className="text-brand-green font-mono font-bold">100% On Schedule</span>
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
