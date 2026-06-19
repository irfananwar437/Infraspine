import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Server, Activity, Shield, RefreshCw, HardDrive, BarChart2,
  ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'Server Management Services Pakistan | Managed Servers | Infraspine',
  description: 'Fully managed server management in Pakistan: 24/7 monitoring, OS patching, performance tuning, backup, and hardware maintenance for physical and virtual servers. 99.9% uptime SLA.',
  alternates: { canonical: 'https://www.infraspine.com/services/server-management' },
  openGraph: {
    title: 'Server Management Services Pakistan | Managed Servers | Infraspine',
    description: 'Fully managed server management in Pakistan with 24/7 monitoring, OS patching, performance tuning, and 99.9% uptime SLA.',
    url: 'https://www.infraspine.com/services/server-management',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Server Management',
  name: 'Infraspine Server Management Services Pakistan',
  description: 'Fully managed server management covering 24/7 monitoring, OS patching, performance tuning, backup, capacity planning, and hardware maintenance for physical and virtual server infrastructure across Pakistan.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/server-management',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '99.9%', label: 'Server Uptime SLA', color: '#2563EB' },
  { value: '15 min', label: 'P1 Response Time', color: '#00C853' },
  { value: '24/7', label: 'Monitoring Coverage', color: '#D97706' },
  { value: '500+', label: 'Servers Managed', color: '#7C3AED' },
]

