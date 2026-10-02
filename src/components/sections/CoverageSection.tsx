"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  ArrowRight,
  CheckCircle,
  Globe,
  MapPin,
  Lock,
  FileText,
  Layers,
} from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { FRAMEWORKS } from "@/lib/frameworks";

export const CoverageSection: React.FC = () => {
  return (
    <section className="relative bg-white dark:bg-[#16233F] py-4 sm:py-6 border-t border-slate-200 dark:border-navy-700/60 overflow-hidden transition-colors duration-200">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
        {/* Section Header */}
        <div className="w-full text-left space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight w-full">
            Not a checklist. <span className="text-[#2E936F]">A control mapping engine.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed w-full max-w-4xl">
            93 ISO 27001 controls. GDPR Articles 28–35. DPDP fiduciary rules. Every clause traced to the primary control that satisfies it, across all six frameworks, out of the box.
          </p>
        </div>

        {/* Supported Framework Taxonomies Index */}
        <div className="pt-2">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4 text-center font-bold">
            Supported Framework Taxonomies Index
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 text-xs sm:text-sm">
            {FRAMEWORKS.map((fw) => (
              <Link
                key={fw.code}
                href={`/frameworks/${fw.slug}`}
                className="p-4 rounded-xl bg-white dark:bg-navy-900/60 border border-slate-300 dark:border-navy-700/40 hover:border-teal/40 transition-all space-y-1 block text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-navy-900 dark:text-white text-sm sm:text-base">{fw.code}</span>
                  <span className="text-xs font-mono text-teal font-bold">{fw.badge.split(" ")[0]}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 truncate font-medium">{fw.name}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Regional Awareness & Hosting Section */}
        <div className="rounded-3xl border border-slate-300 dark:border-navy-700/60 bg-white dark:bg-[#0A111F]/90 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4521A] dark:text-amber font-bold flex items-center gap-1.5">
                <Globe className="h-4 w-4 text-teal" /> REGIONAL HOSTING AWARENESS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white tracking-tight">
                Designed for regional data residency.
              </h3>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                GRC teams operate in specific legal jurisdictions. OMNiGRC&apos;s deployment architecture supports isolated tenant storage with initial MVP hosting live in India and the United Kingdom, followed by EU and Australia on the post-launch roadmap.
              </p>
            </div>

            <div className="md:col-span-7 flex flex-col gap-4">
              {/* Card 1: Live (India & UK) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-navy-900 border border-[#2E936F]/25 dark:border-[#2E936F]/40 shadow-sm hover:shadow-md transition-all space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-[#E6F4EF] dark:bg-[#2E936F]/20 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-[#2E936F] dark:text-[#2E936F]" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-snug">
                      India &amp; United Kingdom
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F4EF] dark:bg-[#2E936F]/20 text-[#2E936F] dark:text-[#2E936F] text-xs font-mono font-bold shrink-0 self-start sm:self-auto border border-[#2E936F]/20">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2E936F]" />
                    Live
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                  Dedicated regional tenant hosting currently live for Indian DPDP compliance and UK GDPR requirements.
                </p>
              </div>

              {/* Card 2: Q1 2027 (EU & Australia) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-navy-900 border border-[#F7D7B0] dark:border-[#F15E1C]/30 shadow-sm hover:shadow-md transition-all space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-[#FFF0E5] dark:bg-[#F15E1C]/20 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-[#F15E1C]" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-snug">
                      European Union &amp; Australia
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF3E6] dark:bg-[#F15E1C]/20 text-[#F15E1C] text-xs font-mono font-bold shrink-0 self-start sm:self-auto border border-[#F15E1C]/20">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F15E1C]" />
                    Q1 2027
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                  Planned cloud points of presence for EU Data Boundary and Australian data sovereignty roadmap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
