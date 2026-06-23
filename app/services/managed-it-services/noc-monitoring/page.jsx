import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Monitor, AlertTriangle, Activity, TrendingUp, FileText,
  Shield, ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: '24/7 NOC Monitoring Services Pakistan — Network Operations Centre',
  description: 'Infraspine NOC Monitoring: 24/7 network operations centre with SNMP, ICMP and agent-based monitoring. Proactive alert management, <15min P1 response and 99.9% uptime SLA for businesses in Pakistan.',
  alternates: { canonical: 'https://www.infraspine.com/services/managed-it-services/noc-monitoring' },
  openGraph: {
    title: '24/7 NOC Monitoring Services Pakistan — Network Operations Centre | Infraspine',
    description: 'Round-the-clock NOC monitoring with SNMP/ICMP alerting, proactive incident response, and 99.9% uptime SLA. Serving businesses across Pakistan.',
    url: 'https://www.infraspine.com/services/managed-it-services/noc-monitoring',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'NOC Monitoring',
  name: 'Infraspine 24/7 NOC Monitoring',
  description: '24/7 Network Operations Centre providing proactive infrastructure monitoring, alert triage, performance baselining, and capacity planning for businesses in Pakistan.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/managed-it-services/noc-monitoring',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '99.9%', label: 'Uptime SLA', color: '#2563EB' },
  { value: '<15min', label: 'P1 Response Time', color: '#00C853' },
  { value: '10,000+', label: 'Monitored Devices', color: '#7C3AED' },
  { value: '24/7/365', label: 'NOC Coverage', color: '#D97706' },
]