const CAPABILITIES = [
  {
    icon: Activity,
    title: '24/7 Server Monitoring & Alerting',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Server infrastructure demands continuous oversight. A server that runs at 95% CPU utilisation for hours before anyone notices, a disk filling silently to 100%, or a service process that crashes overnight — these are the failure modes that proactive monitoring prevents. Infraspine deploys agent-based monitoring on every managed server, collecting real-time metrics on CPU, memory, disk I/O, network throughput, process health, Windows and Linux service status, and event log activity. Alert thresholds are set based on baseline performance profiles unique to each server, so alerts are meaningful rather than noisy. When a threshold breach indicates a developing problem, our NOC engineers investigate and remediate before the server reaches a failure state. All monitoring data is retained for trend analysis, and monthly performance reports give you a complete picture of server health, incident frequency, and capacity trends across your entire estate.',
    points: [
      'Agent-based monitoring with CPU, memory, disk, and service metrics',
      'Customised alert thresholds based on individual server baselines',
      'NOC investigation and remediation before failure state is reached',
      'Monthly performance reports with trend analysis and capacity forecasting',
    ],
  },
  {
    icon: RefreshCw,
    title: 'OS Patching & Update Management',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'Unpatched server operating systems are the most consistently exploited attack surface in enterprise IT. The majority of successful ransomware attacks and server compromises in Pakistan exploit vulnerabilities that had patches available months or years before the incident. Yet manual patching across a server estate is time-consuming, risks breaking application dependencies if not tested properly, and creates downtime if applied without a defined maintenance window. Infraspine\'s server patching service manages the complete patch lifecycle for both Windows Server and Linux environments. Critical security patches are assessed within 24 hours of release and fast-tracked through an emergency change process. Standard monthly patches are tested in a staging environment before production deployment, applied during agreed maintenance windows with rollback capability confirmed before commencement. A patch compliance report is produced after every cycle showing the patching status of every managed server against the current CVE landscape.',
    points: [
      'Windows Server and Linux OS patching across all distributions',
      'Critical security patches fast-tracked within 24 hours of release',
      'Staging environment testing before production deployment',
      'Agreed maintenance windows with documented rollback capability',
    ],
  },
  {
    icon: BarChart2,
    title: 'Performance Tuning & Capacity Planning',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Server performance degrades gradually over time as workloads grow, databases accumulate fragmentation, temporary files multiply, and configurations that were optimal at deployment become mismatched to actual usage patterns. Without active performance management, organisations typically address degradation reactively — either after users start complaining about slow application response, or in the middle of a performance crisis. Infraspine\'s server performance tuning service takes a data-driven approach to keeping servers operating at peak efficiency. Quarterly performance reviews analyse collected metrics to identify servers trending toward resource saturation, applications consuming disproportionate resources, and configuration settings that can be optimised for current workloads. Database servers receive specific attention: index fragmentation analysis, query execution plan review, tempdb configuration, memory allocation tuning, and I/O subsystem assessment. Capacity planning projections use 12 months of collected metrics to model when current resources will become insufficient, giving you actionable lead time for upgrade or scaling decisions.',
    points: [
      'Quarterly performance reviews identifying degradation and optimisation opportunities',
      'Database server tuning: indexing, query plans, memory allocation, and I/O',
      'Configuration optimisation aligned to current workload patterns',
      '12-month capacity projections with actionable upgrade recommendations',
    ],
  },
  {
    icon: Shield,
    title: 'Server Security Hardening',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'A default server installation is not a secure server installation. Out-of-the-box Windows Server and Linux configurations prioritise compatibility and ease of administration over security — leaving services enabled that expose unnecessary attack surface, default credentials that have not been changed, audit logging that does not capture the events needed for incident investigation, and network service bindings that expose management interfaces to the network. Infraspine\'s server hardening service applies a systematic security baseline to every managed server, derived from the CIS Benchmarks for Windows Server and major Linux distributions. Hardening covers service minimisation (disabling unused services and roles), local administrator account management, Remote Desktop and SSH access restriction to authorised source IPs, Windows Defender or SELinux policy configuration, detailed audit policy enabling event forwarding to our SIEM platform, and network firewall rules locking down communication to documented requirements. Every hardening action is documented to support compliance evidence requirements under ISO 27001, PCI-DSS, and Cyber Essentials.',
    points: [
      'CIS Benchmark-aligned hardening for Windows Server and Linux',
      'Service minimisation, access restriction, and credential hardening',
      'Audit policy configuration with SIEM event forwarding',
      'Hardening documentation supporting ISO 27001 and PCI-DSS compliance',
    ],
  },
  {
    icon: HardDrive,
    title: 'Backup, Recovery & Business Continuity',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Server backup is the safety net that every organisation knows it needs but many organisations have not actually tested. A backup you have never successfully restored from is not a backup — it is an assumption. Infraspine manages server backup and recovery as an active, tested capability rather than a passive archive. Every managed server is backed up using Veeam, Acronis, or Azure Backup depending on the infrastructure platform, with configurable RPO typically achieving 15 minutes for critical servers using continuous change-block tracking. Recovery testing is conducted monthly for all managed servers: a recovery drill is performed in an isolated environment, the restored server is validated against a functionality checklist, and the results are documented with recovery time measurements. Immutable backup copies are maintained with object-lock storage preventing deletion or modification, ensuring backup integrity is preserved even if ransomware gains administrative access. For servers with zero-downtime requirements, we implement Veeam Instant Recovery, enabling failed servers to boot directly from backup storage within minutes while full recovery runs in the background.',
    points: [
      'Veeam, Acronis, or Azure Backup with 15-minute RPO for critical servers',
      'Monthly recovery drills with documented RTO measurements',
      'Immutable backup copies with object-lock ransomware protection',
      'Instant Recovery capability for near-zero downtime server restoration',
    ],
  },
  {
    icon: Server,
    title: 'Hardware Maintenance & Lifecycle Management',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Physical server hardware requires planned maintenance to remain reliable and perform to specification. Cooling system cleaning, firmware updates, hardware diagnostics, drive health assessments, and memory testing — when performed on a scheduled basis — identify hardware degradation before it becomes a failure event. Infraspine\'s server hardware maintenance service provides scheduled on-site maintenance visits for physical server infrastructure, conducted by field engineers certified on the major server platforms including Dell PowerEdge, HP ProLiant, and Lenovo ThinkSystem. Each maintenance visit follows a documented checklist specific to the server model: BIOS and firmware currency assessment, RAID controller and battery status, physical drive health via S.M.A.R.T. data, cooling fan operation and airflow, power supply redundancy, iDRAC/iLO health, and physical inspection for signs of damage or abnormal operation. Maintenance findings are documented in a visit report with any identified risks and recommended remediation actions. Lifecycle management tracking flags servers approaching end-of-support and end-of-life, enabling proactive refresh planning rather than emergency replacements.',
    points: [
      'Scheduled on-site maintenance visits for Dell, HP, and Lenovo servers',
      'Firmware updates, RAID health, drive S.M.A.R.T., and cooling assessments',
      'Documented maintenance reports with risk identification and recommendations',
      'Lifecycle tracking with proactive end-of-support and refresh alerts',
    ],
  },
]

