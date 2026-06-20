import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Users, Settings, MessageCircle, Database,
  BarChart2, Search, ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'VA Services Pakistan | Virtual Assistant & Outsourced Support | Infraspine',
  description: 'Infraspine VA Services: skilled virtual assistants for administrative, technical, and operational support. UK/US time zone coverage, 8/5 and 24/7 options, dedicated account manager. Reduce overhead without sacrificing quality.',
  alternates: { canonical: 'https://www.infraspine.com/services/va-services' },
  openGraph: {
    title: 'VA Services Pakistan | Virtual Assistant & Outsourced Support | Infraspine',
    description: 'Professional virtual assistant services from Pakistan. Administrative, technical, and customer service VA support with UK/US time zone coverage and dedicated account management.',
    url: 'https://www.infraspine.com/services/va-services',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Virtual Assistant Services',
  name: 'Infraspine VA Services',
  description: 'Skilled virtual assistants for administrative, technical, and operational support. UK and US time zone coverage available with dedicated account management and flexible engagement models.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/va-services',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '50+', label: 'VAs Available', color: '#16A34A' },
  { value: '8/5 & 24/7', label: 'Coverage Options', color: '#2563EB' },
  { value: 'UK/US', label: 'Time Zone Coverage', color: '#7C3AED' },
  { value: 'Dedicated', label: 'Account Manager', color: '#D97706' },
]

const CAPABILITIES = [
  {
    icon: Users,
    title: 'Administrative Support',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'Administrative overhead consumes a disproportionate amount of time for business owners, executives, and operational teams who should be focused on higher-value activities. Our administrative virtual assistants handle the full range of day-to-day tasks that keep a business running but do not require the judgment of your most experienced people. From managing email inboxes and drafting correspondence to processing invoices, maintaining supplier records, coordinating travel, and handling document preparation, our VAs bring professional organisational skills, attention to detail, and the initiative to manage tasks independently once the brief is clear. Each VA is trained in standard business software including Microsoft Office, Google Workspace, and common CRM and project management platforms.',
    points: [
      'Email inbox management, triage, and correspondence drafting',
      'Invoice processing, expense management, and supplier coordination',
      'Document preparation, formatting, and version control',
      'Travel booking, itinerary management, and logistics coordination',
    ],
  },
  {
    icon: Settings,
    title: 'Technical VA Support',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Technical virtual assistant support bridges the gap between pure administrative work and specialist IT roles. Our technical VAs handle tasks that require comfort with technology systems, basic troubleshooting, and platform configuration without the cost or commitment of a full-time technical hire. This includes managing CMS platforms such as WordPress, maintaining e-commerce product listings, performing basic website updates, configuring and maintaining CRM systems, running reports from business intelligence tools, and providing first-line technical support coordination. Technical VAs are particularly valuable for growing businesses that need technology-literate operational support but are not yet at the scale where a full-time IT administrator or systems administrator is justified.',
    points: [
      'CMS management including WordPress, Webflow, and Shopify',
      'CRM administration, data hygiene, and workflow configuration',
      'Basic website updates, content publishing, and SEO metadata',
      'First-line helpdesk triage and ticket routing coordination',
    ],
  },
  {
    icon: MessageCircle,
    title: 'Customer Service VA',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Customer service quality directly affects retention, reputation, and revenue — and yet many businesses struggle to staff it cost-effectively as they scale. Our customer service virtual assistants provide professional, responsive support across email, live chat, and social media channels, handling first-line customer queries, complaints, order updates, and escalation management according to your defined scripts and policies. All customer service VAs are trained in written communication best practices, de-escalation techniques, and your specific product or service before going live. We can provide coverage during your core business hours or extend to evenings and weekends to meet the expectations of UK and US customer bases without requiring you to manage shift patterns.',
    points: [
      'Email and live chat customer support with defined SLA targets',
      'Social media query management and comment moderation',
      'Order management, refund processing, and escalation handling',
      'CRM ticket logging and customer interaction documentation',
    ],
  },
  {
    icon: Database,
    title: 'Data Entry & Management',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Clean, accurate, and up-to-date data is the foundation of effective business operations — but maintaining it requires significant, repetitive effort that is difficult to justify occupying skilled internal staff. Our data entry virtual assistants handle high-volume, accuracy-critical data tasks including database population and cleansing, contact list management, product catalogue maintenance, spreadsheet management, and migration of legacy data between systems. Our VAs work to defined accuracy standards with systematic quality checking built into the process. For large data projects, we implement structured workflows that allow multiple VAs to collaborate on high-volume tasks while maintaining consistency and traceability through the entire data pipeline.',
    points: [
      'Database population, deduplication, and cleansing projects',
      'Product catalogue management and e-commerce listing updates',
      'Contact list maintenance and CRM data hygiene',
      'Spreadsheet management, consolidation, and reporting prep',
    ],
  },
  {
    icon: BarChart2,
    title: 'Scheduling & Calendar Management',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'For senior executives, founders, and busy professionals, calendar management is one of the highest-impact areas where a skilled VA can return hours every week. Managing a complex calendar involving multiple time zones, back-and-forth scheduling coordination, meeting preparation, and the constant reprioritisation that comes with a busy leadership role requires someone who understands your priorities, knows how to protect your focus time, and can communicate professionally with both internal stakeholders and external parties on your behalf. Our scheduling VAs manage calendars in Google Workspace and Microsoft Outlook, coordinate across time zones, prepare meeting briefs, and ensure you walk into every commitment prepared.',
    points: [
      'Calendar management across Google Workspace and Microsoft Outlook',
      'Cross-time-zone meeting coordination and scheduling logistics',
      'Meeting brief preparation and pre-meeting research',
      'Follow-up task tracking and action item management',
    ],
  },
  {
    icon: Search,
    title: 'Research & Reporting',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Business decisions require good information — and gathering that information takes time that decision-makers rarely have. Our research virtual assistants conduct structured desk research on competitors, market trends, potential clients, industry developments, and regulatory changes, synthesising findings into clear briefing documents, comparison matrices, and executive summaries that you can act on immediately. We also prepare regular management information reports by extracting and formatting data from CRM systems, analytics platforms, financial tools, and project management software, giving you the operational visibility you need without spending your own time pulling data together. All research output is documented with sources for traceability.',
    points: [
      'Competitor and market research with executive summary deliverables',
      'Prospect research and lead enrichment for sales teams',
      'Regulatory and industry news monitoring and weekly digest',
      'Management information reporting from CRM, analytics, and finance systems',
    ],
  },
]

