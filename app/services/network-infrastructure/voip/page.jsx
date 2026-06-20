import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Phone, Monitor, Network, Users, Zap, Shield, CheckCircle, ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'VoIP & Business Phone Systems Pakistan — Unified Communications | Infraspine',
  description: 'Infraspine VoIP & Unified Communications: cloud PBX, Microsoft Teams Phone, SIP trunking, call center solutions, and video conferencing for Pakistan businesses. Cut call costs by up to 60%.',
  alternates: { canonical: 'https://www.infraspine.com/services/network-infrastructure/voip' },
  openGraph: {
    title: 'VoIP & Business Phone Systems Pakistan — Unified Communications | Infraspine',
    description: 'Infraspine VoIP & Unified Communications: cloud PBX, Microsoft Teams Phone, SIP trunking, call center solutions, and video conferencing for Pakistan businesses. Cut call costs by up to 60%.',
    url: 'https://www.infraspine.com/services/network-infrastructure/voip',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'VoIP & Unified Communications',
  name: 'Infraspine VoIP & Unified Communications',
  description: 'Cloud PBX, Microsoft Teams Phone, SIP trunking, call center solutions, video conferencing, and VoIP security services for businesses in Pakistan. Cut call costs by up to 60% while gaining enterprise-grade unified communications.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/network-infrastructure/voip',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '99.99%', label: 'Call Quality Uptime', color: '#0891B2' },
  { value: '60%', label: 'Average Call Cost Reduction', color: '#0891B2' },
  { value: '1,000+', label: 'Extensions Managed', color: '#0891B2' },
  { value: '24/7', label: 'Support Coverage', color: '#0891B2' },
]

