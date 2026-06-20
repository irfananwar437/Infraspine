import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Monitor, Zap, Users, Volume2, Settings, Wrench,
  ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'Audio Video Support Services Pakistan | AV Installation | Infraspine',
  description: 'Professional AV installation, configuration, and maintenance in Pakistan. Boardroom displays, video conferencing, projection systems, and PA systems with same-day fault response.',
  alternates: { canonical: 'https://www.infraspine.com/services/field-services/audio-video-support' },
  openGraph: {
    title: 'Audio Video Support Services Pakistan | AV Installation | Infraspine',
    description: 'Professional AV installation and maintenance in Pakistan for boardrooms, conference rooms, and public spaces.',
    url: 'https://www.infraspine.com/services/field-services/audio-video-support',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Audio Video Support',
  name: 'Infraspine Audio Video Support Services Pakistan',
  description: 'Installation, configuration, and maintenance of AV systems including boardroom displays, video conferencing, projection systems, and PA systems across Pakistan.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/field-services/audio-video-support',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '100+', label: 'AV Installations', color: '#D97706' },
  { value: '24/7', label: 'Fault Support', color: '#EA580C' },
  { value: 'Multi-Brand', label: 'Expertise', color: '#7C3AED' },
  { value: 'Same-Day', label: 'Response', color: '#16A34A' },
]

const CAPABILITIES = [
  {
    icon: Monitor,
    title: 'Video Conferencing Systems',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Modern organisations rely on video conferencing as a core business communication tool, and the quality of the AV setup in a meeting room directly determines whether video calls feel productive or frustrating. A room with a poorly positioned camera, inadequate microphone coverage, or a display that washes out in ambient light creates friction in every meeting held there. Our video conferencing installation service designs and deploys complete room solutions tailored to the room dimensions, usage patterns, and platform requirements. We work with all major video conferencing platforms including Microsoft Teams Rooms, Zoom Rooms, Cisco Webex, and Google Meet Hardware, deploying certified room systems that integrate natively with your chosen platform. Camera selection and positioning are guided by room geometry to ensure all participants are clearly visible. Microphone systems are specified for the room size, with ceiling microphone arrays selected for larger boardrooms to eliminate the dead spots that tabletop microphones create.',
    points: [
      'Microsoft Teams Rooms, Zoom Rooms, and Cisco Webex certified deployments',
      'Camera and microphone selection based on room geometry and usage patterns',
      'Full platform integration including calendar, directory, and content sharing',
      'User acceptance testing before room handover to confirm full functionality',
    ],
  },
  {
    icon: Zap,
    title: 'Digital Signage & Displays',
    color: '#EA580C',
    bg: '#FFF7ED',
    desc: 'Digital signage transforms how organisations communicate with employees, visitors, and customers — delivering dynamic content to reception areas, factory floors, retail environments, and public spaces far more effectively than static printed material. Our digital signage service covers the complete lifecycle: content management platform selection, commercial-grade display specification and procurement, mounting and installation, media player configuration, and network connectivity. We specify commercial displays rather than consumer televisions for signage applications — commercial displays are designed for continuous operation, offer superior brightness for high-ambient-light environments, and include remote management capability. For multi-site signage deployments, we integrate all displays into a centralised content management platform, allowing your marketing or communications team to update content across all screens from a single interface. We also deploy interactive signage solutions for wayfinding, visitor check-in, and customer engagement applications.',
    points: [
      'Commercial-grade display specification for continuous operation environments',
      'Content management platform deployment for centralised multi-screen control',
      'Interactive signage for wayfinding, check-in, and customer engagement',
      'Mounting, cabling, and network connectivity for all installed displays',
    ],
  },
  {
    icon: Users,
    title: 'Projection & Screen Systems',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Projection systems remain the preferred solution for large presentation spaces — training rooms, auditoriums, lecture halls, and large boardrooms — where display sizes impractical for flat panels are required. Our projection service covers the selection, installation, and commissioning of projectors and associated motorised or fixed projection screens. Projector specification is guided by the throw distance, ambient light levels, required image size, and the resolution demands of the content being displayed. We handle the structural installation of projectors, including ceiling mounting, cable management, and power provision, ensuring a clean professional installation that does not compromise the aesthetics of the space. For spaces requiring ultra-short-throw projection — where a standard projector cannot be positioned at the required throw distance — we specify and deploy UST projectors capable of producing large images from very short distances. All projection installations include calibration and colour profile optimisation.',
    points: [
      'Projector specification based on throw distance, brightness, and resolution requirements',
      'Ceiling mounting, cable management, and power provision installation',
      'Motorised projection screen integration with AV control systems',
      'Ultra-short-throw projector deployment for space-constrained environments',
    ],
  },
  {
    icon: Volume2,
    title: 'PA & Sound Systems',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Clear, intelligible audio is fundamental to effective communication in any venue — whether a corporate boardroom requiring subtle background music and paging capability, a conference centre requiring even audio coverage across multiple rooms, or a large warehouse requiring a high-output PA system capable of cutting through ambient noise. Our PA and sound system service designs and installs audio systems appropriate to the acoustic characteristics and functional requirements of each space. Speaker selection and placement are based on acoustic modelling of the space to achieve even sound pressure levels throughout the coverage area without creating hot spots or dead zones. Amplifier specification is matched to speaker requirements and zone structure. For facilities requiring zoned audio — where different areas need independent volume control or different content — we deploy zone amplifiers and switching infrastructure to support this. Systems are calibrated and equalised on-site by our audio engineers to correct for room acoustic characteristics.',
    points: [
      'Acoustic analysis informing speaker selection and placement',
      'Zone audio configuration for multi-area independent control',
      'Amplifier specification matched to speaker load and coverage requirements',
      'On-site calibration and equalisation by qualified audio engineers',
    ],
  },
  {
    icon: Settings,
    title: 'AV Control Systems',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'A modern meeting room or conference space typically contains multiple AV components: a video conferencing system, a display or projector, a sound system, window blinds, and room lighting. Without a unified control system, users must operate each component independently — remembering different interfaces, navigating multiple remotes, and dealing with inconsistent behaviour. AV control systems from platforms such as Crestron, AMX, Extron, and Savant unify all of these components behind a single touchscreen interface. A single button press sets the room into its videoconference mode — lowering blinds, dimming lights to the correct level, switching the display to the correct input, and launching the video conferencing application — while another button restores the room to its default state when the meeting ends. We program and commission control systems specific to your room requirements, creating an intuitive user experience that reduces the support demand generated by user confusion.',
    points: [
      'Crestron, AMX, Extron, and Savant control system programming and commissioning',
      'Single-touch room mode presets for common scenarios',
      'Integration with lighting, blinds, HVAC, and AV components',
      'Custom user interface design tailored to room function and user needs',
    ],
  },
  {
    icon: Wrench,
    title: 'AV Maintenance & Support',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'AV systems require ongoing maintenance to remain reliable. Projector lamps have finite lifetimes and require replacement before they fail unexpectedly during a critical presentation. Control system firmware requires updates to maintain compatibility with connected devices. Cables and connectors degrade over time and need inspection and replacement. Video conferencing platform updates can alter interface behaviour and require reprogramming of control systems. Our AV maintenance service provides scheduled preventive maintenance visits covering all of these requirements, combined with a reactive fault response for issues that arise between visits. Maintenance visits follow a structured checklist covering all installed components, with any identified risks documented and presented to the client with recommended remediation. Our 24/7 fault support line ensures that AV failures before important events can be reported and triaged at any time, with engineers deployed on the following business morning or sooner for critical event scenarios.',
    points: [
      'Scheduled preventive maintenance covering all installed AV components',
      'Projector lamp and filter replacement on scheduled cycles',
      'Firmware updates and control system reprogramming for platform changes',
      '24/7 fault reporting line with next-business-morning response',
    ],
  },
]