const FAQS = [
  {
    question: 'What types of servers do you manage?',
    answer: 'We manage physical servers, virtual machines (VMware vSphere, Hyper-V, and Proxmox), and cloud-based virtual machines (Azure VMs, AWS EC2, and Google Compute Engine). For operating systems, we support all versions of Windows Server from 2016 onwards and the major Linux distributions including Ubuntu Server, CentOS, RHEL, Rocky Linux, and Debian. We also manage application-specific server roles including SQL Server, Exchange Server, IIS web servers, file servers, domain controllers, and print servers. If your server platform is not listed, contact us to confirm compatibility.',
  },
  {
    question: 'What is included in your 99.9% uptime SLA?',
    answer: 'Our 99.9% uptime SLA commits to maintaining your managed servers in an operational state for at least 99.9% of the time on a monthly measurement basis, equivalent to less than 44 minutes of unplanned downtime per month. The SLA covers outages caused by software or configuration failures within our management scope. It is supported by our 24/7 monitoring which detects developing issues before they cause outages, our 15-minute P1 response commitment, and our proactive patching and maintenance programme that addresses the most common causes of server failure before they occur. Planned maintenance windows are excluded from uptime calculations and agreed in advance.',
  },
  {
    question: 'How quickly do you respond to a server going down?',
    answer: 'For a complete server outage (P1 incident), our target is to begin active investigation within 15 minutes of the alert being triggered by our monitoring system. In most cases, our NOC engineers are working on the issue before your users have raised a support ticket. For servers where investigation requires on-site physical access, our field engineers provide a 4-hour on-site response SLA. We maintain regular status communication during major incidents so your management team is kept informed without needing to chase updates.',
  },
  {
    question: 'Do you manage servers hosted in our office, data centre, or the cloud?',
    answer: 'Yes to all three. Our server management service is location-agnostic. On-premise servers in your office or data centre are managed via our monitoring agent and VPN-secured remote access, with on-site field engineer support available when physical intervention is required. Colocation servers are managed the same way with field engineers available to attend the colocation facility. Cloud VMs on Azure, AWS, or Google Cloud are managed via cloud-native APIs and agents, with our management scope covering the operating system and above (the hypervisor and physical infrastructure is the responsibility of the cloud provider).',
  },
  {
    question: 'Can you take over management of servers that another company currently manages?',
    answer: 'Yes. We handle service transitions regularly. Our transition process begins with a detailed discovery phase: we audit every server in scope, document its configuration, running services, backup state, and current health, and identify any risks or remediation required before we take over management responsibility. A formal transition plan is agreed with you and the outgoing provider, specifying the handover date, the information to be transferred, and the parallel running period if required. We aim for a clean handover within 2 weeks for most environments. You will have a dedicated transition manager throughout the process.',
  },
]

