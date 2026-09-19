export interface FrameworkFaq {
  question: string;
  answer: string;
}

export interface FrameworkImplementationStep {
  step: string;
  title: string;
  description: string;
}

export interface FrameworkRelatedWorkflow {
  title: string;
  href: string;
  description: string;
}

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
  citations: [string, string, string];
  whatItIs: string;
  applicability: string[];
  commonMistakes: string[];
  implementationPath: FrameworkImplementationStep[];
  omniSupportPoints: string[];
  faqs: FrameworkFaq[];
  relatedWorkflows: FrameworkRelatedWorkflow[];
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
    citations: ['A.5', 'A.7', 'A.8'],
    whatItIs:
      'ISO 27001:2022 is the international benchmark standard for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS). It provides a risk-based framework for organizational information governance.',
    applicability: [
      'Technology providers & SaaS companies seeking enterprise customer trust',
      'Organizations storing sensitive client records or commercial data assets',
      'Global enterprises requiring structured vendor risk management baselines',
      'Regulated service providers needing independent security assurance',
    ],
    commonMistakes: [
      'Treating ISO 27001 as a one-time paper audit rather than an ongoing operational ISMS process',
      'Maintaining separate, disconnected risk registers for ISO 27001 and internal operations',
      'Failing to keep the Statement of Applicability (SoA) synchronized with actual policy updates',
      'Neglecting risk treatment plan reviews prior to external surveillance audits',
    ],
    implementationPath: [
      {
        step: '01',
        title: 'Define ISMS Scope & Policy Baseline',
        description: 'Establish organizational boundaries, asset registers, and foundational security policies mapped to organizational context.',
      },
      {
        step: '02',
        title: 'Conduct Risk Assessment & Treatment',
        description: 'Identify information assets, evaluate threat scenarios using the 5x5 matrix, and establish human-approved risk treatment options.',
      },
      {
        step: '03',
        title: 'Map Annex A Controls & Build SoA',
        description: 'Crosswalk existing operational safeguards to the 93 Annex A controls and generate a live Statement of Applicability.',
      },
      {
        step: '04',
        title: 'Operationalize Cadence & Internal Audit',
        description: 'Track evidence testing cadences on the Compliance Board and conduct internal audit workpapers before external certification.',
      },
    ],
    omniSupportPoints: [
      'Centralized ISMS Risk Register using the standard 5x5 likelihood x impact model',
      'Automated Annex A clause suggestions powered by Advisory AI with human approval workflow',
      'Dynamic Statement of Applicability (SoA) export reflecting real-time control statuses',
      'Compliance Board integration for tracking recurring evidence reviews and internal audit cadences',
    ],
    faqs: [
      {
        question: 'Does OMNiGRC issue ISO 27001 certificates?',
        answer: 'No. OMNiGRC is a governance platform that helps organizations operationalize their ISMS, track controls, and prepare workpapers. Official ISO 27001 certification requires an independent audit by an accredited external certification body.',
      },
      {
        question: 'How does OMNiGRC handle the 2022 update to Annex A?',
        answer: 'OMNiGRC natively structures controls under the 4 updated ISO 27001:2022 domains (Organizational, People, Physical, Technological), while retaining historical mappings to earlier versions if required.',
      },
      {
        question: 'Can we crosswalk ISO 27001 controls to SOC 2 or GDPR?',
        answer: 'Yes. OMNiGRC is built on a "map once, satisfy many" architecture. Linking an operational policy or control to ISO 27001 allows it to simultaneously satisfy overlapping criteria in SOC 2, ISO 42001, or GDPR.',
      },
    ],
    relatedWorkflows: [
      { title: 'Control Mapping', href: '/products/control-mapping', description: 'Crosswalk internal policies across ISO 27001 Annex A clauses.' },
      { title: 'Compliance Board', href: '/products/compliance-board', description: 'Track 30/60/90-day testing cadences for ISMS evidence.' },
      { title: 'Risk Register', href: '/products/risk-register', description: 'Evaluate information security risks with 5x5 scoring.' },
      { title: 'Evidence Index', href: '/products/evidence', description: 'Maintain verifiable evidence reference links for external auditors.' },
    ],
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
    citations: ['A.5', 'A.6', 'A.8'],
    whatItIs:
      'ISO 42001:2023 is the world\'s first international standard for managing Artificial Intelligence Management Systems (AIMS). It specifies requirements for responsibly developing, deploying, and utilizing AI systems within organizations.',
    applicability: [
      'Organizations building, fine-tuning, or deploying machine learning and generative AI models',
      'Enterprise SaaS providers embedding AI capabilities into core commercial workflows',
      'Regulated institutions requiring formal AI risk assessments and algorithmic transparency',
      'Governance teams tasked with enforcing ethical AI practices and human-in-the-loop oversight',
    ],
    commonMistakes: [
      'Treating AI governance as standard IT security without addressing model drift or training data lineage',
      'Failing to maintain a centralized inventory of deployed AI models and third-party AI dependencies',
      'Conflating automated advisory AI outputs with human legal or ethical determinations',
      'Overlooking continuous AI impact assessments when model versions or training data sets change',
    ],
    implementationPath: [
      {
        step: '01',
        title: 'Inventory AI Models & Systems',
        description: 'Catalog all internal, customer-facing, and third-party AI models within the OMNiGRC Asset Inventory.',
      },
      {
        step: '02',
        title: 'Perform AI Algorithmic Impact Assessments',
        description: 'Evaluate ethical implications, potential bias, data lineage, and failure modes across model lifecycles.',
      },
      {
        step: '03',
        title: 'Map ISO 42001 Control Objectives',
        description: 'Align technical and organizational safeguards to ISO 42001 clauses with Advisory AI suggestion mapping.',
      },
      {
        step: '04',
        title: 'Establish Human Oversight Cadences',
        description: 'Define human-in-the-loop sign-off protocols and track periodic AIMS reviews on the Compliance Board.',
      },
    ],
    omniSupportPoints: [
      'Asset Inventory categorization for ML models, training pipelines, and third-party AI APIs',
      'Structured 5x5 AI Risk Register tailored for algorithmic hallucination, data contamination, and model drift risks',
      'Advisory AI control mapping to ISO 42001 clauses with strict human-in-the-loop approval boundaries',
      'Centralized evidence index for model documentation, evaluation workpapers, and transparency logs',
    ],
    faqs: [
      {
        question: 'Does OMNiGRC perform automated model scanning or isolated LLM runtime execution?',
        answer: 'No. OMNiGRC is a governance and compliance management application. It tracks model assets, impact assessments, and control mappings. OMNiGRC does not perform native model binary scanning or market isolated LLM runtime execution.',
      },
      {
        question: 'Is human oversight required for ISO 42001 compliance in OMNiGRC?',
        answer: 'Yes. OMNiGRC adheres to the fundamental product boundary: "AI assists, humans decide." Advisory AI suggests control mappings and risk classifications, but human compliance leads must review and approve all decisions.',
      },
      {
        question: 'Can ISO 42001 controls be crosswalked to ISO 27001 or NIST AI RMF?',
        answer: 'Yes. Controls established for ISO 42001 in OMNiGRC can be crosswalked directly to ISO 27001 Annex A or NIST AI RMF baselines using the unified control mapping engine.',
      },
    ],
    relatedWorkflows: [
      { title: 'Asset Inventory', href: '/products/asset-inventory', description: 'Catalog AI models, data pipelines, and third-party API dependencies.' },
      { title: 'Control Mapping', href: '/products/control-mapping', description: 'Crosswalk internal policies across ISO 42001 AIMS controls.' },
      { title: 'Risk Register', href: '/products/risk-register', description: 'Evaluate model-specific risk scenarios using 5x5 matrices.' },
      { title: 'Policies Lifecycle', href: '/products/policies', description: 'Maintain Responsible AI policies and governance guidelines.' },
    ],
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
    citations: ['CC6.1', 'CC7.2', 'CC8.1'],
    whatItIs:
      'SOC 2 (System and Organization Controls 2) is an auditing procedure defined by the AICPA that evaluates a service provider\'s controls across five Trust Services Criteria: Security, Availability, Processing Integrity, Confidentiality, and Privacy.',
    applicability: [
      'SaaS startups and enterprise software vendors selling into B2B markets',
      'Cloud service providers hosting customer data assets or workloads',
      'Managed service providers needing independent operational security verification',
      'Growth companies responding to enterprise vendor security questionnaires',
    ],
    commonMistakes: [
      'Confusing a one-time SOC 2 Type I point-in-time snapshot with a rolling SOC 2 Type II observation period',
      'Failing to maintain continuous evidence testing cadences, creating coverage gaps during audits',
      'Over-promising automated audit pass guarantees without verified auditor workpapers',
      'Relying on manual spreadsheets to track change management and vulnerability remediation SLAs',
    ],
    implementationPath: [
      {
        step: '01',
        title: 'Select Trust Services Criteria',
        description: 'Scope your audit to Security (mandatory) plus optional Availability, Confidentiality, or Privacy criteria.',
      },
      {
        step: '02',
        title: 'Map Policies to Common Criteria (CC1-CC9)',
        description: 'Use OMNiGRC to align internal policies and operational controls to AICPA criteria numbers.',
      },
      {
        step: '03',
        title: 'Establish 30/60/90-Day Evidence Cadences',
        description: 'Track periodic access reviews, vulnerability scans, and backup testing on the Compliance Board.',
      },
      {
        step: '04',
        title: 'Share Auditor Workpapers & Evidence Index',
        description: 'Provide external CPA auditors with indexed evidence references without giving unmonitored infrastructure access.',
      },
    ],
    omniSupportPoints: [
      'Direct mapping of policies to AICPA Common Criteria CC1.0 through CC9.0',
      'Compliance Board tracking for 30/60/90-day rolling operational testing cadences',
      'External evidence reference-index model for auditor verification without raw data cloning',
      'Vulnerability governance workflow tracking finding resolution SLAs from external scanners',
    ],
    faqs: [
      {
        question: 'Does OMNiGRC issue SOC 2 reports directly?',
        answer: 'No. SOC 2 Type I and Type II reports can only be issued by an independent CPA firm. OMNiGRC provides the connected governance platform to manage controls, track evidence cadences, and organize auditor workpapers.',
      },
      {
        question: 'How does OMNiGRC manage SOC 2 evidence without storing sensitive data?',
        answer: 'OMNiGRC uses an external/reference-index evidence model. Instead of duplicating raw file contents or sensitive customer data inside the platform, OMNiGRC stores verified external pointer links and metadata records for audit reference.',
      },
      {
        question: 'Can we track SOC 2 observation periods in OMNiGRC?',
        answer: 'Yes. The Compliance Board provides continuous 30/60/90-day visibility into control testing schedules across your 6-month or 12-month Type II observation window.',
      },
    ],
    relatedWorkflows: [
      { title: 'Compliance Board', href: '/products/compliance-board', description: 'Manage rolling SOC 2 testing cadences and evidence due dates.' },
      { title: 'Control Mapping', href: '/products/control-mapping', description: 'Crosswalk policies directly to AICPA Common Criteria.' },
      { title: 'Vulnerabilities Governance', href: '/products/vulnerabilities', description: 'Track vulnerability remediation SLAs for CC7.1.' },
      { title: 'Evidence Index', href: '/products/evidence', description: 'Organize CPA auditor workpapers with reference links.' },
    ],
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
    citations: ['Art. 5', 'Art. 25', 'Art. 32'],
    whatItIs:
      'The General Data Protection Regulation (GDPR) and UK GDPR establish comprehensive legal requirements for data controllers and processors regarding personal data processing, data subject rights, security safeguards, and cross-border transfers.',
    applicability: [
      'Global organizations processing personal data of EU or UK residents',
      'B2B SaaS companies serving European enterprise clients as data processors',
      'Digital platforms handling customer analytics, PII repositories, or user profiles',
      'Compliance and legal teams maintaining Records of Processing Activities (RoPA)',
    ],
    commonMistakes: [
      'Assuming software platforms can provide "100% automated GDPR compliance" or "zero PII guarantees"',
      'Failing to maintain an accurate Article 30 Record of Processing Activities across infrastructure assets',
      'Treating Data Protection Impact Assessments (DPIA) as optional paperwork rather than core risk governance',
      'Confusing technical software tools with formal legal representation or regulatory advice',
    ],
    implementationPath: [
      {
        step: '01',
        title: 'Catalog Data Repositories & Build RoPA',
        description: 'Map PII data stores and processing activities in the OMNiGRC Asset Inventory pursuant to Article 30.',
      },
      {
        step: '02',
        title: 'Link Technical Safeguards (Article 32)',
        description: 'Associate security controls, encryption policies, and access controls with identified data assets.',
      },
      {
        step: '03',
        title: 'Conduct DPIAs for High-Risk Processing',
        description: 'Evaluate privacy risks using the 5x5 risk framework and establish mitigation plans under Article 35.',
      },
      {
        step: '04',
        title: 'Operationalize Breach & Incident Response',
        description: 'Maintain human-governed remediation workflows for incident logging and notification readiness.',
      },
    ],
    omniSupportPoints: [
      'Asset Inventory structure formatted for Article 30 Record of Processing Activities (RoPA)',
      'Privacy Risk scoring using standard 5x5 impact matrices linked to technical controls',
      'Vendor management register for tracking data processor agreements (DPAs) and sub-processors',
      'Human-in-the-loop review for privacy policies and regulatory documentation management',
    ],
    faqs: [
      {
        question: 'Does using OMNiGRC guarantee GDPR compliance or provide legal advice?',
        answer: 'No. OMNiGRC is an operational governance software platform that helps organizations document assets, map safeguards, and track controls. It does not provide formal legal advice, legal opinion, or absolute regulatory guarantees.',
      },
      {
        question: 'Does OMNiGRC claim to eliminate all PII exposure?',
        answer: 'No. OMNiGRC maintains strict product truth: we do not make absolute PII elimination claims. OMNiGRC helps teams minimize payload exposure and maintain governance visibility over where PII processing occurs across assets.',
      },
      {
        question: 'Can GDPR processing records be crosswalked to India DPDP or ISO 27001?',
        answer: 'Yes. Technical safeguards mapped for GDPR Article 32 can be crosswalked directly to ISO 27001 Annex A controls or DPDP Section 8(5) safeguards within OMNiGRC.',
      },
    ],
    relatedWorkflows: [
      { title: 'Asset Inventory', href: '/products/asset-inventory', description: 'Build your Article 30 Record of Processing Activities (RoPA).' },
      { title: 'Vendors Governance', href: '/products/vendors', description: 'Track third-party data processors and DPA commitments.' },
      { title: 'Control Mapping', href: '/products/control-mapping', description: 'Map Article 32 technical safeguards to operational policies.' },
      { title: 'Remediation Actions', href: '/products/remediation', description: 'Track incident response protocols and DPIA remediation items.' },
    ],
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
    citations: ['Sec 6', 'Sec 8', 'Sec 11'],
    whatItIs:
      'The Digital Personal Data Protection (DPDP) Act 2023 is India\'s statutory framework governing digital personal data processing. It establishes duties for Data Fiduciaries and Data Processors, emphasizing consent, reasonable security safeguards, and breach notification.',
    applicability: [
      'Indian enterprises and technology companies processing digital personal data',
      'Global companies offering goods or services to Data Principals within India',
      'Significant Data Fiduciaries (SDFs) requiring formal data protection audits and assessments',
      'Operations teams managing vendor registers and data processor obligations in India',
    ],
    commonMistakes: [
      'Confusing statutory data fiduciary obligations with external audit certifications',
      'Failing to maintain documented evidence of "reasonable security safeguards" under Section 8(5)',
      'Relying on informal spreadsheets to maintain data processor registries and vendor contracts',
      'Treating compliance software as an automated substitute for Data Protection Board notifications',
    ],
    implementationPath: [
      {
        step: '01',
        title: 'Inventory Digital Personal Data Assets',
        description: 'Identify digital personal data processing activities and data stores across Indian operations.',
      },
      {
        step: '02',
        title: 'Document Section 8(5) Technical Safeguards',
        description: 'Map access controls, encryption, and logging mechanisms to statutory security obligations.',
      },
      {
        step: '03',
        title: 'Register Vendors & Data Processors',
        description: 'Catalog third-party processors and maintain data protection agreements in Vendor Inventory.',
      },
      {
        step: '04',
        title: 'Operationalize Incident & Rights Workflows',
        description: 'Establish human-governed remediation workflows for breach reporting and data principal grievance tracking.',
      },
    ],
    omniSupportPoints: [
      'Asset Inventory structures tailored for tracking digital personal data processing stores',
      'Section 8(5) control mapping connecting reasonable security safeguards to internal security policies',
      'Vendor management register for tracking data processors and contractual commitments',
      'Human-approved audit trail governance for data fiduciary workpapers and evidence records',
    ],
    faqs: [
      {
        question: 'Does OMNiGRC provide legal representation before the Data Protection Board of India?',
        answer: 'No. OMNiGRC is a software platform for tracking governance workflows, data assets, and technical controls. It does not provide legal advice, legal counsel, or official regulatory representation.',
      },
      {
        question: 'How does OMNiGRC help operationalize DPDP Section 8(5)?',
        answer: 'OMNiGRC allows data fiduciaries to map their technical security controls (such as access management, encryption, and logging) directly to Section 8(5) obligations, tracking operational evidence on the Compliance Board.',
      },
      {
        question: 'Can DPDP controls be mapped alongside GDPR or ISO 27001?',
        answer: 'Yes. OMNiGRC\'s multi-framework engine allows data fiduciaries to map a single technical control to satisfy both DPDP Act provisions and overlapping international frameworks like GDPR or ISO 27001.',
      },
    ],
    relatedWorkflows: [
      { title: 'Asset Inventory', href: '/products/asset-inventory', description: 'Catalog digital personal data processing stores.' },
      { title: 'Vendors Governance', href: '/products/vendors', description: 'Manage data processor registers and DPDP contractual obligations.' },
      { title: 'Control Mapping', href: '/products/control-mapping', description: 'Crosswalk reasonable security safeguards under Section 8(5).' },
      { title: 'Remediation Actions', href: '/products/remediation', description: 'Track breach notification protocols and corrective actions.' },
    ],
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
    citations: ['§164.308', '§164.312', '§164.314'],
    whatItIs:
      'The HIPAA Security Rule (45 CFR Part 160 and Part 164, Subparts A and C) establishes national standards for protecting individuals\' electronic Protected Health Information (ePHI) created, received, used, or maintained by Covered Entities and Business Associates.',
    applicability: [
      'Healthcare providers, health plans, and healthcare clearinghouses (Covered Entities)',
      'Technology vendors, cloud platforms, and service providers handling ePHI (Business Associates)',
      'Digital health startups building software integrations with EHR/EMR platforms',
      'Compliance leads managing Business Associate Agreements (BAAs) and HIPAA risk evaluations',
    ],
    commonMistakes: [
      'Assuming signing a standard BAA with a cloud provider automatically makes an application HIPAA compliant',
      'Failing to perform and document continuous risk analyses as required under §164.308(a)(1)(ii)(A)',
      'Neglecting audit logging review cadences under §164.312(b) for ePHI transmission and access',
      'Treating compliance management tools as automated native security scanners or EHR connectors',
    ],
    implementationPath: [
      {
        step: '01',
        title: 'Catalog ePHI Assets & Repositories',
        description: 'Map databases, cloud storage buckets, and application services handling ePHI in the OMNiGRC Asset Inventory.',
      },
      {
        step: '02',
        title: 'Conduct HIPAA Risk Analysis',
        description: 'Identify threats and vulnerabilities to ePHI confidentiality, integrity, and availability using 5x5 matrices.',
      },
      {
        step: '03',
        title: 'Map Safeguards (§164.308 / §164.312)',
        description: 'Align administrative policies, technical access controls, and encryption safeguards to HIPAA Security Rule sections.',
      },
      {
        step: '04',
        title: 'Track BAAs & Evidence Testing',
        description: 'Maintain Business Associate registers and monitor rolling evidence testing cadences on the Compliance Board.',
      },
    ],
    omniSupportPoints: [
      'Asset Inventory classification specifically for electronic Protected Health Information (ePHI) repositories',
      'HIPAA Security Rule control crosswalk covering Administrative (§164.308), Physical (§164.310), and Technical (§164.312) safeguards',
      'Vendor management register for tracking Business Associate Agreements (BAAs) and vendor risk profiles',
      'Compliance Board tracking for required periodic security evaluations and audit review cadences',
    ],
    faqs: [
      {
        question: 'Does OMNiGRC issue HIPAA compliance certifications?',
        answer: 'No. The US Department of Health and Human Services (HHS) does not recognize or certify any official "HIPAA compliance certification." OMNiGRC helps Covered Entities and Business Associates document their safeguards, track risk analyses, and maintain evidence for audit readiness.',
      },
      {
        question: 'Does OMNiGRC execute legal Business Associate Agreements (BAAs)?',
        answer: 'OMNiGRC provides vendor management tracking to catalog and reference executed BAAs with your vendors. Formal legal execution of BAAs is an operational legal process between contracting parties.',
      },
      {
        question: 'Can HIPAA technical safeguards be crosswalked to SOC 2 or NIST SP 800-53?',
        answer: 'Yes. Technical safeguards under §164.312 (such as access control, audit controls, and transmission security) crosswalk directly to SOC 2 Common Criteria and NIST standards in OMNiGRC.',
      },
    ],
    relatedWorkflows: [
      { title: 'Asset Inventory', href: '/products/asset-inventory', description: 'Catalog ePHI repositories and data flows.' },
      { title: 'Vendors Governance', href: '/products/vendors', description: 'Track Business Associate Agreements (BAAs) and vendor risk.' },
      { title: 'Control Mapping', href: '/products/control-mapping', description: 'Map §164.308 and §164.312 safeguards to internal policies.' },
      { title: 'Compliance Board', href: '/products/compliance-board', description: 'Monitor audit log review cadences and periodic risk evaluations.' },
    ],
  },
];

export function getFrameworkBySlug(slug: string): Framework | undefined {
  return FRAMEWORKS.find((fw) => fw.slug === slug);
}
