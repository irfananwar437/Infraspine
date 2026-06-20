import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Server, Shield, Database, Layers, BarChart2, Lock,
  ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'Microsoft Azure Services Pakistan — Azure Setup, Migration & Management | Infraspine',
  description: 'Infraspine Microsoft Azure services in Pakistan: certified Azure engineers (AZ-104, AZ-305) for infrastructure setup, migration, AKS, Entra ID, backup and FinOps cost optimisation. 40% avg cost savings.',
  alternates: { canonical: 'https://www.infraspine.com/services/cloud-solutions/azure' },
  openGraph: {
    title: 'Microsoft Azure Services Pakistan — Azure Setup, Migration & Management | Infraspine',
    description: 'Expert Azure infrastructure setup, migration and management in Pakistan. AZ-104 and AZ-305 certified engineers, 40% average cost savings vs on-premise, FinOps governance.',
    url: 'https://www.infraspine.com/services/cloud-solutions/azure',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Microsoft Azure Cloud Services',
  name: 'Infraspine Microsoft Azure Services',
  description: 'Certified Azure infrastructure setup, migration, AKS, Entra ID, backup, security, and FinOps cost optimisation services for businesses in Pakistan.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/cloud-solutions/azure',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: 'AZ-104', label: 'AZ-305 Certified Engineers', color: '#0078D4' },
  { value: '40%', label: 'Avg Cost Savings vs On-Prem', color: '#00C853' },
  { value: '99.99%', label: 'Azure SLA', color: '#7C3AED' },
  { value: 'FinOps', label: 'Cost Governance', color: '#D97706' },
]

