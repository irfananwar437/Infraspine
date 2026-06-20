import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Phone, Zap, Settings, MessageCircle, AlertTriangle, BarChart2,
  ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'Service Desk Services Pakistan | IT Help Desk | Infraspine',
  description: 'Infraspine Service Desk: ITIL v4-aligned single point of contact for all IT issues. 85% first-contact resolution, <15min response time, 24/7/365 coverage via phone, email, chat and portal.',
  alternates: { canonical: 'https://www.infraspine.com/services/managed-it-services/service-desk' },
  openGraph: {
    title: 'Service Desk Services Pakistan | IT Help Desk | Infraspine',
    description: 'ITIL-aligned service desk with 85% first-contact resolution, <15min response time, and 24/7/365 multi-channel support. Serving businesses across Pakistan.',
    url: 'https://www.infraspine.com/services/managed-it-services/service-desk',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'IT Service Desk',
  name: 'Infraspine Service Desk Services',
  description: 'ITIL v4-aligned IT service desk providing single-point-of-contact incident management, request fulfilment, multi-channel support, escalation management and service reporting for businesses in Pakistan.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/managed-it-services/service-desk',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '85%', label: 'First-Contact Resolution', color: '#2563EB' },
  { value: '<15min', label: 'Response Time', color: '#00C853' },
  { value: '24/7/365', label: 'Coverage', color: '#7C3AED' },
  { value: 'ITIL v4', label: 'Aligned', color: '#D97706' },
]

