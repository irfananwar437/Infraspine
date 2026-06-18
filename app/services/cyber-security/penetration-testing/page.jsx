import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  Shield, Globe, Users, Server, Wifi, Zap,
  ChevronRight, ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'Penetration Testing Services Pakistan | Ethical Hacking | Infraspine',
  description: 'Infraspine provides authorised penetration testing and ethical hacking services in Pakistan. OWASP/PTES methodology, CREST-aligned approach, full exploitation reports and retesting included.',
  alternates: {
    canonical: 'https://www.infraspine.com/services/cyber-security/penetration-testing',
  },
  openGraph: {
    title: 'Penetration Testing Services Pakistan | Infraspine',
    description: 'Simulated cyberattacks to find and exploit vulnerabilities before real attackers do. OWASP/PTES methodology with retesting included.',
    url: 'https://www.infraspine.com/services/cyber-security/penetration-testing',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Penetration Testing Services',
  provider: { '@type': 'Organization', name: 'Infraspine', url: 'https://www.infraspine.com' },
  areaServed: 'Pakistan',
  description: 'Authorised simulated attacks to find and exploit vulnerabilities before real attackers do. OWASP/PTES methodology, CREST-aligned approach, full exploitation reports and retesting included.',
  url: 'https://www.infraspine.com/services/cyber-security/penetration-testing',
}

const STATS = [
  { value: 'OWASP', label: 'OWASP Top 10 Coverage', color: '#7C3AED' },
  { value: 'Full', label: 'Full Exploitation Reports', color: '#7C3AED' },
  { value: '72hr', label: 'Preliminary Report', color: '#7C3AED' },
  { value: 'Free', label: 'Retesting Included', color: '#7C3AED' },
]

