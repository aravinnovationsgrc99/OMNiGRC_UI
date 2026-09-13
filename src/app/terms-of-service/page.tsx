"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { GenericHeroMotif } from "@/components/ui/HeroVisualMotifs";
import { ShieldCheck, FileText, Lock, CheckCircle2, ArrowRight, Scale } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-canvas dark:bg-[#0A111F] text-navy-900 dark:text-slate-100 flex flex-col justify-between">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="LEGAL & OPERATIONAL TERMS"
          title="Terms of Service"
          subtitle="Governing terms for access and use of the OMNiGRC platform, advisory AI assistance, tenant isolation, and risk/control operating workflows."
          visual={<GenericHeroMotif type="terms" />}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-12">
          {/* Effective Date & Notice */}
          <div className="p-6 rounded-2xl border border-cardBorderWarm dark:border-teal/30 bg-cardWarm dark:bg-slate-900/80 shadow-md flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-teal/15 text-teal shrink-0">
              <Scale className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-mono text-amber uppercase font-semibold">LAST UPDATED: SEPTEMBER 2026</p>
              <h3 className="text-lg font-bold text-navy-900 dark:text-white mt-1">Temporary Operational Master Service Agreement</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-2">
                These Terms of Service (&quot;Terms&quot;) govern your organization&apos;s evaluation and operational use of OMNiGRC, including our multi-framework mapping, asset inventory correlation, risk registers, and advisory AI components.
              </p>
            </div>
          </div>

          {/* Section 1: Platform Usage & Tenant Isolation */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white flex items-center gap-2">
              <span className="text-teal font-mono">01.</span> Platform Access &amp; Tenant Isolation
            </h2>
            <div className="p-6 rounded-2xl border border-cardBorderWarm dark:border-slate-800 bg-cardWarm dark:bg-slate-900/60 space-y-3">
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                OMNiGRC provides a multi-tenant cloud GRC environment with strict logical tenant isolation. Each account operates inside isolated database schemas, preventing cross-customer data leakage.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal shrink-0 mt-0.5" />
                  <span>Authorized users must maintain secure credentials and MFA enforcement across team access.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal shrink-0 mt-0.5" />
                  <span>You retain 100% ownership of all uploaded asset metadata, control mappings, risk scores, and evidence artifacts.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2: Advisory AI & Human-in-the-Loop */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white flex items-center gap-2">
              <span className="text-teal font-mono">02.</span> Advisory AI &amp; Human-in-the-Loop Policy
            </h2>
            <div className="p-6 rounded-2xl border border-cardBorderWarm dark:border-slate-800 bg-cardWarm dark:bg-slate-900/60 space-y-3">
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                OMNiGRC incorporates advisory artificial intelligence (&quot;Advisory AI Engine&quot;) to recommend framework clause correlations and evidence checks.
              </p>
              <div className="p-4 rounded-xl bg-teal/10 border border-teal/30 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-teal font-bold">
                  <ShieldCheck className="h-4 w-4" /> Mandatory Human Oversight
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  AI suggestions never alter live risk scores or framework alignments automatically. Every AI recommendation requires explicit review and approval by an authorized GRC analyst or team lead.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Data Security & Privacy Safeguards */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white flex items-center gap-2">
              <span className="text-teal font-mono">03.</span> Security, Encryption &amp; Availability
            </h2>
            <div className="p-6 rounded-2xl border border-cardBorderWarm dark:border-slate-800 bg-cardWarm dark:bg-slate-900/60 space-y-3">
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We enforce AES-256 encryption at rest and TLS 1.3 encryption in transit for all platform data. All AI queries undergo automated payload sanitization to ensure sensitive PII and secret tokens are redacted prior to external API processing.
              </p>
            </div>
          </section>

          {/* Section 4: Limitation of Liability */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white flex items-center gap-2">
              <span className="text-teal font-mono">04.</span> Limitation of Liability
            </h2>
            <div className="p-6 rounded-2xl border border-cardBorderWarm dark:border-slate-800 bg-cardWarm dark:bg-slate-900/60 space-y-3">
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                OMNiGRC provides audit readiness and framework alignment tools. While our software helps streamline compliance workflows across SOC 2, ISO 27001, and DPDP, final regulatory responsibility and formal audit certification remain with accredited third-party auditing bodies and the customer&apos;s compliance officers.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <div className="rounded-3xl border border-cardBorderWarm dark:border-teal/40 bg-cardWarm dark:bg-slate-900/90 p-8 text-center shadow-xl">
            <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">Questions about our Terms?</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-6">Contact our legal and architecture team for detailed enterprise SLA agreements.</p>
            <Link href="/contact-us" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-teal text-white font-bold text-xs hover:bg-teal/90 shadow-lg shadow-teal/20">
              Contact Legal Team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
