import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Server, Shield, Clock, BarChart2, CheckCircle, ArrowRight,
  Monitor, Phone, AlertTriangle, Activity, Zap, Users,
} from 'lucide-react'

export const metadata = {
  title: 'Managed IT Services Pakistan — 24/7 IT Support & Monitoring | Infraspine',
  description: 'Infraspine Managed IT Services: 24/7 NOC monitoring, helpdesk support, patch management, IT asset management, and proactive infrastructure monitoring. Reduce downtime by 90% with a predictable monthly cost.',
  alternates: { canonical: 'https://www.infraspine.com/services/managed-it-services' },
  openGraph: {
    title: 'Managed IT Services Pakistan — 24/7 IT Support & Monitoring | Infraspine',
    description: '24/7 managed IT support with proactive monitoring, patch management, helpdesk, and infrastructure management. Predictable monthly cost with guaranteed SLAs.',
    url: 'https://www.infraspine.com/services/managed-it-services',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Managed IT Services',
  name: 'Infraspine Managed IT Services',
  description: '24/7 managed IT support covering NOC monitoring, helpdesk, patch management, IT asset lifecycle, and proactive infrastructure health management.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/managed-it-services',
  areaServed: { '@type': 'Place', name: 'Pakistan and worldwide remote support' },
}

const CAPABILITIES = [
  {
    icon: Monitor,
    title: '24/7 NOC Monitoring',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Our Network Operations Center monitors every server, switch, router, application, and cloud resource in your environment around the clock. Automated alerting thresholds trigger immediate response workflows before users experience degradation. Every monitored component has a defined response runbook so our NOC engineers know exactly what to do the moment an alert fires — no time wasted diagnosing what tool to use.',
    points: ['Real-time threshold alerting for CPU, RAM, disk, and network', 'Automated runbooks for first-response actions', 'Server, network device, and cloud resource monitoring', 'Monthly uptime reports with incident timeline'],
  },
  {
    icon: Phone,
    title: 'Helpdesk & End-User Support',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'Multi-tier helpdesk covering every IT request your staff raises — from password resets and email configuration to complex system issues and software licensing. Reachable via phone, email, WhatsApp, and a web ticketing portal. Tier-1 agents handle the majority of tickets immediately; complex issues escalate to Tier-2 or Tier-3 engineers with full context already captured so your staff never have to repeat themselves.',
    points: ['Tier-1 to Tier-3 escalation paths', 'Under 15-minute first response on critical tickets', 'Remote desktop support for all Windows/Mac/Linux endpoints', 'Ticketing portal with real-time status tracking'],
  },
  {
    icon: Shield,
    title: 'Patch Management',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Systematic monthly patch cycles covering Windows OS, Linux distributions, and third-party applications across all managed endpoints and servers. Patches are staged to a test group first, validated, then rolled out to production during agreed maintenance windows — eliminating unplanned reboots or application breakages during business hours. Emergency CVE patches are deployed within 24 hours of critical vulnerability disclosure.',
    points: ['Monthly patching on all managed endpoints', 'Test → Stage → Production deployment workflow', 'Emergency patch deployment for critical CVEs within 24 hours', 'Full patch compliance reporting per device'],
  },
  {
    icon: BarChart2,
    title: 'IT Asset Management',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Complete visibility into every piece of hardware and software in your environment. From workstations and servers to licences and subscriptions, we maintain a live asset register with warranty expiry dates, installed software versions, end-of-life dates, and replacement schedules. At renewal time, we handle vendor negotiations on your behalf to ensure you are not overpaying for licences you no longer need.',
    points: ['Network-discovered asset inventory updated continuously', 'Software licence compliance and over-provisioning alerts', 'Warranty and support contract tracking', 'Procurement planning with vendor negotiation support'],
  },
  {
    icon: AlertTriangle,
    title: 'Incident & Problem Management',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'ITIL-aligned incident management from first detection to root-cause resolution. Every incident is logged, categorised by priority, and assigned a dedicated engineer. P1 incidents (complete outages) receive a dedicated war room response with 15-minute SLA. After resolution, a problem review identifies the underlying cause and implements a permanent fix — not just a workaround that leaves the next incident waiting to happen.',
    points: ['ITIL-aligned P1/P2/P3/P4 priority classification', 'P1 response under 15 minutes with dedicated engineer', 'Post-incident review with root-cause documentation', 'Problem management to eliminate recurring incidents'],
  },
  {
    icon: Activity,
    title: 'Monthly Reporting & Reviews',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Transparent monthly performance reports covering uptime percentages, incident volumes, resolution times, helpdesk ticket analysis, patch compliance rates, and capacity trend data. Quarterly business reviews go deeper — reviewing infrastructure health scores, upcoming refresh requirements, and IT roadmap alignment. Every report is delivered in a format your leadership team can read without a technical background.',
    points: ['Monthly infrastructure health and SLA performance report', 'Incident volume trends and resolution time analysis', 'Capacity forecasting for storage, compute, and bandwidth', 'Quarterly business review with IT roadmap update'],
  },
]

const BENEFITS = [
  { stat: '99.9%', label: 'Uptime SLA Guaranteed', color: '#00C853' },
  { stat: '15min', label: 'P1 Incident Response',  color: '#2563EB' },
  { stat: '90%',   label: 'Downtime Reduction',    color: '#7C3AED' },
  { stat: '24/7',  label: 'NOC Coverage',          color: '#D97706' },
]

const TIERS = [
  {
    name: 'Essential',
    color: '#2563EB',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    includes: ['Business hours helpdesk (8AM–6PM Mon–Sat)', 'Weekly patch deployment', 'Monthly monitoring reports', 'Email and phone support', 'Up to 25 endpoints managed'],
  },
  {
    name: 'Professional',
    color: '#00C853',
    bg: '#F0FDF4',
    border: '#00C853',
    highlight: true,
    includes: ['Extended hours helpdesk (7AM–10PM)', '24/7 NOC monitoring', 'Bi-weekly patch deployment', 'IT asset management', 'WhatsApp support channel', 'Up to 75 endpoints managed'],
  },
  {
    name: 'Enterprise',
    color: '#7C3AED',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    includes: ['24/7 helpdesk and dedicated NOC', 'Emergency patch within 4 hours', 'Dedicated account manager', 'Quarterly on-site review', 'Full procurement management', 'Unlimited endpoints'],
  },
]

const FAQS = [
  {
    question: 'What does managed IT services actually include day to day?',
    answer: 'On any given day, our managed IT service means your servers and network are being monitored 24/7 for performance and availability. Your staff can raise helpdesk tickets and get help. Patches are queued and applied on schedule. Any anomalies detected by our monitoring tools are investigated and resolved before they affect your team. At the end of the month, you receive a report showing exactly what happened and what we did about it.',
  },
  {
    question: 'How quickly do you respond to a critical incident?',
    answer: 'For Priority 1 incidents — defined as a complete system outage or critical service failure that stops business operations — our SLA is a 15-minute acknowledgement and active engagement. Our NOC operates 24/7 and incident alerts are escalated immediately via automated paging. For Priority 2 (degraded but functional), our response time is 30 minutes. Priority 3 and 4 issues are handled within 4 hours and next business day respectively.',
  },
  {
    question: 'Do you support cloud and on-premise environments together?',
    answer: 'Yes, hybrid is our standard. We manage on-premise Windows Server, Linux, VMware, and Hyper-V environments alongside Azure and AWS cloud workloads from a single monitoring platform. Our tools provide unified dashboards across all environments so we have full visibility regardless of whether a resource is in your server room or a cloud data centre.',
  },
  {
    question: 'What is the minimum contract length?',
    answer: 'Standard managed IT agreements are 12-month contracts with monthly billing. We also offer 6-month agreements on Professional and Enterprise tiers for organisations that need a shorter initial commitment. Month-to-month is available on the Essential tier at a slight pricing premium. Longer 24 or 36-month agreements qualify for discounted rates.',
  },
  {
    question: 'Can you take over management of an existing IT environment?',
    answer: 'Yes, and it is the most common way we start engagements. We begin with a 5-day discovery phase — auditing your current infrastructure, documenting all assets, installing monitoring agents, and interviewing key IT stakeholders. By day 6, we have full visibility into your environment and your staff can start raising helpdesk tickets. There is no dark period where your IT goes unmanaged.',
  },
  {
    question: 'What tools do you use for monitoring and remote support?',
    answer: 'Our primary RMM (Remote Monitoring and Management) platform is N-central by N-able or Atera depending on environment size. For monitoring, we use Zabbix and Grafana. Remote access for support uses ScreenConnect (ConnectWise Control). All remote sessions are logged, recorded, and auditable.',
  },
]

export default function ManagedITServicesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Managed IT Services' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle,#2563EB,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-10 sm:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Managed IT Services</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Your IT, Monitored and Managed<br />
              <span style={{ color: '#00C853' }}>Around the Clock.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Most businesses discover their IT is broken when their users tell them. Infraspine Managed IT Services flips that equation — proactive 24/7 monitoring detects issues before users notice them, structured helpdesk support resolves them fast, and monthly reporting keeps you in full control. All delivered under a fixed monthly cost with written SLAs.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {BENEFITS.map(b => (
                <div key={b.label} className="rounded-xl p-2.5 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[17px] font-black mb-0.5" style={{ color: b.color }}>{b.stat}</div>
                  <div className="text-[11px] font-semibold leading-snug" style={{ color: '#64748B' }}>{b.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#00C853', color: '#0A1628' }}>
                Get a Managed IT Quote <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Managed IT Matters ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="h-px w-6" style={{ background: '#00C853' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>The Business Case</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Why Businesses Switch from Break-Fix to Managed IT
              </h2>
              <p className="text-[15px] leading-relaxed mb-5" style={{ color: '#64748B' }}>
                Break-fix IT — calling a technician only when something breaks — costs more than it saves. Every emergency call carries a premium rate, every unplanned outage costs your business in lost productivity, and every reactive patch cycle creates a window of vulnerability that structured management eliminates.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Managed IT replaces unpredictable IT costs with a fixed monthly fee that covers everything. Our clients consistently report 30–40% lower total IT spend within the first year, alongside dramatically fewer incidents because problems are caught and resolved before they escalate. The shift is not just financial — it is operational. Your team stops losing hours to IT problems and starts focusing on the work that moves your business forward.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#00C853', text: 'Issues resolved before users notice — not after they complain' },
                  { color: '#2563EB', text: 'Predictable monthly cost replaces unpredictable emergency bills' },
                  { color: '#7C3AED', text: 'Security patches applied systematically, not when remembered' },
                  { color: '#D97706', text: 'Single point of accountability for your entire IT stack' },
                ].map(({ color, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${color}15` }}>
                      <CheckCircle size={12} style={{ color }} />
                    </div>
                    <span className="text-[14px]" style={{ color: '#374151' }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border p-8" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>
                What Our NOC Monitors — Every Minute
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Server CPU & Memory Utilisation',     status: 'Live', color: '#00C853' },
                  { label: 'Network Interface Traffic & Errors',  status: 'Live', color: '#00C853' },
                  { label: 'Disk Health & Storage Capacity',      status: 'Live', color: '#00C853' },
                  { label: 'Application & Service Availability',  status: 'Live', color: '#00C853' },
                  { label: 'Security Event Logs & Alerts',        status: 'Live', color: '#00C853' },
                  { label: 'Backup Job Success / Failure',        status: 'Live', color: '#00C853' },
                  { label: 'Certificate & Licence Expiry Dates',  status: 'Live', color: '#D97706' },
                  { label: 'Cloud Resource Health (Azure / AWS)', status: 'Live', color: '#00C853' },
                ].map(({ label, status, color }) => (
                  <div key={label} className="flex items-center justify-between py-2 border-b last:border-0" style={{ borderColor: '#E2E8F0' }}>
                    <span className="text-[13px]" style={{ color: '#374151' }}>{label}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                      <span className="text-[10px] font-bold" style={{ color }}>{status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              What&apos;s Included in Managed IT Services
            </h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Six core service functions that together eliminate reactive IT and replace it with structured, measurable operations under one contract.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map(cap => (
              <div key={cap.title} className="bg-white rounded-2xl border p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: '#E2E8F0', boxShadow: '0 4px 20px rgba(10,22,40,0.06)' }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: cap.bg }}>
                  <cap.icon size={22} style={{ color: cap.color }} strokeWidth={1.5} />
                </div>
                <h3 className="text-[17px] font-black mb-3" style={{ color: '#0A1628' }}>{cap.title}</h3>
                <p className="text-[13.5px] leading-relaxed mb-5" style={{ color: '#64748B' }}>{cap.desc}</p>
                <ul className="space-y-1.5">
                  {cap.points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-[13px]" style={{ color: '#475569' }}>
                      <CheckCircle size={13} style={{ color: cap.color, marginTop: '2px', flexShrink: 0 }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Tiers ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Managed IT Service Tiers
            </h2>
            <p className="text-[16px] max-w-xl mx-auto" style={{ color: '#64748B' }}>
              Three tiers designed to match your scale, coverage requirements, and budget — all backed by written SLAs.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {TIERS.map(tier => (
              <div key={tier.name}
                className="rounded-2xl p-7 border"
                style={{
                  background: tier.highlight ? tier.bg : '#F8FAFC',
                  borderColor: tier.border,
                  boxShadow: tier.highlight ? `0 8px 32px ${tier.color}20` : 'none',
                }}>
                {tier.highlight && (
                  <p className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: tier.color }}>
                    Most Popular
                  </p>
                )}
                <h3 className="text-[22px] font-black mb-5" style={{ color: '#0A1628' }}>{tier.name}</h3>
                <ul className="space-y-2.5 mb-7">
                  {tier.includes.map(item => (
                    <li key={item} className="flex items-start gap-2 text-[13px]" style={{ color: '#475569' }}>
                      <CheckCircle size={13} style={{ color: tier.color, marginTop: '2px', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact-us"
                  className="block w-full py-3 rounded-xl text-[13px] font-bold text-center transition-all hover:opacity-90"
                  style={{ background: tier.highlight ? tier.color : '#0A1628', color: '#fff' }}>
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        title="Managed IT Services — Frequently Asked Questions"
        subtitle="Honest answers to the questions businesses ask most before signing a managed IT agreement."
        faqs={FAQS}
      />

      <CTABanner
        heading="Stop Managing IT Fires. Start Managing IT Strategy."
        subheading="Let Infraspine take the infrastructure burden off your plate. Free assessment of your current environment — no obligation."
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
