"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Network,
  Shield,
  RefreshCw,
  Users,
  ShieldCheck,
  AlertTriangle,
  Clock,
  EyeOff,
  CheckCircle2,
  Workflow,
  Kanban,
  FileCheck,
  ShieldAlert,
  Lock,
  Zap,
  Check,
  X,
  Calendar,
  ChevronRight,
  ArrowRight,
  Building2
} from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface ClientTenant {
  id: string;
  name: string;
  code: string;
  frameworks: string[];
  readiness: number;
  targetWindow: string;
  vcisoLead: string;
  status: string;
  activeRisk: string;
  controlScore: string;
}

const CLIENT_ROSTER: ClientTenant[] = [
  {
    id: "ACME-09",
    name: "Acme Cloud Systems Ltd.",
    code: "AC",
    frameworks: ["SOC 2 T2", "ISO 27001"],
    readiness: 88,
    targetWindow: "Q3 Recertification",
    vcisoLead: "E. Vance (Principal Advisory)",
    status: "On Track",
    activeRisk: "High (16)",
    controlScore: "92% mapped"
  },
  {
    id: "NVK-04",
    name: "Novak Health Analytics",
    code: "NK",
    frameworks: ["HIPAA", "ISO 42001"],
    readiness: 74,
    targetWindow: "Initial Gap Closure",
    vcisoLead: "M. Morales (Health Practice)",
    status: "Gap Closure",
    activeRisk: "Medium (12)",
    controlScore: "78% mapped"
  },
  {
    id: "APX-12",
    name: "Apex Financial Logistics",
    code: "AP",
    frameworks: ["SOC 2 T2", "PCI-DSS"],
    readiness: 94,
    targetWindow: "Annual Audit Fieldwork",
    vcisoLead: "E. Vance (Principal Advisory)",
    status: "Audit Ready",
    activeRisk: "Low (6)",
    controlScore: "98% mapped"
  }
];

