import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Shield,
  ShieldAlert,
  Server,
  Sparkles,
  CalendarCheck,
  CheckCircle2,
  ArrowRight,
  Zap,
  Lock,
  FileCheck2,
  Globe,
  Award,
  AlertTriangle,
  Building2,
  Clock,
  Layers,
  ChevronRight,
  Users,
  Check,
  TrendingUp,
  Cpu
} from "lucide-react";

export function generateStaticParams() {
  return [
    { slug: "lean-security-teams" },
    { slug: "security-leaders" },
    { slug: "compliance-managers" },
    { slug: "saas-growing-organizations" },
    { slug: "mssp" },
    { slug: "startups" },
    { slug: "mid-market" },
    { slug: "enterprise" },
  ];
}

interface SolutionData {
  slug: string;
  eyebrow: string;
  badge: string;
  title: string;
  subtitle: string;
  desc: string;
  heroPillars: string[];
  workflowRail: string[];
  challenges: { title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
  capabilities: { icon: any; title: string; desc: string; tag: string }[];
  telemetryTitle: string;
  telemetryTrace: string;
  telemetryStats: { label: string; value: string; sub: string }[];
}

const solutionsMap: Record<string, SolutionData> = {
  "lean-security-teams": {
    slug: "lean-security-teams",
    eyebrow: "SOLUTIONS FOR LEAN SECURITY TEAMS",
    badge: "CAPACITY CONSTRAINED",
    title: "Stop spreadsheet sprawl. Run GRC with a lean, connected workflow.",
    subtitle: "Unified risk, asset, and control management designed for solo practitioners & small security teams.",
    desc: "When one or two practitioners manage risk, vendor reviews, and recurring testing, fragmented spreadsheets cause instant drift. OMNiGRC unites your core governance in one operating layer.",
    heroPillars: [
      "Zero Spreadsheet Sprawl",
      "Mandatory Human Decision",
      "Structured Audit Logging"
    ],
    workflowRail: ["Risk Identification", "Asset Link", "Map-Once Controls", "30/60/90-Day Cadence", "Defensible Evidence"],
    challenges: [
      { title: "Isolated Spreadsheets", desc: "Risk registers and asset inventories stored in disparate sheets that drift immediately after sign-off." },
      { title: "Manual Evidence Chasing", desc: "Endless email threads asking engineering leads for screenshots 48 hours prior to audits." },
      { title: "Missed Cadence Testing", desc: "Zero rolling visibility into recurring access reviews, backup drill validation, or vendor check-ins." }
    ],
    solutions: [
      { title: "5x5 Likelihood x Impact Risk Matrix", desc: "Standardized 5x5 risk evaluation linked directly to technical cloud infrastructure assets." },
      { title: "Map-Once Control Logic", desc: "Define a policy once; Advisory AI assists with cross-mapping across ISO 27001, SOC 2, HIPAA, and DPDP." },
      { title: "Continuous 30/60/90-Day Cadence", desc: "Automated task triggers with assigned engineering leads, rolling SLA reminders, and document reference links." }
    ],
    capabilities: [
      { icon: ShieldAlert, title: "Risk Register (5x5)", desc: "Standardized scoring matrix linked to technical assets with designated owners.", tag: "5x5 Matrix" },
      { icon: Server, title: "Asset & Inventory", desc: "Cloud infrastructure discovery, database tracking, and DPDP data flow classification.", tag: "Cloud Infra" },
      { icon: Sparkles, title: "Control Mapping", desc: "Define safeguards once and crosswalk across global standards with Advisory AI assistance.", tag: "Map Once" },
      { icon: CalendarCheck, title: "Compliance Board", desc: "Rolling 30, 60, and 90-day testing cadences with automated engineering owner reminders.", tag: "Testing Cadence" }
    ],
    telemetryTitle: "LEAN OPS TELEMETRY",
    telemetryTrace: "✓ CTRL-012: Quarterly DB Snapshot verification recorded by security-lead@internal",
    telemetryStats: [
      { label: "Active Safeguards", value: "48 / 48", sub: "100% human-verified" },
      { label: "Next Audit Cadence", value: "14 Days", sub: "SOC 2 Type II Window" }
    ]
  },
  "security-leaders": {
    slug: "security-leaders",
    eyebrow: "SOLUTIONS FOR SECURITY LEADERS & CISOS",
    badge: "EXECUTIVE VISIBILITY",
    title: "Real-time posture oversight across unmitigated risks & remediation SLAs.",
    subtitle: "Board-ready reporting, risk-to-asset dependencies, and defensible audit packs for security executives.",
    desc: "Security leaders need continuous posture confidence—not snapshot summaries. OMNiGRC provides real-time visibility into residual risk scores, asset exposures, remediation SLAs, and audit readiness.",
    heroPillars: [
      "Board-Ready Dashboards",
      "Risk-to-Asset Exposure",
      "Remediation SLA Tracking"
    ],
    workflowRail: ["Executive Risk Overview", "Asset Exposure", "Remediation SLAs", "Audit Package Verification"],
    challenges: [
      { title: "Static Executive Reporting", desc: "Board reports compiled manually from outdated spreadsheets with zero real-time posture trace." },
      { title: "Unclear Asset Exposure", desc: "Difficulty correlating high-severity vulnerability findings with critical business databases." },
      { title: "Unmonitored Remediation SLAs", desc: "Corrective actions failing to meet agreed-upon SLA target due dates without executive escalation." }
    ],
    solutions: [
      { title: "Executive Risk & Posture Dashboard", desc: "Real-time synthesis of 5x5 risk scores, active control coverage, and open remediation SLAs." },
      { title: "Asset-Linked Vulnerability Governance", desc: "Ingest findings from external security scanners and evaluate impact against registered infrastructure assets." },
      { title: "Defensible Audit Workpaper Packs", desc: "One-click exportable audit packages with complete human sign-off history and structured application event logs." }
    ],
    capabilities: [
      { icon: Shield, title: "Executive Posture Overview", desc: "Real-time posture score synthesized across risks, controls, assets, and active testing cadences.", tag: "Executive CISO" },
      { icon: AlertTriangle, title: "Remediation & CAPA", desc: "Corrective action tracking with strict SLA due dates and automated escalation triggers.", tag: "CAPA SLA" },
      { icon: Server, title: "Asset-Linked Exposure", desc: "Bind vulnerability findings to primary database clusters and cloud server infrastructure.", tag: "Asset Context" },
      { icon: FileCheck2, title: "Audit Workpapers", desc: "Structured auditor workpapers mapped cleanly by framework clause ID for fast external review.", tag: "Audit Ready" }
    ],
    telemetryTitle: "EXECUTIVE POSTURE TELEMETRY",
    telemetryTrace: "✓ POSTURE_SCORE: 94.2% • 0 Critical Unmitigated Risks • All SLAs in Compliance",
    telemetryStats: [
      { label: "Overall Posture Score", value: "94.2%", sub: "Continuous Audit Ready" },
      { label: "Open CAPA Items", value: "0 Overdue", sub: "100% SLA Compliance" }
    ]
  },
  "compliance-managers": {
    slug: "compliance-managers",
    eyebrow: "SOLUTIONS FOR COMPLIANCE MANAGERS",
    badge: "MULTI-FRAMEWORK CADENCE",
    title: "Map controls once across ISO, SOC 2, and DPDP with continuous testing.",
    subtitle: "Automate testing cadences, assign clear ownership, and compile defensible audit workpapers.",
    desc: "Compliance managers spend hundreds of hours managing duplicate framework requirements. OMNiGRC allows you to map a single safeguard across 6+ global standards simultaneously.",
    heroPillars: [
      "Map-Once Engine",
      "30/60/90-Day Testing",
      "Auditor Workpapers"
    ],
    workflowRail: ["Framework Taxonomies", "Control Synthesis", "Owner Assignment", "Cadence Testing", "Workpaper Bundles"],
    challenges: [
      { title: "Duplicate Mapping Work", desc: "Maintaining separate spreadsheets for ISO 27001, SOC 2, HIPAA, and DPDP Act compliance." },
      { title: "Unclear Task Ownership", desc: "Engineering leads missing periodic testing responsibilities due to ad-hoc email requests." },
      { title: "Frantic Pre-Audit Sprints", desc: "Scrambling 48 hours before auditor arrival to locate evidence screenshots and change records." }
    ],
    solutions: [
      { title: "Map-Once Crosswalk Engine", desc: "Correlate protective safeguards across global frameworks with Advisory AI suggestions & human approval." },
      { title: "Scheduled Testing Cadence Board", desc: "Automate 30, 60, and 90-day recurring testing runs with direct notification to assigned engineers." },
      { title: "Evidence Reference Indexing", desc: "Index evidence links cleanly to external systems (Jira, Confluence, AWS logs) without unverified binary lock-in." }
    ],
    capabilities: [
      { icon: Sparkles, title: "Map-Once Crosswalks", desc: "Align controls across ISO 27001, SOC 2, HIPAA, GDPR, and DPDP with payload data minimization.", tag: "Crosswalk" },
      { icon: CalendarCheck, title: "Testing Cadence Board", desc: "Rolling 30, 60, and 90-day task runs assigned directly to technical asset owners.", tag: "Cadence Board" },
      { icon: FileCheck2, title: "Evidence Index Layer", desc: "Structured reference index linking controls to verified external document links and audit records.", tag: "Evidence Index" },
      { icon: Award, title: "Audit Workpapers", desc: "Organized audit packages supporting human-governed external auditor reviews.", tag: "Workpapers" }
    ],
    telemetryTitle: "COMPLIANCE CADENCE TELEMETRY",
    telemetryTrace: "✓ CROSSWALK_VERIFIED: CTRL-012 mapped to ISO 27001 A.8.13, SOC 2 CC9.1 & DPDP Sec 8(5)",
    telemetryStats: [
      { label: "Mapped Controls", value: "184 Mapped", sub: "6 Standards Covered" },
      { label: "Cadence Completion", value: "98.4%", sub: "30/60/90 Day Active" }
    ]
  },
  "saas-growing-organizations": {
    slug: "saas-growing-organizations",
    eyebrow: "SOLUTIONS FOR SAAS & GROWING ORGANIZATIONS",
    badge: "SCALING GOVERNANCE",
    title: "Accelerate SOC 2 & ISO readiness for market expansion without overhead.",
    subtitle: "Unify customer security reviews, sub-processor tracking, and compliance audits in one platform.",
    desc: "Fast-growing SaaS companies need SOC 2 Type II and ISO 27001 to unlock enterprise deals, but cannot afford operational slowdowns. OMNiGRC accelerates compliance readiness without multiplying headcount.",
    heroPillars: [
      "Enterprise Deal Unlock",
      "Fast Audit Readiness",
      "Vendor Data Tracing"
    ],
    workflowRail: ["Baseline Controls", "Sub-Processor Tracking", "Audit Preparation", "Trust Verification"],
    challenges: [
      { title: "Enterprise Sales Blockers", desc: "Deals delayed while prospective buyers wait for proof of SOC 2 or ISO 27001 posture." },
      { title: "Vendor Sub-Processor Drift", desc: "Difficulty tracking third-party SaaS vendors and DPDP/GDPR sub-processor obligations." },
      { title: "Resource Multiplication", desc: "Adding new compliance standards multiplying team effort rather than reusing existing controls." }
    ],
    solutions: [
      { title: "Rapid Framework Onboarding", desc: "Pre-mapped control baselines for ISO 27001, SOC 2 Type II, ISO 42001 (AI), and DPDP Act 2023." },
      { title: "Vendor & Sub-Processor Inventory", desc: "Centralized vendor risk repository tracking SIG Lite questionnaires, SOC 2 reports, and data flow tags." },
      { title: "Reusable Control Architecture", desc: "Ensure safeguards implemented for SOC 2 automatically satisfy ISO and privacy regulations." }
    ],
    capabilities: [
      { icon: Building2, title: "SaaS Scaling Controls", desc: "Pre-configured security baselines tailored for cloud-native SaaS infrastructure.", tag: "SaaS Scale" },
      { icon: Globe, title: "Vendor & Third-Party Risk", desc: "Track sub-processor data flows, vendor SOC 2 reports, and DPDP compliance obligations.", tag: "Vendor Risk" },
      { icon: Sparkles, title: "Advisory AI Assistance", desc: "Speed up control drafting and clause matching with mandatory human sign-off.", tag: "AI Advisory" },
      { icon: Lock, title: "Tenant Isolation", desc: "Application-level tenant isolation ensuring data privacy and payload minimization.", tag: "Tenant Isolated" }
    ],
    telemetryTitle: "SAAS GOVERNANCE TELEMETRY",
    telemetryTrace: "✓ READINESS_STAGE: SOC 2 Type II Window Active • 100% Control Baseline Established",
    telemetryStats: [
      { label: "Target Frameworks", value: "SOC 2 + ISO", sub: "Pre-mapped Baselines" },
      { label: "Vendor Risk Inventory", value: "100% Tracked", sub: "DPDP Sub-processor Aware" }
    ]
  },
  mssp: {
    slug: "mssp",
    eyebrow: "SOLUTIONS FOR MSSP PARTNERS & ADVISORY FIRMS",
    badge: "MULTI-TENANT GOVERNANCE",
    title: "Centralized multi-tenant client governance console for security practices.",
    subtitle: "Manage client compliance postures, control crosswalks, and audit readiness from a single console.",
    desc: "Security advisory firms and MSSPs require structured multi-tenant administration. OMNiGRC enables advisory teams to oversee client risk registers, control mapping, and audit workpapers with strict tenant scoping.",
    heroPillars: [
      "Multi-Tenant Scope",
      "Application Isolation",
      "Advisory Copilot"
    ],
    workflowRail: ["Client Portfolio View", "Tenant Query Scoping", "Advisory Control Mapping", "Audit Workpapers"],
    challenges: [
      { title: "Client Context Switching", desc: "Advisory teams managing separate disconnected spreadsheets across multiple client organizations." },
      { title: "Inconsistent Control Baselines", desc: "Reinventing control mapping and audit workpapers for every new client engagement." },
      { title: "Tenant Data Security", desc: "Ensuring client data remains strictly scoped and isolated within the application layer." }
    ],
    solutions: [
      { title: "Application-Level Tenant Scoping", desc: "Strict application-level tenant isolation ensuring queries and data remain bound to designated client contexts." },
      { title: "Multi-Client Governance Portfolio", desc: "Centralized advisor console to monitor client risk scores, testing cadences, and audit readiness." },
      { title: "Advisory AI Control Crosswalks", desc: "Suggest control mappings across global frameworks for client approval adhering to data minimization standards." }
    ],
    capabilities: [
      { icon: Users, title: "Multi-Tenant Portfolio View", desc: "Central console for security advisory teams to oversee client GRC environments.", tag: "Multi-Tenant" },
      { icon: Lock, title: "Application-Level Isolation", desc: "Strict application-level tenant scoping ensuring isolated data boundaries.", tag: "Tenant Scoped" },
      { icon: Sparkles, title: "Advisory Copilot", desc: "Draft control recommendations for client CISO review with mandatory human approval.", tag: "Human Governed" },
      { icon: FileCheck2, title: "Client Audit Packages", desc: "Export clean, structured audit packs formatted for client external auditor engagements.", tag: "Audit Packs" }
    ],
    telemetryTitle: "MSSP CONSOLE TELEMETRY",
    telemetryTrace: "✓ MSSP_SCOPING: Application-level tenant scoping active • Client query boundary verified",
    telemetryStats: [
      { label: "Tenant Isolation", value: "Application Scoped", sub: "Strict Query Boundaries" },
      { label: "Human Review", value: "Mandatory Gate", sub: "Advisory Approval Required" }
    ]
  }
};

// Aliases for legacy route matching
solutionsMap["startups"] = solutionsMap["lean-security-teams"];
solutionsMap["mid-market"] = solutionsMap["saas-growing-organizations"];
solutionsMap["enterprise"] = solutionsMap["security-leaders"];

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug || "lean-security-teams";
  const sol = solutionsMap[slug] || solutionsMap["lean-security-teams"];

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#0d1b36] selection:bg-[#F15E1C]/20 selection:text-[#0d1b36] antialiased">
      <Header />

