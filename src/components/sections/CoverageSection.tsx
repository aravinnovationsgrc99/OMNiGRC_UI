"use client";

import React from "react";
import { Globe, MapPin } from "lucide-react";

export const CoverageSection: React.FC = () => {
  return (
    <section className="relative bg-white dark:bg-[#16233F] pt-4 sm:pt-6 pb-8 sm:pb-12 border-t border-slate-200 dark:border-navy-700/60 overflow-hidden transition-colors duration-200">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
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
                Isolated tenant hosting live in India and the United Kingdom, with EU and Australia on the roadmap.
              </p>
            </div>

            <div className="md:col-span-7 flex flex-col gap-4">
              {/* Card 1: Live (India & UK) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-navy-900 border border-[#2E936F]/25 dark:border-[#2E936F]/40 shadow-sm hover:shadow-md transition-all space-y-3">
                <div className="flex items-start justify-between gap-3 w-full">
                  <div className="flex items-start gap-3.5 min-w-0 flex-1">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#E6F4EF] dark:bg-[#2E936F]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-[#2E936F]" />
                    </div>
                    <h4 className="text-base sm:text-lg lg:text-xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-snug min-w-0">
                      India &amp; United Kingdom
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F4EF] dark:bg-[#2E936F]/20 text-[#2E936F] text-xs font-mono font-bold shrink-0 border border-[#2E936F]/30 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#2E936F]" />
                    Live
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed pt-1">
                  Tenant hosting live for Indian DPDP compliance and UK GDPR requirements.
                </p>
              </div>

              {/* Card 2: Q1 2027 (EU & Australia) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-navy-900 border border-[#F7D7B0] dark:border-[#F15E1C]/30 shadow-sm hover:shadow-md transition-all space-y-3">
                <div className="flex items-start justify-between gap-3 w-full">
                  <div className="flex items-start gap-3.5 min-w-0 flex-1">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FFF0E5] dark:bg-[#F15E1C]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-[#F15E1C]" />
                    </div>
                    <h4 className="text-base sm:text-lg lg:text-xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-snug min-w-0">
                      European Union <br /> &amp; Australia
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF3E6] dark:bg-[#F15E1C]/20 text-[#F15E1C] text-xs font-mono font-bold shrink-0 border border-[#F15E1C]/30 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#F15E1C]" />
                    Q1 2027
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed pt-1">
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
