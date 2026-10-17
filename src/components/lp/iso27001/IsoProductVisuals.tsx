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
    title: "Statement of Applicability & Control Sign-Off",
    subtitle: "Defensible Governance Records",
    imageSrc: "/hero-signoff.jpg",
    altText: "OMNiGRC compliance sign-off workflow documenting control approvals and stakeholder reviews",
    caption:
      "Structured Governance: Document control applicability decisions, risk treatment options, and formal stakeholder sign-offs in one centralized interface.",
    badge: "SoA & Approvals",
  },
  {
    title: "Audit-Ready Review Records & Testing Cadence",
    subtitle: "Auditable Compliance Timeline",
    imageSrc: "/hero-audit-trail.png",
    altText: "OMNiGRC auditable timeline showing policy updates, risk evaluations, and review records",
    caption:
      "Timestamped Audit Trail: Every policy revision, risk register update, and testing review generates an auditable record for internal and external auditors.",
    badge: "Audit Evidence",
  },
  {
    title: "Cross-Team Ownership & Control Assignment",
    subtitle: "Collaborative Compliance Workflow",
    imageSrc: "/hero-collab.png",
    altText: "OMNiGRC task and control assignment workflow for security and IT teams",
    caption:
      "Clear Accountability: Assign Annex A control responsibilities, periodic evidence reviews, and remediation tasks directly to system and control owners.",
    badge: "Team Ownership",
  },
];

export const IsoProductVisuals: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#f7d7b0]/15 border-y border-[#f7d7b0]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#f7d7b0]/50 border border-[#fab60a]/60 text-[#f15e1c] text-xs font-bold uppercase tracking-wider mb-2">
            Verified Product Proof
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Inside OMNiGRC: Designed for Real-World ISMS Operations
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2">
            See how OMNiGRC organizes control evaluations, review workflows, and defensible audit records without disconnected spreadsheets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCT_VISUALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#f7d7b0] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Card Header */}
              <div className="p-4 sm:p-5 border-b border-[#f7d7b0]/50 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#f15e1c] tracking-wider uppercase block">
                    {item.badge}
                  </span>
                  <h3 className="text-sm font-bold text-stone-900 mt-0.5">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Screenshot Preview */}
              <div className="relative aspect-[16/10] w-full bg-stone-100 overflow-hidden border-b border-[#f7d7b0]/40">
                <Image
                  src={item.imageSrc}
                  alt={item.altText}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                />
              </div>

              {/* Caption */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white">
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
