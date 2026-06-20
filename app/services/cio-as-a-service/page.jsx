import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  BarChart2, Zap, Globe, Briefcase,
  Shield, Users, ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'CIO as a Service Pakistan | Virtual Chief Information Officer | Infraspine',
  description: 'Infraspine CIO as a Service: experienced CIO-level IT leadership on a fractional or part-time basis. Board-level technology strategy, vendor oversight, and digital transformation leadership without full-time cost.',
  alternates: { canonical: 'https://www.infraspine.com/services/cio-as-a-service' },
  openGraph: {
    title: 'CIO as a Service Pakistan | Virtual Chief Information Officer | Infraspine',
    description: 'Fractional and part-time CIO leadership for Pakistan businesses. IT strategy, digital transformation, vendor governance, and board-level reporting without the full-time executive cost.',
    url: 'https://www.infraspine.com/services/cio-as-a-service',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'CIO as a Service',
  name: 'Infraspine CIO as a Service',
  description: 'Experienced CIO-level strategic IT leadership on a fractional or part-time basis. Board-level technology strategy, vendor oversight, and digital transformation leadership for Pakistan businesses.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/cio-as-a-service',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: 'Board-Level', label: 'IT Leadership', color: '#EA580C' },
  { value: 'Fractional', label: '& Part-Time Options', color: '#2563EB' },
  { value: 'Strategy', label: '+ Execution', color: '#16A34A' },
  { value: 'Immediate', label: 'Availability', color: '#7C3AED' },
]

const CAPABILITIES = [
  {
    icon: BarChart2,
    title: 'IT Strategy Development',
    color: '#EA580C',
    bg: '#FFF7ED',
    desc: 'Technology strategy is not simply a list of systems to procure — it is a coherent plan that aligns the organisation\'s technology investments with its business objectives, competitive position, and operating model. Many businesses operate without a documented IT strategy, making decisions reactively as individual needs arise, which results in a fragmented technology estate, duplicated capabilities, and mounting technical debt. Our fractional CIOs develop a comprehensive IT strategy that articulates where the organisation needs to be technologically in three to five years, what the current state is, and what the roadmap is to close the gap. This strategy becomes the framework against which every subsequent technology investment decision is evaluated, ensuring coherence and avoiding the costly mistakes of uncoordinated point solutions.',
    points: [
      'Current state technology assessment and capability gap analysis',
      'Three-to-five-year IT strategy aligned to business objectives',
      'Technology investment prioritisation framework',
      'Annual strategy review and refresh cycle',
    ],
  },
  {
    icon: Zap,
    title: 'Digital Transformation Leadership',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Digital transformation is one of the most overused phrases in business — and also one of the most genuinely important strategic journeys an organisation can undertake. But transformation without experienced leadership produces the outcomes most commonly reported: failed implementations, change fatigue, and technology investments that do not deliver the business benefits they promised. Our fractional CIOs have led digital transformation programmes across multiple industries and know how to navigate the combination of technical complexity, organisational change, and stakeholder management that successful transformation requires. We provide strategic direction, programme oversight, supplier management, and the credibility to hold both technology vendors and internal teams accountable for commitments made.',
    points: [
      'Digital transformation programme leadership and governance',
      'Change management framework and stakeholder engagement strategy',
      'Supplier selection and management for transformation programmes',
      'Benefits tracking and post-implementation value realisation',
    ],
  },
  {
    icon: Globe,
    title: 'Technology Roadmap Planning',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'A technology roadmap translates the IT strategy into a sequenced delivery plan — it identifies what needs to be built, bought, or retired, in what order, to what timeline, and at what cost. Without a roadmap, technology decisions are made in isolation and organisations find themselves with incompatible systems, unsupported legacy platforms that are too embedded to remove, and investment cycles that do not reflect business priorities. Our fractional CIOs develop rolling three-year technology roadmaps that are maintained and updated as business priorities evolve and new technologies emerge. The roadmap becomes the primary tool for aligning IT investment planning with the annual budgeting cycle and for communicating the technology agenda to board and senior leadership.',
    points: [
      'Three-year rolling technology roadmap development and maintenance',
      'Legacy system assessment and rationalisation planning',
      'Technology refresh and lifecycle management planning',
      'Roadmap integration with annual budget planning cycle',
    ],
  },
  {
    icon: Briefcase,
    title: 'Vendor & Contract Management',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Technology vendor relationships represent significant expenditure for most organisations — licensing fees, support contracts, professional services engagements, and hardware procurement can collectively account for millions of pounds annually. Yet most organisations lack the technical expertise and commercial experience at a senior level to negotiate effectively with enterprise software vendors, cloud providers, and systems integrators who deal with these negotiations professionally every day. Our fractional CIOs bring the vendor-side knowledge required to level the playing field — understanding contract structures, identifying unfavourable terms, negotiating pricing benchmarks, and establishing governance frameworks that hold vendors accountable for performance commitments throughout the contract term.',
    points: [
      'Vendor selection and due diligence for technology procurement',
      'Contract negotiation and commercial terms review',
      'Vendor performance management and SLA governance',
      'Technology spend rationalisation and cost reduction programmes',
    ],
  },
  {
    icon: Shield,
    title: 'IT Governance & Risk',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'IT governance is the framework of policies, processes, and controls that ensures technology is used appropriately, risks are managed, and the organisation meets its legal and regulatory obligations. Without effective governance, organisations are exposed to data breaches from unpatched systems, regulatory penalties from inadequate data protection practices, operational disruptions from unmanaged dependencies, and financial losses from shadow IT expenditure that bypasses financial controls. Our fractional CIOs establish a governance framework appropriate to the organisation\'s scale and risk appetite — covering information security policy, data governance, change management, access control, and business continuity — and chair the governance structures that provide oversight and accountability.',
    points: [
      'IT governance framework design and implementation',
      'Information security policy development and maintenance',
      'IT risk register management and board risk reporting',
      'Regulatory compliance oversight including GDPR and PCI-DSS',
    ],
  },
  {
    icon: Users,
    title: 'Board Reporting & Communication',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'One of the most common failures in technology leadership is the translation gap between what the IT team knows and what the board understands. Technical leaders often communicate in technology terms that do not resonate with business-focused board members, resulting in technology being treated as a cost centre to be minimised rather than a strategic capability to be invested in. Our fractional CIOs are experienced at communicating technology strategy, risk, and investment decisions in business language that resonates with CFOs, CEOs, and non-executive directors. We prepare concise board papers that frame technology decisions in terms of business value, risk exposure, and competitive positioning — giving your board the information they need to make confident technology investment decisions.',
    points: [
      'Board-level IT strategy and investment papers',
      'Technology risk reporting in business-focused language',
      'CIO dashboard with KPIs aligned to business outcomes',
      'Investor and auditor briefings on technology capability',
    ],
  },
]

