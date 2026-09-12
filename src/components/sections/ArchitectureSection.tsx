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

export const ArchitectureSection: React.FC = () => {
  const [activeTier, setActiveTier] = useState<number | null>(null);

  const architectureLayers = [
    {
      id: 1,
      name: "STEP 1 - 2: TENANT INGESTION & REDACTION",
      title: "1. Authenticated Ingestion & Data Minimization",
      desc: "Analyst initiates control mapping. The redaction layer sanitizes the payload, stripping organization names, employee identifiers, and unrelated asset/risk information.",
      icon: Lock,
      boundary: "OMNiGRC Controlled VPC",
      items: ["Tenant-Scoped API", "Automated Redaction Engine", "Zero PII Transmitted", "Strict Schema Formatting"],
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
    <section className="relative bg-slate-50 dark:bg-[#0A111F] py-10 sm:py-24 border-t border-slate-200 dark:border-navy-700/60 overflow-hidden transition-colors duration-200">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-mono uppercase tracking-widest text-amber mb-3 font-semibold"
          >
            TRANSPARENT AI ARCHITECTURE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight mb-4"
          >
            How AI control mapping actually works.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg"
          >
            No black boxes. No autonomous hallucinated approvals. Complete data minimization and mandatory human decision-making.
          </motion.p>
        </div>

        {/* 3D Pipeline Visualizer */}
        <div className="mb-14 sm:mb-18">
          <ControlMapping3DGraph />
        </div>

        {/* AI Trust Model: "AI ASSISTS. HUMANS DECIDE." Dedicated Callout */}
        <div className="mb-10 rounded-3xl border border-teal/40 bg-gradient-to-r from-teal/15 via-white dark:via-navy-900/90 to-amber/15 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="px-3 py-1 rounded-full bg-amber/15 border border-amber/30 text-amber text-xs font-mono font-bold uppercase">
                Core Operating Principle
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-navy-900 dark:text-white tracking-tight">
                AI ASSISTS. <br />
                <span className="text-teal">HUMANS DECIDE.</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                OMNiGRC never makes unsupervised compliance decisions. AI provides advisory clause correlations, accompanied by confidence indicators. Human approval is mandatory.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0A111F]/80 border border-teal/30 space-y-2">
                <span className="text-xs font-mono font-bold text-teal uppercase flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-teal" /> What is SENT to LLMs:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal" /> Generic control text
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal" /> Target framework clause
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal" /> Taxonomy definition
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0A111F]/80 border border-rose/30 space-y-2">
                <span className="text-xs font-mono font-bold text-rose-400 uppercase flex items-center gap-1.5">
                  <XCircle className="h-4 w-4 text-rose-400" /> What is NEVER Sent:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-400" /> Organization name or brand
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-400" /> User identities & employee data
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-400" /> Unrelated risk & asset records
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Real 8-Stage Connected AI Flow Diagram */}
        <div className="mb-10 rounded-3xl border border-teal/30 bg-white dark:bg-navy-900/90 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="px-3 py-1 rounded-full bg-teal/15 text-teal text-[10px] font-mono font-bold uppercase tracking-widest border border-teal/30">
              END-TO-END DATA FLOW
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              8-Stage AI API Execution Pipeline
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              From analyst trigger to immutable database record, every step is isolated, sanitized, and human-supervised.
            </p>
          </div>

          {/* 8 Connected Nodes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative">
            {[
              {
                step: "01",
                label: "Analyst UI",
                sub: "Initiates Request",
                icon: UserCheck,
                color: "teal",
              },
              {
                step: "02",
                label: "API Layer",
                sub: "Auth & Rate Limit",
                icon: Server,
                color: "teal",
              },
              {
                step: "03",
                label: "Redaction Engine",
                sub: "Zero PII Payload",
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
                sub: "Gemini 2.5 Flash-Lite / Claude Haiku 4.5",
                icon: Cpu,
                color: "amber",
                highlight: true,
              },
              {
                step: "06",
                label: "Response Validator",
                sub: "Schema & Confidence",
                icon: FileCode,
                color: "teal",
              },
              {
                step: "07",
                label: "Human Review",
                sub: "Mandatory Decision",
                icon: ShieldCheck,
                color: "teal",
              },
              {
                step: "08",
                label: "Primary DB",
                sub: "PostgreSQL Record",
                icon: Database,
                color: "teal",
              },
            ].map((node, nIdx) => {
              const NodeIcon = node.icon;
              return (
                <div key={nIdx} className="relative group">
                  <div
                    className={`h-full p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                      node.highlight
                        ? "border-amber bg-amber/10 shadow-lg shadow-amber/20"
                        : "border-navy-700/60 bg-[#0A111F]/90 hover:border-teal/50 hover:bg-navy-900"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-bold text-slate-400">
                        STAGE {node.step}
                      </span>
                      <div className={`p-1.5 rounded-lg ${node.highlight ? "bg-amber/20 text-amber" : "bg-teal/15 text-teal"}`}>
                        <NodeIcon className="h-4 w-4" />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white mb-1 leading-tight">{node.label}</h4>
                      <p className="text-[11px] text-slate-300 font-mono leading-snug">{node.sub}</p>
                    </div>

                    {nIdx < 7 && (
                      <div aria-hidden="true" className="hidden md:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-slate-500">
                        <ArrowRight className="h-4 w-4 text-teal/60" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3-Tier Layered Architecture Graphic */}
        <div className="max-w-4xl 2xl:max-w-5xl mx-auto space-y-4 sm:space-y-6">
          {architectureLayers.map((tier, idx) => {
            const Icon = tier.icon;
            const isHovered = activeTier === tier.id;

            return (
              <motion.div
                key={tier.id}
                onMouseEnter={() => setActiveTier(tier.id)}
                onMouseLeave={() => setActiveTier(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative rounded-2xl border ${tier.borderColor}/40 bg-navy-900/80 p-6 sm:p-8 shadow-xl backdrop-blur-md transition-all duration-300 ${
                  isHovered ? "scale-[1.01] border-teal shadow-2xl shadow-teal/20" : ""
                }`}
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-navy-800 text-teal shrink-0 mt-1">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded ${tier.badgeColor}`}>
                          {tier.name}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 border border-navy-700/60 px-2 py-0.5 rounded">
                          {tier.boundary}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{tier.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{tier.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
