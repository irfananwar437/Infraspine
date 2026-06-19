import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Monitor, Shield, Settings, Zap, Network, Activity,
  ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'Remote IT Support Pakistan | Remote Helpdesk & Monitoring | Infraspine',
  description: 'Infraspine Remote IT Support: secure remote desktop assistance, troubleshooting and resolution without on-site visits. <10min connection time, 90% remote resolution rate, 24/7 availability, 256-bit encrypted sessions.',
  alternates: { canonical: 'https://www.infraspine.com/services/managed-it-services/remote-support' },
  openGraph: {
    title: 'Remote IT Support Pakistan | Remote Helpdesk & Monitoring | Infraspine',
    description: 'Secure remote IT support with <10min connection time, 90% remote resolution rate, and 24/7 availability. Enterprise-grade encrypted sessions for businesses in Pakistan.',
    url: 'https://www.infraspine.com/services/managed-it-services/remote-support',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Remote IT Support',
  name: 'Infraspine Remote IT Support',
  description: 'Secure remote desktop assistance, troubleshooting, and resolution services for businesses in Pakistan — eliminating the need for on-site visits while reducing downtime and costs.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/managed-it-services/remote-support',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '<10min', label: 'Remote Connection', color: '#0891B2' },
  { value: '90%', label: 'Issues Resolved Remotely', color: '#00C853' },
  { value: '24/7', label: 'Availability', color: '#7C3AED' },
  { value: '256-bit', label: 'Encrypted Sessions', color: '#D97706' },
]

const CAPABILITIES = [
  {
    icon: Monitor,
    title: 'Remote Desktop Assistance',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Remote desktop assistance allows our engineers to take direct control of a user\'s workstation or server — seeing exactly what the user sees, diagnosing the problem in real time, and implementing the fix without the user needing to describe technical symptoms they may not understand. This capability transforms support interactions: what might take 30 minutes of back-and-forth explanation over the phone is resolved in 5 minutes when the engineer can see and control the screen directly. Our remote desktop platform is enterprise-grade, with session recording for audit purposes, multi-monitor support, file transfer capability, and no persistent software installation required on managed endpoints.',
    points: [
      'Direct screen sharing and full desktop control for immediate diagnosis',
      'Session recording for audit trail and quality review purposes',
      'File transfer capability for delivering patches and configuration files',
      'Multi-monitor support and clipboard sharing for complex tasks',
    ],
  },
  {
    icon: Shield,
    title: 'Secure Remote Access',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Security is the primary concern when granting any remote access to your IT environment. Every remote session Infraspine engineers initiate is protected by 256-bit AES encryption — the same standard used by financial institutions and government agencies. Sessions require multi-factor authentication before connection is established, and access is further restricted by IP allowlisting to ensure connections can only originate from our verified engineer workstations. Session duration is time-limited, and all sessions are logged with engineer identity, session start and end times, and a summary of actions taken. You retain full visibility and can terminate any session instantly through the client portal.',
    points: [
      '256-bit AES encryption on all remote sessions as standard',
      'Multi-factor authentication required before every session',
      'IP allowlisting restricts connections to verified engineer endpoints',
      'Full session audit log with engineer identity and action summary',
    ],
  },
  {
    icon: Settings,
    title: 'Software Troubleshooting',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Software problems account for the majority of IT support contacts — application crashes, licensing errors, configuration issues, update failures, performance degradation, and compatibility conflicts between applications. Remote support is the ideal delivery mechanism for software troubleshooting because it allows engineers to interact directly with the affected system rather than relying on user descriptions of error messages and symptoms. Our engineers can access application logs, check configuration files, review update history, uninstall and reinstall applications, apply patches, and modify system settings — all without the user needing to be anything other than present at their desk. Software troubleshooting covers the full stack from operating system through productivity applications to specialist business software.',
    points: [
      'Application crash diagnosis using event logs and crash dump analysis',
      'Office 365 and Microsoft 365 application support and configuration',
      'Licensing issue resolution for common business applications',
      'OS-level troubleshooting for Windows and macOS environments',
    ],
  },
  {
    icon: Zap,
    title: 'Remote Configuration Management',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'Many IT issues stem from incorrect or drifted configurations — a security policy that has reverted to default, a proxy setting that is blocking access to a business application, a DNS configuration that is causing name resolution failures, or a group policy that is not applying as intended. Remote configuration management allows our engineers to access and correct these settings without dispatching an on-site engineer, dramatically reducing resolution time and cost. We can manage configurations across workstations, servers, network devices, and cloud platforms remotely, using standardised configuration management tools that maintain a record of every change made and ensure configurations remain in the desired state over time.',
    points: [
      'Group Policy and registry configuration adjustment without site visit',
      'Network device configuration review and correction via secure CLI',
      'Cloud platform configuration management for Azure, AWS, and M365',
      'Configuration drift detection and automated remediation where possible',
    ],
  },
  {
    icon: Network,
    title: 'VPN & Connectivity Support',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'VPN and connectivity problems are among the most disruptive IT issues for remote and hybrid workforces — when users cannot connect to company resources, they cannot work. Remote connectivity support covers the full range of VPN client issues, certificate errors, split tunnelling configuration, firewall rule conflicts, and ISP-related connectivity problems. Our engineers can connect to an affected user\'s machine through an alternative path while the VPN issue is being resolved, investigate the root cause of connectivity failures, and implement permanent fixes that prevent recurrence. For organisations managing VPN infrastructure, we can also access gateway configuration remotely to resolve server-side issues without requiring an on-site visit to the data centre or server room.',
    points: [
      'VPN client troubleshooting for Cisco, Fortinet, Palo Alto, and others',
      'Certificate renewal and PKI-related connectivity issue resolution',
      'Firewall rule review and correction for connectivity blockages',
      'Remote gateway access for server-side VPN infrastructure issues',
    ],
  },
  {
    icon: Activity,
    title: 'Remote Monitoring Integration',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Remote support is most powerful when integrated with proactive remote monitoring — allowing us to detect and resolve issues before your users are even aware of them. Our remote monitoring integration connects support capability directly to the monitoring alerts generated by our device monitoring platform. When a monitored endpoint triggers an alert — a failing hard drive, a service that has stopped, a security software update that has failed, or a performance threshold breach — our engineers can remotely access the affected system immediately to investigate and resolve without waiting for a user to raise a ticket. This proactive resolution model means many IT problems are fixed before they become visible disruptions to your workforce.',
    points: [
      'Direct integration between monitoring alerts and remote support tooling',
      'Proactive remote access to resolve monitoring-detected issues pre-ticket',
      'Automated remediation scripts for common alert types where safe',
      'Monitoring-to-resolution time tracking for performance measurement',
    ],
  },
]

