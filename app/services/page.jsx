'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import {
  Server, Camera, Fingerprint, Zap, ShieldCheck, Phone,
  ArrowRight, Check, ChevronRight, Cloud, Headset, MonitorDot,
  HardDrive, Wifi, Video, Building2, ScanFace, CreditCard,
  CalendarCheck, Workflow, Bot, Plug, BarChart3, DollarSign,
  ShoppingCart, Users, FlameKindling, ScanLine, FileSearch, Lock,
  RefreshCw, PhoneCall, UserCheck, ClipboardList, PieChart,
  AlertTriangle, BookOpen, Siren, Activity, Globe, LayoutDashboard,
  Package, Cpu, Network, FileText, DatabaseBackup, Settings, Mic,
} from 'lucide-react'

const ERPServiceIcon = ({ size = 24, style }) => (
  <img
    src="/images/Icons/erpicon.png"
    alt=""
    aria-hidden="true"
    width={Math.round(size * 1.6)}
    height={Math.round(size * 1.6)}
    style={style}
    className="object-contain"
  />
)

const SERVICES = [
  {
    id: 'infra',
    icon: Server,
    label: 'IT Infrastructure',
    color: '#2563EB',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    heroBg: '/images/cloudback.png',
    tagline: 'Enterprise-Grade IT Foundation',
    desc: 'We design, deploy, and fully manage enterprise IT infrastructure — from bare-metal servers and structured networks to hybrid cloud environments. Every solution is built for 24/7 uptime, business continuity, and future scalability.',
    categories: [
      { icon: HardDrive,    title: 'Server & Data Center Setup',      desc: 'Rack & blade servers, SAN/NAS storage, UPS, and full data center design with high-availability clustering and redundancy planning.' },
      { icon: Wifi,         title: 'Network Architecture & VPN',      desc: 'Structured cabling, core/distribution/access switching, routing protocols, and encrypted site-to-site VPN for secure multi-location connectivity.' },
      { icon: Cloud,        title: 'Cloud Migration & Management',    desc: 'AWS, Azure, and hybrid cloud setup — workload migration, auto-scaling, cost governance, and ongoing cloud operations management.' },
      { icon: Headset,      title: 'Managed IT Support (24/7)',       desc: 'Dedicated helpdesk, remote monitoring & management (RMM), patch management, incident response, and monthly reporting.' },
      { icon: DatabaseBackup,title: 'Disaster Recovery & Backup',    desc: 'Automated backup strategies, off-site replication, RTO/RPO planning, and full disaster recovery testing and documentation.' },
      { icon: Settings,     title: 'IT Consulting & Strategy',       desc: 'Infrastructure audits, technology roadmap planning, vendor evaluation, and digital transformation advisory for CIOs and IT heads.' },
      { icon: Cpu,          title: 'Virtualization & Hypervisor',     desc: 'VMware, Hyper-V, and Proxmox environments for server consolidation, resource optimization, and simplified management.' },
      { icon: Activity,     title: 'Performance Monitoring & APM',   desc: 'Proactive infrastructure monitoring with threshold alerts, capacity planning, and application performance management dashboards.' },
    ],
    deliverables: [
      'Network topology diagram',
      'Server build & configuration document',
      'Cloud environment setup guide',
      'Backup & DR policy documentation',
      'SLA & escalation matrix',
      'Monthly monitoring reports',
      'Asset inventory register',
      'Handover & admin training',
    ],
    tools: ['VMware', 'Hyper-V', 'AWS', 'Azure', 'Zabbix', 'PRTG', 'pfSense', 'Cisco'],
    for: 'Enterprises, Multi-branch Businesses, Manufacturing, Healthcare, Financial Services',
  },
  {
    id: 'cctv',
    icon: Camera,
    label: 'CCTV & Security',
    color: '#7C3AED',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    heroBg: '/images/cyberback.png',
    tagline: 'Complete Physical Security Systems',
    desc: 'End-to-end IP-based surveillance from site survey to live monitoring — designed for single offices, multi-floor buildings, warehouses, and large enterprise campuses with centralized security operations.',
    categories: [
      { icon: Camera,     title: 'IP Camera System Design',       desc: 'Professional site survey, camera placement mapping, and installation of megapixel IP cameras covering all indoor and outdoor blind spots.' },
      { icon: HardDrive,  title: 'NVR/DVR Setup & Storage',      desc: 'Network video recorder configuration, RAID-based storage, retention policies, and redundant recording for uninterrupted footage archival.' },
      { icon: MonitorDot, title: 'Remote Live Monitoring',       desc: 'Mobile app setup, web portal access, push alert notifications, and PTZ camera control for real-time remote surveillance from any device.' },
      { icon: Building2,  title: 'Security Control Rooms',      desc: 'Full control room design with video walls, operator workstations, security management software, and integrated alarm panels.' },
      { icon: Video,      title: 'Video Analytics & AI Detection', desc: 'AI-powered motion detection, facial recognition alerts, intrusion zone detection, crowd density analysis, and license plate recognition (LPR).' },
      { icon: Globe,      title: 'Multi-site Centralized View',  desc: 'Unified VMS platform to monitor multiple locations from a single dashboard with role-based access per site manager.' },
      { icon: AlertTriangle, title: 'Alarm & Intrusion Integration', desc: 'Integration of CCTV with motion sensors, door contact alarms, and siren systems for a fully unified physical security response.' },
      { icon: FileText,   title: 'Maintenance & Health Checks',  desc: 'Scheduled preventive maintenance, lens cleaning, firmware updates, storage health checks, and annual system audits.' },
    ],
    deliverables: [
      'Site survey & camera placement report',
      'Equipment list & bill of materials',
      'NVR/DVR configuration document',
      'Mobile & remote access setup',
      'Footage retention policy',
      'User training manual',
      'Warranty & support agreement',
      'Annual maintenance schedule',
    ],
    tools: ['Hikvision', 'Dahua', 'Milestone VMS', 'Genetec', 'Axis', 'UniFi Protect'],
    for: 'Retail Chains, Warehouses, Industrial Facilities, Corporate Offices, Schools, Hospitals',
  },
  {
    id: 'biometric',
    icon: Fingerprint,
    label: 'Biometric & Access',
    color: '#0891B2',
    bg: '#ECFEFF',
    border: '#A5F3FC',
    heroBg: '/images/crmback.png',
    tagline: 'Smart Entry & Workforce Management',
    desc: 'Secure your facilities and automate workforce attendance with biometric technology — fingerprint readers, face recognition terminals, and smart card systems integrated with your HR and payroll platforms.',
    categories: [
      { icon: ScanLine,      title: 'Fingerprint Attendance Systems', desc: 'Multi-template fingerprint reader installation, software configuration, and direct integration with HR/payroll for automated attendance processing.' },
      { icon: ScanFace,      title: 'Face Recognition Terminals',    desc: 'Contactless AI-powered face ID devices for touchless entry, visitor verification, and fast bulk enrollment across all employees.' },
      { icon: CreditCard,    title: 'Smart Card & RFID Entry',       desc: 'Proximity card readers, MIFARE and HID RFID badges, door controllers, and access zone segmentation for floor-level security.' },
      { icon: CalendarCheck, title: 'Multi-site Access Management',  desc: 'Centralized access policy control across all branches with real-time override capability, schedule-based access, and remote lock/unlock.' },
      { icon: UserCheck,     title: 'Visitor Management System',     desc: 'Digital visitor log, pre-registration portal, temporary badge printing, escort assignment, and automated visitor notifications.' },
      { icon: ClipboardList, title: 'Attendance Reporting & Audit',  desc: 'Automated daily/weekly/monthly attendance reports, shift management, overtime tracking, and exception flagging for HR teams.' },
      { icon: Lock,          title: 'Turnstile & Barrier Integration', desc: 'Full hardware integration of biometric devices with turnstiles, boom barriers, electric strikes, and electromagnetic locks.' },
      { icon: PhoneCall,     title: 'Video Intercom & Door Stations', desc: 'IP video intercom systems with remote door release, two-way audio, and integration with access control panels.' },
    ],
    deliverables: [
      'Hardware installation & commissioning',
      'Software setup & employee enrollment',
      'HR & payroll system integration',
      'Access policy & zone configuration',
      'Visitor management portal',
      'Monthly attendance report template',
      'Admin training & user manual',
      'Warranty & support documentation',
    ],
    tools: ['ZKTeco', 'Suprema', 'Hikvision ACS', 'Anviz', 'IDEMIA', 'Lenel'],
    for: 'Corporate Offices, Factories, Hospitals, Government Buildings, Schools, Logistics Hubs',
  },
  {
    id: 'automation',
    icon: Zap,
    label: 'AI & Automation',
    color: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
    heroBg: '/images/aiback.png',
    tagline: 'n8n-Powered Business Workflow Engine',
    desc: 'Eliminate manual work at every layer of your business — from approval chains and data synchronisation to AI-powered customer interactions. We build, test, and maintain every automation end-to-end using n8n and modern AI platforms.',
    categories: [
      { icon: Workflow,   title: 'n8n Workflow Automation',      desc: 'Visual no-code/low-code workflow builder for business processes — invoice approvals, employee onboarding, report generation, and cross-system data sync.' },
      { icon: Bot,        title: 'WhatsApp Bot Development',     desc: 'WhatsApp Business API bots for customer support, lead qualification, order status, appointment booking, and automated follow-up sequences.' },
      { icon: Cpu,        title: 'AI Agent Deployment',          desc: 'Custom LLM-powered agents (GPT, Claude, Gemini) integrated into business workflows for intelligent document processing, Q&A, and decision support.' },
      { icon: Plug,       title: 'Cross-system API Integration', desc: 'REST/webhook integrations connecting ERP, CRM, WhatsApp, payment gateways, accounting tools, and 500+ platforms via pre-built connectors.' },
      { icon: CalendarCheck, title: 'Scheduled & Event Triggers', desc: 'Time-based and event-driven automation triggers for payroll runs, daily reports, SLA alerts, data backups, and batch processing jobs.' },
      { icon: BarChart3,  title: 'Automation Analytics & Logs',  desc: 'Workflow execution dashboards, error log monitoring, retry management, and performance analytics for all active automation pipelines.' },
      { icon: Settings,   title: 'RPA & Desktop Automation',     desc: 'Robotic process automation for legacy systems without APIs — browser automation, screen scraping, and data entry elimination.' },
      { icon: Globe,      title: 'eCommerce & Platform Bots',    desc: 'Shopify, WooCommerce, and marketplace automation for order fulfillment, inventory sync, review management, and customer notifications.' },
    ],
    deliverables: [
      'Workflow architecture diagram',
      'Bot deployment & testing report',
      'API integration documentation',
      'Trigger & event mapping',
      'Error handling & retry policy',
      'Analytics dashboard setup',
      'Team training & handover',
      'Monthly automation performance report',
    ],
    tools: ['n8n', 'Make (Integromat)', 'WhatsApp Business API', 'OpenAI', 'Zapier', 'Puppeteer'],
    for: 'Operations Teams, Customer Support, HR, Finance, Sales, eCommerce Businesses',
  },
  {
    id: 'erp',
    icon: ERPServiceIcon,
    label: 'ERP Development',
    color: '#16A34A',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    heroBg: '/images/erpback.png',
    tagline: 'Custom Business Management Systems',
    desc: 'Fully custom ERP built to your exact operational workflow — not a configured off-the-shelf product. Every module is developed from scratch to fit how your team actually works, with full integration between all business functions.',
    categories: [
      { icon: Users,          title: 'HR & Payroll Module',          desc: 'Employee records, org chart, contract management, leave & attendance, payroll calculation with tax, deductions, and EOBI/PESSI compliance.' },
      { icon: DollarSign,     title: 'Finance & Accounting',         desc: 'General ledger, chart of accounts, AP/AR management, bank reconciliation, financial statements, and multi-currency/multi-entity support.' },
      { icon: BarChart3,      title: 'CRM & Sales Pipeline',         desc: 'Lead capture, contact management, deal stages, quotation builder, follow-up reminders, and sales performance dashboards with WhatsApp integration.' },
      { icon: ShoppingCart,   title: 'Inventory & Procurement',      desc: 'Stock management, barcode/QR scanning, reorder alerts, purchase requisitions, supplier management, GRN processing, and batch/expiry tracking.' },
      { icon: LayoutDashboard,title: 'Operations & Project Management', desc: 'Production planning, job orders, task assignment, project timelines, resource allocation, SLA tracking, and operational KPI dashboards.' },
      { icon: PieChart,       title: 'Reporting & Business Intelligence', desc: 'Custom report builder, scheduled email reports, real-time executive dashboards, drill-down analytics, and data export to Excel/PDF.' },
      { icon: Package,        title: 'Asset Management Module',      desc: 'Fixed asset register, depreciation scheduling, maintenance logs, asset assignment tracking, and disposal management.' },
      { icon: Globe,          title: 'Customer Portal & Self-service', desc: 'Web portal for clients to view invoices, track orders, submit support tickets, and access their account history 24/7.' },
    ],
    deliverables: [
      'Business requirements document (BRD)',
      'System architecture & database design',
      'Module-by-module development',
      'UAT testing with your team',
      'Data migration from existing system',
      'Go-live support & bug fixing',
      'Admin & user training',
      '6-month post-launch support',
    ],
    tools: ['Next.js', 'Node.js', 'PostgreSQL', 'React', 'REST APIs', 'Docker'],
    for: 'Manufacturing, Retail, Logistics, Healthcare, Financial Services, Construction',
  },
  {
    id: 'cyber',
    icon: ShieldCheck,
    label: 'Cybersecurity',
    color: '#DC2626',
    bg: '#FEF2F2',
    border: '#FECACA',
    heroBg: '/images/cyberback.png',
    tagline: 'Enterprise Security & Compliance Readiness',
    desc: 'Protect your business from evolving cyber threats with layered, proactive security — firewall hardening, endpoint protection, penetration testing, and full compliance audit readiness for ISO 27001, GDPR, and PCI-DSS.',
    categories: [
      { icon: FlameKindling, title: 'Firewall & UTM Configuration',    desc: 'Next-gen firewall (NGFW) setup, intrusion prevention (IPS/IDS), content filtering, application-level inspection, and security policy governance.' },
      { icon: ShieldCheck,   title: 'Endpoint Detection & Response',   desc: 'EDR/XDR deployment, real-time threat hunting, malware quarantine, zero-day protection, and automated incident response playbooks.' },
      { icon: FileSearch,    title: 'Security Audit & Pen Testing',    desc: 'Black/grey/white box penetration testing, vulnerability scanning, CVE assessment, and detailed risk remediation report with CVSS scoring.' },
      { icon: Lock,          title: 'Compliance (ISO 27001, GDPR)',    desc: 'Gap analysis against compliance standards, ISMS policy documentation, data mapping, DPIAs, and audit preparation with evidence collection.' },
      { icon: BookOpen,      title: 'Security Awareness Training',     desc: 'Staff phishing simulation campaigns, security awareness workshops, e-learning modules, and policy acknowledgment tracking.' },
      { icon: Siren,         title: 'Incident Response & Forensics',  desc: 'IR retainer services, breach investigation, log forensics, root cause analysis, and post-incident remediation planning.' },
      { icon: Network,       title: 'Zero Trust Network Architecture', desc: 'Identity-based access controls, micro-segmentation, least-privilege enforcement, and continuous trust verification across your network.' },
      { icon: Activity,      title: 'SIEM & Security Monitoring',     desc: '24/7 Security Information & Event Management (SIEM) with log aggregation, anomaly detection, and automated threat correlation.' },
    ],
    deliverables: [
      'Security posture baseline report',
      'Firewall rule review & hardening',
      'Penetration test report with CVSS scores',
      'Vulnerability remediation roadmap',
      'Compliance gap analysis report',
      'Incident response playbook',
      'Security policy documentation',
      'Quarterly security health review',
    ],
    tools: ['Fortinet', 'pfSense', 'CrowdStrike', 'Wazuh', 'Nessus', 'Metasploit', 'Splunk', 'Qualys'],
    for: 'Finance, Healthcare, Retail, Legal, Any Business Handling Sensitive or Customer Data',
  },
  {
    id: 'callcenter',
    icon: Phone,
    label: 'Call Center Setup',
    color: '#0F766E',
    bg: '#F0FDFA',
    border: '#99F6E4',
    heroBg: '/images/crmback.png',
    tagline: 'Enterprise Call Center & Contact Center Solutions',
    desc: 'We design, deploy, and manage complete call center operations — from PBX and VoIP infrastructure to agent workstations, IVR systems, CRM integration, and real-time analytics. Whether you\'re launching a new contact center or upgrading an existing one, we deliver turnkey solutions for inbound, outbound, and blended operations.',
    categories: [
      { icon: Phone,        title: 'PBX & VoIP Infrastructure',       desc: 'IP-PBX deployment (Asterisk, FreePBX, 3CX), SIP trunking, VoIP handsets, and high-availability telephony architecture with failover.' },
      { icon: Mic,          title: 'IVR & Auto-Attendant',             desc: 'Multi-level IVR design with custom voice prompts, skill-based routing, queue management, and self-service options for callers.' },
      { icon: Headset,      title: 'Agent Workstation Setup',          desc: 'Complete agent desk configuration — headsets, softphones, dual monitors, CRM screen pops, and call control panels for maximum productivity.' },
      { icon: MonitorDot,   title: 'Wallboard & Live Dashboards',      desc: 'Real-time call center wallboards showing queue depth, wait times, agent status, SLA compliance, and active call metrics on display screens.' },
      { icon: BarChart3,    title: 'Reporting & Call Analytics',       desc: 'Historical reporting on call volume, AHT, abandonment rate, first-call resolution, agent performance, and custom KPI dashboards.' },
      { icon: Bot,          title: 'AI-Powered Call Routing',          desc: 'Intelligent call distribution using AI to route calls based on caller intent, language, priority, agent skill, and historical interaction data.' },
      { icon: Video,        title: 'Call Recording & QA',              desc: 'Full call recording with search, playback, and quality assurance scoring — integrated with compliance and training workflows.' },
      { icon: Plug,         title: 'CRM & Ticketing Integration',      desc: 'Seamless integration with your CRM, helpdesk, and ERP — automatic ticket creation, screen pops, call logging, and customer context on every call.' },
    ],
    deliverables: [
      'Call center infrastructure design document',
      'PBX/VoIP system installation & configuration',
      'IVR flow design & implementation',
      'Agent workstation setup & provisioning',
      'CRM & ticketing system integration',
      'Call recording & QA system setup',
      'Wallboard & analytics dashboard deployment',
      'Admin training & operations handover',
    ],
    tools: ['Asterisk', '3CX', 'FreePBX', 'Vicidial', 'Grandstream', 'Yealink', 'Zoiper', 'Elastix'],
    for: 'BPOs, Customer Support Centers, Sales Teams, Healthcare, Financial Services, Telecom, eCommerce',
  },
]

