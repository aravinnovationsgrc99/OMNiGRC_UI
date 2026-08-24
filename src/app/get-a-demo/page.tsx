"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Shield, CheckCircle2, ArrowRight, Sparkles, Lock, Building, Users } from "lucide-react";

export default function GetADemoPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    role: "CISO",
    size: "50-200",
    message: "",
    agree: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim() || !formData.email.includes("@"))
      newErrors.email = "Valid work email is required";
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.agree) newErrors.agree = "You must agree to the Privacy Policy";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit successful -> navigate to thank-you page
    router.push("/thank-you");
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col justify-between">
      <Header />
      <main className="pt-32 pb-20 flex-1 relative overflow-hidden">
        {/* Background Orbs */}
        <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-brand-teal/15 blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & Benefits Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-teal/40 bg-brand-teal/10 text-brand-cyan text-xs font-mono tracking-widest uppercase">
              <Sparkles className="h-3.5 w-3.5" /> SEE ARAV&apos;SGRC IN ACTION
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Book a custom demo of the Autonomous Trust Platform.
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed">
              Discover how Arav&apos;sGRC automates 98% of compliance ops, reduces audit prep times by 10x, and keeps your posture continuously defensible.
            </p>

            <div className="space-y-4">
              {[
                "Live walkthrough tailored to your tech stack & target frameworks (SOC 2, ISO, HIPAA, AI)",
                "See 300+ native integrations and automated evidence telemetry in action",
                "Learn how Autonomous TPRM and AI Questionnaires save 20+ hours per week",
                "Custom pricing proposal & implementation timeline for your team size",
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-1 shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-slate-200 text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-brand-teal/20 text-brand-cyan flex items-center justify-center font-bold text-lg">
                5.0
              </div>
              <div>
                <p className="text-xs text-slate-400 font-mono">G2 LEADER & TOP CHOICE 2026</p>
                <p className="text-sm font-bold text-white">Rated #1 Autonomous GRC & Compliance Platform</p>
              </div>
            </div>
          </div>

          {/* Right Form Card Column */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-brand-teal/40 bg-slate-900/90 p-8 sm:p-10 shadow-2xl backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-2">Request Your Personalized Demo</h3>
              <p className="text-xs text-slate-400 mb-6">Fill in your details and a GRC specialist will connect within 2 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full rounded-xl border bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-slate-700 focus:border-brand-cyan focus:ring-brand-cyan"
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email *</label>
                  <input
                    type="email"
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full rounded-xl border bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-slate-700 focus:border-brand-cyan focus:ring-brand-cyan"
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Company Name *</label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={`w-full rounded-xl border bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                        errors.company
                          ? "border-red-500 focus:ring-red-500"
                          : "border-slate-700 focus:border-brand-cyan focus:ring-brand-cyan"
                      }`}
                    />
                    {errors.company && <p className="text-[11px] text-red-400 mt-1">{errors.company}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Role</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan"
                    >
                      <option value="CTO">CTO / Founder</option>
                      <option value="CISO">CISO / Security VP</option>
                      <option value="GRC Lead">GRC / Compliance Lead</option>
                      <option value="IT Lead">IT & Infrastructure Manager</option>
                      <option value="Other">Other Role</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Company Size</label>
                    <select
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan"
                    >
                      <option value="<50">&lt; 50 employees</option>
                      <option value="50-200">50 - 200 employees</option>
                      <option value="200-500">200 - 500 employees</option>
                      <option value="500-1000">500 - 1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Target Frameworks or Message</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Looking to achieve SOC 2 Type II and ISO 27001 by Q3..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan"
                  />
                </div>

                <div className="flex items-start gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={formData.agree}
                    onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-950 text-brand-teal focus:ring-brand-cyan"
                  />
                  <label htmlFor="agree" className="text-xs text-slate-400">
                    I agree to Arav&apos;sGRC&apos;s Terms of Service and Privacy Policy. My information will remain confidential.
                  </label>
                </div>
                {errors.agree && <p className="text-[11px] text-red-400">{errors.agree}</p>}

                <button
                  type="submit"
                  className="w-full rounded-xl bg-brand-teal py-4 text-base font-bold text-white shadow-xl shadow-brand-teal/30 hover:bg-brand-teal/90 transition-all duration-300 flex items-center justify-center gap-2 mt-4"
                >
                  Book a demo now <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
