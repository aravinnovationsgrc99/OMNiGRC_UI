"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Award, FileText, Download, ArrowRight, ShieldCheck, Layers, BookOpen } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const resources = [
  {
    title: "ISO 27001:2022 Annex A Control Mapping Guide",
    type: "FRAMEWORK GUIDE",
    desc: "Comprehensive reference mapping organizational, people, physical, and technological controls to risk treatment workflows.",
  },
  {
    title: "SOC 2 Type II Common Criteria Preparation Checklist",
    type: "CHECKLIST & TEMPLATE",
    desc: "Structured checklist covering Trust Services Criteria CC1-CC9 for cloud infrastructure and SaaS operations.",
  },
  {
    title: "DPDP Act India 2023 Fiduciary Readiness Framework",
    type: "REGULATORY GUIDE",
    desc: "Actionable roadmap covering digital consent notices, data fiduciary requirements, and reasonable security safeguards.",
  },
  {
    title: "Lean GRC Operations: 5x5 Risk Scoring & Testing Cadence",
    type: "OPERATIONAL WHITEPAPER",
    desc: "How lean security teams eliminate spreadsheet chaos by connecting risk registers, asset inventories, and testing boards.",
  },
];

export default function TrustVaultPage() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col justify-between">
      <Header />
      <main className="pt-32 pb-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-yellow mb-3 font-semibold inline-block">
              PRACTICAL GRC RESOURCES
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
              OMNiGRC Resource Hub
            </h1>
            <p className="text-slate-300 text-lg">
              Framework guides, checklists, and operational resources for lean security and compliance teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {resources.map((res, idx) => (
              <TiltCard key={idx} className="p-8 border-slate-800 bg-slate-900/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-brand-orange/15 text-brand-orange font-semibold">
                      {res.type}
                    </span>
                    <Download className="h-4 w-4 text-brand-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{res.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">{res.desc}</p>
                </div>

                <Link
                  href="/get-a-demo"
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-orange hover:text-white transition-colors"
                >
                  Request Resource <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </TiltCard>
            ))}
          </div>

          <div className="rounded-3xl border border-brand-orange/40 bg-slate-900/90 p-8 sm:p-10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">Need a custom framework mapping template?</h3>
            <p className="text-xs text-slate-300 mb-6">Our team can help configure your controls across ISO 27001, SOC 2, and DPDP.</p>
            <Link href="/get-a-demo" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-orange text-white font-bold text-xs hover:bg-brand-orange/90 shadow-lg shadow-brand-orange/20">
              Talk to Our Team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
