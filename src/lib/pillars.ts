export interface Pillar {
  code: 'RISK' | 'ASSET' | 'CONTROL' | 'BOARD' | 'VULN' | 'VENDOR' | 'POLICY' | 'AUDIT' | 'REMED' | 'EVIDENCE';
  name: string;
  slug: string;
  accentColor: string;
  oneLiner: string;
  badge: string;
  desc: string;
  features: string[];
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
      'Standardized 5x5 Likelihood × Impact matrix evaluation',
      'Direct linkage between identified risks, assets, and mitigating security controls',
      'Treatment plan choice: Accept, Mitigate, Transfer, or Avoid',
      'Historical residual risk reduction tracking and audit logging',
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
      'Unified view of cloud infrastructure, databases, endpoints, and SaaS vendors',
      'Data sensitivity classification (PII, Financial, Confidential) linked to safeguards',
      'Third-party vendor catalog with compliance certification tracking',
      'Direct risk and control association for every registered asset',
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
      'Advisory payloads are minimized and sanitized before being sent to external AI providers.',
      'Pre-loaded taxonomies for ISO 27001, ISO 42001, SOC 2, GDPR, DPDP, and HIPAA',
      'Confidence scores accompanying all AI advisory suggestions',
      'Mandatory human practitioner review and confirmation before database persistence',
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
      'Rolling 30, 60, and 90-day upcoming evidence and review task cadences',
      'Assigned engineering leads with automated SLA reminders',
      'Recurring test frequencies: Monthly, Quarterly, Semi-Annual, and Annual',
      'Defensible testing history ready for external audit review',
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
      'Ingestion & correlation of findings from external vulnerability scanners',
      'Asset-linked risk exposure evaluation based on 5x5 impact scoring',
      'SLA-driven remediation assignment to infrastructure asset owners',
      'Verification workflows prior to closing resolved vulnerability findings',
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
      'Vendor risk catalog with tiering based on data sensitivity and access level',
      'SOC 2 Type II report ingestion and SIG Lite assessment questionnaire tracking',
      'DPDP Act 2023 sub-processor inventory and data protection agreement status',
      'Annual vendor review triggers linked to internal risk registers',
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
      'Version-controlled policy repository with Markdown revision history',
      'Automated 365-day policy review cadences assigned to policy owners',
      'Direct mapping between policy clauses and technical control safeguards',
      'Executive sign-off tracking and policy publication history',
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
      'Structured audit request tracking and sample fulfillment workflows',
      'Organized workpaper bundles mapped directly to target framework clauses',
      'Human-governed audit preparation with structured application event logs',
      'Clear separation of audit read-only evidence access',
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
      'Unified CAPA tracking across audit findings, risks, and control deficiencies',
      'SLA target due date enforcement with automated escalation alerts',
      'Assigned remediation owners with status milestone tracking',
      'Verification sign-off workflow required before closing remediation items',
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
      'Structured evidence reference indexing linking controls to audit records',
      'Clean external document URL tracking (Jira, Confluence, AWS, GitHub)',
      'Custodian & reviewer approval metadata with verification timestamps',
      'No unverified binary file hosting; maintains defensible index pointers',
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
