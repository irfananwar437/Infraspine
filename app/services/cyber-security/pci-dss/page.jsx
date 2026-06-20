import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Shield, Network, Search, CheckCircle, FileText, BarChart2, ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'PCI-DSS Assessments Pakistan | PCI Compliance Consulting | Infraspine',
  description: 'PCI DSS v4.0 readiness assessments, gap analysis, and compliance consulting in Pakistan. Infraspine supports SAQ completion, ROC preparation, and QSA-qualified guidance for cardholder data environments.',
  alternates: { canonical: 'https://www.infraspine.com/services/cyber-security/pci-dss' },
  openGraph: {
    title: 'PCI-DSS Assessments Pakistan | PCI Compliance Consulting | Infraspine',
    description: 'PCI DSS v4.0 gap analysis, CDE scoping, network segmentation review, ASV scanning, and SAQ/ROC support. Infraspine PCI compliance consulting, Pakistan.',
    url: 'https://www.infraspine.com/services/cyber-security/pci-dss',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'PCI DSS Compliance Consulting',
  description: 'Readiness assessments, gap analysis, and compliance consulting for the Payment Card Industry Data Security Standard v4.0 — required for any organisation that stores, processes, or transmits cardholder data.',
  url: 'https://www.infraspine.com/services/cyber-security/pci-dss',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  areaServed: 'Pakistan',
  serviceType: 'PCI DSS Compliance Assessment',
}

const STATS = [
  { value: 'PCI DSS v4.0', label: 'Latest standard version', color: '#16A34A' },
  { value: '12', label: 'Requirement domains assessed', color: '#16A34A' },
  { value: 'SAQ & ROC', label: 'Completion support', color: '#16A34A' },
  { value: 'QSA-Qualified', label: 'Guidance provided', color: '#16A34A' },
]

