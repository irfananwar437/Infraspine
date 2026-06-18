import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Server, Cpu, Zap, Activity, Settings, BarChart2, CheckCircle, ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'Data Center Services Pakistan — Server Room Design & Management | Infraspine',
  description: 'Infraspine Data Center Services: server room design, rack management, UPS power systems, precision cooling, and remote hands support. TIA-942 compliant data centers for Pakistan businesses.',
  alternates: { canonical: 'https://www.infraspine.com/services/data-center' },
  openGraph: {
    title: 'Data Center Services Pakistan — Server Room Design & Management | Infraspine',
    description: 'Infraspine Data Center Services: server room design, rack management, UPS power systems, precision cooling, and remote hands support for Pakistan businesses.',
    url: 'https://www.infraspine.com/services/data-center',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Data Center Services',
  name: 'Infraspine Data Center Services',
  description: 'Professional data center design, build, and management services including server room design, UPS power systems, precision cooling, server virtualization, remote hands support, and data center migration for businesses in Pakistan.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/data-center',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '99.99%', label: 'Uptime SLA Guaranteed', color: '#0EA5E9' },
  { value: '24/7', label: 'Remote Hands Support', color: '#00C853' },
  { value: '15+', label: 'Data Centers Managed', color: '#7C3AED' },
  { value: 'Tier II/III', label: 'Design Standards', color: '#F59E0B' },
]

