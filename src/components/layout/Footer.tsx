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
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs border-t border-slate-200/20 dark:border-navy-700/60 mt-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center md:text-left">
            <Image
              src="/omnigrc-logo.png"
              alt="OMNiGRC — Connected GRC Platform"
              width={220}
              height={75}
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <div className="hidden sm:block h-7 w-px bg-slate-200/30 dark:bg-navy-700/60" />
            <div className="inline-flex items-center p-1 rounded-2xl bg-black dark:bg-black/60 border border-slate-800 dark:border-navy-700/60 shadow-sm transition-transform hover:scale-[1.02]">
              <Image
                src="/images/powered-by-arav-innovations.png"
                alt="Powered by Arav Innovations"
                width={240}
                height={80}
                className="h-7 sm:h-8 w-auto object-contain rounded-xl"
              />
            </div>
          </div>

          <div className="text-slate-400 text-center md:text-left max-w-xs sm:max-w-md">
            Unified Risk, Asset, and Security-Control Management. © 2026 OMNiGRC. All rights reserved.
          </div>

          {/* Official Social Media Handles */}
          <div className="flex items-center gap-3" aria-label="Official Social Media Links">
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@OMNiGRC"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow OMNiGRC on YouTube (opens in new tab)"
              className="w-11 h-11 rounded-xl bg-[#FF0000]/10 dark:bg-[#FF0000]/15 text-[#FF0000] dark:text-[#FF4D4D] border border-[#FF0000]/20 dark:border-[#FF0000]/30 hover:bg-[#FF0000] dark:hover:bg-[#FF0000] hover:text-white dark:hover:text-white hover:border-[#FF0000] dark:hover:border-[#FF0000] hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-[#FF0000]/25 flex items-center justify-center transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-[#F15E1C] shrink-0"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/omnigrc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow OMNiGRC on Instagram (opens in new tab)"
              className="w-11 h-11 rounded-xl bg-[#E4405F]/10 dark:bg-[#E4405F]/15 text-[#E4405F] dark:text-[#F472B6] border border-[#E4405F]/20 dark:border-[#E4405F]/30 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] dark:hover:from-[#f09433] dark:hover:via-[#dc2743] dark:hover:to-[#bc1888] hover:text-white dark:hover:text-white hover:border-transparent dark:hover:border-transparent hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-[#E4405F]/25 flex items-center justify-center transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-[#F15E1C] shrink-0"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="https://x.com/OMNiGRC"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow OMNiGRC on X (formerly Twitter) (opens in new tab)"
              className="w-11 h-11 rounded-xl bg-slate-900/10 dark:bg-slate-100/10 text-slate-900 dark:text-slate-100 border border-slate-900/20 dark:border-slate-100/30 hover:bg-slate-950 dark:hover:bg-white hover:text-white dark:hover:text-slate-950 hover:border-slate-950 dark:hover:border-white hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-slate-900/20 flex items-center justify-center transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-[#F15E1C] shrink-0"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/omnigrc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow OMNiGRC on LinkedIn (opens in new tab)"
              className="w-11 h-11 rounded-xl bg-[#0A66C2]/10 dark:bg-[#0A66C2]/15 text-[#0A66C2] dark:text-[#38BDF8] border border-[#0A66C2]/20 dark:border-[#0A66C2]/30 hover:bg-[#0A66C2] dark:hover:bg-[#0A66C2] hover:text-white dark:hover:text-white hover:border-[#0A66C2] dark:hover:border-[#0A66C2] hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-[#0A66C2]/25 flex items-center justify-center transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-[#F15E1C] shrink-0"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
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
