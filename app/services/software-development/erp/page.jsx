import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Users, DollarSign, Package, BarChart2, Briefcase, LineChart,
  ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'Custom ERP Development Pakistan — Enterprise Resource Planning Software | Infraspine',
  description: 'Infraspine Custom ERP Development: 20+ ERP systems delivered in Pakistan with full source code ownership. HR, payroll, finance, inventory, CRM, operations and BI dashboard — all integrated, 6-month average delivery.',
  alternates: { canonical: 'https://www.infraspine.com/services/software-development/erp' },
  openGraph: {
    title: 'Custom ERP Development Pakistan — Enterprise Resource Planning Software | Infraspine',
    description: 'Custom ERP development in Pakistan — 20+ systems delivered, 6-month average delivery, full source code ownership. HR, Finance, Inventory, CRM, and BI all integrated.',
    url: 'https://www.infraspine.com/services/software-development/erp',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Custom ERP Development',
  name: 'Infraspine Custom ERP Development',
  description: 'Custom Enterprise Resource Planning software development covering HR & Payroll, Finance & Accounting, Inventory, CRM, Operations, and Business Intelligence for Pakistani businesses.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/software-development/erp',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '20+', label: 'ERP Systems Delivered', color: '#16A34A' },
  { value: 'All', label: 'Business Functions', color: '#2563EB' },
  { value: '6-month', label: 'Average Delivery', color: '#D97706' },
  { value: '100%', label: 'Source Code Ownership', color: '#00C853' },
]

const CAPABILITIES = [
  {
    icon: Users,
    title: 'HR & Payroll Module',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'Human Resources management in Pakistani organisations carries specific complexity: gratuity calculations under the Employment of Provident Fund Ordinance, EOBI contributions, PESSI requirements for Sindh-based businesses, increments linked to performance review cycles, leave types mapped to company policy, and payroll output formatted for the specific bank bulk transfer templates your payroll bank requires. Our HR module handles all of this natively — not as workarounds — because it is built specifically for your business processes rather than adapted from a foreign ERP&apos;s assumptions about how employment works.',
    points: [
      'Pakistan-specific payroll: EOBI, PESSI, gratuity, income tax calculations',
      'Leave management with custom leave types and balance accrual rules',
      'Performance appraisal cycles linked to increment and promotion workflows',
      'Bank bulk payment file generation for all major Pakistani banks',
    ],
  },
  {
    icon: DollarSign,
    title: 'Finance & Accounting (GL, AP, AR)',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'The finance module is the integration point for all other ERP modules — purchasing, sales, payroll, and inventory all generate accounting entries that flow into the general ledger. Our finance module covers double-entry bookkeeping with a configurable chart of accounts, accounts payable with invoice matching against purchase orders, accounts receivable with ageing analysis and automated statement generation, bank reconciliation, multi-currency transactions, and financial statement generation (trial balance, P&L, balance sheet) formatted for Pakistani accounting standards and tax filing requirements.',
    points: [
      'Full double-entry bookkeeping with configurable chart of accounts',
      'Purchase order-to-invoice matching in accounts payable',
      'Accounts receivable ageing and automated statement generation',
      'Financial statements formatted for Pakistan FBR tax filing',
    ],
  },
  {
    icon: Package,
    title: 'Inventory & Procurement Management',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Inventory accuracy is the difference between knowing you have stock and hoping you have stock. Our inventory module tracks stock levels in real time across multiple warehouses and locations, enforces reorder point triggers and generates purchase requisitions automatically, manages goods receipt against purchase orders with quality inspection hold workflows, and tracks stock movement history with full audit trail for every item. Serial number and batch tracking are included for businesses with traceability requirements such as pharmaceuticals, food & beverage, or electronics.',
    points: [
      'Real-time stock levels across multiple warehouses and locations',
      'Automated purchase requisition generation at reorder point',
      'Goods receipt against PO with quality inspection workflow',
      'Serial number and batch tracking for regulated industries',
    ],
  },
  {
    icon: Briefcase,
    title: 'CRM & Sales Pipeline',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Customer Relationship Management integrated with your ERP means sales pipeline data, customer account history, order status, and credit limit information are all in a single system rather than spread across a separate CRM tool, a spreadsheet, and accounting software. Our CRM module covers lead-to-opportunity-to-quotation-to-order workflows, customer account management with contact history and interaction log, sales team performance dashboards, quotation generation linked to inventory availability, and commission calculation rules linked to payroll — closing the loop between sales activity and payroll processing.',
    points: [
      'Lead-to-order pipeline with stage-based workflow automation',
      'Customer account history integrated with AR and order management',
      'Quotation generation linked to real-time inventory availability',
      'Sales commission calculation integrated with payroll module',
    ],
  },
  {
    icon: Users,
    title: 'Operations & Project Management',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'For service businesses, manufacturing operations, and construction organisations, the operations module connects resource planning to financial performance. We build operations modules covering project creation and milestone tracking, resource allocation and capacity planning, timesheet capture linked to project cost reporting, job costing and work-in-progress tracking, and customer billing triggers based on project milestones or timesheet hours. The depth of functionality depends on your industry and process complexity — we design what you actually need, not a generic module that covers every possibility.',
    points: [
      'Project milestone tracking with Gantt chart visualisation',
      'Resource allocation and capacity planning across projects',
      'Timesheet capture linked to project cost and billing',
      'Job costing and work-in-progress reporting for manufacturing',
    ],
  },
  {
    icon: LineChart,
    title: 'Reporting & Business Intelligence Dashboard',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Data that stays in transactional tables is data that is not driving decisions. Our BI module transforms operational data into management dashboards covering sales performance, inventory turnover, cash flow, payroll cost by department, customer acquisition and retention, and production efficiency — all presented in configurable visual dashboards accessible on desktop and mobile. Executive dashboards are designed to give leadership one-screen visibility of KPIs that matter. Operational dashboards give department managers the drill-down detail they need. Scheduled email reports deliver key metrics to stakeholders who do not log in to the system daily.',
    points: [
      'Configurable executive KPI dashboards with real-time data',
      'Department-level operational dashboards with drill-down capability',
      'Scheduled email reports for stakeholders across the organisation',
      'Export to Excel and PDF for reporting workflows that need it',
    ],
  },
]

