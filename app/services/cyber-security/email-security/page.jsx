import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  ShieldAlert, Filter, Zap, Lock, Settings, Archive,
  ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'Email Security & Anti-Phishing Services Pakistan — Infraspine',
  description: 'Infraspine protects Pakistani organisations from phishing, BEC fraud, ransomware, and spam with enterprise email security — ATP, DMARC/DKIM/SPF, email encryption, archiving, and 99.9% spam catch rate.',
  alternates: { canonical: 'https://www.infraspine.com/services/cyber-security/email-security' },
  openGraph: {
    title: 'Email Security & Anti-Phishing Services Pakistan — Infraspine',
    description: 'Stop phishing, BEC fraud, and email-borne ransomware with Infraspine\'s managed email security — Mimecast, Proofpoint, Microsoft Defender for O365, DMARC implementation, and email archiving.',
    url: 'https://www.infraspine.com/services/cyber-security/email-security',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Email Security and Anti-Phishing',
  name: 'Infraspine Email Security & Anti-Phishing',
  description: 'Managed email security services covering anti-phishing, BEC protection, spam filtering, advanced threat protection, email encryption, DMARC/DKIM/SPF implementation, and email archiving for organisations across Pakistan.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/cyber-security/email-security',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '91%', label: 'Of Attacks Start With Email', color: '#DC2626' },
  { value: '< 1 sec', label: 'Scan Per Email', color: '#00C853' },
  { value: '99.9%', label: 'Spam Catch Rate', color: '#7C3AED' },
  { value: 'BEC', label: 'Fraud Prevented', color: '#2563EB' },
]

