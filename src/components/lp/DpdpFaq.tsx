"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How is pricing structured for OMNiGRC's DPDP software?",
    answer:
      "OMNiGRC uses transparent commercial scoping based on your chosen deployment architecture (Shared multi-tenant SaaS, Private dedicated instance, or Customer-controlled container), target framework scope, and entity complexity. Submit the demo request form on this page to receive a tailored commercial proposal without hidden consultant fees.",
  },
  {
    question: "How do I schedule a product demonstration?",
    answer:
      "Complete the demo booking form at the top of this page with your work email and contact details. A privacy and compliance specialist will follow up within one business day with walkthrough options tailored to your technical environment and DPDP readiness scope.",
  },
  {
    question: "What does the onboarding and implementation timeline look like?",
    answer:
      "Onboarding focuses on cataloging your asset and cloud inventory, configuring your third-party vendor register, and cross-walking baseline security safeguards. For cloud-hosted SaaS deployments, initial setup typically takes days rather than the months required by legacy enterprise GRC suites.",
  },
  {
    question: "Can we cross-walk DPDP controls with ISO 27001 or SOC 2?",
    answer:
      "Yes. OMNiGRC's multi-framework mapping engine allows organizations to link common technical safeguards—such as access control, encryption, and operational testing—simultaneously across ISO 27001, SOC 2, and DPDP Act provisions, eliminating duplicate administrative overhead.",
  },
  {
    question: "How does OMNiGRC handle consent records, vendor registers, and breach workflows?",
    answer:
      "The platform centralises versioned records of privacy notices, maintains a structured Data Processor inventory with executed DPAs, and organizes internal incident response escalation procedures with timestamped evidence for compliance review.",
  },
  {
    question: "Where is our compliance data hosted and how is tenant isolation maintained?",
    answer:
      "OMNiGRC supports application-level tenant isolation boundaries and Indian regional data residency. Sensitive context is protected within your perimeter, ensuring your organizational compliance records remain isolated and secure.",
  },
  {
    question: "Does using OMNiGRC guarantee DPDP Act 2023 statutory compliance?",
    answer:
      "No software platform can guarantee legal compliance or replace legal counsel. OMNiGRC is an operational management tool designed to organize controls, vendor records, and audit evidence. Organizations should consult qualified legal professionals for statutory legal interpretations.",
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
        <div className="text-left mb-8 sm:mb-10">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#D4521A] dark:text-amber block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-navy-900 dark:text-white tracking-tight mt-1 text-left">
            Common Questions on DPDP Compliance Software
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1.5 text-left">
            Key questions regarding commercial proposals, walkthrough scheduling, workflows, and legal boundaries.
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
