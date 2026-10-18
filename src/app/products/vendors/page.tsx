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

export default function VendorsPage() {
  const [selectedVendorId, setSelectedVendorId] = useState<1 | 2 | 3>(1);

  const vendorProfiles = {
    1: {
      id: "VEN-ID: AWS-01",
      title: "Amazon Web Services (AWS)",
      scope: "Global Cloud Hosting & Managed VPC Infrastructure",
      risk: "Residual Risk: Low",
      riskClass: "bg-secondary-container text-on-secondary-container",
      gdpr: "Executed & Verified",
      dpdp: "Logged on Register",
      transfer: "EU SCCs (Module 2) + Binding Rules",
      ctrlStatus: "Active Status",
      notes: "AWS SOC 2 Type II assessment report reviewed without qualification. Bridge letter on file. Data hosting location locked to us-east-1 and eu-central-1."
    },
    2: {
      id: "VEN-ID: DDOG-02",
      title: "Datadog Inc.",
      scope: "Application Monitoring & Synthetics Telemetry",
      risk: "Residual Risk: Low",
      riskClass: "bg-tertiary-fixed text-on-tertiary-fixed",
      gdpr: "Executed (Restricted Telemetry Scope)",
      dpdp: "Scoped as Technical Processor",
      transfer: "EU-US Data Privacy Framework Self-Certified",
      ctrlStatus: "Under Review (Questionnaire in Progress)",
      notes: "SIG Lite submitted by Datadog security team. Verifying telemetry scrubbers to confirm no cleartext PII is included in APM payload traces."
    },
    3: {
      id: "VEN-ID: TWLO-03",
      title: "SendGrid / Twilio",
      scope: "Transactional Customer Notification Gateway",
      risk: "Residual Risk: Medium",
      riskClass: "bg-error-container text-on-error-container",
      gdpr: "Standard Contractual Clauses Active",
      dpdp: "Direct Notice Required for Recipients",
      transfer: "Standard Contractual Clauses (Module 2)",
      ctrlStatus: "Recertification Due",
      notes: "Annual review reminder triggered automatically. Auditor request submitted for updated SOC 2 Type II and current penetration testing executive summary."
    }
  };

  const activeVendor = vendorProfiles[selectedVendorId];

  return (
    <div className="min-h-screen bg-transparent text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:text-white dark:selection:bg-teal/30 antialiased flex flex-col justify-between">
      <Header />
      <div className="flex flex-col w-full pt-16">
        {/*  SECTION 1: HERO & SUPPLY CHAIN GOVERNANCE OVERVIEW  */}
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-16 overflow-hidden bg-grid-mesh-adaptive">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/*  Left Column: Copy & Actions  */}
            <div className="lg:col-span-7 flex flex-col items-start gap-3 sm:gap-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-200 dark:bg-navy-700 text-primary font-mono text-[10px] sm:text-xs uppercase tracking-wider">
                <Building2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                <span>CORE WORKFLOW 06: THIRD-PARTY RISK &amp; VENDOR GOVERNANCE</span>
              </div>
              <h1 className="text-[20px] min-[360px]:text-[22px] min-[400px]:text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-tight text-center sm:text-left">
                Control Third-Party Exposure <span className="text-primary">Across Your Entire Supply Chain</span>
              </h1>
              <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed text-left">
                Automate vendor onboarding, security questionnaire evaluations, SOC 2 report parsing, and continuous subprocessor DPA tracking. Mapped directly to ISO 27001 A.15, SOC 2 CC9, and DPDP Act 2023 Section 8.
              </p>
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-2.5 sm:gap-4 pt-1 w-full">
                <a className="w-full sm:w-auto max-w-md inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-on-primary text-xs sm:text-sm font-semibold hover:bg-primary-container shadow-md transition-all text-center" href="#directory">
                  <Building2 className="h-4 w-4 shrink-0" />
                  <span>Explore Vendor Directory Demo</span>
                </a>
                <a className="w-full sm:w-auto max-w-md inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-100 dark:bg-navy-800 text-slate-900 dark:text-white text-xs sm:text-sm font-semibold hover:bg-slate-200 dark:hover:bg-navy-700 transition-colors shadow-sm text-center" href="/demo">
                  <FileText className="h-4 w-4 shrink-0" />
                  <span>Request Assessment Templates</span>
                </a>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-space-sm pt-space-md w-full max-w-xl">
                <div className="flex flex-col p-2 sm:p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F] overflow-hidden">
                  <div className="flex items-center gap-1 text-secondary">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                    <span className="font-code-md text-xs sm:text-code-md font-bold truncate">Structured</span>
                  </div>
                  <span className="text-[10px] sm:text-label-sm text-slate-900 dark:text-white font-medium mt-1 leading-tight">DPA &amp; SCC Alignment</span>
                </div>
                <div className="flex flex-col p-2 sm:p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F] overflow-hidden">
                  <div className="flex items-center gap-1 text-primary">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                    <span className="font-code-md text-xs sm:text-code-md font-bold truncate">Auto-Parse</span>
                  </div>
                  <span className="text-[10px] sm:text-label-sm text-slate-900 dark:text-white font-medium mt-1 leading-tight">SOC 2 Report Ingestion</span>
                </div>
                <div className="flex flex-col p-2 sm:p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F] overflow-hidden">
                  <div className="flex items-center gap-1 text-secondary">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                    <span className="font-code-md text-xs sm:text-code-md font-bold truncate">Annual</span>
                  </div>
                  <span className="text-[10px] sm:text-label-sm text-slate-900 dark:text-white font-medium mt-1 leading-tight">Recertification Cadence</span>
                </div>
              </div>
            </div>

            {/*  Right Column: Visual Subprocessor Perimeter Map  */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full rounded-xl bg-white dark:bg-[#0A111F] p-space-card shadow-xl flex flex-col gap-space-md border border-slate-300 dark:border-navy-700">
                <div className="flex items-center justify-between pb-space-xs border-b border-slate-100 dark:border-navy-800">
                  <div className="flex items-center gap-space-xs">
                    <div className="w-3 h-3 rounded-full bg-secondary animate-pulse"></div>
                    <span className="font-label-md text-label-md text-slate-900 dark:text-white font-bold">Sample Subprocessor Perimeter Map</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-navy-700 font-code-sm text-code-sm text-slate-900 dark:text-white">DPA REGISTRY</span>
                </div>
                <div className="grid grid-cols-2 gap-space-sm">
                  <div className="p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F] flex flex-col">
                    <span className="font-code-sm text-code-sm text-slate-600 dark:text-slate-300">Tier-1 Critical Vendors</span>
                    <span className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold">Sample Scope</span>
                    <span className="font-body-sm text-body-sm text-secondary flex items-center gap-space-xs mt-1">
                      <CheckCircle className="h-4 w-4 shrink-0" /> SOC 2 Type II active
                    </span>
                  </div>
                  <div className="p-space-sm rounded-lg bg-slate-50 dark:bg-[#16233F] flex flex-col">
                    <span className="font-code-sm text-code-sm text-slate-600 dark:text-slate-300">Assessments Underway</span>
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">Sample Review</span>
                    <span className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 flex items-center gap-space-xs mt-1">
                      <Hourglass className="h-4 w-4 shrink-0" /> SIG Lite In Review
                    </span>
                  </div>
                </div>
                <div className="p-space-sm rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="font-label-md text-label-md text-slate-900 dark:text-white font-bold">Data Sovereignty Coverage</div>
                    <div className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300">GDPR Art. 28 + DPDP S.8 Alignment</div>
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center relative">
                    <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                      <path className="text-slate-300 dark:text-navy-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5" />
                      <path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="94, 100" strokeLinecap="round" strokeWidth="3.5" />
                    </svg>
                    <span className="absolute font-code-sm text-code-sm font-bold text-slate-900 dark:text-white">Aligned</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 2: INTERACTIVE DIRECTORY & RELATIONSHIP DRAWER  */}
        <section className="w-full max-w-7xl mx-auto px-gutter py-space-section" id="directory">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-md">
            <div className="text-left">
              <h2 className="text-[20px] min-[360px]:text-[22px] min-[400px]:text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-tight sm:leading-snug text-left">
                Third-Party Risk &amp; Assessment Explorer
              </h2>
              <p className="font-body-md text-body-md text-slate-600 dark:text-slate-300 max-w-2xl text-justify sm:text-left mt-2">
                Select any cataloged subprocessor below to inspect security safeguards, contractual DPA provisions, and continuous reassessment cadences.
              </p>
            </div>
            <div className="flex items-center gap-space-sm">
              <span className="font-code-sm text-code-sm text-slate-600 dark:text-slate-300">Sample Subprocessor Profiles</span>
            </div>
          </div>

          {/*  Main Layout: Table + Relationship Drawer  */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
            {/*  Interactive Directory Table  */}
            <div className="xl:col-span-7 bg-white dark:bg-[#0A111F] rounded-xl border border-slate-200 dark:border-navy-700 shadow-sm overflow-hidden">
              <div className="px-space-md py-space-sm bg-slate-100 dark:bg-navy-800 flex items-center justify-between border-b border-slate-200 dark:border-navy-700">
                <span className="font-label-md text-label-md text-slate-900 dark:text-white font-bold">Subprocessor Register</span>
                <span className="font-code-sm text-code-sm text-slate-600 dark:text-slate-300">Click a row to trigger Relationship Drawer</span>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-navy-800">
                {/*  Row 1: AWS  */}
                <div 
                  onClick={() => setSelectedVendorId(1)}
                  className={`vendor-row p-space-md cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm ${selectedVendorId === 1 ? 'bg-slate-100 dark:bg-navy-800 border-l-4 border-primary' : 'bg-white dark:bg-[#0A111F] hover:bg-slate-50 dark:hover:bg-navy-800/50'}`}
                >
                  <div className="flex items-start gap-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center shrink-0 text-primary">
                      <Cloud className="h-5 w-5 shrink-0" />
                    </div>
                    <div>
                      <div className="flex items-center gap-space-xs">
                        <span className="font-headline-sm text-body-lg text-slate-900 dark:text-white font-semibold">Amazon Web Services (AWS)</span>
                        <span className="px-space-xs py-0.5 rounded text-2xs font-code-sm uppercase bg-error-container text-on-error-container font-semibold">Critical Tier</span>
                      </div>
                      <div className="font-body-md text-body-md text-slate-600 dark:text-slate-300 font-medium mt-0.5">Primary DB &amp; Production Workload Hosting</div>
                      <div className="flex items-center gap-space-sm mt-space-xs">
                        <span className="font-code-sm text-code-sm text-secondary flex items-center gap-1">
                          <CheckCircle className="h-4 w-4 shrink-0" /> SOC 2 Type II
                        </span>
                        <span className="font-code-md text-code-md text-slate-600 dark:text-slate-300 font-semibold">· PII Scope: Scoped</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-end justify-between sm:justify-center gap-space-xs pl-12 sm:pl-0">
                    <span className="px-space-sm py-space-xs rounded-full text-label-sm font-label-sm bg-secondary-container text-on-secondary-container font-semibold">Verified</span>
                  </div>
                </div>

                {/*  Row 2: Datadog  */}
                <div 
                  onClick={() => setSelectedVendorId(2)}
                  className={`vendor-row p-space-md cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm ${selectedVendorId === 2 ? 'bg-slate-100 dark:bg-navy-800 border-l-4 border-primary' : 'bg-white dark:bg-[#0A111F] hover:bg-slate-50 dark:hover:bg-navy-800/50'}`}
                >
                  <div className="flex items-start gap-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center shrink-0 text-primary">
                      <Activity className="h-5 w-5 shrink-0" />
                    </div>
                    <div>
                      <div className="flex items-center gap-space-xs">
                        <span className="font-headline-sm text-body-lg text-slate-900 dark:text-white font-semibold">Datadog Inc.</span>
                        <span className="px-space-xs py-0.5 rounded text-2xs font-code-sm uppercase bg-primary-fixed text-on-primary-fixed font-semibold">High Tier</span>
                      </div>
                      <div className="font-body-md text-body-md text-slate-600 dark:text-slate-300 font-medium mt-0.5">Application Monitoring &amp; Synthetics Telemetry</div>
                      <div className="flex items-center gap-space-sm mt-space-xs">
                        <span className="font-code-sm text-code-sm text-slate-600 dark:text-slate-300 flex items-center gap-1">
                          <Clock className="h-4 w-4 shrink-0 text-primary" /> Active SIG Lite Review
                        </span>
                        <span className="font-code-md text-code-md text-slate-600 dark:text-slate-300 font-semibold">· Restricted Telemetry</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-end justify-between sm:justify-center gap-space-xs pl-12 sm:pl-0">
                    <span className="px-space-sm py-space-xs rounded-full text-label-sm font-label-sm bg-tertiary-fixed text-on-tertiary-fixed font-semibold">Under Review</span>
                  </div>
                </div>

                {/*  Row 3: Twilio / SendGrid  */}
                <div 
                  onClick={() => setSelectedVendorId(3)}
                  className={`vendor-row p-space-md cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm ${selectedVendorId === 3 ? 'bg-slate-100 dark:bg-navy-800 border-l-4 border-primary' : 'bg-white dark:bg-[#0A111F] hover:bg-slate-50 dark:hover:bg-navy-800/50'}`}
                >
                  <div className="flex items-start gap-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-navy-800 flex items-center justify-center shrink-0 text-primary">
                      <MailCheck className="h-5 w-5 shrink-0" />
                    </div>
                    <div>
                      <div className="flex items-center gap-space-xs">
                        <span className="font-headline-sm text-body-lg text-slate-900 dark:text-white font-semibold">SendGrid / Twilio</span>
                        <span className="px-space-xs py-0.5 rounded text-2xs font-code-sm uppercase bg-slate-200 dark:bg-navy-700 text-slate-900 dark:text-white font-semibold">Medium Tier</span>
                      </div>
                      <div className="font-body-md text-body-md text-slate-600 dark:text-slate-300 font-medium mt-0.5">Transactional Customer Notification Gateway</div>
                      <div className="flex items-center gap-space-sm mt-space-xs">
                        <span className="font-code-sm text-code-sm text-primary flex items-center gap-1 font-bold">
                          <AlertTriangle className="h-4 w-4 shrink-0" /> Recertification Scheduled
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-end justify-between sm:justify-center gap-space-xs pl-12 sm:pl-0">
                    <span className="px-space-sm py-space-xs rounded-full text-label-sm font-label-sm bg-error-container text-on-error-container font-semibold">Action Required</span>
                  </div>
                </div>
              </div>
            </div>

            {/*  Interactive Vendor Deep-Dive Drawer (Col 5)  */}
            <div className="xl:col-span-5 bg-white dark:bg-[#0A111F] rounded-xl border border-slate-200 dark:border-navy-700 shadow-xl p-space-md flex flex-col gap-space-md">
              <div className="flex items-center justify-between pb-space-xs border-b border-slate-100 dark:border-navy-800">
                <div className="space-y-0.5">
                  <span className="font-code-sm text-code-sm text-slate-600 dark:text-slate-300 font-bold" id="drawer-vendor-id">{activeVendor.id}</span>
                  <h3 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold" id="drawer-title">{activeVendor.title}</h3>
                </div>
                <span className={`px-space-sm py-space-xs rounded-full text-label-sm font-label-sm font-semibold ${activeVendor.riskClass}`} id="drawer-risk-badge">
                  {activeVendor.risk}
                </span>
              </div>
              <div className="space-y-space-sm">
                <div>
                  <span className="font-label-sm text-label-sm text-slate-600 dark:text-slate-300">Contractual Processing Scope</span>
                  <p className="font-body-sm text-body-sm text-slate-900 dark:text-white font-semibold mt-0.5" id="drawer-scope">{activeVendor.scope}</p>
                </div>
                <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
                  <div className="p-space-xs rounded bg-slate-50 dark:bg-[#16233F] border border-slate-200 dark:border-navy-700 flex flex-col">
                    <span className="font-label-sm text-label-sm text-slate-600 dark:text-slate-300">EU GDPR DPA Status</span>
                    <span className="font-code-sm text-code-sm text-secondary font-bold mt-0.5" id="drawer-gdpr">{activeVendor.gdpr}</span>
                  </div>
                  <div className="p-space-xs rounded bg-slate-50 dark:bg-[#16233F] border border-slate-200 dark:border-navy-700 flex flex-col">
                    <span className="font-label-sm text-label-sm text-slate-600 dark:text-slate-300">India DPDP Act Alignment</span>
                    <span className="font-code-sm text-code-sm text-slate-900 dark:text-white font-bold mt-0.5" id="drawer-dpdp">{activeVendor.dpdp}</span>
                  </div>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-slate-600 dark:text-slate-300">Data Transfer Safeguards</span>
                  <p className="font-code-sm text-code-sm text-slate-900 dark:text-white font-bold mt-0.5" id="drawer-transfer">{activeVendor.transfer}</p>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-slate-600 dark:text-slate-300">Governance Review &amp; Control Status</span>
                  <p className="font-code-sm text-code-sm text-primary font-bold mt-0.5" id="drawer-ctrl-status">{activeVendor.ctrlStatus}</p>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-slate-600 dark:text-slate-300">Auditor Notes &amp; Evidence Location</span>
                  <div className="p-space-xs rounded bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 font-body-sm text-body-sm mt-1" id="drawer-notes">
                    {activeVendor.notes}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 3: 6-STAGE VENDOR LIFECYCLE  */}
        <section className="w-full max-w-7xl mx-auto px-gutter py-space-section">
          <div className="flex flex-col gap-space-xs mb-space-lg">
            <div className="inline-flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              <History className="h-5 w-5 shrink-0" />
              <span>End-to-End Governance</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-slate-900 dark:text-white font-bold">
              <span className="block">The 6-Stage Vendor</span>
              <span className="block">Governance Lifecycle</span>
            </h2>
            <p className="font-body-md text-body-md text-slate-600 dark:text-slate-300 max-w-3xl text-justify sm:text-left">From initial security intake to contract termination and data deletion attestation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STAGE 01</span>
                <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-1">Vendor Intake &amp; Triage</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Evaluate vendor data access tier, subprocessor dependencies, and business criticality prior to contract signing.</p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STAGE 02</span>
                <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-1">Security Questionnaire Dispatch</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Dispatch SIG Lite, CAIQ, or custom questionnaires directly to vendor security contacts.</p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STAGE 03</span>
                <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-1">SOC 2 &amp; Evidence Parsing</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Ingest vendor SOC 2 Type II reports, ISO certificates, and penetration testing executive summaries into the evidence vault.</p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STAGE 04</span>
                <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-1">Contractual DPA Execution</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Verify executed Data Processing Agreements, Standard Contractual Clauses (SCCs), and DPDP technical safeguards.</p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STAGE 05</span>
                <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-1">Continuous Monitoring</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Track annual recertification dates, bridge letters, and security posture changes.</p>
              </div>
            </div>
            <div className="p-space-md rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-code-sm text-code-sm text-primary font-bold">STAGE 06</span>
                <h4 className="font-headline-sm text-headline-sm text-slate-900 dark:text-white font-bold mt-1">Offboarding &amp; Data Deletion</h4>
                <p className="font-body-sm text-body-sm text-slate-600 dark:text-slate-300 mt-1">Log formal vendor offboarding, API token revocation, and formal data destruction attestations.</p>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 4: MULTI-FRAMEWORK REGULATORY DEFENSIBILITY  */}
        <section className="w-full bg-slate-50 dark:bg-[#16233F] py-6 sm:py-10 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-2 sm:gap-3 mb-6 sm:mb-8 text-left">
              <div className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-xs text-primary uppercase font-bold tracking-wider text-left">
                <Scale className="h-4 w-4 shrink-0" />
                <span>Framework Alignment</span>
              </div>
              <h2 className="text-[20px] min-[360px]:text-[22px] min-[400px]:text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white font-bold tracking-tight leading-tight sm:leading-snug text-left text-justify">
                Built for Multi-Framework Regulatory Defensibility
              </h2>
              <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl text-left text-justify leading-relaxed">
                Satisfy third-party risk management requirements across major global standards without duplicate efforts.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
              <div className="p-4 sm:p-6 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 text-center sm:text-left">ISO 27001:2022 A.15</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left">Supplier Relationships: Enforce security requirements in supplier agreements and regularly monitor service delivery.</p>
              </div>
              <div className="p-4 sm:p-6 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 text-center sm:text-left">SOC 2 Type II CC9.2</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left">Vendor Risk Management: Assess and manage risks associated with vendors and subprocessors that hold customer data.</p>
              </div>
              <div className="p-4 sm:p-6 rounded-xl bg-white dark:bg-[#0A111F] border border-slate-200 dark:border-navy-700 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 text-center sm:text-left">DPDP Act 2023 §8</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left">Data Fiduciary Obligations: Ensure technical processors maintain reasonable security safeguards and report data breaches.</p>
              </div>
            </div>
          </div>
        </section>

        {/*  SECTION 5: DETERMINISTIC VENDOR EVIDENCE  */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-16">
          <div className="p-5 sm:p-8 lg:p-10 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 max-w-2xl text-center md:text-left">
              <h2 className="text-[20px] min-[360px]:text-[22px] min-[400px]:text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight sm:leading-snug text-center md:text-left">
                Structured Vendor Evidence, Without Spreadsheet Fatigue
              </h2>
              <p className="text-xs sm:text-base text-slate-300 leading-relaxed text-center md:text-left">Maintain an active subprocessor register, track SOC 2 expiration dates, and satisfy external auditors without manual overhead.</p>
            </div>
            <a href="/demo" className="w-full sm:w-auto text-center px-5 py-3 rounded-lg bg-primary text-on-primary text-xs sm:text-sm font-semibold hover:bg-primary-container shadow-md transition-all shrink-0">
              Request Vendor Governance Walkthrough
            </a>
          </div>
        </section>

        {/*  SECTION 6: BOTTOM CTA  */}
        <section className="w-full bg-slate-900 dark:bg-[#070D19] text-white py-8 sm:py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-4 sm:gap-6">
            <h2 className="text-[20px] min-[360px]:text-[22px] min-[400px]:text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight sm:leading-snug text-center">
              Streamline Third-Party Compliance Without Spreadsheet Chaos
            </h2>
            <p className="text-xs sm:text-base text-slate-300 max-w-2xl text-center leading-relaxed">Centralize your vendor security reviews, DPAs, and SOC 2 reports into OMNiGRC's connected GRC workspace.</p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 pt-1 w-full sm:w-auto">
              <a href="/demo" className="px-5 py-3 rounded-lg bg-primary text-on-primary text-xs sm:text-sm font-semibold hover:bg-primary-container shadow-md transition-all text-center">
                Schedule Vendor Risk Demo
              </a>
              <a href="/contact-us" className="px-5 py-3 rounded-lg bg-slate-800 text-white text-xs sm:text-sm font-semibold hover:bg-slate-700 transition-colors text-center">
                Speak with a Third-Party Risk Lead
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
