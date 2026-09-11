"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Shield, Lock } from "lucide-react";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0A111F] text-slate-100 flex flex-col justify-between">
      <Header />
      <main className="pt-32 pb-24 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-amber mb-3 font-semibold inline-block">
              CONNECT WITH US
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Talk to our GRC architects.
            </h1>
            <p className="text-slate-300 text-lg">
              Have questions about multi-framework control mapping, asset inventory integration, or risk scoring? Reach out directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-teal/15 text-teal">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">EMAIL DIRECT</p>
                    <p className="text-sm font-bold text-white">contact@omnigrc.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber/15 text-amber">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">REGIONAL PRESENCE</p>
                    <p className="text-sm font-bold text-white">India &amp; United Kingdom</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-teal/30 bg-gradient-to-b from-teal/10 to-slate-900/80">
                <Lock className="h-6 w-6 text-teal mb-2" />
                <h4 className="font-bold text-white text-sm mb-1">Confidential &amp; Tenant-Isolated</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  All discussions and technical architecture requirements are held in strict confidentiality.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl">
                {submitted ? (
                  <div className="p-8 text-center space-y-4">
                    <CheckCircle2 className="h-12 w-12 text-teal mx-auto" />
                    <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                    <p className="text-xs text-slate-300">
                      Thank you for reaching out to OMNiGRC. A GRC architect will respond within 2 business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold text-white mb-4">Send a Message</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-slate-300 mb-1">Your Name</label>
                        <input
                          required
                          type="text"
                          placeholder="Alex Morgan"
                          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-xs text-white focus:border-teal focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-300 mb-1">Work Email</label>
                        <input
                          required
                          type="email"
                          placeholder="alex@company.com"
                          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-xs text-white focus:border-teal focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-slate-300 mb-1">Subject</label>
                      <input
                        required
                        type="text"
                        placeholder="Inquiry about ISO 27001 & SOC 2 Mapping"
                        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-xs text-white focus:border-teal focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-300 mb-1">Message</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your team's GRC operations..."
                        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-xs text-white focus:border-teal focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-teal py-3.5 text-xs font-bold text-white hover:bg-teal/90 shadow-md flex items-center justify-center gap-2"
                    >
                      Send Message <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
