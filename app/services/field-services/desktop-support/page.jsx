import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Monitor, Settings, Wrench, Users, Printer, Database,
  ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'Desktop & IT Support Services Pakistan | End-User Support',
  description: 'On-site and remote end-user support for desktops, laptops, OS, software, and peripherals across Pakistan. Under 2hr on-site response, 92% first-call resolution.',
  alternates: { canonical: 'https://www.infraspine.com/services/field-services/desktop-support' },
  openGraph: {
    title: 'Desktop & IT Support Services Pakistan | End-User Support | Infraspine',
    description: 'On-site and remote end-user support for desktops, laptops, OS, software, and peripherals across Pakistan.',
    url: 'https://www.infraspine.com/services/field-services/desktop-support',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Desktop & IT Support',
  name: 'Infraspine Desktop & IT Support Services Pakistan',
  description: 'On-site and remote end-user support for desktops, laptops, OS, software, and peripherals across Pakistan with under 2-hour on-site response.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/field-services/desktop-support',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '<2hr', label: 'On-Site Response', color: '#2563EB' },
  { value: '92%', label: 'First-Call Resolution', color: '#7C3AED' },
  { value: '200+', label: 'Device Models', color: '#0891B2' },
  { value: '8/5 & 24/7', label: 'Options Available', color: '#16A34A' },
]

const CAPABILITIES = [
  {
    icon: Monitor,
    title: 'OS Installation & Configuration',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Operating system installation and configuration is the foundation of every end-user computing environment. Whether you are deploying new devices to staff, rebuilding devices after a system failure, or migrating users from Windows 10 to Windows 11, getting the OS correctly installed and configured is critical to user productivity. Our desktop engineers handle the complete OS setup process: clean installation, joining the device to the corporate domain or Azure Active Directory, applying Group Policy settings, configuring Windows Update and security policies, installing endpoint protection, and verifying network connectivity and shared resource access. We work from standardised build documentation to ensure every device receives a consistent, secure configuration that complies with your IT policy. For organisations undertaking large-scale OS migrations, we develop and test a reference build before deployment, conduct a pilot with representative users, and then execute the rollout with a documented change process.',
    points: [
      'Clean OS installation for Windows 10, Windows 11, and macOS',
      'Domain and Azure AD join with Group Policy and security policy application',
      'Standardised build methodology ensuring consistent device configuration',
      'Large-scale OS migration planning, piloting, and rollout execution',
    ],
  },
  {
    icon: Settings,
    title: 'Software Deployment & Patching',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Keeping software up to date is one of the most effective security controls available, yet patch management remains inconsistent across many Pakistani organisations due to the operational overhead of testing and deploying updates at scale. Our software deployment and patching service manages the full lifecycle of application installation and update across your desktop estate. We deploy software using enterprise deployment tools including Microsoft Endpoint Configuration Manager (MECM/SCCM), Microsoft Intune, and PDQ Deploy, ensuring applications are installed silently, correctly, and consistently without requiring local administrator rights. Patching is managed through a defined monthly cycle: patches are tested in a staging environment, approved through a change control process, and deployed to production in waves that minimise disruption. Critical security patches are fast-tracked outside the standard cycle within agreed emergency change procedures.',
    points: [
      'Centrally managed software deployment via MECM, Intune, or PDQ Deploy',
      'Monthly patching cycle with staging environment testing before production',
      'Emergency patch deployment within 24 hours for critical security vulnerabilities',
      'Application packaging and deployment for line-of-business software',
    ],
  },
  {
    icon: Wrench,
    title: 'Hardware Troubleshooting',
    color: '#EA580C',
    bg: '#FFF7ED',
    desc: 'Hardware problems at the end-user level range from straightforward component failures — a dead hard drive or failed RAM module — to intermittent issues that are difficult to diagnose because they only occur under specific conditions. Our desktop engineers combine methodical diagnostic procedures with purpose-built hardware testing tools to isolate faults accurately, avoiding the time wasted replacing components that are not actually faulty. Common desktop hardware faults we resolve include failing storage drives (HDD and SSD), overheating and thermal management issues, failed display panels and backlight units, damaged or unresponsive keyboards and trackpads on laptops, port failures including USB, HDMI, and Ethernet, and battery degradation on portable devices. Where a hardware fault is intermittent or complex, engineers can collect detailed diagnostic data over a monitoring period to build an evidence base before committing to a repair action.',
    points: [
      'Structured hardware diagnostics for desktops, laptops, and workstations',
      'Storage health testing with early warning of imminent drive failure',
      'Component-level repair and replacement for common end-user devices',
      'Intermittent fault diagnosis with extended monitoring where required',
    ],
  },
  {
    icon: Users,
    title: 'User Account Management',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'User account issues are among the most frequent calls to any IT support desk — locked accounts, forgotten passwords, permission problems, new starters requiring access provisioning, and leavers requiring access revocation. While individually straightforward, the volume of user account requests across a medium or large organisation creates significant IT support overhead if not managed systematically. Our desktop support service includes on-site user account management for Active Directory and Azure Active Directory environments, handling account creation, password resets, account unlocks, group membership changes, shared mailbox access, distribution list management, and software licence assignment. We follow your onboarding and offboarding procedures precisely, ensuring new starters have the access they need on day one and that leavers\' access is revoked completely and promptly. For organisations without documented procedures, we can help establish them.',
    points: [
      'Active Directory and Azure AD account creation, modification, and deactivation',
      'Password reset and account unlock with user identity verification',
      'Onboarding and offboarding access provisioning following defined procedures',
      'Microsoft 365 licence assignment, mailbox configuration, and distribution lists',
    ],
  },
  {
    icon: Printer,
    title: 'Printer & Peripheral Setup',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Printers and peripherals are persistently problematic elements of the end-user computing environment, combining mechanical complexity with network and driver dependencies that create frequent support demand. Our desktop support service handles the installation, configuration, and troubleshooting of all printer types including local USB-connected printers, networked laser printers, multifunction devices, and large-format printers. We configure shared printing environments, deploy printer drivers via Group Policy or print management software, and resolve print queue issues, spooler corruption, and driver conflicts. Beyond printers, we support the full range of desktop peripherals: monitors, docking stations, external storage, webcams, headsets, barcode scanners, card readers, and specialist input devices. We manage the driver installation, firmware updates, and configuration required to make each device work correctly with the user\'s workstation and the corporate network.',
    points: [
      'Network printer installation, driver deployment, and shared print queue configuration',
      'Multifunction device setup including scan-to-email and scan-to-folder workflows',
      'Print spooler troubleshooting and driver conflict resolution',
      'Peripheral device installation including docking stations, webcams, and headsets',
    ],
  },
  {
    icon: Database,
    title: 'Asset Tagging & Inventory',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'Accurate IT asset records are the foundation of effective IT management. Without a reliable inventory of what devices exist, where they are located, who is using them, and what their warranty and support status is, IT support becomes reactive and inefficient. Our asset tagging and inventory service creates and maintains accurate asset records for every device in your estate. New devices are tagged with unique identifiers (physical asset labels and RFID tags where required) and registered in your IT asset management system with full configuration details, serial numbers, purchase dates, warranty expiry, and assigned user or location. For existing estates without accurate inventory records, we conduct physical audits — visiting each location, physically locating every IT asset, scanning or manually recording asset details, and reconciling the results against any existing records to identify discrepancies, unregistered assets, and ghost assets.',
    points: [
      'Physical asset tagging with labels and optional RFID for high-value items',
      'Asset registration with full configuration, warranty, and ownership details',
      'Physical estate audits to establish accurate baseline inventory',
      'Ongoing asset record maintenance through deployment and decommission workflows',
    ],
  },
]

