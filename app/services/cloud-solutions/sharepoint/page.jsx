import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Network, Users, Code2, Zap, BarChart2, Database, CheckCircle, ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'Microsoft SharePoint & Power Platform Pakistan — Intranet & Automation',
  description: 'Infraspine SharePoint and Power Platform services: intranet portals, Teams integration, document management, Power Apps, Power Automate, and Power BI for Pakistan businesses.',
  alternates: { canonical: 'https://www.infraspine.com/services/cloud-solutions/sharepoint' },
  openGraph: {
    title: 'Microsoft SharePoint & Power Platform Pakistan — Intranet & Automation | Infraspine',
    description: 'Infraspine SharePoint and Power Platform services: intranet portals, Teams integration, Power Apps, Power Automate, and Power BI for Pakistan businesses.',
    url: 'https://www.infraspine.com/services/cloud-solutions/sharepoint',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Microsoft SharePoint & Power Platform',
  name: 'Infraspine SharePoint & Power Platform Services',
  description: 'Microsoft SharePoint and Power Platform consulting and implementation services including intranet portals, Teams integration, Power Apps, Power Automate workflow automation, Power BI analytics, and SharePoint migration for Pakistan businesses.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/cloud-solutions/sharepoint',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '500+', label: 'SharePoint Sites Deployed', color: '#0078D4' },
  { value: '3×', label: 'Faster Document Approvals', color: '#00C853' },
  { value: 'Microsoft', label: 'Gold Partner', color: '#7C3AED' },
  { value: '100%', label: 'Pakistan-Based Support', color: '#F59E0B' },
]

