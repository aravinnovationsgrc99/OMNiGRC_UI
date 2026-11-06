"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { ControlMapping3DGraph } from "@/components/3d/ControlMapping3DGraph";

export const ArchitectureSection: React.FC = () => {
  return (
    <section className="relative bg-white dark:bg-[#0A111F] py-4 sm:py-6 border-t border-slate-200/60 dark:border-navy-700/60 overflow-hidden transition-colors duration-200">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full text-left space-y-2 mb-4 sm:mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[21px] min-[360px]:text-[25px] min-[400px]:text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight w-full whitespace-nowrap text-left"
          >
            <span className="sm:hidden">
              AI Assist <span className="text-[#2E936F]">Human Decide</span>
            </span>
            <span className="hidden sm:inline">
              AI Assists. <span className="text-[#2E936F]">Humans Decide.</span>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-700 dark:text-slate-200 text-xs sm:text-base md:text-lg font-medium leading-relaxed w-full text-left"
          >
            Every AI suggestion is logged, reversible, and gated behind explicit approval: nothing writes to your compliance record without a human signing off.
          </motion.p>
        </div>

        {/* 3D Pipeline Visualizer */}
        <div className="mb-8 sm:mb-10 min-h-[300px]">
          <ControlMapping3DGraph />
        </div>

        {/* AI Trust Model: "AI ASSISTS. HUMANS DECIDE." Dedicated Callout */}
        <div className="mb-10 rounded-3xl border-2 border-[#2E936F]/40 dark:border-[#2E936F]/60 bg-gradient-to-r from-white via-[#F0FDF4] to-[#FFFDF5] dark:from-[#0E1A33] dark:via-[#112242] dark:to-[#0E1A33] p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <h3 className="text-[22px] min-[360px]:text-2xl min-[410px]:text-[26px] sm:text-4xl lg:text-5xl font-black text-navy-900 dark:text-white tracking-tight leading-tight sm:leading-none">
                <span className="block whitespace-nowrap">AI ASSISTS.</span>
                <span className="block whitespace-nowrap text-[#2E936F] dark:text-[#36B386]">HUMANS DECIDE.</span>
              </h3>
              <p className="text-base sm:text-lg text-slate-800 dark:text-slate-100 leading-relaxed font-semibold">
                OMNiGRC never makes unsupervised compliance decisions. AI provides advisory clause correlations, accompanied by confidence indicators. Human approval is mandatory.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WHAT IS SENT TO LLMS */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#122820] border-2 border-[#2E936F]/40 dark:border-[#2E936F]/60 shadow-md space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#2E936F] dark:text-[#36B386] shrink-0" />
                  <span className="text-xs font-mono font-black uppercase text-[#2E936F] dark:text-[#36B386]">
                    SENT TO REASONING ENGINE
                  </span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2E936F] shrink-0 mt-1.5" />
                    <span>Control Safeguard Language (anonymized)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2E936F] shrink-0 mt-1.5" />
                    <span>Framework clause requirements &amp; criteria</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2E936F] shrink-0 mt-1.5" />
                    <span>Confidence scoring prompts</span>
                  </li>
                </ul>
              </div>

              {/* WHAT NEVER LEAVES YOUR BOUNDARY */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#201016] border-2 border-rose-300 dark:border-rose-900/60 shadow-md space-y-3">
                <div className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-[#E5484D] dark:text-rose-400 shrink-0" />
                  <span className="text-xs font-mono font-black uppercase text-[#E5484D] dark:text-rose-400">
                    NEVER LEAVES BOUNDARY
                  </span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E5484D] shrink-0 mt-1.5" />
                    <span>Evidence files, logs &amp; artifacts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E5484D] shrink-0 mt-1.5" />
                    <span>PII, employee names &amp; org identifiers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E5484D] shrink-0 mt-1.5" />
                    <span>Tenant data (never used to train models)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
