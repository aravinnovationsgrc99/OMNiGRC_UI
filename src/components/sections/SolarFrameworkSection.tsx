"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Compass } from "lucide-react";

const FrameworkOrrery = dynamic(
  () => import("@/components/3d/FrameworkOrrery").then((m) => m.FrameworkOrrery),
  { ssr: false }
);

export const SolarFrameworkSection: React.FC = () => {
  return (
    <section
      id="solar-framework"
      className="relative w-full bg-gradient-to-b from-[#FFFDF9] via-[#FFF6ED] to-[#FFFDF9] dark:from-[#070D19] dark:via-[#0F1B34] dark:to-[#070D19] py-6 sm:py-8 border-t border-b border-slate-200 dark:border-navy-800 overflow-hidden transition-colors duration-300"
    >
      {/* Subtle Warm Radial Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[600px] bg-radial from-[#2E936F]/15 via-[#F15E1C]/10 to-transparent blur-3xl opacity-80 rounded-full"
      />

      <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* Full-Width Aligned Section Header */}
        <div className="w-full text-left space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#F15E1C]/30 bg-[#FFF0E5] dark:bg-[#1A2642] text-[#F15E1C] dark:text-[#FF7A3D] text-xs font-mono font-extrabold uppercase tracking-wider shadow-sm">
            <Compass className="h-4 w-4 text-[#F15E1C] dark:text-[#FF7A3D] shrink-0" />
            <span>FRAMEWORK TAXONOMIES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight w-full">
            Map once. <span className="text-[#2E936F] dark:text-[#36B386]">Satisfy six global standards.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed w-full max-w-3xl">
            Interactive control crosswalk engine aligning controls across ISO 27001, SOC 2, GDPR, HIPAA, DPDP, and ISO 42001.
          </p>
        </div>

        {/* Two-Column Framework Detail Component */}
        <div className="w-full">
          <FrameworkOrrery title="FRAMEWORK TAXONOMIES" />
        </div>
      </div>
    </section>
  );
};

export default SolarFrameworkSection;
