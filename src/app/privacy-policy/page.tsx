"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { GenericHeroMotif } from "@/components/ui/HeroVisualMotifs";
import { ShieldCheck, Lock, Eye, CheckCircle2, ArrowRight, Database, FileCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-transparent text-navy-900 dark:text-slate-100 flex flex-col justify-between">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="DATA PROTECTION & TRUST"
          title="Privacy Policy"
          subtitle="Our explicit commitment to zero-retention compliance AI, payload sanitization, tenant isolation, and regulatory data protection."
          visual={<GenericHeroMotif type="privacy" />}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-12">
          {/* Effective Date & Notice */}
          <div className="p-6 rounded-2xl border border-cardBorderWarm dark:border-teal/30 bg-cardWarm dark:bg-slate-900/80 shadow-md flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-teal/15 text-teal shrink-0">
              <Lock className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-mono text-[#D4521A] dark:text-amber uppercase font-semibold">LAST UPDATED: SEPTEMBER 2026</p>
              <h3 className="text-lg font-bold text-navy-900 dark:text-white mt-1">Privacy Engineering &amp; Data Minimization Commitment</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-2">
                At OMNiGRC, we design GRC software built on data minimization. This policy explains what metadata we collect, how advisory AI processes queries, and how we protect your security posture data.
              </p>
            </div>
          </div>

          {/* Section 1: Data We Collect */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white flex items-center gap-2">
              <span className="text-teal font-mono">01.</span> Categories of Data We Collect
            </h2>
            <div className="p-6 rounded-2xl border border-cardBorderWarm dark:border-slate-800 bg-cardWarm dark:bg-slate-900/60 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/60 space-y-2">
                  <span className="text-xs font-mono text-teal font-bold flex items-center gap-1.5">
                    <Database className="h-4 w-4" /> Account &amp; Tenant Metadata
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Work emails, team user roles, company domain names, and administrative audit log timestamps.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/60 space-y-2">
                  <span className="text-xs font-mono text-[#D4521A] dark:text-amber font-bold flex items-center gap-1.5">
                    <FileCheck className="h-4 w-4" /> GRC Posture Data
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Control statements, asset tags, 5x5 risk scores, evidence upload metadata, and framework mapping choices.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Zero-Retention AI Payload Policy */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white flex items-center gap-2">
              <span className="text-teal font-mono">02.</span> AI Data Minimization &amp; Zero-Retention Policy
            </h2>
            <div className="p-6 rounded-2xl border border-cardBorderWarm dark:border-slate-800 bg-cardWarm dark:bg-slate-900/60 space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                When our Advisory AI engine evaluates framework clause alignment:
              </p>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal shrink-0 mt-0.5" />
                  <span><strong>Automated Payload Sanitization:</strong> All text payloads are automatically scrubbed for credentials, secret tokens, and PII before transmission.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal shrink-0 mt-0.5" />
                  <span><strong>Zero-Training Guarantee:</strong> Customer data is NEVER used to train foundational AI models or public datasets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal shrink-0 mt-0.5" />
                  <span><strong>Zero-Retention Processing:</strong> Ephemeral API connections discard prompt context immediately upon generating suggestions.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3: Regulatory Alignment (DPDP, GDPR, ISO 27001) */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white flex items-center gap-2">
              <span className="text-teal font-mono">03.</span> Regulatory Safeguards &amp; User Rights
            </h2>
            <div className="p-6 rounded-2xl border border-cardBorderWarm dark:border-slate-800 bg-cardWarm dark:bg-slate-900/60 space-y-3">
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We maintain architectural readiness under DPDP Act India 2023, EU GDPR, and ISO 27001 Annex A data handling standards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-[#2E936F]/10 dark:bg-teal/10 border border-[#2E936F]/20 dark:border-teal/20 text-[#2E936F] dark:text-teal text-center">
                  <p className="font-bold">Right to Portability</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">Export JSON/CSV posture</p>
                </div>
                <div className="p-3 rounded-xl bg-[#FAB60A]/20 dark:bg-amber/10 border border-[#FAB60A]/20 dark:border-amber/20 text-navy-900 dark:text-amber text-center">
                  <p className="font-bold">Right to Erasure</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">Permanent tenant purging</p>
                </div>
                <div className="p-3 rounded-xl bg-[#2E936F]/10 dark:bg-teal/10 border border-[#2E936F]/20 dark:border-teal/20 text-[#2E936F] dark:text-teal text-center">
                  <p className="font-bold">Auditability</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">Structured change log</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <div className="rounded-3xl border border-cardBorderWarm dark:border-teal/40 bg-cardWarm dark:bg-slate-900/90 p-8 text-center shadow-xl">
            <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">Have a Privacy or DPA Request?</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-6">Our Data Protection Officer can provide formal Data Processing Addendums (DPA) upon request.</p>
            <Link href="/contact-us" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-teal text-white font-bold text-xs hover:bg-teal/90 shadow-lg shadow-teal/20">
              Request DPA or Contact DPO <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
