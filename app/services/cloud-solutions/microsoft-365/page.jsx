import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Mail, Users, Database, Shield, Settings, BarChart2,
  ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'Microsoft 365 Services Pakistan — M365 Setup, Migration & Management | Infraspine',
  description: 'Infraspine Microsoft 365 services in Pakistan: tenant setup, email migration, Teams and SharePoint deployment, M365 Backup and security configuration. 99.9% uptime SLA, zero-downtime migration.',
  alternates: { canonical: 'https://www.infraspine.com/services/cloud-solutions/microsoft-365' },
  openGraph: {
    title: 'Microsoft 365 Services Pakistan — M365 Setup, Migration & Management | Infraspine',
    description: 'Expert Microsoft 365 setup, migration and management in Pakistan. Zero-downtime email migration, Teams deployment, M365 Backup and Defender security configuration.',
    url: 'https://www.infraspine.com/services/cloud-solutions/microsoft-365',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Microsoft 365 Services',
  name: 'Infraspine Microsoft 365 Setup, Migration & Management',
  description: 'Complete Microsoft 365 services covering tenant setup, email migration from Exchange and Gmail, Teams and SharePoint deployment, backup, security, and ongoing administration.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/cloud-solutions/microsoft-365',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '99.9%', label: 'M365 Uptime SLA', color: '#0078D4' },
  { value: '0-day', label: 'Migration Downtime', color: '#00C853' },
  { value: '100%', label: 'Data Migrated', color: '#7C3AED' },
  { value: '24/7', label: 'M365 Support', color: '#D97706' },
]

const CAPABILITIES = [
  {
    icon: Settings,
    title: 'M365 Tenant Setup & Configuration',
    color: '#0078D4',
    bg: '#EFF6FF',
    desc: 'A Microsoft 365 tenant deployed with default settings leaves a significant amount of security and productivity capability on the table. Our tenant setup service configures your M365 environment properly from day one: custom domain verification, Exchange Online mail flow rules, spam and phishing protection, conditional access policies, MFA enforcement for all users, Entra ID (Azure AD) synchronisation from on-premise Active Directory, and Microsoft Secure Score optimisation. We document every configuration decision so your team understands exactly what has been set and why.',
    points: [
      'Custom domain setup and DNS record configuration (MX, SPF, DKIM, DMARC)',
      'Entra ID synchronisation from on-premise Active Directory',
      'Conditional access and MFA policy enforcement for all users',
      'Microsoft Secure Score baseline optimisation from day one',
    ],
  },
  {
    icon: Mail,
    title: 'Email Migration (Exchange/Gmail to M365)',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'Email migration is one of the most disruptive IT projects an organisation can undertake if done incorrectly — and one of the smoothest when done right. Our migration methodology uses a pre-migration synchronisation period where all existing email is copied to Exchange Online before the cutover, so when MX records are updated, users immediately have access to their complete historical mailbox. We support cutover, staged, and hybrid migrations from on-premise Exchange, hosted Exchange, Gmail Workspace, and other mail platforms. Post-migration support covers any delivery or configuration issues that emerge in the first 30 days.',
    points: [
      'Pre-migration mailbox synchronisation minimises cutover window',
      'Exchange Online, Exchange on-premise, and Gmail as source platforms',
      'Calendar, contacts, and public folder migration included',
      '30-day post-migration support for delivery and configuration issues',
    ],
  },
  {
    icon: Users,
    title: 'Teams & SharePoint Deployment',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Microsoft Teams is Microsoft 365&apos;s most transformative application — but also the most underutilised when deployed without proper governance. We design your Teams architecture to reflect how your organisation actually works: team structures aligned to departments, channels structured for workflow rather than conversation chaos, SharePoint document library design that replaces shared drives, and meeting room configuration for hybrid working. External collaboration policies, guest access controls, and data residency settings are configured to balance productivity with security.',
    points: [
      'Teams architecture design aligned to your organisational structure',
      'SharePoint Online as a replacement for shared network drives',
      'External collaboration and guest access policy configuration',
      'Meeting room and phone system integration where applicable',
    ],
  },
  {
    icon: Database,
    title: 'Microsoft 365 Backup (Veeam/Acronis)',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Microsoft 365 includes data redundancy but not backup. Microsoft explicitly states in their service agreement that they are not responsible for data loss caused by user deletion, ransomware, or sync errors. The deleted items retention period (30 days by default, maximum 93 days) is not a substitute for backup. We deploy purpose-built M365 backup solutions — Veeam Backup for Microsoft 365 or Acronis Cyber Protect Cloud — that take multiple daily backups of Exchange, Teams, SharePoint, and OneDrive with unlimited retention and point-in-time recovery to any date.',
    points: [
      'Multiple daily backups of Exchange, Teams, SharePoint, and OneDrive',
      'Point-in-time recovery to any backup date without item limits',
      'Ransomware recovery from clean backup snapshots',
      'Independent backup storage outside Microsoft&apos;s infrastructure',
    ],
  },
  {
    icon: Shield,
    title: 'Security & Compliance (Defender for M365)',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Microsoft 365 Defender provides enterprise-grade email security, endpoint protection, identity protection, and cloud app security within the M365 ecosystem. We deploy and configure Defender for Office 365 (anti-phishing, Safe Links, Safe Attachments), Defender for Endpoint on all managed devices, Microsoft Purview Data Loss Prevention policies to prevent sensitive data leakage, and Azure AD Identity Protection to detect and respond to compromised account activity. Security posture is tracked continuously through the Microsoft Secure Score dashboard.',
    points: [
      'Defender for Office 365 Plan 2 anti-phishing and attachment scanning',
      'Safe Links and Safe Attachments for zero-day malware protection',
      'Microsoft Purview DLP policies for sensitive data protection',
      'Identity Protection for compromised account detection and response',
    ],
  },
  {
    icon: BarChart2,
    title: 'Ongoing M365 Administration',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Microsoft 365 is not a deploy-and-forget platform. Microsoft releases hundreds of new features, policy updates, and security patches every year. Our ongoing M365 administration service handles user lifecycle management (onboarding, offboarding, licence assignment), licence optimisation (right-sizing your licence tier as your needs evolve), policy updates as Microsoft releases new security features, and monthly health reports covering licence usage, security posture score, mailbox storage, and SharePoint growth trends.',
    points: [
      'User onboarding and offboarding with licence and access management',
      'Monthly M365 licence audit and right-sizing recommendations',
      'Security policy updates as Microsoft releases new capabilities',
      'Monthly M365 health report covering security score, storage, and usage',
    ],
  },
]