const FAQS = [
  {
    question: 'What does desktop support include?',
    answer: 'Our desktop support service covers the complete range of end-user computing support: OS installation and configuration, software deployment and patching, hardware troubleshooting and repair, user account management in Active Directory and Azure AD, printer and peripheral installation and troubleshooting, and asset tagging and inventory management. Both on-site and remote support are included — remote support is used for issues that can be resolved without physical access, reducing response times and cost, while on-site support is deployed for hardware faults, complex configuration issues, and situations where remote access is not available. Our service desk is the single point of contact for all end-user support requests, triaging and routing each request to the appropriate resolution channel.',
  },
  {
    question: 'How quickly can an engineer arrive on-site?',
    answer: 'Under our standard desktop support SLA, an engineer will be on-site within two hours of a request being logged and accepted during business hours. For remote support, we target a response within 15 minutes. Our 92% first-call resolution rate means the majority of issues are resolved in the first interaction without requiring escalation or a follow-up visit. We offer SLA customisation for organisations with specific requirements — for example, a higher priority tier for executives or business-critical roles that reduces the on-site response to one hour. All SLA performance is tracked in our service management platform and reported monthly.',
  },
  {
    question: 'Do you support both Windows and Mac?',
    answer: 'Yes. We support both Windows and macOS end-user environments. Our engineers are proficient in Windows 10 and Windows 11 administration, including Active Directory, Group Policy, and Microsoft 365 integration. For macOS environments, we support device management via Apple Business Manager and Microsoft Intune, application deployment, macOS system administration, and integration with Active Directory and Azure AD for identity and access management. Mixed environments — where some users have Windows devices and others have Macs — are also fully supported. We maintain up-to-date knowledge of both platforms and the productivity applications used across them.',
  },
  {
    question: 'Can you handle large numbers of users across multiple sites?',
    answer: 'Yes. Our desktop support service is designed to scale from single-site organisations to large enterprises with hundreds or thousands of users across multiple Pakistani cities. For multi-site clients, we leverage our nationwide engineer network to provide consistent on-site response at every location under a single service contract. Centralised service desk functions — ticket logging, triage, remote support, and reporting — are handled from our operations centre, while on-site support is delivered by local engineers from our regional teams. For large-scale projects such as OS migrations or device rollouts affecting large user populations, we deploy coordinated teams to meet the delivery timeline.',
  },
  {
    question: 'What is included in your SLA?',
    answer: 'Our desktop support SLA covers response time commitments (the time between a request being logged and an engineer beginning work on it), resolution time targets (the time within which we aim to fully resolve the issue), availability commitments (the hours during which service is provided), and escalation procedures (what happens when an issue cannot be resolved within the target time). Standard SLAs include two-hour on-site response, four-hour resolution target for standard faults, and business-hours availability. Extended SLAs are available with enhanced response times, extended hours, and 24/7 coverage options. Monthly SLA performance reports are provided to all contracted clients, covering response compliance, resolution rates, volume by category, and trend analysis.',
  },
]

