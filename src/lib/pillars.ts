export interface PillarFeature {
  title: string;
  desc: string;
}

export interface Pillar {
  code: 'RISK' | 'ASSET' | 'CONTROL' | 'BOARD' | 'VULN' | 'VENDOR' | 'POLICY' | 'AUDIT' | 'REMED' | 'EVIDENCE';
  name: string;
  slug: string;
  accentColor: string;
  oneLiner: string;
  badge: string;
  desc: string;
  features: PillarFeature[];
}

export const PILLARS: Pillar[] = [
  {
    code: 'RISK',
    name: 'Risk Register',
    slug: 'risk-register',
    accentColor: '#F15E1C',
    oneLiner: 'Structured 5x5 risk scoring, treatment planning & residual tracking',
    badge: '5x5 Risk Matrix',
    desc: 'Log organizational, cloud, and vendor risks with standardized 5x5 Likelihood × Impact scoring. Link risks directly to mitigating controls and technical inventory assets for full posture visibility.',
    features: [
      { title: '5x5 Risk Matrix', desc: 'Rates each risk by how likely it is to happen and how much impact it would have.' },
      { title: 'Asset & Control Links', desc: 'Connects every risk directly to the matching server, database, or security check.' },
      { title: 'Clear Action Plans', desc: 'Pick clear treatment decisions: Accept, Fix, Transfer, or Avoid each risk.' },
      { title: 'Audit-Ready History', desc: 'Keeps an append-only timeline of score changes and risk mitigations.' },
    ],
  },
  {
    code: 'ASSET',
    name: 'Asset & Inventory',
    slug: 'asset-inventory',
    accentColor: '#006c4d',
    oneLiner: 'Connected repository of cloud infra, databases, vendors & PII data flows',
    badge: 'Asset Governance',
    desc: 'Maintain complete asset inventory visibility with direct context into PII data flows, vendor relationships, infrastructure boundaries, and protective security controls.',
    features: [
      { title: 'Single Asset List', desc: 'Lists servers, databases, tools, and vendors together in one clear view.' },
      { title: 'Data Flow Mapping', desc: 'Tracks where sensitive customer and PII data travels across systems.' },
      { title: 'Vendor Inventory', desc: 'Keeps an updated catalog of third-party tools and their security status.' },
      { title: 'Linked Safeguards', desc: 'Shows which active security rules protect each server and database.' },
    ],
  },
  {
    code: 'CONTROL',
    name: 'Control Mapping',
    slug: 'control-mapping',
    accentColor: '#F15E1C',
    oneLiner: 'Map controls once and align across 6 documented global standards',
    badge: 'Map-Once Engine',
    desc: 'Define protective controls once. OMNiGRC Advisory AI suggests candidate framework clauses across ISO 27001, ISO 42001, SOC 2, GDPR, DPDP, and HIPAA for mandatory human review.',
    features: [
      { title: 'Private AI Data Filter', desc: 'Strips company names and sensitive details before sending text to AI.' },
      { title: 'Multi-Standard Mapping', desc: 'Maps one control across ISO 27001, SOC 2, GDPR, HIPAA, and DPDP at once.' },
      { title: 'Smart Matching Suggestions', desc: 'AI recommends matching framework clauses with clear confidence scores.' },
      { title: 'Human Review & Sign-Off', desc: 'Compliance officers review and approve every AI suggestion before saving.' },
    ],
  },
  {
    code: 'BOARD',
    name: 'Compliance Board',
    slug: 'compliance-board',
    accentColor: '#006c4d',
    oneLiner: 'Rolling 30/60/90-day task cadences & assigned testing workflows',
    badge: 'Testing Cadence',
    desc: 'Assign control owners, configure recurring test schedules, and maintain an audit-ready cadence without pre-audit scrambles.',
    features: [
      { title: '30/60/90 Day Timelines', desc: 'Organizes upcoming compliance tasks by clear 30, 60, and 90-day deadlines.' },
      { title: 'Owner Assignments', desc: 'Assigns tasks to team leads with automated email and Slack reminders.' },
      { title: 'Flexible Test Cadence', desc: 'Runs testing schedules on monthly, quarterly, or yearly frequencies.' },
      { title: 'Audit Proof Log', desc: 'Stores completed test records so you are always ready for auditor review.' },
    ],
  },
  {
    code: 'VULN',
    name: 'Vulnerabilities',
    slug: 'vulnerabilities',
    accentColor: '#ba1a1a',
    oneLiner: 'Asset-linked finding governance & scanner ingestion remediation tracking',
    badge: 'Finding Governance',
    desc: 'Ingest CVE findings and scan results from external security tools. Evaluate finding severity in context of affected infrastructure assets and manage corrective action SLAs.',
    features: [
      { title: 'Scanner Import', desc: 'Imports vulnerability findings directly from your external scan tools.' },
      { title: 'Context-Based Risk', desc: 'Evaluates bug severity based on the specific asset it impacts.' },
      { title: 'Fix SLA Deadlines', desc: 'Assigns remediation tasks to developers with clear due dates.' },
      { title: 'Re-Test Verification', desc: 'Requires a fresh scan or check before marking findings resolved.' },
    ],
  },
  {
    code: 'VENDOR',
    name: 'Vendor & Third-Party Risk',
    slug: 'vendors',
    accentColor: '#795600',
    oneLiner: 'Supply chain risk governance, SIG assessments & DPDP sub-processor tracking',
    badge: 'Third-Party Risk',
    desc: 'Govern third-party vendor risks, evaluate vendor SOC 2 reports, administer assessment questionnaires, and track sub-processor obligations under DPDP and GDPR.',
    features: [
      { title: 'Vendor Risk Rating', desc: 'Ranks vendor risk based on data access and system permissions.' },
      { title: 'SOC 2 & SIG Reviews', desc: 'Tracks vendor SOC 2 reports and security questionnaire answers.' },
      { title: 'Sub-Processor List', desc: 'Keeps legal data agreement records for DPDP Act and GDPR compliance.' },
      { title: 'Annual Review Alerts', desc: 'Triggers yearly vendor safety reviews automatically.' },
    ],
  },
  {
    code: 'POLICY',
    name: 'Policy Governance',
    slug: 'policies',
    accentColor: '#F15E1C',
    oneLiner: 'Version-controlled policy authoring & automated 365-day review triggers',
    badge: 'Policy Lifecycle',
    desc: 'Centralized policy lifecycle management. Author Markdown policies, maintain git-style revision histories, and enforce annual review cadences across all organizational policies.',
    features: [
      { title: 'Version-Controlled Hub', desc: 'Write and update policies with full git-style change history.' },
      { title: 'Yearly Review Triggers', desc: 'Notifies policy owners automatically when annual review is due.' },
      { title: 'Control Clause Links', desc: 'Links policy sections directly to technical security controls.' },
      { title: 'Executive Approvals', desc: 'Records manager sign-offs and keeps a clear publishing history.' },
    ],
  },
  {
    code: 'AUDIT',
    name: 'Audits & Assessments',
    slug: 'audits',
    accentColor: '#006c4d',
    oneLiner: 'Structured audit planning, sample tracking & Clause-mapped workpapers',
    badge: 'Audit Readiness',
    desc: 'Streamline external auditor engagements with structured sample request tracking, workpaper compilation, and clause-mapped evidence index bundles.',
    features: [
      { title: 'Auditor Workspace', desc: 'Gives auditors read-only access to requested proof and evidence.' },
      { title: 'Self-Assessment Checks', desc: 'Run mock audit checks before official external reviews.' },
      { title: 'Gap & Delta Reports', desc: 'Instantly highlights missing evidence files or uncovered controls.' },
      { title: 'Audit Package Export', desc: 'Exports clean ZIP bundles of all audited evidence files.' },
    ],
  },
  {
    code: 'REMED',
    name: 'Remediation & CAPA',
    slug: 'remediation',
    accentColor: '#ce4700',
    oneLiner: 'Corrective action plan tracking with owner assignments & SLA due dates',
    badge: 'CAPA Engine',
    desc: 'Manage Corrective and Preventive Action (CAPA) plans stemming from internal assessments, external audits, and risk reviews with explicit human ownership.',
    features: [
      { title: 'Central Task Inbox', desc: 'Combines audit findings, risks, and scanner bugs in one list.' },
      { title: 'Clear Task Assignment', desc: 'Assigns ownership and priority to every corrective fix.' },
      { title: 'SLA Due Date Alerts', desc: 'Tracks remaining days before fix deadlines expire.' },
      { title: 'Verification Sign-Off', desc: 'Requires lead approval before marking issues resolved.' },
    ],
  },
  {
    code: 'EVIDENCE',
    name: 'Evidence References & Records',
    slug: 'evidence',
    accentColor: '#006c4d',
    oneLiner: 'Structured evidence index layer over external records & document links',
    badge: 'Evidence Index',
    desc: 'External evidence reference and record indexing layer. Link controls and test tasks to verified external document links, Jira tickets, and collector log records cleanly.',
    features: [
      { title: 'Auto Proof Collection', desc: 'Collects evidence files, screenshots, and logs continuously.' },
      { title: 'Tamper-Proof Logs', desc: 'Stores evidence records with timestamped hash signatures.' },
      { title: 'Control Evidence Links', desc: 'Connects each evidence file directly to framework controls.' },
      { title: 'One-Click Sharing', desc: 'Shares verified evidence bundles with internal and external teams.' },
    ],
  },
];

export function getPillarBySlug(slug: string): Pillar | undefined {
  return PILLARS.find(
    (p) =>
      p.slug === slug ||
      (slug === 'risk-management' && p.slug === 'risk-register') ||
      (slug === 'continuous-monitoring' && p.slug === 'asset-inventory') ||
      (slug === 'audit-management' && p.slug === 'audits') ||
      (slug === 'policy-management' && p.slug === 'policies')
  );
}
