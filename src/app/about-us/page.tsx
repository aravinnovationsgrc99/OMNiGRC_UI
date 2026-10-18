import React from "react";
import Link from "next/link";
import Image from "next/image";
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
          title={
            <>
              <span className="block">Empowering lean</span>
              <span className="block">GRC teams with</span>
              <span className="block">connected, practical</span>
              <span className="block">operations.</span>
            </>
          }
          subtitle="We built OMNiGRC to eliminate operational chaos between disconnected spreadsheets and overly complex enterprise suites. We believe GRC should be structured, connected, and human-supervised."
          visual={<GenericHeroMotif type="about" />}
          cta={
            <div className="flex justify-center sm:justify-start w-full">
              <Link
                href="/demo"
                className="w-full sm:w-auto max-w-sm inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#D4521A] dark:bg-teal text-white font-bold text-xs hover:bg-[#B8451A] dark:hover:bg-teal/90 shadow-lg shadow-[#F15E1C]/20 dark:shadow-teal/20 text-center"
              >
                <span>Learn More &amp; Request Demo</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          }
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">

          {/* Pillars of Purpose Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-10 sm:mb-16">
            {[
              { label: "Core Documented Workflows", val: "4 Pillars" },
              { label: "Target Frameworks", val: "5 Standards" },
              { label: "Human Oversight", val: "Mandatory" },
              { label: "External Data Transmission", val: "Minimized" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-3 min-[380px]:p-4 sm:p-5 rounded-2xl border border-cardBorderWarm dark:border-slate-800 bg-cardWarm dark:bg-slate-900/60 text-center flex flex-col items-center justify-center min-h-[96px] sm:min-h-[120px]"
              >
                <p className="text-base min-[360px]:text-lg min-[410px]:text-xl sm:text-2xl md:text-3xl font-extrabold text-teal mb-1 tracking-tight">
                  {stat.val}
                </p>
                <p className="text-[10px] min-[360px]:text-[11px] sm:text-xs font-mono text-slate-500 dark:text-slate-400 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-16">
            <TiltCard className="p-5 sm:p-6 border-cardBorderWarm dark:border-slate-800 bg-cardWarm dark:bg-slate-900/70 text-left">
              <Zap className="h-8 w-8 text-teal mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-navy-900 dark:text-white mb-2">Connected Workflows</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                Risk registers, asset inventories, controls, and compliance testing belong together in one continuous operating layer.
              </p>
            </TiltCard>

            <TiltCard className="p-5 sm:p-6 border-cardBorderWarm dark:border-slate-800 bg-cardWarm dark:bg-slate-900/70 text-left">
              <Lock className="h-8 w-8 text-amber mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-navy-900 dark:text-white mb-2">Data Minimization</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                We believe external AI tools should receive only sanitized control text, keeping sensitive organizational data strictly isolated.
              </p>
            </TiltCard>

            <TiltCard className="p-5 sm:p-6 border-cardBorderWarm dark:border-slate-800 bg-cardWarm dark:bg-slate-900/70 text-left">
              <Shield className="h-8 w-8 text-teal mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-navy-900 dark:text-white mb-2">Defensible Auditability</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                Compliance shouldn&apos;t be an annual scramble. Every review and decision is logged with full version history and auditor-ready proof.
              </p>
            </TiltCard>
          </div>

          <div className="rounded-3xl border border-teal/40 bg-cardWarm dark:bg-slate-900/90 p-6 sm:p-8 md:p-12 text-left max-w-4xl mx-auto flex flex-col items-start">
            <div className="mb-6 inline-flex items-center transition-transform hover:scale-[1.02]">
              <Image
                src="/images/Powered-By-AravInnovation.png"
                alt="Powered by Arav Innovations"
                width={300}
                height={90}
                className="h-9 sm:h-12 w-auto object-contain"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 dark:text-white mb-3 text-left leading-tight">
              Ready to experience OMNiGRC?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-6 max-w-xl text-left text-justify">
              Schedule a personalized demonstration tailored to your target frameworks and team structure.
            </p>
            <div className="flex justify-start w-full">
              <Link href="/demo" className="w-full sm:w-auto max-w-sm inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal text-white font-bold text-xs hover:bg-teal/90 shadow-lg shadow-teal/20 text-center">
                <span>Request a Demo</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
