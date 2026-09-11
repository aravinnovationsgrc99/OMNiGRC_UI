"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Shield, ArrowRight, CheckCircle2, Zap, Layers, Server } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const solutionDetails: { [key: string]: { title: string; subtitle: string; desc: string; highlights: string[] } } = {
  startups: {
    title: "OMNiGRC for Lean Security Teams",
    subtitle: "Replace spreadsheet sprawl with a connected GRC operating workflow",
    desc: "Designed for small and lean security teams who need structured risk management, asset inventories, and multi-framework alignment without hiring armies of consultants.",
    highlights: [
      "Unified risk register with structured 5x5 Likelihood and Impact scoring",
      "Centralized asset and vendor repository with PII data flow tracing",
      "Map once; advisory AI suggests framework clauses across ISO 27001, SOC 2, and DPDP",
      "Compliance Testing Board with rolling 30/60/90-day visibility",
    ],
  },
  "mid-market": {
    title: "OMNiGRC for Growing Organizations",
    subtitle: "Continuous audit readiness and reusable control mapping across standards",
    desc: "As your organization scales into new markets and jurisdictions, OMNiGRC ensures a single internal security control satisfies multiple global frameworks simultaneously.",
    highlights: [
      "Multi-framework alignment across ISO 27001, ISO 42001, SOC 2, GDPR, DPDP, and HIPAA",
      "Advisory AI clause matcher with confidence scores and mandatory human review",
      "Structured treatment plan workflows for accepted, mitigated, or transferred risks",
      "Immutable PostgreSQL audit history and version-tracked change records",
    ],
  },
  enterprise: {
    title: "OMNiGRC for GRC Leads & CISOs",
    subtitle: "Defensible posture visibility and regional data governance",
    desc: "Designed for security leaders who need clear visibility into organizational risk scores, asset dependencies, control effectiveness, and upcoming testing cadences.",
    highlights: [
      "Complete visibility into residual risk reduction across registered assets",
      "Data minimization architecture: sanitized payloads with tenant isolation",
      "Regional data boundary awareness: India & UK live at MVP; EU & AU on post-launch roadmap",
      "Exportable, defensible audit packages ready for external auditor review",
    ],
  },
};

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug || "startups";
  const sol = solutionDetails[slug] || solutionDetails["startups"];

  return (
    <div className="min-h-screen bg-[#0A111F] text-slate-100 flex flex-col justify-between">
      <Header />
      <main className="pt-32 pb-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-amber mb-3 font-semibold inline-block">
              TAILORED GRC SOLUTION
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {sol.title}
            </h1>
            <p className="text-lg text-slateSoft font-semibold mb-4">{sol.subtitle}</p>
            <p className="text-slate-300 text-base leading-relaxed">{sol.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {sol.highlights.map((h, idx) => (
              <TiltCard key={idx} className="p-6 border-slate-800 bg-slate-900/80">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-teal/15 text-teal shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold text-white mt-0.5">{h}</p>
                </div>
              </TiltCard>
            ))}
          </div>

          <div className="rounded-3xl border border-teal/40 bg-slate-900/90 p-8 sm:p-10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">Ready to explore OMNiGRC?</h3>
            <p className="text-xs text-slate-300 mb-6">
              Talk to our team to see how OMNiGRC connects your risk, assets, and controls.
            </p>
            <Link href="/get-a-demo" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-teal text-white font-bold text-xs hover:bg-teal/90 shadow-lg shadow-teal/20">
              Request a Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
