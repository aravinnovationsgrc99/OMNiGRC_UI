"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "How much does OMNiGRC cost?",
    answer:
      "Pricing depends on your requirements—including target framework scope (ISO 27001 standalone or cross-mapped with SOC 2/DPDP), user accounts, and deployment model (Multi-Tenant SaaS or Dedicated Stack). Following your 20-minute product walkthrough, we provide a transparent, tailored quote reflecting your exact architecture.",
  },
  {
    question: "What happens during the 20-minute demo?",
    answer:
      "An OMNiGRC compliance specialist will walk you through the live platform tailored to your ISO 27001 needs. You will see how the centralized risk register scores threats with 5x5 impact matrices, how Annex A controls are mapped to policies, how the Statement of Applicability is maintained, and how evidence records are linked. You will also have ample time for Q&A.",
  },
  {
    question: "How does OMNiGRC support ISO 27001 implementation?",
    answer:
      "OMNiGRC serves as your primary operational workspace for the Information Security Management System (ISMS). Instead of tracking controls across disconnected spreadsheets and shared drives, OMNiGRC connects your asset inventory, risk register, 93 Annex A controls, and continuous testing cadences into one structured system.",
  },
  {
    question: "How does the platform support the Statement of Applicability?",
    answer:
      "OMNiGRC structures the Statement of Applicability (SoA) around all 93 controls of ISO/IEC 27001:2022 across the Organizational, People, Physical, and Technological themes. You can record inclusion or exclusion rationales, document implemented safeguards, and maintain an audit-ready record that reflects policy updates.",
  },
  {
    question: "How are risks, control responsibilities, and evidence organized?",
    answer:
      "Risks are cataloged with likelihood and impact scoring and assigned to designated risk owners with documented treatment plans. Annex A controls are assigned to specific team leads with scheduled testing cadences, and evidence workpapers are linked directly to each control for auditor review.",
  },
  {
    question: "Does OMNiGRC issue an ISO 27001 certificate?",
    answer:
      "No. OMNiGRC is a compliance management software platform, not an accredited body. Official ISO/IEC 27001 certification audits are performed exclusively by accredited third-party certification bodies (such as BSI, TÜV, or Bureau Veritas). OMNiGRC helps you organize your risk register, SoA, and evidence workpapers so your team is audit-ready.",
  },
  {
    question: "What information is needed to get started?",
    answer:
      "To schedule a tailored 20-minute demonstration, you only need to submit your full name, work email, company, and phone number using the form on this page. For actual ISMS onboarding, our specialists guide you through importing your existing asset baseline, assigning organizational roles, and mapping initial security policies.",
  },
];

export const IsoFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 sm:py-18 bg-white border-t border-[#f7d7b0]/80" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Everything You Need to Know About OMNiGRC for ISO 27001
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2">
            Transparent answers on pricing, platform capabilities, audit preparation, and certification.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-btn-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className="rounded-2xl border border-[#f7d7b0] bg-white overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#f15e1c]/30 rounded-2xl cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-stone-900 flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#f15e1c] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 bg-[#f7d7b0]/40 text-[#f15e1c]"
                        : "bg-stone-100 text-stone-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-[#f7d7b0]/40"
                  >
                    <p>{faq.answer}</p>
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
