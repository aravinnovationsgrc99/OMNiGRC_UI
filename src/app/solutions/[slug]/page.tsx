"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { SolutionMotif } from "@/components/ui/HeroVisualMotifs";
import { Shield, ArrowRight, CheckCircle2, Zap, Layers, Server } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { FRAMEWORKS } from "@/lib/frameworks";

const frameworkListStr = FRAMEWORKS.map((f) => f.code).join(", ");

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
      `Multi-framework alignment across ${frameworkListStr}`,
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
      <main className="flex-1">
        <PageHero
          eyebrow="TAILORED GRC SOLUTION"
          title={sol.title}
          subtitle={`${sol.subtitle} — ${sol.desc}`}
          visual={<SolutionMotif slug={slug} />}
          cta={
            <Link
              href="/get-a-demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal text-white font-bold text-xs hover:bg-teal/90 shadow-lg shadow-teal/20"
            >
              Request Solution Walkthrough <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {sol.highlights.map((h, idx) => (
              <TiltCard key={idx} className="p-6 border-slate-800 bg-slate-900/80">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-teal/15 text-teal shrink-0 mt-0.5">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white mb-1">Key Workflow Advantage #{idx + 1}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{h}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          <div className="rounded-3xl border border-teal/40 bg-slate-900/90 p-8 sm:p-10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">Explore {sol.title}</h3>
            <p className="text-xs text-slate-300 mb-6">
              Connect with a GRC specialist to see how OMNiGRC fits your team&apos;s exact maturity stage.
            </p>
            <Link href="/get-a-demo" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-teal text-white font-bold text-xs hover:bg-teal/90 shadow-lg shadow-teal/20">
              Request a Walkthrough <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
