import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import Link from 'next/link'
import { ArrowRight, Layers, Users, Globe, Shield, Zap, Server, BookOpen, BarChart2, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Our Organization — Infraspine Structure, Divisions & Capabilities',
  description: 'Explore Infraspine\'s organizational structure, service divisions, delivery model, and global capabilities. Learn how our teams are organized to deliver enterprise IT services at scale.',
  alternates: { canonical: 'https://www.infraspine.com/our-organization' },
  openGraph: {
    title: 'Our Organization — Infraspine Structure, Divisions & Capabilities',
    description: 'Infraspine is organized across six specialized practice areas, each with dedicated engineers, delivery leads, and quality controls — operating as one unified partner.',
    url: 'https://www.infraspine.com/our-organization',
  },
}

const DIVISIONS = [
  {
    name: 'Infrastructure & Cloud Practice',
    icon: Server,
    color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE',
    tagline: 'The Foundation Layer',
    desc: 'Our infrastructure team covers everything from bare-metal server builds and data center design to cloud migration, hybrid environments, and 24/7 managed IT operations. This division is the largest practice area and serves as the foundation on which all other services run.',
    capabilities: ['Network architecture & deployment', 'Server builds & virtualization', 'AWS / Azure / hybrid cloud', '24/7 NOC monitoring', 'Disaster recovery & backup', 'IT asset management'],
    headcount: '25+ Engineers',
    clients: 'Manufacturing, Healthcare, Financial Services, Logistics',
  },
  {
    name: 'Cybersecurity Practice',
    icon: Shield,
    color: '#DC2626', bg: '#FEF2F2', border: '#FECACA',
    tagline: 'The Protection Layer',
    desc: 'A dedicated security team with certified penetration testers, firewall specialists, compliance auditors, and incident response professionals. This practice operates independently to ensure objectivity and cannot be overruled by commercial pressures on other divisions.',
    capabilities: ['Firewall & NGFW deployment', 'EDR & endpoint protection', 'Penetration testing (OSCP)', 'ISO 27001 / PCI-DSS compliance', 'SIEM & SOC operations', 'Incident response & forensics'],
    headcount: '12+ Security Specialists',
    clients: 'Finance, Healthcare, Legal, Government-adjacent',
  },
  {
    name: 'Software Engineering Division',
    icon: Zap,
    color: '#16A34A', bg: '#F0FDF4', border: '#BBF7D0',
    tagline: 'The Build Layer',
    desc: 'Custom software development including ERP systems, CRM platforms, web applications, mobile apps, APIs, and enterprise portals. Every product is built from scratch, tailored to the client\'s operational workflow — not configured from a generic template.',
    capabilities: ['Custom ERP development', 'CRM & sales systems', 'Full-stack web applications', 'REST & GraphQL API design', 'Database architecture', 'DevOps & CI/CD pipelines'],
    headcount: '20+ Developers & Architects',
    clients: 'Retail, Real Estate, Manufacturing, Professional Services',
  },
  {
    name: 'AI & Automation Unit',
    icon: Layers,
    color: '#D97706', bg: '#FFFBEB', border: '#FDE68A',
    tagline: 'The Intelligence Layer',
    desc: 'Specialists in n8n workflow automation, AI agent engineering, WhatsApp Business integration, RPA, and intelligent business process design. This unit works across industries to eliminate manual processes and create self-operating business functions using AI.',
    capabilities: ['n8n workflow development', 'AI agent engineering', 'WhatsApp Business automation', 'RPA for legacy systems', 'LLM integration (GPT, Claude)', 'Automation analytics & monitoring'],
    headcount: '10+ AI & Automation Engineers',
    clients: 'Logistics, Operations Teams, Customer Support, Sales',
  },
  {
    name: 'BPO Operations Division',
    icon: Users,
    color: '#0F766E', bg: '#F0FDFA', border: '#99F6E4',
    tagline: 'The Operations Layer',
    desc: 'Our BPO division delivers business process outsourcing across customer support, back-office operations, data processing, and call center management. Equipped with dedicated agent workstations, quality assurance frameworks, and SLA-backed output guarantees.',
    capabilities: ['Customer support outsourcing', 'Data entry & processing', 'Call center operations', 'Back-office management', 'Quality assurance programs', 'Multilingual support capability'],
    headcount: '50+ BPO Agents & Supervisors',
    clients: 'Retail, Financial Services, Healthcare, eCommerce',
  },
  {
    name: 'IT Training Academy',
    icon: BookOpen,
    color: '#EA580C', bg: '#FFF7ED', border: '#FED7AA',
    tagline: 'The Learning Layer',
    desc: 'The Infraspine IT Training Academy delivers professional certification programs, corporate upskilling, and custom training packages for IT professionals and enterprise teams. Powered by our proprietary ITLMS platform for online and blended delivery.',
    capabilities: ['Networking certifications (CCNA, CompTIA)', 'Cloud certifications (AWS, Azure)', 'Cybersecurity programs (CEH, OSCP)', 'AI & automation training', 'Corporate batch programs', 'Online ITLMS platform access'],
    headcount: '15+ Instructors & Curriculum Designers',
    clients: 'Corporates, IT Professionals, Graduates, Teams',
  },
]

