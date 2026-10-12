"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Does OMNiGRC guarantee DPDP Act 2023 legal compliance?",
    answer:
      "No software can guarantee statutory compliance or replace legal counsel. OMNiGRC provides an operational workspace to organise privacy risk registers, track vendor processing agreements, operationalise security safeguards, and maintain defensible evidence trails for internal and external audits.",
  },
  {
    question: "How does OMNiGRC help teams organise Section 8(5) reasonable security safeguards?",
    answer:
      "Under Section 8(5), Data Fiduciaries must implement reasonable security safeguards to prevent personal data breaches. OMNiGRC allows teams to document technical and organizational controls (access controls, encryption, backup verification, and incident escalation), assign responsible owners, and enforce periodic testing cadences.",
  },
  {
    question: "Can we track third-party vendors and sub-processors?",
    answer:
      "Yes. OMNiGRC includes a dedicated vendor and third-party inventory. You can categorize technical processors, record executed Data Processing Agreements (DPAs) and contractual terms, and evaluate their security controls.",
  },
  {
    question: "Can we cross-walk DPDP controls with ISO 27001 or SOC 2?",
    answer:
      "Yes. OMNiGRC's multi-framework mapping engine allows organizations to link a single technical safeguard (such as MFA or database encryption) simultaneously across ISO 27001, SOC 2, and DPDP Act provisions, eliminating duplicate administrative overhead.",
  },
  {
    question: "Where is our compliance data and evidence stored?",
    answer:
      "OMNiGRC is built for security-conscious teams, supporting single-tenant isolated database architectures and Indian regional data residency so your sensitive audit documentation and vendor data stay protected.",
  },
];

export const DpdpFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full py-12 sm:py-16 border-t border-slate-200/80 dark:border-navy-700/80 bg-slate-50/50 dark:bg-[#0A111F]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#D4521A] dark:text-amber">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-navy-900 dark:text-white tracking-tight mt-1">
            Common Questions on DPDP Compliance Software
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1.5">
            Key questions on how OMNiGRC handles consent records, vendor governance, and audit readiness.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 dark:border-navy-700/80 bg-white dark:bg-[#16233F]/80 overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-4 sm:p-4.5 text-left text-xs sm:text-sm font-bold text-navy-900 dark:text-white hover:text-[#2E936F] dark:hover:text-teal transition-colors"
                >
                  <span className="pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#2E936F] dark:text-teal" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-4.5 sm:pb-4.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-navy-800 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
