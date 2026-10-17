import React from "react";
import Image from "next/image";

interface VisualCard {
  title: string;
  subtitle: string;
  imageSrc: string;
  altText: string;
  caption: string;
  badge: string;
}

const PRODUCT_VISUALS: VisualCard[] = [
  {
    title: "Human-in-the-Loop Safeguard Review",
    subtitle: "Control Verification & Ownership",
    imageSrc: "/hero-signoff.jpg",
    altText: "OMNiGRC control mapping interface showing safeguard coverage and lead approval",
    caption:
      "Operational Safeguards: Review data handling, access controls, and incident escalation readiness with explicit sign-off by team leads before approval.",
    badge: "Control Verification",
  },
  {
    title: "Defensible Audit Trails & Recordkeeping",
    subtitle: "Auditable Compliance Timeline",
    imageSrc: "/hero-audit-trail.png",
    altText: "OMNiGRC timestamped audit trail capturing compliance updates, policies, and vendor reviews",
    caption:
      "Defensible History: Every policy update, risk assessment change, and vendor review generates an auditable, timestamped record for compliance review.",
    badge: "Audit Evidence",
  },
  {
    title: "Data Flow Governance & Vendor Boundaries",
    subtitle: "Third-Party Data Minimization",
    imageSrc: "/hero-redaction.png",
    altText: "Confidential data redaction and vendor flow boundaries in OMNiGRC",
    caption:
      "Vendor Data Boundaries: Document and govern personal data flows to external sub-processors and cloud infrastructure to ensure only necessary data leaves your perimeter.",
    badge: "Data Minimization",
  },
];

export const DpdpProductVisuals: React.FC = () => {
  return (
    <section className="w-full py-12 sm:py-16 border-t border-slate-200/80 dark:border-navy-700/80 bg-white/40 dark:bg-navy-950/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl text-left mb-10 sm:mb-12">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#D4521A] dark:text-amber block">
            OPERATIONAL WORKFLOWS IN PRACTICE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-900 dark:text-white tracking-tight mt-1.5 text-left">
            How OMNiGRC Supports Your Workflow
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed text-left">
            Real product workflows showing how lean security and compliance teams structure risk registers,
            vendor boundaries, and verifiable audit history.
          </p>
        </div>

        {/* Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCT_VISUALS.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-2xl border border-slate-200 dark:border-navy-700/80 bg-white dark:bg-[#16233F]/90 shadow-lg overflow-hidden transition-all hover:border-[#2E936F]/50 dark:hover:border-teal/50"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.altText}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-navy-950/80 text-teal-300 border border-teal-500/30 backdrop-blur-md">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Text Description */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
                    {item.subtitle}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-navy-900 dark:text-white mt-0.5 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
