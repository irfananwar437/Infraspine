import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  ShieldCheck, AlertTriangle, Lock, Eye, Server, Users,
  CheckCircle, ArrowRight, Activity, FileText, Zap, Shield,
} from 'lucide-react'

export const metadata = {
  title: 'Cybersecurity Services Pakistan — SOC, VAPT & Endpoint Security | Infraspine',
  description: 'Infraspine Cybersecurity: 24/7 SOC monitoring, VAPT, endpoint detection and response, email security, NGFW management, and security awareness training. Defend your business against ransomware, phishing, and insider threats.',
  alternates: { canonical: 'https://www.infraspine.com/services/cyber-security' },
  openGraph: {
    title: 'Cybersecurity Services Pakistan — SOC, VAPT & Endpoint Security | Infraspine',
    description: 'SOC monitoring, VAPT, EDR, email security, firewall management, and awareness training. Enterprise cybersecurity for Pakistan businesses.',
    url: 'https://www.infraspine.com/services/cyber-security',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Cybersecurity Services',
  name: 'Infraspine Cybersecurity Services',
  description: 'Enterprise cybersecurity including 24/7 SOC monitoring, VAPT, endpoint detection, email security, NGFW management, and security awareness training.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/cyber-security',
}

const CAPABILITIES = [
  {
    icon: Eye,
    title: 'Security Operations Center (SOC)',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: '24/7 threat monitoring using SIEM platforms — Azure Sentinel, Wazuh, or Splunk — to collect, correlate, and analyse security events from every system in your environment. Our SOC analysts review every high-severity alert, suppress false positives, and escalate genuine threats within minutes. You receive a daily security digest and a monthly threat landscape report covering what was detected, what was blocked, and what actions were taken.',
    points: ['Azure Sentinel, Wazuh, or Splunk SIEM deployment', '24/7 alert monitoring and analyst response', 'False-positive suppression to reduce alert fatigue', 'Daily digest and monthly threat intelligence report'],
  },
  {
    icon: AlertTriangle,
    title: 'Vulnerability Assessment & Penetration Testing',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Structured VAPT engagements using industry-standard methodologies — OWASP for web applications and PTES for network assessments. Black-box, grey-box, and white-box engagements available depending on your objectives. Every finding is CVSS-scored, risk-ranked, and presented with a concrete remediation action. We include a re-test after remediation to confirm all critical and high findings are resolved — not just documented.',
    points: ['External network, internal network, and web application testing', 'OWASP Top 10 and PTES methodology', 'CVSS-scored findings with remediation priority', 'Free re-test after remediation of critical and high findings'],
  },
  {
    icon: Shield,
    title: 'Endpoint Detection & Response',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'EDR deployment across all Windows, macOS, and Linux endpoints using Microsoft Defender for Endpoint, CrowdStrike Falcon, or Sophos Intercept X. Behavioural detection catches threats that signature-based antivirus misses — including fileless attacks, living-off-the-land techniques, and zero-day exploits. Compromised endpoints are automatically isolated from the network within seconds of detection, stopping lateral movement before it spreads.',
    points: ['Defender for Endpoint, CrowdStrike, or Sophos EDR', 'Behavioural detection for zero-day and fileless attacks', 'Automatic endpoint isolation on confirmed threat', 'Threat hunting on endpoint telemetry data'],
  },
  {
    icon: Lock,
    title: 'Email Security & Anti-Phishing',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Multi-layer email security that catches phishing, business email compromise, and malware attachments before they reach user inboxes. Microsoft Defender for Office 365, Proofpoint, or Mimecast configured with anti-spoofing policies, Safe Links URL detonation, and Safe Attachments sandboxing. Simulated phishing campaigns run monthly to measure and reduce your organisation-wide click rates with real data.',
    points: ['Microsoft Defender for O365, Proofpoint, or Mimecast', 'Anti-phishing, anti-spoofing, and BEC detection', 'Safe Links and Safe Attachments sandboxing', 'Monthly simulated phishing campaigns with click-rate tracking'],
  },
  {
    icon: Server,
    title: 'Firewall & Network Security',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Next-generation firewall deployment and management using Fortinet FortiGate, Palo Alto, or Cisco Firepower. Network segmentation with VLANs and security zones, IPS/IDS rule tuning to reduce false positives without leaving real threats through, and quarterly firewall policy reviews to remove stale rules that accumulate over years of operational changes. SD-WAN and site-to-site VPN for secure multi-branch connectivity.',
    points: ['Fortinet FortiGate, Palo Alto, or Cisco Firepower NGFW', 'VLAN segmentation and security zone design', 'IPS/IDS rule management with quarterly tuning', 'Quarterly firewall policy review and cleanup'],
  },
  {
    icon: Users,
    title: 'Security Awareness Training',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'The majority of successful cyberattacks begin with a human mistake — a clicked phishing link, a reused password, or a misconfigured share. Our security awareness programme combines simulated phishing campaigns using KnowBe4, role-specific e-learning modules, and live departmental briefings to build a security-conscious culture. Click rates consistently drop 60–80% within three months of the programme launch.',
    points: ['Monthly simulated phishing with KnowBe4', 'Role-specific security e-learning modules', 'Live department briefings on current threats', 'Click rate and credential submission metrics per department'],
  },
]

const THREAT_STATS = [
  { value: '94%',  label: 'of breaches start with email',      color: '#DC2626' },
  { value: '287',  label: 'average days to detect a breach',   color: '#D97706' },
  { value: '4.35M', label: 'USD average breach cost (2023)',    color: '#7C3AED' },
  { value: '60%',  label: 'of SMBs close after a cyberattack', color: '#2563EB' },
]

const FAQS = [
  {
    question: 'What is the difference between a vulnerability assessment and a penetration test?',
    answer: 'A vulnerability assessment (VA) uses automated scanning tools to identify known weaknesses across your systems and ranks them by severity — it tells you what is potentially exploitable. A penetration test (PT) goes further: a skilled security engineer actively tries to exploit those weaknesses to determine whether they can actually be used to compromise your systems and what the real impact would be. We recommend starting with a VA for a broad picture, then using targeted PTs on your highest-risk systems.',
  },
  {
    question: 'How long does a penetration test engagement take?',
    answer: 'An external network penetration test typically takes 2–3 days of active testing plus 3–5 days for report preparation and delivery. A web application penetration test takes 3–5 days of testing depending on application complexity. An internal network penetration test takes 5–10 days. All engagements include a detailed findings report with CVSS scoring, executive summary, and a remediation roadmap.',
  },
  {
    question: 'Do you help with fixing vulnerabilities after you find them?',
    answer: 'Yes. Our standard VAPT engagement includes post-assessment remediation support — we assist with patch application, security configuration changes, firewall rule updates, and application code fixes where within scope. After remediation is complete, we perform a re-test on all critical and high findings at no additional charge to confirm they have been fully resolved.',
  },
  {
    question: 'What compliance frameworks does your cybersecurity service support?',
    answer: 'Our cybersecurity services are designed to support ISO 27001, PCI-DSS, GDPR, the NIST Cybersecurity Framework, and SOC 2 Type II requirements. For clients pursuing formal certification, we provide gap assessments, control implementation support, evidence collection assistance, and readiness reviews. The actual certification audit must be conducted by an accredited certification body — we help you prepare for it.',
  },
  {
    question: 'Can you monitor our existing security tools as an MSSP?',
    answer: 'Yes. If you already have a SIEM, EDR, or firewall in place, we can integrate our SOC team as a Managed Security Service Provider (MSSP) monitoring and responding to events from your existing tooling. We also conduct a gap assessment to identify what your current toolset is missing and where additional coverage would reduce your risk exposure most efficiently.',
  },
  {
    question: 'What should we do if we suspect we have already been breached?',
    answer: 'Call our emergency line immediately. Do not attempt to clean systems yourself as this can destroy forensic evidence and make recovery more difficult. Our incident response team will contain the breach, preserve evidence, determine the scope of compromise, and guide you through recovery and notification obligations. We recommend all clients have our number saved before an incident occurs — not after.',
  },
]

export default function CyberSecurityPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Cyber Security' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-10 sm:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: '#DC2626' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#DC2626' }}>Cyber Security</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Protect Your Business Before<br />
              <span style={{ color: '#DC2626' }}>an Attacker Does.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              Cybersecurity is not a product you buy — it is a practice you maintain. Infraspine Cybersecurity covers every layer of your attack surface: 24/7 SOC monitoring to detect threats as they happen, VAPT assessments to find weaknesses before attackers do, endpoint and email protection to block the most common attack vectors, and security awareness training to reduce the human risk that technology alone cannot solve.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {THREAT_STATS.map(s => (
                <div key={s.label} className="rounded-xl p-3 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[17px] font-black mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[10.5px] leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>

            <Link href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
              style={{ background: '#DC2626', color: '#fff' }}>
              Book a Free Security Assessment <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Defence in Depth ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="h-px w-6" style={{ background: '#DC2626' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#DC2626' }}>Our Security Philosophy</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Defence in Depth — Not a Single Product
              </h2>
              <p className="text-[15px] leading-relaxed mb-5" style={{ color: '#64748B' }}>
                No single security tool stops all attacks. Ransomware bypasses antivirus because it exploits legitimate system tools. Phishing bypasses firewalls because the user clicks the link. Insider threats bypass perimeter security because they already have access. Effective cybersecurity requires layered controls at every level — network, endpoint, email, identity, and people.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Infraspine builds security programmes that address all layers simultaneously. We start with a threat assessment to understand your specific risk profile, then build a prioritised security roadmap that delivers the highest risk reduction for your budget. Every control we implement is mapped to your actual threat model — not a generic checklist.
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Network layer — NGFW, segmentation, IPS/IDS',          color: '#2563EB' },
                  { label: 'Endpoint layer — EDR, patch management, encryption',    color: '#7C3AED' },
                  { label: 'Email layer — anti-phishing, sandboxing, BEC detection', color: '#DC2626' },
                  { label: 'Identity layer — MFA, conditional access, PAM',          color: '#D97706' },
                  { label: 'Detection layer — SIEM, SOC monitoring, threat hunting', color: '#0891B2' },
                  { label: 'People layer — awareness training, phishing simulation', color: '#00C853' },
                ].map(({ label, color }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
                    <span className="text-[14px]" style={{ color: '#374151' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-7 border" style={{ background: '#FEF2F2', borderColor: '#FECACA' }}>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-5" style={{ color: '#DC2626' }}>Most Common Attack Vectors We Defend Against</p>
              <div className="space-y-3">
                {[
                  { threat: 'Ransomware & double-extortion attacks',    mitigated: 'EDR + immutable backup + SOC monitoring' },
                  { threat: 'Phishing and credential harvesting',        mitigated: 'Email security + MFA + awareness training' },
                  { threat: 'Business Email Compromise (BEC)',           mitigated: 'Anti-spoofing + DMARC/DKIM + SOC alerts' },
                  { threat: 'Unpatched vulnerability exploitation',      mitigated: 'VAPT + patch management + WAF' },
                  { threat: 'Insider threat and privilege abuse',        mitigated: 'PAM + SIEM behaviour analytics + access reviews' },
                  { threat: 'Supply chain and third-party compromise',   mitigated: 'Vendor risk assessment + network segmentation' },
                ].map(({ threat, mitigated }) => (
                  <div key={threat} className="rounded-xl p-4 bg-white border" style={{ borderColor: '#FECACA' }}>
                    <p className="text-[13px] font-bold mb-1" style={{ color: '#7F1D1D' }}>{threat}</p>
                    <p className="text-[11.5px]" style={{ color: '#64748B' }}>Mitigated by: {mitigated}</p>
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
              Cybersecurity Services
            </h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Six service lines covering every attack surface — from your network perimeter through to the human layer of your organisation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map(cap => (
              <div key={cap.title} className="bg-white rounded-2xl border p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: '#E2E8F0', boxShadow: '0 4px 20px rgba(10,22,40,0.06)' }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: cap.bg }}>
                  <cap.icon size={22} style={{ color: cap.color }} strokeWidth={1.5} />
                </div>
                <h3 className="text-[17px] font-black mb-3" style={{ color: '#0A1628' }}>{cap.title}</h3>
                <p className="text-[13.5px] leading-relaxed mb-5" style={{ color: '#64748B' }}>{cap.desc}</p>
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

      {/* ── Tools ── */}
      <section className="py-12 bg-white border-y" style={{ borderColor: '#E2E8F0' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-7" style={{ color: '#94A3B8' }}>Security Platforms We Deploy & Manage</p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {['Microsoft Sentinel', 'Defender for Endpoint', 'Defender for Office 365', 'CrowdStrike Falcon', 'Sophos Intercept X', 'Wazuh SIEM', 'Fortinet FortiGate', 'Palo Alto NGFW', 'Cisco Firepower', 'Proofpoint', 'Mimecast', 'KnowBe4', 'Nessus Pro', 'Burp Suite Pro', 'OWASP ZAP', 'Qualys VMDR'].map(t => (
              <span key={t} className="px-3.5 py-1.5 rounded-full text-[12px] font-semibold border"
                style={{ background: '#F8FAFC', borderColor: '#E2E8F0', color: '#475569' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        title="Cyber Security — Frequently Asked Questions"
        subtitle="Straight answers to cybersecurity questions from businesses across Pakistan."
        faqs={FAQS}
      />

      <CTABanner
        heading="Your Business Is a Target. Let's Make It a Hard One."
        subheading="Book a free 30-minute security consultation. We will identify your top 3 risk areas at no cost or obligation."
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
