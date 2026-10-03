"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  User,
  Users,
  Shield,
  ArrowRight,
  Settings,
  Zap,
  FileText,
  Lock,
  BarChart3,
  Database,
  CheckCircle2,
} from "lucide-react";

export const AudienceSection: React.FC = () => {
  const [activeRole, setActiveRole] = useState<string | null>("team");
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const roles = [
    {
      id: "solo",
      title: "Solo Practitioner",
      subtext: "Get started quickly with a simple, structured workflow.",
      badge: "CAPACITY CONSTRAINED · 1 PERSON",
      icon: User,
      accentColor: "#F15E1C",
      iconBoxBg: "bg-[#FFF0E5] border-[#F15E1C]/30 text-[#F15E1C]",
      scaleText: "1x",
      scaleColor: "text-[#F15E1C]",
      howItWorks: [
        "One structured workspace for risks, controls, and evidence.",
        "Guided workflows without unnecessary operational overhead.",
        "Clear visibility into compliance progress.",
      ],
      learnMoreHref: undefined,
    },
    {
      id: "team",
      title: "Lean Security Team",
      subtext: "Coordinate risk, controls, and testing with automated reminders.",
      badge: "CROSS-FUNCTIONAL · 2–10 PEOPLE",
      icon: Users,
      accentColor: "#2E936F",
      iconBoxBg: "bg-[#E6F4EF] border-[#2E936F]/30 text-[#2E936F]",
      scaleText: "10x",
      scaleColor: "text-[#2E936F]",
      howItWorks: [
        "Coordinate risks, controls, evidence, and testing in one workflow.",
        "Keep recurring security work organized with automated reminders.",
        "Give the team a shared view of compliance progress.",
      ],
      learnMoreHref: "/solutions/lean-security-teams",
    },
    {
      id: "ciso",
      title: "Security Lead / CISO",
      subtext: "Enterprise-wide visibility and control across multiple teams.",
      badge: "EXECUTIVE VISIBILITY · ENTERPRISE SCALE",
      icon: Shield,
      accentColor: "#FAB60A",
      iconBoxBg: "bg-[#FFFBE6] border-[#FAB60A]/40 text-[#D4521A]",
      scaleText: "100x",
      scaleColor: "text-[#D4521A]",
      howItWorks: [
        "Maintain enterprise-wide visibility across teams and controls.",
        "Connect risks, evidence, testing, and remediation in one operating view.",
        "Give leadership a clear picture of security and compliance posture.",
      ],
      learnMoreHref: "/solutions/security-leaders",
    },
  ];

  const handleCardClick = (roleId: string) => {
    const nextState = activeRole === roleId ? null : roleId;
    setActiveRole(nextState);
    if (nextState) {
      setTimeout(() => {
        const el = cardRefs.current[roleId];
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }, 80);
    }
  };

  return (
    <section className="relative w-full bg-transparent px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8 border-b border-slate-200/60 dark:border-navy-700/60 overflow-hidden">
      {/* Soft Ambient Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-[#2E936F]/10 blur-3xl"
      />

      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="w-full text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight">
            One workflow. <span className="text-[#F15E1C]">Every team size.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto">
            From solo practitioner to security lead, OMNiGRC organizes risk, controls, and evidence around how you actually work.
          </p>
        </div>

        {/* SAME OPERATING ENGINE BANNER */}
        <div className="w-full p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 dark:border-navy-700/80 bg-white/95 dark:bg-navy-900 shadow-sm backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono font-bold">
            <div className="w-8 h-8 rounded-xl bg-[#FFF0E5] dark:bg-navy-950 flex items-center justify-center shrink-0 border border-[#F15E1C]/30 text-[#F15E1C]">
              <Settings className="h-4 w-4" />
            </div>
            <span className="text-[#F15E1C] uppercase tracking-wider font-extrabold">SAME OPERATING ENGINE</span>
            <span className="text-slate-300 dark:text-slate-700 hidden md:inline ml-1">|</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono font-bold">
            {/* 01. RISK */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#E6F4EF] dark:bg-navy-950 border border-[#2E936F]/30 text-[#2E936F]">
              <FileText className="h-3.5 w-3.5 text-[#2E936F]" />
              <span>01. RISK</span>
            </div>
            <span className="text-slate-400 font-bold">→</span>

            {/* 02. CONTROLS */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFF0E5] dark:bg-navy-950 border border-[#F15E1C]/30 text-[#F15E1C]">
              <Lock className="h-3.5 w-3.5 text-[#F15E1C]" />
              <span>02. CONTROLS</span>
            </div>
            <span className="text-slate-400 font-bold">→</span>

            {/* 03. TESTING */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFFBE6] dark:bg-navy-950 border border-[#FAB60A]/40 text-[#D4521A]">
              <BarChart3 className="h-3.5 w-3.5 text-[#D4521A]" />
              <span>03. TESTING</span>
            </div>
            <span className="text-slate-400 font-bold">→</span>

            {/* 04. EVIDENCE */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#E6F4EF] dark:bg-navy-950 border border-[#2E936F]/30 text-[#2E936F]">
              <Database className="h-3.5 w-3.5 text-[#2E936F]" />
              <span>04. EVIDENCE</span>
            </div>
          </div>
        </div>

        {/* 3 ROLE SELECTOR CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full items-start">
          {roles.map((r) => {
            const Icon = r.icon;
            const isSelected = activeRole === r.id;
            return (
              <div
                key={r.id}
                ref={(el) => {
                  cardRefs.current[r.id] = el;
                }}
                role="button"
                tabIndex={0}
                aria-expanded={isSelected}
                onClick={() => handleCardClick(r.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardClick(r.id);
                  }
                }}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 relative flex flex-col justify-between space-y-3 cursor-pointer select-none group w-full ${
                  isSelected
                    ? "border-2 border-[#2E936F] bg-[#E6F4EF]/60 dark:bg-navy-800/90 shadow-lg ring-1 ring-[#2E936F]/20"
                    : "border border-slate-200 dark:border-navy-700 bg-white/90 dark:bg-navy-900 hover:border-slate-300 dark:hover:border-navy-600 hover:shadow-md"
                }`}
              >
                <div className="space-y-3 w-full">
                  {/* TOP ROW: Icon Box on Left, Main Heading on Right of Icon */}
                  <div className="flex items-center gap-3.5 w-full">
                    {/* Icon Box */}
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border flex items-center justify-center shrink-0 ${r.iconBoxBg}`}>
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>

                    {/* Main Heading to the Right of Icon */}
                    <h3 className="font-extrabold text-base sm:text-lg lg:text-xl text-navy-900 dark:text-white leading-snug min-w-0">
                      {r.title}
                    </h3>
                  </div>

                  {/* Description Text Below Icon & Heading Header */}
                  <div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                      {r.subtext}
                    </p>
                  </div>
                </div>

                {/* BOTTOM ROW: Divider Line + Scale Metrics */}
                <div className="pt-3 border-t border-slate-200/80 dark:border-navy-700/80 flex items-center justify-between text-xs font-mono w-full">
                  <span className="text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1">
                    <Zap className="h-3.5 w-3.5 text-[#F15E1C]" /> Same workflow
                  </span>
                  <span className="font-bold text-slate-500 dark:text-slate-400">
                    <span className="text-slate-300 dark:text-slate-600 mr-1.5">|</span> Scale <span className={`font-extrabold ${r.scaleColor}`}>{r.scaleText}</span>
                  </span>
                </div>

                {/* INLINE EXPANSION CONTENT WHEN CARD IS SELECTED */}
                {isSelected && (
                  <div className="pt-3 mt-3 border-t border-slate-200/80 dark:border-navy-700/80 space-y-2.5">
                    <span className="font-mono text-xs text-[#F15E1C] dark:text-amber font-bold uppercase tracking-wider block">
                      HOW IT WORKS
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                      {r.howItWorks.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#2E936F] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {r.learnMoreHref && (
                      <div className="pt-2 flex items-center justify-end">
                        <Link
                          href={r.learnMoreHref}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#2E936F] dark:text-teal hover:underline"
                        >
                          <span>Learn more</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;

