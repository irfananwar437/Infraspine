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
  Shield, FileText, Users, Zap, RefreshCw, BookOpen, CheckCircle, ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'Business Continuity Planning Pakistan | BCP & BCM',
  description: 'Business Continuity Planning and BCM consulting in Pakistan. Infraspine develops and tests BCP to ISO 22301 standard, delivering Business Impact Analysis, crisis communication plans, and recovery strategy design.',
  alternates: { canonical: 'https://www.infraspine.com/services/cyber-security/business-continuity' },
  openGraph: {
    title: 'Business Continuity Planning Pakistan | BCP & BCM | Infraspine',
    description: 'ISO 22301-aligned BCP development, Business Impact Analysis, crisis communication planning, continuity testing, and BCM training. Infraspine Pakistan.',
    url: 'https://www.infraspine.com/services/cyber-security/business-continuity',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Business Continuity Planning',
  description: 'Developing and testing Business Continuity Plans to ensure organisations can maintain critical operations through disruptions, disasters, or cyberattacks; ISO 22301 aligned.',
  url: 'https://www.infraspine.com/services/cyber-security/business-continuity',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  areaServed: 'Pakistan',
  serviceType: 'Business Continuity Planning',
}

const STATS = [
  { value: 'ISO 22301', label: 'Aligned BCM standard', color: '#D97706' },
  { value: 'BIA & BCP', label: 'Both delivered', color: '#D97706' },
  { value: 'Annual', label: 'Testing programme', color: '#D97706' },
  { value: 'RTO/RPO', label: 'Defined and documented', color: '#D97706' },
]