const FAQS = [
  {
    question: 'What is a CIO as a Service?',
    answer: 'CIO as a Service (CIOaaS) is a model where an experienced Chief Information Officer provides strategic IT leadership to your organisation on a fractional or part-time basis rather than as a full-time employee. Instead of hiring a full-time CIO at an executive salary — which can cost £150,000 to £250,000 per year plus benefits, pension, and equity — you engage a CIOaaS provider for a defined number of days per month at a fraction of that cost. You receive all of the strategic leadership, board-level credibility, and technology expertise of a seasoned CIO, applied specifically to your organisation\'s needs, without the full-time commitment on either side.',
  },
  {
    question: 'Who benefits most from a fractional CIO?',
    answer: 'CIOaaS is most valuable for three types of organisation. First, mid-market businesses that are too complex to operate without a senior technology leader but not large enough to justify the cost of a full-time CIO — typically organisations with 50 to 500 employees that are digitally dependent and spending significantly on technology. Second, organisations undergoing a period of significant technology change — a digital transformation programme, a major system implementation, or a post-merger integration — that need experienced senior leadership for the duration of that programme without a permanent hire. Third, organisations whose current senior IT leader has moved on and who need an experienced interim CIO to stabilise operations and provide strategic direction while a permanent successor is recruited.',
  },
  {
    question: 'What is the difference between a CIO and a CTO?',
    answer: 'A CIO (Chief Information Officer) is primarily responsible for the internal technology strategy of the organisation — the systems, infrastructure, and data that enable the business to operate. Their focus is on aligning technology investment with business strategy, managing technology risk and governance, leading digital transformation, and ensuring that the organisation\'s technology operates reliably and efficiently. A CTO (Chief Technology Officer) is primarily focused on the technology in the product or service the organisation sells — they lead engineering and product development, make technology stack decisions, and drive innovation in what the business builds. Many technology companies need both roles; organisations that are not primarily technology businesses typically need a CIO more than a CTO.',
  },
  {
    question: 'How does a CIOaaS integrate with our existing team?',
    answer: 'Integration with your existing team is handled carefully to ensure the fractional CIO adds value rather than creating confusion about authority and accountability. Typically, the CIOaaS engages with your senior leadership team and board in a strategic advisory capacity, provides direction and oversight to your internal IT team or managed service providers, and takes ownership of specific deliverables such as the IT strategy, technology roadmap, or vendor negotiations. The exact operating model is agreed at the outset and documented in a governance charter that clarifies the CIOaaS\'s remit, decision-making authority, and escalation paths. Your internal IT team continues to handle day-to-day operations while the fractional CIO provides strategic direction, governance, and board-level representation.',
  },
  {
    question: 'How many hours per week does a fractional CIO work?',
    answer: 'Engagement models are flexible and agreed based on the organisation\'s needs. A typical fractional CIO engagement involves two to three days per week, which is sufficient for most mid-market organisations to have meaningful strategic leadership and regular board engagement. For specific programme phases — such as during a major system implementation or strategic planning cycle — the commitment may temporarily increase. For smaller organisations needing primarily strategic direction and governance oversight, a one-day-per-week model may be appropriate. We agree the engagement model at the outset and review it regularly as the organisation\'s needs evolve.',
  },
]

