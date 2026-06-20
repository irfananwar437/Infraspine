import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Activity, BarChart2, AlertTriangle, Database, Settings, CheckCircle,
  ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'Device Monitoring Services Pakistan | Endpoint Monitoring | Infraspine',
  description: 'Infraspine Device Monitoring: continuous monitoring of all endpoints, servers and network devices. 10,000+ devices monitored, <5min alert response, 99.9% monitoring uptime, proactive issue detection before failures occur.',
  alternates: { canonical: 'https://www.infraspine.com/services/managed-it-services/device-monitoring' },
  openGraph: {
    title: 'Device Monitoring Services Pakistan | Endpoint Monitoring | Infraspine',
    description: 'Continuous endpoint and server monitoring with <5min alert response and proactive issue detection. Serving businesses across Pakistan with 99.9% monitoring uptime.',
    url: 'https://www.infraspine.com/services/managed-it-services/device-monitoring',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Device Monitoring',
  name: 'Infraspine Device Monitoring Services',
  description: 'Continuous monitoring of all endpoints, servers, and network devices with proactive alerting, health dashboards, capacity planning, and compliance tracking for businesses in Pakistan.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/managed-it-services/device-monitoring',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '10,000+', label: 'Devices Monitored', color: '#7C3AED' },
  { value: '<5min', label: 'Alert Response', color: '#DC2626' },
  { value: '99.9%', label: 'Monitoring Uptime', color: '#00C853' },
  { value: 'Proactive', label: 'Issue Detection', color: '#0891B2' },
]

