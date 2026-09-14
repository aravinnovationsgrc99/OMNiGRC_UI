"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import dynamic from "next/dynamic";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const FloatingDepthCard = dynamic(
  () => import("@/components/3d/FloatingDepthCard").then((m) => m.FloatingDepthCard),
  { ssr: false }
);

const AmbientGridBackground = dynamic(
  () => import("@/components/3d/AmbientGridBackground"),
  { ssr: false }
);

const stages = [
  {
    stage: "STAGE 01 — LEAN GRC TEAMS",
    heading: "From spreadsheet chaos to connected operations.",
    description:
      "When managing risk registers and control testing manually, work easily falls out of sync. OMNiGRC provides a unified operating layer to catalog assets, score risks, and map controls without hiring expensive consultants.",
    steps: ["1. Catalog Assets", "2. 5x5 Risk Scoring", "3. Map-Once Controls"],
    ctaText: "Explore Lean GRC Workflows",
    ctaLink: "/solutions/startups",
    imageLeft: false,
    mockupTitle: "Connected Operating System",
    mockupItems: [
      { label: "Asset & PII Data Flow Tracing", status: "Cataloged", pass: true },
      { label: "5x5 Likelihood x Impact Risk Scoring", status: "Evaluated", pass: true },
      { label: "Map-Once Framework Alignment", status: "AI Suggested", pass: true },
      { label: "Human Review & Decision State", status: "Approved", pass: true },
    ],
  },
  {
    stage: "STAGE 02 — EXPANDING OPERATIONS",
    heading: "Multi-framework compliance without duplicate controls.",
    description:
      "As customer demands expand into ISO 27001, SOC 2, and DPDP, managing separate checklists multiplies overhead. OMNiGRC allows you to map internal controls once and align them across multiple standards simultaneously.",
    steps: ["1. Select Standards", "2. AI Clause Alignment", "3. Rolling 30/60/90d Cadence"],
    ctaText: "Explore Multi-Framework Mapping",
    ctaLink: "/solutions/mid-market",
    imageLeft: true,
    mockupTitle: "Multi-Standard Alignment",
    mockupItems: [
      { label: "ISO 27001 Annex A Clauses", status: "Linked", pass: true },
      { label: "SOC 2 Common Criteria", status: "Mapped", pass: true },
      { label: "DPDP Section 8 Safeguards", status: "Aligned", pass: true },
      { label: "Rolling 30/60/90d Testing Cadence", status: "On Schedule", pass: true },
    ],
  },
];

export const StagesOfTrustSection: React.FC = () => {
  return (
    <section className="relative bg-slate-50 dark:bg-[#0A111F] py-10 sm:py-24 overflow-hidden border-t border-slate-200 dark:border-navy-700/60 transition-colors duration-200">
      {/* Ambient circle-scatter background — z-0, pointer-events-none */}
      <AmbientGridBackground />

      {/*
        Radial content mask — transparent at page margins so circles show in gutters,
        softens to the section bg behind the main content column.
        z-[1] so it sits above the canvas but strictly below all card/text content.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 60% 90% at 50% 50%, transparent 0%, transparent 35%, rgba(246,247,246,0.7) 65%, rgba(246,247,246,0.92) 100%)",
        }}
      />
      {/* Dark-mode version of the same mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] hidden dark:block"
        style={{
          background:
            "radial-gradient(ellipse 60% 90% at 50% 50%, transparent 0%, transparent 35%, rgba(10,17,31,0.7) 65%, rgba(10,17,31,0.92) 100%)",
        }}
      />

      {/* Content — z-10, above both canvas and mask */}
      <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-widest text-[#D4521A] dark:text-amber mb-3 font-semibold"
          >
            PRACTICAL GRC MATURITY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight"
          >
            Built for how security teams actually grow.
          </motion.h2>
        </div>

        <div className="space-y-8 sm:space-y-20">
          {stages.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              {/* FloatingDepthCard uses bg-cardWarm in light mode, navy in dark */}
              <FloatingDepthCard className="p-6 sm:p-10 lg:p-12 border-cardBorderWarm dark:border-teal/30 bg-cardWarm dark:bg-navy-900/70 hover:border-teal/60">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center ${
                    card.imageLeft ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`lg:col-span-6 space-y-4 sm:space-y-6 ${
                      card.imageLeft ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <span className="inline-block px-3 py-1 rounded-full border border-[#FAB60A]/40 bg-[#FAB60A]/20 text-navy-900 dark:border-amber/40 dark:bg-amber/10 dark:text-amber text-xs font-mono font-semibold">
                      {card.stage}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 dark:text-white tracking-tight">
                      {card.heading}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                      {card.description}
                    </p>

                    {/* Qualitative Workflow Step Chips */}
                    {card.steps && (
                      <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
                        {card.steps.map((step, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-3 py-1 rounded-xl bg-[#2E936F]/10 border border-[#2E936F]/30 text-[#2E936F] dark:bg-teal/10 dark:border-teal/30 dark:text-teal-300 font-semibold"
                          >
                            {step}
                          </span>
                        ))}
                      </div>
                    )}

                    <div>
                      <Link
                        href={card.ctaLink}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#2E936F] dark:text-teal hover:text-navy-900 dark:hover:text-white transition-colors group"
                      >
                        <span className="border-b border-teal/50 group-hover:border-teal pb-0.5">
                          {card.ctaText}
                        </span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  <div
                    className={`lg:col-span-6 ${
                      card.imageLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="rounded-2xl border border-slate-200 dark:border-navy-700/60 bg-white dark:bg-[#0A111F] p-5 sm:p-6 shadow-2xl relative overflow-hidden">
                      <div className="flex items-center justify-between border-b border-slate-200 dark:border-navy-700/60 pb-3 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="h-2.5 w-2.5 rounded-full bg-[#2E936F] dark:bg-teal" />
                          <div className="h-2.5 w-2.5 rounded-full bg-[#FAB60A] dark:bg-amber" />
                          <div className="h-2.5 w-2.5 rounded-full bg-teal-300" />
                          <span className="ml-2 text-xs font-mono text-slate-400">
                            {card.mockupTitle}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#2E936F] dark:text-teal font-mono">
                          Live Posture
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        {card.mockupItems.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-slate-100 dark:bg-navy-900/90 border border-slate-200 dark:border-navy-700/60 text-xs"
                          >
                            <div className="flex items-center gap-2.5 truncate">
                              <CheckCircle2 className="h-4 w-4 text-teal shrink-0" />
                              <span className="text-navy-900 dark:text-slate-200 font-medium truncate">{item.label}</span>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-teal/15 text-teal font-mono font-semibold shrink-0 ml-2">
                              {item.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FloatingDepthCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
