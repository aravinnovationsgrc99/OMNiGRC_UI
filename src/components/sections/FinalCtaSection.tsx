"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles, CheckCircle2, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const FinalCtaSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
  };

  return (
    <section className="relative bg-white dark:bg-[#0A111F] py-12 sm:py-28 overflow-hidden border-t border-slate-200 dark:border-navy-700/60 transition-colors duration-200">
      {/* Background Orbs using approved colors */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] sm:h-[600px] w-[90vw] max-w-[800px] rounded-full bg-gradient-to-r from-teal/20 via-amber/15 to-transparent blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-5xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-6 mb-10 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#2E936F]/40 bg-[#2E936F]/10 text-[#D4521A] dark:border-teal/40 dark:bg-teal/10 dark:text-amber text-xs font-mono tracking-widest uppercase font-semibold">
            <Shield className="h-3.5 w-3.5" /> DEFENDED GRC OPERATIONS
          </div>

          <h2 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight">
            Connect your risk, assets, and controls today.
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-4">
            Move away from disconnected spreadsheets and experience a unified GRC operating workflow designed specifically for lean security teams.
          </p>

          {/* Verified Workflow Checkmarks */}
          <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs max-w-2xl mx-auto pb-2">
            <span className="px-3.5 py-1.5 rounded-full bg-[#2E936F]/15 border border-[#2E936F]/40 text-[#2E936F] dark:bg-teal/15 dark:border-teal/40 dark:text-teal font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5" /> Map-Once Control Engine
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#FAB60A]/20 border border-[#FAB60A]/40 text-navy-900 dark:bg-amber/15 dark:border-amber/40 dark:text-amber font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5" /> Rolling 30/60/90d Cadence
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5" /> Zero LLM Data Retention
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 max-w-md sm:max-w-none mx-auto">
            <Link
              href="/get-a-demo"
              className="w-full sm:w-auto relative group overflow-hidden rounded-xl bg-[#D4521A] dark:bg-teal px-8 py-4 text-base font-semibold text-white shadow-xl shadow-[#F15E1C]/30 dark:shadow-teal/30 transition-all duration-300 hover:bg-[#B8451A] dark:hover:bg-teal-600 hover:scale-[1.03]"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Request a Demo <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/pricing"
              className="w-full sm:w-auto rounded-xl border border-slate-300 dark:border-navy-700/60 bg-white dark:bg-navy-900/60 px-8 py-4 text-base font-semibold text-navy-900 dark:text-slate-200 hover:border-[#2E936F] dark:hover:border-teal/40 hover:text-[#2E936F] dark:hover:text-white transition-all duration-300"
            >
              Talk to us about GRC
            </Link>
          </div>
        </motion.div>

        {/* Newsletter Signup Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl 2xl:max-w-4xl mx-auto rounded-3xl border border-teal/30 bg-navy-900/80 p-6 sm:p-10 shadow-2xl backdrop-blur-xl text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-2">
              <div className="flex items-center gap-2 text-[#D4521A] dark:text-amber font-mono text-xs uppercase font-bold">
                <Mail className="h-4 w-4 text-teal" /> Newsletter
              </div>
              <h3 className="text-xl font-bold text-white">Subscribe to Ctrl + GRC</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                A bi-monthly GRC newsletter delivering clear insights on frameworks, clauses, and practical security operations for lean teams.
              </p>
            </div>

            <div className="md:col-span-5">
              {subscribed ? (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-teal/15 border border-teal/30 text-teal text-xs font-semibold">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <span>You&apos;re subscribed! Welcome to Ctrl + GRC.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="Enter your work email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-navy-700/60 bg-[#0A111F] px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-teal px-4 py-3 text-xs font-bold text-white hover:bg-teal-600 shadow-md transition-all duration-200"
                  >
                    Subscribe Now
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
