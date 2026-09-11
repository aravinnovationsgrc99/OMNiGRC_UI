"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Shield, Award, Users, Globe, ArrowRight, Zap, CheckCircle2, Lock } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#0A111F] text-slate-100 flex flex-col justify-between">
      <Header />
      <main className="pt-32 pb-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-amber mb-3 font-semibold inline-block">
              OUR MISSION
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Empowering lean GRC teams with connected, practical operations.
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              We built OMNiGRC to eliminate the operational chaos between disconnected spreadsheets and overly complex enterprise suites. We believe GRC should be structured, connected, and human-supervised.
            </p>
          </div>

          {/* Pillars of Purpose Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { label: "Core Documented Workflows", val: "4 Pillars" },
              { label: "Target Frameworks", val: "5 Standards" },
              { label: "Human Oversight", val: "Mandatory" },
              { label: "External Data Transmission", val: "Minimized" },
            ].map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-teal mb-1">{stat.val}</p>
                <p className="text-xs font-mono text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <TiltCard className="p-8 border-slate-800 bg-slate-900/70">
              <Zap className="h-8 w-8 text-teal mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Connected Workflows</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Risk registers, asset inventories, controls, and compliance testing belong together in one continuous operating layer.
              </p>
            </TiltCard>

            <TiltCard className="p-8 border-slate-800 bg-slate-900/70">
              <Lock className="h-8 w-8 text-amber mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Data Minimization</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We believe external AI tools should receive only sanitized control text, keeping sensitive organizational data strictly isolated.
              </p>
            </TiltCard>

            <TiltCard className="p-8 border-slate-800 bg-slate-900/70">
              <Shield className="h-8 w-8 text-teal mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Defensible Auditability</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Compliance shouldn&apos;t be an annual scramble. Every review and decision is logged with full version history and auditor-ready proof.
              </p>
            </TiltCard>
          </div>

          <div className="rounded-3xl border border-teal/40 bg-slate-900/90 p-8 sm:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to experience OMNiGRC?</h2>
            <p className="text-slate-300 text-sm mb-6 max-w-xl mx-auto">
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