const CAPABILITIES = [
  {
    icon: Shield,
    title: 'Network Penetration Testing',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Network penetration testing simulates a real-world attacker attempting to compromise your perimeter and internal network. Our testers begin with open-source intelligence (OSINT) gathering, then move through reconnaissance, scanning, exploitation, and post-exploitation phases. We test external-facing assets including firewalls, VPN gateways, remote access services, and DMZ hosts. Internal network testing evaluates east-west movement possibilities — once an attacker is inside, how far can they go? We test for common internal attack paths including Kerberoasting, pass-the-hash, LLMNR/NBT-NS poisoning, SMB relay attacks, and Active Directory privilege escalation. Every exploitation attempt is documented with full technical evidence — screenshots, tool output, and chain-of-attack narrative — so your team understands exactly how each compromise was achieved and what the realistic business impact would have been.',
    points: ['External and internal network testing', 'Active Directory attack paths', 'OSINT and reconnaissance phase', 'Full chain-of-attack documentation'],
  },
  {
    icon: Globe,
    title: 'Web Application Pen Testing',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Web application penetration testing goes beyond automated scanning to manually verify and exploit vulnerabilities in your web applications, APIs, and portals. Our testers follow the OWASP Testing Guide and PTES methodology to manually probe every function of the application — authentication, session management, access controls, input validation, business logic, and data handling. We test for all OWASP Top 10 vulnerabilities including injection flaws, broken access control, cryptographic failures, and insecure design patterns. API penetration testing covers REST, GraphQL, and SOAP interfaces — testing for excessive data exposure, broken object-level authorisation (BOLA), mass assignment, and JWT manipulation. Our testers perform both unauthenticated and authenticated testing at multiple privilege levels to identify horizontal and vertical privilege escalation vulnerabilities. All findings are confirmed as exploitable before inclusion in the report.',
    points: ['Manual exploitation of OWASP Top 10', 'REST and GraphQL API testing', 'Business logic flaw identification', 'Multi-privilege authenticated testing'],
  },
  {
    icon: Users,
    title: 'Social Engineering Testing',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'The human element remains the most exploited attack vector in Pakistan and globally. Social engineering testing evaluates how susceptible your employees are to manipulation through phishing, vishing (voice phishing), and pretexting scenarios. Spear-phishing campaigns are crafted to mimic real-world threats targeting your specific industry and organisation — using contextual lures such as HR announcements, IT helpdesk notifications, and vendor communications. Click rates, credential submission rates, and malware download rates are tracked per department and seniority level. Vishing tests evaluate how employees respond to impersonation of IT support, suppliers, or executives requesting sensitive information over the phone. Pretexting scenarios test physical security and whether employees will allow unknown individuals into restricted areas. All tests are conducted with written authorisation and full debrief to convert test results into targeted security awareness training.',
    points: ['Spear-phishing campaign simulation', 'Vishing and pretexting scenarios', 'Per-department susceptibility metrics', 'Training recommendations per finding'],
  },
  {
    icon: Server,
    title: 'Internal Network Testing',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Internal network penetration testing evaluates what an attacker can achieve once they have gained initial access to your environment — simulating the scenario of a compromised employee workstation, a malicious insider, or an attacker who has bypassed the perimeter. Our testers operate from within your network to map the internal attack surface, identify lateral movement paths, and attempt privilege escalation to domain administrator level. We test Active Directory configurations for common weaknesses including unconstrained delegation, AS-REP roasting, DCSync rights, and misconfigured Group Policy Objects. We attempt to reach critical assets — domain controllers, financial systems, database servers, and backup systems — and document every step taken. Internal testing reveals the blast radius of a perimeter breach, which is critical information for segmentation and detection strategy.',
    points: ['Assumed breach simulation', 'Active Directory privilege escalation', 'Lateral movement path mapping', 'Critical asset reachability testing'],
  },
  {
    icon: Wifi,
    title: 'Wireless Security Testing',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Wireless networks present a unique attack surface — one that extends beyond your physical premises and can be targeted from a car park or neighbouring building. Our wireless penetration testing evaluates the security of your Wi-Fi infrastructure including corporate SSIDs, guest networks, and IoT networks. We test for WPA2/WPA3 configuration weaknesses, rogue access point detection, evil twin attack viability, PMKID hash capture, and client isolation bypass. We assess whether guest Wi-Fi networks can be used to reach internal corporate resources. Wireless testing also covers Bluetooth-enabled devices in the environment and evaluates whether they present an exploitation vector. For organisations with large premises, we conduct site surveys to identify wireless coverage extending beyond the physical boundary. All findings include the signal strength and distance at which each attack was viable.',
    points: ['WPA2/WPA3 configuration testing', 'Evil twin and rogue AP assessment', 'Guest network isolation testing', 'Bluetooth device enumeration'],
  },
  {
    icon: Zap,
    title: 'Red Team Exercises',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Red team exercises are full-scope, adversary simulation engagements that test your organisation\'s ability to detect and respond to a sophisticated, multi-vector attack — not just whether vulnerabilities exist. Unlike penetration testing, a red team engagement operates covertly, using the same tactics, techniques, and procedures (TTPs) as real threat actors mapped to the MITRE ATT&CK framework. The red team uses multiple attack paths simultaneously — phishing, network exploitation, physical intrusion attempts, and supply chain impersonation — to achieve a defined objective such as exfiltrating sensitive data or demonstrating access to a critical system. Your blue team (security operations) is tested on detection, alerting, and response capabilities without being informed of the exercise. The outcome is a realistic assessment of your actual security posture against a determined attacker, including detection gaps and incident response improvements.',
    points: ['MITRE ATT&CK framework mapping', 'Multi-vector simultaneous attack simulation', 'Blue team detection testing', 'Covert operation with defined objectives'],
  },
]