export default function CIOAsAServicePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'CIO as a Service', href: '/services/cio-as-a-service' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#1c0800' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#EA580C,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-14 sm:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#EA580C' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#EA580C' }}>CIO as a Service</span>
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Board-Level IT Leadership —{' '}
              <span style={{ color: '#EA580C' }}>Fractional Cost. Full Executive Impact.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              A full-time CIO costs £150,000 to £250,000 per year before benefits, pension, and bonus. For the majority of mid-market businesses in Pakistan, that investment is difficult to justify — yet the strategic IT leadership a CIO provides is genuinely needed. Infraspine CIO as a Service gives you an experienced technology executive who attends your board, develops your IT strategy, leads your digital transformation, manages your vendors, and represents technology at the highest level of your organisation — for a fraction of the full-time cost.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-4 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[22px] font-black mb-1 leading-tight" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[11px] font-semibold leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#EA580C', color: '#fff' }}>
                Speak to a Fractional CIO <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Request a Technology Audit
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
                <div className="h-px w-6" style={{ background: '#EA580C' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#EA580C' }}>The Business Case</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Strategic Technology Leadership Is Not Optional for Ambitious Businesses
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Organisations that operate without senior technology leadership make the same predictable mistakes: they procure systems without a coherent strategy, sign unfavourable vendor contracts, accumulate technical debt, fail to manage cybersecurity risk at a board level, and invest in digital transformation initiatives that do not deliver returns because the programme lacks strategic oversight. These are not IT problems — they are business problems with significant financial consequences.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The CIOaaS model emerged as a response to a genuine market gap: the demand for experienced technology leadership at the mid-market level, where the need is real but the budget for a full-time executive appointment is not. A fractional CIO brings all of the experience, credibility, and commercial judgment of a seasoned technology leader, deployed across your organisation for the specific days and deliverables that matter most, without the overhead of a full-time executive hire.
              </p>
              <p className="text-[15px] leading-relaxed mb-6" style={{ color: '#64748B' }}>
                Our fractional CIOs have held full-time CIO and CTO roles at organisations across financial services, manufacturing, retail, and professional services. They bring the board-level presence and strategic judgment that comes from having been genuinely accountable for enterprise technology at the highest level.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#EA580C', text: 'CIO-level expertise at 20–30% of full-time executive cost' },
                  { color: '#2563EB', text: 'Immediate availability — no six-month executive recruitment process' },
                  { color: '#16A34A', text: 'Board-ready from day one — experienced at C-suite and NED level' },
                  { color: '#7C3AED', text: 'Flexible engagement scaled to your budget and requirements' },
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
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>Full-Time CIO vs CIOaaS</p>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2 text-[10px] font-bold uppercase tracking-wider pb-1 border-b" style={{ color: '#94A3B8', borderColor: '#E2E8F0' }}>
                  <div></div><div>Full-Time CIO</div><div>CIOaaS</div>
                </div>
                {[
                  { label: 'Annual Cost', fulltime: '£150K–£250K', cioas: '20–30% of that', color: '#00C853' },
                  { label: 'Availability', fulltime: '6–12 month recruit', cioas: 'Available immediately', color: '#00C853' },
                  { label: 'Experience Breadth', fulltime: 'Single industry', cioas: 'Cross-industry', color: '#00C853' },
                  { label: 'Flexibility', fulltime: 'Fixed headcount', cioas: 'Scale up/down freely', color: '#00C853' },
                  { label: 'Risk', fulltime: 'Wrong hire = 12 months', cioas: 'Exit clause included', color: '#00C853' },
                  { label: 'Delivery Focus', fulltime: 'Politics & BAU', cioas: 'Pure strategic output', color: '#00C853' },
                ].map(p => (
                  <div key={p.label} className="grid grid-cols-3 gap-2 py-2 border-b last:border-0 text-[12px]" style={{ borderColor: '#E2E8F0' }}>
                    <div className="font-semibold" style={{ color: '#0A1628' }}>{p.label}</div>
                    <div style={{ color: '#DC2626' }}>{p.fulltime}</div>
                    <div className="font-semibold" style={{ color: '#00C853' }}>{p.cioas}</div>
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
              <div className="h-px w-6" style={{ background: '#EA580C' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#EA580C' }}>CIOaaS Capabilities</span>
              <div className="h-px w-6" style={{ background: '#EA580C' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Core CIO Leadership Disciplines
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From IT strategy and digital transformation through vendor governance, IT risk management, and board-level reporting.
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

      <FAQAccordion faqs={FAQS} accent="#EA580C"
        title="CIO as a Service Questions Answered"
        subtitle="Common questions from organisations considering fractional technology leadership." />

      <CTABanner
        heading="Get Board-Level IT Leadership This Month"
        subheading="No six-month executive recruitment process. Our fractional CIOs are available immediately and board-ready from day one."
        primaryCTA={{ label: 'Speak to a Fractional CIO', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
