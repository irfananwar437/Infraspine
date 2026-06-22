import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/ui/Breadcrumb'
import {
  Database, Shield, Network, Cloud, Mail, Settings,
  ChevronRight, ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'Data Loss Prevention Pakistan | DLP Solutions | Infraspine',
  description: 'Infraspine delivers enterprise DLP solutions in Pakistan — data discovery, endpoint DLP, network controls, cloud data protection, and email encryption. GDPR-compliant design with 99.7% accuracy.',
  alternates: {
    canonical: 'https://www.infraspine.com/services/cyber-security/data-loss-prevention',
  },
  openGraph: {
    title: 'Data Loss Prevention Pakistan | Infraspine',
    description: 'Identify, monitor, and protect sensitive data from accidental or malicious exfiltration across endpoints, networks, and cloud.',
    url: 'https://www.infraspine.com/services/cyber-security/data-loss-prevention',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Data Loss Prevention Services',
  provider: { '@type': 'Organization', name: 'Infraspine', url: 'https://www.infraspine.com' },
  areaServed: 'Pakistan',
  description: 'Identify, monitor, and protect sensitive data from accidental or malicious exfiltration across endpoints, networks, and cloud environments.',
  url: 'https://www.infraspine.com/services/cyber-security/data-loss-prevention',
}

const STATS = [
  { value: '100%', label: 'Data Visibility', color: '#2563EB' },
  { value: '99.7%', label: 'DLP Accuracy', color: '#2563EB' },
  { value: 'Cloud', label: 'Cloud & On-Prem Coverage', color: '#2563EB' },
  { value: 'GDPR', label: 'GDPR Compliant Design', color: '#2563EB' },
]

const CAPABILITIES = [
  {
    icon: Database,
    title: 'Data Discovery & Classification',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Before you can protect your sensitive data, you must know where it lives. Infraspine\'s data discovery and classification service scans every corner of your digital estate — file servers, SharePoint, OneDrive, Exchange, databases, and cloud storage — to locate sensitive data including personally identifiable information (PII), financial records, payment card data (PCI), health information (PHI), intellectual property, and contractual documents. Classification is performed using a combination of content inspection (regex patterns, keyword matching, exact data matching), context analysis (file owner, location, sharing permissions), and machine learning classification models trained on your data types. Once discovered, data is tagged with sensitivity labels (Public, Internal, Confidential, Restricted) that travel with the document and can drive downstream DLP policy enforcement. Discovery scans are repeated on a defined schedule to catch new data accumulations before they become a liability.',
    points: ['Full estate scanning including cloud storage', 'Regex, keyword, and exact data matching', 'Automated sensitivity labelling', 'Scheduled re-discovery for new data'],
  },
  {
    icon: Shield,
    title: 'Endpoint DLP Policies',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Endpoints are the most common point of data loss — whether through accidental uploads, removable media, personal email, or deliberate insider exfiltration. Infraspine deploys endpoint DLP agents on all managed Windows, macOS, and Linux endpoints to monitor and control how sensitive data is handled. Policies can block or alert on data being copied to USB drives, uploaded to unauthorised cloud storage, pasted into personal webmail, printed, or screenshotted. Endpoint DLP operates in both connected and offline modes, ensuring protection persists even when a laptop is off the corporate network. We implement graduated response policies that start with user notification and education for first-time policy breaches, escalating to automatic blocking and management notification for repeated or high-severity violations. All policy enforcement events are logged with full context — user identity, data content sampled, action taken, and timestamp — for audit and investigation purposes.',
    points: ['USB and removable media control', 'Personal cloud upload blocking', 'Offline endpoint protection', 'Graduated policy enforcement with user education'],
  },
  {
    icon: Network,
    title: 'Network DLP Controls',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Network DLP provides a complementary layer of protection that monitors data in transit across your network perimeter — catching sensitive data attempting to leave through web traffic, FTP, SMTP, and other network protocols. Deployed inline at network egress points, network DLP can inspect encrypted HTTPS traffic through SSL/TLS decryption and analyse content against configured data patterns. Policies are configured to detect and block the transmission of defined data types — credit card numbers, national identity numbers, confidential document patterns — over any network protocol. Network DLP is particularly effective at catching exfiltration attempts that bypass endpoint controls, such as from servers or devices without endpoint agents. All network DLP events are aggregated into a central console with full packet capture capability for investigation. Integration with your SIEM platform provides correlation between network DLP events and other security telemetry for comprehensive insider threat detection.',
    points: ['SSL/TLS traffic inspection', 'Protocol-agnostic data detection', 'Inline blocking capability', 'SIEM integration for insider threat correlation'],
  },
  {
    icon: Cloud,
    title: 'Cloud Data Protection',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'As organisations in Pakistan accelerate cloud adoption across Microsoft 365, Google Workspace, AWS S3, and SaaS applications, cloud data protection has become a critical requirement. Infraspine\'s cloud DLP capabilities extend your data protection policies into cloud environments using native DLP integrations in Microsoft Purview, Google Workspace DLP, and Cloud Access Security Broker (CASB) technology for third-party SaaS applications. We configure policies to monitor data shared from SharePoint and OneDrive — detecting oversharing, guest access to confidential files, and external downloads of sensitive content. For AWS and Azure, we audit storage bucket permissions, identify publicly accessible data, and configure automated remediation for policy violations. CASB provides visibility into shadow IT — unsanctioned cloud applications used by employees — and enables policy enforcement across these unmanaged channels. Cloud DLP policies are unified with your on-premises policies to provide a single consistent data protection framework.',
    points: ['Microsoft 365 and Google Workspace DLP', 'CASB shadow IT visibility', 'S3 bucket and Azure storage auditing', 'Unified on-prem and cloud policy framework'],
  },
  {
    icon: Mail,
    title: 'Email DLP & Encryption',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Email remains the highest-volume channel for both accidental and deliberate data loss. Infraspine\'s email DLP service integrates with Microsoft Exchange, Microsoft 365, and Google Workspace to inspect outbound and internal email for sensitive data before delivery. Policies detect and block or encrypt emails containing credit card numbers, PII, confidential financial data, and marked confidential documents. When a policy match is detected, the system can block delivery and notify the sender, route the email for manager approval before sending, or automatically apply email encryption so only the intended recipient can read the content. Inbound email inspection protects against data received from external parties being stored or forwarded insecurely. We configure encryption policies that are transparent to end users — recipients receive an encrypted email with simple one-click access instructions that do not require them to install any software. All email DLP events are logged and reportable for compliance evidence.',
    points: ['Outbound email content inspection', 'Automatic email encryption on policy match', 'Manager approval workflow for sensitive sends', 'Inbound sensitive data handling controls'],
  },
  {
    icon: Settings,
    title: 'DLP Policy Management & Tuning',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'A DLP deployment is only as effective as the policies that drive it — and poorly tuned policies generate alert fatigue or, worse, block legitimate business processes. Infraspine provides ongoing DLP policy management and tuning as a managed service, ensuring your DLP policies remain effective, accurate, and aligned with your evolving business requirements. We begin every engagement with a policy workshop to understand your data types, business processes, and compliance obligations, using this to build policies with high precision from day one. Post-deployment, we analyse policy hit rates, false positive rates, and business impact weekly — adjusting thresholds, refining patterns, and adding exceptions for legitimate workflows as the environment matures. Quarterly business reviews cover policy performance metrics, new data risk discoveries, and recommendations for policy expansion. We maintain a policy change log and change management process to ensure all modifications are reviewed, approved, and documented.',
    points: ['Policy workshop and custom rule design', 'Weekly false positive analysis and tuning', 'Change management and policy documentation', 'Quarterly business review and roadmap'],
  },
]

const FAQS = [
  {
    question: 'What is Data Loss Prevention?',
    answer: 'Data Loss Prevention (DLP) is a set of tools, processes, and policies that identify, monitor, and protect sensitive data from being accidentally or deliberately disclosed to unauthorised parties. DLP works by inspecting data content against defined patterns — credit card numbers, national ID numbers, personal data, confidential document markers — and enforcing policies that block, encrypt, or alert on data that violates those policies. DLP covers data at rest (stored on servers and endpoints), data in motion (transmitted over email, web, or network protocols), and data in use (opened and edited on endpoint devices).',
  },
  {
    question: 'What types of sensitive data can DLP protect?',
    answer: 'DLP can protect any data type you define. Common categories include personally identifiable information (PII) such as CNIC numbers, names, and addresses; financial data such as credit card numbers, bank account details, and financial statements; health information (PHI); intellectual property such as source code, design files, and contracts; credentials and authentication data; and any data classified as Confidential or Restricted by your internal data classification policy. We work with you during policy design to identify the specific data types relevant to your business and compliance obligations.',
  },
  {
    question: 'Does DLP work in cloud environments?',
    answer: 'Yes. Modern DLP solutions extend to cloud environments through native cloud service integrations and Cloud Access Security Broker (CASB) technology. We configure DLP policies within Microsoft Purview (for Microsoft 365), Google Workspace DLP, and CASB solutions that provide coverage across third-party SaaS applications. For IaaS environments like AWS and Azure, we audit storage configurations, detect publicly accessible sensitive data, and implement automated remediation. The goal is a unified DLP policy framework where the same rules apply regardless of where data is stored or how it is being accessed.',
  },
  {
    question: 'Will DLP slow down our systems?',
    answer: 'With proper sizing and tuning, the performance impact of DLP on endpoints and networks is minimal and imperceptible to end users. Endpoint DLP agents are designed for lightweight operation — they use local pattern matching rather than sending every file to a cloud service, minimising CPU and memory overhead. Network DLP appliances are sized based on your traffic volume to ensure inline inspection does not introduce latency. We conduct performance baseline measurements before deployment and confirm no degradation post-deployment. For high-volume environments, we may recommend deploying network DLP in monitoring mode initially to assess performance before enabling inline blocking.',
  },
  {
    question: 'How do you reduce false positive alerts?',
    answer: 'False positives are the primary operational challenge with DLP. We address this through several approaches: precise policy design using exact data matching (hashed employee IDs, credit card numbers) rather than broad keyword lists; contextual policies that consider data location and user role as well as content; graduated enforcement that alerts on first occurrence before blocking, allowing users to self-correct; exception lists for known legitimate business processes; and ongoing weekly tuning based on policy hit analysis. Our target is a false positive rate below 0.3% of policy events, which keeps analyst workload manageable while ensuring genuine policy violations are investigated.',
  },
]

export default function DataLossPreventionPage() {
  const accent = '#2563EB'
  const heroBg = '#00082a'
  const statBg = '#EFF6FF'
  const borderColor = '#BFDBFE'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />

        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Cybersecurity', href: '/services/cyber-security' },
          { label: 'Data Loss Prevention' },
        ]} bg={heroBg} />

        {/* Hero */}
        <section style={{ background: heroBg }} className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '48px 48px' }}
          />
          <div
            className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.08]"
            style={{ background: `radial-gradient(circle,${accent},transparent 70%)` }}
          />
          <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 py-16 sm:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="h-px w-6" style={{ background: accent }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: accent }}>Cybersecurity — Data Loss Prevention</span>
              </div>
              <h1 className="text-[30px] sm:text-[46px] lg:text-[52px] font-black leading-[1.06] tracking-tight text-white mb-5">
                Data Loss Prevention<br />
                <span style={{ color: accent }}>DLP Solutions in Pakistan</span>
              </h1>
              <p className="text-[15px] sm:text-[17px] leading-relaxed mb-5 max-w-2xl" style={{ color: '#94A3B8' }}>
                Identify, monitor, and protect sensitive data from accidental or malicious exfiltration across your endpoints, network, and cloud environments. GDPR-compliant design with 99.7% detection accuracy and full visibility across your entire data estate.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                  style={{ background: accent, color: '#fff' }}
                >
                  Get DLP Assessment <ArrowRight size={15} />
                </Link>
                <Link
                  href="/services?tab=cyber"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                  style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}
                >
                  All Cybersecurity Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E8F0', borderTop: '1px solid #E2E8F0' }}>
          <div className="max-w-6xl mx-auto px-5 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center py-8 px-4"
                  style={{ borderRight: i < STATS.length - 1 ? '1px solid #E2E8F0' : 'none' }}
                >
                  <span className="text-[28px] sm:text-[34px] font-black leading-none mb-1" style={{ color: s.color }}>{s.value}</span>
                  <span className="text-[12px] font-medium text-center" style={{ color: '#64748B' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
          <div className="max-w-6xl mx-auto px-5 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-6" style={{ background: accent }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: accent }}>What We Deliver</span>
                <div className="h-px w-6" style={{ background: accent }} />
              </div>
              <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
                Data Loss Prevention Capabilities
              </h2>
              <p className="text-[14px] max-w-xl mx-auto" style={{ color: '#64748B' }}>
                Six DLP disciplines covering every channel through which sensitive data can be lost.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CAPABILITIES.map((cap) => {
                const Icon = cap.icon
                return (
                  <div
                    key={cap.title}
                    className="flex flex-col rounded-2xl overflow-hidden border transition-all hover:-translate-y-1 hover:shadow-lg"
                    style={{ background: '#fff', borderColor }}
                  >
                    <div className="p-6 border-b" style={{ background: cap.bg, borderColor }}>
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: '#fff', border: `1.5px solid ${borderColor}` }}
                      >
                        <Icon size={20} style={{ color: cap.color }} strokeWidth={1.7} />
                      </div>
                      <h3 className="text-[16px] font-black mb-1" style={{ color: '#0A1628' }}>{cap.title}</h3>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-[13px] leading-relaxed mb-4" style={{ color: '#475569' }}>{cap.desc}</p>
                      <ul className="space-y-2 mt-auto">
                        {cap.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2 text-[12.5px]" style={{ color: '#64748B' }}>
                            <CheckCircle size={13} style={{ color: cap.color, flexShrink: 0, marginTop: 2 }} />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20" style={{ background: '#fff' }}>
          <div className="max-w-4xl mx-auto px-5 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-6" style={{ background: accent }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: accent }}>FAQs</span>
                <div className="h-px w-6" style={{ background: accent }} />
              </div>
              <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
                Frequently Asked Questions
              </h2>
              <p className="text-[14px]" style={{ color: '#64748B' }}>
                Common questions about data loss prevention services.
              </p>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl overflow-hidden border bg-white"
                  style={{ borderColor: '#E2E8F0' }}
                >
                  <summary
                    className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none"
                    style={{ color: '#0A1628' }}
                  >
                    <span className="text-[14px] font-bold">{faq.question}</span>
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: statBg, border: `1px solid ${borderColor}` }}
                    >
                      <ChevronRight size={14} style={{ color: accent }} />
                    </div>
                  </summary>
                  <div className="px-6 pb-5">
                    <div className="h-px mb-4" style={{ background: '#F1F5F9' }} />
                    <p className="text-[13.5px] leading-relaxed" style={{ color: '#475569' }}>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-14 sm:py-20" style={{ background: heroBg }}>
          <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] mb-6"
              style={{ background: 'rgba(37,99,235,0.15)', color: accent, border: `1px solid rgba(37,99,235,0.3)` }}
            >
              <Database size={12} />
              Stop Data Loss Before It Happens
            </div>
            <h2 className="text-[24px] sm:text-[36px] font-black text-white mb-4">
              Protect Your Sensitive Data<br />
              <span style={{ color: accent }}>Across Every Channel</span>
            </h2>
            <p className="text-[15px] leading-relaxed mb-4 max-w-xl mx-auto" style={{ color: '#94A3B8' }}>
              Infraspine designs and deploys enterprise DLP solutions that give you full visibility and control over sensitive data — from endpoints to email to cloud — with minimal false positives and zero business disruption.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: accent, color: '#fff' }}
              >
                Start a DLP Project <ArrowRight size={15} />
              </Link>
              <Link
                href="/services?tab=cyber"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}
              >
                All Cybersecurity Services <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
