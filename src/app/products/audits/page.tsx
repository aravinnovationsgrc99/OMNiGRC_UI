"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  FolderLock, Database, Verified, Calendar, BookOpen, Lock, Info,
  AlertOctagon, CheckCircle, Link as LinkIcon, Bot, CalendarDays, Badge,
  CheckSquare, Eye, HelpCircle, ShieldCheck, History, Circle, CheckCircle2,
  XCircle, Cloud, Shield, ArrowRight, Network, ArrowUpRight, Search, Server,
  Cpu, Key, FileText, Layers, Share2, Filter, Download, Plus, MapPin, 
  Settings, Check, X, Bell, LayoutDashboard, Target, Zap, ChevronRight, UserCheck, Terminal, Building2, Scale, Gavel, AlertTriangle, PenTool, ArrowRightLeft, Hourglass, Activity, Clock, MailCheck, ClipboardCheck, LogIn, Sliders, ListChecks, ClipboardX, Repeat, Bug, CalendarClock, LineChart, UserCircle, Timer, FolderKanban, ArrowDown
} from "lucide-react";

export default function AuditsPage() {
  const [showMetadata, setShowMetadata] = useState(false);

  return (
    <div className="min-h-screen bg-transparent text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />
      <main className="flex-1 w-full pt-16">
      <div className="flex flex-col w-full">
        {/*  SECTION 1: HERO & AUDIT MANAGEMENT OVERVIEW  */}
        <section className="relative w-full bg-[#faf8ff] dark:bg-[#0A111F] bg-grid-mesh-adaptive overflow-hidden">
          {/* Ambient glow accents */}
          <div aria-hidden="true" className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-[#2E936F]/5 dark:bg-teal/8 blur-3xl pointer-events-none" />
          <div aria-hidden="true" className="absolute bottom-0 right-8 w-72 h-72 rounded-full bg-[#F15E1C]/5 dark:bg-amber/5 blur-2xl pointer-events-none" />
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            {/*  Left Column: Copy & Actions  */}
            <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-slate-200 dark:bg-navy-700 text-primary font-label-sm text-label-sm uppercase tracking-wider">
                <ClipboardCheck className="h-5 w-5 shrink-0" />
                <span>CORE WORKFLOW 07: INTERNAL &amp; EXTERNAL AUDIT MANAGEMENT</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-slate-900 dark:text-white font-bold tracking-tight">
                Structured Internal &amp; External Audit <span className="text-primary">Orchestration</span>
              </h1>
              <p className="font-body-lg text-body-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                Streamline internal security assessments and external auditor workpaper requests. OMNiGRC links framework clauses directly to evidence records, sample testing sets, and corrective action items (CAPA).
              </p>
              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                <a className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container shadow-md transition-all" href="#workpaper-preview">
                  <ClipboardCheck className="h-5 w-5 shrink-0" />
                  <span>Explore Audit Workpaper Demo</span>
                </a>
                <a className="inline-flex items-center gap-space-xs px-space-md py-3 rounded-lg bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white font-label-md text-label-md font-semibold hover:bg-slate-200 dark:hover:bg-navy-700 transition-colors" href="/demo">
                  <FileText className="h-5 w-5 shrink-0" />
                  <span>Request Auditor Portal Walkthrough</span>
                </a>
              </div>
              <div className="grid grid-cols-3 gap-space-sm pt-space-md w-full max-w-xl">
                <div className="flex flex-col p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F]">
                  <div className="flex items-center gap-1 text-secondary">
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <span className="font-code-md text-code-md font-bold">Read-Only</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-slate-900 dark:text-white font-medium mt-1">Auditor Workspace Access</span>
                </div>
                <div className="flex flex-col p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F]">
                  <div className="flex items-center gap-1 text-primary">
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <span className="font-code-md text-code-md font-bold">Linked</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-slate-900 dark:text-white font-medium mt-1">CAPA &amp; Finding Tracking</span>
                </div>
                <div className="flex flex-col p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F]">
                  <div className="flex items-center gap-1 text-secondary">
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <span className="font-code-md text-code-md font-bold">Structured</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-slate-900 dark:text-white font-medium mt-1">Workpaper Evidence Index</span>
                </div>
              </div>
            </div>

            {/*  Right Column: Audit Progress Card  */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full rounded-xl bg-white dark:bg-[#0A111F] p-space-md shadow-xl flex flex-col gap-space-md border border-slate-200 dark:border-navy-700">
                <div className="flex items-center justify-between pb-space-xs border-b border-slate-100 dark:border-navy-800">
                  <div className="flex items-center gap-space-xs">
                    <div className="w-3 h-3 rounded-full bg-secondary animate-pulse"></div>
                    <span className="font-label-md text-label-md text-slate-900 dark:text-white font-bold">Active External Audit Workspace</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-navy-700 font-code-sm text-code-sm text-slate-900 dark:text-white">SOC-2-TYPE-II</span>
                </div>
                <div className="space-y-space-xs">
                  <div className="p-space-sm rounded bg-slate-50 dark:bg-[#16233F] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Scale className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-code-sm text-code-sm text-slate-900 dark:text-white">Trust Services Criteria (CC6.1 - CC6.8)</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">TESTED</span>
                  </div>
                  <div className="p-space-sm rounded bg-slate-50 dark:bg-[#16233F] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FolderLock className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-code-sm text-code-sm text-slate-900 dark:text-white">Sample Population &amp; Evidence Packages</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">VERIFIED</span>
                  </div>
                  <div className="p-space-sm rounded bg-slate-50 dark:bg-[#16233F] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckSquare className="h-4 w-4 text-primary shrink-0" />
                      <span className="font-code-sm text-code-sm text-slate-900 dark:text-white">Auditor Workpaper Sign-off</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-primary font-semibold">FINAL REVIEW</span>
                  </div>
                </div>
                <div className="pt-space-xs flex items-center justify-between text-slate-600 dark:text-slate-300 font-code-sm text-code-sm border-t border-slate-100 dark:border-navy-800">
                  <span>Auditor Status</span>
                  <span className="text-secondary font-bold">Read-Only Workpaper Access</span>
                </div>
              </div>
            </div>
          </div>
          </div>{/* end max-w-7xl */}
        </section>

        {/*  SECTION 2: OPERATIONAL AUDIT LIFECYCLE  */}
        <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
          <div className="flex flex-col gap-space-xs mb-space-lg">
            <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              <History className="h-5 w-5 shrink-0" />
              <span>Structured Audit Execution</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-slate-900 dark:text-white font-bold">The Operational Audit Lifecycle</h2>
            <p className="font-body-md text-body-md text-slate-600 dark:text-slate-300 max-w-3xl">From initial audit scoping and evidence sampling to finding creation and final auditor verification.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-space-md">
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STEP 01</span>
                <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-1">Audit Scoping</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Select governing framework, audit period, and target control domains.</p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STEP 02</span>
                <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-1">Sampling &amp; Evidence</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Gather evidence references, population sample lists, and policy documentation.</p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STEP 03</span>
                <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-1">Fieldwork Testing</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Perform design and operating effectiveness testing against control criteria.</p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STEP 04</span>
                <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-1">Finding Logging</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Document control exceptions, missing evidence, or operational gaps.</p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STEP 05</span>
                <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-1">CAPA Linkage</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Assign corrective actions to engineering leads with strict remediation due dates.</p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STEP 06</span>
                <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-1">Auditor Sign-off</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Store verified workpaper logs and auditor sign-off attestations in the vault.</p>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 3: INTERACTIVE WORKPAPER DEMONSTRATION  */}
        <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl" id="workpaper-preview">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-md">
            <div>
              <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                <FileText className="h-5 w-5 shrink-0" />
                <span>Auditor Workpaper Workspace</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-slate-900 dark:text-white font-bold">Structured Audit Workpaper Entry</h2>
              <p className="font-body-md text-body-md text-slate-600 dark:text-slate-300 max-w-2xl">Experience how OMNiGRC organizes audit testing steps, evidence artifacts, and finding exceptions into clean auditor workpapers.</p>
            </div>
            <button 
              onClick={() => setShowMetadata(!showMetadata)}
              className="px-space-md py-2 rounded-lg bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-900 dark:text-white font-label-md text-label-md font-semibold transition-colors shrink-0"
              id="toggleViewBtn"
            >
              {showMetadata ? "Hide Detailed Metadata" : "Toggle Detailed Metadata"}
            </button>
          </div>

          <div className="bg-white dark:bg-[#0A111F] rounded-xl border border-slate-200 dark:border-navy-700 shadow-xl p-space-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-space-md mb-space-md border-b border-slate-100 dark:border-navy-800 gap-space-sm">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold uppercase">WP-SOC2-2026-04</span>
                <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-0.5">Control Test: Logical Access &amp; Privileged MFA Enforcement</h3>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Audit Criteria: SOC 2 Type II CC6.1 &amp; ISO 27001:2022 A.9.4.2</p>
              </div>
              <span className="px-space-sm py-1 rounded bg-secondary-container text-on-secondary-container font-code-sm text-code-sm font-bold shrink-0">TESTING PASSED</span>
            </div>

            <div className="space-y-space-md">
              <div className="p-space-md rounded-lg bg-slate-50 dark:bg-[#16233F] border border-slate-200 dark:border-navy-700">
                <span className="font-label-sm text-label-sm text-slate-900 dark:text-white font-bold uppercase tracking-wider block mb-1">Test Procedure Executed</span>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300">
                  Sampled 25 newly onboarded engineering employees during the audit evaluation window. Inspected Okta identity log exports and AWS IAM privilege configurations to verify FIDO2 MFA enforcement prior to production access enablement.
                </p>
              </div>

              {/*  Toggleable Detailed Metadata Block  */}
              {showMetadata && (
                <div className="p-space-md rounded-lg bg-slate-100 dark:bg-navy-800 border border-slate-300 dark:border-navy-700 space-y-2 animate-in fade-in duration-200">
                  <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider block">Auditor Traceability Metadata</span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xs font-code-sm text-code-sm text-slate-700 dark:text-slate-300">
                    <div><span className="font-semibold text-slate-900 dark:text-white">Sample Population Digest:</span> pop-sample-okta-users-q2.csv</div>
                    <div><span className="font-semibold text-slate-900 dark:text-white">Auditor Assessor ID:</span> AUD-S-PATEL-9481</div>
                    <div><span className="font-semibold text-slate-900 dark:text-white">Evidence Vault Reference:</span> evidence-pack-ctrl-sec-04.zip</div>
                    <div><span className="font-semibold text-slate-900 dark:text-white">Sign-off Timestamp:</span> 2026-05-18T14:22:00Z</div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F] border border-slate-200 dark:border-navy-700">
                  <span className="font-label-sm text-label-sm text-slate-900 dark:text-white font-bold uppercase tracking-wider block mb-1">Evidence Records Attached</span>
                  <div className="font-code-sm text-code-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <div className="flex items-center gap-2"><LinkIcon className="h-4 w-4 text-primary shrink-0" /> okta-mfa-policy-enforcement.json</div>
                    <div className="flex items-center gap-2"><LinkIcon className="h-4 w-4 text-primary shrink-0" /> aws-iam-role-audit-export.csv</div>
                  </div>
                </div>
                <div className="p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F] border border-slate-200 dark:border-navy-700">
                  <span className="font-label-sm text-label-sm text-slate-900 dark:text-white font-bold uppercase tracking-wider block mb-1">Finding &amp; Exception Summary</span>
                  <p className="font-body-sm text-body-sm text-secondary font-semibold">Zero exceptions identified in sampled population.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 4: CORE FUNCTIONAL CAPABILITIES  */}
        <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
          <div className="flex flex-col gap-space-xs mb-space-lg">
            <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              <Zap className="h-5 w-5 shrink-0" />
              <span>Audit Capabilities</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-slate-900 dark:text-white font-bold">4 Core Functional Audit Capabilities</h2>
            <p className="font-body-md text-body-md text-slate-600 dark:text-slate-300 max-w-2xl">Purpose-built for compliance managers, internal auditors, and external audit partners.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mb-1">Auditor Workspace</h3>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300">Grant external auditors read-only access to scoped evidence packages, sampling lists, and test workpapers.</p>
              </div>
              <span className="font-code-sm text-code-sm text-secondary font-bold mt-space-md">Read-Only Auditor Portal</span>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mb-1">Sample Population Management</h3>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300">Generate and log sample populations (users, servers, pull requests) directly linked to control tests.</p>
              </div>
              <span className="font-code-sm text-code-sm text-secondary font-bold mt-space-md">Sample List Indexing</span>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mb-1">Finding &amp; CAPA Tracking</h3>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300">Transform audit exceptions directly into assigned corrective action remediation items with SLA deadlines.</p>
              </div>
              <span className="font-code-sm text-code-sm text-primary font-bold mt-space-md">Corrective Action Workflow</span>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mb-1">Multi-Framework Workpapers</h3>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300">Reuse completed audit workpapers across ISO 27001, SOC 2, HIPAA, and DPDP Act compliance reviews.</p>
              </div>
              <span className="font-code-sm text-code-sm text-secondary font-bold mt-space-md">Zero Duplicate Workpapers</span>
            </div>
          </div>
        </section>

        {/*  SECTION 5: BOTTOM CTA  */}
        <section className="w-full bg-slate-900 dark:bg-[#070D19] text-white py-space-xl">
          <div className="max-w-7xl mx-auto px-gutter flex flex-col items-center text-center gap-space-md">
            <h2 className="font-headline-lg text-headline-lg font-bold">Organize Audits with Operational Precision</h2>
            <p className="font-body-lg text-body-lg text-slate-300 max-w-2xl">Eliminate pre-audit panic by connecting framework controls directly to audit workpapers and evidence in OMNiGRC.</p>
            <div className="flex flex-wrap items-center justify-center gap-space-sm pt-space-xs">
              <a href="/demo" className="px-space-md py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container shadow-md transition-all">
                Schedule Audit Management Demo
              </a>
              <a href="/contact-us" className="px-space-md py-3 rounded-lg bg-slate-800 text-white font-label-md text-label-md font-semibold hover:bg-slate-700 transition-colors">
                Speak with an Audit Specialist
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
