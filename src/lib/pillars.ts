export interface Pillar {
  code: 'RISK' | 'ASSET' | 'CONTROL' | 'BOARD';
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
    accentColor: '#0F6E6A',
    oneLiner: 'Structured 5x5 risk scoring, treatment planning & residual tracking',
    badge: 'Risk Quantification',
    desc: 'Log organizational, cloud, and vendor risks with Likelihood × Impact scoring. Link risks directly to mitigating controls and inventory assets for full visibility.',
    features: [
      '5x5 Likelihood and Impact scoring matrix with customized risk thresholds',
      'Direct linkage between identified risks, assets, and mitigating security controls',
      'Treatment plan management: Accept, Mitigate, Transfer, or Avoid',
      'Historical score tracking and immutable audit log in PostgreSQL',
    ],
  },
  {
    code: 'ASSET',
    name: 'Asset & Inventory',
    slug: 'asset-inventory',
    accentColor: '#3B82F6',
    oneLiner: 'Connected repository of hardware, cloud assets, vendors & PII data flows',
    badge: 'Inventory Context',
    desc: 'Maintain complete inventory visibility with direct context into PII data flows, vendor relationships, and protective security controls.',
    features: [
      'Unified view of cloud infrastructure, databases, endpoints, and SaaS vendors',
      'Data flow classification (PII, Financial, Sensitive) linked to safeguards',
      'Third-party vendor catalog with compliance certification records',
      'Direct risk and control association for every registered asset',
    ],
  },
  {
    code: 'CONTROL',
    name: 'Control Mapping',
    slug: 'control-mapping',
    accentColor: '#8B5CF6',
    oneLiner: 'Map controls once and align across 6 documented standards',
    badge: 'AI Clause Matcher',
    desc: 'Define your technical and organizational controls once. OMNiGRC advisory AI suggests candidate clauses across ISO27001, ISO42001, SOC2, GDPR, DPDP, HIPAA for human review.',
    features: [
      'Tiered model router with strict data minimization and redaction',
      'Pre-loaded with ISO27001, ISO42001, SOC2, GDPR, DPDP, HIPAA',
      'Confidence scores accompanying all AI advisory suggestions',
      'Mandatory human analyst approval before database persistence',
    ],
  },
  {
    code: 'BOARD',
    name: 'Compliance Board',
    slug: 'compliance-board',
    accentColor: '#10B981',
    oneLiner: 'Kanban testing workflow, testing cadences & rolling 30/60/90-day visibility',
    badge: 'Testing Cadence',
    desc: 'Assign control owners, configure recurring test schedules, and maintain an audit-ready cadence without pre-audit scrambles.',
    features: [
      'Kanban board with clear owner assignments and status tracking',
      'Rolling 30, 60, and 90-day upcoming evidence and review deadlines',
      'Recurring test frequencies: Monthly, Quarterly, Semi-Annual, and Annual',
      'Defensible testing history ready for external audit review',
    ],
  },
];

export function getPillarBySlug(slug: string): Pillar | undefined {
  return PILLARS.find(
    (p) =>
      p.slug === slug ||
      (slug === 'risk-management' && p.slug === 'risk-register') ||
      (slug === 'continuous-monitoring' && p.slug === 'asset-inventory') ||
      (slug === 'audit-management' && p.slug === 'control-mapping') ||
      (slug === 'policy-management' && p.slug === 'compliance-board')
  );
}
