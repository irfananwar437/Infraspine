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
  Search, Users, Network, FileText, Globe, CheckCircle, ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'IT Security Auditing Pakistan | Information Security Audit',
  description: 'Comprehensive IT security auditing services in Pakistan. Infraspine assesses your information security controls against ISO 27001, NIST, and CIS benchmarks and delivers a prioritised remediation roadmap.',
  alternates: { canonical: 'https://www.infraspine.com/services/cyber-security/security-auditing' },
  openGraph: {
    title: 'IT Security Auditing Pakistan | Information Security Audit | Infraspine',
    description: 'Independent IT security audits aligned to ISO 27001, NIST CSF, and CIS Controls. Gap analysis, risk ratings, and a clear remediation roadmap delivered by Infraspine.',
    url: 'https://www.infraspine.com/services/cyber-security/security-auditing',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'IT Security Auditing',
  description: 'Comprehensive review of an organisation\'s information security posture, controls, and processes against ISO 27001, NIST, and CIS benchmarks.',
  url: 'https://www.infraspine.com/services/cyber-security/security-auditing',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  areaServed: 'Pakistan',
  serviceType: 'IT Security Audit',
}

const STATS = [
  { value: 'ISO 27001 / NIST', label: 'Aligned audit framework', color: '#DC2626' },
  { value: '120+', label: 'Controls assessed per engagement', color: '#DC2626' },
  { value: 'Detailed', label: 'Gap report with risk ratings', color: '#DC2626' },
  { value: 'Roadmap', label: 'Remediation plan included', color: '#DC2626' },
]

const CAPABILITIES = [
  {
    icon: Search,
    title: 'Security Control Assessment',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'A thorough technical and procedural review of your existing security controls mapped against ISO 27001:2022, NIST Cybersecurity Framework, and CIS Controls v8. Each control is evaluated for existence, design adequacy, and operational effectiveness. Our auditors assign a RAG rating — Red, Amber, or Green — to every control domain, giving your board and security team a clear, colour-coded picture of where protections are strong and where gaps expose the organisation to material risk. The assessment covers preventive, detective, and corrective controls across people, process, and technology dimensions, ensuring no blind spots remain when the final report is produced.',
    points: ['ISO 27001:2022 control mapping', 'RAG-rated control domains', 'People, process, and technology scope', 'Board-ready executive summary'],
  },
  {
    icon: Users,
    title: 'Access & Identity Audit',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Identity and access management is one of the most common sources of security incidents — from over-privileged accounts to orphaned credentials left active after staff departures. Infraspine audits your entire identity estate: Active Directory and Entra ID configuration, privileged account inventory, role-based access control alignment, multi-factor authentication adoption, and joiners, movers, and leavers process effectiveness. We identify accounts with excessive privileges, shared service accounts, dormant users, and gaps in MFA coverage. Every finding is mapped to a specific remediation action and an owner, ensuring accountability for closure across IT and HR teams.',
    points: ['Active Directory and Entra ID review', 'Privileged account inventory', 'MFA adoption gap analysis', 'Joiners, movers, and leavers process audit'],
  },
  {
    icon: Network,
    title: 'Network Security Review',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Your network is the primary attack surface for external threats. Infraspine reviews firewall rule sets for overly permissive rules and rule-base bloat, VLAN segmentation design and enforcement, remote access configurations including VPN and zero-trust implementations, wireless network security settings, and network monitoring and logging coverage. We evaluate whether your network architecture follows the principle of least privilege and whether east-west traffic between segments is appropriately restricted. Findings are presented with severity ratings — Critical, High, Medium, Low — and include specific configuration changes required to remediate each issue without disrupting business operations.',
    points: ['Firewall rule-set analysis', 'VLAN segmentation review', 'Remote access and VPN audit', 'Network logging coverage assessment'],
  },
  {
    icon: FileText,
    title: 'Policy & Procedure Review',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Technical controls without supporting policies and procedures are incomplete — auditors, regulators, and insurers all require documented evidence that security is governed as well as implemented. Infraspine reviews your information security policy suite against ISO 27001 Annex A requirements, identifying missing policies, policies that are out of date, and policies that exist on paper but are not enforced in practice. We assess the quality and completeness of your acceptable use policy, data classification policy, incident response procedures, business continuity plans, and supplier security requirements. A gap register identifies every missing document, with templates provided to accelerate remediation.',
    points: ['ISO 27001 Annex A policy mapping', 'Policy completeness scoring', 'Missing-document gap register', 'Policy templates provided for gaps'],
  },
  {
    icon: Globe,
    title: 'Third-Party Risk Assessment',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Most organisations share sensitive data with dozens or hundreds of suppliers, yet the majority have no formal process for evaluating supplier security. Infraspine audits your third-party risk management programme: supplier inventory, security questionnaire processes, contractual security clauses, data processing agreement coverage, and the ongoing monitoring of critical supplier security posture. We identify suppliers with access to sensitive systems or personal data that have not been security-assessed, and prioritise them by risk tier based on access level and data sensitivity. The output is a prioritised supplier risk register with recommended actions for each critical and high-risk supplier relationship.',
    points: ['Supplier security inventory', 'DPA and contractual clause review', 'Risk-tiered supplier register', 'Critical supplier assessment recommendations'],
  },
  {
    icon: CheckCircle,
    title: 'Audit Reporting & Remediation Planning',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'An audit that produces a list of findings without a clear path to remediation is of limited value. Every Infraspine security audit concludes with a comprehensive written report and a structured remediation roadmap. The report includes an executive summary for board and senior management, a technical findings appendix with evidence and screenshots, and a risk-scored findings register in spreadsheet format. The remediation roadmap prioritises actions by risk level, assigns indicative effort and cost, and sequences work into 30-, 60-, and 90-day delivery phases. We present findings in a debrief session with your team and remain available for clarification questions throughout the remediation period at no additional charge.',
    points: ['Executive summary and technical appendix', 'Risk-scored findings register', '30/60/90-day remediation roadmap', 'Debrief presentation to leadership team'],
  },
]

