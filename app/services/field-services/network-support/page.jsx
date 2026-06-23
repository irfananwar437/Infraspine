import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Network, Settings, Wifi, Search, RefreshCw, Zap,
  ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'On-Site Network Support Pakistan | Field Network Engineers',
  description: 'On-site network troubleshooting, switch and router configuration, cabling fault finding, and connectivity restoration across Pakistan. 4hr response, 99.2% uptime maintained.',
  alternates: { canonical: 'https://www.infraspine.com/services/field-services/network-support' },
  openGraph: {
    title: 'On-Site Network Support Pakistan | Field Network Engineers | Infraspine',
    description: 'On-site network troubleshooting and connectivity restoration across Pakistan with 4-hour response.',
    url: 'https://www.infraspine.com/services/field-services/network-support',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'On-Site Network Support',
  name: 'Infraspine On-Site Network Support Pakistan',
  description: 'On-site network troubleshooting, switch and router configuration, cabling fault finding, and connectivity restoration across Pakistan.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/field-services/network-support',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '4hr', label: 'On-Site Response', color: '#0891B2' },
  { value: '99.2%', label: 'Network Uptime Maintained', color: '#2563EB' },
  { value: '300+', label: 'Devices Supported', color: '#7C3AED' },
  { value: 'Nationwide', label: 'Coverage', color: '#16A34A' },
]

