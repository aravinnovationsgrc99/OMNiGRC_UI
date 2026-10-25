"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Lock } from "lucide-react";
import { motion } from "framer-motion";

const coreWorkflows = [
  { name: "Risk Register", href: "/products/risk-register" },
  { name: "Asset & Inventory", href: "/products/asset-inventory" },
  { name: "Control Mapping", href: "/products/control-mapping" },
  { name: "Compliance Board", href: "/products/compliance-board" },
];

const frameworks = [
  { name: "ISO 27001:2022", href: "/frameworks/iso-27001" },
  { name: "ISO 42001:2023", href: "/frameworks/iso-42001" },
  { name: "SOC 2 Type II", href: "/frameworks/soc-2" },
  { name: "GDPR / UK GDPR", href: "/frameworks/gdpr" },
  { name: "DPDP Act 2023", href: "/frameworks/dpdp" },
  { name: "HIPAA Security Rule", href: "/frameworks/hipaa" },
];

const solutions = [
  { name: "Lean Security Teams", href: "/solutions/lean-security-teams" },
  { name: "Security Leaders & CISOs", href: "/solutions/security-leaders" },
  { name: "Compliance Managers", href: "/solutions/compliance-managers" },
  { name: "SaaS Orgs", href: "/solutions/saas-growing-organizations" },
  { name: "MSSP Partners", href: "/solutions/mssp" },
  { name: "Pricing & Scoping", href: "/pricing" },
];

