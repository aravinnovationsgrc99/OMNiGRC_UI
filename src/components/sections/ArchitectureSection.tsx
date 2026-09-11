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
} from "lucide-react";
import { ControlMapping3DGraph } from "@/components/3d/ControlMapping3DGraph";

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
      borderColor: "border-brand-orange",
      badgeColor: "text-brand-orange bg-brand-orange/10",
    },
    {
      id: 2,
      name: "STEP 3 - 5: TIERED MODEL ROUTER & EXTERNAL CALL",
      title: "2. Tiered Model Router & Clause Analysis",
      desc: "Sanitized control text and candidate framework clauses are routed to high-speed LLM APIs. Tier 1 (Gemini 2.5 Flash-Lite) / Tier 2 (Claude Haiku candidate) / Fallback (DeepSeek).",
      icon: Cpu,
      boundary: "External LLM API (Ephemeral & Stateless)",
      items: ["Gemini 2.5 Flash-Lite Tier", "Claude Haiku Candidate Tier", "DeepSeek Fallback Option", "Zero-Retention Call"],
      borderColor: "border-brand-gold",
      badgeColor: "text-brand-gold bg-brand-gold/10",
    },
    {
      id: 3,
      name: "STEP 6 - 8: VALIDATION, HUMAN APPROVAL & PERSISTENCE",
      title: "3. Schema Validation & Mandatory Human Decision",
      desc: "Model responses are parsed and validated against strict framework taxonomies. Human analyst reviews, adjusts confidence, and approves before committing to PostgreSQL.",
      icon: UserCheck,
      boundary: "OMNiGRC Controlled Database",
      items: ["Clause Validation Engine", "Mandatory Human Approval", "PostgreSQL Persistence", "Full Audit History"],
      borderColor: "border-brand-green",
      badgeColor: "text-brand-green bg-brand-green/10",
    },
  ];

  return (
    <section className="relative bg-[#0B0F17] py-16 sm:py-24 border-t border-slate-800 overflow-hidden">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-mono uppercase tracking-widest text-brand-yellow mb-3 font-semibold"
          >
            TRANSPARENT AI ARCHITECTURE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            How AI control mapping actually works.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-sm sm:text-base lg:text-lg"
          >
            No black boxes. No autonomous hallucinated approvals. Complete data minimization and mandatory human decision-making.
          </motion.p>
        </div>

        {/* 3D Pipeline Visualizer */}
        <div className="mb-14 sm:mb-18">
          <ControlMapping3DGraph />
        </div>

        {/* AI Trust Model: "AI ASSISTS. HUMANS DECIDE." Dedicated Callout */}
        <div className="mb-14 rounded-3xl border border-brand-orange/40 bg-gradient-to-r from-brand-orange/15 via-slate-900/90 to-brand-green/15 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="px-3 py-1 rounded-full bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow text-xs font-mono font-bold uppercase">
                Core Operating Principle
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                AI ASSISTS. <br />
                <span className="text-brand-orange">HUMANS DECIDE.</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                OMNiGRC never makes unsupervised compliance decisions. AI provides advisory clause correlations, accompanied by confidence indicators. Human approval is mandatory.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-brand-green/30 space-y-2">
                <span className="text-xs font-mono font-bold text-brand-green uppercase flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-brand-green" /> What is SENT to LLMs:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green" /> Generic control text
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green" /> Target framework clause
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green" /> Taxonomy definition
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-red-500/30 space-y-2">
                <span className="text-xs font-mono font-bold text-red-400 uppercase flex items-center gap-1.5">
                  <XCircle className="h-4 w-4 text-red-400" /> What is NEVER Sent:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400" /> Organization name or brand
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400" /> User identities & employee data
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400" /> Unrelated risk & asset records
                  </li>
                </ul>
              </div>
            </div>
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
                className={`relative rounded-2xl border ${tier.borderColor}/40 bg-slate-900/80 p-6 sm:p-8 shadow-xl backdrop-blur-md transition-all duration-300 ${
                  isHovered ? "scale-[1.01] border-brand-orange shadow-2xl shadow-brand-orange/20" : ""
                }`}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex items-start gap-4 max-w-xl">
                    <div className="p-3 rounded-xl bg-slate-800 text-brand-orange shrink-0 mt-1">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded ${tier.badgeColor}`}>
                          {tier.name}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 border border-slate-800 px-2 py-0.5 rounded">
                          {tier.boundary}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{tier.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{tier.desc}</p>
                    </div>
                  </div>

                  <div className="w-full md:w-auto grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {tier.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-200 font-medium"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-green shrink-0" />
                        <span className="whitespace-nowrap">{item}</span>
                      </div>
                    ))}
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
