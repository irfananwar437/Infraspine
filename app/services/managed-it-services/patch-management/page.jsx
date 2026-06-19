import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Shield, RefreshCw, FlaskConical, RotateCcw, FileText,
  Zap, ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'Patch Management Services Pakistan — Automated OS & App Patching | Infraspine',
  description: 'Infraspine Patch Management: automated OS and application patching for Windows, Linux and macOS. 98% patch compliance rate, 72hr critical patch SLA, zero patch-related breaches. Serving Pakistan businesses.',
  alternates: { canonical: 'https://www.infraspine.com/services/managed-it-services/patch-management' },
  openGraph: {
    title: 'Patch Management Services Pakistan — Automated OS & App Patching | Infraspine',
    description: 'Automated patch management with 98% compliance rate, 72hr critical patch SLA and zero patch-related breaches. Covering Windows, Linux, macOS and third-party apps.',
    url: 'https://www.infraspine.com/services/managed-it-services/patch-management',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Patch Management',
  name: 'Infraspine Automated Patch Management',
  description: 'Automated OS and application patch management for Windows, Linux, and macOS environments with compliance reporting and emergency zero-day response.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/managed-it-services/patch-management',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '98%', label: 'Patch Compliance Rate', color: '#7C3AED' },
  { value: '72hr', label: 'Critical Patch SLA', color: '#DC2626' },
  { value: '0', label: 'Patch-Related Breaches', color: '#00C853' },
  { value: '100%', label: 'Endpoint Coverage', color: '#2563EB' },
]

