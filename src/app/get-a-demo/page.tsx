"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { GenericHeroMotif } from "@/components/ui/HeroVisualMotifs";
import { motion } from "framer-motion";
import { CheckCircle2, Lock, ArrowRight } from "lucide-react";

export default function GetADemoPage() {
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
    <div className="min-h-screen bg-canvas dark:bg-[#0A111F] text-navy-900 dark:text-slate-100 flex flex-col justify-between">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="EXPERIENCE OMNiGRC"
          title="Request a walkthrough of the connected GRC platform."
          subtitle="See how OMNiGRC unifies risk registers, asset inventories, control mapping, and compliance testing in one connected operating workflow for lean teams."
          visual={<GenericHeroMotif type="demo" />}
        />

        <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Text & Benefits Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              {[
                "Live walkthrough tailored to your target frameworks (ISO 27001, ISO 42001, SOC 2, GDPR, DPDP, HIPAA)",
                "See the 5x5 Risk Matrix connected directly to assets and protective controls",
                "Explore the Advisory AI control mapper with data minimization & human review",
                "Review the Compliance Testing Board with rolling 30/60/90-day visibility",
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-teal/20 text-teal mt-1 shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-200 text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl border border-cardBorderWarm dark:border-slate-800 bg-cardWarm dark:bg-slate-900/60 backdrop-blur-md flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-teal/20 text-teal flex items-center justify-center font-bold text-lg shrink-0">
                <Lock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-amber font-mono font-semibold">CONFIDENTIAL &amp; TENANT ISOLATED</p>
                <p className="text-sm font-bold text-navy-900 dark:text-white">Built for Practical GRC Operations</p>
              </div>
            </div>
          </div>

          {/* Right Form Card Column */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-cardBorderWarm dark:border-teal/30 bg-cardWarm dark:bg-slate-900/90 p-8 sm:p-10 shadow-2xl backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">Request Your Demo Walkthrough</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">Fill in your details and a GRC specialist will connect to schedule a time.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full rounded-xl border bg-white dark:bg-slate-950 px-4 py-3 text-sm text-navy-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-cardBorderWarm dark:border-slate-700 focus:border-teal focus:ring-teal"
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Work Email *</label>
                  <input
                    type="email"
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full rounded-xl border bg-white dark:bg-slate-950 px-4 py-3 text-sm text-navy-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-cardBorderWarm dark:border-slate-700 focus:border-teal focus:ring-teal"
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Company Name *</label>
                    <input
                      type="text"
                      placeholder="Company Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={`w-full rounded-xl border bg-white dark:bg-slate-950 px-4 py-3 text-sm text-navy-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 ${
                        errors.company
                          ? "border-red-500 focus:ring-red-500"
                          : "border-cardBorderWarm dark:border-slate-700 focus:border-teal focus:ring-teal"
                      }`}
                    />
                    {errors.company && <p className="text-[11px] text-red-500 mt-1">{errors.company}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-cardBorderWarm dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3 text-sm text-navy-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Your Role</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full rounded-xl border border-cardBorderWarm dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3 text-sm text-navy-900 dark:text-white focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                    >
                      <option value="GRC Lead">GRC / Compliance Lead</option>
                      <option value="CISO">CISO / Head of Security</option>
                      <option value="CTO">CTO / Technical Founder</option>
                      <option value="IT Lead">IT / SecOps Manager</option>
                      <option value="Other">Other Role</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Company Size</label>
                    <select
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      className="w-full rounded-xl border border-cardBorderWarm dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3 text-sm text-navy-900 dark:text-white focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
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
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Target Frameworks or Priorities</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Target ISO 27001 & SOC 2, looking to replace spreadsheets..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-cardBorderWarm dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-3 text-sm text-navy-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                  />
                </div>

                <div className="flex items-start gap-2.5 pt-2">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={formData.agree}
                    onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-cardBorderWarm dark:border-slate-700 bg-white dark:bg-slate-950 text-teal focus:ring-teal"
                  />
                  <label htmlFor="agree" className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    I agree to OMNiGRC&apos;s{" "}
                    <Link
                      href="/terms-of-service"
                      target="_blank"
                      className="text-teal underline font-semibold hover:text-navy-900 dark:hover:text-white transition-colors"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy-policy"
                      target="_blank"
                      className="text-teal underline font-semibold hover:text-navy-900 dark:hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    . My information will remain confidential.
                  </label>
                </div>
                {errors.agree && <p className="text-[11px] text-red-500">{errors.agree}</p>}

                <button
                  type="submit"
                  className="w-full rounded-xl bg-teal py-4 text-base font-bold text-white shadow-xl shadow-teal/30 hover:bg-teal/90 transition-all duration-300 flex items-center justify-center gap-2 mt-4"
                >
                  Request Demo <ArrowRight className="h-5 w-5" />
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