const FAQS = [
  {
    question: 'What tasks can a virtual assistant handle?',
    answer: 'A virtual assistant can handle any task that can be completed remotely using a computer and communication tools. This includes administrative tasks such as email management, calendar scheduling, travel booking, document preparation, invoice processing, and CRM management; technical tasks such as website updates, CMS management, helpdesk coordination, and data management; customer-facing tasks such as email and live chat customer support, social media management, and order processing; and research tasks such as competitor analysis, prospect research, and management information reporting. The main limitation is that VAs cannot perform tasks requiring physical presence — but the vast majority of modern business operations can be supported effectively by a skilled remote professional.',
  },
  {
    question: 'Can VAs work in our time zone?',
    answer: 'Yes. Our VA team provides coverage across UK and US business hours as standard. For UK-based businesses, we offer VAs who work standard UK business hours (9am–5pm GMT/BST), meaning you receive same-day responses and can communicate in real time during your working day. For US businesses, we provide coverage across Eastern, Central, and Pacific time zones. For businesses needing extended coverage, we offer 24/7 models with shift-based coverage. During onboarding, we agree the specific hours and coverage model that fits your operational requirements, and all time zone alignment is managed by your dedicated account manager.',
  },
  {
    question: 'How do you ensure data security with remote VAs?',
    answer: 'Data security is central to our VA service model, particularly for clients handling sensitive customer data, financial information, or confidential business records. All VAs sign comprehensive confidentiality and data processing agreements before commencing any engagement. We implement role-based access controls ensuring VAs can only access the systems and data required for their specific tasks. VAs operate on managed devices with endpoint protection and screen recording capabilities where required. We conduct regular security training for all VA staff covering phishing awareness, password hygiene, and data handling procedures. For clients with specific compliance requirements such as GDPR, we can provide a Data Processing Agreement and document the technical and organisational measures in place.',
  },
  {
    question: 'What is the difference between a VA and a BPO?',
    answer: 'A virtual assistant is typically a dedicated individual professional assigned to support a specific client or a small number of clients, handling a broad range of tasks as directed. The relationship is closer to having a personal assistant who happens to work remotely. A BPO (Business Process Outsourcing) arrangement typically involves a team or facility delivering a defined, standardised business process at scale — for example, running an entire customer service function or processing all invoices for a finance department. Infraspine offers both models: individual VA placement for businesses needing a dedicated support professional, and BPO-style team arrangements for businesses that need to outsource an entire operational function with defined SLAs and process management.',
  },
  {
    question: 'How quickly can we onboard a VA?',
    answer: 'For standard VA roles covering administrative, customer service, data entry, and scheduling support, we can typically have a VA placed and operational within five to seven working days. This timeline includes matching your requirements against our available VA pool, conducting a capability assessment and client introduction call, completing our standard onboarding documentation including NDA and data processing agreement, and running a brief orientation period where the VA familiarises themselves with your tools, processes, and preferences before going live independently. For technical VA roles or specialist research support, onboarding timelines may be slightly longer depending on the complexity of your systems and the specific skills required.',
  },
]

