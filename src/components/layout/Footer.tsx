"use client";

import React from "react";
import Link from "next/link";
import { Shield, Twitter, Linkedin, Youtube } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-[#0B0F17] text-slate-400 pt-16 pb-12">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-brand-yellow uppercase tracking-wider font-mono">Products</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/products/audit-management" className="hover:text-brand-orange transition-colors">OMNiGRC AI</Link></li>
              <li><Link href="/products/audit-management" className="hover:text-brand-orange transition-colors">Audit Management</Link></li>
              <li><Link href="/products/autonomous-tprm" className="hover:text-brand-orange transition-colors">Vendor Risk (TPRM)</Link></li>
              <li><Link href="/products/risk-management" className="hover:text-brand-orange transition-colors">Risk Register</Link></li>
              <li><Link href="/products/continuous-monitoring" className="hover:text-brand-orange transition-colors">Continuous Mon.</Link></li>
              <li><Link href="/products/policy-management" className="hover:text-brand-orange transition-colors">Policy Engine</Link></li>
              <li><Link href="/products/unified-commitments" className="hover:text-brand-orange transition-colors">Trust Center</Link></li>
              <li><Link href="/products/ai-governance" className="hover:text-brand-orange transition-colors">AI Governance</Link></li>
              <li><Link href="/pricing" className="hover:text-brand-orange transition-colors">Compare vs Vanta/Drata</Link></li>
            </ul>
          </div>

          {/* Col 2: Frameworks */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-brand-yellow uppercase tracking-wider font-mono">Frameworks</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/frameworks/soc-2" className="hover:text-brand-orange transition-colors">SOC 2 Type II</Link></li>
              <li><Link href="/frameworks/iso-27001" className="hover:text-brand-orange transition-colors">ISO 27001:2022</Link></li>
              <li><Link href="/frameworks/soc-2" className="hover:text-brand-orange transition-colors">PCI DSS 4.0</Link></li>
              <li><Link href="/frameworks/hipaa" className="hover:text-brand-orange transition-colors">HIPAA Privacy</Link></li>
              <li><Link href="/frameworks/gdpr" className="hover:text-brand-orange transition-colors">GDPR</Link></li>
              <li><Link href="/frameworks/dpdp" className="hover:text-brand-orange transition-colors">DPDP Act India</Link></li>
              <li><Link href="/frameworks/iso-27001" className="hover:text-brand-orange transition-colors">NIST CSF</Link></li>
              <li><Link href="/frameworks/soc-2" className="hover:text-brand-orange transition-colors">CSA STAR</Link></li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-brand-yellow uppercase tracking-wider font-mono">Industries</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/solutions/startups" className="hover:text-brand-orange transition-colors">OMNiGRC for SaaS</Link></li>
              <li><Link href="/solutions/enterprise" className="hover:text-brand-orange transition-colors">OMNiGRC for BFSI</Link></li>
              <li><Link href="/solutions/mid-market" className="hover:text-brand-orange transition-colors">OMNiGRC for Healthcare</Link></li>
              <li><Link href="/solutions/startups" className="hover:text-brand-orange transition-colors">Fintech Compliance</Link></li>
              <li><Link href="/solutions/enterprise" className="hover:text-brand-orange transition-colors">Healthtech Security</Link></li>
            </ul>
          </div>

          {/* Col 4: Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-brand-yellow uppercase tracking-wider font-mono">Solutions</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/solutions/startups" className="hover:text-brand-orange transition-colors">For Startups</Link></li>
              <li><Link href="/solutions/mid-market" className="hover:text-brand-orange transition-colors">For Mid-Market</Link></li>
              <li><Link href="/solutions/enterprise" className="hover:text-brand-orange transition-colors">For Enterprise</Link></li>
              <li><Link href="/solutions/enterprise" className="hover:text-brand-orange transition-colors">For CISOs</Link></li>
              <li><Link href="/solutions/startups" className="hover:text-brand-orange transition-colors">For IT & Security Teams</Link></li>
              <li><Link href="/solutions/mid-market" className="hover:text-brand-orange transition-colors">For GRC Leads</Link></li>
            </ul>
          </div>

          {/* Col 5: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-brand-yellow uppercase tracking-wider font-mono">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about-us" className="hover:text-brand-orange transition-colors">About Us</Link></li>
              <li><Link href="/about-us" className="hover:text-brand-orange transition-colors">Careers</Link></li>
              <li><Link href="/contact-us" className="hover:text-brand-orange transition-colors">Contact Us</Link></li>
              <li><Link href="/about-us" className="hover:text-brand-orange transition-colors">Press & News</Link></li>
              <li><Link href="/about-us" className="hover:text-brand-orange transition-colors">SPARK Partners</Link></li>
              <li><Link href="/about-us" className="hover:text-brand-orange transition-colors">Audit Partners</Link></li>
            </ul>
          </div>

          {/* Col 6: Resources & Badges */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-brand-yellow uppercase tracking-wider font-mono">Resources</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/blog" className="hover:text-brand-orange transition-colors">GRC Blog</Link></li>
              <li><Link href="/trust-vault" className="hover:text-brand-orange transition-colors">Customer Stories</Link></li>
              <li><Link href="/trust-vault" className="hover:text-brand-orange transition-colors">Ebooks & Guides</Link></li>
              <li><Link href="/trust-vault" className="hover:text-brand-orange transition-colors">Trust Vault Hub</Link></li>
            </ul>
            <div className="pt-3">
              <div className="rounded-lg bg-slate-900/80 p-3 border border-brand-green/40 flex items-center gap-2">
                <Shield className="h-5 w-5 text-brand-green shrink-0" />
                <div>
                  <p className="text-[11px] font-bold text-white">SOC 2 Type II Certified</p>
                  <p className="text-[9px] text-brand-peach">OMNiGRC Security Posture</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-orange/20 text-brand-orange">
              <Shield className="h-4 w-4" />
            </div>
            <span className="font-semibold text-slate-200">
              OMNi<span className="text-brand-orange">GRC</span>
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">© 2026 OMNiGRC Inc. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/contact-us" className="hover:text-brand-orange transition-colors">Privacy Policy</Link>
            <Link href="/contact-us" className="hover:text-brand-orange transition-colors">Terms of Service</Link>
            <Link href="/contact-us" className="hover:text-brand-orange transition-colors">Security Overview</Link>
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-brand-orange transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-brand-orange transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-brand-orange transition-colors">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
