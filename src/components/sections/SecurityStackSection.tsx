"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Server,
  Bug,
  Zap,
  FileCheck2,
  CalendarCheck,
  ArrowRight,
  Layers,
  CheckCircle2,
} from "lucide-react";

export const SecurityStackSection: React.FC = () => {
  const stackLayers = [
    {
      id: "vulnerability",
      num: "01",
      name: "Vulnerability Management",
      badge: "Asset Exposure",
      desc: "Ingest scanner CVE findings, map vulnerabilities directly to affected technical assets, and evaluate risk exposure.",
      href: "/products/vulnerabilities",
      icon: Bug,
      textColor: "text-[#F15E1C]",
      borderColor: "border-[#F15E1C]/30",
      bgColor: "bg-[#F15E1C]/10",
    },
    {
      id: "assets",
      num: "02",
      name: "Asset & Data Inventory",
      badge: "Infra & PII Context",
      desc: "Maintain unified visibility across cloud infrastructure, SaaS vendors, production databases, and DPDP data flows.",
      href: "/products/asset-inventory",
      icon: Server,
      textColor: "text-[#2E936F]",
      borderColor: "border-[#2E936F]/30",
      bgColor: "bg-[#2E936F]/10",
    },
    {
      id: "risk",
      num: "03",
      name: "Risk Management",
      badge: "5x5 Likelihood x Impact",
      desc: "Standardized risk matrix scoring mapped to technical assets and assigned SeCOps owners.",
      href: "/products/risk-register",
      icon: ShieldAlert,
      textColor: "text-[#F15E1C]",
      borderColor: "border-[#F15E1C]/30",
      bgColor: "bg-[#F15E1C]/10",
    },
    {
      id: "controls",
      num: "04",
      name: "Map-Once Controls",
      badge: "6 Framework Correlation",
      desc: "Define safeguards once; Advisory AI assists with cross-mapping across ISO 27001, SOC 2, HIPAA, and DPDP.",
      href: "/products/control-mapping",
      icon: Zap,
      textColor: "text-[#FAB60A] dark:text-amber-400",
      borderColor: "border-[#FAB60A]/30",
      bgColor: "bg-[#FAB60A]/10",
    },
    {
      id: "evidence",
      num: "05",
      name: "Defensible Evidence Vault",
      badge: "Proof Records & Links",
      desc: "Structured evidence tracking, automated collector logs, and external document reference links.",
      href: "/products/evidence",
      icon: FileCheck2,
      textColor: "text-[#2E936F]",
      borderColor: "border-[#2E936F]/30",
      bgColor: "bg-[#2E936F]/10",
    },
    {
      id: "audit",
      num: "06",
      name: "Continuous Audit Readiness",
      badge: "30/60/90-Day Cadence",
      desc: "Rolling task execution, SLA tracking, user timestamps, and exportable audit packages.",
      href: "/products/compliance-board",
      icon: CalendarCheck,
      textColor: "text-[#F15E1C]",
      borderColor: "border-[#F15E1C]/30",
      bgColor: "bg-[#F15E1C]/10",
    },
  ];

  return (
    <section className="relative w-full bg-transparent px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-b border-slate-200/60 dark:border-navy-700/60 overflow-hidden">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-[#2E936F]/10 blur-3xl"
      />

      <div className="max-w-5xl mx-auto space-y-5 sm:space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#2E936F]/40 bg-[#2E936F]/10 text-[#F15E1C] dark:text-amber text-xs font-mono tracking-wider uppercase font-semibold shadow-sm">
            <Layers className="h-3.5 w-3.5 text-[#2E936F]" />
            <span>COMPLETE GRC SUITE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight">
            Not just risk and controls. <br />
            <span className="text-[#2E936F] dark:text-teal-400">The full security stack.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
            Modular capabilities that scale with your team — vulnerability management, asset inventory, evidence, and audit-readiness, without enterprise lock-in or endless professional services hours.
          </p>
        </div>

        {/* Connected Visual Security Stack (Vertical Stack with Connecting Rail) */}
        <div className="max-w-3xl lg:max-w-4xl mx-auto space-y-3.5 sm:space-y-4">
          {stackLayers.map((layer, idx) => {
            const Icon = layer.icon;
            return (
              <React.Fragment key={layer.id}>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                >
                  <Link
                    href={layer.href}
                    className="group relative flex flex-row items-center justify-between gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-navy-700/80 bg-white/95 dark:bg-navy-900/95 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-md"
                  >
                    {/* Left Icon Badge */}
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl border ${layer.borderColor} ${layer.bgColor} flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm`}
                    >
                      <Icon className={`h-8 w-8 sm:h-10 sm:w-10 ${layer.textColor}`} />
                    </div>

                    {/* Middle Details */}
                    <div className="flex-1 min-w-0 text-left space-y-1 sm:space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`font-mono text-xs sm:text-sm font-extrabold uppercase ${layer.textColor}`}>
                          LAYER {layer.num}
                        </span>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 font-bold">
                          {layer.badge}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white tracking-tight group-hover:text-[#2E936F] transition-colors">
                        {layer.name}
                      </h3>
                      <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        {layer.desc}
                      </p>
                    </div>

                    {/* Right Arrow CTA */}
                    <div className="w-9 h-9 sm:w-12 sm:h-12 shrink-0 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-200 group-hover:bg-[#2E936F] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                      <ArrowRight className="h-4 w-4 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>

                {/* Vertical Connector Line between layers */}
                {idx < stackLayers.length - 1 && (
                  <div className="flex flex-col items-center justify-center py-0.5">
                    <div className="w-0.5 h-4 sm:h-5 bg-gradient-to-b from-[#2E936F] to-[#F15E1C] opacity-40" />
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

export default SecurityStackSection;
