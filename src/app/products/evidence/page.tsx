import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EvidenceTable } from "@/components/workflows/EvidenceTable";
import {
  FolderLock,
  Database,
  Verified,
  Calendar,
  BookOpen,
  Lock,
  Info,
  AlertOctagon,
  CheckCircle,
  Link as LinkIcon,
  Bot,
  CalendarDays,
  Badge,
  CheckSquare,
  Eye,
  HelpCircle,
  ShieldCheck,
  History,
  Circle,
  CheckCircle2,
  XCircle,
  Cloud,
  Shield,
  ArrowRight,
  Network
} from "lucide-react";

export const metadata: Metadata = {
  title: "Evidence Governance — OMNiGRC Connected Workflows",
  description: "Connect external proof without binary lock-in. Maintain an auditable, structured index of production proof and cloud telemetry.",
};

export default function EvidencePage() {
  return (
    <div className="min-h-screen bg-[#faf8ff] dark:bg-[#0A111F] text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />
      <main className="flex-1 w-full pt-16 bg-transparent min-h-screen">
<div className="flex flex-col w-full">
{/*  Subtle decorative ambient backdrop elements  */}
<div className="relative w-full overflow-hidden">
<div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-100/20 dark:bg-teal-900/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
<div className="absolute top-48 left-10 w-80 h-80 bg-amber-600 dark:bg-amber-500-fixed/25 rounded-full blur-3xl pointer-events-none -z-10"></div>
{/*  Top Workflow Header & Breadcrumb Context Bar  */}
<section className="max-w-7xl mx-auto px-gutter pt-space-lg pb-space-sm w-full">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-space-md">
<div className="flex items-center gap-2 flex-wrap font-mono text-xs text-slate-600 dark:text-slate-300"><span className="inline-flex items-center gap-1 font-bold text-teal-600 dark:text-teal-400"><Circle className="h-5 w-5 shrink-0" /> WORKFLOWS</span><span className="text-slate-900 dark:text-white font-semibold">/</span><span className="text-slate-900 dark:text-white font-bold">EVIDENCE GOVERNANCE</span><span className="text-slate-900 dark:text-white font-semibold">/</span><span className="text-slate-900 dark:text-white font-medium bg-slate-200 dark:bg-navy-700 px-1.5 py-0.5 rounded text-code-sm">/products/evidence</span></div>
<div className="flex items-center gap-2 flex-wrap">
<span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-amber-600 dark:bg-amber-500 text-white font-mono text-xs font-semibold tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-amber-100 dark:bg-amber-900/40 animate-pulse"></span>
            LIVE EVIDENCE INDEX
          </span>
<span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white font-mono text-xs font-medium">
<Database className="h-5 w-5 shrink-0" />
            APPEND-ONLY POSTGRESQL TIMELINE
          </span>
</div>
</div>
</section>
{/*  Hero Section: Title, Subtitle, Direct CTAs, and Visual Trust Metrics  */}
<section className="max-w-7xl mx-auto px-gutter pb-16 md:pb-24 w-full bg-grid-mesh-adaptive">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<div className="lg:col-span-8 flex flex-col">
<div className="inline-flex items-center gap-2 w-max mb-4 px-space-sm py-1 rounded-full bg-slate-200 dark:bg-navy-700 text-teal-600 dark:text-teal-400 text-xs uppercase tracking-wider">
<CheckCircle2 className="h-5 w-5 shrink-0" />
            Zero Proprietary Binary Storage Lock-In
          </div>
<h1 className="text-4xl text-slate-900 dark:text-white tracking-tight mb-6">
            Evidence References &amp; Records: Connect external proof without binary lock-in.
          </h1>
<p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed mb-8">
            Maintain an auditable, structured index of production proof, cloud telemetry references, and external workpaper links. Point directly to your existing systems of record—AWS, Okta, GitHub, Jira—while preserving complete clear chain of custody for external auditors.
          </p>
<div className="flex flex-wrap items-center gap-6">
<a className="inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-teal-600 dark:bg-teal-500-container text-white-container text-sm font-semibold hover:bg-teal-600 dark:bg-teal-500 transition-all duration-150 shadow-md" data-path="request-a-demo" href="#">
<Circle className="h-5 w-5 shrink-0" />
<span>Schedule Walkthrough</span>
</a>
<a className="inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-white dark:bg-[#0A111F] text-slate-900 dark:text-white text-sm font-semibold hover:bg-slate-50 dark:bg-[#16233F] transition-all duration-150 shadow-sm" data-path="business-audits" href="#">
<Circle className="h-5 w-5 shrink-0" />
<span>Explore Audit Workpapers →</span>
</a>
<div className="flex items-center gap-2 pl-space-sm font-mono text-xs text-slate-600 dark:text-slate-300">
<Lock className="h-5 w-5 shrink-0" />
<span>RFC 3339 Timestamped</span>
</div>
</div>
</div>
{/*  Technical Telemetry / Status Pill Snapshot  */}
<div className="lg:col-span-4 w-full flex flex-col gap-6">
<div className="p-8 rounded-xl bg-slate-900 dark:bg-black text-white shadow-xl relative overflow-hidden"><div className="flex items-center justify-between pb-space-sm mb-4 border-b border-surface-container-lowest/10"><div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-amber-100 dark:bg-amber-900/40"></span><span className="font-mono text-xs text-amber-600 dark:text-amber-500-container font-bold uppercase tracking-wider">INDEX STATE ENGINE</span></div><span className="font-mono text-xs text-white font-semibold bg-white dark:bg-[#0A111F]/10 px-2 py-0.5 rounded">pg_crypto::v14</span></div><div className="space-y-space-xs font-mono text-xs mb-6"><div className="flex justify-between items-center py-0.5"><span className="text-white font-medium">Active Tracked Pointers:</span><span className="text-surface-container-lowest font-bold">142 validated</span></div><div className="flex justify-between items-center py-0.5"><span className="text-white font-medium">External Evidence Pointers:</span><span className="text-amber-600 dark:text-amber-500-container font-bold">Verified Reference</span></div><div className="flex justify-between items-center py-0.5"><span className="text-white font-medium">Direct Binaries Ingested:</span><span className="text-amber-600 dark:text-amber-500-container font-bold bg-amber-100 dark:bg-amber-900/40/20 px-1.5 py-0.5 rounded">0 bytes (Isolated)</span></div><div className="flex justify-between items-center py-0.5"><span className="text-white font-medium">Human Custodian Sign-Off:</span><span className="text-surface-container-lowest font-bold">100% Required</span></div></div><div className="pt-space-xs text-white text-body-sm font-body-sm bg-white dark:bg-[#0A111F]/10 p-4 rounded-lg flex items-start gap-2"><Circle className="h-5 w-5 shrink-0" /><span className="leading-relaxed"><strong className="text-surface-container-lowest">"AI assists. Humans decide."</strong> Advisory AI correlates telemetry; human compliance officers explicitly approve validity.</span></div></div>
{/*  Fast Stat Cards 2x2 Grid  */}
<div className="grid grid-cols-2 gap-4">
<div className="p-6 rounded-xl bg-slate-50 dark:bg-[#16233F] shadow-sm">
<div className="font-headline-md text-headline-md font-bold text-teal-600 dark:text-teal-400 mb-0.5">100%</div>
<div className="text-xs text-slate-900 dark:text-white font-semibold">External Pointers</div>
<div className="text-sm text-slate-600 dark:text-slate-300">Zero proprietary binary lock-in</div>
</div>
<div className="p-6 rounded-xl bg-slate-50 dark:bg-[#16233F] shadow-sm">
<div className="font-headline-md text-headline-md font-bold text-amber-600 dark:text-amber-500 mb-0.5">AUDIT</div>
<div className="text-xs text-slate-900 dark:text-white font-semibold">Structured Event History</div>
<div className="text-sm text-slate-600 dark:text-slate-300">Structured application logging</div>
</div>
<div className="p-6 rounded-xl bg-slate-50 dark:bg-[#16233F] shadow-sm">
<div className="font-headline-md text-headline-md font-bold text-slate-900 dark:text-white mb-0.5">1 : N</div>
<div className="text-xs text-slate-900 dark:text-white font-semibold">Control Reuse</div>
<div className="text-sm text-slate-600 dark:text-slate-300">Map 1 proof to SOC2, ISO, HIPAA</div>
</div>
<div className="p-6 rounded-xl bg-slate-50 dark:bg-[#16233F] shadow-sm">
<div className="font-headline-md text-headline-md font-bold text-teal-600 dark:text-teal-400-container mb-0.5">Scoped</div>
<div className="text-xs text-slate-900 dark:text-white font-semibold">Auditor Read-Only</div>
<div className="text-sm text-slate-600 dark:text-slate-300">Time-bounded workpapers</div>
</div>
</div>
</div>
</div>
</section>
{/*  Problem Contrast Section: Heavyweight Binaries vs OMNiGRC Pointer Architecture  */}
<section className="max-w-7xl mx-auto px-gutter pb-16 md:pb-24 w-full">
<div className="text-center max-w-3xl mx-auto mb-8">
<span className="text-xs text-teal-600 dark:text-teal-400 uppercase tracking-wider font-bold">Architectural Principle</span>
<h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white mt-1">
          Why Centralized Binary Upload Vaults Fail Modern Security
        </h2>
<p className="text-base text-slate-600 dark:text-slate-300 mt-2">
          Storing duplicate corporate files in a multi-tenant compliance vendor's database creates unmanageable attack surfaces, version drift, and massive migration overhead.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{/*  Legacy Way  */}
<div className="p-8 rounded-xl bg-white dark:bg-[#0A111F] shadow-md flex flex-col justify-between">
<div>
<div className="inline-flex items-center gap-2 px-space-sm py-1 rounded-md bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-xs font-semibold mb-6">
<Circle className="h-5 w-5 shrink-0" />
              Traditional Heavyweight GRC Binary Uploads
            </div>
<h3 className="text-xl text-slate-900 dark:text-white mb-4">
              Duplicate PDFs, Data Leaks &amp; Orphaned Files
            </h3>
<ul className="space-y-space-sm text-base text-slate-600 dark:text-slate-300">
<li className="flex items-start gap-2">
<XCircle className="h-5 w-5 shrink-0" />
<span><strong>Security &amp; Data Leak Exposure:</strong> Uploading sensitive production logs, IAM dumps, and architecture diagrams into a 3rd party vendor database increases corporate blast radius.</span>
</li>
<li className="flex items-start gap-2">
<XCircle className="h-5 w-5 shrink-0" />
<span><strong>Instant Version Drift:</strong> The moment a PDF or screenshot is uploaded, it is severed from live AWS, Okta, or Jira repositories, becoming obsolete within hours.</span>
</li>
<li className="flex items-start gap-2">
<XCircle className="h-5 w-5 shrink-0" />
<span><strong>High-Friction Manual Toil:</strong> Engineers spend hundreds of hours manually downloading screenshots from cloud dashboards just to drag-and-drop into bloated compliance tools.</span>
</li>
</ul>
</div>
<div className="mt-6 pt-6 bg-slate-200 dark:bg-navy-700/40 p-4 rounded-lg font-mono text-xs text-slate-600 dark:text-slate-300">
            Result: Costly vendor file lock-in, data sovereignty violations, and unverified point-in-time claims.
          </div>
</div>
{/*  The OMNiGRC Way  */}
<div className="p-8 rounded-xl bg-slate-50 dark:bg-[#16233F] shadow-md flex flex-col justify-between">
<div>
<div className="inline-flex items-center gap-2 px-space-sm py-1 rounded-md bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-xs font-semibold mb-6">
<CheckCircle2 className="h-5 w-5 shrink-0" />
              OMNiGRC External Pointer &amp; Reference Layer
            </div>
<h3 className="text-xl text-slate-900 dark:text-white mb-4">
              Point Directly to Authoritative Systems of Record
            </h3>
<ul className="space-y-space-sm text-base text-slate-600 dark:text-slate-300">
<li className="flex items-start gap-2">
<CheckCircle2 className="h-5 w-5 shrink-0" />
<span><strong>Zero Binary Data Migration:</strong> Proof lives safely inside your customer-owned AWS S3 buckets, Okta system logs, GitHub commits, and internal Confluence spaces.</span>
</li>
<li className="flex items-start gap-2">
<CheckCircle2 className="h-5 w-5 shrink-0" />
<span><strong>External Payload Tracking:</strong> OMNiGRC registers external reference URLs and pointer metadata. Any drift or unapproved change is logged in the structured application event log.</span>
</li>
<li className="flex items-start gap-2">
<CheckCircle2 className="h-5 w-5 shrink-0" />
<span><strong>Automated Cadence Lifecycles:</strong> Directly linked to Compliance Board review intervals (30/60/90 days or Continuous), alerting owners when evidence freshness expires.</span>
</li>
</ul>
</div>
<div className="mt-6 pt-6 bg-amber-600 dark:bg-amber-500/10 p-4 rounded-lg font-mono text-xs text-amber-600 dark:text-amber-500 font-semibold">
            Outcome: Seamless external auditor review via read-only workpapers while zero raw binaries ever leave your control.
          </div>
</div>
</div>
</section>
{/*  Visual Pipeline: Core Evidence Workflow Architecture  */}
<section className="max-w-7xl mx-auto px-gutter pb-16 md:pb-24 w-full">
<div className="mb-6">
<span className="text-xs text-teal-600 dark:text-teal-400 uppercase tracking-wider font-bold">Deterministic Lifecycle</span>
<h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white">
          The 4-Step External Evidence Governance Pipeline
        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><div className="p-6 rounded-xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between border border-surface-container-high"><div><div className="flex items-center justify-between mb-4"><span className="font-mono text-xs font-bold text-white bg-teal-600 dark:bg-teal-500 px-space-xs py-0.5 rounded">STEP 01</span><Circle className="h-5 w-5 shrink-0" /></div><h4 className="text-xl text-slate-900 dark:text-white font-bold mb-space-xs">Discover &amp; Point</h4><p className="text-sm text-slate-900 dark:text-white leading-relaxed">Ingest or link external URIs: customer S3 ARNs, Jira ticket keys, Okta log export queries, or signed Git commit SHAs.</p></div><div className="mt-6 font-mono text-xs text-slate-900 dark:text-white bg-slate-200 dark:bg-navy-700 font-semibold p-space-xs rounded">Target: s3://gov-audit-prod-01/</div></div><div className="p-6 rounded-xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between border border-surface-container-high"><div><div className="flex items-center justify-between mb-4"><span className="font-mono text-xs font-bold text-white bg-amber-600 dark:bg-amber-500 px-space-xs py-0.5 rounded">STEP 02</span><Circle className="h-5 w-5 shrink-0" /></div><h4 className="text-xl text-slate-900 dark:text-white font-bold mb-space-xs">Advisory AI Crosswalk</h4><p className="text-sm text-slate-900 dark:text-white leading-relaxed">Advisory AI analyzes URI semantics and metadata to propose matching SOC 2, ISO 27001, and HIPAA control clauses. Human signs off.</p></div><div className="mt-6 font-mono text-xs text-slate-900 dark:text-white bg-slate-200 dark:bg-navy-700 font-semibold p-space-xs rounded">Suggestion: CC6.1 + ISO A.8.24</div></div><div className="p-6 rounded-xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between border border-surface-container-high"><div><div className="flex items-center justify-between mb-4"><span className="font-mono text-xs font-bold text-slate-900 dark:text-white bg-tertiary-fixed px-space-xs py-0.5 rounded">STEP 03</span><Circle className="h-5 w-5 shrink-0" /></div><h4 className="text-xl text-slate-900 dark:text-white font-bold mb-space-xs">Assign Cadence &amp; Owner</h4><p className="text-sm text-slate-900 dark:text-white leading-relaxed">Bind the pointer to a technical custodian and testing cadence (30d, 90d, Annual). Triggers proactive re-attestation alerts.</p></div><div className="mt-6 font-mono text-xs text-slate-900 dark:text-white bg-slate-200 dark:bg-navy-700 font-semibold p-space-xs rounded">Cadence: 90 Days • SecOps Lead</div></div><div className="p-6 rounded-xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between border border-surface-container-high"><div><div className="flex items-center justify-between mb-4"><span className="font-mono text-xs font-bold text-white bg-slate-900 dark:bg-black px-space-xs py-0.5 rounded">STEP 04</span><Circle className="h-5 w-5 shrink-0" /></div><h4 className="text-xl text-slate-900 dark:text-white font-bold mb-space-xs">Auditor Workpapers</h4><p className="text-sm text-slate-900 dark:text-white leading-relaxed">Package verified references into time-restricted, read-only workpaper dossiers for independent CPA firm or ISO registrar review.</p></div><div className="mt-6 font-mono text-xs text-slate-900 dark:text-white bg-slate-200 dark:bg-navy-700 font-semibold p-space-xs rounded">Dossier: SOC2_TypeII_2026.zip</div></div></div>
</section>
{/*  Interactive Live Evidence Catalog Table / Data View  */}
<section className="max-w-7xl mx-auto px-gutter pb-16 md:pb-24 w-full">
<div className="bg-white dark:bg-[#0A111F] rounded-xl shadow-md p-8">
{/*  Table Header & Action Controls  */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
<div>
<div className="flex items-center gap-2">
<h3 className="font-headline-md text-headline-md text-slate-900 dark:text-white">Live Evidence Index</h3>
<span className="px-space-xs py-0.5 rounded bg-teal-600 dark:bg-teal-500 text-white font-mono text-xs font-bold">142 RECORDS</span>
</div>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              Deterministic PostgreSQL catalog of external pointers, signed attestations, and cross-framework control links.
            </p>
</div>
<div className="flex flex-wrap items-center gap-2">
<div className="relative">
<Circle className="h-5 w-5 shrink-0" />
<input className="bg-slate-50 dark:bg-[#16233F] rounded-lg pl-9 pr-3 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-600 dark:text-slate-300 focus:outline-none focus:bg-white dark:bg-[#0A111F] shadow-sm w-64" id="evidenceSearchInput" placeholder="Filter by ID, URI, or Control..." type="text"/>
</div>
<button className="inline-flex items-center gap-1 px-space-sm py-2 rounded-lg bg-slate-200 dark:bg-navy-700 hover:bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white text-sm font-semibold transition-colors" type="button">
<Circle className="h-5 w-5 shrink-0" />
<span>Filter</span>
</button>
<button className="inline-flex items-center gap-1 px-space-sm py-2 rounded-lg bg-teal-600 dark:bg-teal-500-container text-white-container text-sm font-semibold hover:bg-teal-600 dark:bg-teal-500 transition-colors" type="button">
<Circle className="h-5 w-5 shrink-0" />
<span>Index New Reference</span>
</button>
</div>
</div>
{/*  Filter Chips Bar  */}
<div className="flex items-center gap-2 overflow-x-auto pb-space-sm mb-6 text-xs">
<button className="px-space-sm py-1 rounded-full bg-teal-600 dark:bg-teal-500 text-white font-bold shadow-xs whitespace-nowrap" type="button">All Evidence (142)</button>
<button className="px-space-sm py-1 rounded-full bg-slate-50 dark:bg-[#16233F] hover:bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white font-semibold whitespace-nowrap" type="button">Cloud Infrastructure (48)</button>
<button className="px-space-sm py-1 rounded-full bg-slate-50 dark:bg-[#16233F] hover:bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white font-semibold whitespace-nowrap" type="button">Identity &amp; Access (34)</button>
<button className="px-space-sm py-1 rounded-full bg-slate-50 dark:bg-[#16233F] hover:bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white font-semibold whitespace-nowrap" type="button">Security Policies (22)</button>
<button className="px-space-sm py-1 rounded-full bg-slate-50 dark:bg-[#16233F] hover:bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white font-semibold whitespace-nowrap" type="button">Vendor DPAs (19)</button>
<button className="px-space-sm py-1 rounded-full bg-slate-50 dark:bg-[#16233F] hover:bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white font-semibold whitespace-nowrap" type="button">HR &amp; Training (19)</button>
</div>
{/*  High-Density Responsive Table View  */}
<div className="overflow-x-auto rounded-lg bg-slate-50 dark:bg-[#16233F]">
<table className="w-full text-left text-sm text-slate-900 dark:text-white border-collapse">
<thead>
<tr className="bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white text-xs uppercase tracking-wider font-bold"><th className="p-4 text-slate-900 dark:text-white font-bold">Evidence ID &amp; Artifact Name</th><th className="p-4 text-slate-900 dark:text-white font-bold">Target Source &amp; Pointer URI</th><th className="p-4 text-slate-900 dark:text-white font-bold">Mapped Controls</th><th className="p-4 text-slate-900 dark:text-white font-bold">Review Cadence</th><th className="p-4 text-slate-900 dark:text-white font-bold">Custodian</th><th className="p-4 text-slate-900 dark:text-white font-bold">Verification State</th><th className="p-4 text-right text-slate-900 dark:text-white font-bold">Actions</th></tr>
</thead>
<tbody className="divide-y-0" id="evidenceTableBody"><tr className="hover:bg-slate-100 dark:bg-navy-800 transition-colors border-b border-surface-container-high"><td className="p-4"><div className="flex items-center gap-2"><span className="font-mono text-xs px-1.5 py-0.5 rounded bg-teal-600 dark:bg-teal-500 text-white font-bold">EVD-108</span><span className="font-bold text-slate-900 dark:text-white text-body-sm">AWS KMS Automatic Key Rotation Policy</span></div><div className="text-slate-900 dark:text-white font-mono text-xs font-semibold mt-1">Hash: <span className="text-teal-600 dark:text-teal-400 font-bold">sha256:4a8f9c1b...d902</span></div></td><td className="p-4"><div className="flex items-center gap-1 font-mono text-xs text-slate-900 dark:text-white font-semibold"><Cloud className="h-5 w-5 shrink-0" /><span className="truncate max-w-[200px]" title="arn:aws:kms:us-east-1:48201948192:key/390a-11f">arn:aws:kms:us-east-1:482...</span></div><span className="text-slate-900 dark:text-white text-sm font-medium">AWS KMS Console • Read-Only External</span></td><td className="p-4"><div className="flex flex-wrap gap-1"><span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white font-mono text-xs font-bold">SOC2 CC6.1</span><span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white font-mono text-xs font-bold">ISO A.8.24</span><span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white font-mono text-xs font-bold">HIPAA §164.312(a)</span></div></td><td className="p-4"><span className="font-bold text-slate-900 dark:text-white text-body-sm">Annual Review</span><div className="text-amber-600 dark:text-amber-500 font-mono text-xs font-bold mt-0.5">Due in 34 days</div></td><td className="p-4"><div className="font-bold text-slate-900 dark:text-white text-body-sm">E. Vance</div><div className="text-slate-900 dark:text-white text-sm font-medium">Principal SecOps</div></td><td className="p-4"><span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-white-fixed text-sm font-bold"><CheckCircle2 className="h-5 w-5 shrink-0" /> Verified Valid</span><div className="text-slate-900 dark:text-white font-mono text-xs font-semibold mt-1">Signed 2026-03-12</div></td><td className="p-4 text-right"><button className="p-1.5 rounded hover:bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white font-bold" title="Inspect Chain of Custody" type="button"><Circle className="h-5 w-5 shrink-0" /></button></td></tr><tr className="hover:bg-slate-100 dark:bg-navy-800 transition-colors border-b border-surface-container-high"><td className="p-4"><div className="flex items-center gap-2"><span className="font-mono text-xs px-1.5 py-0.5 rounded bg-teal-600 dark:bg-teal-500 text-white font-bold">EVD-109</span><span className="font-bold text-slate-900 dark:text-white text-body-sm">Okta Global MFA Policy Enforcement Log Export</span></div><div className="text-slate-900 dark:text-white font-mono text-xs font-semibold mt-1">Hash: <span className="text-amber-600 dark:text-amber-500 font-bold">sha256:7b21e8d4...330a</span></div></td><td className="p-4"><div className="flex items-center gap-1 font-mono text-xs text-slate-900 dark:text-white font-semibold"><Circle className="h-5 w-5 shrink-0" /><span className="truncate max-w-[200px]" title="s3://customer-sec-audit-bucket/okta/q1-2026-mfa-report.json">s3://customer-sec-audit-bucket/okta/...</span></div><span className="text-slate-900 dark:text-white text-sm font-medium">Customer S3 Bucket • Verified URI</span></td><td className="p-4"><div className="flex flex-wrap gap-1"><span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white font-mono text-xs font-bold">SOC2 CC6.2</span><span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white font-mono text-xs font-bold">ISO A.5.15</span><span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white font-mono text-xs font-bold">DPDP Sec. 8</span></div></td><td className="p-4"><span className="font-bold text-slate-900 dark:text-white text-body-sm">Quarterly (90d)</span><div className="text-amber-600 dark:text-amber-500 font-mono text-xs font-bold mt-0.5">Due in 18 days</div></td><td className="p-4"><div className="font-bold text-slate-900 dark:text-white text-body-sm">R. Chen</div><div className="text-slate-900 dark:text-white text-sm font-medium">Identity Lead</div></td><td className="p-4"><span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-white-fixed text-sm font-bold"><CheckCircle2 className="h-5 w-5 shrink-0" /> Verified Valid</span><div className="text-slate-900 dark:text-white font-mono text-xs font-semibold mt-1">Signed 2026-03-01</div></td><td className="p-4 text-right"><button className="p-1.5 rounded hover:bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white font-bold" title="Inspect Chain of Custody" type="button"><Circle className="h-5 w-5 shrink-0" /></button></td></tr><tr className="hover:bg-slate-100 dark:bg-navy-800 transition-colors border-b border-surface-container-high"><td className="p-4"><div className="flex items-center gap-2"><span className="font-mono text-xs px-1.5 py-0.5 rounded bg-teal-600 dark:bg-teal-500 text-white font-bold">EVD-110</span><span className="font-bold text-slate-900 dark:text-white text-body-sm">GitHub Enterprise Main Branch Signed Commit Enforcement</span></div><div className="text-slate-900 dark:text-white font-mono text-xs font-semibold mt-1">Hash: <span className="text-tertiary font-bold">sha256:c029df44...bb71</span></div></td><td className="p-4"><div className="flex items-center gap-1 font-mono text-xs text-slate-900 dark:text-white font-semibold"><Circle className="h-5 w-5 shrink-0" /><span className="truncate max-w-[200px]" title="https://api.github.com/repos/org/core/branches/main/protection">api.github.com/repos/org/core/...</span></div><span className="text-slate-900 dark:text-white text-sm font-medium">Git Rule Pointer • Commit Hash Linked</span></td><td className="p-4"><div className="flex flex-wrap gap-1"><span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white font-mono text-xs font-bold">SOC2 CC8.1</span><span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white font-mono text-xs font-bold">ISO A.8.32</span></div></td><td className="p-4"><span className="font-bold text-slate-900 dark:text-white text-body-sm">Monthly (30d)</span><div className="text-teal-600 dark:text-teal-400 font-mono text-xs font-bold mt-0.5">Due in 2 days</div></td><td className="p-4"><div className="font-bold text-slate-900 dark:text-white text-body-sm">M. Kowalski</div><div className="text-slate-900 dark:text-white text-sm font-medium">DevOps Staff Eng</div></td><td className="p-4"><span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-sm font-bold"><Circle className="h-5 w-5 shrink-0" /> Re-attestation Pending</span><div className="text-slate-900 dark:text-white font-mono text-xs font-semibold mt-1">Assigned to M. Kowalski</div></td><td className="p-4 text-right"><button className="p-1.5 rounded hover:bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white font-bold" title="Inspect Chain of Custody" type="button"><Circle className="h-5 w-5 shrink-0" /></button></td></tr><tr className="hover:bg-slate-100 dark:bg-navy-800 transition-colors border-b border-surface-container-high"><td className="p-4"><div className="flex items-center gap-2"><span className="font-mono text-xs px-1.5 py-0.5 rounded bg-teal-600 dark:bg-teal-500 text-white font-bold">EVD-111</span><span className="font-bold text-slate-900 dark:text-white text-body-sm">AWS CloudTrail Multi-Region S3 365-Day Lifecycle Rule</span></div><div className="text-slate-900 dark:text-white font-mono text-xs font-semibold mt-1">Hash: <span className="text-teal-600 dark:text-teal-400 font-bold">sha256:e149ca99...11c0</span></div></td><td className="p-4"><div className="flex items-center gap-1 font-mono text-xs text-slate-900 dark:text-white font-semibold"><Cloud className="h-5 w-5 shrink-0" /><span className="truncate max-w-[200px]" title="s3://cloudtrail-org-audit-vault-01/?lifecycle">s3://cloudtrail-org-audit-vault-01/...</span></div><span className="text-slate-900 dark:text-white text-sm font-medium">S3 Bucket Lifecycle Config URI</span></td><td className="p-4"><div className="flex flex-wrap gap-1"><span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white font-mono text-xs font-bold">SOC2 CC7.2</span><span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white font-mono text-xs font-bold">ISO A.8.15</span><span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white font-mono text-xs font-bold">HIPAA §164.312(b)</span></div></td><td className="p-4"><span className="font-bold text-slate-900 dark:text-white text-body-sm">Quarterly (90d)</span><div className="text-amber-600 dark:text-amber-500 font-mono text-xs font-bold mt-0.5">Due in 58 days</div></td><td className="p-4"><div className="font-bold text-slate-900 dark:text-white text-body-sm">S. Al-Mansoor</div><div className="text-slate-900 dark:text-white text-sm font-medium">Cloud Architect</div></td><td className="p-4"><span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-white-fixed text-sm font-bold"><CheckCircle2 className="h-5 w-5 shrink-0" /> Verified Valid</span><div className="text-slate-900 dark:text-white font-mono text-xs font-semibold mt-1">Signed 2026-02-28</div></td><td className="p-4 text-right"><button className="p-1.5 rounded hover:bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white font-bold" title="Inspect Chain of Custody" type="button"><Circle className="h-5 w-5 shrink-0" /></button></td></tr><tr className="hover:bg-slate-100 dark:bg-navy-800 transition-colors"><td className="p-4"><div className="flex items-center gap-2"><span className="font-mono text-xs px-1.5 py-0.5 rounded bg-teal-600 dark:bg-teal-500 text-white font-bold">EVD-112</span><span className="font-bold text-slate-900 dark:text-white text-body-sm">Annual Security Awareness &amp; Phishing Training CSV Report</span></div><div className="text-slate-900 dark:text-white font-mono text-xs font-semibold mt-1">Hash: <span className="text-tertiary font-bold">sha256:39bf200a...fa18</span></div></td><td className="p-4"><div className="flex items-center gap-1 font-mono text-xs text-slate-900 dark:text-white font-semibold"><Circle className="h-5 w-5 shrink-0" /><span className="truncate max-w-[200px]" title="https://compliance-learning.internal.corp/reports/q1-2026-completion">https://compliance-learning.internal...</span></div><span className="text-slate-900 dark:text-white text-sm font-medium">Internal LMS Reference URL</span></td><td className="p-4"><div className="flex flex-wrap gap-1"><span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white font-mono text-xs font-bold">SOC2 CC2.2</span><span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white font-mono text-xs font-bold">ISO A.6.3</span></div></td><td className="p-4"><span className="font-bold text-slate-900 dark:text-white text-body-sm">Semi-Annual (180d)</span><div className="text-amber-600 dark:text-amber-500 font-mono text-xs font-bold mt-0.5">Due in 84 days</div></td><td className="p-4"><div className="font-bold text-slate-900 dark:text-white text-body-sm">L. Tanaka</div><div className="text-slate-900 dark:text-white text-sm font-medium">People &amp; Culture</div></td><td className="p-4"><span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-white-fixed text-sm font-bold"><CheckCircle2 className="h-5 w-5 shrink-0" /> Verified Valid</span><div className="text-slate-900 dark:text-white font-mono text-xs font-semibold mt-1">Signed 2026-03-04</div></td><td className="p-4 text-right"><button className="p-1.5 rounded hover:bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white font-bold" title="Inspect Chain of Custody" type="button"><Circle className="h-5 w-5 shrink-0" /></button></td></tr></tbody>
</table>
</div>
{/*  Table Footer Pagination and Timestamp Attestation  */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-space-sm font-mono text-xs text-slate-600 dark:text-slate-300">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-amber-600 dark:bg-amber-500"></span>
<span>Index synchronized with Postgres WAL stream: 2026-03-12T19:42:08Z (UTC)</span>
</div>
<div className="flex items-center gap-2">
<span>Showing 1-5 of 142 items</span>
<div className="flex gap-1">
<button className="px-2 py-1 rounded bg-slate-50 dark:bg-[#16233F] text-slate-900 dark:text-white font-semibold hover:bg-slate-100 dark:bg-navy-800 disabled:opacity-50">Prev</button>
<button className="px-2 py-1 rounded bg-slate-200 dark:bg-navy-700 text-teal-600 dark:text-teal-400 font-bold">1</button>
<button className="px-2 py-1 rounded bg-slate-50 dark:bg-[#16233F] text-slate-900 dark:text-white font-semibold hover:bg-slate-100 dark:bg-navy-800">2</button>
<button className="px-2 py-1 rounded bg-slate-50 dark:bg-[#16233F] text-slate-900 dark:text-white font-semibold hover:bg-slate-100 dark:bg-navy-800">3</button>
<button className="px-2 py-1 rounded bg-slate-50 dark:bg-[#16233F] text-slate-900 dark:text-white font-semibold hover:bg-slate-100 dark:bg-navy-800">Next</button>
</div>
</div>
</div>
</div>
</section>
{/*  Auditor Workpaper Packaging & Defensibility Feature Panel  */}
<section className="max-w-7xl mx-auto px-gutter pb-16 md:pb-24 w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
{/*  Visual Workpaper Package Mockup  */}
<div className="lg:col-span-6 order-2 lg:order-1">
<div className="p-8 rounded-2xl bg-slate-50 dark:bg-[#16233F] shadow-lg relative overflow-hidden"><div className="flex items-center justify-between pb-space-sm mb-6 border-b border-surface-container-high"><div className="flex items-center gap-2"><Circle className="h-5 w-5 shrink-0" /><span className="text-xl text-slate-900 dark:text-white font-bold">Auditor Workpaper Bundle</span></div><span className="px-2 py-0.5 rounded bg-amber-600 dark:bg-amber-500 text-white font-mono text-xs font-bold tracking-wide">TOKEN EXPIRES IN 14 DAYS</span></div><div className="space-y-space-xs mb-6"><div className="p-4 rounded-lg bg-white dark:bg-[#0A111F] shadow-xs flex items-center justify-between border border-surface-container-high"><div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 shrink-0" /><div><div className="text-sm text-slate-900 dark:text-white font-bold">SOC 2 CC6.1 - KMS Key Management Reference Dossier</div><div className="font-mono text-xs text-slate-900 dark:text-white font-medium">ARN pointer verified by SecOps Lead • Sign-off record <span className="text-teal-600 dark:text-teal-400 font-bold">ref:4a8...</span></div></div></div><span className="font-mono text-xs text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/40 px-2 py-0.5 rounded font-bold">PASSED</span></div><div className="p-4 rounded-lg bg-white dark:bg-[#0A111F] shadow-xs flex items-center justify-between border border-surface-container-high"><div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 shrink-0" /><div><div className="text-sm text-slate-900 dark:text-white font-bold">SOC 2 CC6.2 - Okta MFA Quarterly Snapshot Workpaper</div><div className="font-mono text-xs text-slate-900 dark:text-white font-medium">Customer S3 Bucket query authenticated • <span className="text-amber-600 dark:text-amber-500 font-bold">Zero file re-hosting</span></div></div></div><span className="font-mono text-xs text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/40 px-2 py-0.5 rounded font-bold">PASSED</span></div><div className="p-4 rounded-lg bg-white dark:bg-[#0A111F] shadow-xs flex items-center justify-between border border-surface-container-high"><div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 shrink-0" /><div><div className="text-sm text-slate-900 dark:text-white font-bold">ISO 27001 A.8.15 - CloudTrail 365d Logging Policy Reference</div><div className="font-mono text-xs text-slate-900 dark:text-white font-medium">Read-only IAM role policy inspection proof • <span className="text-slate-900 dark:text-white font-bold">Config verified</span></div></div></div><span className="font-mono text-xs text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/40 px-2 py-0.5 rounded font-bold">PASSED</span></div></div><div className="p-4 rounded-lg bg-slate-900 dark:bg-black text-white font-mono text-xs border border-surface-container-lowest/10"><div className="text-surface-container-lowest font-bold mb-1.5 flex items-center gap-1"><Circle className="h-5 w-5 shrink-0" /> AUDITOR AUDIT TRAIL LOG (STRUCTURED RECORD):</div><div className="text-white font-medium py-0.5">2026-03-12 14:11:02 UTC - Lead Auditor (<span className="text-surface-container-lowest font-bold">Moss Adams LLP</span>) accessed Workpaper Bundle #WP-402</div><div className="text-amber-600 dark:text-amber-500-container font-bold py-0.5">2026-03-12 14:12:45 UTC - Recorded Evidence Verification for EVD-108 &amp; EVD-109</div></div></div>
</div>
{/*  Descriptive Content  */}
<div className="lg:col-span-6 order-1 lg:order-2">
<span className="text-xs text-teal-600 dark:text-teal-400 uppercase tracking-wider font-bold">External Auditor Assurance</span>
<h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white mt-1 mb-4">
            Auditor Workpaper Packaging &amp; Defensibility
          </h2>
<p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            Eliminate frantic pre-audit folder scrambles. Package verified evidence pointers into scoped, time-bounded guest workpapers for independent CPAs and ISO certification registrars.
          </p>
<div className="space-y-space-sm">
<div className="flex items-start gap-2">
<div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center shrink-0 mt-1">
<Circle className="h-5 w-5 shrink-0" />
</div>
<div>
<h4 className="text-sm text-slate-900 dark:text-white font-semibold">Time-Bounded Guest Access</h4>
<p className="text-sm text-slate-600 dark:text-slate-300">External audit teams receive MFA-gated read-only access that automatically expires when the review cycle closes.</p>
</div>
</div>
<div className="flex items-start gap-2">
<div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center shrink-0 mt-1">
<Circle className="h-5 w-5 shrink-0" />
</div>
<div>
<h4 className="text-sm text-slate-900 dark:text-white font-semibold">Structured Access Attribution</h4>
<p className="text-sm text-slate-600 dark:text-slate-300">Every inspector click, workpaper view, and hash check is logged to a structured PostgreSQL event trail.</p>
</div>
</div>
<div className="flex items-start gap-2">
<div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center shrink-0 mt-1">
<Circle className="h-5 w-5 shrink-0" />
</div>
<div>
<h4 className="text-sm text-slate-900 dark:text-white font-semibold">Zero Direct Cloud Console Access</h4>
<p className="text-sm text-slate-600 dark:text-slate-300">Auditors view authenticated proof and state attestations without requiring high-privilege IAM access to your live infrastructure.</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Architectural Deep-Dive: Data Minimization & Payload Integrity  */}
<section className="max-w-7xl mx-auto px-gutter pb-16 md:pb-24 w-full">
<div className="p-8 rounded-2xl bg-slate-900 dark:bg-black text-white shadow-xl"><div className="max-w-3xl mb-8"><div className="inline-flex items-center gap-2 px-space-sm py-1 rounded bg-amber-100 dark:bg-amber-900/40 text-white-fixed font-mono text-xs font-bold mb-space-xs"><Shield className="h-5 w-5 shrink-0" /> ARCHITECTURAL SPECIFICATION: DATA MINIMIZATION</div><h3 className="text-3xl md:text-4xl text-surface-container-lowest font-bold">Payload Isolation &amp; Structured State Verification</h3><p className="text-base text-white font-medium mt-2 leading-relaxed">OMNiGRC never acts as a binary dumping ground. By design, our database stores only pointers, attestations, review timestamps, and evidence record metadata.</p></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="p-6 rounded-xl bg-white dark:bg-[#0A111F]/10 backdrop-blur-sm border border-surface-container-lowest/10"><div className="font-mono text-xs text-amber-600 dark:text-amber-500-container font-bold mb-2 uppercase tracking-wide">WHAT OMNiGRC STORES</div><ul className="space-y-1.5 font-mono text-xs text-surface-container-lowest font-medium"><li>• External URIs (s3://, https://, jira://)</li><li>• Recorded evidence status</li><li>• Reviewer identity &amp; RFC 3339 timestamps</li><li>• Control clause cross-mappings</li><li>• Testing cadence schedules</li></ul></div><div className="p-6 rounded-xl bg-white dark:bg-[#0A111F]/10 backdrop-blur-sm border border-surface-container-lowest/10"><div className="font-mono text-xs text-teal-600 dark:text-teal-400-fixed font-bold mb-2 uppercase tracking-wide">WHAT OMNiGRC NEVER INGESTS</div><ul className="space-y-1.5 font-mono text-xs text-surface-container-lowest font-medium"><li>• Proprietary database backups or raw logs</li><li>• Employee PII or salary documents</li><li>• Customer production payloads</li><li>• Unencrypted file uploads</li><li>• Cloud credential secrets or private keys</li></ul></div><div className="p-6 rounded-xl bg-white dark:bg-[#0A111F]/10 backdrop-blur-sm border border-surface-container-lowest/10"><div className="font-mono text-xs text-surface-container-lowest font-bold mb-2 uppercase tracking-wide">AUDITOR VERIFICATION GUARANTEE</div><p className="text-sm text-white font-medium leading-relaxed">When an auditor checks an artifact, the client-side system resolves the pointer against your authoritative source and validates the recorded evidence status. If source data changes without a corresponding review sign-off, OMNiGRC alerts both parties.</p></div></div></div>
</section>
{/*  Implementation Checklist & FAQs Section  */}
<section className="max-w-7xl mx-auto px-gutter pb-16 md:pb-24 w-full">
<div className="mb-6">
<span className="text-xs text-teal-600 dark:text-teal-400 uppercase tracking-wider font-bold">Frequently Addressed Questions</span>
<h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white">
          Evidence Index Implementation &amp; Auditor Acceptance
        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 rounded-xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between">
<div>
<div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-navy-700 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-4">
<Circle className="h-5 w-5 shrink-0" />
</div>
<h4 className="text-xl text-slate-900 dark:text-white mb-space-xs">
              Does OMNiGRC ever store raw files or proprietary binaries?
            </h4>
<p className="text-base text-slate-600 dark:text-slate-300">
              Strictly no. OMNiGRC operates on an external reference and pointer architecture. Your evidence remains inside your customer-governed AWS, Okta, Jira, or GitHub environments. We track URIs, record statuses, and reviewer attestations.
            </p>
</div>
<div className="mt-6 text-xs text-amber-600 dark:text-amber-500 font-semibold">Zero Vendor Lock-In</div>
</div>
<div className="p-8 rounded-xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between">
<div>
<div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-navy-700 flex items-center justify-center text-amber-600 dark:text-amber-500 mb-4">
<Circle className="h-5 w-5 shrink-0" />
</div>
<h4 className="text-xl text-slate-900 dark:text-white mb-space-xs">
              How do external CPAs review evidence without console access?
            </h4>
<p className="text-base text-slate-600 dark:text-slate-300">
              External auditors are granted access to your scoped, read-only Auditor Workpaper Portal. They review authenticated metadata, structured audit log history, and custodian sign-offs without needing direct AWS or Okta credentials.
            </p>
</div>
<div className="mt-6 text-xs text-amber-600 dark:text-amber-500 font-semibold">Full Auditor Defensibility</div>
</div>
<div className="p-8 rounded-xl bg-white dark:bg-[#0A111F] shadow-sm flex flex-col justify-between">
<div>
<div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-navy-700 flex items-center justify-center text-tertiary mb-4">
<Circle className="h-5 w-5 shrink-0" />
</div>
<h4 className="text-xl text-slate-900 dark:text-white mb-space-xs">
              How does Advisory AI tag evidence without reading sensitive payloads?
            </h4>
<p className="text-base text-slate-600 dark:text-slate-300">
              Advisory AI evaluates sanitized URI schemas, system object types, and user-provided descriptions. No customer file payloads or database records are ever ingested, processed, or retained by AI models.
            </p>
</div>
<div className="mt-6 text-xs text-amber-600 dark:text-amber-500 font-semibold">Zero AI Retention Guarantee</div>
</div>
</div>
</section>
{/*  Cross-Workflow Integration Nexus  */}
<section className="max-w-7xl mx-auto px-gutter pb-16 md:pb-24 w-full">
<div className="p-8 rounded-xl bg-slate-50 dark:bg-[#16233F]">
<div className="mb-6">
<span className="text-xs text-teal-600 dark:text-teal-400 uppercase tracking-wider font-bold">Integrated Control Fabric</span>
<h3 className="font-headline-md text-headline-md text-slate-900 dark:text-white">Direct Linkage to Core GRC Workflows</h3>
<p className="text-sm text-slate-600 dark:text-slate-300">Evidence does not exist in a silo. Every pointer binds directly into your broader governance surface.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<a className="p-6 rounded-lg bg-white dark:bg-[#0A111F] hover:bg-slate-100 dark:bg-navy-800 shadow-xs transition-colors group" data-path="compliance-board" href="#">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-teal-600 dark:text-teal-400">Compliance Board</span>
<ArrowRight className="h-5 w-5 shrink-0" />
</div>
<p className="text-sm text-slate-600 dark:text-slate-300">Auto-sync 30/60/90-day testing cycles and overdue evidence alerts.</p>
</a>
<a className="p-6 rounded-lg bg-white dark:bg-[#0A111F] hover:bg-slate-100 dark:bg-navy-800 shadow-xs transition-colors group" data-path="advisory-ai-control-mapping" href="#">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-teal-600 dark:text-teal-400">Control Mapping</span>
<ArrowRight className="h-5 w-5 shrink-0" />
</div>
<p className="text-sm text-slate-600 dark:text-slate-300">Cross-map single evidence items across SOC 2, ISO 27001, and HIPAA.</p>
</a>
<a className="p-6 rounded-lg bg-white dark:bg-[#0A111F] hover:bg-slate-100 dark:bg-navy-800 shadow-xs transition-colors group" data-path="business-audits" href="#">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-teal-600 dark:text-teal-400">Business Audits</span>
<ArrowRight className="h-5 w-5 shrink-0" />
</div>
<p className="text-sm text-slate-600 dark:text-slate-300">Export packaged evidence dossiers directly to external CPA firms.</p>
</a>
<a className="p-6 rounded-lg bg-white dark:bg-[#0A111F] hover:bg-slate-100 dark:bg-navy-800 shadow-xs transition-colors group" data-path="remediation-and-actions" href="#">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-teal-600 dark:text-teal-400">Remediation (CAPA)</span>
<ArrowRight className="h-5 w-5 shrink-0" />
</div>
<p className="text-sm text-slate-600 dark:text-slate-300">Trigger corrective action plans whenever evidence verification fails.</p>
</a>
</div>
</div>
</section>
{/*  Final High-Impact Conversion CTA Section  */}
<section className="max-w-7xl mx-auto px-gutter pb-16 md:pb-24 w-full">
<div className="p-12 rounded-2xl bg-slate-50 dark:bg-[#16233F] shadow-md relative overflow-hidden text-center">
<div className="max-w-2xl mx-auto">
<span className="inline-flex items-center gap-2 px-space-sm py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 text-xs font-semibold mb-4">
<CheckCircle2 className="h-5 w-5 shrink-0" />
            High-Assurance Compliance Indexing
          </span>
<h2 className="text-4xl text-slate-900 dark:text-white tracking-tight mb-4">
            Ready to organize evidence without spreadsheet chaos or file-dump risks?
          </h2>
<p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Join modern security teams who connect cloud proof directly to their compliance posture with zero data lock-in and structured event logs.
          </p>
<div className="flex flex-wrap items-center justify-center gap-6">
<a className="inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-teal-600 dark:bg-teal-500-container text-white text-sm font-semibold hover:bg-teal-600 dark:bg-teal-500 transition-all duration-150 shadow-md" data-path="request-a-demo" href="#">
<Circle className="h-5 w-5 shrink-0" />
<span>Request a Walkthrough</span>
</a>
<a className="inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-white dark:bg-[#0A111F] text-slate-900 dark:text-white text-sm font-semibold hover:bg-slate-200 dark:bg-navy-700 transition-all duration-150 shadow-sm" data-path="pricing" href="#">
<Network className="h-5 w-5 shrink-0" />
<span>View Pricing &amp; Architecture</span>
</a>
</div>
<div className="mt-6 font-mono text-xs text-slate-600 dark:text-slate-300 flex items-center justify-center gap-6">
<span>• No proprietary storage fees</span>
<span>• Full Postgres audit trail</span>
<span>• Self-hosted or Cloud SaaS</span>
</div>
</div>
</div>
</section>
</div>
{/*  Interactive Client-side Script for Search Filter Micro-Interactions  */}

</div>
</main>
      <Footer />
    </div>
  );
}
