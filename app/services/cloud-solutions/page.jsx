import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Cloud, Server, Shield, BarChart2, CheckCircle, ArrowRight,
  Database, Lock, Globe, RefreshCw, Zap, Activity,
} from 'lucide-react'

export const metadata = {
  title: 'Cloud Solutions Pakistan — Azure, AWS & Hybrid Cloud Services | Infraspine',
  description: 'Infraspine Cloud Solutions: cloud migration to Azure and AWS, hybrid cloud architecture, cloud security, Infrastructure as Code, and managed cloud operations. Reduce infrastructure costs by 35% with enterprise cloud design.',
  alternates: { canonical: 'https://www.infraspine.com/services/cloud-solutions' },
  openGraph: {
    title: 'Cloud Solutions Pakistan — Azure, AWS & Hybrid Cloud Services | Infraspine',
    description: 'Cloud migration, Azure and AWS infrastructure, hybrid architecture, IaC deployments, and managed cloud operations. 35% cost reduction with zero planned downtime.',
    url: 'https://www.infraspine.com/services/cloud-solutions',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Cloud Computing Services',
  name: 'Infraspine Cloud Solutions',
  description: 'Enterprise cloud solutions covering cloud migration, Azure and AWS infrastructure design, hybrid cloud architecture, cloud security, and managed cloud operations.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/cloud-solutions',
}

const CAPABILITIES = [
  {
    icon: RefreshCw,
    title: 'Cloud Migration',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Structured migration using the 6R methodology — Rehost, Replatform, Refactor, Repurchase, Retire, or Retain — applied to each workload based on its characteristics and business value. We run a cloud readiness assessment first, categorise every workload, then sequence the migration to minimise risk. Replication-based migration tools ensure zero unplanned downtime during the actual move, with a 15–30 minute controlled cutover window.',
    points: ['Cloud readiness assessment for all workloads', '6R strategy applied per application', 'Azure Site Recovery or AWS SMS for live replication', '15–30 minute production cutover window'],
  },
  {
    icon: Server,
    title: 'Azure & AWS Infrastructure Design',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Infrastructure designed from the ground up for cloud-native reliability — multi-zone, auto-scaling, load-balanced, and fully defined in Infrastructure as Code. Every resource is provisioned through Terraform or Azure Bicep templates, meaning your entire cloud environment can be torn down and rebuilt identically in minutes. No undocumented manual configurations that create drift between environments.',
    points: ['Terraform and Azure Bicep IaC templates', 'Multi-zone high availability design', 'Auto-scaling and Application Gateway / ALB', 'Full environment parity: dev, staging, production'],
  },
  {
    icon: Globe,
    title: 'Hybrid Cloud Architecture',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'Connecting your on-premise infrastructure to Azure or AWS through ExpressRoute or dedicated VPN connections, with unified management, identity, and security policies across both environments. Azure Arc and AWS Outposts extend cloud management capabilities to your on-premise servers. Applications that cannot move to cloud due to data residency, latency, or compliance requirements stay on-premise while benefiting from cloud-based management and backup.',
    points: ['Azure ExpressRoute and AWS Direct Connect', 'Azure Arc for on-premise server management', 'Unified identity with Azure Active Directory', 'Consistent network security policies across environments'],
  },
  {
    icon: Lock,
    title: 'Cloud Security & Compliance',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Security baked into every cloud deployment from day one. Zero-trust network architecture using private endpoints and service tags, IAM roles with least-privilege access, Microsoft Defender for Cloud or AWS Security Hub for continuous threat monitoring, and compliance policies enforced through Azure Policy or AWS Config to prevent non-compliant resources from being created at all.',
    points: ['Zero-trust with private endpoints and NSGs / Security Groups', 'IAM least-privilege policy design', 'Microsoft Defender for Cloud / AWS Security Hub', 'Azure Policy / AWS Config compliance enforcement'],
  },
  {
    icon: Database,
    title: 'Cloud Storage & Databases',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Object storage, managed relational databases, and distributed caching layers configured for your performance, cost, and compliance requirements. Azure Blob Storage and AWS S3 with lifecycle policies that automatically tier infrequently accessed data to cheaper storage classes. Managed databases (Azure SQL, AWS RDS, Cosmos DB) with automated backups, point-in-time recovery, and geo-redundant replicas for disaster recovery.',
    points: ['Azure Blob / AWS S3 with lifecycle tiering', 'Managed Azure SQL, RDS, and Cosmos DB', 'Automated backup with point-in-time recovery', 'Data residency compliance and encryption at rest'],
  },
  {
    icon: BarChart2,
    title: 'Cloud Cost Optimisation',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Cloud costs grow unchecked without active governance. Our monthly cloud cost reviews use Azure Cost Management and AWS Cost Explorer to identify underutilised resources, oversized instances, unattached disks, forgotten test environments, and reserved instance opportunities. Clients typically achieve 20–35% cost reduction within 90 days of our first optimisation review without any reduction in performance.',
    points: ['Monthly cloud cost review and rightsizing', 'Reserved instance and savings plan recommendations', 'Auto-shutdown for non-production environments', 'Budget alerts and spending guardrails'],
  },
]

const MIGRATION_STEPS = [
  { step: '01', title: 'Discovery',      desc: 'Application portfolio review, dependency mapping, and cloud readiness scoring for every workload.' },
  { step: '02', title: 'Strategy',       desc: '6R classification for each workload, sequencing plan, and business case with projected cost and timeline.' },
  { step: '03', title: 'Architecture',   desc: 'Target architecture design, IaC templates, network design, identity integration, and security baseline.' },
  { step: '04', title: 'Pilot',          desc: 'Migrate 1–3 non-critical workloads first to validate approach and refine the runbook before production.' },
  { step: '05', title: 'Migration',      desc: 'Wave-based production migration with live replication and 15–30 minute maintenance windows per batch.' },
  { step: '06', title: 'Optimise',       desc: 'Post-migration cost review, performance tuning, monitoring setup, and transition to managed operations.' },
]

const FAQS = [
  {
    question: 'Which cloud platforms do you specialise in?',
    answer: 'Our primary expertise is Microsoft Azure and Amazon AWS. We have certified engineers for both platforms and have delivered production deployments on each. For multi-cloud strategies, we can manage both platforms from unified monitoring and governance tooling. Google Cloud Platform (GCP) engagements are available but are less common in our portfolio.',
  },
  {
    question: 'How long does a cloud migration take?',
    answer: 'A single-server rehost migration takes 2–5 days. A mid-size environment of 15–30 servers with basic refactoring takes 4–8 weeks. Large enterprise migrations with application re-architecture take 3–6 months and are typically delivered in waves — non-critical workloads first, business-critical last. Timeline depends more on application dependencies and testing requirements than on the technical migration itself.',
  },
  {
    question: 'Will there be any downtime during migration?',
    answer: 'We design all production migrations to achieve zero unplanned downtime. We use replication-based tools (Azure Site Recovery, AWS SMS, or database log shipping) to keep your on-premise and cloud systems synchronised during migration. The cutover itself is a brief controlled window — typically 15–30 minutes per workload — scheduled during low-usage hours. Business hours are unaffected.',
  },
  {
    question: 'What is Infrastructure as Code and why does it matter?',
    answer: 'Infrastructure as Code (IaC) means your cloud resources are defined in text files (Terraform or Azure Bicep templates) rather than configured manually through a web console. This matters because: (1) every change is tracked in version control, (2) environments are reproducible and identical, (3) there is no configuration drift between development and production, and (4) your entire infrastructure can be rebuilt from scratch in under an hour if needed.',
  },
  {
    question: 'How do you handle data security during migration?',
    answer: 'All data in transit is encrypted using TLS 1.3. Data at rest in cloud storage and databases is encrypted with AES-256. We use private network endpoints where possible to avoid data traversing the public internet during migration. NDAs and data processing agreements are signed before any migration begins, and we provide a data transfer log for compliance documentation.',
  },
  {
    question: 'Can you manage our cloud environment after migration?',
    answer: 'Yes. Post-migration managed cloud operations covers monitoring, alerting, patch management, cost reviews, security event response, and capacity planning. This is delivered under a separate managed services agreement with cloud-specific SLAs. Many clients start with a migration project and transition to managed cloud operations once their environment is live and stable.',
  },
]

export default function CloudSolutionsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Cloud Solutions' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#2563EB' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>Cloud Solutions</span>
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Enterprise Cloud Infrastructure<br />
              <span style={{ color: '#2563EB' }}>Designed to Scale.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Cloud adoption done wrong creates complexity, cost overruns, and security gaps. Done right, it eliminates capital expenditure, delivers elastic capacity on demand, and enables your teams to move faster. Infraspine Cloud Solutions covers migration, architecture, security, and ongoing operations on Azure and AWS — with every environment defined in Infrastructure as Code for full auditability and reproducibility.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                { value: '35%', label: 'Avg Cost Reduction',  color: '#2563EB' },
                { value: '99.9%', label: 'Cloud Uptime SLA',  color: '#00C853' },
                { value: '0hr',  label: 'Planned Downtime',   color: '#7C3AED' },
                { value: 'IaC',  label: 'All Deployments',    color: '#D97706' },
              ].map(({ value, label, color }) => (
                <div key={label} className="rounded-xl p-3 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[20px] font-black mb-0.5" style={{ color }}>{value}</div>
                  <div className="text-[11px] font-semibold leading-snug" style={{ color: '#64748B' }}>{label}</div>
                </div>
              ))}
            </div>
            <Link href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
              style={{ background: '#2563EB', color: '#fff' }}>
              Free Cloud Readiness Assessment <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Migration Process ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Our Cloud Migration Approach
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Every migration follows a structured six-phase process that eliminates guesswork, manages risk, and ensures you arrive in the cloud with a better-designed environment than you left on-premise.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MIGRATION_STEPS.map(({ step, title, desc }) => (
              <div key={step} className="rounded-2xl p-6 border" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
                <div className="text-[13px] font-black mb-2" style={{ color: '#CBD5E1' }}>{step}</div>
                <h3 className="text-[17px] font-black mb-2" style={{ color: '#0A1628' }}>{title}</h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Cloud Services We Deliver
            </h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              End-to-end cloud capabilities — from your first migration wave through ongoing cost management and security monitoring.
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

      {/* ── Stack ── */}
      <section className="py-12 bg-white border-y" style={{ borderColor: '#E2E8F0' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-7" style={{ color: '#94A3B8' }}>Cloud Platforms & Tools</p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {['Microsoft Azure', 'Amazon AWS', 'Terraform', 'Azure Bicep', 'Azure Kubernetes Service', 'Azure SQL Managed Instance', 'Azure Blob Storage', 'AWS EC2 & RDS', 'AWS S3', 'AWS EKS', 'Azure Monitor', 'CloudWatch', 'Azure Site Recovery', 'Azure Active Directory', 'AWS IAM', 'Azure Firewall', 'Azure Defender'].map(tool => (
              <span key={tool} className="px-3.5 py-1.5 rounded-full text-[12px] font-semibold border"
                style={{ background: '#F8FAFC', borderColor: '#E2E8F0', color: '#475569' }}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        title="Cloud Solutions — Frequently Asked Questions"
        subtitle="Common questions about cloud migration, architecture, and managed cloud operations."
        faqs={FAQS}
      />

      <CTABanner
        heading="Ready to Move Your Business to the Cloud?"
        subheading="Start with a free cloud readiness assessment. We map your current infrastructure and design the optimal migration path — no commitment required."
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