const CAPABILITIES = [
  {
    icon: ShieldAlert,
    title: 'Anti-Phishing & BEC Protection',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Phishing and Business Email Compromise (BEC) are responsible for the majority of financial losses from cybercrime globally — and both target the email inbox directly. Modern phishing attacks are not the obvious spelling-error emails of years past; they are precisely crafted, contextually relevant messages that impersonate known contacts, suppliers, and executives, often arriving from legitimately compromised accounts. BEC attacks instruct employees to make fraudulent wire transfers or purchase gift cards on behalf of a spoofed CEO or CFO. Infraspine deploys AI-powered email security platforms that analyse sender behaviour, domain reputation, header anomalies, link destinations, and attachment content to intercept these attacks before they reach the inbox, protecting your staff and your finances.',
    points: [
      'AI-powered impersonation and display-name spoofing detection',
      'Executive impersonation and CEO fraud (BEC) interception',
      'Real-time link analysis and URL rewriting at click time',
      'Lookalike domain detection and sender reputation scoring',
    ],
  },
  {
    icon: Filter,
    title: 'Email Filtering & Spam Prevention',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Spam is more than an annoyance — high volumes of unwanted email reduce staff productivity, clog mail infrastructure, and mask the malicious messages that genuinely matter. An effective spam filtering service should deliver a 99.9% catch rate while keeping false positives low enough that legitimate email is never lost or delayed. Infraspine manages enterprise-grade email filtering platforms that combine IP reputation blacklists, domain authentication checks, content analysis, and machine learning trained on billions of messages to accurately separate legitimate email from spam, graymail, newsletters, and outright malicious content. Filtering policies are tuned per organisation based on your industry and communication patterns to minimise false positives.',
    points: [
      '99.9% spam catch rate with minimal false positives',
      'IP reputation, domain authentication, and content-layer filtering',
      'Graymail and bulk email management with user-controlled quarantine',
      'Policy tuning per department and communication pattern',
    ],
  },
  {
    icon: Zap,
    title: 'Advanced Threat Protection (ATP)',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Standard email filtering catches known-bad content — spam, known malware hashes, blacklisted senders. Advanced Threat Protection (ATP) goes further, analysing email content and attachments for behaviour and intent rather than relying solely on known signatures. Every attachment is detonated in a sandboxed virtual environment before delivery, observing its behaviour to detect ransomware, trojans, and zero-day exploits that have never been seen before. Every URL in every email is followed and rendered at scan time to detect phishing pages, malicious redirects, and credential harvesting sites. ATP is the control that catches the threats specifically designed to evade traditional filtering — the ones responsible for the most significant breaches.',
    points: [
      'Sandbox detonation of all email attachments before delivery',
      'Zero-day malware detection through behavioural analysis',
      'URL following and rendering to detect phishing pages at scan time',
      'Post-delivery remediation — automated removal of late-flagged emails',
    ],
  },
  {
    icon: Lock,
    title: 'Email Encryption',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Email is inherently insecure in transit — without encryption, messages pass through multiple servers and networks where they can be intercepted and read. For organisations that routinely send sensitive information via email — contracts, financial data, medical records, legal correspondence, or personally identifiable information — email encryption is not optional. It is required under GDPR, HIPAA, and many sector-specific regulations. Infraspine implements both opportunistic TLS (encrypting email in transit between mail servers that support it) and policy-based end-to-end encryption for emails containing sensitive content identified by data loss prevention rules. Recipients without encryption capability receive a secure portal link to access the message, requiring no software installation on their end.',
    points: [
      'Opportunistic TLS enforcement for server-to-server email transit',
      'Policy-based end-to-end encryption triggered by content rules',
      'Secure recipient portal for non-encryption-capable recipients',
      'Data loss prevention integration to auto-encrypt sensitive content',
    ],
  },
  {
    icon: Settings,
    title: 'DMARC / DKIM / SPF Implementation',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'SPF, DKIM, and DMARC are the three foundational email authentication standards that prevent attackers from sending email that appears to come from your domain — protecting both your customers and your brand reputation. SPF specifies which mail servers are authorised to send email for your domain. DKIM adds a cryptographic signature to outgoing email that receiving servers can verify. DMARC ties SPF and DKIM together, specifying what receiving servers should do with messages that fail authentication (quarantine or reject), and delivers reports back to you showing who is sending email using your domain. Infraspine implements all three standards correctly, manages the ongoing tuning required as your email infrastructure evolves, and monitors DMARC aggregate reports to catch unauthorised use of your domain.',
    points: [
      'SPF record creation and authorised sender management',
      'DKIM signing configuration across all sending systems',
      'DMARC policy implementation from monitoring to enforcement (p=reject)',
      'Ongoing DMARC aggregate report analysis and policy tuning',
    ],
  },
  {
    icon: Archive,
    title: 'Email Archiving & Compliance',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'Email is a business record — and in regulated sectors, organisations are required to retain email communications for defined periods, produce them on demand for legal discovery, and demonstrate that archived email cannot be altered or deleted. Standard mailbox retention in Microsoft 365 or Google Workspace is not sufficient for compliance: it is under the control of administrators who can delete messages, lacks the immutable audit trail required for legal discovery, and provides no independent backup if a ransomware attack encrypts or deletes mailbox data. Infraspine deploys dedicated email archiving platforms that capture every inbound, outbound, and internal message in a tamper-evident, independently searchable archive with configurable retention policies matched to your regulatory obligations and legal hold requirements.',
    points: [
      'Tamper-evident archive of all inbound, outbound, and internal email',
      'Configurable retention policies matched to regulatory requirements',
      'Legal hold and e-discovery search capability for litigation support',
      'Independent backup — protected from ransomware affecting live mailboxes',
    ],
  },
]

const VENDORS = [
  'Microsoft Defender for O365', 'Mimecast', 'Proofpoint', 'Barracuda Email Security',
  'Cisco IronPort', 'SpamTitan', 'ESET Mail Security', 'Fortinet FortiMail',
]

