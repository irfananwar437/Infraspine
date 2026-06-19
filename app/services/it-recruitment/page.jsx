import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Users, Zap, CheckCircle, Briefcase,
  BarChart2, Settings, ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'IT & Tech Recruitment Pakistan | Technology Staffing | Infraspine',
  description: 'Infraspine IT Recruitment: specialist technology staffing for permanent, contract, and interim roles. 500+ placements, 97% retention at 12 months, 48-hour shortlist delivery. Deep technical screening by practitioners.',
  alternates: { canonical: 'https://www.infraspine.com/services/it-recruitment' },
  openGraph: {
    title: 'IT & Tech Recruitment Pakistan | Technology Staffing | Infraspine',
    description: 'Specialist IT and technology recruitment across Pakistan. Permanent, contract, and interim placements with deep technical screening and 48-hour shortlist delivery.',
    url: 'https://www.infraspine.com/services/it-recruitment',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'IT Recruitment',
  name: 'Infraspine IT & Technology Recruitment',
  description: 'Specialist IT and technology recruitment for permanent, contract, and interim roles. Deep technical screening by practitioners with 500+ placements and 97% retention at 12 months.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/it-recruitment',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '500+', label: 'Placements Made', color: '#7C3AED' },
  { value: '48hr', label: 'Shortlist Delivery', color: '#00C853' },
  { value: '97%', label: 'Retention at 12 Months', color: '#2563EB' },
  { value: '200+', label: 'Technology Roles', color: '#D97706' },
]

const CAPABILITIES = [
  {
    icon: Users,
    title: 'Permanent IT Recruitment',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Hiring the right permanent technology professional is one of the highest-value decisions a business makes — and one of the most costly to get wrong. A poor hire in a senior technical role can set a team back by 12 to 18 months through wasted onboarding, knowledge gaps, and the disruption of a subsequent exit. Our permanent recruitment process is built around reducing that risk. We do not simply forward CVs from a job board search — we source actively from our network of technology professionals, conduct structured technical assessments, and present you with a shortlist of candidates who have been verified for both technical competency and cultural alignment. Our 97% retention rate at 12 months is the result of this rigorous approach.',
    points: [
      'Active sourcing from verified technology professional network',
      'Structured technical screening by practitioners in each specialism',
      'Cultural fit assessment and reference checking',
      'Offer management and onboarding transition support',
    ],
  },
  {
    icon: Zap,
    title: 'Contract & Interim Staffing',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'Technology projects and operational demands do not always align with your permanent headcount. When you need to stand up a development team for a six-month project, backfill a senior engineer on maternity leave, or bring in specialist expertise for a cloud migration that your internal team lacks, contract and interim staffing gives you the flexibility to scale your technical capability without the commitment of permanent hire. We maintain an active bench of pre-vetted contract technology professionals across development, infrastructure, security, data, and project management disciplines. Many assignments can be filled within 48 hours from our active candidate pool, significantly faster than advertising-led recruitment.',
    points: [
      'Pre-vetted contractor bench across all technology disciplines',
      '48-hour placement for common contract roles from active pool',
      'IR35 compliance guidance and engagement structuring',
      'Contractor management including timesheets and invoicing',
    ],
  },
  {
    icon: CheckCircle,
    title: 'Technical Screening & Assessment',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'The most important differentiator between specialist IT recruitment and generic recruitment is the quality of technical screening. Generic recruiters screen candidates against a list of keywords on a CV — they cannot distinguish between someone who has listed Python as a skill and someone who has architected production data pipelines in Python for five years. Our screening team includes practicing technologists across software development, cloud infrastructure, cybersecurity, and data engineering who conduct structured competency interviews, practical coding assessments where relevant, and architecture-level technical discussions for senior roles. This means every candidate we present to you has been genuinely tested against the requirements of the role.',
    points: [
      'Competency-based technical interviews conducted by practitioners',
      'Practical coding and architecture assessments for engineering roles',
      'Cloud platform certification and skills verification',
      'Security clearance checks and identity verification',
    ],
  },
  {
    icon: Briefcase,
    title: 'Executive & CXO Search',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Hiring a CTO, CIO, CISO, or VP of Engineering requires a different approach from filling an individual contributor role. The candidate pool is small, most of the best candidates are not actively looking, and the consequences of a wrong hire at the executive level are felt across the entire organisation. Our executive search practice is built on deep network access and a confidential, research-led approach that identifies and approaches high-calibre technology leaders who would not be found through conventional advertising. We conduct in-depth leadership assessments, map candidates against your specific strategic and cultural requirements, and manage a discreet process that protects both parties throughout.',
    points: [
      'Research-led executive search for CTO, CIO, CISO, and VP roles',
      'Confidential outreach to passive senior technology candidates',
      'Leadership assessment and strategic alignment evaluation',
      'Board-level compensation benchmarking and negotiation support',
    ],
  },
  {
    icon: BarChart2,
    title: 'Volume Recruitment Campaigns',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Organisations expanding a development centre, building out a security operations team, or standing up a new technical function often need to hire ten, twenty, or fifty technology professionals within a condensed timeframe. Volume recruitment campaigns require a fundamentally different operational model from individual placement — you need a coordinated sourcing strategy, a structured assessment process that can handle high throughput without sacrificing quality, and an experienced campaign manager who can orchestrate every element from advertising through assessment centres to offer management. We have delivered volume technology recruitment campaigns for organisations requiring rapid scale across Pakistan.',
    points: [
      'Multi-channel sourcing strategy for high-volume requirements',
      'Assessment centre design and facilitation for volume throughput',
      'ATS configuration and candidate pipeline management',
      'Campaign reporting with real-time hire progress dashboards',
    ],
  },
  {
    icon: Settings,
    title: 'RPO & Managed Service',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Recruitment Process Outsourcing (RPO) transfers the operational management of your IT recruitment function to Infraspine, embedding our team within your organisation as your dedicated in-house talent acquisition capability. This model is highly effective for organisations that have an ongoing, predictable volume of technology hiring but do not want to build and manage an internal recruitment infrastructure. Under an RPO model we manage your employer brand, job advertising, candidate sourcing, screening, interview coordination, and offer management. You benefit from reduced cost-per-hire, faster time-to-fill, consistent candidate quality, and full reporting transparency without the overhead of maintaining a permanent in-house recruitment team.',
    points: [
      'Embedded RPO team operating as your in-house talent function',
      'Employer brand management and technology job advertising',
      'End-to-end candidate pipeline management with SLA reporting',
      'Cost-per-hire analytics and recruitment efficiency benchmarking',
    ],
  },
]

