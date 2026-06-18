import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  Zap, Search, Shield, RefreshCw, FileText, AlertTriangle,
  ChevronRight, ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'Incident Response Services Pakistan | Cyber Incident Management | Infraspine',
  description: 'Infraspine provides 24/7 emergency incident response, digital forensics, and cyber recovery services in Pakistan. Sub-1-hour emergency response. 200+ incidents handled.',
  alternates: {
    canonical: 'https://www.infraspine.com/services/cyber-security/incident-response',
  },
  openGraph: {
    title: 'Incident Response Services Pakistan | Infraspine',
    description: 'Rapid containment, investigation, and recovery from cyberattacks. 24/7 IR team with full digital forensics capability.',
    url: 'https://www.infraspine.com/services/cyber-security/incident-response',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Incident Response Services',
  provider: { '@type': 'Organization', name: 'Infraspine', url: 'https://www.infraspine.com' },
  areaServed: 'Pakistan',
  description: 'Rapid containment, investigation, and recovery from cyberattacks. 24/7 emergency IR team with full digital forensics capability.',
  url: 'https://www.infraspine.com/services/cyber-security/incident-response',
}

const STATS = [
  { value: '<1hr', label: 'Emergency Response', color: '#EA580C' },
  { value: '24/7', label: 'IR Hotline', color: '#EA580C' },
  { value: 'Full', label: 'Forensic Capability', color: '#EA580C' },
  { value: '200+', label: 'Incidents Handled', color: '#EA580C' },
]

