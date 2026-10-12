"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, ArrowRight } from "lucide-react";

export const IsoLandingHeader: React.FC = () => {
  const handleScrollToForm = () => {
    const formElement = document.getElementById("lead-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
      const firstInput = document.getElementById("iso-full-name") as HTMLInputElement | null;
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 300);
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#f7d7b0]/80 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0" aria-label="OMNiGRC Home">
          <Image
            src="/omnigrc-logo.png"
            alt="OMNiGRC - Connected GRC Platform"
            width={180}
            height={56}
            className="h-9 sm:h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Right Action & Conversion CTA */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f7d7b0]/40 border border-[#fab60a]/50 text-[#2e936f] text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2e936f]" />
            <span>ISO/IEC 27001:2022</span>
          </div>

          {/* Primary Quick CTA Button */}
          <button
            type="button"
            onClick={handleScrollToForm}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-[#f15e1c] hover:bg-[#d85016] text-white font-bold text-xs shadow-xs hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f15e1c] focus:ring-offset-2 transition-all cursor-pointer group"
            aria-label="Scroll to demo booking form"
          >
            <span>Book a 20-Min Demo</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  );
};