const CAPABILITIES = [
  {
    icon: Server,
    title: 'Azure Infrastructure Setup (VMs, VNets, NSGs)',
    color: '#0078D4',
    bg: '#EFF6FF',
    desc: 'Azure infrastructure architecture is not a drag-and-drop exercise. Poorly designed Virtual Network topologies, overly permissive Network Security Groups, and incorrectly sized Virtual Machines are the most common causes of Azure cost overruns and security incidents. Our infrastructure setup service starts with a design phase: network topology design (hub-spoke or flat), IP address planning, subnet segregation for application tiers, NSG rule design following least-privilege, and VM sizing based on actual workload performance data. We build it right the first time rather than retracing steps under production pressure.',
    points: [
      'Hub-spoke or flat VNet topology design with IP address planning',
      'NSG rule design following least-privilege security principle',
      'VM sizing based on workload profiling (not gut feeling)',
      'Availability Sets and Availability Zones for high availability',
    ],
  },
  {
    icon: Lock,
    title: 'Azure Active Directory / Entra ID',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Microsoft Entra ID (formerly Azure Active Directory) is the identity foundation of every Azure and Microsoft 365 deployment. Our Entra ID service covers on-premise Active Directory synchronisation via Entra Connect, Conditional Access policy design and implementation, Multi-Factor Authentication enforcement, Privileged Identity Management for just-in-time admin access, and application integration using SAML and OAuth. For organisations moving to cloud-only or hybrid identity, we design the identity architecture to support zero-trust principles from the ground up.',
    points: [
      'Entra Connect synchronisation from on-premise AD',
      'Conditional Access policies with device compliance enforcement',
      'Privileged Identity Management for just-in-time admin access',
      'Enterprise application registration and SSO integration',
    ],
  },
  {
    icon: Database,
    title: 'Azure Backup & Site Recovery',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'Business continuity for Azure workloads requires both backup and disaster recovery planning. Azure Backup provides application-consistent snapshots for VMs, SQL Server databases, and Azure Files with policy-driven retention and geo-redundant storage. Azure Site Recovery provides orchestrated failover for entire workloads to an alternate Azure region, enabling RPO targets as low as 30 seconds for critical systems. We design, deploy, and test both services — because a backup solution that has never been tested is not a backup solution.',
    points: [
      'Azure Backup policy design for VMs, SQL, and file shares',
      'Geo-redundant backup storage for regional resilience',
      'Azure Site Recovery for orchestrated disaster failover',
      'Regular restore and failover testing with documented evidence',
    ],
  },
  {
    icon: Layers,
    title: 'Azure Kubernetes Service (AKS)',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Containerised workloads on Azure require careful AKS architecture to deliver the scalability and reliability benefits of Kubernetes without the operational complexity that kills container adoption. We design and deploy AKS clusters with proper node pool sizing, auto-scaling configuration, network policy for pod-to-pod security, managed identity integration (no service account secrets), Azure Container Registry for private image storage, and ingress controller configuration. CI/CD pipeline integration with Azure DevOps connects your development workflow directly to AKS deployment.',
    points: [
      'AKS cluster design with node pool sizing and auto-scaling',
      'Network policy and pod security standards implementation',
      'Managed identity integration — no service account credentials',
      'Azure DevOps CI/CD pipeline integration for automated deployment',
    ],
  },
  {
    icon: Shield,
    title: 'Azure Security Centre',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Microsoft Defender for Cloud (formerly Security Centre) provides continuous security posture assessment across your entire Azure estate. We deploy and configure Defender for Cloud to provide the Secure Score metric for your environment, enable Defender plans for high-value resource types (servers, SQL, storage, containers), configure Azure Policy to enforce security baselines, and integrate alerts with our SOC monitoring workflow. Regulatory compliance dashboards track your Azure configuration against PCI-DSS, ISO 27001, and other frameworks continuously.',
    points: [
      'Defender for Cloud deployment with Secure Score baseline',
      'Defender plans for VMs, SQL, storage, and containers',
      'Azure Policy enforcement for security and compliance baselines',
      'SOC integration for Defender alert triage and response',
    ],
  },
  {
    icon: BarChart2,
    title: 'FinOps & Cost Optimisation',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Azure cost overruns are almost entirely avoidable — they result from under-utilised resources, over-provisioned VMs, forgotten test environments, and missing Reserved Instance commitments. Our FinOps service provides monthly Azure cost analysis: identifying idle and under-utilised resources, right-sizing recommendations based on actual performance data, Reserved Instance or Azure Hybrid Benefit opportunities, and budget alerts configured to prevent bill shock. Azure Cost Management dashboards are configured for your finance team so they have direct visibility without needing Azure portal access.',
    points: [
      'Monthly Azure cost analysis with idle resource identification',
      'VM right-sizing recommendations based on actual CPU/memory data',
      'Reserved Instance and Azure Hybrid Benefit cost modelling',
      'Budget alerts and Azure Cost Management dashboard for finance teams',
    ],
  },
]

const VENDORS = [
  'Azure Virtual Machines', 'Azure Kubernetes Service', 'Azure SQL Database',
  'Azure Blob Storage', 'Azure DevOps', 'Entra ID (Azure AD)',
  'Microsoft Sentinel', 'Azure Policy', 'Azure Monitor', 'Azure Backup',
]