const CAPABILITIES = [
  {
    icon: Server,
    title: 'Server Room Design & Build',
    color: '#0EA5E9',
    bg: '#F0F9FF',
    desc: 'A well-designed server room is the physical foundation of your entire IT operation, and cutting corners at the design stage creates problems — heat, downtime, cabling chaos — that become progressively more expensive to fix as the facility grows. Infraspine plans and delivers complete server room builds from the ground up, as well as structured retrofits of existing spaces that were never purpose-built for IT equipment. Every design begins with a detailed site survey covering power availability, structural load limits, ambient temperature ranges, ceiling height, and access control requirements. We size the facility for current needs while engineering in growth headroom so your infrastructure can scale without a disruptive redesign. Power distribution follows N+1 redundancy principles — no single point of failure between the utility supply and your equipment. Structured cabling is designed to TIA-942 standards with full cable management, labelling, and pathway separation between power and data runs. Rack layouts are planned for optimal airflow, maintenance access, and weight distribution across the raised floor or structural slab. Fire suppression systems are specified and coordinated with civil contractors to protect equipment without the water damage risk of sprinkler systems.',
    points: [
      'Full site survey and capacity planning before any civil work begins',
      'TIA-942 compliant structured cabling and power distribution design',
      'N+1 redundancy for power, cooling, and network connectivity paths',
      'Integrated fire suppression, access control, and environmental monitoring',
    ],
  },
  {
    icon: Cpu,
    title: 'Server Virtualization & Hyper-V',
    color: '#0EA5E9',
    bg: '#F0F9FF',
    desc: 'Running one application per physical server is an approach that wastes hardware, increases power consumption, expands your footprint in the rack, and multiplies licensing costs unnecessarily. Server virtualization consolidates multiple workloads onto shared physical hardware, typically achieving a 10:1 or greater VM-to-host ratio on modern hardware while delivering the same or better performance. Infraspine deploys and manages the full range of enterprise hypervisor platforms including VMware vSphere, Microsoft Hyper-V, and Proxmox VE for organisations seeking an open-source path. Our architects assess your current workload mix — application types, I/O profiles, memory requirements, and network demands — to design a virtual infrastructure that places the right workloads on the right hosts. We configure vMotion or Live Migration so virtual machines can be moved between hosts without downtime during hardware maintenance windows. High-availability clusters ensure that if a physical host fails, affected VMs are automatically restarted on surviving hosts within minutes. Licensing optimisation is built into every engagement: we review your current Microsoft SQL Server, Windows Server, and application licences against your virtualisation topology to ensure you are not over-licensed on some hosts while under-licensed on others. Storage design includes shared SAN or NAS integration, local NVMe tiering, and backup target configuration aligned with your recovery time and recovery point objectives.',
    points: [
      'VMware vSphere, Microsoft Hyper-V, and Proxmox VE deployment and configuration',
      'Workload consolidation with right-sizing analysis for CPU, memory, and storage',
      'vMotion and Live Migration for zero-downtime host maintenance windows',
      'High-availability and failover cluster configuration with automated VM restart',
    ],
  },
  {
    icon: Zap,
    title: 'UPS & Power Management',
    color: '#0EA5E9',
    bg: '#F0F9FF',
    desc: 'Power quality and continuity are the single most important physical factors in data center reliability. A momentary voltage sag, a spike from a switching load, or a complete utility outage can corrupt data, damage equipment, and trigger cascading failures across connected systems. Infraspine designs, supplies, and commissions Uninterruptible Power Supply systems from leading manufacturers including Eaton, APC by Schneider Electric, and Vertiv, selecting the right topology — offline, line-interactive, or online double-conversion — for each application based on the criticality of the protected load and the power quality characteristics of the site. Online double-conversion UPS systems are specified for all critical server room applications, as they provide complete electrical isolation from the utility supply and true zero transfer time on outage. We design Power Distribution Units to distribute load evenly across UPS outputs, preventing single-circuit overloads while maintaining redundant feed paths to dual-corded equipment. Generator integration is planned with automatic transfer switch design, fuel autonomy calculations, and load shedding procedures to ensure that in extended outages, generator capacity is allocated to the most critical systems first. Battery management programmes extend cell life, track state-of-health, and ensure that runtime calculations accurately reflect the current battery condition rather than nameplate ratings from a commissioning date that may be years in the past.',
    points: [
      'Online double-conversion UPS specification and commissioning for all critical loads',
      'PDU design with redundant feed paths and load balancing across circuits',
      'Generator integration with ATS, fuel autonomy planning, and load shedding procedures',
      'Preventive battery management with runtime verification and health monitoring',
    ],
  },
  {
    icon: Activity,
    title: 'Precision Cooling Solutions',
    color: '#0EA5E9',
    bg: '#F0F9FF',
    desc: 'Thermal management is one of the most frequently underestimated challenges in data center operations. Standard commercial air conditioning units are designed to cool people, not heat-dense IT equipment, and deploying them in a server room leads to hot spots, premature hardware failures, and significantly higher energy costs than properly designed precision cooling delivers. Infraspine designs and deploys Computer Room Air Conditioning and Computer Room Air Handling units calibrated for the specific heat loads generated by your equipment, with redundant capacity to maintain temperature within the ASHRAE A1 or A2 recommended envelope even during a single unit failure or high-load event. Hot aisle and cold aisle containment structures are specified wherever rack density and room geometry allow, as containment typically reduces cooling energy consumption by 25 to 40 percent by preventing hot exhaust air from mixing with cold supply air before it reaches equipment intakes. In-row cooling units are deployed in high-density configurations where perimeter units cannot deliver adequate airflow to the centre of deep rows. Computational fluid dynamics modelling is available for larger installations, allowing us to identify thermal risk areas in the design before equipment is installed and before money is spent on civil works that may need to be redone. Environmental monitoring sensors are deployed throughout the facility with alerting thresholds that give operations teams time to respond before temperatures reach equipment-damaging levels.',
    points: [
      'CRAC and CRAH unit specification with N+1 redundant cooling capacity',
      'Hot aisle and cold aisle containment design and installation',
      'In-row cooling deployment for high-density rack configurations',
      'CFD thermal modelling for large installations to eliminate hot spots before build',
    ],
  },
  {
    icon: Settings,
    title: 'Remote Hands & On-site Support',
    color: '#0EA5E9',
    bg: '#F0F9FF',
    desc: 'Not every organisation has technical staff who can be physically present in the data center at any hour of the day or night. When a drive fails at 2am, when a network cable needs to be reseated, or when new hardware arrives that needs to be racked and cabled before the business opens the next morning, you need engineers who can respond quickly and work accurately without requiring extensive remote guidance. Infraspine provides Remote Hands and On-site Support services for facilities across Pakistan, with 24/7 availability for emergency response and scheduled availability for planned tasks. Our engineers are trained to execute IMAC activities — Installs, Moves, Adds, and Changes — against your documented procedures without improvisation that could introduce risk to live systems. Equipment swaps are conducted under change control discipline: the scope is agreed in advance, a rollback plan is in place, and the engineer confirms successful completion before the change window closes. For co-location clients who cannot always travel to their hosting facility, we act as the physical extension of your remote team, executing tasks under your direction with photo and video documentation provided as standard for every visit so you have a full record of every change made to your equipment.',
    points: [
      '24/7 emergency response for physical hardware failures and connectivity issues',
      'IMAC services executed to documented procedures with change control discipline',
      'Equipment racking, cabling, and commissioning for new hardware deployments',
      'Photo and video documentation provided for every remote hands visit as standard',
    ],
  },
  {
    icon: BarChart2,
    title: 'Data Center Migration',
    color: '#0EA5E9',
    bg: '#F0F9FF',
    desc: 'Moving a data center is one of the highest-risk IT projects an organisation can undertake. The combination of physical handling risks, dependency mapping complexity, cutover sequencing requirements, and business continuity obligations makes migration planning as important as the physical move itself. Infraspine provides end-to-end data center migration services covering everything from the initial discovery and asset inventory through to post-migration validation and decommission of the source facility. We begin every migration engagement with a comprehensive discovery phase, using automated tools to build a dependency map of the environment — which servers communicate with which other servers, which applications share storage, and which workloads must be migrated together to avoid breaking dependencies during the transition. Risk assessment identifies the highest-complexity migrations and develops specific runbooks for each, including rollback procedures tested in advance wherever possible. Live migration techniques are used for virtual workloads wherever the hypervisor and network configuration support them, moving machines and storage without imposing maintenance windows on business users. Where live migration is not possible, we minimise downtime through careful pre-staging and execute parallel operation periods to validate the target environment fully before decommissioning the source infrastructure.',
    points: [
      'Automated discovery and dependency mapping before any migration planning begins',
      'Workload sequencing based on dependency analysis and business criticality ranking',
      'Live migration for virtual workloads to minimise or eliminate maintenance windows',
      'Rollback procedures tested and documented for all high-risk migration steps',
    ],
  },
]