const CAPABILITIES = [
  {
    icon: Network,
    title: 'Network Fault Diagnosis',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Network faults are among the most disruptive IT incidents an organisation can experience, because they typically affect every user simultaneously rather than one individual at a time. The challenge of network fault diagnosis is that the symptoms — users unable to access applications, printers offline, VoIP calls dropping — often give little direct indication of the root cause, which may lie anywhere in the network stack from physical cabling through switching infrastructure to routing configuration. Our field network engineers apply a structured diagnostic methodology: working systematically from the physical layer upward, using cable testers, managed switch diagnostics, packet capture tools, and network monitoring data to isolate the fault to a specific component or configuration. This structured approach eliminates the time wasted replacing parts that are not faulty and leads directly to the root cause — enabling faster resolution and preventing recurrence.',
    points: [
      'Structured OSI-layer fault diagnosis from physical through application layer',
      'Cable testing, switch diagnostics, and packet capture tooling on-site',
      'Root cause identification rather than symptomatic quick fixes',
      'Fault documentation with root cause analysis and prevention recommendations',
    ],
  },
  {
    icon: Settings,
    title: 'Switch & Router Configuration',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Network switches and routers are the backbone of your infrastructure, and their configuration determines the performance, security, and resilience of your network. Misconfigured switching — incorrect VLAN assignments, spanning tree misconfigurations, or trunk link failures — can cause connectivity loss and network loops that are difficult to diagnose without deep networking expertise. Our field network engineers are certified in the major enterprise networking platforms and can configure, reconfigure, and troubleshoot switch and router deployments on-site. Common tasks include setting up new VLAN segments for departmental segregation, configuring port security and 802.1X authentication, optimising spanning tree for resilience, deploying new switching infrastructure, and restoring configuration after a device failure or replacement. All configuration changes are documented and a running configuration backup is taken after every change.',
    points: [
      'VLAN configuration, inter-VLAN routing, and network segmentation',
      'Spanning tree optimisation and loop prevention configuration',
      'Port security, 802.1X authentication, and access control list deployment',
      'Post-change configuration backup and documentation',
    ],
  },
  {
    icon: Wifi,
    title: 'Wireless Troubleshooting',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Wireless network issues present a unique diagnostic challenge: the symptoms are often intermittent, the causes are sometimes environmental rather than configuration-based, and users typically have limited tolerance for a wireless network that is slow or unreliable. Our wireless troubleshooting service covers the full range of wireless problems: clients unable to associate, poor signal strength in specific areas, channel contention causing throughput degradation, roaming failures between access points, DHCP exhaustion, and authentication problems with corporate wireless networks. Our engineers use professional wireless analysis tools to survey the RF environment, identify sources of interference, assess channel utilisation, and map signal coverage — providing an evidence base that drives precise remediation rather than guesswork. For recurring or complex wireless issues, we conduct a full wireless site survey and produce a remediation plan.',
    points: [
      'Professional RF analysis tools for signal, interference, and channel assessment',
      'Association, roaming, and authentication failure troubleshooting',
      'DHCP and IP addressing issue resolution in wireless environments',
      'Coverage gap identification and remediation recommendations',
    ],
  },
  {
    icon: Search,
    title: 'Cabling Fault Finding',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Physical cabling faults are an underappreciated source of network reliability problems. A partially damaged cable can produce intermittent connectivity issues that are notoriously difficult to diagnose because the fault does not appear consistently — the cable passes a basic continuity check but fails under load or at certain temperatures. Our field engineers carry professional cable testing equipment including TDR (Time Domain Reflectometry) cable testers capable of identifying faults at the exact distance along a cable run, distinguishing between open circuits, short circuits, impedance mismatches, and crosstalk issues. We support both copper structured cabling (Cat5e, Cat6, Cat6A) and fibre optic cabling (multimode and single-mode), with power-over-Ethernet testing capability for PoE-powered devices. When a fault is found, we repair or replace the affected cable section and re-test to confirm resolution before closing the job.',
    points: [
      'TDR cable testing for precise fault location in copper and fibre runs',
      'Cat5e, Cat6, Cat6A copper and multimode and single-mode fibre support',
      'PoE testing for powered devices including access points and IP phones',
      'Repair or replacement of damaged cable sections with post-repair test certification',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Network Device Replacement',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'When a network device fails — a switch stops forwarding traffic, a router loses its configuration, or a firewall\'s CPU reaches 100% and becomes unresponsive — the priority is rapid replacement with a correctly configured substitute. Replacing a network device without the configuration means the replacement hardware does not work as expected, extending the outage beyond the time needed for physical swap. Our network device replacement service covers the complete process: diagnosing the failure and confirming hardware fault, dispatching replacement hardware from our spares inventory, restoring the configuration from backup or recreating it from documentation, and verifying connectivity before site sign-off. For firewall replacements, we involve our network security team to ensure security policies, NAT rules, and VPN configurations are accurately restored. We maintain spares for the most widely deployed enterprise network device models in our regional inventory.',
    points: [
      'Emergency replacement from regional spares inventory for rapid deployment',
      'Configuration restoration from backup or documentation on replacement hardware',
      'Firewall replacement with security policy, NAT, and VPN configuration restore',
      'Connectivity verification across all network segments before sign-off',
    ],
  },
  {
    icon: Zap,
    title: 'Connectivity Restoration',
    color: '#EA580C',
    bg: '#FFF7ED',
    desc: 'A complete loss of network connectivity — whether caused by a failed WAN link, a misconfigured core switch, a failed uplink, or a routing problem — is a P1 incident requiring the fastest possible response. Our connectivity restoration service is designed for exactly this scenario: a dedicated escalation path that routes network outage calls to our senior network engineers immediately, bypassing standard triage to accelerate response. Our engineers arrive on-site with pre-staged tooling and documented network topologies for contracted clients, enabling them to begin diagnostic work the moment they arrive rather than spending time understanding the environment from scratch. Where a WAN circuit issue is involved, we coordinate with your ISP or MPLS provider on your behalf, providing technical liaison and escalation support to accelerate their response. Our target is to restore connectivity within two hours of on-site arrival for the majority of network outage scenarios.',
    points: [
      'Priority escalation path for P1 network outage incidents',
      'Pre-staged site documentation for contracted clients enabling immediate diagnosis',
      'ISP and MPLS provider technical liaison and escalation management',
      'Two-hour connectivity restoration target from on-site arrival',
    ],
  },
]

const FAQS = [
  {
    question: 'What network hardware do your engineers support?',
    answer: 'Our field network engineers are certified and experienced across the major enterprise networking platforms deployed in Pakistan. This includes Cisco switching and routing (Catalyst, Nexus, ASR, ISR platforms), Juniper (EX, QFX, MX series), HPE Aruba switching and wireless, Fortinet firewalls and SD-WAN, Palo Alto Networks firewalls, Ubiquiti UniFi for SMB environments, MikroTik routers and switches, and TP-Link Omada managed switching. For specialist or unusual hardware outside our standard competency, we will advise you at the point of enquiry and, if necessary, arrange for a vendor field engineer to attend with our coordination support.',
  },
  {
    question: 'How quickly can you restore network connectivity?',
    answer: 'For contracted clients experiencing a complete network outage (P1 incident), our target is an engineer on-site within four hours of the call being logged. Once on-site, our target is to restore connectivity within two hours for the majority of network outage scenarios — making a total outage-to-restoration time of under six hours in typical cases. The actual restoration time depends on the nature and complexity of the fault: a failed switch that can be replaced from our spares inventory with configuration restored from backup will typically resolve faster than a complex routing issue requiring analysis of the entire network topology. We provide regular status updates to your stakeholders throughout the restoration process.',
  },
  {
    question: 'Do you support wireless networks?',
    answer: 'Yes. Our field network engineers provide troubleshooting and support for enterprise wireless networks including Cisco Meraki, HPE Aruba, Ubiquiti UniFi, Ruckus, and Extreme Networks platforms. Wireless support covers access point fault diagnosis and replacement, controller configuration and firmware updates, SSID and VLAN configuration, wireless security settings including WPA3, 802.1X, and RADIUS integration, and RF environment troubleshooting using professional wireless analysis tools. For new wireless deployments or significant expansions, we recommend a wireless site survey to plan access point placement — see our dedicated WiFi Services page for details.',
  },
  {
    question: 'Can you reconfigure network equipment after an office move?',
    answer: 'Yes, and we strongly recommend involving our network team in office relocation planning before the move, not just after it. Pre-move planning allows us to confirm that the new premises has the correct cabling infrastructure, that the switch and router configurations are updated to reflect the new network topology, and that all IP addressing and VLAN assignments are correct for the new environment before any equipment is physically moved. On the day of the move, our engineers attend the new premises to supervise the reconnection of network infrastructure and verify connectivity systematically before users arrive. Attempting to reconfigure network equipment during a live relocation without pre-planning is a common cause of move-day connectivity failures.',
  },
  {
    question: 'Do you provide emergency network support?',
    answer: 'Yes. Emergency network support is available 24/7 under our extended coverage contracts. If your network goes down outside of business hours, you call our 24/7 service desk, which triages the incident, confirms the priority level, and dispatches an on-call network engineer. Our P1 response commitment — four hours to on-site — applies around the clock for clients on 24/7 contracts. For organisations not on a 24/7 contract, emergency call-out is available on a time-and-materials basis with a best-endeavours response time depending on engineer availability. We strongly recommend that organisations operating critical infrastructure or time-sensitive operations take a 24/7 contract to ensure a committed emergency response.',
  },
]

export default function NetworkSupportPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Field Services', href: '/services/field-services' },
        { label: 'Network Support', href: '/services/field-services/network-support' },
      ]} bg="#00101a" />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#00101a' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#0891B2,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#0891B2' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0891B2' }}>Network Support</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              On-Site Network Support —{' '}
              <span style={{ color: '#0891B2' }}>Connectivity Restored Fast.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Network outages affect every user simultaneously and cost your business by the minute. Infraspine\'s field network engineers provide on-site diagnosis, configuration, cabling fault finding, and device replacement with a four-hour response SLA and a target to restore connectivity within two hours of arrival — maintaining 99.2% network uptime across our supported estate.
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
                style={{ background: '#0891B2', color: '#fff' }}>
                Get Network Support <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Emergency Network Call
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
                <div className="h-px w-6" style={{ background: '#0891B2' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0891B2' }}>Why Specialist Network Support Matters</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Network Faults Require Network Specialists, Not Generalists
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Network troubleshooting is one of the most technically demanding disciplines in IT support. A network fault can manifest in hundreds of ways — from complete connectivity loss to intermittent performance degradation — and the root cause can lie anywhere from a damaged patch cable to a misconfigured routing protocol. Diagnosing network faults efficiently requires deep technical knowledge of networking protocols and a systematic approach that works from the physical layer upward.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                IT generalists attempting to troubleshoot complex network faults without this foundation often resort to trial-and-error remediation — replacing components one at a time in the hope of finding the faulty one, or making configuration changes without understanding their downstream impact. This approach extends outages and can introduce new problems while failing to resolve the original one.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Infraspine\'s field network engineers are trained and certified specialists who diagnose network faults methodically. They arrive on-site with the right tools, follow a structured diagnostic process, and resolve faults based on evidence rather than guesswork — consistently achieving faster resolution times than generalist IT support teams.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#0891B2', text: 'Certified network engineers, not generalist IT staff' },
                  { color: '#2563EB', text: 'Structured diagnostic methodology from physical to application layer' },
                  { color: '#7C3AED', text: 'Professional cable testing, packet capture, and RF analysis tools' },
                  { color: '#16A34A', text: '99.2% network uptime maintained across supported estate' },
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

            <div className="rounded-2xl border p-8" style={{ background: '#ECFEFF', borderColor: '#A5F3FC' }}>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>Network Support Service Summary</p>
              <div className="space-y-4">
                {[
                  { label: 'On-Site Response SLA', value: '4 hours' },
                  { label: 'Connectivity Restoration Target', value: '2 hours on-site' },
                  { label: 'Network Uptime Maintained', value: '99.2%' },
                  { label: 'Devices Supported', value: '300+' },
                  { label: 'Emergency Coverage', value: '24/7 available' },
                  { label: 'Coverage', value: 'Nationwide Pakistan' },
                ].map(p => (
                  <div key={p.label} className="flex items-center justify-between py-2 border-b last:border-0 text-[13px]" style={{ borderColor: '#A5F3FC' }}>
                    <div className="font-semibold" style={{ color: '#0A1628' }}>{p.label}</div>
                    <div className="font-bold" style={{ color: '#0891B2' }}>{p.value}</div>
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
              <div className="h-px w-6" style={{ background: '#0891B2' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0891B2' }}>Network Support Capabilities</span>
              <div className="h-px w-6" style={{ background: '#0891B2' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Network Support Service Areas
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From fault diagnosis and cable testing through switch configuration to emergency connectivity restoration.
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

      <FAQAccordion faqs={FAQS} accent="#0891B2"
        title="Network Support Questions Answered"
        subtitle="Common questions from organisations evaluating on-site network support services." />

      <CTABanner
        heading="Network Down? Our Engineers Are Ready"
        subheading="Four-hour response SLA. Two-hour connectivity restoration target. Get Infraspine network engineers on-site now."
        primaryCTA={{ label: 'Get Network Support', href: '/contact-us' }}
        secondaryCTA={{ label: 'Emergency Line', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