const VENDORS = [
  'Exchange Online', 'Microsoft Teams', 'SharePoint Online', 'OneDrive for Business',
  'Microsoft Intune', 'Defender for M365', 'Entra ID (Azure AD)', 'Power Platform',
  'Veeam Backup for M365', 'Acronis Cyber Protect', 'Microsoft Purview',
]

const FAQS = [
  {
    question: 'Does Microsoft 365 back up our data automatically?',
    answer: 'No — and this is the most common and costly M365 misconception. Microsoft provides infrastructure redundancy (your data is stored in multiple data centres) but this is not backup. If you delete an email, it goes into Deleted Items. If you empty Deleted Items, it goes into the Recoverable Items folder for up to 93 days. After that, it is permanently gone. If ransomware encrypts your SharePoint or OneDrive files, those encrypted versions are what Microsoft stores. You need a third-party backup solution — we deploy Veeam or Acronis — to have genuine point-in-time recovery capability.',
  },
  {
    question: 'How long does an email migration to Microsoft 365 take?',
    answer: 'Migration timeline depends on mailbox count and data volume. For a 50-user organisation with typical mailbox sizes (5–20 GB per user), the pre-migration synchronisation phase takes 3–5 days, and the actual cutover (MX record change and final sync) is completed in a maintenance window of 1–4 hours with no email delivery interruption. Larger organisations with hundreds of users or very large mailboxes may require staged migration over 2–4 weeks. Calendar and contacts migration runs in parallel with email. We provide a detailed migration timeline before the project starts.',
  },
  {
    question: 'Is Microsoft 365 secure by default?',
    answer: 'Microsoft 365 has strong security capabilities, but they are not all enabled by default — and some defaults are actively insecure. For example, basic authentication (deprecated but not always disabled), legacy email protocols (SMTP, IMAP), and permissive external sharing settings for SharePoint are common issues in default M365 tenants. Our tenant setup service systematically reviews and configures 40+ security settings to ensure your M365 environment meets security best practices from day one. This includes enabling MFA for all users, configuring Conditional Access, enabling Defender features, and setting appropriate data protection policies.',
  },
  {
    question: 'What Microsoft 365 licence tier do we need?',
    answer: 'The answer depends on your specific requirements, but here is a general guide: Microsoft 365 Business Basic covers core apps, Teams, and 1 TB OneDrive — suitable for organisations primarily using cloud apps. Business Standard adds desktop Office apps and is the most popular choice for general business use. Business Premium adds Defender for Business, Intune device management, and Azure AD Premium — essential for organisations with any compliance or security requirements. For organisations over 300 users, Enterprise E3 or E5 provide additional compliance and security capabilities. We assess your requirements and recommend the right tier during the consultation.',
  },
  {
    question: 'Can you migrate from Gmail / Google Workspace to Microsoft 365?',
    answer: 'Yes — Gmail and Google Workspace to Microsoft 365 migrations are one of our most common project types. The migration covers Gmail email (with labels converted to folders), Google Calendar events and recurring meetings, Google Contacts, and where requested, Google Drive content to SharePoint Online / OneDrive. The migration uses IMAP or the Microsoft Migration Manager for Google Workspace, depending on organisation size and complexity. User communication templates and training materials are provided to smooth the transition for staff who are accustomed to the Google interface.',
  },
  {
    question: 'Do you provide training for our staff on Microsoft Teams and M365?',
    answer: 'Yes — adoption training is included in our M365 deployment engagements as standard. We provide live training sessions tailored to different user groups: a general staff session covering Teams communication, OneDrive and SharePoint file management, and Outlook best practices; and an administrator session covering the M365 Admin Centre, user management, and security dashboards. Training materials (quick reference guides and video walkthroughs) are provided for ongoing self-service learning. We can also arrange department-specific sessions for teams with specific workflow requirements in Teams.',
  },
]