const CAPABILITIES = [
  {
    icon: Phone,
    title: 'Cloud PBX & Hosted Phone Systems',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'A Cloud PBX replaces your ageing on-premise phone system with a fully managed, software-defined telephone exchange hosted in the cloud or on a local appliance, depending on your requirements. We deploy and configure market-leading platforms including 3CX, Yeastar P-Series, FreePBX, and Grandstream UCM series, each chosen based on your organisation\'s size, call volume, and feature requirements. Every deployment is fully customised before go-live: auto-attendant greetings and menu trees are programmed to reflect your business hours and departments, IVR flows route callers to the correct team without the need for a receptionist, voicemail-to-email delivers missed call recordings directly to your inbox, and time-based routing sends calls to different destinations outside business hours. Hunt groups ensure that incoming calls ring multiple extensions simultaneously or sequentially so calls are never missed. Softphone apps for Windows, macOS, iOS, and Android mean your team can take business calls from anywhere, and physical desk phones from Yealink, Grandstream, and Snom are provisioned automatically via our configuration server. We handle number porting, vendor coordination, user training, and ongoing system maintenance so your team can focus on the business rather than the phone system.',
    points: [
      '3CX, Yeastar, FreePBX, and Grandstream UCM deployment and configuration',
      'Auto-attendant, IVR, voicemail-to-email, and hunt group setup',
      'Softphone apps for Windows, macOS, iOS, and Android',
      'Time-based call routing and after-hours failover configuration',
    ],
  },
  {
    icon: Monitor,
    title: 'Microsoft Teams Phone Integration',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Microsoft Teams is already the collaboration hub for millions of employees worldwide, and Teams Phone extends that platform to handle real telephone calls to and from the public telephone network — eliminating the need for a separate desk phone or phone system entirely. We configure Teams Phone through two primary delivery methods: Direct Routing, where your existing SIP trunk is connected to Teams via a certified Session Border Controller (SBC) that we deploy and manage, giving you full control over call routing and carrier choice; and Operator Connect, where a certified Microsoft operator provides PSTN calling capacity directly within the Teams admin centre, simplifying management. Both approaches allow users to make and receive calls to any telephone number directly within the Teams desktop and mobile app. We configure auto-attendants and call queues through the Teams admin centre, port your existing numbers, and integrate Teams Phone with your broader Microsoft 365 environment including SharePoint, Outlook calendar integration for presence awareness, and Power Automate for workflow-driven call handling. Hybrid PSTN configurations allow Teams Phone to coexist with an existing on-premise PBX during a phased migration, protecting your investment in existing handsets and infrastructure while the transition is completed at a pace that suits your organisation.',
    points: [
      'Teams Direct Routing via certified SBC deployment and management',
      'Operator Connect setup for simplified Microsoft-managed PSTN calling',
      'Auto-attendant and call queue configuration in Teams admin centre',
      'Number porting, hybrid PSTN coexistence, and Microsoft 365 integration',
    ],
  },
  {
    icon: Network,
    title: 'SIP Trunking & PSTN Connectivity',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'SIP trunking replaces the physical analog telephone lines and ISDN BRI/PRI circuits that connect your phone system to the public telephone network with a far more cost-effective and flexible IP-based alternative delivered over your existing internet connection. Instead of paying line rental for ten, twenty, or fifty physical lines that are only used for a fraction of the day, SIP trunks provide concurrent call capacity that is licensed per simultaneous call, reducing line costs by 40–70% for most organisations. We procure SIP trunking from carriers with proven quality in Pakistan and the international markets your business calls, configure your Session Border Controller for registration, authentication, codec negotiation (G.711, G.722, G.729), and DTMF handling, and connect the trunk to your existing PBX or new cloud phone system. Direct Inward Dialling (DID) numbers can be presented on any geographic local number, allowing your Pakistan business to present local numbers in Lahore, Karachi, Islamabad, or international cities where you have customers. Toll-free 0800 numbers are available for customer service lines. Failover routing automatically redirects inbound calls to mobile numbers or an alternative trunk if your primary internet connection fails, ensuring business continuity. Number porting transfers your existing landline numbers from your current carrier to the SIP platform without changing your advertised numbers.',
    points: [
      'SIP trunk procurement, SBC configuration, and carrier-to-PBX connection',
      'Local and international DID numbers and toll-free 0800 configuration',
      'Codec optimisation (G.711, G.722, G.729) for call quality and bandwidth efficiency',
      'Failover routing to mobile or alternate trunk on internet outage',
    ],
  },
  {
    icon: Users,
    title: 'Call Center & Contact Centre Solutions',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'A well-designed contact centre solution transforms customer service from a cost centre into a competitive advantage. We design and deploy inbound and outbound contact centre platforms scaled appropriately to your agent count and call volume — from a 5-seat inbound support queue through to a 200-seat blended outbound sales and service operation. Inbound ACD (Automatic Call Distribution) queues manage call flow intelligently: priority routing serves VIP customers first, skills-based routing connects callers to the agent best qualified to help them, and real-time queue dashboards give supervisors visibility into wait times, queue depth, and agent availability. Outbound dialler configurations support preview dialling where agents review contact details before the call is placed, and progressive dialling for high-volume outbound campaigns. Call recording captures every conversation for quality assurance, compliance, and training, with recordings stored securely and accessible through a web portal with role-based access control. Live monitoring allows supervisors to listen to active calls, whisper coaching provides guidance to agents without the customer hearing, and barge-in allows supervisors to join a call when needed. CRM integration with Salesforce, HubSpot, Zoho CRM, and Microsoft Dynamics creates automatic call logging, screen pops with customer history on incoming calls, and click-to-dial from within the CRM. Omnichannel queuing combines phone, email, and web chat into a unified agent workspace so customers can reach you through their preferred channel.',
    points: [
      'Inbound ACD with skills-based routing, priority queuing, and real-time wallboard',
      'Outbound preview and progressive dialler for sales and survey campaigns',
      'Call recording, supervisor monitoring, whisper coaching, and barge-in capability',
      'CRM integration with Salesforce, HubSpot, Zoho, and Microsoft Dynamics',
    ],
  },
  {
    icon: Zap,
    title: 'Video Conferencing & Collaboration',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Modern businesses need more than audio calls — they need rich video collaboration that works reliably across meeting rooms, home offices, and mobile devices. We design and deploy complete video conferencing environments built around the platforms your team already uses or that best fit your meeting culture and budget. Zoom Rooms transforms ordinary meeting rooms into one-touch video conferencing spaces: a dedicated Zoom Rooms appliance connects to a room display, speakerphone, and camera to deliver a consistent, no-fumble meeting experience for every participant whether they are in the room or joining remotely. Microsoft Teams Rooms delivers the equivalent experience within the Teams ecosystem, supporting hybrid meetings where remote and in-room participants see each other clearly and share content without friction. Hardware selection covers every room size: huddle spaces use compact Poly Studio, Jabra PanaCast, or Logitech Rally Bar Mini systems, while large boardrooms receive PTZ cameras, ceiling-array microphones, and multi-display video bars with content sharing. Room scheduling panels from Crestron, Logitech, and Yealink show room availability at a glance and allow instant reservation from outside the room. For organisations receiving external guests, we configure virtual reception workflows where visitors are admitted from a waiting room by a host. Webinar capabilities through Zoom Webinars or Teams Live Events allow your marketing and leadership teams to host large-audience presentations with Q&A management, registration, and cloud recording for on-demand replay.',
    points: [
      'Zoom Rooms and Microsoft Teams Rooms deployment and configuration',
      'Poly, Jabra, and Logitech hardware for huddle spaces and large boardrooms',
      'Room scheduling panels, virtual reception, and one-touch meeting join',
      'Webinar setup with registration, Q&A management, and cloud recording',
    ],
  },
  {
    icon: Shield,
    title: 'VoIP Security & Quality of Service',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'VoIP infrastructure is a high-value attack target: toll fraud through compromised extensions can accumulate international call charges of thousands of dollars overnight, while poorly secured SIP registrations are probed continuously by automated scanners. Equally, poor call quality caused by network congestion or misconfigured QoS destroys the business case for any VoIP deployment. We address both dimensions comprehensively. On the security side, all call signalling is protected using TLS (Transport Layer Security) and all media is encrypted using SRTP (Secure Real-time Transport Protocol), ensuring conversations cannot be intercepted or recorded by third parties on the network path. Session Border Controllers provide a hardened perimeter between your phone system and the internet, blocking SIP scanning, enforcing registration authentication, and applying call rate limiting to detect and stop toll fraud in real time. Vishing (voice phishing) awareness is incorporated into our user training programmes. Concurrent call limits and geographic call restrictions prevent fraudulent international calls even if credentials are compromised. On the quality side, we configure DSCP marking across your LAN and WAN so voice packets are always forwarded with strict priority over data traffic. QoS policies on your router and switches guarantee the bandwidth and latency envelope that voice requires: less than 150ms one-way delay, less than 30ms jitter, and less than 1% packet loss. Bandwidth management prevents a large file download or video stream from degrading call quality during peak hours.',
    points: [
      'SRTP media encryption and TLS signalling protection on all calls',
      'Session Border Controller deployment for SIP perimeter security and toll fraud prevention',
      'DSCP QoS marking on LAN and WAN to prioritise voice traffic end to end',
      'Concurrent call limits and geographic call restrictions against fraud',
    ],
  },
]