export default function MSSPSolutionPage() {
  const [selectedClient, setSelectedClient] = useState<ClientTenant>(CLIENT_ROSTER[0]);
  const [activeStage, setActiveStage] = useState<number>(2);

  return (
    <div className="min-h-screen bg-transparent text-slate-900 dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-slate-900 dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />
      <div className="flex flex-col w-full pt-16">
        {/* Top Decorative Blur Accents */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-gradient-to-b from-primary/10 via-slate-100 dark:via-[#16233F]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
          <div className="absolute top-48 right-[-10%] w-[420px] h-[420px] bg-emerald-500/10 dark:bg-amber/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

          {/* Section 1: Hero */}
          <section className="w-full max-w-7xl mx-auto px-6 pt-10 md:pt-14 pb-20 bg-grid-mesh-adaptive">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200 dark:bg-navy-800 text-slate-900 dark:text-white shadow-sm mb-6 border border-slate-300 dark:border-navy-700">
                <Network className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-900 dark:text-white">
                  SOLUTIONS FOR MANAGED SERVICE PROVIDERS &amp; vCISOs
                </span>
              </div>

              {/* Hero Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-[52px] lg:leading-[60px] text-slate-900 dark:text-white tracking-tight font-bold mb-6">
                Coordinate multi-client governance without{" "}
                <span className="text-primary">administrative chaos</span>.
              </h1>

              {/* Subheadline */}
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mb-8 leading-relaxed">
                Empower your vCISO and security advisory practice with centralized client tenancy, delegated operational workflows, and isolated client governance environments.
              </p>

              {/* CTA Cluster */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium text-sm shadow-md transition-all"
                >
                  <span>Request Partner Walkthrough</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-900 dark:text-white font-medium text-sm shadow-sm transition-all border border-slate-200 dark:border-navy-700"
                >
                  <Network className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <span>Explore Architecture</span>
                </Link>
              </div>

              {/* Capability Badges Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl">
                <div className="flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-100 dark:bg-navy-800/80 rounded-lg shadow-sm border border-slate-200 dark:border-navy-700">
                  <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-xs font-medium text-slate-900 dark:text-slate-200">Client Tenant Isolation</span>
                </div>
                <div className="flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-100 dark:bg-navy-800/80 rounded-lg shadow-sm border border-slate-200 dark:border-navy-700">
                  <RefreshCw className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-xs font-medium text-slate-900 dark:text-slate-200">Context Switching</span>
                </div>
                <div className="flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-100 dark:bg-navy-800/80 rounded-lg shadow-sm border border-slate-200 dark:border-navy-700">
                  <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-xs font-medium text-slate-900 dark:text-slate-200">Delegated Operations</span>
                </div>
                <div className="flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-100 dark:bg-navy-800/80 rounded-lg shadow-sm border border-slate-200 dark:border-navy-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-xs font-medium text-slate-900 dark:text-slate-200">Human Sign-off</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Hero Visual Accent: Interactive Partner Cockpit Preview */}
        <section className="w-full max-w-7xl mx-auto px-6 -mt-8 mb-24">
          <div className="relative bg-white dark:bg-[#16233F] rounded-2xl shadow-xl p-6 md:p-8 overflow-hidden border border-slate-200 dark:border-navy-700">
            {/* Cockpit Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 bg-slate-50 dark:bg-[#0A111F] px-4 py-3 rounded-xl mb-6 border border-slate-200/60 dark:border-navy-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400 font-medium ml-2">
                  omnigrc://mssp-console.partner/portfolio
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white font-mono text-xs border border-slate-200 dark:border-navy-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active Managed Client Tenants
                </span>
                <span className="px-2.5 py-1 rounded bg-primary/15 text-primary font-mono text-xs font-semibold">
                  APPLICATION-LEVEL TENANT ISOLATION
                </span>
              </div>
            </div>

            {/* Quick Stats Strip */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0A111F] border border-slate-200/60 dark:border-navy-800">
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-1 uppercase font-semibold">Active Audits Prepared</div>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl text-slate-900 dark:text-white font-bold">9 Audits</span>
                  <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-medium">+3 this quarter</span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0A111F] border border-slate-200/60 dark:border-navy-800">
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-1 uppercase font-semibold">Total Control Mappings</div>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl text-slate-900 dark:text-white font-bold">1,842</span>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 font-medium">reusable baselines</span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0A111F] border border-slate-200/60 dark:border-navy-800">
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-1 uppercase font-semibold">90-Day Cadence Tasks</div>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl text-slate-900 dark:text-white font-bold">94.8%</span>
                  <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-medium">On-track</span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0A111F] border border-slate-200/60 dark:border-navy-800">
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-1 uppercase font-semibold">Pending Human Reviews</div>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl text-primary font-bold">12 Reviews</span>
                  <span className="font-mono text-xs text-primary font-medium">vCISO sign-off required</span>
                </div>
              </div>
            </div>

            {/* Micro Visual Client Roster Interactive Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-navy-800">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-slate-100 dark:bg-navy-800 text-xs font-semibold text-slate-900 dark:text-white uppercase">
                    <th className="py-3 px-4 rounded-l-lg">Client Organization</th>
                    <th className="py-3 px-4">Active Frameworks</th>
                    <th className="py-3 px-4">Readiness Status</th>
                    <th className="py-3 px-4">Target Window</th>
                    <th className="py-3 px-4">Assigned vCISO Lead</th>
                    <th className="py-3 px-4 rounded-r-lg text-right">Switch Context</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-navy-800">
                  {CLIENT_ROSTER.map((client) => {
                    const isSelected = selectedClient.id === client.id;
                    return (
                      <tr
                        key={client.id}
                        className={`transition-colors ${
                          isSelected ? "bg-primary/5 dark:bg-primary/10 font-medium" : "hover:bg-slate-50 dark:hover:bg-[#0A111F]"
                        }`}
                      >
                        <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded bg-primary/10 text-primary flex items-center justify-center font-mono text-xs font-bold">
                              {client.code}
                            </div>
                            <div>
                              <div>{client.name}</div>
                              <div className="font-mono text-[10px] text-slate-500 dark:text-slate-400 font-normal">{client.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="flex flex-wrap gap-1">
                            {client.frameworks.map((fw) => (
                              <span
                                key={fw}
                                className="px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white font-mono text-[11px] border border-slate-200 dark:border-navy-700"
                              >
                                {fw}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-20 h-2 rounded-full bg-slate-200 dark:bg-navy-700 overflow-hidden">
                              <div
                                className="h-full bg-emerald-500 rounded-full"
                                style={{ width: `${client.readiness}%` }}
                              ></div>
                            </div>
                            <span className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                              {client.readiness}%
                            </span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-slate-500 dark:text-slate-400 font-mono text-xs">{client.targetWindow}</td>
                        <td className="py-3.5 px-4 text-slate-900 dark:text-white text-xs">{client.vcisoLead}</td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => setSelectedClient(client)}
                            className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                              isSelected
                                ? "bg-primary text-white shadow-sm"
                                : "bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-navy-700"
                            }`}
                          >
                            {isSelected ? "Active Context" : "Switch Context"}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Selected Tenant Active Context Detail Box */}
            <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-[#0A111F] border border-primary/20 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold font-mono">
                  {selectedClient.code}
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 uppercase font-mono">Active Workspace Context</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">{selectedClient.name} ({selectedClient.id})</div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                <div><span className="text-slate-500 dark:text-slate-400">Inherent Risk: </span><span className="font-bold text-primary">{selectedClient.activeRisk}</span></div>
                <div><span className="text-slate-500 dark:text-slate-400">Framework Mapping: </span><span className="font-bold text-emerald-600 dark:text-emerald-400">{selectedClient.controlScore}</span></div>
                <div className="px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-semibold">Application-Level Isolated Scope</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1.5: SECURITY OPERATIONS VISUAL BANNER */}
        <section className="w-full max-w-7xl mx-auto px-6 py-6">
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-navy-700 shadow-xl bg-slate-900">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              <div className="lg:col-span-7 relative h-[260px] sm:h-[340px] w-full">
                <img
                  src="/hero-signoff.jpg"
                  alt="Multi-client security operations center and infrastructure sign-off"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-900/40 to-slate-900 hidden lg:block" />
              </div>
              <div className="lg:col-span-5 p-6 sm:p-10 bg-slate-900 text-white space-y-4">
                <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-400 font-mono text-xs font-bold uppercase tracking-wider">
                  SECURITY OPERATIONS & CONTROL
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  Multi-Client Operations with Isolated Tenant Boundaries
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Manage multiple client environments simultaneously while ensuring strict application-level tenant isolation, auditable sign-offs, and client-specific evidence indexing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The MSSP Problem */}
        <section className="w-full bg-slate-50 dark:bg-[#16233F]/60 py-20 border-y border-slate-200 dark:border-navy-700/60">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <div className="text-xs text-primary uppercase tracking-wider mb-2 font-semibold font-mono">
                THE MULTI-TENANT CHALLENGE
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Delivering GRC across clients is broken by disconnected workspaces.
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                Consultants lose billable hours each week maintaining ad-hoc spreadsheets, toggling conflicting client logins, and manually reconstructing the same baseline controls.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-[#0A111F] p-6 rounded-2xl shadow-sm flex flex-col justify-between border border-slate-200 dark:border-navy-700">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                    <EyeOff className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg text-slate-900 dark:text-white font-bold mb-2">Scattered Client Portals &amp; Sheets</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Juggling disparate client spreadsheets and tenant credentials introduces data leakage risks, human version errors, and operational drag across advisory staff.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-navy-800 text-xs font-mono text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Risk: Cross-account friction &amp; stale evidence</span>
                </div>
              </div>

              <div className="bg-white dark:bg-[#0A111F] p-6 rounded-2xl shadow-sm flex flex-col justify-between border border-slate-200 dark:border-navy-700">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg text-slate-900 dark:text-white font-bold mb-2">Repetitive Baseline Setup</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Re-authoring baseline control standards, audit questions, and compliance cadences from scratch for every newly signed client wastes high-value consulting capacity.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-navy-800 text-xs font-mono text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>Drag: 30–45 hours spent per new baseline setup</span>
                </div>
              </div>

              <div className="bg-white dark:bg-[#0A111F] p-6 rounded-2xl shadow-sm flex flex-col justify-between border border-slate-200 dark:border-navy-700">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg text-slate-900 dark:text-white font-bold mb-2">Opaque Multi-Client Status</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Lack of a single operational view to assess which client is approaching an audit window, which risks need mitigation review, or which control tests elapsed.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-navy-800 text-xs font-mono text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Blindspot: Surprises during audit fieldwork</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: How OMNiGRC Resolves It */}
        <section className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mb-12">
            <div className="text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 font-semibold font-mono">
              PURPOSE-BUILT MSSP ARCHITECTURE
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Centralized partner operations with strict organizational isolation.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
              OMNiGRC structures compliance delivery the way advisory firms operate: top-level partner supervision over clearly separated client organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#16233F] p-6 rounded-2xl shadow-md flex flex-col justify-between border border-slate-200 dark:border-navy-700">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg text-slate-900 dark:text-white font-bold mb-2">Client Organization Hierarchy</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Provider-level administration managing discrete client organizations with dedicated data boundaries. Ensure lead advisors access authorized client records.
                </p>
              </div>
              <div className="mt-6 p-3 rounded-lg bg-slate-50 dark:bg-[#0A111F] text-xs font-mono text-slate-900 dark:text-slate-200 flex items-center gap-2 border border-slate-200/60 dark:border-navy-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Isolated audit scopes &amp; application logging</span>
              </div>
            </div>

            <div className="bg-white dark:bg-[#16233F] p-6 rounded-2xl shadow-md flex flex-col justify-between border border-slate-200 dark:border-navy-700">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="text-lg text-slate-900 dark:text-white font-bold mb-2">Context Switching</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Navigation between client workspaces within authorized partner scopes. Jump directly into a client's risk board or compliance tracker in one click.
                </p>
              </div>
              <div className="mt-6 p-3 rounded-lg bg-slate-50 dark:bg-[#0A111F] text-xs font-mono text-slate-900 dark:text-slate-200 flex items-center gap-2 border border-slate-200/60 dark:border-navy-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Centralized governance context</span>
              </div>
            </div>

            <div className="bg-white dark:bg-[#16233F] p-6 rounded-2xl shadow-md flex flex-col justify-between border border-slate-200 dark:border-navy-700">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                  <Workflow className="w-6 h-6" />
                </div>
                <h3 className="text-lg text-slate-900 dark:text-white font-bold mb-2">Standardized Framework Baselines</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Propagate standard control templates across clients while preserving client-specific policies, custom risk scorings, and independent evidence links.
                </p>
              </div>
              <div className="mt-6 p-3 rounded-lg bg-slate-50 dark:bg-[#0A111F] text-xs font-mono text-slate-900 dark:text-slate-200 flex items-center gap-2 border border-slate-200/60 dark:border-navy-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Unified controls, client custom execution</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Meaningful Workflow Visualization */}
        <section className="w-full bg-slate-50 dark:bg-[#16233F]/60 py-24 border-y border-slate-200 dark:border-navy-700/60">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white font-mono text-xs mb-3 border border-slate-200 dark:border-navy-700">
                <Workflow className="w-3.5 h-3.5 text-primary" />
                <span>CANONICAL MSSP OPERATING WORKFLOW</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                MSSP Provider Console → Client Context Selection → Client Governance Data → Delegated Action &amp; Sign-off
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                How an advisory team governs a client engagement securely from partner-level oversight down to audit-grade execution.
              </p>
            </div>

            {/* Interactive Stage Selector */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 relative">
              <div
                onClick={() => setActiveStage(1)}
                className={`cursor-pointer rounded-2xl p-5 shadow-md flex flex-col justify-between transition-all border ${
                  activeStage === 1
                    ? "bg-white dark:bg-[#0A111F] border-primary ring-2 ring-primary/20"
                    : "bg-white dark:bg-[#0A111F] border-slate-200 dark:border-navy-700 hover:border-slate-300 dark:hover:border-navy-600"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-primary">STAGE 01</span>
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1">MSSP Provider Console</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    Partner leadership reviews aggregate health across client tenants, active audit targets, and global task queues.
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-[#16233F] p-2.5 rounded-lg font-mono text-xs text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-navy-800">
                  <div className="text-slate-900 dark:text-white font-medium mb-1">Partner Alert Feed</div>
                  <div className="text-[11px]">• Acme: 3 controls pending review</div>
                  <div className="text-[11px]">• Apex: SOC 2 fieldwork in 14d</div>
                </div>
              </div>

              <div
                onClick={() => setActiveStage(2)}
                className={`cursor-pointer rounded-2xl p-5 shadow-md flex flex-col justify-between transition-all border ${
                  activeStage === 2
                    ? "bg-white dark:bg-[#0A111F] border-emerald-500 ring-2 ring-emerald-500/20"
                    : "bg-white dark:bg-[#0A111F] border-slate-200 dark:border-navy-700 hover:border-slate-300 dark:hover:border-navy-600"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">STAGE 02</span>
                    <RefreshCw className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1">Client Context Selection</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    Select <span className="font-semibold text-slate-900 dark:text-white">{selectedClient.name}</span>. System establishes application-level tenant isolation parameters.
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-[#16233F] p-2.5 rounded-lg font-mono text-xs text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-navy-800">
                  <div className="text-emerald-600 dark:text-emerald-400 font-medium mb-1">• Tenant Scoped: {selectedClient.id}</div>
                  <div className="text-[11px] text-slate-900 dark:text-white font-semibold">Workspace switched: isolated tenant context</div>
                </div>
              </div>

              <div
                onClick={() => setActiveStage(3)}
                className={`cursor-pointer rounded-2xl p-5 shadow-md flex flex-col justify-between transition-all border ${
                  activeStage === 3
                    ? "bg-white dark:bg-[#0A111F] border-primary ring-2 ring-primary/20"
                    : "bg-white dark:bg-[#0A111F] border-slate-200 dark:border-navy-700 hover:border-slate-300 dark:hover:border-navy-600"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-primary">STAGE 03</span>
                    <FileCheck className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1">Client Governance Data</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    Access client's 5x5 Risk Register, SOC 2/ISO cross-walk, and 90-Day Cadence Board.
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-[#16233F] p-2.5 rounded-lg font-mono text-xs text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-navy-800">
                  <div className="flex justify-between text-[11px] text-slate-900 dark:text-white">
                    <span>5x5 Inherent Risk:</span>
                    <span className="font-bold text-primary">{selectedClient.activeRisk}</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-900 dark:text-white mt-1">
                    <span>Mapped Controls:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{selectedClient.controlScore}</span>
                  </div>
                </div>
              </div>

              <div
                onClick={() => setActiveStage(4)}
                className={`cursor-pointer rounded-2xl p-5 shadow-md flex flex-col justify-between transition-all border ${
                  activeStage === 4
                    ? "bg-white dark:bg-[#0A111F] border-emerald-500 ring-2 ring-emerald-500/20"
                    : "bg-white dark:bg-[#0A111F] border-slate-200 dark:border-navy-700 hover:border-slate-300 dark:hover:border-navy-600"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">STAGE 04</span>
                    <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1">Delegated Action &amp; Sign-off</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    vCISO reviews Advisory AI clause recommendations, assigns corrective owners, and logs defensible audit records.
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-[#16233F] p-2.5 rounded-lg font-mono text-xs border border-slate-200/60 dark:border-navy-800">
                  <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[10px] font-semibold mb-1">
                    RECORDED &amp; VERIFIED
                  </span>
                  <div className="text-[11px] text-slate-900 dark:text-white">Reviewed by {selectedClient.vcisoLead}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Core Workflows for MSSPs */}
        <section className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <div className="text-xs text-primary uppercase tracking-wider mb-2 font-semibold font-mono">
                POWERFUL MODULAR ENGINES
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Core Workflows Purpose-Built for Advisory Practices
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                Equip your advisory teams with specialized tools needed to deliver high-margin continuous governance.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-1 text-primary hover:text-primary/80 text-sm font-semibold"
              >
                <span>View All Workflows</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/products/compliance-board"
              className="group p-6 bg-white dark:bg-[#16233F] rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-navy-700"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Kanban className="w-5 h-5" />
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg text-slate-900 dark:text-white font-bold mb-2">Compliance Board</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Rolling 30/60/90-day task tracking across client accounts. Schedule vendor assessments, policy re-approvals, and access recertifications before they lapse.
              </p>
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-medium">Cadence Management →</span>
            </Link>

            <Link
              href="/products/control-mapping"
              className="group p-6 bg-white dark:bg-[#16233F] rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-navy-700"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg text-slate-900 dark:text-white font-bold mb-2">Control Mapping &amp; Crosswalks</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Map once across ISO 27001, SOC 2, and GDPR with Advisory AI guidance. Reduce duplicate work when expanding an existing client into subsequent frameworks.
              </p>
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-medium">Crosswalk Engine →</span>
            </Link>

            <Link
              href="/products/audits"
              className="group p-6 bg-white dark:bg-[#16233F] rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-navy-700"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white flex items-center justify-center">
                  <FileCheck className="w-5 h-5" />
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg text-slate-900 dark:text-white font-bold mb-2">Business Audit Management</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Structured workpapers and mock audits for client audit prep. Package clean digital binders with complete telemetry proof and timestamped approvals for 3rd-party auditors.
              </p>
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-medium">Audit Preparation →</span>
            </Link>

            <Link
              href="/products/risk-register"
              className="group p-6 bg-white dark:bg-[#16233F] rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-navy-700"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg text-slate-900 dark:text-white font-bold mb-2">Risk Register</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                5x5 Likelihood x Impact scoring tied directly to client-specific technical assets, vendor dependencies, and threat scenarios. Transparent risk treatment plans.
              </p>
              <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-medium">Asset-Centric Risk →</span>
            </Link>
          </div>
        </section>

        {/* Section 6: Deployment & Isolation Architecture */}
        <section className="w-full bg-slate-50 dark:bg-[#16233F]/60 py-24 border-y border-slate-200 dark:border-navy-700/60">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <div className="text-xs text-primary uppercase tracking-wider mb-2 font-semibold font-mono">
                INFRASTRUCTURE ISOLATION
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Deployment models crafted for regulated partner environments.
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                Deliver the exact security assurances your most demanding institutional, fintech, or defense-adjacent clients require.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-[#0A111F] p-8 rounded-2xl shadow-md flex flex-col justify-between border border-slate-200 dark:border-navy-700">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary/10 text-primary font-mono text-xs font-semibold mb-4">
                    <Lock className="w-3.5 h-3.5" />
                    <span>DEDICATED RUNTIME ENVIRONMENT</span>
                  </div>
                  <h3 className="text-xl text-slate-900 dark:text-white font-bold mb-3">Dedicated Customer-Hosted Instance</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Customer controls infrastructure and runtime operations, but receives only Arav-distributed executable artifacts, not the source repository or build/signing infrastructure.
                  </p>
                  <ul className="flex flex-col gap-3 text-xs text-slate-900 dark:text-slate-200 mb-8">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>Infrastructure controlled directly in customer account</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>Dedicated environment isolation for high-assurance mandates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>Executable artifacts signed and distributed by Arav</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>Audit trail and event log isolation</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-navy-800">
                  <Link
                    href="/trust"
                    className="inline-flex items-center gap-2 text-primary text-xs font-semibold hover:underline"
                  >
                    <span>Review Self-Hosted Architecture Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="bg-white dark:bg-[#0A111F] p-8 rounded-2xl shadow-md flex flex-col justify-between border border-slate-200 dark:border-navy-700">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white font-mono text-xs font-semibold mb-4 border border-slate-200 dark:border-navy-700">
                    <Zap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>RAPID ONBOARDING</span>
                  </div>
                  <h3 className="text-xl text-slate-900 dark:text-white font-bold mb-3">Managed Multi-Tenant SaaS</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    Standard secure cloud architecture designed for fast-growing advisory practices and boutique vCISOs who need immediate onboarding without cloud infrastructure overhead.
                  </p>
                  <ul className="flex flex-col gap-3 text-xs text-slate-900 dark:text-slate-200 mb-8">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>Application-level tenant boundary isolation &amp; authorization scopes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>Immediate client tenant provisioning via partner admin console</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>Structured application event logging and payload minimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>Predictable operational scaling for advisory teams</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-navy-800">
                  <Link
                    href="/trust"
                    className="inline-flex items-center gap-2 text-primary text-xs font-semibold hover:underline"
                  >
                    <span>Inspect Security &amp; Trust Vault</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Fit Assessment Matrix */}
        <section className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs text-primary uppercase tracking-wider mb-2 font-semibold font-mono">
              PARTNERSHIP EVALUATION
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Is OMNiGRC the right partner platform for your advisory practice?
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
              We believe in complete transparency. We built OMNiGRC for disciplined human-led advisory, not autopilot gimmicks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-slate-100 dark:bg-[#16233F] rounded-2xl shadow-sm flex flex-col justify-between border border-slate-200 dark:border-navy-700">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 dark:bg-emerald-500 text-white flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg text-slate-900 dark:text-white font-bold">Ideal Partner Fit</h3>
                </div>
                <ul className="flex flex-col gap-4 text-sm text-slate-900 dark:text-slate-100">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>vCISO &amp; GRC Consultancies:</strong> Advisory practices managing recurring security oversight, audits, and governance across multiple client tenants.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Security Advisory MSSPs:</strong> Providers delivering structured continuous compliance monitoring rather than once-a-year audit fire drills.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Advisory-First Practices:</strong> Teams that recognize compliance requires professional human scrutiny and context-aware risk decisioning.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Multi-Framework Delivery:</strong> Practices guiding clients across combined standards like ISO 27001, SOC 2, HIPAA, and ISO 42001.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 p-3 rounded-lg bg-white dark:bg-[#0A111F] font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold border border-slate-200/60 dark:border-navy-800">
                Result: Structured advisory delivery with predictable operational scale.
              </div>
            </div>

            <div className="p-8 bg-slate-50 dark:bg-[#0A111F] rounded-2xl shadow-sm flex flex-col justify-between border border-slate-200 dark:border-navy-700">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-navy-800 text-slate-600 dark:text-slate-300 flex items-center justify-center border border-slate-300 dark:border-navy-700">
                    <X className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg text-slate-900 dark:text-white font-bold">Not Designed For</h3>
                </div>
                <ul className="flex flex-col gap-4 text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <X className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>"Click-to-Automate" Magic Compliance Bots:</strong> Tools claiming automated audit certifications without human verification or evidence rigor.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Commodity IT MSPs:</strong> Basic desktop support re-sellers without specialized compliance or audit advisory practices.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Autonomous Auto-Remediation:</strong> Systems that alter client production code or infrastructure without explicit administrative approval.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Single-Checklist Audits:</strong> Organizations treating security governance as a static yearly checklist rather than continuous control maintenance.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 p-3 rounded-lg bg-white dark:bg-[#16233F] font-mono text-xs text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-navy-800">
                Principle: AI assists. Humans decide. Human judgment remains the final record.
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Final Conversion CTA Section */}
        <section className="w-full bg-slate-50 dark:bg-[#16233F]/60 py-24 border-t border-slate-200 dark:border-navy-700/60">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-br from-slate-100 to-slate-50 dark:from-[#0A111F] dark:to-[#16233F] rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-lg border border-slate-200 dark:border-navy-700">
              <div className="relative z-10 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#0A111F] text-slate-900 dark:text-white font-mono text-xs shadow-sm mb-4 border border-slate-200 dark:border-navy-700">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  PARTNER PROGRAM ENROLLMENT
                </div>
                <h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white font-bold tracking-tight mb-4">
                  Elevate your client governance operations.
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  Deliver structured, auditable GRC advisory services with confidence. Schedule a 1-on-1 walkthrough of the multi-client provider console with our architecture team.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium text-sm shadow-lg transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Request Partner Walkthrough</span>
                  </Link>
                  <Link
                    href="/trust"
                    className="inline-flex items-center gap-2 px-5 py-4 rounded-lg bg-white dark:bg-[#0A111F] hover:bg-slate-100 dark:hover:bg-navy-800 text-slate-900 dark:text-white font-medium text-sm shadow-sm transition-all border border-slate-200 dark:border-navy-700"
                  >
                    <Shield className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    <span>View Security &amp; Trust Specs</span>
                  </Link>
                </div>

                <div className="mt-10 pt-6 border-t border-slate-200/60 dark:border-navy-800 flex flex-wrap items-center justify-center gap-6 text-slate-600 dark:text-slate-300 font-mono text-xs">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    Application-Level Tenant Isolation
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    Customer-Hosted Option Available
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    Strict Role-Based Context Scoping
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
