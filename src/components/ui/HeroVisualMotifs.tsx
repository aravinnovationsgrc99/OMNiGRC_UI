"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { getFrameworkBySlug, FRAMEWORKS } from "@/lib/frameworks";
import { CheckCircle2 } from "lucide-react";

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
    <div aria-hidden="true" className="relative w-full flex items-center justify-center min-h-[300px] sm:min-h-[360px] overflow-visible">
      <div className="absolute w-72 h-72 rounded-full bg-teal/20 blur-3xl pointer-events-none" />
      <svg
        aria-hidden="true"
        viewBox="0 0 420 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[420px] filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] z-10"
      >
        <text x="210" y="32" textAnchor="middle" fill="#F59E0B" fontSize="13" fontFamily="monospace" fontWeight="bold">
          TAILORED WORKFLOW MATURITY PIPELINE
        </text>

        {/* Tier Cards Floating */}
        <rect x="50" y="65" width="320" height="54" rx="12" fill="#16233F" stroke="#14B8A6" strokeWidth="2" />
        <text x="75" y="92" fill="#FFFFFF" fontSize="11" fontWeight="bold">Stage 1: Single Risk &amp; Control Register</text>
        <text x="75" y="108" fill="#14B8A6" fontSize="9" fontFamily="monospace">Centralized baseline logging &amp; scoring</text>

        <rect x="50" y="135" width="320" height="54" rx="12" fill="#16233F" stroke="#3B82F6" strokeWidth="2" />
        <text x="75" y="162" fill="#FFFFFF" fontSize="11" fontWeight="bold">Stage 2: Multi-Standard Cross-Mapping</text>
        <text x="75" y="178" fill="#60A5FA" fontSize="9" fontFamily="monospace">ISO 27001, SOC 2, GDPR, DPDP alignment</text>

        <rect x="50" y="205" width="320" height="54" rx="12" fill="#16233F" stroke="#10B981" strokeWidth="2" />
        <text x="75" y="232" fill="#FFFFFF" fontSize="11" fontWeight="bold">Stage 3: Continuous Rolling Audit Testing</text>
        <text x="75" y="248" fill="#34D399" fontSize="9" fontFamily="monospace">30/60/90-Day automated proof verification</text>
      </svg>
    </div>
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