const FAQS = [
  {
    question: 'What is Business Email Compromise and why is it so damaging?',
    answer: 'Business Email Compromise (BEC) is a social engineering attack in which a cybercriminal impersonates a trusted party — typically a company executive, a known supplier, or a financial institution — to manipulate an employee into making an unauthorised wire transfer, changing bank account details on an invoice, or purchasing gift cards. BEC attacks frequently use spoofed or lookalike email addresses, compromised legitimate email accounts, or carefully timed pretexting to make the request appear credible. The FBI consistently reports BEC as the most financially damaging cybercrime category globally, responsible for billions of dollars in losses annually. The attacks are effective because they bypass traditional technical controls by targeting human decision-making rather than exploiting software vulnerabilities.',
  },
  {
    question: 'We already use Microsoft 365 — does it not include email security?',
    answer: 'Microsoft 365 includes basic email protection — Exchange Online Protection (EOP) — which handles standard spam filtering and known malware detection. Microsoft Defender for Office 365 (available in higher-tier M365 plans) adds anti-phishing, safe links, and safe attachments. However, even with Defender for O365, organisations benefit from an additional specialist layer: third-party platforms like Mimecast or Proofpoint typically provide superior BEC detection, more sophisticated impersonation protection, better spam catch rates, and more granular policy control than native Microsoft tools. More importantly, relying solely on your email provider for email security means a compromise of your M365 environment (which does happen) also bypasses your email security. A third-party gateway adds independence and defence in depth.',
  },
  {
    question: 'What is DMARC and do we really need it?',
    answer: 'DMARC (Domain-based Message Authentication, Reporting and Conformance) is an email authentication protocol that prevents other parties from sending email that appears to come from your domain. Without DMARC at enforcement (p=reject or p=quarantine), any attacker can send a phishing email to your customers, suppliers, or staff that shows your organisation\'s domain name in the From field. This harms both your customers (who may be deceived) and your brand reputation. DMARC is required by the UK NCSC for all government organisations, is expected by many cyber insurers, and is increasingly checked by enterprise procurement teams. Implementing DMARC at enforcement is one of the highest-value, lowest-cost security controls available — and Infraspine handles the complete implementation and ongoing management.',
  },
  {
    question: 'What is sandbox detonation and why does it matter for email security?',
    answer: 'Sandbox detonation is the process of opening an email attachment — a Word document, PDF, ZIP file, or executable — inside an isolated virtual machine environment before it is delivered to the recipient. The sandbox observes what the file actually does when opened: does it make network connections? Does it attempt to write files to disk? Does it try to execute code? Does it contact known malware command-and-control infrastructure? This behavioural analysis detects malware that has never been seen before and therefore has no antivirus signature — including zero-day exploits and ransomware variants specifically crafted to evade signature-based detection. Sandbox detonation adds a few seconds to email delivery time for messages with attachments, but the protection it provides against sophisticated threats makes it a standard component of enterprise email security.',
  },
  {
    question: 'How long does it take to implement email security and will there be disruption to email flow?',
    answer: 'Implementation timelines vary based on the platform chosen and your existing email infrastructure, but a typical deployment takes two to four weeks from kick-off to full enforcement. The standard approach is to begin with a two-week monitoring phase in which email flows normally but the new platform logs what it would have blocked — allowing us to tune rules and reduce false positives before enforcement is enabled. Email is then routed through the new platform in enforcement mode, with quarantine access provided to users and administrators. Disruption to legitimate email flow is minimal when this phased approach is followed. Emergency situations notwithstanding, we never enable blocking rules on day one without a tuning period.',
  },
  {
    question: 'How does email archiving differ from standard mailbox retention in Microsoft 365?',
    answer: 'Standard mailbox retention in Microsoft 365 is controlled by administrators who can modify or delete messages, is subject to the same ransomware risk as live mailboxes, lacks immutable audit trails required for legal discovery, and is limited in its search and export capabilities for litigation support. A dedicated email archiving platform captures every message in a tamper-evident, independently stored archive that cannot be altered even by administrators, provides full-text search across years of archived email within seconds, supports legal hold (preventing deletion of messages related to ongoing litigation), and maintains a complete audit log of every access and action. For regulated industries — financial services, legal, healthcare, education — these capabilities are not optional; they are required by regulators and expected by courts in the event of litigation.',
  },
]