const CAPABILITIES = [
  {
    icon: Monitor,
    title: 'Infrastructure Monitoring (SNMP/ICMP)',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Our NOC engineers deploy SNMP v2c/v3 and ICMP-based polling across every server, switch, router, firewall, and UPS in your environment. Real-time dashboards surface CPU load, memory utilisation, interface errors, packet loss, and device availability in a single unified view. Thresholds are tuned per device class so alert noise is minimised and every alert that fires is genuine and actionable. Agent-based monitoring supplements SNMP for deeper Windows and Linux server visibility.',
    points: [
      'SNMP v2c/v3 and ICMP polling for all network devices',
      'Agent-based monitoring for Windows and Linux servers',
      'Cloud resource monitoring via Azure and AWS API connectors',
      'Customisable alert thresholds tuned per device class',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Alert Triage & Escalation',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Every alert that fires in our monitoring platform is received by a live NOC engineer around the clock — no automated-only handling. Alerts are triaged within 5 minutes, correlated against known events such as maintenance windows or change freeze periods, and escalated through a documented runbook. P1 alerts trigger immediate phone escalation to your designated technical contact alongside simultaneous remediation efforts by our team, ensuring zero dead time between detection and action.',
    points: [
      'Live NOC engineer receives and owns every alert 24/7',
      'Alert correlation to suppress noise during maintenance windows',
      'Documented escalation runbook per client environment',
      'P1 telephone escalation within 15 minutes guaranteed',
    ],
  },
  {
    icon: Activity,
    title: 'Performance Baselining',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Without a performance baseline you cannot know when something is truly abnormal. We capture 30, 60, and 90-day performance baselines for all monitored infrastructure including server CPU trends, network utilisation peaks, storage growth rates, and application response times. Anomaly detection algorithms then flag deviations from these baselines — catching slow-growing problems such as disk filling or memory leaks weeks before they cause a production outage.',
    points: [
      '30/60/90-day performance baselining for all monitored resources',
      'Anomaly detection engine running against established baselines',
      'Application response time tracking for critical services',
      'Weekly trend summary reports highlighting emerging risks',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Capacity Planning',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'Running out of disk space, saturating a WAN link, or maxing out a hypervisor are all predictable events when you have the right data. Our NOC capacity planning service projects growth trajectories for storage, compute, memory, and bandwidth using 90 days of historical trend data. We deliver quarterly capacity reports with clear recommendations — upgrade now, plan for next quarter, or no action required — so procurement is never reactive and budgets are not blindsided.',
    points: [
      'Storage, compute, and bandwidth growth trajectory modelling',
      'Quarterly capacity reports with actionable recommendations',
      'VM sprawl analysis and hypervisor headroom reporting',
      'WAN utilisation forecasting for multi-site environments',
    ],
  },
  {
    icon: FileText,
    title: 'Monthly Reporting',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Every managed environment receives a detailed monthly NOC report covering uptime percentages per monitored device, incident volume and mean-time-to-resolution breakdown, alert trend analysis, patch compliance status, and capacity utilisation snapshots. Reports are written in business-readable language rather than raw log dumps so your leadership team can immediately understand the health of your IT environment without requiring a technical background.',
    points: [
      'Monthly uptime report with per-device availability percentages',
      'Incident volume, MTTR, and resolution trend analysis',
      'Alert pattern analysis to surface recurring underlying issues',
      'Patch compliance and active vulnerability status summary',
    ],
  },
  {
    icon: Shield,
    title: 'Patch & Change Monitoring',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Every patch applied and every configuration change made in your environment is logged, tracked, and monitored for post-change anomalies. Our NOC maintains heightened monitoring for 24 hours after any significant change — patching cycle, firmware update, or network reconfiguration — to catch regressions immediately. Change-related incidents are flagged with full context so rollback decisions are fast, informed, and executed with minimal service disruption.',
    points: [
      'Post-change heightened monitoring active for 24 hours',
      'Configuration change logging and version control tracking',
      'Firmware and OS version inventory across all managed devices',
      'Regression detection with instant rollback escalation alerting',
    ],
  },
]

const VENDORS = [
  'PRTG Network Monitor', 'Zabbix', 'SolarWinds NPM', 'Nagios XI',
  'Azure Monitor', 'Datadog', 'PagerDuty', 'OpsGenie',
  'Grafana', 'Prometheus', 'N-central', 'Atera',
]

const FAQS = [
  {
    question: 'What is a NOC and how is it different from a helpdesk?',
    answer: 'A Network Operations Centre (NOC) is a centralised team that proactively monitors your IT infrastructure 24/7 — servers, networks, cloud resources, and applications — and responds to issues before users notice them. A helpdesk is reactive: it handles requests and problems raised by your staff after something goes wrong. Our NOC works behind the scenes to prevent the incidents that would otherwise generate helpdesk tickets. The two services complement each other and together provide complete IT management coverage across all layers of your technology stack.',
  },
  {
    question: 'What types of devices and systems can you monitor?',
    answer: 'We monitor a wide range of infrastructure: Windows and Linux servers (physical and virtual), network devices (routers, switches, firewalls, wireless APs), storage systems (NAS and SAN), UPS and power infrastructure, hypervisors (VMware ESXi, Hyper-V), cloud workloads (Azure VMs, AWS EC2, Azure SQL), and application health endpoints including web services, databases, and APIs. If a device supports SNMP, has a monitoring agent available, or exposes a management API, our NOC can monitor it within the standard onboarding process.',
  },
  {
    question: 'How do you handle alerts during off-hours and public holidays?',
    answer: 'Our NOC operates 24 hours a day, 7 days a week, 365 days a year — including all public holidays. All alerts are received by a live engineer, not just forwarded to an unmonitored inbox. Our P1 critical response is equally active at 2 AM on a Sunday as it is at 2 PM on a Tuesday. Escalation paths are defined per client during onboarding, so the right person — whether our on-call engineer or your designated emergency contact — is always reached immediately when a critical event occurs.',
  },
  {
    question: 'Do you need physical access to our server room to set up monitoring?',
    answer: 'No physical access is required for most deployments. We deploy lightweight monitoring agents remotely to your servers through your existing management tooling or via a guided self-installation process that takes under 30 minutes. SNMP-based network device monitoring is configured by pointing our platform at your network over an encrypted VPN tunnel. The initial onboarding typically completes in 1–2 business days with no on-site engineer needed for standard remote-first environments. On-site visits are available for complex multi-location setups.',
  },
  {
    question: 'Can you monitor our cloud resources alongside on-premise infrastructure?',
    answer: 'Yes — unified hybrid monitoring is a core part of our NOC offering. We connect to Azure Monitor, AWS CloudWatch, and other cloud platform APIs to pull performance and availability metrics alongside your on-premise infrastructure into a single monitoring platform. You receive a unified dashboard and reporting view across all environments. Alert thresholds, escalation paths, and capacity tracking function consistently regardless of whether a resource is hosted in your server room or a cloud data centre.',
  },
  {
    question: 'What happens when a critical issue is detected at 3 AM?',
    answer: 'When a P1 alert fires — for example, a production server going offline or a WAN link failing — our NOC engineer immediately begins working the incident following your client-specific runbook. If the issue cannot be resolved through remote action within 15 minutes, we escalate via phone call to your designated emergency contact. All actions taken are logged in the incident ticket in real time. By the time you check in the morning you will either find the issue fully resolved with a detailed incident report, or have a live incident update with current status and next steps.',
  },
]

export default function NOCMonitoringPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Managed IT Services', href: '/services/managed-it-services' },
        { label: '24/7 NOC Monitoring' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#2563EB,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#2563EB' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>NOC Monitoring</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              24/7 NOC Monitoring —{' '}
              <span style={{ color: '#2563EB' }}>We Watch So You Don&apos;t Have To.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Most IT failures are not sudden — they are slow, predictable deteriorations that go unnoticed until the damage is done. Infraspine&apos;s 24/7 Network Operations Centre monitors your entire infrastructure around the clock, catches anomalies early, and resolves issues before your users ever notice a problem. No waiting until Monday morning. No discovering the server was down all weekend. Just continuous, expert-level vigilance over everything that keeps your business running.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-2.5 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[17px] font-black mb-0.5" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[11px] font-semibold leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#2563EB', color: '#fff' }}>
                Start NOC Monitoring <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Get a Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Business Case ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="h-px w-6" style={{ background: '#2563EB' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>The Business Case</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Reactive IT Costs More Than You Think
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The average cost of IT downtime for a mid-sized business runs between Rs. 50,000 and Rs. 500,000 per hour when you account for lost productivity, delayed orders, failed transactions, and emergency recovery costs. Most of these outages share a common characteristic: they were predictable. The disk that ran out of space had been growing for weeks. The server that crashed had been logging memory errors for days. The network link that dropped had been showing intermittent packet loss for hours before it failed completely.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Proactive NOC monitoring transforms your IT posture from reactive to anticipatory. Our engineers do not wait for your phone to ring — they watch every metric, every minute, and act on warnings before they become failures. Organisations that move to managed NOC monitoring consistently see a 70–90% reduction in unplanned downtime within the first six months. Not because problems stop happening, but because they are caught and remediated before anyone is affected.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                There is also a staffing reality that makes in-house 24/7 monitoring impractical for most businesses. Genuine round-the-clock coverage requires a minimum of four full-time engineers to cover shift rotations, plus significant investment in monitoring software licensing, runbook documentation, and ongoing training. Infraspine delivers the same capability — with more experience across a wider technology stack — at a fraction of what building it in-house would cost.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#2563EB', text: 'Issues caught and resolved before users are ever affected' },
                  { color: '#00C853', text: '70–90% reduction in unplanned downtime within six months' },
                  { color: '#7C3AED', text: 'No need to hire and retain a dedicated night-shift IT team' },
                  { color: '#D97706', text: 'Monthly reports prove ROI with hard uptime and incident data' },
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
                What Our NOC Monitors — Right Now
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Server CPU, Memory & Disk Utilisation', color: '#00C853', status: 'LIVE' },
                  { label: 'Network Interface Errors & Packet Loss', color: '#00C853', status: 'LIVE' },
                  { label: 'WAN & Internet Link Availability', color: '#00C853', status: 'LIVE' },
                  { label: 'Application & Service Health Checks', color: '#00C853', status: 'LIVE' },
                  { label: 'Security Event Logs & Alert Feeds', color: '#00C853', status: 'LIVE' },
                  { label: 'Backup Job Success / Failure Status', color: '#00C853', status: 'LIVE' },
                  { label: 'Cloud Resource Health (Azure / AWS)', color: '#00C853', status: 'LIVE' },
                  { label: 'SSL Certificate & Licence Expiry Dates', color: '#D97706', status: 'WATCH' },
                ].map(({ label, color, status }) => (
                  <div key={label} className="flex items-center justify-between py-2 border-b last:border-0" style={{ borderColor: '#E2E8F0' }}>
                    <span className="text-[13px]" style={{ color: '#374151' }}>{label}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${color}15`, color }}>{status}</span>
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
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#2563EB' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>NOC Capabilities</span>
              <div className="h-px w-6" style={{ background: '#2563EB' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Core NOC Disciplines
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Working in coordination to keep your infrastructure running at peak performance every hour of every day.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map(cap => (
              <div key={cap.title}
                className="bg-white rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: '#E2E8F0' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: cap.bg }}>
                  <cap.icon size={20} style={{ color: cap.color }} />
                </div>
                <h3 className="text-[16px] font-bold mb-3" style={{ color: '#0A1628' }}>{cap.title}</h3>
                <p className="text-[13.5px] leading-relaxed mb-4" style={{ color: '#64748B' }}>{cap.desc}</p>
                <ul className="space-y-2">
                  {cap.points.map(pt => (
                    <li key={pt} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: cap.color }} />
                      <span className="text-[13px]" style={{ color: '#475569' }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vendor Strip ── */}
      <section className="py-12 bg-white border-y" style={{ borderColor: '#E2E8F0' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] mb-8" style={{ color: '#94A3B8' }}>
            Monitoring Tools &amp; Platforms We Work With
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {VENDORS.map(v => (
              <span key={v} className="px-4 py-2 rounded-full text-[12px] font-semibold border"
                style={{ background: '#F8FAFC', borderColor: '#E2E8F0', color: '#374151' }}>
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion faqs={FAQS} accent="#2563EB"
        title="NOC Monitoring Questions Answered"
        subtitle="Everything you need to know before engaging our 24/7 monitoring service." />

      <CTABanner
        heading="Start 24/7 NOC Monitoring Today"
        subheading="Stop discovering IT problems after they hurt your business. Let our NOC watch your infrastructure around the clock so you never have to."
        primaryCTA={{ label: 'Get Started', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