const FAQS = [
  {
    question: 'What IT roles do you recruit for?',
    answer: 'We recruit across the full spectrum of technology disciplines including software engineering (frontend, backend, full-stack, mobile), cloud and infrastructure (AWS, Azure, GCP, DevOps, SRE), cybersecurity (SOC analysts, penetration testers, CISO, DPO), data (data engineers, data scientists, ML engineers, BI developers), project management (IT project managers, Scrum Masters, programme managers), and technology leadership (CTO, CIO, VP Engineering, Head of IT). We cover both specialist technical roles and technology management positions at all seniority levels from graduate entry to C-suite executive.',
  },
  {
    question: 'How quickly can you provide a shortlist?',
    answer: 'For roles where we have active candidates in our network, we can deliver a qualified shortlist within 48 hours. For more specialist or senior roles that require active sourcing and assessment, our standard commitment is a shortlist within five to seven working days. Executive search and volume recruitment campaigns operate on longer timelines agreed at the start of the engagement. All candidates in our shortlists have completed technical screening before submission — we do not present CV-only shortlists without prior assessment.',
  },
  {
    question: 'How do you screen candidates technically?',
    answer: 'Our technical screening process is conducted by practicing technologists rather than non-technical recruiters reading from a competency framework. For engineering roles, candidates complete a structured technical interview covering language proficiency, system design, and problem-solving, with coding assessments for hands-on roles. For infrastructure and cloud roles, we assess platform knowledge, architecture principles, and hands-on tooling experience. For security roles, we evaluate threat knowledge, tooling familiarity, and scenario-based incident response thinking. For senior leadership roles, we conduct architecture and strategy discussions that assess depth of judgment rather than surface-level knowledge. This practitioner-led screening is what allows us to achieve our 97% retention rate.',
  },
  {
    question: 'What is the difference between permanent and contract recruitment?',
    answer: 'Permanent recruitment places a candidate as a full-time employee of your organisation, typically on an open-ended contract. The candidate becomes part of your team with full employment benefits, notice periods, and the expectation of a long-term relationship. Contract recruitment places a professional on a fixed-term engagement — they remain a contractor rather than an employee, typically paid on a day rate or project fee, without employment benefits or long notice periods. Contract staffing is best suited to project-based work, specialist skill gaps, temporary capacity needs, or situations where you want to assess someone before committing to a permanent offer. We can advise on the most appropriate engagement model for your specific requirement.',
  },
  {
    question: 'What is RPO — Recruitment Process Outsourcing?',
    answer: 'RPO is a model where an external provider takes over the operational management of your recruitment function, acting as your in-house talent acquisition team. Under an RPO arrangement, our team manages your end-to-end hiring process — employer branding, job advertising, candidate sourcing, screening, interview scheduling, offer management, and onboarding coordination — but operates as an embedded extension of your organisation rather than a third-party agency. RPO is particularly valuable for organisations with consistent, ongoing technology hiring volumes where maintaining a permanent internal recruitment team is cost-inefficient. It delivers lower cost-per-hire, faster time-to-fill, and higher quality consistency compared to reactive agency recruitment.',
  },
]

