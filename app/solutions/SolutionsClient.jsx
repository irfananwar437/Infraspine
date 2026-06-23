'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import {
  ArrowRight, Check, ChevronRight, ChevronDown,
  Database, Cloud, Headset, Rocket,
  Users, DollarSign, ShoppingCart, BarChart3, Package, Globe, LayoutDashboard, PieChart,
  Server, HardDrive, Wifi, Settings, Activity, Cpu, RefreshCw, Lock,
  Zap, Bot, Workflow, Plug, CalendarCheck,
  ShieldCheck, FileSearch, Network, Siren, BookOpen, FlameKindling,
  MonitorDot, Building2, ClipboardList, ScanLine,
} from 'lucide-react'

const SOLUTIONS = [
  {
    id: 'erp',
    icon: Database,
    label: 'ERP Systems',
    color: '#16A34A',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    tagline: 'Unified Business Operations Platform',
    hero: 'Replace disconnected tools with one intelligent ERP built around your exact workflow.',
    desc: 'Our custom ERP solutions unify every department — finance, HR, inventory, sales, and operations — into a single platform designed specifically for how your business works. No off-the-shelf limitations. No unnecessary modules. Just the system your team actually needs.',
    problems: [
      'Data scattered across Excel sheets, WhatsApp groups, and 10+ disconnected tools',
      'Finance team spends 3 days compiling monthly reports manually',
      'Inventory mismatches between warehouse and system records',
      'No real-time visibility into sales pipeline or cash flow',
      'Every new branch means starting from scratch with ad-hoc processes',
    ],
    modules: [
      { icon: DollarSign,      title: 'Finance & Accounting',           desc: 'General ledger, AP/AR, bank reconciliation, multi-currency support, and automated financial statements.' },
      { icon: Users,           title: 'HR & Payroll',                   desc: 'Employee lifecycle management, attendance integration, payroll with tax compliance, leave management, and org chart.' },
      { icon: ShoppingCart,    title: 'Inventory & Procurement',        desc: 'Stock management, barcode scanning, reorder alerts, purchase orders, GRN processing, and supplier management.' },
      { icon: BarChart3,       title: 'CRM & Sales Pipeline',           desc: 'Lead capture, deal stages, quotation builder, follow-up automation, and sales performance dashboards.' },
      { icon: LayoutDashboard, title: 'Operations & Projects',          desc: 'Production planning, job orders, task assignment, SLA tracking, and operational KPI dashboards.' },
      { icon: PieChart,        title: 'Reporting & BI',                 desc: 'Custom report builder, scheduled reports, executive dashboards, drill-down analytics, and Excel/PDF export.' },
      { icon: Package,         title: 'Asset Management',               desc: 'Fixed asset register, depreciation scheduling, maintenance logs, assignment tracking, and disposal management.' },
      { icon: Globe,           title: 'Customer Portal',                desc: 'Self-service portal for clients to view invoices, track orders, submit tickets, and access account history.' },
    ],
    outcomes: [
      { metric: '85%', label: 'Reduction in manual data entry' },
      { metric: '3x',  label: 'Faster monthly close cycle' },
      { metric: '60%', label: 'Fewer inventory discrepancies' },
      { metric: '100%', label: 'Real-time financial visibility' },
    ],
    deliverables: ['Business requirements document', 'System architecture & DB design', 'Module-by-module development', 'UAT testing with your team', 'Data migration from existing systems', 'Go-live support & bug fixing', 'Admin & user training', '6-month post-launch support'],
    tools: ['Next.js', 'Node.js', 'PostgreSQL', 'React', 'REST APIs', 'Docker', 'Redis', 'Prisma'],
    timeline: '8–16 weeks',
    bestFor: 'Manufacturing, Retail, Logistics, Healthcare, Financial Services, Construction',
  },
  {
    id: 'cloud',
    icon: Cloud,
    label: 'Cloud Migration',
    color: '#2563EB',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    tagline: 'Seamless Infrastructure Modernisation',
    hero: 'Move from legacy on-premise servers to a scalable, secure cloud environment — with zero downtime.',
    desc: 'We plan, execute, and manage your entire cloud migration journey — from initial assessment and workload mapping to full deployment on AWS, Azure, or hybrid environments. Every migration is designed for performance, security, and cost optimisation.',
    problems: [
      'Ageing on-premise servers with increasing hardware failure rates',
      'No disaster recovery — one failure could mean days of downtime',
      'IT costs unpredictable with constant hardware replacement cycles',
      'Remote teams unable to securely access critical business systems',
      'Scaling requires months of procurement, setup, and configuration',
    ],
    modules: [
      { icon: FileSearch,  title: 'Cloud Readiness Assessment',     desc: 'Full audit of existing infrastructure, application dependencies, and workload mapping to determine migration strategy.' },
      { icon: Server,      title: 'Architecture Design',            desc: 'Cloud-native architecture design with VPC, subnets, security groups, load balancers, and auto-scaling policies.' },
      { icon: RefreshCw,   title: 'Workload Migration',             desc: 'Lift-and-shift, re-platforming, or re-architecting — we choose the right strategy for each workload to minimise risk.' },
      { icon: Lock,        title: 'Security & Compliance',          desc: 'IAM policies, encryption at rest/transit, WAF configuration, and compliance alignment for ISO 27001 and GDPR.' },
      { icon: Activity,    title: 'Performance Optimisation',       desc: 'Right-sizing instances, reserved capacity planning, CDN setup, and database performance tuning for optimal cost-performance.' },
      { icon: Cpu,         title: 'Containerisation & DevOps',      desc: 'Docker containerisation, Kubernetes orchestration, CI/CD pipelines, and infrastructure-as-code with Terraform.' },
      { icon: HardDrive,   title: 'Backup & Disaster Recovery',     desc: 'Automated backup strategies, cross-region replication, RTO/RPO planning, and full DR testing documentation.' },
      { icon: MonitorDot,  title: 'Cloud Monitoring & Management',  desc: '24/7 cloud infrastructure monitoring, cost alerts, usage dashboards, and ongoing optimisation recommendations.' },
    ],
    outcomes: [
      { metric: '40%', label: 'Average infrastructure cost reduction' },
      { metric: '99.9%', label: 'Uptime SLA achieved' },
      { metric: '0',   label: 'Hours of migration downtime' },
      { metric: '5x',  label: 'Faster deployment cycles' },
    ],
    deliverables: ['Cloud readiness assessment report', 'Migration strategy & roadmap', 'Architecture design document', 'Security & compliance checklist', 'Migration execution with rollback plan', 'Performance testing & tuning', 'Team training & handover', '3-month post-migration support'],
    tools: ['AWS', 'Azure', 'Terraform', 'Docker', 'Kubernetes', 'CloudWatch', 'Ansible', 'GitHub Actions'],
    timeline: '4–12 weeks',
    bestFor: 'Enterprises, Multi-branch Businesses, SaaS Companies, Financial Services, Healthcare',
  },
  {
    id: 'managed',
    icon: Headset,
    label: 'Managed IT Services',
    color: '#7C3AED',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    tagline: 'Your Complete Outsourced IT Department',
    hero: 'Stop managing IT internally. Let a dedicated team handle everything — from helpdesk to infrastructure to security.',
    desc: 'Our Managed IT Services give you a fully outsourced IT department. We handle 24/7 monitoring, helpdesk support, patch management, vendor coordination, security operations, and strategic planning — all under one fixed monthly retainer with written SLAs.',
    problems: [
      'Internal IT team overwhelmed — spending all time on firefighting instead of strategy',
      'No proactive monitoring — issues are discovered by employees or customers',
      'Multiple vendors for different systems with no single point of accountability',
      'Security patches and updates consistently delayed or forgotten',
      'No IT roadmap or technology strategy aligned with business growth',
    ],
    modules: [
      { icon: Activity,       title: '24/7 Infrastructure Monitoring',  desc: 'Proactive monitoring of servers, network, endpoints, and applications with automated alerting and escalation workflows.' },
      { icon: Headset,        title: 'Unlimited Helpdesk Support',      desc: 'Dedicated helpdesk team for your staff — ticket management, remote troubleshooting, and on-site visits as needed.' },
      { icon: Settings,       title: 'Patch & Update Management',       desc: 'Scheduled OS patches, firmware updates, application updates, and security patches across all managed devices.' },
      { icon: ShieldCheck,    title: 'Security Operations',             desc: 'Firewall management, endpoint protection, SIEM monitoring, and incident response for your entire IT environment.' },
      { icon: Building2,      title: 'Vendor & Procurement',            desc: 'We manage all your IT vendors — ISP, hardware suppliers, software licenses — negotiating on your behalf and handling renewals.' },
      { icon: ClipboardList,  title: 'Monthly Reporting & Reviews',     desc: 'Detailed monthly reports on system health, ticket metrics, security events, and strategic recommendations.' },
      { icon: ScanLine,       title: 'Asset & License Management',      desc: 'Complete IT asset inventory, license tracking, warranty management, and lifecycle replacement planning.' },
      { icon: Wifi,           title: 'Network & Connectivity',          desc: 'WAN/LAN management, VPN maintenance, bandwidth monitoring, ISP failover, and branch connectivity management.' },
    ],
    outcomes: [
      { metric: '70%', label: 'Reduction in IT incidents' },
      { metric: '<2hr', label: 'Average response time (critical)' },
      { metric: '99.5%', label: 'System uptime maintained' },
      { metric: '30%', label: 'IT cost savings vs in-house team' },
    ],
    deliverables: ['IT infrastructure audit & baseline', 'Onboarding & transition plan', 'SLA & escalation matrix', 'Monitoring setup & configuration', 'Monthly health reports', 'Quarterly business reviews', 'Asset inventory register', 'Dedicated account manager'],
    tools: ['Zabbix', 'PRTG', 'ConnectWise', 'Fortinet', 'CrowdStrike', 'Microsoft 365', 'TeamViewer', 'Jira'],
    timeline: 'Ongoing (monthly retainer)',
    bestFor: 'SMBs, Multi-branch Organisations, Companies Without Internal IT, Growing Startups',
  },
  {
    id: 'digital',
    icon: Rocket,
    label: 'Digital Transformation',
    color: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
    tagline: 'End-to-End Business Modernisation',
    hero: 'Transform legacy processes into automated, data-driven digital workflows — across every department.',
    desc: 'Digital Transformation isn\'t just about buying new software — it\'s about fundamentally rethinking how your business operates. We combine AI automation, custom software, cloud infrastructure, and process reengineering to modernise your entire operation.',
    problems: [
      'Paper-based or Excel-driven processes that don\'t scale with business growth',
      'Customer interactions handled manually via phone and email with no tracking',
      'Employees spending 40%+ of their time on repetitive, low-value tasks',
      'Leadership making decisions based on outdated or incomplete data',
      'Competitors moving faster because they\'ve already digitised their operations',
    ],
    modules: [
      { icon: Workflow,        title: 'Process Automation (n8n)',        desc: 'Visual workflow automation for approvals, notifications, data sync, report generation, and cross-system orchestration.' },
      { icon: Bot,             title: 'AI & Chatbot Integration',       desc: 'WhatsApp bots, AI-powered customer support, intelligent document processing, and LLM-based decision support tools.' },
      { icon: Database,        title: 'Custom Software Development',    desc: 'Bespoke web applications, internal tools, dashboards, and customer-facing platforms built to your exact specifications.' },
      { icon: Cloud,           title: 'Cloud Infrastructure Setup',     desc: 'Modern cloud-native infrastructure as the foundation for all digital initiatives — scalable, secure, and cost-effective.' },
      { icon: Plug,            title: 'System Integration & APIs',      desc: 'Connect all your existing tools — ERP, CRM, accounting, WhatsApp, payment gateways — into one unified data flow.' },
      { icon: PieChart,        title: 'Data Analytics & Dashboards',    desc: 'Real-time business intelligence dashboards, KPI tracking, predictive analytics, and automated reporting for leadership.' },
      { icon: CalendarCheck,   title: 'Change Management & Training',   desc: 'Staff training programs, adoption tracking, process documentation, and phased rollout planning to ensure smooth transition.' },
      { icon: Network,         title: 'Cybersecurity & Compliance',     desc: 'Security-first approach to every digital initiative — data protection, access controls, and compliance alignment built in.' },
    ],
    outcomes: [
      { metric: '50%', label: 'Reduction in manual processes' },
      { metric: '200+', label: 'Staff hours saved per month' },
      { metric: '3x',  label: 'Faster customer response time' },
      { metric: '40%', label: 'Improvement in data accuracy' },
    ],
    deliverables: ['Digital maturity assessment', 'Transformation roadmap & priorities', 'Process re-engineering documentation', 'Automation workflow builds', 'Custom application development', 'Integration architecture', 'Training & adoption plan', '6-month transformation support'],
    tools: ['n8n', 'Next.js', 'OpenAI', 'WhatsApp API', 'AWS', 'PostgreSQL', 'Power BI', 'Figma'],
    timeline: '8–24 weeks (phased)',
    bestFor: 'Traditional Businesses, Manufacturing, Retail, Logistics, Any Company Ready to Modernise',
  },
]

