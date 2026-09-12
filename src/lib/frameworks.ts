export interface Framework {
  code: 'ISO27001' | 'ISO42001' | 'SOC2' | 'GDPR' | 'DPDP' | 'HIPAA';
  name: string;
  slug: string;
  accentColor: string;
  oneLiner: string;
  badge: string;
  region: string;
  subtitle: string;
  desc: string;
  controlDomains: string[];
  controls: string[];
  omniWorkflow: string;
  headerDesc: string;
}

export const FRAMEWORKS: Framework[] = [
  {
    code: 'ISO27001',
    name: 'ISO 27001:2022',
    slug: 'iso-27001',
    accentColor: '#0F6E6A',
    oneLiner: 'Global ISMS standard & Annex A controls management',
    badge: 'ISMS Management',
    region: 'Global Standard',
    subtitle: 'Information Security Management System & Annex A Controls',
    desc: 'Manage your ISMS risk register, Annex A control mapping, and Statement of Applicability (SoA) within OMNiGRC without spreadsheet duplication.',
    controlDomains: [
      'A.5 Organizational Controls (37 Controls)',
      'A.6 People Controls (8 Controls)',
      'A.7 Physical Controls (14 Controls)',
      'A.8 Technological Controls (34 Controls)',
    ],
    controls: [
      'A.5 Organizational controls (policies, asset management, roles)',
      'A.6 People controls (screening, terms of employment, awareness)',
      'A.7 Physical security safeguards and working areas',
      'A.8 Technological controls (access, malware, backup, encryption)',
    ],
    omniWorkflow:
      'Map internal security policies once; OMNiGRC links policies to ISO 27001 Annex A clauses and populates your Statement of Applicability (SoA) automatically.',
    headerDesc: 'ISMS Global Standard & Annex A',
  },
  {
    code: 'ISO42001',
    name: 'ISO 42001:2023',
    slug: 'iso-42001',
    accentColor: '#8B5CF6',
    oneLiner: 'AI Management System (AIMS) governance & responsible AI',
    badge: 'AIMS Governance',
    region: 'Global AI Management',
    subtitle: 'Artificial Intelligence Management System & Responsible AI Governance',
    desc: 'Establish, implement, maintain, and continually improve an Artificial Intelligence Management System (AIMS). Manage AI risk assessments, algorithmic impact assessments, and AI control objectives.',
    controlDomains: [
      'AI Impact Assessment & Risk Identification',
      'Algorithmic Data Quality & Bias Governance',
      'System Transparency & Model Audit Trail',
      'Human Oversight & Continuous AIMS Monitoring',
    ],
    controls: [
      'Context of the Organization & AI Impact Assessment mapping',
      'AI Risk Assessment & Risk Treatment Protocols',
      'Data Quality, Governance & Algorithmic Bias Management',
      'AI System Lifecycle, Audit Logging & Transparency Controls',
    ],
    omniWorkflow:
      'Track AI models, risk assessments, and algorithmic safeguards within OMNiGRC, linking model assets directly to ISO 42001 clauses.',
    headerDesc: 'AI Management System (AIMS)',
  },
  {
    code: 'SOC2',
    name: 'SOC 2 Type II',
    slug: 'soc-2',
    accentColor: '#3B82F6',
    oneLiner: 'AICPA Trust Services Criteria for Security, Availability, & Privacy',
    badge: 'Trust Services Criteria',
    region: 'North America & Global SaaS',
    subtitle: 'Trust Services Criteria for Security, Availability, and Privacy',
    desc: 'OMNiGRC helps lean teams map technical policies and testing dates to AICPA Common Criteria (CC1-CC9). Evidence testing cadences are managed directly on the Compliance Board.',
    controlDomains: [
      'CC1 - CC5 Control Environment & Risk Assessment',
      'CC6 Logical and Physical Access Controls',
      'CC7 System Operations & Vulnerability Detection',
      'CC8 - CC9 Change Management & Risk Mitigation',
    ],
    controls: [
      'CC1.0 - CC5.0 Control Environment & Risk Assessment mapping',
      'CC6.0 Logical access, password policies, and MFA verification',
      'CC7.0 System operations & vulnerability management cadence',
      'CC8.0 - CC9.0 Change management and risk mitigation tracking',
    ],
    omniWorkflow:
      'Align technical configurations and testing dates to Common Criteria. Evidence cadences are tracked on the Compliance Board with rolling 30/60/90-day visibility.',
    headerDesc: 'Trust Services Criteria Security & Ops',
  },
  {
    code: 'GDPR',
    name: 'GDPR / UK GDPR',
    slug: 'gdpr',
    accentColor: '#0EA5E9',
    oneLiner: 'European & British General Data Protection Regulation safeguards',
    badge: 'Data Privacy & Governance',
    region: 'European Union & United Kingdom',
    subtitle: 'European & UK General Data Protection Regulation Safeguards',
    desc: 'Track asset repositories, PII data flows, and technical safeguards. Link privacy risks directly to operational controls and human-approved mitigation plans.',
    controlDomains: [
      'Article 30: Record of Processing Activities (RoPA)',
      'Article 32: Technical & Organizational Security',
      'Article 33/34: Data Breach Notification Protocols',
      'Article 35: Data Protection Impact Assessments (DPIA)',
    ],
    controls: [
      'Article 30 Record of Processing Activities (RoPA) asset tracing',
      'Article 32 Technical and organizational security safeguards',
      'Article 33 & 34 Incident logging & breach notification protocols',
      'Article 35 Data Protection Impact Assessment (DPIA) linkages',
    ],
    omniWorkflow:
      'Track data flows and asset inventories within OMNiGRC, directly connecting PII data stores to required technical safeguards and encryption controls.',
    headerDesc: 'European & British Data Protection',
  },
  {
    code: 'DPDP',
    name: 'DPDP Act 2023',
    slug: 'dpdp',
    accentColor: '#B5750A',
    oneLiner: 'India Digital Personal Data Protection Act fiduciary compliance',
    badge: 'Data Fiduciary Mandate',
    region: 'India Digital Privacy',
    subtitle: 'Digital Personal Data Protection Act Fiduciary Operations',
    desc: 'Structured compliance for Indian data fiduciaries. Maintain inventory of personal data flows, processing safeguards, and grievance management controls.',
    controlDomains: [
      'Section 6: Clear & Granular Consent Notices',
      'Section 8(5): Reasonable Security Safeguards',
      'Section 8(6): Personal Data Breach Notification',
      'Section 11: Data Principal Rights & Grievance Redressal',
    ],
    controls: [
      'Section 6 Notice and consent mechanism management',
      'Section 8(5) Reasonable security safeguards & technical controls',
      'Section 8(6) Personal data breach reporting protocols',
      'Section 11 Data principal rights & audit trail governance',
    ],
    omniWorkflow:
      'Maintain vendor registers, asset inventories, and safeguard controls tailored specifically to Indian data fiduciary guidelines.',
    headerDesc: 'India Personal Data Protection',
  },
  {
    code: 'HIPAA',
    name: 'HIPAA Security Rule',
    slug: 'hipaa',
    accentColor: '#10B981',
    oneLiner: 'Healthcare PHI privacy & technical administrative safeguards',
    badge: 'Health Data Privacy',
    region: 'Healthcare & PHI Data',
    subtitle: 'Protected Health Information (PHI) Safeguards & Technical Rules',
    desc: 'Demonstrate compliance with HIPAA Security, Privacy, and Breach Notification Rules. Map administrative, physical, and technical safeguards to PHI data stores and audit trails.',
    controlDomains: [
      'Administrative Safeguards & Access Management',
      'Physical Safeguards & Workstation Security',
      'Technical Safeguards (Encryption & Integrity)',
      'Business Associate Agreements & Breach Response',
    ],
    controls: [
      'Administrative Safeguards (Security Management & Access Controls)',
      'Physical Safeguards (Facility Access & Workstation Security)',
      'Technical Safeguards (Access Control, Audit Controls, Integrity, Transmission)',
      'Organizational Requirements & Business Associate Agreements (BAAs)',
    ],
    omniWorkflow:
      'Link PHI assets and vendor registers directly to HIPAA safeguards, tracking audit logging and encryption evidence on the Compliance Board.',
    headerDesc: 'Healthcare PHI Privacy & Safeguards',
  },
];

export function getFrameworkBySlug(slug: string): Framework | undefined {
  return FRAMEWORKS.find((fw) => fw.slug === slug);
}
