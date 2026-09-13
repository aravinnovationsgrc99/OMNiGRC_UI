"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Check, ChevronDown, ArrowRight } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { FRAMEWORKS } from "@/lib/frameworks";
import { PageHero } from "@/components/layout/PageHero";
import { PricingMotif } from "@/components/ui/HeroVisualMotifs";

const pricingTiers = [
  {
    name: "Starter",
    desc: "For lean teams establishing their first structured risk register and target compliance framework.",
    tag: "FOR LEAN TEAMS",
    scope: "Talk to us about your requirements",
    features: [
      "1 Target Framework (ISO 27001 or SOC 2)",
      "Unified Risk Register & 5x5 Scoring",
      "Asset & Vendor Inventory Catalog",
      "Advisory AI Control Mapping (Tier 1 Router)",
      "Compliance Testing Board (Monthly/Quarterly)",
      "Immutable Audit Log in PostgreSQL",
    ],
    popular: false,
  },
  {
    name: "Growth",
    desc: "For expanding security teams managing multiple frameworks and regional obligations simultaneously.",
    tag: "MOST PRACTICAL",
    scope: "Talk to us about your requirements",
    features: [
      "Multiple Frameworks (ISO 27001, SOC 2, GDPR, DPDP)",
      "Map-Once Reusable Control Engine",
      "Asset & PII Data Flow Tracing",
      "Tiered AI Router with Data Minimization",
      "Rolling 30/60/90-Day Testing Cadences",
      "Dedicated Onboarding & Audit Workflow Support",
    ],
    popular: true,
  },
  {
    name: "Scale",
    desc: "For security leaders demanding multi-framework alignment, custom risk tiers, and regional data boundaries.",
    tag: "MULTI-REGION",
    scope: "Talk to us about your requirements",
    features: [
      `All 6 Documented Frameworks (${FRAMEWORKS.map((f) => f.code).join(", ")})`,
      "Regional Data Residency Alignment (India, UK live; EU, AU roadmap)",
      "Custom Treatment Plans & Historical Risk Evolution",
      "High-Priority Support & GRC Architecture Review",
      "Tenant-Scoped Isolated Storage",
      "Full Exportable Defensible Audit Packages",
    ],
    popular: false,
  },
];

const faqs = [
  {
    q: "How does OMNiGRC pricing work?",
    a: "OMNiGRC is tailored to the operational scope of your lean GRC team, including target frameworks and asset complexity. Talk to us to receive a transparent proposal without hidden consultant fees.",
  },
  {
    q: "How does OMNiGRC's AI control mapping work?",
    a: "OMNiGRC uses a tiered model routing pipeline with strict data minimization. Sensitive tenant details and employee identities are stripped before external clause correlation calls. AI suggestions are strictly advisory and require human analyst review before saving.",
  },
  {
    q: "What frameworks are supported in OMNiGRC?",
    a: `OMNiGRC is built with deep, verified taxonomies for ${FRAMEWORKS.map((f) => f.name).join(", ")}.`,
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-canvas dark:bg-[#0A111F] text-navy-900 dark:text-slate-100 flex flex-col justify-between">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="TAILORED FOR LEAN GRC"
          title="Practical tiers for practical security teams."
          subtitle="Talk to us about your specific GRC requirements, framework goals, and team timeline."
          visual={<PricingMotif />}
          cta={
            <Link
              href="/get-a-demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal text-white font-bold text-xs hover:bg-teal/90 shadow-lg shadow-teal/20"
            >
              Request Proposal Walkthrough <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />

        <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {pricingTiers.map((plan, idx) => (
              <TiltCard
                key={idx}
                className={`p-8 flex flex-col justify-between opacity-100 backdrop-blur-none transition-all duration-300 relative z-10 ${
                  plan.popular
                    ? "border-2 border-teal bg-cardWarm dark:bg-[#0E172A] shadow-2xl shadow-teal/25 scale-[1.03]"
                    : "border border-cardBorderWarm dark:border-slate-800 bg-cardWarm dark:bg-[#0B1220] hover:border-teal/40 dark:hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full ${
                        plan.popular
                          ? "bg-teal text-white"
                          : "bg-teal/20 text-amber"
                      }`}
                    >
                      {plan.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{plan.desc}</p>

                  <div className="border-t border-b border-cardBorderWarm dark:border-slate-800/80 py-4 mb-6">
                    <p className="text-lg font-bold text-amber">{plan.scope}</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">Aligned to your lean GRC goals</p>
                  </div>

                  <ul className="space-y-3 mb-8 text-xs text-slate-700 dark:text-slate-200">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-teal shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/get-a-demo"
                  className={`w-full py-3.5 rounded-xl font-bold text-xs text-center transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "bg-teal text-white hover:bg-teal/90 shadow-lg shadow-teal/30"
                      : "bg-cardBorderWarm dark:bg-slate-800 text-navy-900 dark:text-slate-200 hover:bg-[#E8DDD0] dark:hover:bg-slate-700 hover:text-navy-900 dark:hover:text-white"
                  }`}
                >
                  <span>Talk to us about {plan.name}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </TiltCard>
            ))}
          </div>

          {/* FAQs Accordion */}
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 dark:text-white text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-cardBorderWarm dark:border-slate-800 bg-cardWarm dark:bg-[#0B1220] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-sm text-navy-900 dark:text-white hover:text-teal dark:hover:text-teal transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-teal transition-transform ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="p-5 pt-0 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-cardBorderWarm dark:border-slate-800/60">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
