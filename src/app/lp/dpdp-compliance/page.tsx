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
} from "lucide-react";
import { DpdpLandingHeader } from "@/components/lp/DpdpLandingHeader";
import { DpdpLeadForm } from "@/components/lp/DpdpLeadForm";

export const metadata: Metadata = {
  title: "DPDP Compliance Software. Track Consent, Vendors and Breaches in One Place | OMNiGRC",
  description:
    "Organise your Digital Personal Data Protection (DPDP) Act 2023 compliance operations. Track consent logs, govern vendor sub-processors, and maintain incident readiness with OMNiGRC.",
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
        {/* ── Main Conversion Hero: Two-Column Desktop / Linear Stack Mobile ── */}
        <section className="relative w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8 pb-10 sm:pb-14 overflow-hidden">
          {/* Subtle Ambient Depth Lighting */}
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
              {/* ── LEFT COLUMN: Headline, Copy, 3 Concise Benefits ── */}
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

                {/* ── 3 Concise Benefit Statements ── */}
                <div className="space-y-2.5 sm:space-y-3 max-w-2xl pt-1">
                  {/* Benefit 1 */}
                  <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl border border-slate-200/90 dark:border-navy-700/80 bg-white/75 dark:bg-navy-900/60 backdrop-blur-sm transition-all hover:border-[#2E936F]/50 dark:hover:border-teal/50 shadow-sm">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-[#2E936F]/10 dark:bg-teal/15 text-[#2E936F] dark:text-teal shrink-0 mt-0.5">
                      <FileText className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </div>
                    <div>
                      <h2 className="text-xs sm:text-sm font-bold text-navy-900 dark:text-white">
                        Consent &amp; Notice Recordkeeping
                      </h2>
                      <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                        Centralise consent notices, withdrawal triggers, and data principal interaction logs across applications without disconnected spreadsheets.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 2 */}
                  <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl border border-slate-200/90 dark:border-navy-700/80 bg-white/75 dark:bg-navy-900/60 backdrop-blur-sm transition-all hover:border-[#2E936F]/50 dark:hover:border-teal/50 shadow-sm">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-[#FAB60A]/20 dark:bg-amber/15 text-navy-900 dark:text-amber shrink-0 mt-0.5">
                      <Users2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </div>
                    <div>
                      <h2 className="text-xs sm:text-sm font-bold text-navy-900 dark:text-white">
                        Vendor &amp; Sub-Processor Oversight
                      </h2>
                      <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                        Maintain real-time Data Processor registers, track executed DPAs, and monitor technical safeguards across third-party supply chains.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 3 */}
                  <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl border border-slate-200/90 dark:border-navy-700/80 bg-white/75 dark:bg-navy-900/60 backdrop-blur-sm transition-all hover:border-[#2E936F]/50 dark:hover:border-teal/50 shadow-sm">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-[#F15E1C]/10 dark:bg-orange-500/15 text-[#F15E1C] shrink-0 mt-0.5">
                      <AlertTriangle className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </div>
                    <div>
                      <h2 className="text-xs sm:text-sm font-bold text-navy-900 dark:text-white">
                        Breach Readiness &amp; Control Evidence
                      </h2>
                      <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                        Structure incident response workflows, track Section 8 security safeguards, and capture immutable evidence trails ready for inspection.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust Badges Bar */}
                <div className="pt-1 flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-semibold text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2E936F] dark:text-teal shrink-0" />
                    <span>Indian Data Residency Ready</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2E936F] dark:text-teal shrink-0" />
                    <span>Cross-Mapped with ISO 27001 &amp; SOC 2</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2E936F] dark:text-teal shrink-0" />
                    <span>Single-Tenant Isolated Storage</span>
                  </div>
                </div>
              </div>

              {/* ── RIGHT COLUMN: High-Visibility Lead Form Card ── */}
              <div className="lg:col-span-5 w-full mt-4 lg:mt-0">
                <DpdpLeadForm />
              </div>
            </div>
          </div>
        </section>
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