const VENDORS = [
  'Next.js', 'Node.js', 'PostgreSQL', 'React',
  'Redis', 'Docker', 'REST APIs', 'Power BI',
  'Chart.js', 'Prisma ORM', 'AWS / Azure', 'Nginx',
]

const FAQS = [
  {
    question: 'Why choose custom ERP over an off-the-shelf solution like SAP or Oracle?',
    answer: 'Off-the-shelf ERP systems like SAP Business One, Oracle NetSuite, or Microsoft Dynamics are built for the global average business — which means they require significant customisation to match how any specific business actually works, and that customisation comes at significant cost. For Pakistani businesses specifically, off-the-shelf ERPs frequently have limited or incorrect support for local requirements: Pakistan-specific payroll tax calculations, EOBI and PESSI contributions, FBR tax filing formats, and local bank payment file formats. Custom ERP is built around how you work — not the reverse. It also carries no per-user licensing cost, no vendor lock-in, and no dependency on a foreign company&apos;s development roadmap for features your business needs.',
  },
  {
    question: 'How is a custom ERP project structured and what does delivery look like?',
    answer: 'We use a phased delivery approach. Phase 1 (Discovery, weeks 1–4): workshops to map your business processes, identify module scope, define integration points, and produce detailed functional specifications. Phase 2 (Design, weeks 5–8): database schema, API architecture design, UI/UX wireframes for key workflows, and technical specification sign-off. Phase 3 (Development, weeks 9–20): modular development with bi-weekly sprint demos so you see working software throughout development — not just at the end. Phase 4 (Testing & UAT, weeks 21–24): systematic QA testing, user acceptance testing by your team with bug fixing. Phase 5 (Deployment & Training, weeks 25–26): production deployment, data migration, and staff training. The exact timeline varies by complexity.',
  },
  {
    question: 'Can you migrate our data from existing software into the new ERP?',
    answer: 'Yes — data migration is included in every ERP project. We assess your current data sources (Excel spreadsheets, existing accounting software, legacy databases, paper records), define the data mapping from source to destination, write migration scripts that transform and load the data into your new ERP, and run test migrations against a staging environment for validation before go-live. The most important rule of data migration is that you need to validate the migrated data, not just assume it is correct. We provide validation tools and checklists that let your team confirm data accuracy before the go-live date.',
  },
  {
    question: 'What technologies do you use to build custom ERP systems?',
    answer: 'Our standard ERP technology stack is Next.js for the frontend (server-rendered React with excellent performance characteristics), Node.js with Express or NestJS for the API layer, PostgreSQL for the primary database (excellent for complex relational data and reporting), Redis for caching and session management, and Docker for deployment. The system is deployed on AWS or Azure with automated backups, CI/CD pipeline, and monitoring. We choose this stack because it is mature, widely supported, has a large talent pool for future maintainability, and our team has deep expertise in it — but we can also work with other technology preferences if your organisation has existing constraints.',
  },
  {
    question: 'What does ongoing maintenance and support look like after delivery?',
    answer: 'We offer three post-delivery support models. Bug Fix Warranty: a 90-day warranty covering all defects in the delivered functionality at no additional cost. Maintenance Retainer: a monthly retainer covering bug fixes, minor enhancements, security updates, and priority support response — the most common choice for clients who want their ERP to evolve with their business. Project-Based Updates: for clients who prefer to commission enhancement sprints as needed rather than maintaining a retainer. We also provide source code handover to your internal team if you have developer resources who want to take over future development — we document the system thoroughly to enable this.',
  },
  {
    question: 'Can the ERP integrate with our existing software (accounting, ecommerce, etc.)?',
    answer: 'Yes — integration with third-party systems is a standard part of ERP development. Common integrations we build include accounting software synchronisation (QuickBooks, FreshBooks, Xero), e-commerce platform order ingestion (Shopify, WooCommerce), payment gateway integration (HBL, MCB, PayFast, Stripe), shipping and logistics APIs (TCS, Leopards, DHL), and government portal integration where available (FBR, SECP e-filing). Integration approach depends on whether the third-party system provides an API — if it does, we connect to it. If it does not, we work with export/import file formats. We design all integrations to be resilient to third-party outages so the ERP core never goes down because an external API is unavailable.',
  },
]