export default function VAServicesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'VA Services', href: '/services/va-services' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#001a08' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#16A34A,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#16A34A' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#16A34A' }}>Virtual Assistant Services</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Professional VA Support —{' '}
              <span style={{ color: '#16A34A' }}>Reduce Overhead Without Sacrificing Quality.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Skilled professionals handling your administrative, technical, and operational tasks so your team can focus on the work that actually moves the business forward. Infraspine virtual assistants are trained, vetted, and supported by a dedicated account manager — not freelancers found on a marketplace. We offer UK and US time zone coverage, flexible engagement models from part-time to full-time, and the management infrastructure to ensure consistent quality from day one.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-3 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[22px] font-black mb-1 leading-tight" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[11px] font-semibold leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#16A34A', color: '#fff' }}>
                Get a VA in 5 Days <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Discuss Your Requirements
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
                <div className="h-px w-6" style={{ background: '#16A34A' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#16A34A' }}>The Business Case for VA Services</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Your Best People Should Not Be Doing Admin Work
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Research consistently shows that knowledge workers spend between 30% and 40% of their working week on administrative tasks — email management, scheduling, data entry, document preparation, and other activities that could be handled by a skilled professional at a fraction of the cost. The economic argument for virtual assistant support is straightforward: every hour a £80,000-per-year executive or senior specialist spends on £15-per-hour administrative work is a poor allocation of resource.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The reason many businesses have not acted on this is the management overhead of finding, hiring, and managing a good VA. Marketplaces like Upwork and Fiverr offer access to individual freelancers, but quality is inconsistent, there is no management layer, and the burden of oversight falls on the client. Infraspine VA services remove this obstacle — we handle the recruitment, training, quality management, and account oversight, so you get the benefit of skilled support without the cost of managing it yourself.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Every client is assigned a dedicated account manager who acts as your single point of contact, ensures the VA is performing to expectation, manages any issues, and scales the support as your requirements evolve. You get all the upside of capable remote support with none of the management complexity.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#16A34A', text: 'Trained, vetted VAs — not unmanaged marketplace freelancers' },
                  { color: '#2563EB', text: 'UK and US time zone coverage as standard' },
                  { color: '#7C3AED', text: 'Dedicated account manager ensures consistent quality' },
                  { color: '#D97706', text: 'Flexible from part-time hours to full-time dedicated support' },
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
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>VA Service Model Comparison</p>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2 text-[10px] font-bold uppercase tracking-wider pb-1 border-b" style={{ color: '#94A3B8', borderColor: '#E2E8F0' }}>
                  <div></div><div>Marketplace VA</div><div>Infraspine VA</div>
                </div>
                {[
                  { label: 'Quality Assurance', marketplace: 'None', managed: 'Dedicated account mgr', color: '#00C853' },
                  { label: 'Onboarding Time', marketplace: 'Variable (days–weeks)', managed: '5–7 working days', color: '#00C853' },
                  { label: 'Time Zone Cover', marketplace: 'Inconsistent', managed: 'UK/US guaranteed', color: '#00C853' },
                  { label: 'Data Security', marketplace: 'Individual NDAs only', managed: 'Full DPA + controls', color: '#00C853' },
                  { label: 'Management Layer', marketplace: 'None (client manages)', managed: 'Included', color: '#00C853' },
                  { label: 'Scaling Flexibility', marketplace: 'Find another freelancer', managed: 'Immediate team scale', color: '#00C853' },
                ].map(p => (
                  <div key={p.label} className="grid grid-cols-3 gap-2 py-2 border-b last:border-0 text-[12px]" style={{ borderColor: '#E2E8F0' }}>
                    <div className="font-semibold" style={{ color: '#0A1628' }}>{p.label}</div>
                    <div style={{ color: '#DC2626' }}>{p.marketplace}</div>
                    <div className="font-semibold" style={{ color: '#00C853' }}>{p.managed}</div>
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
              <div className="h-px w-6" style={{ background: '#16A34A' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#16A34A' }}>VA Service Areas</span>
              <div className="h-px w-6" style={{ background: '#16A34A' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Virtual Assistant Service Areas
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Administrative, technical, customer service, data management, scheduling, and research support — all delivered by trained professionals in your time zone.
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

      <FAQAccordion faqs={FAQS} accent="#16A34A"
        title="VA Services Questions Answered"
        subtitle="Common questions from businesses considering virtual assistant support." />

      <CTABanner
        heading="Get a Skilled VA Operational in 5 Days"
        subheading="Tell us what you need. We\'ll match you with a trained VA, handle the onboarding, and have you up and running this week."
        primaryCTA={{ label: 'Get Started', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
