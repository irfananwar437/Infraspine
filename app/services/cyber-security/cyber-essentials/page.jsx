import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Shield, Settings, Users, CheckCircle, Zap, FileText, ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'Cyber Essentials Certification Pakistan | CE & CE+ Support | Infraspine',
  description: 'Cyber Essentials and Cyber Essentials Plus certification support in Pakistan. Infraspine guides organisations through the five technical controls required for UK government-backed CE and CE+ certification.',
  alternates: { canonical: 'https://www.infraspine.com/services/cyber-security/cyber-essentials' },
  openGraph: {
    title: 'Cyber Essentials Certification Pakistan | CE & CE+ Support | Infraspine',
    description: 'Achieve Cyber Essentials and Cyber Essentials Plus certification with Infraspine. Five technical controls, government-backed scheme, supply chain requirement. Pakistan.',
    url: 'https://www.infraspine.com/services/cyber-security/cyber-essentials',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cyber Essentials Certification Support',
  description: 'UK government-backed Cyber Essentials scheme; Infraspine guides organisations through the five technical controls needed to achieve CE and CE+ certification.',
  url: 'https://www.infraspine.com/services/cyber-security/cyber-essentials',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  areaServed: 'Pakistan',
  serviceType: 'Cyber Essentials Certification',
}

const STATS = [
  { value: '5', label: 'Technical controls required', color: '#EA580C' },
  { value: 'CE & CE+', label: 'Both levels supported', color: '#EA580C' },
  { value: 'Gov-Backed', label: 'UK government scheme', color: '#EA580C' },
  { value: 'Supply Chain', label: 'Common requirement', color: '#EA580C' },
]

const CAPABILITIES = [
  {
    icon: Shield,
    title: 'Firewalls & Internet Gateways',
    color: '#EA580C',
    bg: '#FFF7ED',
    desc: 'The first of the five Cyber Essentials technical controls requires that all devices connecting to the internet are protected by a properly configured boundary firewall. Infraspine reviews your firewall and internet gateway configurations against Cyber Essentials requirements: rules must block unapproved inbound connections by default, any administrative access to the firewall must be restricted to specific management networks or devices, and unnecessary inbound services must be disabled. For CE+ certification, which involves hands-on technical verification, we test that firewall rules are correctly applied and that there are no pathways for unapproved inbound traffic. Common failures include overly permissive rules left from development or testing, administrative interfaces exposed to the internet, and home routers in use without the password changed from the factory default.',
    points: ['Boundary firewall configuration review', 'Inbound rule permissiveness testing', 'Admin interface exposure check', 'CE+ hands-on verification support'],
  },
  {
    icon: Settings,
    title: 'Secure Configuration',
    color: '#EA580C',
    bg: '#FFF7ED',
    desc: 'The secure configuration control requires that all computing devices — servers, desktops, laptops, mobile devices, and network equipment — are configured securely by removing or disabling unnecessary software, services, and user accounts. Default credentials must be changed before any device is put into service, and unnecessary features must be turned off to reduce the attack surface. Infraspine reviews your device configuration standards and assesses a sample of devices against Cyber Essentials requirements. We identify devices with unnecessary services running, software that is not required for business purposes, and settings that deviate from secure baseline configurations. For organisations without existing configuration standards, we develop Cyber Essentials-aligned configuration baselines for Windows, macOS, Linux, iOS, and Android devices based on Cyber Essentials guidance and CIS Benchmarks.',
    points: ['Device configuration baseline review', 'Unnecessary services identification', 'Default credential check', 'CE-aligned configuration standards'],
  },
  {
    icon: Users,
    title: 'Access Control Management',
    color: '#EA580C',
    bg: '#FFF7ED',
    desc: 'The access control requirement under Cyber Essentials covers three key areas: user accounts must be created with the minimum privileges needed for each user\'s role; administrative accounts must be separate from standard user accounts and used only for administrative tasks; and multi-factor authentication must be enabled for all cloud services and any remote access. Infraspine reviews your user account management processes and current account configurations against these requirements. We identify standard user accounts with unnecessary administrative privileges, administrators who use a single account for both privileged and routine work, and cloud services with administrative access that lacks MFA. This control is particularly important for CE+ certification as it is tested hands-on during the assessment, and failures in this area are among the most common reasons organisations receive a non-compliant finding.',
    points: ['Least-privilege account review', 'Admin / standard account separation', 'MFA adoption assessment', 'Cloud service access control review'],
  },
  {
    icon: CheckCircle,
    title: 'Malware Protection',
    color: '#EA580C',
    bg: '#FFF7ED',
    desc: 'Cyber Essentials requires that all devices have protection against malware — but this requirement has evolved significantly in recent years. Traditional signature-based antivirus alone may not be sufficient under the updated Cyber Essentials technical requirements. The scheme now accepts application allowlisting as an alternative to traditional antivirus on managed devices, and recognises that sandboxing is appropriate for some platforms. Infraspine reviews your malware protection coverage across all device types in scope: Windows and macOS endpoints, mobile devices, and servers. We assess whether protection is installed, up to date, enabled in real-time scanning mode, and configured to prevent users from disabling it. For organisations using Windows Defender or third-party EDR tools, we verify the configuration meets Cyber Essentials requirements and is applied consistently across all in-scope devices.',
    points: ['Malware protection coverage audit', 'Real-time scanning configuration', 'User tamper-prevention settings', 'EDR and Defender configuration review'],
  },
  {
    icon: Zap,
    title: 'Patch Management Review',
    color: '#EA580C',
    bg: '#FFF7ED',
    desc: 'The patch management control under Cyber Essentials requires that all software on in-scope devices is kept up to date with security patches, and that software which is no longer supported by its vendor (end-of-life software) is removed or segregated from the internet. The requirement specifies that critical and high-severity patches must be applied within 14 days of release. Infraspine reviews your patch management processes and assesses the currency of software across your device estate. We identify devices running end-of-life operating systems or applications, software that is more than 14 days behind on security patches, and gaps in your patch deployment process. For CE+ assessment, we sample devices to verify that patches have been applied and that no unsupported software is present on internet-connected devices. Patch management findings often have the most straightforward remediation path — but require consistent process, not just one-time effort.',
    points: ['Patch currency assessment', 'End-of-life software identification', '14-day patch cycle verification', 'Patch deployment process review'],
  },
  {
    icon: FileText,
    title: 'CE/CE+ Assessment Support',
    color: '#EA580C',
    bg: '#FFF7ED',
    desc: 'Infraspine manages the full Cyber Essentials and Cyber Essentials Plus assessment process from initial readiness assessment through to certification. For Cyber Essentials, we conduct a pre-assessment review of your environment, complete the self-assessment questionnaire with your team, and submit to the certification body. For Cyber Essentials Plus, which requires hands-on technical verification by an assessor, we prepare your organisation for the CE+ assessment: coordinating access to sample devices, pre-testing to identify any non-compliant configurations before the assessor arrives, and supporting your team during the assessment day. We have experience with all major Cyber Essentials certification bodies and manage the assessor relationship, assessment logistics, and any queries or requests for evidence throughout the assessment process. Where non-conformities are found, we provide remediation guidance and support re-assessment.',
    points: ['Pre-assessment readiness review', 'Self-assessment questionnaire support', 'CE+ assessment day coordination', 'Non-conformity remediation support'],
  },
]

