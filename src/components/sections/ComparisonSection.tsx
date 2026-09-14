"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Check, Minus, MoveHorizontal, Shield, Sparkles, X } from "lucide-react";

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
  const topScrollRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const isSyncingTop = useRef(false);
  const isSyncingTable = useRef(false);

  const handleTopScroll = () => {
    if (isSyncingTop.current) {
      isSyncingTop.current = false;
      return;
    }
    if (topScrollRef.current && tableRef.current) {
      isSyncingTable.current = true;
      tableRef.current.scrollLeft = topScrollRef.current.scrollLeft;
    }
  };

  const handleTableScroll = () => {
    if (isSyncingTable.current) {
      isSyncingTable.current = false;
      return;
    }
    if (topScrollRef.current && tableRef.current) {
      isSyncingTop.current = true;
      topScrollRef.current.scrollLeft = tableRef.current.scrollLeft;
    }
  };

  return (
    <section className="relative bg-white dark:bg-[#0A111F] section-rhythm border-t border-slate-200 dark:border-navy-700/60 overflow-hidden transition-colors duration-200">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber mb-3 font-bold"
          >
            WHY OMNiGRC
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight mb-4"
          >
            The sweet spot for lean GRC teams.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#334155] dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed"
          >
            More connected and structured than manual spreadsheets. Far simpler and more practical than heavyweight enterprise GRC suites.
          </motion.p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl 2xl:max-w-6xl mx-auto rounded-3xl border border-slate-200 dark:border-teal/30 bg-white dark:bg-navy-900/90 card-elevated backdrop-blur-xl overflow-hidden">
          
          {/* Top Horizontal Scrollbar Header & Control Track */}
          <div className="bg-slate-100/90 dark:bg-[#0A111F]/90 border-b border-slate-200 dark:border-navy-700/60 px-4 pt-3 pb-1">
            <div className="flex items-center justify-between gap-3 text-xs font-mono mb-1.5 text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2 font-bold text-[#D4521A] dark:text-amber">
                <MoveHorizontal className="h-4 w-4 animate-pulse shrink-0 text-[#F15E1C] dark:text-amber" />
                <span className="uppercase tracking-wider text-[11px]">SCROLL TABLE HORIZONTALLY</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold hidden sm:inline-block">
                Drag scrollbar or swipe table to view all columns
              </span>
            </div>

            {/* Synchronized Top Horizontal Scrollbar Track */}
            <div
              ref={topScrollRef}
              onScroll={handleTopScroll}
              className="overflow-x-auto top-table-scrollbar cursor-grab active:cursor-grabbing"
            >
              <div className="min-w-[750px] h-1" />
            </div>
          </div>

          {/* Synchronized Table Viewport */}
          <div
            ref={tableRef}
            onScroll={handleTableScroll}
            className="overflow-x-auto no-scrollbar"
          >
            <div className="min-w-[750px]">
              {/* Header Row */}
              <div className="grid grid-cols-12 bg-slate-100 dark:bg-[#0A111F] border-b border-slate-200 dark:border-navy-700/60 text-xs sm:text-sm font-bold text-navy-900 dark:text-slate-200">
                <div className="col-span-3 p-4 sm:p-5 flex items-center font-mono text-[13px] uppercase tracking-wider text-[#334155] dark:text-slate-400 font-semibold">
                  CAPABILITY
                </div>
                <div className="col-span-3 p-4 sm:p-5 flex items-center font-mono text-[13px] uppercase tracking-wider text-[#334155] dark:text-slate-400 border-l border-slate-200 dark:border-navy-700/60 font-semibold">
                  MANUAL SPREADSHEETS
                </div>
                <div className="col-span-3 p-4 sm:p-5 flex items-center font-mono text-[13px] uppercase tracking-wider text-[#334155] dark:text-slate-400 border-l border-slate-200 dark:border-navy-700/60 font-semibold">
                  ENTERPRISE GRC SUITES
                </div>
                <div className="col-span-3 p-4 sm:p-5 flex items-center justify-between font-mono text-[10px] sm:text-xs uppercase tracking-wider text-navy-900 dark:text-white bg-[#2E936F]/15 dark:bg-teal/25 border-l border-[#2E936F]/30 dark:border-teal/50">
                  <span className="flex items-center gap-1.5 font-bold text-[#D4521A] dark:text-amber">
                    <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#2E936F] dark:text-teal" /> OMNiGRC
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#D4521A] dark:bg-teal/40 text-white text-[9px] font-bold">UNIFIED</span>
                </div>
              </div>

              {/* Comparison Rows */}
              <div className="divide-y divide-slate-200 dark:divide-navy-700/60">
                {comparisonRows.map((row, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: idx * 0.05 }}
                    className="grid grid-cols-12 hover:bg-slate-50 dark:hover:bg-navy-800/40 transition-colors divider-light dark:divider-dark"
                  >
                    <div className="col-span-3 p-4 font-bold text-[13px] text-[#0F172A] dark:text-white flex items-center">
                      {row.feature}
                    </div>
                    <div className="col-span-3 p-4 text-[13px] text-[#475569] dark:text-slate-400 border-l border-slate-200 dark:border-navy-700/60 flex items-center gap-2">
                      <Minus className="h-3.5 w-3.5 text-slate-400 dark:text-slate-600 shrink-0" />
                      <span>{row.manual}</span>
                    </div>
                    <div className="col-span-3 p-4 text-[13px] text-[#475569] dark:text-slate-400 border-l border-slate-200 dark:border-navy-700/60 flex items-center gap-2">
                      <Minus className="h-3.5 w-3.5 text-slate-400 dark:text-slate-600 shrink-0" />
                      <span>{row.heavy}</span>
                    </div>
                    <div className="col-span-3 p-4 font-medium bg-[#2E936F]/10 dark:bg-teal/10 border-l border-[#2E936F]/20 dark:border-teal/30 flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-[#2E936F]/20 dark:bg-teal/20 text-[#2E936F] dark:text-teal-300 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                      <span className="text-[#2E936F] dark:text-teal-300 font-bold">{row.omni}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

