"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles, BookOpen, Shield } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-canvas dark:bg-[#0A111F] text-navy-900 dark:text-slate-100 flex flex-col justify-between">
      <Header />
      <main className="pt-36 pb-24 flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-teal/10 blur-[130px]" />

        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="flex h-20 w-20 items-center justify-center rounded-full bg-teal/20 text-teal mx-auto mb-8 border border-teal/40"
          >
            <CheckCircle2 className="h-10 w-10 stroke-[2.5]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight mb-4"
          >
            Demo Request Received!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-8"
          >
            Thank you for reaching out to OMNiGRC. A GRC architect has received your request and will reach out shortly to coordinate your personalized platform walkthrough.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-2xl border border-cardBorderWarm dark:border-slate-800 bg-cardWarm dark:bg-slate-900/80 mb-8 text-left space-y-3 shadow-md"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-amber uppercase font-bold">
              <Sparkles className="h-4 w-4 text-amber" /> Next Steps While You Wait
            </div>
            <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal shrink-0" />
                <span>Check your inbox for a scheduling confirmation with calendar slot options.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal shrink-0" />
                <span>Explore our Resource Hub for framework checklists and risk matrix guides.</span>
              </li>
            </ul>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto rounded-xl bg-teal px-8 py-3.5 text-sm font-semibold text-white hover:bg-teal/90 shadow-lg shadow-teal/20 transition-all"
            >
              Return to Homepage
            </Link>
            <Link
              href="/trust-vault"
              className="w-full sm:w-auto rounded-xl border border-cardBorderWarm dark:border-slate-700 bg-cardWarm dark:bg-slate-900 px-8 py-3.5 text-sm font-semibold text-navy-900 dark:text-slate-200 hover:border-teal/40 transition-all flex items-center justify-center gap-2"
            >
              <BookOpen className="h-4 w-4 text-amber" /> Explore Resources
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
