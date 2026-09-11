"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Minus, Shield, Sparkles, X } from "lucide-react";

const comparisonRows = [
  {
    feature: "Risk Management",
    manual: "Static risk spreadsheets that drift from reality",
    heavy: "Complex risk modules requiring weeks of configuration",
    omni: "Unified 5x5 scoring linked directly to controls & assets",
  },
  {
    feature: "Asset & Vendor Inventory",
    manual: "Disconnected hardware lists & vendor folders",
    heavy: "Heavyweight CMDB with disconnected compliance context",
    omni: "Connected inventory with vendor and PII data flow tracing",
  },
  {
    feature: "Multi-Framework Mapping",
    manual: "Duplicate controls mapped separately per audit",
    heavy: "Rigid proprietary crosswalks requiring consultants",
    omni: "Map once; advisory AI suggests clauses across 5 standards",
  },
  {
    feature: "Testing & Evidence Cadence",
    manual: "Ad-hoc calendar reminders and frantic pre-audit sprints",
    heavy: "Burden of manual compliance tickets across systems",
    omni: "Structured Kanban board with rolling 30/60/90-day visibility",
  },
  {
    feature: "AI Integration Model",
    manual: "No AI support; entirely manual copy-paste",
    heavy: "Opaque 'black box' AI with unverified promises",
    omni: "Advisory AI with data minimization & mandatory human approval",
  },
  {
    feature: "Auditability & Oversight",
    manual: "Scattered emails with zero unified change history",
    heavy: "Complex audit logs buried in enterprise menus",
    omni: "Immutable PostgreSQL change logs & defensible audit history",
  },
];

export const ComparisonSection: React.FC = () => {
  return (
    <section className="relative bg-[#0A111F] py-16 sm:py-24 border-t border-navy-700/60 overflow-hidden">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-mono uppercase tracking-widest text-amber mb-3 font-semibold"
          >
            WHY OMNiGRC
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            The sweet spot for lean GRC teams.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-sm sm:text-base lg:text-lg"
          >
            More connected and structured than manual spreadsheets. Far simpler and more practical than heavyweight enterprise GRC suites.
          </motion.p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl 2xl:max-w-6xl mx-auto overflow-x-auto rounded-3xl border border-teal/30 bg-navy-900/90 shadow-2xl backdrop-blur-xl">
          <div className="min-w-[750px]">
            {/* Header Row */}
            <div className="grid grid-cols-12 bg-[#0A111F] border-b border-navy-700/60 text-xs sm:text-sm font-bold text-slate-200">
              <div className="col-span-3 p-4 sm:p-5 flex items-center font-mono text-[10px] sm:text-xs uppercase tracking-wider text-slate-400">
                CAPABILITY
              </div>
              <div className="col-span-3 p-4 sm:p-5 flex items-center font-mono text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 border-l border-navy-700/60">
                MANUAL SPREADSHEETS
              </div>
              <div className="col-span-3 p-4 sm:p-5 flex items-center font-mono text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 border-l border-navy-700/60">
                ENTERPRISE GRC SUITES
              </div>
              <div className="col-span-3 p-4 sm:p-5 flex items-center justify-between font-mono text-[10px] sm:text-xs uppercase tracking-wider text-white bg-teal/25 border-l border-teal/50">
                <span className="flex items-center gap-1.5 font-bold text-amber">
                  <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-teal" /> OMNiGRC
                </span>
                <span className="px-2 py-0.5 rounded bg-teal/40 text-white text-[9px] font-bold">UNIFIED</span>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-navy-700/60">
              {comparisonRows.map((row, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: idx * 0.05 }}
                  className="grid grid-cols-12 hover:bg-navy-800/40 transition-colors text-xs"
                >
                  <div className="col-span-3 p-4 font-bold text-white flex items-center">
                    {row.feature}
                  </div>
                  <div className="col-span-3 p-4 text-slate-400 border-l border-navy-700/60 flex items-center gap-2">
                    <Minus className="h-3.5 w-3.5 text-slate-600 shrink-0" />
                    <span>{row.manual}</span>
                  </div>
                  <div className="col-span-3 p-4 text-slate-400 border-l border-navy-700/60 flex items-center gap-2">
                    <Minus className="h-3.5 w-3.5 text-slate-600 shrink-0" />
                    <span>{row.heavy}</span>
                  </div>
                  <div className="col-span-3 p-4 text-slate-100 font-medium bg-teal/10 border-l border-teal/30 flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-teal/20 text-teal flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                    <span className="text-teal font-semibold">{row.omni}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
