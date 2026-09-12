"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Shield, CheckCircle2, ArrowRight, Sparkles, Cpu, Layers, Server, ShieldAlert, CalendarCheck, FileCheck2 } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { FRAMEWORKS } from "@/lib/frameworks";

const frameworkListStr = FRAMEWORKS.map((f) => f.code).join(", ");

const productDetails: { [key: string]: { title: string; subtitle: string; desc: string; features: string[] } } = {
  "risk-management": {
    title: "Unified Risk Register & 5x5 Scoring",
    subtitle: "Structured risk quantification, treatment planning, and residual tracking",
    desc: "Log organizational, cloud, and vendor risks with Likelihood × Impact scoring. Link risks directly to mitigating controls and inventory assets for full visibility.",
    features: [
      "5x5 Likelihood and Impact scoring matrix with customized risk thresholds",
      "Direct linkage between identified risks, assets, and mitigating security controls",
      "Treatment plan management: Accept, Mitigate, Transfer, or Avoid",
      "Historical score tracking and immutable audit log in PostgreSQL",
    ],
  },
  "continuous-monitoring": {
    title: "Asset & Inventory Context",
    subtitle: "Connected repository of hardware, cloud assets, vendors, and data flows",
    desc: "Maintain complete inventory visibility with direct context into PII data flows, vendor relationships, and protective security controls.",
    features: [
      "Unified view of cloud infrastructure, databases, endpoints, and SaaS vendors",
      "Data flow classification (PII, Financial, Sensitive) linked to safeguards",
      "Third-party vendor catalog with compliance certification records",
      "Direct risk and control association for every registered asset",
    ],
  },
  "audit-management": {
    title: "Advisory AI Control Mapping",
    subtitle: "Map internal controls once and align across documented standards",
    desc: `Define your technical and organizational controls once. OMNiGRC's advisory AI suggests candidate clauses across ${frameworkListStr} for human review.`,
    features: [
      "Tiered model router with strict data minimization and redaction",
      `Pre-loaded with ${frameworkListStr}`,
      "Confidence scores accompanying all AI advisory suggestions",
      "Mandatory human analyst approval before database persistence",
    ],
  },
  "policy-management": {
    title: "Compliance Testing Board",
    subtitle: "Kanban workflow, testing cadences, and rolling 30/60/90-day visibility",
    desc: "Assign control owners, configure recurring test schedules, and maintain an audit-ready cadence without pre-audit scrambles.",
    features: [
      "Kanban board with clear owner assignments and status tracking",
      "Rolling 30, 60, and 90-day upcoming evidence and review deadlines",
      "Recurring test frequencies: Monthly, Quarterly, Semi-Annual, and Annual",
      "Defensible testing history ready for external audit review",
    ],
  },
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug || "risk-management";
  const product = productDetails[slug] || productDetails["risk-management"];

  return (
    <div className="min-h-screen bg-[#0A111F] text-slate-100 flex flex-col justify-between">
      <Header />
      <main className="pt-32 pb-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-amber mb-3 font-semibold inline-block">
              OMNiGRC CORE WORKFLOW
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {product.title}
            </h1>
            <p className="text-lg text-slateSoft font-semibold mb-4">{product.subtitle}</p>
            <p className="text-slate-300 text-base leading-relaxed">{product.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {product.features.map((feat, idx) => (
              <TiltCard key={idx} className="p-6 border-slate-800 bg-slate-900/80">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-teal/15 text-teal shrink-0 mt-0.5">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white mb-1">Operational Capability #{idx + 1}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{feat}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          <div className="rounded-3xl border border-teal/40 bg-slate-900/90 p-8 sm:p-10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">Experience {product.title} in Action</h3>
            <p className="text-xs text-slate-300 mb-6">
              Schedule a focused demonstration tailored to your team&apos;s GRC operations and target frameworks.
            </p>
            <Link href="/get-a-demo" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-teal text-white font-bold text-xs hover:bg-teal/90 shadow-lg shadow-teal/20">
              Request a Workflow Walkthrough <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
