import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Server, ShieldCheck, Cloud, Network, Code2, Zap,
  Users, BookOpen, Briefcase, Database, CheckCircle, ArrowRight,
  Phone, Camera, Fingerprint, BarChart2, Settings,
} from 'lucide-react'

export const metadata = {
  title: 'IT Services Pakistan — Managed IT, Cloud, Cybersecurity & More | Infraspine',
  description: 'Infraspine delivers end-to-end IT services: managed IT, cloud solutions, cybersecurity, network infrastructure, software development, AI automation, BPO, IT training, and data backup. One team. Every layer.',
  alternates: { canonical: 'https://www.infraspine.com/services' },
  openGraph: {
    title: 'IT Services Pakistan — Managed IT, Cloud, Cybersecurity & More | Infraspine',
    description: 'Enterprise IT services across 10 specialisations: managed IT, cloud, cybersecurity, networking, software, AI, BPO, training, consultancy, and backup. Infraspine.',
    url: 'https://www.infraspine.com/services',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Infraspine IT Services',
  description: 'End-to-end enterprise IT services across managed IT, cloud solutions, cybersecurity, network infrastructure, software development, AI automation, BPO, training, consultancy, and data backup.',
  url: 'https://www.infraspine.com/services',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
}

const SERVICES = [
  {
    icon: Server,
    title: 'Managed IT Services',
    color: '#2563EB',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    href: '/services/managed-it-services',
    tagline: '24/7 NOC monitoring · Helpdesk · Patch management · Incident response',
    desc: 'Your IT infrastructure, fully managed. Infraspine acts as your outsourced IT department — monitoring every server, network device, and endpoint around the clock. With a 15-minute P1 response SLA and a dedicated NOC team, issues are resolved before your users notice them. Includes remote and on-site support, proactive patch management, and monthly performance reporting.',
    highlights: ['99.9% uptime SLA', '15-minute P1 response', 'On-site and remote support', 'Monthly performance reports'],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    color: '#7C3AED',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    href: '/services/cloud-solutions',
    tagline: 'AWS · Azure · Google Cloud · Migration · FinOps · Cloud-native architecture',
    desc: 'Cloud adoption done right reduces costs, improves resilience, and accelerates delivery. Done wrong, it multiplies complexity and spend. Infraspine plans and executes cloud migrations across AWS, Azure, and Google Cloud using a six-phase methodology — Discovery, Strategy, Architecture, Pilot, Migration, and Optimise — with FinOps governance to keep cloud spend under control post-migration.',
    highlights: ['AWS, Azure, GCP certified', '6-phase migration methodology', 'FinOps cost governance', 'Hybrid and multi-cloud design'],
  },
  {
    icon: ShieldCheck,
    title: 'Cyber Security',
    color: '#DC2626',
    bg: '#FEF2F2',
    border: '#FECACA',
    href: '/services/cyber-security',
    tagline: 'SOC · VAPT · EDR · Email security · NGFW · Awareness training',
    desc: 'Layered cybersecurity across every attack surface — from your network perimeter through to your people. 24/7 SOC monitoring using Azure Sentinel or Wazuh, VAPT assessments with CVSS-scored findings and free re-testing, EDR on all endpoints for zero-day and fileless threat detection, email security with anti-phishing and BEC detection, and monthly simulated phishing campaigns to measure and reduce human risk.',
    highlights: ['24/7 SOC monitoring', 'VAPT with free re-test', 'EDR endpoint protection', 'ISO 27001 / PCI-DSS support'],
  },
  {
    icon: Network,
    title: 'Network Infrastructure',
    color: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
    href: '/services/network-infrastructure',
    tagline: 'LAN · WAN · SD-WAN · WiFi 6 · Structured cabling · NOC monitoring',
    desc: 'Enterprise networks designed for performance, resilience, and security. Cisco, Meraki, Aruba, and Fortinet deployments with VLAN segmentation, 802.1X authentication, RF-planned WiFi 6, SD-WAN replacing expensive MPLS circuits, and TIA-568 certified structured cabling. Every deployment includes complete network documentation and configuration backups at handover.',
    highlights: ['99.99% network uptime SLA', 'SD-WAN reduces WAN costs 40%', 'WiFi 6 with RF site survey', 'Full documentation at handover'],
  },
  {
    icon: Code2,
    title: 'Software Development',
    color: '#0891B2',
    bg: '#ECFEFF',
    border: '#A5F3FC',
    href: '/services/software-development',
    tagline: 'Web apps · Mobile (iOS/Android) · SaaS · API · Legacy modernisation · DevOps',
    desc: 'Custom software that adapts to your business, not the other way around. Full-stack web applications with Next.js and Node.js, cross-platform mobile apps with React Native, SaaS platforms with multi-tenant architecture, RESTful and GraphQL APIs with OpenAPI documentation, and legacy system modernisation that preserves the business logic your team depends on. All delivered with Agile sprints and full source code ownership transferred at completion.',
    highlights: ['150+ software projects delivered', '99.5% on-time delivery rate', 'Full source code ownership', '90-day post-launch warranty'],
  },
  {
    icon: Zap,
    title: 'AI & Automation',
    color: '#B7FF58',
    bg: '#F7FFE5',
    border: '#D9F99D',
    href: '/services/ai-automation',
    tagline: 'RPA · LLM integration · Document intelligence · ML models · Workflow automation',
    desc: 'Automate the work that consumes your team\'s time without requiring their judgement. RPA using UiPath and Power Automate for rule-based process automation, LLM integrations with OpenAI GPT-4o and Anthropic Claude using RAG architecture so AI answers from your own documents, intelligent document processing achieving 97%+ extraction accuracy, and end-to-end workflow automation with full audit trails and SLA monitoring.',
    highlights: ['70% average time saved per process', '6-month average ROI payback', '24/7 unattended automation', '97%+ document extraction accuracy'],
  },
  {
    icon: Users,
    title: 'BPO Services',
    color: '#00C853',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    href: '/services/bpo-services',
    tagline: 'Customer support · IT helpdesk · Data entry · Finance back-office · HR admin',
    desc: 'Trained, managed outsourcing teams handling the high-volume operational work that consumes your best employees. 24/7 customer support across phone, email, live chat, and WhatsApp Business; IT helpdesk from trained agents integrated with your ticketing system; data entry at 99.8%+ accuracy with quality scoring; finance back-office for AP/AR and reconciliation; and HR administration for payroll, attendance, and compliance. Operational in 72 hours.',
    highlights: ['24/7 operations coverage', '98.5% quality assurance score', '40% average cost reduction', 'Live within 72 hours'],
  },
  {
    icon: BookOpen,
    title: 'IT Trainings',
    color: '#16A34A',
    bg: '#F0FDF4',
    border: '#86EFAC',
    href: '/services/it-trainings',
    tagline: 'Microsoft Azure · Cisco CCNA/CCNP · AWS · CEH · Python · Power Platform',
    desc: 'Instructor-led IT certification training with real lab environments — not just slides. Six certification tracks: Microsoft Azure (AZ-104, AZ-305), Cisco networking (CCNA, CCNP), AWS (Cloud Practitioner, Solutions Architect), cybersecurity and ethical hacking (Security+, CEH v12), software development (Python, JavaScript), and corporate team programmes. A 94% first-attempt exam pass rate across all programmes for 2,500+ trained professionals.',
    highlights: ['94% first-attempt exam pass rate', '2,500+ professionals trained', 'Real lab environments included', 'Corporate group training available'],
  },
  {
    icon: Briefcase,
    title: 'IT Consultancy',
    color: '#2563EB',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    href: '/services/it-consultancy',
    tagline: 'IT strategy · Enterprise architecture · Digital transformation · Vendor selection · CIO advisory',
    desc: 'Independent technology advisory for organisations making significant IT decisions. IT strategy and 18–36 month technology roadmaps, enterprise architecture using TOGAF, digital transformation programme governance across the full change management lifecycle, structured ERP and major software vendor selection, and fractional CIO services for organisations that need senior technology leadership without full-time executive headcount. Over 300 advisory engagements completed.',
    highlights: ['300+ advisory engagements', '35% average IT budget efficiency gain', 'TOGAF-aligned architecture', 'Fractional CIO available'],
  },
  {
    icon: Database,
    title: 'Data Backup & Recovery',
    color: '#DC2626',
    bg: '#FEF2F2',
    border: '#FECACA',
    href: '/services/data-backup-recovery',
    tagline: 'Cloud backup · BDR appliance · DRaaS · Immutable storage · BCP · DR testing',
    desc: 'Backup and disaster recovery with tested recovery processes — because a backup you have never restored from is not a backup. Automated cloud backup with Veeam, Acronis, or Azure Backup; on-premise BDR appliances with 15-minute RPO and instant virtualisation on failure; DRaaS with sub-1-hour RTO using Azure Site Recovery; immutable object-lock storage for ransomware protection; and monthly documented recovery tests for every client.',
    highlights: ['15-minute RPO with BDR appliance', '1-hour RTO with DRaaS', 'Immutable backup against ransomware', 'Monthly recovery tests included'],
  },
]

const STATS = [
  { value: '10+', label: 'Service specialisations', color: '#2563EB' },
  { value: '99.9%', label: 'Managed IT uptime SLA', color: '#00C853' },
  { value: '24/7', label: 'NOC and support coverage', color: '#D97706' },
  { value: '10+', label: 'Years enterprise delivery', color: '#7C3AED' },
]

const WHY = [
  { title: 'One team owns everything',        desc: 'No vendor juggling and no blame-shifting between suppliers when something breaks. A single Infraspine team manages your entire IT stack under one SLA.' },
  { title: 'Built to your actual environment', desc: 'We start every engagement with an assessment of your existing setup. We integrate with what is working and only recommend change where there is clear business justification.' },
  { title: 'SLAs in writing, not in brochures', desc: 'Response times, uptime commitments, and escalation paths are written into your contract. If we miss an SLA, there are consequences — documented and agreed in advance.' },
  { title: 'Proactive, not reactive',           desc: '24/7 monitoring means we know about infrastructure problems before your users do. Most incidents are resolved without anyone on your team filing a ticket.' },
  { title: 'Security in every deployment',      desc: 'Cybersecurity is not an add-on service at Infraspine — it is built into every network design, every cloud deployment, and every software project from day one.' },
  { title: 'Grows as your business grows',      desc: 'Every system we deploy is architected to scale. Adding a branch, doubling headcount, or expanding internationally replicates the same architecture, not a rebuild.' },
]

const FAQS = [
  {
    question: 'Do you handle the full project end-to-end or just the consulting?',
    answer: 'We are a full-service delivery organisation. We scope, design, install, configure, test, and support everything end-to-end. You will not need to manage multiple vendors or coordinate between a consultant who designs and a different company that implements. One Infraspine team handles the full lifecycle from initial assessment through to long-term managed support.',
  },
  {
    question: 'Can you work with our existing IT infrastructure and third-party systems?',
    answer: 'Yes — we always start with a thorough audit of your existing environment. We integrate new systems with what is already working and only recommend replacement where there is genuine business justification. We have experience integrating with hundreds of enterprise systems including SAP, Oracle, Microsoft 365, Salesforce, and bespoke legacy applications.',
  },
  {
    question: 'How long does a typical project take from scoping to go-live?',
    answer: 'It depends on the scope. A network upgrade or CCTV installation typically takes 1–3 weeks. A cloud migration takes 4–12 weeks depending on complexity. Custom software development takes 6–20 weeks. A managed IT service goes live within 2 weeks of contract signing. We provide a detailed project timeline in every proposal so you know exactly what to expect at each stage before committing.',
  },
  {
    question: 'What SLA response times do you offer?',
    answer: 'Our managed service SLAs include: critical (P1) incidents responded to within 15 minutes, high (P2) within 2 hours, standard (P3) within 8 hours. All SLAs are written into the contract with clear definitions of priority levels and measurable escalation paths. Monthly reports show your SLA compliance rate across all ticket categories.',
  },
  {
    question: 'Can you support multiple offices or branches across Pakistan?',
    answer: 'Yes — multi-site deployments are one of our core strengths. We manage centralised infrastructure with branch-level visibility for IT, cybersecurity, and networking across any number of locations. Most multi-branch clients use our managed IT service with a centralised SIEM and monitoring platform that gives our NOC a single view across all sites.',
  },
  {
    question: 'Can we start with one service and add more over time?',
    answer: 'Absolutely — and that is actually our most common engagement model. Most clients begin with managed IT services or network infrastructure, then expand into cybersecurity, cloud migration, or software development as trust is established. Every service we deploy is designed to integrate cleanly with other Infraspine services, so expansion is additive rather than requiring any rebuild.',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle,#00C853,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-8 sm:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Our Services</span>
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              End-to-End IT Services for<br />
              <span style={{ color: '#00C853' }}>Enterprise Pakistan.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-5" style={{ color: '#94A3B8' }}>
              Infraspine delivers ten enterprise IT service lines from a single team — managed IT, cloud migrations, cybersecurity, network infrastructure, custom software, AI automation, BPO outsourcing, professional training, strategic consultancy, and backup and disaster recovery. Whether you need to outsource your entire IT operation or bring in specialist expertise for a specific project, Infraspine has the team, the certifications, and the track record to deliver it.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-5 sm:mb-8">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-3 sm:p-4 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[22px] font-black mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[10.5px] leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#00C853', color: '#0A1628' }}>
                Get a Free Consultation <ArrowRight size={14} />
              </Link>
              <Link href="/services/all-services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold border transition-all hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>
                Browse All 40+ Services <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why one team ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="h-px w-6" style={{ background: '#00C853' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>The Infraspine Advantage</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                One Team. One Contract. Every Layer of Your IT.
              </h2>
              <p className="text-[15px] leading-relaxed mb-5" style={{ color: '#64748B' }}>
                Most organisations end up with too many IT vendors. A networking company that does not understand the security implications of its own designs. A software developer who hands over code without documentation. A cybersecurity firm that found vulnerabilities but does not fix them. The result is fragmented accountability, integration failures, and technology that costs more to maintain than it saves.
              </p>
              <p className="text-[15px] leading-relaxed mb-8" style={{ color: '#64748B' }}>
                Infraspine consolidates all ten enterprise IT disciplines under one team with a single SLA, a single account manager, and a single commercial relationship. Our engineers in each discipline work together on your environment — the network team knows what the security team has configured, the software team builds to the infrastructure team's standards, and the cloud team's FinOps governance integrates with the managed IT reporting. Technology that is designed, deployed, and managed as a whole performs better than technology assembled from disconnected parts.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {WHY.map(({ title, desc }) => (
                  <div key={title} className="rounded-xl p-5 border" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
                    <div className="flex items-start gap-2.5 mb-2">
                      <CheckCircle size={14} style={{ color: '#00C853', flexShrink: 0, marginTop: '3px' }} />
                      <p className="text-[14px] font-bold leading-snug" style={{ color: '#0A1628' }}>{title}</p>
                    </div>
                    <p className="text-[13px] leading-relaxed pl-[22px]" style={{ color: '#64748B' }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery process */}
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="h-px w-6" style={{ background: '#2563EB' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>How We Deliver</span>
              </div>
              <h2 className="text-[clamp(1.4rem,2.5vw,2rem)] font-black mb-6" style={{ color: '#0A1628' }}>
                Structured Delivery From Day One
              </h2>
              <div className="space-y-3">
                {[
                  { step: '01', title: 'Discovery Call',         desc: 'A free 60-minute consultation to understand your current setup, business goals, and pain points without any sales pressure.',                  color: '#2563EB' },
                  { step: '02', title: 'Audit & Assessment',     desc: 'On-site or remote technical audit of your existing infrastructure, systems, and security posture — documented with risk ratings.',              color: '#7C3AED' },
                  { step: '03', title: 'Solution Architecture',  desc: 'Custom solution blueprint with network diagrams, architecture decisions, project timeline, and itemised fixed-cost proposal.',                 color: '#D97706' },
                  { step: '04', title: 'Implementation',         desc: 'Certified engineers carry out the full deployment with zero disruption to your operations and daily progress communication.',                   color: '#0891B2' },
                  { step: '05', title: 'Testing & Handover',     desc: 'Full UAT testing, documentation handover, admin training, and formal sign-off before the project is considered complete.',                     color: '#00C853' },
                  { step: '06', title: 'Ongoing Support & SLA',  desc: '24/7 monitoring, SLA-backed response, proactive maintenance, and a dedicated account manager for every post-deployment interaction.',          color: '#16A34A' },
                ].map(({ step, title, desc, color }) => (
                  <div key={step} className="flex gap-4 rounded-xl p-4 border" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[12px] font-black flex-shrink-0"
                      style={{ background: color, color: '#fff' }}>{step}</div>
                    <div>
                      <p className="text-[14px] font-bold mb-0.5" style={{ color: '#0A1628' }}>{title}</p>
                      <p className="text-[13px] leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── All 10 Services ── */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>All Services</span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Ten Enterprise IT Disciplines
            </h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Each service area has a dedicated team, its own certifications, and a detailed service page with full capability breakdowns and FAQs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {SERVICES.map(svc => (
              <div key={svc.href} className="bg-white rounded-2xl border overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: svc.border, boxShadow: '0 4px 20px rgba(10,22,40,0.06)' }}>
                {/* Header stripe */}
                <div className="px-7 py-5 border-b" style={{ background: svc.bg, borderColor: svc.border }}>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: '#fff', border: `1.5px solid ${svc.border}` }}>
                      <svc.icon size={20} style={{ color: svc.color }} strokeWidth={1.6} />
                    </div>
                    <div>
                      <h3 className="text-[17px] font-black leading-tight" style={{ color: '#0A1628' }}>{svc.title}</h3>
                      <p className="text-[11px] mt-0.5" style={{ color: svc.color }}>{svc.tagline}</p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="px-7 py-5">
                  <p className="text-[13.5px] leading-relaxed mb-5" style={{ color: '#64748B' }}>{svc.desc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {svc.highlights.map(h => (
                      <div key={h} className="flex items-center gap-2">
                        <CheckCircle size={12} style={{ color: svc.color, flexShrink: 0 }} />
                        <span className="text-[13px] font-semibold" style={{ color: '#374151' }}>{h}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={svc.href}
                    className="inline-flex items-center gap-2 text-[13px] font-bold transition-all hover:gap-3"
                    style={{ color: svc.color }}>
                    View Full Service Details <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagement models ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-black mb-3" style={{ color: '#0A1628' }}>How We Engage</h2>
            <p className="text-[15px] max-w-xl mx-auto" style={{ color: '#64748B' }}>
              Three engagement models to fit your preference — one-time project, ongoing managed service, or flexible retainer hours.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                badge: 'Most Common', badgeColor: '#00C853',
                title: 'Project-Based', subtitle: 'One-time scoped delivery', color: '#00C853',
                desc: 'Fixed-scope, fixed-price delivery for a defined outcome — a new network, a cloud migration, a custom software build. You receive a detailed proposal with itemised costs, timelines, and SLAs before any work begins.',
                items: ['Fixed-cost proposal', 'Dedicated project manager', 'Complete documentation', 'Post-go-live support period'],
              },
              {
                badge: 'Best Value', badgeColor: '#2563EB',
                title: 'Managed Service', subtitle: 'Fully outsourced IT operations', color: '#2563EB',
                desc: 'Infraspine becomes your outsourced IT department — handling monitoring, helpdesk, patch management, vendor relationships, and reporting on a monthly retainer. The most cost-effective option for organisations without a large internal IT team.',
                items: ['24/7 infrastructure monitoring', 'Unlimited helpdesk tickets', 'Dedicated account manager', 'Monthly performance reports'],
              },
              {
                badge: 'Flexible', badgeColor: '#7C3AED',
                title: 'Support Retainer', subtitle: 'On-demand specialist hours', color: '#7C3AED',
                desc: 'Pre-purchased blocks of specialist hours across any of our ten service disciplines. Ideal for organisations with an internal IT team that needs specialist backup for cybersecurity audits, architecture reviews, or complex project overflow.',
                items: ['Access to all 10 disciplines', 'Priority response SLA', 'No long-term commitment', 'Roll-over unused hours'],
              },
            ].map(m => (
              <div key={m.title} className="rounded-2xl border overflow-hidden bg-white transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: `${m.color}40`, boxShadow: '0 4px 20px rgba(10,22,40,0.06)' }}>
                <div className="px-6 py-5 border-b" style={{ borderColor: `${m.color}20` }}>
                  <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: m.badgeColor }}>{m.badge}</div>
                  <h3 className="text-[20px] font-black mb-0.5" style={{ color: '#0A1628' }}>{m.title}</h3>
                  <p className="text-[12px]" style={{ color: m.color }}>{m.subtitle}</p>
                </div>
                <div className="px-6 py-5">
                  <p className="text-[13.5px] leading-relaxed mb-5" style={{ color: '#64748B' }}>{m.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {m.items.map(item => (
                      <li key={item} className="flex items-center gap-2.5 text-[13px]" style={{ color: '#475569' }}>
                        <CheckCircle size={13} style={{ color: m.color, flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[13px] font-bold transition-all hover:opacity-90"
                    style={{ background: m.color, color: m.color === '#B7FF58' ? '#0A1628' : '#fff' }}>
                    Get Started <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology partners strip ── */}
      <section className="py-16 sm:py-20 border-y" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-7" style={{ color: '#94A3B8' }}>
            Certified Technology Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {['Cisco', 'Microsoft', 'AWS', 'Azure', 'Fortinet', 'VMware', 'CrowdStrike', 'Veeam', 'UiPath', 'OpenAI', 'Palo Alto', 'Aruba', 'Dell', 'HP'].map(p => (
              <span key={p} className="px-3.5 py-1.5 rounded-full text-[12px] font-bold border"
                style={{ background: '#fff', borderColor: '#E2E8F0', color: '#475569' }}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        title="IT Services — Frequently Asked Questions"
        subtitle="Common questions from organisations evaluating Infraspine for the first time."
        faqs={FAQS}
      />

      <CTABanner
        heading="Ready to Consolidate Your IT Under One Expert Team?"
        subheading="Book a free 60-minute discovery call. No sales pitch — just an honest conversation about your environment and how Infraspine can help."
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
