import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  FileText, Database, Shield, BookOpen, CheckCircle, Users, ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'NHS DSPT Assessment Pakistan | Data Security Protection Toolkit | Infraspine',
  description: 'NHS Data Security and Protection Toolkit (DSPT) assessment support in Pakistan. Infraspine helps health and social care organisations complete their annual DSPT submission across all 10 NDG data security standards.',
  alternates: { canonical: 'https://www.infraspine.com/services/cyber-security/nhs-dspt' },
  openGraph: {
    title: 'NHS DSPT Assessment Pakistan | Data Security Protection Toolkit | Infraspine',
    description: 'NHS DSPT gap assessment, evidence collection, policy development, and annual submission support for health and social care organisations. Infraspine Pakistan.',
    url: 'https://www.infraspine.com/services/cyber-security/nhs-dspt',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'NHS DSPT Assessment Support',
  description: 'Support for health and social care organisations completing the NHS Data Security and Protection Toolkit (DSPT) annual submission — covering all 10 NDG data security standards.',
  url: 'https://www.infraspine.com/services/cyber-security/nhs-dspt',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  areaServed: 'Pakistan',
  serviceType: 'NHS DSPT Assessment',
}

const STATS = [
  { value: '10', label: 'NDG standards covered', color: '#0891B2' },
  { value: 'Annual', label: 'Submission support included', color: '#0891B2' },
  { value: 'Evidence', label: 'Pack preparation service', color: '#0891B2' },
  { value: '100%', label: 'Submission rate achieved', color: '#0891B2' },
]

