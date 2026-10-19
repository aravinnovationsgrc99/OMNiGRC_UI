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
  Info,
  Cloud,
  Server
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
        <section className="relative w-full px-4 sm:px-6 lg:px-6 xl:px-8 pt-5 sm:pt-7 lg:pt-9 pb-8 sm:pb-12 md:pb-14 overflow-hidden border-b border-slate-200 dark:border-navy-700/60 bg-grid-mesh-adaptive">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ffdbcf]/30 rounded-full blur-3xl pointer-events-none -z-10 ambient-motion-1" />

          <div className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto text-center flex flex-col items-center">
            <h1 className="w-full max-w-6xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[68px] 2xl:text-[72px] text-[#0d1b36] dark:text-white font-extrabold tracking-tight mx-auto mb-4 sm:mb-5 text-center leading-[1.08]">
              <span className="block sm:inline">Practical Commercial </span>
              <span className="block sm:inline">Scoping for</span>
              <span className="block text-[#F15E1C]">GRC Operations</span>
            </h1>

            {/* Subtitle Paragraph */}
            <p className="max-w-3xl lg:max-w-4xl xl:max-w-5xl text-xs sm:text-base md:text-lg lg:text-[20px] xl:text-[21px] text-[#5a4138] dark:text-slate-300 font-medium mx-auto mb-6 sm:mb-8 leading-relaxed sm:leading-[1.45] text-center px-2">
              Transparent deployment models tailored to your team infrastructure: Shared multi-tenant SaaS, dedicated Private MSSP instances, or customer-controlled container runtimes.
            </p>

            {/* Centered CTA Button */}
            <div className="flex items-center justify-center w-full mb-6 sm:mb-8 lg:mb-10">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#F15E1C] to-[#D4521A] hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-md text-xs sm:text-sm md:text-base text-center"
              >
                <span>Request Proposal Walkthrough</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>

            {/* Three Deployment Cards in 1 Row on Desktop */}
            <div className="w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {/* Card 1: Shared SaaS */}
              <div className="bg-white dark:bg-[#0A111F] rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-navy-700/80 shadow-sm hover:shadow-md transition-all flex items-center gap-4 text-left min-h-[90px] sm:min-h-[105px]">
                <div className="w-12 h-12 rounded-full bg-[#dcfce7] dark:bg-emerald-950/60 border border-[#bbf7d0] dark:border-emerald-800/50 text-[#16a34a] dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Cloud className="h-6 w-6 stroke-[2.2]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-[#0d1b36] dark:text-white leading-tight">
                    Shared SaaS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 truncate">
                    Multi-tenant deployment
                  </p>
                </div>
              </div>

              {/* Card 2: Private MSSP */}
              <div className="bg-white dark:bg-[#0A111F] rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-navy-700/80 shadow-sm hover:shadow-md transition-all flex items-center gap-4 text-left min-h-[90px] sm:min-h-[105px]">
                <div className="w-12 h-12 rounded-full bg-[#dcfce7] dark:bg-emerald-950/60 border border-[#bbf7d0] dark:border-emerald-800/50 text-[#16a34a] dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-6 w-6 stroke-[2.2]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-[#0d1b36] dark:text-white leading-tight">
                    Private MSSP
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 truncate">
                    Dedicated instance
                  </p>
                </div>
              </div>

              {/* Card 3: Customer-Controlled */}
              <div className="bg-white dark:bg-[#0A111F] rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-navy-700/80 shadow-sm hover:shadow-md transition-all flex items-center gap-4 text-left min-h-[90px] sm:min-h-[105px]">
                <div className="w-12 h-12 rounded-full bg-[#dcfce7] dark:bg-emerald-950/60 border border-[#bbf7d0] dark:border-emerald-800/50 text-[#16a34a] dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Server className="h-6 w-6 stroke-[2.2]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-[#0d1b36] dark:text-white leading-tight">
                    Customer-Controlled
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 truncate">
                    Container runtime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: DEPLOYMENT TIERS GRID */}
        <section className="w-full bg-transparent px-4 sm:px-6 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-6 xl:py-7 border-b border-slate-200 dark:border-navy-700/60">
          <div className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto">
            <div className="text-left max-w-3xl xl:max-w-4xl mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-3xl md:text-4xl text-[#0d1b36] dark:text-white font-bold tracking-tight text-left">
                Select Your Operational Architecture
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#5a4138] dark:text-slate-300 mt-1.5 text-left text-justify">
                All models include core 5x5 risk matrix scoring, map-once control crosswalks, and human oversight controls.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6 items-stretch">
              {deploymentTiers.map((plan) => (
                <div
                  key={plan.code}
                  className={`w-full rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 relative ${
                    plan.popular
                      ? "bg-white dark:bg-navy-900 border-2 border-[#F15E1C] shadow-xl"
                      : "bg-[#f1f3ff] dark:bg-navy-950/50 border border-slate-300 dark:border-navy-700/60 shadow-sm hover:shadow-md"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#ffdbcf] dark:bg-orange-950/30 text-[#380d00] dark:text-orange-400 font-mono text-[10px] font-bold uppercase">
                        {plan.code}
                      </span>
                      {plan.popular && (
                        <span className="px-2.5 py-0.5 rounded bg-[#F15E1C] text-white font-mono text-[10px] font-bold uppercase">
                          {plan.tag}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#0d1b36] dark:text-white mb-2 text-left">{plan.name}</h3>
                    <p className="text-xs sm:text-sm text-[#5a4138] dark:text-slate-400 mb-4 leading-relaxed text-justify">{plan.desc}</p>

                    <div className="border-t border-b border-slate-200 dark:border-navy-700/60 py-3 mb-4">
                      <p className="text-sm sm:text-base font-bold text-[#D4521A] dark:text-orange-400 text-left">{plan.scope}</p>
                      <p className="text-[11px] text-[#5a4138] dark:text-slate-400 font-mono mt-0.5 text-left">Custom proposal based on team goals</p>
                    </div>

                    <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#0d1b36] dark:text-slate-200">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-left">
                          <Check className="h-4 w-4 text-[#006c4d] dark:text-teal-400 shrink-0 mt-0.5" />
                          <span className="text-left">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/demo"
                    className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-2 ${
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
            <div className="p-4 sm:p-5 rounded-2xl bg-[#faf8ff] dark:bg-navy-900/40 border border-slate-200 dark:border-navy-700/60 text-xs sm:text-sm text-[#5a4138] dark:text-slate-400 leading-relaxed w-full flex items-start gap-3">
              <Info className="h-5 w-5 text-[#F15E1C] shrink-0 mt-0.5" />
              <div className="text-justify flex-1">
                <strong className="text-[#0d1b36] dark:text-slate-200 font-semibold block mb-0.5 text-left">Self-Hosted Deployment Truth:</strong>
                &ldquo;Customer controls infrastructure and runtime operations, but receives only Arav-distributed executable container artifacts, not the source repository or build/signing infrastructure.&rdquo;
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: FAQS ACCORDION */}
        <section className="w-full bg-[#f1f3ff] dark:bg-navy-950/30 px-4 sm:px-6 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-6 xl:py-7 border-b border-slate-200 dark:border-navy-700/60">
          <div className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto">
            <div className="text-left mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-3xl font-bold text-[#0d1b36] dark:text-white text-left">
                Frequently Asked Commercial Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-300 dark:border-navy-700/60 bg-white dark:bg-navy-900 overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-[#0d1b36] dark:text-slate-200 hover:text-[#F15E1C] dark:hover:text-orange-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-[#F15E1C] transition-transform shrink-0 ml-2 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-[#5a4138] dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-navy-800 text-justify">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: CTA BANNER */}
        <section className="w-full bg-transparent px-4 sm:px-6 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-6 xl:py-8">
          <div className="w-full max-w-7xl lg:max-w-[96%] xl:max-w-[95%] 2xl:max-w-[1780px] mx-auto">
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-[#0A111F] dark:to-[#16233F] border border-slate-300 dark:border-navy-700 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1 min-w-0 pr-4 sm:pr-6 text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#0d1b36] dark:text-white font-extrabold tracking-tight mb-2 sm:mb-3 text-left leading-tight">
                  Ready for a transparent proposal?
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-[#5a4138] dark:text-slate-300 text-left text-justify leading-relaxed max-w-2xl">
                  Schedule a technical demonstration to discuss framework scoping, deployment models, and custom onboarding.
                </p>
              </div>
              <div className="flex sm:justify-start md:justify-end shrink-0">
                <Link
                  href="/demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#F15E1C] to-[#D4521A] hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-md text-xs sm:text-sm text-center whitespace-nowrap"
                >
                  <span>Request Proposal Walkthrough</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
