import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  FileSpreadsheet,
  ArrowRight,
  Layers,
  Lock,
  FileCheck2,
  Info,
  Building,
  Users,
  Server,
  KeyRound,
  FileText,
  Clock,
  Compass,
} from "lucide-react";
import { IsoLandingHeader } from "@/components/lp/iso27001/IsoLandingHeader";
import { IsoLeadForm } from "@/components/lp/iso27001/IsoLeadForm";
import { IsoProductVisuals } from "@/components/lp/iso27001/IsoProductVisuals";
import { IsoFaq } from "@/components/lp/iso27001/IsoFaq";

export const metadata: Metadata = {
  title: "Run ISO 27001 Without Spreadsheets | OMNiGRC",
  description:
    "Organize ISO 27001 compliance, risk management, Statement of Applicability (SoA), and supporting evidence in one unified platform.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function IsoLandingPage() {
  return (
    <div className="min-h-screen bg-white text-stone-800 antialiased selection:bg-[#f7d7b0] selection:text-[#f15e1c]">
      {/* 1. Dedicated Minimal Landing Header */}
      <IsoLandingHeader />

      <main className="relative overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#f7d7b0]/25 via-transparent to-transparent pointer-events-none -z-10" />

        {/* 2. Top Certification Disclaimer (Visible near the top without opening FAQ) */}
        <div className="w-full bg-[#f7d7b0]/35 border-b border-[#f7d7b0]/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center gap-2 text-center text-xs text-stone-700">
            <Info className="w-3.5 h-3.5 text-[#f15e1c] shrink-0" />
            <span>
              <strong>Get audit-ready faster.</strong> Certification is issued by an accredited body.
            </span>
          </div>
        </div>

        {/* 3. Hero Section (Desktop Two-Column / Mobile Stacked) */}
        <section className="relative pt-8 sm:pt-12 pb-14 lg:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: Hero Copy & Value Summary */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                {/* Framework Readiness Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7d7b0]/40 border border-[#fab60a]/50 text-xs font-semibold text-[#f15e1c]">
                  <ShieldCheck className="w-4 h-4 text-[#2e936f]" />
                  <span>ISO/IEC 27001:2022 ISMS Framework</span>
                </div>

                {/* Exact Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.15]">
                  Run ISO 27001 Without Spreadsheets.{" "}
                  <span className="text-[#f15e1c]">
                    Risk Register, SoA and Evidence in One Platform
                  </span>
                </h1>

                {/* Supporting Copy */}
                <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl">
                  OMNiGRC helps security and compliance teams organize ISO 27001 compliance activities, risk management, Statement of Applicability (SoA), and supporting audit evidence in one unified platform.
                </p>

                {/* Spreadsheet Replacement Notice */}
                <div className="p-4 rounded-xl bg-[#f7d7b0]/20 border border-[#f7d7b0] flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                  <FileSpreadsheet className="w-5 h-5 text-[#f15e1c] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900">Replace versioned spreadsheet chaos: </span>
                    Connect asset inventories, threat evaluations, Annex A controls, and recurring evidence tests directly into one auditable operational workflow.
                  </div>
                </div>

                {/* High-Level Trust Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="flex items-center gap-2 text-xs font-medium text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-[#2e936f] shrink-0" />
                    <span>Living Risk Register</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-[#2e936f] shrink-0" />
                    <span>Structured 93-Control SoA</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-[#2e936f] shrink-0" />
                    <span>Defensible Evidence Logs</span>
                  </div>
                </div>

                {/* Mobile Quick Action Link */}
                <div className="block lg:hidden pt-2">
                  <a
                    href="#lead-form"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-[#f15e1c] text-white font-bold text-sm shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-[#f15e1c] focus:ring-offset-2 transition-all"
                  >
                    <span>Book a 20-Min Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Lead Capture Form */}
              <div className="lg:col-span-5 w-full">
                <div className="sticky top-24">
                  <IsoLeadForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Lead With Business Outcomes (Three Primary Benefits) */}
        <section className="py-14 sm:py-18 bg-white border-t border-[#f7d7b0]/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#f7d7b0]/40 border border-[#fab60a]/50 text-[#f15e1c] text-xs font-bold uppercase tracking-wider mb-2">
                Operational Outcomes
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
                Three Ways OMNiGRC Simplifies Your ISO 27001 Program
              </h2>
              <p className="text-sm sm:text-base text-stone-600 mt-2">
                Move from fragmented audit prep to continuous, structured ISMS governance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Benefit 1: Manage Your Risk Register */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#f7d7b0] shadow-xs flex flex-col justify-between hover:border-[#f15e1c]/40 transition-colors">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f7d7b0]/35 flex items-center justify-center text-[#f15e1c]">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#f15e1c] uppercase tracking-wider block mb-1">
                      Risk Management
                    </span>
                    <h3 className="text-lg font-bold text-stone-900">
                      Manage Your Risk Register
                    </h3>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Organize information-security risks, risk owners, and treatment decisions in one place. Evaluate threat scenarios using standard 5x5 impact and likelihood models, and connect identified risks directly to organizational assets.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#f7d7b0]/60 text-xs text-stone-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2e936f] shrink-0" />
                  <span>Tracks Mitigate, Accept, Transfer, Avoid treatments</span>
                </div>
              </div>

              {/* Benefit 2: Build and Maintain Your Statement of Applicability */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#f7d7b0] shadow-xs flex flex-col justify-between hover:border-[#2e936f]/40 transition-colors">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2e936f]/15 flex items-center justify-center text-[#2e936f]">
                    <FileCheck2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#2e936f] uppercase tracking-wider block mb-1">
                      Annex A Crosswalk
                    </span>
                    <h3 className="text-lg font-bold text-stone-900">
                      Build & Maintain Your Statement of Applicability
                    </h3>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Determine and document Annex A control applicability with clear rationales for inclusions and exclusions. Keep your Statement of Applicability organized and aligned as policies and operational safeguards evolve.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#f7d7b0]/60 text-xs text-stone-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2e936f] shrink-0" />
                  <span>Defensible justification for every control status</span>
                </div>
              </div>

              {/* Benefit 3: Keep Audit Evidence Organized */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#f7d7b0] shadow-xs flex flex-col justify-between hover:border-[#fab60a]/60 transition-colors">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#fab60a]/20 flex items-center justify-center text-[#f15e1c]">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#f15e1c] uppercase tracking-wider block mb-1">
                      Audit Readiness
                    </span>
                    <h3 className="text-lg font-bold text-stone-900">
                      Keep Audit Evidence Organized
                    </h3>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Centralize supporting security policies, recurring control test records, and stakeholder review notes. When auditors request proof of execution, review records are already linked directly to the corresponding controls.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#f7d7b0]/60 text-xs text-stone-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2e936f] shrink-0" />
                  <span>Eliminates pre-audit screenshot scrambles</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Product Screenshots & Genuine Visual Proof */}
        <IsoProductVisuals />

        {/* 6. Annex A Framework Details (Below main product-benefit section) */}
        <section className="py-14 sm:py-18 bg-white border-b border-[#f7d7b0]/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#f7d7b0]/40 border border-[#fab60a]/50 text-[#f15e1c] text-xs font-bold uppercase tracking-wider mb-2">
                Framework Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                Structured Around the 4 Core Control Themes of ISO/IEC 27001:2022
              </h2>
              <p className="text-sm sm:text-base text-stone-600 mt-2">
                Manage all 93 Annex A controls categorized across four distinct operational domains.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Theme 1: A.5 Organizational */}
              <div className="p-5 rounded-2xl bg-[#f7d7b0]/15 border border-[#f7d7b0] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#f7d7b0] flex items-center justify-center text-[#f15e1c]">
                    <Building className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#f15e1c] bg-[#f7d7b0]/40 px-2 py-0.5 rounded-full">
                    37 Controls
                  </span>
                </div>
                <h3 className="text-sm font-bold text-stone-900">
                  A.5 Organizational Controls
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Information security policies, organizational roles, asset management, access authorization, and supplier security oversight.
                </p>
              </div>

              {/* Theme 2: A.6 People */}
              <div className="p-5 rounded-2xl bg-[#f7d7b0]/15 border border-[#f7d7b0] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#f7d7b0] flex items-center justify-center text-[#2e936f]">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#2e936f] bg-[#2e936f]/15 px-2 py-0.5 rounded-full">
                    8 Controls
                  </span>
                </div>
                <h3 className="text-sm font-bold text-stone-900">
                  A.6 People Controls
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Candidate screening, employment terms, ongoing security awareness training, disciplinary processes, and remote working.
                </p>
              </div>

              {/* Theme 3: A.7 Physical */}
              <div className="p-5 rounded-2xl bg-[#f7d7b0]/15 border border-[#f7d7b0] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#f7d7b0] flex items-center justify-center text-[#fab60a]">
                    <Server className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#f15e1c] bg-[#f7d7b0]/40 px-2 py-0.5 rounded-full">
                    14 Controls
                  </span>
                </div>
                <h3 className="text-sm font-bold text-stone-900">
                  A.7 Physical Controls
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Physical security perimeters, physical entry safeguards, equipment placement, clear desk and clear screen policies.
                </p>
              </div>

              {/* Theme 4: A.8 Technological */}
              <div className="p-5 rounded-2xl bg-[#f7d7b0]/15 border border-[#f7d7b0] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#f7d7b0] flex items-center justify-center text-[#f15e1c]">
                    <KeyRound className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#f15e1c] bg-[#f7d7b0]/40 px-2 py-0.5 rounded-full">
                    34 Controls
                  </span>
                </div>
                <h3 className="text-sm font-bold text-stone-900">
                  A.8 Technological Controls
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Privileged access management, endpoint protection, network segregation, cryptography, backup, and vulnerability management.
                </p>
              </div>
            </div>

            {/* Framework Clarification Callout */}
            <div className="mt-8 p-4 rounded-xl bg-[#f7d7b0]/25 border border-[#f7d7b0] text-center max-w-3xl mx-auto text-xs text-stone-600 leading-relaxed">
              <strong className="text-stone-900">Accreditation Notice: </strong>
              OMNiGRC provides the operational software to organize your risk assessments, control mapping, and evidence records. Independent third-party certification is conducted and awarded exclusively by an accredited certification body.
            </div>
          </div>
        </section>

        {/* 7. Audience Relevance: Built for SaaS & IT Teams */}
        <section className="py-14 sm:py-18 bg-[#f7d7b0]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#f7d7b0]/50 border border-[#fab60a]/60 text-[#f15e1c] text-xs font-bold uppercase tracking-wider mb-2">
                Audience Fit
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                Built for SaaS and IT Teams Without a Full Compliance Department
              </h2>
              <p className="text-sm sm:text-base text-stone-600 mt-2">
                Designed to help lean engineering and security teams organize risks, Annex A controls, and audit workpapers without managing fragmented spreadsheets or hiring an army of consultants.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="p-6 rounded-2xl bg-white border border-[#f7d7b0] shadow-xs space-y-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#f7d7b0]/30 flex items-center justify-center text-[#f15e1c]">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-stone-900">
                  Fast-Growing Tech Teams
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Establish formal ISMS governance and fulfill enterprise customer security questionnaire requirements without stalling product delivery.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#f7d7b0] shadow-xs space-y-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#2e936f]/15 flex items-center justify-center text-[#2e936f]">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-stone-900">
                  IT & Security Leaders
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Retire disconnected spreadsheets and maintain a single, structured source of truth for risk assessments, policies, and Annex A controls.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#f7d7b0] shadow-xs space-y-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#fab60a]/20 flex items-center justify-center text-[#f15e1c]">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-stone-900">
                  Internal Audit Coordinators
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Track recurring control tests across assigned control owners so review records and audit workpapers are ready year-round.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Prioritized ISO 27001 FAQ Section */}
        <IsoFaq />

        {/* 9. Commercial Proposal & Final Action Banner */}
        <section className="py-12 bg-[#f7d7b0]/25 border-y border-[#f7d7b0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f15e1c] uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Transparent Commercial Proposal
                </div>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  Need a tailored commercial quote for your ISO 27001 audit cycle?
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-2xl">
                  Pricing depends on your requirements. Schedule a 20-minute walkthrough to review your target framework scope, team size, and deployment model. We provide a transparent, tailored quote following the session.
                </p>
              </div>
              <a
                href="#lead-form"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2e936f] hover:bg-[#25785a] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow focus:outline-none focus:ring-2 focus:ring-[#2e936f] focus:ring-offset-2 transition-all shrink-0 cursor-pointer"
              >
                <span>Book a 20-Min Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 10. Minimal Landing Page Footer */}
      <footer className="w-full bg-white border-t border-[#f7d7b0]/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} OMNiGRC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-stone-600 hover:text-[#f15e1c] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-stone-600 hover:text-[#f15e1c] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
