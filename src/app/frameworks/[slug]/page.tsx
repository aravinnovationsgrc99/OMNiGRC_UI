import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Shield, ArrowRight, CheckCircle2, FileCheck2, Lock } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { FRAMEWORKS, getFrameworkBySlug } from "@/lib/frameworks";

export default function FrameworkDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug || "soc-2";
  const fw = getFrameworkBySlug(slug) || FRAMEWORKS[2]; // Default to SOC 2

  return (
    <div className="min-h-screen bg-[#0A111F] text-slate-100 flex flex-col justify-between">
      <Header />
      <main className="pt-32 pb-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-amber mb-3 font-semibold inline-block">
              FRAMEWORK WORKFLOW GUIDE
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {fw.name} Alignment &amp; Workflow
            </h1>
            <p className="text-lg text-slateSoft font-semibold mb-4">{fw.subtitle}</p>
            <p className="text-slate-300 text-base leading-relaxed">{fw.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {fw.controls.map((c, idx) => (
              <TiltCard key={idx} className="p-6 border-slate-800 bg-slate-900/80">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-teal/15 text-teal shrink-0">
                    <FileCheck2 className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold text-white mt-0.5">{c}</p>
                </div>
              </TiltCard>
            ))}
          </div>

          <div className="rounded-3xl border border-teal/40 bg-slate-900/90 p-8 sm:p-10 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-2">Map {fw.name} with OMNiGRC</h2>
            <p className="text-xs text-slate-300 mb-6">
              See how your controls and assets map to {fw.name} with advisory AI assistance and human review.
            </p>
            <Link href="/get-a-demo" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-teal text-white font-bold text-xs hover:bg-teal/90 shadow-lg shadow-teal/20">
              Request a Framework Walkthrough <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
