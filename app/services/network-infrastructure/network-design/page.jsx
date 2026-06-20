import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Network, Building2, Globe, FileText, Settings, BarChart2,
  ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'Network Design & Maintenance Pakistan | Enterprise Network | Infraspine',
  description: 'Infraspine Network Design & Maintenance: end-to-end enterprise network architecture, design, implementation and ongoing maintenance. 150+ networks designed, 99.99% uptime SLA, Cisco/Aruba/Fortinet certified engineers.',
  alternates: { canonical: 'https://www.infraspine.com/services/network-infrastructure/network-design' },
  openGraph: {
    title: 'Network Design & Maintenance Pakistan | Enterprise Network | Infraspine',
    description: 'Enterprise network architecture and ongoing maintenance with 99.99% uptime SLA. Cisco, Aruba, and Fortinet certified engineers serving businesses across Pakistan.',
    url: 'https://www.infraspine.com/services/network-infrastructure/network-design',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Network Design & Maintenance',
  name: 'Infraspine Network Design & Maintenance',
  description: 'End-to-end enterprise network architecture, design, implementation, documentation, and ongoing maintenance for businesses in Pakistan. Cisco, Aruba, and Fortinet certified engineers.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/network-infrastructure/network-design',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '150+', label: 'Networks Designed', color: '#16A34A' },
  { value: '99.99%', label: 'Uptime SLA', color: '#2563EB' },
  { value: 'Cisco/Aruba', label: 'Fortinet Certified', color: '#7C3AED' },
  { value: 'Full', label: 'Lifecycle Support', color: '#D97706' },
]

