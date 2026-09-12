"use client";

import React from "react";
import dynamic from "next/dynamic";

const AmbientGridBackground = dynamic(
  () => import("@/components/3d/AmbientGridBackground"),
  { ssr: false }
);

export interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  cta?: React.ReactNode;
  accentColor?: string;
  visual: React.ReactNode;
  className?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  subtitle,
  cta,
  accentColor,
  visual,
  className = "",
}) => {
  return (
    <section className={`relative bg-[#F6F7F6] dark:bg-[#0A111F] pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-slate-200 dark:border-navy-700/60 transition-colors duration-200 overflow-hidden ${className}`}>
      {/* Ambient Grid Background - dynamic import ssr:false */}
      <AmbientGridBackground />

      <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline / Eyebrow / Subhead / CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal/40 bg-teal/10 text-amber font-mono text-xs tracking-widest uppercase font-semibold">
                <span>{eyebrow}</span>
              </div>
            )}

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-[1.15]">
              {title}
            </h1>

            {subtitle && (
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
                {subtitle}
              </p>
            )}

            {cta && <div className="pt-2 flex flex-wrap items-center gap-4">{cta}</div>}
          </div>

          {/* Right Column: Framed Visual Panel (~45-50% width on desktop) */}
          <div className="lg:col-span-6">
            <div
              className="relative rounded-3xl border border-teal/30 bg-white/90 dark:bg-navy-900/90 p-4 sm:p-6 shadow-2xl backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-teal/50"
              style={accentColor ? { borderColor: `${accentColor}50` } : undefined}
            >
              {/* Soft Inner Glow Header Bar */}
              <div aria-hidden="true" className="flex items-center justify-between border-b border-slate-200 dark:border-navy-700/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-teal" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber" />
                  <div className="h-2.5 w-2.5 rounded-full bg-teal-300" />
                </div>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  OMNiGRC Visual Panel
                </span>
              </div>

              {/* SVG Motif Visual Container */}
              <div aria-hidden="true" className="w-full flex items-center justify-center">
                {visual}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
