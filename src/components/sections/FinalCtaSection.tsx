"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles, CheckCircle2 } from "lucide-react";

export const FinalCtaSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
  };

  return (
    <section className="relative bg-[#0B0F17] py-20 sm:py-28 overflow-hidden border-t border-slate-800">
      {/* Background Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] sm:h-[600px] w-[90vw] max-w-[800px] rounded-full bg-gradient-to-r from-brand-orange/25 via-brand-gold/15 to-transparent blur-[120px] sm:blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-5xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-6 mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-orange/40 bg-brand-orange/10 text-brand-yellow text-xs font-mono tracking-widest uppercase font-semibold">
            <Sparkles className="h-3.5 w-3.5" /> REINVENTING COMPLIANCE
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            The era of autonomous trust starts now.
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Autonomous trust isn&apos;t a feature upgrade. It&apos;s a fundamental shift in how compliance, risk, and security operate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 max-w-md sm:max-w-none mx-auto">
            <Link
              href="/get-a-demo"
              className="w-full sm:w-auto relative group overflow-hidden rounded-xl bg-brand-orange px-8 py-4 text-base font-semibold text-white shadow-xl shadow-brand-orange/30 transition-all duration-300 hover:bg-brand-orange/90 hover:shadow-brand-gold/40 hover:scale-[1.04]"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Get started with OMNiGRC <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/get-a-demo"
              className="w-full sm:w-auto rounded-xl border border-slate-700 bg-slate-900/60 px-8 py-4 text-base font-semibold text-slate-200 hover:border-brand-peach hover:bg-slate-800 hover:text-white transition-all duration-300"
            >
              Book a live demo
            </Link>
          </div>
        </motion.div>

        {/* Newsletter Signup Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl 2xl:max-w-4xl mx-auto rounded-3xl border border-brand-orange/30 bg-slate-900/80 p-6 sm:p-10 shadow-2xl backdrop-blur-xl text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-2">
              <div className="flex items-center gap-2 text-brand-yellow font-mono text-xs uppercase font-bold">
                <Mail className="h-4 w-4 text-brand-orange" /> Newsletter
              </div>
              <h3 className="text-xl font-bold text-white">Subscribe to Ctrl + GRC</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                A bi-monthly GRC newsletter delivering clear insights on frameworks, fines, and security trends—plus access to experts & AMAs.
              </p>
            </div>

            <div className="md:col-span-5">
              {subscribed ? (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-brand-green/15 border border-brand-green/30 text-brand-green text-xs font-semibold">
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
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-xs text-white placeholder-slate-500 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-brand-orange px-4 py-3 text-xs font-bold text-white hover:bg-brand-orange/90 shadow-md transition-all duration-200"
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
