import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  AlertTriangle, BarChart2, Globe, Settings, Zap, FileText,
  ChevronRight, ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'Security Alerts Management Pakistan | SIEM & Alerting | Infraspine',
  description: 'Infraspine manages SIEM alerting, tuning, and triage for businesses in Pakistan. 98% false-positive reduction, sub-5-minute alert triage, and 24/7 analyst coverage to eliminate alert fatigue.',
  alternates: {
    canonical: 'https://www.infraspine.com/services/cyber-security/security-alerts',
  },
  openGraph: {
    title: 'Security Alerts Management Pakistan | Infraspine',
    description: 'Managed SIEM alerting, tuning, and triage. Reduce alert fatigue while ensuring genuine threats are never missed.',
    url: 'https://www.infraspine.com/services/cyber-security/security-alerts',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Security Alerts Management Services',
  provider: { '@type': 'Organization', name: 'Infraspine', url: 'https://www.infraspine.com' },
  areaServed: 'Pakistan',
  description: 'Managed SIEM alerting, tuning, and triage to reduce alert fatigue while ensuring genuine threats are never missed. 24/7 analyst coverage.',
  url: 'https://www.infraspine.com/services/cyber-security/security-alerts',
}

const STATS = [
  { value: '1M+', label: 'Alerts Processed/Day', color: '#D97706' },
  { value: '98%', label: 'False-Positive Reduction', color: '#D97706' },
  { value: '<5min', label: 'Alert Triage', color: '#D97706' },
  { value: '24/7', label: 'Analyst Coverage', color: '#D97706' },
]