const VENDORS = [
  '3CX', 'Yeastar', 'FreePBX', 'Grandstream', 'Microsoft Teams Phone',
  'Zoom Rooms', 'Yealink', 'Poly', 'Jabra', 'Logitech', 'AudioCodes',
]

const FAQS = [
  {
    question: 'What is VoIP and how is it different from a traditional phone system?',
    answer: 'VoIP (Voice over Internet Protocol) converts your voice into digital data packets and transmits them over your internet connection or local area network rather than over dedicated copper telephone lines. A traditional phone system — whether a key system or a full PBX — relies on physical analog or ISDN circuits rented from the telephone company, with line rental costs charged per physical line regardless of usage. VoIP eliminates those per-line costs entirely: you pay for the concurrent call capacity you actually need, which for most businesses is substantially less than the number of physical extensions. Beyond cost, VoIP unlocks features that traditional systems cannot deliver at any price: softphone apps so staff can take calls from anywhere, visual voicemail, CRM integration with automatic call logging, real-time call analytics, and seamless integration with video conferencing and messaging platforms. The trade-off is that VoIP depends on your internet connection and local network infrastructure, which is why proper QoS configuration, sufficient internet bandwidth, and a quality router are essential foundations for any VoIP deployment.',
  },
  {
    question: 'Can we keep our existing phone numbers when switching to VoIP?',
    answer: 'Yes, in virtually all cases your existing landline and mobile numbers can be ported to your new VoIP platform. Number porting is a regulated process in Pakistan and most international jurisdictions that requires your current carrier to release the numbers to your new VoIP provider. We manage the porting process end to end: we prepare and submit the Letter of Authorisation, liaise with both your current carrier and the new SIP trunk provider, and coordinate the cutover timing to minimise disruption to inbound calls. Porting timescales vary by carrier and number type but typically take 5–15 business days for geographic landline numbers. During the porting window, call forwarding from the old carrier ensures no calls are missed. If you have numbers that cannot be ported for any reason, we can arrange for a forwarding number to be retained, maintaining reachability on your published contact numbers indefinitely.',
  },
  {
    question: 'How much bandwidth does VoIP require per concurrent call?',
    answer: 'Bandwidth consumption per VoIP call depends on the codec used. The most common codec, G.711, uses approximately 87 kbps per concurrent call including IP packet headers (64 kbps for the audio itself plus overhead). G.729, a compressed codec, reduces this to approximately 31 kbps per call at a slight reduction in audio fidelity. G.722 provides HD voice quality and uses a similar bandwidth envelope to G.711 but with noticeably better call clarity. For a business with 20 concurrent calls — a typical peak for a 50-person office — G.711 requires approximately 1.7 Mbps of committed bandwidth dedicated to voice, well within the capacity of any modern business broadband connection. The more important consideration is not raw bandwidth but latency and jitter: VoIP requires one-way latency below 150ms and jitter below 30ms to sound natural. Packet loss above 1% causes audible audio degradation. This is why we configure QoS on your network to prioritise voice packets even when the internet link is congested with other traffic.',
  },
  {
    question: 'What happens to our phone system if the internet goes down?',
    answer: 'Internet outages are the most common concern raised by businesses evaluating VoIP, and it is a legitimate one — but there are multiple layers of resilience we put in place to minimise the impact. First, we configure failover routing at the SIP trunk level: if your primary internet connection becomes unavailable, inbound calls are automatically redirected to a mobile number, an alternative office location, or a voicemail service within seconds of the outage being detected, without any manual intervention. Second, for business-critical voice requirements, we can configure a secondary internet connection on a different carrier or technology — for example a 4G/5G failover router — that activates automatically when the primary link fails. Third, many of our cloud PBX platforms support PSTN fallback: a small number of physical analog lines connected to a gateway device allow outbound emergency calls even when internet connectivity is fully unavailable. We assess your business continuity requirements during the design phase and recommend the appropriate combination of resilience measures.',
  },
  {
    question: 'Is Microsoft Teams Phone a complete replacement for a traditional PBX?',
    answer: 'For the majority of office-based businesses, yes — Microsoft Teams Phone delivers all the functionality that a traditional PBX provides and considerably more, particularly if your organisation already uses Microsoft 365. Teams Phone supports multiple lines per user, call hold and transfer, call forwarding, voicemail, auto-attendant, call queues for group answering, and emergency calling. The significant advantages over a traditional PBX include the ability for users to take calls on any device — PC, Mac, iPhone, Android — without additional hardware, native integration with Outlook calendar for presence and do-not-disturb management, and a single admin console that manages both telephony and collaboration without separate vendor relationships. The areas where a traditional PBX or a dedicated hosted PBX such as 3CX may still be preferable are: very large contact centres requiring advanced outbound dialler functionality, environments with many analog devices such as fax machines, door intercoms, or paging systems that require analog adapters, and organisations with complex call recording compliance requirements that are better served by a dedicated call recording platform. We assess your requirements and recommend the right platform for your specific situation.',
  },
]

