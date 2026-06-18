import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Camera, Lock, Fingerprint, AlertTriangle, Monitor, Zap,
  CheckCircle, ArrowRight, Shield, Eye,
} from 'lucide-react'

export const metadata = {
  title: 'Physical Security Services Pakistan | Infraspine',
  description: 'Enterprise physical security in Pakistan: CCTV, access control, biometrics, alarm systems, and AI video analytics. 500+ installations, 99.8% uptime, 5-year warranty.',
  alternates: { canonical: 'https://www.infraspine.com/services/physical-security' },
  openGraph: {
    title: 'Physical Security Services Pakistan — CCTV, Access Control & Biometrics | Infraspine',
    description: 'Enterprise CCTV, access control, biometric systems, and alarm installation across Pakistan. 500+ deployments, 24/7 monitoring, 5-year warranty.',
    url: 'https://www.infraspine.com/services/physical-security',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Physical Security Services',
  name: 'Infraspine Physical Security Services',
  description: 'Enterprise physical security including CCTV surveillance, access control, biometric systems, alarm and intrusion detection, security control rooms, and AI-powered video analytics across Pakistan.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/physical-security',
  areaServed: { '@type': 'Country', name: 'Pakistan' },
}

const STATS = [
  { value: '500+',   label: 'installations completed',    color: '#7C3AED' },
  { value: '99.8%',  label: 'system uptime guaranteed',   color: '#00C853' },
  { value: '24/7',   label: 'remote monitoring coverage', color: '#2563EB' },
  { value: '5-Year', label: 'warranty on all systems',    color: '#D97706' },
]

const CAPABILITIES = [
  {
    icon: Camera,
    title: 'CCTV & IP Surveillance',
    color: '#DC2626',
    bg: '#FEF2F2',
    href: '/services/physical-security/cctv',
    isNew: false,
    desc: 'A professionally designed IP surveillance system is the cornerstone of physical security. We deploy high-definition cameras — from 2MP fixed domes to 4K PTZ units — across entrances, perimeters, car parks, warehouses, and sensitive internal zones. Every camera position is planned using site blueprints and field surveys to eliminate blind spots before installation begins. Our NVR and VMS configurations provide centralised recording with configurable retention periods of 7, 15, or 30 days, and encrypted remote viewing from any authorised device. We support Hikvision DeepInMind, Dahua WizSense, Axis P-series, and Bosch cameras depending on budget and environment.',
    points: [
      'Site survey and camera placement engineering for zero blind spots',
      'High-definition IP cameras from 2MP to 4K PTZ with IR night vision',
      'Centralised NVR/VMS with 7–30 day encrypted recording retention',
      'Secure remote live view and playback from mobile and desktop',
    ],
  },
  {
    icon: Lock,
    title: 'Access Control Systems',
    color: '#2563EB',
    bg: '#EFF6FF',
    href: '/services/physical-security/access-control',
    isNew: false,
    desc: 'Physical keys create unmanageable risk — lost keys require lock replacements, ex-employees can retain copies, and there is no audit trail of who entered where and when. Our electronic access control systems replace physical keys with smart cards, RFID fobs, PIN keypads, and biometric readers. Every entry and exit event is timestamped and logged for compliance reporting and incident investigation. We install door controllers, magnetic locks, electric strikes, and turnstiles, and configure access schedules at the individual, department, or role level. Multi-site organisations benefit from our centralised cloud or on-premises management platform that provides a single view across all locations.',
    points: [
      'Smart card, RFID, PIN, and biometric reader installation',
      'Magnetic locks, electric strikes, and turnstile integration',
      'Per-user access schedules with real-time override capability',
      'Full audit trail with timestamped access logs for every door',
    ],
  },
  {
    icon: Fingerprint,
    title: 'Biometric Systems',
    color: '#7C3AED',
    bg: '#F5F3FF',
    href: '/services/physical-security/biometrics',
    isNew: false,
    desc: 'Biometric terminals eliminate the most persistent problem in workforce management: identity fraud. Employees cannot share fingerprints or faces — every clock-in and access event is definitively tied to the individual present. We deploy fingerprint scanners, facial recognition terminals, and multi-modal devices that combine both modalities for high-security areas. Our implementations integrate with your HR and payroll software — including SAP, Oracle HCM, and local payroll systems — so attendance data flows automatically without manual re-entry. For organisations with hygiene or PPE requirements where fingerprint scanning is impractical, we deploy contactless face recognition terminals instead.',
    points: [
      'Fingerprint and facial recognition terminals for attendance and access',
      'Multi-modal biometric for high-security double-verification zones',
      'HR and payroll system integration with automated data export',
      'Contactless face recognition for hygiene-sensitive environments',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Alarm & Intrusion Detection',
    color: '#D97706',
    bg: '#FFFBEB',
    href: '/services/physical-security/alarm-systems',
    isNew: false,
    desc: 'Perimeter and interior alarm systems provide your first line of active defence — detecting intrusion attempts the moment they occur and triggering immediate response before damage is done. We design and install PIR motion sensors, door and window contacts, glass break detectors, vibration sensors, and beam sensors across perimeters and interior zones. All systems integrate with a central monitoring station for 24/7 professional response, and can be configured to notify security personnel by SMS, app notification, or auto-dial simultaneously. We work with Honeywell, Bosch, DSC, Paradox, and Ajax systems to suit commercial and industrial environments.',
    points: [
      'PIR motion sensors, door/window contacts, and glass break detectors',
      'Perimeter beam and vibration sensors for early-warning detection',
      'Central station integration for 24/7 professional monitoring and response',
      'SMS, app push, and auto-dial simultaneous alert delivery',
    ],
  },
  {
    icon: Monitor,
    title: 'Security Control Rooms',
    color: '#0891B2',
    bg: '#ECFEFF',
    href: '/services/physical-security',
    isNew: false,
    desc: 'A well-designed security control room is the operational nerve centre of your physical security estate. We design and fit purpose-built control rooms with multi-screen video wall configurations, ergonomic operator workstations, and integrated software platforms that consolidate camera feeds, access control events, alarm notifications, and intercom communications onto a single dashboard. Our control room designs follow BS EN 50132 and IEC 62676 standards and are optimised for operator alertness during long shifts. We also configure secondary monitoring stations and failover sites for organisations that require resilience against control room disruptions.',
    points: [
      'Multi-screen video wall design and hardware supply',
      'Integrated VMS, access control, and alarm management dashboard',
      'Ergonomic workstation design for long-shift operator performance',
      'Secondary monitoring station and failover site configuration',
    ],
  },
  {
    icon: Zap,
    title: 'Video Analytics & AI Detection',
    color: '#16A34A',
    bg: '#F0FDF4',
    href: '/services/physical-security',
    isNew: true,
    desc: 'Modern IP cameras and VMS platforms support AI-powered video analytics that transform passive CCTV into an active detection system — analysing footage in real time and alerting operators to specific behaviours without requiring constant manual monitoring. We configure and deploy analytics including perimeter tripwire detection, loitering alerts, crowd density monitoring, left-object and removed-object detection, licence plate recognition (LPR/ANPR), and hard-hat and PPE compliance detection for industrial sites. AI analytics dramatically reduce false alarms compared to traditional motion detection by distinguishing between relevant activity and environmental noise such as foliage movement and lighting changes.',
    points: [
      'Perimeter tripwire, loitering, and intrusion zone detection',
      'Licence plate recognition (LPR/ANPR) for car park and gate management',
      'PPE and hard-hat compliance detection for industrial sites',
      'Crowd density and queue monitoring for retail and public venues',
    ],
  },
]

const VENDORS = [
  'Hikvision', 'Dahua', 'Bosch', 'Axis', 'Genetec',
  'ZKTeco', 'Suprema', 'HID Global', 'Honeywell', 'Milestone VMS',
]

const FAQS = [
  {
    question: 'What is the difference between IP cameras and analogue CCTV cameras?',
    answer: 'IP (network) cameras transmit digital video data over a standard Ethernet network to a Network Video Recorder (NVR) or directly to a VMS server. They offer significantly higher resolution — typically 2MP to 4K — precise control over compression, and the ability to run AI video analytics locally on the camera or at the NVR. Analogue cameras send a lower-resolution signal over coaxial cable to a Digital Video Recorder (DVR). For new installations we always recommend IP cameras; for existing analogue systems we can advise on whether a hybrid upgrade or full IP migration makes more financial sense given your recording retention and resolution requirements.',
  },
  {
    question: 'How many cameras do we need and where should they be placed?',
    answer: 'There is no universal answer — camera count and placement depend on your site layout, the number of entry and exit points, indoor versus outdoor coverage requirements, lighting conditions, and what you need the footage for (real-time monitoring, post-incident review, or both). We conduct a physical site survey before every project, produce a camera coverage plan showing all fields of view, and confirm there are no blind spots before equipment is ordered. This survey is provided free of charge as part of the project scoping process.',
  },
  {
    question: 'Can your access control system integrate with our HR and payroll software?',
    answer: 'Yes. Our access control and biometric attendance platforms support integration with the most common HR and payroll systems in Pakistan, including SAP HCM, Oracle Fusion, Microsoft Dynamics 365, Odoo, and locally developed payroll software through CSV export or direct API integration. We map the access control user database to your HR employee records so joiner, mover, and leaver processes can be automated — when an employee is terminated in HR the system can automatically revoke access across all doors and locations within minutes rather than relying on manual badge deactivation.',
  },
  {
    question: 'What happens if the internet goes down — will the system still work?',
    answer: 'All of our physical security systems are designed to operate independently of internet connectivity. CCTV cameras record locally to on-premises NVRs and continue capturing footage regardless of internet availability. Access control door controllers store their access rules locally and make decisions autonomously — doors continue to grant or deny access based on the last synchronised policy even when the management server is unreachable. Alarm panels operate on their own internal processing. Remote visibility and cloud management features require connectivity, but local security operations are never dependent on an internet connection.',
  },
  {
    question: 'How long is footage stored and can it be retrieved after an incident?',
    answer: 'Footage retention periods are configurable based on your storage capacity and compliance requirements. Most of our clients configure 15 to 30 days of continuous recording retention. For high-sensitivity areas such as server rooms, vaults, or cash handling areas, we recommend 30 to 90 days. Storage is calculated based on camera resolution, frame rate, compression codec (H.265 offers approximately 50% better compression than H.264 at the same quality), and the number of hours per day of activity. Footage retrieval is straightforward through the VMS interface — our team can train your security staff to export specific time-range clips for police or insurance purposes.',
  },
  {
    question: 'Do you provide maintenance contracts for installed systems?',
    answer: 'Yes. All physical security installations include a standard 12-month warranty covering parts and labour for any system faults. We offer annual maintenance contracts (AMC) that extend this coverage and include scheduled preventive maintenance visits, lens cleaning, firmware updates, battery testing on alarm panels, and priority response SLAs for critical faults. Our AMC clients also receive discounted rates on any system expansions or additional installations. We recommend AMCs for any installation that is part of a regulated environment or where security continuity is operationally critical.',
  },
]

export default function PhysicalSecurityPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Physical Security' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        {/* Purple glow */}
        <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.07]"
          style={{ background: 'radial-gradient(ellipse at top right, #7C3AED, transparent 60%)' }}
          aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: '#7C3AED' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#7C3AED' }}>Physical Security</span>
            </div>
            <h1 className="text-[clamp(2.1rem,4.5vw,3.7rem)] font-black leading-[1.05] tracking-tight text-white mb-6">
              Enterprise Physical Security Systems —{' '}
              <span style={{ color: '#7C3AED' }}>Protecting People, Assets, and Premises.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              From a single office camera to a multi-site security estate spanning hundreds of cameras, dozens of access-controlled doors, and biometric attendance across every location — Infraspine designs, installs, and maintains physical security systems that give you complete visibility and control over who is in your premises, what is happening there, and when.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-4 border"
                  style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[22px] font-black mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[10.5px] leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#7C3AED', color: '#fff' }}>
                Book a Free Security Survey <ArrowRight size={14} />
              </Link>
              <Link href="/request-quote"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '1.5px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Business Case ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="h-px w-6" style={{ background: '#7C3AED' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#7C3AED' }}>Why Physical Security Matters</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                The First Line of Defence — Before Any Digital Control Takes Effect
              </h2>
              <p className="text-[15px] leading-relaxed mb-5" style={{ color: '#64748B' }}>
                Cybersecurity dominates boardroom conversations, but the most direct and immediate financial losses still come from physical security failures. A tailgating employee holds the door for an unauthorised visitor who walks directly to an unattended workstation. A warehouse break-in removes stock worth hundreds of thousands of rupees in minutes. A disgruntled departing employee uses a retained access card on a weekend when no one is watching. Each of these scenarios bypasses every digital control you have invested in — because the attacker is already inside. Physical security is not a secondary consideration to digital security; it is the prerequisite that makes every other control effective.
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: '#64748B' }}>
                Effective physical security requires a layered approach that mirrors the defence-in-depth principles used in cybersecurity. Perimeter detection identifies threats before they reach your building. Access control systems ensure that only authorised individuals can enter specific zones. Biometric attendance and visitor management create accountability for every person on site. CCTV surveillance provides both deterrence and evidential-quality footage when incidents do occur. Alarm and intrusion systems trigger immediate response when any of the outer layers are breached. When these layers operate together and are monitored continuously, your premises become significantly harder to compromise — and significantly faster to respond to when incidents do occur. Infraspine designs physical security estates that integrate these layers into a coherent, manageable whole rather than a collection of disconnected point products.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl p-6 border" style={{ background: '#F5F3FF', borderColor: '#DDD6FE' }}>
                <p className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: '#7C3AED' }}>Physical Security Risk Indicators</p>
                <div className="space-y-3">
                  {[
                    { stat: '71%', detail: 'of commercial burglaries are undetected for over 10 minutes without alarms' },
                    { stat: '3x',  detail: 'reduction in theft incidents at organisations with visible camera coverage' },
                    { stat: '60%', detail: 'of access control breaches involve ex-employees with retained credentials' },
                    { stat: '85%', detail: 'of organisations report that physical security incidents go undetected without monitoring' },
                  ].map(({ stat, detail }) => (
                    <div key={stat} className="flex items-start gap-3 rounded-xl p-3 bg-white border" style={{ borderColor: '#DDD6FE' }}>
                      <span className="text-[18px] font-black flex-shrink-0" style={{ color: '#7C3AED' }}>{stat}</span>
                      <span className="text-[13px] leading-relaxed" style={{ color: '#64748B' }}>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-6 border" style={{ background: '#F0FDF4', borderColor: '#BBF7D0' }}>
                <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: '#16A34A' }}>Our Security Design Principles</p>
                <div className="space-y-2">
                  {[
                    'Layered detection: perimeter, boundary, interior, and asset-level',
                    'Every system operates independently of internet connectivity',
                    'All footage and access logs retained locally on-premises',
                    'Scalable architecture — start with one site, expand to many',
                    'Integration with cybersecurity and IT systems for unified SOC view',
                  ].map(p => (
                    <div key={p} className="flex items-start gap-2">
                      <CheckCircle size={13} style={{ color: '#16A34A', marginTop: 2, flexShrink: 0 }} />
                      <span className="text-[13px]" style={{ color: '#374151' }}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Physical Security Services
            </h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Six capability areas covering every layer of physical protection — from perimeter detection to AI-powered behavioural analytics.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map(cap => (
              <div key={cap.title} className="bg-white rounded-2xl border p-7 flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: '#E2E8F0', boxShadow: '0 4px 20px rgba(10,22,40,0.06)' }}>
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: cap.bg }}>
                    <cap.icon size={22} style={{ color: cap.color }} strokeWidth={1.5} />
                  </div>
                  {cap.isNew && (
                    <span className="text-[9px] font-black uppercase tracking-wide px-2 py-0.5 rounded-full"
                      style={{ background: '#B7FF58', color: '#0A1628' }}>NEW</span>
                  )}
                </div>
                <h3 className="text-[17px] font-black mb-3" style={{ color: '#0A1628' }}>{cap.title}</h3>
                <p className="text-[13.5px] leading-relaxed mb-5 flex-1" style={{ color: '#64748B' }}>{cap.desc}</p>
                <ul className="space-y-1.5 mb-6">
                  {cap.points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-[13px]" style={{ color: '#475569' }}>
                      <CheckCircle size={13} style={{ color: cap.color, marginTop: '2px', flexShrink: 0 }} />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link href={cap.href}
                  className="inline-flex items-center gap-1.5 text-[13px] font-bold transition-colors mt-auto"
                  style={{ color: cap.color }}
                  onMouseEnter={undefined}>
                  Learn More <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vendor strip ── */}
      <section className="py-12 bg-white border-y" style={{ borderColor: '#E2E8F0' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-7" style={{ color: '#94A3B8' }}>
            Certified Partners & Approved Vendors
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {VENDORS.map(v => (
              <span key={v}
                className="px-3.5 py-1.5 rounded-full text-[12px] font-semibold border"
                style={{ background: '#F8FAFC', borderColor: '#E2E8F0', color: '#475569' }}>
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        title="Physical Security — Frequently Asked Questions"
        subtitle="Answers to the most common questions before starting a physical security project."
        faqs={FAQS}
      />

      <CTABanner
        heading="Protect Your People, Assets, and Premises."
        subheading="Book a free physical security survey. Our engineers will assess your site, identify vulnerabilities, and provide a no-obligation system design and quotation."
        primaryCTA={{ label: 'Book a Free Survey', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
