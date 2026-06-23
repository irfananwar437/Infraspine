import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import RelatedServices from '@/components/ui/RelatedServices'
import {
  Shield, Cpu, Usb, ListChecks, Wrench, Smartphone,
  ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'Endpoint Protection & EDR Services Pakistan — Infraspine',
  description: 'Infraspine delivers enterprise Endpoint Detection & Response (EDR), antivirus management, device control, application whitelisting, patch management, and MDM across Pakistan. 99.9% malware detection rate.',
  alternates: { canonical: 'https://www.infraspine.com/services/cyber-security/endpoint-protection' },
  openGraph: {
    title: 'Endpoint Protection & EDR Services Pakistan — Infraspine',
    description: 'Enterprise endpoint protection and EDR services in Pakistan — CrowdStrike, SentinelOne, Microsoft Defender, Sophos. Device control, patch management, MDM, and zero-day defence.',
    url: 'https://www.infraspine.com/services/cyber-security/endpoint-protection',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Endpoint Detection and Response',
  name: 'Infraspine Endpoint Protection & EDR',
  description: 'Enterprise endpoint protection services covering EDR, antivirus management, device control, application whitelisting, patch management, and mobile device management for organisations across Pakistan.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/cyber-security/endpoint-protection',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '99.9%', label: 'Malware Detection Rate', color: '#DC2626' },
  { value: '< 3 min', label: 'Response to Endpoint Alert', color: '#00C853' },
  { value: '40+', label: 'Endpoint Vendors Managed', color: '#7C3AED' },
  { value: 'Zero-day', label: 'Protection Enabled', color: '#2563EB' },
]

