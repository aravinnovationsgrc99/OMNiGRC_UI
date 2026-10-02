"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cloud,
  ShieldCheck,
  Server,
  ArrowRight,
  CheckCircle2,
  Lock,
  Globe,
  HardDrive,
} from "lucide-react";

export const DeploymentSection: React.FC = () => {
  const deploymentModels = [
    {
      step: "MODEL 01",
      badge: "CLOUD SPEED",
      speed: "Deploy in < 5 mins",
      title: "Shared Multi-Tenant SaaS",
      desc: "Fully managed cloud service with application-level tenant isolation, automated daily backups, and instant onboarding.",
      href: "/demo",
      icon: Cloud,
      features: [
        "Application-level tenant isolation",
        "Zero infrastructure maintenance burden",
        "Continuous automated compliance upgrades",
      ],
      border: "border-slate-200 dark:border-navy-700",
      accent: "text-[#F15E1C] dark:text-amber-400",
      badgeBg: "bg-[#F15E1C]/10 text-[#F15E1C] dark:text-amber-400",
    },
    {
      step: "MODEL 02",
      badge: "DEDICATED CONTROL",
      speed: "Configured in 24 hours",
      title: "Dedicated Private MSSP",
      desc: "Dedicated isolated tenant VPC with customer-managed encryption keys, dedicated storage, and partner administration.",
      href: "/solutions/mssp",
      icon: ShieldCheck,
      featured: true,
      features: [
        "Dedicated VPC & isolated compute",
        "Customer-managed KMS encryption keys",
        "Multi-client partner portfolio view",
      ],
      border: "border-[#2E936F] dark:border-teal-500/60",
      accent: "text-[#2E936F] dark:text-teal-400",
      badgeBg: "bg-[#2E936F] text-white",
    },
    {
      step: "MODEL 03",
      badge: "AIR-GAPPED SOVEREIGNTY",
      speed: "Full Custody",
      title: "Containerized & Air-Gapped",
      desc: "Run directly inside your AWS, Azure, GCP, or on-premises air-gapped infrastructure with complete data custody.",
      href: "/how-it-works",
      icon: HardDrive,
      features: [
        "Customer-controlled sovereign infrastructure",
        "Air-gapped capable zero-external-call mode",
        "Containerized Docker & Helm architecture",
      ],
      border: "border-slate-200 dark:border-navy-700",
      accent: "text-[#FAB60A] dark:text-amber-400",
      badgeBg: "bg-[#FAB60A]/20 text-navy-900 dark:text-amber-300",
    },
  ];

  return (
    <section className="relative w-full bg-slate-50/50 dark:bg-[#0A111F] px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-b border-slate-200/60 dark:border-navy-700/60 overflow-hidden transition-colors">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="w-full text-left space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight w-full">
            Deploy your way: <span className="text-[#2E936F]">cloud speed or air-gapped sovereignty.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed w-full max-w-4xl">
            From fast multi-tenant SaaS onboarding to fully isolated, regulator-grade infrastructure, pick the model that matches your compliance posture.
          </p>
        </div>

        {/* Visual Spectrum: ONE PRODUCT -> MULTIPLE DEPLOYMENT MODELS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {deploymentModels.map((model, idx) => {
            const Icon = model.icon;
            return (
              <motion.div
                key={model.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative flex flex-col"
              >
                <Link
                  href={model.href}
                  className={`h-full p-6 sm:p-8 rounded-3xl border bg-white dark:bg-navy-900/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${model.border} ${
                    model.featured ? "ring-2 ring-[#2E936F]/30" : ""
                  }`}
                >
                  <div className="space-y-5">
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-extrabold text-slate-400 uppercase tracking-wider">
                        {model.step}
                      </span>
                      <span className={`text-xs font-mono px-2.5 py-1 rounded-full font-bold ${model.badgeBg}`}>
                        {model.badge}
                      </span>
                    </div>

                    {/* Model Title & Icon */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white tracking-tight group-hover:text-[#2E936F] transition-colors">
                          {model.title}
                        </h3>
                        <p className="text-xs font-mono text-slate-400 mt-0.5 font-bold">{model.speed}</p>
                      </div>
                      <div className={`p-3 rounded-2xl bg-slate-100 dark:bg-navy-800 ${model.accent} shrink-0`}>
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                      {model.desc}
                    </p>

                    {/* Characteristics */}
                    <ul className="space-y-3 pt-2 border-t border-slate-100 dark:border-navy-800">
                      {model.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-200 font-medium">
                          <CheckCircle2 className={`h-4.5 w-4.5 shrink-0 mt-0.5 ${model.accent}`} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 flex items-center justify-between text-xs sm:text-sm font-mono font-bold text-[#2E936F] dark:text-teal-400 group-hover:translate-x-1 transition-transform">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Data Residency Note */}
        <div className="p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-navy-700 bg-white/80 dark:bg-navy-900/80 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-teal/10 text-teal shrink-0">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <span className="font-bold text-navy-900 dark:text-white">Regional Residency &amp; Sovereign Data Boundary:</span>
              <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                Isolated tenant storage available in India &amp; UK cloud regions at launch, with EU &amp; Australia roadmap support.
              </p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-md bg-amber/15 text-navy-900 dark:text-amber font-mono font-bold text-[10px] uppercase shrink-0">
            Regulator Grade
          </span>
        </div>
      </div>
    </section>
  );
};

export default DeploymentSection;
