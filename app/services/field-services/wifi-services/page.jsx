import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Wifi, Search, Zap, Shield, Settings, Activity,
  ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'WiFi Services Pakistan | Enterprise Wireless Network',
  description: 'Enterprise wireless network design, access point installation, site surveys, and ongoing wireless support across Pakistan. Wi-Fi 6 certified, 99.9% uptime SLA, full coverage guaranteed.',
  alternates: { canonical: 'https://www.infraspine.com/services/field-services/wifi-services' },
  openGraph: {
    title: 'WiFi Services Pakistan | Enterprise Wireless Network | Infraspine',
    description: 'Enterprise wireless network design and deployment in Pakistan with Wi-Fi 6 certification and 99.9% uptime SLA.',
    url: 'https://www.infraspine.com/services/field-services/wifi-services',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Enterprise WiFi Services',
  name: 'Infraspine WiFi Services Pakistan',
  description: 'Enterprise wireless network design, access point installation, site surveys, and ongoing wireless support across Pakistan with Wi-Fi 6 certification.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/field-services/wifi-services',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '200+', label: 'Wireless Deployments', color: '#16A34A' },
  { value: '99.9%', label: 'Uptime SLA', color: '#2563EB' },
  { value: 'Wi-Fi 6', label: 'Certified', color: '#7C3AED' },
  { value: 'Full', label: 'Coverage Guaranteed', color: '#0891B2' },
]

