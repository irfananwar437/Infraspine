import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  AlertTriangle, Shield, Monitor, Activity, Zap, Phone,
  CheckCircle, ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'Alarm & Intrusion Detection Systems Pakistan — Security Alarms',
  description: 'Professional alarm and intrusion detection installation across Pakistan. PIR sensors, perimeter detection, central monitoring station integration. Honeywell, Bosch, Ajax certified.',
  alternates: { canonical: 'https://www.infraspine.com/services/physical-security/alarm-systems' },
  openGraph: {
    title: 'Alarm & Intrusion Detection Systems Pakistan | Infraspine',
    description: 'Commercial and industrial alarm system design, installation, and 24/7 monitoring across Pakistan. PIR, perimeter, glass break, and central station integration.',
    url: 'https://www.infraspine.com/services/physical-security/alarm-systems',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Alarm & Intrusion Detection System Installation',
  name: 'Infraspine Alarm & Intrusion Detection Systems',
  description: 'Commercial and industrial alarm and intrusion detection system design, installation, and 24/7 central station monitoring across Pakistan. PIR, perimeter, glass break, and fire alarm integration.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/physical-security/alarm-systems',
}

const STATS = [
  { value: '500+',  label: 'alarm zones installed',          color: '#D97706' },
  { value: '<30s',  label: 'average alert response time',    color: '#DC2626' },
  { value: '99.9%', label: 'intrusion detection rate',       color: '#00C853' },
  { value: '24/7',  label: 'central monitoring station',     color: '#2563EB' },
]