const FAQS = [
  {
    question: 'What is an IT security audit?',
    answer: 'An IT security audit is an independent, systematic review of an organisation\'s information security controls, policies, and processes. The auditor evaluates what security measures are in place, how well they are designed, and whether they are actually operating as intended. The output is a risk-rated findings report and a remediation roadmap. Unlike a penetration test, which actively tries to exploit vulnerabilities, a security audit is primarily evidence-based — reviewing configuration, documentation, and process evidence to assess the adequacy of controls against a recognised framework such as ISO 27001 or NIST.',
  },
  {
    question: 'How long does a security audit take?',
    answer: 'The duration depends on the size and complexity of the organisation. A security audit for a small organisation (under 50 users, single site) typically takes one to two weeks from kickoff to report delivery. A mid-size organisation with multiple sites, complex infrastructure, and a large supplier base typically requires three to four weeks. Enterprise-scale audits covering multiple business units and extensive third-party ecosystems can take six to eight weeks. Infraspine provides a detailed timeline in the proposal, broken down by phase — preparation, fieldwork, analysis, and reporting — so you know exactly what to expect.',
  },
  {
    question: 'What standards do you audit against?',
    answer: 'Infraspine conducts security audits aligned to ISO/IEC 27001:2022, NIST Cybersecurity Framework (CSF) 2.0, and CIS Controls v8. For organisations in regulated sectors, we also incorporate relevant regulatory requirements — for example, PCI DSS for payment card environments, NHS DSPT for health and social care organisations, and Cyber Essentials for UK government supply chain requirements. Most audit engagements use ISO 27001 as the primary framework because it is the most widely recognised internationally and maps well to the full scope of information security controls. We can align to a specific framework if your organisation has an existing standard it is working towards.',
  },
  {
    question: 'Will the audit be disruptive to our operations?',
    answer: 'A well-managed security audit should have minimal operational impact. The majority of audit activity involves document reviews, configuration evidence collection, and interviews with key personnel — none of which require system downtime. Where technical testing is involved, such as reviewing firewall rules or Active Directory configurations, this is done in a read-only capacity. We schedule any potentially impactful activity, such as network scans or access log reviews, outside of business-critical operational windows. Our auditors will agree an engagement plan with your IT team before fieldwork begins to ensure no surprises.',
  },
  {
    question: 'What is delivered at the end of the audit?',
    answer: 'At the conclusion of a security audit, Infraspine delivers: a full written audit report with an executive summary suitable for board presentation, a technical findings appendix with evidence references and risk ratings, a risk-scored findings register in editable spreadsheet format for tracking remediation progress, and a prioritised 90-day remediation roadmap sequenced by risk level. We also deliver a debrief presentation to your leadership and technical teams to walk through the key findings and answer questions. For organisations undertaking ISO 27001 certification, the findings register is formatted to align directly with the ISMS implementation project.',
  },
]

