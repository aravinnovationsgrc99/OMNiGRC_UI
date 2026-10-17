"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FRAMEWORKS } from "@/lib/frameworks";
import {
  Check,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Building2,
  KeyRound,
  HardDrive,
  HelpCircle,
  Sparkles,
  Info
} from "lucide-react";

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const deploymentTiers = [
    {
      code: "MSSP_SHARED",
      name: "Shared SaaS (Multi-Tenant)",
      tag: "LEAN & GROWTH TEAMS",
      desc: "Fast deployment for lean security teams needing structured risk management, asset cataloging, and framework crosswalks.",
      scope: "Tailored to your framework scope & assets",
      features: [
        "1 to 3 Target Frameworks (ISO 27001, SOC 2, HIPAA)",
        "Application-Level Tenant Isolation Boundaries",
        "Unified 5x5 Risk Register & Asset Inventory",
        "Advisory AI Control Mapper (Data Minimization)",
        "Compliance Testing Board (30/60/90-Day Cadences)",
        "External Evidence Pointer Reference Indexing",
      ],
      popular: false,
    },
    {
      code: "PRIVATE_MSSP",
      name: "Private MSSP (Dedicated Stack)",
      tag: "MOST POPULAR FOR MSSPs",
      desc: "Dedicated application instance for managed security service providers and growing multi-entity organizations.",
      scope: "Scoped to client tenant count & support tier",
      features: [
        "Multi-Framework Support (All 6 Canonical Guides)",
        "Dedicated Single-Tenant Application Instance",
        "MSSP Multi-Client Context-Switching Controls",
        "Application-Level Tenant Boundary Enforcement",
        "Advisory AI Router with Custom Prompt Scoping",
        "Dedicated Onboarding & Audit Preparation Review",
      ],
      popular: true,
    },
    {
      code: "SELF_HOSTED",
      name: "Customer-Controlled Docker",
      tag: "CONTAINERIZED DEPLOYMENT",
      desc: "For security-conscious organizations requiring internal runtime control over containerized GRC infrastructure.",
      scope: "Enterprise subscription & distribution license",
      features: [
        "All 6 Documented Frameworks & Custom Taxonomies",
        "Customer-Controlled Container Infrastructure",
        "Arav-Distributed Executable Container Artifacts",
        "Internal Telemetry & Runtime Operations Control",
        "Defensible Audit Workpaper Export Formats",
        "High-Priority Architecture & Technical Support",
      ],
      popular: false,
    },
  ];

  const faqs = [
    {
      q: "How is OMNiGRC commercial scoping structured?",
      a: "OMNiGRC is scoped according to your operational deployment model (Shared SaaS, Private MSSP, or Customer-Controlled Docker), target framework count, and organizational complexity. Talk to us to receive a transparent proposal without hidden consultant fees.",
    },
    {
      q: "Does Private MSSP mean physically isolated tenant databases?",
      a: "No. Private MSSP provides a dedicated single-tenant application instance for the MSSP. Within that environment, multi-client workspace boundaries are managed via application-level tenant isolation, ensuring strict logical separation across client environments.",
    },
    {
      q: "What does Self-Hosted deployment include?",
      a: "Under the Self-Hosted model, the customer controls infrastructure and runtime operations, but receives only Arav-distributed executable container artifacts, not the source repository or build/signing infrastructure.",
    },
    {
      q: "How does Advisory AI handle sensitive tenant data?",
      a: "OMNiGRC uses a data minimization router pipeline. Sensitive tenant details, employee names, and infrastructure IP addresses are stripped prior to external AI clause correlation calls. AI suggestions are strictly advisory and require human analyst review before saving.",
    },
    {
      q: "Are there additional costs for framework updates?",
      a: `OMNiGRC natively structures and updates core taxonomies for ${FRAMEWORKS.map((f) => f.name).join(", ")} as part of your platform subscription.`,
    },
  ];

  return (
    <div className="min-h-screen bg-transparent text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />

      <main className="flex-1 w-full pt-16">
        {/* HERO SECTION */}
        <section className="relative w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-8 sm:pb-12 md:pb-16 overflow-hidden border-b border-slate-200 dark:border-navy-700/60 bg-grid-mesh-adaptive">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ffdbcf]/30 rounded-full blur-3xl pointer-events-none -z-10 ambient-motion-1" />

          <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdbcf] dark:bg-orange-950/30 text-[#380d00] dark:text-orange-400 mb-4 sm:mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F15E1C] animate-pulse" />
              <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider uppercase">
                COMMERCIAL SCOPING &amp; DEPLOYMENT MODELS
              </span>
            </div>

            <h1 className="max-w-4xl text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl text-[#0d1b36] dark:text-white font-extrabold tracking-tight mx-auto mb-4 sm:mb-6 text-center w-full leading-tight">
              Practical commercial scoping for practical GRC operations.
            </h1>

            <p className="max-w-3xl text-xs sm:text-base md:text-lg text-[#5a4138] dark:text-slate-300 font-medium mx-auto mb-6 sm:mb-8 leading-relaxed text-left sm:text-center">
              Transparent deployment models tailored to your team infrastructure: Shared multi-tenant SaaS, dedicated Private MSSP instances, or customer-controlled container runtimes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
              <Link
                href="/demo"
                className="w-full sm:w-auto max-w-sm inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#F15E1C] to-[#D4521A] hover:shadow-lg transition-all shadow-md text-xs sm:text-sm text-center"
              >
                <span>Request Proposal Walkthrough</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 1: DEPLOYMENT TIERS GRID */}
        <section className="w-full bg-transparent px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 border-b border-slate-200 dark:border-navy-700/60">
          <div className="max-w-7xl mx-auto">
            <div className="text-left max-w-3xl mb-8 sm:mb-12">
              <span className="font-mono text-[10px] sm:text-xs text-[#F15E1C] dark:text-orange-400 font-bold uppercase tracking-widest block">
                DEPLOYMENT MODELS
              </span>
              <h2 className="text-2xl sm:text-4xl text-[#0d1b36] dark:text-white font-bold mt-2 tracking-tight text-left">
                Select Your Operational Architecture
              </h2>
              <p className="text-xs sm:text-sm text-[#5a4138] dark:text-slate-300 mt-2 text-left">
                All models include core 5x5 risk matrix scoring, map-once control crosswalks, and human oversight controls.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {deploymentTiers.map((plan) => (
                <div
                  key={plan.code}
                  className={`w-full max-w-md lg:max-w-none mx-auto rounded-2xl p-space-card flex flex-col justify-between transition-all duration-300 relative ${
                    plan.popular
                      ? "bg-white dark:bg-navy-900 border-2 border-[#F15E1C] shadow-xl lg:scale-[1.02]"
                      : "bg-[#f1f3ff] dark:bg-navy-950/50 border border-slate-300 dark:border-navy-700/60 shadow-sm hover:shadow-md"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#ffdbcf] dark:bg-orange-950/30 text-[#380d00] dark:text-orange-400 font-mono text-[10px] font-bold uppercase">
                        {plan.code}
                      </span>
                      {plan.popular && (
                        <span className="px-2.5 py-0.5 rounded bg-[#F15E1C] text-white font-mono text-[10px] font-bold uppercase">
                          {plan.tag}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-[#0d1b36] dark:text-white mb-2">{plan.name}</h3>
                    <p className="text-xs text-[#5a4138] dark:text-slate-400 mb-6 leading-relaxed">{plan.desc}</p>

                    <div className="border-t border-b border-slate-200 dark:border-navy-700/60 py-4 mb-6">
                      <p className="text-base font-bold text-[#D4521A] dark:text-orange-400">{plan.scope}</p>
                      <p className="text-[11px] text-[#5a4138] dark:text-slate-400 font-mono mt-0.5">Custom proposal based on team goals</p>
                    </div>

                    <ul className="space-y-3 mb-8 text-xs text-[#0d1b36] dark:text-slate-200">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-[#006c4d] dark:text-teal-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/demo"
                    className={`w-full py-3.5 rounded-xl font-bold text-xs text-center transition-all flex items-center justify-center gap-2 ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#F15E1C] to-[#D4521A] text-white hover:shadow-lg shadow-md"
                        : "bg-white dark:bg-navy-950 text-[#0d1b36] dark:text-slate-200 border border-slate-200 dark:border-navy-700 hover:bg-slate-50 dark:hover:bg-navy-900"
                    }`}
                  >
                    <span>Request Proposal for {plan.name}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Self-Hosted Truth Note */}
            <div className="p-5 rounded-2xl bg-[#faf8ff] dark:bg-navy-900/40 border border-slate-200 dark:border-navy-700/60 text-xs text-[#5a4138] dark:text-slate-400 leading-relaxed max-w-4xl mx-auto flex items-start gap-3">
              <Info className="h-5 w-5 text-[#F15E1C] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0d1b36] dark:text-slate-200 font-semibold block mb-0.5">Self-Hosted Deployment Truth:</strong>
                "Customer controls infrastructure and runtime operations, but receives only Arav-distributed executable container artifacts, not the source repository or build/signing infrastructure."
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: FAQS ACCORDION */}
        <section className="w-full bg-[#f1f3ff] dark:bg-navy-950/30 px-4 sm:px-6 lg:px-8 py-space-section border-b border-slate-200 dark:border-navy-700/60">
          <div className="max-w-3xl mx-auto">
            <div className="text-left max-w-2xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-navy-900 text-[#0d1b36] dark:text-white font-mono text-xs font-bold uppercase mb-2 border border-slate-200 dark:border-navy-700/60">
                <HelpCircle className="h-3.5 w-3.5 text-[#F15E1C]" /> COMMERCIAL FAQ
              </div>
              <h2 className="text-2xl sm:text-3xl text-[#0d1b36] dark:text-white font-bold text-left">
                Frequently Asked Commercial Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-300 dark:border-navy-700/60 bg-white dark:bg-navy-900 overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-sm text-[#0d1b36] dark:text-slate-200 hover:text-[#F15E1C] dark:hover:text-orange-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#F15E1C] transition-transform ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="p-5 pt-0 text-xs text-[#5a4138] dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-navy-800">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: CTA BANNER */}
        <section className="w-full bg-[#faf8ff] dark:bg-navy-950/30 px-4 sm:px-6 lg:px-8 py-space-section">
          <div className="max-w-4xl mx-auto text-left">
            <h2 className="text-3xl sm:text-4xl text-[#0d1b36] dark:text-white font-extrabold tracking-tight mb-4 text-left">
              Ready for a transparent proposal?
            </h2>
            <p className="text-sm sm:text-base text-[#5a4138] dark:text-slate-300 mb-8 max-w-2xl text-left">
              Schedule a technical demonstration to discuss framework scoping, deployment models, and custom onboarding.
            </p>
            <div className="flex justify-start w-full">
              <Link
                href="/demo"
                className="w-full sm:w-auto max-w-sm inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#F15E1C] to-[#D4521A] hover:shadow-lg transition-all shadow-md text-center"
              >
                <span>Request Proposal Walkthrough</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
