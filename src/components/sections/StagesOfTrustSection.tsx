"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Activity } from "lucide-react";
import { FloatingDepthCard } from "@/components/3d/FloatingDepthCard";

const stages = [
  {
    stage: "STAGE 01 — STARTUPS",
    heading: "Your first compliance operator.",
    description:
      "No one owns compliance at your startup. That's fine – until it isn't. OMNiGRC steps in as your compliance team: scopes your SOC 2, ISO 27001, or HIPAA program, connects to your systems, closes the gaps, and gets you to audit readiness without hiring expensive consultants.",
    ctaText: "Explore Startup Automation",
    ctaLink: "/solutions/startups",
    imageLeft: false,
    mockupTitle: "Autonomous SOC 2 Scope Engine",
    mockupItems: [
      { label: "AWS & GCP Infrastructure", status: "100% Monitored", pass: true },
      { label: "Identity & MFA Policies", status: "Auto-Verified", pass: true },
      { label: "Code Repository Security", status: "Zero Gaps", pass: true },
      { label: "Employee Onboarding Checks", status: "Enforced", pass: true },
    ],
  },
  {
    stage: "STAGE 02 — MID-MARKET",
    heading: "Trust ops on autopilot.",
    description:
      "As you scale into mid-market, compliance becomes a continuous daily burden. OMNiGRC continuous telemetry monitors 300+ integrations, automatically collects audit-grade evidence 24/7, and mitigates posture risks before auditors or prospects ever flag them.",
    ctaText: "Explore Mid-Market Solutions",
    ctaLink: "/solutions/mid-market",
    imageLeft: true,
    mockupTitle: "Continuous Compliance Dashboard",
    mockupItems: [
      { label: "Vulnerability Scan Telemetry", status: "Real-time", pass: true },
      { label: "Autonomous Evidence Collector", status: "Sync Active", pass: true },
      { label: "Policy Exception Registry", status: "0 Unapproved", pass: true },
      { label: "Vendor Risk Scorecards", status: "48 Checked", pass: true },
    ],
  },
  {
    stage: "STAGE 03 — ENTERPRISE",
    heading: "A defensible trust posture. Always.",
    description:
      "For enterprise security leads and CISOs who demand universal posture visibility across cloud environments, third-party vendor ecosystems, and AI governance. OMNiGRC provides real-time risk intelligence, autonomous TPRM, and zero audit surprises.",
    ctaText: "Explore Enterprise Trust",
    ctaLink: "/solutions/enterprise",
    imageLeft: false,
    mockupTitle: "Enterprise CISO Risk Command Center",
    mockupItems: [
      { label: "Multi-Cloud Governance", status: "Unified Posture", pass: true },
      { label: "Autonomous Vendor TPRM", status: "Continuous Risk", pass: true },
      { label: "AI Model Policy Registry", status: "ISO 42001 Guarded", pass: true },
      { label: "Board Trust Reporting", status: "Export Ready", pass: true },
    ],
  },
];

export const StagesOfTrustSection: React.FC = () => {
  return (
    <section className="relative bg-[#0B0F17] py-16 sm:py-24 overflow-hidden">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-widest text-brand-yellow mb-3 font-semibold"
          >
            BUILT FOR EVERY STAGE OF TRUST
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            From your first SOC 2 to enterprise continuous assurance.
          </motion.h2>
        </div>

        {/* Stage Cards */}
        <div className="space-y-12 sm:space-y-20">
          {stages.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <FloatingDepthCard className="p-6 sm:p-10 lg:p-12 border-brand-orange/30 bg-slate-900/70 hover:border-brand-orange/60">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center ${
                    card.imageLeft ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Column */}
                  <div
                    className={`lg:col-span-6 space-y-4 sm:space-y-6 ${
                      card.imageLeft ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <span className="inline-block px-3 py-1 rounded-full border border-brand-peach/40 bg-brand-peach/10 text-brand-peach text-xs font-mono font-semibold">
                      {card.stage}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                      {card.heading}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {card.description}
                    </p>
                    <div>
                      <Link
                        href={card.ctaLink}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-white transition-colors group"
                      >
                        <span className="border-b border-brand-orange/50 group-hover:border-white pb-0.5">
                          {card.ctaText}
                        </span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Mockup Display Column */}
                  <div
                    className={`lg:col-span-6 ${
                      card.imageLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-2xl border border-slate-700 bg-slate-950 p-5 sm:p-6 shadow-2xl relative overflow-hidden"
                    >
                      {/* Top bar header of mockup */}
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-red-500/80" />
                          <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                          <span className="ml-2 text-xs font-mono text-slate-400 truncate max-w-[150px] sm:max-w-none">
                            {card.mockupTitle}
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-[11px] text-brand-green font-mono shrink-0">
                          <Activity className="h-3.5 w-3.5 animate-pulse" /> Live Telemetry
                        </span>
                      </div>

                      {/* Mockup Checklist items */}
                      <div className="space-y-2.5 sm:space-y-3">
                        {card.mockupItems.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs"
                          >
                            <div className="flex items-center gap-2.5 truncate">
                              <CheckCircle className="h-4 w-4 text-brand-green shrink-0" />
                              <span className="text-slate-200 font-medium truncate">{item.label}</span>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-brand-green/15 text-brand-green font-mono font-semibold shrink-0 ml-2">
                              {item.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
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
