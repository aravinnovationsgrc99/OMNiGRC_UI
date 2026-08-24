"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Shield, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const solutionDetails: { [key: string]: { title: string; subtitle: string; desc: string; highlights: string[] } } = {
  startups: {
    title: "Arav'sGRC for Startups",
    subtitle: "Achieve SOC 2, ISO 27001, or HIPAA readiness in under 3 weeks",
    desc: "Don't let compliance stall your seed or Series A deals. Arav'sGRC acts as your automated compliance operator, scoping your program and collecting evidence without engineering distraction.",
    highlights: [
      "Fastest path to SOC 2 Type II audit readiness",
      "100+ native cloud & identity integrations out-of-the-box",
      "Doctor Arav MDM for instant employee laptop compliance",
      "Startup-friendly custom pricing packages",
    ],
  },
  "mid-market": {
    title: "Arav'sGRC for Mid-Market",
    subtitle: "Continuous assurance on autopilot for growing security teams",
    desc: "As your tech stack and customer base expand, compliance becomes continuous. Arav'sGRC unifies multiple frameworks and automates third-party vendor risk management.",
    highlights: [
      "Multi-framework control mapping (SOC 2 + ISO + HIPAA + GDPR)",
      "Autonomous Vendor Risk Management (TPRM)",
      "24/7 automated telemetry & continuous risk monitoring",
      "Auditor portal with zero manual evidence exports",
    ],
  },
  enterprise: {
    title: "Arav'sGRC for Enterprise & CISOs",
    subtitle: "Universal posture transparency & AI governance for large enterprises",
    desc: "Designed for CISOs who demand real-time posture visibility across multi-cloud environments, enterprise vendor ecosystems, and custom compliance frameworks.",
    highlights: [
      "ISO 42001 & EU AI Act Governance engine",
      "Custom framework builder & AI contract parser",
      "Dedicated Enterprise GRC Architect support",
      "Board-level real-time risk intelligence scorecards",
    ],
  },
};

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug || "startups";
  const sol = solutionDetails[slug] || solutionDetails["startups"];

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col justify-between">
      <Header />
      <main className="pt-32 pb-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan mb-3 font-semibold inline-block">
              TAILORED SOLUTIONS
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {sol.title}
            </h1>
            <p className="text-xl text-brand-cyan font-semibold mb-4">{sol.subtitle}</p>
            <p className="text-slate-300 text-base leading-relaxed">{sol.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {sol.highlights.map((h, idx) => (
              <TiltCard key={idx} className="p-6 border-brand-teal/30 bg-slate-900/80">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-brand-teal/20 text-brand-cyan shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold text-white mt-0.5">{h}</p>
                </div>
              </TiltCard>
            ))}
          </div>

          <div className="rounded-3xl border border-brand-teal/40 bg-slate-900/90 p-10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">Ready to accelerate your trust posture?</h3>
            <p className="text-xs text-slate-300 mb-6">Talk to our security experts and see a custom demo for your company size.</p>
            <Link href="/get-a-demo" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-teal text-white font-bold text-xs hover:bg-brand-teal/90 shadow-lg">
              Book a Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