export default function ERPPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Software Development', href: '/services/software-development' },
        { label: 'ERP Development' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#16A34A,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-10 sm:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#16A34A' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#16A34A' }}>Custom ERP Development</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Custom ERP Development —{' '}
              <span style={{ color: '#16A34A' }}>Business Software Built Around How You Work.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Off-the-shelf ERP systems are built for the global average business — and force yours to adapt to their processes. Custom ERP flips this: we build software that matches how your organisation actually works, with Pakistan-specific payroll, FBR tax compliance, local bank payment formats, and the exact workflows your teams use every day. Twenty-plus systems delivered. Six-month average delivery. Full source code ownership. No per-user licences, ever.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-3 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[18px] font-black mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[11px] font-semibold leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#16A34A', color: '#fff' }}>
                Build Your Custom ERP <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Get a Free Discovery Session
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
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#16A34A' }}>The Business Case</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                When Off-the-Shelf ERP Forces Your Business to Change for the Software
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Off-the-shelf ERP implementation projects have a notorious failure rate — Gartner estimates 55–75% of ERP implementations fail to meet their original objectives. The common cause is not the software itself but the gap between what the software does and what the business needs. Organisations find themselves changing established, effective processes to fit the ERP&apos;s assumptions rather than using the ERP to automate the processes that work. The result is an expensive system that the organisation works around rather than with.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The licensing economics of off-the-shelf ERP are also frequently misunderstood. SAP Business One, Oracle NetSuite, and Microsoft Dynamics all charge per-user monthly licensing fees that compound significantly over time. An organisation with 50 users paying $150/user/month is spending $90,000 per year on licensing alone — and that cost grows as headcount grows, regardless of whether feature usage is increasing. Custom ERP has a fixed development cost with no ongoing per-user fee, making it cost-competitive against off-the-shelf licensing within 2–3 years and significantly cheaper beyond that horizon.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Pakistan-specific requirements create an additional problem for imported ERP systems. EOBI contributions, PESSI deductions, the Employment of Provident Fund Ordinance, FBR income tax slab calculations, SECP reporting, and local bank bulk payment formats require customisation of off-the-shelf systems — customisation that is often expensive, poorly maintained across system upgrades, and never quite right. Our custom ERP builds these requirements as first-class features, not afterthoughts.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#16A34A', text: 'Built around your processes — not forcing you to adapt to ours' },
                  { color: '#2563EB', text: 'Pakistan-specific payroll, FBR tax, and bank payment formats built in' },
                  { color: '#D97706', text: 'No per-user licence fees — fixed development cost, unlimited users' },
                  { color: '#00C853', text: 'Full source code ownership — zero vendor lock-in' },
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
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>Custom vs Off-the-Shelf ERP</p>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-2 text-[10px] font-bold uppercase tracking-wider pb-1 border-b" style={{ color: '#94A3B8', borderColor: '#E2E8F0' }}>
                  <div>Factor</div><div>Custom ERP</div><div>Off-the-Shelf</div>
                </div>
                {[
                  { factor: 'Upfront cost', custom: 'Fixed project cost', shelf: 'Licence + implementation' },
                  { factor: 'Ongoing cost', custom: 'Maintenance only', shelf: 'Per-user monthly licence' },
                  { factor: 'Pakistan payroll', custom: 'Built natively', shelf: 'Costly customisation' },
                  { factor: 'Process fit', custom: 'Built around you', shelf: 'You adapt to it' },
                  { factor: 'Source code', custom: '100% yours', shelf: 'Vendor owns it' },
                  { factor: 'Vendor dependency', custom: 'None', shelf: 'High' },
                  { factor: 'Scalability cost', custom: 'Fixed', shelf: 'Grows with users' },
                ].map(r => (
                  <div key={r.factor} className="grid grid-cols-3 items-center py-2 border-b last:border-0 text-[12px]" style={{ borderColor: '#E2E8F0' }}>
                    <div className="font-semibold" style={{ color: '#0A1628' }}>{r.factor}</div>
                    <div className="font-semibold" style={{ color: '#16A34A' }}>{r.custom}</div>
                    <div style={{ color: '#DC2626' }}>{r.shelf}</div>
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
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#16A34A' }}>ERP Modules</span>
              <div className="h-px w-6" style={{ background: '#16A34A' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Core ERP Modules
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Covering every major business function — all integrated, all sharing the same data, all in one system.
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
            ERP Technology Stack
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

      <FAQAccordion faqs={FAQS} accent="#16A34A"
        title="Custom ERP Questions Answered"
        subtitle="Common questions from organisations evaluating custom ERP versus off-the-shelf solutions." />

      <CTABanner
        heading="Build Your Custom ERP with Infraspine"
        subheading="20+ ERP systems delivered for Pakistani businesses. Built around your processes, no per-user licensing, full source code ownership."
        primaryCTA={{ label: 'Start Your ERP Project', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