const CAPABILITIES = [
  {
    icon: Shield,
    title: 'OS Patch Management (Windows/Linux/macOS)',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Systematic monthly patch cycles covering all major operating system platforms across your managed endpoint and server fleet. Windows Server and desktop patches are deployed through WSUS or third-party RMM with controlled scheduling to avoid disrupting business hours. Linux package updates are managed through automated scripts with pre-flight checks. macOS devices managed through MDM receive updates on the same coordinated schedule, ensuring your entire OS estate is consistently patched without manual intervention.',
    points: [
      'Windows 10/11 and Windows Server 2016/2019/2022 patching',
      'Ubuntu, CentOS, RHEL, and Debian Linux update management',
      'macOS endpoint patching via MDM integration',
      'Coordinated deployment scheduling outside business hours',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Third-Party Application Patching',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Operating system patches alone cover less than half the attack surface. Third-party applications — browsers, PDF readers, media players, development tools, productivity suites — are consistently among the most exploited software on managed endpoints. Our third-party patching catalogue covers over 500 common business applications, automatically detecting installed versions, identifying available updates, and deploying patches on the same controlled schedule as OS updates. Chrome, Firefox, Adobe Reader, 7-Zip, Zoom, and hundreds more are kept current.',
    points: [
      '500+ third-party applications in our patching catalogue',
      'Browsers, PDF tools, media players, and productivity apps',
      'Version detection and automatic update identification',
      'Deployed on coordinated schedule alongside OS patches',
    ],
  },
  {
    icon: FlaskConical,
    title: 'Patch Testing & Staging',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'Deploying patches directly to production without testing is how organisations end up with broken applications on Monday morning. Our patch workflow always includes a testing phase: patches are first applied to a staging group of representative endpoints and servers, monitored for 48–72 hours for application compatibility issues or performance impacts, and only then promoted to the full production fleet. This staged approach catches the relatively rare but very damaging patch-related breakage before it affects your entire organisation.',
    points: [
      'Dedicated staging group receives patches 48–72hrs before production',
      'Automated compatibility testing and application launch checks',
      'Manual sign-off for servers and critical production systems',
      'Clear promotion or hold decision process documented per patch cycle',
    ],
  },
  {
    icon: RotateCcw,
    title: 'Rollback & Recovery',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'When a patch does cause a problem — which is rare but happens — fast rollback capability is the difference between a minor inconvenience and a prolonged outage. Before every patch deployment, our process includes a pre-snapshot or checkpoint on virtualised systems and a verified backup confirmation on physical servers. This means that in the event of a patch-related regression, we can roll back to a known-good state within minutes rather than spending hours attempting manual repairs.',
    points: [
      'Pre-patch snapshots on all virtualised Windows and Linux VMs',
      'Backup verification before every major patching cycle',
      'Automated rollback triggers for detection of critical service failures',
      'Post-rollback root-cause documentation and vendor case escalation',
    ],
  },
  {
    icon: FileText,
    title: 'Compliance Reporting',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Patch compliance is not just an operational metric — it is a regulatory requirement for ISO 27001, PCI-DSS, and many other frameworks. Our monthly patch compliance reports provide per-device patch status, outstanding CVE exposure for unpatched vulnerabilities, days since last successful patch run, and exception justification for any device excluded from the standard patch schedule. These reports are formatted to satisfy auditor requirements and are retained for a minimum of 12 months.',
    points: [
      'Per-device patch compliance percentage in monthly reports',
      'CVE exposure report for outstanding unpatched vulnerabilities',
      'Exception register for excluded or exempt devices with justification',
      'Audit-ready reports retained for 12+ months for compliance frameworks',
    ],
  },
  {
    icon: Zap,
    title: 'Emergency Zero-Day Response',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'When a critical zero-day vulnerability is disclosed — such as a Log4Shell, PrintNightmare, or Exchange ProxyLogon — waiting for the next monthly patch cycle is not an option. Our emergency response process activates within hours of a critical CVE being published with a CVSS score of 9.0 or higher. We assess impact across your environment, apply available vendor patches within 72 hours, and implement compensating controls (firewall rules, service disablement) immediately where patches are not yet available.',
    points: [
      'CVSS 9.0+ vulnerabilities trigger emergency response protocol',
      'Environment impact assessment within 4 hours of CVE disclosure',
      'Emergency patch deployment within 72 hours of patch availability',
      'Compensating controls applied immediately where patches not yet available',
    ],
  },
]

const VENDORS = [
  'Microsoft WSUS', 'Ivanti Neurons for Patch', 'ManageEngine Patch Manager Plus',
  'NinjaRMM', 'ConnectWise Automate', 'Automox',
  'Atera', 'N-able N-central', 'Qualys VMDR',
]

const FAQS = [
  {
    question: 'Why is patch management so important for security?',
    answer: 'Unpatched software is the leading cause of successful cyberattacks. Studies consistently show that over 60% of data breaches exploit known vulnerabilities for which a patch was already available at the time of the attack. Attackers actively scan for systems running vulnerable software versions because exploitation is far easier than finding new zero-days. Systematic patch management eliminates this attack vector by ensuring known vulnerabilities are closed within days of patches being released, dramatically reducing your exposure to the most common attack methods.',
  },
  {
    question: 'Will patching cause downtime or disrupt our users?',
    answer: 'Properly managed patching causes minimal disruption. We schedule all patch deployments during agreed maintenance windows — typically weekday evenings or weekend mornings — so reboots and service restarts happen when users are not working. For critical business systems like domain controllers or SQL servers, we coordinate maintenance windows individually to avoid any service interruption. Our staging process also catches compatibility issues before production deployment, preventing the patch-related application breakages that give patching a bad reputation.',
  },
  {
    question: 'How do you handle patches for servers versus endpoints differently?',
    answer: 'Servers require more careful treatment than endpoints because a failed patch on a server can affect many users simultaneously. For servers, we always verify a current backup exists before patching, deploy to a staging server first where possible, schedule individual maintenance windows with client sign-off, and monitor the server closely for 24 hours post-patch. Endpoints are patched in deployment rings — a small pilot group first, then broader rollout — with automated health checks confirming successful application before the next ring is released.',
  },
  {
    question: 'What happens if a patch breaks an application?',
    answer: 'This is rare but does happen. Our response process is: (1) detect the breakage through automated health checks or user reports, (2) isolate the affected devices to prevent further rollout, (3) roll back using the pre-patch snapshot or backup taken before deployment, (4) document the incompatibility and create an exception for the problematic patch, (5) investigate the root cause — which often reveals a configuration issue or outdated application that needs separate remediation, and (6) raise a case with the software vendor if the patch is genuinely incompatible with your configuration.',
  },
  {
    question: 'Can you patch cloud servers and on-premise servers together?',
    answer: 'Yes. Our patch management platform handles both environments from a single console. Azure VMs and AWS EC2 instances are patched using the same agent-based approach as on-premise servers, with the same deployment ring methodology and compliance reporting. For Azure-native workloads, we also leverage Azure Update Manager where appropriate. On-premise and cloud patch compliance is reported together in the monthly report so you have a single, unified view of your entire estate&apos;s patch status.',
  },
  {
    question: 'How do you prove patch compliance to auditors?',
    answer: 'Our monthly compliance reports are specifically designed to satisfy auditor requirements for ISO 27001, Cyber Essentials, PCI-DSS, and similar frameworks. Each report includes the patch compliance percentage per device, a list of outstanding vulnerabilities with CVE references and CVSS scores, the date each patch was applied, and a signed exception register for any device not patched within the standard SLA with documented justification. We retain these reports for a minimum of 12 months and can produce them on demand for any audit engagement.',
  },
]

export default function PatchManagementPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Managed IT Services', href: '/services/managed-it-services' },
        { label: 'Patch Management' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#7C3AED,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#7C3AED' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#7C3AED' }}>Patch Management</span>
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Automated Patch Management —{' '}
              <span style={{ color: '#7C3AED' }}>Vulnerabilities Closed Before They&apos;re Exploited.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Over 60% of successful cyberattacks exploit vulnerabilities that already had a patch available. The gap between patch release and patch deployment is where attackers live. Infraspine&apos;s automated patch management service eliminates that gap — systematically patching every OS, every application, and every endpoint in your environment on a structured schedule, with full compliance reporting and emergency zero-day response when critical CVEs are published.
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
                style={{ background: '#7C3AED', color: '#fff' }}>
                Automate Patch Management <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Get a Compliance Audit
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
                Unpatched Systems Are the World&apos;s Favourite Attack Vector
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The Ponemon Institute reports that 57% of organisations that suffered a data breach in the past year were breached through a vulnerability for which a patch was available but not applied. The WannaCry ransomware attack — which cost organisations worldwide over $4 billion — exploited a Windows vulnerability for which Microsoft had released a patch two months earlier. EternalBlue, BlueKeep, Log4Shell: the most destructive attacks of the past decade were all preventable with timely patching.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The problem is that manual patching at scale is genuinely difficult. Every operating system has a different update mechanism. Every application patches differently. Testing patches before production deployment requires dedicated processes and a staging environment. And doing it all during maintenance windows without disrupting business operations requires coordination and tooling that most IT teams — especially lean ones — simply do not have the bandwidth to manage properly.
              </p>
              <p className="text-[15px] leading-relaxed mb-6" style={{ color: '#64748B' }}>
                Compliance requirements make this more pressing. ISO 27001, Cyber Essentials, PCI-DSS, and the SECP&apos;s IT security guidelines for financial institutions all mandate systematic patch management as a control. A compliance audit failure due to unpatched systems is not just an IT problem — it is a business risk and a potential regulatory sanction. Infraspine&apos;s patch management service provides the systematic process, tooling, and evidence you need to satisfy both security and compliance requirements.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#7C3AED', text: '60%+ of breaches exploit known vulnerabilities with available patches' },
                  { color: '#DC2626', text: 'Emergency zero-day response within 72hr of critical CVE publication' },
                  { color: '#00C853', text: 'Test-before-production workflow prevents patch-related outages' },
                  { color: '#2563EB', text: 'Audit-ready compliance reports for ISO 27001, PCI-DSS, Cyber Essentials' },
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
                Our Patch Deployment Workflow
              </p>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Patch Identification', desc: 'Vendor patches released, CVE scoring, impact assessment', color: '#7C3AED' },
                  { step: '02', title: 'Staging Deployment', desc: 'Deploy to pilot group, monitor 48–72hrs for issues', color: '#2563EB' },
                  { step: '03', title: 'Compatibility Validation', desc: 'Automated application tests, manual sign-off for servers', color: '#0891B2' },
                  { step: '04', title: 'Production Rollout', desc: 'Deployment rings, maintenance window scheduling', color: '#00C853' },
                  { step: '05', title: 'Post-Patch Monitoring', desc: 'Heightened monitoring for 24hrs, rollback ready', color: '#D97706' },
                  { step: '06', title: 'Compliance Reporting', desc: 'Per-device compliance report, exception register', color: '#DC2626' },
                ].map(p => (
                  <div key={p.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-[11px] font-black" style={{ background: `${p.color}15`, color: p.color }}>{p.step}</div>
                    <div>
                      <div className="text-[13px] font-bold mb-0.5" style={{ color: '#0A1628' }}>{p.title}</div>
                      <div className="text-[12px]" style={{ color: '#64748B' }}>{p.desc}</div>
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
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#7C3AED' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#7C3AED' }}>Patch Management Capabilities</span>
              <div className="h-px w-6" style={{ background: '#7C3AED' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Comprehensive Patch Coverage
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Every OS platform, every application category, with a tested workflow that prevents patch-related outages.
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
            Patch Management Tools We Deploy
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
        title="Patch Management Questions Answered"
        subtitle="Common questions about automated patch management from our clients." />

      <CTABanner
        heading="Automate Your Patch Management Today"
        subheading="Close the vulnerability gap before attackers find it. Our automated patch management keeps every device in your environment current and compliant."
        primaryCTA={{ label: 'Get Started', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