const CAPABILITIES = [
  {
    icon: Zap,
    title: 'Emergency Incident Containment',
    color: '#EA580C',
    bg: '#FFF7ED',
    desc: 'When a cyberattack is in progress or has just been discovered, the first priority is containment — stopping the bleeding before assessing the wound. Infraspine\'s emergency IR team can be engaged within minutes via our 24/7 hotline and begin remote containment actions within one hour. Containment actions are tailored to the attack type and typically include isolating compromised systems from the network, revoking compromised credentials and active sessions, blocking attacker command-and-control (C2) communications at the firewall, suspending affected user accounts, and deploying emergency endpoint isolation on compromised workstations. Throughout containment, our team maintains careful forensic integrity — actions are logged with timestamps and justifications to preserve the chain of evidence for subsequent investigation. We coordinate directly with your IT team and maintain constant communication throughout the containment phase.',
    points: ['Sub-1-hour remote containment initiation', 'Network isolation and firewall blocking', 'Credential revocation and session termination', 'Forensic integrity maintained throughout'],
  },
  {
    icon: Search,
    title: 'Digital Forensics & Investigation',
    color: '#EA580C',
    bg: '#FFF7ED',
    desc: 'Following containment, a thorough forensic investigation establishes the full scope and timeline of the attack — answering the critical questions: How did the attacker get in? What did they access? What did they take or change? How long were they present? Our forensic investigators collect and analyse volatile memory (RAM), disk images, network traffic captures, authentication logs, endpoint telemetry, and application logs using forensically sound acquisition procedures that meet legal evidentiary standards. We reconstruct the complete attack timeline from initial access through lateral movement to the final impact event. Forensic artefacts examined include registry entries, prefetch files, browser history, email headers, file system metadata, and Windows Event Log entries. The investigation report provides a narrative timeline of the entire incident, the attacker\'s TTPs mapped to MITRE ATT&CK, and a definitive list of affected systems and data.',
    points: ['Forensically sound evidence acquisition', 'Full attack timeline reconstruction', 'MITRE ATT&CK TTP mapping', 'Legal-standard investigation documentation'],
  },
  {
    icon: Shield,
    title: 'Malware Analysis & Removal',
    color: '#EA580C',
    bg: '#FFF7ED',
    desc: 'Malware analysis is a critical step in understanding the capabilities of the code used in an attack and ensuring complete eradication from the environment. Our analysts perform both static and dynamic analysis of identified malware samples in an isolated sandbox environment. Static analysis examines the binary — strings, imports, packing techniques, and code structure — to identify malware family, capabilities, and indicators of compromise (IOCs). Dynamic analysis executes the malware in a controlled environment to observe runtime behaviour including file system changes, registry modifications, network communications, and process injection. The resulting IOC list — file hashes, IP addresses, domain names, registry keys, and file paths — is used to hunt for additional infections across the environment. Complete malware removal procedures are documented and executed to ensure no persistence mechanisms survive the cleanup.',
    points: ['Static and dynamic malware analysis', 'IOC extraction and environment-wide hunt', 'Persistence mechanism identification and removal', 'Sandbox execution with behavioural reporting'],
  },
  {
    icon: RefreshCw,
    title: 'Recovery & Restoration',
    color: '#EA580C',
    bg: '#FFF7ED',
    desc: 'Recovery is the phase where normal business operations are restored following a cyber incident — but safe recovery requires careful planning to avoid reinfecting cleaned systems or restoring compromised backups. Infraspine\'s recovery team develops a sequenced restoration plan that prioritises critical business systems while maintaining network segregation during the process. We evaluate available backups for integrity and signs of pre-infection compromise before recommending restoration targets. System rebuilds from known-good images are used where forensic investigation has identified deep-seated compromise. We harden restored systems against the specific attack vector used before reconnecting them to the production network. Recovery milestones are communicated to all stakeholders in real time. Post-recovery monitoring is deployed for a defined observation period to detect any recurrence. We do not declare recovery complete until monitoring confirms no residual attacker activity.',
    points: ['Sequenced critical system restoration', 'Backup integrity validation pre-restoration', 'Clean rebuild from known-good images', 'Post-recovery monitoring period'],
  },
  {
    icon: FileText,
    title: 'Post-Incident Reporting',
    color: '#EA580C',
    bg: '#FFF7ED',
    desc: 'A comprehensive post-incident report is delivered following every engagement, serving the dual purpose of organisational learning and regulatory compliance evidence. The report contains an executive summary written for board and senior management level with clear business impact language, a full technical narrative of the incident from initial access to recovery, a chronological timeline of all events and response actions, a root cause analysis identifying the specific vulnerability or human error that enabled the attack, a list of all affected systems and data with confidence levels, evidence of containment and eradication actions taken, and a set of strategic and tactical recommendations to prevent recurrence. The report is formatted to meet the notification and documentation requirements of relevant regulatory frameworks applicable in Pakistan and internationally, including GDPR where cross-border data is involved.',
    points: ['Executive and technical narrative', 'Root cause analysis', 'Regulatory compliance documentation', 'Strategic prevention recommendations'],
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response Planning',
    color: '#EA580C',
    bg: '#FFF7ED',
    desc: 'The most effective incident response happens before an incident occurs. Infraspine\'s IR planning service helps organisations prepare for a cyber incident through the development of a formal Incident Response Plan (IRP) tailored to their environment, threat profile, and regulatory obligations. The IRP defines roles and responsibilities, escalation paths, communication protocols (internal, external, regulatory), containment playbooks for common incident types (ransomware, data breach, insider threat, DDoS), and evidence preservation procedures. We conduct tabletop exercises to test the plan against realistic attack scenarios — walking your team through the decision points they would face during a real incident. IR retainer arrangements are available for organisations that want guaranteed response time SLAs and pre-authorised access to ensure response can begin immediately without contract negotiation during a crisis.',
    points: ['Custom IR Plan development', 'Tabletop exercise facilitation', 'Incident-type specific playbooks', 'IR retainer with guaranteed SLA'],
  },
]