      <main className="w-full pt-24 sm:pt-28">
        {/* SECTION 1: HERO */}
        <section className="relative w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 overflow-hidden border-b border-slate-200">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ffdbcf]/30 rounded-full blur-3xl pointer-events-none -z-10 ambient-motion-1" />
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdbcf] text-[#380d00] mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#F15E1C] animate-pulse" />
                <span className="font-mono text-xs font-semibold tracking-wider uppercase">
                  {sol.eyebrow}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[48px] lg:leading-[56px] text-[#0d1b36] font-extrabold tracking-tight mb-6">
                {sol.title}
              </h1>

              <p className="text-base sm:text-lg text-[#5a4138] font-medium mb-8 leading-relaxed">
                {sol.desc}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#F15E1C] to-[#D4521A] hover:shadow-lg transition-all shadow-md"
                >
                  <CalendarCheck className="h-4 w-4" />
                  <span>Request Solution Walkthrough</span>
                </Link>
                <a
                  href="#solution-details"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#0d1b36] bg-white hover:bg-slate-50 transition-all border border-slate-200"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Pillars */}
              <div className="flex flex-wrap gap-3">
                {sol.heroPillars.map((p, pIdx) => (
                  <div key={pIdx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-mono font-semibold text-[#0d1b36]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#006c4d]" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Telemetry Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xl flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#006c4d]" />
                    <span className="font-mono text-xs font-bold text-[#0d1b36]">{sol.telemetryTitle}</span>
                  </div>
                  <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#f1f3ff] text-[#0d1b36] font-semibold">
                    STATUS: ACTIVE
                  </span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {sol.telemetryStats.map((st, sIdx) => (
                    <div key={sIdx} className="p-3.5 rounded-xl bg-[#f1f3ff] border border-slate-200 flex flex-col">
                      <span className="font-mono text-[11px] text-[#5a4138]">{st.label}</span>
                      <span className="text-xl font-extrabold text-[#0d1b36] mt-1">{st.value}</span>
                      <span className="text-[11px] text-[#006c4d] font-semibold mt-0.5">{st.sub}</span>
                    </div>
                  ))}
                </div>

                {/* Trace Strip */}
                <div className="p-4 rounded-xl bg-[#23304c] text-white font-mono text-xs shadow-inner space-y-1.5">
                  <div className="flex items-center justify-between text-slate-400 text-[11px]">
                    <span>SYSTEM TRACE</span>
                    <span>LOG_STATUS: VALIDATED</span>
                  </div>
                  <div className="text-[#95f6cb] font-semibold text-[11px] leading-relaxed">
                    {sol.telemetryTrace}
                  </div>
                </div>

                {/* Workflow Rail Badges */}
                <div className="pt-2 border-t border-slate-200">
                  <span className="font-mono text-[10px] text-[#5a4138] uppercase tracking-wider block font-semibold mb-2">
                    Solution Workflow Rail
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {sol.workflowRail.map((rf, rIdx) => (
                      <span key={rIdx} className="px-2 py-0.5 rounded bg-[#ffdbcf] text-[#380d00] font-mono text-[10px] font-semibold">
                        {rf}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: THE PROBLEM VS SOLUTION */}
        <section className="w-full bg-[#f1f3ff] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-slate-200" id="solution-details">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="font-mono text-xs text-[#F15E1C] font-bold uppercase tracking-widest">
                OPERATIONAL TRANSFORM
              </span>
              <h2 className="text-2xl sm:text-4xl text-[#0d1b36] font-bold mt-2 tracking-tight">
                From Friction &amp; Drift to Connected Governance
              </h2>
              <p className="text-sm sm:text-base text-[#5a4138] mt-2">
                See how OMNiGRC addresses core team friction with structured, automated workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Challenges Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 font-mono text-xs font-bold mb-6">
                    <AlertTriangle className="h-3.5 w-3.5" /> Traditional Operational Friction
                  </span>
                  <div className="space-y-4">
                    {sol.challenges.map((c, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-3">
                        <div className="p-1 rounded-full bg-red-100 text-red-600 mt-0.5 shrink-0">
                          <AlertTriangle className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#0d1b36]">{c.title}</h4>
                          <p className="text-xs text-[#5a4138] leading-relaxed">{c.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Solutions Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#ffdbcf] shadow-sm flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#95f6cb] text-[#00513a] font-mono text-xs font-bold mb-6">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Connected OMNiGRC Solution
                  </span>
                  <div className="space-y-4">
                    {sol.solutions.map((s, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-3">
                        <div className="p-1 rounded-full bg-[#95f6cb] text-[#00513a] mt-0.5 shrink-0">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#0d1b36]">{s.title}</h4>
                          <p className="text-xs text-[#5a4138] leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: CAPABILITY MODULES */}
        <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="font-mono text-xs text-[#F15E1C] font-bold uppercase tracking-widest">
                CORE CAPABILITY MODULES
              </span>
              <h2 className="text-2xl sm:text-4xl text-[#0d1b36] font-bold mt-2 tracking-tight">
                Everything Connected to Your Lifecycle
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sol.capabilities.map((cap, capIdx) => {
                const IconComponent = cap.icon;
                return (
                  <div key={capIdx} className="bg-[#f1f3ff] rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 rounded-xl bg-white text-[#F15E1C] shadow-sm border border-slate-200">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <span className="px-2.5 py-0.5 rounded bg-[#ffdbcf] text-[#380d00] font-mono text-[10px] font-bold uppercase">
                          {cap.tag}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-[#0d1b36] mb-2">{cap.title}</h3>
                      <p className="text-xs text-[#5a4138] leading-relaxed">{cap.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4: CTA BANNER */}
        <section className="w-full bg-[#faf8ff] px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl text-[#0d1b36] font-extrabold tracking-tight mb-4">
              Ready to see {sol.title}?
            </h2>
            <p className="text-sm sm:text-base text-[#5a4138] mb-8 max-w-2xl mx-auto">
              Schedule a focused demonstration with a GRC specialist tailored to your team&apos;s operational scope.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#F15E1C] to-[#D4521A] hover:shadow-lg transition-all shadow-md"
              >
                <span>Request Solution Walkthrough</span>
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