const CAPABILITIES = [
  {
    icon: FileText,
    title: 'DSPT Gap Assessment',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Before beginning the annual DSPT submission process, Infraspine conducts a structured gap assessment to establish your organisation\'s current position against all 10 National Data Guardian (NDG) data security standards and their associated evidence items. The gap assessment reviews your existing policies, technical controls, training records, and governance structures against each required assertion. Every assertion is assessed as met, partially met, or not met, with a clear explanation of what evidence is required and what remediation work is needed before submission. The gap assessment report provides a prioritised action plan that your team can begin working through immediately, with estimated effort for each gap. For organisations that are new to the DSPT or are returning after a period of non-compliance, the gap assessment establishes a realistic timeline for achieving a standards-met submission.',
    points: ['All 10 NDG standards assessed', 'Assertion-by-assertion gap analysis', 'Prioritised action plan', 'Timeline to standards-met submission'],
  },
  {
    icon: Database,
    title: 'Evidence Collection & Organisation',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'The DSPT requires organisations to upload evidence documents to support each assertion they claim to have met. Evidence collection is one of the most time-consuming aspects of the DSPT submission process — and one of the most common failure points, as organisations often have the controls in place but cannot locate or present the evidence in a format that satisfies assessors. Infraspine coordinates your evidence collection process: creating an evidence requirement register for every assertion your organisation plans to claim, identifying who holds each piece of evidence and in what format, collecting and reviewing evidence documents for quality and completeness, and organising the evidence pack into a clearly structured submission-ready format. We ensure every piece of evidence is labelled appropriately for the assertion it supports, and that the evidence genuinely demonstrates compliance rather than simply existing as a document.',
    points: ['Evidence requirement register', 'Stakeholder evidence coordination', 'Evidence quality review', 'Submission-ready evidence pack'],
  },
  {
    icon: Shield,
    title: 'Policy & Procedure Development',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Many DSPT assertions require supporting policies and procedures as evidence — and for organisations without an existing policy library, developing these documents is a significant component of the DSPT preparation work. Infraspine develops a full suite of DSPT-compliant policies and procedures tailored to your organisation\'s context: a Data Security and Protection Policy, Information Governance Policy, Acceptable Use Policy, Data Breach Reporting Procedure, Bring Your Own Device Policy, Remote Working Policy, Information Asset Register procedure, and all other documents required by the specific assertions your organisation needs to meet. Every policy is written in plain language, reviewed with your team, and formatted for the DSPT evidence pack. We also provide a policy review schedule so that documents are updated annually before each submission cycle.',
    points: ['Full DSPT policy suite development', 'Tailored to your organisation type', 'Plain-language drafting', 'Annual policy review schedule'],
  },
  {
    icon: BookOpen,
    title: 'Data Security Training Programme',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'NDG Standard 9 requires that all staff, including temporary and bank staff, complete mandatory data security awareness training annually. This is one of the most consistently difficult assertions for health and social care organisations to meet because of high staff turnover, use of agency workers, and the logistical challenge of tracking training completion across a large and varied workforce. Infraspine develops and delivers a data security training programme aligned to NDG Standard 9 requirements: an e-learning module covering all mandatory topics, a tracking system for recording completion by staff member and employment type, a certificate of completion for each staff member, and a summary completion report in the format required for the DSPT evidence pack. For organisations using existing training platforms, we review existing training content against NDG requirements and advise on gaps.',
    points: ['NDG Standard 9 compliant training', 'E-learning module delivery', 'Staff completion tracking', 'DSPT-format completion report'],
  },
  {
    icon: CheckCircle,
    title: 'Mandatory Assertions Review',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'The DSPT contains mandatory assertions that every health and social care organisation must meet in order to achieve a standards-met submission — failure to meet any mandatory assertion results in a not-yet-met status regardless of performance elsewhere. Infraspine conducts a dedicated review of your mandatory assertions to ensure all are met and properly evidenced before submission. This includes: the data security and protection lead role is identified and appropriate; an annual review of data security and protection policies has been completed and evidenced; all staff have completed the mandatory data security training; the organisation has submitted a DSPT submission in the previous year (or is a new entrant with a clear plan); and the organisation has a documented process for managing personal data breaches. For mandatory assertions where gaps exist, we prioritise these in the remediation action plan above all other work.',
    points: ['Mandatory assertion identification', 'Evidence adequacy review', 'Gaps prioritised in action plan', 'Pre-submission mandatory check'],
  },
  {
    icon: Users,
    title: 'Submission & Sign-Off Support',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'The final stage of the DSPT process is completing the online submission, uploading evidence documents, and obtaining the required sign-off from the Accountable Senior Officer (ASO) — a board-level or equivalent senior person who takes accountability for the organisation\'s data security and protection compliance. Infraspine manages the submission process: completing the assertion responses in the DSPT online system, uploading and tagging evidence documents, preparing the ASO sign-off declaration, and submitting the completed toolkit before the annual deadline. We also prepare a submission summary report for the ASO that explains what has been submitted and why, so they can sign off with confidence. Post-submission, we provide a record of the completed submission and a planning document for the following year\'s submission cycle, ensuring continuous compliance rather than a last-minute annual rush.',
    points: ['DSPT online system completion', 'Evidence upload and tagging', 'ASO sign-off preparation', 'Next-year planning document'],
  },
]

