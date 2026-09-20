import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FRAMEWORKS } from "@/lib/frameworks";
import { PILLARS } from "@/lib/pillars";
import {
  BookOpen,
  FileText,
  Shield,
  Layers,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Clock,
  Sparkles,
  Search
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resources & GRC Knowledge Hub — OMNiGRC",
  description: "Access canonical framework guides, operational workflow walkthroughs, and practical GRC implementation guidance.",
  openGraph: {
    title: "Resources & GRC Knowledge Hub — OMNiGRC",
    description: "Substantive educational guides for security, data privacy, and AI compliance frameworks.",
    url: "https://omnigrc.co/resources",
    siteName: "OMNiGRC",
    type: "website",
  },
};

const whitepapers = [
  {
    title: "Map-Once Control Alignment: Advisory AI with Human Oversight",
    category: "OPERATIONAL METHODOLOGY",
    desc: "How lean security teams crosswalk internal security policies across ISO 27001, SOC 2, and GDPR without spreadsheet duplication.",
    status: "DOCUMENTED GUIDE",
    link: "/products/control-mapping",
  },
  {
    title: "The 5x5 Risk Matrix & Residual Risk Scoring Model",
    category: "RISK GOVERNANCE",
    desc: "A practical guide to quantitative 5x5 likelihood x impact scoring, inherent risk evaluation, and human-approved treatment plans.",
    status: "DOCUMENTED GUIDE",
    link: "/products/risk-register",
  },
  {
    title: "Rolling 30/60/90-Day Evidence Testing Cadences",
    category: "AUDIT PREPARATION",
    desc: "Eliminate end-of-year audit panic by structuring continuous evidence collection cadences on the Compliance Testing Board.",
    status: "DOCUMENTED GUIDE",
    link: "/products/compliance-board",
  },
  {
    title: "External Evidence Reference-Index Model for CPA Auditors",
    category: "EVIDENCE MANAGEMENT",
    desc: "How to organize verifiable external evidence pointer links without cloning sensitive raw data into platform storage.",
    status: "DOCUMENTED GUIDE",
    link: "/products/evidence",
  },
];

const plannedResources = [
  {
    title: "ISO 42001 Algorithmic Risk Assessment Workpaper Template",
    category: "AI GOVERNANCE",
    desc: "Structured workpaper template for evaluating algorithmic data quality, bias mitigation, and model audit logging.",
    status: "PLANNED RESOURCE",
  },
  {
    title: "India DPDP Act Section 8(5) Technical Safeguards Checklist",
    category: "DATA PRIVACY",
    desc: "Practical checklist for documenting reasonable security safeguards for Indian data fiduciaries.",
    status: "PLANNED RESOURCE",
  },
];