const FAQS = [
  { q: 'Do you handle the full project or just consulting?', a: 'We are a full-service delivery team. We scope, design, install, configure, test, and support everything end-to-end. You won\'t need to manage multiple vendors — one team handles it all.' },
  { q: 'Can you work with our existing infrastructure?', a: 'Absolutely. We always start with a thorough audit of your existing setup. We integrate new systems with what\'s already working and only replace what genuinely needs upgrading.' },
  { q: 'How long does a typical project take?', a: 'It depends on scope. A network overhaul or CCTV installation typically takes 1–2 weeks. An ERP build takes 6–16 weeks depending on modules. We provide a detailed timeline in every proposal.' },
  { q: 'What kind of SLA do you offer?', a: 'Our managed service SLAs include response times of under 2 hours for critical issues and under 8 hours for standard issues. All SLAs are written into the contract with clear escalation paths.' },
  { q: 'Do you provide training for our internal team?', a: 'Yes — every project includes a dedicated training and handover phase. We provide admin training, user manuals, video walkthroughs, and a 30-day post-go-live support window.' },
  { q: 'Can you support multiple locations or branches?', a: 'Yes. Multi-site deployments are one of our core strengths. We manage centralized infrastructure with branch-level visibility for IT, CCTV, biometrics, and ERP across any number of locations.' },
  { q: 'What happens if something breaks after deployment?', a: 'All projects include a warranty period. For managed service clients, incidents are covered 24/7 under SLA. For project-based clients, we offer support retainer packages to ensure ongoing coverage.' },
  { q: 'Do you offer custom ERP or only off-the-shelf?', a: 'We build fully custom ERP from scratch — no generic templates. Every module is designed based on your actual workflows, with your team\'s input throughout the development process.' },
  { q: 'How do you handle cybersecurity for the systems you deploy?', a: 'Security is built into every deployment — not added as an afterthought. This includes network segmentation, encrypted communications, hardened configurations, and optional ongoing security monitoring.' },
  { q: 'Can we start with one service and expand later?', a: 'Yes, and that\'s actually our most common engagement model. Most clients start with IT infrastructure or CCTV, then gradually expand into ERP, automation, or cybersecurity as trust is built.' },
]

