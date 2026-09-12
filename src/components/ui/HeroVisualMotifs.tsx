"use client";

import React, { useState } from "react";
import Image from "next/image";
import { getFrameworkBySlug, FRAMEWORKS } from "@/lib/frameworks";

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
  // CRITICAL: Pull accentColor directly from frameworks.ts single source of truth
  const fw = getFrameworkBySlug(slug);
  const color = accentColor || fw?.accentColor || "#0F6E6A";
  const fwName = fw?.code || "FRAMEWORK";

  return (
    <div aria-hidden="true" className="relative w-full rounded-3xl border border-teal/30 bg-white/80 dark:bg-navy-900/80 p-4 sm:p-6 shadow-2xl backdrop-blur-xl flex items-center justify-center min-h-[280px] sm:min-h-[360px] transition-all duration-300 hover:border-teal/50">
      <svg
        aria-hidden="true"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[360px] drop-shadow-2xl"
      >
        <defs>
          <linearGradient id={`fw-grad-${slug}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0A111F" stopOpacity="0.8" />
          </linearGradient>
          <filter id={`glow-${slug}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Shield Boundary */}
        <path
          d="M200 40 L310 80 V170 C310 230 200 270 200 270 C200 270 90 230 90 170 V80 L200 40 Z"
          fill={`url(#fw-grad-${slug})`}
          stroke={color}
          strokeWidth="2"
          filter={`url(#glow-${slug})`}
        />

        {/* Inner Structure Nodes */}
        <circle cx="200" cy="140" r="45" fill="#0A111F" stroke={color} strokeWidth="2.5" />
        <path d="M185 140 L195 150 L218 127" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        {/* Orbiting Clause Nodes */}
        <circle cx="130" cy="100" r="14" fill="#16233F" stroke="#3B82F6" strokeWidth="1.5" />
        <text x="130" y="103" textAnchor="middle" fill="#93C5FD" fontSize="8" fontFamily="monospace" fontWeight="bold">A.5</text>
        <line x1="144" y1="107" x2="165" y2="123" stroke="#3B82F6" strokeWidth="1" strokeDasharray="3 3" />

        <circle cx="270" cy="100" r="14" fill="#16233F" stroke="#8B5CF6" strokeWidth="1.5" />
        <text x="270" y="103" textAnchor="middle" fill="#DDD6FE" fontSize="8" fontFamily="monospace" fontWeight="bold">CC6</text>
        <line x1="256" y1="107" x2="235" y2="123" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="3 3" />

        <circle cx="200" cy="215" r="14" fill="#16233F" stroke="#10B981" strokeWidth="1.5" />
        <text x="200" y="218" textAnchor="middle" fill="#A7F3D0" fontSize="8" fontFamily="monospace" fontWeight="bold">Sec8</text>
        <line x1="200" y1="185" x2="200" y2="201" stroke="#10B981" strokeWidth="1" strokeDasharray="3 3" />

        {/* Framework Code Badge */}
        <rect x="145" y="15" width="110" height="24" rx="12" fill="#0A111F" stroke={color} strokeWidth="1.5" />
        <text x="200" y="31" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold">
          {fwName}
        </text>
      </svg>
    </div>
  );
};

