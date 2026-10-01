"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileText,
  Lock,
  Database,
  Plus,
  ArrowRight,
  Settings,
  Link as LinkIcon,
  CheckCircle2,
} from "lucide-react";

export interface FrameworkOrreryProps {
  title?: string;
  className?: string;
  compact?: boolean;
}

export const FrameworkOrrery: React.FC<FrameworkOrreryProps> = ({
  title = "ONE FRAMEWORK ENGINE",
  className = "",
}) => {
  const frameworkNodes = [
    {
      code: "ISO 27001",
      status: "Mapped",
      icon: ShieldCheck,
      bgColor: "bg-[#FFF6F0] dark:bg-amber-950/20",
      borderColor: "border-[#F15E1C]/30 dark:border-[#F15E1C]/40",
      iconBg: "bg-[#F15E1C]/15 text-[#F15E1C]",
      textColor: "text-[#F15E1C]",
      dotColor: "bg-[#F15E1C]",
      slug: "iso-27001",
    },
    {
      code: "ISO 42001",
      status: "Mapped",
      icon: FileText,
      bgColor: "bg-[#F0FDF4] dark:bg-emerald-950/20",
      borderColor: "border-[#2E936F]/30 dark:border-[#2E936F]/40",
      iconBg: "bg-[#2E936F]/15 text-[#2E936F]",
      textColor: "text-[#2E936F]",
      dotColor: "bg-[#2E936F]",
      slug: "iso-42001",
    },
    {
      code: "SOC 2",
      status: "Mapped",
      icon: ShieldCheck,
      bgColor: "bg-[#FFFBEB] dark:bg-amber-950/20",
      borderColor: "border-[#FAB60A]/35 dark:border-[#FAB60A]/45",
      iconBg: "bg-[#FAB60A]/20 text-[#b07d00] dark:text-[#FAB60A]",
      textColor: "text-[#b07d00] dark:text-[#FAB60A]",
      dotColor: "bg-[#FAB60A]",
      slug: "soc-2",
    },
    {
      code: "GDPR",
      status: "Mapped",
      icon: Lock,
      bgColor: "bg-[#F0FDF4] dark:bg-emerald-950/20",
      borderColor: "border-[#2E936F]/30 dark:border-[#2E936F]/40",
      iconBg: "bg-[#2E936F]/15 text-[#2E936F]",
      textColor: "text-[#2E936F]",
      dotColor: "bg-[#2E936F]",
      slug: "gdpr",
    },
    {
      code: "DPDP",
      status: "Mapped",
      icon: Database,
      bgColor: "bg-[#FFF6F0] dark:bg-amber-950/20",
      borderColor: "border-[#F15E1C]/30 dark:border-[#F15E1C]/40",
      iconBg: "bg-[#F15E1C]/15 text-[#F15E1C]",
      textColor: "text-[#F15E1C]",
      dotColor: "bg-[#F15E1C]",
      slug: "dpdp",
    },
    {
      code: "HIPAA",
      status: "Mapped",
      icon: Plus,
      bgColor: "bg-[#FFFBEB] dark:bg-amber-950/20",
      borderColor: "border-[#FAB60A]/35 dark:border-[#FAB60A]/45",
      iconBg: "bg-[#FAB60A]/20 text-[#b07d00] dark:text-[#FAB60A]",
      textColor: "text-[#b07d00] dark:text-[#FAB60A]",
      dotColor: "bg-[#FAB60A]",
      slug: "hipaa",
    },
  ];

  return (
    <div className={`w-full max-w-3xl lg:max-w-4xl mx-auto ${className}`}>
      {/* Outer Card Container */}
      <div className="relative w-full rounded-3xl border border-slate-200/90 dark:border-navy-700/80 bg-white/95 dark:bg-navy-950 p-5 md:p-6 lg:p-7 shadow-xl overflow-hidden select-none">
        
        {/* Top Header Row */}
        <div className="flex flex-col items-center justify-center text-center space-y-2 mb-5">
          <div className="inline-flex items-center gap-2 text-slate-800 dark:text-white font-mono text-xs sm:text-sm font-extrabold uppercase tracking-widest">
            <Settings className="h-4 w-4 text-[#F15E1C] animate-spin-slow" />
            <span>{title}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-[#2E936F]/30 text-[#2E936F] dark:text-teal-300 text-xs font-mono font-bold shadow-sm">
            <LinkIcon className="h-3.5 w-3.5" />
            <span>Map-Once Architecture</span>
          </div>
        </div>

        {/* TIER 1: CENTRAL ENGINE BOX */}
        <div className="relative max-w-sm md:max-w-md mx-auto mb-2 z-10">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="p-4 md:p-5 rounded-3xl border-2 border-[#F15E1C]/30 bg-[#FFF8F3] dark:bg-amber-950/20 text-center shadow-sm relative"
          >
            {/* Top Central Engine Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F15E1C]/10 border border-[#F15E1C]/30 text-[#F15E1C] dark:text-amber text-[11px] font-mono font-extrabold uppercase tracking-wider mb-1.5">
              <Settings className="h-3.5 w-3.5 text-[#F15E1C]" />
              <span>CENTRAL ENGINE</span>
            </div>

            <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#0d1b36] dark:text-white tracking-tight">
              Map Controls Once
            </h3>

            <p className="text-xs md:text-xs lg:text-sm text-slate-600 dark:text-slate-300 font-medium max-w-xs sm:max-w-sm mx-auto mt-1 leading-snug">
              Single security safeguard automatically correlates across all standards.
            </p>

            {/* Central Document Icon Container with Checkmark */}
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#F15E1C]/15 via-[#F7D7B0]/40 to-[#F15E1C]/10 border border-[#F15E1C]/30 flex items-center justify-center mx-auto mt-3 shadow-inner relative">
              <FileText className="h-7 w-7 md:h-8 md:w-8 text-[#F15E1C]" />
              <div className="absolute -bottom-1 -right-1 p-0.5 rounded-full bg-white dark:bg-navy-900 shadow">
                <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-[#F15E1C] fill-[#F15E1C] text-white" />
              </div>
            </div>

            {/* Glowing Amber Center Node Dot at bottom edge */}
            <div className="w-3.5 h-3.5 rounded-full bg-[#FAB60A] ring-4 ring-[#FAB60A]/40 border-2 border-white dark:border-navy-900 absolute -bottom-1.5 left-1/2 -translate-x-1/2 shadow-md z-20" />
          </motion.div>
        </div>

        {/* CONNECTING CONDUIT SVG 1 (Central Box -> Branching to 3 Columns) */}
        <div className="relative w-full overflow-hidden -my-1">
          <svg
            aria-hidden="true"
            className="w-full h-10 md:h-12 pointer-events-none"
            viewBox="0 0 600 50"
            fill="none"
          >
            {/* Top Vertical Trunk from Central Dot */}
            <path
              d="M300 0 V25"
              stroke="#2E936F"
              strokeWidth="2.5"
            />
            
            {/* Horizontal Branch Bar across 3 columns (Col 1: 100, Col 2: 300, Col 3: 500) */}
            <path
              d="M100 25 H500"
              stroke="#2E936F"
              strokeWidth="2"
            />

            {/* Vertical Drops to 3 Columns */}
            <path d="M100 25 V50" stroke="#2E936F" strokeWidth="2" />
            <path d="M300 25 V50" stroke="#2E936F" strokeWidth="2" />
            <path d="M500 25 V50" stroke="#2E936F" strokeWidth="2" />

            {/* Glowing Amber Junction Dots */}
            <circle cx="300" cy="25" r="4" fill="#FAB60A" className="animate-ping" />
            <circle cx="300" cy="25" r="3.5" fill="#FAB60A" />
            <circle cx="100" cy="25" r="3" fill="#FAB60A" />
            <circle cx="500" cy="25" r="3" fill="#FAB60A" />
          </svg>
        </div>

        {/* TIER 2: 3x2 FRAMEWORK NODES GRID */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-5 mb-2 relative z-10">
          {frameworkNodes.map((fw) => {
            const Icon = fw.icon;
            return (
              <motion.div
                key={fw.code}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className={`group relative p-3 md:p-4 rounded-2xl border ${fw.borderColor} ${fw.bgColor} text-center shadow-sm flex flex-col items-center justify-between min-h-[105px] md:min-h-[120px]`}
              >
                {/* Glowing Amber Node Dot on Top Edge */}
                <div className="w-3 h-3 rounded-full bg-[#FAB60A] ring-4 ring-[#FAB60A]/30 border-2 border-white dark:border-navy-900 absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-sm" />

                {/* Icon Container */}
                <div className={`w-9 h-9 md:w-11 md:h-11 rounded-2xl ${fw.iconBg} flex items-center justify-center shadow-sm mb-1.5 group-hover:scale-105 transition-transform`}>
                  <Icon className="h-4.5 w-4.5 md:h-5.5 md:w-5.5" />
                </div>

                {/* Framework Name */}
                <div className="space-y-0.5">
                  <h4 className="text-xs md:text-sm lg:text-base font-extrabold text-[#0d1b36] dark:text-white tracking-tight">
                    {fw.code}
                  </h4>
                  <span className="text-[10px] md:text-xs font-medium text-slate-500 dark:text-slate-400 block">
                    {fw.status}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CONNECTING CONDUIT SVG 2 (3 Columns -> Converging into Foundation Box) */}
        <div className="relative w-full overflow-hidden -my-1">
          <svg
            aria-hidden="true"
            className="w-full h-10 md:h-12 pointer-events-none"
            viewBox="0 0 600 50"
            fill="none"
          >
            {/* Vertical Riser Lines from Col 1, Col 2, Col 3 */}
            <path d="M100 0 V25" stroke="#2E936F" strokeWidth="2" />
            <path d="M300 0 V25" stroke="#2E936F" strokeWidth="2" />
            <path d="M500 0 V25" stroke="#2E936F" strokeWidth="2" />

            {/* Horizontal Convergence Bar */}
            <path d="M100 25 H500" stroke="#2E936F" strokeWidth="2" />

            {/* Bottom Vertical Trunk to Foundation Box */}
            <path d="M300 25 V50" stroke="#2E936F" strokeWidth="2.5" />

            {/* Glowing Amber Junction Dots */}
            <circle cx="100" cy="25" r="3" fill="#FAB60A" />
            <circle cx="500" cy="25" r="3" fill="#FAB60A" />
            <circle cx="300" cy="25" r="4" fill="#FAB60A" className="animate-ping" />
            <circle cx="300" cy="25" r="3.5" fill="#FAB60A" />
          </svg>
        </div>

        {/* TIER 3: FOUNDATION LAYER BOX (Shared Evidence Base) */}
        <div className="relative max-w-md md:max-w-lg mx-auto mb-5 z-10">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="p-4 md:p-5 rounded-3xl border-2 border-[#2E936F]/30 bg-[#ECFDF5] dark:bg-emerald-950/30 text-left shadow-sm relative flex flex-col sm:flex-row items-center gap-3.5"
          >
            {/* Glowing Amber Node Dot on Top Edge */}
            <div className="w-3.5 h-3.5 rounded-full bg-[#FAB60A] ring-4 ring-[#FAB60A]/40 border-2 border-white dark:border-navy-900 absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-md z-20" />

            {/* Database Icon Box */}
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-[#2E936F]/20 via-[#2E936F]/15 to-[#2E936F]/5 border border-[#2E936F]/30 text-[#2E936F] flex items-center justify-center shrink-0 shadow-sm">
              <Database className="h-6 w-6 md:h-7 md:w-7" />
            </div>

            {/* Layer Details */}
            <div className="space-y-0.5 text-center sm:text-left">
              <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-[#2E936F] block">
                FOUNDATION LAYER
              </span>
              <h4 className="text-base md:text-lg lg:text-xl font-extrabold text-[#0d1b36] dark:text-white tracking-tight">
                Shared Evidence Base
              </h4>
              <p className="text-xs md:text-xs lg:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                All framework mappings anchor to the same underlying evidence records.
              </p>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM ACTION CTA BUTTON */}
        <div className="max-w-md md:max-w-lg mx-auto">
          <Link
            href="/frameworks"
            className="group w-full py-3 md:py-3.5 px-6 rounded-2xl bg-[#00513A] hover:bg-[#003D2B] text-white font-extrabold text-xs md:text-sm lg:text-base shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Framework Mapping</span>
            <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default FrameworkOrrery;
