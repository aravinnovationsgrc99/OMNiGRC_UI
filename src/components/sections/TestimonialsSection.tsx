"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Layers, ArrowRight, ShieldCheck, CheckCircle2, Clock } from "lucide-react";

const operationalScenarios = [
  {
    title: "Scenario 01: Expanding from ISO 27001 to SOC 2 and DPDP",
    context: "A lean SaaS security team needs to satisfy international customer requirements without doubling their compliance overhead.",
    workflow: "The team defines their access control policy once. OMNiGRC's advisory AI suggests relevant clauses across ISO 27001 (A.9.2), SOC 2 (CC6.1), and DPDP (Sec 8(5)). The GRC Lead approves the suggestions, and one policy satisfies three audits seamlessly.",
    outcome: "Zero duplicate control creation • Centralized policy evidence",
    tag: "Multi-Framework Mapping",
  },
  {
    title: "Scenario 02: Linking High-Impact Cloud Assets Directly to Risk",
    context: "Engineering introduces a new production PostgreSQL database holding customer PII data.",
    workflow: "The asset is cataloged in OMNiGRC's inventory. The team tags it as 'PII Data Flow', linking it immediately to RSK-019 (Data Breach Risk) and protective controls CTRL-088 (KMS Encryption) and CTRL-012 (Automated Daily Backups).",
    outcome: "Immediate risk visibility • Traceable control coverage",
    tag: "Asset-Risk Context",
  },
  {
    title: "Scenario 03: Replacing Pre-Audit Scrambles with a 30/60/90-Day Cadence",
    context: "Security leads are tired of spending four weeks frantically gathering screenshots before an annual audit.",
    workflow: "Control owners are assigned testing cadences on the Compliance Testing Board. When a quarterly user access review is due, the owner verifies the evidence in OMNiGRC. Audit history is immutably logged.",
    outcome: "Rolling audit readiness • Clear owner accountability",
    tag: "Testing Cadence",
  },
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + operationalScenarios.length) % operationalScenarios.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % operationalScenarios.length);
  };

  const scenario = operationalScenarios[currentIndex];

  return (
    <section className="relative bg-slate-50 dark:bg-[#0A111F] py-10 sm:py-24 border-t border-slate-200 dark:border-navy-700/60 overflow-hidden transition-colors duration-200">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-amber mb-3 font-semibold">
            PRACTICAL GRC OPERATIONS
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight">
            How lean teams operate in practice.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg mt-3">
            Real-world workflows demonstrating how OMNiGRC removes friction from everyday compliance, asset, and risk management.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl 2xl:max-w-5xl mx-auto relative min-h-[320px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="rounded-3xl border border-teal/40 bg-white dark:bg-navy-900/90 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl relative"
            >
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-navy-700/60 pb-4 mb-6">
                <span className="text-xs font-mono text-amber font-bold uppercase">
                  {scenario.tag}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Scenario 0{currentIndex + 1} of 0{operationalScenarios.length}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-navy-900 dark:text-white mb-3">
                {scenario.title}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0A111F]/80 border border-slate-200 dark:border-navy-700/60">
                  <p className="font-mono text-[11px] text-amber font-bold uppercase mb-1">
                    Operational Challenge:
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{scenario.context}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0A111F]/80 border border-teal/30">
                  <p className="font-mono text-[11px] text-amber font-bold uppercase mb-1">
                    Connected OMNiGRC Workflow:
                  </p>
                  <p className="text-navy-900 dark:text-slate-200 leading-relaxed">{scenario.workflow}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-slate-200 dark:border-navy-700/60 pt-4 sm:pt-6 mt-6 gap-3">
                <div className="flex items-center gap-2 text-xs font-mono text-teal">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span className="font-bold">{scenario.outcome}</span>
                </div>

                <span className="text-[11px] font-mono text-slate-400">
                  Documented OMNiGRC Pattern
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls & Dots */}
          <div className="flex items-center justify-between mt-6 sm:mt-8 px-2 sm:px-4">
            <div className="flex items-center space-x-2">
              {operationalScenarios.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "w-8 bg-teal" : "w-2.5 bg-navy-700 hover:bg-navy-600"
                  }`}
                  aria-label={`Go to scenario ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrev}
                className="p-2.5 sm:p-3 rounded-full border border-slate-200 dark:border-navy-700/60 bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-300 hover:border-teal hover:bg-slate-50 dark:hover:bg-navy-800 hover:text-teal transition-all shadow-md active:scale-95"
                aria-label="Previous scenario"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 sm:p-3 rounded-full border border-slate-200 dark:border-navy-700/60 bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-300 hover:border-teal hover:bg-slate-50 dark:hover:bg-navy-800 hover:text-teal transition-all shadow-md active:scale-95"
                aria-label="Next scenario"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
