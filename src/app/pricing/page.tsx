"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Check, Shield, ArrowRight, Sparkles, HelpCircle, ChevronDown } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const pricingPlans = [
  {
    name: "Startup Launch",
    desc: "For early-stage startups needing their first SOC 2 or ISO 27001 audit fast.",
    tag: "BEST FOR SERIES A/B",
    price: "Custom Tier",
    features: [
      "1 Framework (SOC 2 or ISO 27001)",
      "Up to 50 Employee Licenses",
      "100+ Cloud & Identity Integrations",
      "Doctor Arav MDM Agent",
      "Autonomous Evidence Collector",
      "Dedicated Audit Success Specialist",
    ],
    popular: false,
  },
  {
    name: "Growth & Scaling",
    desc: "For growing teams managing multiple frameworks & vendor risks simultaneously.",
    tag: "MOST POPULAR",
    price: "Custom Tier",
    features: [
      "Up to 3 Frameworks (SOC 2, ISO, HIPAA)",
      "Unlimited Employee Licenses",
      "300+ Native Integrations",
      "Autonomous TPRM Vendor Engine",
      "Trust Center & AI Security Questionnaire",
      "24/7 Priority SLA & Auditor Portal",
    ],
    popular: true,
  },
  {
    name: "Enterprise Trust",
    desc: "For global enterprises demanding multi-cloud compliance, AI governance, and custom SLAs.",
    tag: "UNLIMITED",
    price: "Custom Tier",
    features: [
      "Unlimited 200+ Global Frameworks",
      "ISO 42001 & EU AI Act Governance",
      "Custom SLA & Custom Framework Builder",
      "Multi-Tenant Cloud Governance",
      "Dedicated Enterprise CISO Success Manager",
      "Custom Contract & SOC Report AI Parser",
    ],
    popular: false,
  },
];

const faqs = [
  {
    q: "How does Arav'sGRC differ from traditional GRC software?",
    a: "Traditional GRC tools merely remind you to upload screenshots manually. Arav'sGRC connects directly to your cloud infrastructure, HR systems, and code repositories to continuously collect audit-ready evidence 24/7 without manual labor.",
  },
  {
    q: "How long does it take to achieve SOC 2 or ISO 27001 readiness?",
    a: "With Arav'sGRC's automated scope engine and pre-mapped controls, most startups achieve complete audit readiness in 14-21 days compared to 6+ months manually.",
  },
  {
    q: "Can we use our own preferred audit partner?",
    a: "Yes! Arav'sGRC works with your existing accredited auditor or connects you with our network of top CPA and ISO auditing partners who perform audits directly in the Arav'sGRC Auditor Portal.",
  },
  {
    q: "Is dark theme supported natively?",
    a: "Yes! Arav'sGRC is built with native high-contrast dark theme defaults and customizable themes for your white-labeled Trust Center.",
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col justify-between">
      <Header />
      <main className="pt-32 pb-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan mb-3 font-semibold inline-block">
              TRANSPARENT VALUE
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Predictable pricing for continuous trust.
            </h1>
            <p className="text-slate-300 text-lg">
              No hidden fees, no surprise consultant charges. Get everything required for audit readiness & continuous assurance.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {pricingPlans.map((plan, idx) => (
              <TiltCard
                key={idx}
                className={`p-8 flex flex-col justify-between ${
                  plan.popular
                    ? "border-brand-cyan bg-slate-900 shadow-2xl shadow-brand-teal/20"
                    : "border-slate-800 bg-slate-900/60"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full ${
                        plan.popular
                          ? "bg-brand-cyan text-slate-950"
                          : "bg-brand-teal/20 text-brand-cyan"
                      }`}
                    >
                      {plan.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-300 mb-6 leading-relaxed">{plan.desc}</p>

                  <div className="border-t border-b border-slate-800 py-4 mb-6">
                    <p className="text-2xl font-extrabold text-white">{plan.price}</p>
                    <p className="text-[11px] text-slate-400 font-mono">Tailored to your framework scope</p>
                  </div>

                  <ul className="space-y-3 mb-8 text-xs text-slate-200">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5">
                        <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/get-a-demo"
                  className={`w-full py-3 rounded-xl font-bold text-xs text-center transition-all ${
                    plan.popular
                      ? "bg-brand-teal text-white hover:bg-brand-teal/90 shadow-lg shadow-brand-teal/30"
                      : "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
                  }`}
                >
                  Get Pricing Quote
                </Link>
              </TiltCard>
            ))}
          </div>

          {/* FAQs Accordion */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-sm text-white hover:text-brand-cyan transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-brand-cyan transition-transform ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="p-5 pt-0 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60">
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
