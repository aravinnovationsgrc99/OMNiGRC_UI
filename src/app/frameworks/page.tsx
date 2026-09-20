import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FRAMEWORKS } from "@/lib/frameworks";
import { FrameworkOrrery } from "@/components/3d/FrameworkOrrery";
import {
  Shield,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Globe,
  FileCheck2,
  Lock,
  Layers,
  Award,
  ChevronRight,
  BookOpen
} from "lucide-react";

export const metadata: Metadata = {
  title: "Documented Framework Support — OMNiGRC",
  description: "Map once and align across ISO 27001, SOC 2, ISO 42001, GDPR, DPDP Act 2023, and HIPAA Security Rule with OMNiGRC connected workflows.",
  openGraph: {
    title: "Documented Framework Support — OMNiGRC",
    description: "Unified governance architecture across global cybersecurity, data protection, and AI regulations.",
    url: "https://omnigrc.com/frameworks",
    siteName: "OMNiGRC",
    type: "website",
  },
};

export default function FrameworksHubPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />

      <main className="flex-1 w-full pt-16">
        {/* HERO SECTION */}
        <section className="relative w-full px-4 sm:px-6 lg:px-8 pt-6 pb-12 overflow-hidden border-b border-slate-200 dark:border-navy-700/60 bg-grid-mesh-adaptive">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ffdbcf]/30 rounded-full blur-3xl pointer-events-none -z-10 ambient-motion-1" />
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdbcf] dark:bg-orange-950/30 text-[#380d00] dark:text-orange-400 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F15E1C] animate-pulse" />
              <span className="font-mono text-xs font-semibold tracking-wider uppercase">
                UNIFIED GOVERNANCE ARCHITECTURE
              </span>
            </div>

            <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-[52px] lg:leading-[60px] text-[#0d1b36] dark:text-white font-extrabold tracking-tight mx-auto mb-6">
              Documented framework coverage. Map once across global standards.
            </h1>

            <p className="max-w-3xl text-base sm:text-lg text-[#5a4138] dark:text-slate-300 font-medium mx-auto mb-8 leading-relaxed">
              Maintain a single operational control baseline that crosswalks cleanly across ISO 27001, SOC 2, ISO 42001, GDPR, DPDP, and HIPAA. Advisory AI suggests; human oversight approves.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#F15E1C] to-[#D4521A] hover:shadow-lg transition-all shadow-md"
              >
                <span>Request Framework Walkthrough</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* INTERACTIVE 3D ORRERY SECTION */}
        <section className="w-full bg-transparent px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-200 dark:border-navy-700/60">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <span className="font-mono text-xs text-[#F15E1C] dark:text-orange-400 font-bold uppercase tracking-widest">
                INTERACTIVE FRAMEWORK ORRERY
              </span>
              <h2 className="text-2xl font-bold text-[#0d1b36] dark:text-white mt-1">Explore Framework Correlations</h2>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-navy-700/60 bg-white dark:bg-[#0A111F]">
              <FrameworkOrrery title="Documented Framework Alignment" />
            </div>
          </div>
        </section>

        {/* 6 FRAMEWORK GUIDES GRID */}
        <section className="w-full bg-transparent px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-slate-200 dark:border-navy-700/60">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="font-mono text-xs text-[#F15E1C] dark:text-orange-400 font-bold uppercase tracking-widest">
                SUBSTANTIVE FRAMEWORK GUIDES
              </span>
              <h2 className="text-2xl sm:text-4xl text-[#0d1b36] dark:text-white font-bold mt-2 tracking-tight">
                Explore Core Framework Taxonomies
              </h2>
              <p className="text-sm sm:text-base text-[#5a4138] dark:text-slate-300 mt-2">
                Detailed educational and operational guides for security, data privacy, and artificial intelligence standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FRAMEWORKS.map((fw) => (
                <div key={fw.code} className="bg-[#f1f3ff] dark:bg-[#0A111F] rounded-2xl p-6 border border-slate-200 dark:border-navy-700/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-1 rounded-full bg-white dark:bg-navy-900 text-[#0d1b36] dark:text-slate-300 font-mono text-[10px] font-bold uppercase border border-slate-200 dark:border-navy-700/60">
                        {fw.region}
                      </span>
                      <span className="font-mono text-xs text-[#006c4d] dark:text-teal-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Documented
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0d1b36] dark:text-white mb-1">{fw.name}</h3>
                    <p className="font-mono text-xs text-[#F15E1C] dark:text-orange-400 font-semibold mb-3">{fw.headerDesc}</p>
                    <p className="text-xs text-[#5a4138] dark:text-slate-400 leading-relaxed mb-4">{fw.desc}</p>

                    {/* Citations Preview */}
                    <div className="p-3 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 mb-4">
                      <span className="font-mono text-[10px] text-[#5a4138] dark:text-slate-400 uppercase font-semibold block mb-1">
                        Sample Framework Citations
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {fw.citations.map((c, cIdx) => (
                          <span key={cIdx} className="px-2 py-0.5 rounded bg-[#ffdbcf] dark:bg-orange-950/30 text-[#380d00] dark:text-orange-400 font-mono text-[10px] font-semibold">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-navy-700/60">
                    <Link
                      href={`/frameworks/${fw.slug}`}
                      className="text-xs font-bold text-[#F15E1C] dark:text-orange-400 hover:text-[#ce4700] dark:hover:text-orange-300 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Read {fw.name} Operational Guide</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON MATRIX TABLE */}
        <section className="w-full bg-transparent px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-slate-200 dark:border-navy-700/60">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="font-mono text-xs text-[#F15E1C] dark:text-orange-400 font-bold uppercase tracking-widest">
                MAP-ONCE CROSSWALK MATRIX
              </span>
              <h2 className="text-2xl sm:text-4xl text-[#0d1b36] dark:text-white font-bold mt-2 tracking-tight">
                Framework Taxonomies at a Glance
              </h2>
            </div>

            <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-navy-700/60 overflow-x-auto">
              <table className="w-full text-left font-body-sm text-xs">
                <thead className="bg-[#f1f3ff] dark:bg-navy-950/50 font-mono text-xs text-[#0d1b36] dark:text-white border-b border-slate-200 dark:border-navy-700/60">
                  <tr>
                    <th className="p-3">Framework Standard</th>
                    <th className="p-3">Region / Scope</th>
                    <th className="p-3">Key Control Focus</th>
                    <th className="p-3">OMNiGRC Support Model</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-navy-700/60 text-[#0d1b36] dark:text-slate-300">
                  {FRAMEWORKS.map((fw) => (
                    <tr key={fw.code} className="hover:bg-slate-50 dark:hover:bg-navy-800/50 transition-colors">
                      <td className="p-3 font-bold font-mono text-[#F15E1C] dark:text-orange-400">
                        <Link href={`/frameworks/${fw.slug}`} className="hover:underline">
                          {fw.name}
                        </Link>
                      </td>
                      <td className="p-3 text-[#5a4138] dark:text-slate-400">{fw.region}</td>
                      <td className="p-3 text-[#0d1b36] dark:text-slate-300">{fw.headerDesc}</td>
                      <td className="p-3 text-[#006c4d] dark:text-teal-400 font-semibold">{fw.oneLiner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="w-full bg-transparent px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl text-[#0d1b36] dark:text-white font-extrabold tracking-tight mb-4">
              Map once and satisfy global compliance standards.
            </h2>
            <p className="text-sm sm:text-base text-[#5a4138] dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Schedule a technical demonstration to see how OMNiGRC streamlines framework crosswalks with human oversight.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#F15E1C] to-[#D4521A] hover:shadow-lg transition-all shadow-md"
            >
              <span>Request Framework Walkthrough</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
