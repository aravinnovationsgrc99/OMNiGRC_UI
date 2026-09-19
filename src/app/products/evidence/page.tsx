import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  FolderLock,
  Database,
  Lock,
  CheckCircle2,
  XCircle,
  Cloud,
  Shield,
  ArrowRight,
  Circle,
  Search,
  Filter,
  CheckCircle,
  Clock,
  FileText,
  Link as LinkIcon
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
          {/* Subtle ambient backdrop */}
          <div className="relative w-full overflow-hidden">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-100/20 dark:bg-teal-900/20 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute top-48 left-10 w-80 h-80 bg-amber-600/10 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Breadcrumb Context Bar */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 w-full">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4">
                <div className="flex items-center gap-2 flex-wrap font-mono text-xs text-slate-600 dark:text-slate-300">
                  <span className="inline-flex items-center gap-1 font-bold text-[#2E936F] dark:text-teal">
                    <Circle className="h-3.5 w-3.5 fill-current" /> WORKFLOWS
                  </span>
                  <span className="text-slate-400">/</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">EVIDENCE GOVERNANCE</span>
                  <span className="text-slate-400">/</span>
                  <span className="font-medium bg-slate-200/80 dark:bg-navy-800 px-2 py-0.5 rounded text-[11px] text-slate-700 dark:text-slate-300">
                    /products/evidence
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 font-mono text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    LIVE EVIDENCE INDEX
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-navy-800 text-slate-700 dark:text-slate-300 font-mono text-xs font-medium border border-slate-300 dark:border-navy-700">
                    <Database className="h-3.5 w-3.5 text-[#2E936F] dark:text-teal" />
                    APPEND-ONLY POSTGRESQL TIMELINE
                  </span>
                </div>
              </div>
            </section>

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 w-full bg-grid-mesh-adaptive">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 flex flex-col">
                  <div className="inline-flex items-center gap-2 w-max mb-4 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    Zero Proprietary Binary Storage Lock-In
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
                    Evidence References &amp; Records: Connect external proof without binary lock-in.
                  </h1>
                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed mb-8">
                    Maintain an auditable, structured index of production proof, cloud telemetry references, and external workpaper links. Point directly to your existing systems of record—AWS, Okta, GitHub, Jira—while preserving complete clear chain of custody for external auditors.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href="/demo"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F15E1C] hover:bg-[#ce4700] text-white text-sm font-bold shadow-md transition-all duration-150"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Schedule Walkthrough</span>
                    </Link>
                    <Link
                      href="/resources/blog/compliance-vs-pre-audit-preparation-what-businesses-need-to-know"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-navy-800 text-slate-900 dark:text-white text-sm font-semibold hover:bg-slate-100 dark:hover:bg-navy-700 transition-all duration-150 border border-slate-200 dark:border-navy-700 shadow-sm"
                    >
                      <span>Explore Audit Workpapers &rarr;</span>
                    </Link>
                    <div className="flex items-center gap-2 pl-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                      <Lock className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      <span>RFC 3339 Timestamped</span>
                    </div>
                  </div>
                </div>

                {/* Status Snapshot Panel */}
                <div className="lg:col-span-4 w-full flex flex-col gap-6">
                  <div className="p-6 rounded-2xl bg-slate-900 dark:bg-black text-white shadow-xl border border-slate-800 relative overflow-hidden">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                        <span className="font-mono text-xs text-amber-400 font-bold uppercase tracking-wider">INDEX STATE ENGINE</span>
                      </div>
                      <span className="font-mono text-[11px] text-slate-300 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">pg_crypto::v14</span>
                    </div>
                    <div className="space-y-2.5 font-mono text-xs mb-6">
                      <div className="flex justify-between items-center py-0.5">
                        <span className="text-slate-300">Active Tracked Pointers:</span>
                        <span className="text-emerald-400 font-bold">142 validated</span>
                      </div>
                      <div className="flex justify-between items-center py-0.5">
                        <span className="text-slate-300">External Evidence Pointers:</span>
                        <span className="text-amber-400 font-bold">Verified Reference</span>
                      </div>
                      <div className="flex justify-between items-center py-0.5">
                        <span className="text-slate-300">Direct Binaries Ingested:</span>
                        <span className="text-emerald-300 font-bold bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded">0 bytes (Isolated)</span>
                      </div>
                      <div className="flex justify-between items-center py-0.5">
                        <span className="text-slate-300">Human Custodian Sign-Off:</span>
                        <span className="text-white font-bold">100% Required</span>
                      </div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-800/90 dark:bg-navy-950 border border-slate-700 text-slate-200 text-xs flex items-start gap-2.5 leading-relaxed">
                      <Shield className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-amber-400">&ldquo;AI assists. Humans decide.&rdquo;</strong> Advisory AI correlates telemetry; human compliance officers explicitly approve validity.
                      </span>
                    </div>
                  </div>

                  {/* Fast Stat Cards 2x2 Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 shadow-sm">
                      <div className="text-2xl font-black text-[#2E936F] dark:text-teal mb-0.5">100%</div>
                      <div className="text-xs text-slate-900 dark:text-white font-bold">External Pointers</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">Zero binary lock-in</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 shadow-sm">
                      <div className="text-2xl font-black text-[#D4521A] dark:text-amber mb-0.5">AUDIT</div>
                      <div className="text-xs text-slate-900 dark:text-white font-bold">Event History</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">Structured log trail</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 shadow-sm">
                      <div className="text-2xl font-black text-slate-900 dark:text-white mb-0.5">1 : N</div>
                      <div className="text-xs text-slate-900 dark:text-white font-bold">Control Reuse</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">SOC 2, ISO, HIPAA</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 shadow-sm">
                      <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400 mb-0.5">Scoped</div>
                      <div className="text-xs text-slate-900 dark:text-white font-bold">Auditor Workpapers</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">Read-only access</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Architecture Comparison: Legacy Vaults vs OMNiGRC Pointer Model */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 w-full">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-xs text-[#F15E1C] uppercase tracking-widest font-mono font-bold">
                  ARCHITECTURAL PRINCIPLE
                </span>
                <h2 className="text-2xl sm:text-4xl text-slate-900 dark:text-white font-bold mt-1 tracking-tight">
                  Why Centralized Binary Upload Vaults Fail Modern Security
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
                  Storing duplicate corporate files in a multi-tenant compliance vendor&apos;s database creates unmanageable attack surfaces, version drift, and massive migration overhead.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Legacy Way */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900 border border-rose-200 dark:border-rose-950/60 shadow-md flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-rose-800 dark:text-rose-300 text-xs font-bold mb-6">
                      <XCircle className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                      Traditional Heavyweight GRC Binary Uploads
                    </div>
                    <h3 className="text-xl text-slate-900 dark:text-white font-bold mb-4">
                      Duplicate PDFs, Data Leaks &amp; Orphaned Files
                    </h3>
                    <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                        <span><strong>Security &amp; Data Leak Exposure:</strong> Uploading sensitive production logs, IAM dumps, and architecture diagrams into a 3rd party vendor database increases corporate blast radius.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                        <span><strong>Instant Version Drift:</strong> The moment a PDF or screenshot is uploaded, it is severed from live AWS, Okta, or Jira repositories, becoming obsolete within hours.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                        <span><strong>High-Friction Manual Toil:</strong> Engineers spend hundreds of hours manually downloading screenshots from cloud dashboards just to drag-and-drop into bloated compliance tools.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 p-4 rounded-xl font-mono text-xs text-rose-900 dark:text-rose-300 font-medium">
                    Result: Costly vendor file lock-in, data sovereignty violations, and unverified point-in-time claims.
                  </div>
                </div>

                {/* OMNiGRC Pointer Layer */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900 border border-amber-200 dark:border-amber-950/60 shadow-md flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-amber-800 dark:text-amber-300 text-xs font-bold mb-6">
                      <CheckCircle2 className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                      OMNiGRC External Pointer &amp; Reference Layer
                    </div>
                    <h3 className="text-xl text-slate-900 dark:text-white font-bold mb-4">
                      Point Directly to Authoritative Systems of Record
                    </h3>
                    <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span><strong>Zero Binary Data Migration:</strong> Proof lives safely inside your customer-owned AWS S3 buckets, Okta system logs, GitHub commits, and internal Confluence spaces.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span><strong>External Payload Tracking:</strong> OMNiGRC registers external reference URLs and pointer metadata. Any drift or unapproved change is logged in the structured application event log.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span><strong>Automated Cadence Lifecycles:</strong> Directly linked to Compliance Board review intervals (30/60/90 days or Continuous), alerting owners when evidence freshness expires.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 p-4 rounded-xl font-mono text-xs text-amber-900 dark:text-amber-300 font-semibold">
                    Outcome: Seamless external auditor review via read-only workpapers while zero raw binaries ever leave your control.
                  </div>
                </div>
              </div>
            </section>

            {/* 4-Step Pipeline */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 w-full">
              <div className="mb-8">
                <span className="text-xs text-[#2E936F] dark:text-teal uppercase tracking-widest font-mono font-bold">DETERMINISTIC LIFECYCLE</span>
                <h2 className="text-2xl sm:text-3xl text-slate-900 dark:text-white font-bold mt-1">
                  The 4-Step External Evidence Governance Pipeline
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-white bg-[#2E936F] px-2 py-0.5 rounded">STEP 01</span>
                      <Cloud className="h-5 w-5 text-[#2E936F]" />
                    </div>
                    <h4 className="text-lg text-slate-900 dark:text-white font-bold mb-2">Discover &amp; Point</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Ingest or link external URIs: customer S3 ARNs, Jira ticket keys, Okta log export queries, or signed Git commit SHAs.
                    </p>
                  </div>
                  <div className="mt-6 font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-navy-800 font-semibold p-2.5 rounded-lg border border-slate-200 dark:border-navy-700">
                    Target: s3://gov-audit-prod-01/
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-white bg-[#D4521A] px-2 py-0.5 rounded">STEP 02</span>
                      <Shield className="h-5 w-5 text-[#D4521A]" />
                    </div>
                    <h4 className="text-lg text-slate-900 dark:text-white font-bold mb-2">Advisory AI Crosswalk</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Advisory AI analyzes URI semantics and metadata to propose matching SOC 2, ISO 27001, and HIPAA control clauses. Human signs off.
                    </p>
                  </div>
                  <div className="mt-6 font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-navy-800 font-semibold p-2.5 rounded-lg border border-slate-200 dark:border-navy-700">
                    Suggestion: CC6.1 + ISO A.8.24
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-white bg-indigo-600 px-2 py-0.5 rounded">STEP 03</span>
                      <Clock className="h-5 w-5 text-indigo-500" />
                    </div>
                    <h4 className="text-lg text-slate-900 dark:text-white font-bold mb-2">Assign Cadence &amp; Owner</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Bind the pointer to a technical custodian and testing cadence (30d, 90d, Annual). Triggers proactive re-attestation alerts.
                    </p>
                  </div>
                  <div className="mt-6 font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-navy-800 font-semibold p-2.5 rounded-lg border border-slate-200 dark:border-navy-700">
                    Cadence: 90 Days &bull; SecOps Lead
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-white bg-slate-900 dark:bg-black px-2 py-0.5 rounded">STEP 04</span>
                      <FileText className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                    </div>
                    <h4 className="text-lg text-slate-900 dark:text-white font-bold mb-2">Auditor Workpapers</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Package verified references into time-restricted, read-only workpaper dossiers for independent CPA firm or ISO registrar review.
                    </p>
                  </div>
                  <div className="mt-6 font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-navy-800 font-semibold p-2.5 rounded-lg border border-slate-200 dark:border-navy-700">
                    Dossier: SOC2_TypeII_2026.zip
                  </div>
                </div>
              </div>
            </section>

            {/* Interactive Live Evidence Catalog Table View */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 w-full">
              <div className="bg-white dark:bg-navy-900 rounded-2xl shadow-md border border-slate-200 dark:border-navy-700 p-6 sm:p-8">
                {/* Header & Controls */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Live Evidence Index</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#2E936F] text-white font-mono text-xs font-bold">142 RECORDS</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                      Deterministic PostgreSQL catalog of external pointers, signed attestations, and cross-framework control links.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        className="bg-slate-100 dark:bg-navy-800 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F15E1C] border border-slate-200 dark:border-navy-700 w-64"
                        placeholder="Filter by ID, URI, or Control..."
                        type="text"
                      />
                    </div>
                    <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold border border-slate-200 dark:border-navy-700 transition-colors" type="button">
                      <Filter className="h-4 w-4" />
                      <span>Filter</span>
                    </button>
                    <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#2E936F] hover:bg-[#25775a] text-white text-xs sm:text-sm font-bold shadow-sm transition-colors" type="button">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Index New Reference</span>
                    </button>
                  </div>
                </div>

                {/* Filter Chips Bar */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 text-xs">
                  <button className="px-3 py-1 rounded-full bg-[#2E936F] text-white font-bold shadow-xs whitespace-nowrap" type="button">All Evidence (142)</button>
                  <button className="px-3 py-1 rounded-full bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap" type="button">Cloud Infrastructure (48)</button>
                  <button className="px-3 py-1 rounded-full bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap" type="button">Identity &amp; Access (34)</button>
                  <button className="px-3 py-1 rounded-full bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap" type="button">Security Policies (22)</button>
                  <button className="px-3 py-1 rounded-full bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap" type="button">Vendor DPAs (19)</button>
                  <button className="px-3 py-1 rounded-full bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap" type="button">HR &amp; Training (19)</button>
                </div>

                {/* High-Density Responsive Table View */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-navy-700">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-800 dark:text-slate-200 border-collapse">
                    <thead>
                      <tr className="bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 text-[11px] uppercase tracking-wider font-mono font-bold border-b border-slate-200 dark:border-navy-700">
                        <th className="p-4">Evidence ID &amp; Artifact Name</th>
                        <th className="p-4">Target Source &amp; Pointer URI</th>
                        <th className="p-4">Mapped Controls</th>
                        <th className="p-4">Review Cadence</th>
                        <th className="p-4">Custodian</th>
                        <th className="p-4">Verification State</th>
                        <th className="p-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-navy-700">
                      <tr className="hover:bg-slate-50 dark:hover:bg-navy-800/60 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#2E936F] text-white font-bold">EVD-108</span>
                            <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">AWS KMS Automatic Key Rotation Policy</span>
                          </div>
                          <div className="text-slate-500 font-mono text-[11px] mt-1">Hash: <span className="text-[#2E936F] dark:text-teal font-bold">sha256:4a8f9c1b...d902</span></div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1.5 font-mono text-xs text-slate-800 dark:text-slate-200 font-medium">
                            <Cloud className="h-4 w-4 text-[#2E936F] shrink-0" />
                            <span className="truncate max-w-[180px]" title="arn:aws:kms:us-east-1:48201948192:key/390a-11f">arn:aws:kms:us-east-1:482...</span>
                          </div>
                          <span className="text-slate-500 text-xs">AWS KMS Console &bull; Read-Only</span>
                        </td>
                        <td className="p-4">
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-800 dark:text-slate-200 font-mono text-[11px] font-bold border border-slate-200 dark:border-navy-700">SOC2 CC6.1</span>
                            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-800 dark:text-slate-200 font-mono text-[11px] font-bold border border-slate-200 dark:border-navy-700">ISO A.8.24</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="font-bold text-slate-900 dark:text-white text-xs">Annual Review</span>
                          <div className="text-amber-600 dark:text-amber-400 font-mono text-[11px] font-bold mt-0.5">Due in 34 days</div>
                        </td>
                        <td className="p-4">
                          <div className="font-bold text-slate-900 dark:text-white text-xs">E. Vance</div>
                          <div className="text-slate-500 text-xs">Principal SecOps</div>
                        </td>
                        <td className="p-4">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 text-xs font-bold">
                            <CheckCircle2 className="h-3.5 w-3.5" /> Verified Valid
                          </span>
                          <div className="text-slate-500 font-mono text-[11px] mt-1">Signed 2026-03-12</div>
                        </td>
                        <td className="p-4 text-right">
                          <button className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-600 dark:text-slate-300 font-bold" title="Inspect Chain of Custody" type="button">
                            <FileText className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50 dark:hover:bg-navy-800/60 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#2E936F] text-white font-bold">EVD-109</span>
                            <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">Okta Global MFA Policy Enforcement Log Export</span>
                          </div>
                          <div className="text-slate-500 font-mono text-[11px] mt-1">Hash: <span className="text-amber-600 dark:text-amber-400 font-bold">sha256:7b21e8d4...330a</span></div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1.5 font-mono text-xs text-slate-800 dark:text-slate-200 font-medium">
                            <LinkIcon className="h-4 w-4 text-indigo-500 shrink-0" />
                            <span className="truncate max-w-[180px]" title="s3://customer-sec-audit-bucket/okta/q1-2026-mfa-report.json">s3://customer-sec-audit...</span>
                          </div>
                          <span className="text-slate-500 text-xs">Customer S3 Bucket &bull; Verified URI</span>
                        </td>
                        <td className="p-4">
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-800 dark:text-slate-200 font-mono text-[11px] font-bold border border-slate-200 dark:border-navy-700">SOC2 CC6.2</span>
                            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-800 dark:text-slate-200 font-mono text-[11px] font-bold border border-slate-200 dark:border-navy-700">ISO A.5.15</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="font-bold text-slate-900 dark:text-white text-xs">Quarterly (90d)</span>
                          <div className="text-amber-600 dark:text-amber-400 font-mono text-[11px] font-bold mt-0.5">Due in 18 days</div>
                        </td>
                        <td className="p-4">
                          <div className="font-bold text-slate-900 dark:text-white text-xs">R. Chen</div>
                          <div className="text-slate-500 text-xs">Identity Lead</div>
                        </td>
                        <td className="p-4">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 text-xs font-bold">
                            <CheckCircle2 className="h-3.5 w-3.5" /> Verified Valid
                          </span>
                          <div className="text-slate-500 font-mono text-[11px] mt-1">Signed 2026-03-01</div>
                        </td>
                        <td className="p-4 text-right">
                          <button className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-600 dark:text-slate-300 font-bold" title="Inspect Chain of Custody" type="button">
                            <FileText className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>

                      <tr className="hover:bg-slate-50 dark:hover:bg-navy-800/60 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#2E936F] text-white font-bold">EVD-110</span>
                            <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">GitHub Enterprise Main Branch Signed Commit Enforcement</span>
                          </div>
                          <div className="text-slate-500 font-mono text-[11px] mt-1">Hash: <span className="text-indigo-600 dark:text-indigo-400 font-bold">sha256:c029df44...bb71</span></div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1.5 font-mono text-xs text-slate-800 dark:text-slate-200 font-medium">
                            <LinkIcon className="h-4 w-4 text-indigo-500 shrink-0" />
                            <span className="truncate max-w-[180px]" title="https://api.github.com/repos/org/core/branches/main/protection">api.github.com/repos/...</span>
                          </div>
                          <span className="text-slate-500 text-xs">Git Rule Pointer &bull; Commit Linked</span>
                        </td>
                        <td className="p-4">
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-800 dark:text-slate-200 font-mono text-[11px] font-bold border border-slate-200 dark:border-navy-700">SOC2 CC8.1</span>
                            <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-800 dark:text-slate-200 font-mono text-[11px] font-bold border border-slate-200 dark:border-navy-700">ISO A.8.32</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="font-bold text-slate-900 dark:text-white text-xs">Monthly (30d)</span>
                          <div className="text-[#2E936F] dark:text-teal font-mono text-[11px] font-bold mt-0.5">Due in 2 days</div>
                        </td>
                        <td className="p-4">
                          <div className="font-bold text-slate-900 dark:text-white text-xs">M. Kowalski</div>
                          <div className="text-slate-500 text-xs">DevOps Staff Eng</div>
                        </td>
                        <td className="p-4">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 text-xs font-bold">
                            <Clock className="h-3.5 w-3.5" /> Re-attestation Pending
                          </span>
                          <div className="text-slate-500 font-mono text-[11px] mt-1">Assigned to M. Kowalski</div>
                        </td>
                        <td className="p-4 text-right">
                          <button className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-600 dark:text-slate-300 font-bold" title="Inspect Chain of Custody" type="button">
                            <FileText className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Table Footer */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Index synchronized with Postgres WAL stream: 2026-03-12T19:42:08Z (UTC)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Showing 1-3 of 142 items</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Bottom CTA Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 w-full">
              <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 dark:bg-black text-white border border-slate-800 shadow-xl text-center">
                <div className="max-w-2xl mx-auto">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-4">
                    <CheckCircle2 className="h-4 w-4" />
                    High-Assurance Compliance Indexing
                  </span>
                  <h2 className="text-2xl sm:text-4xl text-white font-extrabold tracking-tight mb-4">
                    Ready to organize evidence without spreadsheet chaos or file-dump risks?
                  </h2>
                  <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
                    Join modern security teams who connect cloud proof directly to their compliance posture with zero data lock-in and structured event logs.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link
                      href="/demo"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F15E1C] hover:bg-[#ce4700] text-white text-sm font-bold shadow-md transition-all"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Request a Walkthrough</span>
                    </Link>
                    <Link
                      href="/pricing"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold border border-slate-700 transition-all"
                    >
                      <span>View Pricing &amp; Architecture</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
