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
  Shield, Settings, AlertTriangle, Lock, Globe, FileText,
  ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'Firewall Management Services Pakistan — NGFW, UTM & Network Security',
  description: 'Infraspine Firewall Management: expert NGFW deployment, rule optimisation, IPS/IDS management and VPN for Pakistan businesses. 99.99% uptime, <5min policy change SLA, 24/7 rule monitoring.',
  alternates: { canonical: 'https://www.infraspine.com/services/cyber-security/firewall' },
  openGraph: {
    title: 'Firewall Management Services Pakistan — NGFW, UTM & Network Security | Infraspine',
    description: 'Professional firewall management covering NGFW deployment, rule review, IPS/IDS, VPN and web filtering. 99.99% uptime SLA with 24/7 monitoring.',
    url: 'https://www.infraspine.com/services/cyber-security/firewall',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Firewall Management',
  name: 'Infraspine Firewall Management Services',
  description: 'Expert NGFW and firewall management covering deployment, rule optimisation, IPS/IDS, VPN management, web filtering, and compliance reporting for businesses in Pakistan.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/cyber-security/firewall',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '99.99%', label: 'Uptime SLA', color: '#DC2626' },
  { value: '<5min', label: 'Policy Change SLA', color: '#00C853' },
  { value: 'Zero', label: 'Breaches Under Mgmt', color: '#7C3AED' },
  { value: '24/7', label: 'Rule Monitoring', color: '#2563EB' },
]