const CAPABILITIES = [
  {
    icon: Search,
    title: 'Wireless Site Survey',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'A wireless site survey is the essential first step of any serious enterprise wireless deployment. Without a survey, access point placement is based on guesswork — and the result is a network with coverage holes, excessive interference, and a support overhead that consumes engineer time that should be spent on productive work. Our wireless site survey service uses professional survey tooling to map the RF environment of your premises before a single access point is installed. A predictive survey models signal propagation through the building based on floor plan dimensions and construction materials, producing an optimised access point placement plan. A passive survey of existing environments maps actual signal levels and identifies interference sources. A validation survey, conducted after deployment, confirms that the installed network meets the design targets. Survey outputs include a detailed report with heat maps showing signal coverage, channel utilisation, and access point placement recommendations — the evidence base for every deployment decision that follows.',
    points: [
      'Predictive survey modelling signal propagation through construction materials',
      'Passive survey of existing environments to map coverage and interference',
      'Professional heat map reports showing signal coverage and channel utilisation',
      'Post-deployment validation survey confirming design targets are met',
    ],
  },
  {
    icon: Zap,
    title: 'Access Point Design & Placement',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Access point placement is not simply a matter of installing one AP per room or at regular intervals along a corridor. Effective enterprise wireless design requires understanding how radio waves propagate through the specific building materials in your premises, how many concurrent users each AP must support, what applications those users will run, and how the access points must be coordinated to enable seamless roaming. Our wireless design service translates the findings of the site survey into a detailed deployment design: specifying the exact mounting location of each access point, the antenna orientation, the channel and power settings, and the configuration of roaming parameters such as 802.11r fast BSS transition. For environments with high user density — such as open-plan offices, call centres, or event spaces — we design high-density wireless configurations with tighter AP spacing and lower transmit power to maximise capacity per square metre. All designs are validated through post-deployment survey before project sign-off.',
    points: [
      'Data-driven AP placement based on site survey findings and user density modelling',
      'High-density wireless design for open-plan offices and event spaces',
      'Roaming parameter configuration for seamless client transition between APs',
      'Post-deployment validation survey before final project sign-off',
    ],
  },
  {
    icon: Wifi,
    title: 'Wi-Fi 6 Deployment',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Wi-Fi 6 (802.11ax) represents a substantial advancement over previous wireless standards, delivering higher throughput, dramatically improved performance in high-density environments, and better battery efficiency for client devices. The key technologies that underpin Wi-Fi 6\'s performance improvements — OFDMA for more efficient airtime utilisation, MU-MIMO for simultaneous multi-user transmission, and Target Wake Time for IoT device power management — are particularly valuable in the dense, mixed-device enterprise environments common in Pakistani organisations. Our Wi-Fi 6 deployment service handles the complete transition from assessment through installation to validation. We assess your existing access point infrastructure to determine the case for Wi-Fi 6 upgrade, taking into account the proportion of your client devices that support Wi-Fi 6 (and therefore benefit from the new standard) and the usage patterns driving demand for increased wireless capacity. New deployments are specified as Wi-Fi 6 as standard to provide a future-proof foundation for the next several years of device growth.',
    points: [
      'Wi-Fi 6 access point deployment from Cisco Meraki, HPE Aruba, and Ubiquiti',
      'OFDMA and MU-MIMO configuration for high-density performance',
      'Mixed Wi-Fi 5 and Wi-Fi 6 client device compatibility maintained',
      'Infrastructure assessment for Wi-Fi 6 upgrade planning',
    ],
  },
  {
    icon: Shield,
    title: 'Guest Network & Segmentation',
    color: '#EA580C',
    bg: '#FFF7ED',
    desc: 'Providing wireless access to guests, contractors, and BYOD (bring your own device) users without exposing the corporate network is a fundamental security and compliance requirement. A wireless network without proper segmentation allows any device connected to the guest SSID to communicate with corporate servers, databases, and workstations — a significant risk that becomes a compliance failure under standards such as ISO 27001 and PCI-DSS. Our guest network and segmentation service designs and deploys wireless architectures that isolate different classes of wireless user through VLAN segmentation and firewall policy. Corporate users authenticate to the corporate SSID using 802.1X and their Active Directory or Azure AD credentials, placing them in the corporate VLAN with access to internal resources appropriate to their role. Guest users connect to a separate SSID with a captive portal or pre-shared key, isolated in a guest VLAN with internet access only. IoT devices are placed in a further isolated VLAN preventing them from communicating with corporate or guest traffic.',
    points: [
      'Corporate SSID with 802.1X and Active Directory authentication',
      'Guest SSID with captive portal and internet-only access via VLAN isolation',
      'IoT device VLAN isolation preventing cross-segment communication',
      'Firewall policy enforcement at VLAN boundaries for segmentation integrity',
    ],
  },
  {
    icon: Settings,
    title: 'Wireless Security Configuration',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Wireless networks present a fundamentally different security challenge to wired networks because the medium is accessible to anyone within range of the signal — you cannot physically restrict who can attempt to connect in the way that a wired network restricts access to those with a physical cable. Robust wireless security therefore requires multiple layers of protection. Authentication security ensures that only authorised users and devices can connect — WPA3 Enterprise with 802.1X is the current gold standard for corporate wireless, eliminating the risk posed by shared pre-shared keys that employees take with them when they leave. Rogue AP detection identifies access points that are not part of your authorised wireless infrastructure, which may represent an attacker attempting to intercept traffic or an employee who has plugged in a personal router. Wireless intrusion detection monitors the RF environment for attack signatures including deauthentication flood attacks and evil twin attacks. We configure all of these security layers as standard on every enterprise wireless deployment we undertake.',
    points: [
      'WPA3 Enterprise with 802.1X and RADIUS authentication for corporate SSIDs',
      'Rogue AP detection and containment configuration',
      'Wireless intrusion detection and prevention system (WIDS/WIPS) setup',
      'Client isolation and management traffic separation for additional security',
    ],
  },
  {
    icon: Activity,
    title: 'Ongoing WiFi Support',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'A wireless network is not a set-and-forget infrastructure component. The RF environment changes as buildings are reconfigured, new interference sources appear, and the number and types of devices connecting to the network evolves over time. Without active monitoring and periodic tuning, a wireless network that performs well at deployment gradually deteriorates in quality as these environmental changes accumulate. Our ongoing WiFi support service provides the monitoring, maintenance, and tuning required to sustain wireless performance over the long term. Wireless monitoring collects performance metrics from every access point continuously, alerting our team when access point utilisation, error rates, or signal quality metrics indicate developing problems before users experience them. Quarterly wireless reviews compare current performance against the baseline established at deployment, identifying access points or coverage areas that require attention. Firmware updates are managed through our change control process to maintain security and add platform improvements without introducing unplanned disruption.',
    points: [
      'Continuous wireless performance monitoring with proactive alerting',
      'Quarterly wireless performance reviews against deployment baseline',
      'Access point firmware management through change control process',
      'Reactive fault support with four-hour response for wireless outages',
    ],
  },
]