const FAQS = [
  {
    question: 'Why choose Azure over AWS or Google Cloud for businesses in Pakistan?',
    answer: 'For most Pakistani businesses, Azure has a compelling set of advantages. Microsoft already dominates the Pakistani enterprise software landscape — if your business uses Windows Server, SQL Server, Active Directory, or Microsoft 365, Azure integration is significantly simpler than the equivalent on AWS. The Azure Hybrid Benefit allows existing Microsoft Server and SQL Server licence holders to move to Azure at reduced cost. Microsoft also has strong relationships with Pakistani financial and government sector regulators, and the Microsoft data centre regions in UAE (which many Pakistani businesses use for latency reasons) provide better performance than competing options. For AWS-first or GCP-first workloads, we manage those too.',
  },
  {
    question: 'How do you control Azure costs once we are in the cloud?',
    answer: 'Cloud cost management requires ongoing discipline, not just good initial architecture. Our FinOps practice covers three areas: (1) right-sizing — using Azure Advisor recommendations and actual performance data to identify over-provisioned resources; (2) commitment discounts — modelling whether Reserved Instances (1 or 3-year commitments at up to 72% discount) or Savings Plans make financial sense for your workload patterns; and (3) operational hygiene — enforcing tagging policies so costs are attributed correctly, setting budget alerts before overruns happen, and reviewing the environment monthly for forgotten test resources. Our clients consistently reduce their Azure spend by 30–40% in the first year after engaging our FinOps service.',
  },
  {
    question: 'What does "lift and shift" vs cloud-native migration mean?',
    answer: 'A lift-and-shift migration (also called rehosting) takes your existing on-premise servers and recreates them as Azure VMs with minimal changes. It is the fastest migration approach and the lowest initial risk, but it does not take advantage of Azure-native services like managed databases, auto-scaling, or serverless compute. Cloud-native migration (replatforming or refactoring) replaces specific workload components with Azure PaaS services — for example, migrating a SQL Server VM to Azure SQL Managed Instance, or replacing a self-managed IIS web server with Azure App Service. We recommend a pragmatic mix: lift-and-shift for lower-priority workloads to get off on-premise quickly, with planned cloud-native optimisation for key applications over time.',
  },
  {
    question: 'What Azure certifications do your engineers hold?',
    answer: 'Our Azure engineers hold Microsoft certifications appropriate to their roles. AZ-104 (Microsoft Azure Administrator) covers day-to-day Azure infrastructure management and is held by all cloud engineers on our team. AZ-305 (Designing Microsoft Azure Infrastructure Solutions) is our architecture-level certification for engineers who design new Azure environments and migrations. We also have engineers with AZ-500 (Azure Security Engineer) and MS-900 / MS-102 for Microsoft 365 integration work. Certifications are maintained current and we track recertification requirements proactively.',
  },
  {
    question: 'Can you support a hybrid cloud environment (some on-premise, some Azure)?',
    answer: 'Yes — hybrid cloud is the most common architecture for organisations migrating to Azure. We manage hybrid environments spanning on-premise VMware or Hyper-V, Azure IaaS VMs, Azure PaaS services, and Microsoft 365, connected through Azure ExpressRoute or Site-to-Site VPN. Entra ID Connect synchronises identity between on-premise Active Directory and Azure AD so users have a single sign-on experience across all environments. Azure Arc extends Azure management capabilities to on-premise servers, providing unified monitoring and policy enforcement regardless of where a resource runs.',
  },
  {
    question: 'How long does an Azure migration typically take?',
    answer: 'Timeline depends heavily on the number of workloads, their complexity, and the migration approach. A simple lift-and-shift migration of 10–20 servers for a mid-sized organisation typically takes 4–8 weeks from initial assessment to production cutover: 1–2 weeks for infrastructure setup and networking, 2–4 weeks for workload migration and testing, and 1–2 weeks for cutover, post-migration monitoring, and optimisation. More complex migrations involving application refactoring, database platform changes, or large data volumes take proportionally longer. We provide a detailed project plan with timeline milestones before any migration begins.',
  },
]

