import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { FrameworkMotif } from "@/components/ui/HeroVisualMotifs";
import { Shield, ArrowRight, CheckCircle2, FileCheck2, Lock } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { FRAMEWORKS, getFrameworkBySlug } from "@/lib/frameworks";

export default function FrameworkDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug || "soc-2";
  const fw = getFrameworkBySlug(slug) || FRAMEWORKS[2]; // Default to SOC 2

  return (
    <div className="min-h-screen bg-canvas dark:bg-[#0A111F] text-navy-900 dark:text-slate-100 flex flex-col justify-between">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="FRAMEWORK WORKFLOW GUIDE"
          title={`${fw.name} Alignment & Workflow`}
          subtitle={`${fw.subtitle} — ${fw.desc}`}
          accentColor={fw.accentColor}
          visual={<FrameworkMotif slug={slug} accentColor={fw.accentColor} />}
          cta={
            <Link
              href="/get-a-demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal text-white font-bold text-xs hover:bg-teal/90 shadow-lg shadow-teal/20"
            >
              Request Framework Walkthrough <ArrowRight className="h-4 w-4 text-white" />
            </Link>
          }
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-slate-200 dark:border-navy-700/60 shadow-[0_-1px_20px_rgba(15,110,106,0.06)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {fw.controls.map((c, idx) => (
              <TiltCard key={idx} className="p-6 border-cardBorderWarm dark:border-slate-800 bg-cardWarm dark:bg-slate-900/80 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-teal/15 text-teal-700 dark:text-teal-300 shrink-0">
                    <FileCheck2 className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold text-navy-900 dark:text-white mt-0.5">{c}</p>
                </div>
              </TiltCard>
            ))}
          </div>

          <div className="rounded-3xl border border-cardBorderWarm dark:border-teal/40 bg-cardWarm dark:bg-slate-900/90 p-8 sm:p-10 text-center max-w-3xl mx-auto shadow-2xl backdrop-blur-xl">
            <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">Map {fw.name} with OMNiGRC</h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-6">
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
