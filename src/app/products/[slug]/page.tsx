import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PILLARS, getPillarBySlug } from "@/lib/pillars";
import { ControlMapping3DGraph } from "@/components/3d/ControlMapping3DGraph";
import {
  ShieldAlert,
  Server,
  Sparkles,
  CalendarCheck,
  CheckCircle2,
  ArrowRight,
  Shield,
  FileCheck2,
  Globe,
  Award,
  AlertTriangle,
  Bug,
  FileText,
  Clock,
  Layers,
  ChevronRight,
  Database,
  Lock,
  Zap,
  Activity,
  UserCheck
} from "lucide-react";

export function generateStaticParams() {
  return [
    { slug: "risk-register" },
    { slug: "asset-inventory" },
    { slug: "control-mapping" },
    { slug: "compliance-board" },
    { slug: "vulnerabilities" },
    { slug: "vendors" },
    { slug: "policies" },
    { slug: "audits" },
    { slug: "remediation" },
    { slug: "evidence" },
  ];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const pillar = getPillarBySlug(params.slug) || PILLARS[0];
  return {
    title: `${pillar.name} — OMNiGRC Connected Workflows`,
    description: `${pillar.badge}: ${pillar.desc}`,
    openGraph: {
      title: `${pillar.name} — OMNiGRC Connected Workflows`,
      description: pillar.desc,
      url: `https://omnigrc.com/products/${pillar.slug}`,
      siteName: "OMNiGRC",
      type: "website",
    },
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug || "risk-register";
  const pillar = getPillarBySlug(slug) || PILLARS[0];

  return (
    <div className="min-h-screen bg-[#faf8ff] dark:bg-[#0A111F] text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />

      <main className="flex-1 w-full pt-16">
        {/* HERO SECTION */}
        <section className="relative w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 overflow-hidden border-b border-slate-200 dark:border-navy-700/60">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ffdbcf]/30 rounded-full blur-3xl pointer-events-none -z-10 ambient-motion-1" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdbcf] dark:bg-orange-950/30 text-[#380d00] dark:text-orange-400 mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#F15E1C] animate-pulse" />
                <span className="font-mono text-xs font-semibold tracking-wider uppercase">
                  OMNiGRC WORKFLOW • {pillar.code}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[48px] lg:leading-[56px] text-[#0d1b36] dark:text-white font-extrabold tracking-tight mb-6">
                {pillar.name}
              </h1>

              <p className="text-base sm:text-lg text-[#5a4138] dark:text-slate-300 font-medium mb-8 leading-relaxed">
                {pillar.desc}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#F15E1C] to-[#D4521A] hover:shadow-lg transition-all shadow-md"
                >
                  <CalendarCheck className="h-4 w-4" />
                  <span>Request Workflow Walkthrough</span>
                </Link>
                <a
                  href="#workflow-capabilities"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#0d1b36] dark:text-slate-200 bg-white dark:bg-navy-950 hover:bg-slate-50 dark:hover:bg-navy-900 transition-all border border-slate-200 dark:border-navy-700/60"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Visual Container */}
            <div className="lg:col-span-5 relative">
              {slug === "control-mapping" ? (
                <div className="p-4 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl overflow-hidden min-h-[320px] flex flex-col justify-between">
                  <div className="text-xs font-mono text-[#95f6cb] mb-2">3D CONTROL CROSSWALK GRAPH</div>
                  <ControlMapping3DGraph />
                  <div className="text-[11px] font-mono text-slate-400 mt-2">Map Once → Crosswalk across 6 Global Standards</div>
                </div>
              ) : (
                <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 shadow-xl flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#006c4d] dark:bg-teal-500" />
                      <span className="font-mono text-xs font-bold text-[#0d1b36] dark:text-white">{pillar.badge}</span>
                    </div>
                    <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#f1f3ff] dark:bg-navy-950/50 text-[#0d1b36] dark:text-slate-300 font-semibold">
                      STATUS: ACTIVE
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#23304c] text-white font-mono text-xs shadow-inner space-y-2">
                    <div className="flex items-center justify-between text-slate-400 text-[11px]">
                      <span>WORKFLOW MODULE</span>
                      <span>{pillar.code}</span>
                    </div>
                    <div className="text-[#95f6cb] font-semibold text-[11px]">
                      {pillar.oneLiner}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-[10px] text-[#5a4138] dark:text-slate-400 uppercase tracking-wider block font-semibold">
                      Core Operational Capabilities
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#0d1b36] dark:text-slate-300">
                      {pillar.features.slice(0, 3).map((f, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#006c4d] dark:text-teal-400 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* WORKFLOW CAPABILITIES & FEATURES */}
        <section className="w-full bg-[#f1f3ff] dark:bg-navy-950/40 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-slate-200 dark:border-navy-700/60" id="workflow-capabilities">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="font-mono text-xs text-[#F15E1C] dark:text-orange-400 font-bold uppercase tracking-widest">
                OPERATIONAL CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-4xl text-[#0d1b36] dark:text-white font-bold mt-2 tracking-tight">
                {pillar.name} Core Features
              </h2>
              <p className="text-sm sm:text-base text-[#5a4138] dark:text-slate-300 mt-2">
                Designed to operate cleanly within the broader OMNiGRC lifecycle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
              {pillar.features.map((feat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 shadow-sm flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#ffdbcf] dark:bg-orange-950/30 text-[#F15E1C] dark:text-orange-400 shrink-0 font-mono text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#0d1b36] dark:text-white mb-1">Feature Requirement #{idx + 1}</h3>
                    <p className="text-xs text-[#5a4138] dark:text-slate-400 leading-relaxed">{feat}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Product Truth Boundary Reminder Card */}
            <div className="max-w-3xl mx-auto p-5 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700/60 shadow-sm flex items-center gap-4">
              <div className="p-2 rounded-lg bg-[#95f6cb] dark:bg-teal-950/50 text-[#00513a] dark:text-teal-400 shrink-0">
                <UserCheck className="h-5 w-5" />
              </div>
              <div className="text-xs text-[#0d1b36] dark:text-slate-300">
                <span className="font-bold font-mono uppercase text-[#006c4d] dark:text-teal-400 block mb-0.5">HUMAN-GOVERNED PRODUCT BOUNDARY</span>
                <span>OMNiGRC provides structured operational governance workflows with tenant isolation. Advisory AI provides clause suggestions; human officers maintain mandatory review &amp; approval authority.</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="w-full bg-[#faf8ff] dark:bg-[#0A111F] px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl text-[#0d1b36] dark:text-white font-extrabold tracking-tight mb-4">
              Experience {pillar.name} in Action
            </h2>
            <p className="text-sm sm:text-base text-[#5a4138] dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Schedule a focused demonstration tailored to your team&apos;s GRC operations and target frameworks.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#F15E1C] to-[#D4521A] hover:shadow-xl transition-all shadow-md"
              >
                <span>Request a Workflow Walkthrough</span>
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