const CAPABILITIES = [
  {
    icon: Shield,
    title: 'Business Impact Analysis',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'A Business Impact Analysis (BIA) is the foundation of any effective Business Continuity Plan. Without a rigorous BIA, you cannot know which processes are truly critical to your organisation\'s survival, what the financial and operational consequences of each process being unavailable are, or what Recovery Time Objectives (RTOs) and Recovery Point Objectives (RPOs) are realistic and necessary. Infraspine conducts a comprehensive BIA through structured interviews with process owners across all business functions: identifying critical business processes, quantifying the impact of disruption over time (one hour, four hours, one day, one week), establishing Maximum Tolerable Period of Disruption (MTPD) for each process, defining RTOs and RPOs, and identifying the minimum resources — staff, systems, facilities, and suppliers — required to resume critical activities at a minimum acceptable level. The BIA report forms the governing document for all subsequent BCP development work.',
    points: ['Critical process identification', 'Financial and operational impact quantification', 'RTO and RPO definition', 'Minimum resource requirements'],
  },
  {
    icon: FileText,
    title: 'BCP Development & Documentation',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'A Business Continuity Plan is only useful if it can be understood and executed by the people responsible for it — under pressure, with limited time, and potentially without access to normal systems and facilities. Infraspine develops Business Continuity Plans that are practical, actionable, and tested rather than theoretical documents that live in a file share and are never opened. Each BCP is structured as a response playbook: scenario-specific activation triggers, escalation procedures, role assignments with named deputies, action checklists for each response phase, resource contact sheets, and decision trees for common scenarios including cyberattacks, facility loss, key person unavailability, and supply chain disruption. The BCP documentation suite includes the main plan, department-level continuity plans for each critical function, and a quick-reference incident response card for the crisis management team.',
    points: ['Scenario-specific response playbooks', 'Role assignments and action checklists', 'Department-level continuity plans', 'Quick-reference crisis management card'],
  },
  {
    icon: Users,
    title: 'Crisis Communication Planning',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'How an organisation communicates during a crisis — with staff, customers, suppliers, regulators, and the media — is as important as the operational response. Poor crisis communication causes reputational damage, customer loss, and regulatory scrutiny that can outlast the original incident by months or years. Infraspine develops a Crisis Communication Plan that defines the communication strategy for each audience segment: internal communications to staff and leadership, customer communications by channel and scenario, supplier and partner notifications, regulatory notifications required by contract or legislation, and media communications if the incident reaches public attention. The plan includes pre-drafted communication templates for the most likely scenarios, a social media monitoring protocol, a media spokesperson designation process, and a communications log format for regulatory accountability. Crisis communication is rehearsed during tabletop exercises so that the team is not drafting for the first time during an actual incident.',
    points: ['Audience-specific communication strategy', 'Pre-drafted communication templates', 'Regulatory notification procedures', 'Media response and spokesperson protocol'],
  },
  {
    icon: Zap,
    title: 'Business Continuity Testing & Exercises',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'ISO 22301 requires organisations to test and exercise their BCPs at planned intervals — and for good reason. Untested plans contain assumptions that do not hold in real incidents: staff cannot find the plan, contact details are out of date, RTO targets are unrealistically optimistic, and the escalation chain breaks down at the first point of stress. Infraspine designs and facilitates a programme of continuity exercises appropriate to your organisation\'s maturity and risk profile. This includes tabletop discussion exercises for the crisis management team, structured walk-through exercises for operational teams, live simulation exercises for critical processes, and full business continuity tests that simulate actual activation. Each exercise generates a formal post-exercise report documenting observations, gaps, and improvement actions. Exercise findings are tracked through to plan updates, ensuring each exercise cycle leaves the BCP stronger than before.',
    points: ['Tabletop and walk-through exercises', 'Live simulation exercise design', 'Post-exercise gap reporting', 'Plan update and improvement tracking'],
  },
  {
    icon: RefreshCw,
    title: 'Recovery Strategy Design',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Identifying that a process needs to recover within four hours of a disruption is the output of the BIA — but designing the strategy that actually achieves that recovery within four hours requires separate, detailed work. Recovery strategies must be pragmatic, pre-arranged, and capable of being activated under pressure without extended decision-making. Infraspine designs recovery strategies for each critical process identified in the BIA: technology recovery strategies including cloud failover, backup system activation, and manual workaround procedures; facilities recovery strategies including alternative site arrangements and remote working activation; people recovery strategies including cross-training, third-party staffing, and priority task assignment; and supply chain recovery strategies including pre-qualified alternative suppliers for single-source dependencies. Each recovery strategy is documented with activation trigger, ownership, resource requirements, and expected recovery time to verify it meets the agreed RTO.',
    points: ['Technology and facilities recovery design', 'People continuity strategies', 'Supply chain resilience planning', 'RTO-verified recovery procedures'],
  },
  {
    icon: BookOpen,
    title: 'BCM Training & Awareness',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'A Business Continuity Management programme is only as strong as the people responsible for activating it. Infraspine delivers a BCM training and awareness programme that ensures everyone with a role in the BCP understands their responsibilities, knows how to access the plan, and has practised the key decisions they will face in a real incident. The programme includes a half-day BCM awareness session for all staff covering the basics of why BCM matters and what staff should do in a disruption; a one-day crisis management training workshop for the crisis management team covering decision-making under pressure, communication, and escalation; and role-specific training for process owners covering their continuity procedures and recovery strategies. Annual BCM awareness updates keep the programme current and reinforce the importance of preparedness as staff change and the threat landscape evolves.',
    points: ['All-staff BCM awareness session', 'Crisis management team training', 'Role-specific continuity training', 'Annual BCM awareness updates'],
  },
]