const CAPABILITIES = [
  {
    icon: Network,
    title: 'Network Architecture Design',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'Network architecture design is the strategic foundation of your entire IT infrastructure — the set of decisions about topology, segmentation, redundancy, security, and scalability that will govern how your network performs and evolves for the next 5 to 10 years. Poor architecture decisions made at this stage are enormously expensive to correct later, once the network is built and operational systems depend on it. Infraspine\'s network architects approach every design engagement with a structured methodology: understand the business requirements and growth trajectory, assess the existing environment and its constraints, define the security and compliance requirements, and produce a layered architecture that meets current needs while accommodating future growth. Our designs follow proven hierarchical network models — access, distribution, and core layers — with appropriate redundancy at each tier based on the criticality of the systems served.',
    points: [
      'Hierarchical three-tier architecture design (access, distribution, core)',
      'Business requirement analysis before any technical design is produced',
      'Redundancy and resilience design with documented single-points-of-failure elimination',
      'Security zone segmentation and VLAN architecture for network micro-segmentation',
    ],
  },
  {
    icon: Building2,
    title: 'Core & Distribution Layer Design',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'The core and distribution layers of an enterprise network carry the highest traffic volumes and have the most critical impact on overall network availability. Design decisions at these layers — switching platform selection, redundancy topology (VSS, StackWise, MLAG), routing protocol choice, QoS policy design, and inter-VLAN routing strategy — have a direct and lasting impact on network performance and reliability. Infraspine\'s certified engineers design core and distribution layers for enterprise environments of all sizes, from single-site SMEs to multi-building campus networks with thousands of connected devices. We produce detailed logical and physical design documents that capture every technical decision and its rationale, giving your team a full reference for the infrastructure they are operating and maintaining.',
    points: [
      'Core switching platform selection and redundancy topology design',
      'Distribution layer inter-VLAN routing and policy design',
      'Quality of Service (QoS) policy design for voice, video, and data prioritisation',
      'Logical and physical design documentation produced for every design',
    ],
  },
  {
    icon: Globe,
    title: 'WAN & SD-WAN Design',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Wide area network design has undergone a fundamental transformation in recent years. Traditional MPLS-based WAN architectures — expensive, rigid, and slow to provision — are being replaced or supplemented by SD-WAN solutions that deliver flexible, policy-driven connectivity across broadband, LTE, and private circuit links simultaneously. Infraspine designs WAN architectures for both traditional and SD-WAN environments, selecting the appropriate technology based on the organisation\'s connectivity requirements, security posture, geographic footprint, and budget. For SD-WAN deployments, we design the underlay connectivity, overlay policy framework, application-aware routing rules, and security integration. For multi-site organisations in Pakistan, where link quality between cities can vary significantly, SD-WAN\'s ability to use multiple uplinks simultaneously and dynamically route traffic over the best available path dramatically improves application performance and WAN resilience.',
    points: [
      'SD-WAN architecture design for Cisco Viptela, Fortinet, and Aruba platforms',
      'Hybrid WAN design combining MPLS, broadband, and LTE uplinks',
      'Application-aware routing policy design for SaaS and cloud application optimisation',
      'WAN failover and path-selection design for maximum connectivity resilience',
    ],
  },
  {
    icon: FileText,
    title: 'Network Documentation',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'The network diagram drawn on a whiteboard during the original installation and never updated is a liability, not an asset. Inaccurate or missing network documentation means that troubleshooting takes longer, changes are made without understanding the full impact, and engineers new to the environment must reverse-engineer the network before they can work on it effectively. Infraspine produces comprehensive, accurate, and maintainable network documentation for every network we design and implement — and for existing networks where documentation is missing or outdated. Our documentation deliverables cover logical network diagrams showing IP addressing, VLAN layout, routing topology, and security zones; physical diagrams showing cabling, rack layouts, and port assignments; configuration documentation; and a network runbook covering operational procedures for common maintenance tasks.',
    points: [
      'Logical network diagrams (IP addressing, VLAN, routing, security zones)',
      'Physical diagrams (cabling, rack layouts, port assignments, labelling)',
      'Device configuration documentation and baseline configuration files',
      'Network runbook covering operational and maintenance procedures',
    ],
  },
  {
    icon: Settings,
    title: 'Ongoing Network Maintenance',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'A well-designed network that receives no ongoing maintenance will degrade over time — firmware vulnerabilities accumulate, configuration drift introduces inconsistencies, capacity thresholds are reached without warning, and small misconfigurations from ad-hoc changes compound into larger problems. Infraspine\'s ongoing network maintenance service keeps your network operating at its designed performance levels and security posture through structured, regular maintenance activities. Monthly maintenance windows cover firmware review and scheduled updates for network devices, configuration backup and compliance verification, performance baseline review, and fault log analysis. Quarterly reviews assess whether the network is meeting its performance SLAs and whether any capacity or architecture changes are warranted to support evolving business requirements. Emergency maintenance response is available 24/7 for network-affecting faults.',
    points: [
      'Scheduled firmware review and update cycle for all network devices',
      'Configuration backup and compliance verification on monthly cadence',
      'Fault log analysis and trending to identify recurring or emerging issues',
      '24/7 emergency response for network-affecting faults with SLA guarantee',
    ],
  },
  {
    icon: BarChart2,
    title: 'Network Performance Optimisation',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'A network that met performance requirements when it was first deployed may no longer be adequate as application patterns evolve, user numbers grow, cloud adoption increases, and new workloads such as video conferencing and cloud-hosted business applications place different demands on the infrastructure. Network performance optimisation is the ongoing process of analysing traffic patterns, identifying bottlenecks, assessing QoS policy effectiveness, and implementing configuration and architecture changes to ensure the network continues to deliver the performance your applications require. Our performance optimisation work is driven by monitoring data — not guesswork. We identify actual bottlenecks from traffic flow analysis and device performance metrics, rather than applying generic configuration changes that may not address the real cause of user-experienced performance issues.',
    points: [
      'Traffic flow analysis to identify actual bottlenecks from monitoring data',
      'QoS policy review and refinement for voice, video, and application performance',
      'Wireless network optimisation including channel planning and coverage validation',
      'Bandwidth utilisation analysis and upgrade recommendation where required',
    ],
  },
]

const VENDORS = [
  'Cisco Catalyst', 'Cisco Meraki', 'Aruba Networks', 'Fortinet FortiSwitch',
  'Juniper Networks', 'HPE Networking', 'Ubiquiti', 'Palo Alto Networks',
]