const FAQS = [
  {
    question: 'What AV systems do you install?',
    answer: 'We install the full range of professional AV systems for corporate and commercial environments. This includes video conferencing room systems (Microsoft Teams Rooms, Zoom Rooms, Cisco Webex), digital signage displays and media players, projection systems including standard throw and ultra-short-throw projectors, motorised and fixed projection screens, PA and sound systems for offices and large venues, AV control systems from Crestron, AMX, and Extron, and integrated boardroom AV solutions combining all of the above. We do not install consumer-grade equipment — all systems we deploy are specified to meet the reliability and performance requirements of professional environments with high utilisation.',
  },
  {
    question: 'Do you integrate AV with Microsoft Teams or Zoom?',
    answer: 'Yes, and it is one of our most requested services. We deploy Microsoft Teams Rooms certified hardware from manufacturers including Logitech, Poly, Lenovo, and Yealink, and Zoom Rooms certified hardware from the same manufacturers plus additional Zoom-certified partners. Certified room systems integrate natively with the video platform — the room calendar shows upcoming meetings on the room display, joining a meeting requires a single tap, and screen sharing works without cables or applications. We also integrate non-certified displays and cameras with Teams and Zoom where budget requires it, using software-based room solutions. All integrations include Azure AD or tenant registration and full testing before handover.',
  },
  {
    question: 'Can you maintain existing AV equipment?',
    answer: 'Yes. We provide maintenance services for existing AV installations regardless of who installed them. Before taking on maintenance responsibility, we conduct an assessment visit to document the installed equipment, assess its condition, identify any immediate risks, and determine whether any components are beyond economic maintenance. This assessment report is provided to you before we commit to a maintenance contract, so you have a clear picture of what you are inheriting. Our maintenance service covers scheduled preventive maintenance visits, reactive fault response, projector lamp and filter replacement, firmware and software updates, and emergency support for critical event AV failures.',
  },
  {
    question: 'Do you provide staff training on AV systems?',
    answer: 'Yes. We provide end-user training as part of every AV installation project and as a standalone service for organisations with existing systems. Training covers the day-to-day operation of the AV system from a user perspective: how to start a video call, how to share content, how to adjust volume and display settings, and what to do when something does not work as expected. For AV control systems, training covers all programmed room modes and the touchscreen interface. We provide written quick-reference guides tailored to each room system, designed to be laminated and kept in the meeting room. For organisations with frequent staff turnover, we offer recurring training sessions and train-the-trainer programmes.',
  },
  {
    question: 'What brands of AV equipment do you support?',
    answer: 'Our AV engineers are trained and experienced with the major professional AV brands deployed in Pakistani corporate environments. For video conferencing, we support Logitech, Poly (formerly Plantronics and Polycom), Cisco, Yealink, Lenovo, and HP. For displays and digital signage, we support Samsung, LG, Philips, NEC, and Sharp commercial display ranges. For projection, we support Epson, BenQ, Panasonic, Sony, and Barco. For audio, we support Bose, QSC, Crown, TOA, and Bosch. For control systems, we support Crestron, AMX, and Extron. Where a client has equipment from a brand not listed here, we will confirm compatibility before undertaking support.',
  },
]

