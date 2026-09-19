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
  visual?: React.ReactNode;
  className?: string;
  fullPageBackground?: boolean;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  subtitle,
  cta,
  accentColor,
  visual,
  className = "",
  fullPageBackground = true,
}) => {
  return (
    <section className={`relative bg-transparent dark:bg-transparent pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-slate-200 dark:border-navy-700/60 transition-colors duration-200 overflow-hidden ${className}`}>
      {/* Full-Page Ambient Grid Canvas */}
      <AmbientGridBackground fullPage={fullPageBackground} />

      <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {visual ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headline / Eyebrow / Subhead / CTAs */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {eyebrow && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#2E936F]/40 bg-[#2E936F]/10 text-[#D4521A] dark:border-teal/40 dark:bg-teal/10 dark:text-amber font-mono text-xs tracking-widest uppercase font-semibold">
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

            {/* Right Column: Visual Panel */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[640px]">
                {visual}
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#2E936F]/40 bg-[#2E936F]/10 text-[#D4521A] dark:border-teal/40 dark:bg-teal/10 dark:text-amber font-mono text-xs tracking-widest uppercase font-semibold">
                <span>{eyebrow}</span>
              </div>
            )}

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-[1.15]">
              {title}
            </h1>

            {subtitle && (
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}

            {cta && <div className="pt-2 flex flex-wrap items-center justify-center gap-4">{cta}</div>}
          </div>
        )}
      </div>
    </section>
  );
};
