import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Lock,
  Cpu,
  UserCheck,
  Server,
  FileCheck2,
  ArrowRight,
  Database,
  CheckCircle2,
  AlertCircle,
  KeyRound,
  Eye,
  Building2,
  HardDrive
} from "lucide-react";

export const metadata: Metadata = {
  title: "Trust, Security Architecture & Governance Assurance: OMNiGRC",
  description: "Application-level tenant isolation, advisory AI data minimization, and transparent deployment boundaries for security-conscious GRC teams.",
  openGraph: {
    title: "Trust & Security Architecture: OMNiGRC",
    description: "Verified tenant isolation, human-governed AI workflows, and deployment model specifications.",
    url: "https://omnigrc.co/trust",
    siteName: "OMNiGRC",
    type: "website",
  },
};

export default function TrustPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />

      <main className="flex-1 w-full pt-16">
        {/* HERO SECTION */}
        <section className="relative w-full px-3 min-[360px]:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-10 md:pb-12 overflow-hidden border-b border-slate-200 dark:border-navy-700/60 bg-grid-mesh-adaptive">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ffdbcf]/30 rounded-full blur-3xl pointer-events-none -z-10 ambient-motion-1" />

          <div className="w-full max-w-5xl xl:max-w-6xl mx-auto text-center">
            <h1 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl text-[#0d1b36] dark:text-white font-extrabold tracking-tight mx-auto mb-4 sm:mb-5 text-center w-full max-w-full md:max-w-4xl lg:max-w-5xl leading-[1.12] sm:leading-tight">
              <span className="block md:inline">Transparent </span>
              <span className="block md:inline whitespace-nowrap min-[768px]:whitespace-normal">security boundaries. </span>
              <span className="block md:inline text-[#F15E1C] dark:text-orange-500 whitespace-nowrap min-[768px]:whitespace-normal">Human-governed AI.</span>
            </h1>

            <p className="max-w-xl sm:max-w-2xl md:max-w-3xl text-xs min-[360px]:text-sm sm:text-base md:text-lg text-[#5a4138] dark:text-slate-300 font-medium mx-auto mb-6 sm:mb-8 leading-relaxed text-center px-2 sm:px-0">
              OMNiGRC is engineered with application-level tenant isolation, advisory AI data minimization, and defensible audit trails to protect your organizational GRC telemetry.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
              <Link
                href="/demo"
                className="w-full sm:w-auto max-w-sm sm:max-w-none inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#F15E1C] to-[#D4521A] hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-md text-xs sm:text-sm text-center"
              >
                <span>Request Architecture Walkthrough</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 1: CORE ARCHITECTURE PILLARS */}
        <section className="w-full bg-transparent px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-6 sm:py-8 md:py-10 border-b border-slate-200 dark:border-navy-700/60">
          <div className="w-full max-w-7xl xl:max-w-[1500px] 2xl:max-w-[1750px] mx-auto">
            <div className="text-left sm:text-center max-w-3xl xl:max-w-4xl mx-auto mb-6 sm:mb-8">
              <span className="font-mono text-xs text-[#F15E1C] dark:text-orange-400 font-bold uppercase tracking-widest block">
                VERIFIED SECURITY PRINCIPLES
              </span>
              <h2 className="text-xl sm:text-3xl md:text-4xl text-[#0d1b36] dark:text-white font-bold mt-1 tracking-tight text-left sm:text-center">
                Architectural Foundations
              </h2>
              <p className="text-xs sm:text-sm text-[#5a4138] dark:text-slate-300 mt-1.5 text-left sm:text-center">
                Clear technical parameters defining how OMNiGRC handles data, AI evaluation, and tenant isolation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {/* Pillar 1 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#f1f3ff] dark:bg-navy-900 border border-slate-300 dark:border-navy-700/60 shadow-sm flex flex-col justify-between hover:border-[#F15E1C]/40 dark:hover:border-orange-500/40 hover:shadow-md transition-all duration-200 group">
                <div>
                  <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-navy-950 w-fit border border-slate-300 dark:border-navy-700 text-[#F15E1C] dark:text-orange-400 mb-3 group-hover:scale-105 transition-transform duration-200">
                    <Lock className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0d1b36] dark:text-slate-200 mb-2 text-left">Application-Level Tenant Isolation</h3>
                  <p className="text-xs sm:text-sm text-[#5a4138] dark:text-slate-400 leading-relaxed mb-4 text-justify">
                    Logical data boundaries enforced at the application tier ensure strict authorization controls and data segregation between organization workspaces.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-300 dark:border-navy-700/60">
                  <span className="font-mono text-[11px] sm:text-xs text-[#006c4d] dark:text-teal-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" /> Workspace Scoped Boundaries
                  </span>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#f1f3ff] dark:bg-navy-900 border border-slate-300 dark:border-navy-700/60 shadow-sm flex flex-col justify-between hover:border-[#F15E1C]/40 dark:hover:border-orange-500/40 hover:shadow-md transition-all duration-200 group">
                <div>
                  <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-navy-950 w-fit border border-slate-300 dark:border-navy-700 text-[#F15E1C] dark:text-orange-400 mb-3 group-hover:scale-105 transition-transform duration-200">
                    <Cpu className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0d1b36] dark:text-slate-200 mb-2 text-left">Advisory AI Data Minimization</h3>
                  <p className="text-xs sm:text-sm text-[#5a4138] dark:text-slate-400 leading-relaxed mb-4 text-justify">
                    Tenant-sensitive payloads and PII are stripped prior to AI clause correlation requests. AI outputs remain strictly advisory until explicitly approved by human analysts.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-300 dark:border-navy-700/60">
                  <span className="font-mono text-[11px] sm:text-xs text-[#006c4d] dark:text-teal-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" /> AI Assists, Humans Decide
                  </span>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#f1f3ff] dark:bg-navy-900 border border-slate-300 dark:border-navy-700/60 shadow-sm flex flex-col justify-between hover:border-[#F15E1C]/40 dark:hover:border-orange-500/40 hover:shadow-md transition-all duration-200 group">
                <div>
                  <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-navy-950 w-fit border border-slate-300 dark:border-navy-700 text-[#F15E1C] dark:text-orange-400 mb-3 group-hover:scale-105 transition-transform duration-200">
                    <UserCheck className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0d1b36] dark:text-slate-200 mb-2 text-left">Human-in-the-Loop Governance</h3>
                  <p className="text-xs sm:text-sm text-[#5a4138] dark:text-slate-400 leading-relaxed mb-4 text-justify">
                    Automated workflows generate recommendations, but all risk acceptances, control mappings, policy sign-offs, and evidence reviews require human confirmation.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-300 dark:border-navy-700/60">
                  <span className="font-mono text-[11px] sm:text-xs text-[#006c4d] dark:text-teal-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" /> Mandatory Human Sign-Off
                  </span>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#f1f3ff] dark:bg-navy-900 border border-slate-300 dark:border-navy-700/60 shadow-sm flex flex-col justify-between hover:border-[#F15E1C]/40 dark:hover:border-orange-500/40 hover:shadow-md transition-all duration-200 group">
                <div>
                  <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-navy-950 w-fit border border-slate-300 dark:border-navy-700 text-[#F15E1C] dark:text-orange-400 mb-3 group-hover:scale-105 transition-transform duration-200">
                    <FileCheck2 className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0d1b36] dark:text-slate-200 mb-2 text-left">External Evidence Index Model</h3>
                  <p className="text-xs sm:text-sm text-[#5a4138] dark:text-slate-400 leading-relaxed mb-4 text-justify">
                    Instead of copying sensitive customer files into platform storage, OMNiGRC indexes external reference links and metadata for auditor verification.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-300 dark:border-navy-700/60">
                  <span className="font-mono text-[11px] sm:text-xs text-[#006c4d] dark:text-teal-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" /> Reference Pointer Indexing
                  </span>
                </div>
              </div>

              {/* Pillar 5 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#f1f3ff] dark:bg-navy-900 border border-slate-300 dark:border-navy-700/60 shadow-sm flex flex-col justify-between hover:border-[#F15E1C]/40 dark:hover:border-orange-500/40 hover:shadow-md transition-all duration-200 group">
                <div>
                  <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-navy-950 w-fit border border-slate-300 dark:border-navy-700 text-[#F15E1C] dark:text-orange-400 mb-3 group-hover:scale-105 transition-transform duration-200">
                    <Eye className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0d1b36] dark:text-slate-200 mb-2 text-left">Event & Audit Traceability</h3>
                  <p className="text-xs sm:text-sm text-[#5a4138] dark:text-slate-400 leading-relaxed mb-4 text-justify">
                    Structured operational event logs record control changes, risk evaluation updates, and user actions for audit workpaper generation.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-300 dark:border-navy-700/60">
                  <span className="font-mono text-[11px] sm:text-xs text-[#006c4d] dark:text-teal-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" /> Auditing Workpaper Ready
                  </span>
                </div>
              </div>

              {/* Pillar 6 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#f1f3ff] dark:bg-navy-900 border border-slate-300 dark:border-navy-700/60 shadow-sm flex flex-col justify-between hover:border-[#F15E1C]/40 dark:hover:border-orange-500/40 hover:shadow-md transition-all duration-200 group">
                <div>
                  <div className="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-navy-950 w-fit border border-slate-300 dark:border-navy-700 text-[#F15E1C] dark:text-orange-400 mb-3 group-hover:scale-105 transition-transform duration-200">
                    <Server className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0d1b36] dark:text-slate-200 mb-2 text-left">Containerized Deployment Options</h3>
                  <p className="text-xs sm:text-sm text-[#5a4138] dark:text-slate-400 leading-relaxed mb-4 text-justify">
                    Flexible options for shared SaaS, private single-tenant MSSP instances, or customer-controlled container runtime environments.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-300 dark:border-navy-700/60">
                  <span className="font-mono text-[11px] sm:text-xs text-[#006c4d] dark:text-teal-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" /> Docker Container Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: DEPLOYMENT MODEL ARCHITECTURE */}
        <section className="w-full bg-transparent px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-6 sm:py-8 md:py-10 border-b border-slate-200 dark:border-navy-700/60">
          <div className="w-full max-w-7xl xl:max-w-[1500px] 2xl:max-w-[1750px] mx-auto">
            <div className="text-left sm:text-center max-w-3xl xl:max-w-4xl mx-auto mb-6 sm:mb-8">
              <span className="font-mono text-xs text-[#F15E1C] dark:text-orange-400 font-bold uppercase tracking-widest block">
                DEPLOYMENT ARCHITECTURE
              </span>
              <h2 className="text-xl sm:text-3xl md:text-4xl text-[#0d1b36] dark:text-white font-bold mt-1 tracking-tight text-left sm:text-center">
                Deployment Models & Operational Boundaries
              </h2>
              <p className="text-xs sm:text-sm text-[#5a4138] dark:text-slate-300 mt-1.5 text-left sm:text-center">
                Accurate deployment classifications tailored to team infrastructure requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 mb-5 sm:mb-6">
              {/* Model 1: MSSP_SHARED */}
              <div className="bg-white dark:bg-navy-900 rounded-2xl p-5 sm:p-6 border border-slate-300 dark:border-navy-700/60 shadow-sm flex flex-col justify-between hover:border-[#F15E1C]/40 dark:hover:border-orange-500/40 hover:shadow-md transition-all duration-200 group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#ffdbcf] dark:bg-orange-950/30 text-[#380d00] dark:text-orange-400 font-mono text-[10px] font-bold">
                       MSSP_SHARED
                    </span>
                    <Building2 className="h-4 w-4 text-[#F15E1C] group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0d1b36] dark:text-white mb-2 text-left">Shared Multi-Tenant SaaS</h3>
                  <p className="text-xs sm:text-sm text-[#5a4138] dark:text-slate-400 leading-relaxed mb-4 text-justify">
                    Fast deployment for lean security teams with application-level tenant isolation, automated updates, and managed infrastructure operations.
                  </p>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#0d1b36] dark:text-slate-200 pt-3 border-t border-slate-100 dark:border-navy-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#006c4d] dark:text-teal-400 shrink-0" /> <span>Application-level workspace isolation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#006c4d] dark:text-teal-400 shrink-0" /> <span>Managed maintenance & schema migrations</span>
                  </li>
                </ul>
              </div>

              {/* Model 2: PRIVATE_MSSP */}
              <div className="bg-white dark:bg-navy-900 rounded-2xl p-5 sm:p-6 border border-slate-300 dark:border-navy-700/60 shadow-sm flex flex-col justify-between hover:border-[#F15E1C]/40 dark:hover:border-orange-500/40 hover:shadow-md transition-all duration-200 group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#ffdbcf] dark:bg-orange-950/30 text-[#380d00] dark:text-orange-400 font-mono text-[10px] font-bold">
                      PRIVATE_MSSP
                    </span>
                    <KeyRound className="h-4 w-4 text-[#F15E1C] group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0d1b36] dark:text-white mb-2 text-left">Dedicated Single-Tenant Instance</h3>
                  <p className="text-xs sm:text-sm text-[#5a4138] dark:text-slate-400 leading-relaxed mb-4 text-justify">
                    Dedicated application environment for managed service providers and enterprise teams requiring dedicated runtime boundaries.
                  </p>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#0d1b36] dark:text-slate-200 pt-3 border-t border-slate-100 dark:border-navy-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#006c4d] dark:text-teal-400 shrink-0" /> <span>Isolated application instance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#006c4d] dark:text-teal-400 shrink-0" /> <span>MSSP multi-client context switching</span>
                  </li>
                </ul>
              </div>

              {/* Model 3: SELF_HOSTED */}
              <div className="bg-white dark:bg-navy-900 rounded-2xl p-5 sm:p-6 border border-slate-300 dark:border-navy-700/60 shadow-sm flex flex-col justify-between hover:border-[#F15E1C]/40 dark:hover:border-orange-500/40 hover:shadow-md transition-all duration-200 group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#ffdbcf] dark:bg-orange-950/30 text-[#380d00] dark:text-orange-400 font-mono text-[10px] font-bold">
                      SELF_HOSTED
                    </span>
                    <HardDrive className="h-4 w-4 text-[#F15E1C] group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0d1b36] dark:text-white mb-2 text-left">Customer-Controlled Docker Runtime</h3>
                  <p className="text-xs sm:text-sm text-[#5a4138] dark:text-slate-400 leading-relaxed mb-4 text-justify">
                    Customer controls infrastructure and runtime operations, receiving Arav-distributed container artifacts for internal hosting.
                  </p>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#0d1b36] dark:text-slate-200 pt-3 border-t border-slate-100 dark:border-navy-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#006c4d] dark:text-teal-400 shrink-0" /> <span>Containerized Docker deployment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#006c4d] dark:text-teal-400 shrink-0" /> <span>Internal infrastructure control</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Self-Hosted Clarification Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-navy-900 border border-slate-300 dark:border-navy-700/60 text-xs sm:text-sm text-[#5a4138] dark:text-slate-400 leading-relaxed w-full text-justify">
              <strong className="text-[#0d1b36] dark:text-slate-200 font-semibold block mb-1 text-left">Self-Hosted Deployment Specification:</strong>
              &ldquo;Under the Self-Hosted model, the customer controls infrastructure and runtime operations, but receives only Arav-distributed executable container artifacts, not the source repository or build/signing infrastructure.&rdquo;
            </div>
          </div>
        </section>

        {/* SECTION 3: PRODUCT TRUTH BOUNDARIES */}
        <section className="w-full bg-transparent px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-6 sm:py-8 md:py-10 border-b border-slate-200 dark:border-navy-700/60">
          <div className="w-full max-w-7xl xl:max-w-[1500px] 2xl:max-w-[1750px] mx-auto">
            <div className="text-left sm:text-center max-w-3xl xl:max-w-4xl mx-auto mb-6 sm:mb-8">
              <span className="font-mono text-xs text-[#F15E1C] dark:text-orange-400 font-bold uppercase tracking-widest block">
                PRODUCT TRUTH & BOUNDARIES
              </span>
              <h2 className="text-xl sm:text-3xl md:text-4xl text-[#0d1b36] dark:text-white font-bold mt-1 tracking-tight text-left sm:text-center">
                What We Do & Do Not Claim
              </h2>
              <p className="text-xs sm:text-sm text-[#5a4138] dark:text-slate-300 mt-1.5 text-left sm:text-center">
                Honest, audit-defensible capabilities without marketing hyperbole.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {/* What We Support */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#faf8ff] dark:bg-navy-900/60 border border-slate-300 dark:border-navy-700/60 shadow-sm flex flex-col justify-between hover:border-[#006c4d]/40 dark:hover:border-teal-500/40 hover:shadow-md transition-all duration-200">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#006c4d] dark:text-teal-400 mb-4 flex items-center gap-2 text-left">
                    <CheckCircle2 className="h-5 w-5 shrink-0" /> <span>What OMNiGRC Delivers</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#0d1b36] dark:text-slate-300">
                    <li className="flex items-start gap-2.5 text-left">
                      <span className="text-[#006c4d] dark:text-teal-400 font-bold mt-0.5">•</span>
                      <span>Application-level tenant isolation boundaries</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-left">
                      <span className="text-[#006c4d] dark:text-teal-400 font-bold mt-0.5">•</span>
                      <span>Advisory AI suggestions requiring human approval</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-left">
                      <span className="text-[#006c4d] dark:text-teal-400 font-bold mt-0.5">•</span>
                      <span>5x5 likelihood x impact risk register scoring</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-left">
                      <span className="text-[#006c4d] dark:text-teal-400 font-bold mt-0.5">•</span>
                      <span>External evidence reference link indexing</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-left">
                      <span className="text-[#006c4d] dark:text-teal-400 font-bold mt-0.5">•</span>
                      <span>Vulnerability finding tracking from external sources</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* What We Explicitly Exclude */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#fff5f2] dark:bg-rose-950/20 border border-[#ffdbcf] dark:border-rose-900/40 shadow-sm flex flex-col justify-between hover:border-[#D4521A]/40 dark:hover:border-rose-500/40 hover:shadow-md transition-all duration-200">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#D4521A] dark:text-rose-400 mb-4 flex items-center gap-2 text-left">
                    <AlertCircle className="h-5 w-5 shrink-0" /> <span>Non-Supported Marketing Overstatements</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#380d00] dark:text-slate-300">
                    <li className="flex items-start gap-2.5 text-left">
                      <span className="text-[#D4521A] dark:text-rose-400 font-bold mt-0.5">•</span>
                      <span>No PostgreSQL RLS product guarantees</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-left">
                      <span className="text-[#D4521A] dark:text-rose-400 font-bold mt-0.5">•</span>
                      <span>No absolute &ldquo;zero PII&rdquo; guarantees</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-left">
                      <span className="text-[#D4521A] dark:text-rose-400 font-bold mt-0.5">•</span>
                      <span>No unsupported external certification sign-off or overclaimed audit chains</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-left">
                      <span className="text-[#D4521A] dark:text-rose-400 font-bold mt-0.5">•</span>
                      <span>No native vulnerability scanning claims</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-left">
                      <span className="text-[#D4521A] dark:text-rose-400 font-bold mt-0.5">•</span>
                      <span>No air-gapped LLM marketing claims</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: CTA BANNER */}
        <section className="w-full bg-transparent px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8 sm:py-10 md:py-12">
          <div className="w-full max-w-5xl xl:max-w-[1500px] 2xl:max-w-[1750px] mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#0d1b36] dark:text-white font-extrabold tracking-tight mb-2 sm:mb-3 text-center">
              Discuss your security & architecture requirements.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#5a4138] dark:text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-center">
              Schedule a technical walkthrough to review tenant boundaries, advisory AI data minimization, and deployment options.
            </p>
            <div className="flex justify-center w-full">
              <Link
                href="/demo"
                className="w-full sm:w-auto max-w-sm inline-flex items-center justify-center px-6 sm:px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#F15E1C] to-[#D4521A] hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-md text-xs sm:text-sm text-center"
              >
                <span>Request Architecture Walkthrough</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