const CAPABILITIES = [
  {
    icon: AlertTriangle,
    title: 'SIEM Alert Tuning',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'A newly deployed SIEM produces a flood of raw alerts — many of them false positives that overwhelm security teams and cause genuine threats to be buried. SIEM alert tuning is the systematic process of refining detection rules, thresholds, and logic to maximise signal-to-noise ratio. Infraspine\'s tuning team begins by analysing your current alert volume, categorising alerts by type and disposition, and identifying the top sources of false positive noise. We then work through each noisy rule category — adjusting severity thresholds, adding contextual filters (time-of-day, user role, asset criticality), and building whitelists for known legitimate behaviours such as scheduled scan activity or automated backup jobs. Custom detection rules are written to cover your specific environment — your asset naming conventions, user behaviour baselines, and known threat indicators. Tuning is an ongoing process, not a one-time event; our team reviews alert performance weekly and continuously improves rule precision. The goal is a state where every alert in your queue represents a genuine question worth an analyst\'s time.',
    points: ['Top false-positive source analysis', 'Threshold and filter optimisation', 'Custom rule development for your environment', 'Weekly performance review and continuous improvement'],
  },
  {
    icon: BarChart2,
    title: 'Alert Triage & Prioritisation',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Even in a well-tuned SIEM environment, alerts require expert triage to determine whether they represent genuine security incidents requiring escalation or benign anomalies that can be closed. Infraspine\'s 24/7 analyst team provides first-level triage for all SIEM alerts, investigating each alert within five minutes of generation. Triage involves enriching the alert with additional context — threat intelligence lookups, user identity information, asset criticality, historical behaviour, and related events — to make a confident disposition decision. Analysts follow structured triage playbooks that ensure consistent, high-quality investigation regardless of which team member is working. Alerts assessed as true positives are escalated to incident response with a full triage summary and recommended containment actions pre-populated. Alerts closed as false positives are tagged and fed back into the tuning process to prevent recurrence. All triage decisions are logged with analyst notes, evidence links, and timestamps for audit and quality review.',
    points: ['Sub-5-minute triage from alert generation', 'Threat intelligence and context enrichment', 'Structured triage playbooks per alert type', 'True positive escalation with pre-populated summaries'],
  },
  {
    icon: Globe,
    title: 'Threat Intelligence Integration',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Threat intelligence transforms raw security alerts into context-rich detections by matching observed indicators against known attacker infrastructure, malware signatures, and tactical patterns. Infraspine integrates your SIEM with multiple threat intelligence feeds — commercial, open-source, and sector-specific — to enrich every alert with the broader context of known threats. At the technical indicator level, IP addresses, domains, file hashes, and email addresses in security events are matched against threat intelligence feeds including AlienVault OTX, Abuse.ch, and commercial feeds such as Recorded Future and CrowdStrike Intel. At the tactical level, MITRE ATT&CK technique mapping transforms event patterns into ATT&CK technique labels, allowing analysts to understand the attacker\'s likely objectives and anticipate their next steps. Custom threat intelligence derived from your own incident investigations — attacker tooling, C2 infrastructure, and TTPs from previous incidents — is integrated as a high-priority feed. All threat intelligence is kept current with automated feed updates and regular quality assessment to remove stale or noisy indicators.',
    points: ['Commercial and open-source TI feed integration', 'MITRE ATT&CK technique mapping for all alerts', 'Custom TI from your own incident history', 'Automated feed updates and quality management'],
  },
  {
    icon: Settings,
    title: 'Alert Correlation & Grouping',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Individual security events are rarely meaningful in isolation — a single failed login attempt, one suspicious DNS query, or an unusual outbound connection may each be benign. It is the pattern of related events — multiple failed logins followed by a successful one, then an unusual process execution, then a new outbound connection — that reveals attacker activity. Alert correlation is the process of connecting related low-severity events across time, users, and systems to identify attack patterns that individual alerts would miss. Infraspine engineers build and maintain correlation rules in your SIEM that group related events into unified incidents, reducing analyst workload and surfacing complex attacks. Correlation rules cover common attack chains including credential stuffing (mass failed logins across multiple accounts), lateral movement (authentication from unusual source followed by network scanning), data staging (large volumes of file access followed by compression and outbound transfer), and command-and-control beaconing (regular outbound connections to the same external IP). Event grouping reduces alert volume by aggregating hundreds of related raw events into a single prioritised incident for analyst review.',
    points: ['Multi-event correlation across time and systems', 'Attack chain detection rules', 'Event grouping to reduce analyst queue volume', 'Custom correlation for your environment and threats'],
  },
  {
    icon: Zap,
    title: 'Escalation Workflows',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'When a genuine security incident is identified, the quality of the escalation determines the speed and effectiveness of the response. Poorly designed escalation workflows — vague notifications, no context, unclear ownership — lead to delayed response and confusion during the critical first hour of an incident. Infraspine designs and implements structured escalation workflows that ensure every genuine security incident reaches the right person with the right information at the right time. Escalation paths are defined by incident severity, type, and affected asset — a critical alert on a financial system follows a different escalation path than a medium alert on a development server. Alert notifications include a full triage summary, recommended immediate actions, and links to relevant playbooks — so the recipient can begin responding immediately without needing to re-investigate from scratch. Integration with your ticketing system (ServiceNow, Jira, Freshservice) ensures incidents are tracked from detection through to closure with full audit trail. SLA timers are applied to each severity level — escalations that breach SLA trigger automatic management notification.',
    points: ['Severity and asset-based escalation routing', 'Notification content with triage summary and playbook links', 'Ticketing system integration for full audit trail', 'SLA breach monitoring with auto-escalation'],
  },
  {
    icon: FileText,
    title: 'Weekly Alert Summary Reports',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Security operations data is most valuable when it is communicated clearly to the stakeholders who need it — from analysts who need operational detail to CISOs and board members who need strategic context. Infraspine produces weekly alert summary reports that give each audience the information they need in the format that works for them. The operational report covers alert volume trends, top alert categories, true positive and false positive rates, mean time to triage, escalation summary, and notable events from the week — giving security teams the metrics needed to continuously improve operations. The executive summary distils the same data into a one-page business-language overview covering security posture trend, key incidents and their business impact, and the top three recommended actions for the coming week. Monthly reports expand coverage to include threat landscape context relevant to your industry and geography, compliance control status, and a security maturity assessment against your improvement roadmap. All reports are delivered in PDF and interactive dashboard formats with historical trending data.',
    points: ['Weekly operational and executive summary reports', 'Alert volume, accuracy, and triage time metrics', 'Monthly threat landscape and compliance summary', 'Interactive dashboard with historical trending'],
  },
]

