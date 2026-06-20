import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import { Briefcase, FileText, BarChart2, Shield, Users, Layers, CheckCircle, ArrowRight, Target, Lightbulb } from 'lucide-react'

export const metadata = {
  title: 'IT Consultancy Services Pakistan — Strategy, Architecture & Digital Transformation | Infraspine',
  description: 'Enterprise IT consultancy: IT strategy and roadmap, digital transformation advisory, enterprise architecture design, vendor selection, project management, and technology governance. Infraspine.',
  alternates: { canonical: 'https://www.infraspine.com/services/it-consultancy' },
  openGraph: {
    title: 'IT Consultancy Services Pakistan — Strategy, Architecture & Digital Transformation | Infraspine',
    description: 'IT strategy, enterprise architecture, digital transformation advisory, vendor selection, and technology governance from Infraspine.',
    url: 'https://www.infraspine.com/services/it-consultancy',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'IT Consultancy Services',
  name: 'Infraspine IT Consultancy Services',
  description: 'Enterprise IT consultancy including IT strategy, digital transformation, enterprise architecture, vendor selection, project management, and technology governance.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/it-consultancy',
}

const STATS = [
  { value: '300+', label: 'IT advisory engagements completed',    color: '#2563EB' },
  { value: '35%',  label: 'average IT budget efficiency gain',   color: '#00C853' },
  { value: '18mo', label: 'average technology roadmap horizon',  color: '#D97706' },
  { value: '92%',  label: 'projects delivered on time on scope', color: '#7C3AED' },
]

const ENGAGEMENT_TYPES = [
  { label: 'IT Health Check',         desc: '3-day assessment of your current IT environment against industry benchmarks' },
  { label: 'Technology Roadmap',      desc: '4–6 week engagement producing a 12–36 month IT strategy and investment plan' },
  { label: 'Digital Transformation',  desc: 'End-to-end programme governance from strategy through to delivery and adoption' },
  { label: 'Vendor Selection',        desc: 'Structured RFI/RFP process, vendor scoring, and contract negotiation support' },
  { label: 'IT Architecture Review',  desc: 'Current-state documentation, risk assessment, and target-state architecture design' },
  { label: 'CIO Advisory',            desc: 'Fractional CIO or CISO services for organisations without a dedicated technology leader' },
]

const CAPABILITIES = [
  {
    icon: Target,
    title: 'IT Strategy & Technology Roadmap',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Most IT spending decisions are made reactively — replacing systems when they break, buying new software when someone at a conference recommended it, or responding to vendor pressure. An Infraspine IT strategy engagement replaces reactive spending with a prioritised, business-aligned technology roadmap. We analyse your current state, your business objectives over the next 18–36 months, and produce a costed roadmap that sequences investments for maximum business impact.',
    points: ['Current-state IT assessment against industry maturity benchmarks', 'Business-aligned technology investment prioritisation', '18–36 month costed technology roadmap with project sequencing', 'Board-ready IT strategy presentation for leadership alignment'],
  },
  {
    icon: Layers,
    title: 'Enterprise Architecture',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'Enterprise architecture defines how your applications, data, infrastructure, and people connect — and why decisions made in one area affect every other area. Infraspine architects use TOGAF and ArchiMate to document your current architecture, identify gaps and redundancies, and design a target architecture that supports your business goals. We produce architecture decision records (ADRs) for every major design choice so the reasoning is preserved as your team and technology evolve.',
    points: ['TOGAF-aligned architecture assessment and design', 'Application landscape mapping and integration dependency analysis', 'Target architecture design with transition roadmap', 'Architecture decision records (ADRs) for all design choices'],
  },
  {
    icon: Lightbulb,
    title: 'Digital Transformation Advisory',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Digital transformation fails more often than it succeeds — not because of technology problems, but because of people and process problems. Infraspine\'s transformation advisory works across the full change management lifecycle: articulating the business case, designing the target operating model, sequencing the technology changes, managing stakeholder communication, and measuring adoption outcomes against defined KPIs. We have guided financial services, manufacturing, retail, and healthcare organisations through successful transformations in Pakistan and internationally.',
    points: ['Business case development and board-level stakeholder engagement', 'Target operating model design and process redesign', 'Technology selection and implementation programme governance', 'Change management and adoption measurement framework'],
  },
  {
    icon: BarChart2,
    title: 'Vendor Selection & Procurement',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Selecting the wrong ERP, CRM, HRIS, or cloud platform is among the most expensive mistakes an organisation can make — implementations routinely run 2–3x over budget and timeline when the vendor is chosen on sales presentation quality rather than fit. Infraspine runs structured vendor selection processes with defined requirements, objective scoring criteria, independent reference checks, and contract negotiation support to ensure you choose the vendor that fits your business, not the one with the best sales team.',
    points: ['Requirements definition and RFI/RFP documentation preparation', 'Independent vendor scoring and shortlist evaluation', 'Customer reference checks with comparable organisations', 'Contract review and commercial negotiation support'],
  },
  {
    icon: FileText,
    title: 'IT Project Management',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Technology projects fail at an industry rate exceeding 60%. The consistent root causes are: unclear requirements, inadequate stakeholder management, poor risk identification, and no independent quality assurance. Infraspine project managers hold PMP and PRINCE2 certifications and have overseen infrastructure deployments, ERP implementations, cloud migrations, and software development programmes. We provide programme oversight, vendor management, status reporting, and escalation management alongside your internal team.',
    points: ['PMP and PRINCE2 certified project management professionals', 'Scope management, risk register, and change control processes', 'Vendor performance management and contract compliance monitoring', 'Executive status reporting and board-level escalation management'],
  },
  {
    icon: Shield,
    title: 'IT Governance & Compliance',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'IT governance defines how technology decisions are made, how IT risks are managed, and how IT performance is measured — the management layer that sits above day-to-day IT operations. Infraspine establishes IT governance frameworks aligned to ISO 38500, COBIT, or ITIL 4, including IT steering committee structure, policy and procedure documentation, service management processes, and IT risk and compliance dashboards for board-level visibility.',
    points: ['IT governance framework aligned to ISO 38500 or COBIT 2019', 'IT policy and procedure documentation library', 'ITIL 4 service management process design and implementation', 'IT risk register and compliance dashboard for board reporting'],
  },
]

const FAQS = [
  {
    question: 'What is the difference between IT consultancy and managed IT services?',
    answer: 'IT consultancy is advisory work — we provide strategy, architecture, planning, and governance guidance that helps your organisation make better technology decisions. Managed IT services is operational work — we run your IT infrastructure day-to-day, providing monitoring, support, and management. Many Infraspine clients use both: consultancy to set direction and managed services to execute it. Consultancy engagements typically have a defined scope and end date; managed services are ongoing.',
  },
  {
    question: 'Do you work with organisations that already have an internal IT team?',
    answer: 'Yes — most of our consultancy clients have internal IT teams. We work alongside internal teams to provide specialist expertise, an independent perspective, and strategic advisory that internal IT teams are often too close to their day-to-day operations to provide themselves. We are explicit about our role (advisor versus implementer) and careful not to undermine the authority or credibility of the internal IT leadership team.',
  },
  {
    question: 'How long does a technology roadmap engagement typically take?',
    answer: 'A technology roadmap engagement for a mid-sized organisation (100–500 employees) typically takes 4–6 weeks. The process includes: a current-state assessment (1 week), stakeholder interviews across business units (1 week), analysis and strategy development (2 weeks), and roadmap presentation and refinement (1–2 weeks). The deliverable is a written strategy document, a visual roadmap, and a costed investment plan that can be presented to the board or executive leadership.',
  },
  {
    question: 'Can you help us manage a vendor that is not delivering on their contract?',
    answer: 'Yes. Vendor performance management and escalation is a service we provide both as a standalone engagement and as part of project management. We review the contract, document the performance gaps against contractual commitments, facilitate escalation conversations with the vendor, and if necessary, help you manage an exit and replacement vendor selection. Having an independent party manage these conversations is often more effective than the client managing them directly.',
  },
  {
    question: 'What does a fractional CIO engagement involve?',
    answer: 'A fractional CIO provides part-time senior technology leadership for organisations that need CIO-level expertise without the cost of a full-time executive. This typically includes: attending executive and board meetings as the technology representative, setting IT strategy and governance, managing vendor relationships at an executive level, overseeing IT project portfolios, and making senior technology hiring decisions. Engagements are typically 1–3 days per week and can evolve as the organisation grows.',
  },
  {
    question: 'Do you help with ERP or major software selection?',
    answer: 'Yes, ERP and major enterprise software selection is one of our most common consultancy engagements. We run a structured process: requirements definition, market scanning, RFI issuance to 5–8 vendors, scored evaluation of responses, shortlisting to 2–3 vendors, live demonstrations with scripted scenarios, reference calls with comparable organisations, and contract negotiation support. This process takes 8–12 weeks and significantly reduces implementation risk by ensuring the selected system genuinely fits your requirements.',
  },
]

export default function ItConsultancyPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'IT Consultancy' },
      ]} />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-10 sm:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: '#2563EB' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>IT Consultancy</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Better Technology Decisions.<br />
              <span style={{ color: '#2563EB' }}>Built on Independent Advice.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              Technology vendors will always tell you their product is the right fit. Internal teams often lack the bandwidth or the independent perspective to challenge that. Infraspine IT Consultancy provides the independent, commercially experienced advisory that helps organisations make technology decisions they will not regret — from strategy and architecture through to vendor selection, programme governance, and compliance.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-3 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[17px] font-black mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[10.5px] leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <Link href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
              style={{ background: '#2563EB', color: '#fff' }}>
              Book a Free Strategy Consultation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Engagement types */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black mb-3" style={{ color: '#0A1628' }}>Consultancy Engagement Types</h2>
            <p className="text-[15px] max-w-xl mx-auto" style={{ color: '#64748B' }}>Six engagement formats from a single-day health check to a multi-year transformation programme.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ENGAGEMENT_TYPES.map(({ label, desc }) => (
              <div key={label} className="rounded-xl p-5 border" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#2563EB' }} />
                  <p className="text-[14px] font-black" style={{ color: '#0A1628' }}>{label}</p>
                </div>
                <p className="text-[13px] leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black mb-4" style={{ color: '#0A1628' }}>IT Consultancy Services</h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Six advisory disciplines covering the full spectrum of strategic technology leadership and governance.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map(cap => (
              <div key={cap.title} className="bg-white rounded-2xl border p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: '#E2E8F0', boxShadow: '0 4px 20px rgba(10,22,40,0.06)' }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: cap.bg }}>
                  <cap.icon size={22} style={{ color: cap.color }} strokeWidth={1.5} />
                </div>
                <h3 className="text-[17px] font-black mb-3" style={{ color: '#0A1628' }}>{cap.title}</h3>
                <p className="text-[13.5px] leading-relaxed mb-5" style={{ color: '#64748B' }}>{cap.desc}</p>
                <ul className="space-y-1.5">
                  {cap.points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-[13px]" style={{ color: '#475569' }}>
                      <CheckCircle size={13} style={{ color: cap.color, marginTop: '2px', flexShrink: 0 }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        title="IT Consultancy — Frequently Asked Questions"
        subtitle="Direct answers to the questions organisations ask when evaluating IT advisory services."
        faqs={FAQS}
      />

      <CTABanner
        heading="Start With a Free IT Health Check"
        subheading="A free 90-minute session with a senior Infraspine consultant to assess your current IT posture and identify your highest-priority opportunities."
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
