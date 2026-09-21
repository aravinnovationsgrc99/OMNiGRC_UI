"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Shield,
  Sparkles,
  ArrowRight,
  Server,
  FileCheck2,
  CalendarCheck,
  ShieldAlert,
  Globe,
  Award,
} from "lucide-react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FRAMEWORKS } from "@/lib/frameworks";
import { PILLARS } from "@/lib/pillars";

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileSection = (section: string) => {
    setMobileExpandedSection(mobileExpandedSection === section ? null : section);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-300 bg-white/95 dark:bg-[#0A111F]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-navy-700/80 shadow-md"
    >
      {/* Subtle Scroll Progress Indicator Bar */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#F15E1C] via-[#FAB60A] to-[#2E936F] dark:from-teal dark:via-teal-300 dark:to-amber transition-all duration-150 z-50 opacity-90 shadow-sm"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* ── Brand Logo ── */}
          <Link href="/" className="group flex items-center shrink-0" aria-label="OMNiGRC home">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex items-center px-2 py-1 rounded-lg"
            >
              <Image
                src="/omnigrc-logo.png"
                alt="OMNiGRC — Connected GRC Platform"
                width={200}
                height={68}
                className="h-11 sm:h-12 w-auto object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {/* Mega Menu: Workflows */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("workflows")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-[#2E936F] dark:hover:text-teal transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800/60">
                Workflows <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === "workflows" ? "rotate-180 text-[#2E936F] dark:text-teal" : ""}`} />
              </button>
              <AnimatePresence>
                {activeMenu === "workflows" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[94vw] max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-teal/30 bg-white/95 dark:bg-[#16233F] p-6 shadow-2xl backdrop-blur-xl flex flex-col gap-6"
                  >
                    <div className="space-y-3">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D4521A] dark:text-amber font-mono">
                        Ten Connected GRC Workflows
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2.5">
                        <Link href="/products/risk-register" className="p-2.5 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 hover:border-teal/50 hover:shadow-md transition-all group">
                          <div className="font-bold text-xs text-navy-900 dark:text-white group-hover:text-[#2E936F] flex items-center gap-1.5"><ShieldAlert className="h-3.5 w-3.5 text-[#F15E1C]" /> Risk Register</div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">5x5 Scoring &amp; residual tracking</p>
                        </Link>
                        <Link href="/products/asset-inventory" className="p-2.5 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 hover:border-teal/50 hover:shadow-md transition-all group">
                          <div className="font-bold text-xs text-navy-900 dark:text-white group-hover:text-[#2E936F] flex items-center gap-1.5"><Server className="h-3.5 w-3.5 text-[#2E936F]" /> Asset &amp; Inventory</div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">Cloud infra discovery &amp; ownership</p>
                        </Link>
                        <Link href="/products/control-mapping" className="p-2.5 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 hover:border-teal/50 hover:shadow-md transition-all group">
                          <div className="font-bold text-xs text-navy-900 dark:text-white group-hover:text-[#2E936F] flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5 text-[#F15E1C]" /> Control Mapping</div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">Map once across frameworks</p>
                        </Link>
                        <Link href="/products/compliance-board" className="p-2.5 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 hover:border-teal/50 hover:shadow-md transition-all group">
                          <div className="font-bold text-xs text-navy-900 dark:text-white group-hover:text-[#2E936F] flex items-center gap-1.5"><CalendarCheck className="h-3.5 w-3.5 text-[#2E936F]" /> Compliance Board</div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">30/60/90-day testing cadence</p>
                        </Link>
                        <Link href="/products/vulnerabilities" className="p-2.5 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 hover:border-teal/50 hover:shadow-md transition-all group">
                          <div className="font-bold text-xs text-navy-900 dark:text-white group-hover:text-[#2E936F] flex items-center gap-1.5"><ShieldAlert className="h-3.5 w-3.5 text-[#F15E1C]" /> Vulnerabilities</div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">Asset-linked finding governance</p>
                        </Link>
                        <Link href="/products/vendors" className="p-2.5 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 hover:border-teal/50 hover:shadow-md transition-all group">
                          <div className="font-bold text-xs text-navy-900 dark:text-white group-hover:text-[#2E936F] flex items-center gap-1.5"><Globe className="h-3.5 w-3.5 text-[#2E936F]" /> Vendors</div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">Third-party supply chain risk</p>
                        </Link>
                        <Link href="/products/policies" className="p-2.5 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 hover:border-teal/50 hover:shadow-md transition-all group">
                          <div className="font-bold text-xs text-navy-900 dark:text-white group-hover:text-[#2E936F] flex items-center gap-1.5"><FileCheck2 className="h-3.5 w-3.5 text-[#F15E1C]" /> Policies</div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">Centralized review lifecycle</p>
                        </Link>
                        <Link href="/products/audits" className="p-2.5 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 hover:border-teal/50 hover:shadow-md transition-all group">
                          <div className="font-bold text-xs text-navy-900 dark:text-white group-hover:text-[#2E936F] flex items-center gap-1.5"><Award className="h-3.5 w-3.5 text-[#2E936F]" /> Audits</div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">Structured assessments &amp; workpapers</p>
                        </Link>
                        <Link href="/products/remediation" className="p-2.5 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 hover:border-teal/50 hover:shadow-md transition-all group">
                          <div className="font-bold text-xs text-navy-900 dark:text-white group-hover:text-[#2E936F] flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-[#F15E1C]" /> Remediation</div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">Corrective action SLA tracking</p>
                        </Link>
                        <Link href="/products/evidence" className="p-2.5 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 hover:border-teal/50 hover:shadow-md transition-all group">
                          <div className="font-bold text-xs text-navy-900 dark:text-white group-hover:text-[#2E936F] flex items-center gap-1.5"><FileCheck2 className="h-3.5 w-3.5 text-[#2E936F]" /> Evidence References</div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">External evidence reference/index layer</p>
                        </Link>
                      </div>
                    </div>

                    <div className="w-full border-t border-slate-200 dark:border-navy-700/60 pt-5">
                      <div className="w-full rounded-xl bg-gradient-to-r from-[#2E936F]/10 via-[#F7D7B0]/20 to-[#2E936F]/10 dark:from-teal/20 dark:via-navy-800/80 dark:to-teal/20 p-5 border border-[#2E936F]/30 dark:border-teal/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1.5">
                            <Badge variant="ai" icon={<Sparkles className="h-3 w-3" />}>
                              Advisory AI Engine
                            </Badge>
                            <h4 className="text-sm font-bold text-navy-900 dark:text-white">AI Assists. Humans Decide.</h4>
                          </div>
                          <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                            Data-minimized clause correlation with mandatory human review and approval.
                          </p>
                        </div>
                        <div className="shrink-0 w-full md:w-auto">
                          <Link href="/demo">
                            <Button variant="primary" size="sm" className="w-full md:w-auto" rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>
                              Book a Walkthrough
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mega Menu: Frameworks */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("frameworks")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-[#2E936F] dark:hover:text-teal transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800/60">
                Frameworks <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === "frameworks" ? "rotate-180 text-[#2E936F] dark:text-teal" : ""}`} />
              </button>
              <AnimatePresence>
                {activeMenu === "frameworks" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[92vw] max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-teal/30 bg-white/95 dark:bg-[#16233F] p-6 shadow-2xl backdrop-blur-xl"
                  >
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-navy-700/60 pb-3 mb-4">
                      <div>
                        <h4 className="font-bold text-navy-900 dark:text-white text-sm">Documented Framework Support</h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">Map once and align across core standards</p>
                      </div>
                      <Link
                        href="/frameworks"
                        className="text-xs font-semibold text-[#2E936F] dark:text-teal hover:underline flex items-center gap-1"
                      >
                        All Frameworks <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <Link href="/frameworks/iso-27001" className="p-3 rounded-xl border border-slate-200 dark:border-navy-700/60 bg-slate-50 dark:bg-navy-900/60 hover:border-[#2E936F]/60 dark:hover:border-teal/60 hover:bg-[#F7D7B0]/30 transition-all">
                        <span className="font-bold text-navy-900 dark:text-white text-xs block mb-0.5">ISO 27001:2022</span>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">ISMS Information Security Governance</p>
                      </Link>
                      <Link href="/frameworks/soc-2" className="p-3 rounded-xl border border-slate-200 dark:border-navy-700/60 bg-slate-50 dark:bg-navy-900/60 hover:border-[#2E936F]/60 dark:hover:border-teal/60 hover:bg-[#F7D7B0]/30 transition-all">
                        <span className="font-bold text-navy-900 dark:text-white text-xs block mb-0.5">SOC 2 Type II</span>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">AICPA Trust Services Criteria</p>
                      </Link>
                      <Link href="/frameworks/iso-42001" className="p-3 rounded-xl border border-slate-200 dark:border-navy-700/60 bg-slate-50 dark:bg-navy-900/60 hover:border-[#2E936F]/60 dark:hover:border-teal/60 hover:bg-[#F7D7B0]/30 transition-all">
                        <span className="font-bold text-navy-900 dark:text-white text-xs block mb-0.5">ISO 42001:2023</span>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">Artificial Intelligence Management (AIMS)</p>
                      </Link>
                      <Link href="/frameworks/gdpr" className="p-3 rounded-xl border border-slate-200 dark:border-navy-700/60 bg-slate-50 dark:bg-navy-900/60 hover:border-[#2E936F]/60 dark:hover:border-teal/60 hover:bg-[#F7D7B0]/30 transition-all">
                        <span className="font-bold text-navy-900 dark:text-white text-xs block mb-0.5">GDPR &amp; UK GDPR</span>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">EU &amp; UK Data Protection Governance</p>
                      </Link>
                      <Link href="/frameworks/dpdp" className="p-3 rounded-xl border border-slate-200 dark:border-navy-700/60 bg-slate-50 dark:bg-navy-900/60 hover:border-[#2E936F]/60 dark:hover:border-teal/60 hover:bg-[#F7D7B0]/30 transition-all">
                        <span className="font-bold text-navy-900 dark:text-white text-xs block mb-0.5">DPDP Act 2023</span>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">Digital Personal Data Protection (India)</p>
                      </Link>
                      <Link href="/frameworks/hipaa" className="p-3 rounded-xl border border-slate-200 dark:border-navy-700/60 bg-slate-50 dark:bg-navy-900/60 hover:border-[#2E936F]/60 dark:hover:border-teal/60 hover:bg-[#F7D7B0]/30 transition-all">
                        <span className="font-bold text-navy-900 dark:text-white text-xs block mb-0.5">HIPAA Security Rule</span>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">Healthcare ePHI Protection</p>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mega Menu: Solutions */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("solutions")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-[#2E936F] dark:hover:text-teal transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800/60">
                Solutions <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === "solutions" ? "rotate-180 text-[#2E936F] dark:text-teal" : ""}`} />
              </button>
              <AnimatePresence>
                {activeMenu === "solutions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-md max-h-[85vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-teal/30 bg-white/95 dark:bg-[#16233F] p-5 shadow-2xl backdrop-blur-xl space-y-2"
                  >
                    <h4 className="text-xs font-mono uppercase text-[#D4521A] dark:text-amber font-bold mb-2">By Customer Segment</h4>
                    <Link href="/solutions/lean-security-teams" className="block p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-700 dark:text-slate-200">
                      <p className="font-bold text-xs">Lean Security Teams</p>
                      <p className="text-[11px] text-slate-500">Unify risk, asset, and control tracking without overhead</p>
                    </Link>
                    <Link href="/solutions/security-leaders" className="block p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-700 dark:text-slate-200">
                      <p className="font-bold text-xs">Security Leaders &amp; CISOs</p>
                      <p className="text-[11px] text-slate-500">Board-ready reporting &amp; multi-framework crosswalks</p>
                    </Link>
                    <Link href="/solutions/compliance-managers" className="block p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-700 dark:text-slate-200">
                      <p className="font-bold text-xs">Compliance Managers</p>
                      <p className="text-[11px] text-slate-500">Automate testing cadences and evidence compilation</p>
                    </Link>
                    <Link href="/solutions/saas-growing-organizations" className="block p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-700 dark:text-slate-200">
                      <p className="font-bold text-xs">SaaS &amp; Growing Orgs</p>
                      <p className="text-[11px] text-slate-500">Accelerate SOC 2 &amp; ISO readiness for market expansion</p>
                    </Link>
                    <Link href="/solutions/mssp" className="block p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-700 dark:text-slate-200">
                      <p className="font-bold text-xs">MSSP Partners</p>
                      <p className="text-[11px] text-slate-500">Multi-tenant client governance and advisory tools</p>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/how-it-works"
              className="px-3 py-2 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-[#2E936F] dark:hover:text-teal transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800/60"
            >
              How It Works
            </Link>

            <Link
              href="/trust"
              className="px-3 py-2 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-[#2E936F] dark:hover:text-teal transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800/60"
            >
              Trust
            </Link>

            <Link
              href="/resources"
              className="px-3 py-2 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-[#2E936F] dark:hover:text-teal transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800/60"
            >
              Resources
            </Link>

            <Link
              href="/pricing"
              className="px-3 py-2 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-[#2E936F] dark:hover:text-teal transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800/60"
            >
              Pricing
            </Link>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <button
              suppressHydrationWarning
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-slate-200 dark:border-navy-700/60 bg-slate-100 dark:bg-navy-900/80 text-[#D4521A] dark:text-amber hover:text-[#2E936F] dark:hover:text-white hover:border-[#2E936F]/40 dark:hover:border-teal/40 transition-all focus:outline-none focus:ring-2 focus:ring-[#2E936F] dark:focus:ring-teal"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-amber" />
              ) : (
                <Moon className="h-4 w-4 text-[#2E936F]" />
              )}
            </button>
            <div aria-live="polite" className="sr-only">
              Current theme is {theme}
            </div>

            <Link href="/demo">
              <Button variant="primary" size="sm" rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>
                Request Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Theme Toggle & Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              suppressHydrationWarning
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-slate-200 dark:border-navy-700/60 bg-slate-100 dark:bg-navy-900/60 text-[#D4521A] dark:text-amber hover:text-[#2E936F] dark:hover:text-teal"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? <Sun className="h-5 w-5 text-amber" /> : <Moon className="h-5 w-5 text-[#2E936F]" />}
            </button>

            <button
              suppressHydrationWarning
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-navy-900 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-navy-800 hover:text-teal"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 w-full border-b border-slate-200 dark:border-navy-700/80 bg-white dark:bg-[#0A111F] px-5 pt-4 pb-8 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl z-50 text-slate-900 dark:text-slate-100"
          >
            <div className="space-y-1">
              {/* Workflows Accordion */}
              <button
                onClick={() => toggleMobileSection("workflows")}
                className="flex items-center justify-between w-full py-3 px-3 rounded-xl min-h-[48px] text-base font-bold text-navy-900 dark:text-white hover:bg-slate-100 dark:hover:bg-navy-800/60 transition-colors"
              >
                <span>Workflows</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpandedSection === "workflows" ? "rotate-180 text-[#2E936F] dark:text-teal" : ""}`} />
              </button>
              {mobileExpandedSection === "workflows" && (
                <div className="space-y-2 my-2 pl-2">
                  <div className="grid grid-cols-1 gap-2">
                    <Link href="/products/risk-register" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 block">
                      <div className="font-bold text-xs text-navy-900 dark:text-white flex items-center gap-2"><ShieldAlert className="h-4 w-4 text-[#F15E1C]" /> Risk Register</div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">5x5 Scoring &amp; residual tracking</p>
                    </Link>
                    <Link href="/products/asset-inventory" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 block">
                      <div className="font-bold text-xs text-navy-900 dark:text-white flex items-center gap-2"><Server className="h-4 w-4 text-[#2E936F]" /> Asset &amp; Inventory</div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Cloud infra discovery &amp; ownership</p>
                    </Link>
                    <Link href="/products/control-mapping" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 block">
                      <div className="font-bold text-xs text-navy-900 dark:text-white flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#F15E1C]" /> Control Mapping</div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Map once across frameworks</p>
                    </Link>
                    <Link href="/products/compliance-board" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 block">
                      <div className="font-bold text-xs text-navy-900 dark:text-white flex items-center gap-2"><CalendarCheck className="h-4 w-4 text-[#2E936F]" /> Compliance Board</div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">30/60/90-day testing cadence</p>
                    </Link>
                    <Link href="/products/vulnerabilities" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 block">
                      <div className="font-bold text-xs text-navy-900 dark:text-white flex items-center gap-2"><ShieldAlert className="h-4 w-4 text-[#F15E1C]" /> Vulnerabilities</div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Asset-linked finding governance</p>
                    </Link>
                    <Link href="/products/vendors" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 block">
                      <div className="font-bold text-xs text-navy-900 dark:text-white flex items-center gap-2"><Globe className="h-4 w-4 text-[#2E936F]" /> Vendors</div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Third-party supply chain risk</p>
                    </Link>
                    <Link href="/products/policies" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 block">
                      <div className="font-bold text-xs text-navy-900 dark:text-white flex items-center gap-2"><FileCheck2 className="h-4 w-4 text-[#F15E1C]" /> Policies</div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Centralized review lifecycle</p>
                    </Link>
                    <Link href="/products/audits" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 block">
                      <div className="font-bold text-xs text-navy-900 dark:text-white flex items-center gap-2"><Award className="h-4 w-4 text-[#2E936F]" /> Audits</div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Structured assessments &amp; workpapers</p>
                    </Link>
                    <Link href="/products/remediation" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 block">
                      <div className="font-bold text-xs text-navy-900 dark:text-white flex items-center gap-2"><Shield className="h-4 w-4 text-[#F15E1C]" /> Remediation</div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Corrective action SLA tracking</p>
                    </Link>
                    <Link href="/products/evidence" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 block">
                      <div className="font-bold text-xs text-navy-900 dark:text-white flex items-center gap-2"><FileCheck2 className="h-4 w-4 text-[#2E936F]" /> Evidence References</div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">External evidence reference layer</p>
                    </Link>
                  </div>
                </div>
              )}

              {/* Frameworks Accordion */}
              <button
                onClick={() => toggleMobileSection("frameworks")}
                className="flex items-center justify-between w-full py-3 px-3 rounded-xl min-h-[48px] text-base font-bold text-navy-900 dark:text-white hover:bg-slate-100 dark:hover:bg-navy-800/60 transition-colors"
              >
                <span>Frameworks</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpandedSection === "frameworks" ? "rotate-180 text-[#2E936F] dark:text-teal" : ""}`} />
              </button>
              {mobileExpandedSection === "frameworks" && (
                <div className="space-y-2 my-2 pl-2">
                  <div className="grid grid-cols-1 gap-2">
                    {FRAMEWORKS.map((fw) => (
                      <Link
                        key={fw.code}
                        href={`/frameworks/${fw.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-3 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 block"
                      >
                        <span className="font-bold text-xs text-navy-900 dark:text-white block">{fw.name}</span>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{fw.oneLiner}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Solutions Accordion */}
              <button
                onClick={() => toggleMobileSection("solutions")}
                className="flex items-center justify-between w-full py-3 px-3 rounded-xl min-h-[48px] text-base font-bold text-navy-900 dark:text-white hover:bg-slate-100 dark:hover:bg-navy-800/60 transition-colors"
              >
                <span>Solutions</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpandedSection === "solutions" ? "rotate-180 text-[#2E936F] dark:text-teal" : ""}`} />
              </button>
              {mobileExpandedSection === "solutions" && (
                <div className="space-y-2 my-2 pl-2">
                  <div className="grid grid-cols-1 gap-2">
                    <Link href="/solutions/lean-security-teams" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 block">
                      <span className="font-bold text-xs text-navy-900 dark:text-white block">Lean Security Teams</span>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Unify risk, asset, and control tracking without overhead</p>
                    </Link>
                    <Link href="/solutions/security-leaders" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 block">
                      <span className="font-bold text-xs text-navy-900 dark:text-white block">Security Leaders &amp; CISOs</span>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Board-ready reporting &amp; multi-framework crosswalks</p>
                    </Link>
                    <Link href="/solutions/compliance-managers" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 block">
                      <span className="font-bold text-xs text-navy-900 dark:text-white block">Compliance Managers</span>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Automate testing cadences and evidence compilation</p>
                    </Link>
                    <Link href="/solutions/saas-growing-organizations" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 block">
                      <span className="font-bold text-xs text-navy-900 dark:text-white block">SaaS &amp; Growing Orgs</span>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Accelerate SOC 2 &amp; ISO readiness for market expansion</p>
                    </Link>
                    <Link href="/solutions/mssp" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 block">
                      <span className="font-bold text-xs text-navy-900 dark:text-white block">MSSP Partners</span>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Multi-tenant client governance and advisory tools</p>
                    </Link>
                  </div>
                </div>
              )}

              {/* Direct Navigation Links */}
              <Link
                href="/how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-3 rounded-xl min-h-[48px] text-base font-bold text-navy-900 dark:text-white hover:bg-slate-100 dark:hover:bg-navy-800/60 transition-colors flex items-center"
              >
                How It Works
              </Link>
              <Link
                href="/trust"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-3 rounded-xl min-h-[48px] text-base font-bold text-navy-900 dark:text-white hover:bg-slate-100 dark:hover:bg-navy-800/60 transition-colors flex items-center"
              >
                Trust
              </Link>
              <Link
                href="/resources"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-3 rounded-xl min-h-[48px] text-base font-bold text-navy-900 dark:text-white hover:bg-slate-100 dark:hover:bg-navy-800/60 transition-colors flex items-center"
              >
                Resources
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-3 rounded-xl min-h-[48px] text-base font-bold text-navy-900 dark:text-white hover:bg-slate-100 dark:hover:bg-navy-800/60 transition-colors flex items-center"
              >
                Ctrl + GRC Blog
              </Link>
              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-3 rounded-xl min-h-[48px] text-base font-bold text-navy-900 dark:text-white hover:bg-slate-100 dark:hover:bg-navy-800/60 transition-colors flex items-center"
              >
                Pricing
              </Link>
              <Link
                href="/about-us"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-3 rounded-xl min-h-[48px] text-base font-bold text-navy-900 dark:text-white hover:bg-slate-100 dark:hover:bg-navy-800/60 transition-colors flex items-center"
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-3 rounded-xl min-h-[48px] text-base font-bold text-navy-900 dark:text-white hover:bg-slate-100 dark:hover:bg-navy-800/60 transition-colors flex items-center"
              >
                Contact Us
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-navy-700/60">
              <Link href="/demo" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" className="w-full min-h-[48px] text-sm font-bold shadow-lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Request Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