export default function ServerManagementPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Server Management' },
      ]} />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: '#00061a' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle,#2563EB,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#2563EB' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>Server Management</span>
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Fully Managed Servers —{' '}
              <span style={{ color: '#2563EB' }}>24/7 Monitoring. 99.9% Uptime.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Your servers are the foundation of every application your business depends on. Infraspine manages 500+ servers across Pakistan with round-the-clock monitoring, a 15-minute P1 response SLA, proactive OS patching, security hardening, tested backup, and scheduled hardware maintenance — keeping your infrastructure stable, secure, and performing at capacity.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-3 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[20px] font-black mb-0.5" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[11px] font-semibold leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#2563EB', color: '#fff' }}>
                Get a Server Audit <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Transfer My Servers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Case */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="h-px w-6" style={{ background: '#2563EB' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>Why Managed Server Services</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Servers That Are Watched, Patched, and Maintained Never Fail Unexpectedly
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The most expensive server failure is the one that surprises you at 2am — and almost every server failure that causes extended downtime has warning signs that went unnoticed in the weeks before the incident. A disk with rising reallocated sector counts, a CPU trending to 90% average utilisation, a Windows event log filling with VSS errors — each of these is a precursor to failure that proactive monitoring catches before it becomes an outage.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Internal IT teams managing servers reactively — responding to incidents rather than anticipating them — are always a step behind. There are not enough hours in the day to review every server's performance metrics, check patch compliance, validate backup success, and investigate event log anomalies across a multi-server estate while also handling helpdesk tickets and project work.
              </p>
              <p className="text-[15px] leading-relaxed mb-6" style={{ color: '#64748B' }}>
                Infraspine's managed server service transfers all of this to a dedicated team with the tooling, processes, and capacity to give every server in your estate the attention it requires. Your internal team retains full visibility and administrative access — but the daily management burden moves to us.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#2563EB', text: '24/7 monitoring catching issues before they cause outages' },
                  { color: '#16A34A', text: 'Monthly patching keeping every server current against CVEs' },
                  { color: '#D97706', text: 'Tested monthly backups — not just scheduled, but verified' },
                  { color: '#DC2626', text: 'CIS Benchmark security hardening on every managed server' },
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

            <div className="rounded-2xl border p-8" style={{ background: '#EFF6FF', borderColor: '#BFDBFE' }}>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>Server Management Service Summary</p>
              <div className="space-y-4">
                {[
                  { label: 'Uptime SLA', value: '99.9% guaranteed' },
                  { label: 'P1 Response Time', value: '15 minutes' },
                  { label: 'Monitoring', value: '24/7 NOC coverage' },
                  { label: 'Patching Cycle', value: 'Monthly + emergency patches' },
                  { label: 'Backup Testing', value: 'Monthly recovery drills' },
                  { label: 'Platforms', value: 'Windows Server & Linux' },
                  { label: 'Deployment', value: 'On-prem, colo & cloud VMs' },
                  { label: 'On-Site Response', value: '4-hour field engineer SLA' },
                ].map(p => (
                  <div key={p.label} className="flex items-center justify-between py-2 border-b last:border-0 text-[13px]" style={{ borderColor: '#BFDBFE' }}>
                    <div className="font-semibold" style={{ color: '#0A1628' }}>{p.label}</div>
                    <div className="font-bold" style={{ color: '#2563EB' }}>{p.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#2563EB' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>Service Capabilities</span>
              <div className="h-px w-6" style={{ background: '#2563EB' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Server Management Service Areas
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From round-the-clock monitoring and OS patching through performance tuning, security hardening, backup, and hardware maintenance.
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
                <h3 className="text-[15px] font-bold mb-3" style={{ color: '#0A1628' }}>{cap.title}</h3>
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

      <FAQAccordion
        faqs={FAQS}
        accent="#2563EB"
        title="Server Management Questions Answered"
        subtitle="Common questions from organisations evaluating managed server services."
      />

      <CTABanner
        heading="Take the Risk Out of Running Your Own Servers"
        subheading="Get a free server audit. We will assess the health, security, and backup status of every server in your estate and show you exactly what needs attention."
        primaryCTA={{ label: 'Get a Free Server Audit', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