const FAQS = [
  {
    question: 'What is included in a wireless site survey?',
    answer: 'A wireless site survey includes three components depending on the stage of your project. A predictive survey uses your building floor plans and construction material data to model how radio waves will propagate through the space, producing an optimised access point placement plan before any hardware is installed. A passive survey of an existing environment uses survey software running on a laptop to walk the building and measure actual signal levels, noise floor, channel utilisation, and interference from neighbouring networks and non-WiFi devices. A validation survey is conducted after a new deployment to confirm that the installed network meets the signal strength, data rate, and roaming targets defined in the design. All surveys produce a detailed report with RF heat maps, channel utilisation charts, and specific recommendations or confirmations.',
  },
  {
    question: 'Do you support Wi-Fi 6 (802.11ax)?',
    answer: 'Yes. Wi-Fi 6 is our standard specification for new enterprise wireless deployments. We are certified and experienced with Wi-Fi 6 access points from Cisco Meraki, HPE Aruba, Ubiquiti UniFi, Ruckus, and Extreme Networks. Wi-Fi 6 delivers significant performance improvements in high-density environments through OFDMA multi-user scheduling and MU-MIMO simultaneous transmission, and provides better battery life for IoT and mobile devices through the Target Wake Time feature. All Wi-Fi 6 deployments are backward-compatible with Wi-Fi 5, Wi-Fi 4, and earlier client devices, so existing devices continue to work normally during and after migration.',
  },
  {
    question: 'Can you deploy guest Wi-Fi separately from the corporate network?',
    answer: 'Yes, and we strongly recommend it. Guest WiFi should always be separated from the corporate network using VLAN isolation and firewall policy enforcement. Our standard wireless security architecture places corporate users in a corporate VLAN with access to internal resources based on their authenticated identity, while guest and contractor devices are placed in a guest VLAN with internet access only — completely unable to reach corporate servers, workstations, or internal applications. The separation is enforced by the wireless controller and network firewall, not just by SSID configuration, ensuring that even devices that bypass the SSID selection cannot reach corporate resources. We also deploy captive portal authentication for guest WiFi, requiring guests to accept acceptable use terms before gaining internet access.',
  },
  {
    question: 'How do you secure the wireless network?',
    answer: 'Enterprise wireless security requires multiple layers. Authentication security is provided by WPA3 Enterprise with 802.1X, which authenticates each user against Active Directory or Azure AD using their corporate credentials rather than a shared password — this means access is automatically revoked when a user\'s account is disabled. Rogue access point detection monitors the RF environment for unauthorised access points and alerts our team. Wireless IDS/IPS monitors for attack patterns including deauthentication floods, which attackers use to disrupt wireless connectivity. VLAN segmentation isolates different categories of wireless user from each other and from the wired corporate network. Management traffic is separated from user traffic on a dedicated management VLAN accessible only from authorised management hosts.',
  },
  {
    question: 'Do you provide ongoing WiFi monitoring?',
    answer: 'Yes. Our ongoing WiFi support service includes continuous monitoring of all managed access points, collecting metrics on client associations, data rates, error rates, channel utilisation, and access point health. Our monitoring platform alerts our team when metrics indicate developing issues — an access point with rising error rates, unusual channel utilisation, or declining signal quality — before the degradation is severe enough for users to notice. We conduct quarterly wireless reviews comparing current performance against the deployment baseline, and produce a written report with findings and recommendations. Reactive fault support is included, with a four-hour response target for wireless outages and a next-business-morning response for performance degradation reports.',
  },
]