export default function ITRecruitmentPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'IT Recruitment', href: '/services/it-recruitment' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#0f0020' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#7C3AED,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#7C3AED' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#7C3AED' }}>IT & Technology Recruitment</span>
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Specialist IT Recruitment —{' '}
              <span style={{ color: '#7C3AED' }}>Screened by Practitioners, Not Keyword Matchers.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Generic recruiters search job boards and forward CVs. We screen technology candidates the way a senior engineer would — through structured technical assessments, competency interviews, and architecture discussions conducted by practitioners in each specialism. With 500+ placements across Pakistan and a 97% retention rate at 12 months, our approach consistently produces hires who perform and stay.
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
                Submit a Vacancy <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Discuss Your Hiring Needs
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
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#7C3AED' }}>The Case for Specialist Recruitment</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Why Technology Hiring Requires Technology Expertise
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The Pakistan technology talent market is competitive and highly specialised. A senior cloud architect, a skilled penetration tester, and an experienced data engineer are all described as \'IT professionals\' but require entirely different knowledge to assess effectively. Generic recruitment agencies lack the technical depth to distinguish a genuine expert from a well-formatted CV — which is why so many technology hires made through non-specialist agencies fail to meet performance expectations within the first year.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Our recruitment team includes practicing engineers, security specialists, and technology leaders who know what good looks like in each discipline. When a software engineering candidate claims five years of TypeScript experience, our screening process tests that claim — we do not accept it at face value. This practitioner-led screening is what drives our 97% retention rate and prevents the costly cycle of hiring, disappointing performance, and re-hiring.
              </p>
              <p className="text-[15px] leading-relaxed mb-6" style={{ color: '#64748B' }}>
                We operate as true specialists — we do not recruit across every industry and every function. Our entire focus is technology talent, which means we understand the market, maintain genuine relationships with high-calibre candidates, and can advise you on realistic salary expectations, talent availability, and skills trade-offs for your specific requirement.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#7C3AED', text: 'Technical screening conducted by practitioners in each specialism' },
                  { color: '#2563EB', text: '97% candidate retention at 12 months — industry average is 67%' },
                  { color: '#00C853', text: '48-hour shortlist from active candidate pool for common roles' },
                  { color: '#D97706', text: 'Specialist focus on technology — not a generalist agency with an IT desk' },
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
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>Recruitment Quality Comparison</p>
              <div className="space-y-4">
                {[
                  { label: '12-Month Retention', generic: '67% average', specialist: '97% Infraspine', color: '#00C853' },
                  { label: 'Technical Screening', generic: 'CV keyword match', specialist: 'Practitioner-led', color: '#00C853' },
                  { label: 'Shortlist Speed', generic: '2–3 weeks', specialist: '48 hours', color: '#00C853' },
                  { label: 'Market Intelligence', generic: 'Generic salary data', specialist: 'Live tech market data', color: '#00C853' },
                  { label: 'Candidate Network', generic: 'Job board only', specialist: 'Active tech community', color: '#00C853' },
                  { label: 'Executive Search', generic: 'Rarely available', specialist: 'Dedicated practice', color: '#00C853' },
                ].map(p => (
                  <div key={p.label} className="grid grid-cols-3 gap-2 py-2 border-b last:border-0 text-[12px]" style={{ borderColor: '#E2E8F0' }}>
                    <div className="font-semibold" style={{ color: '#0A1628' }}>{p.label}</div>
                    <div style={{ color: '#DC2626' }}>{p.generic}</div>
                    <div className="font-semibold" style={{ color: '#00C853' }}>{p.specialist}</div>
                  </div>
                ))}
                <div className="grid grid-cols-3 gap-2 text-[10px] font-bold uppercase tracking-wider pt-1" style={{ color: '#94A3B8' }}>
                  <div></div><div>Generic Agency</div><div>Infraspine</div>
                </div>
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
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#7C3AED' }}>Recruitment Services</span>
              <div className="h-px w-6" style={{ background: '#7C3AED' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six IT Recruitment Service Areas
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From permanent placements and contract staffing through executive search and fully managed RPO engagements.
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

      <FAQAccordion faqs={FAQS} accent="#7C3AED"
        title="IT Recruitment Questions Answered"
        subtitle="Common questions from organisations looking to hire technology talent." />

      <CTABanner
        heading="Find Your Next Technology Hire in 48 Hours"
        subheading="Submit your vacancy today. Our specialist recruiters will deliver a technically screened shortlist within 48 hours for common roles."
        primaryCTA={{ label: 'Submit a Vacancy', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