const CAPABILITIES = [
  {
    icon: Activity,
    title: 'Real-Time Performance Monitoring',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Real-time performance monitoring gives you and our engineering team continuous visibility into how every device in your environment is performing at any given moment. We monitor CPU utilisation, memory consumption, disk I/O, network throughput, and process-level activity across every monitored endpoint, server, and network device. Performance data is collected at configurable intervals — as frequent as every 60 seconds for critical systems — and stored in a time-series database that allows trend analysis over days, weeks, and months. When a device\'s performance metrics deviate from established baselines, our platform generates an alert before the degradation reaches a point where users are affected. This distinction between reactive support and proactive monitoring is fundamental: instead of your team raising a ticket when their computer is already too slow to use, we detect and address the underlying cause hours or days earlier.',
    points: [
      'CPU, memory, disk, and network throughput monitoring at configurable intervals',
      'Baseline establishment and deviation alerting for each monitored device',
      'Process-level monitoring to identify resource-heavy applications',
      'Historical performance data retained for trend analysis and capacity planning',
    ],
  },
  {
    icon: BarChart2,
    title: 'Health Dashboards & Reporting',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Monitoring data is only useful if it is presented in a way that enables fast, informed decisions. Our device monitoring dashboards give your IT team and leadership real-time visibility into the health status of every monitored device, grouped by site, device type, criticality, and operational status. Traffic-light health indicators make it immediately obvious which devices require attention without requiring deep technical knowledge to interpret. Customisable dashboard views allow different stakeholders to see the information relevant to them — an IT manager sees engineering-level detail, while an operations director sees a business-level health summary. Monthly health reports summarise monitoring findings, alert volumes, response times, recurring issues, and device performance trends, giving your leadership team the data they need to make informed decisions about IT investment and infrastructure refresh cycles.',
    points: [
      'Real-time traffic-light health dashboards for all monitored devices',
      'Customisable views for technical and executive stakeholders',
      'Monthly health and performance summary report with trend analysis',
      'Device grouping by site, type, and criticality for fast triage',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Proactive Alerting',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'The value of device monitoring is entirely determined by the quality of its alerting — too few alerts and critical problems are missed; too many and alert fatigue causes the important ones to be ignored. Infraspine\'s alerting configuration is designed to surface genuine issues early while suppressing false positives and maintenance-window noise. Alert thresholds are tuned to each device type and criticality level: a web server has different alerting requirements than a user workstation. Alerts are categorised by severity — informational, warning, critical, and emergency — with different notification and escalation paths for each level. When a critical alert fires, our on-call engineers receive notification within 5 minutes and begin investigation immediately. Repeated alerts for the same underlying issue are correlated and presented as a single problem rather than a flood of duplicate notifications.',
    points: [
      'Severity-tiered alerting (informational through emergency) per device type',
      '<5 minute engineer notification for critical and emergency alerts',
      'Alert correlation to prevent duplicate notification floods',
      'Maintenance window suppression to eliminate planned-downtime false positives',
    ],
  },
  {
    icon: Database,
    title: 'Capacity Planning',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Reactive capacity management — adding storage, memory, or compute resource only after a system runs out — is expensive and disruptive. Proactive capacity planning, enabled by months of historical monitoring data, allows IT and business leadership to make infrastructure investment decisions ahead of need. Our capacity planning service analyses trending performance data to forecast when specific devices or systems will approach capacity limits, typically 3 to 6 months in advance. Disk capacity trending identifies storage systems approaching full before they reach the critical threshold that causes application failures. Memory trend analysis identifies servers where RAM is insufficient for growing workloads before performance degradation becomes visible to users. This forward-looking insight lets you plan, budget, and procure infrastructure on your schedule rather than in emergency response mode.',
    points: [
      'Disk, memory, and compute capacity trend analysis with forward projections',
      '3–6 month advance warning of capacity limit approaches',
      'Growth-rate modelling based on historical utilisation data',
      'Capacity planning report included in monthly monitoring summary',
    ],
  },
  {
    icon: Settings,
    title: 'Software Inventory Monitoring',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Knowing exactly what software is installed across every device in your organisation is a fundamental security and compliance requirement — and one that is impossible to maintain manually at any significant scale. Our software inventory monitoring maintains a continuously updated register of all installed applications, versions, and installation dates across every managed endpoint. This data supports multiple critical functions: security teams can identify unauthorised or unlicensed software; compliance teams can verify that required security software is installed and current; IT teams can identify outdated application versions that represent security vulnerabilities; and asset managers can reconcile software licence entitlements against actual deployments. Alerts fire automatically when prohibited software is detected or when required security software is removed, giving your team immediate visibility into compliance deviations.',
    points: [
      'Continuously updated software inventory across all managed endpoints',
      'Unauthorised and prohibited software detection with instant alerting',
      'Licence compliance reporting against software entitlement records',
      'Version currency tracking to identify outdated and vulnerable applications',
    ],
  },
  {
    icon: CheckCircle,
    title: 'Compliance & Patch Status Tracking',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'Unpatched systems are the most common entry point for cyberattacks — and yet maintaining accurate visibility into patch status across a heterogeneous device fleet is one of the most operationally challenging aspects of IT management. Our compliance and patch status monitoring maintains a real-time view of patch currency for every monitored device, tracking operating system patches, critical application updates, and security software definition currency. Devices that are missing critical or security patches are flagged immediately, and patch compliance reports map device patch status against defined compliance requirements. For organisations subject to regulatory compliance requirements — financial services, healthcare, or government — our patch compliance reporting provides the audit evidence needed to demonstrate that systems are maintained to the required standard, reducing the burden on internal teams during audits.',
    points: [
      'Real-time OS and application patch status tracking across all endpoints',
      'Missing critical and security patch alerting with device identification',
      'Patch compliance reporting mapped to regulatory requirements',
      'Security software currency monitoring (AV definitions, EDR signatures)',
    ],
  },
]

const VENDORS = [
  'Datto RMM', 'NinjaRMM', 'N-able N-central', 'Atera',
  'Zabbix', 'PRTG Network Monitor', 'Datadog', 'ConnectWise Automate',
]

const FAQS = [
  {
    question: 'What types of devices can you monitor and what information do you collect?',
    answer: 'We monitor Windows and macOS workstations, Windows and Linux servers (physical and virtual), network devices (switches, routers, firewalls, access points), storage systems, printers, and cloud-based resources including Azure VMs and AWS EC2 instances. The information collected includes performance metrics (CPU, memory, disk, network), system events (service starts and stops, error events, login activity), hardware health indicators (disk SMART data, temperature, fan speed where available), software inventory, patch status, and security software status. All data collection is performed by a lightweight agent installed on managed endpoints or through agentless SNMP/WMI polling for network devices.',
  },
  {
    question: 'How do you ensure your monitoring doesn\'t impact device performance?',
    answer: 'Our monitoring agents are designed to have a minimal performance footprint — typically consuming less than 1% of CPU and under 50MB of RAM on monitored endpoints. Data collection intervals are configurable and defaulted to values that balance monitoring granularity with resource consumption. On critical servers, more frequent collection intervals are used with tighter resource budgets. On workstations, collection intervals are slightly longer to further reduce any user-perceptible impact. The monitoring agent\'s resource priority is set to run at background priority, meaning it yields CPU time to foreground applications automatically. We have deployed monitoring across environments ranging from 10 to 10,000+ devices with no user-reported performance impact attributable to the monitoring agent.',
  },
  {
    question: 'What happens when a monitoring alert fires — who takes action and how quickly?',
    answer: 'When a monitoring alert fires, the severity level determines the response path. Informational alerts are logged for review in the next scheduled check but do not trigger immediate action. Warning alerts are reviewed by an engineer within 2 hours during standard hours or queued for next-business-day review for low-risk devices. Critical alerts trigger immediate notification to our on-call engineering team, who begin investigation within 5 minutes. Emergency alerts (service down, security event, complete device failure) trigger immediate phone notification to our on-call team and, for clients with remote access support included, engineers connect to investigate without waiting for the client to raise a ticket. Monthly alert reports detail alert volumes, response times, and resolution outcomes.',
  },
  {
    question: 'Can device monitoring help us pass an ISO 27001 or regulatory audit?',
    answer: 'Yes — device monitoring generates significant compliance evidence value. ISO 27001 control A.12.1 (operational procedures), A.12.4 (logging and monitoring), A.12.6 (vulnerability management), and A.14.2 (change management) all benefit directly from monitoring data and reporting. Our monthly monitoring reports, patch compliance summaries, software inventory records, and alert response logs provide the continuous monitoring evidence required to satisfy these controls. For financial sector clients subject to SBP IT guidelines, our monitoring reports address the continuous monitoring requirements for IT infrastructure. We structure our reporting outputs specifically to map to common compliance framework requirements, reducing the documentation burden on your internal compliance team during audit periods.',
  },
  {
    question: 'How long does it take to get monitoring set up across our environment?',
    answer: 'For most environments, monitoring deployment is completed within 5 to 10 business days from contract signature. The deployment process begins with a discovery phase where we document your device inventory and define monitoring scope. Agent deployment is then executed through your existing software distribution mechanism (Group Policy, SCCM, Intune, or manual installation for smaller environments) or through our RMM platform\'s agent deployment capability. Network device monitoring via SNMP is configured in parallel. Alerting thresholds are set to conservative defaults initially and tuned over the first 2 to 4 weeks of monitoring as we establish baselines specific to your environment. Your first monitoring report is delivered at the end of the first full calendar month of operation.',
  },
]

export default function DeviceMonitoringPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Managed IT Services', href: '/services/managed-it-services' },
        { label: 'Device Monitoring' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#7C3AED,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#7C3AED' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#7C3AED' }}>Device Monitoring</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Device Monitoring —{' '}
              <span style={{ color: '#7C3AED' }}>Know Before Your Users Notice.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Most IT failures do not happen without warning — they give signals hours or days in advance that go undetected because no one is watching. Infraspine\'s device monitoring service puts continuous, automated eyes on every endpoint, server, and network device in your organisation, detecting the early warning signs of failure, performance degradation, and security issues before they impact your users and operations. Proactive monitoring means fewer incidents, shorter resolution times, and infrastructure that you manage on your schedule rather than in emergency response mode.
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
                style={{ background: '#7C3AED', color: '#fff' }}>
                Start Monitoring Your Devices <ArrowRight size={14} />
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
                <div className="h-px w-6" style={{ background: '#7C3AED' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#7C3AED' }}>The Business Case</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                The Hidden Cost of Running IT Without Monitoring
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Without monitoring, your IT team operates in the dark — discovering problems only when users report them. A server running out of disk space triggers a call from a user who cannot save a file. A failing hard drive is discovered only after it fails completely and data is lost. A switch port flapping on and off causes intermittent connectivity complaints for days before someone traces the cause. In every case, the problem could have been detected and resolved before it caused disruption — if there had been monitoring in place.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The business cost of reactive IT management is substantial: unplanned downtime, emergency support call-out fees, expedited hardware procurement at premium prices, lost productivity while systems are unavailable, and the reputational damage of repeated outages that erode staff confidence in IT. Research consistently shows that the cost of preventing a failure is a fraction of the cost of recovering from one.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Device monitoring converts your IT operation from reactive to proactive. Issues are detected when they are small and easily addressable — before they cascade into outages. Infrastructure refresh decisions are informed by data rather than guesswork. Compliance requirements for continuous monitoring are satisfied automatically. And your IT team spends less time firefighting and more time on strategic work that drives business value.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#7C3AED', text: 'Detect device health issues hours before they cause user impact' },
                  { color: '#00C853', text: 'Capacity planning data eliminates emergency infrastructure purchases' },
                  { color: '#DC2626', text: '<5 minute alert response prevents small issues becoming outages' },
                  { color: '#0891B2', text: 'Compliance evidence generated automatically from monitoring data' },
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
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>Reactive vs Proactive IT Management</p>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2 text-[10px] font-bold uppercase tracking-wider pb-1 border-b" style={{ color: '#94A3B8', borderColor: '#E2E8F0' }}>
                  <div></div><div>Reactive IT</div><div>With Monitoring</div>
                </div>
                {[
                  { label: 'Issue Discovery', reactive: 'User complaint', proactive: 'Alert before impact', good: true },
                  { label: 'Response Time', reactive: 'Hours to days', proactive: '<5 minutes', good: true },
                  { label: 'Downtime Duration', reactive: 'Hours to days', proactive: 'Minutes or zero', good: true },
                  { label: 'Hardware Failure', reactive: 'After failure', proactive: 'SMART warnings first', good: true },
                  { label: 'Capacity Issues', reactive: 'System full/crashed', proactive: '3–6 months notice', good: true },
                  { label: 'Compliance Evidence', reactive: 'Manual collection', proactive: 'Auto-generated', good: true },
                ].map(p => (
                  <div key={p.label} className="grid grid-cols-3 gap-2 py-2 border-b last:border-0 text-[12px]" style={{ borderColor: '#E2E8F0' }}>
                    <div className="font-semibold" style={{ color: '#0A1628' }}>{p.label}</div>
                    <div style={{ color: '#DC2626' }}>{p.reactive}</div>
                    <div className="font-semibold" style={{ color: '#00C853' }}>{p.proactive}</div>
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
              <div className="h-px w-6" style={{ background: '#7C3AED' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#7C3AED' }}>Monitoring Capabilities</span>
              <div className="h-px w-6" style={{ background: '#7C3AED' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Core Device Monitoring Functions
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Comprehensive monitoring coverage from real-time performance tracking through to compliance and patch status — everything you need to keep your IT environment healthy and controlled.
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
            Monitoring &amp; RMM Platforms We Use
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

      <FAQAccordion faqs={FAQS} accent="#7C3AED"
        title="Device Monitoring Questions Answered"
        subtitle="Common questions from IT teams and business leaders evaluating managed device monitoring." />

      <CTABanner
        heading="Start Monitoring Your Entire Device Fleet Today"
        subheading="Stop discovering IT problems after your users do. Get continuous, proactive device monitoring with instant alerting and monthly health reports."
        primaryCTA={{ label: 'Get Started Today', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
