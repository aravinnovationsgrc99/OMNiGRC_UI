"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Moon, Sun, Lock } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export const DpdpLandingHeader: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-[#0A111F]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-navy-700/80 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="OMNiGRC Home">
          <Image
            src="/omnigrc-logo.png"
            alt="OMNiGRC - Connected GRC Platform"
            width={180}
            height={56}
            className="h-9 sm:h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Right Action & Trust Indicator */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/60 text-[#2E936F] dark:text-teal-300 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DPDP Act 2023 Ready</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
            <span className="hidden md:inline-flex items-center gap-1 text-slate-500 dark:text-slate-400">
              <Lock className="w-3 h-3 text-[#2E936F] dark:text-teal" />
              Enterprise-Grade Privacy
            </span>
          </div>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4 text-amber" /> : <Moon className="h-4 w-4 text-slate-700" />}
          </button>
        </div>
      </div>
    </header>
  );
};
