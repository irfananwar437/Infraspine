import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Camera, Eye, Monitor, Zap, Shield, Activity,
  CheckCircle, ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'CCTV & IP Surveillance Pakistan — Installation & Monitoring',
  description: 'Professional CCTV and IP surveillance installation across Pakistan. 4K cameras, AI video analytics, remote monitoring, NVR setup. Hikvision, Dahua, Axis certified installers.',
  alternates: { canonical: 'https://www.infraspine.com/services/physical-security/cctv' },
  openGraph: {
    title: 'CCTV & IP Surveillance Systems Pakistan | Infraspine',
    description: 'Enterprise CCTV installation with 4K IP cameras, AI analytics, remote monitoring, and professional NVR configuration across Pakistan.',
    url: 'https://www.infraspine.com/services/physical-security/cctv',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'CCTV & IP Surveillance Installation',
  name: 'Infraspine CCTV & IP Surveillance Systems',
  description: 'Professional CCTV and IP camera system design, installation, configuration, and ongoing monitoring for commercial, industrial, and multi-site clients across Pakistan.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/physical-security/cctv',
}

const STATS = [
  { value: '50+',    label: 'camera brands supported',      color: '#DC2626' },
  { value: '4K',     label: 'maximum resolution available', color: '#2563EB' },
  { value: '30-Day', label: 'default retention period',     color: '#D97706' },
  { value: '24/7',   label: 'remote monitoring service',    color: '#00C853' },
]

