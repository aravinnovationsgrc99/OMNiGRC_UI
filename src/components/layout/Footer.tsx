"use client";

import React from "react";
import Link from "next/link";
import { Shield, Lock, ArrowRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-[#0B0F17] text-slate-400 pt-16 pb-12">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Platform & Workflows */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-brand-yellow uppercase tracking-wider font-mono">
              Core Workflows
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/products/risk-management" className="hover:text-brand-orange transition-colors">
                  Risk Register &amp; Scoring
                </Link>
              </li>
              <li>
                <Link href="/products/continuous-monitoring" className="hover:text-brand-orange transition-colors">
                  Asset &amp; Vendor Inventory
                </Link>
              </li>
              <li>
                <Link href="/products/audit-management" className="hover:text-brand-orange transition-colors">
                  Control Mapping &amp; Advisory AI
                </Link>
              </li>
              <li>
                <Link href="/products/policy-management" className="hover:text-brand-orange transition-colors">
                  Compliance Testing Board
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-brand-orange transition-colors">
                  Platform Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Documented Frameworks */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-brand-yellow uppercase tracking-wider font-mono">
              Frameworks
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/frameworks/iso-27001" className="hover:text-brand-orange transition-colors">
                  ISO 27001:2022 ISMS
                </Link>
              </li>
              <li>
                <Link href="/frameworks/soc-2" className="hover:text-brand-orange transition-colors">
                  SOC 2 Type II
                </Link>
              </li>
              <li>
                <Link href="/frameworks/gdpr" className="hover:text-brand-orange transition-colors">
                  GDPR &amp; UK GDPR
                </Link>
              </li>
              <li>
                <Link href="/frameworks/dpdp" className="hover:text-brand-orange transition-colors">
                  DPDP Act India 2023
                </Link>
              </li>
              <li>
                <Link href="/frameworks/soc-2" className="hover:text-brand-orange transition-colors">
                  Essential 8 (Australia)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-brand-yellow uppercase tracking-wider font-mono">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/solutions/startups" className="hover:text-brand-orange transition-colors">
                  For Lean GRC Teams
                </Link>
              </li>
              <li>
                <Link href="/solutions/mid-market" className="hover:text-brand-orange transition-colors">
                  For Security Leads &amp; CISOs
                </Link>
              </li>
              <li>
                <Link href="/solutions/enterprise" className="hover:text-brand-orange transition-colors">
                  Continuous Audit Readiness
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-brand-orange transition-colors">
                  Transparent Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Knowledge */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-brand-yellow uppercase tracking-wider font-mono">
              Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/blog" className="hover:text-brand-orange transition-colors">
                  Ctrl + GRC Newsletter
                </Link>
              </li>
              <li>
                <Link href="/trust-vault" className="hover:text-brand-orange transition-colors">
                  Resource Hub
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-brand-orange transition-colors">
                  About OMNiGRC
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-brand-orange transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Security Statement Card */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-3">
            <h4 className="text-xs font-semibold text-brand-yellow uppercase tracking-wider font-mono">
              Trust &amp; Security
            </h4>
            <div className="rounded-xl bg-slate-900/90 p-3.5 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-brand-green" />
                <span className="text-xs font-bold text-white">Tenant Isolated</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Advisory AI with data minimization. External calls receive sanitized payloads only.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-orange/20 text-brand-orange">
              <Shield className="h-4 w-4" />
            </div>
            <span className="font-semibold text-slate-200">
              OMNi<span className="text-brand-orange">GRC</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">
              Unified Risk, Asset, and Security-Control Management. © 2026 OMNiGRC. All rights reserved.
            </span>
          </div>

          <div className="flex items-center space-x-6 text-slate-400">
            <Link href="/contact-us" className="hover:text-brand-orange transition-colors">Privacy Policy</Link>
            <Link href="/contact-us" className="hover:text-brand-orange transition-colors">Terms of Service</Link>
            <Link href="/contact-us" className="hover:text-brand-orange transition-colors">Security Overview</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