const FAQS = [
  {
    question: 'How do you approach designing a network for a business that has an existing network in place?',
    answer: 'For existing network environments, the design process starts with a thorough assessment rather than a blank-sheet design. We document the current state of the network — topology, device inventory, IP addressing scheme, VLAN design, routing configuration, and any known performance or reliability issues. We then assess the current design against the business\'s current and projected requirements, identifying gaps, risks, and inefficiencies. The outcome of this assessment is a gap analysis report that prioritises recommended changes by their impact and implementation complexity. We then work with you to plan and sequence the changes — some can be implemented as hot changes during business hours, others require scheduled maintenance windows, and some may be phased across multiple projects. This structured approach ensures we improve the network without disrupting the business that depends on it.',
  },
  {
    question: 'What is SD-WAN and when should a business in Pakistan consider it?',
    answer: 'SD-WAN (Software-Defined Wide Area Network) is a technology that abstracts the WAN connectivity layer from the physical links beneath it, allowing network policies to dynamically route traffic across multiple uplink types — MPLS, broadband, and LTE — based on real-time link quality and application priority. In Pakistan\'s connectivity environment, where link quality between cities can vary significantly and single-provider MPLS circuits are expensive to scale, SD-WAN is particularly valuable for multi-site organisations. Consider SD-WAN if you operate more than two locations, if your WAN costs are a significant budget item, if you experience performance issues with cloud applications over your existing WAN, or if you need WAN redundancy that your current connectivity budget cannot accommodate with traditional dual-MPLS circuits.',
  },
  {
    question: 'How long does it typically take to design and implement a new enterprise network?',
    answer: 'Project timelines vary significantly based on scope, but typical ranges are: single-site SME network (up to 100 users) — 3 to 6 weeks from design kickoff to live network. Mid-size enterprise single site (100 to 500 users) — 6 to 12 weeks. Multi-site enterprise network — 3 to 6 months depending on the number of sites and the complexity of WAN integration. The design phase alone typically takes 2 to 4 weeks as we develop, document, and review the logical and physical design with your team before any equipment is ordered or installed. Procurement lead times for network equipment can add 2 to 8 weeks depending on availability, which we flag early in the project planning process. We provide a detailed project plan with milestones at the start of every engagement so you have a clear timeline and can plan around it.',
  },
  {
    question: 'What network certifications do your engineers hold?',
    answer: 'Our network engineering team holds certifications from the major enterprise networking vendors: Cisco CCNA and CCNP (Routing & Switching, Enterprise, and Security tracks), Aruba Certified Switching Associate and Professional, Fortinet NSE 4 and NSE 7, and Juniper JNCIA and JNCIS. For WAN and SD-WAN specifically, our engineers hold Cisco Viptela SD-WAN and Fortinet SD-WAN specialist certifications. We maintain and refresh these certifications on a structured schedule to ensure our team\'s knowledge remains current with each vendor\'s latest platform releases and recommended design practices. Certification details for the engineers assigned to your project are available on request and are included in our proposal documentation.',
  },
  {
    question: 'What does ongoing network maintenance include and how is it delivered?',
    answer: 'Ongoing network maintenance covers a structured set of activities delivered on a regular cadence. Monthly activities include: automated configuration backups of all network devices with version comparison to detect unauthorised changes; firmware advisory review against the vendor\'s latest recommended versions; device health metric review from monitoring data; and fault log analysis to identify recurring or emerging issues. Quarterly activities include a performance review meeting, capacity trend assessment, and security posture review. Annual activities include a full network documentation refresh, architecture review against evolving business requirements, and technology roadmap advisory. Emergency maintenance response is available 24/7 for network-affecting faults, with response SLAs defined in your maintenance agreement. All maintenance activities are logged and summarised in a monthly report delivered to your IT management.',
  },
]

