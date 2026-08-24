"use client";

import React from "react";
import Link from "next/link";
import { Shield, Twitter, Linkedin, Youtube, ArrowRight, CheckCircle2, Award } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-[#0B0F17] text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-100 uppercase tracking-wider font-mono">Products</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/products/audit-management" className="hover:text-brand-cyan transition-colors">Arav&apos;sGRC AI</Link></li>
              <li><Link href="/products/audit-management" className="hover:text-brand-cyan transition-colors">Audit Management</Link></li>
              <li><Link href="/products/autonomous-tprm" className="hover:text-brand-cyan transition-colors">Vendor Risk (TPRM)</Link></li>
              <li><Link href="/products/risk-management" className="hover:text-brand-cyan transition-colors">Risk Register</Link></li>
              <li><Link href="/products/continuous-monitoring" className="hover:text-brand-cyan transition-colors">Continuous Mon.</Link></li>
              <li><Link href="/products/policy-management" className="hover:text-brand-cyan transition-colors">Policy Engine</Link></li>
              <li><Link href="/products/unified-commitments" className="hover:text-brand-cyan transition-colors">Trust Center</Link></li>
              <li><Link href="/products/ai-governance" className="hover:text-brand-cyan transition-colors">AI Governance</Link></li>
              <li><Link href="/pricing" className="hover:text-brand-cyan transition-colors">Compare vs Vanta/Drata</Link></li>
            </ul>
          </div>

          {/* Col 2: Frameworks */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-100 uppercase tracking-wider font-mono">Frameworks</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/frameworks/soc-2" className="hover:text-brand-cyan transition-colors">SOC 2 Type II</Link></li>
              <li><Link href="/frameworks/iso-27001" className="hover:text-brand-cyan transition-colors">ISO 27001:2022</Link></li>
              <li><Link href="/frameworks/soc-2" className="hover:text-brand-cyan transition-colors">PCI DSS 4.0</Link></li>
              <li><Link href="/frameworks/hipaa" className="hover:text-brand-cyan transition-colors">HIPAA Privacy</Link></li>
              <li><Link href="/frameworks/gdpr" className="hover:text-brand-cyan transition-colors">GDPR</Link></li>
              <li><Link href="/frameworks/dpdp" className="hover:text-brand-cyan transition-colors">DPDP Act India</Link></li>
              <li><Link href="/frameworks/iso-27001" className="hover:text-brand-cyan transition-colors">NIST CSF</Link></li>
              <li><Link href="/frameworks/soc-2" className="hover:text-brand-cyan transition-colors">CSA STAR</Link></li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-100 uppercase tracking-wider font-mono">Industries</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/solutions/startups" className="hover:text-brand-cyan transition-colors">Arav&apos;sGRC for SaaS</Link></li>
              <li><Link href="/solutions/enterprise" className="hover:text-brand-cyan transition-colors">Arav&apos;sGRC for BFSI</Link></li>
              <li><Link href="/solutions/mid-market" className="hover:text-brand-cyan transition-colors">Arav&apos;sGRC for Healthcare</Link></li>
              <li><Link href="/solutions/startups" className="hover:text-brand-cyan transition-colors">Fintech Compliance</Link></li>
              <li><Link href="/solutions/enterprise" className="hover:text-brand-cyan transition-colors">Healthtech Security</Link></li>
            </ul>
          </div>

          {/* Col 4: Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-100 uppercase tracking-wider font-mono">Solutions</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/solutions/startups" className="hover:text-brand-cyan transition-colors">For Startups</Link></li>
              <li><Link href="/solutions/mid-market" className="hover:text-brand-cyan transition-colors">For Mid-Market</Link></li>
              <li><Link href="/solutions/enterprise" className="hover:text-brand-cyan transition-colors">For Enterprise</Link></li>
              <li><Link href="/solutions/enterprise" className="hover:text-brand-cyan transition-colors">For CISOs</Link></li>
              <li><Link href="/solutions/startups" className="hover:text-brand-cyan transition-colors">For IT & Security Teams</Link></li>
              <li><Link href="/solutions/mid-market" className="hover:text-brand-cyan transition-colors">For GRC Leads</Link></li>
            </ul>
          </div>

          {/* Col 5: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-100 uppercase tracking-wider font-mono">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about-us" className="hover:text-brand-cyan transition-colors">About Us</Link></li>
              <li><Link href="/about-us" className="hover:text-brand-cyan transition-colors">Careers</Link></li>
              <li><Link href="/contact-us" className="hover:text-brand-cyan transition-colors">Contact Us</Link></li>
              <li><Link href="/about-us" className="hover:text-brand-cyan transition-colors">Press & News</Link></li>
              <li><Link href="/about-us" className="hover:text-brand-cyan transition-colors">SPARK Partners</Link></li>
              <li><Link href="/about-us" className="hover:text-brand-cyan transition-colors">Audit Partners</Link></li>
            </ul>
          </div>

          {/* Col 6: Resources & Badges */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-100 uppercase tracking-wider font-mono">Resources</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/blog" className="hover:text-brand-cyan transition-colors">GRC Blog</Link></li>
              <li><Link href="/trust-vault" className="hover:text-brand-cyan transition-colors">Customer Stories</Link></li>
              <li><Link href="/trust-vault" className="hover:text-brand-cyan transition-colors">Ebooks & Guides</Link></li>
              <li><Link href="/trust-vault" className="hover:text-brand-cyan transition-colors">Trust Vault Hub</Link></li>
            </ul>
            <div className="pt-3">
              <div className="rounded-lg bg-slate-900/80 p-3 border border-brand-teal/30 flex items-center gap-2">
                <Shield className="h-5 w-5 text-brand-cyan" />
                <div>
                  <p className="text-[11px] font-bold text-white">SOC 2 Type II Certified</p>
                  <p className="text-[9px] text-slate-400">Arav&apos;sGRC Security Posture</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-teal/20 text-brand-cyan">
              <Shield className="h-4 w-4" />
            </div>
            <span className="font-semibold text-slate-200">
              Arav&apos;s<span className="text-brand-cyan">GRC</span>
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">© 2026 Arav&apos;sGRC Inc. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/contact-us" className="hover:text-brand-cyan transition-colors">Privacy Policy</Link>
            <Link href="/contact-us" className="hover:text-brand-cyan transition-colors">Terms of Service</Link>
            <Link href="/contact-us" className="hover:text-brand-cyan transition-colors">Security Overview</Link>
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-brand-cyan transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-brand-cyan transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-brand-cyan transition-colors">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
