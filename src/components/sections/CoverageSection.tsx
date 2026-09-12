"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  ArrowRight,
  CheckCircle,
  Globe,
  MapPin,
  Lock,
  FileText,
  Layers,
} from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import dynamic from "next/dynamic";
import { FRAMEWORKS } from "@/lib/frameworks";

const FrameworkOrrery = dynamic(
  () => import("@/components/3d/FrameworkOrrery"),
  { ssr: false }
);

export const CoverageSection: React.FC = () => {
  return (
    <section className="relative bg-slate-100 dark:bg-[#16233F] py-10 sm:py-24 border-t border-slate-200 dark:border-navy-700/60 overflow-hidden transition-colors duration-200">
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-amber font-semibold inline-block mb-3">
            DOCUMENTED FRAMEWORK COVERAGE
          </span>
          <h2 className="text-2xl sm:text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-tight">
            Six frameworks supported natively out of the box.
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            One primary control definition maps seamlessly into {FRAMEWORKS.map((f) => f.code).join(", ")} requirements.
          </p>
        </div>

        {/* 3D Framework Orrery Orbital Gallery */}
        <div className="w-full">
          <FrameworkOrrery title="Framework Orrery" />
        </div>

        {/* Accessible De-emphasized Plain-Text Fallback List for SEO Crawlers & Screen Readers */}
        <div className="pt-4 border-t border-navy-700/40">
          <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4 text-center">
            Supported Framework Taxonomies Index
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
            {FRAMEWORKS.map((fw) => (
              <Link
                key={fw.code}
                href={`/frameworks/${fw.slug}`}
                className="p-3 rounded-xl bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-navy-700/40 hover:border-teal/40 transition-all space-y-1 block text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-navy-900 dark:text-white text-xs">{fw.code}</span>
                  <span className="text-[9px] font-mono text-teal">{fw.badge.split(" ")[0]}</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">{fw.name}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Regional Awareness & Hosting Section */}
        <div className="rounded-3xl border border-slate-200 dark:border-navy-700/60 bg-white dark:bg-[#0A111F]/90 p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-amber font-semibold flex items-center gap-1.5">
                <Globe className="h-4 w-4 text-teal" /> REGIONAL HOSTING AWARENESS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white tracking-tight">
                Designed for regional data residency.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                GRC teams operate in specific legal jurisdictions. OMNiGRC&apos;s deployment architecture supports isolated tenant storage with initial MVP hosting live in India and the United Kingdom, followed by EU and Australia on the post-launch roadmap.
              </p>
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-navy-900/80 border border-teal/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-teal" /> India &amp; United Kingdom
                  </span>
                  <span className="text-[10px] font-mono text-teal-300 bg-teal/15 px-2 py-0.5 rounded font-bold">
                    Live at MVP
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  Dedicated regional tenant hosting currently live for Indian DPDP compliance and UK GDPR requirements.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-navy-900/80 border border-navy-700/60 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-amber" /> European Union &amp; Australia
                  </span>
                  <span className="text-[10px] font-mono text-amber bg-amber/15 px-2 py-0.5 rounded font-medium">
                    Roadmap (Post-Launch)
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Planned cloud points of presence for EU Data Boundary and Australian data sovereignty roadmap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
