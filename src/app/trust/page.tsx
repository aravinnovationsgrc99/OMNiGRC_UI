import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  ShieldCheck,
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
  title: "Trust, Security Architecture & Governance Assurance — OMNiGRC",
  description: "Application-level tenant isolation, advisory AI data minimization, and transparent deployment boundaries for security-conscious GRC teams.",
  openGraph: {
    title: "Trust & Security Architecture — OMNiGRC",
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
        <section className="relative w-full px-4 sm:px-6 lg:px-8 pt-6 pb-16 overflow-hidden border-b border-slate-200 dark:border-navy-700/60 bg-grid-mesh-adaptive">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ffdbcf]/30 rounded-full blur-3xl pointer-events-none -z-10 ambient-motion-1" />

          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdbcf] dark:bg-orange-950/30 text-[#380d00] dark:text-orange-400 mb-6 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-[#F15E1C]" />
              <span className="font-mono text-xs font-semibold tracking-wider uppercase">
                SECURITY ARCHITECTURE & TRUST ASSURANCE
              </span>
            </div>

            <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-[52px] lg:leading-[60px] text-[#0d1b36] dark:text-white font-extrabold tracking-tight mx-auto mb-6">
              Transparent security boundaries. Human-governed AI.
            </h1>

            <p className="max-w-3xl text-base sm:text-lg text-[#5a4138] dark:text-slate-300 font-medium mx-auto mb-8 leading-relaxed">
              OMNiGRC is engineered with application-level tenant isolation, advisory AI data minimization, and defensible audit trails to protect your organizational GRC telemetry.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#F15E1C] to-[#D4521A] hover:shadow-lg transition-all shadow-md"
              >
                <span>Request Architecture Walkthrough</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 1: CORE ARCHITECTURE PILLARS */}
        <section className="w-full bg-transparent px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-slate-200 dark:border-navy-700/60">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="font-mono text-xs text-[#F15E1C] dark:text-orange-400 font-bold uppercase tracking-widest">
                VERIFIED SECURITY PRINCIPLES
              </span>
              <h2 className="text-2xl sm:text-4xl text-[#0d1b36] dark:text-white font-bold mt-2 tracking-tight">
                Architectural Foundations
              </h2>
              <p className="text-sm sm:text-base text-[#5a4138] dark:text-slate-300 mt-2">
                Clear technical parameters defining how OMNiGRC handles data, AI evaluation, and tenant isolation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Pillar 1 */}
              <div className="p-6 rounded-2xl bg-[#f1f3ff] dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-xl bg-white dark:bg-navy-950 w-fit border border-slate-200 dark:border-navy-700 text-[#F15E1C] dark:text-orange-400 mb-4">
                    <Lock className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0d1b36] dark:text-slate-200 mb-2">Application-Level Tenant Isolation</h3>
                  <p className="text-xs text-[#5a4138] dark:text-slate-400 leading-relaxed mb-4">
                    Logical data boundaries enforced at the application tier ensure strict authorization controls and data segregation between organization workspaces.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 dark:border-navy-700/60">
                  <span className="font-mono text-[11px] text-[#006c4d] dark:text-teal-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Workspace Scoped Boundaries
                  </span>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-6 rounded-2xl bg-[#f1f3ff] dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-xl bg-white dark:bg-navy-950 w-fit border border-slate-200 dark:border-navy-700 text-[#F15E1C] dark:text-orange-400 mb-4">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0d1b36] dark:text-slate-200 mb-2">Advisory AI Data Minimization</h3>
                  <p className="text-xs text-[#5a4138] dark:text-slate-400 leading-relaxed mb-4">
                    Tenant-sensitive payloads and PII are stripped prior to AI clause correlation requests. AI outputs remain strictly advisory until explicitly approved by human analysts.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 dark:border-navy-700/60">
                  <span className="font-mono text-[11px] text-[#006c4d] dark:text-teal-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" /> AI Assists, Humans Decide
                  </span>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-6 rounded-2xl bg-[#f1f3ff] dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-xl bg-white dark:bg-navy-950 w-fit border border-slate-200 dark:border-navy-700 text-[#F15E1C] dark:text-orange-400 mb-4">
                    <UserCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0d1b36] dark:text-slate-200 mb-2">Human-in-the-Loop Governance</h3>
                  <p className="text-xs text-[#5a4138] dark:text-slate-400 leading-relaxed mb-4">
                    Automated workflows generate recommendations, but all risk acceptances, control mappings, policy sign-offs, and evidence reviews require human confirmation.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 dark:border-navy-700/60">
                  <span className="font-mono text-[11px] text-[#006c4d] dark:text-teal-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Mandatory Human Sign-Off
                  </span>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="p-6 rounded-2xl bg-[#f1f3ff] dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-xl bg-white dark:bg-navy-950 w-fit border border-slate-200 dark:border-navy-700 text-[#F15E1C] dark:text-orange-400 mb-4">
                    <FileCheck2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0d1b36] dark:text-slate-200 mb-2">External Evidence Index Model</h3>
                  <p className="text-xs text-[#5a4138] dark:text-slate-400 leading-relaxed mb-4">
                    Instead of copying sensitive customer files into platform storage, OMNiGRC indexes external reference links and metadata for auditor verification.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 dark:border-navy-700/60">
                  <span className="font-mono text-[11px] text-[#006c4d] dark:text-teal-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Reference Pointer Indexing
                  </span>
                </div>
              </div>

              {/* Pillar 5 */}
              <div className="p-6 rounded-2xl bg-[#f1f3ff] dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-xl bg-white dark:bg-navy-950 w-fit border border-slate-200 dark:border-navy-700 text-[#F15E1C] dark:text-orange-400 mb-4">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0d1b36] dark:text-slate-200 mb-2">Event & Audit Traceability</h3>
                  <p className="text-xs text-[#5a4138] dark:text-slate-400 leading-relaxed mb-4">
                    Structured operational event logs record control changes, risk evaluation updates, and user actions for audit workpaper generation.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 dark:border-navy-700/60">
                  <span className="font-mono text-[11px] text-[#006c4d] dark:text-teal-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Auditing Workpaper Ready
                  </span>
                </div>
              </div>

              {/* Pillar 6 */}
              <div className="p-6 rounded-2xl bg-[#f1f3ff] dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-xl bg-white dark:bg-navy-950 w-fit border border-slate-200 dark:border-navy-700 text-[#F15E1C] dark:text-orange-400 mb-4">
                    <Server className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0d1b36] dark:text-slate-200 mb-2">Containerized Deployment Options</h3>
                  <p className="text-xs text-[#5a4138] dark:text-slate-400 leading-relaxed mb-4">
                    Flexible options for shared SaaS, private single-tenant MSSP instances, or customer-controlled container runtime environments.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 dark:border-navy-700/60">
                  <span className="font-mono text-[11px] text-[#006c4d] dark:text-teal-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Docker Container Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: DEPLOYMENT MODEL ARCHITECTURE */}
        <section className="w-full bg-transparent px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-slate-200 dark:border-navy-700/60">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="font-mono text-xs text-[#F15E1C] dark:text-orange-400 font-bold uppercase tracking-widest">
                DEPLOYMENT ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-4xl text-[#0d1b36] dark:text-white font-bold mt-2 tracking-tight">
                Deployment Models & Operational Boundaries
              </h2>
              <p className="text-sm sm:text-base text-[#5a4138] dark:text-slate-300 mt-2">
                Accurate deployment classifications tailored to team infrastructure requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
              {/* Model 1: MSSP_SHARED */}
              <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-700/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#ffdbcf] dark:bg-orange-950/30 text-[#380d00] dark:text-orange-400 font-mono text-[10px] font-bold">
                      MSSP_SHARED
                    </span>
                    <Building2 className="h-4 w-4 text-[#F15E1C]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0d1b36] dark:text-white mb-2">Shared Multi-Tenant SaaS</h3>
                  <p className="text-xs text-[#5a4138] dark:text-slate-400 leading-relaxed mb-4">
                    Fast deployment for lean security teams with application-level tenant isolation, automated updates, and managed infrastructure operations.
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-[#0d1b36] dark:text-slate-200 pt-4 border-t border-slate-100 dark:border-navy-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#006c4d] dark:text-teal-400" /> Application-level workspace isolation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#006c4d] dark:text-teal-400" /> Managed maintenance & schema migrations
                  </li>
                </ul>
              </div>

              {/* Model 2: PRIVATE_MSSP */}
              <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-700/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#ffdbcf] dark:bg-orange-950/30 text-[#380d00] dark:text-orange-400 font-mono text-[10px] font-bold">
                      PRIVATE_MSSP
                    </span>
                    <KeyRound className="h-4 w-4 text-[#F15E1C]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0d1b36] dark:text-white mb-2">Dedicated Single-Tenant Instance</h3>
                  <p className="text-xs text-[#5a4138] dark:text-slate-400 leading-relaxed mb-4">
                    Dedicated application environment for managed service providers and enterprise teams requiring dedicated runtime boundaries.
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-[#0d1b36] dark:text-slate-200 pt-4 border-t border-slate-100 dark:border-navy-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#006c4d] dark:text-teal-400" /> Isolated application instance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#006c4d] dark:text-teal-400" /> MSSP multi-client context switching
                  </li>
                </ul>
              </div>

              {/* Model 3: SELF_HOSTED */}
              <div className="bg-white dark:bg-navy-900 rounded-2xl p-6 border border-slate-200 dark:border-navy-700/60 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#ffdbcf] dark:bg-orange-950/30 text-[#380d00] dark:text-orange-400 font-mono text-[10px] font-bold">
                      SELF_HOSTED
                    </span>
                    <HardDrive className="h-4 w-4 text-[#F15E1C]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0d1b36] dark:text-white mb-2">Customer-Controlled Docker Runtime</h3>
                  <p className="text-xs text-[#5a4138] dark:text-slate-400 leading-relaxed mb-4">
                    Customer controls infrastructure and runtime operations, receiving Arav-distributed container artifacts for internal hosting.
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-[#0d1b36] dark:text-slate-200 pt-4 border-t border-slate-100 dark:border-navy-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#006c4d] dark:text-teal-400" /> Containerized Docker deployment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#006c4d] dark:text-teal-400" /> Internal infrastructure control
                  </li>
                </ul>
              </div>
            </div>

            {/* Self-Hosted Clarification Box */}
            <div className="p-5 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700/60 text-xs text-[#5a4138] dark:text-slate-400 leading-relaxed max-w-4xl mx-auto">
              <strong className="text-[#0d1b36] dark:text-slate-200 font-semibold block mb-1">Self-Hosted Deployment Specification:</strong>
              "Under the Self-Hosted model, the customer controls infrastructure and runtime operations, but receives only Arav-distributed executable container artifacts, not the source repository or build/signing infrastructure."
            </div>
          </div>
        </section>

        {/* SECTION 3: PRODUCT TRUTH BOUNDARIES */}
        <section className="w-full bg-transparent px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-200 dark:border-navy-700/60">
          <div className="max-w-4xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="font-mono text-xs text-[#F15E1C] dark:text-orange-400 font-bold uppercase tracking-widest">
                PRODUCT TRUTH & BOUNDARIES
              </span>
              <h2 className="text-2xl sm:text-3xl text-[#0d1b36] dark:text-white font-bold mt-2">
                What We Do & Do Not Claim
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* What We Support */}
              <div className="p-6 rounded-2xl bg-[#faf8ff] dark:bg-navy-900/60 border border-slate-200 dark:border-navy-700/60">
                <h3 className="text-base font-bold text-[#006c4d] dark:text-teal-400 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" /> What OMNiGRC Delivers
                </h3>
                <ul className="space-y-3 text-xs text-[#0d1b36] dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#006c4d] dark:text-teal-400 font-bold">•</span>
                    <span>Application-level tenant isolation boundaries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#006c4d] dark:text-teal-400 font-bold">•</span>
                    <span>Advisory AI suggestions requiring human approval</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#006c4d] dark:text-teal-400 font-bold">•</span>
                    <span>5x5 likelihood x impact risk register scoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#006c4d] dark:text-teal-400 font-bold">•</span>
                    <span>External evidence reference link indexing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#006c4d] dark:text-teal-400 font-bold">•</span>
                    <span>Vulnerability finding tracking from external sources</span>
                  </li>
                </ul>
              </div>

              {/* What We Explicitly Exclude */}
              <div className="p-6 rounded-2xl bg-[#fff5f2] dark:bg-rose-950/20 border border-[#ffdbcf] dark:border-rose-900/40">
                <h3 className="text-base font-bold text-[#D4521A] dark:text-rose-400 mb-4 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" /> Non-Supported Marketing Overstatements
                </h3>
                <ul className="space-y-3 text-xs text-[#380d00] dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4521A] dark:text-rose-400 font-bold">•</span>
                    <span>No PostgreSQL RLS product guarantees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4521A] dark:text-rose-400 font-bold">•</span>
                    <span>No absolute "zero PII" guarantees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4521A] dark:text-rose-400 font-bold">•</span>
                    <span>No unsupported external certification sign-off or overclaimed audit chains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4521A] dark:text-rose-400 font-bold">•</span>
                    <span>No native vulnerability scanning claims</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4521A] dark:text-rose-400 font-bold">•</span>
                    <span>No air-gapped LLM marketing claims</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: CTA BANNER */}
        <section className="w-full bg-transparent px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl text-[#0d1b36] dark:text-white font-extrabold tracking-tight mb-4">
              Discuss your security & architecture requirements.
            </h2>
            <p className="text-sm sm:text-base text-[#5a4138] dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Schedule a technical walkthrough to review tenant boundaries, advisory AI data minimization, and deployment options.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#F15E1C] to-[#D4521A] hover:shadow-lg transition-all shadow-md"
            >
              <span>Request Architecture Walkthrough</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