const FAQS = [
  {
    question: 'What is the difference between Tier I, II, and III data centers?',
    answer: 'The Uptime Institute\'s Tier classification system measures data center reliability through redundancy levels. Tier I provides basic capacity with no redundancy and a guaranteed uptime of 99.671%, which translates to up to 28.8 hours of downtime per year. Tier II adds redundant capacity components — extra UPS modules, additional cooling units — and reaches 99.741% uptime. Tier III is the most common enterprise standard: it requires concurrent maintainability, meaning any single component can be taken offline for maintenance without affecting live systems, and guarantees 99.982% uptime, or approximately 1.6 hours of downtime per year. Tier IV adds full fault tolerance so that any single failure, not just planned maintenance, cannot cause an outage. Infraspine designs to Tier II and Tier III standards depending on client requirements, with Tier III being the recommended minimum for production systems supporting business-critical applications.',
  },
  {
    question: 'Can you design a data center within our existing office building?',
    answer: 'Yes, this is one of the most common scenarios we encounter. Most organisations prefer to build a server room within their existing premises rather than leasing co-location space, and the majority of commercial buildings can accommodate a well-designed server room with appropriate planning. The key constraints we assess during a site survey are: available floor area and ceiling height, structural load capacity of the floor since IT equipment and raised floor systems are heavy, dedicated electrical supply capacity for UPS and cooling systems, the ability to route chilled water or refrigerant lines for precision cooling equipment, and the physical security of the proposed space. In most cases we can design a compliant, high-reliability server room within an existing office building footprint. We coordinate directly with building management and civil contractors to ensure all works are correctly scoped and executed.',
  },
  {
    question: 'How do you ensure power redundancy for critical systems?',
    answer: 'Power redundancy in a data center operates across several layers simultaneously. At the utility supply level, we specify dual incoming feeds from different utility substations where this is available, with an automatic transfer switch to move between them without interruption. Where dual utility feeds are not available, a diesel generator provides backup generation with an ATS that activates within 10 to 15 seconds of utility failure, bridged by UPS battery runtime during the transfer. At the UPS level, we design N+1 redundant systems — if your load requires 40kVA of protected power we deploy 80kVA across two units so either can fail without affecting the load. Power distribution to racks uses redundant PDUs fed from separate UPS outputs, and dual-corded servers are connected to both PDUs so that a PDU or circuit failure does not take down the server. This layered approach ensures no single failure at any level causes an outage to properly specified and cabled equipment.',
  },
  {
    question: 'What certifications do your data center engineers hold?',
    answer: 'Our data center engineers hold a combination of vendor-specific and vendor-neutral certifications relevant to the disciplines they practise. For server virtualization, our team holds VMware VCP (vSphere), Microsoft MCSE (Server Infrastructure), and Proxmox certifications. For UPS and power systems, engineers are trained and certified by Eaton, APC by Schneider Electric, and Vertiv on the specific product families we deploy and service. For structured cabling and data center design, engineers hold BICSI RCDD (Registered Communications Distribution Designer) qualifications and vendor certifications from Panduit and CommScope. For data center operations, relevant Uptime Institute Accredited Tier Designer training has been completed by senior architects. We also maintain OEM authorisations from our key hardware vendors, which ensures warranty repairs and firmware updates are performed to manufacturer specifications rather than voiding equipment warranties.',
  },
  {
    question: 'How long does a data center build or fit-out typically take?',
    answer: 'The timeline for a data center build depends heavily on the scope of civil and electrical works required, the size of the facility, and equipment lead times from vendors. For a small to medium server room fit-out within an existing building — 10 to 40 rack spaces, new UPS and cooling systems, structured cabling, and access control — a realistic timeline is 8 to 14 weeks from design sign-off to handover. This includes 2 to 3 weeks for detailed design and procurement, 4 to 6 weeks for civil and electrical works, and 2 to 3 weeks for IT infrastructure installation and commissioning. Larger facilities or those requiring significant civil works, generator installations, or raised floor systems extend the timeline accordingly. Equipment lead times from vendors can be the critical path item, particularly for UPS systems and precision cooling units, so we initiate procurement early in the design phase to avoid delays that push the overall schedule.',
  },
]

