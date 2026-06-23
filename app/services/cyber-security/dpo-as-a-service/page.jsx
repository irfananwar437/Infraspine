import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import RelatedServices from '@/components/ui/RelatedServices'
import {
  Shield, FileText, Search, Users, AlertTriangle, BookOpen, CheckCircle, ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'Data Protection Officer as a Service Pakistan | Outsourced DPO',
  description: 'Outsourced DPO as a Service for GDPR and data protection compliance in Pakistan. Infraspine provides a named DPO, GDPR programme management, DPIA reviews, SAR handling, and breach notification support.',
  alternates: { canonical: 'https://www.infraspine.com/services/cyber-security/dpo-as-a-service' },
  openGraph: {
    title: 'Data Protection Officer as a Service Pakistan | Outsourced DPO | Infraspine',
    description: 'Named DPO service for GDPR compliance. Expert oversight, DPIA reviews, subject access request handling, and breach response — without the cost of a full-time hire. Infraspine Pakistan.',
    url: 'https://www.infraspine.com/services/cyber-security/dpo-as-a-service',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'DPO as a Service',
  description: 'Outsourced DPO function for GDPR and data protection compliance; expert oversight without the cost of a full-time hire; named DPO provided.',
  url: 'https://www.infraspine.com/services/cyber-security/dpo-as-a-service',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  areaServed: 'Pakistan',
  serviceType: 'Data Protection Officer as a Service',
}

const STATS = [
  { value: 'GDPR Art. 37', label: 'Compliant appointment', color: '#7C3AED' },
  { value: 'Named DPO', label: 'Provided to your organisation', color: '#7C3AED' },
  { value: 'DPIA Reviews', label: 'Included in service', color: '#7C3AED' },
  { value: 'Breach Response', label: 'Support included', color: '#7C3AED' },
]

const CAPABILITIES = [
  {
    icon: Shield,
    title: 'DPO Function & Oversight',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Infraspine provides a named, qualified Data Protection Officer to fulfil your obligations under Article 37 of the GDPR. Our DPO acts as the primary point of contact for your supervisory authority and data subjects, maintains independence from management as required by the regulation, and has no conflict of interest with other duties. The DPO function includes regular engagement with your senior leadership team and IT department, attendance at relevant governance meetings, and an annual data protection review. We maintain a DPO register entry with the relevant supervisory authority on your behalf and ensure that all organisational activities involving personal data processing are reviewed for compliance before implementation, preventing compliance issues from arising rather than reacting to them after the fact.',
    points: ['Named, qualified DPO provided', 'Supervisory authority registration', 'Independence as required by GDPR', 'Senior leadership engagement'],
  },
  {
    icon: FileText,
    title: 'GDPR Compliance Programme',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'A functioning DPO must be underpinned by a structured GDPR compliance programme — not just a privacy policy on a website. Infraspine builds and maintains a comprehensive compliance programme including an Article 30 Record of Processing Activities (ROPA), data retention schedules, data mapping documentation, privacy notices for all processing activities, consent management frameworks, lawful basis assessments, and data sharing agreements with third parties. We conduct an annual compliance review to assess the programme against changes in regulatory guidance, enforcement decisions, and your organisation\'s own processing activities. The compliance programme is documented in a compliance management register that provides evidence of your accountability obligations under GDPR Article 5(2).',
    points: ['Article 30 ROPA maintenance', 'Lawful basis assessments', 'Privacy notice development', 'Annual compliance programme review'],
  },
  {
    icon: Search,
    title: 'Data Protection Impact Assessments',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'A Data Protection Impact Assessment (DPIA) is mandatory under GDPR Article 35 for any processing that is likely to result in a high risk to individuals — including large-scale processing of special category data, systematic monitoring, and automated decision-making. Many organisations conduct DPIAs as a tick-box exercise without genuinely identifying and mitigating risks. Infraspine conducts rigorous DPIAs using the ICO\'s recommended methodology: describing the processing, assessing necessity and proportionality, identifying and assessing risks, and identifying measures to mitigate those risks. Each DPIA concludes with a risk treatment plan that documents residual risks and management sign-off. We also provide a DPIA screening tool to help your teams identify when a DPIA is required before a new project or system goes live, avoiding the compliance gap that occurs when DPIAs are completed after implementation.',
    points: ['ICO methodology-aligned DPIAs', 'Necessity and proportionality assessment', 'Risk identification and treatment', 'DPIA screening tool for your teams'],
  },
  {
    icon: Users,
    title: 'Subject Access Request Handling',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Data subjects have the right to request access to their personal data under GDPR Article 15, and organisations must respond within one month. Subject Access Requests (SARs) can be complex and time-consuming — particularly when data is spread across multiple systems, cloud services, and third-party processors. Infraspine manages the end-to-end SAR handling process: receiving and logging requests, verifying the identity of the requestor, coordinating data searches across your systems, reviewing responses for third-party personal data that should be redacted, and preparing the final response within the statutory deadline. We also handle requests for erasure (the right to be forgotten), restriction of processing, rectification, and data portability. Our SAR management process includes a full audit trail for every request, providing evidence of compliance in the event of a regulatory investigation.',
    points: ['End-to-end SAR management', 'Identity verification procedures', 'Multi-system data search coordination', 'Full audit trail for every request'],
  },
  {
    icon: AlertTriangle,
    title: 'Breach Notification Management',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'GDPR requires organisations to notify the relevant supervisory authority of a personal data breach within 72 hours of becoming aware of it — a timeline that many organisations fail to meet because they do not have a documented breach response process. High-risk breaches must also be notified to the affected data subjects without undue delay. Infraspine provides a complete breach notification management service: a documented incident response procedure for data breaches, a 24-hour breach triage hotline, assessment of whether a breach meets the notification threshold, preparation and submission of supervisory authority notifications, communication with affected data subjects, and post-incident review to prevent recurrence. We maintain a breach register for your organisation in line with GDPR Article 33(5), which is a mandatory accountability document that supervisory authorities can request at any time.',
    points: ['72-hour notification compliance', 'Breach triage and threshold assessment', 'Supervisory authority notification', 'Mandatory breach register maintenance'],
  },
  {
    icon: BookOpen,
    title: 'Staff Training & Awareness',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Human error is the most common cause of personal data breaches — sending data to the wrong person, failing to use BCC, sharing login credentials, or falling for phishing attacks that expose personal data. GDPR requires organisations to ensure that staff who process personal data are aware of their obligations and receive appropriate training. Infraspine delivers a staff training and awareness programme that includes annual mandatory GDPR awareness training for all staff, role-specific training for staff who handle sensitive personal data, a data protection policy induction for new starters, and periodic awareness communications covering data protection topics. Training completion is tracked and reported, providing evidence of your accountability obligations. We also provide a data protection handbook for staff that explains their key obligations in plain language without legalese.',
    points: ['Annual mandatory GDPR training', 'Role-specific training for sensitive roles', 'New starter data protection induction', 'Training completion tracking and reporting'],
  },
]

const FAQS = [
  {
    question: 'Who is required to appoint a DPO?',
    answer: 'Under GDPR Article 37, three categories of organisation are required to appoint a DPO: public authorities and bodies (except courts acting in a judicial capacity); organisations whose core activities require large-scale, regular, and systematic monitoring of individuals; and organisations whose core activities involve large-scale processing of special category data (such as health data, biometric data, or data revealing racial or ethnic origin) or data relating to criminal convictions. In practice, many organisations that are not strictly required to appoint a DPO choose to do so voluntarily — either because their customers or partners require it, because they want the assurance of specialist oversight, or because the cost of a DPO as a Service is far lower than the risk of non-compliance. Where an organisation is uncertain whether it is required to appoint a DPO, Infraspine can conduct a DPO obligation assessment.',
  },
  {
    question: 'What does a DPO actually do?',
    answer: 'Under GDPR Articles 38 and 39, a DPO has specific tasks: informing and advising the organisation and its employees of their obligations under data protection law; monitoring compliance with GDPR and organisational data protection policies; providing advice on DPIAs and monitoring their performance; acting as the contact point for the supervisory authority; and cooperating with the supervisory authority. In practice, an effective DPO also maintains the Record of Processing Activities, manages subject access requests, handles data breach notifications, reviews contracts with data processors, provides staff training, and advises on the lawful basis for processing activities. The DPO must be independent — they cannot be instructed by management on how to perform their tasks — and must have no conflict of interest with other duties they perform.',
  },
  {
    question: 'Why use a DPO as a Service rather than hiring one?',
    answer: 'An in-house DPO with genuine expertise in GDPR, data protection law, and IT security commands a salary of £60,000 to £90,000 or more in the UK market, plus employment costs, benefits, and management overhead. For most organisations, particularly those for whom data protection is important but not a core business activity, this cost is difficult to justify for a single specialist role. DPO as a Service provides access to a qualified, experienced DPO at a fraction of the cost of a full-time hire. It also provides resilience — an in-house DPO who leaves takes their knowledge with them, creating a compliance gap. Infraspine\'s service provides continuity, with a team of specialists behind the named DPO who maintain institutional knowledge of your organisation\'s processing activities.',
  },
  {
    question: 'What is a DPIA?',
    answer: 'A Data Protection Impact Assessment (DPIA) is a process designed to help organisations identify and minimise the data protection risks of a new project, system, or processing activity before it goes live. GDPR Article 35 makes DPIAs mandatory for any processing that is likely to result in a high risk to individuals — the regulation gives specific examples including systematic and extensive evaluation of personal aspects using automated processing (including profiling), large-scale processing of special categories of data, and systematic monitoring of publicly accessible areas on a large scale. A DPIA involves describing the processing, assessing necessity and proportionality, identifying risks to individuals, and documenting measures taken to mitigate those risks. If residual risks remain high after mitigation, the organisation must consult the supervisory authority before proceeding.',
  },
  {
    question: 'How do you handle data breach notifications?',
    answer: 'When a potential personal data breach is reported, Infraspine activates a documented breach response procedure. Within the first four hours, we conduct a triage assessment to establish the nature of the breach, the categories and approximate number of individuals affected, the likely consequences, and whether it meets the threshold for supervisory authority notification (a risk to the rights and freedoms of individuals). If notification is required, we draft and submit the notification to the relevant supervisory authority — in the UK, the ICO — within the 72-hour deadline. Where the breach is likely to result in a high risk to individuals, we also draft communications to the affected data subjects. Throughout the process, we document all decisions and actions in the mandatory breach register. Post-incident, we conduct a root cause analysis and recommend remediation measures to prevent recurrence.',
  },
]

const BREADCRUMB = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Cybersecurity', href: '/services/cyber-security' },
  { label: 'DPO as a Service', href: '/services/cyber-security/dpo-as-a-service' },
]

