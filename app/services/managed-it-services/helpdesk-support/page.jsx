import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Phone, Users, Layers, BookOpen, BarChart2, Headset,
  ArrowRight, CheckCircle, MessageSquare,
} from 'lucide-react'

export const metadata = {
  title: 'IT Helpdesk Support Services Pakistan — L1, L2 & L3 Support | Infraspine',
  description: 'Infraspine IT Helpdesk: professional L1, L2 and L3 support for businesses in Pakistan. <2hr response SLA, 87% first-call resolution, 24/7 coverage via phone, email, WhatsApp and ticketing portal.',
  alternates: { canonical: 'https://www.infraspine.com/services/managed-it-services/helpdesk-support' },
  openGraph: {
    title: 'IT Helpdesk Support Services Pakistan — L1, L2 & L3 Support | Infraspine',
    description: 'Multi-tier IT helpdesk with <2hr response SLA, 87% first-call resolution, and 24/7 support coverage. Serving businesses across Pakistan.',
    url: 'https://www.infraspine.com/services/managed-it-services/helpdesk-support',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'IT Helpdesk Support',
  name: 'Infraspine IT Helpdesk Support',
  description: 'Professional L1, L2, and L3 IT helpdesk services with structured ticket management, SLA guarantees, and 24/7 support for businesses in Pakistan.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/managed-it-services/helpdesk-support',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '<2hr', label: 'Response SLA', color: '#0891B2' },
  { value: '87%', label: 'First-Call Resolution', color: '#00C853' },
  { value: '500+', label: 'Tickets/Month Handled', color: '#7C3AED' },
  { value: '24/7', label: 'Support Coverage', color: '#D97706' },
]

