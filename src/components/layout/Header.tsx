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
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FRAMEWORKS } from "@/lib/frameworks";

export const Header: React.FC = () => {
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
          ? "bg-[#0A111F]/95 backdrop-blur-md border-b border-teal/20 py-3 shadow-xl"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      {/* Subtle Scroll Progress Indicator Bar */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-teal via-teal-300 to-amber transition-all duration-150 z-50 opacity-90 shadow-sm"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5 shrink-0">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-amber shadow-md shadow-teal/20"
            >
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-white font-bold" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-teal transition-colors">
                OMNi<span className="text-teal">GRC</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest text-amber -mt-1 font-mono uppercase">
                Unified GRC Platform
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {/* Workflows / Product Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("product")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-200 hover:text-teal transition-colors rounded-lg hover:bg-navy-800/40">
                Workflows <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === "product" ? "rotate-180 text-teal" : ""}`} />
              </button>
              <AnimatePresence>
                {activeMenu === "product" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[92vw] max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl border border-teal/30 bg-[#16233F] p-6 shadow-2xl backdrop-blur-xl grid grid-cols-1 md:grid-cols-12 gap-6"
                  >
                    <div className="md:col-span-4 space-y-3">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-amber font-mono">Four Core Workflows</h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link href="/products/risk-management" className="text-slate-300 hover:text-teal-300 hover:underline flex items-center gap-2">
                            <ShieldAlert className="h-3.5 w-3.5 text-teal" /> Risk Register &amp; Scoring
                          </Link>
                        </li>
                        <li>
                          <Link href="/products/continuous-monitoring" className="text-slate-300 hover:text-teal-300 hover:underline flex items-center gap-2">
                            <Server className="h-3.5 w-3.5 text-amber" /> Asset &amp; Inventory Context
                          </Link>
                        </li>
                        <li>
                          <Link href="/products/audit-management" className="text-slate-300 hover:text-teal-300 hover:underline flex items-center gap-2">
                            <FileCheck2 className="h-3.5 w-3.5 text-teal-300" /> Control Mapping &amp; AI
                          </Link>
                        </li>
                        <li>
                          <Link href="/products/policy-management" className="text-slate-300 hover:text-teal-300 hover:underline flex items-center gap-2">
                            <CalendarCheck className="h-3.5 w-3.5 text-amber" /> Compliance Testing Board
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="md:col-span-4 space-y-3 md:border-l border-navy-700/60 md:pl-6">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-amber font-mono">Lean GRC Solutions</h4>
                      <div className="space-y-2 text-xs">
                        <Link href="/solutions/startups" className="block p-2 rounded-lg hover:bg-navy-800/80 transition-colors">
                          <p className="font-bold text-white">For Lean Security Teams</p>
                          <p className="text-[11px] text-slate-400">Replace manual spreadsheets with unified operations</p>
                        </Link>
                        <Link href="/solutions/mid-market" className="block p-2 rounded-lg hover:bg-navy-800/80 transition-colors">
                          <p className="font-bold text-white">For GRC Leads &amp; CISOs</p>
                          <p className="text-[11px] text-slate-400">One control mapped across multiple standards</p>
                        </Link>
                        <Link href="/solutions/enterprise" className="block p-2 rounded-lg hover:bg-navy-800/80 transition-colors">
                          <p className="font-bold text-white">For Audit Readiness</p>
                          <p className="text-[11px] text-slate-400">Continuous rolling testing &amp; immutable history</p>
                        </Link>
                      </div>
                    </div>

                    <div className="md:col-span-4 md:border-l border-navy-700/60 md:pl-6">
                      <div className="h-full rounded-xl bg-gradient-to-b from-teal/20 to-navy-900/90 p-5 border border-teal/30 flex flex-col justify-between">
                        <div>
                          <Badge variant="ai" icon={<Sparkles className="h-3 w-3" />} className="mb-3">
                            Advisory AI Engine
                          </Badge>
                          <h4 className="text-sm font-bold text-white mb-1">AI Assists. Humans Decide.</h4>
                          <p className="text-[11px] text-slate-300 leading-relaxed mb-4">
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

            {/* Frameworks Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("frameworks")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-200 hover:text-teal transition-colors rounded-lg hover:bg-navy-800/40">
                Frameworks <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === "frameworks" ? "rotate-180 text-teal" : ""}`} />
              </button>
              <AnimatePresence>
                {activeMenu === "frameworks" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[92vw] max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-teal/30 bg-[#16233F] p-6 shadow-2xl backdrop-blur-xl"
                  >
                    <div className="flex items-center justify-between border-b border-navy-700/60 pb-3 mb-4">
                      <div>
                        <h4 className="font-bold text-white text-sm">Documented Framework Support</h4>
                        <p className="text-[11px] text-slate-400">Map once and align across core standards</p>
                      </div>
                      <Link
                        href="/frameworks/soc-2"
                        className="text-xs font-semibold text-teal hover:underline flex items-center gap-1"
                      >
                        Explore Coverage <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {FRAMEWORKS.map((fw) => (
                        <Link
                          key={fw.code}
                          href={`/frameworks/${fw.slug}`}
                          className="p-3 rounded-xl border border-navy-700/60 bg-navy-900/60 hover:border-teal/60 hover:bg-navy-800 transition-all"
                        >
                          <p className="font-semibold text-xs text-white">{fw.name}</p>
                          <p className="text-[11px] text-slate-400">{fw.headerDesc}</p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* How It Works Link */}
            <a
              href="#core-workflows"
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-teal transition-colors rounded-lg hover:bg-navy-800/40"
            >
              How It Works
            </a>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("resources")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-200 hover:text-teal transition-colors rounded-lg hover:bg-navy-800/40">
                Resources <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === "resources" ? "rotate-180 text-teal" : ""}`} />
              </button>
              <AnimatePresence>
                {activeMenu === "resources" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-md max-h-[85vh] overflow-y-auto rounded-2xl border border-teal/30 bg-[#16233F] p-5 shadow-2xl backdrop-blur-xl space-y-3"
                  >
                    <h4 className="text-xs font-mono uppercase text-amber font-bold">Knowledge &amp; Insights</h4>
                    <div className="space-y-2 text-xs">
                      <Link href="/blog" className="flex items-center gap-2 p-2 rounded-lg hover:bg-navy-800 text-slate-200 hover:text-white">
                        <BookOpen className="h-4 w-4 text-teal" />
                        <div>
                          <p className="font-bold">Ctrl + GRC Blog</p>
                          <p className="text-[10px] text-slate-400">Practical guides for lean GRC teams</p>
                        </div>
                      </Link>
                      <Link href="/trust-vault" className="flex items-center gap-2 p-2 rounded-lg hover:bg-navy-800 text-slate-200 hover:text-white">
                        <Award className="h-4 w-4 text-teal-300" />
                        <div>
                          <p className="font-bold">Resource Center</p>
                          <p className="text-[10px] text-slate-400">Framework checklists &amp; templates</p>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pricing Direct Link */}
            <Link
              href="/pricing"
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-teal transition-colors rounded-lg hover:bg-navy-800/40"
            >
              Pricing
            </Link>

            {/* Company Link */}
            <Link
              href="/about-us"
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-teal transition-colors rounded-lg hover:bg-navy-800/40"
            >
              About
            </Link>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/contact-us"
              className="text-xs font-semibold text-slate-300 hover:text-white transition-colors px-3 py-2"
            >
              Contact
            </Link>
            <Link href="/get-a-demo">
              <Button variant="primary" size="sm" rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>
                Request a Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden rounded-lg p-2 text-slate-300 hover:bg-navy-800 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-navy-700/60 bg-[#16233F] px-4 pt-4 pb-6 space-y-4 max-h-[85vh] overflow-y-auto"
          >
            <div className="space-y-2">
              <button
                onClick={() => toggleMobileSection("workflows")}
                className="flex items-center justify-between w-full py-2 text-base font-medium text-slate-200 hover:text-teal"
              >
                <span>Workflows</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpandedSection === "workflows" ? "rotate-180 text-teal" : ""}`} />
              </button>
              {mobileExpandedSection === "workflows" && (
                <div className="pl-4 space-y-2 text-sm border-l border-teal/30 my-2">
                  <Link href="/products/risk-management" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white py-1">Risk Register</Link>
                  <Link href="/products/continuous-monitoring" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white py-1">Asset &amp; Inventory</Link>
                  <Link href="/products/audit-management" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white py-1">Control Mapping</Link>
                  <Link href="/products/policy-management" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white py-1">Compliance Board</Link>
                </div>
              )}

              <button
                onClick={() => toggleMobileSection("frameworks")}
                className="flex items-center justify-between w-full py-2 text-base font-medium text-slate-200 hover:text-teal"
              >
                <span>Frameworks</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpandedSection === "frameworks" ? "rotate-180 text-teal" : ""}`} />
              </button>
              {mobileExpandedSection === "frameworks" && (
                <div className="pl-4 space-y-2 text-sm border-l border-teal/30 my-2">
                  {FRAMEWORKS.map((fw) => (
                    <Link
                      key={fw.code}
                      href={`/frameworks/${fw.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-slate-300 hover:text-white py-1"
                    >
                      {fw.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-200 hover:text-teal"
              >
                Pricing
              </Link>
              <Link
                href="/about-us"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-200 hover:text-teal"
              >
                About Us
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-200 hover:text-teal"
              >
                Ctrl + GRC Blog
              </Link>
              <Link
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-200 hover:text-teal"
              >
                Contact Us
              </Link>
            </div>
            <div className="pt-4 border-t border-navy-700/60">
              <Link href="/get-a-demo" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" className="w-full">Request a Demo</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