const CAPABILITIES = [
  {
    icon: Shield,
    title: 'PCI DSS Gap Analysis',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'Infraspine\'s PCI DSS gap analysis provides a structured evaluation of your current security controls against all 12 PCI DSS v4.0 requirement domains. Each requirement is assessed for compliance status — Compliant, Partially Compliant, or Non-Compliant — with detailed evidence notes explaining the basis for each finding. The gap analysis identifies exactly what remediation work is needed before a formal PCI DSS assessment, allowing you to prioritise effort and investment efficiently. Our gap analysis also includes a compensating controls review for requirements that cannot be met in the standard way due to technical or operational constraints, and documents the compensating control worksheet in the format required by PCI assessors. Findings are presented in a structured report with a prioritised remediation roadmap.',
    points: ['All 12 PCI DSS v4.0 requirements', 'Compliant / Non-Compliant status', 'Compensating controls review', 'Prioritised remediation roadmap'],
  },
  {
    icon: Network,
    title: 'Cardholder Data Environment Scoping',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'Accurate scoping of the Cardholder Data Environment (CDE) is one of the most important and most commonly mishandled aspects of PCI DSS compliance. The scope of your CDE determines how many systems, networks, and processes are subject to PCI requirements — and therefore the cost and complexity of compliance. Infraspine conducts a thorough data flow mapping exercise to identify every system, network, and process that stores, processes, or transmits cardholder data (CHD) and sensitive authentication data (SAD). We also identify connected-to and security-impacting systems that fall within scope even if they do not directly handle CHD. Accurate CDE scoping, with robust network segmentation to isolate the CDE from out-of-scope systems, is the foundation of a cost-effective PCI compliance programme.',
    points: ['Cardholder data flow mapping', 'CDE boundary definition', 'Connected-to system identification', 'Scope reduction recommendations'],
  },
  {
    icon: Search,
    title: 'Network Segmentation Review',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'Network segmentation is not required by PCI DSS, but without it the entire network falls within the scope of PCI requirements — dramatically increasing the cost and complexity of compliance. When segmentation is used to isolate the CDE, PCI DSS requires that the segmentation controls are verified to be effective. Infraspine reviews your network segmentation architecture and tests whether the CDE is truly isolated from out-of-scope systems and networks. We examine firewall rule sets, VLAN configurations, ACLs, and network monitoring controls to verify that segmentation controls prevent all traffic between the CDE and out-of-scope systems other than explicitly authorised and required communications. Segmentation testing findings are documented in a format suitable for review by your QSA and included in the assessment evidence pack.',
    points: ['Segmentation architecture review', 'Firewall and ACL rule analysis', 'Segmentation effectiveness testing', 'QSA-ready evidence documentation'],
  },
  {
    icon: CheckCircle,
    title: 'Vulnerability Scanning (ASV)',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'PCI DSS Requirement 11 mandates quarterly external vulnerability scanning by an Approved Scanning Vendor (ASV) and internal vulnerability scanning. External ASV scanning must be conducted by a PCI SSC-approved scanning vendor and produce a clean scan report — meaning all vulnerabilities with a CVSS score of 4.0 or above must be remediated or disputed before the scan is considered passing. Infraspine coordinates ASV scanning for your external-facing CDE systems, manages the dispute process for false positives, and ensures your quarterly scan programme meets PCI DSS requirements. We also conduct and document internal vulnerability scanning of all CDE systems, providing a risk-rated findings report and tracking remediation through to re-scan confirmation. Scan reports are formatted for inclusion in your SAQ or ROC documentation.',
    points: ['PCI SSC-approved ASV scanning', 'Quarterly scan programme management', 'False positive dispute support', 'Internal scan and re-scan tracking'],
  },
  {
    icon: FileText,
    title: 'Penetration Testing for PCI',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'PCI DSS Requirement 11.4 mandates annual penetration testing of the CDE — both external and internal — and testing of network segmentation controls. PCI penetration testing has specific methodology requirements that differ from general VAPT engagements: the scope must cover the entire CDE perimeter, testing must follow an industry-accepted methodology such as OWASP or PTES, and the methodology, scope, and results must be documented in a format suitable for QSA review. Infraspine conducts PCI-compliant penetration testing engagements with full documentation of the testing methodology, scope definition, exploited vulnerabilities, and remediation recommendations. We also test segmentation controls to confirm that the CDE is isolated as claimed. All findings are reported in a PCI DSS-compliant format for direct inclusion in assessment documentation.',
    points: ['PCI-compliant methodology', 'External and internal CDE testing', 'Segmentation control testing', 'QSA-formatted test report'],
  },
  {
    icon: BarChart2,
    title: 'SAQ & ROC Completion Support',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'The Self-Assessment Questionnaire (SAQ) is the primary compliance validation tool for most organisations — there are eight different SAQ types depending on how your organisation processes card payments, and selecting the correct SAQ type is itself a compliance decision. The Report on Compliance (ROC) is required for Level 1 merchants and service providers and must be completed by a qualified QSA. Infraspine supports both SAQ and ROC completion processes. For SAQs, we identify the correct SAQ type, gather and organise evidence for each applicable requirement, and complete the SAQ with you — ensuring every response is accurately documented and supported by audit-ready evidence. For ROC engagements, we prepare your evidence pack and coordinate with your QSA, reducing assessment time and minimising the risk of findings that delay compliance sign-off.',
    points: ['Correct SAQ type selection', 'Evidence gathering and organisation', 'SAQ completion with your team', 'ROC preparation and QSA coordination'],
  },
]

