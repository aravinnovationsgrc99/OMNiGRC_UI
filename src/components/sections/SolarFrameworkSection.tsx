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
      className="relative w-full bg-gradient-to-b from-[#FFFDF9] via-[#F7D7B0]/25 to-[#FFFDF9] dark:bg-navy-950 py-5 sm:py-7 md:py-8 border-t border-b border-slate-200 dark:border-navy-800 overflow-hidden text-navy-900 dark:text-white transition-colors duration-300"
    >
      {/* Subtle Warm Radial Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[600px] bg-radial from-[#2E936F]/10 via-[#F15E1C]/08 to-transparent blur-3xl opacity-70 rounded-full"
      />

      <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* Full-Width Aligned Section Header */}
        <div className="w-full text-left space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#2E936F]/30 bg-[#E6F4EF] dark:bg-navy-800 text-[#F15E1C] text-xs font-mono font-bold uppercase tracking-wider">
            <Compass className="h-3.5 w-3.5 text-[#F15E1C] shrink-0" />
            <span>SOLAR FRAMEWORK ORRERY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight w-full">
            Map once. <span className="text-[#2E936F]">Satisfy six global standards.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed w-full max-w-4xl">
            Interactive control crosswalk engine. As the globe rotates from left to right, watch each framework&apos;s mapped clause taxonomies and operational workflow appear.
          </p>
        </div>

        {/* Two-Column Orrery & Synced Framework Detail Component */}
        <div className="w-full">
          <FrameworkOrrery title="FRAMEWORK ORRERY" />
        </div>
      </div>
    </section>
  );
};

export default SolarFrameworkSection;
