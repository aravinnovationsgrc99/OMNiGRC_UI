import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { ProductMotif } from "@/components/ui/HeroVisualMotifs";
import { motion } from "framer-motion";
import { Shield, CheckCircle2, ArrowRight, Sparkles, Cpu, Layers, Server, ShieldAlert, CalendarCheck, FileCheck2 } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { FRAMEWORKS } from "@/lib/frameworks";
import { PILLARS, getPillarBySlug } from "@/lib/pillars";

export function generateStaticParams() {
  return [
    { slug: "risk-register" },
    { slug: "asset-inventory" },
    { slug: "control-mapping" },
    { slug: "compliance-board" },
    { slug: "risk-management" },
    { slug: "continuous-monitoring" },
    { slug: "audit-management" },
    { slug: "policy-management" },
  ];
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug || "risk-register";
  const pillar = getPillarBySlug(slug) || PILLARS[0];

  const product = {
    title: pillar.name,
    subtitle: pillar.badge,
    desc: pillar.desc,
    features: pillar.features,
  };

  return (
    <div className="min-h-screen bg-[#0A111F] text-slate-100 flex flex-col justify-between">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="OMNiGRC CORE WORKFLOW"
          title={product.title}
          subtitle={`${product.subtitle} — ${product.desc}`}
          visual={<ProductMotif slug={slug} />}
          cta={
            <Link
              href="/get-a-demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal text-white font-bold text-xs hover:bg-teal/90 shadow-lg shadow-teal/20"
            >
              Request Workflow Walkthrough <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {product.features.map((feat, idx) => (
              <TiltCard key={idx} className="p-6 border-slate-800 bg-slate-900/80">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-teal/15 text-teal shrink-0 mt-0.5">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white mb-1">Operational Capability #{idx + 1}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{feat}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          <div className="rounded-3xl border border-teal/40 bg-slate-900/90 p-8 sm:p-10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">Experience {product.title} in Action</h3>
            <p className="text-xs text-slate-300 mb-6">
              Schedule a focused demonstration tailored to your team&apos;s GRC operations and target frameworks.
            </p>
            <Link href="/get-a-demo" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-teal text-white font-bold text-xs hover:bg-teal/90 shadow-lg shadow-teal/20">
              Request a Workflow Walkthrough <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
