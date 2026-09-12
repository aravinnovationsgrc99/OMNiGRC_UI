"use client";

import React from "react";
import Link from "next/link";
import { Shield, Lock, ArrowRight } from "lucide-react";
import { FRAMEWORKS } from "@/lib/frameworks";
import { PILLARS } from "@/lib/pillars";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-navy-700/60 bg-[#0A111F] text-slate-400 pt-16 pb-12">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-12 border-b border-navy-700/60">
          {/* Col 1: Platform & Workflows */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-amber uppercase tracking-wider font-mono">
              Core Workflows
            </h4>
            <ul className="space-y-2 text-xs">
              {PILLARS.map((p) => (
                <li key={p.code}>
                  <Link href={`/products/${p.slug}`} className="hover:text-teal transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#core-workflows" className="hover:text-teal transition-colors">
                  Platform Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Documented Frameworks */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-amber uppercase tracking-wider font-mono">
              Frameworks
            </h4>
            <ul className="space-y-2 text-xs">
              {FRAMEWORKS.map((fw) => (
                <li key={fw.code}>
                  <Link href={`/frameworks/${fw.slug}`} className="hover:text-teal transition-colors">
                    {fw.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-amber uppercase tracking-wider font-mono">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/solutions/startups" className="hover:text-teal transition-colors">
                  For Lean GRC Teams
                </Link>
              </li>
              <li>
                <Link href="/solutions/mid-market" className="hover:text-teal transition-colors">
                  For Security Leads &amp; CISOs
                </Link>
              </li>
              <li>
                <Link href="/solutions/enterprise" className="hover:text-teal transition-colors">
                  Continuous Audit Readiness
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-teal transition-colors">
                  Transparent Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Knowledge */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-amber uppercase tracking-wider font-mono">
              Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/blog" className="hover:text-teal transition-colors">
                  Ctrl + GRC Newsletter
                </Link>
              </li>
              <li>
                <Link href="/trust-vault" className="hover:text-teal transition-colors">
                  Resource Hub
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-teal transition-colors">
                  About OMNiGRC
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-teal transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Security Statement Card */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-3">
            <h4 className="text-xs font-semibold text-amber uppercase tracking-wider font-mono">
              Trust &amp; Security
            </h4>
            <div className="rounded-xl bg-navy-900/90 p-3.5 border border-navy-700/60 space-y-2">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-teal" />
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
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal/20 text-teal">
              <Shield className="h-4 w-4" />
            </div>
            <span className="font-semibold text-slate-200">
              OMNi<span className="text-teal">GRC</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">
              Unified Risk, Asset, and Security-Control Management. © 2026 OMNiGRC. All rights reserved.
            </span>
          </div>

          <div className="flex items-center space-x-6 text-slate-400">
            <Link href="/contact-us" className="hover:text-teal transition-colors">Privacy Policy</Link>
            <Link href="/contact-us" className="hover:text-teal transition-colors">Terms of Service</Link>
            <Link href="/contact-us" className="hover:text-teal transition-colors">Security Overview</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
