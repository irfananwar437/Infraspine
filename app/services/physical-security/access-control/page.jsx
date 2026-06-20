import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Lock, Shield, Users, Monitor, Camera, Activity,
  CheckCircle, ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'Access Control Systems Pakistan — Smart Card, RFID & Door Entry | Infraspine',
  description: 'Enterprise access control installation across Pakistan. Smart card, RFID, biometric, and visitor management systems. HID, Suprema, ZKTeco, Paxton certified installers.',
  alternates: { canonical: 'https://www.infraspine.com/services/physical-security/access-control' },
  openGraph: {
    title: 'Access Control Systems Pakistan — Smart Card, RFID & Door Entry | Infraspine',
    description: 'Professional access control for commercial and industrial premises in Pakistan. Smart card, RFID, turnstile, visitor management, and multi-site centralised control.',
    url: 'https://www.infraspine.com/services/physical-security/access-control',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Access Control System Installation',
  name: 'Infraspine Access Control Systems',
  description: 'Enterprise electronic access control system design, installation, and management across Pakistan. Smart card, RFID, biometric, and visitor management solutions for commercial and industrial facilities.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/physical-security/access-control',
}

const STATS = [
  { value: '1000+',  label: 'doors secured to date',        color: '#2563EB' },
  { value: '99.99%', label: 'access decision accuracy',     color: '#00C853' },
  { value: 'Live',   label: 'real-time audit trail',        color: '#D97706' },
  { value: '24/7',   label: 'support and monitoring',       color: '#7C3AED' },
]

const CAPABILITIES = [
  {
    icon: Lock,
    title: 'Smart Card & RFID Access',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Smart card and RFID-based access is the standard for commercial premises requiring cost-effective, scalable door control without the complexity of biometric enrolment. We deploy HID Global Proximity, iCLASS SE, and DESFire EV3 credentials with Wiegand or OSDP readers depending on your security requirements. OSDP readers are strongly recommended for high-security environments as they provide encrypted, bi-directional communication between the reader and controller — preventing the signal cloning attacks possible with unencrypted Wiegand installations. We supply and programme cards and fobs for all users, and configure access levels by individual, role, or department with time-of-day and day-of-week restrictions for each access group.',
    points: [
      'HID, EM, MIFARE Classic, DESFire EV3 card and fob credentials',
      'OSDP encrypted readers for high-security environments',
      'Access level configuration: individual, role, or department groups',
      'Time-of-day and day-of-week access restrictions per group',
    ],
  },
  {
    icon: Shield,
    title: 'Door Controller Installation',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'The door controller is the intelligence layer of the access control system — it stores access rules locally, makes grant or deny decisions in under 200 milliseconds, and communicates events to the management software. We install access control panels from HID VertX, Lenel OnGuard, Honeywell Pro-Watch, and Paxton Net2 depending on integration requirements and panel capacity. Controllers are installed in secure, locked enclosures with battery backup to maintain access control functionality during power outages. Each door position is fitted with the appropriate lock mechanism — electromagnetic lock (mag lock), electric strike, or electric bolt — depending on the door type, fire safety requirements, and emergency egress regulations.',
    points: [
      'HID, Lenel, Honeywell, and Paxton controllers to suit project requirements',
      'Secure locked enclosure installation with UPS battery backup',
      'Appropriate lock selection: mag lock, electric strike, or electric bolt',
      'Fire door and emergency egress compliance — door releases on fire alarm',
    ],
  },
  {
    icon: Monitor,
    title: 'Multi-Site Centralised Management',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Organisations with multiple premises need a single management platform that provides a unified view of all access events, user credentials, and door statuses across every location. Our enterprise access control installations use centralised management software — Lenel OnGuard, Genetec Security Center, or Honeywell Pro-Watch — deployed either on-premises or in a private cloud. This gives your security operations team real-time visibility of every access event across all sites, the ability to lock or unlock any door remotely from a central console, and consistent access policy enforcement without replicating changes site-by-site. Cardholder additions, modifications, and terminations are made once in the central system and immediately replicated to every site controller.',
    points: [
      'Single management console for all sites, doors, and cardholders',
      'Real-time door status monitoring and remote lock/unlock capability',
      'Centralised cardholder management — one change propagates everywhere',
      'API integration with HR systems for automated joiner and leaver processes',
    ],
  },
  {
    icon: Users,
    title: 'Visitor Management System',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Visitors, contractors, and delivery personnel represent one of the most significant gaps in access control — they require physical access to your premises but fall outside your regular cardholder system. Our visitor management systems provide a professional, systematic approach: visitors pre-register online or register at a reception kiosk on arrival, their identity is verified, a time-limited badge or temporary access credential is issued, and their entry and exit are automatically logged. Contractor access can be linked to valid insurance and induction documentation — the system refuses entry to contractors with expired credentials. Host employees are notified by email or SMS when their visitor arrives. All visitor records are retained for audit and security investigation purposes.',
    points: [
      'Web pre-registration and reception kiosk self-check-in',
      'Time-limited visitor badges or temporary RFID credentials',
      'Contractor management with document expiry checking',
      'Automated host notification by email or SMS on visitor arrival',
    ],
  },
  {
    icon: Activity,
    title: 'Turnstile & Barrier Systems',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Waist-height or full-height turnstiles and speed gates provide a physical deterrent to tailgating that electronic access control alone cannot offer — when integrated with an access control system, they allow one person per valid credential presentation and physically prevent the follow-through of an unauthorised person behind a legitimate cardholder. We supply and install Boon Edam, Gunnebo, and locally manufactured turnstiles for office lobbies, factory entrances, and stadium environments. Car park barriers are integrated with RFID or licence plate recognition to allow authorised vehicle entry without manual intervention. All turnstile and barrier installations include emergency fail-safe mode that allows free passage in a fire or evacuation scenario.',
    points: [
      'Waist-height, full-height, and speed-gate turnstile installation',
      'Tailgating prevention with single-entry-per-credential enforcement',
      'Car park barriers with RFID or ANPR vehicle recognition',
      'Emergency fail-safe: free passage mode during fire and evacuation',
    ],
  },
  {
    icon: Camera,
    title: 'Video Intercom & Door Entry',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'Video intercom systems allow reception staff and authorised employees to visually verify and remotely admit visitors without physical presence at the door — essential for managing entry to unmanned entrances, secondary access points, and out-of-hours access. We install IP video intercom systems from Hikvision, Dahua, 2N, and Aiphone, with HD camera panels at door positions and software clients running on reception PCs, mobile phones, or dedicated indoor monitor stations. Integration with the access control system means that a verified visitor can be granted a temporary credential directly from the intercom interface. All intercom calls are logged with video and audio captures for security records.',
    points: [
      'IP video intercom with HD camera panels and software or monitor clients',
      'Remote door release from PC, mobile, or dedicated indoor station',
      'Integration with access control for temporary credential issuance',
      'Call and video log retained for security records and audit',
    ],
  },
]