const CAPABILITIES = [
  {
    icon: Camera,
    title: 'IP Camera Design & Installation',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Every installation begins with a site survey and a professional camera placement plan. We map your floor plan or site blueprint, identify all entry and exit points, determine the lighting conditions at each camera position across different times of day, and specify the correct camera model — fixed dome, bullet, PTZ, fisheye, or multi-sensor — for each location. Our installers run Cat6 cabling or fibre to each camera position, configure IP addresses, set frame rates, compression codecs, and motion detection zones, and test every camera before handover. We document all camera positions, IP addresses, and recording configurations so your team has a complete system record.',
    points: [
      'Site survey with camera coverage plan and blind-spot elimination',
      'Cabling design and installation — Cat6, fibre, or hybrid',
      'Camera model selection matched to lighting conditions and coverage area',
      'Full system documentation with IP inventory and configuration records',
    ],
  },
  {
    icon: Monitor,
    title: 'NVR/DVR Setup & Configuration',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'The Network Video Recorder (NVR) or Video Management Software (VMS) server is the brain of your surveillance system. We size storage based on your camera count, resolution, frame rate, and retention requirements — then configure RAID arrays for fault tolerance, set up recording schedules, configure motion-triggered recording to extend retention for high-activity cameras, and establish backup and redundancy configurations. We deploy Milestone XProtect, Genetec Security Center, Hikvision iVMS-4200, Dahua DSS, and Hanwha Wisenet WAVE depending on project scale and integration requirements. All NVR configurations are hardened with strong authentication, encrypted storage, and restricted admin access.',
    points: [
      'Storage sizing for resolution, frame rate, and retention requirements',
      'RAID configuration for fault-tolerant local storage',
      'Motion-triggered recording to extend effective retention periods',
      'VMS deployment: Milestone, Genetec, Hikvision iVMS, Dahua DSS',
    ],
  },
  {
    icon: Eye,
    title: 'Remote Live Monitoring',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Our 24/7 remote monitoring service connects your camera system to our operations centre, where trained security analysts monitor your feeds in real time and escalate events according to a pre-agreed response protocol. Monitoring covers business premises, warehouses, car parks, server rooms, and retail environments. When an alert is triggered — by motion, perimeter crossing, or AI-detected behaviour — our operators verify the event visually before escalating to your security personnel, guard service, or directly to police, eliminating false alarm fatigue while ensuring genuine threats receive immediate attention. Monthly reports detail all events detected, response times, and any system health issues identified during monitoring.',
    points: [
      'Trained security analysts monitoring your cameras 24 hours a day',
      'Event verification before escalation — eliminating false alarm fatigue',
      'Pre-defined escalation protocols to your security team or police',
      'Monthly event and health reports with response time metrics',
    ],
  },
  {
    icon: Zap,
    title: 'Video Analytics & AI Detection',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'AI-powered video analytics transform your camera system from a passive recording device into an active detection platform. Modern AI cameras and VMS platforms can analyse video streams in real time and trigger alerts for specific, configurable behaviours — without requiring an operator to watch every screen every moment. We configure and deploy analytics including perimeter tripwire and zone intrusion detection, loitering alerts, crowd density monitoring, left-object and removed-object detection, automatic licence plate recognition (ANPR/LPR), and PPE and safety compliance detection for industrial environments. AI analytics deliver significantly fewer false alarms than traditional motion detection by distinguishing people, vehicles, and animals from irrelevant triggers like foliage movement and rain.',
    points: [
      'Perimeter tripwire, zone intrusion, and loitering detection',
      'ANPR/LPR for car park access and gate management automation',
      'PPE, hard-hat, and reflective vest compliance detection for industrial sites',
      'False alarm reduction versus traditional motion detection',
    ],
  },
  {
    icon: Activity,
    title: 'Multi-Site Centralised View',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'Organisations with multiple locations — retail chains, industrial facilities, office campuses, or construction sites — need a single operational view across all sites without travelling to each location. Our multi-site VMS configurations provide a unified camera tree showing all locations and cameras in a single interface, with the ability to drill down to any site, zone, or individual camera in seconds. Access permissions can be configured so regional managers see their locations, the security operations team sees all sites, and specific team members have view-only access to nominated cameras. Historical footage from any site can be searched and exported from a central workstation.',
    points: [
      'Unified VMS interface across unlimited locations and cameras',
      'Role-based access: granular permissions per site, zone, and camera',
      'Centralised recording management with per-site storage monitoring',
      'Remote footage search and export from a single workstation',
    ],
  },
  {
    icon: Shield,
    title: 'Maintenance & Health Checks',
    color: '#4F46E5',
    bg: '#EEF2FF',
    desc: 'CCTV systems require regular preventive maintenance to remain reliable — camera lenses accumulate dust, dome covers become scratched and reduce image clarity, NVR hard drives accumulate health events, and firmware updates are released to address vulnerabilities and improve performance. Our annual maintenance contracts (AMC) include two scheduled preventive maintenance visits per year, during which our engineers clean all camera lenses and dome covers, test recording continuity and footage retrieval, check hard drive health and NVR fan temperatures, apply firmware updates to cameras and NVR, and verify remote access connectivity. Between visits, our team provides remote health monitoring and priority response for any system fault.',
    points: [
      'Annual lens and dome cleaning to maintain image quality',
      'Hard drive health monitoring with proactive replacement before failure',
      'Firmware and software updates for cameras, NVR, and VMS',
      'Priority fault response under annual maintenance contract terms',
    ],
  },
]

const VENDORS = ['Hikvision', 'Dahua', 'Axis', 'Bosch', 'Genetec', 'Milestone VMS', 'UniFi Protect']

