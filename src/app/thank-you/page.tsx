import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2, ArrowRight, Sparkles, BookOpen, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Demo Request Received — OMNiGRC",
  description: "Thank you for requesting a walkthrough of the OMNiGRC platform.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />

      <main className="pt-32 pb-24 flex-1 flex items-center justify-center relative overflow-hidden bg-grid-mesh-adaptive">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#ffdbcf]/40 blur-[120px] -z-10" />

        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ffdbcf] dark:bg-orange-950/30 text-[#380d00] dark:text-orange-400 mx-auto mb-8 border border-[#F15E1C]/30 dark:border-orange-500/30 shadow-md">
            <CheckCircle2 className="h-10 w-10 text-[#F15E1C] stroke-[2.5]" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0d1b36] dark:text-white tracking-tight leading-tight mb-4">
            Demo Request Received!
          </h1>

          <p className="text-[#5a4138] dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-medium">
            Thank you for reaching out to OMNiGRC. A GRC architect has received your request and will connect shortly to coordinate your personalized platform walkthrough.
          </p>

          <div className="p-6 rounded-2xl border border-slate-200 dark:border-navy-700/60 bg-white dark:bg-navy-900 mb-8 text-left space-y-3 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono text-[#F15E1C] uppercase font-bold">
              <Sparkles className="h-4 w-4 text-[#F15E1C]" /> What Happens Next
            </div>
            <ul className="text-xs text-[#5a4138] dark:text-slate-400 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#006c4d] dark:text-teal-400 shrink-0" />
                <span>Our GRC specialists review your target frameworks and team requirements.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#006c4d] dark:text-teal-400 shrink-0" />
                <span>You will receive an email with direct walkthrough scheduling options.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-[#F15E1C] to-[#D4521A] px-8 py-3.5 text-sm font-bold text-white hover:shadow-lg transition-all shadow-md"
            >
              Return to Homepage
            </Link>
            <Link
              href="/resources"
              className="w-full sm:w-auto rounded-xl border border-slate-200 dark:border-navy-700/60 bg-white dark:bg-navy-950 px-8 py-3.5 text-sm font-bold text-[#0d1b36] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-navy-900 transition-all flex items-center justify-center gap-2"
            >
              <BookOpen className="h-4 w-4 text-[#F15E1C]" /> Explore Resource Hub
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