const DELIVERY_MODEL = [
  {
    phase: '01', title: 'Intake & Assignment',
    desc: 'Every new engagement goes through a structured intake process. A senior delivery manager reviews the requirement, assigns the correct practice team, and conducts initial stakeholder alignment.',
    color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE',
  },
  {
    phase: '02', title: 'Technical Discovery',
    desc: 'The assigned practice team conducts a thorough technical discovery — auditing existing systems, mapping gaps, and producing a detailed Solution Design Document (SDD) before any work begins.',
    color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE',
  },
  {
    phase: '03', title: 'Proposal & Contract',
    desc: 'A fixed-scope, fixed-price proposal is issued with itemized deliverables, SLA commitments, timelines, and escalation procedures. No ambiguous retainers or open-ended billing.',
    color: '#0891B2', bg: '#ECFEFF', border: '#A5F3FC',
  },
  {
    phase: '04', title: 'Delivery & Milestones',
    desc: 'Project execution follows our structured delivery framework with milestone-based progress reviews, client sign-offs at each gate, and a dedicated project manager for every engagement.',
    color: '#16A34A', bg: '#F0FDF4', border: '#BBF7D0',
  },
  {
    phase: '05', title: 'Handover & Training',
    desc: 'Every project concludes with formal documentation, admin training, user guides, and a structured handover period. Nothing is considered "done" until your team is independently operational.',
    color: '#EA580C', bg: '#FFF7ED', border: '#FED7AA',
  },
  {
    phase: '06', title: 'Ongoing Support & Review',
    desc: 'Post-delivery, every client is transitioned to our Account Management team for ongoing SLA monitoring, quarterly review calls, and proactive optimization recommendations.',
    color: '#00C853', bg: '#F0FDF4', border: '#BBF7D0',
  },
]

