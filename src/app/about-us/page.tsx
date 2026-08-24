"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Shield, Sparkles, Award, Users, Globe, ArrowRight, Zap } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col justify-between">
      <Header />
      <main className="pt-32 pb-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan mb-3 font-semibold inline-block">
              OUR MISSION
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Making organizational trust continuous, autonomous, and effortless.
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              We founded Arav&apos;sGRC because traditional compliance tools turned security into an annual nightmare of manual evidence gathering. We believe trust should be real-time, automated, and self-defending.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { label: "Companies Powered", val: "3,000+" },
              { label: "Continuous Telemetry Checks", val: "50M+/Day" },
              { label: "Supported Frameworks", val: "200+" },
              { label: "Customer Satisfaction", val: "99.4%" },
            ].map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 text-center">
                <p className="text-3xl sm:text-4xl font-extrabold text-brand-cyan mb-1">{stat.val}</p>
                <p className="text-xs font-mono text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <TiltCard className="p-8 border-slate-800 bg-slate-900/70">
              <Zap className="h-8 w-8 text-brand-cyan mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Autonomous Operations</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We believe repetitive compliance chores should be owned by AI telemetry, not human engineers.
              </p>
            </TiltCard>

            <TiltCard className="p-8 border-slate-800 bg-slate-900/70">
              <Shield className="h-8 w-8 text-brand-cyan mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Uncompromising Defense</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Compliance shouldn&apos;t be a checkbox document. It should represent real, verifiable security posture.
              </p>
            </TiltCard>

            <TiltCard className="p-8 border-slate-800 bg-slate-900/70">
              <Globe className="h-8 w-8 text-brand-cyan mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Universal Assurance</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Giving buyers, prospects, and auditors 100% transparency into security posture instantly.
              </p>
            </TiltCard>
          </div>

          <div className="rounded-3xl border border-brand-teal/40 bg-slate-900/90 p-8 sm:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Want to join our team?</h2>
            <p className="text-slate-300 text-sm mb-6 max-w-xl mx-auto">
              We&apos;re hiring across engineering, AI research, product, and customer success globally.
            </p>
            <Link href="/get-a-demo" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-teal text-white font-bold text-xs hover:bg-brand-teal/90">
              View Open Careers <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