const CAPABILITIES = [
  {
    icon: Network,
    title: 'SharePoint Intranet & Portal Design',
    color: '#0078D4',
    bg: '#EFF6FF',
    desc: 'A well-designed company intranet transforms how employees find information, collaborate on projects, and stay connected to organisational news and culture. The problem with most intranets is that they are built quickly without thinking about information architecture, and within a year they become a graveyard of outdated content that no one navigates voluntarily. Infraspine approaches SharePoint intranet projects with a structured design methodology that begins with a content audit and user research phase to understand what employees actually need to find on a daily basis, rather than what management thinks they need. We design a hub-and-spoke information architecture with a company-wide hub site connected to department communication sites, each with its own managed navigation, branding identity, and content ownership model. Modern SharePoint pages use web parts configured for news feeds, quick links, people directories, document libraries, and embedded Power BI reports, all within a branded visual design that reflects your organisation\'s identity. We configure the home page for maximum immediate value — relevant news, quick access to frequently used tools, and personalised content using audience targeting to show different content to different groups without building and maintaining multiple separate sites.',
    points: [
      'Hub-and-spoke information architecture with department communication sites',
      'Branded SharePoint pages with modern web parts, news hub, and audience targeting',
      'Managed navigation and mega-menu design for intuitive content discovery',
      'Content governance model with site owners, publishing workflows, and review schedules',
    ],
  },
  {
    icon: Users,
    title: 'Microsoft Teams Integration',
    color: '#0078D4',
    bg: '#EFF6FF',
    desc: 'Microsoft Teams and SharePoint are deeply integrated in the Microsoft 365 ecosystem, but most organisations use them as parallel tools rather than as a unified collaboration platform. Every Teams channel has a corresponding SharePoint document library behind it, and surfacing that connection intentionally — rather than leaving it as a hidden technical detail — allows teams to work with documents in the full power of SharePoint while staying within the Teams interface they already use every day. Infraspine designs and implements Teams-SharePoint integration strategies that align channel structure with your actual team topology, configure SharePoint document libraries with appropriate metadata columns and views so that Teams file tabs show relevant filtered content rather than an undifferentiated list of every file ever uploaded, and establish wiki and OneNote structures that make team knowledge persistent and searchable. Planner integration provides task management directly within Teams channels. Approval workflows built in Power Automate surface within Teams as actionable notifications, allowing managers to approve or reject requests without leaving their primary communication tool. Guest access policies are configured under your organisation\'s governance framework to allow secure external collaboration without creating security risks from over-permissioned external accounts.',
    points: [
      'Teams channel structure aligned with organisational topology and SharePoint libraries',
      'Document library metadata and view configuration for meaningful Teams file tabs',
      'Approval workflow notifications surfaced directly within Teams channels',
      'Guest access governance policies for secure external collaboration',
    ],
  },
  {
    icon: Code2,
    title: 'Power Apps — Custom Business Apps',
    color: '#0078D4',
    bg: '#EFF6FF',
    desc: 'Most organisations have at least a dozen business processes still running on paper forms, email chains, or spreadsheets that everyone acknowledges are inadequate but that nobody has found the time or budget to replace with a proper application. Power Apps changes this calculus by allowing low-code applications to be built in weeks rather than the months required for traditional software development, at a fraction of the cost. Infraspine builds canvas apps, model-driven apps, and Power Pages portals on the Power Platform to digitise the business processes that matter most to your operations. Canvas apps are designed for specific task-focused use cases where the user experience needs to be precisely controlled — mobile-first inspection forms, asset check-out systems, shift handover tools, and expense submission workflows are common examples. Model-driven apps are better suited to data-rich processes that need a consistent structured interface across multiple entity types, such as case management, project tracking, or equipment maintenance management built on Dataverse. Power Pages extends these capabilities to external users — suppliers, customers, or partners — through authenticated web portals that connect to the same underlying data without requiring a full Microsoft 365 licence for every external user.',
    points: [
      'Canvas app development for task-focused mobile-first business processes',
      'Model-driven apps on Dataverse for structured data management workflows',
      'Power Pages portals for external user access without full M365 licences',
      'Integration with SharePoint, Teams, and existing line-of-business systems',
    ],
  },
  {
    icon: Zap,
    title: 'Power Automate — Workflow Automation',
    color: '#0078D4',
    bg: '#EFF6FF',
    desc: 'Manual processes that require a person to copy information from one system to another, send a notification email, wait for approval, and then update a record in a third system are everywhere in organisations. Each step takes time, each handoff introduces delay, and each human touchpoint is a potential point of error or failure. Power Automate replaces these manual handoffs with automated flows that execute instantly, consistently, and without requiring anyone to remember that the step needs to happen. Infraspine designs and builds approval workflows that route requests to the right approvers based on business rules — leave requests to the direct line manager, purchase orders above a threshold to finance, IT access requests to the security team — and escalate automatically when approvals are not actioned within the defined window. HR onboarding flows trigger on a new employee record being created in your HR system, provisioning accounts, sending welcome communications, assigning mandatory training, and creating the new employee\'s home folder structure in SharePoint without any manual IT intervention. Finance approval workflows connect to SharePoint document libraries where invoices are stored, extracting key fields through AI Builder document processing and routing the approval notification with the relevant context directly to the approver\'s Teams chat. SharePoint triggers fire flows when documents are uploaded, modified, or moved, enabling document classification, metadata population, and compliance retention labelling to happen automatically at the point of creation.',
    points: [
      'Multi-stage approval workflows with business-rule-based routing and escalation',
      'HR onboarding automation from new employee creation through account provisioning',
      'Finance approval flows with AI Builder invoice processing and Teams notifications',
      'SharePoint-triggered automation for document classification and retention labelling',
    ],
  },
  {
    icon: BarChart2,
    title: 'Power BI — Business Analytics',
    color: '#0078D4',
    bg: '#EFF6FF',
    desc: 'Decisions made on gut feel or on reports that are manually assembled in Excel once a month are decisions made with incomplete information, often too late. Power BI connects directly to your data sources — whether that is SharePoint lists, Dataverse tables, SQL Server databases, ERP systems, or cloud services — and delivers interactive dashboards that give decision-makers accurate, up-to-date information at the moment they need it. Infraspine designs Power BI solutions from the data model outward, building star-schema semantic models with DAX measures that implement your business logic correctly and consistently rather than leaving calculations to individual report authors who may implement them differently. Power Query M transformations clean, reshape, and combine data from multiple sources into a unified model that can be explored from multiple analytical angles. DirectQuery connections to operational databases provide real-time data where the business needs current information rather than data that is refreshed on a daily schedule. Row-level security restricts what individual users can see based on their organisational role — sales managers see their own team\'s numbers, regional directors see their region, and the board sees the full picture — all from the same report without maintaining separate report versions. Reports are published to the Power BI service and embedded in SharePoint pages or Teams tabs so that analytics are available within the tools employees already use, rather than requiring a separate application context switch.',
    points: [
      'Star-schema semantic model design with DAX measures for consistent business logic',
      'Power Query transformations combining data from SharePoint, Dataverse, and SQL sources',
      'DirectQuery connections for real-time operational data in time-sensitive dashboards',
      'Row-level security configured for role-based data visibility without multiple report versions',
    ],
  },
  {
    icon: Database,
    title: 'SharePoint Migration & Governance',
    color: '#0078D4',
    bg: '#EFF6FF',
    desc: 'Migrating from SharePoint Server on-premises to SharePoint Online in Microsoft 365 is one of the most common and most frequently mishandled cloud migrations organisations undertake. The technical act of moving files is straightforward; the hard work is deciding what to move, what to archive, what to delete, and how to restructure the content so that it works well in the modern SharePoint Online model rather than simply replicating an on-premises structure that may have evolved in an uncontrolled way over many years. Infraspine begins every migration engagement with a content audit that inventories all existing sites, site collections, document libraries, and lists, identifying content that is actively used, content that is outdated and should be archived, and content that has no known owner and should be disposed of. Permissions are reviewed at this stage to identify broken inheritance chains, overly permissive sharing configurations, and external users whose access should no longer be active. The migration is executed in phases using the SharePoint Migration Tool and third-party tooling where the SPMT does not support the required fidelity, with version history and metadata preserved throughout. Post-migration governance configuration establishes retention policies and DLP rules in Microsoft Purview, information classification labels, external sharing policies, and a site lifecycle management process so that the environment does not gradually return to the unmanaged state it was in before migration.',
    points: [
      'Pre-migration content audit with active, archive, and disposal classification',
      'Permissions review identifying over-shared content and stale external access',
      'Phased migration with version history and metadata preservation throughout',
      'Post-migration governance: retention policies, DLP, classification labels, and site lifecycle',
    ],
  },
]