const FAQS = [
  {
    question: 'What is a Business Continuity Plan?',
    answer: 'A Business Continuity Plan (BCP) is a documented set of procedures and resources that defines how an organisation will maintain or rapidly resume critical business functions during and after a disruption. Disruptions covered by a BCP include natural events such as flooding or extreme weather, technology failures such as system outages or cyberattacks, facility incidents such as fire or denial of access, people disruptions such as key person unavailability or industrial action, and supply chain failures. A well-designed BCP is not a single document — it is a suite of interconnected plans covering the overall crisis management response, process-specific continuity procedures, communications plans, and IT disaster recovery procedures. The BCP is governed by the results of a Business Impact Analysis (BIA) which determines which processes are critical and what recovery time objectives are required.',
  },
  {
    question: 'What is the difference between BCP and disaster recovery?',
    answer: 'Business Continuity Planning (BCP) and Disaster Recovery (DR) are related but distinct disciplines. Disaster Recovery specifically refers to the restoration of IT systems and infrastructure after a disruption — it is technology-focused and deals with questions like how quickly can the ERP system be restored, what is the backup recovery procedure for the file server, and how do we failover to the secondary data centre. Business Continuity Planning is broader — it covers how the organisation continues to operate as a whole during a disruption, including IT systems but also people, facilities, supply chain, and communications. DR is a component of the overall BCP. In practice, many organisations have a DR plan for IT systems but no broader BCP — leaving them exposed to disruptions that are not technology-related, or to the operational and communications challenges that arise even when IT is restored.',
  },
  {
    question: 'What is a Business Impact Analysis?',
    answer: 'A Business Impact Analysis (BIA) is a systematic process to identify and evaluate the potential effects of an interruption to critical business operations. The BIA answers four fundamental questions for each business process: what are the consequences of this process being unavailable, and how do those consequences grow over time? How long can the organisation tolerate this process being unavailable before experiencing unacceptable harm? What is the minimum resource requirement to resume this process at a minimum acceptable level? And what is the target for how much data can be lost if the process relies on IT systems? The outputs of the BIA — Maximum Tolerable Period of Disruption, Recovery Time Objectives, Recovery Point Objectives, and minimum resource requirements — directly govern the recovery strategies and plan procedures developed in the BCP.',
  },
  {
    question: 'How often should we test our BCP?',
    answer: 'ISO 22301 requires that BCPs are exercised at planned intervals, but does not prescribe a specific frequency. As a practical minimum, Infraspine recommends that organisations conduct at least one tabletop exercise with the crisis management team annually, and at least one operational exercise that tests the recovery of a critical process every two years. Additional testing should be triggered by significant changes to the organisation — a major new system implementation, a change of key personnel, an office move, or a significant change to the business model. Many organisations find that the first tabletop exercise reveals so many gaps that annual testing is clearly necessary, and that the discipline of regular testing over several years transforms the quality of BCM capability. For regulated sectors such as financial services, insurance, and healthcare, testing frequency requirements may be mandated by the regulator.',
  },
  {
    question: 'What is ISO 22301?',
    answer: 'ISO 22301 is the international standard for Business Continuity Management Systems (BCMS). Published by the International Organization for Standardization, it specifies requirements for a management system that enables organisations to protect against, reduce the likelihood of, prepare for, respond to, and recover from disruptive incidents. The standard follows the same high-level structure as ISO 27001 and ISO 9001, covering context and leadership, planning, support, operation, performance evaluation, and continual improvement. Certification to ISO 22301 involves an independent, accredited audit that verifies the organisation has implemented a functioning BCMS. Infraspine\'s BCP development and BCM training services are all aligned to ISO 22301, ensuring that organisations who wish to pursue certification have a foundation that meets the standard\'s requirements.',
  },
]

const BREADCRUMB = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Cybersecurity', href: '/services/cyber-security' },
  { label: 'Business Continuity Planning', href: '/services/cyber-security/business-continuity' },
]

const ACCENT = '#D97706'
const HERO_BG = '#1a1000'
const STAT_BG = '#FFFBEB'
const STAT_BORDER = '#FDE68A'

export default function BusinessContinuityPage() {
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
              Business Continuity Planning<br />
              <span style={{ color: ACCENT }}>BCP & BCM Consulting.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              Infraspine develops and tests Business Continuity Plans to ensure your organisation can maintain critical operations through disruptions, disasters, and cyberattacks. ISO 22301 aligned, with Business Impact Analysis, crisis communication planning, recovery strategy design, and annual testing programmes.
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
                Request a BCP Consultation <ArrowRight size={14} />
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
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>BCM Service Capabilities</span>
              <div className="h-px w-6" style={{ background: ACCENT }} />
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Business Continuity Capabilities
            </h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From Business Impact Analysis and BCP development through to crisis communication planning, continuity testing, and BCM training — Infraspine covers the complete BCM lifecycle.
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
        title="Business Continuity Planning — Frequently Asked Questions"
        subtitle="Common questions from organisations developing or improving their Business Continuity Management capability."
        faqs={FAQS}
        accent={ACCENT}
      />

      <CTABanner
        heading="Is Your Organisation Ready for the Next Disruption?"
        subheading="Book a free BCP readiness call with Infraspine. We will assess your current continuity capability, identify critical gaps, and outline a practical plan to improve your resilience — no commitment required."
        primaryLabel="Request a BCP Consultation"
        primaryHref="/contact-us"
        secondaryLabel="Call Us Now"
        secondaryHref="tel:+923001234567"
      />

      <RelatedServices currentHref="/services/cyber-security/business-continuity" accent="#DC2626" />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