const FAQS = [
  {
    question: 'What counts as a cybersecurity incident?',
    answer: 'A cybersecurity incident is any event that has compromised — or has a credible potential to compromise — the confidentiality, integrity, or availability of your information or systems. Common examples include ransomware infections, confirmed or suspected data breaches, unauthorised access to systems or accounts, malware infections, DDoS attacks causing service disruption, insider data theft, business email compromise (BEC), and cryptojacking. If you are unsure whether an event constitutes an incident, call our IR hotline — we will assess the situation quickly and help you decide on the appropriate response without charge.',
  },
  {
    question: 'How quickly can your team respond?',
    answer: 'Our 24/7 IR hotline is answered by a qualified incident responder at all hours. Remote triage and initial containment actions begin within one hour of engagement. For organisations on an IR retainer, we have pre-authorised access credentials in escrow so response can begin immediately without waiting for contract negotiation. For on-site response in Karachi, Lahore, and Islamabad, we can typically have an engineer on premises within four to six hours of engagement. For other cities, we coordinate remote response with your local IT team while travel is arranged.',
  },
  {
    question: 'What is digital forensics?',
    answer: 'Digital forensics is the application of scientific investigation methods to the collection, preservation, examination, and analysis of digital evidence from computers, networks, and storage devices. In the context of a cyber incident, forensics establishes the full scope of what happened — how the attacker got in, what they did, what data they accessed or exfiltrated, how long they were present, and what persistence mechanisms they left behind. Crucially, forensic investigation must be conducted using legally admissible procedures to preserve the chain of custody for evidence, which is important if the incident leads to regulatory notification, insurance claims, or criminal prosecution.',
  },
  {
    question: 'Can you help if we have been hit by ransomware?',
    answer: 'Yes. Ransomware is one of the most common incident types we handle in Pakistan. Our response includes immediate isolation of infected systems, identification of the ransomware variant to determine whether a decryption tool exists, forensic investigation to identify the initial access vector and any remaining attacker access, backup integrity assessment to identify the most recent clean restore point, and a sequenced recovery plan. We do not recommend paying ransom as the primary response — many victims pay and still do not receive working decryption keys. We help organisations understand their options, including free decryption tools available from the No More Ransom project.',
  },
  {
    question: 'Do you help with regulatory notification after a breach?',
    answer: 'Yes. Following a data breach, organisations may have regulatory notification obligations depending on the type of data involved and the jurisdictions of affected individuals. We help you understand your notification obligations, prepare accurate and compliant breach notification letters for regulators and affected individuals, and document the incident response actions taken — which regulators typically require as evidence. For organisations subject to GDPR (covering EU data subjects), we are familiar with the 72-hour supervisory authority notification requirement and can help meet this deadline with accurate, well-documented notifications.',
  },
]

export default function IncidentResponsePage() {
  const accent = '#EA580C'
  const heroBg = '#1c0800'
  const statBg = '#FFF7ED'
  const borderColor = '#FDBA74'

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
              <li style={{ color: accent }} className="font-semibold">Incident Response</li>
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
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: accent }}>Cybersecurity — Incident Response</span>
              </div>
              <h1 className="text-[30px] sm:text-[46px] lg:text-[52px] font-black leading-[1.06] tracking-tight text-white mb-5">
                Cyber Incident Response<br />
                <span style={{ color: accent }}>24/7 Emergency IR in Pakistan</span>
              </h1>
              <p className="text-[15px] sm:text-[17px] leading-relaxed mb-8 max-w-2xl" style={{ color: '#94A3B8' }}>
                Rapid containment, digital forensics investigation, and full recovery from cyberattacks. Our 24/7 emergency IR team engages within one hour — stopping attacks in progress, understanding what happened, and restoring normal operations safely.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                  style={{ background: accent, color: '#fff' }}
                >
                  Activate IR Response <ArrowRight size={15} />
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
                Incident Response Capabilities
              </h2>
              <p className="text-[14px] max-w-xl mx-auto" style={{ color: '#64748B' }}>
                Six critical IR disciplines from immediate containment through to post-incident planning.
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
                Common questions about incident response services.
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
              style={{ background: 'rgba(234,88,12,0.15)', color: accent, border: `1px solid rgba(234,88,12,0.3)` }}
            >
              <Zap size={12} />
              Under Attack? Get Help Now.
            </div>
            <h2 className="text-[24px] sm:text-[36px] font-black text-white mb-4">
              Activate Emergency Incident Response<br />
              <span style={{ color: accent }}>24/7 — Sub-1-Hour Engagement</span>
            </h2>
            <p className="text-[15px] leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: '#94A3B8' }}>
              Do not wait. Every minute of attacker dwell time increases the damage. Call our IR hotline or submit a request and our team will engage within one hour.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: accent, color: '#fff' }}
              >
                Contact IR Team Now <ArrowRight size={15} />
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