const FAQS = [
  {
    question: 'What is Cyber Essentials?',
    answer: 'Cyber Essentials is a UK government-backed certification scheme that helps organisations demonstrate they have implemented five fundamental technical security controls to protect against the most common types of cyber attack. The scheme was developed by the UK\'s National Cyber Security Centre (NCSC) in partnership with the Information Assurance for Small and Medium Enterprises consortium (IASME). The five controls are: firewalls and internet gateways; secure configuration; access control; malware protection; and patch management. Research by the NCSC indicates that implementing these five controls would prevent the vast majority of common cyber attacks. Cyber Essentials certification is increasingly required for UK government supply chain contracts and is recognised by the insurance market as evidence of baseline security hygiene.',
  },
  {
    question: 'What is the difference between Cyber Essentials and Cyber Essentials Plus?',
    answer: 'Cyber Essentials (CE) is a self-assessment certification — the organisation completes a questionnaire about their controls and an independent assessor verifies the answers, but no hands-on technical testing is performed. Cyber Essentials Plus (CE+) builds on CE with an additional hands-on technical verification stage conducted by an independent assessor. During the CE+ assessment, the assessor tests a sample of devices to verify that the five controls are actually implemented and functioning as described in the CE questionnaire — for example, testing that malware protection is installed and running on sampled devices, attempting to access services that should be blocked by the firewall, and verifying that patching is current. CE+ is a significantly stronger assurance than CE, and some government contracts and cyber insurance policies specifically require CE+ rather than CE.',
  },
  {
    question: 'Who should get Cyber Essentials certified?',
    answer: 'Any organisation that handles personal data or relies on internet-connected systems should consider Cyber Essentials certification. It is mandatory for UK central government contractors bidding for contracts that involve handling sensitive personal information or providing certain ICT products and services. Many private sector organisations now require CE or CE+ in their supplier security requirements, making it a practical necessity for businesses in their supply chains. Beyond compliance, Cyber Essentials certification demonstrates to customers and partners that the organisation takes security seriously and has verified baseline controls. The annual cost of certification is modest compared to the cost of a single security incident, and many cyber insurers offer premium discounts for CE-certified organisations.',
  },
  {
    question: 'How long does it take to achieve certification?',
    answer: 'For an organisation that is reasonably well-prepared, Cyber Essentials certification can be achieved in two to four weeks from engagement to certificate. The timeline depends primarily on how much remediation work is needed to bring the five technical controls into compliance. If significant issues are found — for example, widespread use of end-of-life software, missing MFA on cloud services, or overly permissive firewall rules — the remediation period may extend the timeline to six to eight weeks. Infraspine typically starts with a readiness assessment that gives you an accurate picture of how close you are to certification before any formal assessment is initiated, so you only submit for assessment when you are confident of passing.',
  },
  {
    question: 'Is Cyber Essentials required for government contracts?',
    answer: 'Yes — Cyber Essentials certification is mandatory for all UK central government contracts that involve handling sensitive personal information or providing certain ICT products and services. HMRC, MOD, NHS, and many other government departments require CE as a minimum condition of being included on approved supplier lists. Many local authorities and housing associations have also adopted the requirement. Beyond formal mandates, the NCSC strongly recommends CE for all UK organisations, and it is increasingly becoming a standard supply chain requirement in heavily regulated sectors including financial services, legal services, and utilities. For organisations supplying into multiple sectors, CE certification has become a baseline expectation that clients will assume rather than ask about.',
  },
]