export const ProductMotifSvg: React.FC<{ slug: string }> = ({ slug }) => {
  return (
    <div aria-hidden="true" className="relative w-full rounded-3xl border border-teal/30 bg-white/80 dark:bg-navy-900/80 p-4 sm:p-6 shadow-2xl backdrop-blur-xl flex items-center justify-center min-h-[280px] sm:min-h-[360px] transition-all duration-300 hover:border-teal/50">
      <svg
        aria-hidden="true"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[360px] drop-shadow-2xl"
      >
        {(slug === "risk-management" || slug === "risk-register") && (
          /* Pillar 1: 5x5 Heatmap Matrix Motif */
          <g>
            <rect x="40" y="40" width="320" height="220" rx="16" fill="#0A111F" stroke="#0F6E6A" strokeWidth="2" />
            <text x="60" y="70" fill="#0F6E6A" fontSize="11" fontFamily="monospace" fontWeight="bold">
              5x5 LIKELIHOOD x IMPACT MATRIX
            </text>

            {/* Matrix Grid Cells */}
            <g transform="translate(60, 90)">
              <rect x="0" y="0" width="48" height="28" rx="4" fill="#0F6E6A" opacity="0.3" />
              <rect x="54" y="0" width="48" height="28" rx="4" fill="#0F6E6A" opacity="0.4" />
              <rect x="108" y="0" width="48" height="28" rx="4" fill="#B5750A" opacity="0.5" />
              <rect x="162" y="0" width="48" height="28" rx="4" fill="#F59E0B" opacity="0.6" />
              <rect x="216" y="0" width="48" height="28" rx="4" fill="#EF4444" opacity="0.7" />

              <rect x="0" y="34" width="48" height="28" rx="4" fill="#0F6E6A" opacity="0.3" />
              <rect x="54" y="34" width="48" height="28" rx="4" fill="#B5750A" opacity="0.5" />
              <rect x="108" y="34" width="48" height="28" rx="4" fill="#B5750A" opacity="0.6" />
              <rect x="162" y="34" width="48" height="28" rx="4" fill="#EF4444" opacity="0.7" />
              <rect x="216" y="34" width="48" height="28" rx="4" fill="#EF4444" opacity="0.9" />

              <rect x="0" y="68" width="48" height="28" rx="4" fill="#0F6E6A" opacity="0.2" />
              <rect x="54" y="68" width="48" height="28" rx="4" fill="#0F6E6A" opacity="0.3" />
              <rect x="108" y="68" width="48" height="28" rx="4" fill="#B5750A" opacity="0.4" />
              <rect x="162" y="68" width="48" height="28" rx="4" fill="#B5750A" opacity="0.6" />
              <rect x="216" y="68" width="48" height="28" rx="4" fill="#F59E0B" opacity="0.7" />
            </g>

            {/* Active Risk Score Pin */}
            <circle cx="230" cy="138" r="8" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2" />
            <text x="230" y="180" textAnchor="middle" fill="#F59E0B" fontSize="10" fontFamily="monospace" fontWeight="bold">
              RSK-042 (Mitigated)
            </text>
          </g>
        )}

        {(slug === "continuous-monitoring" || slug === "asset-inventory") && (
          /* Pillar 2: Asset & PII Data Flow Graph Motif */
          <g>
            <rect x="40" y="40" width="320" height="220" rx="16" fill="#0A111F" stroke="#3B82F6" strokeWidth="2" />
            <text x="60" y="70" fill="#3B82F6" fontSize="11" fontFamily="monospace" fontWeight="bold">
              ASSET ↔ PII DATA FLOW GRAPH
            </text>

            {/* Nodes */}
            <rect x="70" y="110" width="90" height="40" rx="8" fill="#16233F" stroke="#0EA5E9" strokeWidth="1.5" />
            <text x="115" y="134" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">AWS RDS Postgres</text>

            <rect x="240" y="110" width="90" height="40" rx="8" fill="#16233F" stroke="#10B981" strokeWidth="1.5" />
            <text x="285" y="134" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">CTRL-088 (KMS)</text>

            <rect x="155" y="190" width="90" height="36" rx="8" fill="#16233F" stroke="#F59E0B" strokeWidth="1.5" />
            <text x="200" y="212" textAnchor="middle" fill="#F59E0B" fontSize="8" fontFamily="monospace" fontWeight="bold">PII Data Stream</text>

            {/* Flow lines */}
            <line x1="160" y1="130" x2="240" y2="130" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="115" y1="150" x2="175" y2="190" stroke="#F59E0B" strokeWidth="1.5" />
            <line x1="285" y1="150" x2="225" y2="190" stroke="#10B981" strokeWidth="1.5" />
          </g>
        )}

        {(slug === "audit-management" || slug === "control-mapping") && (
          /* Pillar 3: Advisory AI Control Mapper Motif */
          <g>
            <rect x="40" y="40" width="320" height="220" rx="16" fill="#0A111F" stroke="#8B5CF6" strokeWidth="2" />
            <text x="60" y="70" fill="#8B5CF6" fontSize="11" fontFamily="monospace" fontWeight="bold">
              AI CLAUSE MATCHING ENGINE
            </text>

            {/* Internal Control Box */}
            <rect x="60" y="100" width="120" height="60" rx="10" fill="#16233F" stroke="#0F6E6A" strokeWidth="1.5" />
            <text x="70" y="122" fill="#0F6E6A" fontSize="8" fontFamily="monospace" fontWeight="bold">INTERNAL CTRL-005</text>
            <text x="70" y="140" fill="#94A3B8" fontSize="8">Quarterly Access Review</text>

            {/* AI Router Node */}
            <circle cx="230" cy="130" r="22" fill="#8B5CF6" opacity="0.2" />
            <circle cx="230" cy="130" r="14" fill="#8B5CF6" />
            <text x="230" y="133" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold">AI</text>

            {/* Matched Clauses */}
            <rect x="270" y="95" width="80" height="30" rx="6" fill="#16233F" stroke="#3B82F6" strokeWidth="1" />
            <text x="278" y="113" fill="#60A5FA" fontSize="8" fontWeight="bold">ISO 27001 (98%)</text>

            <rect x="270" y="135" width="80" height="30" rx="6" fill="#16233F" stroke="#10B981" strokeWidth="1" />
            <text x="278" y="153" fill="#34D399" fontSize="8" fontWeight="bold">SOC 2 (95%)</text>

            <line x1="180" y1="130" x2="216" y2="130" stroke="#8B5CF6" strokeWidth="2" />
            <line x1="244" y1="120" x2="270" y2="110" stroke="#3B82F6" strokeWidth="1.5" />
            <line x1="244" y1="140" x2="270" y2="150" stroke="#10B981" strokeWidth="1.5" />

            <text x="200" y="210" textAnchor="middle" fill="#34D399" fontSize="9" fontFamily="monospace" fontWeight="bold">
              ✓ MANDATORY HUMAN APPROVAL
            </text>
          </g>
        )}

        {(slug === "policy-management" || slug === "compliance-board") && (
          /* Pillar 4: Compliance Testing Board Motif */
          <g>
            <rect x="40" y="40" width="320" height="220" rx="16" fill="#0A111F" stroke="#10B981" strokeWidth="2" />
            <text x="60" y="70" fill="#10B981" fontSize="11" fontFamily="monospace" fontWeight="bold">
              COMPLIANCE TESTING BOARD (30/60/90d)
            </text>

            {/* Kanban Columns */}
            <rect x="60" y="90" width="80" height="140" rx="8" fill="#16233F" opacity="0.8" />
            <text x="70" y="110" fill="#10B981" fontSize="8" fontFamily="monospace" fontWeight="bold">30 DAYS DUE</text>
            <rect x="66" y="120" width="68" height="40" rx="4" fill="#0A111F" stroke="#10B981" strokeWidth="1" />
            <text x="72" y="136" fill="#FFFFFF" fontSize="7" fontWeight="bold">MFA Config Test</text>

            <rect x="160" y="90" width="80" height="140" rx="8" fill="#16233F" opacity="0.8" />
            <text x="170" y="110" fill="#F59E0B" fontSize="8" fontFamily="monospace" fontWeight="bold">60 DAYS DUE</text>
            <rect x="166" y="120" width="68" height="40" rx="4" fill="#0A111F" stroke="#F59E0B" strokeWidth="1" />
            <text x="172" y="136" fill="#FFFFFF" fontSize="7" fontWeight="bold">SOC 2 Check</text>

            <rect x="260" y="90" width="80" height="140" rx="8" fill="#16233F" opacity="0.8" />
            <text x="270" y="110" fill="#3B82F6" fontSize="8" fontFamily="monospace" fontWeight="bold">90 DAYS DUE</text>
            <rect x="266" y="120" width="68" height="40" rx="4" fill="#0A111F" stroke="#3B82F6" strokeWidth="1" />
            <text x="272" y="136" fill="#FFFFFF" fontSize="7" fontWeight="bold">DRP Simulation</text>
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
        <text x="85" y="124" fill="#FFFFFF" fontSize="10" fontWeight="bold">Stage 1: Single Risk & Control Layer</text>

        <rect x="70" y="150" width="260" height="40" rx="8" fill="#16233F" stroke="#3B82F6" strokeWidth="1.5" />
        <text x="85" y="174" fill="#FFFFFF" fontSize="10" fontWeight="bold">Stage 2: Multi-Standard Alignment</text>

        <rect x="70" y="200" width="260" height="40" rx="8" fill="#16233F" stroke="#8B5CF6" strokeWidth="1.5" />
        <text x="85" y="224" fill="#FFFFFF" fontSize="10" fontWeight="bold">Stage 3: Enterprise Regional Governance</text>
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

