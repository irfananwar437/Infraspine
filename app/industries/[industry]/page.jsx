import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Factory, Heart, Package, BarChart2, Building2, Truck, Home,
  CheckCircle, ArrowRight, Shield, Cloud, Server, Network, Zap,
} from 'lucide-react'

/* ─── Industry data ─────────────────────────────────────── */
const INDUSTRY_DATA = {
  manufacturing: {
    name: 'Manufacturing',
    icon: Factory,
    accentColor: '#F97316',
    tagline: 'Digitising Pakistan\'s Factory Floor',
    heroDesc: 'Manufacturing businesses in Pakistan face intense pressure: rising energy costs, global supply-chain volatility, and increasing demand from international buyers for quality certifications and traceability. Technology is no longer optional for manufacturers competing at a regional or global level — it is the platform on which operational excellence is built. Infraspine partners with manufacturing businesses across textiles, food processing, pharmaceuticals, chemicals, and engineering to design and deliver IT infrastructure, industrial network connectivity, operational technology (OT) integration, ERP systems, and cybersecurity frameworks that protect production environments and enable data-driven manufacturing.',
    challenges: [
      { label: 'OT/IT Network Segmentation', desc: 'Production floor systems (PLCs, SCADA, HMI) must be isolated from corporate IT to prevent malware crossing from email into production control systems.' },
      { label: 'ERP & MES Integration',       desc: 'Disconnected ERP and Manufacturing Execution Systems create data silos, manual re-entry errors, and delayed production reporting.' },
      { label: 'Supply Chain Visibility',      desc: 'Multi-supplier, multi-warehouse operations need real-time inventory, purchase order, and goods-receipt visibility to prevent production stoppages.' },
      { label: 'Downtime & Maintenance',       desc: 'Unplanned machine downtime costs manufacturers hours of production. Predictive maintenance tools and reliable SCADA connectivity reduce unplanned stops.' },
      { label: 'Regulatory Compliance',        desc: 'Pharmaceutical, food, and export manufacturers must maintain audit trails, batch records, and quality control data for regulatory inspection readiness.' },
      { label: 'Remote Plant Monitoring',      desc: 'Multi-site manufacturers need centralised visibility into production KPIs, energy consumption, and equipment status across all facilities.' },
    ],
    services: [
      { label: 'Industrial Network Design (OT/IT)',  href: '/services/network-infrastructure', color: '#F97316' },
      { label: 'ERP Implementation & Support',       href: '/services/software-development/erp', color: '#F97316' },
      { label: 'SCADA & IoT Connectivity',           href: '/services/network-infrastructure', color: '#F97316' },
      { label: 'Cybersecurity for OT Environments',  href: '/services/cyber-security', color: '#DC2626' },
      { label: 'Cloud MES & Production Analytics',   href: '/services/cloud-solutions', color: '#0891B2' },
      { label: '24/7 NOC Monitoring',                href: '/services/managed-it-services/noc-monitoring', color: '#2563EB' },
    ],
    stats: [
      { value: '40+', label: 'manufacturing clients in Pakistan' },
      { value: '99.7%', label: 'network uptime across factory sites' },
      { value: '35%', label: 'avg. reduction in unplanned downtime' },
      { value: '12hrs', label: 'typical ERP go-live support response' },
    ],
    faqs: [
      { question: 'Can you connect our production floor equipment to our ERP?', answer: 'Yes. We integrate PLC, SCADA, and MES systems with ERP platforms including SAP, Oracle, and custom solutions via OPC-UA, MQTT, and REST API integrations. This enables real-time production data in your ERP without manual entry.' },
      { question: 'How do you protect manufacturing networks from ransomware?', answer: 'We implement OT/IT network segmentation using industrial firewalls and DMZ zones, so ransomware entering via email cannot reach production control systems. We also deploy endpoint protection on all Windows-based HMI and SCADA workstations and establish offline backup routines for OT system configurations.' },
      { question: 'Do you work with small manufacturers or only large enterprises?', answer: 'We work with manufacturers from 50 to 5,000+ employees. For smaller manufacturers, we design cost-effective IT foundations that grow with the business. For large enterprises, we handle complex multi-site, multi-country deployments.' },
    ],
  },

  healthcare: {
    name: 'Healthcare',
    icon: Heart,
    accentColor: '#DC2626',
    tagline: 'Secure, Compliant IT for Healthcare Providers',
    heroDesc: 'Healthcare organisations in Pakistan operate under enormous pressure: patient safety requirements, regulatory compliance obligations, and the need to protect highly sensitive patient health information from increasingly sophisticated cyber threats. A data breach in a healthcare setting is not just a commercial problem — it erodes patient trust and can have direct consequences for patient safety when critical systems are unavailable. Infraspine delivers healthcare-specific IT infrastructure, cybersecurity, and digital health solutions for hospitals, clinics, diagnostic laboratories, and pharmaceutical companies across Pakistan, with a deep understanding of healthcare compliance requirements and the unique sensitivity of clinical environments.',
    challenges: [
      { label: 'Patient Data Security',      desc: 'Electronic health records (EHR) contain the most sensitive personal data. Protecting against breach, ransomware, and insider threats requires healthcare-specific controls.' },
      { label: 'Clinical System Availability', desc: 'Hospital IT downtime has direct patient safety implications. Systems managing patient records, medication dispensing, and diagnostic imaging must maintain near-100% availability.' },
      { label: 'Medical Device Connectivity', desc: 'Connecting diagnostic equipment (MRI, CT, ECG, lab analysers) to hospital information systems while maintaining device safety and network security is a specialist challenge.' },
      { label: 'Telemedicine Infrastructure', desc: 'Providing secure, high-quality video consultations requires dedicated bandwidth management, identity verification, and encrypted communication platforms.' },
      { label: 'Compliance & Audit Trails',  desc: 'Healthcare providers must maintain complete audit trails of who accessed patient records, when, and from where — across all clinical applications and systems.' },
      { label: 'Disaster Recovery',          desc: 'Hospitals cannot afford data loss. Recovery point objectives (RPO) and recovery time objectives (RTO) must be measured in minutes, not hours.' },
    ],
    services: [
      { label: 'Healthcare Network Security',      href: '/services/cyber-security', color: '#DC2626' },
      { label: 'Patient Data Backup & DR',         href: '/services/data-backup-recovery', color: '#B45309' },
      { label: 'Medical Device Network Design',    href: '/services/network-infrastructure', color: '#7C3AED' },
      { label: 'Hospital IT Managed Services',     href: '/services/managed-it-services', color: '#2563EB' },
      { label: 'Clinical Application Support',     href: '/services/it-consultancy', color: '#4F46E5' },
      { label: 'Telemedicine Platform Setup',      href: '/services/cloud-solutions/microsoft-365', color: '#0891B2' },
    ],
    stats: [
      { value: '25+', label: 'healthcare providers served' },
      { value: 'RPO <15min', label: 'recovery point for critical systems' },
      { value: '0', label: 'patient data breaches under management' },
      { value: '99.95%', label: 'uptime for clinical network infrastructure' },
    ],
    faqs: [
      { question: 'How do you handle the sensitivity of patient health data?', answer: 'All Infraspine engineers working in healthcare environments sign confidentiality agreements specific to patient health information. We implement role-based access controls, full audit logging, and data encryption at rest and in transit. Our healthcare deployments follow international standards for clinical data security.' },
      { question: 'Can you connect legacy medical equipment to modern hospital networks?', answer: 'Yes. Medical devices often run outdated operating systems (Windows XP/7) that cannot be patched. We isolate these devices on dedicated network segments with strict firewall rules, preventing them from becoming attack vectors while maintaining their clinical connectivity.' },
      { question: 'What is your response time for critical healthcare IT incidents?', answer: 'For healthcare clients on our Managed IT Services contract, critical incidents affecting patient care systems have a 15-minute response time with an engineer on-call 24/7. We maintain a dedicated healthcare escalation path separate from standard commercial support.' },
    ],
  },

  retail: {
    name: 'Retail',
    icon: Package,
    accentColor: '#7C3AED',
    tagline: 'Connected Retail from Warehouse to Checkout',
    heroDesc: 'Pakistan\'s retail sector is transforming: e-commerce is growing rapidly, consumer expectations for omnichannel experiences are rising, and the competitive pressure on margins means that operational efficiency is no longer a nice-to-have. Retail businesses — from single-store independents to national chains — need IT infrastructure that connects every point of sale to central inventory, enables reliable e-commerce operations, protects payment card data, and provides management with real-time sales and stock visibility. Infraspine has delivered retail IT solutions across fashion, electronics, grocery, and specialty retail, with deep experience in point-of-sale systems, inventory management, and payment security compliance.',
    challenges: [
      { label: 'POS & Inventory Integration',    desc: 'Disconnected point-of-sale systems create stock discrepancies, manual reconciliation overhead, and unreliable sales reporting across multiple locations.' },
      { label: 'Payment Card Security (PCI DSS)', desc: 'Any retailer accepting card payments must meet PCI DSS requirements. Non-compliance risks fines, card scheme disqualification, and liability for card fraud losses.' },
      { label: 'Multi-Branch Connectivity',       desc: 'Reliable, monitored WAN connectivity between head office, distribution centres, and retail branches is foundational for centralised management and real-time data.' },
      { label: 'E-Commerce Platform Reliability', desc: 'Downtime during peak sales periods (Eid, back-to-school, promotional events) directly translates to lost revenue and damaged brand reputation.' },
      { label: 'Shrinkage & Loss Prevention',     desc: 'CCTV surveillance, access control, and integrated inventory analytics are essential tools for reducing retail shrinkage in high-footfall environments.' },
      { label: 'Customer Wi-Fi',                  desc: 'Retail customers expect guest Wi-Fi. Deploying it correctly — isolated from internal systems, GDPR-compliant, and with bandwidth controls — requires network expertise.' },
    ],
    services: [
      { label: 'Multi-Branch WAN Connectivity',  href: '/services/network-infrastructure', color: '#7C3AED' },
      { label: 'CCTV & Loss Prevention Systems', href: '/services/physical-security/cctv', color: '#7C3AED' },
      { label: 'PCI DSS Compliance Assessment',  href: '/services/cyber-security/vapt', color: '#DC2626' },
      { label: 'Retail IT Managed Services',     href: '/services/managed-it-services', color: '#2563EB' },
      { label: 'Cloud POS & Inventory Systems',  href: '/services/software-development/erp', color: '#16A34A' },
      { label: 'Customer Wi-Fi Deployment',      href: '/services/network-infrastructure', color: '#0891B2' },
    ],
    stats: [
      { value: '30+', label: 'retail brands across Pakistan' },
      { value: '150+', label: 'retail branch locations connected' },
      { value: 'PCI DSS', label: 'compliance delivered for card retailers' },
      { value: '4hrs', label: 'avg. on-site response for POS outages' },
    ],
    faqs: [
      { question: 'Can you help us connect 20+ branches with reliable internet?', answer: 'Yes, multi-branch WAN connectivity is one of our core strengths. We design SD-WAN or MPLS solutions with failover to 4G/5G, providing centralised management visibility and guaranteed uptime across all your locations, with automatic failover when primary links fail.' },
      { question: 'What does PCI DSS compliance involve for a retail business?', answer: 'PCI DSS compliance for retailers primarily involves: network segmentation to isolate card data environments, encryption of card data in transit and at rest, access controls on payment systems, security monitoring, and annual penetration testing. We handle the full assessment, remediation, and documentation process.' },
      { question: 'Do you provide CCTV systems specifically for retail loss prevention?', answer: 'Yes. Our retail CCTV deployments include high-resolution cameras at entry/exit points, tills, stock rooms, and high-value product areas, with intelligent analytics for people-counting, dwell-time analysis, and queue management in addition to standard loss prevention monitoring.' },
    ],
  },

  financial: {
    name: 'Financial Services',
    icon: BarChart2,
    accentColor: '#0EA5E9',
    tagline: 'Resilient, Regulated IT for Financial Services',
    heroDesc: 'Financial services organisations face the most stringent IT security and compliance requirements of any sector. Banks, insurance companies, asset managers, exchange companies, and fintech businesses in Pakistan operate under State Bank of Pakistan (SBP) regulations, SECP requirements, and international standards including ISO 27001 and PCI DSS — all while managing the reputational risk that comes with any security incident or service disruption. Infraspine delivers financial services IT infrastructure, cybersecurity, and compliance solutions that meet regulatory requirements, protect sensitive financial data, and maintain the high availability that financial customers demand around the clock.',
    challenges: [
      { label: 'SBP & Regulatory Compliance',   desc: 'SBP\'s Risk Management Guidelines for Technology require comprehensive security controls, audit trails, business continuity plans, and third-party risk management frameworks.' },
      { label: 'Zero-Tolerance for Downtime',   desc: 'Financial services customers have zero tolerance for system unavailability. Core banking, payment processing, and trading systems require five-nines (99.999%) availability targets.' },
      { label: 'Sophisticated Cyber Threats',    desc: 'Financial institutions are the primary target of nation-state threat actors, organised cybercrime groups, and fraud syndicates using advanced persistent threats.' },
      { label: 'Insider Threat Management',      desc: 'The financial services sector experiences a disproportionate share of insider fraud. Privileged access management and activity monitoring are critical controls.' },
      { label: 'Third-Party Risk',               desc: 'Financial institutions depend on vendors, cloud providers, and fintech partners — each representing a potential security breach entry point that requires assessment and monitoring.' },
      { label: 'Business Continuity Planning',   desc: 'Regulators require tested, documented business continuity and disaster recovery plans with defined RPO and RTO targets for all critical financial systems.' },
    ],
    services: [
      { label: 'SOC as a Service (24/7)',         href: '/services/cyber-security/soc', color: '#DC2626' },
      { label: 'ISO 27001 Implementation',        href: '/services/cyber-security', color: '#DC2626' },
      { label: 'VAPT & Penetration Testing',      href: '/services/cyber-security/vapt', color: '#DC2626' },
      { label: 'Disaster Recovery Planning',      href: '/services/data-backup-recovery', color: '#B45309' },
      { label: 'Privileged Access Management',    href: '/services/managed-it-services', color: '#2563EB' },
      { label: 'SBP Compliance Assessment',       href: '/services/it-consultancy', color: '#4F46E5' },
    ],
    stats: [
      { value: '20+', label: 'financial services clients' },
      { value: 'ISO 27001', label: 'certifications supported' },
      { value: '99.99%', label: 'uptime for financial network infrastructure' },
      { value: '0', label: 'regulatory breaches under our management' },
    ],
    faqs: [
      { question: 'Do you understand SBP IT security requirements?', answer: 'Yes. Infraspine has deep familiarity with the State Bank of Pakistan\'s Risk Management Guidelines for Technology, Cyber Security Framework, and Business Continuity requirements. We have helped multiple regulated financial institutions achieve and maintain compliance with these frameworks.' },
      { question: 'Can you provide 24/7 security monitoring for a financial institution?', answer: 'Yes. Our SOC as a Service provides 24/7/365 security monitoring with SIEM correlation, threat detection, and incident response. We maintain financial-sector-specific detection rules covering SWIFT transaction anomalies, after-hours privileged access, and lateral movement indicators specific to financial IT environments.' },
      { question: 'How do you handle business continuity planning for financial clients?', answer: 'We design, document, and test BCP and DR plans aligned to SBP requirements. This includes identifying critical systems and their RPO/RTO requirements, designing backup and failover architecture, documenting recovery procedures, and conducting annual DR tests with formal test reports for regulatory submission.' },
    ],
  },

  construction: {
    name: 'Construction',
    icon: Building2,
    accentColor: '#D97706',
    tagline: 'Technology for Pakistan\'s Built Environment',
    heroDesc: 'Construction companies in Pakistan operate across dispersed, temporary project sites where IT infrastructure traditionally ranges from informal to non-existent. But modern construction requires technology: project management software that tracks timelines and costs, BIM (Building Information Modelling) platforms that coordinate architects and engineers, procurement systems that manage supplier relationships, and site connectivity that allows project managers to communicate in real time. Infraspine delivers construction IT infrastructure that works at head office and in the field — from project management and ERP systems to site connectivity, CCTV for site security, and access control for controlled entry to hazardous work zones.',
    challenges: [
      { label: 'Project Site Connectivity',    desc: 'Temporary construction sites need reliable internet for site management software, BIM collaboration, and video communication — in locations that may lack fixed-line infrastructure.' },
      { label: 'Multi-Project Visibility',     desc: 'Construction firms running multiple simultaneous projects need consolidated visibility into budget consumption, milestone progress, and resource utilisation across all active jobs.' },
      { label: 'Site Security & Access Control', desc: 'Controlling access to hazardous construction sites, preventing theft of materials and equipment, and maintaining safety induction records requires integrated physical security systems.' },
      { label: 'Document Management',          desc: 'Construction projects generate vast quantities of drawings, specifications, variations, and correspondence that must be version-controlled and accessible to all project stakeholders.' },
      { label: 'Subcontractor Management',     desc: 'Managing dozens of subcontractors, tracking certifications and insurance, issuing work orders, and processing payment claims requires structured digital workflows.' },
      { label: 'Equipment & Asset Tracking',   desc: 'Large construction equipment has significant capital value. GPS tracking and asset management reduces idle equipment time and prevents unauthorised use.' },
    ],
    services: [
      { label: 'Site Wireless & 4G/5G Connectivity', href: '/services/network-infrastructure', color: '#D97706' },
      { label: 'Construction Project ERP',            href: '/services/software-development/erp', color: '#16A34A' },
      { label: 'Site CCTV & Access Control',         href: '/services/physical-security', color: '#7C3AED' },
      { label: 'Document Management Systems',         href: '/services/software-development', color: '#16A34A' },
      { label: 'IT Consultancy for Construction',     href: '/services/it-consultancy', color: '#4F46E5' },
      { label: 'Microsoft 365 for Project Teams',     href: '/services/cloud-solutions/microsoft-365', color: '#0078D4' },
    ],
    stats: [
      { value: '15+', label: 'construction companies served' },
      { value: '50+', label: 'project sites connected across Pakistan' },
      { value: '30%', label: 'avg. improvement in project reporting speed' },
      { value: '48hrs', label: 'site connectivity deployment time' },
    ],
    faqs: [
      { question: 'Can you provide internet connectivity to a remote construction site?', answer: 'Yes. We deploy 4G/LTE and fixed wireless connectivity to construction sites within 48 hours, with enterprise-grade routers, SD-WAN failover, and network management. We also design structured cabling and Wi-Fi for temporary site offices.' },
      { question: 'What CCTV solution is appropriate for a construction site?', answer: 'Construction sites benefit from solar-powered, battery-backed CCTV towers or mobile CCTV units that can be repositioned as work progresses. We supply weatherproof IP cameras with 4G connectivity to a central monitoring platform, providing 24/7 site security and theft deterrence without requiring fixed power infrastructure.' },
      { question: 'Do you have experience with construction ERP systems?', answer: 'Yes. We implement and customise ERP solutions specifically configured for construction: project cost tracking against budgets, subcontractor management, purchase order workflows, plant and equipment tracking, and progress certificate processing. We also integrate with quantity surveying and project management tools commonly used in the sector.' },
    ],
  },

  logistics: {
    name: 'Logistics',
    icon: Truck,
    accentColor: '#0F766E',
    tagline: 'Technology-Driven Logistics Across Pakistan',
    heroDesc: 'Logistics and supply chain businesses in Pakistan are operating in a rapidly changing environment: e-commerce growth is driving last-mile delivery demand, fuel costs are compressing margins, and customers increasingly expect real-time shipment tracking and proof-of-delivery. Logistics companies that invest in technology — route optimisation, warehouse management systems, fleet telematics, and customer-facing tracking portals — are pulling away from competitors still managing operations on spreadsheets. Infraspine partners with 3PL providers, freight forwarders, courier companies, and warehouse operators to deliver the IT infrastructure, software, and connectivity that powers modern logistics operations across Pakistan.',
    challenges: [
      { label: 'Fleet & Route Management',     desc: 'Managing a dispersed fleet without telematics leads to fuel wastage, unauthorised vehicle use, inefficient routing, and inability to provide customers with accurate ETAs.' },
      { label: 'Warehouse Management',         desc: 'Paper-based warehouse operations create picking errors, inaccurate stock counts, and delayed dispatch — all directly impacting customer satisfaction and returns rates.' },
      { label: 'Last-Mile Visibility',         desc: 'Customers increasingly demand real-time tracking of their shipments. Building customer-facing tracking capabilities requires integration across fleet, WMS, and customer systems.' },
      { label: 'Multi-Depot Connectivity',     desc: 'Logistics networks with multiple depots, hubs, and cross-dock facilities require reliable WAN connectivity for centralised TMS and WMS operations.' },
      { label: 'Driver Communication',          desc: 'Real-time communication with drivers — for route changes, customer instructions, and proof-of-delivery capture — requires mobile-first technology solutions.' },
      { label: 'Cold Chain Monitoring',         desc: 'Pharmaceutical, food, and perishables logistics require IoT-based temperature monitoring through the entire cold chain with automated alerting and audit logs.' },
    ],
    services: [
      { label: 'Fleet Telematics Integration',    href: '/services/ai-automation', color: '#0F766E' },
      { label: 'Warehouse Management Systems',    href: '/services/software-development/erp', color: '#16A34A' },
      { label: 'Multi-Depot WAN Connectivity',    href: '/services/network-infrastructure', color: '#7C3AED' },
      { label: 'Customer Tracking Portals',       href: '/services/software-development', color: '#16A34A' },
      { label: 'IoT & Cold Chain Monitoring',     href: '/services/ai-automation', color: '#D97706' },
      { label: 'Logistics IT Managed Services',   href: '/services/managed-it-services', color: '#2563EB' },
    ],
    stats: [
      { value: '18+', label: 'logistics companies served' },
      { value: '200+', label: 'depot and warehouse locations connected' },
      { value: '28%', label: 'avg. fuel cost reduction via route optimisation' },
      { value: 'Real-time', label: 'fleet tracking across Pakistan' },
    ],
    faqs: [
      { question: 'Can you integrate telematics with our existing TMS?', answer: 'Yes. We integrate telematics platforms including Samsara, Verizon Connect, and custom GPS systems with TMS and WMS platforms via API. This enables live vehicle location in your TMS, automated ETA calculations, and geo-fence triggered delivery status updates to customers.' },
      { question: 'What technology do you recommend for warehouse management?', answer: 'For small-to-mid logistics operations, we recommend cloud-based WMS solutions with mobile barcode scanning at a fraction of the cost of enterprise systems. For larger 3PLs, we implement and integrate enterprise WMS platforms. We assess your throughput volumes and complexity before recommending a specific solution.' },
      { question: 'How do you handle IoT cold chain monitoring implementation?', answer: 'We deploy IoT temperature sensors with cloud connectivity in cold rooms, refrigerated vehicles, and transit packaging. Sensors report temperature readings every 5–15 minutes to a cloud platform with automated alerts when temperatures deviate from set points — with full audit logs for pharmaceutical GDP compliance.' },
    ],
  },

  'real-estate': {
    name: 'Real Estate',
    icon: Home,
    accentColor: '#16A34A',
    tagline: 'Smart Technology for Real Estate Developers',
    heroDesc: 'Real estate developers in Pakistan are increasingly competing not just on location and price, but on the technology proposition of their developments — smart home features, fibre-to-the-unit broadband, integrated building management systems, and security infrastructure that attracts premium buyers and tenants. From Karachi\'s Defence and Bahria developments to Lahore\'s master-planned communities and Islamabad\'s blue-chip commercial real estate, the technology infrastructure embedded in a development is becoming a material factor in buyer decision-making. Infraspine partners with real estate developers, property management companies, and real estate agencies to deliver structured cabling, building networks, smart security, and digital marketing technology that differentiates your development and commands premium pricing.',
    challenges: [
      { label: 'Development-Wide Network Design',  desc: 'Residential and commercial developments need structured cabling, fibre backbone, and wireless infrastructure planned at the construction phase — retrofitting is exponentially more expensive.' },
      { label: 'Integrated Security for Gated Communities', desc: 'Gated developments require comprehensive perimeter security: ANPR cameras at vehicle entry, intercom-to-app resident control, visitor management, and 24/7 CCTV monitoring.' },
      { label: 'Smart Home & BMS Integration',     desc: 'Buyers expect smart lighting, climate control, and access control. Building Management Systems (BMS) that integrate HVAC, lifts, and utilities need careful design and commissioning.' },
      { label: 'Property Management Technology',   desc: 'Managing service charges, maintenance requests, resident communications, and facility bookings across hundreds of units requires purpose-built property management software.' },
      { label: 'Real Estate Agency Digital Tools', desc: 'Real estate agencies need CRM systems, virtual tour platforms, digital marketing integration, and e-signature tools to operate at the speed modern buyers expect.' },
      { label: 'Data Centre for Commercial Buildings', desc: 'Grade-A commercial office buildings are expected to provide colocation space or a building data centre for tenant IT infrastructure — requiring careful design and commissioning.' },
    ],
    services: [
      { label: 'Development Structured Cabling',    href: '/services/network-infrastructure', color: '#16A34A' },
      { label: 'Gated Community Security Systems',  href: '/services/physical-security', color: '#7C3AED' },
      { label: 'CCTV & Access Control Design',      href: '/services/physical-security/cctv', color: '#7C3AED' },
      { label: 'Property Management Software',      href: '/services/software-development', color: '#16A34A' },
      { label: 'Building Data Centre Design',       href: '/services/network-infrastructure', color: '#0891B2' },
      { label: 'Smart Wi-Fi for Developments',      href: '/services/network-infrastructure', color: '#16A34A' },
    ],
    stats: [
      { value: '12+', label: 'real estate projects delivered' },
      { value: '5,000+', label: 'residential units with network infrastructure' },
      { value: '99.9%', label: 'uptime on development network infrastructure' },
      { value: '3–6mo', label: 'typical development IT delivery timeline' },
    ],
    faqs: [
      { question: 'When should we engage you in a real estate development project?', answer: 'As early as possible — ideally at design stage, before slab-on-ground. Network cabling conduit and server room spaces need to be included in the architectural and MEP drawings. Engaging at design stage costs a fraction of retrofitting structured cabling after fit-out. We provide structured cabling design drawings compatible with your architect\'s and MEP consultant\'s design packages.' },
      { question: 'What security system do you recommend for a gated community?', answer: 'For gated communities we recommend: ANPR cameras at vehicle entry/exit gates integrated with a visitor management system, video intercom systems in each unit with a resident smartphone app for visitor approval, perimeter CCTV with intelligent motion analytics, and a central security monitoring station staffed by your security team. We design and commission the full integrated system.' },
      { question: 'Can you build a smart home solution for residential units in a development?', answer: 'Yes. We design smart home packages at different price points — from basic smart lighting and keyless entry for affordable housing to full KNX/Crestron-integrated smart home systems for premium developments. We coordinate with your interior design team and ensure all smart home systems are commissioned and handed over with resident user guides.' },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(INDUSTRY_DATA).map(industry => ({ industry }))
}

export async function generateMetadata({ params }) {
  const { industry } = await params
  const data = INDUSTRY_DATA[industry]
  if (!data) return {}
  return {
    title: `IT Solutions for ${data.name} Industry Pakistan | Infraspine`,
    description: `Infraspine delivers managed IT, cybersecurity, network, and software solutions tailored for ${data.name.toLowerCase()} businesses in Pakistan. ${data.tagline}.`,
    alternates: { canonical: `https://www.infraspine.com/industries/${industry}` },
    openGraph: {
      title: `${data.name} IT Solutions Pakistan | Infraspine`,
      description: `Technology solutions tailored for the ${data.name.toLowerCase()} sector in Pakistan.`,
      url: `https://www.infraspine.com/industries/${industry}`,
    },
  }
}

export default async function IndustryPage({ params }) {
  const { industry } = await params
  const data = INDUSTRY_DATA[industry]
  if (!data) notFound()

  const IconComponent = data.icon
  const ac = data.accentColor

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-32" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        {/* Accent blob */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{ background: `radial-gradient(circle, ${ac}, transparent 70%)` }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pb-16 sm:pb-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[12px] mb-8" style={{ color: '#475569' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
            <span>/</span>
            <span style={{ color: '#94A3B8' }}>{data.name}</span>
          </nav>

          <div className="flex items-start gap-5 mb-6">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${ac}20`, border: `1px solid ${ac}40` }}>
              <IconComponent size={26} style={{ color: ac }} strokeWidth={1.5} />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="h-px w-6" style={{ background: ac }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: ac }}>Industry</span>
              </div>
              <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white">
                IT Solutions for<br />
                <span style={{ color: ac }}>{data.name}</span>
              </h1>
            </div>
          </div>

          <p className="text-[15.5px] sm:text-[17px] leading-relaxed max-w-3xl mb-10" style={{ color: '#94A3B8' }}>
            {data.heroDesc}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {data.stats.map(s => (
              <div key={s.label} className="rounded-xl p-3 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                <div className="text-[17px] font-black mb-1" style={{ color: ac }}>{s.value}</div>
                <div className="text-[11px] leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/request-quote"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
              style={{ background: ac, color: '#fff' }}>
              Get a Free Assessment <ArrowRight size={14} />
            </Link>
            <Link href="/book-meeting"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
              style={{ border: '1.5px solid rgba(255,255,255,0.25)', color: '#fff' }}>
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              IT Challenges in {data.name}
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              The six technology challenges that consistently hold {data.name.toLowerCase()} businesses back — and how Infraspine addresses each one.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.challenges.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl border p-6 hover:-translate-y-0.5 transition-all hover:shadow-lg"
                style={{ borderColor: '#E2E8F0', boxShadow: '0 2px 12px rgba(10,22,40,0.05)' }}>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${ac}15` }}>
                    <CheckCircle size={13} style={{ color: ac }} />
                  </div>
                  <h3 className="text-[14px] font-black" style={{ color: '#0A1628' }}>{c.label}</h3>
                </div>
                <p className="text-[13px] leading-relaxed" style={{ color: '#64748B' }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant services */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black mb-3" style={{ color: '#0A1628' }}>
            Services for {data.name} Businesses
          </h2>
          <p className="text-[15px] mb-8 max-w-xl" style={{ color: '#64748B' }}>
            The most relevant Infraspine service areas for {data.name.toLowerCase()} organisations.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.services.map((s, i) => (
              <Link key={i} href={s.href}
                className="group flex items-center justify-between p-4 rounded-xl border transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: '#E2E8F0', background: '#F8FAFC' }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${s.color}15` }}>
                    <Shield size={14} style={{ color: s.color }} strokeWidth={1.7} />
                  </div>
                  <span className="text-[13.5px] font-semibold" style={{ color: '#1E293B' }}>{s.label}</span>
                </div>
                <ArrowRight size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: s.color }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Infraspine for this industry */}
      <section className="py-14" style={{ background: '#071a37' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="h-px w-6" style={{ background: ac }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: ac }}>Why Infraspine</span>
              </div>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-white mb-5 leading-tight">
                {data.name} IT Expertise<br />You Can Rely On
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#94A3B8' }}>
                Infraspine engineers and consultants have worked extensively within the {data.name.toLowerCase()} sector across Pakistan. We understand the regulatory environment, the operational pressures, and the technology landscape — which means we design solutions that fit your context, not generic IT templates.
              </p>
              <div className="space-y-3">
                {[
                  `Sector-specific experience across Pakistan's ${data.name.toLowerCase()} industry`,
                  'Solutions designed around operational requirements, not IT-first thinking',
                  'Local support team with 4-hour on-site response across major cities',
                  'Technology partnerships with leading global vendors',
                ].map((p, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle size={14} style={{ color: ac, marginTop: '3px', flexShrink: 0 }} />
                    <span className="text-[13.5px]" style={{ color: '#CBD5E1' }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Visual */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Server,  label: 'Infrastructure',  desc: 'Built for uptime' },
                { icon: Shield,  label: 'Security',        desc: 'Defence in depth' },
                { icon: Cloud,   label: 'Cloud',           desc: 'Scalable platforms' },
                { icon: Network, label: 'Connectivity',    desc: 'Always connected' },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl p-5 border" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                  <item.icon size={22} style={{ color: ac, marginBottom: '8px' }} strokeWidth={1.4} />
                  <p className="text-[13px] font-black text-white">{item.label}</p>
                  <p className="text-[11.5px]" style={{ color: '#64748B' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion
        title={`${data.name} IT — Frequently Asked Questions`}
        subtitle={`Common questions from ${data.name.toLowerCase()} businesses evaluating IT services with Infraspine.`}
        faqs={data.faqs}
      />

      <CTABanner
        heading={`Ready to Discuss Your ${data.name} IT Needs?`}
        subheading={`Book a free 60-minute consultation with an Infraspine specialist who has worked across Pakistan's ${data.name.toLowerCase()} sector.`}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