const FAQS = [
  {
    question: 'What is PCI DSS?',
    answer: 'The Payment Card Industry Data Security Standard (PCI DSS) is a set of security requirements developed by the PCI Security Standards Council — founded by American Express, Discover, JCB, Mastercard, and Visa — to protect cardholder data. The current version is PCI DSS v4.0, published in 2022 with a mandatory adoption deadline of March 2025. The standard contains 12 requirement domains covering topics including network security, access control, vulnerability management, monitoring, and information security policy. Compliance is validated annually and is a contractual requirement imposed by payment card brands on any organisation that stores, processes, or transmits cardholder data.',
  },
  {
    question: 'Who needs to comply with PCI DSS?',
    answer: 'Any organisation that stores, processes, or transmits cardholder data (CHD) or sensitive authentication data (SAD) must comply with PCI DSS. This includes merchants of all sizes — from small e-commerce businesses to large retailers — as well as payment processors, acquirers, issuers, and service providers that handle cardholder data on behalf of merchants. The level of compliance validation required depends on the organisation\'s annual card transaction volume: Level 1 merchants process over six million transactions annually and must complete an annual Report on Compliance (ROC) conducted by a QSA; Levels 2 through 4 can typically use a Self-Assessment Questionnaire (SAQ). Even if you outsource payment processing to a third party, you may still have PCI DSS obligations depending on your involvement in the payment flow.',
  },
  {
    question: 'What is the difference between SAQ and ROC?',
    answer: 'A Self-Assessment Questionnaire (SAQ) is a compliance validation tool that organisations complete themselves — or with consulting support — to attest that they meet PCI DSS requirements. There are eight different SAQ types (SAQ A, SAQ A-EP, SAQ B, SAQ B-IP, SAQ C-VT, SAQ C, SAQ P2PE, and SAQ D) and the correct type depends on how your organisation accepts card payments and how much of the payment process you are directly involved in. A Report on Compliance (ROC) is a more rigorous assessment conducted by a qualified QSA (Qualified Security Assessor) and is required for Level 1 merchants and service providers. The ROC involves a formal audit by the QSA with on-site testing and evidence review, and results in a formal attestation of compliance signed by both the organisation and the QSA.',
  },
  {
    question: 'What is a Cardholder Data Environment?',
    answer: 'A Cardholder Data Environment (CDE) is the set of people, processes, and technologies that store, process, transmit, or could impact the security of cardholder data or sensitive authentication data. Defining the CDE accurately is critical to PCI DSS compliance because all systems within the CDE must comply with PCI DSS requirements. The CDE includes systems that directly store, process, or transmit card data; systems on the same network segment that could communicate with CDE systems; and security systems such as firewalls, intrusion detection systems, and authentication servers that protect or manage CDE systems. Effective network segmentation can significantly reduce the size of the CDE and therefore the cost and complexity of PCI DSS compliance — but the segmentation controls must be verified to be effective.',
  },
  {
    question: 'What happens if we fail a PCI DSS assessment?',
    answer: 'Failing a PCI DSS assessment — or more accurately, receiving a non-compliant finding — does not immediately result in fines or card acceptance being withdrawn. It means you have identified compliance gaps that need to be remediated. The assessor will document non-compliant requirements, and you will be required to produce a remediation plan and timeline. However, if you continue to process card payments without achieving compliance, and a data breach occurs, the consequences can be severe: card brand fines (which flow through your acquiring bank), the cost of a forensic investigation, mandatory card replacement costs for affected cardholders, and potential loss of the ability to accept card payments entirely. In practice, most organisations treat a non-compliant finding as a trigger to accelerate remediation rather than a reason to stop card acceptance.',
  },
]

const BREADCRUMB = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Cybersecurity', href: '/services/cyber-security' },
  { label: 'PCI-DSS Assessments', href: '/services/cyber-security/pci-dss' },
]

const ACCENT = '#16A34A'
const HERO_BG = '#001a08'
const STAT_BG = '#F0FDF4'
const STAT_BORDER = '#BBF7D0'

export default function PciDssPage() {
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
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-14 sm:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: ACCENT }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>Cybersecurity</span>
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white mb-6">
              PCI DSS Assessments<br />
              <span style={{ color: ACCENT }}>& Compliance Consulting.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              Infraspine delivers PCI DSS v4.0 readiness assessments, gap analysis, and hands-on compliance consulting for organisations that store, process, or transmit cardholder data. From CDE scoping and network segmentation reviews through to SAQ completion and ROC preparation, our team provides QSA-qualified guidance at every stage of the compliance journey.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-4 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[18px] font-black mb-1 leading-tight" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[10.5px] leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: ACCENT, color: '#fff' }}
              >
                Request a PCI DSS Assessment <ArrowRight size={14} />
              </Link>
              <Link
                href="/services/cyber-security"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold border transition-all hover:bg-white/10"
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
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT }}>PCI DSS Services</span>
              <div className="h-px w-6" style={{ background: ACCENT }} />
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six PCI DSS Compliance Capabilities
            </h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From initial gap analysis and CDE scoping through to penetration testing, ASV scanning, and SAQ completion — Infraspine covers the full PCI DSS compliance lifecycle.
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
        title="PCI DSS — Frequently Asked Questions"
        subtitle="Common questions from organisations beginning or renewing their PCI DSS compliance programme."
        faqs={FAQS}
        accent={ACCENT}
      />

      <CTABanner
        heading="Need to Achieve PCI DSS Compliance?"
        subheading="Book a free scoping call with Infraspine. We will define your CDE scope, identify the correct SAQ type, and give you a clear compliance roadmap — no commitment required."
        primaryLabel="Request a PCI DSS Assessment"
        primaryHref="/contact-us"
        secondaryLabel="Call Us Now"
        secondaryHref="tel:+923001234567"
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
