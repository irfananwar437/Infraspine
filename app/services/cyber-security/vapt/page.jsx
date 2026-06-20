import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Globe, Network, Code, Smartphone, Users, FileCode,
  ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'VAPT Services Pakistan — Vulnerability Assessment & Penetration Testing | Infraspine',
  description: 'Infraspine VAPT: CVSS-scored vulnerability assessment and penetration testing in Pakistan. OWASP methodology, free re-test included, 48hr report delivery. Network, web app, mobile and social engineering testing.',
  alternates: { canonical: 'https://www.infraspine.com/services/cyber-security/vapt' },
  openGraph: {
    title: 'VAPT Services Pakistan — Vulnerability Assessment & Penetration Testing | Infraspine',
    description: 'Professional VAPT services in Pakistan — external and internal network pen testing, web application, mobile app, and social engineering assessments with OWASP methodology.',
    url: 'https://www.infraspine.com/services/cyber-security/vapt',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Vulnerability Assessment and Penetration Testing',
  name: 'Infraspine VAPT & Penetration Testing',
  description: 'Professional vulnerability assessment and penetration testing covering external and internal networks, web applications, mobile apps, social engineering, and source code review.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/cyber-security/vapt',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: 'CVSS', label: 'Scored Findings', color: '#DC2626' },
  { value: 'Free', label: 'Re-test Included', color: '#00C853' },
  { value: 'OWASP', label: 'Methodology', color: '#7C3AED' },
  { value: '48hr', label: 'Report Delivery', color: '#2563EB' },
]

