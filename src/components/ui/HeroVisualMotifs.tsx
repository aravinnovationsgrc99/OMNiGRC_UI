"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { getFrameworkBySlug, FRAMEWORKS } from "@/lib/frameworks";
import { Shield, Sparkles, CheckCircle2, AlertTriangle, Cpu, Database, Layers, ArrowRight } from "lucide-react";

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
  const domainCount = fw?.controlDomains?.length || 4;
  const oneLiner = fw?.oneLiner || "Comprehensive security control framework mapping";

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-hidden="true" 
      className="relative w-full rounded-3xl border border-teal/30 dark:border-teal/30 bg-white/90 dark:bg-navy-900/90 p-5 sm:p-7 shadow-2xl backdrop-blur-xl flex flex-col justify-between min-h-[360px] sm:min-h-[420px] transition-all duration-500 hover:border-teal/50 group overflow-hidden"
    >
      {/* Soft Ambient Radial Pulse Background */}
      <div 
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-20 dark:opacity-30 blur-3xl pointer-events-none transition-all duration-700 group-hover:opacity-40"
        style={{ backgroundColor: color }}
      />
      <div 
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-15 dark:opacity-25 blur-3xl pointer-events-none"
        style={{ backgroundColor: color }}
      />

      {/* Top Header Badge */}
      <div className="flex items-center justify-between z-10 mb-2">
        <div className="flex items-center gap-2">
          <span 
            className="h-2.5 w-2.5 rounded-full animate-pulse" 
            style={{ backgroundColor: color }}
          />
          <span className="text-xs font-mono font-bold tracking-wider text-slate-800 dark:text-slate-200 uppercase">
            {fwName} MOTIF ARCHITECTURE
          </span>
        </div>
        <span 
          className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border border-teal/30 bg-teal/10 dark:bg-teal/20 text-teal-700 dark:text-teal-300"
        >
          {domainCount} Domains Mapped
        </span>
      </div>

      {/* SVG Canvas with Motion Fill */}
      <div className="relative flex-1 flex items-center justify-center my-2 z-10">
        <svg
          aria-hidden="true"
          viewBox="0 0 460 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto max-w-[440px] filter drop-shadow-xl"
        >
          <defs>
            <linearGradient id={`fw-grad-rich-${slug}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.45" />
              <stop offset="100%" stopColor="#0A111F" stopOpacity="0.85" />
            </linearGradient>
            <filter id={`glow-rich-${slug}`} x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Ambient Glow Disk Behind Shield */}
          <motion.circle 
            cx="230" 
            cy="150" 
            r="110" 
            fill={color} 
            opacity="0.15" 
            animate={{ scale: [0.95, 1.08, 0.95], opacity: [0.12, 0.22, 0.12] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />

          {/* Concentric Structural Grid Rings */}
          <circle cx="230" cy="150" r="125" stroke={color} strokeWidth="1" strokeDasharray="4 6" opacity="0.25" />
          <circle cx="230" cy="150" r="85" stroke={color} strokeWidth="1" opacity="0.15" />

          {/* Outer Shield Boundary Entrance Animation */}
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

          {/* Orbiting Clause Citation Nodes with Lines */}
          <motion.g
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
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
          </motion.g>

          {/* Top Badge Overlay */}
          <rect x="165" y="15" width="130" height="26" rx="13" fill="#0A111F" stroke={color} strokeWidth="2" />
          <text x="230" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="monospace" fontWeight="bold">
            {fwName} STANDARD
          </text>
        </svg>
      </div>

      {/* Bottom Panel Caption & Metadata */}
      <div className="z-10 pt-3 border-t border-slate-200 dark:border-navy-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-tight max-w-sm">
          {oneLiner}
        </p>
        <div className="flex items-center gap-1 text-[11px] font-mono text-teal-700 dark:text-teal-300 font-bold shrink-0">
          <CheckCircle2 className="h-3.5 w-3.5" /> Verified Mapping
        </div>
      </div>
    </motion.div>
  );
};

export const ProductMotifSvg: React.FC<{ slug: string }> = ({ slug }) => {
  // Stateful Interactivity for Heatmap Motif
  const [hoveredCell, setHoveredCell] = useState<{ l: number; i: number; score: number; label: string; risk: string } | null>(null);
  const [selectedNode, setSelectedNode] = useState<string>("rds");

  return (
    <div aria-hidden="true" className="relative w-full rounded-3xl border border-teal/30 bg-white/90 dark:bg-navy-900/90 p-3 sm:p-4 shadow-2xl backdrop-blur-xl flex flex-col items-center justify-center min-h-[360px] sm:min-h-[440px] transition-all duration-300 hover:border-teal/50 overflow-hidden">
      <svg
        aria-hidden="true"
        viewBox="0 0 460 345"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-full filter drop-shadow-2xl z-10"
      >
        {(slug === "risk-management" || slug === "risk-register") && (
          /* Pillar 1: Interactive 5x5 Heatmap Matrix Motif */
          <g>
            <rect x="10" y="10" width="440" height="325" rx="16" fill="#0A111F" stroke="#0F6E6A" strokeWidth="2" />
            <text x="35" y="36" fill="#0F6E6A" fontSize="13" fontFamily="monospace" fontWeight="bold">
              INTERACTIVE 5x5 RISK HEATMAP MATRIX
            </text>
            <text x="35" y="52" fill="#94A3B8" fontSize="9.5">
              Hover cells to calculate Likelihood × Impact scores in real time
            </text>

            {/* Column Headers (Impact 1 - 5) */}
            {["I1", "I2", "I3", "I4", "I5"].map((header, idx) => (
              <text
                key={idx}
                x={92 + idx * 70}
                y={68}
                textAnchor="middle"
                fill="#64748B"
                fontSize="9"
                fontFamily="monospace"
                fontWeight="bold"
              >
                {header}
              </text>
            ))}

            {/* Row Headers (Likelihood L5 - L1) */}
            {["L5", "L4", "L3", "L2", "L1"].map((header, idx) => (
              <text
                key={idx}
                x={44}
                y={96 + idx * 35}
                textAnchor="middle"
                fill="#64748B"
                fontSize="9"
                fontFamily="monospace"
                fontWeight="bold"
              >
                {header}
              </text>
            ))}

            {/* Matrix Axis Labels */}
            <text x="14" y="165" fill="#64748B" fontSize="8" fontFamily="monospace" fontWeight="bold" transform="rotate(-90 14 165)">
              LIKELIHOOD →
            </text>
            <text x="232" y="262" textAnchor="middle" fill="#64748B" fontSize="8" fontFamily="monospace" fontWeight="bold">
              IMPACT →
            </text>

            {/* Heatmap Grid Interactive Cells (25 Full Matrix Cells) */}
            <g transform="translate(60, 76)">
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
                  <g key={idx} className="cursor-pointer group">
                    <rect
                      x={x}
                      y={y}
                      width="64"
                      height="30"
                      rx="6"
                      fill={cell.fill}
                      opacity={hoveredCell?.score === cell.score && hoveredCell?.l === cell.l && hoveredCell?.i === cell.i ? 1.0 : 0.55}
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

            {/* Dynamic Calculated Score Tooltip Banner */}
            <g transform="translate(60, 275)">
              <rect x="0" y="0" width="344" height="42" rx="8" fill="#16233F" stroke="#0F6E6A" strokeWidth="1.5" />
              <text x="172" y="25" textAnchor="middle" fill="#60A5FA" fontSize="10" fontFamily="monospace" fontWeight="bold">
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
            <rect x="20" y="20" width="400" height="270" rx="16" fill="#0A111F" stroke="#3B82F6" strokeWidth="2" />
            <text x="40" y="48" fill="#3B82F6" fontSize="12" fontFamily="monospace" fontWeight="bold">
              ASSET &amp; PII DATA FLOW REPOSITORY
            </text>

            {/* Pulsing Connection Lines */}
            <line x1="140" y1="130" x2="280" y2="130" stroke="#0EA5E9" strokeWidth="2.5" strokeDasharray="6 6" />
            <line x1="140" y1="145" x2="210" y2="210" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="280" y1="145" x2="210" y2="210" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" />

            {/* Interactive Node 1: AWS RDS */}
            <g className="cursor-pointer" onClick={() => setSelectedNode("rds")}>
              <rect x="50" y="110" width="110" height="44" rx="10" fill="#16233F" stroke="#0EA5E9" strokeWidth="2" />
              <text x="105" y="132" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">AWS RDS Postgres</text>
              <text x="105" y="146" textAnchor="middle" fill="#38BDF8" fontSize="8" fontFamily="monospace">1.2M PII Records</text>
            </g>

            {/* Interactive Node 2: KMS Safeguard */}
            <g className="cursor-pointer" onClick={() => setSelectedNode("kms")}>
              <rect x="270" y="110" width="110" height="44" rx="10" fill="#16233F" stroke="#10B981" strokeWidth="2" />
              <text x="325" y="132" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">CTRL-088 (KMS)</text>
              <text x="325" y="146" textAnchor="middle" fill="#34D399" fontSize="8" fontFamily="monospace">Enforced Encryption</text>
            </g>

            {/* Interactive Node 3: PII Stream */}
            <g className="cursor-pointer" onClick={() => setSelectedNode("pii")}>
              <rect x="155" y="195" width="130" height="40" rx="10" fill="#16233F" stroke="#F59E0B" strokeWidth="2" />
              <text x="220" y="220" textAnchor="middle" fill="#F59E0B" fontSize="9" fontFamily="monospace" fontWeight="bold">
                PII Data Stream
              </text>
            </g>

            <rect x="50" y="250" width="330" height="28" rx="6" fill="#16233F" stroke="#3B82F6" strokeWidth="1" />
            <text x="215" y="268" textAnchor="middle" fill="#93C5FD" fontSize="9" fontFamily="monospace" fontWeight="bold">
              ✓ REAL-TIME ASSET &amp; SENSITIVE FLOW MAPPING
            </text>
          </g>
        )}

        {(slug === "audit-management" || slug === "control-mapping") && (
          /* Pillar 3: Interactive Advisory AI Control Mapper Motif */
          <g>
            <rect x="20" y="20" width="400" height="270" rx="16" fill="#0A111F" stroke="#8B5CF6" strokeWidth="2" />
            <text x="40" y="48" fill="#8B5CF6" fontSize="12" fontFamily="monospace" fontWeight="bold">
              AI CLAUSE MATCHING ENGINE
            </text>

            {/* Internal Control Node */}
            <rect x="40" y="90" width="130" height="70" rx="10" fill="#16233F" stroke="#0F6E6A" strokeWidth="2" />
            <text x="52" y="114" fill="#0F6E6A" fontSize="9" fontFamily="monospace" fontWeight="bold">CTRL-005 (Access)</text>
            <text x="52" y="132" fill="#94A3B8" fontSize="8">Quarterly User Access Review</text>
            <text x="52" y="148" fill="#34D399" fontSize="8" fontFamily="monospace">✓ Assigned Owner</text>

            {/* AI Advisory Core Node */}
            <circle cx="230" cy="125" r="26" fill="#8B5CF6" opacity="0.2" />
            <circle cx="230" cy="125" r="18" fill="#8B5CF6" />
            <text x="230" y="130" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold">AI</text>

            {/* AI Candidate Clause Output Cards */}
            <rect x="280" y="80" width="120" height="38" rx="8" fill="#16233F" stroke="#3B82F6" strokeWidth="1.5" />
            <text x="290" y="98" fill="#60A5FA" fontSize="9" fontWeight="bold">ISO 27001 A.9.2.5</text>
            <text x="290" y="111" fill="#93C5FD" fontSize="8" fontFamily="monospace">98% Match Confidence</text>

            <rect x="280" y="130" width="120" height="38" rx="8" fill="#16233F" stroke="#10B981" strokeWidth="1.5" />
            <text x="290" y="148" fill="#34D399" fontSize="9" fontWeight="bold">SOC 2 CC6.1</text>
            <text x="290" y="161" fill="#A7F3D0" fontSize="8" fontFamily="monospace">95% Match Confidence</text>

            <line x1="170" y1="125" x2="204" y2="125" stroke="#8B5CF6" strokeWidth="2.5" />
            <line x1="256" y1="115" x2="280" y2="100" stroke="#3B82F6" strokeWidth="2" />
            <line x1="256" y1="135" x2="280" y2="150" stroke="#10B981" strokeWidth="2" />

            {/* Human Signoff Status Indicator */}
            <rect x="40" y="195" width="360" height="42" rx="10" fill="#16233F" stroke="#10B981" strokeWidth="1.5" />
            <text x="220" y="221" textAnchor="middle" fill="#34D399" fontSize="10" fontFamily="monospace" fontWeight="bold">
              ✓ MANDATORY HUMAN ANALYST APPROVAL ENFORCED
            </text>
          </g>
        )}

        {(slug === "policy-management" || slug === "compliance-board") && (
          /* Pillar 4: Interactive Compliance Testing Board Motif */
          <g>
            <rect x="20" y="20" width="400" height="270" rx="16" fill="#0A111F" stroke="#10B981" strokeWidth="2" />
            <text x="40" y="48" fill="#10B981" fontSize="12" fontFamily="monospace" fontWeight="bold">
              COMPLIANCE TESTING BOARD (30/60/90 DAYS)
            </text>

            {/* Kanban Columns */}
            <rect x="40" y="70" width="110" height="175" rx="10" fill="#16233F" opacity="0.85" />
            <text x="50" y="92" fill="#10B981" fontSize="9" fontFamily="monospace" fontWeight="bold">30 DAYS DUE</text>
            <rect x="46" y="104" width="98" height="50" rx="6" fill="#0A111F" stroke="#10B981" strokeWidth="1.5" />
            <text x="54" y="122" fill="#FFFFFF" fontSize="8" fontWeight="bold">MFA Config Audit</text>
            <text x="54" y="136" fill="#34D399" fontSize="8" fontFamily="monospace">Owner: Security</text>

            <rect x="165" y="70" width="110" height="175" rx="10" fill="#16233F" opacity="0.85" />
            <text x="175" y="92" fill="#F59E0B" fontSize="9" fontFamily="monospace" fontWeight="bold">60 DAYS DUE</text>
            <rect x="171" y="104" width="98" height="50" rx="6" fill="#0A111F" stroke="#F59E0B" strokeWidth="1.5" />
            <text x="179" y="122" fill="#FFFFFF" fontSize="8" fontWeight="bold">SOC 2 Review</text>
            <text x="179" y="136" fill="#FBBF24" fontSize="8" fontFamily="monospace">Owner: GRC Lead</text>

            <rect x="290" y="70" width="110" height="175" rx="10" fill="#16233F" opacity="0.85" />
            <text x="300" y="92" fill="#3B82F6" fontSize="9" fontFamily="monospace" fontWeight="bold">90 DAYS DUE</text>
            <rect x="296" y="104" width="98" height="50" rx="6" fill="#0A111F" stroke="#3B82F6" strokeWidth="1.5" />
            <text x="304" y="122" fill="#FFFFFF" fontSize="8" fontWeight="bold">DRP Simulation</text>
            <text x="304" y="136" fill="#93C5FD" fontSize="8" fontFamily="monospace">Owner: DevOps</text>
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
    <div aria-hidden="true" className="relative w-full rounded-3xl border border-teal/30 bg-white/80 dark:bg-navy-900/80 p-4 sm:p-6 shadow-2xl backdrop-blur-xl flex items-center justify-center min-h-[280px] sm:min-h-[360px] transition-all duration-300 hover:border-teal/50">
      <svg
        aria-hidden="true"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[360px] drop-shadow-2xl"
      >
        <rect x="40" y="40" width="320" height="220" rx="16" fill="#0A111F" stroke="#0F6E6A" strokeWidth="2" />
        <text x="60" y="75" fill="#F59E0B" fontSize="11" fontFamily="monospace" fontWeight="bold">
          TAILORED WORKFLOW MATURITY
        </text>

        {/* Tier Cards */}
        <rect x="70" y="100" width="260" height="40" rx="8" fill="#16233F" stroke="#0F6E6A" strokeWidth="1.5" />
        <text x="85" y="124" fill="#FFFFFF" fontSize="10" fontWeight="bold">Stage 1: Single Risk &amp; Control Layer</text>

        <rect x="70" y="150" width="260" height="40" rx="8" fill="#16233F" stroke="#3B82F6" strokeWidth="1.5" />
        <text x="85" y="174" fill="#FFFFFF" fontSize="10" fontWeight="bold">Stage 2: Multi-Standard Cross-Mapping</text>

        <rect x="70" y="200" width="260" height="40" rx="8" fill="#16233F" stroke="#10B981" strokeWidth="1.5" />
        <text x="85" y="224" fill="#FFFFFF" fontSize="10" fontWeight="bold">Stage 3: Continuous Rolling Testing</text>
      </svg>
    </div>
  );
};

export const PricingMotif: React.FC = () => {
  return (
    <div aria-hidden="true" className="relative w-full rounded-3xl border border-teal/30 bg-white/80 dark:bg-navy-900/80 p-4 sm:p-6 shadow-2xl backdrop-blur-xl flex items-center justify-center min-h-[280px] sm:min-h-[360px] transition-all duration-300 hover:border-teal/50">
      <svg
        aria-hidden="true"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[360px] drop-shadow-2xl"
      >
        <rect x="40" y="40" width="320" height="220" rx="16" fill="#0A111F" stroke="#0F6E6A" strokeWidth="2" />
        <text x="60" y="70" fill="#0F6E6A" fontSize="11" fontFamily="monospace" fontWeight="bold">
          TRANSPARENT TIERED PACKAGING
        </text>

        {/* 3 Tier Stacks */}
        <rect x="60" y="100" width="80" height="130" rx="8" fill="#16233F" stroke="#3B82F6" strokeWidth="1" />
        <text x="100" y="125" textAnchor="middle" fill="#60A5FA" fontSize="10" fontWeight="bold">Starter</text>
        <text x="100" y="150" textAnchor="middle" fill="#94A3B8" fontSize="8">1 Framework</text>

        <rect x="160" y="90" width="80" height="145" rx="8" fill="#16233F" stroke="#0F6E6A" strokeWidth="2" />
        <rect x="175" y="98" width="50" height="14" rx="7" fill="#0F6E6A" />
        <text x="200" y="108" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold">POPULAR</text>
        <text x="200" y="130" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">Growth</text>
        <text x="200" y="155" textAnchor="middle" fill="#94A3B8" fontSize="8">Multi-Framework</text>

        <rect x="260" y="100" width="80" height="130" rx="8" fill="#16233F" stroke="#8B5CF6" strokeWidth="1" />
        <text x="300" y="125" textAnchor="middle" fill="#C084FC" fontSize="10" fontWeight="bold">Scale</text>
        <text x="300" y="150" textAnchor="middle" fill="#94A3B8" fontSize="8">All 6 Standards</text>
      </svg>
    </div>
  );
};

export const GenericHeroMotifSvg: React.FC<{ type: "about" | "demo" | "contact" | "blog" | "vault" }> = ({ type }) => {
  return (
    <div aria-hidden="true" className="relative w-full rounded-3xl border border-teal/30 bg-white/80 dark:bg-navy-900/80 p-4 sm:p-6 shadow-2xl backdrop-blur-xl flex items-center justify-center min-h-[280px] sm:min-h-[360px] transition-all duration-300 hover:border-teal/50">
      <svg
        aria-hidden="true"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[360px] drop-shadow-2xl"
      >
        <rect x="40" y="40" width="320" height="220" rx="16" fill="#0A111F" stroke="#0F6E6A" strokeWidth="2" />

        {type === "about" && (
          <g>
            <text x="60" y="70" fill="#0F6E6A" fontSize="11" fontFamily="monospace" fontWeight="bold">
              CONNECTED GRC OPERATING SYSTEM
            </text>
            <circle cx="200" cy="150" r="45" fill="#16233F" stroke="#0F6E6A" strokeWidth="2" />
            <circle cx="120" cy="110" r="22" fill="#16233F" stroke="#3B82F6" strokeWidth="1.5" />
            <circle cx="280" cy="110" r="22" fill="#16233F" stroke="#8B5CF6" strokeWidth="1.5" />
            <circle cx="120" cy="190" r="22" fill="#16233F" stroke="#10B981" strokeWidth="1.5" />
            <circle cx="280" cy="190" r="22" fill="#16233F" stroke="#F59E0B" strokeWidth="1.5" />

            <line x1="140" y1="120" x2="165" y2="135" stroke="#3B82F6" strokeWidth="1.5" />
            <line x1="260" y1="120" x2="235" y2="135" stroke="#8B5CF6" strokeWidth="1.5" />
            <line x1="140" y1="180" x2="165" y2="165" stroke="#10B981" strokeWidth="1.5" />
            <line x1="260" y1="180" x2="235" y2="165" stroke="#F59E0B" strokeWidth="1.5" />
            <text x="200" y="154" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">OMNiGRC</text>
          </g>
        )}

        {type === "demo" && (
          <g>
            <text x="60" y="70" fill="#F59E0B" fontSize="11" fontFamily="monospace" fontWeight="bold">
              INTERACTIVE DEMO WALKTHROUGH
            </text>
            <rect x="80" y="95" width="240" height="135" rx="10" fill="#16233F" stroke="#0F6E6A" strokeWidth="1.5" />
            <circle cx="200" cy="150" r="24" fill="#0F6E6A" />
            <polygon points="195,140 212,150 195,160" fill="#FFFFFF" />
            <text x="200" y="200" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="monospace">
              Tailored to Your Target Frameworks
            </text>
          </g>
        )}

        {type === "contact" && (
          <g>
            <text x="60" y="70" fill="#3B82F6" fontSize="11" fontFamily="monospace" fontWeight="bold">
              DIRECT SPECIALIST CONNECT
            </text>
            <rect x="90" y="105" width="220" height="120" rx="12" fill="#16233F" stroke="#3B82F6" strokeWidth="1.5" />
            <path d="M100 120 L200 170 L300 120" stroke="#3B82F6" strokeWidth="2" fill="none" />
            <text x="200" y="200" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">
              GRC Architecture Team
            </text>
          </g>
        )}

        {type === "blog" && (
          <g>
            <text x="60" y="70" fill="#8B5CF6" fontSize="11" fontFamily="monospace" fontWeight="bold">
              PRACTICAL GRC INSIGHTS
            </text>
            <rect x="80" y="95" width="110" height="130" rx="8" fill="#16233F" stroke="#8B5CF6" strokeWidth="1.5" />
            <rect x="210" y="95" width="110" height="130" rx="8" fill="#16233F" stroke="#0EA5E9" strokeWidth="1.5" />
            <line x1="95" y1="120" x2="175" y2="120" stroke="#8B5CF6" strokeWidth="2" />
            <line x1="95" y1="135" x2="160" y2="135" stroke="#94A3B8" strokeWidth="1" />
            <line x1="225" y1="120" x2="305" y2="120" stroke="#0EA5E9" strokeWidth="2" />
            <line x1="225" y1="135" x2="290" y2="135" stroke="#94A3B8" strokeWidth="1" />
          </g>
        )}

        {type === "vault" && (
          <g>
            <text x="60" y="70" fill="#10B981" fontSize="11" fontFamily="monospace" fontWeight="bold">
              TRUST &amp; RESOURCE VAULT
            </text>
            <rect x="110" y="100" width="180" height="120" rx="12" fill="#16233F" stroke="#10B981" strokeWidth="2" />
            <circle cx="200" cy="150" r="25" fill="#0A111F" stroke="#10B981" strokeWidth="2" />
            <rect x="195" y="145" width="10" height="14" rx="2" fill="#10B981" />
            <text x="200" y="198" textAnchor="middle" fill="#A7F3D0" fontSize="9" fontFamily="monospace" fontWeight="bold">
              Audit-Ready Evidence Vault
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