const FAQS = [
  {
    question: 'What is the difference between SharePoint Online and SharePoint Server?',
    answer: 'SharePoint Online is the cloud-hosted version of SharePoint delivered as part of Microsoft 365. It is maintained and updated by Microsoft continuously, requires no on-premises servers, scales automatically, and integrates natively with Teams, Power Platform, and the rest of the Microsoft 365 ecosystem. SharePoint Server (previously SharePoint On-Premises) is software that you install and run on your own servers. It gives you full control over the environment and keeps data within your physical infrastructure, which some regulated industries require. However, it requires significant server infrastructure investment, internal or contracted IT expertise to maintain and patch, and falls behind SharePoint Online in features as Microsoft focuses its development effort on the cloud product. For most organisations considering SharePoint today, SharePoint Online is the recommended path. We can advise on whether your specific data residency or compliance requirements necessitate an on-premises deployment.',
  },
  {
    question: 'Can Power Apps replace our existing custom-built internal tools?',
    answer: 'In many cases, yes. Power Apps is well suited to replacing custom-built tools that manage structured data, collect information through forms, route approvals, and display lists or dashboards of records. Common replacements include manual Excel-based tracking tools, simple Access databases, paper or PDF forms that are emailed around for completion, and basic web applications built by a developer who has since left the organisation. The key factors that determine fit are the complexity of the business logic, the number of concurrent users, the performance requirements for data volumes, and whether the application needs to integrate with systems that Power Apps does not have connectors for. We assess each existing tool against these factors during a discovery engagement and provide a clear recommendation on whether Power Apps is the right replacement, whether a hybrid approach works, or whether a custom development path is more appropriate for that particular tool.',
  },
  {
    question: 'How long does a typical SharePoint intranet implementation take?',
    answer: 'A typical SharePoint intranet implementation for a mid-sized organisation — a company hub site, five to ten department communication sites, branded page templates, and a governed navigation structure — takes between eight and fourteen weeks from project kickoff to go-live. This includes two to three weeks for discovery, information architecture design, and stakeholder alignment; three to four weeks for site build, branding, and content configuration; one to two weeks for user acceptance testing and content migration from the old intranet or file shares; and one to two weeks for launch preparation, training, and hypercare support. Larger programmes that include Power Automate workflow automation, Power BI embedded reports, or integration with HR systems extend the timeline accordingly. We provide a fixed-scope project plan during the proposal stage so that timelines and deliverables are agreed before work begins.',
  },
  {
    question: 'Do we need a Microsoft 365 licence to use SharePoint?',
    answer: 'SharePoint Online is included in most Microsoft 365 business and enterprise subscription plans. Microsoft 365 Business Basic, Business Standard, Business Premium, and all E-series enterprise plans (E1, E3, E5) include SharePoint Online as a component of the subscription. If your organisation already uses Microsoft 365 for email through Exchange Online or for Teams, you almost certainly already have SharePoint Online licences available and may not be using them to their potential. SharePoint can also be licensed as a standalone plan (SharePoint Plan 1 or Plan 2) for organisations that need SharePoint specifically without the full Microsoft 365 suite, though this is less common. Power Apps and Power Automate have their own licensing considerations: basic use rights are included in Microsoft 365 plans, but premium connectors, Dataverse storage, and higher flow run volumes require standalone Power Apps or Power Automate per-user plans. We review your existing licence entitlements before recommending any additional licence purchases.',
  },
  {
    question: 'Can Power Automate connect to our existing ERP or CRM system?',
    answer: 'Power Automate has over 1,000 pre-built connectors to third-party services and enterprise systems. Major ERP systems including SAP, Oracle ERP Cloud, Microsoft Dynamics 365, and Business Central have dedicated connectors maintained by Microsoft or the ERP vendor. Common CRM systems including Salesforce, HubSpot, Zoho CRM, and Microsoft Dynamics 365 Sales also have pre-built connectors with extensive trigger and action support. For systems that do not have a pre-built connector, Power Automate can connect to any system that exposes a REST API using the HTTP connector, or to on-premises systems using the on-premises data gateway. For legacy systems that only expose data through a database connection, direct database connectors for SQL Server, Oracle, MySQL, and PostgreSQL are available as premium connectors. In our discovery phase we assess your specific ERP or CRM system and confirm the integration approach before any development work begins.',
  },
]

