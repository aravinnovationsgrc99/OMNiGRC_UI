"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layers, Cpu, Eye, ArrowDown, CheckCircle2 } from "lucide-react";

export const ArchitectureSection: React.FC = () => {
  const [activeTier, setActiveTier] = useState<number | null>(null);

  const tiers = [
    {
      id: 1,
      name: "OBLIGATIONS LAYER",
      title: "1. Real-time Unified Obligations",
      desc: "Automatically aggregates requirements across 200+ frameworks, custom customer security addendums, and internal policies into a single active registry.",
      icon: Layers,
      items: ["SOC 2 & ISO 27001", "HIPAA & GDPR", "ISO 42001 AI Standards", "Customer Security SLAs"],
      borderColor: "border-brand-orange",
      badgeColor: "text-brand-orange bg-brand-orange/10",
    },
    {
      id: 2,
      name: "OPERATIONS LAYER",
      title: "2. Continuous Autonomous Operations",
      desc: "Connects 300+ native integrations across Cloud, HR, Identity, Code, and MDM. Runs 24/7 evidence collection, gap detection, and automated mitigation.",
      icon: Cpu,
      items: ["300+ Cloud Integrations", "Autonomous Evidence Sync", "Vendor Risk Engine (TPRM)", "Doctor OMNi MDM Agent"],
      borderColor: "border-brand-green",
      badgeColor: "text-brand-green bg-brand-green/10",
    },
    {
      id: 3,
      name: "TRANSPARENCY LAYER",
      title: "3. Universal Stakeholder Transparency",
      desc: "Delivers live, verifiable proof of posture to customers, auditors, board members, and prospects without manual report exports or screenshot chaos.",
      icon: Eye,
      items: ["Live Public Trust Center", "Auditor Express Portal", "Board Risk Scorecard", "AI Questionnaire Filler"],
      borderColor: "border-brand-gold",
      badgeColor: "text-brand-gold bg-brand-gold/10",
    },
  ];

  return (
    <section className="relative bg-[#0B0F17] py-16 sm:py-24 border-t border-slate-800 overflow-hidden">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-mono uppercase tracking-widest text-brand-yellow mb-3 font-semibold"
          >
            ARCHITECTURE OF AUTONOMOUS TRUST
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            OMNiGRC: The Autonomous Trust Platform
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-sm sm:text-base lg:text-lg"
          >
            Real time unified obligations, autonomous operations that execute continuously, and universal transparency across all stakeholders.
          </motion.p>
        </div>

        {/* 3-Tier Architecture Graphic */}
        <div className="max-w-4xl 2xl:max-w-5xl mx-auto space-y-4 sm:space-y-6">
          {tiers.map((tier, idx) => {
            const Icon = tier.icon;
            const isHovered = activeTier === tier.id;

            return (
              <React.Fragment key={tier.id}>
                <motion.div
                  onMouseEnter={() => setActiveTier(tier.id)}
                  onMouseLeave={() => setActiveTier(null)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative rounded-2xl border ${tier.borderColor}/40 bg-slate-900/80 p-6 sm:p-8 shadow-xl backdrop-blur-md transition-all duration-300 ${
                    isHovered ? "scale-[1.02] border-brand-orange shadow-2xl shadow-brand-orange/20" : ""
                  }`}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex items-start gap-4 max-w-xl">
                      <div className="p-3 rounded-xl bg-slate-800 text-brand-orange shrink-0 mt-1">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded ${tier.badgeColor}`}>
                          {tier.name}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 mt-1">{tier.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{tier.desc}</p>
                      </div>
                    </div>

                    <div className="w-full md:w-auto grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {tier.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-200 font-medium"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-brand-green shrink-0" />
                          <span className="whitespace-nowrap">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Connector Arrow between tiers */}
                {idx < tiers.length - 1 && (
                  <div className="flex justify-center my-1 sm:my-2">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-brand-orange">
                      <ArrowDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 animate-bounce" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