const BREADCRUMB = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Cybersecurity', href: '/services/cyber-security' },
  { label: 'IT Security Auditing', href: '/services/cyber-security/security-auditing' },
]

const ACCENT = '#DC2626'
const HERO_BG = '#1a0000'
const STAT_BG = '#FEF2F2'
const STAT_BORDER = '#FECACA'

export default function SecurityAuditingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />
      <Breadcrumb items={BREADCRUMB} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: HERO_BG }}>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{ background: `radial-gradient(circle,${ACCENT},transparent 70%)` }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: ACCENT }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>Cybersecurity</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              IT Security Auditing<br />
              <span style={{ color: ACCENT }}>for Pakistani Organisations.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              Infraspine delivers comprehensive, independent reviews of your information security posture, controls, and processes against ISO 27001, NIST Cybersecurity Framework, and CIS Controls benchmarks. Every audit concludes with a risk-rated findings report and a prioritised remediation roadmap your team can act on immediately.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-3 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[18px] font-black mb-1 leading-tight" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[10.5px] leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: ACCENT, color: '#fff' }}
              >
                Request a Security Audit <ArrowRight size={14} />
              </Link>
              <Link
                href="/services/cyber-security"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold border transition-all hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}
              >
                All Cybersecurity Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-b" style={{ background: STAT_BG, borderColor: STAT_BORDER }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {STATS.map(s => (
              <div key={s.label} className="text-center">
                <div className="text-[26px] font-black leading-tight mb-1" style={{ color: ACCENT }}>{s.value}</div>
                <div className="text-[12px]" style={{ color: '#64748B' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: ACCENT }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>What We Audit</span>
              <div className="h-px w-6" style={{ background: ACCENT }} />
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Audit Capability Areas
            </h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Our audit methodology covers the full breadth of information security — from technical controls and network architecture through to policy governance and supplier risk.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map(cap => (
              <div
                key={cap.title}
                className="rounded-2xl border overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: STAT_BORDER, boxShadow: '0 4px 20px rgba(10,22,40,0.06)' }}
              >
                <div className="px-6 py-5 border-b" style={{ background: cap.bg, borderColor: STAT_BORDER }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: '#fff', border: `1.5px solid ${STAT_BORDER}` }}>
                    <cap.icon size={18} style={{ color: cap.color }} strokeWidth={1.7} />
                  </div>
                  <h3 className="text-[16px] font-black leading-tight" style={{ color: '#0A1628' }}>{cap.title}</h3>
                </div>
                <div className="px-6 py-5">
                  <p className="text-[13.5px] leading-relaxed mb-4" style={{ color: '#64748B' }}>{cap.desc}</p>
                  <ul className="space-y-2">
                    {cap.points.map(pt => (
                      <li key={pt} className="flex items-start gap-2">
                        <CheckCircle size={13} style={{ color: cap.color, flexShrink: 0, marginTop: '2px' }} />
                        <span className="text-[13px] font-semibold" style={{ color: '#374151' }}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        title="IT Security Auditing — Frequently Asked Questions"
        subtitle="Common questions from organisations preparing for their first independent security audit."
        faqs={FAQS}
        accent={ACCENT}
      />

      <CTABanner
        heading="Ready for an Independent View of Your Security Posture?"
        subheading="Book a free scoping call with Infraspine. We will outline the audit approach, timeline, and cost for your organisation — no obligation."
        primaryLabel="Request a Security Audit"
        primaryHref="/contact-us"
        secondaryLabel="Call Us Now"
        secondaryHref="tel:+923001234567"
      />

      <RelatedServices currentHref="/services/cyber-security/security-auditing" accent="#DC2626" />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