export default function WiFiServicesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Field Services', href: '/services/field-services' },
        { label: 'WiFi Services', href: '/services/field-services/wifi-services' },
      ]} bg="#001a08" />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#001a08' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#16A34A,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#16A34A' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#16A34A' }}>WiFi Services</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Enterprise WiFi Pakistan —{' '}
              <span style={{ color: '#16A34A' }}>Wi-Fi 6. Full Coverage. 99.9% Uptime.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Unreliable WiFi is no longer a minor inconvenience — it is a business productivity crisis. Infraspine designs, deploys, and supports enterprise wireless networks across Pakistan built on professional site surveys, data-driven AP placement, Wi-Fi 6 technology, and robust security architecture. We guarantee full coverage and back it with a 99.9% uptime SLA.
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
                style={{ background: '#16A34A', color: '#fff' }}>
                Get a Wireless Survey <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Design My Network
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
                <div className="h-px w-6" style={{ background: '#16A34A' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#16A34A' }}>Why Enterprise WiFi Design Matters</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Consumer WiFi in Enterprise Settings Fails Everyone It Serves
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The most common wireless problem in Pakistani organisations is not a technology problem — it is a design problem. Consumer-grade access points installed without a site survey produce networks with coverage holes, insufficient capacity for the number of concurrent users, and security configurations inadequate for a corporate environment. The result is a wireless network that works acceptably when it is new and lightly loaded, but degrades progressively as user numbers grow and coverage gaps are discovered.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Enterprise wireless design solves these problems before they occur. A professional site survey determines exactly how many access points are needed and where they should be placed to achieve full coverage. Capacity planning ensures the wireless infrastructure can support the peak number of concurrent users on bandwidth-intensive applications. Security architecture segregates user types and protects corporate resources from unauthorised access.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Infraspine\'s wireless team has completed over 200 wireless deployments across Pakistan, from small office environments to large multi-floor corporate buildings and industrial facilities. Every deployment follows our proven design methodology: survey, design, deploy, validate. The result is a wireless network that meets its coverage, capacity, and security requirements from day one and continues to perform as the organisation grows.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#16A34A', text: '200+ wireless deployments across Pakistan with full coverage guaranteed' },
                  { color: '#2563EB', text: '99.9% uptime SLA backed by continuous performance monitoring' },
                  { color: '#7C3AED', text: 'Wi-Fi 6 certified deployments for maximum performance and longevity' },
                  { color: '#0891B2', text: 'Enterprise security including WPA3, 802.1X, and guest VLAN isolation' },
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

            <div className="rounded-2xl border p-8" style={{ background: '#F0FDF4', borderColor: '#BBF7D0' }}>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>WiFi Services Summary</p>
              <div className="space-y-4">
                {[
                  { label: 'Deployments Completed', value: '200+ nationwide' },
                  { label: 'Uptime SLA', value: '99.9%' },
                  { label: 'Wireless Standard', value: 'Wi-Fi 6 (802.11ax)' },
                  { label: 'Coverage Guarantee', value: 'Full premises coverage' },
                  { label: 'Security Standard', value: 'WPA3 Enterprise + 802.1X' },
                  { label: 'Monitoring', value: 'Continuous 24/7' },
                ].map(p => (
                  <div key={p.label} className="flex items-center justify-between py-2 border-b last:border-0 text-[13px]" style={{ borderColor: '#BBF7D0' }}>
                    <div className="font-semibold" style={{ color: '#0A1628' }}>{p.label}</div>
                    <div className="font-bold" style={{ color: '#16A34A' }}>{p.value}</div>
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
              <div className="h-px w-6" style={{ background: '#16A34A' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#16A34A' }}>WiFi Capabilities</span>
              <div className="h-px w-6" style={{ background: '#16A34A' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Enterprise WiFi Service Areas
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From professional site surveys and Wi-Fi 6 deployment through guest network segmentation to ongoing wireless monitoring and support.
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

      <FAQAccordion faqs={FAQS} accent="#16A34A"
        title="WiFi Services Questions Answered"
        subtitle="Common questions from organisations planning enterprise wireless deployments." />

      <CTABanner
        heading="Build a Wireless Network Your Business Can Rely On"
        subheading="200+ deployments. Wi-Fi 6 certified. 99.9% uptime SLA. Start with a professional site survey."
        primaryCTA={{ label: 'Get a Wireless Survey', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
