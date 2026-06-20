import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import { Network, Wifi, Server, Shield, Activity, Layers, CheckCircle, ArrowRight, Globe } from 'lucide-react'

export const metadata = {
  title: 'Network Infrastructure Services Pakistan — LAN, WAN, SD-WAN & WiFi | Infraspine',
  description: 'Enterprise network design, LAN/WAN implementation, SD-WAN deployment, WiFi 6, structured cabling, and 24/7 NOC monitoring. Infraspine builds networks that scale with your business.',
  alternates: { canonical: 'https://www.infraspine.com/services/network-infrastructure' },
  openGraph: {
    title: 'Network Infrastructure Services Pakistan — LAN, WAN, SD-WAN & WiFi | Infraspine',
    description: 'Enterprise LAN/WAN, SD-WAN, WiFi 6, structured cabling, and NOC monitoring from Infraspine.',
    url: 'https://www.infraspine.com/services/network-infrastructure',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Network Infrastructure Services',
  name: 'Infraspine Network Infrastructure Services',
  description: 'Enterprise network design and deployment including LAN, WAN, SD-WAN, WiFi 6, structured cabling, and 24/7 NOC monitoring.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/network-infrastructure',
}

const STATS = [
  { value: '99.99%', label: 'network uptime SLA',           color: '#2563EB' },
  { value: '<5 min', label: 'mean time to detect fault',     color: '#00C853' },
  { value: '40%',    label: 'average WAN cost reduction',    color: '#D97706' },
  { value: '200+',   label: 'network deployments delivered', color: '#7C3AED' },
]

const CAPABILITIES = [
  {
    icon: Network,
    title: 'LAN Design & Deployment',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Enterprise LAN architecture designed for the way your business actually operates — not a generic template. We plan switching hierarchy (core/distribution/access layers), VLAN segmentation by department or function, spanning tree configuration, port security policies, and QoS to prioritise voice and video traffic. Cisco Catalyst and Meraki switch deployments are fully documented and handed over with network diagrams and configuration backups stored in your naming conventions.',
    points: ['Cisco Catalyst, Meraki, and HP Aruba switching platforms', 'VLAN segmentation and 802.1X port authentication', 'QoS policy for voice, video, and business-critical applications', 'Full network diagrams and configuration documentation at handover'],
  },
  {
    icon: Globe,
    title: 'WAN & SD-WAN',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'Traditional MPLS is expensive and inflexible for modern cloud-first workloads. SD-WAN using Fortinet FortiGate or Cisco Meraki delivers enterprise-grade WAN connectivity over standard broadband and 4G/5G links, with automatic failover between links, application-aware traffic steering, and central policy management across all your branches from a single dashboard. Average clients reduce WAN costs by 35–50% while improving performance for cloud-hosted applications like Microsoft 365 and Zoom.',
    points: ['Fortinet FortiGate SD-WAN and Cisco Meraki MX deployment', 'Dual-link failover (fibre + 4G/5G) for always-on connectivity', 'Application-aware traffic steering for Microsoft 365, Zoom, and ERP', 'Central policy management across all branch offices from one portal'],
  },
  {
    icon: Wifi,
    title: 'WiFi 6 & Wireless Design',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Dense wireless environments — offices, warehouses, hospitals, retail floors — require professional RF planning, not a consumer access point dropped in each corner of the office. Infraspine performs RF site surveys to map signal coverage, interference sources, and client density before any hardware is ordered. We deploy Cisco Catalyst Center, Meraki, or Aruba wireless infrastructure with band steering, fast roaming optimisation, WPA3 security, and guest network isolation included as standard.',
    points: ['RF site survey before any hardware is ordered or purchased', 'Cisco Catalyst Center, Meraki, or Aruba WiFi 6 access points', 'Band steering, fast roaming (802.11r/k/v), and WPA3 security', 'Guest network isolation with captive portal and per-SSID bandwidth limits'],
  },
  {
    icon: Layers,
    title: 'Structured Cabling',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Cables are permanent infrastructure — every corner cut during cabling becomes a recurring problem for the full lifetime of the building. We install Cat 6A horizontal runs, OS2 fibre backbone between MDF and IDF locations, patch panels and cable management in locked, labelled racks, and every single link is tested and certified to TIA-568 standards. Full test reports and floor plan port labelling documentation are handed over digitally at project completion.',
    points: ['Cat 6A horizontal runs and OS2 single-mode fibre backbone', 'Certified to TIA-568 with individual link test reports', 'Rack installation with cable management, labelling, and documentation', 'MDF and IDF design including power and cooling specification'],
  },
  {
    icon: Activity,
    title: '24/7 Network Monitoring & NOC',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Round-the-clock network monitoring using PRTG Network Monitor, Zabbix, or SolarWinds NPM with SNMP polling, NetFlow traffic analysis, and synthetic transaction monitoring for critical applications. Every link, switch, access point, and router is monitored continuously. When a fault is detected, our NOC team receives an automated alert and begins diagnosis before your users even notice a problem. Monthly reports detail availability per device, top bandwidth consumers, and capacity trend data.',
    points: ['PRTG, Zabbix, or SolarWinds NPM monitoring platform deployment', '24/7 NOC alert response and fault escalation with response SLAs', 'NetFlow traffic analysis and bandwidth top-talker reports', 'Monthly capacity trend reports with proactive upgrade recommendations'],
  },
  {
    icon: Shield,
    title: 'Network Security & Segmentation',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Flat networks where every device talks freely to every other device are the primary reason ransomware spreads through entire organisations in under an hour. Infraspine designs micro-segmented networks where production servers, user workstations, IoT devices, printers, and guest users sit in separate zones with explicit firewall rules controlling inter-zone traffic. NAC using Cisco ISE or Aruba ClearPass enforces device health compliance before any device is granted network access.',
    points: ['Micro-segmentation with VLAN and firewall security zone design', 'Cisco ISE or Aruba ClearPass NAC for device compliance enforcement', 'IoT and OT network isolation from corporate resources', '802.1X certificate-based authentication for all endpoints'],
  },
]

const FAQS = [
  {
    question: 'How long does a typical network infrastructure project take?',
    answer: 'A small-to-medium office network (50–200 users, single site) typically takes 4–8 weeks from the initial assessment through to full go-live. This includes a 1-week discovery and design phase, 1 week for equipment procurement, 2–4 weeks of installation and configuration, and a 1-week testing and handover phase. Multi-site or campus deployments scale proportionally. A detailed project plan is provided at the end of the discovery phase so you know exactly what to expect at each stage.',
  },
  {
    question: 'Can you upgrade our network without disrupting business hours operations?',
    answer: 'Yes. Planned network upgrades are almost always scheduled outside business hours — evenings, weekends, or agreed maintenance windows. For live cutovers like replacing core switching, we pre-stage all configuration and test new equipment in a lab environment before the cutover night. This reduces the actual cutover window to 2–3 hours rather than a full business day. We provide a written rollback plan for every cutover so the decision to proceed is yours.',
  },
  {
    question: 'What is the difference between SD-WAN and traditional MPLS?',
    answer: 'MPLS is a dedicated private circuit with guaranteed bandwidth and predictable latency — reliable but expensive and inflexible. SD-WAN uses standard broadband or 4G/5G links with an intelligent overlay that monitors link quality in real time and routes traffic dynamically to the best available path. For cloud-hosted applications like Microsoft 365 and Zoom, SD-WAN typically outperforms MPLS because traffic routes directly to the internet instead of backhauling through a central hub. SD-WAN costs 35–50% less than equivalent MPLS circuits.',
  },
  {
    question: 'Do you provide ongoing network support after the project is complete?',
    answer: 'Yes. We offer managed network services including 24/7 NOC monitoring, firmware and security patch management, IMAC (installs, moves, additions, changes) support, and quarterly network health reviews. Clients on a managed service agreement receive priority response times and a dedicated technical account manager. We also support time-and-materials arrangements for clients who prefer to call as needed rather than commit to a monthly contract.',
  },
  {
    question: 'What documentation do you provide at project handover?',
    answer: 'Comprehensive documentation is a standard deliverable on every network project. You receive: full network topology diagrams (physical and logical), IP address plans and VLAN register, switch and firewall configuration backups, TIA-568 cable test reports and port labelling guides, and operational runbooks for common tasks. A handover session with your IT team is included so your staff can manage day-to-day operations without depending on us for routine tasks.',
  },
  {
    question: 'Can you work alongside our existing IT team or a third-party MSP?',
    answer: 'Absolutely. We regularly work as a specialist subcontractor to internal IT teams and other MSPs that need Cisco- or Aruba-certified network expertise. We can take full ownership of the network layer while your internal team manages servers, cloud, or end-user support. We document everything to your standards and can work within your existing change management, ticketing, and approval processes with no friction.',
  },
]

export default function NetworkInfrastructurePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Network Infrastructure' },
      ]} />

      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-14 sm:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: '#2563EB' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>Network Infrastructure</span>
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white mb-6">
              Enterprise Networks Built<br />
              <span style={{ color: '#2563EB' }}>to Last and to Perform.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              Your network is the foundation of every technology investment your business makes. Slow, unreliable, or poorly designed networks reduce productivity, inflate IT support costs, and create security vulnerabilities attackers actively exploit. Infraspine designs, deploys, and manages enterprise networks — from structured cabling through to SD-WAN and 24/7 NOC monitoring — that are fast, resilient, and built to scale with your business.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-4 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[20px] font-black mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[10.5px] leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <Link href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
              style={{ background: '#2563EB', color: '#fff' }}>
              Get a Free Network Assessment <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Business case */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="h-px w-6" style={{ background: '#2563EB' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>Why Networks Fail</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Most Business Networks Are Built to Fit a Budget, Not a Business
              </h2>
              <p className="text-[15px] leading-relaxed mb-5" style={{ color: '#64748B' }}>
                The most common network problems we see — slow WiFi, VPN failures, internet dropouts, the server feels slow — are almost never hardware problems. They are design problems. A network built with consumer-grade switches, no VLAN segmentation, inadequate cabling, and no monitoring will fail repeatedly regardless of how many times you replace the router.
              </p>
              <p className="text-[15px] leading-relaxed mb-6" style={{ color: '#64748B' }}>
                Every Infraspine network engagement starts with a thorough assessment of your current environment before a single piece of hardware is recommended. We document what you have, what problems it causes, and what a properly designed replacement looks like — with full justification for every architectural decision. You get a written design report first; implementation proceeds only when you are satisfied with the plan.
              </p>
              {['Assessment and design before any hardware is purchased',
                'Enterprise-grade hardware sized to your actual user density',
                'Segmentation that limits the blast radius of any security incident',
                'Continuous monitoring so you hear about problems before your users do',
                'Documentation your team can actually use to manage the network day-to-day',
              ].map(p => (
                <div key={p} className="flex items-center gap-3 mb-2.5">
                  <CheckCircle size={15} style={{ color: '#2563EB', flexShrink: 0 }} />
                  <span className="text-[14px]" style={{ color: '#374151' }}>{p}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {[
                { problem: 'Consumer-grade switches with no QoS',           impact: 'Voice calls drop whenever someone downloads a large file',          color: '#DC2626' },
                { problem: 'Flat network with no VLAN segmentation',         impact: 'Ransomware spreads to every device on the network in minutes',      color: '#D97706' },
                { problem: 'No wireless RF site survey',                     impact: 'Dead zones and dropped connections across the office floor',         color: '#7C3AED' },
                { problem: 'No network monitoring in place',                 impact: 'Outages are discovered when users call the help desk',               color: '#0891B2' },
                { problem: 'Single ISP with no failover link',               impact: 'One ISP fault takes the entire business offline',                    color: '#DC2626' },
                { problem: 'No configuration backups or documentation',      impact: 'Any technician change risks permanently breaking the network',       color: '#D97706' },
              ].map(({ problem, impact, color }) => (
                <div key={problem} className="rounded-xl p-4 border bg-white" style={{ borderColor: '#E2E8F0', boxShadow: '0 2px 10px rgba(10,22,40,0.04)' }}>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: color }} />
                    <div>
                      <p className="text-[13px] font-bold mb-0.5" style={{ color: '#0A1628' }}>{problem}</p>
                      <p className="text-[12px]" style={{ color: '#64748B' }}>→ {impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black mb-4" style={{ color: '#0A1628' }}>Our Network Services</h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              End-to-end network services from physical structured cabling through to SD-WAN and round-the-clock NOC monitoring.
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

      <section className="py-12 bg-white border-y" style={{ borderColor: '#E2E8F0' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-7" style={{ color: '#94A3B8' }}>Network Vendors We Deploy & Support</p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {['Cisco Catalyst', 'Cisco Meraki', 'Cisco ISE', 'Fortinet FortiGate', 'Fortinet SD-WAN', 'Aruba Networks', 'Aruba ClearPass', 'HP ProCurve', 'Ubiquiti UniFi', 'PRTG Network Monitor', 'Zabbix', 'SolarWinds NPM', 'Cisco Catalyst Center'].map(t => (
              <span key={t} className="px-3.5 py-1.5 rounded-full text-[12px] font-semibold border"
                style={{ background: '#F8FAFC', borderColor: '#E2E8F0', color: '#475569' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        title="Network Infrastructure — Frequently Asked Questions"
        subtitle="Common questions about enterprise network design, deployment, and ongoing support."
        faqs={FAQS}
      />

      <CTABanner
        heading="Start With a Free Network Assessment"
        subheading="We document your current network, identify your top 3 performance and security risks, and recommend a prioritised roadmap — at no cost."
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
