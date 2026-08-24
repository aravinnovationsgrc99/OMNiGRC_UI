"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Shield, ArrowRight, CheckCircle2, FileCheck } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const frameworkDetails: { [key: string]: { title: string; subtitle: string; desc: string; controls: string[] } } = {
  "soc-2": {
    title: "SOC 2 Type II Compliance Automation",
    subtitle: "Achieve and maintain SOC 2 Type II compliance continuously",
    desc: "Arav'sGRC maps Trust Services Criteria (Security, Availability, Confidentiality, Processing Integrity, Privacy), collects evidence natively, and manages your audit end-to-end.",
    controls: [
      "CC1.0 - CC9.0 Common Criteria pre-mapped controls",
      "Automated infrastructure & access telemetry",
      "Continuous gap detection & policy generator",
      "Direct Auditor Express Portal integration",
    ],
  },
  "iso-27001": {
    title: "ISO 27001:2022 ISMS Automation",
    subtitle: "Complete Annex A controls & ISMS risk management",
    desc: "Automate your Information Security Management System (ISMS) under ISO 27001:2022 standards. Conduct risk assessments, internal audits, and Annex A control mapping effortlessly.",
    controls: [
      "93 Annex A controls automatically mapped",
      "ISO 27001 Risk Treatment Plan (RTP) generator",
      "Statement of Applicability (SoA) auto-builder",
      "Continuous management review evidence sync",
    ],
  },
  hipaa: {
    title: "HIPAA Compliance & ePHI Security",
    subtitle: "Protect electronic Protected Health Information (ePHI)",
    desc: "Fulfill HIPAA Security, Privacy, and Breach Notification Rules. Automatically verify access controls, encryption, and Business Associate Agreements (BAAs).",
    controls: [
      "Administrative, Physical, and Technical Safeguards",
      "ePHI encryption & access audit log verification",
      "Business Associate Agreement (BAA) tracker",
      "Employee HIPAA security awareness training",
    ],
  },
  gdpr: {
    title: "GDPR & EU Privacy Assurance",
    subtitle: "Fulfill EU General Data Protection Regulation requirements",
    desc: "Manage Data Protection Impact Assessments (DPIAs), Subject Access Requests (SARs), data mapping, and cross-border data transfer compliance.",
    controls: [
      "Record of Processing Activities (RoPA) builder",
      "DPIA impact assessment workflow",
      "Data subject consent & opt-out tracking",
      "Data breach notification SLAs",
    ],
  },
  dpdp: {
    title: "DPDP Act India 2023 Compliance",
    subtitle: "Comply with India's Digital Personal Data Protection Act",
    desc: "Automate Data Fiduciary responsibilities, consent management, data principal rights, and children's data protection rules under DPDP.",
    controls: [
      "Data Principal Consent & Notice management",
      "Significant Data Fiduciary risk assessment",
      "Data protection officer (DPO) governance portal",
      "Automated breach notification readiness",
    ],
  },
};

export default function FrameworkDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug || "soc-2";
  const fw = frameworkDetails[slug] || frameworkDetails["soc-2"];

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col justify-between">
      <Header />
      <main className="pt-32 pb-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan mb-3 font-semibold inline-block">
              FRAMEWORK AUTOMATION GUIDE
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {fw.title}
            </h1>
            <p className="text-xl text-brand-cyan font-semibold mb-4">{fw.subtitle}</p>
            <p className="text-slate-300 text-base leading-relaxed">{fw.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {fw.controls.map((c, idx) => (
              <TiltCard key={idx} className="p-6 border-brand-teal/30 bg-slate-900/80">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-brand-teal/20 text-brand-cyan shrink-0">
                    <FileCheck className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold text-white mt-0.5">{c}</p>
                </div>
              </TiltCard>
            ))}
          </div>

          <div className="rounded-3xl border border-brand-teal/40 bg-slate-900/90 p-10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">Automate {fw.title} with Arav&apos;sGRC</h3>
            <p className="text-xs text-slate-300 mb-6">See how your current tech stack maps to {fw.title} controls in 10 minutes.</p>
            <Link href="/get-a-demo" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-teal text-white font-bold text-xs hover:bg-brand-teal/90 shadow-lg">
              Book Framework Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