const CAPABILITIES = [
  {
    icon: Globe,
    title: 'External Network Penetration Testing',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'External penetration testing simulates an attacker who has no prior access to your organisation — exactly how real-world attackers approach their targets. Our testers enumerate your internet-facing attack surface (IP ranges, domains, subdomains, exposed services), identify vulnerabilities in web servers, VPN gateways, mail servers, and publicly accessible applications, and attempt exploitation to demonstrate real business impact. The result is a clear picture of exactly how much of your perimeter can be compromised by a motivated external attacker.',
    points: [
      'Internet-facing asset enumeration and attack surface mapping',
      'Vulnerability identification and exploitation (web, VPN, mail)',
      'Service version fingerprinting and CVE-based exploitation',
      'Clear business impact demonstration for each confirmed finding',
    ],
  },
  {
    icon: Network,
    title: 'Internal Network Penetration Testing',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Internal penetration testing answers a critical question: if an attacker gets inside your network — through phishing, a compromised vendor, or a malicious employee — how far can they go? Starting from an assumed-breach position (simulating a standard employee laptop on your internal network), our testers attempt to escalate privileges, move laterally across network segments, compromise domain controllers, and access sensitive data. Internal testing consistently reveals misconfigurations invisible from the outside, including Active Directory weaknesses and flat network architectures.',
    points: [
      'Assumed-breach testing from internal network position',
      'Active Directory and domain controller attack scenarios',
      'Lateral movement and privilege escalation testing',
      'Network segmentation effectiveness validation',
    ],
  },
  {
    icon: Code,
    title: 'Web Application Testing (OWASP Top 10)',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Web applications are the most common breach point for organisations with an online presence. Our web application testing methodology follows the OWASP Testing Guide and covers all OWASP Top 10 vulnerability categories: injection flaws, broken authentication, sensitive data exposure, XML external entities, broken access control, security misconfigurations, cross-site scripting, insecure deserialisation, components with known vulnerabilities, and insufficient logging. Testing is conducted both in authenticated and unauthenticated states to mirror real attacker capabilities.',
    points: [
      'Full OWASP Top 10 vulnerability coverage',
      'Authenticated and unauthenticated testing perspectives',
      'Business logic flaw identification beyond automated scanning',
      'API security testing for REST and GraphQL endpoints',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile Application Security Testing',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Mobile applications handle sensitive user data, authentication tokens, and business transactions — and they run on devices outside your network perimeter that you cannot fully control. Our mobile application testing follows the OWASP Mobile Application Security Verification Standard (MASVS) and covers both iOS and Android platforms. We perform static analysis of the application binary, dynamic analysis during runtime, and network traffic interception to identify issues in data storage, authentication, session management, and API communication.',
    points: [
      'iOS and Android application testing to OWASP MASVS standard',
      'Static binary analysis and dynamic runtime testing',
      'Sensitive data storage and leakage identification',
      'Network traffic interception and API security review',
    ],
  },
  {
    icon: Users,
    title: 'Social Engineering Assessment',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Technology controls only protect against technical attacks. Social engineering assessments test the human element of your security — the most unpredictable and often weakest link. We conduct controlled phishing simulations targeting your staff, measure click rates, credential submission rates, and reporting rates, and provide detailed analysis of which departments and roles are most susceptible. Vishing (voice phishing) assessments can also be conducted to test whether phone-based social engineering can extract sensitive information from staff.',
    points: [
      'Controlled phishing simulation campaigns targeting all staff',
      'Click rate, credential submission, and malware download rate measurement',
      'Department and role-based susceptibility analysis',
      'Post-assessment security awareness training recommendations',
    ],
  },
  {
    icon: FileCode,
    title: 'Source Code Review',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'Penetration testing finds vulnerabilities from the outside looking in. Source code review finds them from the inside out — examining the actual code for security flaws before they can be exploited. Our secure code review covers common vulnerability patterns including SQL injection, command injection, insecure cryptography, hardcoded credentials, path traversal, XML injection, and authentication weaknesses. Review findings include the exact file and line number of each vulnerability alongside a recommended remediation with code examples.',
    points: [
      'SAST (static analysis) tool-assisted review with manual verification',
      'OWASP-aligned vulnerability pattern coverage',
      'Exact file/line number and severity for every finding',
      'Remediation code examples provided for each vulnerability',
    ],
  },
]

const VENDORS = [
  'Burp Suite Pro', 'Metasploit Framework', 'Nessus Pro', 'Nmap',
  'OWASP ZAP', 'Kali Linux', 'Qualys VMDR', 'Rapid7 InsightVM',
  'BloodHound', 'Mimikatz', 'Nikto', 'SQLmap',
]

const FAQS = [
  {
    question: 'What is the difference between a vulnerability assessment and a penetration test?',
    answer: 'A vulnerability assessment (VA) scans your systems for known vulnerabilities and produces a list of findings — typically using automated scanning tools to identify software versions with known CVEs, misconfigurations, and missing patches. It tells you what weaknesses exist. A penetration test (PT) goes further: a human tester actively attempts to exploit those vulnerabilities to demonstrate real business impact. It tells you which weaknesses are actually exploitable and what damage a real attacker could cause. VAPT combines both: automated scanning for comprehensive coverage, followed by manual exploitation for the highest-risk findings.',
  },
  {
    question: 'How often should we conduct penetration testing?',
    answer: 'Best practice and most security frameworks (PCI-DSS, ISO 27001, Cyber Essentials Plus) require at minimum annual penetration testing. However, we recommend testing after any significant change to your environment — a major application release, infrastructure migration, or architectural change can introduce new vulnerabilities that your last test did not cover. High-risk environments (financial services, healthcare, critical infrastructure) benefit from bi-annual testing as their attack surface and threat landscape evolve faster than annual testing can keep pace with.',
  },
  {
    question: 'What does the VAPT report look like and who can read it?',
    answer: 'Our VAPT report is structured in two sections: an executive summary written for non-technical leadership (business impact, overall risk rating, top three findings, recommended immediate actions) and a technical findings section written for IT and development teams (CVSS score, finding description, evidence screenshots, step-by-step reproduction instructions, and remediation guidance). Each finding is rated Critical, High, Medium, Low, or Informational based on CVSS v3.1 scoring combined with our assessment of real-world exploitability in your specific environment.',
  },
  {
    question: 'Do you conduct testing in a way that could disrupt our live systems?',
    answer: 'Safety of production systems is a priority. Before testing begins, we agree a scope of work that defines exactly which systems are in scope, testing hours (typically non-business hours for network testing), activities that require prior approval (DoS testing, social engineering involving senior leadership), and emergency stop procedures if testing causes unexpected disruption. We use careful, calibrated exploitation techniques designed to confirm vulnerabilities without causing outages. For particularly sensitive production systems, we can test on a staging environment first.',
  },
  {
    question: 'What is included in the free re-test?',
    answer: 'After receiving our VAPT report, your team will work through the findings and implement remediations. The free re-test covers all Critical and High severity findings from the original test — we re-test specifically those vulnerabilities that you have addressed to confirm the remediations are effective and the attack paths are genuinely closed. Re-tests are conducted within 90 days of the original report delivery date. Medium, Low, and Informational findings can be included in a follow-up engagement if required.',
  },
  {
    question: 'Do we need VAPT for compliance with PCI-DSS or ISO 27001?',
    answer: 'Yes. PCI-DSS Requirement 11.3 explicitly mandates annual external and internal penetration testing and penetration testing after any significant infrastructure or application upgrade. ISO 27001 Annex A control A.12.6.1 requires assessment and management of technical vulnerabilities, which most auditors expect to be satisfied through regular penetration testing. For businesses pursuing Cyber Essentials Plus certification, a vulnerability scan is mandatory. Our VAPT reports are structured to provide the evidence documentation required for all of these frameworks.',
  },
]

export default function VAPTPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Cyber Security', href: '/services/cyber-security' },
        { label: 'VAPT & Pen Testing' },
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
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#DC2626' }}>VAPT &amp; Penetration Testing</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              VAPT &amp; Penetration Testing —{' '}
              <span style={{ color: '#DC2626' }}>Find Weaknesses Before Attackers Do.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              The only way to know how much damage a real attacker could do to your organisation is to let a trusted team try. Infraspine&apos;s VAPT service uses the same tools, techniques, and mindset as real attackers — operating under a strict scope agreement and within legal boundaries — to find the weaknesses in your network, applications, and people before a criminal does. CVSS-scored findings, free re-test, and report delivery within 48 hours of engagement completion.
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
                Book a VAPT Assessment <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Request Sample Report
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
                Attackers Test Your Defences Whether You Do or Not
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Automated scanning tools probe every internet-connected IP address on the planet continuously. The moment you deploy a new server or application, it is being scanned for vulnerabilities within minutes. Attackers are testing your defences whether you invite them to or not — the difference between a penetration test and a real attack is intent, scope, and what happens with the findings.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The distinction between vulnerability assessment and penetration testing matters. A vulnerability scan tells you what software versions are running and which CVEs theoretically apply. A penetration test tells you which vulnerabilities are actually exploitable in your specific environment configuration, how far an attacker can get once they have initial access, and what the real business impact would be. It is the difference between knowing a door might be unlocked and watching someone walk through it and access your data.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Compliance requirements create additional urgency. PCI-DSS mandates annual penetration testing for any organisation that handles card data. ISO 27001 expects regular technical vulnerability assessment. Cyber Essentials Plus requires a hands-on vulnerability scan. And increasingly, enterprise customers and insurers are asking for penetration test evidence before signing contracts or issuing cyber insurance policies. A VAPT report from a credible provider is no longer optional for organisations operating in regulated sectors.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#DC2626', text: 'Know exactly what damage a real attacker could cause before they try' },
                  { color: '#7C3AED', text: 'OWASP methodology ensuring systematic, complete coverage' },
                  { color: '#00C853', text: 'Free re-test confirms your remediations actually closed the gaps' },
                  { color: '#2563EB', text: 'PCI-DSS, ISO 27001, and Cyber Essentials Plus compliance evidence' },
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
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>Finding Severity Scale (CVSS v3.1)</p>
              <div className="space-y-3">
                {[
                  { level: 'Critical', range: 'CVSS 9.0–10.0', desc: 'Immediate exploitation possible, full compromise likely', color: '#DC2626' },
                  { level: 'High', range: 'CVSS 7.0–8.9', desc: 'Significant impact, remediation within 72 hours recommended', color: '#D97706' },
                  { level: 'Medium', range: 'CVSS 4.0–6.9', desc: 'Moderate risk, remediate within 30 days', color: '#EAB308' },
                  { level: 'Low', range: 'CVSS 0.1–3.9', desc: 'Limited impact, schedule into next maintenance cycle', color: '#2563EB' },
                  { level: 'Informational', range: 'CVSS 0.0', desc: 'Best practice gap, no direct exploitability', color: '#64748B' },
                ].map(s => (
                  <div key={s.level} className="p-3 rounded-xl border" style={{ borderColor: `${s.color}30`, background: `${s.color}08` }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[13px] font-bold" style={{ color: s.color }}>{s.level}</span>
                      <span className="text-[11px] font-mono" style={{ color: '#64748B' }}>{s.range}</span>
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
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#DC2626' }}>Testing Capabilities</span>
              <div className="h-px w-6" style={{ background: '#DC2626' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six VAPT Service Areas
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Covering every layer of your attack surface from network perimeter to source code.
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
            Security Testing Tools We Use
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
        title="VAPT Questions Answered"
        subtitle="Common questions from organisations planning their first penetration test." />

      <CTABanner
        heading="Book Your VAPT Assessment Today"
        subheading="Find your vulnerabilities before attackers do. Get CVSS-scored findings, a free re-test, and a report your board and auditors will accept."
        primaryCTA={{ label: 'Book an Assessment', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
