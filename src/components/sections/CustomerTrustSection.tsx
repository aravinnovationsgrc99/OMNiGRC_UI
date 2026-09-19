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
    title: "Audit-Ready Structured History",
    desc: "Complete change logs, versioning, and defensible audit records.",
    icon: History,
    tag: "Audit Defensible",
  },
];

export const CustomerTrustSection: React.FC = () => {
  return (
    <section className="relative border-y border-slate-200 dark:border-navy-700/60 bg-white dark:bg-[#131C38] section-rhythm transition-colors duration-200 overflow-hidden">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 dark:text-white tracking-tight"
          >
            Built around the workflows{" "}
            <span className="relative inline-block text-orange-600 dark:text-teal-400">
              lean GRC teams
              <svg
                className="absolute bottom-[-6px] left-0 w-full h-[4px] overflow-visible pointer-events-none"
                viewBox="0 0 100 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M1 5.5C25 2 75 7.5 99 2.5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            actually manage.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#334155] dark:text-slate-300 text-sm sm:max-w-2xl mx-auto mt-2 mb-4 leading-relaxed"
          >
            No complex consultant bloat or unneeded enterprise machinery. Just the core capabilities needed to keep risk, assets, and controls aligned and audit-ready.
          </motion.p>

          {/* Stat-Free Qualitative Capability Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 font-mono text-xs">
            <span className="px-3.5 py-1.5 rounded-full bg-[#2E936F]/15 border border-[#2E936F]/40 text-[#2E936F] dark:bg-teal/15 dark:border-teal/40 dark:text-teal font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5" /> No Consultant Bloat
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#FAB60A]/20 border border-[#FAB60A]/40 text-navy-900 dark:bg-amber/15 dark:border-amber/40 dark:text-amber font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5" /> Mandatory Human Decision
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-500/40 text-sky-700 dark:text-sky-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5" /> Structured Application Event Logs
            </span>
          </div>
        </div>

        {/* 6 Core Credibility Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {credibilityPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-navy-700/60 bg-white dark:bg-[#0D1626] card-elevated hover:border-[#2E936F]/40 dark:hover:border-teal/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-navy-800 text-[#2E936F] dark:text-teal group-hover:bg-[#2E936F]/10 dark:group-hover:bg-teal/10 group-hover:scale-105 transition-all">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[13px] font-mono text-[#D4521A] dark:text-amber font-semibold uppercase bg-[#FAB60A]/10 dark:bg-navy-800 px-2.5 py-1 rounded border border-[#FAB60A]/30 dark:border-navy-700/60 tracking-wider">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-bold text-sm sm:text-base text-[#0F172A] dark:text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#334155] dark:text-slate-300 leading-relaxed">{item.desc}</p>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-navy-700/60 flex items-center gap-1.5 text-[13px] text-[#2E936F] dark:text-teal font-mono font-semibold">
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