const resources = [
  { name: "How It Works", href: "/how-it-works" },
  { name: "Resource Hub", href: "/resources" },
  { name: "Trust Vault", href: "/trust" },
  { name: "Request Demo", href: "/demo" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-[#FAF6F2] dark:bg-[#0A111F] pt-8 pb-8 sm:pt-10 sm:pb-10 lg:pt-12 lg:pb-10 text-slate-800 dark:text-slate-200 font-sans border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200 select-none">
      {/* 
        ========================================================================
        DYNAMIC FLOWING PEACH / ORANGE GRADIENT WAVES & AMBIENT GLOW
        Expanded vertical coverage to frame the larger, bolder footer layout
        ========================================================================
      */}
      <div 
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Soft Ambient Radial Warmth on the Right */}
        <div 
          className="absolute -right-20 bottom-[-20px] w-[850px] h-[540px] rounded-full opacity-65 dark:opacity-40 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle at 75% 75%, rgba(241,94,28,0.24) 0%, rgba(255,160,110,0.16) 35%, rgba(255,225,200,0.08) 65%, transparent 80%)"
          }}
        />
        <div 
          className="absolute right-[22%] bottom-[-40px] w-[620px] h-[380px] rounded-full opacity-45 dark:opacity-30 blur-2xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,190,150,0.26) 0%, rgba(241,94,28,0.06) 50%, transparent 75%)"
          }}
        />
        <div 
          className="absolute left-[-5%] bottom-[-70px] w-[550px] h-[320px] rounded-full opacity-30 dark:opacity-20 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,215,185,0.3) 0%, transparent 70%)"
          }}
        />

        {/* Primary Animated Wave: Smooth convex curve rising behind Trust & Security */}
        <motion.div
          className="absolute -bottom-2 left-[-2%] w-[105%] h-[380px] will-change-transform"
          initial={{ y: 0, scaleY: 1 }}
          animate={{
            y: [-5, 5, -5],
            scaleY: [1, 1.018, 1],
            x: [-6, 6, -6],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            viewBox="0 0 1600 380"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-full opacity-70 dark:opacity-50"
          >
            <defs>
              <linearGradient id="waveRefPrimarySoftBigger" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FED7AA" stopOpacity="0.08" />
                <stop offset="35%" stopColor="#FDBA74" stopOpacity="0.16" />
                <stop offset="60%" stopColor="#FB923C" stopOpacity="0.28" />
                <stop offset="82%" stopColor="#F15E1C" stopOpacity="0.44" />
                <stop offset="100%" stopColor="#EA580C" stopOpacity="0.52" />
              </linearGradient>
            </defs>
            <path
              d="M0,280 C340,305 580,280 820,230 C1080,170 1250,85 1450,50 C1520,36 1565,40 1600,55 L1600,380 L0,380 Z"
              fill="url(#waveRefPrimarySoftBigger)"
            />
          </svg>
        </motion.div>

        {/* Secondary Delicate Wave Ribbon for Layered Depth */}
        <motion.div
          className="absolute -bottom-6 left-[-4%] w-[110%] h-[400px] will-change-transform"
          initial={{ y: 0, scaleY: 1 }}
          animate={{
            y: [5, -5, 5],
            scaleY: [1.018, 0.982, 1.018],
            x: [7, -7, 7],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            viewBox="0 0 1600 400"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-full opacity-55 dark:opacity-35"
          >
            <defs>
              <linearGradient id="waveRefSecondarySoftBigger" x1="15%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFEAD5" stopOpacity="0.08" />
                <stop offset="45%" stopColor="#FED7AA" stopOpacity="0.16" />
                <stop offset="70%" stopColor="#F97316" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#F15E1C" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <path
              d="M0,305 C290,280 540,310 850,265 C1160,205 1330,120 1480,80 C1540,65 1580,68 1600,75 L1600,400 L0,400 Z"
              fill="url(#waveRefSecondarySoftBigger)"
            />
          </svg>
        </motion.div>

        {/* Translucent Highlight Ridge along the Wave Crest */}
        <motion.div
          className="absolute -bottom-2 left-[-2%] w-[105%] h-[380px] will-change-transform opacity-30 dark:opacity-20"
          animate={{
            y: [-3, 3, -3],
            x: [-4, 4, -4],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            viewBox="0 0 1600 380"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,280 C340,305 580,280 820,230 C1080,170 1250,85 1450,50 C1520,36 1565,40 1600,55"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeOpacity="0.85"
              fill="none"
            />
          </svg>
        </motion.div>
      </div>

      {/* 
        ========================================================================
        MAIN FOOTER CONTENT CONTAINER
        Generous max-width and breathing room for prominent enterprise feel
        ========================================================================
      */}
      <div className="relative z-10 w-full max-w-[1380px] 2xl:max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Header Tagline */}
        <div className="flex justify-end items-center gap-2 mb-2.5">
          <span className="text-[10.5px] sm:text-[11.5px] font-semibold tracking-[0.25em] text-slate-400 dark:text-slate-500 select-none uppercase font-mono">
            SECURE
          </span>
          <span className="text-slate-300 dark:text-slate-600 text-[10px] select-none">·</span>
          <span className="text-[10.5px] sm:text-[11.5px] font-semibold tracking-[0.25em] text-slate-400 dark:text-slate-500 select-none uppercase font-mono">
            GOVERN
          </span>
          <span className="text-slate-300 dark:text-slate-600 text-[10px] select-none">·</span>
          <span className="text-[10.5px] sm:text-[11.5px] font-semibold tracking-[0.25em] text-slate-400 dark:text-slate-500 select-none uppercase font-mono">
            STAY AHEAD
          </span>
        </div>

        {/* Subtle Horizontal Top Divider Hairline */}
        <div className="w-full h-px bg-slate-200/80 dark:bg-slate-800/80 mb-7" />

        {/* 
          ======================================================================
          UPPER FOOTER: 5 COLUMNS
          Larger typography, clear visibility, and comfortable breathing room
          ======================================================================
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.15fr_1.15fr_1.2fr_1fr_1.75fr] gap-7 xl:gap-9 items-start mb-10 lg:mb-14">
          {/* Column 1: CORE WORKFLOWS */}
          <div>
            <div className="w-7 h-[2.5px] bg-[#F15E1C] rounded-full mb-3" />
            <h4 className="text-[12px] sm:text-[12.5px] font-bold text-slate-900 dark:text-slate-100 tracking-[0.06em] uppercase mb-3.5">
              CORE WORKFLOWS
            </h4>
            <ul className="flex flex-col space-y-2 text-[13px] sm:text-[13.5px]">
              {coreWorkflows.map((item) => (
                <li key={item.name} className="leading-tight">
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-slate-700 dark:text-slate-300 hover:text-[#F15E1C] dark:hover:text-[#F15E1C] transition-colors font-medium leading-normal py-0.5"
                  >
                    <span className="text-[#F15E1C] font-semibold text-[11.5px] leading-none select-none mr-2.5 shrink-0 transition-transform group-hover:translate-x-0.5">
                      &gt;
                    </span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
              <li className="leading-tight">
                <Link
                  href="/products/risk-register"
                  className="group inline-flex items-center text-[#F15E1C] font-semibold hover:text-[#d44c0f] dark:hover:text-[#ff783e] transition-colors leading-normal py-0.5"
                >
                  <span className="text-[#F15E1C] font-bold text-[11.5px] leading-none select-none mr-2.5 shrink-0 transition-transform group-hover:translate-x-0.5">
                    &gt;
                  </span>
                  <span>All 10 GRC Modules &rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: FRAMEWORKS */}
          <div>
            <div className="w-7 h-[2.5px] bg-[#F15E1C] rounded-full mb-3" />
            <h4 className="text-[12px] sm:text-[12.5px] font-bold text-slate-900 dark:text-slate-100 tracking-[0.06em] uppercase mb-3.5">
              FRAMEWORKS
            </h4>
            <ul className="flex flex-col space-y-2 text-[13px] sm:text-[13.5px]">
              {frameworks.map((item) => (
                <li key={item.name} className="leading-tight">
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-slate-700 dark:text-slate-300 hover:text-[#F15E1C] dark:hover:text-[#F15E1C] transition-colors font-medium leading-normal py-0.5"
                  >
                    <span className="text-[#F15E1C] font-semibold text-[11.5px] leading-none select-none mr-2.5 shrink-0 transition-transform group-hover:translate-x-0.5">
                      &gt;
                    </span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: SOLUTIONS */}
          <div>
            <div className="w-7 h-[2.5px] bg-[#F15E1C] rounded-full mb-3" />
            <h4 className="text-[12px] sm:text-[12.5px] font-bold text-slate-900 dark:text-slate-100 tracking-[0.06em] uppercase mb-3.5">
              SOLUTIONS
            </h4>
            <ul className="flex flex-col space-y-2 text-[13px] sm:text-[13.5px]">
              {solutions.map((item) => (
                <li key={item.name} className="leading-tight">
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-slate-700 dark:text-slate-300 hover:text-[#F15E1C] dark:hover:text-[#F15E1C] transition-colors font-medium leading-normal py-0.5"
                  >
                    <span className="text-[#F15E1C] font-semibold text-[11.5px] leading-none select-none mr-2.5 shrink-0 transition-transform group-hover:translate-x-0.5">
                      &gt;
                    </span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: RESOURCES */}
          <div>
            <div className="w-7 h-[2.5px] bg-[#F15E1C] rounded-full mb-3" />
            <h4 className="text-[12px] sm:text-[12.5px] font-bold text-slate-900 dark:text-slate-100 tracking-[0.06em] uppercase mb-3.5">
              RESOURCES
            </h4>
            <ul className="flex flex-col space-y-2 text-[13px] sm:text-[13.5px]">
              {resources.map((item) => (
                <li key={item.name} className="leading-tight">
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-slate-700 dark:text-slate-300 hover:text-[#F15E1C] dark:hover:text-[#F15E1C] transition-colors font-medium leading-normal py-0.5"
                  >
                    <span className="text-[#F15E1C] font-semibold text-[11.5px] leading-none select-none mr-2.5 shrink-0 transition-transform group-hover:translate-x-0.5">
                      &gt;
                    </span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: TRUST & SECURITY (Tenant Isolated Card) */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="w-7 h-[2.5px] bg-[#F15E1C] rounded-full mb-3" />
            <h4 className="text-[12px] sm:text-[12.5px] font-bold text-slate-900 dark:text-slate-100 tracking-[0.06em] uppercase mb-3.5">
              TRUST &amp; SECURITY
            </h4>

            {/* Tenant Isolated Security Card */}
            <div className="w-full max-w-[340px] rounded-2xl bg-white/80 dark:bg-slate-900/85 backdrop-blur-md p-4 border border-white/90 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_25px_rgba(0,0,0,0.5)] flex items-start gap-3.5 hover:shadow-[0_8px_30px_rgba(241,94,28,0.08)] transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-[#FFF1EB] dark:bg-[#F15E1C]/15 border border-[#FDDCD0] dark:border-[#F15E1C]/30 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5 text-[#F15E1C]" strokeWidth={2.2} />
              </div>
              <div className="space-y-1">
                <div className="text-[13.5px] sm:text-[14px] font-bold text-slate-900 dark:text-white leading-snug">
                  Tenant Isolated
                </div>
                <p className="text-[11.5px] sm:text-[12px] text-slate-500 dark:text-slate-400 leading-[1.4] font-normal">
                  Advisory AI with data minimization. AI assists; human oversight approves.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 
          ======================================================================
          LOWER FOOTER: SINGLE HORIZONTAL DESKTOP ROW
          Bigger icons, clear visibility, perfect horizontal alignment
          [Knot Logo] | [Powered By Badge] | [Tagline / Copyright] | [Socials] | [Legal Links]
          ======================================================================
        */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6 pt-2">
          {/* Left Brand Identity & Copyright Group */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-4 lg:gap-5">
            {/* OMNiGRC / Arav Knot Logo */}
            <div className="shrink-0 flex items-center">
              <Image
                src="/images/Arav'sLogo.png"
                alt="Arav Logo"
                width={1230}
                height={1278}
                unoptimized
                className="h-10 sm:h-11 md:h-12 w-auto object-contain dark:brightness-110 drop-shadow-sm transition-transform hover:scale-105"
                priority={false}
              />
            </div>

            {/* Vertical Divider 1 */}
            <div className="hidden sm:block h-7 sm:h-8 w-px bg-slate-300 dark:bg-slate-700/80 shrink-0 mx-1.5" aria-hidden="true" />

            {/* Powered By Arav Innovations Badge */}
            <div className="shrink-0 flex items-center">
              <Image
                src="/images/Powered-By-AravInnovation.png"
                alt="Powered by Arav Innovations"
                width={2170}
                height={725}
                unoptimized
                className="h-9 sm:h-10 md:h-[42px] w-auto object-contain dark:brightness-105 drop-shadow-sm transition-transform hover:scale-105"
                priority={false}
              />
            </div>

            {/* Vertical Divider 2 */}
            <div className="hidden lg:block h-7 sm:h-8 w-px bg-slate-300 dark:bg-slate-700/80 shrink-0 mx-1.5" aria-hidden="true" />

            {/* Tagline and Copyright */}
            <div className="text-[12px] sm:text-[12.5px] leading-tight text-slate-500 dark:text-slate-400 font-medium text-center sm:text-left whitespace-nowrap">
              <div className="text-slate-600 dark:text-slate-300 font-semibold">Unified Risk, Asset, And Control Management.</div>
              <div className="text-slate-400 dark:text-slate-500 mt-0.5">
                © 2026 OMNiGRC. All rights reserved.
              </div>
            </div>
          </div>

          {/* Right Group: Divider, Social Icons, Divider, Legal Links */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 sm:gap-4 md:gap-5">
            {/* Vertical Divider 3 */}
            <div className="hidden lg:block h-6 sm:h-7 w-px bg-slate-300 dark:bg-slate-700/80 shrink-0 mx-2" aria-hidden="true" />

            {/* Social Media Links: Bigger, clearly visible icons */}
            <div className="flex items-center gap-2.5 sm:gap-3" aria-label="Official Social Media Links">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@OMNiGRC"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow OMNiGRC on YouTube (opens in new tab)"
                className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm flex items-center justify-center hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 shrink-0"
              >
                <svg className="w-5 h-3.5 fill-[#FF0000]" viewBox="0 0 24 17" aria-hidden="true">
                  <path d="M23.498 2.686A3.016 3.016 0 0 0 21.376.55C19.505.045 12 .045 12 .045s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 2.686C0 4.57 0 8.5 0 8.5s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 12.43 24 8.5 24 8.5s0-3.93-.502-5.814z" fill="#FF0000"/>
                  <path d="M9.545 12.068V4.932L15.818 8.5l-6.273 3.568z" fill="#FFFFFF"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/omnigrc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow OMNiGRC on Instagram (opens in new tab)"
                className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm flex items-center justify-center hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 shrink-0"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                  <defs>
                    <linearGradient id="ig-grad-footer-bolder" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f09433"/>
                      <stop offset="50%" stopColor="#dc2743"/>
                      <stop offset="100%" stopColor="#bc1888"/>
                    </linearGradient>
                  </defs>
                  <path fill="url(#ig-grad-footer-bolder)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com/OMNiGRC"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow OMNiGRC on X (formerly Twitter) (opens in new tab)"
                className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm flex items-center justify-center hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 shrink-0"
              >
                <svg className="w-4 h-4 fill-slate-900 dark:fill-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* LinkedIn: Exact official LinkedIn logo */}
              <a
                href="https://www.linkedin.com/company/omnigrc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow OMNiGRC on LinkedIn (opens in new tab)"
                className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm flex items-center justify-center hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 shrink-0"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="3" fill="#FFFFFF" />
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    fill="#0A66C2"
                  />
                </svg>
              </a>
            </div>

            {/* Vertical Divider 4 */}
            <div className="hidden lg:block h-6 sm:h-7 w-px bg-slate-300 dark:bg-slate-700/80 shrink-0 mx-2" aria-hidden="true" />

            {/* Legal Links: clearly visible */}
            <div className="flex items-center gap-5 sm:gap-6 text-[12.5px] sm:text-[13px] font-medium text-slate-600 dark:text-slate-300">
              <Link
                href="/privacy-policy"
                className="hover:text-[#F15E1C] dark:hover:text-[#F15E1C] transition-colors whitespace-nowrap"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-[#F15E1C] dark:hover:text-[#F15E1C] transition-colors whitespace-nowrap"
              >
                Terms of Service
              </Link>
              <Link
                href="/trust"
                className="hover:text-[#F15E1C] dark:hover:text-[#F15E1C] transition-colors whitespace-nowrap"
              >
                Security Overview
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