const FAQS = [
  {
    question: 'What is security alerts management?',
    answer: 'Security alerts management is the process of collecting, processing, prioritising, investigating, and responding to the security alerts generated by your SIEM, endpoint detection tools, network monitoring systems, and cloud security platforms. Without active management, a typical enterprise SIEM generates hundreds of thousands of alerts per day — far more than any team can investigate. Security alerts management applies tuning, automation, threat intelligence, and expert analyst review to transform raw alert volume into a manageable, high-quality queue of genuine security issues that require attention.',
  },
  {
    question: 'Why do we have so many false positive alerts?',
    answer: 'False positives are caused by detection rules written without sufficient context about the specific environment they are monitoring. Generic out-of-box SIEM rules are designed to work across all environments — they cannot know that your IT team runs a port scanner every Tuesday, that your backup software generates thousands of file access events each night, or that your developers intentionally use tools that look like attack utilities. Without customisation to exclude these known-good behaviours, rules fire on them every time. Environmental changes — new applications, network changes, new employees — also generate false positives as known-good activity patterns change. Ongoing tuning is the solution.',
  },
  {
    question: 'How do you reduce alert fatigue?',
    answer: 'We address alert fatigue through a combination of four approaches. First, rule tuning — adjusting thresholds and adding contextual filters to reduce false positives at source. Second, event correlation and grouping — combining hundreds of related raw events into a single prioritised incident rather than presenting each event as a separate alert. Third, automation — using SOAR playbooks to automatically investigate and close common false positive patterns without analyst involvement. Fourth, triage tiers — applying automated pre-triage to score and sort alerts before they reach analysts, ensuring analysts spend their time on the highest-value items. Our target for managed clients is to reduce analyst-facing alert volume by 95% or more while maintaining detection coverage.',
  },
  {
    question: 'What is SIEM?',
    answer: 'SIEM stands for Security Information and Event Management. A SIEM platform collects log and event data from across your IT environment — firewalls, endpoints, servers, applications, cloud services, and identity platforms — and correlates this data in real time to detect security threats. The SIEM applies detection rules to identify patterns consistent with attacks, generating security alerts that analysts investigate. Modern SIEMs also include user behaviour analytics (UEBA) to detect anomalous activity that may not match known attack patterns. Common SIEM platforms include Microsoft Sentinel, Splunk, IBM QRadar, Elastic SIEM, and Wazuh.',
  },
  {
    question: 'How does threat intelligence improve alerting?',
    answer: 'Threat intelligence improves alerting in two primary ways. First, it enables indicator-based detection — when events in your environment involve known malicious IP addresses, domains, file hashes, or email addresses, threat intelligence allows the SIEM to immediately flag these as high-priority alerts rather than treating them as unknown activity requiring time-consuming investigation from scratch. Second, threat intelligence provides tactical context — by mapping detected events to MITRE ATT&CK techniques used by known threat actor groups, analysts can understand the attacker\'s likely objective and anticipate their next steps, enabling faster and more targeted response.',
  },
]

export default function SecurityAlertsPage() {
  const accent = '#D97706'
  const heroBg = '#1a1000'
  const statBg = '#FFFBEB'
  const borderColor = '#FDE68A'

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
              <li style={{ color: accent }} className="font-semibold">Security Alerts Management</li>
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
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: accent }}>Cybersecurity — Security Alerts Management</span>
              </div>
              <h1 className="text-[30px] sm:text-[46px] lg:text-[52px] font-black leading-[1.06] tracking-tight text-white mb-5">
                Security Alerts Management<br />
                <span style={{ color: accent }}>SIEM Tuning & Triage in Pakistan</span>
              </h1>
              <p className="text-[15px] sm:text-[17px] leading-relaxed mb-8 max-w-2xl" style={{ color: '#94A3B8' }}>
                Managed SIEM alerting, tuning, and triage that eliminates alert fatigue while ensuring genuine threats are never missed. Processing 1M+ alerts per day with 98% false-positive reduction and sub-5-minute triage by 24/7 security analysts.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                  style={{ background: accent, color: '#fff' }}
                >
                  Reduce Alert Fatigue <ArrowRight size={15} />
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
                Security Alerts Management Capabilities
              </h2>
              <p className="text-[14px] max-w-xl mx-auto" style={{ color: '#64748B' }}>
                Six alerting disciplines from SIEM tuning through to weekly reporting for management and security teams.
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
                Common questions about security alerts management and SIEM services.
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
              style={{ background: 'rgba(217,119,6,0.15)', color: accent, border: `1px solid rgba(217,119,6,0.3)` }}
            >
              <AlertTriangle size={12} />
              Stop Drowning in Alerts
            </div>
            <h2 className="text-[24px] sm:text-[36px] font-black text-white mb-4">
              Cut Alert Fatigue by 98%<br />
              <span style={{ color: accent }}>Never Miss a Genuine Threat Again</span>
            </h2>
            <p className="text-[15px] leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: '#94A3B8' }}>
              Infraspine\'s managed security alerts service tunes your SIEM, triages every alert within 5 minutes, and delivers weekly reports that give your leadership team clear visibility into your security posture.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: accent, color: '#fff' }}
              >
                Fix Your Alert Problem <ArrowRight size={15} />
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