const FAQS = [
  {
    question: 'What is penetration testing?',
    answer: 'Penetration testing (pen testing) is an authorised, simulated cyberattack performed by security professionals to identify and exploit vulnerabilities in your systems before malicious attackers can. Unlike vulnerability assessments that only identify weaknesses, pen testing actively attempts to exploit them to demonstrate real-world impact. The result is a detailed report showing exactly how an attacker could compromise your systems, the business impact of each successful compromise, and a prioritised remediation plan.',
  },
  {
    question: 'How is pen testing different from vulnerability assessment?',
    answer: 'Vulnerability assessment is a broad, systematic scan that identifies and catalogues potential weaknesses — it tells you what might be exploitable. Penetration testing actively exploits those weaknesses to confirm they are real, demonstrate the full attack chain, and show the actual business impact. VA is faster, cheaper, and covers more surface area; pen testing is deeper and provides proof-of-exploitation evidence. Most security frameworks recommend both — quarterly VA for coverage and annual pen testing for depth.',
  },
  {
    question: 'What methodology do your testers follow?',
    answer: 'Our testers follow a combination of OWASP Testing Guide (for web applications), PTES (Penetration Testing Execution Standard) for infrastructure and network engagements, and the MITRE ATT&CK framework for red team exercises. All engagements begin with formal scoping and written rules of engagement to ensure testing is safe, legal, and bounded. Our approach is CREST-aligned, meaning we follow the professional standards expected of CREST-certified penetration testers even where formal certification is pending.',
  },
  {
    question: 'Will penetration testing disrupt our systems?',
    answer: 'Our testing is designed to minimise operational disruption. Before any engagement begins we agree on a detailed rules of engagement document that specifies testing windows, systems to exclude from active exploitation (such as production databases), and emergency stop conditions. Denial-of-service testing is only performed in isolated environments or dedicated test windows. Most testing is conducted during business hours with continuous communication with your IT team. In over a decade of testing engagements, Infraspine has never caused an unintended system outage.',
  },
  {
    question: 'What happens after you find a vulnerability?',
    answer: 'Critical vulnerabilities are disclosed immediately during the testing period through our emergency notification process — your named contact is alerted within one hour of discovery. All other findings are compiled into a full exploitation report delivered within 72 hours of testing completion. The report includes a technical narrative of each attack chain, evidence of exploitation, CVSS scores, and a remediation roadmap. A debrief call is scheduled to walk through findings with your technical team. Retesting of all critical and high-severity findings is included at no additional cost once remediation is complete.',
  },
]

