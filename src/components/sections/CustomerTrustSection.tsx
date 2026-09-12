"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Server,
  FileCheck2,
  CalendarCheck,
  Cpu,
  History,
  Lock,
  CheckCircle2,
} from "lucide-react";

import { fadeInUp, staggerContainer } from "@/lib/motion";
import { FRAMEWORKS } from "@/lib/frameworks";

const credibilityPillars = [
  {
    title: "Unified Risk Register",
    desc: "Structured likelihood × impact scoring with residual tracking.",
    icon: ShieldAlert,
    tag: "Risk Visibility",
  },
  {
    title: "Asset & Vendor Inventory",
    desc: "Connected repository of hardware, software, vendors, and data flows.",
    icon: Server,
    tag: "Asset Clarity",
  },
  {
    title: "Map-Once Controls",
    desc: `Single control satisfying ${FRAMEWORKS.map((f) => f.code).join(", ")}.`,
    icon: FileCheck2,
    tag: "Reusable Logic",
  },
  {
    title: "Testing & Compliance Board",
    desc: "Owner assignments, testing cadence, and rolling 30/60/90-day visibility.",
    icon: CalendarCheck,
    tag: "Operational Cadence",
  },
  {
    title: "Advisory AI with Minimization",
    desc: "Sensitive context stripped before external model suggestions.",
    icon: Cpu,
    tag: "Human Decides",
  },
  {
    title: "Audit-Ready Immutable History",
    desc: "Complete change logs, versioning, and defensible audit records.",
    icon: History,
    tag: "Audit Defensible",
  },
];

export const CustomerTrustSection: React.FC = () => {
  return (
    <section className="relative border-y border-slate-200 dark:border-navy-700/60 bg-[#F6F7F6] dark:bg-[#16233F] py-10 sm:py-20 transition-colors duration-200 overflow-hidden">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal/30 bg-teal/10 text-teal text-[11px] font-mono tracking-widest uppercase mb-3 font-semibold"
          >
            <Lock className="h-3 w-3" /> DESIGNED FOR PRACTICAL GRC OPERATIONS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 dark:text-white tracking-tight"
          >
            Built around the workflows lean GRC teams actually manage.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm sm:max-w-2xl mx-auto mt-2 mb-4"
          >
            No complex consultant bloat or unneeded enterprise machinery. Just the core capabilities needed to keep risk, assets, and controls aligned and audit-ready.
          </motion.p>

          {/* Stat-Free Qualitative Capability Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 font-mono text-xs">
            <span className="px-3.5 py-1.5 rounded-full bg-teal/15 border border-teal/40 text-teal font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5" /> No Consultant Bloat
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-amber/15 border border-amber/40 text-amber font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5" /> Mandatory Human Decision
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-500/40 text-sky-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5" /> Immutable Postgres History
            </span>
          </div>
        </div>

        {/* 6 Core Credibility Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6"
        >
          {credibilityPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-3.5 sm:p-6 rounded-2xl border border-slate-200 dark:border-navy-700/60 bg-white dark:bg-[#0A111F]/80 hover:border-teal/40 dark:hover:bg-navy-900/90 hover:bg-slate-50 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-navy-800 text-teal group-hover:bg-teal/10 group-hover:scale-105 transition-all">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono text-amber font-semibold uppercase bg-slate-100 dark:bg-navy-800 px-2 py-0.5 rounded border border-slate-200 dark:border-navy-700/60">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-bold text-sm sm:text-base text-navy-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc}</p>
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-navy-700/60 flex items-center gap-1.5 text-[11px] text-teal font-mono">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Documented Architecture</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
