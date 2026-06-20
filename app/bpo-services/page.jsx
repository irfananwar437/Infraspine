import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Users, PhoneCall, FileText, BarChart2, Headphones, Globe,
  CheckCircle, ArrowRight, Clock, Shield, TrendingUp, Zap,
} from 'lucide-react'

export const metadata = {
  title: 'BPO Services — Business Process Outsourcing Pakistan | Infraspine',
  description: 'Infraspine BPO Services: customer support, back-office operations, data entry, document processing, and virtual assistance. Reduce operational costs by 40% with our trained offshore teams.',
  alternates: { canonical: 'https://www.infraspine.com/bpo-services' },
  openGraph: {
    title: 'BPO Services — Business Process Outsourcing Pakistan | Infraspine',
    description: 'Infraspine BPO delivers customer support, back-office automation, data processing, and virtual teams at 40% lower cost than in-house operations.',
    url: 'https://www.infraspine.com/bpo-services',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Business Process Outsourcing',
  name: 'Infraspine BPO Services',
  description: 'Comprehensive business process outsourcing covering customer support, back-office, data entry, document processing, and virtual assistance.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/bpo-services',
  areaServed: { '@type': 'Place', name: 'Worldwide' },
}

const SERVICES = [
  {
    icon: Headphones,
    title: 'Customer Support Operations',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Multi-channel customer support via phone, email, chat, and WhatsApp. Our trained agents handle first-level to tier-3 escalations with documented SOPs, CRM integration, and full QA monitoring. Average first-response time under 90 seconds.',
    features: ['Phone, email, live chat, WhatsApp', 'CRM-integrated ticketing', 'QA call monitoring & scoring', 'CSAT tracking and reporting'],
  },
  {
    icon: FileText,
    title: 'Back-Office & Data Processing',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Structured data entry, document digitization, invoice processing, and form handling at scale. We process thousands of records daily with 99.8% accuracy SLAs, double-verification workflows, and full audit trails.',
    features: ['Invoice and PO processing', 'Document digitization & OCR', 'Database entry and cleanup', '99.8% accuracy with dual verification'],
  },
  {
    icon: Globe,
    title: 'Virtual Assistance & Remote Teams',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'Dedicated virtual assistants and offshore team extensions that integrate directly into your workflows. From scheduling and research to procurement support and project coordination, our virtual teams operate on your tools and timezone.',
    features: ['Dedicated VA per client', 'Calendar, email, travel management', 'Research and market data collection', 'Your tools, your timezone'],
  },
  {
    icon: BarChart2,
    title: 'Finance & Accounting BPO',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Accounts payable, accounts receivable, bank reconciliation, payroll processing, and management reporting handled by finance-trained professionals with QuickBooks, Xero, SAP, and NetSuite expertise.',
    features: ['Accounts payable & receivable', 'Bank reconciliation & reporting', 'Payroll and HR admin support', 'QuickBooks, Xero, SAP integration'],
  },
  {
    icon: PhoneCall,
    title: 'Lead Generation & Sales Support',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Outbound prospecting, cold outreach, lead qualification, appointment setting, and CRM data enrichment. Our sales support agents work to your target ICP, script, and qualification criteria with daily reporting dashboards.',
    features: ['B2B lead generation and outreach', 'LinkedIn and email prospecting', 'Appointment setting', 'CRM data enrichment and cleanup'],
  },
  {
    icon: Shield,
    title: 'Compliance & Document Management',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'KYC/AML document review, contract management, regulatory filing support, and compliance documentation. Teams trained in GDPR, ISO 27001 documentation practices, and industry-specific compliance frameworks.',
    features: ['KYC & AML document review', 'Contract lifecycle management', 'Regulatory filing support', 'GDPR-compliant data handling'],
  },
]

const METRICS = [
  { value: '40%', label: 'Average Cost Reduction', color: '#00C853' },
  { value: '99.8%', label: 'Data Accuracy SLA',    color: '#2563EB' },
  { value: '90s',  label: 'Avg First Response',    color: '#7C3AED' },
  { value: '24/7', label: 'Operational Coverage',  color: '#D97706' },
]

const FAQS = [
  {
    question: 'How quickly can an Infraspine BPO team be onboarded?',
    answer: 'Standard onboarding takes 5–10 business days for small teams (1–5 agents). This includes SOP documentation, system access provisioning, tool training, and a supervised pilot phase. Larger teams of 10+ agents take 2–3 weeks for complete onboarding.',
  },
  {
    question: 'What quality assurance processes do you have in place?',
    answer: 'Every BPO operation includes a dedicated QA analyst, weekly call audits (for voice operations), daily accuracy reviews (for data entry), error logs with root-cause analysis, and monthly client review calls with full performance dashboards.',
  },
  {
    question: 'Can your BPO team work in our timezone?',
    answer: 'Yes. We operate in Pakistan Standard Time (UTC+5) but our teams are flexible with shift arrangements. We regularly support clients in UAE (UTC+4), UK (UTC+0/+1), and US EST/PST timezones with staggered shifts.',
  },
  {
    question: 'Do you sign NDAs and data protection agreements?',
    answer: 'Absolutely. We sign NDAs before any engagement begins. For clients in regulated industries or handling personal data, we also sign Data Processing Agreements (DPAs) that define data handling, retention, and security obligations.',
  },
  {
    question: 'What tools and systems can your BPO teams work in?',
    answer: 'Our teams are trained on Zendesk, Freshdesk, HubSpot, Salesforce, Zoho CRM, QuickBooks, Xero, Slack, Microsoft Teams, Asana, ClickUp, and most standard SaaS platforms. If your tool is not on this list, we will train on it during onboarding.',
  },
]

export default function BPOServicesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'BPO Services' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle,#2563EB,transparent 70%)' }}
          aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-10 sm:py-14">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="h-px w-6" style={{ background: '#00C853' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Business Process Outsourcing</span>
              </div>
              <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
                Outsource Operations.<br />
                <span style={{ color: '#00C853' }}>Scale Without Overhead.</span>
              </h1>
              <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
                Infraspine BPO gives you enterprise-grade operational teams — customer support, back-office, data processing, finance, and virtual assistance — at 40% lower cost than in-house hiring. All teams run on your tools, your SOPs, your brand standards.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                  style={{ background: '#00C853', color: '#0A1628' }}>
                  Get a BPO Quote <ArrowRight size={14} />
                </Link>
                <Link href="/services/bpo-services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold border"
                  style={{ borderColor: '#ffffff22', color: '#CBD5E1' }}>
                  Explore BPO Services
                </Link>
              </div>
            </div>

            {/* Right stat cards */}
            <div className="grid grid-cols-2 gap-3">
              {METRICS.map(m => (
                <div key={m.label} className="rounded-2xl p-5 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[28px] font-black mb-1" style={{ color: m.color }}>{m.value}</div>
                  <div className="text-[11px] font-semibold" style={{ color: '#64748B' }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              What We Deliver
            </h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Six operational service lines, each with trained teams, documented SOPs, quality management, and measurable SLAs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(svc => (
              <div key={svc.title} className="bg-white rounded-2xl border p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: '#E2E8F0', boxShadow: '0 4px 20px rgba(10,22,40,0.06)' }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: svc.bg }}>
                  <svc.icon size={22} style={{ color: svc.color }} strokeWidth={1.5} />
                </div>
                <h3 className="text-[17px] font-black mb-3" style={{ color: '#0A1628' }}>{svc.title}</h3>
                <p className="text-[13.5px] leading-relaxed mb-5" style={{ color: '#64748B' }}>{svc.desc}</p>
                <ul className="space-y-1.5">
                  {svc.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-[13px]" style={{ color: '#475569' }}>
                      <CheckCircle size={13} style={{ color: svc.color, marginTop: '2px', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Infraspine BPO ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="h-px w-6" style={{ background: '#2563EB' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>Why Infraspine BPO</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-6" style={{ color: '#0A1628' }}>
                Operational Teams That Run Like Your Own — Without the Overhead
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Unlike commodity BPO providers, Infraspine teams are vertically trained in IT-adjacent industries. Our agents understand software, infrastructure, and technical workflows — making them effective in support, operations, and data roles that require more than scripted responses. Every team is managed by a dedicated account manager who attends your weekly standups and keeps performance on track.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Clock,      color: '#2563EB', text: 'Teams operational within 5–10 business days'  },
                  { icon: Shield,     color: '#00C853', text: 'NDA, DPA, and security screening on all agents' },
                  { icon: TrendingUp, color: '#7C3AED', text: 'Weekly performance dashboards with KPI tracking' },
                  { icon: Zap,        color: '#D97706', text: 'Integrated into your tools within 48 hours'      },
                ].map(({ icon: Icon, color, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}15` }}>
                      <Icon size={16} style={{ color }} />
                    </div>
                    <span className="text-[14px] font-semibold" style={{ color: '#374151' }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-8 border" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
              <p className="text-[12px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>
                BPO Engagement Model
              </p>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Requirements Call',    desc: 'We map your current process, volume, and SLA expectations'        },
                  { step: '02', title: 'SOP Documentation',   desc: 'We document your workflows, escalation paths, and quality criteria' },
                  { step: '03', title: 'Team Provisioning',   desc: 'Agents are selected, screened, and assigned to your account'       },
                  { step: '04', title: 'Supervised Pilot',    desc: '5-day pilot with QA review before going fully live'                },
                  { step: '05', title: 'Live Operations',     desc: 'Full delivery with weekly reporting and monthly optimization calls' },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <span className="text-[13px] font-black flex-shrink-0 pt-0.5" style={{ color: '#CBD5E1', minWidth: '24px' }}>{step}</span>
                    <div>
                      <p className="text-[14px] font-bold mb-0.5" style={{ color: '#0A1628' }}>{title}</p>
                      <p className="text-[13px]" style={{ color: '#64748B' }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion
        title="BPO Services — Frequently Asked Questions"
        subtitle="Common questions about working with an Infraspine BPO team."
        faqs={FAQS}
      />

      <CTABanner
        heading="Ready to Build Your Outsourced Operations Team?"
        subheading="Tell us your process, volume, and SLA requirements — we will have a team ready in under 2 weeks."
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