const VENDORS = [
  'TeamViewer', 'AnyDesk', 'ConnectWise Control', 'Splashtop',
  'BeyondTrust Remote Support', 'Datto RMM', 'NinjaRMM', 'Atera',
]

const FAQS = [
  {
    question: 'How secure is remote desktop support — can engineers access our systems without permission?',
    answer: 'Remote sessions can only be initiated with explicit consent. Every session requires the user or an authorised IT contact to approve the connection before it is established — engineers cannot silently connect to any system. Sessions are protected by 256-bit AES encryption, require multi-factor authentication from the engineer side, and are logged in full with session recordings available for review. IP allowlisting ensures connections can only originate from our verified engineer workstations. You retain the ability to terminate any active session instantly. This layered security model means remote support capability does not create an access vector that could be exploited.',
  },
  {
    question: 'What types of issues can genuinely be resolved remotely versus requiring an on-site engineer?',
    answer: 'The vast majority of IT issues — approximately 90% in our experience — can be fully resolved remotely. Software problems, configuration issues, user account problems, email and productivity application support, VPN connectivity, performance issues, and operating system troubleshooting are all handled entirely remotely. Issues that require physical presence include hardware failures (replacing a failed hard drive, installing RAM, swapping a network card), cable and physical connectivity problems, device unboxing and initial physical setup, and any issue where the device cannot be powered on or connected to a network. For these physical issues, we can dispatch an engineer to your location.',
  },
  {
    question: 'What happens if the remote connection drops during a support session?',
    answer: 'Our remote support platform is designed for reliability and reconnects automatically if a session drops due to a momentary connectivity interruption. If the session cannot be re-established — for example, if the engineer was making a network configuration change that interrupted the connection — the engineer will contact you via phone to coordinate re-entry. For higher-risk configuration changes on servers and network devices, engineers use out-of-band management paths (IPMI, management VLAN, cellular backup) to ensure they can reconnect regardless of the primary network state. Session logs capture the state of work at the point of disconnection so nothing is lost.',
  },
  {
    question: 'Can you provide remote support for users in different cities or countries?',
    answer: 'Yes — remote support has no geographic limitation. We support users regardless of their location: head office, branch locations across Pakistan, remote workers at home, or staff travelling internationally. Remote support is actually faster for geographically distributed teams than traditional on-site support, since there is no travel time involved. For multi-location businesses, we configure support routing so that engineers handling each location have familiarity with the systems and procedures specific to that site. International users are supported under the same SLAs and through the same channels as local users.',
  },
  {
    question: 'Do you need to install software on every computer in our organisation?',
    answer: 'For unattended remote access — the ability for engineers to connect to servers and workstations proactively for monitoring-driven remediation — a lightweight agent is installed on managed endpoints. This agent is typically under 10MB, requires minimal system resources, and is managed centrally through a policy rather than configured individually. For attended remote support sessions (where the user is present and grants access), many of our tools support browser-based or one-time-download connections that do not require a permanent installation. Our onboarding team will advise on the appropriate deployment model for your environment based on your security policies and the scope of support required.',
  },
]

