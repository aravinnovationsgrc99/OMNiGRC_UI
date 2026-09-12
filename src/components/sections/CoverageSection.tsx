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
import { FRAMEWORKS, Framework } from "@/lib/frameworks";

export const CoverageSection: React.FC = () => {
  const [selectedFw, setSelectedFw] = useState<Framework>(FRAMEWORKS[0]);

  return (
    <section className="relative bg-[#16233F] py-16 sm:py-24 border-t border-navy-700/60 overflow-hidden">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-amber font-semibold inline-block mb-3">
            DOCUMENTED FRAMEWORK COVERAGE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Six frameworks supported natively out of the box.
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            One primary control definition maps seamlessly into {FRAMEWORKS.map((f) => f.code).join(", ")} requirements.
          </p>
        </div>

        {/* Framework Selector & Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Framework List */}
          <div className="lg:col-span-5 space-y-3">
            {FRAMEWORKS.map((fw) => {
              const isSelected = selectedFw.code === fw.code;
              return (
                <button
                  key={fw.code}
                  onClick={() => setSelectedFw(fw)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-center justify-between group ${
                    isSelected
                      ? "bg-navy-800/90 border-teal/70 shadow-lg shadow-teal/10"
                      : "bg-navy-900/50 border-navy-700/60 hover:border-slate-600 hover:bg-navy-800/40"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white group-hover:text-teal transition-colors">
                        {fw.name}
                      </span>
                      <span className="text-[10px] font-mono text-teal-300 bg-teal/15 px-2 py-0.5 rounded font-semibold">
                        {fw.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-mono">{fw.region}</p>
                  </div>
                  <ArrowRight
                    className={`h-4 w-4 transition-transform ${
                      isSelected ? "text-teal translate-x-1" : "text-slate-600 group-hover:text-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Framework Details */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFw.code}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="p-6 sm:p-8 rounded-3xl bg-navy-900/90 border border-teal/30 space-y-6 shadow-xl"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-navy-700/60 pb-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {selectedFw.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-400">{selectedFw.region}</p>
                  </div>
                  <Link
                    href={`/frameworks/${selectedFw.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-teal-300 hover:underline bg-teal/10 px-3 py-1.5 rounded-lg border border-teal/30"
                  >
                    View Workflow Map <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                <p className="text-sm text-slate-200 leading-relaxed">
                  {selectedFw.desc}
                </p>

                <div className="space-y-3">
                  <span className="text-xs font-mono text-slate-400 font-semibold uppercase block">
                    Core Control Domains Tracked:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedFw.controlDomains.map((domain, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-3 rounded-xl bg-navy-800/70 border border-navy-700/50 text-xs text-slate-200"
                      >
                        <CheckCircle className="h-4 w-4 text-teal shrink-0" />
                        <span>{domain}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-teal/10 border border-teal/30 space-y-1">
                  <span className="font-mono text-amber font-bold uppercase block mb-1 text-xs">
                    Connected OMNiGRC Workflow:
                  </span>
                  <p className="leading-relaxed text-slate-300 text-xs">{selectedFw.omniWorkflow}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Regional Awareness & Hosting Section */}
        <div className="rounded-3xl border border-navy-700/60 bg-[#0A111F]/90 p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-amber font-semibold flex items-center gap-1.5">
                <Globe className="h-4 w-4 text-teal" /> REGIONAL HOSTING AWARENESS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Designed for regional data residency.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                GRC teams operate in specific legal jurisdictions. OMNiGRC&apos;s deployment architecture supports isolated tenant storage with initial MVP hosting live in India and the United Kingdom, followed by EU and Australia on the post-launch roadmap.
              </p>
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-navy-900/80 border border-teal/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-teal" /> India &amp; United Kingdom
                  </span>
                  <span className="text-[10px] font-mono text-teal-300 bg-teal/15 px-2 py-0.5 rounded font-bold">
                    Live at MVP
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  Dedicated regional tenant hosting currently live for Indian DPDP compliance and UK GDPR requirements.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-navy-900/80 border border-navy-700/60 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-amber" /> European Union &amp; Australia
                  </span>
                  <span className="text-[10px] font-mono text-amber bg-amber/15 px-2 py-0.5 rounded font-medium">
                    Roadmap (Post-Launch)
                  </span>
                </div>
                <p className="text-xs text-slate-400">
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