export default function SolutionsClient() {
  const [active, setActive] = useState('erp')
  const sol = SOLUTIONS.find(s => s.id === active)

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#0A1628' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle,#00C853,transparent 70%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Our Solutions</span>
            </div>
            <h1 className="text-[30px] sm:text-[46px] lg:text-[56px] font-black leading-[1.06] tracking-tight text-white mb-5">
              Complete Business Solutions<br />
              <span style={{ color: '#00C853' }}>Not Just Technology</span>
            </h1>
            <p className="text-[15px] sm:text-[17px] leading-relaxed mb-5 max-w-2xl" style={{ color: '#94A3B8' }}>
              Four integrated solution tracks designed to solve real business problems — from unified ERP platforms and cloud migration to fully managed IT and end-to-end digital transformation.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#solution-detail"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#00C853', color: '#0A1628' }}>
                Explore Solutions <ArrowRight size={15} />
              </a>
              <a href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Book a Consultation
              </a>
            </div>
          </div>

          {/* Solution pills */}
          <div className="flex flex-wrap gap-2 mt-10">
            {SOLUTIONS.map(s => (
              <span key={s.id} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#94A3B8' }}>
                <s.icon size={11} />
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution Overview Cards ── */}
      <section className="py-16 sm:py-20" style={{ background: '#fff' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>What We Solve</span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </div>
            <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
              Four Pillars of <span style={{ color: '#00C853' }}>Business Transformation</span>
            </h2>
            <p className="text-[14px] max-w-xl mx-auto" style={{ color: '#64748B' }}>
              Each solution is a complete, end-to-end engagement — not a partial service. We own the outcome from first call to long-term support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {SOLUTIONS.map(s => (
              <a key={s.id} href="#solution-detail" onClick={() => setActive(s.id)}
                className="group flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                style={{ borderColor: s.border, boxShadow: '0 2px 12px rgba(10,22,40,0.06)' }}>
                <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${s.color}, ${s.color}40)` }} />
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: s.bg, border: `1.5px solid ${s.border}` }}>
                      <s.icon size={22} style={{ color: s.color }} strokeWidth={1.7} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] mb-1" style={{ color: s.color }}>{s.tagline}</p>
                      <h3 className="text-[18px] font-black leading-tight" style={{ color: '#0A1628' }}>{s.label}</h3>
                    </div>
                  </div>
                  <p className="text-[13.5px] leading-relaxed mb-5 flex-1" style={{ color: '#64748B' }}>{s.hero}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      {s.outcomes.slice(0, 2).map((o, i) => (
                        <div key={i} className="px-2.5 py-1 rounded-lg text-[11px] font-bold"
                          style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}>
                          {o.metric} {o.label.split(' ').slice(0, 2).join(' ')}
                        </div>
                      ))}
                    </div>
                    <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: s.color }} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution Detail Navigator ── */}
      <section id="solution-detail" className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">

          <div className="text-center mb-10">
            <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
              Deep-Dive Into Each Solution
            </h2>
            <p className="text-[14px]" style={{ color: '#64748B' }}>
              Select a solution to explore all modules, outcomes, deliverables, and timeline.
            </p>
          </div>

          {/* Tab selector */}
          <div className="flex overflow-x-auto gap-2 mb-8 pb-1 -mx-5 px-5 lg:mx-0 lg:px-0 lg:flex-wrap lg:justify-center scrollbar-hide">
            {SOLUTIONS.map(s => (
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
            style={{ borderColor: sol.border, boxShadow: `0 8px 40px ${sol.color}10` }}>

            {/* Panel header */}
            <div className="p-6 sm:p-8 border-b" style={{ borderColor: sol.border, background: sol.bg }}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: '#fff', border: `2px solid ${sol.border}` }}>
                  <sol.icon size={26} style={{ color: sol.color }} strokeWidth={1.6} />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] mb-1" style={{ color: sol.color }}>
                    {sol.tagline}
                  </p>
                  <h3 className="text-[22px] sm:text-[28px] font-black leading-tight mb-2" style={{ color: '#0A1628' }}>
                    {sol.label}
                  </h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: '#475569' }}>
                    {sol.desc}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-8">

              {/* Problems We Solve */}
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] mb-4" style={{ color: '#94A3B8' }}>
                  Problems This Solves
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {sol.problems.map((p, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl border"
                      style={{ borderColor: '#FEE2E2', background: '#FEF2F2' }}>
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: '#DC2626' }}>
                        <span className="text-white text-[9px] font-black">✕</span>
                      </div>
                      <p className="text-[13px] leading-relaxed" style={{ color: '#7F1D1D' }}>{p}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution Modules — 8 items */}
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] mb-4" style={{ color: '#94A3B8' }}>
                  Solution Modules — {sol.modules.length} Components
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {sol.modules.map((mod, i) => (
                    <div key={i} className="flex flex-col gap-3 p-4 rounded-xl border transition-all hover:-translate-y-0.5 hover:shadow-md"
                      style={{ borderColor: sol.border, background: sol.bg }}>
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: '#fff', border: `1.5px solid ${sol.border}` }}>
                        <mod.icon size={16} style={{ color: sol.color }} strokeWidth={1.7} />
                      </div>
                      <div>
                        <p className="text-[13px] font-bold mb-1 leading-snug" style={{ color: '#0A1628' }}>{mod.title}</p>
                        <p className="text-[11.5px] leading-relaxed" style={{ color: '#64748B' }}>{mod.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes strip */}
              <div className="rounded-xl overflow-hidden border" style={{ borderColor: sol.border }}>
                <div className="grid grid-cols-2 sm:grid-cols-4">
                  {sol.outcomes.map((o, i, arr) => (
                    <div key={i} className="flex flex-col items-center py-6 px-4"
                      style={{ background: sol.bg, borderRight: i < arr.length - 1 ? `1px solid ${sol.border}` : 'none' }}>
                      <span className="text-[28px] sm:text-[34px] font-black leading-none mb-1" style={{ color: sol.color }}>{o.metric}</span>
                      <span className="text-[11px] font-medium text-center" style={{ color: '#64748B' }}>{o.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables + Tools + Timeline + Best For */}
              <div className="grid sm:grid-cols-3 gap-5">
                {/* Deliverables */}
                <div className="p-5 rounded-xl border" style={{ borderColor: '#E2E8F0', background: '#F8FAFC' }}>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] mb-4" style={{ color: '#94A3B8' }}>
                    What You Receive
                  </h4>
                  <ul className="space-y-2.5">
                    {sol.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: sol.bg }}>
                          <Check size={9} style={{ color: sol.color }} strokeWidth={3} />
                        </div>
                        <span className="text-[13px] leading-snug" style={{ color: '#374151' }}>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div className="p-5 rounded-xl border" style={{ borderColor: '#E2E8F0', background: '#F8FAFC' }}>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] mb-4" style={{ color: '#94A3B8' }}>
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {sol.tools.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg text-[11.5px] font-semibold"
                        style={{ background: sol.bg, color: sol.color, border: `1px solid ${sol.border}` }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t" style={{ borderColor: '#E2E8F0' }}>
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] mb-2" style={{ color: '#94A3B8' }}>
                      Typical Timeline
                    </h4>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold"
                      style={{ background: sol.bg, color: sol.color, border: `1px solid ${sol.border}` }}>
                      {sol.timeline}
                    </span>
                  </div>
                </div>

                {/* Best For + CTA */}
                <div className="p-5 rounded-xl border" style={{ borderColor: '#E2E8F0', background: '#F8FAFC' }}>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] mb-4" style={{ color: '#94A3B8' }}>
                    Best Suited For
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {sol.bestFor.split(', ').map((item, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-full text-[11px] font-semibold"
                        style={{ background: sol.bg, color: sol.color, border: `1px solid ${sol.border}` }}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 pt-4 border-t" style={{ borderColor: '#E2E8F0' }}>
                    <a href="/contact-us"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all hover:opacity-90"
                      style={{ background: sol.color, color: '#fff' }}>
                      Get a Quote <ArrowRight size={13} />
                    </a>
                    <a href="/contact-us"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-bold border transition-all hover:bg-slate-50"
                      style={{ borderColor: sol.border, color: sol.color }}>
                      Book Consultation <ChevronRight size={13} />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-16 sm:py-20" style={{ background: '#fff' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Our Process</span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </div>
            <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
              From Problem to <span style={{ color: '#00C853' }}>Production</span>
            </h2>
            <p className="text-[14px] max-w-xl mx-auto" style={{ color: '#64748B' }}>
              Every solution follows a structured, proven delivery framework — no surprises, no scope creep.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: '01', title: 'Discovery & Audit',         color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE', desc: 'Free consultation to understand your business, current systems, pain points, and goals. We then conduct a thorough technical and process audit.' },
              { step: '02', title: 'Solution Design',           color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE', desc: 'Custom solution blueprint with architecture, module map, integration plan, timeline, and fixed pricing. You approve before we start.' },
              { step: '03', title: 'Build & Deploy',            color: '#D97706', bg: '#FFFBEB', border: '#FDE68A', desc: 'Our team builds, configures, tests, and deploys your solution — with regular progress updates and zero disruption to your operations.' },
              { step: '04', title: 'Support & Optimise',        color: '#00C853', bg: '#F0FDF4', border: '#BBF7D0', desc: 'Post-launch support, monitoring, training, and continuous optimisation to ensure your solution delivers measurable results long-term.' },
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
                <p className="text-[13px] leading-relaxed flex-1" style={{ color: '#64748B' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why InfraSpine Solutions ── */}
      <section className="py-16" style={{ background: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Why Us</span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </div>
            <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
              Why Businesses Choose <span style={{ color: '#00C853' }}>InfraSpine Solutions</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'One Team, Every Layer',         desc: 'ERP, cloud, security, automation — all built and managed by one integrated team. No finger-pointing between vendors.', color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE' },
              { title: 'Built for Your Workflow',       desc: 'We don\'t force you into a template. Every solution is designed around how your business actually operates.', color: '#16A34A', bg: '#F0FDF4', border: '#BBF7D0' },
              { title: 'Fixed Pricing, No Surprises',   desc: 'Detailed proposals with itemised scope, clear milestones, and fixed costs. No hidden charges or scope creep.', color: '#D97706', bg: '#FFFBEB', border: '#FDE68A' },
              { title: 'SLA-Backed Outcomes',           desc: 'Written SLAs with guaranteed response times and uptime commitments — legally documented, not vague promises.', color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE' },
              { title: 'Proven Across Industries',      desc: '10+ years delivering solutions across manufacturing, healthcare, retail, logistics, and financial services.', color: '#EA580C', bg: '#FFF7ED', border: '#FED7AA' },
              { title: 'Long-Term Partnership',         desc: 'We don\'t disappear after go-live. Ongoing support, optimisation, and strategic advisory for as long as you need us.', color: '#0891B2', bg: '#ECFEFF', border: '#A5F3FC' },
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
              { value: '50+',  label: 'Solutions Deployed',    color: '#00C853' },
              { value: '10+',  label: 'Enterprise Clients',    color: '#2563EB' },
              { value: '99.9%', label: 'Uptime Achieved',      color: '#7C3AED' },
              { value: '10+',  label: 'Years Experience',      color: '#EA580C' },
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

      {/* ── CTA ── */}
      <section className="py-16 sm:py-20" style={{ background: '#0A1628' }}>
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-6" style={{ background: '#00C853' }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Ready to Start?</span>
            <div className="h-px w-6" style={{ background: '#00C853' }} />
          </div>
          <h2 className="text-[24px] sm:text-[40px] font-black text-white mb-4 leading-tight">
            Let&apos;s Build Your<br /><span style={{ color: '#00C853' }}>Complete Solution</span>
          </h2>
          <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#94A3B8' }}>
            Book a free consultation and get a custom proposal for your business — no commitments, no sales pressure.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
              style={{ background: '#00C853', color: '#0A1628' }}>
              Get a Free Consultation <ArrowRight size={15} />
            </a>
            <a href="/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
              style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
              View Case Studies
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