export default function OurOrganizationPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about-us' },
        { label: 'Our Organization' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-10 sm:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Our Organization</span>
            </div>
            <h1 className="text-[clamp(2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              How Infraspine Is<br />
              <span style={{ color: '#00C853' }}>Built to Deliver.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              Infraspine is organized across six specialized practice areas — each with dedicated engineering teams, delivery leads, and quality controls — all operating under a unified management structure that ensures consistency, accountability, and seamless collaboration across every client engagement.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: '#64748B' }}>
              Understanding how we are structured helps you understand how your project will be managed, who is responsible for what, and how we maintain the quality standards our SLAs commit to across every service area.
            </p>
          </div>
        </div>
      </section>

      {/* ── Practice Divisions ── */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Our Practice Areas</span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.8rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Specialist Divisions. One Unified Team.
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Each division operates with its own technical leadership, quality benchmarks, and delivery standards — while sharing a common client services infrastructure and account management layer.
            </p>
          </div>

          <div className="space-y-6">
            {DIVISIONS.map((div, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border bg-white"
                style={{ borderColor: div.border, boxShadow: '0 4px 24px rgba(10,22,40,0.06)' }}>
                {/* Header */}
                <div className="p-6 sm:p-8 border-b" style={{ borderColor: div.border, background: div.bg }}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: '#fff', border: `2px solid ${div.border}` }}>
                      <div.icon size={26} style={{ color: div.color }} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] mb-1" style={{ color: div.color }}>
                        {div.tagline}
                      </p>
                      <h3 className="text-[20px] sm:text-[24px] font-black leading-tight" style={{ color: '#0A1628' }}>
                        {div.name}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-3 flex-shrink-0">
                      <span className="px-3 py-1.5 rounded-full text-[11px] font-bold" style={{ background: div.bg, color: div.color, border: `1px solid ${div.border}` }}>
                        {div.headcount}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-[13.5px] leading-relaxed mb-5" style={{ color: '#475569' }}>
                        {div.desc}
                      </p>
                      <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: '#94A3B8' }}>
                        Key Industries
                      </p>
                      <p className="text-[13px]" style={{ color: '#64748B' }}>{div.clients}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: '#94A3B8' }}>
                        Core Capabilities
                      </p>
                      <ul className="space-y-2">
                        {div.capabilities.map((cap, j) => (
                          <li key={j} className="flex items-center gap-2.5">
                            <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: div.bg }}>
                              <CheckCircle size={9} style={{ color: div.color }} strokeWidth={3} />
                            </div>
                            <span className="text-[13px]" style={{ color: '#374151' }}>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Delivery Model ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#2563EB' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>How We Deliver</span>
              <div className="h-px w-6" style={{ background: '#2563EB' }} />
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.8rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              The Infraspine Delivery Model
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Every engagement — regardless of size or division — follows the same structured delivery model. Consistency is how we maintain quality at scale.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DELIVERY_MODEL.map((phase, i) => (
              <div key={i} className="relative flex flex-col rounded-2xl p-6 border bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: phase.border }}>
                <div className="absolute -top-3.5 left-6 px-3 py-1 rounded-full text-[11px] font-black"
                  style={{ background: phase.color, color: '#fff' }}>
                  {phase.phase}
                </div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 mt-2" style={{ background: phase.bg }}>
                  <div className="w-3 h-3 rounded-full" style={{ background: phase.color }} />
                </div>
                <h3 className="text-[14px] font-bold mb-2" style={{ color: '#0A1628' }}>{phase.title}</h3>
                <p className="text-[13px] leading-relaxed flex-1" style={{ color: '#64748B' }}>{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal Platforms ── */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Our Platforms</span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.8rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Proprietary Products Built In-House
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Infraspine does not just deploy third-party software. We have built our own platforms to solve the specific problems our clients face.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                name: 'Infraspine CRM',
                badge: 'In Production',
                badgeColor: '#00C853',
                color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE',
                desc: 'A fully custom CRM built for enterprise sales teams. Kanban pipeline, contact management, quotation builder, WhatsApp threading, commission engine, and executive dashboards — built from scratch to fit how sales teams actually work.',
                features: ['Visual sales pipeline', 'WhatsApp thread integration', 'Auto quotation builder', 'Commission calculation engine', 'Multi-branch visibility', 'Real-time deal analytics'],
              },
              {
                name: 'Infraspine ITLMS',
                badge: 'Live Platform',
                badgeColor: '#2563EB',
                color: '#EA580C', bg: '#FFF7ED', border: '#FED7AA',
                desc: 'IT Learning Management System — our proprietary training delivery platform powering the Infraspine Training Academy. Features course building, batch management, assessment engine, certification issuance, and a corporate enrollment portal for HR teams.',
                features: ['Drag-drop course builder', 'Batch & cohort management', 'Timed MCQ exam engine', 'Branded digital certificates', 'Corporate enrollment portal', 'Trainee analytics dashboard'],
              },
            ].map((product, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border bg-white"
                style={{ borderColor: product.border }}>
                <div className="p-6 border-b flex items-center justify-between" style={{ borderColor: product.border, background: product.bg }}>
                  <div>
                    <h3 className="text-[20px] font-black" style={{ color: '#0A1628' }}>{product.name}</h3>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold"
                      style={{ background: `${product.badgeColor}15`, color: product.badgeColor, border: `1px solid ${product.badgeColor}30` }}>
                      {product.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[13.5px] leading-relaxed mb-5" style={{ color: '#475569' }}>{product.desc}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2 text-[12px]" style={{ color: '#64748B' }}>
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: product.color }} />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Want to Understand How We Would Serve Your Business?"
        subheading="Book a discovery call and we will walk you through exactly which division would handle your requirements, who your team would be, and how we would deliver."
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