const BREADCRUMB = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Cybersecurity', href: '/services/cyber-security' },
  { label: 'Cyber Essentials Certification', href: '/services/cyber-security/cyber-essentials' },
]

const ACCENT = '#EA580C'
const HERO_BG = '#1c0800'
const STAT_BG = '#FFF7ED'
const STAT_BORDER = '#FDBA74'

export default function CyberEssentialsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />
      <Breadcrumb items={BREADCRUMB} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: HERO_BG }}>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{ background: `radial-gradient(circle,${ACCENT},transparent 70%)` }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-10 sm:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: ACCENT }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>Cybersecurity</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Cyber Essentials Certification<br />
              <span style={{ color: ACCENT }}>CE & CE+ Support.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              Infraspine guides organisations through the UK government-backed Cyber Essentials scheme — preparing and implementing the five technical controls required for CE and CE+ certification, managing the assessment process, and ensuring your organisation achieves certification first time.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-3 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[18px] font-black mb-1 leading-tight" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[10.5px] leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: ACCENT, color: '#fff' }}
              >
                Start Your CE Certification <ArrowRight size={14} />
              </Link>
              <Link
                href="/services/cyber-security"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold border transition-all hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}
              >
                All Cybersecurity Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-b" style={{ background: STAT_BG, borderColor: STAT_BORDER }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {STATS.map(s => (
              <div key={s.label} className="text-center">
                <div className="text-[26px] font-black leading-tight mb-1" style={{ color: ACCENT }}>{s.value}</div>
                <div className="text-[12px]" style={{ color: '#64748B' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: ACCENT }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>Five Controls & Assessment</span>
              <div className="h-px w-6" style={{ background: ACCENT }} />
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Five Technical Controls Plus Assessment Support
            </h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Infraspine implements and verifies each of the five Cyber Essentials controls and manages the assessment process end-to-end for both CE and CE+ certification.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map(cap => (
              <div
                key={cap.title}
                className="rounded-2xl border overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: STAT_BORDER, boxShadow: '0 4px 20px rgba(10,22,40,0.06)' }}
              >
                <div className="px-6 py-5 border-b" style={{ background: cap.bg, borderColor: STAT_BORDER }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: '#fff', border: `1.5px solid ${STAT_BORDER}` }}>
                    <cap.icon size={18} style={{ color: cap.color }} strokeWidth={1.7} />
                  </div>
                  <h3 className="text-[16px] font-black leading-tight" style={{ color: '#0A1628' }}>{cap.title}</h3>
                </div>
                <div className="px-6 py-5">
                  <p className="text-[13.5px] leading-relaxed mb-4" style={{ color: '#64748B' }}>{cap.desc}</p>
                  <ul className="space-y-2">
                    {cap.points.map(pt => (
                      <li key={pt} className="flex items-start gap-2">
                        <CheckCircle size={13} style={{ color: cap.color, flexShrink: 0, marginTop: '2px' }} />
                        <span className="text-[13px] font-semibold" style={{ color: '#374151' }}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        title="Cyber Essentials — Frequently Asked Questions"
        subtitle="Common questions from organisations preparing for Cyber Essentials or Cyber Essentials Plus certification."
        faqs={FAQS}
        accent={ACCENT}
      />

      <CTABanner
        heading="Ready to Achieve Cyber Essentials Certification?"
        subheading="Book a free readiness assessment call with Infraspine. We will identify any gaps in the five technical controls and give you a clear path to CE or CE+ certification."
        primaryLabel="Start Your CE Certification"
        primaryHref="/contact-us"
        secondaryLabel="Call Us Now"
        secondaryHref="tel:+923001234567"
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