const VENDORS = ['HID Global', 'Lenel', 'Honeywell', 'Bosch', 'Suprema', 'ZKTeco', 'Paxton', 'IDEMIA']

const FAQS = [
  {
    question: 'What are the main reasons physical key systems fail in commercial environments?',
    answer: 'Physical key management creates several compounding problems in any organisation with more than a handful of employees. Keys can be duplicated without authorisation — standard cut keys are trivially copied at any locksmith. Lost keys require lock replacements to maintain security, which is expensive and operationally disruptive. When employees leave the organisation, key return cannot be reliably enforced. There is no audit trail — you cannot determine who used which key to enter which room at what time. Access cannot be granted or revoked remotely, which is critical when a building needs to be secured immediately after a security incident. Electronic access control eliminates all of these limitations.',
  },
  {
    question: 'What is tailgating and how does access control prevent it?',
    answer: 'Tailgating — also called piggybacking — occurs when an unauthorised individual follows an authorised cardholder through a controlled door without presenting their own credential. It is the most common way unauthorised individuals bypass access control. Anti-tailgating measures include video analytics configured to detect and alert on multiple-person entry per credential swipe, acoustic alerts at doors when held open beyond a threshold time, and physical turnstiles or speed gates that allow exactly one person per credential presentation and physically prevent a second person following through. For the highest-security areas, mantrap double-door airlocks can be deployed to ensure each person is individually authenticated before entering.',
  },
  {
    question: 'How quickly can access be revoked for a terminated employee?',
    answer: 'With a properly configured electronic access control system, access can be revoked instantly from the management software — the credential becomes invalid the moment it is deactivated, typically within seconds of the change being applied. With our API integration into your HR system, this revocation can be triggered automatically when an employee is marked as terminated in HR, meaning the process can be completed without manual intervention by security staff. This is a significant improvement over physical key management, where revocation depends on either the employee returning the key or physical lock changes, which can take days.',
  },
  {
    question: 'Can the access control system integrate with our CCTV cameras?',
    answer: 'Yes. Most enterprise access control platforms support integration with CCTV systems, enabling linked video review — when you look up an access event in the system log (for example, a failed access attempt at 2:00 AM), the system displays the camera footage from that door at that moment directly alongside the access log entry. This dramatically speeds up post-incident investigation. We configure this integration as standard on all projects where both access control and CCTV are installed by Infraspine, and we can also integrate with existing third-party camera systems provided they use an ONVIF-compliant VMS.',
  },
  {
    question: 'What happens to access control during a power outage?',
    answer: 'All door controllers and access readers are powered through UPS battery backup units, which maintain system operation for a configurable period during a power outage — typically 4 to 8 hours depending on UPS size. During the outage, the controllers continue to make access decisions using their locally stored rule sets, and all events are logged locally and synchronised with the server when power is restored. Doors can be configured in either fail-safe mode (unlocked on power failure — used for fire exit doors) or fail-secure mode (locked on power failure — used for high-security internal doors), depending on fire safety and security requirements for each door position.',
  },
  {
    question: 'Do you provide training for our security and IT teams on the new system?',
    answer: 'Yes. Comprehensive training is included in every access control installation. We provide role-specific training for three audiences: system administrators (full management software operation, cardholder management, report generation, and configuration changes), security operators (day-to-day monitoring, event review, visitor badge management, and manual door override procedures), and IT/facilities teams (system health monitoring, basic troubleshooting, and network requirements). Training can be delivered on-site at your premises or remotely via video call. We also provide system documentation including network diagrams, controller and reader locations, and software configuration guides.',
  },
]