function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-6" style={{ background: '#00C853' }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>FAQs</span>
            <div className="h-px w-6" style={{ background: '#00C853' }} />
          </div>
          <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-[14px]" style={{ color: '#64748B' }}>
            Common questions from clients before they engage with us.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border bg-white transition-all"
              style={{ borderColor: open === i ? '#00C853' : '#E2E8F0', boxShadow: open === i ? '0 4px 20px rgba(0,200,83,0.08)' : 'none' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
              >
                <span className="text-[14px] font-bold" style={{ color: '#0A1628' }}>{faq.q}</span>
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
                  style={{ background: open === i ? '#00C853' : '#F1F5F9', transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  <ChevronRight size={14} style={{ color: open === i ? '#fff' : '#64748B' }} />
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <div className="h-px mb-4" style={{ background: '#F1F5F9' }} />
                  <p className="text-[13.5px] leading-relaxed" style={{ color: '#475569' }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesPageInner() {
  const searchParams = useSearchParams()
  const [active, setActive] = useState('infra')

  useEffect(() => {
    const tab = searchParams.get('tab')
    const valid = SERVICES.find(s => s.id === tab)
    if (valid) {
      setActive(tab)
      setTimeout(() => {
        document.getElementById('service-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [searchParams])

  const svc = SERVICES.find(s => s.id === active)

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#0A1628' }}>
        {/* Dynamic background image */}
        {svc?.heroBg && (
          <div
            className="pointer-events-none absolute inset-0 transition-all duration-700"
            style={{
              backgroundImage: `url(${svc.heroBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.12,
            }}
          />
        )}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle,#00C853,transparent 70%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Our Services</span>
            </div>
            <h1 className="text-[30px] sm:text-[46px] lg:text-[56px] font-black leading-[1.06] tracking-tight text-white mb-5">
              End-to-End IT Services<br />
              <span style={{ color: '#00C853' }}>Tailored for Enterprise</span>
            </h1>
            <p className="text-[15px] sm:text-[17px] leading-relaxed mb-8 max-w-2xl" style={{ color: '#94A3B8' }}>
              Six specialised service areas with deep sub-categories. One team manages everything — from physical security and infrastructure to AI automation and compliance.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#service-detail"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#00C853', color: '#0A1628' }}>
                Explore Services <ArrowRight size={15} />
              </a>
              <a href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Get a Free Quote
              </a>
            </div>
          </div>

          {/* Service pills */}
          <div className="flex flex-wrap gap-2 mt-10">
            {SERVICES.map(s => (
              <span key={s.id} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#94A3B8' }}>
                <s.icon size={11} />
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Detail Navigator ── */}
      <section id="service-detail" className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">

          <div className="text-center mb-10">
            <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
              Deep-Dive Into Each Service
            </h2>
            <p className="text-[14px]" style={{ color: '#64748B' }}>
              Select a service to explore all sub-categories, deliverables, tools used, and who it's best suited for.
            </p>
          </div>

          {/* Tab selector */}
          <div className="flex overflow-x-auto gap-2 mb-8 pb-1 -mx-5 px-5 lg:mx-0 lg:px-0 lg:flex-wrap lg:justify-center scrollbar-hide">
            {SERVICES.map(s => (
              <button key={s.id} onClick={() => setActive(s.id)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-bold border flex-shrink-0 transition-all duration-200"
                style={active === s.id
                  ? { background: s.bg, color: s.color, borderColor: s.border, boxShadow: `0 4px 16px ${s.color}20` }
                  : { background: '#fff', color: '#64748B', borderColor: '#E2E8F0' }}>
                <s.icon size={14} />
                {s.label}
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="rounded-2xl overflow-hidden border bg-white transition-all duration-300"
            style={{ borderColor: svc.border, boxShadow: `0 8px 40px ${svc.color}10` }}>

            {/* Panel header */}
            <div className="p-6 sm:p-8 border-b" style={{ borderColor: svc.border, background: svc.bg }}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: '#fff', border: `2px solid ${svc.border}` }}>
                  <svc.icon size={26} style={{ color: svc.color }} strokeWidth={1.6} />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] mb-1" style={{ color: svc.color }}>
                    {svc.tagline}
                  </p>
                  <h3 className="text-[22px] sm:text-[28px] font-black leading-tight mb-2" style={{ color: '#0A1628' }}>
                    {svc.label}
                  </h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: '#475569' }}>
                    {svc.desc}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-8">

              {/* Sub-categories — 8 in a 2x4 / 4x2 grid */}
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] mb-4" style={{ color: '#94A3B8' }}>
                  Service Categories — {svc.categories.length} Areas
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {svc.categories.map((cat, i) => (
                    <div key={i} className="flex flex-col gap-3 p-4 rounded-xl border transition-all hover:-translate-y-0.5 hover:shadow-md"
                      style={{ borderColor: svc.border, background: svc.bg }}>
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: '#fff', border: `1.5px solid ${svc.border}` }}>
                        <cat.icon size={16} style={{ color: svc.color }} strokeWidth={1.7} />
                      </div>
                      <div>
                        <p className="text-[13px] font-bold mb-1 leading-snug" style={{ color: '#0A1628' }}>{cat.title}</p>
                        <p className="text-[11.5px] leading-relaxed" style={{ color: '#64748B' }}>{cat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables + Tools + For whom */}
              <div className="grid sm:grid-cols-3 gap-5">

                {/* Deliverables */}
                <div className="p-5 rounded-xl border" style={{ borderColor: '#E2E8F0', background: '#F8FAFC' }}>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] mb-4" style={{ color: '#94A3B8' }}>
                    What You Receive
                  </h4>
                  <ul className="space-y-2.5">
                    {svc.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: svc.bg }}>
                          <Check size={9} style={{ color: svc.color }} strokeWidth={3} />
                        </div>
                        <span className="text-[12.5px] leading-snug" style={{ color: '#374151' }}>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div className="p-5 rounded-xl border" style={{ borderColor: '#E2E8F0', background: '#F8FAFC' }}>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] mb-4" style={{ color: '#94A3B8' }}>
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {svc.tools.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg text-[11.5px] font-semibold"
                        style={{ background: svc.bg, color: svc.color, border: `1px solid ${svc.border}` }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Best For + CTA */}
                <div className="p-5 rounded-xl border" style={{ borderColor: '#E2E8F0', background: '#F8FAFC' }}>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] mb-4" style={{ color: '#94A3B8' }}>
                    Best Suited For
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {svc.for.split(', ').map((item, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-full text-[11px] font-semibold"
                        style={{ background: svc.bg, color: svc.color, border: `1px solid ${svc.border}` }}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 pt-4 border-t" style={{ borderColor: '#E2E8F0' }}>
                    <a href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all hover:opacity-90"
                      style={{ background: svc.color, color: '#fff' }}>
                      Get a Quote <ArrowRight size={13} />
                    </a>
                    <a href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-bold border transition-all hover:bg-slate-50"
                      style={{ borderColor: svc.border, color: svc.color }}>
                      Book Consultation <ChevronRight size={13} />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Why InfraSpine ── */}
      <section className="py-16" style={{ background: '#fff' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Why InfraSpine</span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </div>
            <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
              Why Businesses Choose <span style={{ color: '#00C853' }}>InfraSpine</span>
            </h2>
            <p className="text-[14px]" style={{ color: '#64748B' }}>One team. One contract. Every layer of your IT, managed end-to-end.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Single Point of Contact',    desc: 'One team manages your entire IT stack — no vendor juggling, no blame-shifting between suppliers when things go wrong.',  color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE' },
              { title: 'SLA-Backed Delivery',        desc: 'Written SLAs with guaranteed response and resolution times. Not vague promises — legally documented commitments.',         color: '#00C853', bg: '#F0FDF4', border: '#BBF7D0' },
              { title: '24/7 Monitoring & Support',  desc: 'We detect and resolve issues before your users notice. Round-the-clock NOC monitoring with automated escalation.',        color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE' },
              { title: 'Scalable Architecture',      desc: 'Every system we deploy is designed from day one for multi-site, multi-country expansion — no costly rebuilds when you grow.', color: '#0891B2', bg: '#ECFEFF', border: '#A5F3FC' },
              { title: 'Deep Industry Experience',   desc: '10+ years delivering enterprise IT across manufacturing, healthcare, retail, logistics, and financial services.',            color: '#EA580C', bg: '#FFF7ED', border: '#FED7AA' },
              { title: 'Fully Integrated Stack',     desc: 'ERP, CCTV, biometrics, automation — every system integrates with the others so your business runs as one unified platform.', color: '#D97706', bg: '#FFFBEB', border: '#FDE68A' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ background: item.bg, border: `1px solid ${item.border}` }}>
                <div className="w-2 h-2 rounded-full mb-4" style={{ background: item.color }} />
                <h3 className="text-[15px] font-bold mb-2" style={{ color: '#0A1628' }}>{item.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: '#64748B' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E8F0', borderTop: '1px solid #E2E8F0' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {[
              { value: '99.9%', label: 'Uptime SLA',        color: '#00C853' },
              { value: '10+',   label: 'Enterprise Clients', color: '#2563EB' },
              { value: '24/7',  label: 'Expert Support',    color: '#7C3AED' },
              { value: '10+',   label: 'Years Experience',  color: '#EA580C' },
            ].map((s, i, arr) => (
              <div key={s.label} className="flex flex-col items-center py-8 px-4"
                style={{ borderRight: i < arr.length - 1 ? '1px solid #E2E8F0' : 'none' }}>
                <span className="text-[34px] font-black leading-none mb-1" style={{ color: s.color }}>{s.value}</span>
                <span className="text-[12px] font-medium text-center" style={{ color: '#64748B' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Our Delivery Process ── */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>How We Work</span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </div>
            <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
              Our Service Delivery Process
            </h2>
            <p className="text-[14px] max-w-xl mx-auto" style={{ color: '#64748B' }}>
              Every engagement follows a structured, proven delivery framework — from the first call to long-term support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
            {[
              { step: '01', title: 'Discovery Call',        color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE', desc: 'We start with a free 60-minute consultation to understand your current setup, pain points, and business goals. No sales pitch — just listening.' },
              { step: '02', title: 'Audit & Assessment',    color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE', desc: 'Our engineers conduct a thorough technical audit of your existing infrastructure, systems, and security posture to identify gaps and risks.' },
              { step: '03', title: 'Solution Architecture', color: '#0891B2', bg: '#ECFEFF', border: '#A5F3FC', desc: 'We design a custom solution blueprint — network diagrams, system architecture, module map, and project timeline — all tailored to your requirements.' },
              { step: '04', title: 'Proposal & Sign-off',   color: '#D97706', bg: '#FFFBEB', border: '#FDE68A', desc: 'You receive a detailed proposal with itemised scope, SLAs, timelines, and fixed costs. No hidden costs. No scope creep surprises.' },
            ].map((s, i) => (
              <div key={i} className="relative flex flex-col rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ background: '#fff', border: `1px solid ${s.border}`, boxShadow: '0 2px 12px rgba(10,22,40,0.06)' }}>
                <div className="absolute -top-3.5 left-6 px-3 py-1 rounded-full text-[11px] font-black"
                  style={{ background: s.color, color: '#fff' }}>
                  {s.step}
                </div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 mt-2"
                  style={{ background: s.bg }}>
                  <div className="w-3 h-3 rounded-full" style={{ background: s.color }} />
                </div>
                <h3 className="text-[14px] font-bold mb-2" style={{ color: '#0A1628' }}>{s.title}</h3>
                <p className="text-[12.5px] leading-relaxed flex-1" style={{ color: '#64748B' }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { step: '05', title: 'Implementation',        color: '#16A34A', bg: '#F0FDF4', border: '#BBF7D0', desc: 'Our certified engineers carry out the full deployment — hardware installation, software configuration, system integration, and testing — with zero disruption to your operations.' },
              { step: '06', title: 'Testing & Handover',    color: '#EA580C', bg: '#FFF7ED', border: '#FED7AA', desc: 'Every system goes through rigorous UAT testing before go-live. We provide full documentation, admin training, and a formal handover sign-off from your team.' },
              { step: '07', title: 'Ongoing Support & SLA', color: '#00C853', bg: '#F0FDF4', border: '#BBF7D0', desc: '24/7 monitoring, proactive maintenance, SLA-backed response times, and a dedicated account manager for all post-deployment support and future upgrades.' },
            ].map((s, i) => (
              <div key={i} className="relative flex flex-col rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ background: '#fff', border: `1px solid ${s.border}`, boxShadow: '0 2px 12px rgba(10,22,40,0.06)' }}>
                <div className="absolute -top-3.5 left-6 px-3 py-1 rounded-full text-[11px] font-black"
                  style={{ background: s.color, color: '#fff' }}>
                  {s.step}
                </div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 mt-2"
                  style={{ background: s.bg }}>
                  <div className="w-3 h-3 rounded-full" style={{ background: s.color }} />
                </div>
                <h3 className="text-[14px] font-bold mb-2" style={{ color: '#0A1628' }}>{s.title}</h3>
                <p className="text-[12.5px] leading-relaxed flex-1" style={{ color: '#64748B' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagement Models ── */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>How We Engage</span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </div>
            <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
              Choose Your Engagement Model
            </h2>
            <p className="text-[14px] max-w-xl mx-auto" style={{ color: '#64748B' }}>
              Whether you need a one-time system build, an ongoing managed service, or dedicated retainer support — we have a model that fits.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                badge: 'Most Common',
                badgeColor: '#00C853',
                title: 'Project-Based',
                subtitle: 'One-time scoped delivery',
                color: '#00C853',
                border: 'rgba(0,200,83,0.3)',
                price: 'Fixed price',
                desc: 'Best for organisations that have a clear, defined project — a new ERP, a CCTV upgrade, a network overhaul, or an automation build. We scope, plan, and deliver end-to-end.',
                includes: [
                  'Full project scoping & planning',
                  'Fixed-cost proposal',
                  'Dedicated project manager',
                  'Complete documentation',
                  'Post-go-live support period',
                  'Training & handover',
                ],
              },
              {
                badge: 'Best Value',
                badgeColor: '#2563EB',
                title: 'Managed Service',
                subtitle: 'Fully outsourced IT operations',
                color: '#2563EB',
                border: 'rgba(37,99,235,0.3)',
                price: 'Monthly retainer',
                desc: 'Best for organisations that want to fully outsource their IT operations. We become your extended IT team — handling everything from monitoring to helpdesk to hardware procurement.',
                includes: [
                  '24/7 infrastructure monitoring',
                  'Unlimited helpdesk tickets',
                  'Patch & update management',
                  'Dedicated account manager',
                  'Monthly performance reports',
                  'Vendor & procurement management',
                ],
              },
              {
                badge: 'Flexible',
                badgeColor: '#7C3AED',
                title: 'Support Retainer',
                subtitle: 'On-demand expert hours',
                color: '#7C3AED',
                border: 'rgba(124,58,237,0.3)',
                price: 'Hour blocks',
                desc: 'Best for organisations with an internal IT team that needs specialist backup for complex projects, overflow work, or specialised skills like cybersecurity audits or ERP development.',
                includes: [
                  'Pre-purchased hour blocks',
                  'Access to all specialists',
                  'Priority response SLA',
                  'No long-term commitment',
                  'Roll-over unused hours',
                  'Flexible scope per month',
                ],
              },
            ].map((m, i) => (
              <div key={i} className="relative flex flex-col rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ background: '#fff', border: `1px solid ${m.border}`, boxShadow: '0 2px 12px rgba(10,22,40,0.06)' }}>
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold"
                  style={{ background: `${m.badgeColor}15`, color: m.badgeColor, border: `1px solid ${m.badgeColor}30` }}>
                  {m.badge}
                </div>
                <div className="p-6 border-b" style={{ borderColor: '#F1F5F9' }}>
                  <div className="text-[11px] font-bold uppercase tracking-wider mb-1" style={{ color: m.color }}>{m.subtitle}</div>
                  <h3 className="text-[22px] font-black mb-1" style={{ color: '#0A1628' }}>{m.title}</h3>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[13px] leading-relaxed mb-5" style={{ color: '#64748B' }}>{m.desc}</p>
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {m.includes.map((item, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-[12.5px]" style={{ color: '#475569' }}>
                        <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: `${m.color}20` }}>
                          <Check size={9} style={{ color: m.color }} strokeWidth={3} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-[13px] font-bold transition-all hover:opacity-90"
                    style={{ background: m.color, color: '#fff' }}>
                    Get Started <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology Partners ── */}
      <section className="py-14" style={{ background: '#fff', borderBottom: '1px solid #E2E8F0' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] mb-8" style={{ color: '#94A3B8' }}>
            Certified Technology Partners & Vendors
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { name: 'Cisco',       color: '#049FD9' },
              { name: 'Microsoft',   color: '#00A4EF' },
              { name: 'Fortinet',    color: '#EE3124' },
              { name: 'Hikvision',   color: '#CC0000' },
              { name: 'VMware',      color: '#607078' },
              { name: 'AWS',         color: '#FF9900' },
              { name: 'ZKTeco',      color: '#003087' },
              { name: 'Dell',        color: '#007DB8' },
              { name: 'HP',          color: '#0096D6' },
              { name: 'Dahua',       color: '#D40000' },
              { name: 'n8n',         color: '#EA4B71' },
              { name: 'Suprema',     color: '#00529B' },
              { name: 'CrowdStrike', color: '#E3001B' },
              { name: 'Azure',       color: '#0089D6' },
              { name: 'Axis',        color: '#1F2D3D' },
              { name: 'Genetec',     color: '#00B140' },
            ].map((p) => (
              <div key={p.name}
                className="flex items-center justify-center py-3 px-2 rounded-xl border text-[12px] font-black tracking-tight"
                style={{ borderColor: '#E2E8F0', color: p.color, background: '#F8FAFC' }}>
                {p.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industry Solutions ── */}
      <section className="py-16 sm:py-20" style={{ background: '#fff' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Industries We Serve</span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </div>
            <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
              Solutions Built for <span style={{ color: '#00C853' }}>Your Industry</span>
            </h2>
            <p className="text-[14px] max-w-xl mx-auto" style={{ color: '#64748B' }}>
              Every industry has unique compliance requirements, workflows, and security needs. We tailor our services to fit exactly how your sector operates.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: '🏭',
                industry: 'Manufacturing',
                color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE',
                challenges: 'Production downtime, equipment monitoring, multi-shift attendance, supply chain visibility.',
                services: ['IT Infrastructure', 'ERP (Production & Inventory)', 'Biometric Attendance', 'CCTV for Floor Safety'],
                result: 'Reduced unplanned downtime by 60% with proactive monitoring and automated alerts.',
              },
              {
                icon: '🏥',
                industry: 'Healthcare',
                color: '#DC2626', bg: '#FEF2F2', border: '#FECACA',
                challenges: 'Patient data security, HIPAA/compliance, 24/7 uptime, access control for restricted areas.',
                services: ['Cybersecurity & Compliance', 'Biometric Access Control', 'IT Infrastructure', 'CCTV & Physical Security'],
                result: 'Achieved ISO 27001 readiness and zero security incidents for 18+ months post-deployment.',
              },
              {
                icon: '🛒',
                industry: 'Retail & eCommerce',
                color: '#D97706', bg: '#FFFBEB', border: '#FDE68A',
                challenges: 'Multi-branch inventory sync, customer data, theft prevention, POS integration.',
                services: ['ERP (Inventory & CRM)', 'CCTV & AI Detection', 'AI & Automation', 'IT Infrastructure'],
                result: 'Unified inventory across 12 branches, reducing stock discrepancies by 85%.',
              },
              {
                icon: '🚚',
                industry: 'Logistics & Supply Chain',
                color: '#16A34A', bg: '#F0FDF4', border: '#BBF7D0',
                challenges: 'Fleet tracking, warehouse management, driver attendance, real-time shipment visibility.',
                services: ['ERP (Operations & Procurement)', 'Biometric Access', 'AI & Automation', 'IT Infrastructure'],
                result: 'Automated 40+ manual workflows, saving 200+ staff hours per month.',
              },
              {
                icon: '🏦',
                industry: 'Financial Services',
                color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE',
                challenges: 'Regulatory compliance, data encryption, fraud detection, secure remote access.',
                services: ['Cybersecurity & Compliance', 'IT Infrastructure', 'Biometric Access', 'CCTV & Security'],
                result: 'Full PCI-DSS compliance achieved within 8 weeks with zero operational disruption.',
              },
              {
                icon: '🏗️',
                industry: 'Construction & Real Estate',
                color: '#0891B2', bg: '#ECFEFF', border: '#A5F3FC',
                challenges: 'Site security, subcontractor attendance, project cost tracking, multi-site management.',
                services: ['CCTV & Physical Security', 'Biometric Attendance', 'ERP (Finance & Projects)', 'AI & Automation'],
                result: 'Reduced payroll fraud by 90% with biometric verification across 6 active project sites.',
              },
            ].map((ind, i) => (
              <div key={i} className="flex flex-col rounded-2xl overflow-hidden border transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: ind.border, boxShadow: '0 2px 12px rgba(10,22,40,0.06)' }}>
                {/* Header */}
                <div className="p-5 border-b" style={{ background: ind.bg, borderColor: ind.border }}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{ind.icon}</span>
                    <h3 className="text-[17px] font-black" style={{ color: '#0A1628' }}>{ind.industry}</h3>
                  </div>
                  <p className="text-[12px] leading-relaxed" style={{ color: '#64748B' }}>{ind.challenges}</p>
                </div>

                <div className="p-5 flex flex-col flex-1 bg-white">
                  {/* Services used */}
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] mb-2.5" style={{ color: '#94A3B8' }}>Services Applied</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {ind.services.map((s, j) => (
                      <span key={j} className="px-2.5 py-1 rounded-full text-[10.5px] font-semibold"
                        style={{ background: ind.bg, color: ind.color, border: `1px solid ${ind.border}` }}>
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Result */}
                  <div className="mt-auto pt-4 border-t" style={{ borderColor: '#F1F5F9' }}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] mb-1.5" style={{ color: '#94A3B8' }}>Client Result</p>
                    <p className="text-[12.5px] font-semibold leading-snug" style={{ color: ind.color }}>"{ind.result}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before & After ── */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>The Difference</span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </div>
            <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
              Before InfraSpine vs <span style={{ color: '#00C853' }}>After InfraSpine</span>
            </h2>
            <p className="text-[14px] max-w-xl mx-auto" style={{ color: '#64748B' }}>
              This is what most businesses experience before they consolidate their IT under one team.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                topic: 'IT Management',
                before: 'Multiple vendors for network, servers, software, and support — each pointing fingers at the other when something breaks.',
                after: 'One team owns everything. One number to call. Clear accountability and a single SLA for your entire IT stack.',
              },
              {
                topic: 'System Downtime',
                before: 'IT issues are discovered by employees or customers. Reactive firefighting with long resolution times and no root cause analysis.',
                after: '24/7 proactive monitoring detects anomalies before they become outages. Most issues are resolved before anyone notices.',
              },
              {
                topic: 'Security & Access',
                before: 'Weak passwords, shared logins, no access audit trail, outdated firewall rules, and no visibility into who accessed what.',
                after: 'Biometric access control, role-based permissions, firewall hardening, EDR on all endpoints, and a full audit trail.',
              },
              {
                topic: 'Business Automation',
                before: 'Manual data entry, Excel-based reporting, WhatsApp groups for approvals, and employees doing repetitive low-value tasks.',
                after: 'Automated workflows, real-time dashboards, WhatsApp bots for customer interaction, and employees focused on actual work.',
              },
              {
                topic: 'Data & Reporting',
                before: 'Data scattered across 10 different tools. Reports take hours to compile. Leadership makes decisions based on outdated information.',
                after: 'All business data in one ERP. Real-time dashboards for every department. Scheduled reports delivered automatically.',
              },
              {
                topic: 'Cost & Scalability',
                before: 'IT costs unpredictable. Every new branch means starting from scratch with new vendors, new setups, and new integrations.',
                after: 'Fixed monthly IT cost with managed services. New branches replicate the same proven architecture in days, not months.',
              },
            ].map((item, i) => (
              <div key={i} className="grid md:grid-cols-[140px_1fr_1fr] gap-0 rounded-2xl overflow-hidden border"
                style={{ borderColor: '#E2E8F0' }}>
                {/* Topic label */}
                <div className="flex items-center justify-center p-4 text-center"
                  style={{ background: '#0A1628' }}>
                  <span className="text-[12px] font-bold text-white leading-snug">{item.topic}</span>
                </div>
                {/* Before */}
                <div className="p-5 border-r" style={{ background: '#FEF2F2', borderColor: '#FECACA' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#DC2626' }}>
                      <span className="text-white text-[10px] font-black">✕</span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: '#DC2626' }}>Before</span>
                  </div>
                  <p className="text-[12.5px] leading-relaxed" style={{ color: '#7F1D1D' }}>{item.before}</p>
                </div>
                {/* After */}
                <div className="p-5" style={{ background: '#F0FDF4' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#00C853' }}>
                      <span className="text-white text-[10px] font-black">✓</span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: '#16A34A' }}>After InfraSpine</span>
                  </div>
                  <p className="text-[12.5px] leading-relaxed" style={{ color: '#14532D' }}>{item.after}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: '#00C853', color: '#0A1628' }}>
              Start Your Transformation <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ── SLA Comparison Table ── */}
      <section className="py-16 sm:py-20" style={{ background: '#fff' }}>
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Support Tiers</span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </div>
            <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
              SLA & Support <span style={{ color: '#00C853' }}>Comparison</span>
            </h2>
            <p className="text-[14px] max-w-xl mx-auto" style={{ color: '#64748B' }}>
              Every support tier is backed by a written SLA. Choose the coverage level that matches your business criticality.
            </p>
          </div>

          {/* Tier header cards */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { tier: 'Basic',      color: '#64748B', bg: '#F8FAFC',  border: '#E2E8F0',  desc: 'Essential monitoring and support for small businesses.' },
              { tier: 'Standard',   color: '#2563EB', bg: '#EFF6FF',  border: '#BFDBFE',  desc: 'Full managed IT for growing businesses with multiple systems.' },
              { tier: 'Enterprise', color: '#00C853', bg: '#F0FDF4',  border: '#00C853',  desc: 'Dedicated team, unlimited support, and white-glove service.' },
            ].map((t, i) => (
              <div key={i} className="rounded-2xl p-4 sm:p-5 text-center border"
                style={{ background: t.bg, borderColor: t.border, boxShadow: t.color === '#00C853' ? `0 4px 24px rgba(0,200,83,0.15)` : 'none' }}>
                {t.color === '#00C853' && (
                  <div className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: '#00C853' }}>⭐ Recommended</div>
                )}
                <h3 className="text-[16px] sm:text-[18px] font-black mb-2" style={{ color: '#0A1628' }}>{t.tier}</h3>
                <p className="text-[11px] leading-snug hidden sm:block" style={{ color: '#64748B' }}>{t.desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison rows */}
          <div className="rounded-2xl border overflow-hidden" style={{ borderColor: '#E2E8F0' }}>
            {[
              { feature: 'Response Time (Critical)',    basic: '8 hours',    standard: '2 hours',    enterprise: '30 minutes' },
              { feature: 'Response Time (Standard)',    basic: '24 hours',   standard: '8 hours',    enterprise: '2 hours' },
              { feature: 'Support Hours',               basic: 'Mon–Fri 9–6',standard: 'Mon–Sat 8–8',enterprise: '24/7/365' },
              { feature: 'Support Channels',            basic: 'Email only', standard: 'Email + Phone', enterprise: 'Email, Phone, WhatsApp, On-site' },
              { feature: 'Infrastructure Monitoring',   basic: '✕',          standard: '✓',          enterprise: '✓ Advanced' },
              { feature: 'Proactive Maintenance',       basic: '✕',          standard: 'Monthly',    enterprise: 'Weekly' },
              { feature: 'Patch & Update Management',   basic: '✕',          standard: '✓',          enterprise: '✓ Priority' },
              { feature: 'Dedicated Account Manager',   basic: '✕',          standard: '✕',          enterprise: '✓' },
              { feature: 'On-site Engineer Visits',     basic: '✕',          standard: 'Quarterly',  enterprise: 'Monthly + Emergency' },
              { feature: 'Monthly Reports',             basic: '✕',          standard: '✓ Basic',    enterprise: '✓ Full Executive' },
              { feature: 'Disaster Recovery Support',   basic: '✕',          standard: '✓',          enterprise: '✓ Full DR Planning' },
              { feature: 'Security Monitoring (SIEM)',  basic: '✕',          standard: '✕',          enterprise: '✓ 24/7' },
              { feature: 'Hardware Procurement Support',basic: '✕',          standard: '✓',          enterprise: '✓ + Preferred Rates' },
              { feature: 'SLA Uptime Guarantee',        basic: '99%',        standard: '99.5%',      enterprise: '99.9%' },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-4 border-b last:border-0`}
                style={{ borderColor: '#F1F5F9', background: i % 2 === 0 ? '#ffffff' : '#F8FAFC' }}>
                <div className="px-4 py-3.5 border-r text-[12px] font-semibold" style={{ borderColor: '#F1F5F9', color: '#374151' }}>
                  {row.feature}
                </div>
                {[row.basic, row.standard, row.enterprise].map((val, j) => (
                  <div key={j} className={`px-4 py-3.5 text-center text-[12px] font-semibold border-r last:border-0`}
                    style={{
                      borderColor: '#F1F5F9',
                      color: val === '✕' ? '#CBD5E1' : j === 2 ? '#16A34A' : j === 1 ? '#2563EB' : '#64748B',
                    }}>
                    {val}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            {[
              { tier: 'Basic',      color: '#64748B', border: '#E2E8F0' },
              { tier: 'Standard',   color: '#2563EB', border: '#BFDBFE' },
              { tier: 'Enterprise', color: '#00C853', border: '#00C853' },
            ].map((t, i) => (
              <a key={i} href="/contact"
                className="flex items-center justify-center gap-1.5 py-3 rounded-xl text-[12px] sm:text-[13px] font-bold border transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ borderColor: t.border, color: t.color, background: i === 2 ? '#F0FDF4' : '#fff' }}>
                Get {t.tier} <ArrowRight size={12} />
              </a>
            ))}
          </div>

          <p className="text-center text-[11px] mt-5" style={{ color: '#94A3B8' }}>
            All plans include onboarding, initial audit, and first-month setup at no extra charge.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}

export default function ServicesPage() {
  return (
    <Suspense fallback={null}>
      <ServicesPageInner />
    </Suspense>
  )
}
