"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  ArrowRight,
  CheckCircle,
  Globe,
  MapPin,
  Lock,
  FileText,
  Layers,
} from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

interface FrameworkItem {
  id: string;
  name: string;
  region: string;
  badge: string;
  scopeDesc: string;
  controlDomains: string[];
  omniWorkflow: string;
}

const documentedFrameworks: FrameworkItem[] = [
  {
    id: "iso-27001",
    name: "ISO 27001:2022",
    region: "Global Standard",
    badge: "ISMS Management",
    scopeDesc:
      "Global standard for Information Security Management Systems (ISMS). Focuses on risk treatment, Annex A controls, and management review.",
    controlDomains: [
      "A.5 Organizational Controls (37 Controls)",
      "A.6 People Controls (8 Controls)",
      "A.7 Physical Controls (14 Controls)",
      "A.8 Technological Controls (34 Controls)",
    ],
    omniWorkflow:
      "Map internal security policies once; OMNiGRC links policies to ISO 27001 Annex A clauses and populates your Statement of Applicability (SoA) automatically.",
  },
  {
    id: "soc-2",
    name: "SOC 2 Type II",
    region: "North America & Global SaaS",
    badge: "Trust Services Criteria",
    scopeDesc:
      "AICPA Trust Services Criteria evaluating Security, Availability, Confidentiality, Processing Integrity, and Privacy over time.",
    controlDomains: [
      "CC1 - CC5 Control Environment & Risk Assessment",
      "CC6 Logical and Physical Access Controls",
      "CC7 System Operations & Vulnerability Detection",
      "CC8 - CC9 Change Management & Risk Mitigation",
    ],
    omniWorkflow:
      "Align technical configurations and testing dates to Common Criteria. Evidence cadences are tracked on the Compliance Board with rolling 30/60/90-day visibility.",
  },
  {
    id: "gdpr",
    name: "GDPR / UK GDPR",
    region: "European Union & United Kingdom",
    badge: "Data Privacy & Governance",
    scopeDesc:
      "Strict data protection regulations for handling European and British citizens' personal data, processing records, and consent management.",
    controlDomains: [
      "Article 30: Record of Processing Activities (RoPA)",
      "Article 32: Technical & Organizational Security",
      "Article 33/34: Data Breach Notification Protocols",
      "Article 35: Data Protection Impact Assessments (DPIA)",
    ],
    omniWorkflow:
      "Track data flows and asset inventories within OMNiGRC, directly connecting PII data stores to required technical safeguards and encryption controls.",
  },
  {
    id: "dpdp",
    name: "DPDP Act 2023",
    region: "India Digital Privacy",
    badge: "Data Fiduciary Mandate",
    scopeDesc:
      "India's comprehensive privacy regulation governing digital personal data, fiduciary duties, user consent, and notice standards.",
    controlDomains: [
      "Section 6: Clear & Granular Consent Notices",
      "Section 8(5): Reasonable Security Safeguards",
      "Section 8(6): Personal Data Breach Notification",
      "Section 11: Data Principal Rights & Grievance Redressal",
    ],
    omniWorkflow:
      "Maintain vendor registers, asset inventories, and safeguard controls tailored specifically to Indian data fiduciary guidelines.",
  },
  {
    id: "essential-8",
    name: "Essential 8",
    region: "Australia & APAC",
    badge: "ACSC Mitigation",
    scopeDesc:
      "Australian Cyber Security Centre (ACSC) baseline cyber security mitigation strategies designed to prevent malware and protect data.",
    controlDomains: [
      "Application Control & Patch Applications",
      "Configure Microsoft Office Macro Settings",
      "User Application Hardening & Admin Privileges",
      "Multi-Factor Authentication & Regular Backups",
    ],
    omniWorkflow:
      "Map technical hardening controls to ACSC Maturity Levels 1-3. Verify recurring backup restoration and MFA configurations.",
  },
];

export const CoverageSection: React.FC = () => {
  const [selectedFw, setSelectedFw] = useState<FrameworkItem>(documentedFrameworks[0]);

  return (
    <section className="relative bg-[#16233F] py-16 sm:py-24 border-t border-navy-700/60 overflow-hidden">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-amber font-semibold inline-block mb-3">
            DOCUMENTED FRAMEWORK COVERAGE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Focused coverage for the frameworks you actually need.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            We don&apos;t claim 200+ unverified frameworks. OMNiGRC provides deep, structured control mapping for the core standards driving enterprise compliance today.
          </p>
        </div>

        {/* Interactive Framework Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Framework Selection Column */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono text-slate-400 uppercase font-semibold">Select Framework:</span>
            {documentedFrameworks.map((fw) => {
              const isSelected = selectedFw.id === fw.id;
              return (
                <button
                  key={fw.id}
                  onClick={() => setSelectedFw(fw)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                    isSelected
                      ? "border-teal bg-navy-900 shadow-lg shadow-teal/15 scale-[1.02]"
                      : "border-navy-700/60 bg-[#0A111F]/70 hover:border-navy-600 hover:bg-navy-900/60"
                  }`}
                >
                  <div>
                    <h3 className="font-bold text-sm text-white">{fw.name}</h3>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">{fw.region}</p>
                  </div>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                      isSelected ? "bg-teal text-white" : "bg-navy-800 text-amber"
                    }`}
                  >
                    {fw.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Framework Detail Display Card */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFw.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-teal/30 bg-navy-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-navy-700/60 pb-4">
                  <div>
                    <span className="text-xs font-mono text-amber font-bold uppercase">
                      {selectedFw.region}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white mt-1">{selectedFw.name}</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-teal/15 border border-teal/30 text-xs font-mono text-teal font-semibold">
                    Supported in OMNiGRC
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedFw.scopeDesc}
                </p>

                {/* Control Areas Grid */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-slate-400 uppercase font-semibold flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 text-teal" /> Key Control Domains:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedFw.controlDomains.map((cd, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#0A111F]/80 border border-navy-700/60 text-xs text-slate-200 flex items-start gap-2.5"
                      >
                        <CheckCircle className="h-4 w-4 text-teal shrink-0 mt-0.5" />
                        <span className="font-medium">{cd}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connected OMNiGRC Workflow */}
                <div className="p-4 rounded-2xl bg-teal/10 border border-teal/30 text-xs text-slate-200">
                  <span className="font-mono text-amber font-bold uppercase block mb-1">
                    Connected OMNiGRC Workflow:
                  </span>
                  <p className="leading-relaxed text-slate-300">{selectedFw.omniWorkflow}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Regional Awareness & Hosting Section */}
        <div className="rounded-3xl border border-navy-700/60 bg-[#0A111F]/90 p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-amber font-semibold flex items-center gap-1.5">
                <Globe className="h-4 w-4 text-teal" /> REGIONAL HOSTING AWARENESS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Designed for regional data residency.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                GRC teams operate in specific legal jurisdictions. OMNiGRC&apos;s deployment architecture supports isolated tenant storage with initial MVP hosting focus on India and the United Kingdom, followed by EU and Australia.
              </p>
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-navy-900/80 border border-teal/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-teal" /> India &amp; United Kingdom
                  </span>
                  <span className="text-[10px] font-mono text-teal bg-teal/15 px-2 py-0.5 rounded font-bold">
                    MVP Focus
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  Dedicated regional hosting focus for Indian DPDP compliance and UK GDPR requirements.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-navy-900/80 border border-navy-700/60 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-amber" /> European Union &amp; Australia
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 bg-navy-800 px-2 py-0.5 rounded font-medium">
                    Roadmap Post-POC
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Planned regional cloud points of presence for EU Data Boundary and Australian ACSC compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