export default function RemoteSupportPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Managed IT Services', href: '/services/managed-it-services' },
        { label: 'Remote Support' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#0891B2,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#0891B2' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0891B2' }}>Remote IT Support</span>
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Remote IT Support —{' '}
              <span style={{ color: '#0891B2' }}>Fast Resolution Without the Site Visit.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Waiting for an engineer to travel to your office to fix an IT problem is an outdated model that costs time and money your business cannot afford to waste. Infraspine\'s remote IT support service resolves 90% of issues without an on-site visit — connecting securely to your systems within 10 minutes, diagnosing the problem directly, and implementing the fix with your staff back up and running faster than any physical dispatch could achieve.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-3 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[20px] font-black mb-0.5" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[11px] font-semibold leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#0891B2', color: '#fff' }}>
                Get Remote Support Today <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                See Pricing Options
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
                Why Remote Support Outperforms On-Site for Most IT Issues
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Traditional IT support models built around on-site visits introduce delays that compound downtime. An engineer who needs to travel to your office adds an hour of unproductive waiting before the diagnosis even begins. For businesses with multiple locations across Pakistan, on-site response time for branch offices can extend to half a day or more. All of this time your staff are sitting with a problem, unable to complete their work.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Remote support changes the economics fundamentally. Our engineers can connect to any endpoint in your environment within 10 minutes of a ticket being raised. They see exactly what the user sees, can access system logs, run diagnostics, and implement fixes directly — without the delay, travel cost, or scheduling friction of a physical visit. For 90% of IT issues, this is faster, cheaper, and less disruptive than dispatching an engineer.
              </p>
              <p className="text-[15px] leading-relaxed mb-6" style={{ color: '#64748B' }}>
                For Pakistan\'s growing remote and hybrid workforces — staff working from home, travelling between sites, or based in cities far from head office — remote support is not just convenient, it is the only viable support model. Our platform supports users regardless of their location, ensuring consistent SLA performance for every member of your team, wherever they are working.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#0891B2', text: 'Sub-10-minute connection time eliminates waiting for engineer travel' },
                  { color: '#00C853', text: '90% of issues resolved remotely — no site visit cost or delay' },
                  { color: '#DC2626', text: '256-bit encrypted sessions with full audit logging' },
                  { color: '#7C3AED', text: 'Supports remote and hybrid workers regardless of location' },
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
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>Remote vs On-Site Support Comparison</p>
              <div className="space-y-4">
                {[
                  { label: 'Time to First Response', remote: '<10 minutes', onsite: '1–4+ hours', good: true },
                  { label: 'Geographic Coverage', remote: 'Unlimited', onsite: 'Local area only', good: true },
                  { label: 'Cost Per Incident', remote: 'Included in plan', onsite: 'Travel + hourly rate', good: true },
                  { label: 'Session Security', remote: '256-bit encrypted', onsite: 'Physical access', good: true },
                  { label: 'Audit Trail', remote: 'Full session log', onsite: 'Engineer notes only', good: true },
                  { label: 'Hardware Issues', remote: 'Limited', onsite: 'Full capability', good: false },
                ].map(p => (
                  <div key={p.label} className="grid grid-cols-3 gap-2 py-2 border-b last:border-0 text-[12px]" style={{ borderColor: '#E2E8F0' }}>
                    <div className="font-semibold" style={{ color: '#0A1628' }}>{p.label}</div>
                    <div className="font-semibold" style={{ color: p.good ? '#00C853' : '#D97706' }}>{p.remote}</div>
                    <div style={{ color: p.good ? '#94A3B8' : '#00C853' }}>{p.onsite}</div>
                  </div>
                ))}
                <div className="grid grid-cols-3 gap-2 text-[10px] font-bold uppercase tracking-wider pt-1" style={{ color: '#94A3B8' }}>
                  <div></div><div>Remote Support</div><div>On-Site Visit</div>
                </div>
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
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0891B2' }}>Remote Support Capabilities</span>
              <div className="h-px w-6" style={{ background: '#0891B2' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Core Remote Support Service Areas
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Secure, fast, and comprehensive remote IT assistance from desktop troubleshooting through to server configuration and proactive monitoring integration.
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
            Remote Support &amp; RMM Platforms We Use
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
        title="Remote IT Support Questions Answered"
        subtitle="Common questions from businesses exploring remote IT support services." />

      <CTABanner
        heading="Get Secure Remote IT Support for Your Business"
        subheading="Stop waiting hours for an engineer to arrive. Get expert IT resolution in under 10 minutes, from anywhere, any time of day."
        primaryCTA={{ label: 'Get Started Today', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