export default function SharePointPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Cloud Solutions', href: '/services/cloud-solutions' },
        { label: 'SharePoint & Power Platform' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#0078D4,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#0078D4' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0078D4' }}>SharePoint & Power Platform</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              SharePoint Intranets &amp; Power Platform{' '}
              <span style={{ color: '#0078D4' }}>Automation for Pakistan Businesses.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Most Microsoft 365 customers are paying for SharePoint, Power Apps, Power Automate, and Power BI — and using less than 20 percent of what they have already licensed. Infraspine unlocks the full value of your Microsoft 365 investment: designing SharePoint intranets employees actually use, building Power Apps that replace paper forms and spreadsheet workflows, automating approval processes with Power Automate, and delivering Power BI dashboards that give leadership real-time visibility into business performance. Pakistan-based delivery, Microsoft Gold Partner expertise.
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
                style={{ background: '#0078D4', color: '#fff' }}>
                Start Your SharePoint Project <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Get a Free M365 Licence Review
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-16 sm:py-20" style={{ background: '#EFF6FF' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#0078D4' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0078D4' }}>Platform Capabilities</span>
              <div className="h-px w-6" style={{ background: '#0078D4' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Core SharePoint &amp; Power Platform Services
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From intranet design and Teams integration through Power Apps, Power Automate, Power BI, and migration — complete Microsoft 365 implementation expertise.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map(cap => (
              <div key={cap.title}
                className="bg-white rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: '#BFDBFE' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: cap.bg }}>
                  <cap.icon size={20} style={{ color: cap.color }} />
                </div>
                <h3 className="text-[16px] font-bold mb-3" style={{ color: '#0A1628' }}>{cap.title}</h3>
                <p className="text-[13.5px] leading-relaxed mb-4" style={{ color: '#64748B' }}>{cap.desc}</p>
                <ul className="space-y-2">
                  {cap.points.map(pt => (
                    <li key={pt} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: cap.color }} />
                      <span className="text-[12.5px]" style={{ color: '#475569' }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion faqs={FAQS} accent="#0078D4"
        title="SharePoint & Power Platform Questions Answered"
        subtitle="Common questions from organisations evaluating Microsoft SharePoint and Power Platform for their business." />

      <CTABanner
        heading="Ready to Unlock the Full Value of Microsoft 365?"
        subheading="Book a free Microsoft 365 licence review and let our consultants identify exactly which SharePoint and Power Platform capabilities you have already paid for and are not yet using."
        primaryCTA={{ label: 'Book a Free Consultation', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