export default function AudioVideoSupportPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Field Services', href: '/services/field-services' },
        { label: 'Audio Video Support', href: '/services/field-services/audio-video-support' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#1a1000' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#D97706,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#D97706' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#D97706' }}>Audio Video Support</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Professional AV Systems —{' '}
              <span style={{ color: '#D97706' }}>Installed & Supported Nationwide.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Boardrooms, conference rooms, training centres, and public spaces deserve AV systems that work reliably every time. Infraspine installs and maintains professional audio-visual systems across Pakistan — from Microsoft Teams Rooms and video conferencing through digital signage and projection to full PA systems — backed by same-day fault response and 24/7 support.
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
                style={{ background: '#D97706', color: '#fff' }}>
                Plan Your AV Project <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Get an AV Assessment
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
                <div className="h-px w-6" style={{ background: '#D97706' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#D97706' }}>Why Professional AV Matters</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Poor AV Technology Undermines Every Meeting It Hosts
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The quality of your meeting room AV technology sends a message to everyone who uses it — staff, clients, and partners alike. A boardroom where the video conferencing system drops calls, where remote participants cannot hear the room clearly, or where it takes ten minutes to get screen sharing working does not project professionalism. It creates frustration, wastes time, and erodes confidence in the organisation\'s investment in its working environment.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The difference between AV systems that work reliably and those that do not lies almost entirely in specification and installation quality. Consumer-grade equipment not designed for continuous commercial use fails unpredictably. Incorrectly specified microphone systems leave dead zones where participants cannot be heard. Projectors installed without acoustic and lighting consideration produce poor image quality in ambient conditions. These are not technology problems — they are specification and installation problems that professional AV engineers prevent from the outset.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Infraspine\'s AV team brings professional-grade expertise to every installation. We specify commercial-grade equipment designed for high-utilisation environments, design system architectures that account for room acoustics and lighting, and commission every installation with rigorous testing before handover. The result is AV that works first time, every time.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#D97706', text: 'Commercial-grade AV specified for continuous high-utilisation environments' },
                  { color: '#EA580C', text: 'Microsoft Teams Rooms and Zoom Rooms certified deployments' },
                  { color: '#7C3AED', text: 'Full acoustic and lighting analysis informing system design' },
                  { color: '#16A34A', text: '24/7 fault reporting with same-day response for critical events' },
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

            <div className="rounded-2xl border p-8" style={{ background: '#FFFBEB', borderColor: '#FDE68A' }}>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>AV Support Service Summary</p>
              <div className="space-y-4">
                {[
                  { label: 'AV Installations Completed', value: '100+' },
                  { label: 'Fault Support', value: '24/7 reporting line' },
                  { label: 'Emergency Response', value: 'Same-day for critical events' },
                  { label: 'Video Platforms', value: 'Teams, Zoom, Webex, Google Meet' },
                  { label: 'Control Systems', value: 'Crestron, AMX, Extron' },
                  { label: 'Coverage', value: 'Nationwide Pakistan' },
                ].map(p => (
                  <div key={p.label} className="flex items-center justify-between py-2 border-b last:border-0 text-[13px]" style={{ borderColor: '#FDE68A' }}>
                    <div className="font-semibold" style={{ color: '#0A1628' }}>{p.label}</div>
                    <div className="font-bold" style={{ color: '#D97706' }}>{p.value}</div>
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
              <div className="h-px w-6" style={{ background: '#D97706' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#D97706' }}>AV Capabilities</span>
              <div className="h-px w-6" style={{ background: '#D97706' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six AV Service Areas
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From video conferencing and digital signage through projection and PA to AV control systems and ongoing maintenance.
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

      <FAQAccordion faqs={FAQS} accent="#D97706"
        title="Audio Video Support Questions Answered"
        subtitle="Common questions from organisations planning AV installations and support." />

      <CTABanner
        heading="Transform Your Meeting Rooms with Professional AV"
        subheading="From Teams Rooms to full boardroom AV — Infraspine designs, installs, and supports AV systems that work."
        primaryCTA={{ label: 'Plan Your AV Project', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