export default function AccessControlPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Physical Security', href: '/services/physical-security' },
        { label: 'Access Control' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[400px] opacity-[0.07]"
          style={{ background: 'radial-gradient(ellipse at top right, #2563EB, transparent 60%)' }}
          aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-10 sm:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: '#2563EB' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>Access Control Systems</span>
            </div>
            <h1 className="text-[clamp(2.1rem,4.5vw,3.7rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Enterprise Access Control —{' '}
              <span style={{ color: '#2563EB' }}>Secure Every Entry Point.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              Physical key management is a security liability waiting to become a security incident. Electronic access control gives you complete, instant control over who can enter every area of your premises — with a full audit trail, remote management capability, and the ability to revoke access in seconds when circumstances change. Infraspine designs and installs access control systems for single offices, multi-floor facilities, and multi-site estates across Pakistan.
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
                style={{ background: '#2563EB', color: '#fff' }}>
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
                <div className="h-px w-6" style={{ background: '#2563EB' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>The Business Case</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                From Key Chaos to Complete Control — Why Electronic Access Is Non-Negotiable
              </h2>
              <p className="text-[15px] leading-relaxed mb-5" style={{ color: '#64748B' }}>
                Physical key management creates unmanageable risk in any organisation with more than a handful of staff. Keys are duplicated without authorisation. Employees leave without returning their keys. Lost keys require lock replacements that disrupt operations and cost thousands of rupees per door. Most critically, there is no audit trail — when an incident occurs, you cannot determine who had access or when they used it. These are not hypothetical problems; they are daily operational realities for organisations that still rely on physical keys.
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: '#64748B' }}>
                Electronic access control eliminates every one of these risks. Cards and fobs cannot be duplicated without the right programming equipment. Access can be revoked instantly when an employee leaves — no lock changes required. Every access event is logged with the user, door, date, and time. Tailgating is detectable through video integration and physically preventable with turnstiles. And when your premises need to be locked down immediately — whether for a security incident, a fire drill, or out-of-hours protection — every door can be secured remotely from a single management console within seconds. For organisations handling sensitive data, financial assets, or regulated materials, electronic access control is not a luxury — it is the minimum security baseline required to demonstrate due diligence.
              </p>
            </div>
            <div className="rounded-2xl p-7 border" style={{ background: '#EFF6FF', borderColor: '#BFDBFE' }}>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-5" style={{ color: '#2563EB' }}>Physical Key vs Electronic Access Control</p>
              <div className="space-y-3">
                {[
                  { issue: 'Key duplication risk', key: 'Impossible to prevent', elec: 'Credentials cannot be duplicated without programmer' },
                  { issue: 'Terminated employee access', key: 'Requires lock change', elec: 'Revoked instantly in software' },
                  { issue: 'Audit trail', key: 'None', elec: 'Every event logged with user, door, and timestamp' },
                  { issue: 'Remote management', key: 'Not possible', elec: 'Lock/unlock any door from any location' },
                  { issue: 'Tailgating detection', key: 'None', elec: 'Video integration and turnstile enforcement' },
                  { issue: 'Incident investigation', key: 'No records available', elec: 'Searchable log with linked CCTV footage' },
                ].map(({ issue, key, elec }) => (
                  <div key={issue} className="rounded-xl p-4 bg-white border" style={{ borderColor: '#BFDBFE' }}>
                    <p className="text-[11px] font-bold uppercase tracking-wide mb-2" style={{ color: '#1D4ED8' }}>{issue}</p>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <p className="text-[10px] font-semibold mb-0.5" style={{ color: '#DC2626' }}>Physical Key</p>
                        <p className="text-[12px]" style={{ color: '#64748B' }}>{key}</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-semibold mb-0.5" style={{ color: '#16A34A' }}>Electronic</p>
                        <p className="text-[12px]" style={{ color: '#374151' }}>{elec}</p>
                      </div>
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
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Access Control Capabilities
            </h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From single-door reader installations to enterprise multi-site systems with visitor management and turnstile integration.
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
            Access Control Platforms & Hardware We Install
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
        title="Access Control — Frequently Asked Questions"
        subtitle="Common questions from clients planning an electronic access control installation."
        faqs={FAQS}
      />

      <CTABanner
        heading="Secure Every Entry Point in Your Premises."
        subheading="Book a free access control survey. We will map your entry points, design your access zone structure, and deliver a no-obligation system specification and quotation."
        primaryCTA={{ label: 'Book a Free Survey', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
