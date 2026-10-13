import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Users2,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  Lock,
  ArrowRight,
  Layers,
  FileCheck2,
} from "lucide-react";
import { DpdpLandingHeader } from "@/components/lp/DpdpLandingHeader";
import { DpdpLeadForm } from "@/components/lp/DpdpLeadForm";
import { DpdpProductVisuals } from "@/components/lp/DpdpProductVisuals";
import { DpdpFaq } from "@/components/lp/DpdpFaq";

export const metadata: Metadata = {
  title: "DPDP Compliance Software. Track Consent, Vendors and Breaches in One Place | OMNiGRC",
  description:
    "Organise your Digital Personal Data Protection (DPDP) Act 2023 compliance operations. Track consent records, govern vendor sub-processors, and maintain incident readiness with OMNiGRC.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function DpdpLandingPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#0d1b36] dark:text-slate-100 flex flex-col justify-between selection:bg-[#F15E1C]/20 selection:text-navy-900 dark:selection:bg-teal/30 dark:selection:text-white antialiased">
      {/* ── Focused Ads Top Navigation ── */}
      <DpdpLandingHeader />

      <main className="flex-1 w-full">
        {/* ── 1. HERO AND LEAD FORM (Two-Column Desktop / Linear Stack Mobile) ── */}
        <section className="relative w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8 pb-10 sm:pb-14 overflow-hidden">
          {/* Ambient Depth Accents */}
          <div
            aria-hidden="true"
            className="absolute top-10 left-1/4 w-80 h-80 bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl pointer-events-none -z-10"
          />
          <div
            aria-hidden="true"
            className="absolute top-20 right-10 w-72 h-72 bg-[#FAB60A]/10 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10"
          />

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-start">
              {/* ── LEFT COLUMN: Headline, Copy, Summary Benefits ── */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                {/* Eyebrow Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffdbcf] dark:bg-orange-950/40 text-[#380d00] dark:text-orange-300 border border-[#F15E1C]/20 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#F15E1C] animate-pulse" />
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
                    INDIA DPDP ACT 2023 READINESS
                  </span>
                </div>

                {/* Exact Headline Required */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-black text-navy-900 dark:text-white tracking-tight leading-[1.18]">
                  DPDP Compliance Software. Track Consent, Vendors and Breaches in One Place
                </h1>

                {/* Supporting Copy */}
                <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300 font-medium leading-relaxed max-w-2xl">
                  OMNiGRC provides a unified operational workspace for Data Fiduciaries and Processors to organise
                  privacy risks, security safeguards, third-party vendor agreements, and defensible compliance evidence
                  in one structured workflow.
                </p>

                {/* Quick Benefit Highlights */}
                <div className="space-y-2.5 sm:space-y-3 max-w-2xl pt-1">
                  <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl border border-slate-200/90 dark:border-navy-700/80 bg-white/75 dark:bg-navy-900/60 backdrop-blur-sm shadow-sm">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-[#2E936F]/10 dark:bg-teal/15 text-[#2E936F] dark:text-teal shrink-0 mt-0.5">
                      <FileText className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </div>
                    <div>
                      <h2 className="text-xs sm:text-sm font-bold text-navy-900 dark:text-white">
                        Consent and Notice Records
                      </h2>
                      <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                        Centralise consent notices, withdrawal triggers, and data principal interaction logs across applications without disconnected spreadsheets.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl border border-slate-200/90 dark:border-navy-700/80 bg-white/75 dark:bg-navy-900/60 backdrop-blur-sm shadow-sm">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-[#FAB60A]/20 dark:bg-amber/15 text-navy-900 dark:text-amber shrink-0 mt-0.5">
                      <Users2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </div>
                    <div>
                      <h2 className="text-xs sm:text-sm font-bold text-navy-900 dark:text-white">
                        Vendor and Third-Party Oversight
                      </h2>
                      <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                        Maintain structured Data Processor registers, track executed DPAs, and monitor technical safeguards across third-party supply chains.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl border border-slate-200/90 dark:border-navy-700/80 bg-white/75 dark:bg-navy-900/60 backdrop-blur-sm shadow-sm">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-[#F15E1C]/10 dark:bg-orange-500/15 text-[#F15E1C] shrink-0 mt-0.5">
                      <AlertTriangle className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </div>
                    <div>
                      <h2 className="text-xs sm:text-sm font-bold text-navy-900 dark:text-white">
                        Breach Readiness and Evidence
                      </h2>
                      <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                        Structure incident response workflows, track Section 8 security safeguards, and capture verifiable evidence trails ready for inspection.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="pt-1 flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-semibold text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E936F] dark:text-teal shrink-0" />
                    <span>Indian Data Residency Ready</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E936F] dark:text-teal shrink-0" />
                    <span>Cross-Mapped with ISO 27001 &amp; SOC 2</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E936F] dark:text-teal shrink-0" />
                    <span>Single-Tenant Isolated Storage</span>
                  </div>
                </div>
              </div>

              {/* ── RIGHT COLUMN: Lead Form Card ── */}
              <div className="lg:col-span-5 w-full mt-4 lg:mt-0">
                <DpdpLeadForm />
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. THREE CORE BENEFITS IN DEPTH ── */}
        <section className="w-full py-12 sm:py-16 border-t border-slate-200/80 dark:border-navy-700/80 bg-white/50 dark:bg-[#0A111F]/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#D4521A] dark:text-amber">
                WHAT YOU CAN DO WITH OMNIGRC
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-900 dark:text-white tracking-tight mt-1.5">
                Core Capabilities for DPDP Operations
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Connect privacy records, vendor inventories, and incident response into an auditable day-to-day workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Core Benefit 1: Consent Tracking */}
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-navy-700/80 bg-white dark:bg-[#16233F]/90 shadow-sm flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-[#2E936F]/10 dark:bg-teal/15 text-[#2E936F] dark:text-teal w-fit">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#2E936F]/10 text-[#1E6048] dark:bg-teal-950/40 dark:text-teal-300 border border-[#2E936F]/30 dark:border-teal-700/50 w-fit">
                    CONSENT TRACKING
                  </span>
                  <h3 className="text-lg font-bold text-navy-900 dark:text-white">
                    Consent and Notice Records
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Organise consent notices, itemised purpose notices, and data principal interaction logs across your
                    applications. Maintain timestamped audit records of privacy notices presented to users and track
                    withdrawal requests without relying on scattered spreadsheets.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-navy-800 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  Supported: Structured notice versioning &amp; withdrawal logs
                </div>
              </div>

              {/* Core Benefit 2: Vendor Register */}
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-navy-700/80 bg-white dark:bg-[#16233F]/90 shadow-sm flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-[#FAB60A]/20 dark:bg-amber/15 text-navy-900 dark:text-amber w-fit">
                    <Users2 className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FAB60A]/15 text-[#915B00] dark:bg-amber-950/40 dark:text-amber-300 border border-[#FAB60A]/30 dark:border-amber-800/50 w-fit">
                    VENDOR REGISTER
                  </span>
                  <h3 className="text-lg font-bold text-navy-900 dark:text-white">
                    Vendor and Third-Party Oversight
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Maintain a unified Data Processor register documenting third-party services processing personal data.
                    Track executed Data Processing Agreements (DPAs), verify technical safeguards, and monitor vendor
                    SOC 2 / ISO certifications to meet Data Fiduciary oversight duties.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-navy-800 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  Supported: Processor inventory, DPA tracking &amp; questionnaire status
                </div>
              </div>

              {/* Core Benefit 3: Breach Workflow */}
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-navy-700/80 bg-white dark:bg-[#16233F]/90 shadow-sm flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-[#F15E1C]/10 dark:bg-orange-500/15 text-[#F15E1C] w-fit">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#F15E1C]/10 text-[#D4521A] dark:bg-orange-950/40 dark:text-orange-300 border border-[#F15E1C]/30 dark:border-orange-800/50 w-fit">
                    BREACH WORKFLOW
                  </span>
                  <h3 className="text-lg font-bold text-navy-900 dark:text-white">
                    Breach Readiness and Evidence
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Establish structured internal escalation paths and operational incident procedures. Track Section 8
                    reasonable security safeguards (access controls, encryption, backup verification), and maintain
                    auditable logs demonstrating active risk treatment.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-navy-800 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  Supported: Incident response workflows &amp; auditable testing records
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. AUDIENCE POSITIONING: WHO OMNIGRC IS BUILT FOR ── */}
        <section className="w-full py-12 sm:py-14 border-t border-slate-200/80 dark:border-navy-700/80 bg-slate-50/50 dark:bg-navy-950/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#2E936F] dark:text-teal-400">
                AUDIENCE FIT
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-navy-900 dark:text-white tracking-tight mt-1">
                Who OMNiGRC Is Built For
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Designed specifically for teams handling digital personal data who need clear operational oversight without legacy software bloat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-navy-700/80 bg-white dark:bg-[#16233F]/90 shadow-sm space-y-2.5">
                <div className="p-2.5 rounded-xl bg-orange-500/10 text-[#F15E1C] w-fit">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-navy-900 dark:text-white">
                  Lean Security &amp; GRC Teams
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Small security and compliance teams that must maintain risk registers, oversee vendor agreements, and prepare for audits without hiring expensive external consulting armies.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 dark:border-navy-700/80 bg-white dark:bg-[#16233F]/90 shadow-sm space-y-2.5">
                <div className="p-2.5 rounded-xl bg-[#2E936F]/10 text-[#2E936F] dark:text-teal w-fit">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-navy-900 dark:text-white">
                  Growing SaaS &amp; Cloud Products
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Technology platforms processing user PII that require structured consent logs, technical sub-processor oversight, and defensible security safeguard controls in production.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 dark:border-navy-700/80 bg-white dark:bg-[#16233F]/90 shadow-sm space-y-2.5">
                <div className="p-2.5 rounded-xl bg-[#FAB60A]/20 text-navy-900 dark:text-amber w-fit">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-navy-900 dark:text-white">
                  Multi-Framework Compliance Leads
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Organizations managing DPDP Act duties alongside ISO 27001 or SOC 2 who want to link technical controls once rather than running duplicate siloed spreadsheets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. PRODUCT SCREENSHOTS AND SUPPORTING WORKFLOW EXPLANATION ── */}
        <DpdpProductVisuals />

        {/* ── 5. RELEVANT FRAMEWORK OR STATUTORY DETAILS ── */}
        <section className="w-full py-12 sm:py-16 border-t border-slate-200/80 dark:border-navy-700/80 bg-white/70 dark:bg-navy-950/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#2E936F] dark:text-teal-400">
                STATUTORY STRUCTURE ALIGNMENT
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-900 dark:text-white tracking-tight mt-1.5">
                Key DPDP Act 2023 Provisions Mapped in OMNiGRC
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                How OMNiGRC helps Data Fiduciaries organize internal controls to support core statutory duties.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Provision 1 */}
              <div className="p-5 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-white dark:bg-[#16233F]/80 space-y-2">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1.5 xs:gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-[#D4521A] dark:text-amber tracking-tight">
                    DPDP Section 5 &amp; 6
                  </span>
                  <span className="self-start xs:self-auto inline-flex items-center text-[10.5px] sm:text-xs font-mono font-semibold tracking-wide px-2.5 py-0.5 rounded-full bg-[#2E936F]/10 text-[#1E6048] dark:bg-teal-950/50 dark:text-teal-300 border border-[#2E936F]/30 dark:border-teal-700/50 whitespace-nowrap shadow-2xs">
                    Consent &amp; Notice
                  </span>
                </div>
                <h3 className="text-sm font-bold text-navy-900 dark:text-white">
                  Notice Requirements &amp; Consent Recordkeeping
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Requires clear notice specifying the personal data sought and purpose of processing. OMNiGRC helps teams
                  version notice templates, record consent workflows, and manage data principal grievance tracking.
                </p>
              </div>

              {/* Provision 2 */}
              <div className="p-5 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-white dark:bg-[#16233F]/80 space-y-2">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1.5 xs:gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-[#D4521A] dark:text-amber tracking-tight">
                    DPDP Section 8(1) &amp; 8(2)
                  </span>
                  <span className="self-start xs:self-auto inline-flex items-center text-[10.5px] sm:text-xs font-mono font-semibold tracking-wide px-2.5 py-0.5 rounded-full bg-[#2E936F]/10 text-[#1E6048] dark:bg-teal-950/50 dark:text-teal-300 border border-[#2E936F]/30 dark:border-teal-700/50 whitespace-nowrap shadow-2xs">
                    Processor Oversight
                  </span>
                </div>
                <h3 className="text-sm font-bold text-navy-900 dark:text-white">
                  Data Fiduciary Responsibility for Processors
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Data Fiduciaries remain responsible for processing carried out on their behalf. OMNiGRC's vendor register
                  tracks data processor agreements (DPAs), subcontractor engagements, and third-party security assessments.
                </p>
              </div>

              {/* Provision 3 */}
              <div className="p-5 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-white dark:bg-[#16233F]/80 space-y-2">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1.5 xs:gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-[#D4521A] dark:text-amber tracking-tight">
                    DPDP Section 8(5)
                  </span>
                  <span className="self-start xs:self-auto inline-flex items-center text-[10.5px] sm:text-xs font-mono font-semibold tracking-wide px-2.5 py-0.5 rounded-full bg-[#2E936F]/10 text-[#1E6048] dark:bg-teal-950/50 dark:text-teal-300 border border-[#2E936F]/30 dark:border-teal-700/50 whitespace-nowrap shadow-2xs">
                    Security Safeguards
                  </span>
                </div>
                <h3 className="text-sm font-bold text-navy-900 dark:text-white">
                  Reasonable Security Safeguards
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Mandates taking reasonable security safeguards to prevent personal data breaches. OMNiGRC maps access
                  controls, encryption standards, vulnerability tracking, and verification cadences to verify safeguards in practice.
                </p>
              </div>

              {/* Provision 4 */}
              <div className="p-5 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-white dark:bg-[#16233F]/80 space-y-2">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1.5 xs:gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-[#D4521A] dark:text-amber tracking-tight">
                    DPDP Section 8(6)
                  </span>
                  <span className="self-start xs:self-auto inline-flex items-center text-[10.5px] sm:text-xs font-mono font-semibold tracking-wide px-2.5 py-0.5 rounded-full bg-[#2E936F]/10 text-[#1E6048] dark:bg-teal-950/50 dark:text-teal-300 border border-[#2E936F]/30 dark:border-teal-700/50 whitespace-nowrap shadow-2xs">
                    Breach Notification
                  </span>
                </div>
                <h3 className="text-sm font-bold text-navy-900 dark:text-white">
                  Personal Data Breach Readiness
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Requires intimating the Data Protection Board and affected Data Principals in event of a breach. OMNiGRC
                  structures incident classification, response playbooks, and evidence collection workflows.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-[11px] text-slate-500 dark:text-slate-400 italic max-w-xl mx-auto">
                * Statutory references represent operational alignment within the OMNiGRC software platform and do not constitute formal legal interpretations.
              </p>
            </div>
          </div>
        </section>

        {/* ── 6. COMMERCIAL SCOPING & ONBOARDING PROPOSALS ── */}
        <section className="w-full py-10 sm:py-12 border-t border-slate-200/80 dark:border-navy-700/80 bg-slate-50/70 dark:bg-navy-900/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-navy-700/80 bg-white dark:bg-[#16233F]/90 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="inline-flex items-center text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FAB60A]/15 text-[#915B00] dark:bg-amber-950/40 dark:text-amber-300 border border-[#FAB60A]/30 dark:border-amber-800/50 w-fit mb-2">
                  TRANSPARENT COMMERCIAL SCOPING
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-navy-900 dark:text-white">
                  Custom Proposals Tailored to Your Deployment Scope
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                  Commercial proposals are structured around your operational architecture (Shared SaaS, Private dedicated instance, or Customer-controlled container), target frameworks, and entity complexity without hidden fees.
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href="#lead-form"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F15E1C] hover:bg-[#D4521A] text-white font-bold text-xs shadow-md hover:shadow-lg transition-all"
                >
                  <span>Request Custom Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. REMAINING FAQ AND LEGAL DISCLAIMER ── */}
        <DpdpFaq />
      </main>

      {/* ── Streamlined Compliant Footer ── */}
      <footer className="w-full border-t border-slate-200/80 dark:border-navy-700/80 bg-white/60 dark:bg-[#0A111F]/80 backdrop-blur-sm py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
            {/* Legal Disclaimer Required */}
            <div className="text-[11px] text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
              <strong className="font-semibold text-slate-700 dark:text-slate-300">Notice:</strong> OMNiGRC is a governance,
              risk, and compliance software platform designed to assist organisations with internal workflows and documentation.
              It does not provide legal advice, statutory certification, or legal representation. Consult qualified legal counsel
              for DPDP statutory interpretations.
            </div>

            {/* Links and Copyright */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 text-[11px] sm:text-xs text-slate-600 dark:text-slate-400">
              <Link href="/privacy-policy" className="hover:text-navy-900 dark:hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-slate-300 dark:text-navy-700">•</span>
              <Link href="/terms-of-service" className="hover:text-navy-900 dark:hover:text-white transition-colors">
                Terms of Service
              </Link>
              <span className="text-slate-300 dark:text-navy-700">•</span>
              <Link href="/contact-us" className="hover:text-navy-900 dark:hover:text-white transition-colors">
                Contact
              </Link>
              <span className="text-slate-300 dark:text-navy-700">•</span>
              <span className="text-slate-500 dark:text-slate-400">
                &copy; {new Date().getFullYear()} OMNiGRC
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
