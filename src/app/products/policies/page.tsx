"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  FolderLock, Database, Verified, Calendar, BookOpen, Lock, Info, Users,
  AlertOctagon, CheckCircle, Link as LinkIcon, Bot, CalendarDays, Badge,
  CheckSquare, Eye, HelpCircle, ShieldCheck, History, Circle, CheckCircle2,
  XCircle, Cloud, Shield, ArrowRight, Network, ArrowUpRight, Search, Server,
  Cpu, Key, FileText, Layers, Share2, Filter, Download, Plus, MapPin, 
  Settings, Check, X, Bell, LayoutDashboard, Target, Zap, ChevronRight, UserCheck, Terminal, Building2, Scale, Gavel, AlertTriangle, PenTool, ArrowRightLeft, Hourglass, Activity, Clock, MailCheck, ClipboardCheck, LogIn, Sliders, ListChecks, ClipboardX, Repeat, Bug, CalendarClock, LineChart, UserCircle, Timer, FolderKanban, ArrowDown
} from "lucide-react";

export default function PoliciesPage() {
  const [selectedPolicyId, setSelectedPolicyId] = useState<'POL-SEC-01' | 'POL-ENG-04' | 'POL-OPS-08'>('POL-SEC-01');

  const policyData = {
    'POL-SEC-01': {
      code: 'POL-SEC-01',
      version: 'v3.2 (Active)',
      title: 'Information Security & Access Governance Policy',
      attestationText: 'Active Employee Attestation Status',
      attestationBar: 'Complete',
      attestationDetail: 'All active engineering staff attested upon onboarding and annual review cycle.',
      safeguards: [
        { fw: 'ISO 27001:2022', clause: 'Clause A.5.15 (Access Control)', status: 'ALIGNED' },
        { fw: 'SOC 2 Type II', clause: 'CC6.1 (Logical Access Security)', status: 'ALIGNED' },
        { fw: 'India DPDP Act 2023', clause: 'Section 8(5) (Security Safeguards)', status: 'ALIGNED' }
      ]
    },
    'POL-ENG-04': {
      code: 'POL-ENG-04',
      version: 'v2.1 (Active)',
      title: 'Software Development & Vulnerability Management Policy',
      attestationText: 'Active Engineering Attestation Status',
      attestationBar: '90%',
      attestationDetail: 'Mandatory review for all core platform and application security developers.',
      safeguards: [
        { fw: 'ISO 27001:2022', clause: 'Clause A.8.28 (Secure Coding)', status: 'ALIGNED' },
        { fw: 'SOC 2 Type II', clause: 'CC7.1 (Vulnerability Remediation)', status: 'ALIGNED' },
        { fw: 'NIST CSF', clause: 'ID.RA-1 (Asset Risk Assessment)', status: 'ALIGNED' }
      ]
    },
    'POL-OPS-08': {
      code: 'POL-OPS-08',
      version: 'v4.0 (In Review)',
      title: 'Third-Party & Vendor Risk Governance Policy',
      attestationText: 'Vendor Management Team Attestation',
      attestationBar: '75%',
      attestationDetail: 'Annual review underway; aligned to vendor onboarding and DPA execution workflows.',
      safeguards: [
        { fw: 'ISO 27001:2022', clause: 'Clause A.15.1 (Supplier Relationships)', status: 'REVIEW DUE' },
        { fw: 'SOC 2 Type II', clause: 'CC9.2 (Vendor Risk Management)', status: 'ALIGNED' },
        { fw: 'EU GDPR', clause: 'Article 28 (Data Processor DPAs)', status: 'ALIGNED' }
      ]
    }
  };

  const currentPolicy = policyData[selectedPolicyId];

  return (
    <div className="min-h-screen bg-transparent text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />
      <main className="flex-1 w-full pt-16">
      <div className="flex flex-col w-full">
        {/*  SECTION 1: HERO & POLICY GOVERNANCE OVERVIEW  */}
        <section className="relative w-full bg-[#faf8ff] dark:bg-[#0A111F] bg-grid-mesh-adaptive overflow-hidden">
          {/* Ambient glow accents */}
          <div aria-hidden="true" className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#F15E1C]/5 dark:bg-teal/8 blur-3xl pointer-events-none" />
          <div aria-hidden="true" className="absolute top-1/2 -left-16 w-80 h-80 rounded-full bg-[#2E936F]/6 dark:bg-teal/5 blur-2xl pointer-events-none" />
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            {/*  Left Column: Copy & CTAs  */}
            <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-slate-200 dark:bg-navy-700 text-primary font-label-sm text-label-sm uppercase tracking-wider">
                <FileText className="h-5 w-5 shrink-0" />
                <span>CORE WORKFLOW 04: POLICY GOVERNANCE &amp; REVIEW CADENCE</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-slate-900 dark:text-white font-bold tracking-tight">
                Centralized Policy Lifecycle, Ownership &amp; <span className="text-primary">Review Cadence</span>
              </h1>
              <p className="font-body-lg text-body-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                Bridge the gap between static policy documents and operational execution. OMNiGRC links corporate policies directly to regulatory framework clauses, technical controls, and employee attestation tracking.
              </p>
              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                <a className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container shadow-md transition-all" href="#policy-explorer">
                  <BookOpen className="h-5 w-5 shrink-0" />
                  <span>Explore Policy Manager Demo</span>
                </a>
                <a className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-lg bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white font-label-md text-label-md font-semibold hover:bg-slate-200 dark:hover:bg-navy-700 transition-colors" href="/demo">
                  <FileText className="h-5 w-5 shrink-0" />
                  <span>View Sample Policy Library</span>
                </a>
              </div>
              <div className="grid grid-cols-3 gap-space-sm pt-space-md w-full max-w-xl">
                <div className="flex flex-col p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F]">
                  <div className="flex items-center gap-1 text-secondary">
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <span className="font-code-md text-code-md font-bold">Structured</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-slate-900 dark:text-white font-medium mt-1">Version Control &amp; Diffs</span>
                </div>
                <div className="flex flex-col p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F]">
                  <div className="flex items-center gap-1 text-primary">
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <span className="font-code-md text-code-md font-bold">Annual</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-slate-900 dark:text-white font-medium mt-1">Automated Review Cadence</span>
                </div>
                <div className="flex flex-col p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F]">
                  <div className="flex items-center gap-1 text-secondary">
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <span className="font-code-md text-code-md font-bold">Mapped</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-slate-900 dark:text-white font-medium mt-1">Control &amp; Framework Bindings</span>
                </div>
              </div>
            </div>

            {/*  Right Column: Visual Policy Preview Card  */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full rounded-xl bg-white dark:bg-[#0A111F] p-space-md shadow-xl flex flex-col gap-space-md border border-slate-200 dark:border-navy-700">
                <div className="flex items-center justify-between pb-space-xs border-b border-slate-100 dark:border-navy-800">
                  <div className="flex items-center gap-space-xs">
                    <div className="w-3 h-3 rounded-full bg-secondary animate-pulse"></div>
                    <span className="font-label-md text-label-md text-slate-900 dark:text-white font-bold">Policy Life-Cycle Tracker</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-navy-700 font-code-sm text-code-sm text-slate-900 dark:text-white">POL-SEC-01</span>
                </div>
                <div className="space-y-space-xs">
                  <div className="p-space-sm rounded bg-slate-50 dark:bg-[#16233F] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-code-sm text-code-sm text-slate-900 dark:text-white">Information Security Policy</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">APPROVED</span>
                  </div>
                  <div className="p-space-sm rounded bg-slate-50 dark:bg-[#16233F] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-code-sm text-code-sm text-slate-900 dark:text-white">Employee Attestation</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">ON TRACK</span>
                  </div>
                  <div className="p-space-sm rounded bg-slate-50 dark:bg-[#16233F] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CalendarClock className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-code-sm text-code-sm text-slate-900 dark:text-white">Annual Review Recertification</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-primary font-semibold">DUE IN 45 DAYS</span>
                  </div>
                </div>
                <div className="pt-space-xs flex items-center justify-between text-slate-600 dark:text-slate-300 font-code-sm text-code-sm border-t border-slate-100 dark:border-navy-800">
                  <span>Governance Status</span>
                  <span className="text-secondary font-bold">Policy &amp; Control Bound</span>
                </div>
              </div>
            </div>
          </div>
          </div>{/* closes max-w-7xl */}
        </section>

        {/*  SECTION 2: STRUCTURED POLICY LIFECYCLE  */}
        <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
          <div className="flex flex-col gap-space-xs mb-space-lg">
            <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              <History className="h-5 w-5 shrink-0" />
              <span>End-to-End Governance</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-slate-900 dark:text-white font-bold">The 5-Stage Policy Governance Lifecycle</h2>
            <p className="font-body-md text-body-md text-slate-600 dark:text-slate-300 max-w-3xl">Transform policy management from isolated PDF storage into an active, auditable governance workflow.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-space-md">
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STAGE 01</span>
                <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-1">Authoring &amp; Clause Mapping</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Draft policies and bind specific statements directly to ISO 27001, SOC 2, and DPDP Act requirements.</p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STAGE 02</span>
                <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-1">Stakeholder Approval</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Route drafted policies for designated executive, CISO, and Legal sign-off prior to publishing.</p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STAGE 03</span>
                <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-1">Publish &amp; Staff Attestation</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Publish active policy versions and track employee sign-off attestations across teams.</p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STAGE 04</span>
                <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-1">Continuous Safeguard Binding</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Link policy rules directly to continuous technical controls for automated evidence collection.</p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STAGE 05</span>
                <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-1">Annual Review Cadence</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Trigger automated annual review reminders and version revision logs before audit windows open.</p>
              </div>
            </div>
          </div>{/* end max-w-7xl */}
        </section>

        {/*  SECTION 3: INTERACTIVE ACTIVE POLICY EXPLORER  */}
        <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl" id="policy-explorer">
          <div className="flex flex-col gap-space-xs mb-space-lg">
            <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              <BookOpen className="h-5 w-5 shrink-0" />
              <span>Interactive Policy Manager</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-slate-900 dark:text-white font-bold">Active Policy Explorer &amp; Detail Matrix</h2>
            <p className="font-body-md text-body-md text-slate-600 dark:text-slate-300 max-w-3xl">Select a corporate policy below to inspect current versions, staff attestation progress, and linked framework safeguards.</p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
            {/*  Left Column: Policy Cards List (7 cols)  */}
            <div className="xl:col-span-7 space-y-space-md">
              {/*  Card 1: POL-SEC-01  */}
              <div 
                onClick={() => setSelectedPolicyId('POL-SEC-01')}
                className={`cursor-pointer p-space-md rounded-xl bg-white dark:bg-[#0A111F] border transition-all ${selectedPolicyId === 'POL-SEC-01' ? 'border-primary ring-2 ring-primary/20 shadow-md border-l-4' : 'border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md'}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-code-sm text-code-sm text-primary font-bold">POL-SEC-01 • v3.2</span>
                    <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-0.5">Information Security &amp; Access Governance Policy</h3>
                    <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Establishes access controls, password complexity, FIDO2 MFA enforcement, and privileged access review schedules.</p>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-code-sm text-code-sm font-semibold shrink-0 ml-2">APPROVED</span>
                </div>
                <div className="mt-space-sm pt-space-xs border-t border-slate-100 dark:border-navy-800 flex items-center justify-between font-code-sm text-code-sm text-slate-600 dark:text-slate-300">
                  <span>Owner: Marcus Kane (Head of SecOps)</span>
                  <span className="text-secondary font-semibold">Annual Review: Current</span>
                </div>
              </div>

              {/*  Card 2: POL-ENG-04  */}
              <div 
                onClick={() => setSelectedPolicyId('POL-ENG-04')}
                className={`cursor-pointer p-space-md rounded-xl bg-white dark:bg-[#0A111F] border transition-all ${selectedPolicyId === 'POL-ENG-04' ? 'border-primary ring-2 ring-primary/20 shadow-md border-l-4' : 'border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md'}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-code-sm text-code-sm text-primary font-bold">POL-ENG-04 • v2.1</span>
                    <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-0.5">Software Development &amp; Vulnerability Policy</h3>
                    <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Defines code review requirements, dependency scanning, SLA remediation clocks for CVEs, and staging verification.</p>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-code-sm text-code-sm font-semibold shrink-0 ml-2">APPROVED</span>
                </div>
                <div className="mt-space-sm pt-space-xs border-t border-slate-100 dark:border-navy-800 flex items-center justify-between font-code-sm text-code-sm text-slate-600 dark:text-slate-300">
                  <span>Owner: Elena Rostova (AppSec Lead)</span>
                  <span className="text-secondary font-semibold">Annual Review: Current</span>
                </div>
              </div>

              {/*  Card 3: POL-OPS-08  */}
              <div 
                onClick={() => setSelectedPolicyId('POL-OPS-08')}
                className={`cursor-pointer p-space-md rounded-xl bg-white dark:bg-[#0A111F] border transition-all ${selectedPolicyId === 'POL-OPS-08' ? 'border-primary ring-2 ring-primary/20 shadow-md border-l-4' : 'border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-md'}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-code-sm text-code-sm text-primary font-bold">POL-OPS-08 • v4.0</span>
                    <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-0.5">Third-Party &amp; Vendor Risk Governance Policy</h3>
                    <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Governs vendor security questionnaires, DPA execution, SOC 2 report parsing, and annual subprocessor audits.</p>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-code-sm text-code-sm font-semibold shrink-0 ml-2">IN REVIEW</span>
                </div>
                <div className="mt-space-sm pt-space-xs border-t border-slate-100 dark:border-navy-800 flex items-center justify-between font-code-sm text-code-sm text-slate-600 dark:text-slate-300">
                  <span>Owner: Sarah Jenkins (SecOps Director)</span>
                  <span className="text-primary font-semibold">Annual Review: Due Soon</span>
                </div>
              </div>
            </div>

            {/*  Right Column: Policy Inspector Detail Pane (5 cols)  */}
            <div className="xl:col-span-5 bg-white dark:bg-[#0A111F] rounded-xl border border-slate-200 dark:border-navy-700 shadow-xl p-space-md flex flex-col gap-space-md">
              <div className="flex items-center justify-between pb-space-xs border-b border-slate-100 dark:border-navy-800">
                <span className="font-code-sm text-code-sm text-slate-600 dark:text-slate-300 font-bold">{currentPolicy.code}</span>
                <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-navy-700 font-code-sm text-code-sm text-slate-900 dark:text-white font-semibold">{currentPolicy.version}</span>
              </div>

              <div>
                <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold">{currentPolicy.title}</h4>
              </div>

              {/*  Attestation Progress  */}
              <div className="p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F] border border-slate-200 dark:border-navy-700 space-y-2">
                <span className="font-label-sm text-label-sm text-slate-900 dark:text-white font-bold uppercase tracking-wider">{currentPolicy.attestationText}</span>
                <div className="w-full bg-slate-200 dark:bg-navy-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full rounded-full transition-all duration-500" style={{ width: currentPolicy.attestationBar }}></div>
                </div>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300">{currentPolicy.attestationDetail}</p>
              </div>

              {/*  Linked Safeguards  */}
              <div>
                <span className="font-label-sm text-label-sm text-slate-900 dark:text-white font-bold uppercase tracking-wider block mb-2">Bound Regulatory Safeguards</span>
                <div className="space-y-2">
                  {currentPolicy.safeguards.map((s, idx) => (
                    <div key={idx} className="p-space-sm bg-slate-50 dark:bg-[#16233F] rounded-lg border border-slate-200 dark:border-navy-700 flex items-center justify-between">
                      <div>
                        <span className="font-code-sm text-code-sm text-primary font-semibold block">{s.fw}</span>
                        <span className="font-body-sm text-body-sm text-slate-900 dark:text-white font-medium block">{s.clause}</span>
                      </div>
                      <span className="font-code-sm text-code-sm text-secondary font-bold">{s.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 4: CORE CAPABILITIES BUILT FOR RIGOR  */}
        <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
          <div className="flex flex-col gap-space-xs mb-space-lg">
            <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              <ShieldCheck className="h-5 w-5 shrink-0" />
              <span>Architectural Rigor</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-slate-900 dark:text-white font-bold">Core Capabilities Built for Governance Rigor</h2>
            <p className="font-body-md text-body-md text-slate-600 dark:text-slate-300 max-w-2xl">Ensure policy compliance is auditable, actionable, and aligned across all organizational departments.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm">
              <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mb-1">Framework Clause Binding</h3>
              <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300">Map specific policy clauses directly to ISO 27001, SOC 2, and DPDP Act requirements to demonstrate complete coverage to auditors.</p>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm">
              <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mb-1">Automated Attestation Workflows</h3>
              <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300">Track staff policy sign-offs and send automated reminders to ensure high employee attestation rates across departments.</p>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm">
              <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mb-1">Revision Audit History</h3>
              <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300">Maintain an unbroken history of policy edits, owner reviews, and executive approvals for external audit inspection.</p>
            </div>
          </div>
        </section>

        {/*  SECTION 5: BOTTOM CTA  */}
        <section className="w-full bg-slate-900 dark:bg-[#070D19] text-white py-space-xl">
          <div className="max-w-7xl mx-auto px-gutter flex flex-col items-center text-center gap-space-md">
            <h2 className="font-headline-lg text-headline-lg font-bold">Bring Structure to Organizational Policies</h2>
            <p className="font-body-lg text-body-lg text-slate-300 max-w-2xl">Connect policies directly to your active controls and framework requirements in OMNiGRC.</p>
            <div className="flex flex-wrap items-center justify-center gap-space-sm pt-space-xs">
              <a href="/demo" className="px-space-md py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container shadow-md transition-all">
                Schedule Policy Governance Demo
              </a>
              <a href="/contact-us" className="px-space-md py-3 rounded-lg bg-slate-800 text-white font-label-md text-label-md font-semibold hover:bg-slate-700 transition-colors">
                Speak with a Compliance Specialist
              </a>
            </div>
          </div>
        </section>
      </div>
      </main>
      <Footer />
    </div>
  );
}
