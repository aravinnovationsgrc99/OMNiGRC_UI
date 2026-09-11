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
    desc: "Single control satisfying ISO 27001, SOC 2, GDPR, DPDP, Essential 8.",
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
    <section className="relative border-y border-slate-800/80 bg-[#0F172A] py-14 sm:py-20 overflow-hidden">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-[11px] font-mono tracking-widest uppercase mb-3 font-semibold"
          >
            <Lock className="h-3 w-3" /> DESIGNED FOR PRACTICAL GRC OPERATIONS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight"
          >
            Built around the workflows lean GRC teams actually manage.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-xs sm:text-sm sm:max-w-2xl mx-auto mt-2"
          >
            No complex consultant bloat or unneeded enterprise machinery. Just the core capabilities needed to keep risk, assets, and controls aligned and audit-ready.
          </motion.p>
        </div>

        {/* 6 Core Credibility Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {credibilityPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-950/80 hover:border-brand-orange/40 hover:bg-slate-900/90 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 text-brand-orange group-hover:bg-brand-orange/10 group-hover:scale-105 transition-all">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono text-brand-peach font-semibold uppercase bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-bold text-sm sm:text-base text-white mb-1.5 flex items-center gap-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                <div className="mt-4 pt-3 border-t border-slate-900 flex items-center gap-1.5 text-[11px] text-brand-green font-mono">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Documented Architecture</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