export default function Microsoft365Page() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Cloud Solutions', href: '/services/cloud-solutions' },
        { label: 'Microsoft 365' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#0078D4,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: '#0078D4' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0078D4' }}>Microsoft 365</span>
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white mb-6">
              Microsoft 365 —{' '}
              <span style={{ color: '#0078D4' }}>The Complete Modern Workplace, Properly Configured.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              Microsoft 365 is the world&apos;s most widely deployed productivity platform — but most organisations use less than 30% of what they are paying for, leave critical security settings at insecure defaults, and have no backup for the data they entrust to it. Infraspine&apos;s M365 service covers the complete journey: migration with zero downtime, proper security configuration, Teams and SharePoint deployment your staff will actually use, genuine backup, and ongoing administration so your platform stays optimised as Microsoft keeps adding capabilities.
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
                style={{ background: '#0078D4', color: '#fff' }}>
                Migrate to Microsoft 365 <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Free M365 Health Check
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
                <div className="h-px w-6" style={{ background: '#0078D4' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0078D4' }}>The Business Case</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Microsoft 365 at Defaults Is Not Microsoft 365 at Value
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                A Forrester study found that organisations that deploy Microsoft 365 without proper configuration and adoption strategies achieve less than a third of the potential ROI. The most common gaps: MFA not enforced (leaving accounts vulnerable to credential stuffing), Defender features disabled or at default sensitivity (missing significant threat protection), SharePoint and Teams used as a file dump rather than a structured collaboration environment, and no backup despite Microsoft explicitly disclaiming responsibility for data loss.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The cost impact is real. A single compromised M365 account without MFA typically leads to email phishing of your contacts (reputation damage), access to all SharePoint and OneDrive files (data breach), and sometimes Business Email Compromise fraud (financial loss). Microsoft reports that organisations with MFA enabled block 99.9% of automated account compromise attacks. That single configuration change — which takes minutes to enforce — dramatically changes your security posture.
              </p>
              <p className="text-[15px] leading-relaxed mb-6" style={{ color: '#64748B' }}>
                Teams adoption is the other major value lever. Organisations where Teams is properly structured around workflows see 15–20% productivity improvements from reduced email volume, faster decision-making, and better document collaboration. Getting there requires an architecture design, not just turning Teams on and hoping staff figure it out. Our deployment service includes governance design, team structure, and adoption training that gets your organisation to productive Teams usage within the first 30 days.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#0078D4', text: 'Zero-downtime migration from Exchange, Gmail, or any mail platform' },
                  { color: '#00C853', text: 'Genuine M365 backup — not relying on Microsoft deleted items retention' },
                  { color: '#DC2626', text: 'MFA, Defender, and conditional access configured from day one' },
                  { color: '#7C3AED', text: 'Teams architecture your staff will actually use — not abandon' },
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
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>Common M365 Mistakes We Fix</p>
              <div className="space-y-3">
                {[
                  { mistake: 'MFA not enforced for all users', risk: 'Account compromise', color: '#DC2626' },
                  { mistake: 'No third-party backup configured', risk: 'Permanent data loss', color: '#DC2626' },
                  { mistake: 'Legacy authentication protocols enabled', risk: 'MFA bypass attacks', color: '#DC2626' },
                  { mistake: 'SharePoint sharing set to anyone-with-link', risk: 'Data leakage', color: '#D97706' },
                  { mistake: 'Defender for O365 at default settings', risk: 'Missed phishing', color: '#D97706' },
                  { mistake: 'Teams used without governance policy', risk: 'Data sprawl', color: '#D97706' },
                  { mistake: 'Ex-employee accounts not offboarded', risk: 'Insider risk', color: '#DC2626' },
                  { mistake: 'No DLP policies for sensitive data', risk: 'Compliance failure', color: '#D97706' },
                ].map(({ mistake, risk, color }) => (
                  <div key={mistake} className="flex items-start justify-between gap-3 py-2 border-b last:border-0" style={{ borderColor: '#E2E8F0' }}>
                    <span className="text-[13px]" style={{ color: '#374151' }}>{mistake}</span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap" style={{ background: `${color}10`, color }}>{risk}</span>
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
              <div className="h-px w-6" style={{ background: '#0078D4' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0078D4' }}>M365 Capabilities</span>
              <div className="h-px w-6" style={{ background: '#0078D4' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              The Complete M365 Service
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From initial tenant setup and zero-downtime migration through to security hardening, backup, and ongoing administration.
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
            Microsoft 365 Apps &amp; Services We Work With
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

      <FAQAccordion faqs={FAQS} accent="#0078D4"
        title="Microsoft 365 Questions Answered"
        subtitle="Common questions from organisations planning their M365 migration or optimisation." />

      <CTABanner
        heading="Migrate to Microsoft 365 the Right Way"
        subheading="Zero downtime migration, proper security configuration, genuine backup, and Teams adoption that sticks. Done right from day one."
        primaryCTA={{ label: 'Start Your Migration', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
