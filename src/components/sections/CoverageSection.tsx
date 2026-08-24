"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, ArrowRight, Layers, CheckCircle, Server, Cloud, Cpu, Globe, Key, Lock, GitBranch } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const integrationsList = [
  { name: "AWS", category: "Cloud Infrastructure", icon: Cloud },
  { name: "Google Cloud", category: "Cloud Infrastructure", icon: Cloud },
  { name: "Microsoft Azure", category: "Cloud Infrastructure", icon: Cloud },
  { name: "GitHub", category: "Version Control", icon: GitBranch },
  { name: "GitLab", category: "Version Control", icon: GitBranch },
  { name: "Okta", category: "Identity & SSO", icon: Key },
  { name: "Google Workspace", category: "Identity & Productivity", icon: Globe },
  { name: "Microsoft Entra ID", category: "Identity & Access", icon: Lock },
  { name: "Jira Software", category: "Ticketing & Tasks", icon: Layers },
  { name: "Slack", category: "Alerts & Messaging", icon: Globe },
  { name: "BambooHR", category: "People & HR", icon: Server },
  { name: "Rippling", category: "People & HR", icon: Server },
  { name: "Datadog", category: "Monitoring & Logs", icon: Cpu },
  { name: "Cloudflare", category: "Edge & WAF", icon: Shield },
  { name: "Jamf Pro", category: "MDM & Endpoint", icon: Cpu },
  { name: "Kandji", category: "MDM & Endpoint", icon: Cpu },
];

export const CoverageSection: React.FC = () => {
  return (
    <section className="relative bg-[#0F172A] py-16 sm:py-24 border-t border-slate-800 overflow-hidden">
      <div className="w-full max-w-7xl 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* PART A: FRAMEWORKS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-yellow font-semibold">
              COMPLIANCE STANDARDS & CUSTOM FRAMEWORKS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              200+ Frameworks. And Counting.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              SOC 2, ISO 27001, HIPAA, GDPR, PCI DSS, DPDP, and 200+ global standards. Upload any custom contract, SLA, or custom security framework — OMNiGRC translates it into mapped controls automatically.
            </p>
            <div>
              <Link
                href="/frameworks/soc-2"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-white transition-colors group"
              >
                <span className="border-b border-brand-orange/50 group-hover:border-white pb-0.5">
                  Explore 200+ Frameworks Catalog
                </span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <TiltCard className="p-6 sm:p-8 border-brand-orange/30 bg-slate-900/80">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {[
                  { name: "SOC 2 Type II", desc: "Automated Control Mapping", active: true },
                  { name: "ISO 27001:2022", desc: "ISMS Management", active: true },
                  { name: "HIPAA Security", desc: "ePHI Data Protection", active: true },
                  { name: "GDPR Privacy", desc: "Data Controller Rules", active: true },
                  { name: "PCI DSS v4.0", desc: "Cardholder Security", active: true },
                  { name: "DPDP Act 2023", desc: "Indian Privacy Law", active: true },
                  { name: "ISO 42001 AI", desc: "AI Assurance Standard", active: true },
                  { name: "NIST CSF 2.0", desc: "Cybersecurity Controls", active: true },
                  { name: "Custom Framework", desc: "AI Contract Translator", active: true },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-xl border border-slate-800 bg-slate-950/80 hover:border-brand-orange/50 hover:bg-slate-900 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Shield className="h-4 w-4 text-brand-orange group-hover:scale-110 transition-transform" />
                      <CheckCircle className="h-3.5 w-3.5 text-brand-green" />
                    </div>
                    <p className="font-bold text-xs text-white">{item.name}</p>
                    <p className="text-[10px] text-slate-400 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </TiltCard>
          </div>
        </div>

        {/* PART B: INTEGRATIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 lg:order-1">
            <TiltCard className="p-6 sm:p-8 border-brand-orange/30 bg-slate-900/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 2xl:grid-cols-4 gap-3">
                {integrationsList.map((app, idx) => {
                  const Icon = app.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="p-3 sm:p-3.5 rounded-xl border border-slate-800 bg-slate-950/70 hover:border-brand-orange/60 hover:bg-slate-900 transition-all flex flex-col items-center text-center cursor-pointer"
                    >
                      <div className="p-2 rounded-lg bg-slate-900 text-brand-green mb-2">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <p className="font-bold text-xs text-white">{app.name}</p>
                      <p className="text-[9px] text-slate-400 mt-0.5 truncate max-w-full">{app.category}</p>
                    </motion.div>
                  );
                })}
              </div>
            </TiltCard>
          </div>

          <div className="lg:col-span-5 lg:order-2 space-y-4 sm:space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-yellow font-semibold">
              300+ NATIVE INTEGRATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Connect everything. Detect changes instantly.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              Native API connections across your cloud infrastructure, identity providers, HR systems, and code repositories. Changes are detected the moment they happen, with zero manual screenshotting.
            </p>
            <div>
              <Link
                href="/trust-vault"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-white transition-colors group"
              >
                <span className="border-b border-brand-orange/50 group-hover:border-white pb-0.5">
                  View All 300+ Native Integrations
                </span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