const CAPABILITIES = [
  {
    icon: Phone,
    title: 'L1 Remote Support',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Level 1 is the first point of contact for every IT issue your staff raises. Our L1 engineers handle the full spectrum of day-to-day IT requests remotely — password resets, email configuration, printer connectivity, VPN access issues, software installations, and Office 365 troubleshooting. With 87% first-call resolution, the majority of your team&apos;s IT problems are resolved during the first interaction, eliminating the wait-and-callback cycle that wastes productivity.',
    points: [
      'Password resets and account unlocks across all systems',
      'Email, Office 365 and cloud application support',
      'Remote desktop takeover for immediate hands-on help',
      'VPN, Wi-Fi, and connectivity troubleshooting',
    ],
  },
  {
    icon: Layers,
    title: 'L2 Technical Escalation',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Level 2 handles the more complex issues that require deeper system knowledge — server-side problems, application errors, network configuration issues, and problems that L1 cannot resolve remotely. When a ticket escalates from L1 to L2, the full incident context transfers automatically so your staff never have to repeat themselves. L2 engineers are mid-senior technicians with broad platform knowledge across Windows Server, networking, virtualisation, and cloud.',
    points: [
      'Windows Server and Active Directory administration',
      'Network switch, router and firewall diagnostics',
      'Virtualisation platform (VMware, Hyper-V) support',
      'Application and database-level troubleshooting',
    ],
  },
  {
    icon: Users,
    title: 'L3 Engineering Escalation',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Level 3 is our senior engineering tier for the most complex infrastructure, security, and architectural problems. L3 engineers are specialists with vendor certifications and deep expertise in specific technology domains. An L3 engagement might involve diagnosing a Hyper-V cluster performance problem, architecting a hybrid Azure configuration, or leading a post-breach forensic investigation. L3 escalations always include a root-cause report and permanent remediation recommendation.',
    points: [
      'Senior certified engineers for complex infrastructure problems',
      'Cloud architecture and hybrid environment expertise',
      'Security incident investigation and forensic support',
      'Root-cause analysis with permanent fix implementation',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Ticketing & ITSM',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'Every support interaction is captured in our ITSM ticketing platform — no lost emails, no verbal handoffs, no untracked work. Staff can raise tickets via the web portal, email, phone, or WhatsApp. Each ticket is automatically categorised, prioritised by impact and urgency, and routed to the appropriate support tier. You have full visibility into every open ticket at any time through a real-time dashboard with estimated resolution times displayed for each item.',
    points: [
      'Multi-channel ticket creation (web, email, phone, WhatsApp)',
      'Automatic categorisation and priority assignment',
      'Real-time ticket status tracking via client portal',
      'Full ticket history and audit trail retained indefinitely',
    ],
  },
  {
    icon: BookOpen,
    title: 'Knowledge Base Management',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'A well-maintained knowledge base is the engine of first-call resolution. Our team builds and maintains a client-specific knowledge base capturing standard operating procedures, common issue resolutions, system configuration guides, and self-service instructions for your staff. This documentation accelerates L1 resolution times, enables consistent answers regardless of which engineer picks up a ticket, and powers the self-service portal that lets your staff solve simple issues without raising a ticket at all.',
    points: [
      'Client-specific knowledge base built and maintained by our team',
      'Standard SOPs for your environment documented and versioned',
      'Self-service portal for common staff IT requests',
      'Monthly knowledge base review and update cycle',
    ],
  },
  {
    icon: BarChart2,
    title: 'Service Reporting & SLA',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Transparency is non-negotiable. Every month you receive a comprehensive helpdesk performance report covering ticket volumes by category, average response and resolution times, SLA compliance percentages, first-call resolution rate, repeat-issue analysis, and satisfaction scores. Quarterly reviews go deeper — identifying systemic IT problems generating repeat tickets so we can address root causes rather than just processing the same issues month after month.',
    points: [
      'Monthly SLA compliance and ticket volume report',
      'First-call resolution rate and escalation analysis',
      'Repeat issue identification and root-cause planning',
      'Quarterly helpdesk performance review with action items',
    ],
  },
]

const VENDORS = [
  'ServiceNow', 'Jira Service Management', 'Freshdesk', 'Zendesk',
  'ManageEngine ServiceDesk Plus', 'Spiceworks', 'ConnectWise Manage',
  'HaloITSM', 'Atera', 'N-central',
]

const FAQS = [
  {
    question: 'What is the difference between L1, L2, and L3 helpdesk support?',
    answer: 'L1 is front-line support handling the most common, straightforward IT requests — password resets, email problems, software help, and connectivity issues. Most tickets are resolved at this level. L2 handles more complex technical issues requiring deeper system knowledge, such as server problems, network faults, and application errors that L1 cannot resolve remotely. L3 is the senior engineering tier for the most complex infrastructure, security, and architecture problems, typically involving specialist certified engineers. Tickets escalate automatically through these tiers with full context passed so your staff never repeat themselves.',
  },
  {
    question: 'How quickly will my staff get a response when they raise a ticket?',
    answer: 'Response times depend on ticket priority. For P1 (critical — business operations stopped): response within 15 minutes. P2 (major — significant impact): within 1 hour. P3 (moderate — workaround available): within 2 hours. P4 (minor — minimal impact): within 4 business hours. Priority is assigned automatically based on impact and urgency fields in the ticket form, with L1 agents reviewing and adjusting on receipt. Our 24/7 coverage means these SLAs apply around the clock, not just during business hours.',
  },
  {
    question: 'Can your helpdesk support remote workers and multiple office locations?',
    answer: 'Yes — our helpdesk is built for distributed workforces. Support is delivered entirely remotely through screen-sharing, remote desktop tools, and phone/WhatsApp. We support staff regardless of whether they are in a head office, branch location, working from home, or travelling. For organisations with multiple offices, we can establish site-specific procedures, onboard each location separately, and configure routing rules so tickets from specific sites are handled by engineers with relevant context about those environments.',
  },
  {
    question: 'What channels can staff use to raise a helpdesk ticket?',
    answer: 'Staff can raise tickets through the web-based client portal (preferred for non-urgent issues), by sending an email to your dedicated support address, by calling our helpdesk phone line, or via WhatsApp for fast informal queries. All channels create a tracked ticket in our ITSM platform so nothing falls through the cracks. The web portal also provides a live status view of all open tickets so staff can check progress without needing to call in for updates.',
  },
  {
    question: 'Do you provide on-site support or is everything handled remotely?',
    answer: 'The majority of helpdesk issues are resolved remotely through screen-sharing and remote desktop tools, which provides faster resolution than dispatching an engineer. For issues that genuinely require physical presence — hardware failures, cable installations, equipment replacements, or complex on-site configurations — we can dispatch engineers to your location. On-site visits are included in higher-tier managed service agreements and available on a per-incident basis for clients on standard helpdesk plans.',
  },
  {
    question: 'How do you handle the transition from our current IT support?',
    answer: 'We manage the transition carefully to ensure continuity. The onboarding process starts with a documentation phase where we gather information about your IT environment, systems, user base, and common issues. We then build your client knowledge base, configure your support channels, and run a parallel period where our team shadows existing support processes. Typically within 5–7 business days we are handling all tickets independently with full context of your environment. There is no gap in support coverage during transition.',
  },
]

export default function HelpdeskSupportPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Managed IT Services', href: '/services/managed-it-services' },
        { label: 'Helpdesk Support' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#0891B2,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#0891B2' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0891B2' }}>IT Helpdesk Support</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Enterprise IT Helpdesk —{' '}
              <span style={{ color: '#0891B2' }}>Fast Resolution, Every Time.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Every hour your staff spend waiting for IT help is an hour of lost productivity. Infraspine&apos;s enterprise IT helpdesk delivers structured L1, L2, and L3 support with written SLA guarantees — accessible via phone, email, WhatsApp, and a web portal. Your team gets fast, knowledgeable help the moment they need it. You get full visibility into every ticket, every resolution time, and every SLA measurement, delivered in a monthly report that keeps you in control.
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
                style={{ background: '#0891B2', color: '#fff' }}>
                Get a Dedicated Helpdesk <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                See Pricing
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
                <div className="h-px w-6" style={{ background: '#0891B2' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0891B2' }}>The Business Case</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Why Ad-Hoc IT Support Is Costing You More Than You Realise
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Gartner estimates that IT downtime costs businesses an average of $5,600 per minute at enterprise scale — but even at SME scale, the damage is substantial. When a staff member cannot access email, cannot print a critical document, or cannot connect to the company VPN, they either stop working entirely or attempt a workaround that creates a bigger problem later. Multiply that by your entire workforce and the productivity loss accumulates fast.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Ad-hoc IT support — whether that means your office manager doubling as IT support or a local technician you call when something breaks — has a fundamental flaw: there is no structure. No ticket tracking means issues get lost. No SLA means response times are unpredictable. No escalation path means complex problems stay unsolved. No reporting means you have no visibility into how much IT issues are actually costing you.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                A professional managed helpdesk changes this entirely. Every issue is tracked from first contact to resolution. SLAs are contractually guaranteed and measured monthly. Escalation paths are defined so complex issues reach the right engineer immediately. And monthly reports give your leadership team hard data on IT support performance — turning an invisible cost centre into a measurable, manageable business function.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#0891B2', text: 'Every IT issue tracked with a ticket number and SLA clock' },
                  { color: '#00C853', text: '87% of issues resolved on first contact — no callbacks' },
                  { color: '#7C3AED', text: 'Structured L1/L2/L3 escalation, no issue left unsolved' },
                  { color: '#D97706', text: 'Monthly reports quantify IT support performance' },
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
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>Response SLA by Priority</p>
              <div className="space-y-4">
                {[
                  { priority: 'P1 — Critical', desc: 'Complete outage, business stopped', time: '15 min', color: '#DC2626' },
                  { priority: 'P2 — Major', desc: 'Significant impact, workaround unavailable', time: '1 hour', color: '#D97706' },
                  { priority: 'P3 — Moderate', desc: 'Partial impact, workaround available', time: '2 hours', color: '#0891B2' },
                  { priority: 'P4 — Minor', desc: 'Minimal impact, cosmetic or low urgency', time: '4 hours', color: '#00C853' },
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
              <div className="h-px w-6" style={{ background: '#0891B2' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0891B2' }}>Helpdesk Capabilities</span>
              <div className="h-px w-6" style={{ background: '#0891B2' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              What Our Helpdesk Delivers
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Six service pillars covering every dimension of IT support from first contact to senior engineering escalation.
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
            ITSM Platforms &amp; Helpdesk Tools We Support
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

      <FAQAccordion faqs={FAQS} accent="#0891B2"
        title="Helpdesk Support Questions Answered"
        subtitle="Common questions from businesses exploring professional IT helpdesk services." />

      <CTABanner
        heading="Get a Dedicated IT Helpdesk for Your Team"
        subheading="Stop letting IT problems drain your team's productivity. Get structured, SLA-backed helpdesk support from day one."
        primaryCTA={{ label: 'Get Started Today', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
