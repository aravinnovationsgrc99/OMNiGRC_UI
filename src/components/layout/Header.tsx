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
              onMouseEnter={() => setActiveMenu("product")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-[#2E936F] dark:hover:text-teal transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800/40">
                Workflows <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === "product" ? "rotate-180 text-[#2E936F] dark:text-teal" : ""}`} />
              </button>
              <AnimatePresence>
                {activeMenu === "product" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[94vw] max-w-5xl max-h-[85vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-teal/30 bg-white/95 dark:bg-[#16233F] p-6 shadow-2xl backdrop-blur-xl grid grid-cols-1 md:grid-cols-12 gap-6"
                  >
                    {/* Visual Card Grid for 4 Core Workflows */}
                    <div className="md:col-span-5 space-y-3">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D4521A] dark:text-amber font-mono">
                        Four Core Workflows
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {PILLARS.map((p) => {
                          const iconMap: Record<string, React.ReactNode> = {
                            RISK: <ShieldAlert className="h-3.5 w-3.5" />,
                            ASSET: <Server className="h-3.5 w-3.5" />,
                            CONTROL: <Sparkles className="h-3.5 w-3.5" />,
                            BOARD: <CalendarCheck className="h-3.5 w-3.5" />,
                          };
                          return (
                            <Link key={p.code} href={`/products/${p.slug}`}>
                              <motion.div
                                whileHover={{ y: -3, scale: 1.01 }}
                                transition={{ duration: 0.2 }}
                                className="p-2.5 rounded-xl border border-slate-200 dark:border-navy-700/80 bg-slate-50 dark:bg-navy-900/90 hover:border-teal/50 hover:shadow-md transition-all flex flex-col justify-between group h-full relative overflow-hidden"
                              >
                                <div
                                  className="absolute top-0 left-0 bottom-0 w-1 rounded-l-xl"
                                  style={{ backgroundColor: p.accentColor }}
                                />
                                <div className="pl-1.5">
                                  <div className="flex items-center gap-2 mb-1">
                                    <div
                                      className="p-1 rounded-lg text-white shrink-0"
                                      style={{ backgroundColor: p.accentColor }}
                                    >
                                      {iconMap[p.code] || <Shield className="h-3.5 w-3.5" />}
                                    </div>
                                     <span className="font-bold text-xs text-navy-900 dark:text-white group-hover:text-[#2E936F] dark:group-hover:text-teal-300 transition-colors">
                                      {p.name}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight line-clamp-2">
                                    {p.oneLiner}
                                  </p>
                                </div>
                              </motion.div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    <div className="md:col-span-3 space-y-3 md:border-l border-slate-200 dark:border-navy-700/60 md:pl-6">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D4521A] dark:text-amber font-mono">Lean GRC Solutions</h4>
                      <div className="space-y-2 text-xs">
                        <Link href="/solutions/startups" className="block p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800/80 transition-colors">
                          <p className="font-bold text-navy-900 dark:text-white">For Lean Security Teams</p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">Replace manual spreadsheets with unified operations</p>
                        </Link>
                        <Link href="/solutions/mid-market" className="block p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800/80 transition-colors">
                          <p className="font-bold text-navy-900 dark:text-white">For GRC Leads &amp; CISOs</p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">One control mapped across multiple standards</p>
                        </Link>
                        <Link href="/solutions/enterprise" className="block p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800/80 transition-colors">
                          <p className="font-bold text-navy-900 dark:text-white">For Audit Readiness</p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">Continuous rolling testing &amp; immutable history</p>
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
                        <Link href="/get-a-demo">
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
                        href="/frameworks/soc-2"
                        className="text-xs font-semibold text-[#2E936F] dark:text-teal hover:underline flex items-center gap-1"
                      >
                        Explore Coverage <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {FRAMEWORKS.map((fw) => (
                        <Link
                          key={fw.code}
                          href={`/frameworks/${fw.slug}`}
                          className="p-3 rounded-xl border border-slate-200 dark:border-navy-700/60 bg-slate-50 dark:bg-navy-900/60 hover:border-[#2E936F]/60 dark:hover:border-teal/60 hover:bg-[#F7D7B0]/30 dark:hover:bg-navy-800 transition-all"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-navy-900 dark:text-white text-xs">{fw.name}</span>
                            <span
                              className="h-2 w-2 rounded-full"
                              style={{ backgroundColor: fw.accentColor }}
                            />
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">{fw.oneLiner}</p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/#how-it-works"
              className="px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-[#2E936F] dark:hover:text-teal transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800/40"
            >
              How It Works
            </Link>

            {/* Mega Menu: Resources */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("resources")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-[#2E936F] dark:hover:text-teal transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800/40">
                Resources <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === "resources" ? "rotate-180 text-[#2E936F] dark:text-teal" : ""}`} />
              </button>
              <AnimatePresence>
                {activeMenu === "resources" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-md max-h-[85vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-teal/30 bg-white/95 dark:bg-[#16233F] p-5 shadow-2xl backdrop-blur-xl space-y-3"
                  >
                    <h4 className="text-xs font-mono uppercase text-[#D4521A] dark:text-amber font-bold">Knowledge &amp; Insights</h4>
                    <div className="space-y-2 text-xs">
                      <Link href="/blog" className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-700 dark:text-slate-200 hover:text-navy-900 dark:hover:text-white">
                        <BookOpen className="h-4 w-4 text-[#2E936F] dark:text-teal" />
                        <div>
                          <p className="font-bold">Ctrl + GRC Blog</p>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400">Practical guides for lean GRC teams</p>
                        </div>
                      </Link>
                      <Link href="/trust-vault" className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-700 dark:text-slate-200 hover:text-navy-900 dark:hover:text-white">
                        <Award className="h-4 w-4 text-[#2E936F] dark:text-teal-300" />
                        <div>
                          <p className="font-bold">Resource Center</p>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400">Framework checklists &amp; templates</p>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/pricing"
              className="px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-[#2E936F] dark:hover:text-teal transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800/40"
            >
              Pricing
            </Link>

            <Link
              href="/about-us"
              className="px-3 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-[#2E936F] dark:hover:text-teal transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800/40"
            >
              About
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

            <Link
              href="/contact-us"
              className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#2E936F] dark:hover:text-white transition-colors px-3 py-2"
            >
              Contact
            </Link>
            <Link href="/get-a-demo">
              <Button variant="primary" size="sm" rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>
                Request a Demo
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
