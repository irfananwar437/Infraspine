'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import {
  ArrowRight, Check, ChevronRight, ChevronDown, Star, Quote,
  Server, Camera, Fingerprint, Zap, Database, ShieldCheck, Phone,
  BarChart2, Users, Building2, Globe, TrendingUp, Clock, Award,
  Target, CheckCircle2, ArrowUpRight, X,
} from 'lucide-react'

// ─── Case Studies Data ──────────────────────────────────────────────────────
// Client identities are protected under NDA. Industry & scope details are accurate.
const CASE_STUDIES = [
  {
    id: 'financial-erp',
    number: '01',
    company: 'Financial Services Firm',
    companyColor: '#0F172A',
    companyDot: null,
    industry: 'Financial Services',
    service: 'ERP Implementation',
    serviceIcon: Database,
    serviceColor: '#16A34A',
    serviceBg: '#F0FDF4',
    location: 'Karachi, Pakistan',
    employees: '350+',
    title: 'Custom ERP for a Multi-Branch Financial Services Company',
    subtitle: 'Replacing spreadsheets and a legacy system with a unified ERP covering finance, HR, and regulatory compliance.',
    hero: 'A mid-size financial services firm with 6 branches across Pakistan was running core operations on a 10-year-old accounting system supplemented by Excel spreadsheets. Month-end close took 5 days, compliance reports were assembled manually, and HR had no centralized system. We built and deployed a custom ERP that unified all departments.',
    challenge: [
      'Core accounting system was 10+ years old with no active vendor support',
      'Month-end financial close taking 5 working days of manual reconciliation',
      'HR and payroll managed on disconnected spreadsheets across branches',
      'Regulatory compliance reports assembled manually — prone to errors and delays',
      'No real-time visibility into branch-level performance or cash positions',
    ],
    solution: [
      'Built a custom ERP with integrated Finance, HR, Payroll, and Compliance modules',
      'Automated bank reconciliation and multi-entity consolidation for month-end close',
      'Designed role-based dashboards for branch managers and executive leadership',
      'Created automated compliance report generation aligned with SBP and SECP requirements',
      'Migrated 8 years of historical financial data with full validation and zero data loss',
    ],
    results: [
      { metric: '60%', label: 'Faster month-end close' },
      { metric: '2x', label: 'Faster financial reporting' },
      { metric: '6', label: 'Branches unified' },
      { metric: '10 wks', label: 'Go-live from kickoff' },
    ],
    outcomes: [
      'Month-end close reduced from 5 days to 2 days',
      'Eliminated manual spreadsheet-based HR and payroll processes',
      'Real-time branch-level P&L visibility for management',
      'Regulatory reports now generated in minutes instead of days',
      'Single source of truth for all financial and employee data',
    ],
    beforeAfter: [
      { label: 'Month-End Close',     before: '5 days manual',       after: '2 days automated' },
      { label: 'Financial Reports',    before: 'Manual Excel assembly', after: 'One-click dashboards' },
      { label: 'HR & Payroll',         before: 'Disconnected spreadsheets', after: 'Unified ERP module' },
      { label: 'Compliance Reports',   before: 'Days of manual work', after: 'Generated in minutes' },
      { label: 'Branch Visibility',    before: 'No real-time data',   after: 'Live P&L per branch' },
      { label: 'Data Source',          before: '6 separate systems',  after: 'Single source of truth' },
    ],
    tools: ['Next.js', 'Node.js', 'PostgreSQL', 'React', 'Docker', 'REST APIs'],
    timeline: '10 Weeks',
    testimonial: {
      quote: 'We finally have one system for everything. Month-end used to be a nightmare — now it\'s a two-day process. The team delivered on time and within budget.',
      author: 'Director of Finance',
      role: 'Financial Services Firm, Karachi',
    },
  },
  {
    id: 'manufacturing-cloud',
    number: '02',
    company: 'Manufacturing Group',
    companyColor: '#0F172A',
    companyDot: null,
    industry: 'Manufacturing',
    service: 'IT Infrastructure',
    serviceIcon: Server,
    serviceColor: '#2563EB',
    serviceBg: '#EFF6FF',
    location: 'Lahore, Pakistan',
    employees: '500+',
    title: 'IT Infrastructure Overhaul for a Textile Manufacturing Group',
    subtitle: 'Replacing aging on-premise servers with a modern, redundant infrastructure across 3 factory sites.',
    hero: 'A textile manufacturing group with 3 factory sites and a head office in Lahore was running production and ERP systems on aging Dell PowerEdge servers with no disaster recovery. Frequent hardware failures were causing unplanned downtime. We redesigned their entire IT infrastructure with modern servers, redundant networking, and centralized monitoring.',
    challenge: [
      'Production servers averaging 7+ years old with increasing hardware failures',
      'Unplanned downtime averaging 6 hours per month across factory sites',
      'No backup strategy — a single server failure could halt production data access',
      'Factory sites connected via unreliable broadband with no failover',
      'IT team had no centralized visibility into infrastructure health',
    ],
    solution: [
      'Deployed new rack servers with VMware virtualization at each site for workload isolation',
      'Implemented automated daily backups with off-site replication and tested restore procedures',
      'Designed SD-WAN network connecting all sites with automatic failover to LTE backup',
      'Deployed Zabbix-based monitoring with threshold alerts and uptime dashboards',
      'Established a structured IT support process with documented escalation procedures',
    ],
    results: [
      { metric: '99.8%', label: 'Infrastructure uptime' },
      { metric: '82%', label: 'Less unplanned downtime' },
      { metric: '3', label: 'Sites connected & monitored' },
      { metric: '14 wks', label: 'Full deployment' },
    ],
    outcomes: [
      'Unplanned downtime reduced from ~6 hours/month to under 1 hour/month',
      'All production and ERP workloads now running on virtualized, redundant servers',
      'Reliable site-to-site connectivity with automatic WAN failover',
      'IT team now has real-time visibility into server, network, and storage health',
      'Documented disaster recovery plan tested and validated quarterly',
    ],
    beforeAfter: [
      { label: 'Server Hardware',      before: '7+ year old servers',  after: 'New rack servers + VMware' },
      { label: 'Unplanned Downtime',   before: '~6 hours / month',    after: '<1 hour / month' },
      { label: 'Backup Strategy',      before: 'None — no backups',   after: 'Daily automated + off-site' },
      { label: 'Site Connectivity',    before: 'Unreliable broadband', after: 'SD-WAN with LTE failover' },
      { label: 'Monitoring',           before: 'No visibility',       after: 'Zabbix dashboards + alerts' },
      { label: 'Disaster Recovery',    before: 'Non-existent',        after: 'Documented & tested quarterly' },
    ],
    tools: ['VMware', 'Zabbix', 'pfSense', 'Dell PowerEdge', 'Cisco', 'Veeam'],
    timeline: '14 Weeks',
    testimonial: {
      quote: 'Before InfraSpine, we were firefighting every week. Now our factories run without IT interruptions. The monitoring dashboards alone changed how we manage infrastructure.',
      author: 'Group IT Manager',
      role: 'Textile Manufacturing Group, Lahore',
    },
  },
  {
    id: 'retail-network',
    number: '03',
    company: 'Retail Chain',
    companyColor: '#0F172A',
    companyDot: null,
    industry: 'Retail',
    service: 'IT Infrastructure',
    serviceIcon: Server,
    serviceColor: '#2563EB',
    serviceBg: '#EFF6FF',
    location: 'Multiple Cities, Pakistan',
    employees: '200+',
    title: 'Network Standardization for a 22-Branch Retail Chain',
    subtitle: 'Standardizing IT infrastructure and POS connectivity across 22 retail locations with centralized management.',
    hero: 'A growing retail chain with 22 stores across Punjab and Sindh had no standardized IT setup. Each store had a different ISP, router, and ad-hoc networking — leading to POS connectivity issues, no centralized monitoring, and slow IT support. We standardized their entire network and deployed centralized remote management.',
    challenge: [
      'Each of 22 stores had different ISPs, routers, and ad-hoc network setups',
      'POS systems experiencing connectivity drops 3–5 times per week at some locations',
      'No remote access for IT team — every issue required a physical site visit',
      'No centralized visibility into which stores were online or experiencing problems',
      'IT support response averaging 24+ hours for stores outside Karachi',
    ],
    solution: [
      'Standardized network hardware (UniFi) and ISP contracts across all 22 locations',
      'Deployed site-to-site VPN with centralized firewall management via pfSense',
      'Implemented UniFi Cloud Controller for remote network monitoring and management',
      'Set up automated alerts for connectivity drops, high latency, and device failures',
      'Created standard operating procedures and trained internal IT team on remote support',
    ],
    results: [
      { metric: '99.5%', label: 'POS uptime achieved' },
      { metric: '22', label: 'Stores standardized' },
      { metric: '75%', label: 'Faster IT response' },
      { metric: '90%', label: 'Fewer site visits needed' },
    ],
    outcomes: [
      'POS connectivity issues virtually eliminated across all stores',
      'IT team can now diagnose and fix most issues remotely within 30 minutes',
      'Centralized dashboard showing real-time status of every store\'s network',
      'Physical site visits reduced by 90% — saving significant travel time and cost',
      'Standardized setup makes new store rollouts repeatable in under 2 days',
    ],
    beforeAfter: [
      { label: 'Network Hardware',     before: 'Random routers per store', after: 'Standardized UniFi everywhere' },
      { label: 'POS Connectivity',     before: '3–5 drops/week',       after: '99.5% uptime' },
      { label: 'IT Support',           before: 'Physical site visits',  after: '90% resolved remotely' },
      { label: 'Response Time',        before: '24+ hours',             after: 'Under 30 minutes' },
      { label: 'Store Visibility',     before: 'No centralized view',   after: 'Live dashboard for all 22' },
      { label: 'New Store Rollout',    before: '1–2 weeks ad-hoc',     after: 'Under 2 days, repeatable' },
    ],
    tools: ['UniFi', 'pfSense', 'PRTG', 'Ubiquiti', 'Cisco SG', 'WireGuard'],
    timeline: '8 Weeks',
    testimonial: {
      quote: 'We used to lose sales because POS systems went down. That hasn\'t happened since InfraSpine standardized our stores. Opening new branches is now plug-and-play.',
      author: 'Operations Manager',
      role: 'Retail Chain, Punjab & Sindh',
    },
  },
  {
    id: 'warehouse-security',
    number: '04',
    company: 'Logistics Company',
    companyColor: '#0F172A',
    companyDot: null,
    industry: 'Logistics & Warehousing',
    service: 'CCTV & Security',
    serviceIcon: Camera,
    serviceColor: '#7C3AED',
    serviceBg: '#F5F3FF',
    location: 'Karachi & Lahore, Pakistan',
    employees: '150+',
    title: 'CCTV & Access Control for a Multi-Warehouse Logistics Company',
    subtitle: 'Deploying 120+ IP cameras and biometric access control across 4 warehouse facilities.',
    hero: 'A logistics company operating 4 large warehouses in Karachi and Lahore had persistent inventory shrinkage issues and no surveillance system. Manual gate logs made it impossible to track who entered restricted areas. We deployed a comprehensive IP camera system with biometric access control and centralized monitoring.',
    challenge: [
      'Inventory shrinkage averaging 2.8% — well above the 1% industry benchmark',
      'No CCTV coverage in any of the 4 warehouse facilities',
      'Gate access tracked manually in paper registers — unreliable and untraceable',
      'No way to verify loading dock activity or cross-reference with dispatch records',
      'Management had no remote visibility into warehouse operations',
    ],
    solution: [
      'Installed 120+ Hikvision IP cameras covering all entry points, aisles, loading docks, and perimeters',
      'Deployed biometric fingerprint access control at all restricted areas and entry gates',
      'Set up centralized NVR with 60-day footage retention and remote mobile access',
      'Integrated camera feeds with dispatch schedule for cross-referencing loading activity',
      'Configured motion-triggered alerts for after-hours activity in restricted zones',
    ],
    results: [
      { metric: '120+', label: 'Cameras installed' },
      { metric: '4', label: 'Warehouses secured' },
      { metric: '1.1%', label: 'Shrinkage (from 2.8%)' },
      { metric: '60 days', label: 'Footage retention' },
    ],
    outcomes: [
      'Inventory shrinkage dropped from 2.8% to 1.1% within 3 months of deployment',
      'All warehouse entry/exit tracked biometrically with full audit trail',
      'Management can now monitor all 4 warehouses remotely from mobile app',
      'After-hours incidents detected automatically via motion-triggered alerts',
      'Loading dock footage cross-referenced with dispatch logs reduced disputes by 80%',
    ],
    beforeAfter: [
      { label: 'CCTV Coverage',        before: 'Zero cameras',         after: '120+ IP cameras installed' },
      { label: 'Access Control',       before: 'Paper gate register',  after: 'Biometric fingerprint entry' },
      { label: 'Inventory Shrinkage',  before: '2.8%',                 after: '1.1%' },
      { label: 'Remote Monitoring',    before: 'Not possible',         after: 'Mobile app for all sites' },
      { label: 'After-Hours Security', before: 'Manual guard rounds',  after: 'Motion-triggered AI alerts' },
      { label: 'Footage Retention',    before: 'None',                 after: '60-day automated archive' },
    ],
    tools: ['Hikvision', 'ZKTeco', 'Hik-Connect', 'UniFi', 'Synology NAS'],
    timeline: '6 Weeks',
    testimonial: {
      quote: 'Shrinkage was costing us millions annually. Within three months of the cameras going live, losses dropped to near-industry standard. The ROI was immediate.',
      author: 'Chief Operating Officer',
      role: 'Logistics & Warehousing Company, Karachi',
    },
  },
  {
    id: 'ecommerce-automation',
    number: '05',
    company: 'eCommerce Company',
    companyColor: '#0F172A',
    companyDot: null,
    industry: 'eCommerce',
    service: 'AI & Automation',
    serviceIcon: Zap,
    serviceColor: '#D97706',
    serviceBg: '#FFFBEB',
    location: 'Karachi, Pakistan',
    employees: '80+',
    title: 'WhatsApp Automation & Order Workflow for an eCommerce Brand',
    subtitle: 'Automating order confirmations, delivery updates, and customer support via WhatsApp and n8n workflows.',
    hero: 'A fast-growing eCommerce brand processing 300+ orders per day was handling order confirmations, delivery updates, and customer queries manually via WhatsApp — leading to delayed responses, missed messages, and overwhelmed support staff. We automated their entire customer communication and order workflow pipeline.',
    challenge: [
      '300+ daily orders with manual WhatsApp confirmation messages sent by staff',
      'Delivery status updates sent manually — often delayed or missed entirely',
      'Customer support queries (order status, returns, refunds) answered one-by-one',
      'No integration between their Shopify store and WhatsApp communication',
      'Support team of 4 struggling to keep up during peak sale periods',
    ],
    solution: [
      'Built n8n workflows connecting Shopify to WhatsApp Business API for automated order confirmations',
      'Automated delivery tracking updates sent via WhatsApp at each shipment milestone',
      'Created a WhatsApp chatbot handling order status lookups, return requests, and FAQs',
      'Integrated with their courier API for real-time tracking number and delivery ETA messages',
      'Built a simple admin dashboard showing automation performance and unresolved queries',
    ],
    results: [
      { metric: '85%', label: 'Queries auto-handled' },
      { metric: '<1 min', label: 'Avg response time' },
      { metric: '35%', label: 'Support cost savings' },
      { metric: '4.6/5', label: 'Customer satisfaction' },
    ],
    outcomes: [
      '85% of customer queries now handled automatically without human intervention',
      'Order confirmation messages sent within 30 seconds of purchase — previously took hours',
      'Support team reduced from 4 to 2 agents while handling 40% more volume',
      'Customer satisfaction improved from 3.8 to 4.6 due to faster response times',
      'Peak sale events no longer require hiring temporary support staff',
    ],
    beforeAfter: [
      { label: 'Order Confirmation',   before: 'Manual WhatsApp msg',  after: 'Instant auto-confirmation' },
      { label: 'Delivery Updates',     before: 'Manually sent or missed', after: 'Auto at each milestone' },
      { label: 'Support Response',     before: '8+ minutes average',   after: 'Under 1 minute' },
      { label: 'Support Team Size',    before: '4 agents overwhelmed', after: '2 agents, 40% more volume' },
      { label: 'Shopify Integration',  before: 'None',                 after: 'Full API sync with WhatsApp' },
      { label: 'Peak Sale Staffing',   before: 'Hired temp staff',     after: 'No extra hires needed' },
    ],
    tools: ['n8n', 'WhatsApp Business API', 'Shopify API', 'Node.js', 'PostgreSQL'],
    timeline: '5 Weeks',
    testimonial: {
      quote: 'During our last sale, we processed 800 orders in a day and didn\'t need a single extra support hire. Every customer got instant updates. That was unthinkable before.',
      author: 'Founder & CEO',
      role: 'eCommerce Brand, Karachi',
    },
  },
  {
    id: 'bpo-callcenter',
    number: '06',
    company: 'BPO / Call Center',
    companyColor: '#0F172A',
    companyDot: null,
    industry: 'BPO / Outsourcing',
    service: 'Call Center Setup',
    serviceIcon: Phone,
    serviceColor: '#0F766E',
    serviceBg: '#F0FDFA',
    location: 'Islamabad, Pakistan',
    employees: '120+',
    title: 'Turnkey 80-Seat Call Center Deployment for a BPO Startup',
    subtitle: 'Building a complete call center from scratch — PBX, IVR, agent desks, CRM integration, and live dashboards.',
    hero: 'A newly funded BPO startup in Islamabad needed to go from an empty office floor to a fully operational 80-seat call center within 8 weeks to meet their first client SLA deadline. We delivered a complete turnkey solution — from PBX infrastructure and IVR design to workstations, CRM integration, and supervisor dashboards.',
    challenge: [
      'Empty office space — no telephony, networking, or workstation infrastructure in place',
      'First client SLA required the call center to be operational within 8 weeks',
      'Needed IVR, call routing, recording, and real-time monitoring from day one',
      'Budget constraints required cost-effective open-source telephony solutions',
      'No internal IT team — entire setup and training needed to be handled externally',
    ],
    solution: [
      'Deployed FreePBX-based IP-PBX with SIP trunking for 80 concurrent agent seats',
      'Designed multi-level IVR with skill-based routing and queue management',
      'Set up 80 agent workstations with headsets, softphones, and CRM screen pop integration',
      'Implemented full call recording with searchable archive and QA scoring workflows',
      'Deployed real-time supervisor wallboard with queue depth, wait times, and agent status',
    ],
    results: [
      { metric: '80', label: 'Agent seats deployed' },
      { metric: '7 wks', label: 'Zero to operational' },
      { metric: '98.5%', label: 'Call answer rate' },
      { metric: '100%', label: 'Recording compliance' },
    ],
    outcomes: [
      'Call center operational 1 week ahead of the client SLA deadline',
      'Achieved 98.5% call answer rate in the first month of operations',
      'Full call recording and QA workflows enabled from day one',
      'Supervisors have real-time visibility into agent performance and queue health',
      'System designed for easy scaling — currently planning expansion to 150 seats',
    ],
    beforeAfter: [
      { label: 'Telephony System',     before: 'Nothing — empty floor', after: '80-seat IP-PBX operational' },
      { label: 'IVR System',           before: 'Non-existent',         after: 'Multi-level with skill routing' },
      { label: 'Call Recording',       before: 'Not available',        after: '100% recorded + QA scoring' },
      { label: 'Call Answer Rate',     before: 'N/A',                  after: '98.5% in month one' },
      { label: 'Supervisor Visibility',before: 'None',                 after: 'Real-time wallboard dashboards' },
      { label: 'CRM Integration',      before: 'No CRM',              after: 'Screen pops + auto call logs' },
    ],
    tools: ['FreePBX', 'Asterisk', 'Grandstream', 'Yealink', 'Vicidial', 'Zoiper'],
    timeline: '7 Weeks',
    testimonial: {
      quote: 'We went from an empty floor to a running call center in 7 weeks. Our first client was impressed — we hit 98.5% answer rate in month one. InfraSpine made it happen.',
      author: 'Managing Director',
      role: 'BPO Company, Islamabad',
    },
  },
  {
    id: 'realestate-infra',
    number: '07',
    company: 'Real Estate Group',
    companyColor: '#0F172A',
    companyDot: null,
    industry: 'Real Estate',
    service: 'IT Infrastructure',
    serviceIcon: Server,
    serviceColor: '#2563EB',
    serviceBg: '#EFF6FF',
    location: 'Karachi, Pakistan',
    employees: '250+',
    title: 'Full Server Room & Network Build for a Real Estate Head Office',
    subtitle: 'Designing and deploying a complete IT infrastructure from scratch — server room, structured cabling, firewall, Wi-Fi, and centralized management.',
    hero: 'A real estate group moving into a new 4-floor head office in Karachi needed their entire IT infrastructure built from the ground up. No server room, no structured cabling, no network — just an empty building. We designed and delivered a production-ready infrastructure covering servers, networking, security, and Wi-Fi for 250+ users across all floors.',
    challenge: [
      'Brand new 4-floor office building with zero IT infrastructure in place',
      '250+ staff needing wired and wireless connectivity from day one of occupancy',
      'Multiple departments (sales, finance, HR, legal) needing isolated network segments',
      'Server room required for hosting on-premise ERP, file server, and domain controller',
      'Management needed CCTV, access control, and IT systems operational before move-in day',
    ],
    solution: [
      'Designed and built a dedicated server room with rack cabinets, UPS, precision cooling, and fire suppression',
      'Ran structured Cat6A cabling to 280+ data points across all 4 floors with proper cable management',
      'Deployed core and access layer switching (Cisco) with VLAN segmentation per department',
      'Configured enterprise firewall (pfSense) with VPN, content filtering, and guest network isolation',
      'Installed enterprise Wi-Fi (UniFi) with seamless roaming, floor-by-floor coverage, and centralized controller',
    ],
    results: [
      { metric: '280+', label: 'Data points installed' },
      { metric: '4', label: 'Floors fully cabled' },
      { metric: '250+', label: 'Users connected' },
      { metric: '11 wks', label: 'Full build completed' },
    ],
    outcomes: [
      'Server room operational with redundant power and cooling before move-in day',
      'All 250+ staff connected on day one with zero connectivity issues',
      'Department-level network isolation enforced via VLAN segmentation',
      'Guest Wi-Fi, staff Wi-Fi, and CCTV traffic fully separated and secured',
      'IT team has centralized management dashboard for all network and server assets',
    ],
    beforeAfter: [
      { label: 'Server Room',          before: 'Empty space',          after: 'Full rack, UPS, cooling, fire suppression' },
      { label: 'Network Cabling',      before: 'Zero data points',    after: '280+ Cat6A points across 4 floors' },
      { label: 'Switching',            before: 'None',                 after: 'Cisco core + access with VLANs' },
      { label: 'Firewall',             before: 'Not installed',        after: 'pfSense with VPN & content filter' },
      { label: 'Wi-Fi',                before: 'No wireless',          after: 'Enterprise UniFi, floor-by-floor' },
      { label: 'IT Management',        before: 'No tools',             after: 'Centralized dashboard for all assets' },
    ],
    tools: ['Cisco', 'pfSense', 'UniFi', 'Dell PowerEdge', 'APC UPS', 'Veeam'],
    timeline: '11 Weeks',
    testimonial: {
      quote: 'We handed them an empty building and got a fully operational office with server room, cabling, and Wi-Fi on every floor — all before our staff moved in. Flawless execution.',
      author: 'Director of Administration',
      role: 'Real Estate Group, Karachi',
    },
  },
]

