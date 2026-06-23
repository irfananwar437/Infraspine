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
  CheckCircle, FileText, Shield, Search, Users, BarChart2, ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'ISO 27001 Consulting Pakistan | ISO 27001 Certification Support',
  description: 'ISO 27001:2022 consulting and certification support in Pakistan. Infraspine delivers gap assessments, ISMS implementation, internal audits, and full certification body liaison for ISO/IEC 27001.',
  alternates: { canonical: 'https://www.infraspine.com/services/cyber-security/iso-27001' },
  openGraph: {
    title: 'ISO 27001 Consulting Pakistan | ISO 27001 Certification Support | Infraspine',
    description: 'End-to-end ISO 27001:2022 consulting — gap assessment, ISMS build, Annex A controls, internal audit, and certification support. Infraspine Pakistan.',
    url: 'https://www.infraspine.com/services/cyber-security/iso-27001',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ISO 27001 Consulting',
  description: 'Gap assessment, ISMS implementation, internal audits, and full certification support for ISO/IEC 27001:2022 — the international standard for information security management.',
  url: 'https://www.infraspine.com/services/cyber-security/iso-27001',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  areaServed: 'Pakistan',
  serviceType: 'ISO 27001 Certification Consulting',
}

const STATS = [
  { value: 'ISO 27001:2022', label: 'Latest standard version', color: '#2563EB' },
  { value: '93', label: 'Annex A controls covered', color: '#2563EB' },
  { value: 'Full ISMS', label: 'Implementation delivered', color: '#2563EB' },
  { value: 'Certified', label: 'Certification achieved', color: '#2563EB' },
]

const CAPABILITIES = [
  {
    icon: Search,
    title: 'Gap Assessment & Risk Register',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Before any ISMS implementation work begins, Infraspine conducts a structured gap assessment to establish exactly where your organisation currently stands against ISO/IEC 27001:2022. Our assessors review your existing policies, technical controls, and security processes against each of the standard\'s clauses and Annex A control domains. Every gap is documented with a risk severity rating, an indicative implementation effort, and a recommended remediation approach. The gap assessment also forms the starting point for your Information Security Risk Register — a living document that identifies information assets, threats, vulnerabilities, and residual risk levels, which is a mandatory deliverable under the standard. This phase typically takes one to two weeks and sets the entire implementation roadmap.',
    points: ['Full ISO 27001:2022 clause review', 'RAG-rated gap register', 'Information asset inventory', 'Risk register creation'],
  },
  {
    icon: FileText,
    title: 'ISMS Policy Development',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'ISO 27001 certification requires a documented Information Security Management System underpinned by a comprehensive policy suite. Many organisations fail their first audit attempt because their policies exist in name only — they are generic, out of date, or not aligned to the organisation\'s actual operating environment. Infraspine develops a bespoke policy library tailored to your industry, size, and risk profile. This includes the Information Security Policy, Acceptable Use Policy, Access Control Policy, Cryptography Policy, Data Classification Policy, Supplier Security Policy, and all other mandatory and recommended documents required under the standard. Every policy is written in clear, plain language and reviewed with your team before finalisation to ensure it reflects how your organisation actually operates.',
    points: ['Full mandatory policy suite', 'Tailored to your operating environment', 'Plain-language drafting', 'Reviewed with your team before sign-off'],
  },
  {
    icon: Shield,
    title: 'Annex A Control Implementation',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'ISO 27001:2022 Annex A contains 93 information security controls across four themes: Organisational, People, Physical, and Technological. Not every control is mandatory — the standard requires a risk-based selection process documented in a Statement of Applicability. Infraspine guides your team through the SoA process, selecting and justifying controls based on your risk register and business context. For each selected control, we provide an implementation guide covering technical configuration, process design, and evidence requirements. Our consultants work alongside your IT team to implement technical controls — including access management, encryption standards, logging, and vulnerability management — ensuring they are correctly configured and generating the audit evidence required for certification.',
    points: ['Statement of Applicability (SoA)', 'Risk-based control selection', 'Technical control configuration', 'Evidence collection guidance'],
  },
  {
    icon: CheckCircle,
    title: 'Internal Audit Programme',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'ISO 27001 requires organisations to conduct internal audits of their ISMS at planned intervals before seeking certification. An effective internal audit programme identifies non-conformities and weaknesses before the external certification auditor does — allowing you to remediate issues in a controlled way rather than under time pressure. Infraspine designs and conducts your internal audit programme: developing audit schedules, audit checklists aligned to the standard\'s clauses, and competence-based audit teams. We conduct the audit, produce formal internal audit reports with non-conformity (NC) and observation (OBS) findings, and track corrective actions through to closure. This process also prepares your team for the rigour of the Stage 2 certification audit, reducing the risk of audit failure.',
    points: ['Audit schedule and checklists', 'Clause-by-clause audit coverage', 'NC and observation reporting', 'Corrective action tracking'],
  },
  {
    icon: Users,
    title: 'Management Review Support',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'ISO 27001 places clear obligations on top management to actively oversee the ISMS — not just delegate it to an IT team. The standard requires documented management review meetings at planned intervals, covering the performance of the ISMS, changes in the risk environment, audit results, and continual improvement objectives. Many organisations struggle to demonstrate meaningful management engagement to their certification auditors. Infraspine prepares your management review agenda, pre-populates the required input data from ISMS monitoring outputs, facilitates the review meeting, and produces a formal management review record that satisfies certification audit requirements. We also help senior leadership understand their specific obligations under the standard, so they can answer auditor questions confidently.',
    points: ['Management review agenda preparation', 'ISMS performance data collation', 'Formal review record production', 'Leadership obligation briefing'],
  },
  {
    icon: BarChart2,
    title: 'Certification Body Liaison',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Selecting the right certification body and managing the audit process effectively are critical to a successful first-time certification. Infraspine manages the certification body selection process, advising on UKAS-accredited bodies appropriate to your sector and size, and preparing your organisation for both the Stage 1 (documentation review) and Stage 2 (on-site audit) assessments. We coordinate document submissions, manage audit logistics, brief your team on what to expect during each audit stage, and prepare responses to any observations or minor non-conformities raised by the external auditor. Post-certification, we support your annual surveillance audits and three-year recertification cycle, ensuring the ISMS remains compliant as your organisation and the threat landscape evolve.',
    points: ['UKAS-accredited body selection', 'Stage 1 and Stage 2 preparation', 'Auditor liaison and logistics', 'Surveillance audit support'],
  },
]