export default function AzurePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Cloud Solutions', href: '/services/cloud-solutions' },
        { label: 'Microsoft Azure' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#0078D4,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-14 sm:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#0078D4' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0078D4' }}>Microsoft Azure</span>
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Microsoft Azure —{' '}
              <span style={{ color: '#0078D4' }}>Enterprise Cloud Infrastructure, Expertly Managed.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Moving to Azure is the start of the journey, not the destination. Getting maximum value requires certified expertise in architecture, security, identity, Kubernetes, and cost governance. Infraspine&apos;s AZ-104 and AZ-305 certified engineers design, migrate, and manage Azure environments for organisations across Pakistan — delivering the infrastructure reliability, security posture, and cost control that cloud should provide but rarely delivers without expert management.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-3 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[20px] font-black mb-0.5" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[11px] font-semibold leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#0078D4', color: '#fff' }}>
                Move to Azure with Infraspine <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Azure Cost Review
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
                <div className="h-px w-6" style={{ background: '#0078D4' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0078D4' }}>The Business Case</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Why Azure Is the Right Cloud for Pakistan&apos;s Microsoft-Centric Organisations
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Over 80% of Pakistan&apos;s enterprise organisations run Microsoft infrastructure — Windows Server, Active Directory, SQL Server, Microsoft 365. For these organisations, Azure offers integration depth that AWS and Google Cloud cannot match. Azure Hybrid Benefit alone reduces the cost of moving Windows and SQL Server workloads to Azure by up to 49% compared to pay-as-you-go pricing. Entra ID Connect synchronises identity seamlessly between on-premise and cloud. And existing Microsoft Enterprise Agreement commitments often include Azure credits that make the migration economics even more compelling.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The financial model for on-premise infrastructure is increasingly unfavourable. Capital expenditure on servers depreciates over 3–5 years while cloud services scale elastically. Unplanned hardware failures create emergency procurement costs. Power, cooling, and rack space costs are often hidden from IT budgets but are very real. Our Azure migrations consistently demonstrate 30–40% total cost reduction versus the equivalent on-premise infrastructure when these hidden costs are properly accounted for in the business case.
              </p>
              <p className="text-[15px] leading-relaxed mb-6" style={{ color: '#64748B' }}>
                Cost governance is where most organisations underinvest and then get unpleasant Azure bill surprises. The cloud&apos;s consumption-based model means costs can escalate quickly without visibility and controls. Our FinOps practice — continuous cost analysis, right-sizing, Reserved Instance modelling, and budget governance — is built into every managed Azure engagement so your cloud spend is always predictable, justified, and optimised.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#0078D4', text: 'Deep Microsoft ecosystem integration — Azure, M365, and on-premise together' },
                  { color: '#00C853', text: '40% average cost reduction vs equivalent on-premise infrastructure' },
                  { color: '#7C3AED', text: 'Azure Hybrid Benefit for existing Windows and SQL Server licence holders' },
                  { color: '#D97706', text: 'FinOps governance prevents cloud bill surprises' },
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
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>Azure Migration Phases</p>
              <div className="space-y-4">
                {[
                  { phase: '01', title: 'Assess', desc: 'Workload inventory, dependency mapping, cost modelling', color: '#0078D4' },
                  { phase: '02', title: 'Design', desc: 'Azure architecture, VNet topology, security baseline', color: '#7C3AED' },
                  { phase: '03', title: 'Build', desc: 'Infrastructure provisioning, VPN, Entra ID setup', color: '#0891B2' },
                  { phase: '04', title: 'Migrate', desc: 'Workload migration, testing, user acceptance', color: '#00C853' },
                  { phase: '05', title: 'Optimise', desc: 'Right-sizing, Reserved Instances, security hardening', color: '#D97706' },
                  { phase: '06', title: 'Manage', desc: 'Ongoing monitoring, patching, FinOps, and support', color: '#DC2626' },
                ].map(p => (
                  <div key={p.phase} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-[11px] font-black" style={{ background: `${p.color}15`, color: p.color }}>{p.phase}</div>
                    <div>
                      <div className="text-[13px] font-bold mb-0.5" style={{ color: '#0A1628' }}>{p.title}</div>
                      <div className="text-[12px]" style={{ color: '#64748B' }}>{p.desc}</div>
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
              <div className="h-px w-6" style={{ background: '#0078D4' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0078D4' }}>Azure Capabilities</span>
              <div className="h-px w-6" style={{ background: '#0078D4' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              What Our Azure Service Covers
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From foundational infrastructure through Kubernetes, identity, backup, security, and FinOps governance.
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
            Azure Services &amp; Technologies We Deploy
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

      <FAQAccordion faqs={FAQS} accent="#0078D4"
        title="Microsoft Azure Questions Answered"
        subtitle="Common questions from organisations planning their Azure migration or cloud strategy." />

      <CTABanner
        heading="Move to Azure with Infraspine"
        subheading="Certified Azure engineers, proven migration methodology, FinOps governance, and ongoing managed support. The complete Azure partnership."
        primaryCTA={{ label: 'Start Your Azure Journey', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