const FAQS = [
  {
    question: 'How do IP cameras differ from HDCVI or TVI analogue cameras?',
    answer: 'True IP cameras transmit compressed digital video over standard Ethernet cabling to an NVR or VMS server. HDCVI, AHD, and TVI are upgraded analogue formats that send higher-definition signals over coaxial cable to an HDCVI/AHD/TVI-compatible DVR — they are better than standard analogue but still use proprietary cabling and offer less flexibility than true IP. IP cameras support the widest range of resolutions (from 2MP to 4K and beyond), can run onboard AI analytics, support Power over Ethernet (PoE) for single-cable installation, and integrate with any ONVIF-compliant VMS. For new installations we always recommend IP over any analogue format.',
  },
  {
    question: 'What resolution cameras do we need — is 4K really necessary?',
    answer: 'Resolution depends on the distance from the camera to the subject, what you need to capture, and the lighting conditions. For a reception desk camera at 3 metres, a 2MP camera provides more than adequate facial recognition quality. For a car park covering 30 metres, a 4MP or 4K camera is necessary to capture licence plates at that distance. For a wide open warehouse needing 50 metres of coverage, a 4K multi-sensor or PTZ camera is appropriate. During our site survey we calculate the pixels-per-metre ratio for each camera position and specify the minimum resolution needed to achieve your forensic requirements — we do not over-specify cameras to inflate costs, and we do not under-specify where it would compromise evidential quality.',
  },
  {
    question: 'How much storage do we need for 30 days of footage?',
    answer: 'Storage requirements depend on camera count, resolution, frame rate, compression codec, and how much motion there is in each camera view. As a practical example: a 2MP camera recording at 15fps using H.265 compression in a medium-activity environment typically uses 8–12GB per day. A 4K camera at 15fps with H.265 uses approximately 30–40GB per day. For a 16-camera system with a mix of resolutions, 30 days of retention typically requires 4–8TB of storage. We calculate precise storage requirements for your system during the design phase and size the NVR accordingly, including a 20% overhead buffer for higher-than-average activity periods.',
  },
  {
    question: 'Can I view my cameras on my mobile phone?',
    answer: 'Yes. All modern IP camera systems support secure remote viewing through encrypted mobile apps. Hikvision cameras use the Hik-Connect or iVMS-4500 app, Dahua uses gDMSS or DMSS, and enterprise VMS platforms like Milestone and Genetec have their own mobile clients. Remote access is secured with unique user credentials, and we configure firewall rules and VPN access where required to ensure that your camera system is not exposed to the open internet without authentication. We set up and test remote viewing access for all authorised users as part of the installation handover.',
  },
  {
    question: 'What happens if a camera goes offline or stops recording?',
    answer: 'Under our annual maintenance contract, our remote monitoring system polls camera health continuously and alerts our team if any camera goes offline or if recording stops unexpectedly. We investigate the fault remotely first — in many cases connectivity or configuration issues can be resolved without a site visit. If a physical fault is confirmed, we dispatch an engineer under the AMC priority response SLA, which guarantees a site visit within 4 business hours for camera faults on monitored systems. We also configure email and app push notifications to your designated system administrator so your team is always immediately aware of any system issues.',
  },
  {
    question: 'Will CCTV cameras work at night and in low-light areas?',
    answer: 'Yes. All modern IP cameras include infra-red (IR) LEDs for night-vision capability in complete darkness, with IR range depending on the camera model — typically 30 to 100 metres. For colour night vision we deploy cameras with larger aperture lenses (F1.0 or F1.2) and high-sensitivity sensors that maintain full-colour imaging in ambient light as low as 0.001 lux. For areas with no ambient light where colour identification is required — such as car parks or entrance areas — we recommend supplementary low-lux lighting rather than relying on IR alone. We assess lighting conditions during the site survey and specify the correct camera technology for each location.',
  },
]

