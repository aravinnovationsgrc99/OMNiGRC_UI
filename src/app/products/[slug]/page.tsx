"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Shield, CheckCircle2, ArrowRight, Sparkles, Cpu, Layers, Zap } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const productDetails: { [key: string]: { title: string; subtitle: string; desc: string; features: string[] } } = {
  "audit-management": {
    title: "Audit Management Engine",
    subtitle: "Streamline 100% of audit operations with zero spreadsheet friction",
    desc: "Arav'sGRC connects directly to your auditors inside a dedicated express portal. Evidence is synced automatically from 300+ integrations, removing 95% of manual sample requests.",
    features: [
      "Dedicated Auditor Portal with granular RBAC permissions",
      "Automated evidence sample extraction and time-stamped proof",
      "Zero manual screenshotting or email attachment chains",
      "Real-time gap detector before auditor kickoff",
    ],
  },
  "autonomous-tprm": {
    title: "Autonomous TPRM & Vendor Risk",
    subtitle: "Vendor security reviews on complete autopilot",
    desc: "Extract vendor SOC 2 reports, analyze security posture, and flag vendor risks continuously using AI. Automatically maintain your complete vendor risk register.",
    features: [
      "AI SOC 2 & ISO report parser with instant summary",
      "Automated vendor risk scorecards updated 24/7",
      "Shadow IT & cloud vendor auto-discovery",
      "Auto-answers vendor security questionnaires in minutes",
    ],
  },
  "unified-commitments": {
    title: "Unified Commitments & Trust Center",
    subtitle: "Single active registry for all security obligations",
    desc: "Map compliance frameworks, customer security addendums, and internal SLAs into one unified matrix. Map once, fulfill continuously across all standards.",
    features: [
      "White-labeled public or private Trust Center",
      "Real-time compliance badge & live NDA downloads",
      "Automated obligation overlap mapping (SOC 2, ISO, HIPAA)",
      "Proactive SLA drift alerting",
    ],
  },
  "ai-governance": {
    title: "AI Governance & ISO 42001",
    subtitle: "Safeguard AI models and fulfill global AI regulations",
    desc: "Maintain a complete registry of internal and customer-facing LLMs. Fulfill ISO 42001 and EU AI Act requirements with automated AI risk assessments.",
    features: [
      "Automated Shadow AI model scanner",
      "ISO 42001 & EU AI Act compliance control mapping",
      "LLM data privacy & training data protection checks",
      "AI Risk Impact Assessment templates & workflows",
    ],
  },
  "risk-management": {
    title: "Risk Register & Intelligence",
    subtitle: "Quantify, score, and remediate posture risks",
    desc: "Continuously evaluate risks across cloud assets, vendors, and business processes. Automatically link risks to controls and live security telemetry.",
    features: [
      "Automated risk scoring (Likelihood x Impact)",
      "Residual risk mapping against active controls",
      "Risk owner assignment & SLA escalation",
      "Board-level visual risk dashboard export",
    ],
  },
  "continuous-monitoring": {
    title: "Continuous Monitoring Telemetry",
    subtitle: "24/7 posture assurance across 300+ cloud tools",
    desc: "Continuously verify security controls across AWS, GCP, Okta, GitHub, Jamf, and more. Receive instant alerts if a control breaks.",
    features: [
      "24/7 telemetry sync across cloud & identity",
      "Doctor Arav MDM endpoint compliance agent",
      "Automated CVE vulnerability scanner integration",
      "Instant exception workflow & remediation ticketing",
    ],
  },
  "policy-management": {
    title: "Policy Engine & People Ops",
    subtitle: "Automate security policies & employee compliance",
    desc: "Generate custom, auditor-approved security policies in seconds. Automate employee security training, policy signatures, and offboarding checks.",
    features: [
      "Pre-approved policy template library (20+ policies)",
      "Automated employee onboarding & offboarding workflows",
      "Integrated security awareness training tracking",
      "MFA & device compliance enforcement",
    ],
  },
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug || "audit-management";
  const product = productDetails[slug] || productDetails["audit-management"];

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col justify-between">
      <Header />
      <main className="pt-32 pb-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan mb-3 font-semibold inline-block">
              ARAV&apos;SGRC PRODUCT SUITE
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {product.title}
            </h1>
            <p className="text-xl text-brand-cyan font-semibold mb-4">{product.subtitle}</p>
            <p className="text-slate-300 text-base leading-relaxed">{product.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {product.features.map((feat, idx) => (
              <TiltCard key={idx} className="p-6 border-brand-teal/30 bg-slate-900/80">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-brand-teal/20 text-brand-cyan shrink-0 mt-0.5">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white mb-1">Feature Highlight #{idx + 1}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{feat}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          <div className="rounded-3xl border border-brand-teal/40 bg-slate-900/90 p-10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">Ready to see {product.title} live?</h3>
            <p className="text-xs text-slate-300 mb-6">Schedule a 15-minute customized product walkthrough with our security architects.</p>
            <Link href="/get-a-demo" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-teal text-white font-bold text-xs hover:bg-brand-teal/90 shadow-lg">
              Book Product Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