// ─── Industry filter categories ─────────────────────────────────────────────
const INDUSTRIES = ['All', 'Financial Services', 'Manufacturing', 'Retail', 'Logistics & Warehousing', 'eCommerce', 'BPO / Outsourcing', 'Real Estate']

// ─── FAQ ────────────────────────────────────────────────────────────────────
const FAQS = [
  { q: 'Are these real client projects?', a: 'Yes. Every case study is based on real projects delivered by InfraSpine. Client names and some details are anonymized under NDA, but the challenges, solutions, tools, and measurable results are all authentic.' },
  { q: 'Can you deliver similar results for our company?', a: 'Absolutely. Every project starts with a thorough discovery phase to understand your specific challenges. We then design a tailored solution and provide a detailed proposal with expected outcomes and timelines.' },
  { q: 'How long do these projects typically take?', a: 'It varies by scope — from 8 weeks for automation projects to 20 weeks for large infrastructure overhauls. We provide milestone-based timelines in every proposal so you know exactly what to expect.' },
  { q: 'Do you work with companies outside these industries?', a: 'Yes. While these case studies highlight specific industries, we serve clients across healthcare, education, logistics, real estate, hospitality, and more. Our solutions are adaptable to any business.' },
  { q: 'Can we speak with your existing clients as references?', a: 'Yes — we can arrange reference calls with existing clients upon request during the evaluation phase. We believe our work speaks for itself.' },
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
        </div>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border bg-white transition-all"
              style={{ borderColor: open === i ? '#00C853' : '#E2E8F0', boxShadow: open === i ? '0 4px 20px rgba(0,200,83,0.08)' : 'none' }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left">
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

// ─── Main page ──────────────────────────────────────────────────────────────
export default function CaseStudiesPage() {
  const [activeStudy, setActiveStudy] = useState('financial-erp')
  const [industryFilter, setIndustryFilter] = useState('All')
  const study = CASE_STUDIES.find(s => s.id === activeStudy)

  const filteredStudies = industryFilter === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(s => s.industry === industryFilter)

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#0A1628' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle,#00C853,transparent 70%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Case Studies</span>
            </div>
            <h1 className="text-[30px] sm:text-[46px] lg:text-[56px] font-black leading-[1.06] tracking-tight text-white mb-5">
              Real Results for<br />
              <span style={{ color: '#00C853' }}>Real Businesses</span>
            </h1>
            <p className="text-[15px] sm:text-[17px] leading-relaxed mb-8 max-w-2xl" style={{ color: '#94A3B8' }}>
              See how we've transformed IT operations, built custom systems, and delivered measurable outcomes for enterprise clients across industries.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#studies"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#00C853', color: '#0A1628' }}>
                View Case Studies <ArrowRight size={15} />
              </a>
              <a href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Start Your Project
              </a>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 mt-10">
            {[
              { value: '20+', label: 'Projects Delivered' },
              { value: '99.5%', label: 'Avg. Uptime Achieved' },
              { value: '100%', label: 'On-Time Delivery' },
              { value: '0', label: 'Clients Lost' },
            ].map(s => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="text-[22px] font-black" style={{ color: '#00C853' }}>{s.value}</span>
                <span className="text-[12px] font-medium" style={{ color: '#64748B' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Study Cards Grid ── */}
      <section id="studies" className="py-16 sm:py-20" style={{ background: '#fff' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Our Work</span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </div>
            <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
              Featured <span style={{ color: '#00C853' }}>Case Studies</span>
            </h2>
            <p className="text-[14px] max-w-xl mx-auto" style={{ color: '#64748B' }}>
              Filter by industry or click any case study to see the full breakdown.
            </p>
          </div>

          {/* Industry filter */}
          <div className="flex overflow-x-auto gap-2 mb-8 pb-1 -mx-5 px-5 lg:mx-0 lg:px-0 lg:flex-wrap lg:justify-center scrollbar-hide">
            {INDUSTRIES.map(ind => (
              <button key={ind} onClick={() => setIndustryFilter(ind)}
                className="px-4 py-2 rounded-xl text-[12px] font-bold border flex-shrink-0 transition-all duration-200"
                style={industryFilter === ind
                  ? { background: '#00C853', color: '#0A1628', borderColor: '#00C853' }
                  : { background: '#fff', color: '#64748B', borderColor: '#E2E8F0' }}>
                {ind}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredStudies.map(cs => (
              <a key={cs.id} href="#detail" onClick={() => setActiveStudy(cs.id)}
                className={`group relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer ${activeStudy === cs.id ? 'ring-2 ring-green-400' : ''}`}
                style={{ borderColor: '#E2E8F0', boxShadow: '0 2px 12px rgba(10,22,40,0.06)' }}>
                {/* Top accent */}
                <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${cs.serviceColor}, ${cs.serviceColor}40)` }} />

                <div className="p-5 flex flex-col flex-1">
                  {/* Number + Service badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-white"
                      style={{ background: '#00C853' }}>
                      {cs.number}
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                      style={{ background: cs.serviceBg, color: cs.serviceColor, border: `1px solid ${cs.serviceColor}30` }}>
                      {cs.service}
                    </span>
                  </div>

                  {/* Company */}
                  <span className="text-[20px] font-black tracking-tight mb-2" style={{ color: cs.companyColor }}>
                    {cs.company}
                    {cs.companyDot && <span style={{ color: cs.companyDot }}>.</span>}
                  </span>

                  {/* Title */}
                  <h3 className="text-[15px] font-bold leading-snug mb-2" style={{ color: '#0A1628' }}>{cs.title}</h3>
                  <p className="text-[13px] leading-relaxed flex-1 mb-4" style={{ color: '#64748B' }}>{cs.subtitle}</p>

                  {/* Key results preview */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {cs.results.slice(0, 2).map((r, i) => (
                      <div key={i} className="flex flex-col items-center py-2 rounded-lg border" style={{ borderColor: '#F1F5F9' }}>
                        <span className="text-[16px] font-black" style={{ color: cs.serviceColor }}>{r.metric}</span>
                        <span className="text-[9px] font-medium text-center" style={{ color: '#94A3B8' }}>{r.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-semibold" style={{ color: '#00C853' }}>
                    Read full case study <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Study Detail ── */}
      <section id="detail" className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">

          <div className="text-center mb-10">
            <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
              Full Case Study Breakdown
            </h2>
            <p className="text-[14px]" style={{ color: '#64748B' }}>
              Select any case study above to see the full challenge, solution, and results.
            </p>
          </div>

          {/* Tab selector */}
          <div className="flex overflow-x-auto gap-2 mb-8 pb-1 -mx-5 px-5 lg:mx-0 lg:px-0 lg:flex-wrap lg:justify-center scrollbar-hide">
            {CASE_STUDIES.map(cs => (
              <button key={cs.id} onClick={() => setActiveStudy(cs.id)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[12px] font-bold border flex-shrink-0 transition-all duration-200"
                style={activeStudy === cs.id
                  ? { background: cs.serviceBg, color: cs.serviceColor, borderColor: `${cs.serviceColor}50`, boxShadow: `0 4px 16px ${cs.serviceColor}20` }
                  : { background: '#fff', color: '#64748B', borderColor: '#E2E8F0' }}>
                <cs.serviceIcon size={14} />
                {cs.company}
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div key={activeStudy} className="rounded-2xl border overflow-hidden" style={{ borderColor: '#E2E8F0', boxShadow: `0 8px 40px ${study.serviceColor}12` }}>

            {/* Header */}
            <div className="p-6 sm:p-8 border-b" style={{ background: '#fff', borderColor: '#F1F5F9' }}>
              <div className="flex flex-wrap items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: study.serviceBg, border: `2px solid ${study.serviceColor}30` }}>
                  <study.serviceIcon size={22} color={study.serviceColor} strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[22px] font-black tracking-tight" style={{ color: study.companyColor }}>
                      {study.company}{study.companyDot && <span style={{ color: study.companyDot }}>.</span>}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: study.serviceBg, color: study.serviceColor }}>{study.service}</span>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: '#F1F5F9', color: '#64748B' }}>{study.industry}</span>
                  </div>
                  <h3 className="text-[16px] sm:text-[18px] font-bold" style={{ color: '#0A1628' }}>{study.title}</h3>
                </div>
              </div>
              <p className="text-[14px] leading-relaxed" style={{ color: '#475569' }}>{study.hero}</p>
            </div>

            <div className="grid lg:grid-cols-2">
              {/* Left — Challenge & Solution */}
              <div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r" style={{ borderColor: '#F1F5F9', background: '#fff' }}>
                {/* Challenge */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: '#FEF2F2' }}>
                      <Target size={13} color="#DC2626" strokeWidth={2} />
                    </div>
                    <h4 className="text-[14px] font-bold" style={{ color: '#0A1628' }}>The Challenge</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {study.challenge.map((c, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#DC2626' }} />
                        <span className="text-[13px] leading-relaxed" style={{ color: '#475569' }}>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: '#F0FDF4' }}>
                      <CheckCircle2 size={13} color="#16A34A" strokeWidth={2} />
                    </div>
                    <h4 className="text-[14px] font-bold" style={{ color: '#0A1628' }}>Our Solution</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {study.solution.map((s, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#F0FDF4' }}>
                          <Check size={9} color="#16A34A" strokeWidth={3} />
                        </div>
                        <span className="text-[13px] leading-relaxed" style={{ color: '#475569' }}>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools & Timeline */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] mb-2" style={{ color: '#94A3B8' }}>Tools Used</p>
                    <div className="flex flex-wrap gap-1.5">
                      {study.tools.map((t, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-full text-[10px] font-semibold"
                          style={{ background: '#F1F5F9', color: '#475569', border: '1px solid #E2E8F0' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] mb-2" style={{ color: '#94A3B8' }}>Timeline</p>
                    <span className="px-3 py-1.5 rounded-lg text-[12px] font-bold"
                      style={{ background: study.serviceBg, color: study.serviceColor, border: `1px solid ${study.serviceColor}30` }}>
                      <Clock size={11} className="inline -mt-0.5 mr-1" />{study.timeline}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-3">
                  <a href="/contact-us" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all hover:opacity-90"
                    style={{ background: '#00C853', color: '#0A1628' }}>
                    Start a Similar Project <ArrowRight size={13} />
                  </a>
                </div>
              </div>

              {/* Right — Results & Testimonial */}
              <div className="p-6 sm:p-8" style={{ background: '#fff' }}>
                {/* Results grid */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: study.serviceBg }}>
                      <TrendingUp size={13} color={study.serviceColor} strokeWidth={2} />
                    </div>
                    <h4 className="text-[14px] font-bold" style={{ color: '#0A1628' }}>Key Results</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {study.results.map((r, i) => (
                      <div key={i} className="flex flex-col items-center py-4 rounded-xl border"
                        style={{ borderColor: `${study.serviceColor}25`, background: study.serviceBg }}>
                        <span className="text-[22px] font-black leading-none mb-1" style={{ color: study.serviceColor }}>{r.metric}</span>
                        <span className="text-[10px] font-medium text-center" style={{ color: '#64748B' }}>{r.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: '#FFFBEB' }}>
                      <Award size={13} color="#D97706" strokeWidth={2} />
                    </div>
                    <h4 className="text-[14px] font-bold" style={{ color: '#0A1628' }}>Business Outcomes</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {study.outcomes.map((o, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#FFFBEB' }}>
                          <Check size={9} color="#D97706" strokeWidth={3} />
                        </div>
                        <span className="text-[13px] leading-relaxed" style={{ color: '#475569' }}>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                <div className="rounded-2xl p-5" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#00C85315' }}>
                      <Quote size={14} color="#00C853" />
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill="#00C853" color="#00C853" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[13px] font-medium leading-relaxed mb-3" style={{ color: '#0A1628' }}>
                    &ldquo;{study.testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-[12px] font-bold" style={{ color: '#475569' }}>{study.testimonial.author}</p>
                    <p className="text-[11px]" style={{ color: '#94A3B8' }}>{study.testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Before vs After */}
            <div className="border-t" style={{ borderColor: '#F1F5F9', background: '#FAFBFC' }}>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: '#EFF6FF' }}>
                    <ArrowRight size={13} color="#2563EB" strokeWidth={2} />
                  </div>
                  <h4 className="text-[14px] font-bold" style={{ color: '#0A1628' }}>Before vs After</h4>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full ml-1" style={{ background: '#F1F5F9', color: '#94A3B8' }}>Visual Comparison</span>
                </div>

                {/* Before & After images */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {/* Before panel */}
                  <div className="rounded-xl border overflow-hidden" style={{ borderColor: '#FECACA' }}>
                    <div className="relative h-48 sm:h-56 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1F2937 0%, #374151 55%, #4B5563 100%)' }}>
                      <div
                        className="pointer-events-none absolute inset-0 opacity-50"
                        style={{
                          backgroundImage: 'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
                          backgroundSize: '18px 18px',
                        }}
                      />
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <X size={56} strokeWidth={1.5} style={{ color: 'rgba(220,38,38,0.45)' }} />
                      </div>
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full backdrop-blur-sm" style={{ background: 'rgba(220,38,38,0.85)' }}>
                        <X size={10} color="#fff" strokeWidth={3} />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white">Before</span>
                      </div>
                    </div>
                    <div className="px-4 py-3" style={{ background: '#FEF2F2' }}>
                      <span className="text-[11px] font-semibold" style={{ color: '#991B1B' }}>Before InfraSpine</span>
                      <p className="text-[10px] mt-0.5" style={{ color: '#DC2626' }}>{study.challenge[0]}</p>
                    </div>
                  </div>
                  {/* After panel */}
                  <div className="rounded-xl border overflow-hidden" style={{ borderColor: '#BBF7D0' }}>
                    <div className="relative h-48 sm:h-56 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0F2A4A 55%, #163352 100%)' }}>
                      <div
                        className="pointer-events-none absolute inset-0 opacity-50"
                        style={{
                          backgroundImage: 'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
                          backgroundSize: '18px 18px',
                        }}
                      />
                      <div className="pointer-events-none absolute rounded-full" style={{ top: '18%', left: '18%', width: 110, height: 110, background: 'radial-gradient(circle, rgba(0,200,83,0.20) 0%, transparent 70%)' }} />
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <Check size={56} strokeWidth={1.5} style={{ color: 'rgba(0,200,83,0.55)' }} />
                      </div>
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full backdrop-blur-sm" style={{ background: 'rgba(22,163,74,0.85)' }}>
                        <Check size={10} color="#fff" strokeWidth={3} />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white">After</span>
                      </div>
                    </div>
                    <div className="px-4 py-3" style={{ background: '#F0FDF4' }}>
                      <span className="text-[11px] font-semibold" style={{ color: '#166534' }}>After InfraSpine</span>
                      <p className="text-[10px] mt-0.5" style={{ color: '#16A34A' }}>{study.outcomes[0]}</p>
                    </div>
                  </div>
                </div>

                {/* Header row */}
                <div className="hidden sm:grid sm:grid-cols-[1fr_1fr_24px_1fr] gap-3 mb-3 px-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: '#94A3B8' }}>Area</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: '#DC2626' }}>Before</span>
                  <span />
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: '#16A34A' }}>After</span>
                </div>

                <div className="space-y-2">
                  {study.beforeAfter.map((ba, i) => (
                    <div key={i} className="rounded-xl border overflow-hidden" style={{ borderColor: '#E8ECF1', background: '#fff' }}>
                      {/* Desktop row */}
                      <div className="hidden sm:grid sm:grid-cols-[1fr_1fr_24px_1fr] gap-3 items-center px-4 py-3">
                        <span className="text-[12px] font-bold" style={{ color: '#0F172A' }}>{ba.label}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#DC2626' }} />
                          <span className="text-[12px]" style={{ color: '#64748B' }}>{ba.before}</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <ArrowRight size={12} style={{ color: '#00C853' }} />
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#16A34A' }} />
                          <span className="text-[12px] font-semibold" style={{ color: '#0F172A' }}>{ba.after}</span>
                        </div>
                      </div>
                      {/* Mobile stacked */}
                      <div className="sm:hidden px-4 py-3 space-y-2">
                        <span className="text-[12px] font-bold block" style={{ color: '#0F172A' }}>{ba.label}</span>
                        <div className="flex items-start gap-3">
                          <div className="flex-1 rounded-lg px-3 py-2" style={{ background: '#FEF2F2', border: '1px solid #FECACA' }}>
                            <span className="text-[9px] font-bold uppercase block mb-0.5" style={{ color: '#DC2626' }}>Before</span>
                            <span className="text-[11px]" style={{ color: '#64748B' }}>{ba.before}</span>
                          </div>
                          <div className="pt-3"><ArrowRight size={12} style={{ color: '#00C853' }} /></div>
                          <div className="flex-1 rounded-lg px-3 py-2" style={{ background: '#F0FDF4', border: '1px solid #BBF7D0' }}>
                            <span className="text-[9px] font-bold uppercase block mb-0.5" style={{ color: '#16A34A' }}>After</span>
                            <span className="text-[11px] font-semibold" style={{ color: '#0F172A' }}>{ba.after}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries We Serve ── */}
      <section className="py-16" style={{ background: '#fff' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Industries</span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </div>
            <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
              Industries We <span style={{ color: '#00C853' }}>Serve</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Financial Services', icon: BarChart2, color: '#16A34A', bg: '#F0FDF4' },
              { name: 'Manufacturing',      icon: Building2,  color: '#2563EB', bg: '#EFF6FF' },
              { name: 'Retail',             icon: Globe,      color: '#7C3AED', bg: '#F5F3FF' },
              { name: 'Logistics',          icon: Server,     color: '#D97706', bg: '#FFFBEB' },
              { name: 'eCommerce',          icon: ShieldCheck,color: '#DC2626', bg: '#FEF2F2' },
              { name: 'BPO',                icon: Phone,      color: '#0F766E', bg: '#F0FDFA' },
            ].map((ind, i) => (
              <div key={i} className="flex flex-col items-center p-5 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: '#E2E8F0' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: ind.bg }}>
                  <ind.icon size={18} style={{ color: ind.color }} strokeWidth={1.7} />
                </div>
                <span className="text-[12px] font-bold text-center" style={{ color: '#0A1628' }}>{ind.name}</span>
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
              { value: '20+',   label: 'Projects Delivered',  color: '#00C853' },
              { value: '100%',  label: 'On-Time Delivery',   color: '#2563EB' },
              { value: '99.5%', label: 'Avg. Uptime',        color: '#7C3AED' },
              { value: '24/7',  label: 'Post-Launch Support', color: '#EA580C' },
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

      {/* ── FAQ ── */}
      <FAQ />

      {/* ── CTA ── */}
      <section className="py-16 sm:py-20" style={{ background: '#0A1628' }}>
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-6" style={{ background: '#00C853' }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Get Started</span>
            <div className="h-px w-6" style={{ background: '#00C853' }} />
          </div>
          <h2 className="text-[24px] sm:text-[40px] font-black text-white mb-4 leading-tight">
            Ready to Be Our<br /><span style={{ color: '#00C853' }}>Next Success Story?</span>
          </h2>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
            Book a free consultation and let us show you how we can transform your IT operations with the same results we've delivered for these enterprise clients.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
              style={{ background: '#00C853', color: '#0A1628' }}>
              Book a Free Consultation <ArrowRight size={15} />
            </a>
            <a href="/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
              style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
              View Our Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
