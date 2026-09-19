"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { getFrameworkBySlug, FRAMEWORKS } from "@/lib/frameworks";
import { CheckCircle2, ArrowDown, Check } from "lucide-react";

interface HeroImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackMotif: React.ReactNode;
}

export const HeroImageWithFallback: React.FC<HeroImageWithFallbackProps> = ({
  src,
  alt,
  fallbackMotif,
}) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return <>{fallbackMotif}</>;
  }

  return (
    <div className="relative w-full aspect-[16/10] min-h-[280px] sm:min-h-[360px] rounded-3xl overflow-hidden shadow-2xl border border-teal/30 dark:border-teal/30 bg-navy-900/90 backdrop-blur-xl group transition-all duration-500 hover:border-teal/50 hover:shadow-teal/20">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
        quality={90}
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        onError={() => setImageError(true)}
      />
      <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

interface FrameworkMotifProps {
  slug: string;
  accentColor?: string;
}

export const FrameworkMotif: React.FC<FrameworkMotifProps> = ({ slug, accentColor }) => {
  const fw = getFrameworkBySlug(slug) || FRAMEWORKS[0];
  const color = accentColor || fw?.accentColor || "#0F6E6A";
  const fwName = fw?.code || "FRAMEWORK";
  const citations = fw?.citations || ['A.5', 'A.7', 'A.8'];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-hidden="true"
      className="relative w-full flex flex-col items-center justify-center min-h-[340px] sm:min-h-[400px] overflow-visible"
    >
      {/* Soft Ambient Radial Glow Behind Diagram */}
      <div
        className="absolute w-80 h-80 rounded-full opacity-30 dark:opacity-40 blur-3xl pointer-events-none"
        style={{ backgroundColor: color }}
      />

      {/* SVG Diagram Floating Without Outer Box */}
      <div className="relative z-10 w-full flex items-center justify-center">
        <svg
          aria-hidden="true"
          viewBox="0 0 460 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-w-[460px] filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
        >
          <defs>
            <linearGradient id={`fw-grad-rich-${slug}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.55" />
              <stop offset="100%" stopColor="#0A111F" stopOpacity="0.9" />
            </linearGradient>
            <filter id={`glow-rich-${slug}`} x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Ambient Glow Disk Behind Shield */}
          <motion.circle
            cx="230"
            cy="150"
            r="110"
            fill={color}
            opacity="0.18"
            animate={{ scale: [0.95, 1.08, 0.95], opacity: [0.15, 0.25, 0.15] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />

          {/* Concentric Structural Grid Rings */}
          <circle cx="230" cy="150" r="125" stroke={color} strokeWidth="1.2" strokeDasharray="4 6" opacity="0.3" />
          <circle cx="230" cy="150" r="85" stroke={color} strokeWidth="1.2" opacity="0.2" />

          {/* Outer Shield Boundary */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            d="M230 35 L360 82 V180 C360 248 230 290 230 290 C230 290 100 248 100 180 V82 L230 35 Z"
            fill={`url(#fw-grad-rich-${slug})`}
            stroke={color}
            strokeWidth="2.5"
            filter={`url(#glow-rich-${slug})`}
          />

          {/* Central Shield Core Node */}
          <motion.g
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
          >
            <circle cx="230" cy="150" r="50" fill="#0A111F" stroke={color} strokeWidth="3" />
            <path d="M212 150 L224 162 L250 134" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </motion.g>

          {/* Orbiting Clause Citation Nodes */}
          <g>
            {/* Node 1: Left */}
            <line x1="140" y1="100" x2="185" y2="130" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 3" />
            <rect x="90" y="82" width="64" height="28" rx="8" fill="#16233F" stroke="#3B82F6" strokeWidth="2" />
            <text x="122" y="100" textAnchor="middle" fill="#93C5FD" fontSize="10" fontFamily="monospace" fontWeight="bold">
              {citations[0]}
            </text>

            {/* Node 2: Right */}
            <line x1="320" y1="100" x2="275" y2="130" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="3 3" />
            <rect x="306" y="82" width="64" height="28" rx="8" fill="#16233F" stroke="#8B5CF6" strokeWidth="2" />
            <text x="338" y="100" textAnchor="middle" fill="#DDD6FE" fontSize="10" fontFamily="monospace" fontWeight="bold">
              {citations[1]}
            </text>

            {/* Node 3: Bottom */}
            <line x1="230" y1="200" x2="230" y2="230" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
            <rect x="198" y="226" width="64" height="28" rx="8" fill="#16233F" stroke="#10B981" strokeWidth="2" />
            <text x="230" y="244" textAnchor="middle" fill="#A7F3D0" fontSize="10" fontFamily="monospace" fontWeight="bold">
              {citations[2]}
            </text>
          </g>

          {/* Top Floating Badge */}
          <rect x="155" y="15" width="150" height="28" rx="14" fill="#0A111F" stroke={color} strokeWidth="2" />
          <text x="230" y="33" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="monospace" fontWeight="bold">
            {fwName} STANDARD
          </text>
        </svg>
      </div>
    </motion.div>
  );
};

export const ProductMotifSvg: React.FC<{ slug: string }> = ({ slug }) => {
  const [hoveredCell, setHoveredCell] = useState<{ l: number; i: number; score: number; label: string; risk: string } | null>(null);

  return (
    <div aria-hidden="true" className="relative w-full flex items-center justify-center min-h-[340px] sm:min-h-[420px] overflow-visible">
      {/* Soft Ambient Radial Blur Background */}
      <div className="absolute w-80 h-80 rounded-full bg-teal/20 blur-3xl pointer-events-none" />

      <svg
        aria-hidden="true"
        viewBox="0 0 460 345"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[460px] filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] z-10"
      >
        {(slug === "risk-management" || slug === "risk-register") && (
          /* Pillar 1: Interactive 5x5 Heatmap Matrix Diagram */
          <g>
            <text x="230" y="24" textAnchor="middle" fill="#14B8A6" fontSize="13" fontFamily="monospace" fontWeight="bold">
              5x5 RISK HEATMAP MATRIX
            </text>

            {/* Column Headers */}
            {["I1", "I2", "I3", "I4", "I5"].map((header, idx) => (
              <text
                key={idx}
                x={92 + idx * 70}
                y={48}
                textAnchor="middle"
                fill="#94A3B8"
                fontSize="9.5"
                fontFamily="monospace"
                fontWeight="bold"
              >
                {header}
              </text>
            ))}

            {/* Row Headers */}
            {["L5", "L4", "L3", "L2", "L1"].map((header, idx) => (
              <text
                key={idx}
                x={44}
                y={76 + idx * 35}
                textAnchor="middle"
                fill="#94A3B8"
                fontSize="9.5"
                fontFamily="monospace"
                fontWeight="bold"
              >
                {header}
              </text>
            ))}

            {/* Heatmap Grid Interactive Cells */}
            <g transform="translate(60, 56)">
              {[
                // Row L5
                { l: 5, i: 1, score: 5, fill: "#0F6E6A", label: "L5 x I1", risk: "Low" },
                { l: 5, i: 2, score: 10, fill: "#B5750A", label: "L5 x I2", risk: "Medium" },
                { l: 5, i: 3, score: 15, fill: "#F59E0B", label: "L5 x I3", risk: "High" },
                { l: 5, i: 4, score: 20, fill: "#EF4444", label: "L5 x I4", risk: "Critical" },
                { l: 5, i: 5, score: 25, fill: "#DC2626", label: "L5 x I5", risk: "Critical" },

                // Row L4
                { l: 4, i: 1, score: 4, fill: "#0F6E6A", label: "L4 x I1", risk: "Low" },
                { l: 4, i: 2, score: 8, fill: "#B5750A", label: "L4 x I2", risk: "Medium" },
                { l: 4, i: 3, score: 12, fill: "#F59E0B", label: "L4 x I3", risk: "High" },
                { l: 4, i: 4, score: 16, fill: "#EF4444", label: "L4 x I4", risk: "Critical" },
                { l: 4, i: 5, score: 20, fill: "#EF4444", label: "L4 x I5", risk: "Critical" },

                // Row L3
                { l: 3, i: 1, score: 3, fill: "#0F6E6A", label: "L3 x I1", risk: "Low" },
                { l: 3, i: 2, score: 6, fill: "#0F6E6A", label: "L3 x I2", risk: "Low" },
                { l: 3, i: 3, score: 9, fill: "#B5750A", label: "L3 x I3", risk: "Medium" },
                { l: 3, i: 4, score: 12, fill: "#F59E0B", label: "L3 x I4", risk: "High" },
                { l: 3, i: 5, score: 15, fill: "#F59E0B", label: "L3 x I5", risk: "High" },

                // Row L2
                { l: 2, i: 1, score: 2, fill: "#0F6E6A", label: "L2 x I1", risk: "Low" },
                { l: 2, i: 2, score: 4, fill: "#0F6E6A", label: "L2 x I2", risk: "Low" },
                { l: 2, i: 3, score: 6, fill: "#B5750A", label: "L2 x I3", risk: "Medium" },
                { l: 2, i: 4, score: 8, fill: "#B5750A", label: "L2 x I4", risk: "Medium" },
                { l: 2, i: 5, score: 10, fill: "#B5750A", label: "L2 x I5", risk: "Medium" },

                // Row L1
                { l: 1, i: 1, score: 1, fill: "#0F6E6A", label: "L1 x I1", risk: "Low" },
                { l: 1, i: 2, score: 2, fill: "#0F6E6A", label: "L1 x I2", risk: "Low" },
                { l: 1, i: 3, score: 3, fill: "#0F6E6A", label: "L1 x I3", risk: "Low" },
                { l: 1, i: 4, score: 4, fill: "#0F6E6A", label: "L1 x I4", risk: "Low" },
                { l: 1, i: 5, score: 5, fill: "#0F6E6A", label: "L1 x I5", risk: "Low" },
              ].map((cell, idx) => {
                const row = Math.floor(idx / 5);
                const col = idx % 5;
                const x = col * 70;
                const y = row * 35;
                return (
                  <g key={idx} className="cursor-pointer">
                    <rect
                      x={x}
                      y={y}
                      width="64"
                      height="30"
                      rx="6"
                      fill={cell.fill}
                      opacity={hoveredCell?.score === cell.score && hoveredCell?.l === cell.l && hoveredCell?.i === cell.i ? 1.0 : 0.75}
                      stroke={hoveredCell?.l === cell.l && hoveredCell?.i === cell.i ? "#FFFFFF" : "none"}
                      strokeWidth="2"
                      className="transition-all duration-200 hover:opacity-100"
                      onMouseEnter={() => setHoveredCell(cell)}
                      onMouseLeave={() => setHoveredCell(null)}
                    />
                    <text
                      x={x + 32}
                      y={y + 19}
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="11"
                      fontFamily="monospace"
                      fontWeight="bold"
                      className="pointer-events-none"
                    >
                      {cell.score}
                    </text>
                  </g>
                );
              })}
            </g>

            {/* Calculated Tooltip Banner */}
            <g transform="translate(60, 255)">
              <rect x="0" y="0" width="344" height="42" rx="10" fill="#16233F" stroke="#14B8A6" strokeWidth="1.5" />
              <text x="172" y="25" textAnchor="middle" fill="#38BDF8" fontSize="10" fontFamily="monospace" fontWeight="bold">
                {hoveredCell
                  ? `HOVER: Likelihood ${hoveredCell.l} × Impact ${hoveredCell.i} = Score ${hoveredCell.score} (${hoveredCell.risk.toUpperCase()})`
                  : "HOVER ANY CELL: Likelihood × Impact = Score"}
              </text>
            </g>
          </g>
        )}

        {(slug === "continuous-monitoring" || slug === "asset-inventory") && (
          /* Pillar 2: Interactive Asset & PII Data Flow Graph Motif */
          <g>
            <text x="230" y="30" textAnchor="middle" fill="#38BDF8" fontSize="13" fontFamily="monospace" fontWeight="bold">
              ASSET &amp; PII DATA FLOW REPOSITORY
            </text>

            <line x1="140" y1="130" x2="280" y2="130" stroke="#0EA5E9" strokeWidth="2.5" strokeDasharray="6 6" />
            <line x1="140" y1="145" x2="210" y2="210" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="280" y1="145" x2="210" y2="210" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" />

            <g>
              <rect x="50" y="110" width="110" height="44" rx="10" fill="#16233F" stroke="#0EA5E9" strokeWidth="2" />
              <text x="105" y="132" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">AWS RDS Postgres</text>
              <text x="105" y="146" textAnchor="middle" fill="#38BDF8" fontSize="8" fontFamily="monospace">1.2M PII Records</text>
            </g>

            <g>
              <rect x="270" y="110" width="110" height="44" rx="10" fill="#16233F" stroke="#10B981" strokeWidth="2" />
              <text x="325" y="132" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">CTRL-088 (KMS)</text>
              <text x="325" y="146" textAnchor="middle" fill="#34D399" fontSize="8" fontFamily="monospace">Enforced Encryption</text>
            </g>

            <g>
              <rect x="155" y="195" width="130" height="40" rx="10" fill="#16233F" stroke="#F59E0B" strokeWidth="2" />
              <text x="220" y="220" textAnchor="middle" fill="#F59E0B" fontSize="9" fontFamily="monospace" fontWeight="bold">
                PII Data Stream
              </text>
            </g>

            <rect x="50" y="260" width="330" height="32" rx="8" fill="#16233F" stroke="#38BDF8" strokeWidth="1.5" />
            <text x="215" y="280" textAnchor="middle" fill="#93C5FD" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
              ✓ REAL-TIME ASSET &amp; SENSITIVE FLOW MAPPING
            </text>
          </g>
        )}

        {(slug === "audit-management" || slug === "control-mapping") && (
          /* Pillar 3: Interactive Advisory AI Control Mapper Motif */
          <g>
            <text x="230" y="30" textAnchor="middle" fill="#C084FC" fontSize="13" fontFamily="monospace" fontWeight="bold">
              AI CLAUSE MATCHING ENGINE
            </text>

            <rect x="40" y="80" width="130" height="70" rx="10" fill="#16233F" stroke="#14B8A6" strokeWidth="2" />
            <text x="52" y="104" fill="#14B8A6" fontSize="9.5" fontFamily="monospace" fontWeight="bold">CTRL-005 (Access)</text>
            <text x="52" y="122" fill="#94A3B8" fontSize="8">Quarterly User Review</text>
            <text x="52" y="138" fill="#34D399" fontSize="8" fontFamily="monospace">✓ Assigned Owner</text>

            <circle cx="230" cy="115" r="26" fill="#8B5CF6" opacity="0.2" />
            <circle cx="230" cy="115" r="18" fill="#8B5CF6" />
            <text x="230" y="120" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold">AI</text>

            <rect x="280" y="70" width="120" height="38" rx="8" fill="#16233F" stroke="#3B82F6" strokeWidth="1.5" />
            <text x="290" y="88" fill="#60A5FA" fontSize="9" fontWeight="bold">ISO 27001 A.9.2.5</text>
            <text x="290" y="101" fill="#93C5FD" fontSize="8" fontFamily="monospace">98% Match Confidence</text>

            <rect x="280" y="120" width="120" height="38" rx="8" fill="#16233F" stroke="#10B981" strokeWidth="1.5" />
            <text x="290" y="138" fill="#34D399" fontSize="9" fontWeight="bold">SOC 2 CC6.1</text>
            <text x="290" y="151" fill="#A7F3D0" fontSize="8" fontFamily="monospace">95% Match Confidence</text>

            <line x1="170" y1="115" x2="204" y2="115" stroke="#8B5CF6" strokeWidth="2.5" />
            <line x1="256" y1="105" x2="280" y2="90" stroke="#3B82F6" strokeWidth="2" />
            <line x1="256" y1="125" x2="280" y2="140" stroke="#10B981" strokeWidth="2" />

            <rect x="40" y="195" width="360" height="42" rx="10" fill="#16233F" stroke="#10B981" strokeWidth="1.5" />
            <text x="220" y="221" textAnchor="middle" fill="#34D399" fontSize="10" fontFamily="monospace" fontWeight="bold">
              ✓ MANDATORY HUMAN ANALYST APPROVAL ENFORCED
            </text>
          </g>
        )}

        {(slug === "policy-management" || slug === "compliance-board") && (
          /* Pillar 4: Interactive Compliance Testing Board Motif */
          <g>
            <text x="230" y="30" textAnchor="middle" fill="#34D399" fontSize="13" fontFamily="monospace" fontWeight="bold">
              COMPLIANCE TESTING BOARD (30/60/90 DAYS)
            </text>

            <rect x="40" y="60" width="110" height="185" rx="10" fill="#16233F" opacity="0.9" />
            <text x="50" y="82" fill="#10B981" fontSize="9" fontFamily="monospace" fontWeight="bold">30 DAYS DUE</text>
            <rect x="46" y="94" width="98" height="50" rx="6" fill="#0A111F" stroke="#10B981" strokeWidth="1.5" />
            <text x="54" y="112" fill="#FFFFFF" fontSize="8" fontWeight="bold">MFA Config Audit</text>
            <text x="54" y="126" fill="#34D399" fontSize="8" fontFamily="monospace">Owner: Security</text>

            <rect x="165" y="60" width="110" height="185" rx="10" fill="#16233F" opacity="0.9" />
            <text x="175" y="82" fill="#F59E0B" fontSize="9" fontFamily="monospace" fontWeight="bold">60 DAYS DUE</text>
            <rect x="171" y="94" width="98" height="50" rx="6" fill="#0A111F" stroke="#F59E0B" strokeWidth="1.5" />
            <text x="179" y="112" fill="#FFFFFF" fontSize="8" fontWeight="bold">SOC 2 Review</text>
            <text x="179" y="126" fill="#FBBF24" fontSize="8" fontFamily="monospace">Owner: GRC Lead</text>

            <rect x="290" y="60" width="110" height="185" rx="10" fill="#16233F" opacity="0.9" />
            <text x="300" y="82" fill="#3B82F6" fontSize="9" fontFamily="monospace" fontWeight="bold">90 DAYS DUE</text>
            <rect x="296" y="94" width="98" height="50" rx="6" fill="#0A111F" stroke="#3B82F6" strokeWidth="1.5" />
            <text x="304" y="112" fill="#FFFFFF" fontSize="8" fontWeight="bold">DRP Simulation</text>
            <text x="304" y="126" fill="#93C5FD" fontSize="8" fontFamily="monospace">Owner: DevOps</text>
          </g>
        )}
      </svg>
    </div>
  );
};

export const ProductMotif: React.FC<{ slug: string }> = ({ slug }) => {
  if (slug === "audit-management" || slug === "control-mapping") {
    return (
      <HeroImageWithFallback
        src="/hero-signoff.jpg"
        alt="A compliance manager reviewing an AI-suggested control mapping on screen before giving mandatory analyst signoff."
        fallbackMotif={<ProductMotifSvg slug={slug} />}
      />
    );
  }

  if (slug === "policy-management" || slug === "compliance-board") {
    return (
      <HeroImageWithFallback
        src="/hero-audit-trail.png"
        alt="An auditor verifying defensible testing history and immutable PostgreSQL change logs on a rolling 30/60/90-day compliance board."
        fallbackMotif={<ProductMotifSvg slug={slug} />}
      />
    );
  }

  if (slug === "continuous-monitoring" || slug === "asset-inventory") {
    return (
      <HeroImageWithFallback
        src="/hero-redaction.png"
        alt="A security engineer inspecting automated PII redaction and data minimization logs before external LLM transmission."
        fallbackMotif={<ProductMotifSvg slug={slug} />}
      />
    );
  }

  return <ProductMotifSvg slug={slug} />;
};

export const SolutionMotif: React.FC<{ slug: string }> = ({ slug }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Visual GRC Maturity Pipeline Diagram"
      className="relative w-full max-w-[600px] mx-auto p-4 sm:p-6 rounded-3xl border border-teal-500/30 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#F1F5F9] shadow-xl shadow-teal-900/5 text-slate-800 overflow-hidden"
    >
      {/* Background Subtle Ambient Glowing Orbs */}
      <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-teal-400/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />

      {/* Header Badge */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-600"></span>
          </span>
          <h3 className="text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-teal-900 dark:text-teal-400">
            WORKFLOW MATURITY PIPELINE
          </h3>
        </div>
        <span className="px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-mono font-bold">
          100% AUTOMATED
        </span>
      </div>

      {/* 3 Graphical Visual Nodes */}
      <div className="relative z-10 space-y-3.5">
        {/* Stage 1: 5x5 Matrix Graphic Node */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-4 rounded-2xl bg-white dark:bg-navy-900 border border-teal-200 dark:border-teal/30 shadow-sm hover:border-teal-400 dark:hover:border-teal/60 hover:shadow-md transition-all group relative overflow-hidden"
        >
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-teal-100 text-teal-900 text-xs font-mono font-bold">
                01
              </span>
              <h4 className="text-sm font-bold text-slate-900">Central Risk Register</h4>
            </div>
            <span className="text-xs font-mono text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200 font-semibold">
              5x5 Matrix Scoring
            </span>
          </div>

          {/* Mini 5x5 Heatmap Matrix Graphic */}
          <div className="flex items-center justify-between bg-slate-50 dark:bg-navy-950 p-3 rounded-xl border border-slate-200 dark:border-navy-700/60">
            <div className="grid grid-cols-5 gap-1.5">
              {[
                "#0F6E6A", "#0F6E6A", "#B5750A", "#EF4444", "#DC2626",
                "#0F6E6A", "#0F6E6A", "#B5750A", "#EF4444", "#EF4444",
                "#0F6E6A", "#0F6E6A", "#B5750A", "#F59E0B", "#F59E0B",
                "#0F6E6A", "#0F6E6A", "#B5750A", "#B5750A", "#B5750A",
                "#0F6E6A", "#0F6E6A", "#0F6E6A", "#0F6E6A", "#0F6E6A"
              ].map((c, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-[4px] transition-transform ${i === 8 ? "ring-2 ring-slate-900 scale-110 animate-pulse" : ""
                    }`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>

            <div className="text-right pl-3">
              <div className="text-xs font-mono text-slate-500 uppercase font-semibold">Sample Score</div>
              <div className="text-lg sm:text-xl font-mono font-extrabold text-amber-600">16 / 25</div>
              <div className="text-xs font-mono text-emerald-700 font-bold">✓ Risk Scored</div>
            </div>
          </div>
        </motion.div>

        {/* Animated Connecting Beam 1 -> 2 */}
        <div className="relative flex justify-center">
          <div className="w-0.5 h-4 bg-slate-200 relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-3 bg-gradient-to-b from-transparent via-blue-500 to-transparent"
            />
          </div>
        </div>

        {/* Stage 2: AI Multi-Standard Hub Node (EXPLICIT EXAMPLE CASE LABEL) */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-4 rounded-2xl bg-white dark:bg-navy-900 border border-blue-200 dark:border-blue-900/40 shadow-sm hover:border-blue-400 dark:hover:border-blue-700/60 hover:shadow-md transition-all group relative overflow-hidden"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-blue-100 text-blue-900 text-xs font-mono font-bold">
                02
              </span>
              <h4 className="text-sm font-bold text-slate-900">Multi-Standard AI Engine</h4>
            </div>
            <span className="text-xs font-mono text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200 font-semibold">
              Example Case: AI Match Confidence %
            </span>
          </div>

          {/* AI Cross-Mapping Graphical Nodes - 6 FRAMEWORKS */}
          <div className="bg-slate-50 dark:bg-navy-950 p-3 rounded-xl border border-slate-200 dark:border-navy-700/60 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-mono text-xs font-extrabold shadow-md shadow-blue-500/20">
                AI
              </div>
              <div className="hidden sm:block w-3 h-0.5 bg-gradient-to-r from-blue-500 to-blue-300 animate-pulse" />
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 w-full">
              {[
                { name: "ISO 27001", match: "98%" },
                { name: "ISO 42001", match: "94%" },
                { name: "SOC 2", match: "95%" },
                { name: "GDPR", match: "99%" },
                { name: "DPDP", match: "100%" },
                { name: "HIPAA", match: "96%" }
              ].map((f, i) => (
                <div key={i} className="p-2 rounded-xl bg-white dark:bg-navy-900 border border-blue-200 dark:border-blue-900/40 text-center shadow-2xs">
                  <div className="text-xs font-mono text-slate-800 dark:text-slate-200 font-bold truncate">{f.name}</div>
                  <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-extrabold">{f.match}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Animated Connecting Beam 2 -> 3 */}
        <div className="relative flex justify-center">
          <div className="w-0.5 h-4 bg-slate-200 relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.75, ease: "linear" }}
              className="w-full h-3 bg-gradient-to-b from-transparent via-emerald-500 to-transparent"
            />
          </div>
        </div>

        {/* Stage 3: Rolling Audit Cadence Board Node (CLEAN LEGIBLE TEXT, NO AKWARD WRAPS) */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-4 rounded-2xl bg-white dark:bg-navy-900 border border-emerald-200 dark:border-teal/30 shadow-sm hover:border-emerald-400 dark:hover:border-teal/60 hover:shadow-md transition-all group relative overflow-hidden"
        >
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-900 text-xs font-mono font-bold">
                03
              </span>
              <h4 className="text-sm font-bold text-slate-900">Continuous Rolling Audits</h4>
            </div>
            <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 font-semibold">
              Auto Proof Verification
            </span>
          </div>

          {/* 30 / 60 / 90 Day Graphical Cards with Clean 12px Text */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 bg-slate-50 dark:bg-navy-950 p-3 rounded-xl border border-slate-200 dark:border-navy-700/60">
            <div className="p-2.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/40 text-center flex flex-col justify-between">
              <div className="text-xs font-mono text-emerald-900 dark:text-emerald-400 font-bold mb-0.5">30 DAYS DUE</div>
              <div className="text-sm font-mono font-extrabold text-slate-900 dark:text-slate-100 my-0.5">VERIFIED</div>
              <div className="text-xs text-emerald-700 dark:text-emerald-500 font-semibold mt-0.5">✓ Proof Attached</div>
            </div>

            <div className="p-2.5 rounded-xl bg-amber-50/80 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40 text-center flex flex-col justify-between">
              <div className="text-xs font-mono text-amber-900 dark:text-amber-400 font-bold mb-0.5">60 DAYS DUE</div>
              <div className="text-sm font-mono font-extrabold text-slate-900 dark:text-slate-100 my-0.5">IN REVIEW</div>
              <div className="text-xs text-amber-700 dark:text-amber-500 font-semibold mt-0.5">⚡ Automated Test</div>
            </div>

            <div className="p-2.5 rounded-xl bg-blue-50/80 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/40 text-center flex flex-col justify-between">
              <div className="text-xs font-mono text-blue-900 dark:text-blue-400 font-bold mb-0.5">90 DAYS DUE</div>
              <div className="text-sm font-mono font-extrabold text-slate-900 dark:text-slate-100 my-0.5">SCHEDULED</div>
              <div className="text-xs text-blue-700 dark:text-blue-500 font-semibold mt-0.5">Immutable Log</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Minimal Status */}
      <div className="relative z-10 mt-3.5 pt-2.5 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-600">
        <span className="text-teal-800 font-bold flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-teal-600" /> Defensible Audit Trail Active
        </span>
        <span className="text-slate-500 font-semibold">PostgreSQL Logged</span>
      </div>
    </motion.div>
  );
};

export const PricingMotif: React.FC = () => {
  return (
    <div aria-hidden="true" className="relative w-full flex items-center justify-center min-h-[300px] sm:min-h-[360px] overflow-visible">
      {/* Soft Luminous Ambient Glow Behind Diagram */}
      <div className="absolute w-72 h-72 rounded-full bg-teal/20 blur-3xl pointer-events-none" />

      {/* Sole Floating Diagram Without Outer Enclosing Card Box */}
      <svg
        aria-hidden="true"
        viewBox="0 0 420 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[420px] filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] z-10"
      >
        <text x="210" y="28" textAnchor="middle" fill="#14B8A6" fontSize="13" fontFamily="monospace" fontWeight="bold">
          TRANSPARENT TIERED PACKAGING ARCHITECTURE
        </text>

        {/* 3 Floating Tier Architecture Nodes */}
        {/* Tier 1: Starter */}
        <g>
          <rect x="40" y="60" width="100" height="190" rx="14" fill="#16233F" stroke="#3B82F6" strokeWidth="2" />
          <text x="90" y="92" textAnchor="middle" fill="#60A5FA" fontSize="12" fontWeight="bold">Starter</text>
          <text x="90" y="112" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="monospace">1 Framework</text>

          <line x1="55" y1="130" x2="125" y2="130" stroke="#3B82F6" strokeWidth="1" strokeDasharray="3 3" />
          <text x="90" y="152" textAnchor="middle" fill="#E2E8F0" fontSize="8.5">Risk Register</text>
          <text x="90" y="172" textAnchor="middle" fill="#E2E8F0" fontSize="8.5">5x5 Matrix</text>
          <text x="90" y="192" textAnchor="middle" fill="#E2E8F0" fontSize="8.5">PostgreSQL Log</text>

          <rect x="55" y="212" width="70" height="22" rx="11" fill="#3B82F6" opacity="0.2" />
          <text x="90" y="226" textAnchor="middle" fill="#93C5FD" fontSize="8" fontFamily="monospace" fontWeight="bold">LEAN TEAMS</text>
        </g>

        {/* Tier 2: Growth (Featured Elevated) */}
        <g>
          <rect x="160" y="45" width="100" height="215" rx="14" fill="#16233F" stroke="#14B8A6" strokeWidth="2.5" />
          <rect x="175" y="55" width="70" height="18" rx="9" fill="#14B8A6" />
          <text x="210" y="68" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold">MOST POPULAR</text>

          <text x="210" y="98" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Growth</text>
          <text x="210" y="118" textAnchor="middle" fill="#2DD4BF" fontSize="9" fontFamily="monospace">Multi-Standard</text>

          <line x1="175" y1="135" x2="245" y2="135" stroke="#14B8A6" strokeWidth="1" strokeDasharray="3 3" />
          <text x="210" y="155" textAnchor="middle" fill="#E2E8F0" fontSize="8.5">Map-Once Engine</text>
          <text x="210" y="175" textAnchor="middle" fill="#E2E8F0" fontSize="8.5">PII Data Tracing</text>
          <text x="210" y="195" textAnchor="middle" fill="#E2E8F0" fontSize="8.5">AI Data Minimization</text>
          <text x="210" y="215" textAnchor="middle" fill="#E2E8F0" fontSize="8.5">30/60/90 Testing</text>
        </g>

        {/* Tier 3: Scale */}
        <g>
          <rect x="280" y="60" width="100" height="190" rx="14" fill="#16233F" stroke="#8B5CF6" strokeWidth="2" />
          <text x="330" y="92" textAnchor="middle" fill="#C084FC" fontSize="12" fontWeight="bold">Scale</text>
          <text x="330" y="112" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="monospace">All 6 Standards</text>

          <line x1="295" y1="130" x2="365" y2="130" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="3 3" />
          <text x="330" y="152" textAnchor="middle" fill="#E2E8F0" fontSize="8.5">Data Residency</text>
          <text x="330" y="172" textAnchor="middle" fill="#E2E8F0" fontSize="8.5">Tenant Isolation</text>
          <text x="330" y="192" textAnchor="middle" fill="#E2E8F0" fontSize="8.5">Full Audit Export</text>

          <rect x="295" y="212" width="70" height="22" rx="11" fill="#8B5CF6" opacity="0.2" />
          <text x="330" y="226" textAnchor="middle" fill="#DDD6FE" fontSize="8" fontFamily="monospace" fontWeight="bold">MULTI-REGION</text>
        </g>
      </svg>
    </div>
  );
};

export const GenericHeroMotifSvg: React.FC<{ type: "about" | "demo" | "contact" | "privacy" | "terms" | "blog" | "vault" }> = ({ type }) => {
  return (
    <div aria-hidden="true" className="relative w-full flex items-center justify-center min-h-[300px] sm:min-h-[360px] overflow-visible">
      {/* Soft Luminous Ambient Glow Background */}
      <div className="absolute w-72 h-72 rounded-full bg-teal/15 blur-3xl pointer-events-none" />

      {/* Clean Vector SVG Visual */}
      <svg
        aria-hidden="true"
        viewBox="0 0 440 310"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[440px] filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)] z-10"
      >
        {type === "about" && (
          <g>
            <text x="220" y="28" textAnchor="middle" fill="#14B8A6" fontSize="12" fontFamily="monospace" fontWeight="bold">
              CONNECTED GRC OPERATING SYSTEM
            </text>

            <circle cx="220" cy="155" r="46" fill="#16233F" stroke="#14B8A6" strokeWidth="2.5" />
            <circle cx="125" cy="105" r="24" fill="#16233F" stroke="#3B82F6" strokeWidth="2" />
            <circle cx="315" cy="105" r="24" fill="#16233F" stroke="#8B5CF6" strokeWidth="2" />
            <circle cx="125" cy="205" r="24" fill="#16233F" stroke="#10B981" strokeWidth="2" />
            <circle cx="315" cy="205" r="24" fill="#16233F" stroke="#F59E0B" strokeWidth="2" />

            <line x1="145" y1="117" x2="182" y2="137" stroke="#3B82F6" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="295" y1="117" x2="258" y2="137" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="145" y1="193" x2="182" y2="173" stroke="#10B981" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="295" y1="193" x2="258" y2="173" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />

            <text x="220" y="159" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">OMNiGRC</text>
            <text x="125" y="109" textAnchor="middle" fill="#93C5FD" fontSize="8" fontFamily="monospace">RISK</text>
            <text x="315" y="109" textAnchor="middle" fill="#DDD6FE" fontSize="8" fontFamily="monospace">CTRL</text>
            <text x="125" y="209" textAnchor="middle" fill="#A7F3D0" fontSize="8" fontFamily="monospace">ASSET</text>
            <text x="315" y="209" textAnchor="middle" fill="#FDE68A" fontSize="8" fontFamily="monospace">TEST</text>
          </g>
        )}

        {type === "demo" && (
          <g>
            <text x="220" y="28" textAnchor="middle" fill="#F59E0B" fontSize="12" fontFamily="monospace" fontWeight="bold">
              INTERACTIVE DEMO WALKTHROUGH
            </text>

            <rect x="60" y="55" width="320" height="185" rx="14" fill="#16233F" stroke="#14B8A6" strokeWidth="2" />
            <circle cx="220" cy="135" r="28" fill="#14B8A6" />
            <polygon points="214,121 234,135 214,149" fill="#FFFFFF" />

            <rect x="80" y="188" width="280" height="30" rx="8" fill="#0A111F" stroke="#F59E0B" strokeWidth="1.5" />
            <text x="220" y="207" textAnchor="middle" fill="#FBBF24" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
              ✓ Tailored ISO 27001, SOC 2, &amp; GDPR Walkthrough
            </text>
          </g>
        )}

        {type === "contact" && (
          /* Minimalist Contact Architect Desk UI Widget */
          <g>
            <rect x="30" y="30" width="380" height="240" rx="16" fill="#16233F" stroke="#14B8A6" strokeWidth="1.5" />

            {/* Header bar */}
            <rect x="30" y="30" width="380" height="36" rx="16" fill="#0A111F" opacity="0.9" />
            <circle cx="52" cy="48" r="4" fill="#EF4444" />
            <circle cx="66" cy="48" r="4" fill="#F59E0B" />
            <circle cx="80" cy="48" r="4" fill="#10B981" />
            <text x="220" y="52" textAnchor="middle" fill="#14B8A6" fontSize="10" fontFamily="monospace" fontWeight="bold">
              ARCHITECT DESK • DIRECT CONNECT
            </text>

            {/* Row 1: Email Direct */}
            <g transform="translate(50, 82)">
              <rect x="0" y="0" width="340" height="42" rx="10" fill="#0A111F" stroke="#38BDF8" strokeWidth="1" />
              <text x="16" y="18" fill="#38BDF8" fontSize="8.5" fontFamily="monospace" fontWeight="bold">EMAIL DIRECT</text>
              <text x="16" y="32" fill="#FFFFFF" fontSize="10" fontWeight="bold">contact@omnigrc.com</text>
              <rect x="250" y="10" width="76" height="22" rx="11" fill="#38BDF8" opacity="0.15" />
              <text x="288" y="24" textAnchor="middle" fill="#38BDF8" fontSize="8" fontFamily="monospace" fontWeight="bold">&lt; 2h SLA</text>
            </g>

            {/* Row 2: Regional Presence */}
            <g transform="translate(50, 134)">
              <rect x="0" y="0" width="340" height="42" rx="10" fill="#0A111F" stroke="#F59E0B" strokeWidth="1" />
              <text x="16" y="18" fill="#F59E0B" fontSize="8.5" fontFamily="monospace" fontWeight="bold">REGIONAL DESKS</text>
              <text x="16" y="32" fill="#FFFFFF" fontSize="10" fontWeight="bold">India (IST) &amp; United Kingdom (GMT)</text>
              <rect x="250" y="10" width="76" height="22" rx="11" fill="#F59E0B" opacity="0.15" />
              <text x="288" y="24" textAnchor="middle" fill="#FBBF24" fontSize="8" fontFamily="monospace" fontWeight="bold">ACTIVE</text>
            </g>

            {/* Bottom Status Pill */}
            <g transform="translate(50, 194)">
              <rect x="0" y="0" width="340" height="34" rx="10" fill="#0A111F" stroke="#10B981" strokeWidth="1.2" />
              <circle cx="20" cy="17" r="4" fill="#10B981" />
              <text x="32" y="21" fill="#34D399" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
                ✓ Confidential &amp; Tenant-Isolated Architectural Channel
              </text>
            </g>
          </g>
        )}

        {type === "privacy" && (
          /* Minimalist Privacy Data Minimization Engine UI Widget */
          <g>
            <rect x="30" y="30" width="380" height="240" rx="16" fill="#16233F" stroke="#10B981" strokeWidth="1.5" />

            {/* Header bar */}
            <rect x="30" y="30" width="380" height="36" rx="16" fill="#0A111F" opacity="0.9" />
            <circle cx="52" cy="48" r="4" fill="#10B981" />
            <text x="220" y="52" textAnchor="middle" fill="#34D399" fontSize="10" fontFamily="monospace" fontWeight="bold">
              PRIVACY PIPELINE • ZERO DATA RETENTION
            </text>

            {/* Sanitization Pipeline Diagram */}
            <g transform="translate(45, 82)">
              {/* Step 1 */}
              <rect x="0" y="0" width="95" height="60" rx="8" fill="#0A111F" stroke="#38BDF8" strokeWidth="1" />
              <text x="47" y="24" textAnchor="middle" fill="#38BDF8" fontSize="8" fontFamily="monospace" fontWeight="bold">1. PAYLOAD</text>
              <text x="47" y="42" textAnchor="middle" fill="#E2E8F0" fontSize="8.5">Control Query</text>

              {/* Arrow 1 */}
              <line x1="97" y1="30" x2="123" y2="30" stroke="#14B8A6" strokeWidth="2" strokeDasharray="3 3" />

              {/* Step 2 (Engine) */}
              <rect x="125" y="0" width="100" height="60" rx="8" fill="#0A111F" stroke="#14B8A6" strokeWidth="1.5" />
              <text x="175" y="24" textAnchor="middle" fill="#14B8A6" fontSize="8" fontFamily="monospace" fontWeight="bold">2. SANITIZER</text>
              <text x="175" y="42" textAnchor="middle" fill="#34D399" fontSize="8">PII Redacted</text>

              {/* Arrow 2 */}
              <line x1="227" y1="30" x2="253" y2="30" stroke="#14B8A6" strokeWidth="2" strokeDasharray="3 3" />

              {/* Step 3 */}
              <rect x="255" y="0" width="95" height="60" rx="8" fill="#0A111F" stroke="#C084FC" strokeWidth="1" />
              <text x="302" y="24" textAnchor="middle" fill="#C084FC" fontSize="8" fontFamily="monospace" fontWeight="bold">3. ADVISORY AI</text>
              <text x="302" y="42" textAnchor="middle" fill="#E2E8F0" fontSize="8.5">0-Day Log</text>
            </g>

            {/* Regulatory Alignment Row */}
            <g transform="translate(45, 158)">
              <rect x="0" y="0" width="350" height="42" rx="10" fill="#0A111F" stroke="#34D399" strokeWidth="1" />
              <text x="15" y="25" fill="#A7F3D0" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
                ✓ DPDP Act 2023 • EU GDPR • ISO 27001 Annex A Compliant
              </text>
            </g>

            {/* Bottom Status Pill */}
            <g transform="translate(45, 210)">
              <rect x="0" y="0" width="350" height="34" rx="10" fill="#0A111F" stroke="#F59E0B" strokeWidth="1.2" />
              <circle cx="20" cy="17" r="4" fill="#F59E0B" />
              <text x="32" y="21" fill="#FBBF24" fontSize="9" fontFamily="monospace" fontWeight="bold">
                Customer Data Is NEVER Used to Train Public AI Models
              </text>
            </g>
          </g>
        )}

        {type === "terms" && (
          /* Minimalist Terms Master Service Agreement UI Widget */
          <g>
            <rect x="30" y="30" width="380" height="240" rx="16" fill="#16233F" stroke="#F59E0B" strokeWidth="1.5" />

            {/* Header bar */}
            <rect x="30" y="30" width="380" height="36" rx="16" fill="#0A111F" opacity="0.9" />
            <circle cx="52" cy="48" r="4" fill="#F59E0B" />
            <text x="220" y="52" textAnchor="middle" fill="#FBBF24" fontSize="10" fontFamily="monospace" fontWeight="bold">
              MASTER SERVICE AGREEMENT • TERMS
            </text>

            {/* Item 1 */}
            <g transform="translate(50, 82)">
              <rect x="0" y="0" width="340" height="40" rx="10" fill="#0A111F" stroke="#14B8A6" strokeWidth="1" />
              <text x="16" y="24" fill="#2DD4BF" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
                1. Logical Schema Isolation per Customer Tenant
              </text>
            </g>

            {/* Item 2 */}
            <g transform="translate(50, 130)">
              <rect x="0" y="0" width="340" height="40" rx="10" fill="#0A111F" stroke="#38BDF8" strokeWidth="1" />
              <text x="16" y="24" fill="#60A5FA" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
                2. Advisory AI Output Requires Human Sign-off
              </text>
            </g>

            {/* Item 3 */}
            <g transform="translate(50, 178)">
              <rect x="0" y="0" width="340" height="40" rx="10" fill="#0A111F" stroke="#C084FC" strokeWidth="1" />
              <text x="16" y="24" fill="#C084FC" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
                3. AES-256 (At Rest) &amp; TLS 1.3 (In Transit) Encryption
              </text>
            </g>

            {/* Bottom Status */}
            <g transform="translate(50, 226)">
              <rect x="0" y="0" width="340" height="28" rx="8" fill="#0A111F" stroke="#10B981" strokeWidth="1" />
              <text x="170" y="18" textAnchor="middle" fill="#34D399" fontSize="8.5" fontFamily="monospace" fontWeight="bold">
                ✓ 100% Customer Data Ownership Retained
              </text>
            </g>
          </g>
        )}

        {type === "blog" && (
          <g>
            <text x="220" y="28" textAnchor="middle" fill="#C084FC" fontSize="12" fontFamily="monospace" fontWeight="bold">
              PRACTICAL GRC INSIGHTS
            </text>

            <rect x="60" y="65" width="145" height="175" rx="10" fill="#16233F" stroke="#C084FC" strokeWidth="2" />
            <rect x="235" y="65" width="145" height="175" rx="10" fill="#16233F" stroke="#38BDF8" strokeWidth="2" />

            <line x1="75" y1="95" x2="185" y2="95" stroke="#C084FC" strokeWidth="2.5" />
            <line x1="75" y1="115" x2="170" y2="115" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="75" y1="130" x2="155" y2="130" stroke="#94A3B8" strokeWidth="1.5" />

            <line x1="250" y1="95" x2="360" y2="95" stroke="#38BDF8" strokeWidth="2.5" />
            <line x1="250" y1="115" x2="345" y2="115" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="250" y1="130" x2="330" y2="130" stroke="#94A3B8" strokeWidth="1.5" />
          </g>
        )}

        {type === "vault" && (
          /* Minimalist Trust & Resource Vault UI Widget */
          <g>
            <rect x="30" y="30" width="380" height="240" rx="16" fill="#16233F" stroke="#10B981" strokeWidth="1.5" />

            {/* Header bar */}
            <rect x="30" y="30" width="380" height="36" rx="16" fill="#0A111F" opacity="0.9" />
            <circle cx="52" cy="48" r="4" fill="#10B981" />
            <text x="220" y="52" textAnchor="middle" fill="#34D399" fontSize="10" fontFamily="monospace" fontWeight="bold">
              TRUST &amp; RESOURCE VAULT • AUDIT READY
            </text>

            {/* Checklist 1 */}
            <g transform="translate(50, 82)">
              <rect x="0" y="0" width="340" height="42" rx="10" fill="#0A111F" stroke="#14B8A6" strokeWidth="1" />
              <text x="16" y="25" fill="#2DD4BF" fontSize="9.5" fontStyle="bold" fontFamily="monospace">
                ISO 27001:2022 Control Mapping Guide (PDF)
              </text>
              <text x="290" y="25" fill="#14B8A6" fontSize="8.5" fontFamily="monospace">DOWNLOAD</text>
            </g>

            {/* Checklist 2 */}
            <g transform="translate(50, 134)">
              <rect x="0" y="0" width="340" height="42" rx="10" fill="#0A111F" stroke="#F59E0B" strokeWidth="1" />
              <text x="16" y="25" fill="#FBBF24" fontSize="9.5" fontStyle="bold" fontFamily="monospace">
                SOC 2 Type II Preparation Checklist (CSV)
              </text>
              <text x="290" y="25" fill="#F59E0B" fontSize="8.5" fontFamily="monospace">DOWNLOAD</text>
            </g>

            {/* Bottom Status Pill */}
            <g transform="translate(50, 194)">
              <rect x="0" y="0" width="340" height="34" rx="10" fill="#0A111F" stroke="#38BDF8" strokeWidth="1.2" />
              <circle cx="20" cy="17" r="4" fill="#38BDF8" />
              <text x="32" y="21" fill="#60A5FA" fontSize="9" fontFamily="monospace" fontWeight="bold">
                ✓ Verified SHA-256 Audit Trail Integrity
              </text>
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};

export const GenericHeroMotif: React.FC<{ type: "about" | "demo" | "contact" | "privacy" | "terms" | "blog" | "vault" }> = ({ type }) => {
  if (type === "about") {
    return (
      <HeroImageWithFallback
        src="/hero-collab.png"
        alt="GRC architects collaborating around a screen to structure practical compliance workflows for lean security teams."
        fallbackMotif={<GenericHeroMotifSvg type={type} />}
      />
    );
  }

  if (type === "contact") {
    return (
      <HeroImageWithFallback
        src="/images/contact-us-saas-ui.png"
        alt="3D dark glassmorphic support dashboard showing live architect communication desk and SLA response metrics."
        fallbackMotif={<GenericHeroMotifSvg type={type} />}
      />
    );
  }

  if (type === "privacy") {
    return (
      <HeroImageWithFallback
        src="/images/privacy-policy-saas-ui.png"
        alt="3D dark glassmorphic data privacy dashboard showing zero-retention payload sanitizer engine."
        fallbackMotif={<GenericHeroMotifSvg type={type} />}
      />
    );
  }

  if (type === "terms") {
    return (
      <HeroImageWithFallback
        src="/images/terms-of-service-saas-ui.png"
        alt="3D dark glassmorphic legal master service agreement matrix showing customer schema isolation boundaries."
        fallbackMotif={<GenericHeroMotifSvg type={type} />}
      />
    );
  }

  if (type === "vault") {
    return (
      <HeroImageWithFallback
        src="/images/trust-vault-saas-ui.png"
        alt="3D dark glassmorphic trust vault resource hub showing audit-ready evidence checklists."
        fallbackMotif={<GenericHeroMotifSvg type={type} />}
      />
    );
  }

  return <GenericHeroMotifSvg type={type} />;
};

