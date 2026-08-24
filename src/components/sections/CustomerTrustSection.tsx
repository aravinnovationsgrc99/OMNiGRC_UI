"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Layers, Cpu, Globe, Server, Shield, Database, Lock, Zap } from "lucide-react";

const customerLogos = [
  { name: "RipplePay", icon: Zap },
  { name: "CloudVault", icon: Server },
  { name: "SaaSify", icon: Layers },
  { name: "NexusAI", icon: Cpu },
  { name: "FinFlow", icon: Database },
  { name: "HealthCore", icon: Shield },
  { name: "CyberShield", icon: Lock },
  { name: "GlobalData", icon: Globe },
  { name: "Acme Enterprise", icon: Building2 },
  { name: "TechStack", icon: Cpu },
  { name: "ApexPay", icon: Zap },
  { name: "OmniCloud", icon: Server },
];

export const CustomerTrustSection: React.FC = () => {
  return (
    <section className="relative border-y border-slate-800/60 bg-[#0B0F17] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold uppercase tracking-widest text-slate-400 font-mono"
        >
          Trusted by 3,000+ companies from Series A to enterprise worldwide
        </motion.p>
      </div>

      {/* Infinite Logo Marquee */}
      <div className="relative w-full flex overflow-x-hidden no-scrollbar py-4 group">
        {/* Edge Gradient Overlays */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-32 bg-gradient-to-r from-[#0B0F17] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-32 bg-gradient-to-l from-[#0B0F17] to-transparent" />

        <div className="flex animate-marquee group-hover:[animation-play-state:paused] space-x-12 shrink-0 items-center">
          {customerLogos.concat(customerLogos).map((company, idx) => {
            const Icon = company.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-3 rounded-xl border border-slate-800/80 bg-slate-900/40 text-slate-300 transition-all duration-300 hover:border-brand-cyan/40 hover:bg-slate-800/80 hover:text-white hover:scale-108 hover:shadow-lg hover:shadow-brand-teal/10 cursor-pointer"
              >
                <Icon className="h-5 w-5 text-brand-cyan" />
                <span className="font-bold text-sm tracking-wide">{company.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
