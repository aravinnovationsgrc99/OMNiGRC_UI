"use client";

import React from "react";
import { Globe, MapPin } from "lucide-react";

export const CoverageSection: React.FC = () => {
  return (
    <section className="relative bg-white dark:bg-[#16233F] py-2.5 sm:py-4 border-t border-slate-200/60 dark:border-navy-700/60 overflow-hidden transition-colors duration-200">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Regional Awareness & Hosting Section */}
        <div className="rounded-3xl border border-slate-300 dark:border-navy-700/60 bg-white dark:bg-[#0A111F]/90 p-3.5 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8 items-center">
            <div className="md:col-span-5 space-y-1 sm:space-y-2 flex flex-col items-start text-left">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#D4521A] dark:text-amber font-bold flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-teal" /> REGIONAL HOSTING AWARENESS
              </span>
              <h3 className="text-xl min-[380px]:text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-snug text-left w-full mt-0.5 sm:mt-1">
                <span className="block sm:inline">Designed for Regional </span>
                <span className="block sm:inline">Data Residency.</span>
              </h3>
              <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-left">
                Isolated tenant hosting live in India and the United Kingdom, with EU and Australia on the roadmap.
              </p>
            </div>

            <div className="md:col-span-7 flex flex-col gap-2.5 sm:gap-4">
              {/* Card 1: Live (India & UK) */}
              <div className="p-3.5 sm:p-5 rounded-2xl bg-white dark:bg-navy-900 border border-[#2E936F]/25 dark:border-[#2E936F]/40 shadow-sm hover:shadow-md transition-all space-y-2 sm:space-y-2.5">
                <div className="flex items-center justify-between gap-2.5 sm:gap-3 w-full">
                  <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 flex-1">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#E6F4EF] dark:bg-[#2E936F]/20 flex items-center justify-center shrink-0">
                      <MapPin className="h-4.5 w-4.5 sm:h-5.5 sm:w-5.5 text-[#2E936F]" />
                    </div>
                    <h4 className="text-sm sm:text-base lg:text-lg font-extrabold text-navy-900 dark:text-white tracking-tight leading-snug min-w-0 text-left">
                      India &amp; United Kingdom
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#E6F4EF] dark:bg-[#2E936F]/20 text-[#2E936F] text-[11px] sm:text-xs font-mono font-bold shrink-0 border border-[#2E936F]/30 shadow-sm">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#2E936F]" />
                    Live
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed text-left">
                  Tenant hosting live for Indian DPDP compliance and UK GDPR requirements.
                </p>
              </div>

              {/* Card 2: Q1 2027 (EU & Australia) */}
              <div className="p-3.5 sm:p-5 rounded-2xl bg-white dark:bg-navy-900 border border-[#F7D7B0] dark:border-[#F15E1C]/30 shadow-sm hover:shadow-md transition-all space-y-2 sm:space-y-2.5">
                <div className="flex items-center justify-between gap-2.5 sm:gap-3 w-full">
                  <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 flex-1">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#FFF0E5] dark:bg-[#F15E1C]/20 flex items-center justify-center shrink-0">
                      <MapPin className="h-4.5 w-4.5 sm:h-5.5 sm:w-5.5 text-[#F15E1C]" />
                    </div>
                    <h4 className="text-sm sm:text-base lg:text-lg font-extrabold text-navy-900 dark:text-white tracking-tight leading-snug min-w-0 text-left">
                      European Union &amp; Australia
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#FFF3E6] dark:bg-[#F15E1C]/20 text-[#F15E1C] text-[11px] sm:text-xs font-mono font-bold shrink-0 border border-[#F15E1C]/30 shadow-sm">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#F15E1C]" />
                    Q1 2027
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed text-left">
                  Planned points of presence for EU Data Boundary and Australian data sovereignty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