export default function VoIPPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Network Infrastructure', href: '/services/network-infrastructure' },
        { label: 'VoIP & Communications' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#0891B2,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-10 sm:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#0891B2' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0891B2' }}>VoIP & Unified Communications</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              VoIP & Business Phone Systems —{' '}
              <span style={{ color: '#0891B2' }}>Cut Costs, Stay Connected.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Traditional phone systems are expensive to maintain, inflexible to scale, and incapable of supporting modern hybrid work. Infraspine designs and deploys cloud PBX, Microsoft Teams Phone, SIP trunking, and contact centre solutions that reduce call costs by up to 60% while giving your team enterprise-grade communications on any device, anywhere. From a five-person office to a 200-seat call centre, we deliver unified communications that work from day one.
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
                Get a VoIP Assessment <ArrowRight size={14} />
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
                <div className="h-px w-6" style={{ background: '#0891B2' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0891B2' }}>The Business Case</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Why Pakistan Businesses Are Moving to VoIP
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Legacy PBX systems were built for a world where every employee sat at a fixed desk with a dedicated handset and every office had its own telephone exchange. That world has fundamentally changed. Staff work from home, travel between sites, take customer calls on mobile, and collaborate across borders. A traditional phone system cannot follow them — and the hardware and line rental costs continue accumulating whether the system is being used or not.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                VoIP and unified communications eliminate the physical constraints of traditional telephony. Your phone system lives in the cloud or on a local server — not in a locked comms room full of proprietary hardware. Extensions can be added in minutes rather than weeks. Remote workers get a full business phone presence on their laptop or mobile. International calling rates drop dramatically. And when you integrate voice with Microsoft Teams or a CRM platform, the productivity gains compound across every customer-facing interaction.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Businesses that switch to VoIP typically see call cost reductions of 40–60% in the first year, with additional savings from eliminating PBX hardware maintenance contracts and reducing reliance on mobile calls for internal communication. The return on investment is usually realised within six to twelve months of deployment — making VoIP one of the highest-value infrastructure investments available to a growing business.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#0891B2', text: '40–60% reduction in call costs vs traditional line rental' },
                  { color: '#0891B2', text: 'Full phone presence on any device — desk, laptop, or mobile' },
                  { color: '#0891B2', text: 'Add or remove extensions in minutes, not weeks' },
                  { color: '#0891B2', text: 'Native integration with Microsoft 365 and CRM platforms' },
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
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>Traditional PBX vs VoIP Comparison</p>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2 text-[10px] font-bold uppercase tracking-wider pb-1 border-b" style={{ color: '#94A3B8', borderColor: '#E2E8F0' }}>
                  <div></div><div>Legacy PBX</div><div>Infraspine VoIP</div>
                </div>
                {[
                  { label: 'Call Cost', internal: 'High line rental', managed: '40–60% savings' },
                  { label: 'Remote Working', internal: 'Not supported', managed: 'Full softphone support' },
                  { label: 'Adding Extensions', internal: '2–4 weeks', managed: 'Minutes' },
                  { label: 'Hardware Cost', internal: 'High upfront capex', managed: 'Low or zero' },
                  { label: 'CRM Integration', internal: 'Rarely possible', managed: 'Native integration' },
                  { label: 'International Calls', internal: 'Expensive', managed: 'Near-local rates' },
                ].map(p => (
                  <div key={p.label} className="grid grid-cols-3 gap-2 py-2 border-b last:border-0 text-[12px]" style={{ borderColor: '#E2E8F0' }}>
                    <div className="font-semibold" style={{ color: '#0A1628' }}>{p.label}</div>
                    <div style={{ color: '#DC2626' }}>{p.internal}</div>
                    <div className="font-semibold" style={{ color: '#0891B2' }}>{p.managed}</div>
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
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0891B2' }}>VoIP Capabilities</span>
              <div className="h-px w-6" style={{ background: '#0891B2' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Core VoIP Service Areas
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From cloud PBX deployment through Microsoft Teams Phone integration to contact centre solutions and VoIP security — complete unified communications delivered and managed.
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
                      <span className="text-[12.5px]" style={{ color: '#475569' }}>{pt}</span>
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
            VoIP Platforms &amp; Hardware Partners
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

      <FAQAccordion faqs={FAQS} accent="#0891B2"
        title="VoIP & Communications Questions Answered"
        subtitle="Common questions from businesses evaluating a move to VoIP and unified communications." />

      <CTABanner
        heading="Modernise Your Business Communications Today"
        subheading="Cut call costs by up to 60% and give your team a phone system that works anywhere. Get your VoIP assessment from Infraspine."
        primaryCTA={{ label: 'Get Started', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
