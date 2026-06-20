import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import { Users, Phone, FileText, BarChart2, Settings, Clock, CheckCircle, ArrowRight, Globe, Headphones } from 'lucide-react'

export const metadata = {
  title: 'BPO Services Pakistan — Customer Support, Data Processing & Back-Office Outsourcing | Infraspine',
  description: 'Infraspine BPO: 24/7 customer support, technical helpdesk, data entry and processing, finance and accounting back-office, HR administration, and document management outsourcing from Karachi.',
  alternates: { canonical: 'https://www.infraspine.com/services/bpo-services' },
  openGraph: {
    title: 'BPO Services Pakistan — Customer Support, Data Processing & Back-Office Outsourcing | Infraspine',
    description: 'Customer support, technical helpdesk, data processing, finance back-office, HR admin, and document management BPO from Infraspine.',
    url: 'https://www.infraspine.com/services/bpo-services',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Business Process Outsourcing Services',
  name: 'Infraspine BPO Services',
  description: 'Enterprise BPO including 24/7 customer support, technical helpdesk, data processing, finance back-office, HR administration, and document management.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/bpo-services',
}

const STATS = [
  { value: '24/7',  label: 'customer support coverage',          color: '#2563EB' },
  { value: '98.5%', label: 'quality assurance score average',    color: '#00C853' },
  { value: '40%',   label: 'average operational cost reduction', color: '#D97706' },
  { value: '72hr',  label: 'average time from contract to live', color: '#7C3AED' },
]

const CAPABILITIES = [
  {
    icon: Headphones,
    title: 'Customer Support & Contact Centre',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Omnichannel customer support across phone, email, live chat, and WhatsApp Business — staffed by trained agents who represent your brand with the same quality standards your internal team would. Dedicated agent teams for clients requiring brand consistency, or shared agent pools for lower-volume requirements. All interactions are logged, quality-scored, and reported weekly. SLA options from office-hours coverage through to full 24/7 operations with weekend and holiday cover.',
    points: ['Phone, email, live chat, and WhatsApp Business channels', 'Dedicated or shared agent pools depending on volume', 'Quality assurance scoring on every interaction', 'Weekly performance reports with CSAT, AHT, and resolution rate'],
  },
  {
    icon: Settings,
    title: 'Technical Helpdesk & IT Support',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'IT helpdesk outsourcing for organisations that need professional first-line and second-line IT support without the cost of full-time internal staff. Infraspine agents are IT-trained — unlike generic call centre staff — and handle password resets, software installation, VPN connectivity, email configuration, and common application issues. Integration with your existing ticketing system (ServiceNow, Jira, Freshdesk, or Zendesk) and escalation paths to your internal senior engineers for complex issues.',
    points: ['IT-qualified helpdesk agents (not generic call centre staff)', 'L1 and L2 support covering hardware, software, and connectivity', 'Integration with your existing ITSM ticketing system', 'Escalation paths to your internal senior engineers'],
  },
  {
    icon: FileText,
    title: 'Data Entry & Processing',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'High-volume, accurate data entry and processing for organisations with regular data workloads that are time-consuming for internal staff but too variable for full-time headcount. Invoice data entry, form processing, CRM data updates, database enrichment, document indexing, and e-commerce product data management. Double-keying and automated validation rules enforce data quality standards. Typical accuracy rates exceed 99.8% with our quality control processes in place.',
    points: ['Invoice, form, and document data entry with 99.8%+ accuracy', 'Double-keying and automated validation for quality assurance', 'CRM data cleaning, enrichment, and deduplication', 'E-commerce product data management and catalogue maintenance'],
  },
  {
    icon: BarChart2,
    title: 'Finance & Accounting Back-Office',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Finance back-office outsourcing for growing businesses that need accounts payable, accounts receivable, bank reconciliation, expense processing, and financial reporting support without the overhead of a large finance team. Our finance BPO team includes qualified accounting professionals who work within your existing accounting software — Xero, QuickBooks, SAP, or Oracle — following your chart of accounts and approval workflows. Month-end reporting packs prepared and reviewed before delivery.',
    points: ['Accounts payable and receivable processing', 'Bank reconciliation and expense claim processing', 'Working within your Xero, QuickBooks, SAP, or Oracle environment', 'Month-end reporting pack preparation and review'],
  },
  {
    icon: Users,
    title: 'HR Administration & Payroll Support',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'HR administration outsourcing covering the transactional and compliance-heavy tasks that consume significant HR team time without requiring strategic HR judgment. Employee record management, leave and attendance tracking, new hire onboarding paperwork, payroll data preparation and validation, benefits administration, and HR compliance reporting. Our HR BPO team is familiar with Pakistan employment law and documentation requirements for private sector organisations.',
    points: ['Employee record management and HRIS data maintenance', 'Leave, attendance, and payroll data processing', 'New hire onboarding documentation and system setup', 'Pakistan employment law compliance and reporting support'],
  },
  {
    icon: Globe,
    title: 'Document Management & Digitisation',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Physical document digitisation, indexing, and digital archive creation for organisations with large backlogs of paper records — contracts, HR files, financial records, regulatory submissions — that need to be accessible digitally. High-resolution scanning, OCR text extraction, metadata tagging, and upload to your chosen document management system (SharePoint, DocuWare, or custom). Destruction certification for physical documents after digital archive is verified.',
    points: ['High-resolution scanning and OCR text extraction', 'Metadata tagging and indexing to your classification schema', 'Upload to SharePoint, DocuWare, or custom DMS', 'Certified physical document destruction after digital verification'],
  },
]

const FAQS = [
  {
    question: 'How quickly can BPO services be operational after signing a contract?',
    answer: 'Standard BPO service lines (customer support, data entry, helpdesk) are typically operational within 72 hours for basic setups — we have pre-trained agents, pre-configured communication platforms, and established quality control processes. More complex engagements requiring custom workflows, system integrations, or dedicated agent training take 2–4 weeks to go live. We provide a detailed onboarding timeline during the commercial negotiation stage so expectations are aligned before signing.',
  },
  {
    question: 'How do you maintain quality standards across high-volume outsourced work?',
    answer: 'Quality assurance is built into every BPO process. For customer support, every interaction is scored against a quality rubric — grammar, accuracy, tone, resolution quality — with a sample of every agent\'s calls reviewed weekly. For data processing, double-keying and automated validation rules catch errors before data enters your systems. All quality scores are included in your weekly and monthly reports. Agents who fall below threshold scores receive retraining before their next shift.',
  },
  {
    question: 'Will BPO agents have access to our sensitive customer or financial data?',
    answer: 'Yes, necessarily — and this is why data security is central to our BPO operations. All agents sign NDAs and data processing agreements, work from secure facilities with access controls, and can only access systems through role-limited accounts you provision. We operate under GDPR-aligned data processing principles. For clients in regulated industries, we support custom data handling agreements and compliance audits of our facilities and processes.',
  },
  {
    question: 'Can BPO agents work within our existing software systems?',
    answer: 'Yes. Our BPO agents work within client-provided systems through secure remote desktop access, VPN connections, or web application access — we do not require you to change your software or migrate data to a third-party platform. We commonly work within CRM systems (Salesforce, HubSpot), ticketing systems (ServiceNow, Zendesk, Freshdesk), accounting software (Xero, QuickBooks, SAP), and bespoke internal applications.',
  },
  {
    question: 'What are the minimum contract terms for BPO services?',
    answer: 'Our minimum engagement is typically 3 months, which allows enough time to complete onboarding, reach full operational efficiency, and demonstrate measurable quality results. Most clients move to 12-month renewable agreements after the initial period. Volume commitments are agreed upfront — we work with both fixed-volume contracts (agreed number of transactions or hours per month) and variable arrangements where volume flexes month to month within agreed bands.',
  },
  {
    question: 'Do you provide BPO services to international clients outside Pakistan?',
    answer: 'Yes. Infraspine BPO serves clients in the UK, UAE, USA, and Australia in addition to Pakistan. English-language customer support for international clients is one of our strongest service lines — our agents are proficient in written and spoken English to a standard suitable for UK and US customer-facing roles. All operations are based in Karachi, offering significant cost advantages over UK or US domestic BPO providers while maintaining equivalent or superior quality standards.',
  },
]

export default function BpoServicesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'BPO Services' },
      ]} />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>BPO Services</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Outsource the Operational.<br />
              <span style={{ color: '#00C853' }}>Focus on the Strategic.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              The most expensive work your business does is often the most repetitive — customer support calls, data entry, invoice processing, HR paperwork, helpdesk tickets. This work must happen. But it does not need to consume your best people. Infraspine BPO handles these processes for you with trained teams, quality controls, and SLAs — so your organisation can invest in the work that actually creates competitive advantage.
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
              style={{ background: '#00C853', color: '#0A1628' }}>
              Get a BPO Cost Estimate <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why outsource */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="h-px w-6" style={{ background: '#00C853' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>The Business Case</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Why Outsource Business Processes?
              </h2>
              <p className="text-[15px] leading-relaxed mb-5" style={{ color: '#64748B' }}>
                Operational processes — customer support, data entry, administration, helpdesk — are essential but not the core of most businesses. Yet they consume a disproportionate share of headcount, management attention, and office space. Every hour a skilled employee spends processing invoices manually is an hour not spent on work that creates revenue, builds relationships, or solves strategic problems.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                BPO allows you to access a trained, managed team with established quality controls and technology infrastructure — without the cost of recruiting, training, managing, and retaining full-time headcount for roles that have high turnover and training costs. Infraspine BPO clients consistently report 30–50% cost reductions compared to equivalent in-house operations, alongside measurable improvements in quality and consistency.
              </p>
              {['No recruitment, training, or HR management overhead',
                'Elastic capacity — scale up or down as volume changes',
                'Quality controls and SLAs your internal team may not have',
                'Immediate access to trained staff without a 3-month hiring cycle',
                'Focus internal management on strategy, not operational firefighting',
              ].map(p => (
                <div key={p} className="flex items-center gap-3 mb-2.5">
                  <CheckCircle size={15} style={{ color: '#00C853', flexShrink: 0 }} />
                  <span className="text-[14px]" style={{ color: '#374151' }}>{p}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl p-7 border" style={{ background: '#F0FDF4', borderColor: '#BBF7D0' }}>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#00C853' }}>BPO Cost Comparison: In-House vs Infraspine</p>
              <div className="space-y-4">
                {[
                  { item: 'Customer support agent (1x full-time)',  inhouse: 'PKR 60–80k/mo + benefits + training', bpo: 'Included in SLA' },
                  { item: 'Recruitment and onboarding cost',         inhouse: 'PKR 30–50k per hire',                 bpo: 'Zero — we manage this' },
                  { item: 'Management overhead',                     inhouse: 'Team lead + HR support required',     bpo: 'Included in contract' },
                  { item: 'Technology (telephony, CRM, ticketing)',  inhouse: 'PKR 15–25k/mo software cost',         bpo: 'Included in contract' },
                  { item: 'Quality assurance',                       inhouse: 'Separate QA hire required',           bpo: 'Included — scored weekly' },
                  { item: 'Scaling to peak volume',                  inhouse: '3-month hiring cycle',                bpo: '72 hours' },
                ].map(({ item, inhouse, bpo }) => (
                  <div key={item} className="bg-white rounded-xl p-4 border" style={{ borderColor: '#BBF7D0' }}>
                    <p className="text-[13px] font-bold mb-2" style={{ color: '#0A1628' }}>{item}</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: '#DC2626' }}>In-House</p>
                        <p className="text-[11.5px]" style={{ color: '#64748B' }}>{inhouse}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: '#00C853' }}>Infraspine BPO</p>
                        <p className="text-[11.5px]" style={{ color: '#374151' }}>{bpo}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black mb-4" style={{ color: '#0A1628' }}>BPO Service Lines</h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Six outsourcing service lines covering customer-facing, back-office, and technical operations.
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
        title="BPO Services — Frequently Asked Questions"
        subtitle="Direct answers to the questions organisations ask before outsourcing business processes."
        faqs={FAQS}
      />

      <CTABanner
        heading="Ready to Reduce Operational Costs by 40%?"
        subheading="Book a free BPO consultation. We will assess your processes, model the cost savings, and show you exactly how an Infraspine BPO engagement would work for your business."
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
