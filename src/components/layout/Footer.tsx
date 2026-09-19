"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Lock, ArrowRight } from "lucide-react";
import { FRAMEWORKS } from "@/lib/frameworks";
import { PILLARS } from "@/lib/pillars";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 pt-16 pb-12">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-200 dark:border-navy-700/60">
          {/* Col 1: Platform & Workflows */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#D4521A] dark:text-amber uppercase tracking-wider font-mono">
              Core Workflows
            </h4>
            <ul className="space-y-2 text-xs">
              {PILLARS.map((p) => (
                <li key={p.code}>
                  <Link href={`/products/${p.slug}`} className="hover:text-[#2E936F] dark:hover:text-teal transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#core-workflows" className="hover:text-[#2E936F] dark:hover:text-teal transition-colors">
                  Platform Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Documented Frameworks */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#D4521A] dark:text-amber uppercase tracking-wider font-mono">
              Frameworks
            </h4>
            <ul className="space-y-2 text-xs">
              {FRAMEWORKS.map((fw) => (
                <li key={fw.code}>
                  <Link href={`/frameworks/${fw.slug}`} className="hover:text-[#2E936F] dark:hover:text-teal transition-colors">
                    {fw.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#D4521A] dark:text-amber uppercase tracking-wider font-mono">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/solutions/lean-security-teams" className="hover:text-[#2E936F] dark:hover:text-teal transition-colors">
                  Lean Security Teams
                </Link>
              </li>
              <li>
                <Link href="/solutions/security-leaders" className="hover:text-[#2E936F] dark:hover:text-teal transition-colors">
                  Security Leaders &amp; CISOs
                </Link>
              </li>
              <li>
                <Link href="/solutions/compliance-managers" className="hover:text-[#2E936F] dark:hover:text-teal transition-colors">
                  Compliance Managers
                </Link>
              </li>
              <li>
                <Link href="/solutions/saas-growing-organizations" className="hover:text-[#2E936F] dark:hover:text-teal transition-colors">
                  SaaS Orgs
                </Link>
              </li>
              <li>
                <Link href="/solutions/mssp" className="hover:text-[#2E936F] dark:hover:text-teal transition-colors">
                  MSSP Partners
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#2E936F] dark:hover:text-teal transition-colors">
                  Pricing &amp; Scoping
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Knowledge */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#D4521A] dark:text-amber uppercase tracking-wider font-mono">
              Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/how-it-works" className="hover:text-[#2E936F] dark:hover:text-teal transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#2E936F] dark:hover:text-teal transition-colors">
                  Resource Hub
                </Link>
              </li>
              <li>
                <Link href="/trust" className="hover:text-[#2E936F] dark:hover:text-teal transition-colors">
                  Trust Vault
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-[#2E936F] dark:hover:text-teal transition-colors">
                  Request Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Security Statement Card */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-3">
            <h4 className="text-xs font-semibold text-[#D4521A] dark:text-amber uppercase tracking-wider font-mono">
              Trust &amp; Security
            </h4>
            <div className="rounded-xl bg-white/10 p-3.5 border border-white/15 space-y-2">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-[#2E936F] dark:text-teal" />
                <span className="text-[13px] font-bold text-white">Tenant Isolated</span>
              </div>
              <p className="text-[13px] text-slate-300 leading-relaxed">
                Advisory AI with data minimization. AI assists; human oversight approves.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3 flex-wrap">
            <Image
              src="/omnigrc-logo.png"
              alt="OMNiGRC — Connected GRC Platform"
              width={220}
              height={75}
              className="h-12 sm:h-14 w-auto object-contain"
            />
            <span className="text-slate-400">
              Unified Risk, Asset, and Security-Control Management. © 2026 OMNiGRC. All rights reserved.
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/trust" className="hover:text-white transition-colors">Security Overview</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
