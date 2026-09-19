import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FrameworkMotif } from "@/components/ui/HeroVisualMotifs";
import { FRAMEWORKS, getFrameworkBySlug } from "@/lib/frameworks";
import {
  Shield,
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Lock,
  Layers,
  Sparkles,
  AlertTriangle,
  ChevronRight,
  BookOpen,
  HelpCircle,
  Briefcase,
  GitPullRequest,
  ExternalLink,
  Info
} from "lucide-react";

export async function generateStaticParams() {
  return FRAMEWORKS.map((fw) => ({
    slug: fw.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const fw = getFrameworkBySlug(params.slug);
  if (!fw) {
    return {
      title: "Framework Guide — OMNiGRC",
      description: "Substantive educational and operational governance framework guides.",
    };
  }

  return {
    title: `${fw.name} Framework Guide — OMNiGRC`,
    description: `${fw.subtitle}. ${fw.desc}`,
    openGraph: {
      title: `${fw.name} Framework Guide — OMNiGRC`,
      description: fw.desc,
      url: `https://omnigrc.com/frameworks/${fw.slug}`,
      siteName: "OMNiGRC",
      type: "article",
    },
  };
}

export default function FrameworkDetailPage({ params }: { params: { slug: string } }) {
  const fw = getFrameworkBySlug(params.slug);

  if (!fw) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#faf8ff] dark:bg-[#0A111F] text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />

      <main className="flex-1 w-full pt-24 sm:pt-28">
        {/* BREADCRUMB */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs font-mono text-[#5a4138] dark:text-slate-400">
            <Link href="/" className="hover:text-[#F15E1C] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 opacity-50" />
            <Link href="/frameworks" className="hover:text-[#F15E1C] transition-colors">Frameworks</Link>
            <ChevronRight className="h-3 w-3 opacity-50" />
            <span className="text-[#0d1b36] dark:text-white font-semibold">{fw.name}</span>
          </nav>
        </div>

        {/* HERO SECTION */}
        <section className="relative w-full px-4 sm:px-6 lg:px-8 pt-4 pb-12 overflow-hidden border-b border-slate-200 dark:border-navy-700/60">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ffdbcf]/30 rounded-full blur-3xl pointer-events-none -z-10 ambient-motion-1" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#ffdbcf] dark:bg-orange-950/30 text-[#380d00] dark:text-orange-400 font-mono text-xs font-bold uppercase">
                  {fw.badge}
                </span>
                <span className="px-3 py-1 rounded-full bg-white dark:bg-navy-900 text-[#0d1b36] dark:text-slate-300 font-mono text-xs font-bold uppercase border border-slate-200 dark:border-navy-700/60">
                  {fw.region}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d1b36] dark:text-white tracking-tight mb-4">
                {fw.name} Framework Guide
              </h1>

              <p className="font-mono text-sm text-[#F15E1C] dark:text-orange-400 font-semibold mb-3">
                {fw.headerDesc}
              </p>

              <p className="text-base sm:text-lg text-[#5a4138] dark:text-slate-300 leading-relaxed mb-6">
                {fw.desc}
              </p>

              {/* Citations Preview Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 shadow-sm mb-8">
                <span className="font-mono text-xs text-[#5a4138] dark:text-slate-400 font-medium">Selected Framework Citations:</span>
                <div className="flex items-center gap-1.5">
                  {fw.citations.map((c, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-[#ffdbcf] dark:bg-orange-950/30 text-[#380d00] dark:text-orange-400 font-mono text-xs font-semibold">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-[#F15E1C] to-[#D4521A] hover:shadow-lg transition-all shadow-md text-sm"
                >
                  <span>Request Framework Walkthrough</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/frameworks"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[#0d1b36] dark:text-slate-200 bg-white dark:bg-navy-950 border border-slate-200 dark:border-navy-700/60 hover:bg-slate-50 dark:hover:bg-navy-900 transition-all text-sm"
                >
                  <span>View All Frameworks</span>
                </Link>
              </div>
            </div>

            {/* Visual Hero Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffdbcf]/20 rounded-full blur-2xl pointer-events-none" />
                <FrameworkMotif slug={fw.slug} accentColor={fw.accentColor} />
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-navy-700/60 text-center">
                  <span className="font-mono text-xs text-[#006c4d] dark:text-teal-400 font-semibold flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4" /> Operational Crosswalk Supported
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: WHAT THE FRAMEWORK IS */}
        <section className="w-full bg-white dark:bg-[#0A111F] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-b border-slate-200 dark:border-navy-700/60">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1f3ff] dark:bg-navy-950/50 text-[#0d1b36] dark:text-slate-300 font-mono text-xs font-bold uppercase mb-4">
              <BookOpen className="h-3.5 w-3.5 text-[#F15E1C]" /> Framework Overview
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0d1b36] dark:text-white tracking-tight mb-4">
              What is {fw.name}?
            </h2>
            <p className="text-base text-[#5a4138] dark:text-slate-300 leading-relaxed mb-6 font-normal">
              {fw.whatItIs}
            </p>

            <div className="p-4 rounded-xl bg-[#f1f3ff] dark:bg-navy-950/40 border border-slate-200 dark:border-navy-700/60 flex items-start gap-3">
              <Info className="h-5 w-5 text-[#F15E1C] shrink-0 mt-0.5" />
              <p className="text-xs text-[#0d1b36] dark:text-white leading-relaxed">
                <strong className="font-semibold">OMNiGRC Operational Principle:</strong> {fw.omniWorkflow}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: APPLICABILITY */}
        <section className="w-full bg-[#f1f3ff] dark:bg-[#0A111F] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-b border-slate-200 dark:border-navy-700/60">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="font-mono text-xs text-[#F15E1C] font-bold uppercase tracking-widest">
                TARGET APPLICABILITY
              </span>
              <h2 className="text-2xl sm:text-3xl text-[#0d1b36] dark:text-white font-bold mt-2">
                Who Needs {fw.name}?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fw.applicability.map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 shadow-sm flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-[#ffdbcf] dark:bg-orange-950/30 text-[#380d00] dark:text-orange-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-[#F15E1C]" />
                  </div>
                  <p className="text-sm text-[#0d1b36] dark:text-white font-medium leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: KEY REQUIREMENTS & CONTROL DOMAINS */}
        <section className="w-full bg-white dark:bg-[#0A111F] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-b border-slate-200 dark:border-navy-700/60">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="font-mono text-xs text-[#F15E1C] font-bold uppercase tracking-widest">
                STRUCTURED CONTROL DOMAINS
              </span>
              <h2 className="text-2xl sm:text-3xl text-[#0d1b36] dark:text-white font-bold mt-2">
                Key Domains & Requirements
              </h2>
              <p className="text-sm text-[#5a4138] dark:text-slate-400 mt-2">
                Core clause domains and requirement baselines represented in OMNiGRC's unified schema.
              </p>
            </div>

            {/* Control Domains Grid */}
            <div className="mb-10">
              <h3 className="font-mono text-xs text-[#0d1b36] dark:text-slate-300 uppercase font-bold tracking-wider mb-4 text-center">
                Primary Control Domains (`controlDomains`)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {fw.controlDomains.map((domain, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#f1f3ff] dark:bg-navy-950/40 border border-slate-200 dark:border-navy-700/60 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-[#F15E1C] text-white font-mono text-xs font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <h4 className="font-mono text-xs font-bold text-[#0d1b36] dark:text-slate-200 uppercase">{domain}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Clauses / Controls */}
            <div>
              <h3 className="font-mono text-xs text-[#0d1b36] dark:text-slate-300 uppercase font-bold tracking-wider mb-4 text-center">
                Sample Requirement Mappings (`controls`)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fw.controls.map((ctrl, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#faf8ff] dark:bg-navy-950/30 border border-slate-200 dark:border-navy-700/60 flex items-start gap-3">
                    <FileCheck2 className="h-5 w-5 text-[#006c4d] dark:text-teal-400 shrink-0 mt-0.5" />
                    <p className="text-xs font-semibold text-[#0d1b36] dark:text-slate-200 leading-relaxed">{ctrl}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: PRACTICAL IMPLEMENTATION PATH */}
        <section className="w-full bg-[#f1f3ff] dark:bg-[#0A111F] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-b border-slate-200 dark:border-navy-700/60">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="font-mono text-xs text-[#F15E1C] font-bold uppercase tracking-widest">
                OPERATIONAL ROADMAP
              </span>
              <h2 className="text-2xl sm:text-3xl text-[#0d1b36] dark:text-white font-bold mt-2">
                Practical Implementation Path
              </h2>
              <p className="text-sm text-[#5a4138] dark:text-slate-400 mt-2">
                A structured four-step methodology to operationalize {fw.name} compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fw.implementationPath.map((step) => (
                <div key={step.step} className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 shadow-sm relative">
                  <span className="font-mono text-2xl font-extrabold text-[#F15E1C]/30 absolute top-4 right-4">
                    {step.step}
                  </span>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded bg-[#ffdbcf] dark:bg-orange-950/30 text-[#380d00] dark:text-orange-400 font-mono text-xs font-bold">
                      STEP {step.step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#0d1b36] dark:text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-[#5a4138] dark:text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: COMMON MISTAKES */}
        <section className="w-full bg-white dark:bg-[#0A111F] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-b border-slate-200 dark:border-navy-700/60">
          <div className="max-w-4xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="font-mono text-xs text-[#F15E1C] font-bold uppercase tracking-widest">
                GOVERNANCE PITFALLS
              </span>
              <h2 className="text-2xl sm:text-3xl text-[#0d1b36] dark:text-white font-bold mt-2">
                Common Implementation Mistakes
              </h2>
            </div>

            <div className="space-y-4">
              {fw.commonMistakes.map((mistake, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#fff5f2] dark:bg-red-950/20 border border-[#ffdbcf] dark:border-red-900/40 flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-[#D4521A] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#380d00] dark:text-slate-300 font-medium leading-relaxed">{mistake}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: HOW OMNIGRC SUPPORTS THE WORKFLOW */}
        <section className="w-full bg-[#0d1b36] text-white px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800 dark:border-navy-800">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffdbcf] dark:bg-orange-950/30 text-[#380d00] dark:text-orange-400 font-mono text-xs font-bold uppercase mb-4">
                <Sparkles className="h-3.5 w-3.5 text-[#F15E1C]" /> OMNiGRC WORKFLOW SUPPORT
              </div>
              <h2 className="text-2xl sm:text-4xl text-white font-bold tracking-tight">
                How OMNiGRC Operationalizes {fw.name}
              </h2>
              <p className="text-sm text-slate-300 mt-3">
                Map once, maintain live visibility, and simplify audit preparation with Advisory AI and human oversight.
              </p>
            </div>

            {/* OmniWorkflow Banner */}
            <div className="p-6 rounded-2xl bg-[#172a4d] border border-slate-700 mb-8">
              <span className="font-mono text-xs text-[#F15E1C] uppercase font-bold tracking-wider block mb-2">
                Core Connected Workflow (`omniWorkflow`)
              </span>
              <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
                "{fw.omniWorkflow}"
              </p>
            </div>

            {/* Support Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {fw.omniSupportPoints.map((point, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#172a4d]/60 border border-slate-700/80 flex items-start gap-3">
                  <div className="p-1 rounded bg-[#006c4d]/30 text-[#006c4d] shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-[#2E936F]" />
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-normal">{point}</p>
                </div>
              ))}
            </div>

            {/* Product Truth Boundary Card */}
            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-700 text-xs text-slate-300 leading-relaxed">
              <strong className="text-amber-400 font-semibold block mb-1">Product Truth Boundary Notice:</strong>
              OMNiGRC is a governance and compliance management application. Using OMNiGRC provides structured workflow support and evidence indexing, but does not itself issue legal guarantees, formal certifications, or replace independent external audits. AI features advise; humans retain final decision authority.
            </div>
          </div>
        </section>

        {/* SECTION 7: FRAMEWORK REFERENCES */}
        <section className="w-full bg-white dark:bg-[#0A111F] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-b border-slate-200 dark:border-navy-700/60">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-mono text-xs text-[#F15E1C] font-bold uppercase tracking-widest">
              FRAMEWORK REFERENCES
            </span>
            <h2 className="text-2xl sm:text-3xl text-[#0d1b36] dark:text-white font-bold mt-2 mb-4">
              Supported Citations &amp; References
            </h2>
            <p className="text-xs sm:text-sm text-[#5a4138] dark:text-slate-400 max-w-2xl mx-auto mb-8">
              Every mapping suggestion in OMNiGRC is anchored directly to published standard taxonomies.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {fw.citations.map((c, idx) => (
                <div key={idx} className="px-6 py-4 rounded-xl bg-[#f1f3ff] dark:bg-navy-950/40 border border-slate-200 dark:border-navy-700/60 flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-[#F15E1C]" />
                  <div className="text-left">
                    <span className="font-mono text-xs font-bold text-[#0d1b36] dark:text-slate-200 block">Clause {c}</span>
                    <span className="text-[10px] text-[#5a4138] dark:text-slate-400">Standard Reference</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: FAQS */}
        <section className="w-full bg-[#f1f3ff] dark:bg-navy-950/30 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-b border-slate-200 dark:border-navy-700/60">
          <div className="max-w-4xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-navy-900 text-[#0d1b36] dark:text-slate-300 font-mono text-xs font-bold uppercase mb-2 border border-slate-200 dark:border-navy-700/60">
                <HelpCircle className="h-3.5 w-3.5 text-[#F15E1C]" /> FAQ
              </div>
              <h2 className="text-2xl sm:text-3xl text-[#0d1b36] dark:text-white font-bold">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {fw.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 shadow-sm">
                  <h3 className="text-sm sm:text-base font-bold text-[#0d1b36] dark:text-white mb-2 flex items-start gap-2">
                    <span className="text-[#F15E1C] font-mono">Q.</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5a4138] dark:text-slate-400 leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: RELATED WORKFLOWS */}
        <section className="w-full bg-white dark:bg-[#0A111F] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-b border-slate-200 dark:border-navy-700/60">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="font-mono text-xs text-[#F15E1C] font-bold uppercase tracking-widest">
                CONNECTED MODULES
              </span>
              <h2 className="text-2xl sm:text-3xl text-[#0d1b36] dark:text-white font-bold mt-2">
                Related OMNiGRC Workflows
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fw.relatedWorkflows.map((rel, idx) => (
                <Link
                  key={idx}
                  href={rel.href}
                  className="p-5 rounded-2xl bg-[#f1f3ff] dark:bg-navy-950/50 border border-slate-200 dark:border-navy-700/60 hover:border-[#F15E1C]/40 dark:hover:border-orange-500/40 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-base font-bold text-[#0d1b36] dark:text-white group-hover:text-[#F15E1C] transition-colors flex items-center justify-between mb-2">
                      <span>{rel.title}</span>
                      <ChevronRight className="h-4 w-4 text-[#5a4138] dark:text-slate-400 group-hover:translate-x-1 transition-transform" />
                    </h3>
                    <p className="text-xs text-[#5a4138] dark:text-slate-400 leading-relaxed">{rel.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10: CTA BANNER */}
        <section className="w-full bg-[#faf8ff] dark:bg-navy-950/30 px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl text-[#0d1b36] dark:text-white font-extrabold tracking-tight mb-4">
              Operationalize {fw.name} with OMNiGRC.
            </h2>
            <p className="text-sm sm:text-base text-[#5a4138] dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Schedule a technical demonstration to see how your controls and assets map to {fw.name} with Advisory AI and human review.
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
