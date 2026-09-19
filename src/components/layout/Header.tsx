"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
  BookOpen,
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#0A111F]/95 backdrop-blur-md border-b border-slate-200 dark:border-teal/20 py-3 shadow-xl"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      {/* Subtle Scroll Progress Indicator Bar */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#F15E1C] via-[#FAB60A] to-[#2E936F] dark:from-teal dark:via-teal-300 dark:to-amber transition-all duration-150 z-50 opacity-90 shadow-sm"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5 shrink-0">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#F15E1C] to-[#FAB60A] dark:from-teal dark:to-amber shadow-md shadow-[#F15E1C]/20 dark:shadow-teal/20"
            >
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-white font-bold" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-navy-900 dark:text-white group-hover:text-[#D4521A] dark:group-hover:text-teal transition-colors">
                OMNi<span className="text-[#D4521A] dark:text-teal">GRC</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest text-[#D4521A] dark:text-amber -mt-1 font-mono uppercase">
                Unified GRC Platform
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {/* Mega Menu: Workflows */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("workflows")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-[#2E936F] dark:hover:text-teal transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800/40">
                Workflows <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === "workflows" ? "rotate-180 text-[#2E936F] dark:text-teal" : ""}`} />
              </button>
              <AnimatePresence>
                {activeMenu === "workflows" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[94vw] max-w-5xl max-h-[85vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-teal/30 bg-white/95 dark:bg-[#16233F] p-6 shadow-2xl backdrop-blur-xl grid grid-cols-1 md:grid-cols-12 gap-6"
                  >
                    <div className="md:col-span-8 space-y-3">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D4521A] dark:text-amber font-mono">
                        Ten Connected GRC Workflows
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
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
                        <Link href="/products/evidence" className="p-2.5 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 hover:border-teal/50 hover:shadow-md transition-all group col-span-1 sm:col-span-2 lg:col-span-3">
                          <div className="font-bold text-xs text-navy-900 dark:text-white group-hover:text-[#2E936F] flex items-center gap-1.5"><FileCheck2 className="h-3.5 w-3.5 text-[#2E936F]" /> Evidence References &amp; Records</div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">External evidence reference/index layer linking controls to defensible audit records</p>
                        </Link>
                      </div>
                    </div>

                    <div className="md:col-span-4 md:border-l border-slate-200 dark:border-navy-700/60 md:pl-6">
                      <div className="h-full rounded-xl bg-gradient-to-b from-[#2E936F]/10 to-[#F7D7B0]/30 dark:from-teal/20 dark:to-navy-900/90 p-5 border border-[#2E936F]/30 dark:border-teal/30 flex flex-col justify-between">
                        <div>
                          <Badge variant="ai" icon={<Sparkles className="h-3 w-3" />} className="mb-3">
                            Advisory AI Engine
                          </Badge>
                          <h4 className="text-sm font-bold text-navy-900 dark:text-white mb-1">AI Assists. Humans Decide.</h4>
                          <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                            Data-minimized clause correlation with mandatory human review and approval.
                          </p>
                        </div>
                        <Link href="/demo">
                          <Button variant="primary" size="sm" className="w-full" rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>
                            Book a Walkthrough
                          </Button>
                        </Link>
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
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-[#2E936F] dark:hover:text-teal transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800/40">
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
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-[#2E936F] dark:hover:text-teal transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800/40">
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
              className="px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-[#2E936F] dark:hover:text-teal transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800/40"
            >
              How It Works
            </Link>

            <Link
              href="/trust"
              className="px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-[#2E936F] dark:hover:text-teal transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800/40"
            >
              Trust
            </Link>

            <Link
              href="/resources"
              className="px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-[#2E936F] dark:hover:text-teal transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800/40"
            >
              Resources
            </Link>

            <Link
              href="/pricing"
              className="px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-[#2E936F] dark:hover:text-teal transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800/40"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-slate-200 dark:border-navy-700/60 bg-white dark:bg-[#16233F] px-4 pt-4 pb-6 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl"
          >
            <div className="space-y-2">
              <button
                onClick={() => toggleMobileSection("workflows")}
                className="flex items-center justify-between w-full py-3 min-h-[44px] text-base font-semibold text-navy-900 dark:text-slate-200 hover:text-[#2E936F] dark:hover:text-teal"
              >
                <span>Workflows</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpandedSection === "workflows" ? "rotate-180 text-[#2E936F] dark:text-teal" : ""}`} />
              </button>
              {mobileExpandedSection === "workflows" && (
                <div className="space-y-2.5 my-2.5">
                  {PILLARS.map((p) => {
                    const iconMap: Record<string, React.ReactNode> = {
                      RISK: <ShieldAlert className="h-4 w-4" />,
                      ASSET: <Server className="h-4 w-4" />,
                      CONTROL: <Sparkles className="h-4 w-4" />,
                      BOARD: <CalendarCheck className="h-4 w-4" />,
                    };
                    return (
                      <Link
                        key={p.code}
                        href={`/products/${p.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-3 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 flex items-start gap-3 relative overflow-hidden min-h-[44px] block active:bg-slate-100 dark:active:bg-navy-800 transition-colors"
                      >
                        <div
                          className="absolute top-0 left-0 bottom-0 w-1 rounded-l-xl"
                          style={{ backgroundColor: p.accentColor }}
                        />
                        <div className="pl-1 flex-1">
                          <div className="flex items-center gap-2 mb-0.5">
                            <div
                              className="p-1 rounded-md text-white shrink-0"
                              style={{ backgroundColor: p.accentColor }}
                            >
                              {iconMap[p.code] || <Shield className="h-3.5 w-3.5" />}
                            </div>
                            <span className="font-bold text-xs text-navy-900 dark:text-white">
                              {p.name}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                            {p.oneLiner}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}

              <button
                onClick={() => toggleMobileSection("frameworks")}
                className="flex items-center justify-between w-full py-3 min-h-[44px] text-base font-semibold text-navy-900 dark:text-slate-200 hover:text-[#2E936F] dark:hover:text-teal"
              >
                <span>Frameworks</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpandedSection === "frameworks" ? "rotate-180 text-[#2E936F] dark:text-teal" : ""}`} />
              </button>
              {mobileExpandedSection === "frameworks" && (
                <div className="pl-4 space-y-2 text-sm border-l border-[#2E936F]/30 dark:border-teal/30 my-2">
                  {FRAMEWORKS.map((fw) => (
                    <Link
                      key={fw.code}
                      href={`/frameworks/${fw.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-navy-900 dark:text-slate-300 hover:text-[#2E936F] dark:hover:text-teal py-2 min-h-[44px] flex items-center"
                    >
                      {fw.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 min-h-[44px] text-base font-semibold text-navy-900 dark:text-slate-200 hover:text-[#2E936F] dark:hover:text-teal flex items-center"
              >
                Pricing
              </Link>
              <Link
                href="/about-us"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 min-h-[44px] text-base font-semibold text-navy-900 dark:text-slate-200 hover:text-[#2E936F] dark:hover:text-teal flex items-center"
              >
                About Us
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 min-h-[44px] text-base font-semibold text-navy-900 dark:text-slate-200 hover:text-[#2E936F] dark:hover:text-teal flex items-center"
              >
                Ctrl + GRC Blog
              </Link>
              <Link
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 min-h-[44px] text-base font-semibold text-navy-900 dark:text-slate-200 hover:text-[#2E936F] dark:hover:text-teal flex items-center"
              >
                Contact Us
              </Link>
            </div>
            <div className="pt-4 border-t border-slate-200 dark:border-navy-700/60">
              <Link href="/get-a-demo" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" className="w-full min-h-[44px]">Request a Demo</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