const CAPABILITIES = [
  {
    icon: Shield,
    title: 'EDR — Endpoint Detection & Response',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Traditional antivirus reacts to known malware signatures — but modern attackers use fileless techniques, living-off-the-land binaries, and polymorphic payloads that signature-based tools completely miss. Endpoint Detection and Response (EDR) changes the model by continuously recording every process, file write, registry change, and network connection on each device. When suspicious behaviour is detected — regardless of whether a signature matches — the platform raises an alert, isolates the endpoint, and captures forensic telemetry so analysts can reconstruct exactly what happened. Infraspine deploys, tunes, and monitors EDR platforms so that every alert is acted on by a human analyst within minutes, not days.',
    points: [
      'Continuous behavioural monitoring across all managed endpoints',
      'Automated threat containment and endpoint isolation',
      'Threat hunting using EDR telemetry for proactive detection',
      'Forensic timeline reconstruction for every confirmed incident',
    ],
  },
  {
    icon: Cpu,
    title: 'Antivirus & Anti-malware Management',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Antivirus remains a foundational control required by virtually every compliance framework — but unmanaged antivirus is nearly as dangerous as no antivirus. Outdated definitions, disabled real-time protection, missed quarantine events, and inconsistent policy application across a fleet of devices create gaps that attackers routinely exploit. Infraspine manages your antivirus estate centrally: enforcing consistent policy across all endpoints, ensuring definitions are updated multiple times daily, reviewing quarantine events for false positives and missed detections, and producing monthly compliance reports confirming full endpoint coverage. We work with all major platforms including Microsoft Defender, Sophos, ESET, Kaspersky, and Symantec.',
    points: [
      'Centralised policy management across all endpoint platforms',
      'Daily definition update verification and compliance reporting',
      'Quarantine event triage and false-positive tuning',
      'Coverage gap identification for unmanaged or unprotected devices',
    ],
  },
  {
    icon: Usb,
    title: 'Device Control & USB Security',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Removable media — USB drives, external hard disks, phones in mass storage mode, and SD cards — represent one of the most underestimated data loss and malware introduction vectors in enterprise environments. A single infected USB drive can introduce ransomware into an air-gapped network; an uncontrolled USB port can allow an employee or visitor to exfiltrate gigabytes of sensitive data in seconds. Infraspine implements device control policies that enforce granular rules: specific device classes can be blocked entirely, read-only access enforced, or access restricted to corporate-approved devices only. All USB connection events are logged and reviewed as part of a monthly audit.',
    points: [
      'Granular USB and removable media policy enforcement',
      'Corporate device whitelisting by hardware ID or vendor',
      'Read-only mode enforcement to prevent data exfiltration via USB',
      'Full audit logging of all device connection and transfer events',
    ],
  },
  {
    icon: ListChecks,
    title: 'Application Whitelisting',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Blacklist-based security — blocking known-bad software — is inherently reactive. Application whitelisting flips the model: only software explicitly approved for business use is permitted to execute on managed endpoints. This single control, properly implemented, prevents the vast majority of malware infections because attackers\' payloads are never on your approved list. Infraspine builds and maintains your approved application catalogue, works with your procurement and IT teams to maintain it as software needs evolve, handles exceptions through a controlled approval workflow, and monitors execution events to identify policy violations or attempts to run unauthorised code. Whitelisting is particularly powerful in environments with standard operating procedures and limited software variety.',
    points: [
      'Approved application catalogue creation and ongoing maintenance',
      'Controlled exception and approval workflow management',
      'Execution policy violation alerting and response',
      'Publisher-based and hash-based whitelisting rule support',
    ],
  },
  {
    icon: Wrench,
    title: 'Patch & Vulnerability Management',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Unpatched software is the most common root cause of endpoint compromise. Attackers actively scan for known CVEs with public exploits — and the gap between a patch being released and it being exploited in the wild is shrinking to days. Infraspine\'s patch management service ensures that critical OS patches are applied within 72 hours of release, security updates for third-party software (browsers, PDF readers, Java, and Office) are managed centrally, patch compliance is tracked per device, and exceptions are risk-accepted with a documented business justification. Monthly vulnerability scanning identifies any devices that have fallen behind and flags newly disclosed CVEs affecting your software estate.',
    points: [
      'Critical OS patch deployment within 72 hours of release',
      'Third-party application patching for browsers, Office, Java, and more',
      'Monthly vulnerability scanning and compliance reporting by device',
      'Exception management with documented risk-acceptance workflow',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile Device Management (MDM)',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'Mobile devices carry corporate email, VPN access, cloud application credentials, and sensitive documents — and most organisations have little to no visibility or control over them. A lost or stolen smartphone without device encryption, screen lock enforcement, or remote-wipe capability is a data breach waiting to happen. Infraspine deploys and manages MDM platforms including Microsoft Intune and Jamf to enforce consistent security baselines across iOS, Android, and macOS devices: mandatory encryption, screen lock, minimum OS version, app distribution and restriction, certificate-based Wi-Fi and VPN access, and remote wipe for lost or departing-employee devices. BYOD and corporate-owned device policies are handled separately with appropriate privacy controls.',
    points: [
      'iOS, Android, and macOS device enrolment and policy enforcement',
      'Mandatory encryption, screen lock, and OS version compliance',
      'Remote wipe capability for lost devices or departing employees',
      'Separate BYOD and corporate-device policy with privacy controls',
    ],
  },
]

const VENDORS = [
  'CrowdStrike Falcon', 'Microsoft Defender', 'SentinelOne', 'Sophos Intercept X',
  'Kaspersky Endpoint Security', 'Symantec Endpoint', 'ESET Endpoint Security',
  'Malwarebytes', 'Jamf Pro', 'Microsoft Intune',
]

const FAQS = [
  {
    question: 'What is the difference between antivirus and EDR?',
    answer: 'Antivirus relies primarily on signature-based detection — it compares files and processes against a database of known-bad patterns. It is effective against known malware but blind to new or modified threats that do not match any signature. EDR (Endpoint Detection and Response) takes a fundamentally different approach: it continuously records all endpoint activity — every process, network connection, file write, and registry change — and analyses behavioural patterns to identify suspicious activity, regardless of whether a matching signature exists. EDR also provides the forensic telemetry necessary to understand exactly what happened during an incident and how far an attacker progressed. Modern endpoint security best practice uses both: antivirus as a fast first layer, EDR as the deeper detection and response capability.',
  },
  {
    question: 'How many endpoints do you need before an MDM solution is worth deploying?',
    answer: 'There is no hard minimum — the value of MDM scales with both the number of devices and the sensitivity of the data they carry. Even a ten-person business whose employees use mobile devices to access corporate email or cloud applications benefits from enforced screen lock, encryption, and remote-wipe capability. For organisations with fifty or more devices, the management overhead of maintaining consistent security baselines without MDM becomes prohibitive, and MDM pays for itself quickly by reducing the time IT staff spend on manual device configuration and incident response. We recommend MDM for any organisation where mobile devices have access to corporate systems or data, regardless of size.',
  },
  {
    question: 'Can you manage endpoint protection across a mixed estate of Windows, macOS, and Linux?',
    answer: 'Yes. Modern enterprise endpoint protection platforms — CrowdStrike, SentinelOne, Microsoft Defender for Endpoint, and Sophos Intercept X — all provide cross-platform coverage for Windows, macOS, and Linux. Infraspine manages mixed estates routinely, applying platform-appropriate policies while maintaining a unified view of compliance and alert status across all platforms. For mobile devices, MDM coverage extends to iOS and Android. We provide a single monthly report covering compliance, patch status, and security events across your entire endpoint estate, regardless of platform mix.',
  },
  {
    question: 'What happens when an EDR alert fires at 2am?',
    answer: 'Response to EDR alerts depends on whether you have engaged our 24/7 managed detection and response service alongside endpoint protection. Under a fully managed service, alerts are triaged by our security operations team around the clock — critical alerts such as ransomware behaviour, credential dumping, or lateral movement trigger immediate containment actions (endpoint isolation, account suspension) and an analyst calls your designated emergency contact within fifteen minutes. Under a standard managed service covering business hours, critical alerts still trigger automated containment to limit damage, with analyst review and customer notification at the start of the next business day.',
  },
  {
    question: 'Will application whitelisting break our business applications?',
    answer: 'Application whitelisting has a reputation for causing disruption — usually because it was deployed without adequate preparation. The key is a structured implementation: we begin with a discovery phase, running whitelisting in audit mode (logging but not blocking) for two to four weeks to build a complete inventory of every application that actually runs in your environment. From this inventory, we build the initial approved catalogue, review it with your IT and business teams, and only then enable enforcement mode. A managed exception workflow ensures that legitimate new software can be approved quickly without creating security gaps. Properly implemented, whitelisting disruption is minimal.',
  },
  {
    question: 'How does endpoint protection help with compliance — PCI-DSS, ISO 27001, HIPAA?',
    answer: 'Endpoint protection controls map directly to requirements across all major compliance frameworks. PCI-DSS Requirement 5 mandates anti-malware protection on all systems; Requirement 6 covers patch management and vulnerability management. ISO 27001 Annex A controls A.8.7 (protection against malware), A.8.8 (management of technical vulnerabilities), and A.8.12 (data leakage prevention) are addressed by the combination of EDR, patch management, and device control. For healthcare organisations under HIPAA, endpoint encryption and remote-wipe capability addressed by MDM are particularly important for protecting ePHI on mobile devices. Infraspine\'s monthly compliance reports are structured to provide the evidence documentation required for audits across all of these frameworks.',
  },
]

export default function EndpointProtectionPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Cyber Security', href: '/services/cyber-security' },
        { label: 'Endpoint Protection' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#DC2626,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#DC2626' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#DC2626' }}>Endpoint Protection &amp; EDR</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Endpoint Protection &amp; EDR —{' '}
              <span style={{ color: '#DC2626' }}>Stop Threats at the Device Level.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Every laptop, desktop, server, and mobile device in your organisation is a potential entry point for attackers. Infraspine&apos;s managed endpoint protection service combines industry-leading EDR platforms with antivirus management, device control, application whitelisting, patch management, and MDM — delivering a unified defence across your entire endpoint estate, monitored by our security operations team 24 hours a day.
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
                style={{ background: '#DC2626', color: '#fff' }}>
                Get Endpoint Protection <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Request a Demo
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
                <div className="h-px w-6" style={{ background: '#DC2626' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#DC2626' }}>The Business Case</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Every Device Is a Door Into Your Organisation
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The network perimeter — the traditional boundary that firewalls and IDS systems defend — no longer defines the limit of your attack surface. Employees access corporate systems from home broadband, hotel Wi-Fi, and mobile data connections. SaaS applications process sensitive data outside your data centre. Contractors and third-party vendors connect to your systems from devices you have never seen or assessed. In this environment, the endpoint is the perimeter — and protecting it is no longer optional.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The statistics are stark. Over 70% of successful breaches originate at the endpoint. Ransomware — the most financially damaging cyber threat facing Pakistani businesses today — spreads through endpoints, encrypts data on endpoints, and exfiltrates data from endpoints. Business email compromise attacks deliver their payloads to endpoint mail clients. Supply chain attacks compromise developer endpoints to inject malicious code into legitimate software. Protecting your endpoints is protecting your business.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                What makes endpoint protection genuinely difficult is scale and heterogeneity. Most organisations have a mix of Windows laptops, macOS machines, Linux servers, Android phones, and iPhones — all requiring different tools, different policy approaches, and different management methods. Infraspine consolidates this complexity into a single managed service: one team, one reporting dashboard, one monthly security report covering your entire endpoint estate. We handle the platforms, the tuning, the alert response, and the compliance documentation so your IT team can focus on enabling the business.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#DC2626', text: 'Unified management across Windows, macOS, Linux, iOS, and Android' },
                  { color: '#7C3AED', text: 'EDR detects threats that signature-based tools miss entirely' },
                  { color: '#00C853', text: 'Patch management closes the vulnerability window attackers exploit' },
                  { color: '#2563EB', text: 'Compliance evidence for PCI-DSS, ISO 27001, and HIPAA requirements' },
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
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>Endpoint Threat Landscape — Key Statistics</p>
              <div className="space-y-3">
                {[
                  { stat: '70%+', desc: 'Of breaches originate at the endpoint', color: '#DC2626' },
                  { stat: '57%', desc: 'Of attacks exploit fileless or living-off-the-land techniques', color: '#D97706' },
                  { stat: '60 days', desc: 'Average time unpatched vulnerability is exploited after disclosure', color: '#EAB308' },
                  { stat: '37%', desc: 'Of malware delivered via removable media or USB', color: '#2563EB' },
                  { stat: '$4.45M', desc: 'Global average cost of a data breach', color: '#64748B' },
                ].map(s => (
                  <div key={s.stat} className="p-3 rounded-xl border" style={{ borderColor: `${s.color}30`, background: `${s.color}08` }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[15px] font-black" style={{ color: s.color }}>{s.stat}</span>
                    </div>
                    <p className="text-[12px]" style={{ color: '#64748B' }}>{s.desc}</p>
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
              <div className="h-px w-6" style={{ background: '#DC2626' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#DC2626' }}>Service Capabilities</span>
              <div className="h-px w-6" style={{ background: '#DC2626' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Layers of Endpoint Defence
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From next-generation EDR to mobile device management — every endpoint, every platform, every threat covered.
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
            Endpoint Platforms We Manage
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

      <FAQAccordion faqs={FAQS} accent="#DC2626"
        title="Endpoint Protection Questions Answered"
        subtitle="Common questions from IT managers and security leads evaluating endpoint protection services." />

      <CTABanner
        heading="Secure Every Endpoint in Your Organisation"
        subheading="Stop threats at the device level before they reach your network, data, or customers. Talk to Infraspine about managed endpoint protection today."
        primaryCTA={{ label: 'Get Protected Today', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <RelatedServices currentHref="/services/cyber-security/endpoint-protection" accent="#DC2626" />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