export default function PenetrationTestingPage() {
  const accent = '#7C3AED'
  const heroBg = '#0f0020'
  const statBg = '#F5F3FF'
  const borderColor = '#DDD6FE'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="border-b" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
          <div className="max-w-6xl mx-auto px-5 lg:px-8 py-3">
            <ol className="flex flex-wrap items-center gap-1.5 text-[12px]" style={{ color: '#64748B' }}>
              <li><Link href="/" style={{ color: '#64748B' }} className="hover:underline">Home</Link></li>
              <li><ChevronRight size={12} /></li>
              <li><Link href="/services" style={{ color: '#64748B' }} className="hover:underline">Services</Link></li>
              <li><ChevronRight size={12} /></li>
              <li><Link href="/services?tab=cyber" style={{ color: '#64748B' }} className="hover:underline">Cybersecurity</Link></li>
              <li><ChevronRight size={12} /></li>
              <li style={{ color: accent }} className="font-semibold">Penetration Testing</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section style={{ background: heroBg }} className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '48px 48px' }}
          />
          <div
            className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.08]"
            style={{ background: `radial-gradient(circle,${accent},transparent 70%)` }}
          />
          <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 py-16 sm:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="h-px w-6" style={{ background: accent }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: accent }}>Cybersecurity — Penetration Testing</span>
              </div>
              <h1 className="text-[30px] sm:text-[46px] lg:text-[52px] font-black leading-[1.06] tracking-tight text-white mb-5">
                Penetration Testing<br />
                <span style={{ color: accent }}>Ethical Hacking in Pakistan</span>
              </h1>
              <p className="text-[15px] sm:text-[17px] leading-relaxed mb-8 max-w-2xl" style={{ color: '#94A3B8' }}>
                Authorised simulated attacks to find and exploit vulnerabilities before real attackers do. OWASP and PTES methodology, CREST-aligned approach, full exploitation reports, and retesting included at no extra cost.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                  style={{ background: accent, color: '#fff' }}
                >
                  Request a Pen Test <ArrowRight size={15} />
                </Link>
                <Link
                  href="/services?tab=cyber"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                  style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}
                >
                  All Cybersecurity Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E8F0', borderTop: '1px solid #E2E8F0' }}>
          <div className="max-w-6xl mx-auto px-5 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center py-8 px-4"
                  style={{ borderRight: i < STATS.length - 1 ? '1px solid #E2E8F0' : 'none' }}
                >
                  <span className="text-[28px] sm:text-[34px] font-black leading-none mb-1" style={{ color: s.color }}>{s.value}</span>
                  <span className="text-[12px] font-medium text-center" style={{ color: '#64748B' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
          <div className="max-w-6xl mx-auto px-5 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-6" style={{ background: accent }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: accent }}>What We Deliver</span>
                <div className="h-px w-6" style={{ background: accent }} />
              </div>
              <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
                Penetration Testing Capabilities
              </h2>
              <p className="text-[14px] max-w-xl mx-auto" style={{ color: '#64748B' }}>
                Six specialised testing disciplines covering every attack surface in your organisation.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CAPABILITIES.map((cap) => {
                const Icon = cap.icon
                return (
                  <div
                    key={cap.title}
                    className="flex flex-col rounded-2xl overflow-hidden border transition-all hover:-translate-y-1 hover:shadow-lg"
                    style={{ background: '#fff', borderColor }}
                  >
                    <div className="p-6 border-b" style={{ background: cap.bg, borderColor }}>
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: '#fff', border: `1.5px solid ${borderColor}` }}
                      >
                        <Icon size={20} style={{ color: cap.color }} strokeWidth={1.7} />
                      </div>
                      <h3 className="text-[16px] font-black mb-1" style={{ color: '#0A1628' }}>{cap.title}</h3>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-[13px] leading-relaxed mb-4" style={{ color: '#475569' }}>{cap.desc}</p>
                      <ul className="space-y-2 mt-auto">
                        {cap.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2 text-[12.5px]" style={{ color: '#64748B' }}>
                            <CheckCircle size={13} style={{ color: cap.color, flexShrink: 0, marginTop: 2 }} />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20" style={{ background: '#fff' }}>
          <div className="max-w-4xl mx-auto px-5 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-6" style={{ background: accent }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: accent }}>FAQs</span>
                <div className="h-px w-6" style={{ background: accent }} />
              </div>
              <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
                Frequently Asked Questions
              </h2>
              <p className="text-[14px]" style={{ color: '#64748B' }}>
                Common questions about penetration testing services.
              </p>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-2xl overflow-hidden border bg-white"
                  style={{ borderColor: '#E2E8F0' }}
                >
                  <summary
                    className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none"
                    style={{ color: '#0A1628' }}
                  >
                    <span className="text-[14px] font-bold">{faq.question}</span>
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: statBg, border: `1px solid ${borderColor}` }}
                    >
                      <ChevronRight size={14} style={{ color: accent }} />
                    </div>
                  </summary>
                  <div className="px-6 pb-5">
                    <div className="h-px mb-4" style={{ background: '#F1F5F9' }} />
                    <p className="text-[13.5px] leading-relaxed" style={{ color: '#475569' }}>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-14 sm:py-20" style={{ background: heroBg }}>
          <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] mb-6"
              style={{ background: 'rgba(124,58,237,0.15)', color: accent, border: `1px solid rgba(124,58,237,0.3)` }}
            >
              <Shield size={12} />
              Find Your Weaknesses Before Attackers Do
            </div>
            <h2 className="text-[24px] sm:text-[36px] font-black text-white mb-4">
              Book a Penetration Test<br />
              <span style={{ color: accent }}>with Infraspine\'s Expert Team</span>
            </h2>
            <p className="text-[15px] leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: '#94A3B8' }}>
              Our certified testers simulate real-world attacks across your network, applications, and people — delivering a complete exploitation report and free retesting within the engagement.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: accent, color: '#fff' }}
              >
                Schedule a Pen Test <ArrowRight size={15} />
              </Link>
              <Link
                href="/services?tab=cyber"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}
              >
                All Cybersecurity Services <ChevronRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