const CAPABILITIES = [
  {
    icon: Shield,
    title: 'Perimeter Detection Systems',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Perimeter detection provides the outermost layer of your alarm system — detecting intruders before they reach your building, giving security personnel and police the maximum possible response window. We design and install perimeter detection systems using active infrared beam barriers, passive infrared (PIR) perimeter sensors, microwave barriers, and underground seismic detection cables depending on your site geometry, environmental conditions, and the threat model you are protecting against. Perimeter systems are zoned so that an alert immediately identifies which section of the boundary has been breached, allowing a faster and more targeted response. For high-security perimeters, we deploy combined microwave-PIR dual-technology sensors that require both technologies to trigger simultaneously — dramatically reducing false alarms caused by animals or environmental movement.',
    points: [
      'Active IR beam barriers and microwave sensors for outdoor perimeters',
      'Dual-technology sensors to reduce wildlife and environmental false alarms',
      'Zoned perimeter layout for precise breach location identification',
      'Underground seismic detection for high-security perimeter zones',
    ],
  },
  {
    icon: Activity,
    title: 'Motion Sensors & PIR Detectors',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Passive infrared motion detectors form the interior detection backbone of most commercial alarm systems, monitoring the thermal signature of movement across defined coverage areas. We install passive infrared (PIR), microwave, dual-technology, and curtain detectors depending on the coverage pattern required and the environmental factors in each zone. High-bay PIR detectors cover warehouse spaces up to 15 metres in height. Corridor curtain detectors create detection beams across door openings and corridors that catch movement without creating false alarms in adjacent spaces. Pet-immune PIR detectors prevent false alarms from animals under 20kg in environments where pets or small animals may be present. All detectors are positioned to overlap coverage zones, eliminating detection gaps between units.',
    points: [
      'Standard, dual-technology, and high-bay PIR detectors to suit environments',
      'Corridor curtain detectors for doorways and narrow passages',
      'Pet-immune PIR models for environments with animals under 20kg',
      'Overlapping coverage zones designed to eliminate detection gaps',
    ],
  },
  {
    icon: Zap,
    title: 'Glass Break & Vibration Detection',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Many commercial break-ins occur through glass — whether a smashed window, a drilled door glass panel, or an attacked skylight. Glass break detectors use acoustic analysis to identify the specific sound pattern of shattering glass, triggering the alarm immediately at the point of entry rather than waiting for a secondary motion detector to pick up the intruder inside the building. Vibration detectors are mounted directly on walls, ceilings, doors, and safes to detect the physical impact of drilling, cutting, or hammering that precedes access through solid materials. We combine glass break detectors and vibration detectors with door and window contacts to create a comprehensive first-entry detection layer that triggers before any intruder has successfully entered the protected space.',
    points: [
      'Acoustic glass break detectors with pattern analysis for reduced false alarms',
      'Detection range up to 9 metres per detector — minimising device count',
      'Vibration detectors on walls, safe doors, and high-value asset containers',
      'Combined with door/window contacts for first-entry detection coverage',
    ],
  },
  {
    icon: Monitor,
    title: 'Central Monitoring Station Integration',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'A self-monitoring alarm system provides deterrence through noise and flashing lights but depends entirely on nearby individuals noticing and acting — which is ineffective when incidents occur out of hours in unmanned premises. Central monitoring station (CMS) integration connects your alarm system to a 24/7 professionally staffed monitoring centre that receives every alarm event in real time and initiates a pre-agreed response protocol within seconds. Response options include contacting your designated key holders, dispatching contracted security guard response, or direct escalation to police depending on the alarm zone, time of day, and event type. All events are logged with precise timestamps, and monthly activity reports are provided to system owners. We integrate with NSI and SSAIB-approved monitoring stations across Pakistan.',
    points: [
      '24/7 professional monitoring centre connection via digital or IP communicator',
      'Response protocol covering key holder contact, guard response, and police escalation',
      'Per-zone response protocols — different responses for different alarm types',
      'Monthly event logs and system health reports from monitoring station',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Fire & Smoke Detection Integration',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'Modern commercial alarm panels support integration of fire and smoke detection alongside intruder detection, providing a unified emergency response platform from a single panel. We integrate conventional and addressable fire detection systems — optical smoke detectors, heat detectors, multi-sensor detectors, and manual call points — with the intruder alarm panel or a dedicated integrated platform. Fire detection events trigger a separate response protocol to intruder events: the monitoring station alerts your fire safety coordinator, the building\'s fire panel initiates evacuation alarms, and where applicable, direct notification to the fire brigade is configured. Integration with access control systems ensures fire exit doors are automatically released to fail-safe open position on fire alarm activation.',
    points: [
      'Optical smoke, heat, and multi-sensor detector installation',
      'Integration with intruder alarm panel for unified emergency response',
      'Fire monitoring with direct fire brigade notification capability',
      'Automatic fire exit release integration with access control systems',
    ],
  },
  {
    icon: Phone,
    title: 'Remote Arm/Disarm & App Control',
    color: '#4F46E5',
    bg: '#EEF2FF',
    desc: 'Modern alarm panels support remote management through smartphone apps and web interfaces, allowing authorised users to arm and disarm the system remotely, check system status, receive instant push notifications for any alarm event, and review the event log from anywhere with a mobile data connection. This is particularly valuable for business owners who frequently arrive before staff, for facilities managers overseeing multiple sites, and for key holders who need to confirm whether an alarm has been set before leaving a site. We configure Honeywell Pro-Watch, Bosch Solution, Ajax System, and Texecom Connect app integration as standard on new installations. All remote access is secured with two-factor authentication to prevent unauthorised remote disarming.',
    points: [
      'Smartphone app for remote arm/disarm from any location',
      'Real-time push notifications for every alarm and system event',
      'Multi-user access with per-user permissions — key holders can only disarm their zones',
      'Two-factor authentication on remote access to prevent unauthorised disarming',
    ],
  },
]

const VENDORS = ['Honeywell', 'Bosch', 'DSC', 'Paradox', 'Texecom', 'Risco', 'Ajax', 'Hikvision']

const FAQS = [
  {
    question: 'What is the most effective alarm configuration for a commercial premises?',
    answer: 'An effective commercial alarm system uses a layered detection architecture: perimeter detection as the outer layer (beams or outdoor PIR sensors), first-entry detection as the second layer (door/window contacts and glass break detectors at every access point), interior detection as the inner layer (motion detectors throughout the internal space), and asset-level detection for high-value items (vibration sensors on safes, server racks, or specific cabinets). Each layer increases the probability that an intruder is detected and increases the time between initial detection and reaching any valuable asset. Combined with 24/7 central station monitoring and a sub-30-second response protocol, this architecture provides a deterrent that changes the risk calculation for any potential intruder.',
  },
  {
    question: 'How do monitored alarms differ from self-monitoring systems?',
    answer: 'A self-monitoring alarm sounds a siren and sends you a mobile notification when triggered. The response depends entirely on who notices the siren, whether your phone has signal, and whether you or your designated key holders are able to respond quickly. A monitored alarm connects to a 24/7 staffed security operations centre that receives every alarm signal in real time, visually verifies the event where cameras are integrated, and initiates your pre-agreed response protocol — contacting key holders, dispatching a guarding response team, or alerting police — within seconds, regardless of the time of day or whether anyone notices the siren. For commercial premises, insurance companies frequently require monitored alarms with grade 2 or grade 3 panel compliance, and may reduce premiums significantly for monitored installations.',
  },
  {
    question: 'What causes false alarms and how can they be minimised?',
    answer: 'The most common causes of false alarms in commercial systems are inadequate detector selection for the environment (using standard PIR in a space with HVAC air movement, for example), incorrect detector positioning (facing a heat source like a radiator or window with direct sunlight), damaged door and window contacts triggering on vibration, and user error during arming and disarming (the most common cause overall — entering the wrong code or failing to exit within the exit delay time). We minimise false alarms through careful detector specification and positioning during design, dual-technology detectors in challenging environments, and thorough user training during handover. Alarm systems connected to central monitoring stations should target a false alarm rate below 1% — consistently high false alarm rates trigger police non-response policies.',
  },
  {
    question: 'What alarm panel grade do we need for our premises?',
    answer: 'Alarm panel grades under EN 50131 define the level of protection against different attack categories. Grade 1 is for domestic low-risk environments. Grade 2 is for commercial premises with low to medium risk, and is the minimum grade typically required by insurance for commercial properties. Grade 3 is for high-risk commercial environments including financial institutions, data centres, and pharmaceutical storage. Grade 4 is for very high risk and is rarely required outside government and critical infrastructure. We assess your premises, the value of assets, your insurance requirements, and your threat model to recommend the appropriate grade, and specify panels, detectors, and signalling equipment that meet that grade as a complete certified system.',
  },
  {
    question: 'Can we expand the alarm system as our business grows?',
    answer: 'Yes. All the alarm panels we specify are expandable through zone expanders, additional keypads, and additional siren outputs. When selecting a panel for a new installation we always account for planned future expansion — we specify a panel with sufficient capacity for the immediate requirement plus 30–50% headroom for future zones. Adding detectors to an existing system requires only an expansion board in many cases, and the system programming is updated to include the new zones in the relevant arming sets. For major expansions involving new buildings or additional sites, we assess whether the existing panel capacity is sufficient or whether a panel upgrade is the more cost-effective option.',
  },
  {
    question: 'What is the warranty and maintenance arrangement for installed alarm systems?',
    answer: 'All alarm systems installed by Infraspine carry a 12-month parts and labour warranty covering any faults in materials or workmanship. We strongly recommend an annual maintenance contract (AMC) beyond the warranty period, which includes a scheduled preventive maintenance visit each year covering detector cleaning and testing, battery replacement in wireless devices and panel backup batteries, keypad testing and user code verification, communicator testing to the monitoring station, and a full walk-test of all zones. AMC clients receive priority response SLAs for faults — typically a 4-hour response for critical faults affecting the system arm capability. We also provide NSI-compliant documentation for insurance purposes.',
  },
]

export default function AlarmSystemsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Physical Security', href: '/services/physical-security' },
        { label: 'Alarm Systems' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[400px] opacity-[0.07]"
          style={{ background: 'radial-gradient(ellipse at top right, #D97706, transparent 60%)' }}
          aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: '#D97706' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#D97706' }}>Alarm & Intrusion Detection</span>
            </div>
            <h1 className="text-[clamp(2.1rem,4.5vw,3.7rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Alarm & Intrusion Detection —{' '}
              <span style={{ color: '#D97706' }}>Stop Threats Before They Enter.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              A professionally designed and monitored alarm system does not just respond to break-ins — it prevents them. Research consistently shows that the presence of a visible, monitored alarm system reduces the probability of a burglary attempt by over 60%. And when an attempt does occur, a sub-30-second response from a 24/7 monitoring centre changes the outcome from a successful theft to an interrupted attempt. Infraspine designs, installs, and arranges central monitoring for commercial and industrial alarm systems across Pakistan.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-4 border"
                  style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[18px] font-black mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[10.5px] leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#D97706', color: '#fff' }}>
                Book a Free Survey <ArrowRight size={14} />
              </Link>
              <Link href="/request-quote"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
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
                <div className="h-px w-6" style={{ background: '#D97706' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#D97706' }}>Why Alarm Systems Reduce Losses</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                95% of Burglaries Involve Forced Entry — Detectable in Seconds by a Properly Designed System
              </h2>
              <p className="text-[15px] leading-relaxed mb-5" style={{ color: '#64748B' }}>
                The vast majority of commercial burglaries share a predictable pattern: forced entry through a door, window, or roof access point, followed by a search for cash, portable electronics, or other high-value items. The dwell time — the period from entry to exit — typically ranges from 4 to 10 minutes. An alarm system connected to a 24/7 monitoring station that initiates a response within 30 seconds of the first triggered detector dramatically reduces the probability of a successful theft, because professional security response or police attendance is already underway before the intruder has identified or reached the target assets.
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: '#64748B' }}>
                The key design principle is detection at the earliest possible point in the intrusion sequence. Perimeter beam detectors trigger the alarm before the intruder reaches the building. First-entry sensors on doors and windows trigger at the moment of breach. Interior motion detectors provide redundant coverage throughout the building. The earlier in the sequence a detection occurs, the more response time is available and the lower the probability of any loss occurring. This is why we design alarm systems from the outside inward, prioritising perimeter and first-entry detection rather than relying solely on interior motion sensors that only trigger after an intruder is already inside. Combined with 24/7 monitoring and a guarding response arrangement, this architecture changes the risk profile of your premises entirely.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl p-6 border" style={{ background: '#FFFBEB', borderColor: '#FDE68A' }}>
                <p className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: '#D97706' }}>Intrusion Statistics — Commercial Premises</p>
                <div className="space-y-3">
                  {[
                    { stat: '95%',    detail: 'of commercial burglaries involve detectable forced entry' },
                    { stat: '60%+',   detail: 'reduction in burglary risk with a visible monitored alarm system' },
                    { stat: '4–10',   detail: 'minutes average dwell time — the window for monitoring response' },
                    { stat: '78%',    detail: 'of burglaries occur outside business hours — making 24/7 monitoring critical' },
                  ].map(({ stat, detail }) => (
                    <div key={stat} className="flex items-start gap-3 rounded-xl p-3 bg-white border" style={{ borderColor: '#FDE68A' }}>
                      <span className="text-[18px] font-black flex-shrink-0" style={{ color: '#D97706' }}>{stat}</span>
                      <span className="text-[13px] leading-relaxed" style={{ color: '#64748B' }}>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-6 border" style={{ background: '#F0FDF4', borderColor: '#BBF7D0' }}>
                <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: '#16A34A' }}>What a Professional Alarm System Delivers</p>
                <div className="space-y-2">
                  {[
                    'Detection at the earliest point in the intrusion sequence',
                    'Sub-30-second alert delivery to a 24/7 monitoring centre',
                    'Defined response protocol — guard dispatch or police notification',
                    'Insurance compliance — many insurers require monitored alarms',
                    'Premium reduction of 10–25% with approved monitored systems',
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
              Alarm System Capabilities
            </h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Perimeter to interior — layered detection designed to identify every intrusion attempt at the earliest possible point.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map(cap => (
              <div key={cap.title} className="bg-white rounded-2xl border p-7 flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: '#E2E8F0', boxShadow: '0 4px 20px rgba(10,22,40,0.06)' }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: cap.bg }}>
                  <cap.icon size={22} style={{ color: cap.color }} strokeWidth={1.5} />
                </div>
                <h3 className="text-[17px] font-black mb-3" style={{ color: '#0A1628' }}>{cap.title}</h3>
                <p className="text-[13.5px] leading-relaxed mb-5 flex-1" style={{ color: '#64748B' }}>{cap.desc}</p>
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

      {/* ── Vendor strip ── */}
      <section className="py-12 bg-white border-y" style={{ borderColor: '#E2E8F0' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-7" style={{ color: '#94A3B8' }}>
            Alarm Brands & Platforms We Install
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {VENDORS.map(v => (
              <span key={v} className="px-3.5 py-1.5 rounded-full text-[12px] font-semibold border"
                style={{ background: '#F8FAFC', borderColor: '#E2E8F0', color: '#475569' }}>{v}</span>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        title="Alarm Systems — Frequently Asked Questions"
        subtitle="Common questions from businesses planning a commercial alarm installation."
        faqs={FAQS}
      />

      <CTABanner
        heading="Stop Threats Before They Reach Your Assets."
        subheading="Book a free alarm system survey. Our engineers will assess your premises, design a layered detection architecture, and provide a no-obligation quotation with full system specification."
        primaryCTA={{ label: 'Book a Free Survey', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
