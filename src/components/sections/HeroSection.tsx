"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const AuroraBackground = dynamic(
  () => import("@/components/3d/AuroraBackground"),
  { ssr: false }
);

const IsometricHeroVisual = dynamic(
  () => import("@/components/3d/IsometricHeroVisual").then((m) => m.IsometricHeroVisual),
  { ssr: false }
);

const documentedFrameworks = [
  { name: "ISO 27001:2022", badge: "ISMS Global" },
  { name: "SOC 2 Type II", badge: "Trust Services Criteria" },
  { name: "GDPR / UK GDPR", badge: "Privacy & Data Protection" },
  { name: "DPDP Act 2023", badge: "India Data Protection" },
  { name: "Essential 8", badge: "Cyber Mitigation" },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-between overflow-hidden bg-[#0A111F] pt-28 sm:pt-36 pb-12 sm:pb-16">
      {/* WebGL2 Swirling Aurora Background Atmosphere */}
      <AuroraBackground />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 max-w-5xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center"
      >
        {/* Eyebrow badge */}
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 self-center px-3.5 sm:px-4 py-1.5 rounded-full border border-teal/40 bg-teal/10 text-amber text-[11px] sm:text-xs font-mono tracking-widest uppercase mb-6 sm:mb-8 shadow-inner max-w-[90vw]"
        >
          <Sparkles className="h-3.5 w-3.5 text-amber shrink-0" />
          <span className="truncate font-semibold">THE CONNECTED GRC OPERATING LAYER</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={fadeInUp}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-5 sm:mb-6 max-w-4xl 2xl:max-w-6xl mx-auto"
        >
          Unified risk, asset, and control management{" "}
          <span className="bg-gradient-to-r from-teal via-teal-300 to-amber bg-clip-text text-transparent">
            for lean GRC teams.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl 2xl:max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal"
        >
          Connect risk registers, asset inventories, control mapping, and compliance testing in one operating workflow. Advisory AI suggests; human oversight approves.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 w-full max-w-md sm:max-w-none mx-auto"
        >
          <Link href="/get-a-demo" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto" rightIcon={<ArrowRight className="h-5 w-5" />}>
              Request a Demo
            </Button>
          </Link>
          <a href="#core-workflows" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Explore OMNiGRC
            </Button>
          </a>
        </motion.div>

        {/* 3D Isometric Hero Visual */}
        <IsometricHeroVisual />
      </motion.div>

      {/* Documented Framework Coverage Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 w-full border-t border-navy-700/60 bg-[#0A111F]/80 py-4 sm:py-5 backdrop-blur-md mt-6"
      >
        <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-amber font-mono font-semibold uppercase tracking-wider text-[11px] sm:text-xs">
            <ShieldCheck className="h-4 w-4 text-teal shrink-0" />
            <span>Documented Framework Coverage:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {documentedFrameworks.map((fw, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-navy-700/60 bg-navy-900/80 text-[11px] font-medium text-slate-300"
              >
                <CheckCircle2 className="h-3 w-3 text-teal" />
                <span className="font-semibold text-white">{fw.name}</span>
              </div>
            ))}
          </div>

          <Link href="/frameworks/soc-2" className="text-xs text-teal hover:text-white underline font-mono transition-colors">
            View Mapping Workflow →
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
