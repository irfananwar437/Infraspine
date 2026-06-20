import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import { Users, BarChart2, GitMerge, Settings, BookOpen, CheckCircle, ArrowRight, Layers, Target } from 'lucide-react'

export const metadata = {
  title: 'CRM Implementation & Integration Services Pakistan | Infraspine',
  description: 'Expert CRM implementation, customisation, and integration for Pakistan businesses. Microsoft Dynamics 365, Salesforce, HubSpot, Zoho CRM.',
  alternates: { canonical: 'https://www.infraspine.com/services/crm' },
  openGraph: {
    title: 'CRM Implementation & Integration Services Pakistan | Infraspine',
    description: 'Expert CRM implementation, customisation, and integration for Pakistan businesses. Microsoft Dynamics 365, Salesforce, HubSpot, Zoho CRM.',
    url: 'https://www.infraspine.com/services/crm',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'CRM Implementation and Integration Services',
  name: 'Infraspine CRM Implementation & Integration Services',
  description: 'Expert CRM implementation, customisation, and integration for Pakistani businesses including Microsoft Dynamics 365, Salesforce, HubSpot, and Zoho CRM.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/crm',
  areaServed: { '@type': 'Country', name: 'Pakistan' },
}

const STATS = [
  { value: '500+', label: 'CRM seats deployed',             color: '#0EA5E9' },
  { value: '3 wk',  label: 'average go-live timeline',      color: '#00C853' },
  { value: '40%',   label: 'avg. sales efficiency gain',    color: '#D97706' },
  { value: '98%',   label: 'user adoption rate achieved',   color: '#7C3AED' },
]

const FAILURE_REASONS = [
  {
    title: 'Wrong Platform Selection',
    desc: 'Most CRM failures begin before go-live. Choosing a platform based on a sales pitch rather than a structured requirements analysis leads to a system that does not fit the sales process, cannot integrate with existing tools, and requires expensive customisation before it delivers any value.',
  },
  {
    title: 'No Data Migration Strategy',
    desc: 'Moving to a new CRM means migrating years of customer records, interaction history, and pipeline data. Without a rigorous data cleansing and migration plan, organisations go live with a CRM full of duplicates, missing contacts, and inaccurate history — destroying user confidence from day one.',
  },
  {
    title: 'Poor User Adoption',
    desc: 'A CRM is only as valuable as the data sales teams put into it. Without structured training, clear process documentation, and management accountability for usage, adoption stalls within weeks of go-live and the CRM becomes a shadow system rather than a system of record.',
  },
  {
    title: 'Isolated from Other Systems',
    desc: 'A CRM that does not talk to your ERP, email platform, or WhatsApp Business creates duplicate data entry and gives sales teams an incomplete customer picture. Integration is not optional — it is the mechanism through which a CRM delivers its ROI.',
  },
]

const CAPABILITIES = [
  {
    icon: Target,
    title: 'CRM Selection & Business Fit Analysis',
    color: '#0EA5E9',
    bg: '#F0F9FF',
    desc: 'Choosing the wrong CRM platform is the single most expensive mistake in a CRM programme — and it happens frequently because organisations evaluate platforms based on marketing materials rather than structured fit analysis against their specific sales process, team size, integration requirements, and budget constraints. Infraspine runs a rigorous CRM selection process that begins with documenting your current sales, marketing, and customer service workflows in detail, identifying the gaps and inefficiencies that a CRM should address, and defining a prioritised requirements list before any vendor is contacted. We evaluate shortlisted platforms (Microsoft Dynamics 365, Salesforce, HubSpot, Zoho CRM, Odoo CRM, and others) against your specific requirements using a weighted scoring methodology, arrange vendor demonstrations with scripted scenarios drawn from your real business processes, check customer references from comparable organisations, and provide an independent written recommendation with commercial analysis. The deliverable is a vendor selection decision you can defend — not a guess.',
    points: [
      'Structured sales process documentation and gap analysis',
      'Weighted multi-vendor evaluation against your specific requirements',
      'Scripted vendor demonstrations using your actual business scenarios',
      'Independent written recommendation with commercial and TCO analysis',
    ],
  },
  {
    icon: Layers,
    title: 'Microsoft Dynamics 365 Implementation',
    color: '#0078D4',
    bg: '#EFF6FF',
    desc: 'Microsoft Dynamics 365 Sales is the natural CRM choice for organisations already invested in the Microsoft ecosystem — it integrates natively with Microsoft 365, Teams, Outlook, SharePoint, and Azure Active Directory, creating a unified working environment where salespeople manage customer relationships without switching between disconnected tools. Infraspine\'s Dynamics 365 implementation methodology covers the full delivery lifecycle: requirements workshops, system configuration, entity and field customisation, sales process workflow automation using Power Automate, email integration with Outlook, Teams calling integration, Power BI reporting configuration, data migration from your existing system, user acceptance testing, and phased go-live with hypercare support. We configure the platform to reflect your actual sales stages, qualification criteria, and approval processes — not the out-of-the-box Microsoft defaults that rarely match any real organisation\'s sales motion. Post-implementation, we provide administrator training so your internal team can manage configuration changes without depending on a consultant for every adjustment.',
    points: [
      'Full lifecycle implementation from requirements to go-live and hypercare',
      'Sales process and pipeline customisation to match your actual sales motion',
      'Power Automate workflow automation for lead routing and follow-up sequences',
      'Power BI sales performance dashboards and management reporting',
    ],
  },
  {
    icon: Settings,
    title: 'Salesforce Configuration & Customisation',
    color: '#00A1E0',
    bg: '#E0F5FF',
    desc: 'Salesforce is the world\'s most widely deployed CRM platform, and for good reason — its AppExchange ecosystem, reporting flexibility, and automation capability are exceptional. However, Salesforce\'s flexibility is also its implementation challenge: without disciplined configuration and governance, Salesforce deployments accumulate technical debt rapidly, becoming difficult to maintain and expensive to modify. Infraspine\'s Salesforce practice delivers clean, well-documented implementations that are designed to evolve. Our configuration work covers Sales Cloud and Service Cloud setup, custom object and field creation for your specific data model, validation rules and page layout design, Salesforce Flow automation for your sales and service processes, territory and permission set management, AppExchange integration for any required third-party tools, and Einstein Analytics (Salesforce native reporting) configuration for your management dashboards. We document every configuration decision with change log records so future administrators can understand why each setting exists and safely modify it. For Pakistani businesses, we also configure Salesforce for PKR currency, Pakistan timezone, and local regulatory requirements.',
    points: [
      'Sales Cloud and Service Cloud configuration and customisation',
      'Salesforce Flow automation for sales processes and service workflows',
      'Territory management, permission sets, and role hierarchy design',
      'Einstein Analytics dashboards and Pakistan-specific configuration',
    ],
  },
  {
    icon: Users,
    title: 'HubSpot & Zoho CRM Setup',
    color: '#FF7A59',
    bg: '#FFF3EF',
    desc: 'HubSpot and Zoho CRM are the leading platforms for small and mid-sized businesses that need powerful CRM capability without enterprise-level implementation complexity or licensing cost. HubSpot\'s Marketing Hub integration makes it particularly strong for organisations where inbound marketing and CRM alignment is a priority — the native connection between website lead capture, email marketing sequences, and sales pipeline creates a unified customer journey that enterprise platforms require expensive third-party integration to achieve. Zoho CRM offers extraordinary value for organisations with limited budgets, with a feature set that rivals platforms costing five times as much. Infraspine configures both platforms to match your specific sales process: custom pipeline stages with defined entry and exit criteria, deal probability settings calibrated to your historical conversion rates, automated sequences for lead nurturing and follow-up, email and calendar integration, web-to-lead form setup for your website, and management dashboards showing the pipeline metrics your leadership team actually tracks. We also configure the Zoho One suite integrations (Zoho Books, Zoho Desk, Zoho Analytics) for organisations using the broader Zoho ecosystem.',
    points: [
      'HubSpot Sales Hub and Marketing Hub configuration and alignment',
      'Zoho CRM and Zoho One suite setup and integration',
      'Custom pipeline stages, deal properties, and automation sequences',
      'Web-to-lead forms, email sequences, and lead nurturing workflows',
    ],
  },
  {
    icon: GitMerge,
    title: 'CRM Integration (ERP, Email, WhatsApp)',
    color: '#0EA5E9',
    bg: '#F0F9FF',
    desc: 'A CRM that operates in isolation from the rest of your technology stack delivers a fraction of its potential value. Sales teams need to see customer order history and outstanding invoices from the ERP without leaving the CRM. Finance teams need CRM deal data to feed revenue forecasting in the accounting system. Marketing teams need CRM contact segments to power targeted campaigns. WhatsApp Business — the dominant business communication channel in Pakistan — needs to be connected to the CRM so every customer conversation is logged and visible. Infraspine designs and implements CRM integrations using REST APIs, webhooks, and middleware platforms (Zapier, Make, Microsoft Power Automate, or custom API development) to connect your CRM to your specific ecosystem. Common integrations we deliver include: CRM to ERP (SAP, Microsoft Dynamics 365 Finance, Odoo, custom ERP) for customer master data synchronisation and order visibility; CRM to email platforms (Microsoft 365, Google Workspace) for email logging and calendar sync; WhatsApp Business API integration for conversation logging and bulk messaging; and CRM to accounting software (QuickBooks, Xero, Sage) for invoice and payment visibility within the sales record.',
    points: [
      'CRM to ERP integration for customer data, orders, and invoice visibility',
      'WhatsApp Business API integration for Pakistan market communication',
      'Email platform integration for automated conversation logging',
      'Custom API development for non-standard integration requirements',
    ],
  },
  {
    icon: BookOpen,
    title: 'CRM Training & Adoption Management',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'A CRM project does not succeed at go-live — it succeeds or fails over the following ninety days as sales teams decide whether to adopt it or revert to spreadsheets and informal processes. Infraspine\'s adoption management programme treats go-live as the beginning of the CRM programme, not the end. We design role-specific training programmes (different content for sales representatives, sales managers, marketing team, and system administrators), deliver both live training sessions and recorded reference materials that team members can revisit, create process documentation that explains not just how to use the CRM but why each step matters for the sales process, and establish a ninety-day adoption measurement plan with defined usage KPIs tracked weekly. We work with sales leadership to establish CRM usage as part of the management cadence — ensuring that pipeline reviews, forecast calls, and performance conversations happen inside the CRM rather than in parallel to it, which is the single most effective driver of sustained adoption. Post-training support includes a helpdesk channel for user questions and a monthly administrator review session during the first six months.',
    points: [
      'Role-specific training programmes for sales, management, and administrators',
      'Process documentation explaining the why behind each CRM workflow step',
      'Ninety-day adoption measurement plan with weekly usage KPI tracking',
      'Post-go-live helpdesk support and monthly administrator review sessions',
    ],
  },
]

const TECH_STRIP = [
  'Microsoft Dynamics 365',
  'Salesforce',
  'HubSpot',
  'Zoho CRM',
  'Odoo CRM',
  'SugarCRM',
  'Freshsales',
  'Pipedrive',
]

const FAQS = [
  {
    question: 'How do we choose the right CRM platform for our business?',
    answer: 'The right CRM depends on four factors: your existing technology ecosystem (Microsoft 365 users often find Dynamics 365 the best fit; Google Workspace users often prefer HubSpot), your team size (Zoho and HubSpot work well for teams under 50; Salesforce and Dynamics 365 scale better for larger organisations), your integration requirements (which other systems the CRM must connect to), and your budget for licensing and implementation. We run a structured selection process that evaluates these factors before recommending a platform — avoiding the common mistake of choosing based on marketing materials alone.',
  },
  {
    question: 'How long does a CRM implementation typically take?',
    answer: 'A standard CRM implementation for a business with a straightforward sales process and under fifty users typically takes three to five weeks from requirements sign-off to go-live. More complex implementations involving multi-team deployments, extensive custom configuration, ERP integration, or large data migrations take six to twelve weeks. We provide a firm timeline estimate after the requirements workshop, and we structure implementations in phases so that the core system is live and generating value while additional configuration is completed.',
  },
  {
    question: 'What data can we migrate from our current system or spreadsheets?',
    answer: 'We can migrate contacts, companies, deals/opportunities, interaction history, notes, tasks, and custom data fields from your existing CRM, spreadsheets, or any system that can export data in CSV or via API. Before migration, we run a data cleansing exercise to remove duplicates, standardise formats, and fill gaps — because migrating dirty data into a new CRM simply transfers the problem. The cleansing step is time-consuming but essential for launching the new system with data that teams actually trust.',
  },
  {
    question: 'Can you integrate our CRM with WhatsApp Business for the Pakistan market?',
    answer: 'Yes — WhatsApp Business integration is one of the most common integration requests for Pakistani businesses, and we have implemented it across multiple CRM platforms. The integration works via the WhatsApp Business API (not the consumer app) and logs all customer conversations against the relevant CRM contact record, enables click-to-WhatsApp from within the CRM, and in some configurations enables bulk messaging to customer segments with template messages approved by WhatsApp. The Meta WhatsApp Business API requires a verified business account and approved message templates for outbound messaging.',
  },
  {
    question: 'What happens if our salespeople do not adopt the CRM?',
    answer: 'Poor adoption is the most common reason CRM projects fail to deliver ROI. The root causes are almost always: the CRM does not match how salespeople actually work (a configuration problem), salespeople do not understand the value they get from using it (a training problem), or management does not require or review CRM data (a leadership problem). Our adoption programme addresses all three: we configure the CRM to match your actual sales process, deliver role-specific training that explains the benefits to each user, and work with sales leadership to establish CRM usage as part of the management cadence. We track adoption KPIs weekly for the first ninety days and intervene early when adoption is lagging.',
  },
  {
    question: 'Do you provide ongoing CRM support after implementation?',
    answer: 'Yes. We offer three post-implementation support options: a twelve-month managed service retainer covering ongoing configuration changes, user support, and monthly system health reviews; an ad-hoc support bank for organisations that need occasional help without a monthly commitment; and a quarterly optimisation review for organisations that have an internal administrator but want an external expert to identify improvement opportunities. All implementations include a ninety-day warranty period covering any issues arising from our implementation work at no additional charge.',
  },
]

export default function CrmPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'CRM' },
      ]} />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle,#0EA5E9,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-10 sm:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: '#0EA5E9' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0EA5E9' }}>CRM Services</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              CRM That Sales Teams<br />
              <span style={{ color: '#0EA5E9' }}>Actually Use.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              Most CRM implementations fail not because of the technology, but because of poor platform selection, inadequate configuration, and no adoption strategy. Infraspine delivers CRM programmes that match your real sales process, integrate with your existing tools, and achieve adoption rates that make the investment worthwhile. Microsoft Dynamics 365, Salesforce, HubSpot, Zoho CRM — we implement them all across Pakistani businesses of every size and sector.
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
              style={{ background: '#0EA5E9', color: '#fff' }}>
              Book a Free CRM Discovery Call <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why CRM fails section */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="h-px w-6" style={{ background: '#0EA5E9' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0EA5E9' }}>The CRM Problem</span>
              </div>
              <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Why Most CRM Implementations Fail to Deliver ROI
              </h2>
              <p className="text-[15px] leading-relaxed mb-5" style={{ color: '#64748B' }}>
                Studies consistently show that between 30% and 70% of CRM implementations fail to achieve their intended objectives — wasted investment that ranges from hundreds of thousands to millions of rupees. The failure patterns are consistent and well-understood. They are also entirely avoidable with the right implementation approach.
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: '#64748B' }}>
                Infraspine\'s CRM methodology is built around the four root causes of CRM failure. We address each of them explicitly in every engagement — because ignoring any one of them is enough to undermine the entire programme.
              </p>
            </div>
            <div className="space-y-4">
              {FAILURE_REASONS.map((reason, i) => (
                <div key={reason.title} className="rounded-xl p-5 border flex items-start gap-4"
                  style={{ background: '#F0F9FF', borderColor: '#BAE6FD' }}>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 text-[12px] font-black"
                    style={{ background: '#0EA5E9', color: '#fff' }}>
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-[14px] font-black mb-1.5" style={{ color: '#0A1628' }}>{reason.title}</p>
                    <p className="text-[13px] leading-relaxed" style={{ color: '#64748B' }}>{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 sm:py-20" style={{ background: '#F0F9FF' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black mb-4" style={{ color: '#0A1628' }}>CRM Implementation Services</h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Six service areas covering the complete CRM programme lifecycle — from platform selection through to adoption and ongoing optimisation.
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

      {/* Technology strip */}
      <section className="py-10 bg-white border-y" style={{ borderColor: '#E2E8F0' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] flex-shrink-0" style={{ color: '#94A3B8' }}>
              Platforms we implement
            </p>
            <div className="w-px h-8 hidden sm:block" style={{ background: '#E2E8F0' }} />
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              {TECH_STRIP.map(tech => (
                <span key={tech}
                  className="px-4 py-2 rounded-xl text-[12px] font-bold border"
                  style={{ background: '#F8FAFC', borderColor: '#E2E8F0', color: '#374151' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion
        title="CRM Services — Frequently Asked Questions"
        subtitle="Practical answers to the questions organisations ask before committing to a CRM implementation."
        faqs={FAQS}
      />

      <CTABanner
        heading="Start Your CRM Programme the Right Way"
        subheading="Book a free CRM discovery call. We will map your current sales process, identify the right platform, and estimate the investment required — at no charge and no obligation."
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
