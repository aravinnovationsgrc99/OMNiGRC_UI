"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Award, FileText, Download, ArrowRight, ShieldCheck, Zap, Layers } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const resources = [
  {
    title: "SOC 2 Type II Complete Audit Checklist 2026",
    type: "CHECKLIST & TEMPLATE",
    desc: "Comprehensive spreadsheet & checklist covering all Trust Services Criteria for cloud-native companies.",
  },
  {
    title: "ISO 27001:2022 Statement of Applicability (SoA) Excel",
    type: "POLICY TEMPLATE",
    desc: "Pre-formatted SoA template covering all 93 Annex A controls with risk treatment mappings.",
  },
  {
    title: "Autonomous Compliance ROI & Cost Calculator",
    type: "CALCULATOR TOOL",
    desc: "Calculate engineering hours saved and total cost reduction vs manual GRC tools.",
  },
  {
    title: "ISO 42001 AI Governance Impact Assessment Guide",
    type: "WHITEPAPER",
    desc: "Framework guide for AI model evaluation, data privacy protection, and EU AI Act readiness.",
  },
];

export default function TrustVaultPage() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col justify-between">
      <Header />
      <main className="pt-32 pb-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan mb-3 font-semibold inline-block">
              RESOURCE & ASSET HUB
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Arav&apos;sGRC Trust Vault
            </h1>
            <p className="text-slate-300 text-lg">
              Free templates, whitepapers, security calculators, and compliance toolkits for GRC and security teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {resources.map((res, idx) => (
              <TiltCard key={idx} className="p-8 border-slate-800 bg-slate-900/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-brand-teal/20 text-brand-cyan font-semibold">
                      {res.type}
                    </span>
                    <Download className="h-4 w-4 text-brand-cyan" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{res.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">{res.desc}</p>
                </div>

                <Link
                  href="/get-a-demo"
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-cyan hover:text-white transition-colors"
                >
                  Download Asset <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </TiltCard>
            ))}
          </div>

          <div className="rounded-3xl border border-brand-teal/40 bg-slate-900/90 p-10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">Need a custom framework template?</h3>
            <p className="text-xs text-slate-300 mb-6">Our GRC architects can build custom compliance mapping templates for your organization.</p>
            <Link href="/get-a-demo" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-teal text-white font-bold text-xs hover:bg-brand-teal/90 shadow-lg">
              Contact GRC Architects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
