"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import dynamic from "next/dynamic";

const ControlMapping3DGraph = dynamic(
  () => import("@/components/3d/ControlMapping3DGraph").then((m) => m.ControlMapping3DGraph),
  { ssr: false }
);

export const ArchitectureSection: React.FC = () => {
  return (
    <section className="relative bg-white dark:bg-[#0A111F] pt-8 sm:pt-12 pb-6 sm:pb-8 border-t border-slate-200 dark:border-navy-700/60 overflow-hidden transition-colors duration-200">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full text-left md:text-center space-y-2 mb-6 sm:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight w-full"
          >
            AI assists. <span className="text-[#2E936F]">Humans decide.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg font-medium leading-relaxed w-full max-w-4xl md:mx-auto"
          >
            Every AI suggestion is logged, reversible, and gated behind explicit approval: nothing writes to your compliance record without a human signing off.
          </motion.p>
        </div>

        {/* 3D Pipeline Visualizer */}
        <div className="mb-8 sm:mb-10">
          <ControlMapping3DGraph />
        </div>

        {/* AI Trust Model: "AI ASSISTS. HUMANS DECIDE." Dedicated Callout */}
        <div className="mb-10 rounded-3xl border-2 border-[#2E936F]/40 dark:border-[#2E936F]/60 bg-gradient-to-r from-white via-[#F0FDF4] to-[#FFFDF5] dark:from-[#0E1A33] dark:via-[#112242] dark:to-[#0E1A33] p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="px-3.5 py-1.5 rounded-full bg-[#FAB60A]/20 dark:bg-[#FAB60A]/25 border border-[#FAB60A]/40 dark:border-[#FAB60A]/50 text-[#b07d00] dark:text-[#FAB60A] text-xs font-mono font-black uppercase tracking-wider shadow-sm">
                Core Operating Principle
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 dark:text-white tracking-tight leading-none">
                AI ASSISTS. <br />
                <span className="text-[#2E936F] dark:text-[#36B386]">HUMANS DECIDE.</span>
              </h3>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-100 leading-relaxed font-semibold">
                OMNiGRC never makes unsupervised compliance decisions. AI provides advisory clause correlations, accompanied by confidence indicators. Human approval is mandatory.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WHAT IS SENT TO LLMS */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#122820] border-2 border-[#2E936F]/40 dark:border-[#2E936F]/60 shadow-md space-y-3">
                <span className="text-xs sm:text-sm font-mono font-black text-[#2E936F] dark:text-[#42D49F] uppercase flex items-center gap-1.5 tracking-wider">
                  <CheckCircle2 className="h-5 w-5 text-[#2E936F] dark:text-[#42D49F]" /> WHAT IS SENT TO LLMS:
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-bold">
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-[#2E936F] dark:bg-[#42D49F] shrink-0" /> Generic control text
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-[#2E936F] dark:bg-[#42D49F] shrink-0" /> Target framework clause
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-[#2E936F] dark:bg-[#42D49F] shrink-0" /> Taxonomy definition
                  </li>
                </ul>
              </div>

              {/* WHAT IS NEVER SENT */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#2D1219] border-2 border-rose-300 dark:border-rose-700/60 shadow-md space-y-3">
                <span className="text-xs sm:text-sm font-mono font-black text-rose-600 dark:text-rose-400 uppercase flex items-center gap-1.5 tracking-wider">
                  <XCircle className="h-5 w-5 text-rose-500 dark:text-rose-400" /> WHAT IS NEVER SENT:
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-bold">
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-rose-500 dark:bg-rose-400 shrink-0" /> Organization name or brand
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-rose-500 dark:bg-rose-400 shrink-0" /> User identities &amp; employee data
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-rose-500 dark:bg-rose-400 shrink-0" /> Unrelated risk &amp; asset records
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