export default function DataCenterPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Data Center Services' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#0EA5E9,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: '#0EA5E9' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0EA5E9' }}>Data Center Services</span>
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white mb-6">
              Data Center Design,{' '}
              <span style={{ color: '#0EA5E9' }}>Build &amp; Management for Pakistan Businesses.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              Your data center is the physical core of every digital service your business delivers. A poorly designed server room creates outages, overheats equipment, and constrains growth at the worst possible moments. Infraspine designs, builds, and manages TIA-942 compliant data center facilities and server rooms across Pakistan — from structured cabling and precision cooling to UPS power systems, server virtualization, and 24/7 remote hands support. We engineer for reliability from day one so that infrastructure is never the reason your business stops.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-4 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[24px] font-black mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[11px] font-semibold leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#0EA5E9', color: '#fff' }}>
                Book a Free Site Assessment <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Get a Data Center Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-16 sm:py-20" style={{ background: '#F0F9FF' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#0EA5E9' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0EA5E9' }}>Data Center Capabilities</span>
              <div className="h-px w-6" style={{ background: '#0EA5E9' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Core Data Center Service Areas
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              End-to-end data center expertise from initial site design through ongoing management, virtualization, power, cooling, and full facility migration.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map(cap => (
              <div key={cap.title}
                className="bg-white rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: '#BAE6FD' }}>
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

      <FAQAccordion faqs={FAQS} accent="#0EA5E9"
        title="Data Center Questions Answered"
        subtitle="Common questions from organisations planning a server room build, upgrade, or migration." />

      <CTABanner
        heading="Ready to Build or Upgrade Your Data Center?"
        subheading="Book a free site assessment and let our engineers evaluate your current facility, identify risks, and recommend a design that meets your reliability and growth requirements."
        primaryCTA={{ label: 'Book a Free Site Assessment', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
