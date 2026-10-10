"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react";

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
          message: "Subscribed to GRC newsletter",
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

  return (
    <section className="relative w-full bg-white dark:bg-[#0A111F] px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-t border-slate-200/60 dark:border-navy-700/60 overflow-hidden transition-colors">
      {/* Soft Ambient Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-[#2E936F]/10 dark:bg-[#2E936F]/15 blur-3xl"
      />

      <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1600px] mx-auto">
        {/* Two-Column Symmetrical Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* LEFT CARD (8 COLS): Primary Hero Conversion Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-8 w-full rounded-3xl border border-slate-200/90 dark:border-navy-700/80 bg-gradient-to-b from-slate-50/90 via-white to-white dark:from-navy-900/90 dark:via-[#0D1626] dark:to-[#0A111F] p-6 sm:p-8 lg:p-10 shadow-xl backdrop-blur-md text-left flex flex-col justify-between"
          >
            <div>
              {/* Primary Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight w-full mb-4">
                Your Next Audit Shouldn&apos;t Start With a Spreadsheet.
              </h2>

              {/* Subheading */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed w-full mb-6">
                Bring risk, assets, and controls into one workflow, built for lean security teams, built for SOC 2 Type II readiness, tenant isolation, and AI that drafts while your team approves.
              </p>
            </div>

            {/* CTAs Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-4 w-full pt-2">
              {/* Primary CTA */}
              <Link
                href="/demo"
                className="w-full sm:w-auto h-[48px] sm:h-[54px] px-6 sm:px-7 rounded-xl bg-[#2E936F] hover:bg-[#237457] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md shadow-[#2E936F]/20 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 group shrink-0"
              >
                <span>Request a Demo</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/pricing"
                className="w-full sm:w-auto h-[48px] sm:h-[54px] px-6 sm:px-7 rounded-xl bg-white dark:bg-navy-900 border border-slate-300 dark:border-navy-700/80 text-navy-900 dark:text-slate-200 font-semibold text-sm sm:text-base flex items-center justify-center hover:border-[#2E936F] dark:hover:border-teal/50 hover:text-[#2E936F] dark:hover:text-white transition-all duration-200 shrink-0"
              >
                <span>Explore Pricing &amp; Calculator</span>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT CARD (4 COLS): Dedicated Vertical GRC Newsletter Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-4 w-full rounded-3xl border border-slate-200/90 dark:border-navy-700/80 bg-white dark:bg-navy-900/90 p-6 sm:p-7 shadow-xl backdrop-blur-md text-left flex flex-col justify-between"
          >
            <div className="space-y-3">
              {/* Top Icon Badge */}
              <div className="w-10 h-10 rounded-xl bg-[#E6F4EF] dark:bg-[#122B22] border border-[#2E936F]/30 flex items-center justify-center text-[#2E936F] dark:text-[#36B386]">
                <Mail className="h-5 w-5" />
              </div>

              {/* GRC Newsletter Badge */}
              <span className="font-mono text-xs text-[#F15E1C] dark:text-amber font-extrabold uppercase tracking-wider block">
                GRC NEWSLETTER
              </span>

              {/* Newsletter Title */}
              <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-snug">
                Monthly GRC insights on frameworks, clauses, and practical security operations.
              </h3>

              {/* Newsletter Subtitle */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                Get the latest updates, templates and expert insights delivered to your inbox.
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="pt-4">
              {subscribed ? (
                <div className="p-3.5 rounded-xl bg-[#2E936F]/15 border border-[#2E936F]/40 text-[#2E936F] dark:text-teal-300 text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 w-full">
                  <CheckCircle2 className="h-4 w-4" /> Subscribed! Welcome.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3 w-full">
                  <div className="relative w-full">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your work email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-navy-700 bg-slate-50 dark:bg-navy-950 text-xs sm:text-sm text-navy-900 dark:text-white placeholder-slate-400 focus:border-[#2E936F] focus:outline-none shadow-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 rounded-xl bg-[#2E936F] hover:bg-[#237457] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-60 group"
                  >
                    <span>{submitting ? "Subscribing..." : "Subscribe"}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>

                  {errorMsg && <p className="text-[11px] text-red-500 font-mono mt-1 text-center">{errorMsg}</p>}
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
