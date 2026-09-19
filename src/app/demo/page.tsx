"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  CheckCircle2,
  Lock,
  ArrowRight,
  ShieldCheck,
  Building2,
  Sparkles,
  FileCheck2,
  Layers,
  Info
} from "lucide-react";

export default function DemoPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    role: "GRC Lead",
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

    router.push("/thank-you");
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] dark:bg-[#0A111F] text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />

      <main className="flex-1 w-full pt-16">
        {/* HERO SECTION */}
        <section className="relative w-full px-4 sm:px-6 lg:px-8 pt-6 pb-12 overflow-hidden border-b border-slate-200 dark:border-navy-700/60">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ffdbcf]/30 rounded-full blur-3xl pointer-events-none -z-10 ambient-motion-1" />

          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdbcf] dark:bg-orange-950/30 text-[#380d00] dark:text-orange-400 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F15E1C] animate-pulse" />
              <span className="font-mono text-xs font-semibold tracking-wider uppercase">
                EXPERIENCE CONNECTED GRC
              </span>
            </div>

            <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-[52px] lg:leading-[60px] text-[#0d1b36] dark:text-white font-extrabold tracking-tight mx-auto mb-6">
              Request a walkthrough of the OMNiGRC platform.
            </h1>

            <p className="max-w-3xl text-base sm:text-lg text-[#5a4138] dark:text-slate-300 font-medium mx-auto mb-8 leading-relaxed">
              See how OMNiGRC unifies risk registers, asset inventories, control mapping, and compliance testing in one connected operating workflow for lean teams.
            </p>
          </div>
        </section>

        {/* SECTION: INTAKE FORM & WALKTHROUGH SCOPE */}
        <section className="w-full bg-white dark:bg-[#0A111F] px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-200 dark:border-navy-700/60">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Expectations & Benefits */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="font-mono text-xs text-[#F15E1C] font-bold uppercase tracking-widest block mb-2">
                  WHAT TO EXPECT
                </span>
                <h2 className="text-2xl sm:text-3xl text-[#0d1b36] dark:text-white font-bold tracking-tight">
                  Tailored Technical Walkthrough
                </h2>
                <p className="text-sm text-[#5a4138] dark:text-slate-400 mt-2 leading-relaxed">
                  Our walkthroughs focus on operational capabilities, data isolation boundaries, and practical framework alignment without aggressive sales pitches.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Live demonstration mapped to your target frameworks (ISO 27001, ISO 42001, SOC 2, GDPR, DPDP, HIPAA)",
                  "See the 5x5 Risk Matrix connected directly to asset repositories and protective controls",
                  "Explore the Advisory AI control mapper with data minimization & human approval workflows",
                  "Review the Compliance Testing Board with rolling 30/60/90-day visibility",
                  "Discuss deployment model options (Shared SaaS, Private MSSP, or Customer-Controlled Docker)",
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#f1f3ff] dark:bg-navy-950/40 border border-slate-200 dark:border-navy-700/60">
                    <div className="p-1 rounded-full bg-[#ffdbcf] dark:bg-orange-950/30 text-[#380d00] dark:text-orange-400 shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-[#F15E1C]" />
                    </div>
                    <span className="text-[#0d1b36] dark:text-slate-200 text-xs font-semibold leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Product Truth Boundary Notice */}
              <div className="p-5 rounded-2xl bg-[#faf8ff] dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 flex items-start gap-3">
                <Lock className="h-5 w-5 text-[#F15E1C] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono font-bold text-[#F15E1C] uppercase mb-0.5">CONFIDENTIAL & TENANT ISOLATED</p>
                  <p className="text-xs text-[#5a4138] dark:text-slate-400 leading-relaxed">
                    Your request details remain confidential. OMNiGRC adheres strictly to application-level tenant isolation and data minimization standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Intake Form Card */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-slate-200 dark:border-navy-700/60 bg-[#f1f3ff] dark:bg-navy-950/30 p-8 sm:p-10 shadow-xl">
                <h3 className="text-2xl font-bold text-[#0d1b36] dark:text-white mb-2">Request Your Demo Walkthrough</h3>
                <p className="text-xs text-[#5a4138] dark:text-slate-400 mb-6">Fill in your details and a GRC specialist will connect to coordinate a personalized session.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0d1b36] dark:text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full rounded-xl border bg-white dark:bg-navy-900 px-4 py-3 text-sm text-[#0d1b36] dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                        errors.name
                          ? "border-red-500 focus:ring-red-500"
                          : "border-slate-200 dark:border-navy-700/60 focus:border-[#F15E1C] focus:ring-[#F15E1C]/20"
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-600 mt-1 font-mono">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0d1b36] dark:text-slate-300 mb-1">Work Email *</label>
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full rounded-xl border bg-white dark:bg-navy-900 px-4 py-3 text-sm text-[#0d1b36] dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                        errors.email
                          ? "border-red-500 focus:ring-red-500"
                          : "border-slate-200 dark:border-navy-700/60 focus:border-[#F15E1C] focus:ring-[#F15E1C]/20"
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-600 mt-1 font-mono">{errors.email}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0d1b36] dark:text-slate-300 mb-1">Company Name *</label>
                      <input
                        type="text"
                        placeholder="Company Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={`w-full rounded-xl border bg-white dark:bg-navy-900 px-4 py-3 text-sm text-[#0d1b36] dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                          errors.company
                            ? "border-red-500 focus:ring-red-500"
                            : "border-slate-200 dark:border-navy-700/60 focus:border-[#F15E1C] focus:ring-[#F15E1C]/20"
                        }`}
                      />
                      {errors.company && <p className="text-[11px] text-red-600 mt-1 font-mono">{errors.company}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0d1b36] dark:text-slate-300 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 dark:border-navy-700/60 bg-white dark:bg-navy-900 px-4 py-3 text-sm text-[#0d1b36] dark:text-slate-200 placeholder-slate-400 focus:border-[#F15E1C] focus:outline-none focus:ring-2 focus:ring-[#F15E1C]/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0d1b36] dark:text-slate-300 mb-1">Your Role</label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 dark:border-navy-700/60 bg-white dark:bg-navy-900 px-4 py-3 text-sm text-[#0d1b36] dark:text-slate-200 focus:border-[#F15E1C] focus:outline-none focus:ring-2 focus:ring-[#F15E1C]/20"
                      >
                        <option value="GRC Lead">GRC / Compliance Lead</option>
                        <option value="CISO">CISO / Head of Security</option>
                        <option value="CTO">CTO / Technical Founder</option>
                        <option value="IT Lead">IT / SecOps Manager</option>
                        <option value="MSSP Lead">MSSP Partner / Managed Lead</option>
                        <option value="Other">Other Role</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0d1b36] dark:text-slate-300 mb-1">Company Size</label>
                      <select
                        value={formData.size}
                        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 dark:border-navy-700/60 bg-white dark:bg-navy-900 px-4 py-3 text-sm text-[#0d1b36] dark:text-slate-200 focus:border-[#F15E1C] focus:outline-none focus:ring-2 focus:ring-[#F15E1C]/20"
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
                    <label className="block text-xs font-semibold text-[#0d1b36] dark:text-slate-300 mb-1">Target Frameworks or Priorities</label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Target ISO 27001 & SOC 2, looking to streamline risk register and evidence collection..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 dark:border-navy-700/60 bg-white dark:bg-navy-900 px-4 py-3 text-sm text-[#0d1b36] dark:text-slate-200 placeholder-slate-400 focus:border-[#F15E1C] focus:outline-none focus:ring-2 focus:ring-[#F15E1C]/20"
                    />
                  </div>

                  <div className="flex items-start gap-2.5 pt-2">
                    <input
                      type="checkbox"
                      id="agree"
                      checked={formData.agree}
                      onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-[#F15E1C] focus:ring-[#F15E1C]"
                    />
                    <label htmlFor="agree" className="text-xs text-[#5a4138] dark:text-slate-400 leading-relaxed">
                      I agree to OMNiGRC&apos;s{" "}
                      <Link
                        href="/terms-of-service"
                        target="_blank"
                        className="text-[#F15E1C] underline font-semibold hover:text-[#ce4700] transition-colors"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy-policy"
                        target="_blank"
                        className="text-[#F15E1C] underline font-semibold hover:text-[#ce4700] transition-colors"
                      >
                        Privacy Policy
                      </Link>
                      . My information will remain confidential.
                    </label>
                  </div>
                  {errors.agree && <p className="text-[11px] text-red-600 font-mono">{errors.agree}</p>}

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-[#F15E1C] to-[#D4521A] py-4 text-base font-bold text-white shadow-lg shadow-[#F15E1C]/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    <span>Request Demo Walkthrough</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