export default function DesktopSupportPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Field Services', href: '/services/field-services' },
        { label: 'Desktop & IT Support', href: '/services/field-services/desktop-support' },
      ]} bg="#00082a" />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#00082a' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#2563EB,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#2563EB' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>Desktop & IT Support</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              End-User IT Support —{' '}
              <span style={{ color: '#2563EB' }}>On-Site Within Two Hours.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Your users need IT support that arrives quickly, resolves the issue the first time, and does not leave them waiting for callbacks or follow-up visits. Infraspine\'s desktop support service combines a sub-two-hour on-site response SLA with a 92% first-call resolution rate, keeping your people productive and your IT operations running smoothly.
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
                style={{ background: '#2563EB', color: '#fff' }}>
                Get Desktop Support <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Request a Quote
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
                <div className="h-px w-6" style={{ background: '#2563EB' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>Why Desktop Support Matters</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Slow IT Support Has a Direct Cost to Your Business
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Every hour a user spends waiting for IT support to resolve a problem is an hour of lost productivity. Across an organisation of 100 users, even a two-hour average resolution time for common IT issues translates to thousands of hours of lost productivity annually. Poor IT support also has a measurable impact on employee satisfaction — users who spend their days fighting technology they cannot get help with quickly become frustrated and disengaged.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Many organisations in Pakistan rely on internal IT staff for desktop support, which creates a structural bottleneck. A single IT person supporting 100 users cannot provide fast, consistent support across all categories of issue, especially when hardware repairs, software deployments, and infrastructure projects compete for the same resource. The result is a triage queue where urgent issues wait behind planned work and vice versa.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Infraspine\'s desktop support service provides a scalable, SLA-backed alternative. Our team scales to meet demand, our service desk provides a consistent first point of contact, and our field engineers provide on-site resolution when remote support is insufficient. The result is predictable, measurable support quality across your entire user base.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#2563EB', text: 'Under two-hour on-site response SLA for end-user issues' },
                  { color: '#7C3AED', text: '92% of issues resolved on first contact or first visit' },
                  { color: '#0891B2', text: 'Remote and on-site support combined in a single service' },
                  { color: '#16A34A', text: 'Scalable from 10 users to 10,000 users across multiple sites' },
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

            <div className="rounded-2xl border p-8" style={{ background: '#EFF6FF', borderColor: '#BFDBFE' }}>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>Desktop Support Service Summary</p>
              <div className="space-y-4">
                {[
                  { label: 'On-Site Response', value: 'Under 2 hours' },
                  { label: 'Remote Response', value: '15 minutes' },
                  { label: 'First-Call Resolution', value: '92%' },
                  { label: 'Device Models Supported', value: '200+' },
                  { label: 'Operating Systems', value: 'Windows, macOS' },
                  { label: 'Availability', value: '8/5 and 24/7 options' },
                ].map(p => (
                  <div key={p.label} className="flex items-center justify-between py-2 border-b last:border-0 text-[13px]" style={{ borderColor: '#BFDBFE' }}>
                    <div className="font-semibold" style={{ color: '#0A1628' }}>{p.label}</div>
                    <div className="font-bold" style={{ color: '#2563EB' }}>{p.value}</div>
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
              <div className="h-px w-6" style={{ background: '#2563EB' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>Support Capabilities</span>
              <div className="h-px w-6" style={{ background: '#2563EB' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Desktop Support Service Areas
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Comprehensive end-user computing support from OS and software management through hardware troubleshooting to asset control.
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

      <FAQAccordion faqs={FAQS} accent="#2563EB"
        title="Desktop Support Questions Answered"
        subtitle="Common questions from organisations evaluating end-user IT support services." />

      <CTABanner
        heading="Fast, Reliable Desktop Support for Your Team"
        subheading="Give your users the IT support they deserve — on-site within two hours, resolved first time."
        primaryCTA={{ label: 'Get Desktop Support', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
