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
  Zap,
  ArrowRight,
  Cpu,
  FileCheck,
  BookOpen,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
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
          ? "bg-[#0B0F17]/90 backdrop-blur-md border-b border-brand-orange/20 py-3 shadow-xl"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5 shrink-0">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-brand-green shadow-md shadow-brand-orange/20"
            >
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-white font-bold" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-brand-orange transition-colors">
                OMNi<span className="text-brand-orange">GRC</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest text-brand-peach -mt-1 font-mono uppercase">
                Autonomous Assurance
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {/* Platform Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("platform")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-200 hover:text-brand-orange transition-colors rounded-lg hover:bg-slate-800/40">
                Platform <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === "platform" ? "rotate-180 text-brand-orange" : ""}`} />
              </button>
              <AnimatePresence>
                {activeMenu === "platform" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[92vw] max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl border border-brand-orange/30 bg-[#0F172A] p-6 shadow-2xl backdrop-blur-xl grid grid-cols-1 md:grid-cols-12 gap-6"
                  >
                    <div className="md:col-span-3 space-y-3">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-yellow font-mono">Use Cases</h4>
                      <ul className="space-y-2 text-sm">
                        <li><Link href="/products/continuous-monitoring" className="text-slate-300 hover:text-brand-peach hover:underline flex items-center gap-2"><Zap className="h-3.5 w-3.5 text-brand-orange"/> Compliance Automation</Link></li>
                        <li><Link href="/products/continuous-monitoring" className="text-slate-300 hover:text-brand-peach hover:underline flex items-center gap-2"><Shield className="h-3.5 w-3.5 text-brand-green"/> Continuous Compliance</Link></li>
                        <li><Link href="/products/risk-management" className="text-slate-300 hover:text-brand-peach hover:underline flex items-center gap-2"><Cpu className="h-3.5 w-3.5 text-brand-gold"/> Risk Intelligence</Link></li>
                        <li><Link href="/products/audit-management" className="text-slate-300 hover:text-brand-peach hover:underline flex items-center gap-2"><FileCheck className="h-3.5 w-3.5 text-brand-orange"/> Audit Readiness</Link></li>
                      </ul>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-yellow font-mono pt-3">Industry</h4>
                      <ul className="space-y-2 text-sm">
                        <li><Link href="/solutions/startups" className="text-slate-300 hover:text-white">OMNiGRC for SaaS</Link></li>
                        <li><Link href="/solutions/enterprise" className="text-slate-300 hover:text-white">OMNiGRC for BFSI</Link></li>
                        <li><Link href="/solutions/mid-market" className="text-slate-300 hover:text-white">OMNiGRC for Healthcare</Link></li>
                      </ul>
                    </div>

                    <div className="md:col-span-5 space-y-3 md:border-l border-slate-800 md:pl-6">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-yellow font-mono">Products & Features</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                        <Link href="/products/audit-management" className="p-2 rounded-lg hover:bg-slate-800/80 transition-colors">
                          <p className="font-medium text-white">Audit Management</p>
                          <p className="text-xs text-slate-400">Streamline 100% audit ops</p>
                        </Link>
                        <Link href="/products/autonomous-tprm" className="p-2 rounded-lg hover:bg-slate-800/80 transition-colors">
                          <p className="font-medium text-white">Autonomous TPRM</p>
                          <p className="text-xs text-slate-400">Vendor risk on autopilot</p>
                        </Link>
                        <Link href="/products/unified-commitments" className="p-2 rounded-lg hover:bg-slate-800/80 transition-colors">
                          <p className="font-medium text-white">Unified Commitments</p>
                          <p className="text-xs text-slate-400">Map obligations live</p>
                        </Link>
                        <Link href="/products/ai-governance" className="p-2 rounded-lg hover:bg-slate-800/80 transition-colors">
                          <p className="font-medium text-white">AI Governance</p>
                          <p className="text-xs text-slate-400">Live AI registry & risks</p>
                        </Link>
                        <Link href="/products/risk-management" className="p-2 rounded-lg hover:bg-slate-800/80 transition-colors">
                          <p className="font-medium text-white">Risk Register</p>
                          <p className="text-xs text-slate-400">Quantify & trace risks</p>
                        </Link>
                        <Link href="/products/continuous-monitoring" className="p-2 rounded-lg hover:bg-slate-800/80 transition-colors">
                          <p className="font-medium text-white">Continuous Mon.</p>
                          <p className="text-xs text-slate-400">24/7 security telemetry</p>
                        </Link>
                      </div>
                    </div>

                    <div className="md:col-span-4 md:border-l border-slate-800 md:pl-6">
                      <div className="h-full rounded-xl bg-gradient-to-b from-brand-orange/20 to-slate-900/80 p-5 border border-brand-orange/30 flex flex-col justify-between">
                        <div>
                          <Badge variant="ai" icon={<Sparkles className="h-3 w-3" />} className="mb-3">
                            Featured AI
                          </Badge>
                          <h4 className="text-base font-bold text-white mb-1">Meet OMNiGRC AI</h4>
                          <p className="text-xs text-slate-300 leading-relaxed mb-4">
                            Autonomous evidence collection, auto-mapped controls, and real-time posture protection.
                          </p>
                        </div>
                        <Link href="/get-a-demo">
                          <Button variant="primary" size="sm" className="w-full" rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>
                            Explore Platform AI
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
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-200 hover:text-brand-orange transition-colors rounded-lg hover:bg-slate-800/40">
                Frameworks <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === "frameworks" ? "rotate-180 text-brand-orange" : ""}`} />
              </button>
              <AnimatePresence>
                {activeMenu === "frameworks" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[92vw] max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-brand-orange/30 bg-[#0F172A] p-6 shadow-2xl backdrop-blur-xl"
                  >
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                      <div>
                        <h4 className="font-bold text-white text-base">200+ Supported Compliance Frameworks</h4>
                        <p className="text-xs text-slate-400">Custom standards & automated control translation</p>
                      </div>
                      <Link
                        href="/frameworks/soc-2"
                        className="text-xs font-semibold text-brand-orange hover:underline flex items-center gap-1"
                      >
                        Explore 200+ Frameworks <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { name: "SOC 2 Type II", desc: "Security & Trust", link: "/frameworks/soc-2" },
                        { name: "ISO 27001", desc: "ISMS Global Standard", link: "/frameworks/iso-27001" },
                        { name: "PCI-DSS v4.0", desc: "Payment Security", link: "/frameworks/soc-2" },
                        { name: "HIPAA", desc: "Healthcare Privacy", link: "/frameworks/hipaa" },
                        { name: "GDPR", desc: "EU Data Protection", link: "/frameworks/gdpr" },
                        { name: "DPDP", desc: "Digital Personal Data", link: "/frameworks/dpdp" },
                        { name: "NIST CSF 2.0", desc: "Cybersecurity Frame", link: "/frameworks/iso-27001" },
                        { name: "CSA STAR", desc: "Cloud Security", link: "/frameworks/soc-2" },
                      ].map((fw, idx) => (
                        <Link
                          key={idx}
                          href={fw.link}
                          className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-brand-orange/60 hover:bg-slate-800 transition-all"
                        >
                          <p className="font-semibold text-xs text-white">{fw.name}</p>
                          <p className="text-[11px] text-slate-400">{fw.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("resources")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-200 hover:text-brand-orange transition-colors rounded-lg hover:bg-slate-800/40">
                Resources <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === "resources" ? "rotate-180 text-brand-orange" : ""}`} />
              </button>
              <AnimatePresence>
                {activeMenu === "resources" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[92vw] max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-brand-orange/30 bg-[#0F172A] p-6 shadow-2xl backdrop-blur-xl grid grid-cols-1 sm:grid-cols-2 gap-6"
                  >
                    <div className="space-y-3">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-yellow font-mono">Knowledge Hub</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <Link href="/blog" className="text-slate-300 hover:text-white flex items-center gap-2 py-1"><BookOpen className="h-4 w-4 text-brand-orange"/> Blogs</Link>
                        <Link href="/trust-vault" className="text-slate-300 hover:text-white flex items-center gap-2 py-1"><Award className="h-4 w-4 text-brand-green"/> Ebooks</Link>
                        <Link href="/trust-vault" className="text-slate-300 hover:text-white flex items-center gap-2 py-1"><Zap className="h-4 w-4 text-brand-gold"/> Calculators</Link>
                        <Link href="/trust-vault" className="text-slate-300 hover:text-white flex items-center gap-2 py-1"><Award className="h-4 w-4 text-brand-orange"/> Templates</Link>
                      </div>
                    </div>
                    <div className="rounded-xl bg-slate-900 p-4 border border-slate-800 flex flex-col justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-brand-yellow font-semibold">Featured Report 2026</span>
                      <h5 className="font-bold text-white text-sm mt-1">State of Autonomous Compliance & AI Governance</h5>
                      <p className="text-xs text-slate-400 mt-1">Insights from 3,000+ GRC leaders globally.</p>
                      <Link href="/trust-vault" className="mt-3 text-xs font-semibold text-brand-orange flex items-center gap-1 hover:underline">
                        Download Report <ArrowRight className="h-3.5 w-3.5"/>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Features Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("features")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-200 hover:text-brand-orange transition-colors rounded-lg hover:bg-slate-800/40">
                Features <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === "features" ? "rotate-180 text-brand-orange" : ""}`} />
              </button>
              <AnimatePresence>
                {activeMenu === "features" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[92vw] max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-brand-orange/30 bg-[#0F172A] p-6 shadow-2xl backdrop-blur-xl"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <Link href="/products/continuous-monitoring" className="p-2 rounded-lg hover:bg-slate-800">
                        <p className="font-semibold text-white">Vulnerability Assessment</p>
                        <p className="text-xs text-slate-400">Automated CVE scanner & remediation</p>
                      </Link>
                      <Link href="/products/continuous-monitoring" className="p-2 rounded-lg hover:bg-slate-800">
                        <p className="font-semibold text-white">Access Control & People Ops</p>
                        <p className="text-xs text-slate-400">Offboarding & MFA verification</p>
                      </Link>
                      <Link href="/products/policy-management" className="p-2 rounded-lg hover:bg-slate-800">
                        <p className="font-semibold text-white">Doctor OMNi MDM</p>
                        <p className="text-xs text-slate-400">Endpoint compliance agent</p>
                      </Link>
                      <Link href="/products/audit-management" className="p-2 rounded-lg hover:bg-slate-800">
                        <p className="font-semibold text-white">Evidence Collection</p>
                        <p className="text-xs text-slate-400">Zero manual screenshots</p>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pricing Direct Link */}
            <Link
              href="/pricing"
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-brand-orange transition-colors rounded-lg hover:bg-slate-800/40"
            >
              Pricing
            </Link>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("company")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-200 hover:text-brand-orange transition-colors rounded-lg hover:bg-slate-800/40">
                Company <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === "company" ? "rotate-180 text-brand-orange" : ""}`} />
              </button>
              <AnimatePresence>
                {activeMenu === "company" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-[90vw] max-w-md max-h-[85vh] overflow-y-auto rounded-2xl border border-brand-orange/30 bg-[#0F172A] p-6 shadow-2xl backdrop-blur-xl grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    <div className="space-y-2 text-sm">
                      <h4 className="text-xs font-mono uppercase text-brand-yellow font-semibold">About</h4>
                      <Link href="/about-us" className="block text-slate-300 hover:text-white py-1">About Us</Link>
                      <Link href="/about-us" className="block text-slate-300 hover:text-white py-1">Careers (Hiring)</Link>
                      <Link href="/contact-us" className="block text-slate-300 hover:text-white py-1">Contact Us</Link>
                    </div>
                    <div className="space-y-2 text-sm sm:border-l border-slate-800 sm:pl-4">
                      <h4 className="text-xs font-mono uppercase text-brand-yellow font-semibold">Ecosystem</h4>
                      <Link href="/about-us" className="block text-slate-300 hover:text-white py-1">SPARK Partners</Link>
                      <Link href="/trust-vault" className="block text-slate-300 hover:text-white py-1">300+ Integrations</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link
              href="/get-a-demo"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link href="/get-a-demo">
              <Button variant="primary" size="sm" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Book a demo
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white"
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
            className="lg:hidden border-b border-slate-800 bg-[#0F172A] px-4 pt-4 pb-6 space-y-4 max-h-[85vh] overflow-y-auto"
          >
            <div className="space-y-2">
              <button
                onClick={() => toggleMobileSection("platform")}
                className="flex items-center justify-between w-full py-2 text-base font-medium text-slate-200 hover:text-brand-orange"
              >
                <span>Platform</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpandedSection === "platform" ? "rotate-180 text-brand-orange" : ""}`} />
              </button>
              {mobileExpandedSection === "platform" && (
                <div className="pl-4 space-y-2 text-sm border-l border-brand-orange/30 my-2">
                  <Link href="/products/audit-management" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white py-1">Audit Management</Link>
                  <Link href="/products/autonomous-tprm" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white py-1">Autonomous TPRM</Link>
                  <Link href="/products/unified-commitments" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white py-1">Unified Commitments</Link>
                  <Link href="/products/ai-governance" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white py-1">AI Governance</Link>
                </div>
              )}

              <button
                onClick={() => toggleMobileSection("frameworks")}
                className="flex items-center justify-between w-full py-2 text-base font-medium text-slate-200 hover:text-brand-orange"
              >
                <span>Frameworks</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpandedSection === "frameworks" ? "rotate-180 text-brand-orange" : ""}`} />
              </button>
              {mobileExpandedSection === "frameworks" && (
                <div className="pl-4 space-y-2 text-sm border-l border-brand-orange/30 my-2">
                  <Link href="/frameworks/soc-2" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white py-1">SOC 2 Type II</Link>
                  <Link href="/frameworks/iso-27001" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white py-1">ISO 27001</Link>
                  <Link href="/frameworks/hipaa" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white py-1">HIPAA</Link>
                  <Link href="/frameworks/gdpr" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white py-1">GDPR</Link>
                </div>
              )}

              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-200 hover:text-brand-orange"
              >
                Pricing
              </Link>
              <Link
                href="/about-us"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-200 hover:text-brand-orange"
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-200 hover:text-brand-orange"
              >
                Contact Us
              </Link>
              <Link
                href="/trust-vault"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-200 hover:text-brand-orange"
              >
                Trust Vault & Resources
              </Link>
            </div>
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <Link href="/get-a-demo" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">Login</Button>
              </Link>
              <Link href="/get-a-demo" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" className="w-full">Book a demo</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