export default function ResourcesHubPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />

      <main className="flex-1 w-full pt-16">
        {/* HERO SECTION */}
        <section className="relative w-full px-4 sm:px-6 lg:px-8 pt-6 pb-12 overflow-hidden border-b border-slate-200 dark:border-navy-700/60 bg-grid-mesh-adaptive">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ffdbcf]/30 rounded-full blur-3xl pointer-events-none -z-10 ambient-motion-1" />

          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdbcf] dark:bg-orange-950/30 text-[#380d00] dark:text-orange-400 mb-6 shadow-sm">
              <BookOpen className="h-4 w-4 text-[#F15E1C]" />
              <span className="font-mono text-xs font-semibold tracking-wider uppercase">
                GRC RESOURCE & KNOWLEDGE HUB
              </span>
            </div>

            <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-[52px] lg:leading-[60px] text-[#0d1b36] dark:text-white font-extrabold tracking-tight mx-auto mb-6">
              Practical guides & operational frameworks for lean GRC teams.
            </h1>

            <p className="max-w-3xl text-base sm:text-lg text-[#5a4138] dark:text-slate-300 font-medium mx-auto mb-8 leading-relaxed">
              Explore canonical framework guides, product workflow walkthroughs, and practical GRC implementation methodologies.
            </p>

            <div className="max-w-xl mx-auto p-4 rounded-2xl bg-white dark:bg-navy-900 border border-[#F15E1C]/30 dark:border-orange-500/30 shadow-md flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-left">
                <div className="p-2.5 rounded-xl bg-[#ffdbcf] dark:bg-orange-950/40 text-[#F15E1C]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0d1b36] dark:text-white">OMNiGRC Editorial Blog</h4>
                  <p className="text-xs text-[#5a4138] dark:text-slate-400">Read in-depth articles on risk registers, audit readiness &amp; GRC strategy.</p>
                </div>
              </div>
              <Link
                href="/resources/blog"
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#F15E1C] hover:bg-[#ce4700] transition-colors flex items-center gap-1 shrink-0"
              >
                <span>Visit Blog</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURED EDITORIAL ARTICLES */}
        <section className="w-full bg-transparent px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-200 dark:border-navy-700/60">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div>
                <span className="font-mono text-xs text-[#F15E1C] font-bold uppercase tracking-widest block">
                  FEATURED EDITORIAL ARTICLES
                </span>
                <h2 className="text-2xl sm:text-3xl text-[#0d1b36] dark:text-white font-bold mt-1 tracking-tight">
                  In-Depth Strategy &amp; GRC Best Practices
                </h2>
              </div>
              <Link
                href="/resources/blog"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F15E1C] dark:text-orange-400 hover:text-[#ce4700] dark:hover:text-orange-300 transition-colors"
              >
                <span>Browse All Articles</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/resources/blog/how-to-build-effective-cybersecurity-risk-register"
                className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 hover:border-[#F15E1C]/40 dark:hover:border-orange-500/40 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-400 font-mono text-[10px] font-bold uppercase mb-3 inline-block">
                    RISK MANAGEMENT
                  </span>
                  <h3 className="text-lg font-bold text-[#0d1b36] dark:text-white group-hover:text-[#F15E1C] dark:group-hover:text-orange-400 transition-colors mb-2">
                    How to Build an Effective Cybersecurity Risk Register
                  </h3>
                  <p className="text-xs text-[#5a4138] dark:text-slate-400 leading-relaxed mb-4">
                    A step-by-step guide to identifying, assessing, prioritizing, and managing digital risks with a structured risk register.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-navy-700/60 flex items-center justify-between text-xs font-bold text-[#F15E1C]">
                  <span>Read Article</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                href="/resources/blog/compliance-vs-pre-audit-preparation-what-businesses-need-to-know"
                className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 hover:border-[#F15E1C]/40 dark:hover:border-orange-500/40 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950/40 text-teal-800 dark:text-teal-400 font-mono text-[10px] font-bold uppercase mb-3 inline-block">
                    COMPLIANCE
                  </span>
                  <h3 className="text-lg font-bold text-[#0d1b36] dark:text-white group-hover:text-[#F15E1C] dark:group-hover:text-orange-400 transition-colors mb-2">
                    Compliance vs. Pre-Audit Preparation: What Businesses Need to Know
                  </h3>
                  <p className="text-xs text-[#5a4138] dark:text-slate-400 leading-relaxed mb-4">
                    Why businesses should move from frantic pre-audit scrambles to continuous compliance management using GRC software.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-navy-700/60 flex items-center justify-between text-xs font-bold text-[#F15E1C]">
                  <span>Read Article</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                href="/resources/blog/why-grc-matters-for-modern-businesses"
                className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 hover:border-[#F15E1C]/40 dark:hover:border-orange-500/40 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-950/40 text-orange-800 dark:text-orange-400 font-mono text-[10px] font-bold uppercase mb-3 inline-block">
                    GOVERNANCE
                  </span>
                  <h3 className="text-lg font-bold text-[#0d1b36] dark:text-white group-hover:text-[#F15E1C] dark:group-hover:text-orange-400 transition-colors mb-2">
                    Why GRC Matters for Modern Businesses
                  </h3>
                  <p className="text-xs text-[#5a4138] dark:text-slate-400 leading-relaxed mb-4">
                    How Governance, Risk, and Compliance creates clear accountability, improves risk visibility, and builds long-term resilience.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-navy-700/60 flex items-center justify-between text-xs font-bold text-[#F15E1C]">
                  <span>Read Article</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 1: CANONICAL FRAMEWORK GUIDES INDEX */}
        <section className="w-full bg-transparent px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-200 dark:border-navy-700/60">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div>
                <span className="font-mono text-xs text-[#F15E1C] font-bold uppercase tracking-widest block">
                  CANONICAL FRAMEWORK GUIDES
                </span>
                <h2 className="text-2xl sm:text-3xl text-[#0d1b36] dark:text-white font-bold mt-1 tracking-tight">
                  Educational Framework Taxonomies
                </h2>
              </div>
              <Link
                href="/frameworks"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F15E1C] dark:text-orange-400 hover:text-[#ce4700] dark:hover:text-orange-300 transition-colors"
              >
                <span>View Frameworks Hub</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FRAMEWORKS.map((fw) => (
                <Link
                  key={fw.code}
                  href={`/frameworks/${fw.slug}`}
                  className="p-6 rounded-2xl bg-[#f1f3ff] dark:bg-navy-950/50 border border-slate-200 dark:border-navy-700/60 hover:border-[#F15E1C]/40 dark:hover:border-orange-500/40 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-white dark:bg-navy-900 text-[#0d1b36] dark:text-slate-300 font-mono text-[10px] font-bold uppercase border border-slate-200 dark:border-navy-700/60">
                        {fw.region}
                      </span>
                      <span className="font-mono text-[10px] text-[#006c4d] dark:text-teal-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3" /> Guide Available
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0d1b36] dark:text-white group-hover:text-[#F15E1C] dark:group-hover:text-orange-400 transition-colors mb-1">
                      {fw.name}
                    </h3>
                    <p className="font-mono text-xs text-[#F15E1C] dark:text-orange-400 font-semibold mb-2">{fw.headerDesc}</p>
                    <p className="text-xs text-[#5a4138] dark:text-slate-400 leading-relaxed mb-4">{fw.oneLiner}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-navy-700/60 flex items-center justify-between text-xs font-bold text-[#F15E1C] dark:text-orange-400">
                    <span>Read {fw.name} Guide</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: CANONICAL WORKFLOW MODULES INDEX */}
        <section className="w-full bg-transparent px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-200 dark:border-navy-700/60">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="font-mono text-xs text-[#F15E1C] font-bold uppercase tracking-widest">
                WORKFLOW & PRODUCT MODULES
              </span>
              <h2 className="text-2xl sm:text-3xl text-[#0d1b36] dark:text-white font-bold mt-1 tracking-tight">
                10 Connected GRC Operating Modules
              </h2>
              <p className="text-xs sm:text-sm text-[#5a4138] dark:text-slate-300 mt-2">
                Detailed product documentation for OMNiGRC's core workflow modules.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {PILLARS.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 hover:border-[#F15E1C]/40 dark:hover:border-orange-500/40 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[10px] text-[#F15E1C] font-bold uppercase tracking-wider block mb-1">
                      MODULE {p.badge}
                    </span>
                    <h3 className="text-base font-bold text-[#0d1b36] dark:text-white group-hover:text-[#F15E1C] dark:group-hover:text-orange-400 transition-colors mb-2">
                      {p.name}
                    </h3>
                    <p className="text-[11px] text-[#5a4138] dark:text-slate-400 leading-relaxed line-clamp-3 mb-4">
                      {p.oneLiner}
                    </p>
                  </div>
                  <div className="text-[11px] font-bold text-[#F15E1C] flex items-center justify-between pt-2 border-t border-slate-100 dark:border-navy-700/60">
                    <span>Explore Module</span>
                    <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: OPERATIONAL METHODOLOGY GUIDES */}
        <section className="w-full bg-transparent px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-200 dark:border-navy-700/60">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-mono text-xs text-[#F15E1C] font-bold uppercase tracking-widest">
                OPERATIONAL WHITEPAPERS
              </span>
              <h2 className="text-2xl sm:text-3xl text-[#0d1b36] dark:text-white font-bold mt-1 tracking-tight">
                Practical Implementation Guidance
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {whitepapers.map((wp, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#faf8ff] dark:bg-navy-950/50 border border-slate-200 dark:border-navy-700/60 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded bg-[#ffdbcf] dark:bg-orange-950/30 text-[#380d00] dark:text-orange-400 font-mono text-[10px] font-bold">
                        {wp.category}
                      </span>
                      <span className="font-mono text-[10px] text-[#006c4d] dark:text-teal-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3" /> Published
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0d1b36] dark:text-white mb-2">{wp.title}</h3>
                    <p className="text-xs text-[#5a4138] dark:text-slate-400 leading-relaxed mb-6">{wp.desc}</p>
                  </div>

                  <Link
                    href={wp.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F15E1C] dark:text-orange-400 hover:text-[#ce4700] dark:hover:text-orange-300 transition-colors"
                  >
                    <span>Read Workflow Guide</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Planned Resources (Clearly tagged) */}
            <div className="p-6 rounded-2xl bg-[#f1f3ff] dark:bg-navy-950/40 border border-slate-200 dark:border-navy-700/60">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-4 w-4 text-[#F15E1C]" />
                <h3 className="font-mono text-xs font-bold text-[#0d1b36] dark:text-slate-200 uppercase tracking-wider">
                  Upcoming & Planned Resources (In Development)
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {plannedResources.map((pr, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60">
                    <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-navy-800 text-slate-700 dark:text-slate-300 font-mono text-[9px] font-bold uppercase mb-2 inline-block">
                      {pr.status}
                    </span>
                    <h4 className="text-sm font-bold text-[#0d1b36] dark:text-slate-200 mb-1">{pr.title}</h4>
                    <p className="text-[11px] text-[#5a4138] dark:text-slate-400 leading-relaxed">{pr.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: CTA BANNER */}
        <section className="w-full bg-transparent px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl text-[#0d1b36] dark:text-white font-extrabold tracking-tight mb-4">
              Need custom framework mapping assistance?
            </h2>
            <p className="text-sm sm:text-base text-[#5a4138] dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Our team can walk you through crosswalking your existing policies and asset registers across target frameworks.
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
