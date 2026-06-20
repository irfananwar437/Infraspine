import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Shield, AlertTriangle, Zap, Globe, BarChart2,
  FileText, ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'SOC as a Service Pakistan — 24/7 Security Operations Centre | Infraspine',
  description: 'Infraspine SOC as a Service: 24/7/365 threat detection and response, SIEM management, <30min threat response, 1M+ events analysed daily. Enterprise-grade SOC for Pakistan businesses without the enterprise price.',
  alternates: { canonical: 'https://www.infraspine.com/services/cyber-security/soc' },
  openGraph: {
    title: 'SOC as a Service Pakistan — 24/7 Security Operations Centre | Infraspine',
    description: '24/7 SOC as a Service with SIEM deployment, threat detection, incident response and compliance reporting. Serving businesses in Pakistan.',
    url: 'https://www.infraspine.com/services/cyber-security/soc',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'SOC as a Service',
  name: 'Infraspine SOC as a Service',
  description: '24/7 Security Operations Centre providing SIEM management, threat detection and analysis, incident response, threat intelligence, and compliance reporting for businesses in Pakistan.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/cyber-security/soc',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '24/7/365', label: 'Security Monitoring', color: '#DC2626' },
  { value: '<30min', label: 'Threat Response', color: '#00C853' },
  { value: '1M+', label: 'Events/Day Analysed', color: '#7C3AED' },
  { value: '99.9%', label: 'Threat Detection Rate', color: '#2563EB' },
]