export default function EmailSecurityPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Cyber Security', href: '/services/cyber-security' },
        { label: 'Email Security' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#DC2626,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: '#DC2626' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#DC2626' }}>Email Security &amp; Anti-Phishing</span>
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white mb-6">
              Email Security &amp; Anti-Phishing —{' '}
              <span style={{ color: '#DC2626' }}>Defend Your Number One Attack Vector.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              Ninety-one percent of cyberattacks begin with an email. Phishing, Business Email Compromise, ransomware delivery, and CEO fraud all arrive in the inbox — and no amount of firewall investment stops a threat that your own users invite in. Infraspine&apos;s managed email security service combines enterprise-grade filtering, advanced threat protection, DMARC implementation, encryption, and archiving to stop email-borne threats before they reach your team.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-4 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[24px] font-black mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[11px] font-semibold leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#DC2626', color: '#fff' }}>
                Secure Your Email Today <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Get a Free Email Audit
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
                Email Is the #1 Attack Vector — and the Most Underprotected
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Organisations spend heavily on firewalls, endpoint protection, and network monitoring — and then route the most dangerous content directly into every employee&apos;s hands through their inbox. Email is unique as an attack vector because it bypasses almost every other security control: it arrives through an intended communication channel, it is expected and acted upon without suspicion, and it targets the human rather than the technology. No firewall rule stops an employee from clicking a phishing link that arrives in a convincing email from a spoofed supplier.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The financial impact is severe and well-documented. BEC attacks cost organisations more than ransomware in absolute financial terms, with individual fraud incidents running into millions of rupees for Pakistani businesses. Ransomware — delivered overwhelmingly via email — costs organisations in ransom payments, recovery time, and reputational damage. A single successful phishing attack can compromise credentials that give attackers access to your entire Microsoft 365 or Google Workspace environment, including files, contacts, and further email accounts to pivot from.
              </p>
              <p className="text-[15px] leading-relaxed mb-6" style={{ color: '#64748B' }}>
                Email security has become simultaneously more important and more difficult. Attackers now use AI to generate flawless phishing text in any language, purchase lookalike domains days before launching campaigns, and compromise legitimate email accounts to send phishing from trusted addresses that bypass reputation-based filtering. Infraspine deploys the latest generation of AI-powered email security platforms that analyse hundreds of signals beyond simple content matching — sender behaviour, relationship graphs, timing anomalies, and real-time link analysis — to catch the sophisticated attacks that rule-based systems miss entirely.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#DC2626', text: 'AI-powered BEC detection catches impersonation that rules miss' },
                  { color: '#7C3AED', text: 'Sandbox detonation stops zero-day malware delivered via email' },
                  { color: '#00C853', text: 'DMARC prevents attackers from spoofing your own domain' },
                  { color: '#2563EB', text: 'Archiving and encryption meet GDPR, HIPAA, and sector compliance' },
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
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>Email Threat Landscape — Key Statistics</p>
              <div className="space-y-3">
                {[
                  { stat: '91%', desc: 'Of cyberattacks begin with a phishing or spear-phishing email', color: '#DC2626' },
                  { stat: '$2.9B', desc: 'Lost to BEC fraud in a single year (FBI IC3 report)', color: '#D97706' },
                  { stat: '3.4B', desc: 'Phishing emails sent globally every day', color: '#EAB308' },
                  { stat: '30 sec', desc: 'Average time before a user clicks a phishing link after receipt', color: '#2563EB' },
                  { stat: '82%', desc: 'Of breaches involving a human element — email is the entry point', color: '#64748B' },
                ].map(s => (
                  <div key={s.stat} className="p-3 rounded-xl border" style={{ borderColor: `${s.color}30`, background: `${s.color}08` }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[15px] font-black" style={{ color: s.color }}>{s.stat}</span>
                    </div>
                    <p className="text-[12px]" style={{ color: '#64748B' }}>{s.desc}</p>
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
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#DC2626' }}>Service Capabilities</span>
              <div className="h-px w-6" style={{ background: '#DC2626' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Layers of Email Defence
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From anti-phishing and BEC protection to DMARC implementation and compliance archiving — complete email security in one managed service.
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
            Email Security Platforms We Deploy
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
        title="Email Security Questions Answered"
        subtitle="Common questions from IT and operations leaders evaluating email security solutions." />

      <CTABanner
        heading="Stop Email Threats Before They Reach Your Inbox"
        subheading="Phishing, BEC fraud, ransomware, and spam — Infraspine stops them all at the email gateway. Get a free email security audit today."
        primaryCTA={{ label: 'Get a Free Email Audit', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