const CAPABILITIES = [
  {
    icon: Shield,
    title: 'NGFW Deployment & Configuration',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Next-Generation Firewalls are fundamentally different from traditional packet-filtering firewalls. Where traditional firewalls inspect IP addresses and port numbers, NGFWs perform deep packet inspection, identify applications regardless of port, enforce user-identity-based policies, decrypt and inspect encrypted traffic, and apply machine-learning-based threat prevention inline. Our team designs and deploys NGFW architectures for your environment — whether single-site, multi-site, data centre, or hybrid cloud — with high-availability configurations to eliminate single points of failure.',
    points: [
      'NGFW architecture design for single-site, multi-site, and hybrid cloud',
      'High-availability (HA) active-passive and active-active deployment',
      'Application-aware policy development from day one',
      'SSL/TLS inspection configuration for encrypted traffic visibility',
    ],
  },
  {
    icon: Settings,
    title: 'Firewall Rule Review & Optimisation',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Firewall rule sets grow over time and almost never shrink. After three years of operation, a typical firewall ruleset contains a significant proportion of rules that are redundant, overly permissive, or shadowed by other rules above them — a phenomenon known as firewall rule creep. Our rule review service analyses your entire ruleset, identifies unused rules (rules that have never matched traffic), overly broad rules (any-to-any permissions that should be restricted), and rule ordering inefficiencies that create security gaps or performance overhead.',
    points: [
      'Complete ruleset analysis for unused and redundant rules',
      'Overly permissive rule identification (any-any, broad CIDR ranges)',
      'Rule ordering optimisation for performance and security logic',
      'Documented rule justification register for every remaining rule',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'IPS/IDS Management',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Intrusion Prevention Systems and Intrusion Detection Systems add a critical layer of threat detection beyond basic firewall policy. Our IPS/IDS management service handles signature subscription management (ensuring you are always running current threat signatures), tuning of detection sensitivity to reduce false positives while maintaining detection coverage, and alerting integration with our NOC so every IPS alert receives human review. We operate IPS in blocking mode by default where network architecture permits, providing active threat prevention rather than passive detection.',
    points: [
      'IPS signature subscription management and regular updates',
      'False positive tuning to reduce alert noise without lowering coverage',
      'Blocking mode operation for confirmed malicious traffic signatures',
      'NOC integration for 24/7 human review of IPS alerts',
    ],
  },
  {
    icon: Lock,
    title: 'VPN & Remote Access Management',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Remote access has become a permanent fixture for most organisations, and VPN security has never been more critical. Vulnerable VPN gateways are consistently among the top initial access vectors exploited by ransomware groups. We manage your VPN infrastructure from initial configuration through ongoing policy management, certificate lifecycle, user provisioning and deprovisioning, split-tunnel vs full-tunnel policy, and MFA enforcement. Site-to-site VPN tunnels connecting branch offices or cloud environments are managed with the same rigour as remote access deployments.',
    points: [
      'SSL VPN and IPSec remote access configuration and management',
      'MFA enforcement for all remote access connections',
      'Certificate lifecycle management with automated expiry alerting',
      'Site-to-site VPN for branch office and cloud connectivity',
    ],
  },
  {
    icon: Globe,
    title: 'Web Filtering & Application Control',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'Controlling which websites and applications your users can access from the corporate network is both a security control and a productivity management function. Our web filtering management covers URL category-based filtering (blocking malware distribution sites, phishing pages, and inappropriate content categories), application control policies (restricting or logging specific application usage), and SSL inspection to ensure encrypted traffic does not bypass your content policies. Policy exceptions are managed through a formal request process with business justification and time-limited approval.',
    points: [
      'URL category filtering with malware and phishing site blocking',
      'Application-layer control for over 5,000 identified applications',
      'SSL/TLS inspection for encrypted web traffic policy enforcement',
      'Exception management with business justification workflow',
    ],
  },
  {
    icon: FileText,
    title: 'Compliance & Audit Reporting',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Firewall configurations and rule sets are frequently subject to compliance audit requirements. PCI-DSS Requirement 1 dedicates extensive controls to firewall management including quarterly rule reviews, justification documentation for all rules, and separation of duties. Our compliance reporting service provides the evidence auditors need: timestamped rule change logs, quarterly rule review documentation, firewall configuration baselines, and traffic analysis showing that network segmentation controls are functioning as designed.',
    points: [
      'PCI-DSS Requirement 1 compliance evidence package',
      'Quarterly rule review documentation with formal sign-off',
      'Change management log for all policy modifications',
      'Network segmentation validation through traffic analysis reporting',
    ],
  },
]

const VENDORS = [
  'Fortinet FortiGate', 'Palo Alto Networks NGFW', 'Cisco Firepower',
  'Check Point NGFW', 'pfSense / OPNsense', 'SonicWall',
  'Juniper SRX', 'Barracuda CloudGen', 'WatchGuard Firebox',
]

const FAQS = [
  {
    question: 'What is a Next-Generation Firewall and how is it different from a traditional firewall?',
    answer: 'A traditional firewall makes allow/deny decisions based on IP addresses, port numbers, and protocols. A Next-Generation Firewall (NGFW) performs deep packet inspection to identify the actual application generating traffic — regardless of what port it uses — and applies policies based on application identity, user identity, and content. NGFWs also include integrated Intrusion Prevention Systems, URL filtering, SSL inspection, and application-layer threat prevention. The result is significantly more granular control and far greater visibility into what is actually traversing your network.',
  },
  {
    question: 'How often should firewall rules be reviewed?',
    answer: 'Best practice (and PCI-DSS Requirement 1.1.7) mandates at least a quarterly review of firewall rulesets. However, most organisations only review rules when something breaks — which means rules accumulate unchecked for years. Our managed firewall service includes quarterly rule reviews as a standard deliverable, plus ad-hoc reviews triggered by significant changes to your network architecture or business operations. Every rule in your ruleset should have a documented business justification; any rule that cannot be justified should be removed.',
  },
  {
    question: 'Can you manage our firewall remotely or do you need on-site access?',
    answer: 'The majority of firewall management is performed remotely over encrypted management connections. We establish a secure management channel to your firewall management interface (typically HTTPS to the management plane over a dedicated management VLAN or out-of-band management IP) and manage all configuration changes, rule updates, firmware upgrades, and monitoring remotely. For initial deployment and cabling of physical firewall appliances, on-site visits are required. On-site visits for ongoing management are available where preferred.',
  },
  {
    question: 'What is firewall rule creep and why is it dangerous?',
    answer: 'Firewall rule creep occurs when firewall rulesets grow over time as new rules are added for specific business needs but old, redundant rules are never removed. After a few years, rulesets become bloated with rules for applications that no longer exist, subnets that have been decommissioned, and users who have left the organisation. This creates security risk (overly permissive rules left in place), performance overhead (the firewall processes more rules per packet), and compliance risk (rules without documented justification fail PCI-DSS audits). Our quarterly rule review process systematically identifies and removes these rules.',
  },
  {
    question: 'Do you support firewall high availability (HA) configurations?',
    answer: 'Yes — HA configuration is our recommended deployment for any business-critical environment. We deploy NGFW in active-passive HA pairs where one firewall handles all traffic while a second unit stays in synchronised standby, taking over automatically within seconds if the primary unit fails. For environments requiring zero tolerance for failover latency, active-active HA configurations can distribute traffic across both units simultaneously. We monitor HA pair health continuously and alert immediately if a failover event occurs so root cause investigation begins without delay.',
  },
  {
    question: 'What should we do if our firewall is breached or we suspect a compromise?',
    answer: 'Contact us immediately. A compromised firewall is a critical security incident and requires immediate response. Our incident response process for suspected firewall compromise includes: isolating the management plane from the internet, capturing current configuration and logs for forensic analysis, reviewing recent configuration changes for unauthorized modifications, checking for persistence mechanisms (unauthorized admin accounts, scheduled tasks), and failover to a backup appliance while the potentially compromised unit is forensically examined. We recommend changing all administrative credentials and auditing all VPN accounts as immediate containment steps.',
  },
]

export default function FirewallManagementPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Cyber Security', href: '/services/cyber-security' },
        { label: 'Firewall Management' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#DC2626,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-4 sm:pt-6 pb-8 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-px w-6" style={{ background: '#DC2626' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#DC2626' }}>Firewall Management</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-3">
              NGFW &amp; Firewall Management —{' '}
              <span style={{ color: '#DC2626' }}>Your First Line of Cyber Defence.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-4 sm:mb-6" style={{ color: '#94A3B8' }}>
              A firewall is only as strong as its configuration and the team managing it. Poorly configured firewalls with bloated rulesets, outdated firmware, and misconfigured VPN gateways are regularly exploited by attackers — often years after the original misconfiguration. Infraspine&apos;s firewall management service keeps your perimeter security properly configured, continuously monitored, and compliant with industry standards, with a &lt;5-minute policy change SLA and zero-breach track record under management.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-2 sm:p-2.5 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[17px] font-black mb-0.5" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[11px] font-semibold leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#DC2626', color: '#fff' }}>
                Get Expert Firewall Management <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Free Rule Review
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
                A Firewall You Set and Forget Is a Firewall Waiting to Fail
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Firewall deployments typically receive significant attention at initial deployment and then comparatively little ongoing management. Rule sets grow as new applications and users are added but rarely get cleaned up. Firmware updates are delayed because of change management concerns and never quite make it onto the schedule. VPN configurations remain with default settings that vendor advisories have since flagged as insecure. Over time, what was a well-configured firewall becomes a poorly understood security liability.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                NGFW technology raises both the ceiling and the floor. Modern NGFWs from Fortinet, Palo Alto, and Check Point can perform application-aware inspection, SSL decryption, user-identity-based policy enforcement, and integrated threat prevention — capabilities that traditional firewalls simply do not have. But they require expert configuration to deliver this value. A misconfigured NGFW with default application control policies and disabled SSL inspection is providing almost no additional security over a basic ACL.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Policy management is where ongoing value is created. Every change request — a new application, a new branch, a new remote access requirement — needs to be evaluated for security impact before being implemented, documented in the change log, and reviewed quarterly for continued necessity. This discipline, applied consistently, is what separates organisations that use their firewall as a genuine security control from those that use it as a network traffic director with aspirational security labels.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#DC2626', text: 'NGFW capabilities properly enabled — not just deployed at defaults' },
                  { color: '#7C3AED', text: 'Quarterly rule reviews eliminate dangerous firewall rule creep' },
                  { color: '#00C853', text: 'VPN vulnerabilities patched within hours of vendor advisory' },
                  { color: '#2563EB', text: 'Full PCI-DSS Requirement 1 compliance documentation maintained' },
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
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>
                NGFW vs Traditional Firewall
              </p>
              <div className="space-y-3">
                <div className="grid grid-cols-3 text-[10px] font-bold uppercase tracking-wider pb-2 border-b" style={{ color: '#94A3B8', borderColor: '#E2E8F0' }}>
                  <div>Feature</div><div className="text-center">Traditional</div><div className="text-center">NGFW</div>
                </div>
                {[
                  { feature: 'Packet filtering by IP/Port', traditional: true, ngfw: true },
                  { feature: 'Application identification', traditional: false, ngfw: true },
                  { feature: 'User-identity-based policy', traditional: false, ngfw: true },
                  { feature: 'SSL/TLS inspection', traditional: false, ngfw: true },
                  { feature: 'Integrated IPS/IDS', traditional: false, ngfw: true },
                  { feature: 'URL / web filtering', traditional: false, ngfw: true },
                  { feature: 'Advanced threat prevention', traditional: false, ngfw: true },
                  { feature: 'Encrypted traffic analysis', traditional: false, ngfw: true },
                ].map(({ feature, traditional, ngfw }) => (
                  <div key={feature} className="grid grid-cols-3 items-center py-2 border-b last:border-0 text-[13px]" style={{ borderColor: '#E2E8F0' }}>
                    <div style={{ color: '#374151' }}>{feature}</div>
                    <div className="text-center">
                      <span style={{ color: traditional ? '#00C853' : '#DC2626' }}>{traditional ? '✓' : '✗'}</span>
                    </div>
                    <div className="text-center">
                      <span style={{ color: ngfw ? '#00C853' : '#DC2626' }}>{ngfw ? '✓' : '✗'}</span>
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
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#DC2626' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#DC2626' }}>Management Capabilities</span>
              <div className="h-px w-6" style={{ background: '#DC2626' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Comprehensive Firewall Management
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From initial NGFW deployment through ongoing policy management, IPS tuning, VPN, and compliance reporting.
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
      <section className="py-16 sm:py-20 bg-white border-y" style={{ borderColor: '#E2E8F0' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] mb-8" style={{ color: '#94A3B8' }}>
            Firewall Vendors We Manage
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
        title="Firewall Management Questions Answered"
        subtitle="Common questions from organisations evaluating managed firewall services." />

      <CTABanner
        heading="Get Expert Firewall Management"
        subheading="Stop leaving your perimeter security on autopilot. Get properly configured, continuously monitored, and compliance-ready firewall management."
        primaryCTA={{ label: 'Get Started', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <RelatedServices currentHref="/services/cyber-security/firewall" accent="#DC2626" />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
