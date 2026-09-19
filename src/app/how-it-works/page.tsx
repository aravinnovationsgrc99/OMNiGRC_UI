"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Shield,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  GitMerge,
  FileCheck2,
  CalendarCheck,
  Sparkles,
  Lock,
  Layers,
  Database,
  Sliders,
  Award,
  RefreshCw,
  FileText,
  ChevronRight,
  Activity,
  AlertCircle,
  TrendingUp,
  Terminal,
  Check,
  Building2,
  ArrowDown,
  Clock
} from "lucide-react";

export default function HowItWorksPage() {
  const [activeStage, setActiveStage] = useState(1);

  const stages = [
    {
      id: 1,
      num: "01",
      navLabel: "Risk Ident",
      title: "Stage 01: Risk Identification & 5x5 Scoring",
      badge: "RISK ENGINE",
      desc: "Identify, log, and quantify operational and security risks using a standardized 5x5 Likelihood x Impact scoring matrix. Assign clear risk ownership and treatment choicest (Mitigate, Transfer, Avoid, Accept).",
      points: [
        "Standard 5x5 Likelihood x Impact matrix evaluation",
        "Designated risk owner assignment & SLA tracking",
        "Clear baseline residual risk and treatment selection"
      ],
      schemaTitle: "RECORD_SCHEMA_01.JSON",
      pipeline: "api/v3/risks/register",
      telemetry: {
        risk_id: "RSK-042",
        title: "Unrestricted database read access",
        scoring_model: "5x5_MATRIX",
        likelihood: 4,
        impact: 5,
        calculated_score: 20,
        risk_category: "Infrastructure & Data Access",
        assigned_owner: "secops-lead@company.internal",
        treatment_choice: "MITIGATE",
        linked_assets: ["ast-rds-production-eu"]
      }
    },
    {
      id: 2,
      num: "02",
      navLabel: "Asset Link",
      title: "Stage 02: Technical Asset & Data Inventory Linking",
      badge: "ASSET GOVERNANCE",
      desc: "Link identified risks directly to technical cloud infrastructure, databases, SaaS sub-processors, and internal data flow boundaries for contextual impact analysis.",
      points: [
        "Continuous discovery of cloud databases & server clusters",
        "DPDP & GDPR data sensitivity classification tagging",
        "Asset owner & infrastructure boundary assignment"
      ],
      schemaTitle: "RECORD_SCHEMA_02.JSON",
      pipeline: "api/v3/assets/inventory",
      telemetry: {
        asset_id: "AST-RDS-EU-01",
        name: "RDS Postgres Prod Cluster",
        asset_type: "DATABASE",
        environment: "PRODUCTION",
        data_sensitivity: "CONFIDENTIAL_PII",
        cloud_provider: "AWS_EU_WEST_1",
        custodian: "infra-team@company.internal",
        linked_risks: ["RSK-042"]
      }
    },
    {
      id: 3,
      num: "03",
      navLabel: "Map Controls",
      title: "Stage 03: Map-Once Protective Control Synthesis",
      badge: "CONTROL ENGINE",
      desc: "Define protective safeguards once. Advisory AI suggests correlations across ISO 27001, SOC 2, HIPAA, GDPR, and DPDP, requiring mandatory human officer approval.",
      points: [
        "Map safeguards once across multiple global standards",
        "Advisory AI clause cross-mapping with zero PII transmission",
        "Mandatory human practitioner review and confirmation"
      ],
      schemaTitle: "RECORD_SCHEMA_03.JSON",
      pipeline: "api/v3/controls/map-once",
      telemetry: {
        control_id: "CTRL-012",
        title: "Automated Daily Snapshot & Isolated Test Restoration",
        status: "APPROVED_HUMAN",
        ai_suggestion_confidence: 0.94,
        mappings: {
          iso_27001: "A.8.13",
          soc_2: "CC9.1, A1.2",
          hipaa: "164.308(a)(7)",
          dpdp: "Sec 8(5)"
        },
        approver: "ciso@company.internal"
      }
    },
    {
      id: 4,
      num: "04",
      navLabel: "Policies",
      title: "Stage 04: Policy Governance & Review Lifecycle",
      badge: "POLICY LIFECYCLE",
      desc: "Author, version-control, and manage organizational security policies with automated annual review triggers, markdown revisions, and executive sign-off trails.",
      points: [
        "Version-controlled policy repository with markdown edits",
        "Automated 365-day policy review notifications",
        "Executive approval history and employee acknowledgment links"
      ],
      schemaTitle: "RECORD_SCHEMA_04.JSON",
      pipeline: "api/v3/policies/lifecycle",
      telemetry: {
        policy_id: "POL-SEC-004",
        title: "Data Protection & Backup Policy",
        version: "2.4.0",
        review_cadence: "ANNUAL",
        next_review_due: "2026-11-15",
        owner: "compliance-lead@company.internal",
        approval_status: "ACTIVE_PUBLISHED",
        linked_controls: ["CTRL-012"]
      }
    },
    {
      id: 5,
      num: "05",
      navLabel: "Compliance",
      title: "Stage 05: Rolling 30/60/90-Day Cadence Testing",
      badge: "COMPLIANCE BOARD",
      desc: "Transform periodic audit prep into continuous operational testing with automated 30, 60, and 90-day task cadences assigned to engineering leads.",
      points: [
        "Rolling 30/60/90-day recurring testing schedules",
        "Assigned engineering owners with automated SLA alerts",
        "Executive board visibility into active vs overdue tests"
      ],
      schemaTitle: "RECORD_SCHEMA_05.JSON",
      pipeline: "api/v3/compliance/cadence",
      telemetry: {
        task_id: "TST-2026-Q3-012",
        control_id: "CTRL-012",
        cadence_interval: "QUARTERLY_90_DAY",
        assigned_engineer: "p.dev@company.internal",
        due_date: "2026-09-30",
        test_status: "IN_PROGRESS",
        verification_method: "AUTOMATED_DRILL_RUN"
      }
    },
    {
      id: 6,
      num: "06",
      navLabel: "Audits",
      title: "Stage 06: Business & External Audit Management",
      badge: "AUDIT WORKPAPERS",
      desc: "Streamline external auditor engagements with structured sample request workflows, workpaper organization, and direct auditor access portals.",
      points: [
        "Structured auditor request tracking & sample management",
        "Organized workpaper bundles mapped by framework clause",
        "Human-governed audit workflow with structured application event logs"
      ],
      schemaTitle: "RECORD_SCHEMA_06.JSON",
      pipeline: "api/v3/audits/workpapers",
      telemetry: {
        audit_engagement_id: "AUD-2026-SOC2-TY2",
        target_framework: "SOC 2 Type II",
        auditor_firm: "Independent Registrar LLC",
        request_count: 42,
        fulfilled_requests: 40,
        workpaper_pack_status: "READY_FOR_REVIEW"
      }
    },
    {
      id: 7,
      num: "07",
      navLabel: "Evidence",
      title: "Stage 07: Evidence References & Record Indexing",
      badge: "EVIDENCE INDEX",
      desc: "Maintain an external evidence reference layer linking controls and test tasks to external document links, ticket logs, and collector output records.",
      points: [
        "External reference indexing (links to Jira, Confluence, AWS logs)",
        "No unverified binary file hosting; direct index tracking",
        "Custodian & reviewer verification metadata"
      ],
      schemaTitle: "RECORD_SCHEMA_07.JSON",
      pipeline: "api/v3/evidence/index",
      telemetry: {
        evidence_id: "EV-DRILL-2026-03",
        linked_control: "CTRL-012",
        reference_url: "https://internal.wiki/drills/2026-q3-backup-pass",
        evidence_type: "EXTERNAL_DOCUMENT_LINK",
        custodian: "p.dev@company.internal",
        verified_date: "2026-09-15"
      }
    },
    {
      id: 8,
      num: "08",
      navLabel: "Remediation",
      title: "Stage 08: Remediation & CAPA Tracking",
      badge: "REMEDIATION ENGINE",
      desc: "Track audit findings, vulnerability remediation, and corrective actions (CAPA) with strict target due dates and assigned remediation leads.",
      points: [
        "Corrective Action and Preventive Action (CAPA) tracking",
        "SLA target due date enforcement and escalation alerts",
        "Verification sign-off before closing findings"
      ],
      schemaTitle: "RECORD_SCHEMA_08.JSON",
      pipeline: "api/v3/remediation/capa",
      telemetry: {
        capa_id: "CAPA-2026-008",
        finding_source: "INTERNAL_AUDIT",
        description: "Enforce automated KMS key rotation for DB backups",
        action_owner: "secops-lead@company.internal",
        target_due_date: "2026-10-15",
        status: "OPEN_IN_SLA"
      }
    },
    {
      id: 9,
      num: "09",
      navLabel: "Intelligence",
      title: "Stage 09: Governance Intelligence & Continuous Loop",
      badge: "GOVERNANCE INTELLIGENCE",
      desc: "Complete the operating loop with continuous posture monitoring, automated gap alerts, executive reporting, and ongoing governance intelligence.",
      points: [
        "Real-time posture score synthesized from 9 operating stages",
        "Automated framework gap alerts & drift notifications",
        "Executive & CISO board-ready posture dashboard"
      ],
      schemaTitle: "RECORD_SCHEMA_09.JSON",
      pipeline: "api/v3/intelligence/posture",
      telemetry: {
        tenant_posture_score: 94.2,
        active_frameworks_covered: 6,
        total_controls_tracked: 184,
        overdue_tasks: 0,
        unmitigated_critical_risks: 0,
        posture_status: "CONTINUOUS_AUDIT_READY"
      }
    }
  ];

  const activeData = stages.find(s => s.id === activeStage) || stages[0];

  return (
    <div className="min-h-screen bg-[#faf8ff] dark:bg-[#0A111F] text-[#0d1b36] dark:text-slate-100 selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] dark:selection:text-white dark:selection:bg-teal/30 antialiased">
      <Header />

      <main className="w-full pt-16">
        {/* Section 1: Hero Zone */}
        <section className="relative w-full pt-6 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdbcf] dark:bg-orange-950/30 text-[#380d00] dark:text-orange-400 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#F15E1C] animate-pulse" />
            <span className="font-mono text-xs font-semibold tracking-wider uppercase">
              VERIFIED GRC ARCHITECTURE
            </span>
          </div>

          <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-[52px] lg:leading-[60px] text-[#0d1b36] dark:text-white font-extrabold tracking-tight mx-auto mb-6">
            The Connected GRC <span className="text-[#F15E1C]">Operating Lifecycle</span>
          </h1>

          <p className="max-w-3xl text-base sm:text-lg text-[#5a4138] dark:text-slate-300 font-medium mx-auto mb-8 leading-relaxed">
            See how OMNiGRC unites risk registers, assets, control mapping, policies, compliance tasks, audits, evidence references, remediation, and governance intelligence into one coherent operating model.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F15E1C] to-[#D4521A] text-white font-semibold hover:shadow-lg transition-all shadow-sm"
            >
              <CalendarCheck className="h-4 w-4" />
              <span>Request a Demo</span>
            </Link>
            <a
              href="#lifecycle-stages"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-navy-700 text-[#0d1b36] dark:text-slate-200 font-semibold hover:bg-slate-50 dark:hover:bg-navy-900 transition-colors"
            >
              <span>Explore the 9-Stage Lifecycle</span>
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          {/* High-level Telemetry Bar */}
          <div className="w-full bg-white dark:bg-navy-950/60 border border-slate-200 dark:border-navy-700/60 rounded-2xl p-5 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="flex flex-col border-r border-slate-200 dark:border-navy-700/60 pr-2">
              <span className="font-mono text-[11px] text-[#5a4138] dark:text-slate-400 uppercase tracking-wider">Operational Cadence</span>
              <span className="text-base font-bold text-[#006c4d] dark:text-teal-400 flex items-center gap-1 mt-0.5">
                <Clock className="h-4 w-4" /> Scheduled
              </span>
              <span className="text-xs text-[#5a4138] dark:text-slate-400">Audited 30/60/90-day task runs</span>
            </div>
            <div className="flex flex-col border-r border-slate-200 dark:border-navy-700/60 pr-2">
              <span className="font-mono text-[11px] text-[#5a4138] dark:text-slate-400 uppercase tracking-wider">Cross-Framework Reuse</span>
              <span className="text-base font-bold text-[#F15E1C] dark:text-orange-400 mt-0.5">Map Once</span>
              <span className="text-xs text-[#5a4138] dark:text-slate-400">Across 6 global standards</span>
            </div>
            <div className="flex flex-col border-r border-slate-200 dark:border-navy-700/60 pr-2">
              <span className="font-mono text-[11px] text-[#5a4138] dark:text-slate-400 uppercase tracking-wider">Advisory AI</span>
              <span className="text-base font-bold text-[#795600] dark:text-amber-400 flex items-center gap-1 mt-0.5">
                <CheckCircle2 className="h-4 w-4" /> Human Review
              </span>
              <span className="text-xs text-[#5a4138] dark:text-slate-400">Mandatory approval on suggestions</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[11px] text-[#5a4138] dark:text-slate-400 uppercase tracking-wider">Audit Records</span>
              <span className="text-base font-bold text-[#0d1b36] dark:text-slate-200 mt-0.5 flex items-center gap-1">
                <FileCheck2 className="h-4 w-4 text-[#006c4d] dark:text-teal-400" /> Event Logged
              </span>
              <span className="text-xs text-[#5a4138] dark:text-slate-400">Documented governance trail</span>
            </div>
          </div>
        </section>

        {/* Section 2: The 9-Stage Operating Lifecycle */}
        <section className="w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="lifecycle-stages">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 pb-3 border-b border-slate-200 dark:border-navy-700/60">
            <div>
              <span className="px-3 py-1 rounded-full bg-[#ffdbcf] dark:bg-orange-950/30 font-mono text-xs text-[#F15E1C] dark:text-orange-400 font-semibold uppercase">
                Operating Architecture
              </span>
              <h2 className="text-2xl sm:text-4xl text-[#0d1b36] dark:text-white font-bold tracking-tight mt-2">
                The 9-Stage Operating Lifecycle
              </h2>
              <p className="text-xs sm:text-sm text-[#5a4138] dark:text-slate-300 mt-1">
                Risk → Assets → Controls → Policies → Compliance → Audits → Evidence → Remediation → Governance Intelligence
              </p>
            </div>
            <div className="mt-3 md:mt-0 flex items-center gap-2 font-mono text-xs text-[#006c4d] dark:text-teal-400 font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#006c4d] dark:bg-teal-500" />
              <span>Connected Relationship Loop</span>
            </div>
          </div>

          {/* 9-Stage Stepper Buttons */}
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2 mb-6 bg-[#f1f3ff] dark:bg-navy-950/50 p-2.5 rounded-2xl border border-slate-200 dark:border-navy-700/60">
            {stages.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveStage(s.id)}
                className={`py-2.5 px-2 rounded-xl text-center transition-all font-mono flex flex-col items-center gap-0.5 ${
                  activeStage === s.id
                    ? "bg-[#F15E1C] text-white shadow-md font-bold"
                    : "bg-white dark:bg-navy-900 text-[#0d1b36] dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-navy-800 border border-slate-200 dark:border-navy-700/60"
                }`}
              >
                <span className="text-[10px] opacity-80">{s.num}</span>
                <span className="truncate w-full text-[11px]">{s.navLabel}</span>
              </button>
            ))}
          </div>

          {/* Stage Detail Display Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Stage Narrative (7 Cols) */}
            <div className="lg:col-span-7 bg-white dark:bg-navy-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-navy-700/60 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#F15E1C] dark:text-orange-400 uppercase tracking-wider bg-[#ffdbcf] dark:bg-orange-950/40 px-3 py-1 rounded-full">
                    STAGE {activeData.num} • {activeData.badge}
                  </span>
                  <span className="text-xs font-semibold text-[#006c4d] dark:text-teal-400 flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4" /> Operational Stage
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#0d1b36] dark:text-white mb-3">
                  {activeData.title}
                </h3>

                <p className="text-sm text-[#5a4138] dark:text-slate-300 leading-relaxed mb-6">
                  {activeData.desc}
                </p>

                <div className="space-y-3 bg-[#f1f3ff] dark:bg-navy-950/50 p-5 rounded-xl border border-slate-200 dark:border-navy-700/60">
                  <span className="font-mono text-xs text-[#0d1b36] dark:text-slate-200 font-bold block uppercase tracking-wider mb-2">
                    Key Deliverables &amp; Operational Guardrails
                  </span>
                  {activeData.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#0d1b36] dark:text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-[#006c4d] dark:text-teal-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 dark:border-navy-700/60 flex items-center justify-between">
                <span className="text-xs font-mono text-[#5a4138] dark:text-slate-400">
                  Tenant Isolated • Human Governed Workflow
                </span>
                <Link href="/demo" className="text-xs font-bold text-[#F15E1C] dark:text-orange-400 hover:underline inline-flex items-center gap-1">
                  <span>See Live Demo</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Stage Data Record Schema (5 Cols) */}
            <div className="lg:col-span-5 bg-[#23304c] text-white p-6 rounded-2xl shadow-xl border border-[#23304c] flex flex-col">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#006c4d] inline-block" />
                  <span className="font-mono text-xs text-slate-300 ml-2">{activeData.schemaTitle}</span>
                </div>
                <span className="font-mono px-2 py-0.5 rounded bg-white/10 text-[#95f6cb] font-medium text-[11px]">
                  EVENT LOG RECORD
                </span>
              </div>

              <pre className="font-mono text-xs text-[#edf0ff] bg-black/30 p-4 rounded-xl overflow-x-auto leading-relaxed max-h-[320px]">
                {JSON.stringify(activeData.telemetry, null, 2)}
              </pre>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span>Pipeline: <code className="text-[#ffb59a] font-mono">{activeData.pipeline}</code></span>
                <span className="font-mono text-[#95f6cb] flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="h-4 w-4" /> Validated
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: AI Assists. Humans Decide Architectural Panel */}
        <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-[#f1f3ff] dark:bg-[#0A111F] border-y border-slate-200 dark:border-navy-700/60">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white dark:bg-navy-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-navy-700/60 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
                <div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#95f6cb] dark:bg-teal-950/50 text-[#00513a] dark:text-teal-400 font-mono text-xs font-semibold mb-2">
                    <CheckCircle2 className="h-4 w-4" /> OPERATING PRINCIPLE
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0d1b36] dark:text-white">AI Assists. Humans Decide.</h2>
                  <p className="text-sm text-[#5a4138] dark:text-slate-300 max-w-2xl mt-1 leading-relaxed">
                    Advisory AI operates strictly as a recommendation copilot. It suggests control overlaps, highlights potential policy gaps, and drafts audit narratives. Every proposal requires explicit human approval before touching your governance records.
                  </p>
                </div>
                <div className="shrink-0 p-4 rounded-xl bg-[#f1f3ff] dark:bg-navy-950/50 border border-slate-200 dark:border-navy-700/60 flex items-center gap-3">
                  <Shield className="h-8 w-8 text-[#F15E1C]" />
                  <div>
                    <span className="block text-xs font-bold text-[#0d1b36] dark:text-white">Zero Autonomous Writes</span>
                    <span className="block font-mono text-[11px] text-[#5a4138] dark:text-slate-400">Mandatory Human Gatekeeper</span>
                  </div>
                </div>
              </div>

              {/* Sanitized Payloads vs Human Boundary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-[#faf8ff] dark:bg-navy-900/60 p-5 rounded-xl border border-slate-200 dark:border-navy-700/60">
                  <div className="flex items-center gap-2 mb-3 text-[#006c4d] dark:text-teal-400">
                    <CheckCircle2 className="h-5 w-5" />
                    <h3 className="text-base font-bold text-[#0d1b36] dark:text-white">Sanitized Advisory Payloads</h3>
                  </div>
                  <ul className="space-y-3 text-xs text-[#0d1b36] dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#006c4d] dark:text-teal-400 shrink-0 mt-0.5" />
                      <span><strong>Framework Standard Mapping:</strong> Public clause taxonomies correlated for semantic equivalence.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#006c4d] dark:text-teal-400 shrink-0 mt-0.5" />
                      <span><strong>Drafting Policy Text:</strong> Suggestions for standard procedure wording based on recognized baselines.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#006c4d] dark:text-teal-400 shrink-0 mt-0.5" />
                      <span><strong>Remediation Options:</strong> General corrective actions suggested for common control testing deficiencies.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#faf8ff] dark:bg-navy-900/60 p-5 rounded-xl border border-slate-200 dark:border-navy-700/60">
                  <div className="flex items-center gap-2 mb-3 text-[#F15E1C] dark:text-orange-400">
                    <Lock className="h-5 w-5" />
                    <h3 className="text-base font-bold text-[#0d1b36] dark:text-white">Mandatory Human Gatekeeper</h3>
                  </div>
                  <ul className="space-y-3 text-xs text-[#0d1b36] dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <Lock className="h-4 w-4 text-[#F15E1C] dark:text-orange-400 shrink-0 mt-0.5" />
                      <span><strong>No Automated Pass/Fail Decisions:</strong> Advisory AI can never mark an audit item as &quot;Satisfied&quot;.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lock className="h-4 w-4 text-[#F15E1C] dark:text-orange-400 shrink-0 mt-0.5" />
                      <span><strong>Explicit Reviewer Sign-Off:</strong> Compliance leads and auditors must review, edit, or reject proposed mappings.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lock className="h-4 w-4 text-[#F15E1C] dark:text-orange-400 shrink-0 mt-0.5" />
                      <span><strong>Customer Document Boundary:</strong> Proprietary client policies stay in customer boundary stores and are not used for LLM retraining.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-[#faf8ff] dark:bg-[#0A111F] px-4 sm:px-6 lg:px-8 py-16 text-center border-t border-slate-200 dark:border-navy-700/60">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl text-[#0d1b36] dark:text-white font-extrabold tracking-tight mb-4">
              Ready to experience the 9-stage operating lifecycle?
            </h2>
            <p className="text-sm sm:text-base text-[#5a4138] dark:text-slate-300 mb-8">
              Schedule a technical walkthrough with a GRC specialist today.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#F15E1C] to-[#D4521A] hover:shadow-lg transition-all shadow-md"
            >
              <span>Request Workflow Walkthrough</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
