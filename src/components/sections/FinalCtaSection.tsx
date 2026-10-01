"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Mail, CheckCircle2, Lock, Cpu } from "lucide-react";

export const FinalCtaSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    if (!email || !email.includes("@")) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/demo-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Newsletter Subscriber",
          email,
          company: "N/A",
          message: "Subscribed to Ctrl + GRC newsletter",
          request_type: "NEWSLETTER",
          source_page: typeof window !== "undefined" ? window.location.pathname || "/" : "/",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to subscribe");
      }
      setSubscribed(true);
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to subscribe. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section className="relative w-full bg-white dark:bg-[#0A111F] px-4 sm:px-6 lg:px-8 py-12 sm:py-20 border-t border-slate-200/60 dark:border-navy-700/60 overflow-hidden transition-colors">
      {/* Soft Ambient Background Glow using OMNiGRC Palette (#2E936F / #F15E1C) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-[#2E936F]/10 dark:bg-[#2E936F]/15 blur-3xl"
      />

      <div className="relative z-10 max-w-5xl mx-auto space-y-10 sm:space-y-14">
        {/* Main Conversion Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="relative rounded-3xl border border-slate-200/90 dark:border-navy-700/80 bg-gradient-to-b from-slate-50/90 via-white to-white dark:from-navy-900/90 dark:via-[#0D1626] dark:to-[#0A111F] p-6 sm:p-12 lg:p-14 shadow-xl backdrop-blur-md text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#2E936F]/40 bg-[#2E936F]/10 text-[#F15E1C] dark:text-amber text-xs font-mono tracking-wider uppercase font-semibold shadow-sm">
              <ShieldCheck className="h-3.5 w-3.5 text-[#2E936F]" />
              <span>READY FOR AUDIT DAY</span>
            </span>
          </motion.div>

          {/* Primary Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-snug sm:leading-tight max-w-3xl mx-auto mb-4 sm:mb-6"
          >
            Your next audit shouldn&apos;t start <br className="hidden sm:inline" />
            with a spreadsheet.
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 px-2 sm:px-0"
          >
            Bring risk, assets, and controls into one workflow — built for lean security teams, backed by SOC 2 Type II, tenant isolation, and AI that drafts while your team approves.
          </motion.p>

          {/* CTAs Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none mx-auto mb-8 sm:mb-10"
          >
            {/* Primary CTA */}
            <Link
              href="/demo"
              className="w-full sm:w-auto max-w-[360px] h-[52px] sm:h-[56px] px-8 rounded-xl bg-[#2E936F] hover:bg-[#237457] text-white font-bold text-base flex items-center justify-center gap-2.5 shadow-lg shadow-[#2E936F]/25 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 group"
            >
              <span>Request a Demo</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/pricing"
              className="w-full sm:w-auto max-w-[360px] h-[52px] sm:h-[56px] px-7 rounded-xl bg-white dark:bg-navy-900 border border-slate-300 dark:border-navy-700/80 text-navy-900 dark:text-slate-200 font-semibold text-base flex items-center justify-center hover:border-[#2E936F] dark:hover:border-teal/50 hover:text-[#2E936F] dark:hover:text-white transition-all duration-200"
            >
              <span>Explore Pricing &amp; Calculator</span>
            </Link>
          </motion.div>

          {/* Subtle Separator Line */}
          <motion.div variants={itemVariants} className="w-full max-w-lg mx-auto border-t border-slate-200/80 dark:border-navy-700/60 mb-6" />

          {/* Trust Signals List */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2.5 sm:gap-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2E936F] dark:bg-teal-400 shrink-0" />
              <span>SOC 2 Type II — In Progress</span>
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FAB60A] dark:bg-amber-400 shrink-0" />
              <span>Application-level tenant isolation</span>
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F15E1C] shrink-0" />
              <span>Advisory AI with payload minimization &amp; human approval</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Newsletter Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="max-w-3xl mx-auto rounded-2xl border border-slate-200 dark:border-navy-700/60 bg-slate-50/80 dark:bg-navy-900/60 p-5 sm:p-6 text-left"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-[11px] text-[#F15E1C] dark:text-amber font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-[#2E936F]" /> Ctrl + GRC Newsletter
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                Bi-monthly GRC insights on frameworks, clauses, and practical security operations.
              </p>
            </div>

            {subscribed ? (
              <div className="px-3.5 py-2 rounded-lg bg-[#2E936F]/15 border border-[#2E936F]/40 text-[#2E936F] dark:text-teal-300 text-xs font-bold flex items-center gap-1.5 shrink-0">
                <CheckCircle2 className="h-4 w-4" /> Subscribed! Welcome.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                <input
                  type="email"
                  required
                  placeholder="Enter work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-lg border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-950 px-3 py-2 text-xs text-navy-900 dark:text-white placeholder-slate-400 focus:border-[#2E936F] focus:outline-none w-full sm:w-56"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-lg bg-[#2E936F] hover:bg-[#237457] px-3.5 py-2 text-xs font-bold text-white transition-colors shrink-0 disabled:opacity-60"
                >
                  {submitting ? "..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>
          {errorMsg && <p className="text-[10px] text-red-400 font-mono mt-2">{errorMsg}</p>}
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