export default function CCTVPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Physical Security', href: '/services/physical-security' },
        { label: 'CCTV & Surveillance' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[400px] opacity-[0.07]"
          style={{ background: 'radial-gradient(ellipse at top right, #DC2626, transparent 60%)' }}
          aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: '#DC2626' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#DC2626' }}>CCTV & IP Surveillance</span>
            </div>
            <h1 className="text-[clamp(2.1rem,4.5vw,3.7rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Professional CCTV & IP Surveillance —{' '}
              <span style={{ color: '#DC2626' }}>See Everything, Miss Nothing.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              A professionally designed IP camera system does more than record footage — it deters incidents before they occur, provides evidential-quality imagery when they do, and gives your operations team real-time visibility across every area of your premises. Infraspine designs, installs, configures, and maintains IP surveillance systems for commercial offices, warehouses, retail environments, industrial facilities, car parks, and multi-site estates across Pakistan.
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
                style={{ background: '#DC2626', color: '#fff' }}>
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
                <div className="h-px w-6" style={{ background: '#DC2626' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#DC2626' }}>Professional vs DIY Installation</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                IP Cameras: Why Professional Installation Delivers What Consumer Systems Cannot
              </h2>
              <p className="text-[15px] leading-relaxed mb-5" style={{ color: '#64748B' }}>
                Consumer CCTV kits from electronics stores are attractive for their low upfront cost, but they consistently fail in commercial environments for predictable reasons. Camera positions are determined by where power sockets are available rather than where coverage is actually needed. Resolution and frame rate settings are left on defaults that maximise recording time at the expense of evidential quality — footage that looks adequate on a screen often reveals nothing usable when zoomed in after an incident. Cloud-dependent systems fail when internet connectivity is disrupted, and subscription fees make them expensive over a 3–5 year lifecycle.
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: '#64748B' }}>
                Professional IP camera systems engineered by Infraspine start with a site survey that maps your coverage requirements before any equipment is specified. Camera positions are calculated to achieve the pixel density needed for the forensic purpose at each location — whether that is facial recognition at an entrance or licence plate capture at a car park barrier. All recording is local to your NVR, with no dependency on external cloud services. AI-powered video analytics provide active detection capability rather than passive recording. The total cost of ownership over five years, including professional installation and annual maintenance, is typically lower than five years of consumer system subscription fees — with substantially better performance.
              </p>
            </div>

            <div className="rounded-2xl p-7 border" style={{ background: '#FEF2F2', borderColor: '#FECACA' }}>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-5" style={{ color: '#DC2626' }}>IP vs Analogue — Key Differences</p>
              <div className="space-y-3">
                {[
                  { aspect: 'Resolution',      ip: 'Up to 4K (8MP) and beyond', analogue: '720p–1080p maximum' },
                  { aspect: 'Cabling',         ip: 'Single Cat6 cable (PoE power + data)', analogue: 'Separate coax + power cable' },
                  { aspect: 'Video analytics', ip: 'Onboard AI: people, vehicles, behaviour', analogue: 'None or very limited' },
                  { aspect: 'Scalability',     ip: 'Unlimited cameras on network', analogue: 'Fixed by DVR channel count' },
                  { aspect: 'Integration',     ip: 'ONVIF standard — any VMS or access system', analogue: 'Proprietary DVR only' },
                  { aspect: 'Remote access',   ip: 'Secure encrypted mobile and browser access', analogue: 'Limited, often insecure' },
                ].map(({ aspect, ip, analogue }) => (
                  <div key={aspect} className="rounded-xl p-4 bg-white border" style={{ borderColor: '#FECACA' }}>
                    <p className="text-[11px] font-bold uppercase tracking-wide mb-2" style={{ color: '#9B1C1C' }}>{aspect}</p>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <p className="text-[10px] font-semibold mb-0.5" style={{ color: '#DC2626' }}>IP Camera</p>
                        <p className="text-[12px]" style={{ color: '#374151' }}>{ip}</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-semibold mb-0.5" style={{ color: '#64748B' }}>Analogue</p>
                        <p className="text-[12px]" style={{ color: '#64748B' }}>{analogue}</p>
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
              CCTV & Surveillance Capabilities
            </h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              End-to-end capability from initial design through to ongoing monitoring and maintenance.
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
            Camera Brands & VMS Platforms We Install
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
        title="CCTV & Surveillance — Frequently Asked Questions"
        subtitle="Common questions from clients planning a CCTV or IP surveillance project."
        faqs={FAQS}
      />

      <CTABanner
        heading="See Everything, Miss Nothing."
        subheading="Book a free CCTV site survey. Our engineers will assess your premises, design your camera coverage plan, and deliver a detailed quotation at no cost or obligation."
        primaryCTA={{ label: 'Book a Free Survey', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
