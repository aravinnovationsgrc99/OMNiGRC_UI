"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, ArrowRight, ShieldCheck, Cpu, Lock, Layers, Zap, CheckCircle2 } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { VideoModal } from "@/components/ui/VideoModal";

const pillars = [
  {
    id: "unified-commitments",
    title: "Unified Commitments",
    category: "OBLIGATIONS LAYER",
    description:
      "Map internal security policies, customer SLAs, and regulatory requirements (SOC 2, ISO, HIPAA, GDPR) into a single, unified source of truth. Changes in posture auto-update across all obligations instantly.",
    link: "/products/unified-commitments",
    videoTitle: "Unified Commitments Overview Demo",
    metrics: [
      { name: "Framework Overlap Mapping", value: "85% Saved" },
      { name: "Obligation Drift Alerting", value: "Instant" },
    ],
  },
  {
    id: "continuous-compliance",
    title: "Continuous Compliance",
    category: "OPERATIONS LAYER",
    description:
      "Replace annual fire drills with 24/7 automated monitoring. Arav'sGRC connects natively to your tech stack, collects audit-ready evidence continuously, and alerts you before exceptions become findings.",
    link: "/products/continuous-monitoring",
    videoTitle: "Continuous Assurance Telemetry Demo",
    metrics: [
      { name: "Automated Evidence Rate", value: "98.4%" },
      { name: "Audit Prep Reduction", value: "10x Faster" },
    ],
  },
  {
    id: "autonomous-tprm",
    title: "Autonomous TPRM",
    category: "VENDOR RISK",
    description:
      "Vendor security reviews shouldn't slow down procurement. Arav'sGRC autonomously extracts SOC reports, analyzes vendor security posture, flags risks, and keeps your vendor register continuously current.",
    link: "/products/autonomous-tprm",
    videoTitle: "Autonomous Third-Party Risk Management Demo",
    metrics: [
      { name: "Vendor Review Time", value: "Under 5 mins" },
      { name: "SOC Report AI Parsing", value: "100% Automated" },
    ],
  },
  {
    id: "ai-governance",
    title: "AI Governance",
    category: "AI ASSURANCE",
    description:
      "Maintain complete inventory of internal and customer-facing AI models. Enforce ISO 42001 and EU AI Act compliance, conduct automated AI impact assessments, and manage LLM data privacy risks.",
    link: "/products/ai-governance",
    videoTitle: "AI Model Registry & Governance Demo",
    metrics: [
      { name: "ISO 42001 Mapping", value: "Native" },
      { name: "Shadow AI Discovery", value: "Real-time" },
    ],
  },
];

export const UnifiedPlatformSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<{ title: string; open: boolean }>({
    title: "",
    open: false,
  });

  return (
    <section className="relative bg-[#0F172A] py-16 sm:py-24 border-t border-slate-800 overflow-hidden">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] sm:h-[700px] w-[90vw] max-w-[900px] rounded-full bg-brand-teal/10 blur-[100px] sm:blur-[140px]" />

      <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-brand-cyan mb-3 font-semibold">
            ONE UNIFIED AUTONOMOUS TRUST PLATFORM
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Four core engines. Zero manual effort.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg">
            Everything your security & GRC teams need to move from reactive compliance to proactive, continuous trust.
          </p>
        </div>

        {/* 4 Main Pillar Cards - Grid scales to 4-cols on 2xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {pillars.map((pillar) => (
            <TiltCard
              key={pillar.id}
              className="p-6 sm:p-8 border-brand-teal/30 bg-slate-900/80 hover:border-brand-cyan/60 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 gap-2">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-brand-cyan uppercase bg-brand-cyan/10 px-2.5 py-1 rounded-full truncate">
                    {pillar.category}
                  </span>
                  {/* Pulsing Play Button */}
                  <button
                    onClick={() => setSelectedVideo({ title: pillar.videoTitle, open: true })}
                    className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-brand-teal/20 text-brand-cyan border border-brand-teal/40 hover:bg-brand-teal/40 hover:scale-105 transition-all text-xs font-semibold group shrink-0"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
                    </span>
                    <Play className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-brand-cyan group-hover:scale-110 transition-transform" /> Watch Demo
                  </button>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3 p-3.5 sm:p-4 rounded-xl bg-slate-950/70 border border-slate-800 mb-6">
                  {pillar.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono truncate">{m.name}</p>
                      <p className="text-sm sm:text-base font-extrabold text-brand-cyan">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={pillar.link}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-cyan hover:text-white transition-colors group"
              >
                Learn more about {pillar.title}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </TiltCard>
          ))}
        </div>

        {/* Supporting Feature Cards: Risk Management & Trust Center */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <TiltCard className="p-6 sm:p-8 border-slate-800 bg-slate-900/60">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-brand-teal/20 text-brand-cyan shrink-0">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white">Risk Register & Scoring</h4>
                <p className="text-xs text-slate-400">Automated risk quantification & residual mapping</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mb-4">
              Log, evaluate, and track risks across your tech ecosystem. Automatically link risks to controls, continuous telemetry, and remediation owners.
            </p>
            <Link href="/products/risk-management" className="text-xs font-semibold text-brand-cyan hover:underline flex items-center gap-1">
              Explore Risk Management <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </TiltCard>

          <TiltCard className="p-6 sm:p-8 border-slate-800 bg-slate-900/60">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-brand-cyan/20 text-brand-cyan shrink-0">
                <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white">Trust Center & Security Questionnaires</h4>
                <p className="text-xs text-slate-400">Close enterprise deals 5x faster</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mb-4">
              Publish a live, white-labeled Trust Center. Use AI to auto-answer 95% of security questionnaires with verified compliance evidence.
            </p>
            <Link href="/products/unified-commitments" className="text-xs font-semibold text-brand-cyan hover:underline flex items-center gap-1">
              Explore Trust Center & AI Replying <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </TiltCard>
        </div>
      </div>

      {/* Lightbox Video Modal */}
      <VideoModal
        isOpen={selectedVideo.open}
        onClose={() => setSelectedVideo({ ...selectedVideo, open: false })}
        videoTitle={selectedVideo.title}
      />
    </section>
  );
};