const ACCENT = '#7C3AED'
const HERO_BG = '#0f0020'
const STAT_BG = '#F5F3FF'
const STAT_BORDER = '#DDD6FE'

export default function DpoAsAServicePage() {
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
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: ACCENT }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>Cybersecurity</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              DPO as a Service<br />
              <span style={{ color: ACCENT }}>Outsourced Data Protection.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              Infraspine provides a named, qualified Data Protection Officer as an outsourced service — giving your organisation full GDPR compliance coverage, DPIA reviews, subject access request handling, and breach notification support at a fraction of the cost of a full-time hire.
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
                Enquire About DPO as a Service <ArrowRight size={14} />
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
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>DPO Service Scope</span>
              <div className="h-px w-6" style={{ background: ACCENT }} />
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Data Protection Service Capabilities
            </h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Our DPO as a Service covers the full scope of data protection obligations — from the statutory DPO function and GDPR programme through to breach response and staff training.
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
        title="DPO as a Service — Frequently Asked Questions"
        subtitle="Common questions from organisations considering outsourced data protection officer support."
        faqs={FAQS}
        accent={ACCENT}
      />

      <CTABanner
        heading="Need a Named DPO Without the Full-Time Cost?"
        subheading="Contact Infraspine to discuss our DPO as a Service programme. We will explain what is included, how the named DPO function works, and how quickly we can get your organisation into compliance."
        primaryLabel="Enquire About DPO as a Service"
        primaryHref="/contact-us"
        secondaryLabel="Call Us Now"
        secondaryHref="tel:+923001234567"
      />

      <RelatedServices currentHref="/services/cyber-security/dpo-as-a-service" accent="#DC2626" />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