const CAPABILITIES = [
  {
    icon: BarChart2,
    title: 'SIEM Deployment & Management',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'A Security Information and Event Management platform is the brain of any SOC — it collects logs from every system in your environment, correlates events across sources, and surfaces the patterns that indicate malicious activity. We deploy, configure, and manage your SIEM platform, building and tuning detection rules specific to your environment and threat profile. Log sources are onboarded systematically to ensure complete coverage across servers, network devices, endpoints, cloud workloads, and applications.',
    points: [
      'SIEM platform deployment and initial configuration',
      'Log source onboarding across all environment types',
      'Custom detection rule development for your threat profile',
      'Ongoing rule tuning to reduce false positives over time',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Threat Detection & Analysis',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Detection is where most security tools fail — they generate thousands of alerts per day but very few of them represent genuine threats. Our SOC analysts apply a combination of SIEM correlation rules, behavioural analytics, and human expertise to separate real threats from noise. Every alert that cannot be immediately dismissed as a false positive receives analyst investigation. We look for indicators of compromise, lateral movement patterns, data exfiltration behaviour, and persistence mechanisms that automated tools miss.',
    points: [
      'MITRE ATT&CK framework-aligned detection logic',
      'Behavioural analytics for insider threat and anomaly detection',
      'Multi-stage attack correlation (kill chain analysis)',
      'Analyst-led investigation for all medium and high-severity alerts',
    ],
  },
  {
    icon: Zap,
    title: 'Incident Response & Containment',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Detection without response is just an expensive alarm that no one answers. When our SOC confirms a genuine security incident, we do not just send you an email and wish you luck — we execute a defined incident response plan. Immediate containment actions such as isolating compromised endpoints, blocking attacker IP addresses, disabling compromised accounts, and revoking active sessions can be executed within our agreed response authority. For incidents beyond remote containment, we escalate to your team with full context and recommended on-premise actions.',
    points: [
      '<30-minute confirmed threat response with containment actions',
      'Endpoint isolation, account lockout, and network block capabilities',
      'Incident response playbooks for common attack scenarios',
      'Post-incident report with timeline, impact assessment, and recommendations',
    ],
  },
  {
    icon: Globe,
    title: 'Threat Intelligence Integration',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Our SOC integrates commercial and open-source threat intelligence feeds to enrich every security event with context about known malicious infrastructure, attack techniques, and threat actor behaviours. When a connection to a known malicious IP is detected or a file hash matches a known malware sample, we know instantly — without waiting for analysts to manually check lookups. Threat intelligence also informs proactive hunting, allowing us to search your environment for indicators of campaigns currently targeting your industry.',
    points: [
      'Commercial threat intelligence feed integration',
      'IP, domain, and file hash reputation enrichment in real time',
      'Industry-specific threat intelligence for your sector',
      'Proactive threat hunting based on current campaign indicators',
    ],
  },
  {
    icon: Shield,
    title: 'Vulnerability Management',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'Continuous vulnerability management keeps our SOC informed of the attack surface your organisation presents to potential adversaries. We run authenticated vulnerability scans against all in-scope assets on a regular schedule, prioritise findings using CVSS scores and real-world exploitability data, and track remediation through to closure. When a new critical vulnerability is disclosed, we immediately assess whether affected software is present in your environment and advise on priority patching or compensating controls.',
    points: [
      'Scheduled authenticated vulnerability scanning across all assets',
      'CVSS scoring with real-world exploitability prioritisation',
      'Remediation tracking with SLA from finding to closure',
      'Zero-day impact assessment within hours of CVE disclosure',
    ],
  },
  {
    icon: FileText,
    title: 'Compliance Reporting (ISO 27001, PCI-DSS)',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'SOC operations generate significant compliance evidence value. Our monthly compliance reports map SOC activities and findings to the control requirements of ISO 27001, PCI-DSS, HIPAA, and other relevant frameworks. Log retention is managed to meet audit requirements (12+ months by default, 24+ months available). Incident response documentation is structured to satisfy regulatory incident reporting requirements. When you face an audit, our SOC reporting package significantly reduces the evidence gathering burden on your internal team.',
    points: [
      'Monthly compliance evidence reports mapped to ISO 27001 and PCI-DSS',
      '12+ months of log retention as standard (24+ months available)',
      'Incident response records formatted for regulatory reporting',
      'Audit support and evidence package preparation on request',
    ],
  },
]

const VENDORS = [
  'Microsoft Sentinel', 'Splunk Enterprise Security', 'IBM QRadar',
  'Wazuh', 'Elastic SIEM', 'CrowdStrike Falcon',
  'SentinelOne', 'Darktrace', 'Cortex XSOAR',
]

const FAQS = [
  {
    question: 'What is SOC as a Service and how is it different from a traditional SOC?',
    answer: 'A traditional Security Operations Centre requires significant capital investment: SIEM software licences, security tooling, dedicated infrastructure, and a team of security analysts working in shifts 24/7. For most businesses, building this in-house costs over $1 million USD annually when you account for staffing alone. SOC as a Service provides the same capability through a managed service model — you get 24/7 security monitoring, expert analysts, and enterprise-grade tooling without the infrastructure investment or hiring challenge. Our SOC monitors multiple clients simultaneously, allowing us to spread the cost of world-class capabilities across an entire client base.',
  },
  {
    question: 'How long does it typically take attackers to be detected without a SOC?',
    answer: 'According to IBM&apos;s Cost of a Data Breach Report, the average time to identify a breach is 287 days — nearly ten months. During that time, attackers are typically moving laterally through the network, escalating privileges, identifying valuable data, and establishing persistence. The average time to contain a breach once identified is an additional 80 days. Our SOC monitoring changes this fundamentally: we aim to detect and contain active threats within hours, not months, dramatically reducing the blast radius of any successful intrusion.',
  },
  {
    question: 'What log sources do you need access to in order to monitor our environment?',
    answer: 'Effective SOC monitoring requires logs from multiple source types: endpoint logs (Windows Event Logs, Sysmon, EDR telemetry), network device logs (firewall logs, switch logs, DNS query logs), authentication logs (Active Directory, Azure AD, VPN), server application logs (web servers, databases, email gateways), and cloud platform logs (Azure Activity Log, AWS CloudTrail). We provide a detailed log source requirements document during onboarding and can work with whatever log sources your environment currently provides, expanding coverage systematically over time.',
  },
  {
    question: 'What is the difference between a SIEM alert and a confirmed security incident?',
    answer: 'A SIEM alert is any event or correlation that matches a detection rule. The majority of raw SIEM alerts are false positives — legitimate activity that superficially resembles a suspicious pattern. Our SOC analysts triage every alert, applying context, threat intelligence enrichment, and investigation to determine whether it represents genuine malicious activity. Only alerts that our analysts confirm as genuine threats are escalated as security incidents requiring response. This analysis layer is what separates our service from simply forwarding raw SIEM alerts — you receive confirmed, actionable security incidents.',
  },
  {
    question: 'Can you respond to incidents on our behalf or do we need our own security team?',
    answer: 'We can execute a defined set of containment actions on your behalf under agreed response authority — this typically includes isolating infected endpoints, blocking specific IP addresses or domains at the firewall, disabling compromised user accounts, and revoking active authentication tokens. For actions that require physical access or fall outside our agreed scope, we provide detailed incident response guidance and work alongside your team in a war-room model. Clients without an in-house security team can also retain us for full incident response support as a separate engagement.',
  },
  {
    question: 'Does our business need a SOC if we already have a firewall and antivirus?',
    answer: 'A firewall and antivirus are necessary baseline controls, but they are not sufficient for detecting sophisticated attacks. Firewalls inspect network traffic at the perimeter but do not detect lateral movement inside the network or attacks that arrive through legitimate channels (phishing, compromised credentials, supply chain). Antivirus catches known malware signatures but misses fileless attacks, living-off-the-land techniques, and zero-day malware. A SOC monitors what happens after an attacker gets past these controls — which, for a sufficiently motivated attacker, they will.',
  },
]

export default function SOCPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Cyber Security', href: '/services/cyber-security' },
        { label: 'SOC as a Service' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#DC2626,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-10 sm:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#DC2626' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#DC2626' }}>SOC as a Service</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              SOC as a Service —{' '}
              <span style={{ color: '#DC2626' }}>24/7 Threat Detection and Response.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              The average attacker dwells inside a network for 287 days before being detected. By then, the damage is done. Infraspine&apos;s SOC as a Service delivers enterprise-grade 24/7 security monitoring, threat detection, and incident response without the $1M+ annual cost of building an internal Security Operations Centre. Our analysts watch your environment around the clock, confirm real threats from SIEM noise, and contain incidents before they become breaches.
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
                style={{ background: '#DC2626', color: '#fff' }}>
                Start SOC Monitoring <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Get a Security Assessment
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
                <div className="h-px w-6" style={{ background: '#DC2626' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#DC2626' }}>The Business Case</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Why Most Businesses Cannot Afford to Go Without a SOC
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Building an internal SOC to the standard required to detect modern threats requires a minimum team of 6–8 security analysts (to cover 24/7 shifts), a SIEM platform costing $100,000–$500,000 per year in licensing, threat intelligence subscriptions, EDR tooling, and a senior security architect to design and maintain the detection logic. The total annual cost for a functional internal SOC exceeds $1 million USD — which puts genuine 24/7 security monitoring out of reach for the vast majority of businesses.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The threat landscape in 2024 makes this gap dangerous. Ransomware attacks have increased 75% year-on-year. Business email compromise losses exceed $2.7 billion annually. State-sponsored threat actors now target mid-market businesses as supply chain entry points to larger targets. And the average breach cost in Pakistan&apos;s financial and manufacturing sectors has risen significantly as organisations become more digitally dependent.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                SOC as a Service changes the economics completely. By operating a shared SOC platform monitored by a team of dedicated security analysts, we deliver enterprise-grade detection and response capability at a cost accessible to businesses of all sizes. You get the analysts, the tooling, the threat intelligence, and the 24/7 coverage — without the hiring challenge, infrastructure cost, or operational overhead of building it yourself.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#DC2626', text: 'Enterprise SOC capability without enterprise-level cost' },
                  { color: '#7C3AED', text: 'Average breach detection time: 287 days → hours with SOC' },
                  { color: '#00C853', text: 'Confirmed threat incidents only — no alert flood to manage' },
                  { color: '#2563EB', text: 'Compliance evidence generation built into every engagement' },
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
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>Build vs Buy SOC Comparison</p>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2 text-[10px] font-bold uppercase tracking-wider pb-1 border-b" style={{ color: '#94A3B8', borderColor: '#E2E8F0' }}>
                  <div></div><div>Internal SOC</div><div>Infraspine SOC</div>
                </div>
                {[
                  { label: 'Annual Cost', internal: '$1M+', managed: 'Fraction of cost', color: '#DC2626' },
                  { label: 'Time to Operational', internal: '12–18 months', managed: '2–4 weeks', color: '#00C853' },
                  { label: 'Analyst Coverage', internal: 'Shift gaps likely', managed: '24/7/365 guaranteed', color: '#00C853' },
                  { label: 'Threat Intelligence', internal: 'Single feed', managed: 'Multi-source integrated', color: '#00C853' },
                  { label: 'Technology Stack', internal: '1–2 platforms', managed: 'Best-of-breed portfolio', color: '#00C853' },
                  { label: 'Staff Turnover Risk', internal: 'High', managed: 'Not your problem', color: '#00C853' },
                ].map(p => (
                  <div key={p.label} className="grid grid-cols-3 gap-2 py-2 border-b last:border-0 text-[12px]" style={{ borderColor: '#E2E8F0' }}>
                    <div className="font-semibold" style={{ color: '#0A1628' }}>{p.label}</div>
                    <div style={{ color: '#DC2626' }}>{p.internal}</div>
                    <div className="font-semibold" style={{ color: '#00C853' }}>{p.managed}</div>
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
              <div className="h-px w-6" style={{ background: '#DC2626' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#DC2626' }}>SOC Capabilities</span>
              <div className="h-px w-6" style={{ background: '#DC2626' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Core SOC Service Areas
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Comprehensive security operations from SIEM deployment through threat intelligence integration to compliance reporting.
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
            Security Platforms &amp; Tools in Our SOC Stack
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

      <FAQAccordion faqs={FAQS} accent="#DC2626"
        title="SOC as a Service Questions Answered"
        subtitle="Common questions from organisations evaluating managed security operations." />

      <CTABanner
        heading="Start 24/7 SOC Monitoring Today"
        subheading="Do not wait for a breach to find out your detection capability is insufficient. Get 24/7 expert eyes on your environment from day one."
        primaryCTA={{ label: 'Get Started', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