const FAQS = [
  {
    question: 'What is the NHS DSPT?',
    answer: 'The NHS Data Security and Protection Toolkit (DSPT) is an online self-assessment tool developed by NHS England that enables health and social care organisations to measure and publish their performance against the National Data Guardian\'s 10 data security standards. It replaced the Information Governance Toolkit (IGT) in 2018. Organisations complete an annual assessment by claiming assertions against each standard and uploading supporting evidence, then submitting the completed toolkit by the annual deadline (typically 30 June each year). The DSPT is a mandatory requirement for all organisations that process health and social care data, including NHS trusts, GP practices, dental practices, community care providers, and third-party suppliers with access to NHS systems or data.',
  },
  {
    question: 'Who is required to complete the DSPT?',
    answer: 'All organisations that process health and social care data under a Data Security and Protection contract with NHS England, NHS Digital, or a Clinical Commissioning Group must complete the DSPT. This includes NHS trusts, foundation trusts, GP practices, dental practices, optometry practices, pharmacy contractors, community pharmacy contractors, mental health trusts, ambulance trusts, commissioning support units, and independent sector providers of NHS-commissioned services. Third-party suppliers — IT system vendors, managed service providers, cloud providers, and any other organisation with access to NHS patient data or NHS network systems — are also required to complete the DSPT or demonstrate equivalent compliance through an equivalent framework such as ISO 27001.',
  },
  {
    question: 'What are the 10 NDG data security standards?',
    answer: 'The 10 National Data Guardian data security standards are: 1) Personal confidential data is handled in strict confidence and only shared appropriately. 2) Staff can access the personal confidential data they need to do their jobs, but nothing else. 3) The duty to share information can be as important as the duty to protect patient confidentiality. 4) Organisations handle personal confidential data in line with the existing legislation and guidance. 5) Processes are reviewed annually to identify and improve practices that protect personal confidential data. 6) Cyber risks are managed. 7) Continuity of care is prioritised when data systems fail. 8) No unsupported operating systems, software, or internet browsers are used. 9) A continuity plan is in place to respond to threats from cyber attacks or system failures. 10) Staff understand their obligations under the National Data Guardian\'s data security standards.',
  },
  {
    question: 'What happens if we submit late or fail?',
    answer: 'Missing the DSPT submission deadline or submitting with a not-yet-met status can have serious consequences for health and social care organisations. Late or failed submissions are reported to NHS England and the relevant commissioning organisation, and can affect the organisation\'s ability to receive payments, renew contracts, or maintain data sharing agreements. For GP practices, a failed DSPT can affect CQC ratings and NHS England compliance assessments. For independent providers, it can result in contract suspension. NHS Digital can also restrict or revoke access to NHS national systems and networks for organisations that do not meet DSPT requirements. Infraspine\'s early engagement approach means we begin the preparation process months before the submission deadline, providing ample time for remediation and ensuring organisations are never in a position where late submission is the only option.',
  },
  {
    question: 'How can Infraspine help us pass the DSPT?',
    answer: 'Infraspine supports health and social care organisations through the full DSPT cycle: starting with a gap assessment to identify where you are against each standard, developing a prioritised action plan to close gaps, drafting and implementing required policies and procedures, setting up the mandatory data security training programme and tracking completion, collecting and organising the evidence required for each assertion, completing the DSPT online submission, and obtaining ASO sign-off before the deadline. We can engage at any point in the DSPT cycle — even organisations that have received a not-yet-met submission can engage Infraspine to remediate gaps and prepare a revised submission or evidence-based improvement plan. Our team has extensive experience with the DSPT system and knows exactly what evidence assessors look for and what level of detail is required for each assertion type.',
  },
]

const BREADCRUMB = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Cybersecurity', href: '/services/cyber-security' },
  { label: 'NHS-DSPT Assessment', href: '/services/cyber-security/nhs-dspt' },
]

const ACCENT = '#0891B2'
const HERO_BG = '#00101a'
const STAT_BG = '#ECFEFF'
const STAT_BORDER = '#A5F3FC'

export default function NhsDsptPage() {
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
              NHS DSPT Assessment<br />
              <span style={{ color: ACCENT }}>& Submission Support.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              Infraspine supports health and social care organisations through the full NHS Data Security and Protection Toolkit annual submission cycle — from gap assessment and evidence collection through to mandatory assertion completion and ASO sign-off, covering all 10 NDG data security standards.
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
                Request DSPT Support <ArrowRight size={14} />
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
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>DSPT Service Areas</span>
              <div className="h-px w-6" style={{ background: ACCENT }} />
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six DSPT Support Capabilities
            </h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From initial gap assessment and evidence collection through to policy development, training, and final submission — Infraspine manages the complete DSPT annual cycle.
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
        title="NHS DSPT — Frequently Asked Questions"
        subtitle="Common questions from health and social care organisations preparing for their annual DSPT submission."
        faqs={FAQS}
        accent={ACCENT}
      />

      <CTABanner
        heading="Need Support With Your NHS DSPT Submission?"
        subheading="Contact Infraspine for a free DSPT readiness assessment. We will identify your gaps against all 10 NDG standards and give you a clear plan to achieve a standards-met submission."
        primaryLabel="Request DSPT Support"
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
