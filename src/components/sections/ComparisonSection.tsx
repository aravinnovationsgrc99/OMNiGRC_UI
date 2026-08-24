"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Minus, Shield } from "lucide-react";

const comparisonRows = [
  {
    feature: "Multiple frameworks",
    legacy: "New project & scope created every time",
    omni: "Auto-mapped once, continuously current",
    highlight: true,
  },
  {
    feature: "Evidence collection",
    legacy: "Basic manual screenshot reminders",
    omni: "24/7 AI continuous collection & gap analysis",
    highlight: true,
  },
  {
    feature: "Vendor risk (TPRM)",
    legacy: "Sends static email questionnaires",
    omni: "Autonomous end-to-end SOC report parsing & risk",
    highlight: true,
  },
  {
    feature: "Audit prep",
    legacy: "Reminds you before deadline",
    omni: "Autonomous audit readiness & Express Auditor Portal",
    highlight: true,
  },
  {
    feature: "AI Governance",
    legacy: "Static policy PDF document",
    omni: "Live AI model registry & ISO 42001 risk engine",
    highlight: true,
  },
  {
    feature: "Human role",
    legacy: "Running administrative chores daily",
    omni: "Leading high-level risk & strategic decisions",
    highlight: true,
  },
];

export const ComparisonSection: React.FC = () => {
  return (
    <section className="relative bg-[#0F172A] py-16 sm:py-24 border-t border-slate-800 overflow-hidden">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-mono uppercase tracking-widest text-brand-yellow mb-3 font-semibold"
          >
            THE PARADIGM SHIFT
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            OMNiGRC is categorically different.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-sm sm:text-base lg:text-lg"
          >
            Other tools automate administrative tasks. OMNiGRC owns outcomes continuously.
          </motion.p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl 2xl:max-w-6xl mx-auto overflow-x-auto rounded-2xl border border-brand-orange/30 bg-slate-900/90 shadow-2xl backdrop-blur-xl">
          <div className="min-w-[600px]">
            {/* Header Row */}
            <div className="grid grid-cols-12 bg-slate-950 border-b border-slate-800 text-xs sm:text-sm font-bold text-slate-200">
              <div className="col-span-4 p-4 sm:p-5 flex items-center font-mono text-[10px] sm:text-xs uppercase tracking-wider text-slate-400">
                CAPABILITY / FEATURE
              </div>
              <div className="col-span-4 p-4 sm:p-5 flex items-center font-mono text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 border-l border-slate-800">
                LEGACY GRC TOOLS
              </div>
              <div className="col-span-4 p-4 sm:p-5 flex items-center justify-between font-mono text-[10px] sm:text-xs uppercase tracking-wider text-white bg-brand-orange/30 border-l border-brand-orange/50">
                <span className="flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-orange" /> OMNiGRC
                </span>
                <span className="hidden sm:inline px-2 py-0.5 rounded bg-brand-orange/30 text-white text-[10px] font-bold">AUTONOMOUS</span>
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-slate-800/80">
              {comparisonRows.map((row, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="grid grid-cols-12 hover:bg-slate-800/50 transition-colors text-xs sm:text-sm"
                >
                  <div className="col-span-4 p-4 sm:p-5 font-semibold text-white flex items-center">
                    {row.feature}
                  </div>
                  <div className="col-span-4 p-4 sm:p-5 text-slate-400 border-l border-slate-800 flex items-center gap-2">
                    <Minus className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-600 shrink-0" />
                    <span>{row.legacy}</span>
                  </div>
                  <div className="col-span-4 p-4 sm:p-5 text-slate-100 font-medium bg-brand-orange/10 border-l border-brand-orange/30 flex items-center gap-2 sm:gap-2.5">
                    <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 stroke-[3]" />
                    </div>
                    <span className="text-brand-green font-semibold">{row.omni}</span>
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
