"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Shield, ArrowRight, CheckCircle2, FileCheck2, Lock } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const frameworkDetails: { [key: string]: { title: string; subtitle: string; desc: string; controls: string[] } } = {
  "soc-2": {
    title: "SOC 2 Type II Alignment & Workflow",
    subtitle: "Trust Services Criteria for Security, Availability, and Privacy",
    desc: "OMNiGRC helps lean teams map technical policies and testing dates to AICPA Common Criteria (CC1-CC9). Evidence testing cadences are managed directly on the Compliance Board.",
    controls: [
      "CC1.0 - CC5.0 Control Environment & Risk Assessment mapping",
      "CC6.0 Logical access, password policies, and MFA verification",
      "CC7.0 System operations & vulnerability management cadence",
      "CC8.0 - CC9.0 Change management and risk mitigation tracking",
    ],
  },
  "iso-27001": {
    title: "ISO 27001:2022 ISMS Operations",
    subtitle: "Information Security Management System & Annex A Controls",
    desc: "Manage your ISMS risk register, Annex A control mapping, and Statement of Applicability (SoA) within OMNiGRC without spreadsheet duplication.",
    controls: [
      "A.5 Organizational controls (policies, asset management, roles)",
      "A.6 People controls (screening, terms of employment, awareness)",
      "A.7 Physical security safeguards and working areas",
      "A.8 Technological controls (access, malware, backup, encryption)",
    ],
  },
  gdpr: {
    title: "GDPR / UK GDPR Data Protection",
    subtitle: "European & UK General Data Protection Regulation Safeguards",
    desc: "Track asset repositories, PII data flows, and technical safeguards. Link privacy risks directly to operational controls and human-approved mitigation plans.",
    controls: [
      "Article 30 Record of Processing Activities (RoPA) asset tracing",
      "Article 32 Technical and organizational security safeguards",
      "Article 33 & 34 Incident logging & breach notification protocols",
      "Article 35 Data Protection Impact Assessment (DPIA) linkages",
    ],
  },
  dpdp: {
    title: "DPDP Act India 2023 Compliance",
    subtitle: "Digital Personal Data Protection Act Fiduciary Operations",
    desc: "Structured compliance for Indian data fiduciaries. Maintain inventory of personal data flows, processing safeguards, and grievance management controls.",
    controls: [
      "Section 6 Notice and consent mechanism management",
      "Section 8(5) Reasonable security safeguards & technical controls",
      "Section 8(6) Personal data breach reporting protocols",
      "Section 11 Data principal rights & audit trail governance",
    ],
  },
  "essential-8": {
    title: "Essential 8 Cyber Mitigation (Australia)",
    subtitle: "Australian Cyber Security Centre (ACSC) Baseline Strategies",
    desc: "Align technical configurations to ACSC Maturity Levels 1-3. Verify recurring backups, patch management, and admin access controls.",
    controls: [
      "Patch Applications & Operating Systems cadences",
      "Multi-Factor Authentication (MFA) enforcement verification",
      "Restrict Administrative Privileges review workflows",
      "Regular Backups & disaster recovery simulation records",
    ],
  },
};

export default function FrameworkDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug || "soc-2";
  const fw = frameworkDetails[slug] || frameworkDetails["soc-2"];

  return (
    <div className="min-h-screen bg-[#0A111F] text-slate-100 flex flex-col justify-between">
      <Header />
      <main className="pt-32 pb-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-amber mb-3 font-semibold inline-block">
              FRAMEWORK WORKFLOW GUIDE
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {fw.title}
            </h1>
            <p className="text-lg text-slateSoft font-semibold mb-4">{fw.subtitle}</p>
            <p className="text-slate-300 text-base leading-relaxed">{fw.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {fw.controls.map((c, idx) => (
              <TiltCard key={idx} className="p-6 border-slate-800 bg-slate-900/80">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-teal/15 text-teal shrink-0">
                    <FileCheck2 className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold text-white mt-0.5">{c}</p>
                </div>
              </TiltCard>
            ))}
          </div>

          <div className="rounded-3xl border border-teal/40 bg-slate-900/90 p-8 sm:p-10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">Map {fw.title} with OMNiGRC</h3>
            <p className="text-xs text-slate-300 mb-6">
              See how your controls and assets map to {fw.title} with advisory AI assistance and human review.
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