const FAQS = [
  {
    question: 'What is ISO 27001?',
    answer: 'ISO/IEC 27001 is the international standard for Information Security Management Systems (ISMS). It specifies the requirements for establishing, implementing, maintaining, and continually improving an ISMS — a systematic approach to managing sensitive information so that it remains secure. The current version is ISO/IEC 27001:2022, published in October 2022. Organisations that achieve certification have demonstrated to an independent, accredited auditor that their information security management system meets the standard\'s requirements. ISO 27001 certification is recognised globally and is increasingly required as a condition of doing business — particularly in financial services, healthcare, technology, and public sector supply chains.',
  },
  {
    question: 'How long does it take to achieve ISO 27001 certification?',
    answer: 'For most small to mid-size organisations, the journey from initial gap assessment to achieving ISO 27001 certification takes between four and nine months, depending on the current maturity of information security practices. Organisations with a relatively mature security baseline — existing policies, access controls, and incident management processes — can often achieve certification in four to six months. Those starting from a low baseline typically need seven to nine months to implement all required controls, conduct internal audits, and complete the management review cycle before the certification audit. Infraspine provides a realistic milestone timeline in the proposal based on your specific gap assessment findings.',
  },
  {
    question: 'What is an ISMS?',
    answer: 'An Information Security Management System (ISMS) is the overall framework of policies, processes, procedures, guidelines, and associated resources and activities that an organisation uses to protect its information assets. Under ISO 27001, the ISMS is not just a set of technical controls — it is a management system in the same sense as a quality management system (ISO 9001) or an environmental management system (ISO 14001). It includes risk assessment and treatment processes, a policy framework, defined roles and responsibilities, staff awareness and training, performance measurement, internal audit, management review, and a continual improvement cycle. An effective ISMS means security is managed systematically and consistently, not left to the judgement of individual team members.',
  },
  {
    question: 'What are the Annex A controls?',
    answer: 'Annex A of ISO 27001:2022 contains 93 information security controls grouped across four themes: Organisational controls (37 controls covering governance, policies, and supplier management), People controls (8 controls covering human resource security and awareness), Physical controls (14 controls covering physical and environmental security), and Technological controls (34 controls covering technical security measures such as access management, encryption, and vulnerability management). Not every control is mandatory for every organisation — the standard requires a risk-based selection process documented in a Statement of Applicability (SoA). The SoA lists every Annex A control, states whether it is applicable to the organisation, and justifies any exclusions.',
  },
  {
    question: 'Do we need a consultant or can we do it ourselves?',
    answer: 'It is possible to achieve ISO 27001 certification without external consulting support, but most organisations find it significantly harder, slower, and more expensive to do so without guidance. The standard is detailed and requires knowledge of risk assessment methodology, policy writing, control implementation, and audit practice that most IT teams do not have in depth. Common DIY pitfalls include an incomplete risk register, a generic policy suite that does not reflect actual operations, and insufficient audit evidence — all of which result in non-conformities at the certification audit. Infraspine provides consulting support at the level your team needs — from full-service implementation through to a review-and-advise model where your team does the work and we quality-assure the outputs before the auditor arrives.',
  },
]

const BREADCRUMB = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Cybersecurity', href: '/services/cyber-security' },
  { label: 'ISO 27001 Consulting', href: '/services/cyber-security/iso-27001' },
]

const ACCENT = '#2563EB'
const HERO_BG = '#00082a'
const STAT_BG = '#EFF6FF'
const STAT_BORDER = '#BFDBFE'

export default function Iso27001Page() {
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
              ISO 27001 Consulting<br />
              <span style={{ color: ACCENT }}>& Certification Support.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              Infraspine guides organisations through every stage of ISO/IEC 27001:2022 — from the initial gap assessment and ISMS implementation through to internal audits, management review, and achieving certification. We have supported organisations from a broad range of sectors to achieve first-time certification on schedule and without audit surprises.
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
                Start Your ISO 27001 Journey <ArrowRight size={14} />
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
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>Our Approach</span>
              <div className="h-px w-6" style={{ background: ACCENT }} />
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Phases to ISO 27001 Certification
            </h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Our structured consulting methodology takes you from initial gap assessment to certified ISMS with no wasted effort and no surprises at the certification audit.
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
        title="ISO 27001 — Frequently Asked Questions"
        subtitle="Common questions from organisations beginning their ISO 27001 certification journey."
        faqs={FAQS}
        accent={ACCENT}
      />

      <CTABanner
        heading="Ready to Achieve ISO 27001 Certification?"
        subheading="Book a free gap assessment scoping call with Infraspine. We will give you an honest timeline, cost estimate, and implementation plan — no commitment required."
        primaryLabel="Start Your ISO 27001 Journey"
        primaryHref="/contact-us"
        secondaryLabel="Call Us Now"
        secondaryHref="tel:+923001234567"
      />

      <RelatedServices currentHref="/services/cyber-security/iso-27001" accent="#DC2626" />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
