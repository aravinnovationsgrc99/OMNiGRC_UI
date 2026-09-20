import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { GenericHeroMotif } from "@/components/ui/HeroVisualMotifs";
import { Shield, Award, Users, Globe, ArrowRight, Zap, CheckCircle2, Lock } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-transparent text-navy-900 dark:text-slate-100 flex flex-col justify-between">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="OUR MISSION"
          title="Empowering lean GRC teams with connected, practical operations."
          subtitle="We built OMNiGRC to eliminate operational chaos between disconnected spreadsheets and overly complex enterprise suites. We believe GRC should be structured, connected, and human-supervised."
          visual={<GenericHeroMotif type="about" />}
          cta={
            <Link
              href="/get-a-demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D4521A] dark:bg-teal text-white font-bold text-xs hover:bg-[#B8451A] dark:hover:bg-teal/90 shadow-lg shadow-[#F15E1C]/20 dark:shadow-teal/20"
            >
              Learn More &amp; Request Demo <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

          {/* Pillars of Purpose Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { label: "Core Documented Workflows", val: "4 Pillars" },
              { label: "Target Frameworks", val: "5 Standards" },
              { label: "Human Oversight", val: "Mandatory" },
              { label: "External Data Transmission", val: "Minimized" },
            ].map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-cardBorderWarm dark:border-slate-800 bg-cardWarm dark:bg-slate-900/60 text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-teal mb-1">{stat.val}</p>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <TiltCard className="p-8 border-cardBorderWarm dark:border-slate-800 bg-cardWarm dark:bg-slate-900/70">
              <Zap className="h-8 w-8 text-teal mb-4" />
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">Connected Workflows</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Risk registers, asset inventories, controls, and compliance testing belong together in one continuous operating layer.
              </p>
            </TiltCard>

            <TiltCard className="p-8 border-cardBorderWarm dark:border-slate-800 bg-cardWarm dark:bg-slate-900/70">
              <Lock className="h-8 w-8 text-amber mb-4" />
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">Data Minimization</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                We believe external AI tools should receive only sanitized control text, keeping sensitive organizational data strictly isolated.
              </p>
            </TiltCard>

            <TiltCard className="p-8 border-cardBorderWarm dark:border-slate-800 bg-cardWarm dark:bg-slate-900/70">
              <Shield className="h-8 w-8 text-teal mb-4" />
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">Defensible Auditability</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Compliance shouldn&apos;t be an annual scramble. Every review and decision is logged with full version history and auditor-ready proof.
              </p>
            </TiltCard>
          </div>

          <div className="rounded-3xl border border-teal/40 bg-cardWarm dark:bg-slate-900/90 p-8 sm:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">Ready to experience OMNiGRC?</h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 max-w-xl mx-auto">
              Schedule a personalized demonstration tailored to your target frameworks and team structure.
            </p>
            <Link href="/get-a-demo" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal text-white font-bold text-xs hover:bg-teal/90 shadow-lg shadow-teal/20">
              Request a Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