const CAPABILITIES = [
  {
    icon: Phone,
    title: 'Incident Management',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Incident management is the core function of any service desk — the structured process of detecting, logging, classifying, prioritising, and resolving unplanned IT disruptions as quickly as possible. Every incident your staff report reaches a trained service desk analyst who captures full details, assigns the correct priority based on impact and urgency, and drives the incident to resolution within the agreed SLA. We follow ITIL-compliant incident lifecycle processes from first call through to resolution and closure confirmation, ensuring nothing falls through the cracks and every disruption is treated with the urgency it deserves.',
    points: [
      'Structured incident logging with full detail capture from first contact',
      'Impact and urgency-based priority assignment (P1 through P4)',
      'SLA-clocked incident lifecycle from open to confirmed closure',
      'Post-incident review for high-severity and recurring incidents',
    ],
  },
  {
    icon: Zap,
    title: 'Request Fulfilment',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'Not every service desk contact is an incident — a significant proportion are standard service requests: new user account setup, software installation approvals, access provisioning, equipment requests, and password resets. Request fulfilment is a separate ITIL process with its own workflow, approval gates, and SLAs. Our service desk handles the full request catalogue, routing each request through the appropriate approval chain before fulfilment, logging every action taken, and confirming completion with the requester. Standard requests are fulfilled from a pre-approved service catalogue, and non-standard requests are handled through a structured authorisation workflow that keeps your IT governance intact.',
    points: [
      'Service catalogue covering all standard IT request types',
      'Approval workflow routing for access and resource requests',
      'Automated provisioning integration where tooling allows',
      'Fulfilment SLA separate from and additional to incident SLA',
    ],
  },
  {
    icon: Settings,
    title: 'ITIL Process Alignment',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Many IT support teams handle tickets without any formal process framework, leading to inconsistent resolution quality, missed SLAs, and no audit trail for compliance purposes. Infraspine\'s service desk operates under ITIL v4 practices — the globally recognised IT service management framework that defines how incidents, requests, problems, changes, and assets should be managed. ITIL alignment means every interaction follows a defined process, every outcome is measurable, and your IT service management data is structured in a way that supports continual service improvement. Formal ITIL alignment also satisfies the IT governance requirements of ISO 27001, SOC 2, and Pakistan\'s banking and financial regulatory frameworks.',
    points: [
      'ITIL v4 practice alignment across incident, request, and problem management',
      'Defined escalation procedures with documented handoff criteria',
      'Change management integration to prevent unauthorised modifications',
      'Continual service improvement process with monthly data review',
    ],
  },
  {
    icon: MessageCircle,
    title: 'Multi-Channel Support',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Your staff should be able to reach the service desk in whatever way is most convenient for them in the moment — not through a single channel that may not suit the urgency or nature of their issue. Our service desk accepts contacts through phone for urgent issues requiring immediate voice communication, email for non-urgent requests that benefit from a written record, live web chat for quick queries that do not warrant a full phone call, a self-service web portal for users who prefer to manage their own tickets, and WhatsApp for the working style common across Pakistani businesses. All channels feed into the same ITSM ticketing platform, so every contact is tracked regardless of how it arrived.',
    points: [
      'Phone support for urgent incidents requiring immediate live assistance',
      'Email-to-ticket conversion with automatic priority assignment',
      'Live web chat for real-time support without a phone call',
      'Self-service portal with ticket submission, tracking, and knowledge base',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Escalation Management',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Escalation management is what separates a professional service desk from an ad-hoc support team. When a first-line analyst cannot resolve an incident within the agreed response window, or when an incident\'s impact or complexity exceeds first-line capability, escalation procedures activate automatically. Functional escalation routes tickets to the appropriate technical specialist — L2 infrastructure engineers for server and network problems, L3 specialists for complex architecture or security issues, or third-party vendor support where the fault lies with a software or hardware vendor. Hierarchical escalation notifies service desk management and client stakeholders when high-priority incidents remain unresolved beyond agreed thresholds, ensuring senior attention when it matters most.',
    points: [
      'Defined functional escalation paths to L2 and L3 technical tiers',
      'Automatic escalation triggers based on SLA breach thresholds',
      'Vendor escalation management for third-party software and hardware faults',
      'Stakeholder notification for P1 and P2 incidents beyond agreed timeframes',
    ],
  },
  {
    icon: BarChart2,
    title: 'Reporting & Analytics',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'A service desk that cannot measure its own performance cannot improve it. Monthly service desk reports deliver the data your IT leadership and business management need to understand support performance, justify IT investment decisions, and identify systemic problems driving repeat ticket volumes. Our reporting pack covers ticket volume by category and priority, SLA compliance percentages across all priority tiers, first-contact resolution rate, average response and resolution times, top recurring issue categories, and analyst-level performance metrics. Quarterly business reviews go deeper, using trend analysis to identify whether recurring issues reflect underlying infrastructure problems that should be addressed rather than repeatedly resolved at the service desk.',
    points: [
      'Monthly SLA compliance report across all priority levels',
      'First-contact resolution rate with trend analysis over rolling months',
      'Top incident category breakdown to identify systemic IT problems',
      'Quarterly business review with service improvement recommendations',
    ],
  },
]

const VENDORS = [
  'ServiceNow', 'Jira Service Management', 'Freshservice', 'Zendesk',
  'ManageEngine ServiceDesk Plus', 'HaloITSM', 'Spiceworks', 'ConnectWise',
]

const FAQS = [
  {
    question: 'What is an ITIL-aligned service desk and why does it matter?',
    answer: 'ITIL (Information Technology Infrastructure Library) is the globally recognised framework for IT service management, used by organisations from small businesses to Fortune 500 companies. An ITIL-aligned service desk follows defined processes for how incidents are logged, prioritised, escalated, and resolved — rather than handling each ticket ad-hoc. This matters because ITIL alignment produces consistent resolution quality, measurable SLA performance, a clear audit trail for compliance purposes, and a structured foundation for continual service improvement. It also satisfies IT governance requirements for ISO 27001 certification and financial sector regulatory frameworks in Pakistan.',
  },
  {
    question: 'What is the difference between a service desk and a helpdesk?',
    answer: 'The terms are often used interchangeably, but a service desk is the broader, more formal concept defined by ITIL. A helpdesk typically focuses on reactive break-fix support — resolving incidents when users report them. A service desk handles incidents but also manages the full service request lifecycle, change management integration, problem management (addressing root causes rather than just symptoms), and formal SLA governance. A service desk is a business function, not just a support queue. Infraspine\'s service desk operates as a full ITIL service desk rather than a basic helpdesk, giving you both reactive incident resolution and proactive service management.',
  },
  {
    question: 'How quickly will my team receive a response when they contact the service desk?',
    answer: 'Response time depends on the priority assigned to the contact. P1 (critical — business operations stopped): response within 15 minutes, 24/7. P2 (major — significant business impact, workaround unavailable): within 30 minutes. P3 (moderate — partial impact, workaround available): within 2 hours. P4 (minor — low urgency, minimal impact): within 4 business hours. Priority is assigned by the analyst on intake based on impact and urgency, and can be escalated if circumstances change. Our 85% first-contact resolution rate means the majority of contacts are fully resolved during the initial interaction rather than requiring a callback.',
  },
  {
    question: 'Can your service desk handle both internal IT issues and external customer-facing technology problems?',
    answer: 'Yes — our service desk can be configured to handle internal IT support for your staff, external technical support for your customers, or both under a single service desk platform with separate queues, workflows, and SLAs. For businesses providing technology products or services to customers, we can operate a white-labelled service desk that your customers contact directly, with branding, communication templates, and response standards aligned to your brand. Separate reporting is maintained for internal and external queues so you have clear visibility into each service stream independently.',
  },
  {
    question: 'What happens during the transition from our current support arrangement?',
    answer: 'We manage the transition in phases to ensure continuity. Phase one is a documentation and discovery period where we gather information about your IT environment, user base, common issue types, and existing support procedures. Phase two is knowledge base build — we document your environment, create resolution guides for known issues, and configure your service catalogue. Phase three is parallel operation, where our team shadows existing support while building familiarity. Typically within 5 to 7 business days we are handling all service desk contacts independently. There is no gap in coverage at any point during transition, and our onboarding team manages the handover end to end.',
  },
]

export default function ServiceDeskPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Managed IT Services', href: '/services/managed-it-services' },
        { label: 'Service Desk' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#2563EB,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#2563EB' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>Service Desk</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              IT Service Desk —{' '}
              <span style={{ color: '#2563EB' }}>One Number. Every IT Problem Solved.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Every IT problem your team faces should have a single, reliable place to go. Infraspine\'s ITIL v4-aligned service desk is that place — a structured, SLA-backed single point of contact for every incident and service request, available 24/7/365 via phone, email, live chat, and a self-service portal. With 85% first-contact resolution, your staff get answers fast and get back to work faster.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-2.5 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[17px] font-black mb-0.5" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[11px] font-semibold leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#2563EB', color: '#fff' }}>
                Get a Dedicated Service Desk <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Request a Demo
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
                <div className="h-px w-6" style={{ background: '#2563EB' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>The Business Case</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Why a Structured Service Desk Pays for Itself
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                When IT support operates without a formal structure, the cost is invisible but very real. Issues get lost in email threads. Staff call the same technician on their mobile and interrupt them in the middle of another job. Problems that could be resolved in 10 minutes wait hours because there is no clear ownership. Repeat issues recur because no one is tracking the pattern. These inefficiencies add up to measurable lost productivity across your entire workforce every single week.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                A managed service desk eliminates this hidden cost by bringing structure, accountability, and measurement to IT support. Every contact is logged and tracked. Every SLA is contractually guaranteed. Every analyst knows exactly which ticket they own and when it needs to be resolved. And every month, your leadership team receives a performance report that turns IT support from an invisible overhead into a managed, measurable business function.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                For businesses in Pakistan navigating rapid digital transformation — adopting cloud platforms, managing remote workforces, and meeting increasing compliance requirements — a professional service desk is no longer optional. It is the operational backbone that keeps your people productive, your systems accessible, and your IT governance aligned with regulatory expectations.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#2563EB', text: 'Single point of contact eliminates lost tickets and missed issues' },
                  { color: '#00C853', text: '85% first-contact resolution — no wait-and-callback cycles' },
                  { color: '#7C3AED', text: 'ITIL v4 alignment satisfies ISO 27001 and regulatory requirements' },
                  { color: '#D97706', text: 'Monthly reporting turns IT support into a measurable function' },
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
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>Service Desk Response SLAs</p>
              <div className="space-y-4">
                {[
                  { priority: 'P1 — Critical', desc: 'Complete outage, all users affected', time: '15 min', color: '#DC2626' },
                  { priority: 'P2 — High', desc: 'Major impact, significant users affected', time: '30 min', color: '#D97706' },
                  { priority: 'P3 — Medium', desc: 'Partial impact, workaround available', time: '2 hrs', color: '#2563EB' },
                  { priority: 'P4 — Low', desc: 'Minimal impact, low urgency', time: '4 hrs', color: '#00C853' },
                ].map(p => (
                  <div key={p.priority} className="flex items-center justify-between p-3 rounded-xl border" style={{ borderColor: '#E2E8F0', background: '#fff' }}>
                    <div>
                      <div className="text-[13px] font-bold mb-0.5" style={{ color: p.color }}>{p.priority}</div>
                      <div className="text-[11px]" style={{ color: '#64748B' }}>{p.desc}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[18px] font-black" style={{ color: p.color }}>{p.time}</div>
                      <div className="text-[10px] font-semibold" style={{ color: '#94A3B8' }}>Response SLA</div>
                    </div>
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
              <div className="h-px w-6" style={{ background: '#2563EB' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>Service Desk Capabilities</span>
              <div className="h-px w-6" style={{ background: '#2563EB' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Core Service Desk Functions
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From first-call incident resolution through to service reporting and analytics — every dimension of professional IT service management.
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
            ITSM &amp; Service Desk Platforms We Deploy
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

      <FAQAccordion faqs={FAQS} accent="#2563EB"
        title="Service Desk Questions Answered"
        subtitle="Common questions from organisations evaluating a managed IT service desk." />

      <CTABanner
        heading="Get a Professional Service Desk for Your Business"
        subheading="Give your team a reliable, structured single point of contact for every IT issue — available 24/7/365 with guaranteed response times."
        primaryCTA={{ label: 'Get Started Today', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