export const GenericHeroMotifSvg: React.FC<{ type: "about" | "demo" | "contact" | "blog" | "vault" }> = ({ type }) => {
  return (
    <div aria-hidden="true" className="relative w-full flex items-center justify-center min-h-[300px] sm:min-h-[360px] overflow-visible">
      {/* Soft Ambient Radial Blur Background */}
      <div className="absolute w-72 h-72 rounded-full bg-teal/20 blur-3xl pointer-events-none" />

      {/* Floating Diagram Without Card Enclosure Box */}
      <svg
        aria-hidden="true"
        viewBox="0 0 420 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[420px] filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] z-10"
      >
        {type === "about" && (
          <g>
            <text x="210" y="30" textAnchor="middle" fill="#14B8A6" fontSize="13" fontFamily="monospace" fontWeight="bold">
              CONNECTED GRC OPERATING SYSTEM
            </text>

            <circle cx="210" cy="150" r="46" fill="#16233F" stroke="#14B8A6" strokeWidth="2.5" />
            <circle cx="120" cy="100" r="24" fill="#16233F" stroke="#3B82F6" strokeWidth="2" />
            <circle cx="300" cy="100" r="24" fill="#16233F" stroke="#8B5CF6" strokeWidth="2" />
            <circle cx="120" cy="200" r="24" fill="#16233F" stroke="#10B981" strokeWidth="2" />
            <circle cx="300" cy="200" r="24" fill="#16233F" stroke="#F59E0B" strokeWidth="2" />

            <line x1="140" y1="112" x2="175" y2="132" stroke="#3B82F6" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="280" y1="112" x2="245" y2="132" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="140" y1="188" x2="175" y2="168" stroke="#10B981" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="280" y1="188" x2="245" y2="168" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />

            <text x="210" y="154" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">OMNiGRC</text>
            <text x="120" y="104" textAnchor="middle" fill="#93C5FD" fontSize="8" fontFamily="monospace">RISK</text>
            <text x="300" y="104" textAnchor="middle" fill="#DDD6FE" fontSize="8" fontFamily="monospace">CTRL</text>
            <text x="120" y="204" textAnchor="middle" fill="#A7F3D0" fontSize="8" fontFamily="monospace">ASSET</text>
            <text x="300" y="204" textAnchor="middle" fill="#FDE68A" fontSize="8" fontFamily="monospace">TEST</text>
          </g>
        )}

        {type === "demo" && (
          <g>
            <text x="210" y="30" textAnchor="middle" fill="#F59E0B" fontSize="13" fontFamily="monospace" fontWeight="bold">
              INTERACTIVE DEMO WALKTHROUGH
            </text>

            <rect x="60" y="60" width="300" height="180" rx="14" fill="#16233F" stroke="#14B8A6" strokeWidth="2" />
            <circle cx="210" cy="140" r="30" fill="#14B8A6" />
            <polygon points="204,126 224,140 204,154" fill="#FFFFFF" />

            <rect x="80" y="190" width="260" height="30" rx="8" fill="#0A111F" stroke="#F59E0B" strokeWidth="1.5" />
            <text x="210" y="209" textAnchor="middle" fill="#FBBF24" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
              ✓ Tailored ISO 27001, SOC 2, &amp; GDPR Walkthrough
            </text>
          </g>
        )}

        {type === "contact" && (
          <g>
            <text x="210" y="30" textAnchor="middle" fill="#38BDF8" fontSize="13" fontFamily="monospace" fontWeight="bold">
              DIRECT SPECIALIST CONNECT
            </text>

            <rect x="70" y="70" width="280" height="160" rx="14" fill="#16233F" stroke="#38BDF8" strokeWidth="2" />
            <path d="M90 95 L210 160 L330 95" stroke="#38BDF8" strokeWidth="2.5" fill="none" />

            <rect x="110" y="185" width="200" height="28" rx="8" fill="#0A111F" stroke="#10B981" strokeWidth="1.5" />
            <text x="210" y="202" textAnchor="middle" fill="#34D399" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
              ✓ Direct GRC Architect Response
            </text>
          </g>
        )}

        {type === "blog" && (
          <g>
            <text x="210" y="30" textAnchor="middle" fill="#C084FC" fontSize="13" fontFamily="monospace" fontWeight="bold">
              PRACTICAL GRC INSIGHTS
            </text>

            <rect x="60" y="65" width="135" height="170" rx="10" fill="#16233F" stroke="#C084FC" strokeWidth="2" />
            <rect x="225" y="65" width="135" height="170" rx="10" fill="#16233F" stroke="#38BDF8" strokeWidth="2" />

            <line x1="75" y1="95" x2="175" y2="95" stroke="#C084FC" strokeWidth="2.5" />
            <line x1="75" y1="115" x2="160" y2="115" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="75" y1="130" x2="145" y2="130" stroke="#94A3B8" strokeWidth="1.5" />

            <line x1="240" y1="95" x2="340" y2="95" stroke="#38BDF8" strokeWidth="2.5" />
            <line x1="240" y1="115" x2="325" y2="115" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="240" y1="130" x2="310" y2="130" stroke="#94A3B8" strokeWidth="1.5" />
          </g>
        )}

        {type === "vault" && (
          <g>
            <text x="210" y="30" textAnchor="middle" fill="#34D399" fontSize="13" fontFamily="monospace" fontWeight="bold">
              TRUST &amp; RESOURCE VAULT
            </text>

            <rect x="100" y="65" width="220" height="170" rx="14" fill="#16233F" stroke="#10B981" strokeWidth="2" />
            <circle cx="210" cy="130" r="30" fill="#0A111F" stroke="#10B981" strokeWidth="2.5" />
            <rect x="204" y="122" width="12" height="16" rx="3" fill="#10B981" />

            <text x="210" y="195" textAnchor="middle" fill="#A7F3D0" fontSize="10" fontFamily="monospace" fontWeight="bold">
              ✓ Audit-Ready Evidence Vault
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

export const GenericHeroMotif: React.FC<{ type: "about" | "demo" | "contact" | "blog" | "vault" }> = ({ type }) => {
  if (type === "about") {
    return (
      <HeroImageWithFallback
        src="/hero-collab.png"
        alt="GRC architects collaborating around a screen to structure practical compliance workflows for lean security teams."
        fallbackMotif={<GenericHeroMotifSvg type={type} />}
      />
    );
  }

  return <GenericHeroMotifSvg type={type} />;
};