export default function NetworkDesignPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Network & Infrastructure', href: '/services/network-infrastructure' },
        { label: 'Network Design & Maintenance' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#16A34A,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#16A34A' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#16A34A' }}>Network Design & Maintenance</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Enterprise Network Design —{' '}
              <span style={{ color: '#16A34A' }}>Built for Performance. Designed to Last.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Your network is the foundation on which every other piece of your IT infrastructure depends. A network designed correctly from the start performs reliably, scales without major rework, and does not become a source of chronic performance complaints and security incidents. Infraspine\'s certified network engineers have designed and implemented over 150 enterprise networks across Pakistan — from single-site SMEs to multi-location enterprises with complex WAN requirements. We deliver complete network design, implementation, documentation, and ongoing maintenance under a single engagement.
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
                style={{ background: '#16A34A', color: '#fff' }}>
                Get a Network Design Consultation <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Request a Network Assessment
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
                Why Network Design Quality Determines Your IT Outcomes
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Most network problems that manifest as chronic performance issues, intermittent outages, or security vulnerabilities are not caused by faulty hardware — they are caused by poor design decisions made when the network was first built. An undocumented flat network that grew organically over years, with no VLAN segmentation, no redundancy, and no documented IP addressing scheme, will continue to generate support tickets and security risks indefinitely regardless of how much money is spent on endpoint security tools layered on top of it.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                A properly designed enterprise network pays dividends for years. Correct VLAN segmentation reduces your attack surface and limits the blast radius of any security incident. Redundant core and distribution links eliminate single points of failure. A documented IP addressing scheme makes troubleshooting faster and changes less risky. QoS policies ensure your voice and video applications perform reliably even when the network is under load. These design decisions made once at the outset cost a fraction of the ongoing support, downtime, and emergency remediation costs they prevent.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                For businesses in Pakistan embracing hybrid working, cloud applications, and digital transformation initiatives, a well-designed network is not infrastructure overhead — it is a business enabler. The quality and reliability of your network directly determines how effectively your staff can use the cloud platforms, collaboration tools, and business applications that modern work depends on.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#16A34A', text: 'Correct design prevents chronic performance issues at source' },
                  { color: '#2563EB', text: '99.99% uptime SLA backed by redundant architecture design' },
                  { color: '#7C3AED', text: 'Cisco, Aruba, and Fortinet certified engineers on every project' },
                  { color: '#D97706', text: 'Full documentation delivered — not just a live network with no records' },
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
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>Network Design Engagement Deliverables</p>
              <div className="space-y-3">
                {[
                  { phase: 'Discovery & Assessment', items: ['Current-state network audit', 'Business requirements capture', 'Gap and risk analysis'] },
                  { phase: 'Design Phase', items: ['Logical network design document', 'Physical design and equipment specification', 'IP addressing and VLAN plan'] },
                  { phase: 'Implementation', items: ['Staged implementation with rollback plan', 'Configuration and testing per device', 'User acceptance testing'] },
                  { phase: 'Documentation', items: ['As-built logical and physical diagrams', 'Device configuration archive', 'Network runbook and SOPs'] },
                ].map(p => (
                  <div key={p.phase} className="p-3 rounded-xl border" style={{ borderColor: '#E2E8F0', background: '#fff' }}>
                    <div className="text-[13px] font-bold mb-2" style={{ color: '#16A34A' }}>{p.phase}</div>
                    <div className="space-y-1">
                      {p.items.map(item => (
                        <div key={item} className="flex items-center gap-2 text-[12px]" style={{ color: '#64748B' }}>
                          <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#16A34A' }} />
                          {item}
                        </div>
                      ))}
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
              <div className="h-px w-6" style={{ background: '#16A34A' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#16A34A' }}>Network Capabilities</span>
              <div className="h-px w-6" style={{ background: '#16A34A' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Core Network Design & Maintenance Areas
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              End-to-end network services from initial architecture design through WAN and SD-WAN to ongoing performance optimisation and maintenance.
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
            Network Vendors &amp; Platforms We Design &amp; Support
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
        title="Network Design & Maintenance Questions Answered"
        subtitle="Common questions from IT leaders and business owners planning a network design or upgrade project." />

      <CTABanner
        heading="Design an Enterprise Network Built to Last"
        subheading="Stop tolerating a network that was never properly designed. Get certified engineers to build the infrastructure foundation your business deserves."
        primaryCTA={{ label: 'Start Your Network Project', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
