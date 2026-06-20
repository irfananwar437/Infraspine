import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Shield, Zap, Database, Server,
  RefreshCw, CheckCircle, ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'Disaster Recovery Services Pakistan | DR Planning & Testing | Infraspine',
  description: 'Infraspine Disaster Recovery: DR strategy, design, and annual testing aligned to ISO 22301. RTO under 4 hours, RPO under 1 hour. Protect your business from cyberattack, hardware failure, and human error.',
  alternates: { canonical: 'https://www.infraspine.com/services/disaster-recovery' },
  openGraph: {
    title: 'Disaster Recovery Services Pakistan | DR Planning & Testing | Infraspine',
    description: 'ISO 22301-aligned disaster recovery planning, implementation, and testing. RTO <4 hours, RPO <1 hour. Annual DR testing included for Pakistan businesses.',
    url: 'https://www.infraspine.com/services/disaster-recovery',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Disaster Recovery',
  name: 'Infraspine Disaster Recovery Services',
  description: 'Designing, implementing, and testing disaster recovery plans that restore systems within agreed RTO and RPO targets following any disruptive event. ISO 22301 aligned with annual DR testing included.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/disaster-recovery',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: 'RTO <4hr', label: 'Recovery Time Objective', color: '#DC2626' },
  { value: 'RPO <1hr', label: 'Recovery Point Objective', color: '#00C853' },
  { value: 'ISO 22301', label: 'Aligned Framework', color: '#2563EB' },
  { value: 'Annual', label: 'DR Testing Included', color: '#7C3AED' },
]

const CAPABILITIES = [
  {
    icon: Shield,
    title: 'DR Strategy & Design',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'An effective disaster recovery strategy begins with a thorough understanding of what your organisation cannot afford to lose and cannot afford to be without. Our DR consultants conduct a Business Impact Analysis that identifies every critical system, application, and data set, quantifies the financial and operational cost of downtime for each, and determines the maximum tolerable outage period. From this foundation, we design a DR strategy that specifies the recovery tier for each system — from near-real-time replication for mission-critical platforms to standard backup restore for less critical systems — and the infrastructure architecture required to achieve the agreed recovery targets. The result is a DR strategy document that is both technically rigorous and commercially justified, giving your board confidence that the investment in DR capability is proportionate to the risk it mitigates.',
    points: [
      'Business Impact Analysis identifying critical systems and maximum tolerable outage',
      'Recovery tier classification aligned to business criticality',
      'DR architecture design for on-premise, cloud, and hybrid environments',
      'DR strategy documentation and board-level risk presentation',
    ],
  },
  {
    icon: Zap,
    title: 'Recovery Point & Time Objectives',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'Recovery Time Objective (RTO) and Recovery Point Objective (RPO) are the two most important metrics in disaster recovery planning — and the two that most organisations have never formally defined. RTO defines the maximum acceptable time between a disruptive event and the restoration of a system to operational status. RPO defines the maximum acceptable data loss measured in time — how far back in time your data can be restored to without causing an unacceptable business impact. Without formally defined RTO and RPO targets, DR planning lacks the specificity needed to make appropriate infrastructure and investment decisions. We work with your business and IT leadership to agree RTO and RPO targets for every system in scope, document these in a formal Service Level Agreement, and design the DR architecture required to achieve them — ensuring you are not over-investing in unnecessary redundancy or under-investing where the business risk is greatest.',
    points: [
      'RTO and RPO definition for every critical system through structured business analysis',
      'DR Service Level Agreement documentation and sign-off process',
      'Architecture recommendations aligned to achieve agreed RTO and RPO targets',
      'Annual RTO/RPO review as business requirements evolve',
    ],
  },
  {
    icon: Database,
    title: 'Backup Infrastructure Design',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Backup is the foundation of any disaster recovery capability — but backup infrastructure that has not been properly designed and regularly tested is a false sense of security. Many organisations discover during a real incident that their backups are corrupted, incomplete, or impossible to restore within the timeframe required. Our backup infrastructure design service covers the full backup architecture: the selection of backup software and storage platforms, backup job design ensuring all critical data is captured within the RPO window, retention policy configuration, encryption at rest and in transit, and the monitoring and alerting required to detect backup failures before they leave you exposed. We design backup architectures that follow the 3-2-1 rule — three copies of data, on two different media types, with one copy offsite or in a geographically separate cloud region.',
    points: [
      '3-2-1 backup architecture design across on-premise and cloud storage',
      'Backup software selection and configuration for all workload types',
      'Backup encryption, access control, and immutability configuration',
      'Backup monitoring, alerting, and automated failure response',
    ],
  },
  {
    icon: Server,
    title: 'DR Site Configuration',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'A disaster recovery site is the secondary environment to which your critical systems fail over when your primary environment becomes unavailable. DR sites can take multiple forms depending on your RTO requirements and budget: a warm standby environment with regularly synchronised data that can be activated within hours, a hot standby with near-real-time replication that can be activated within minutes, or a cold standby environment that requires more manual build but at lower ongoing cost. Cloud platforms such as Microsoft Azure and Amazon Web Services have fundamentally changed DR site economics — it is now possible to maintain a cloud-based DR environment that scales on demand, with costs that reflect the pay-as-you-go consumption model rather than the capital cost of dedicated physical infrastructure.',
    points: [
      'Cold, warm, and hot standby DR site design and implementation',
      'Cloud-based DR site configuration in Azure, AWS, and hybrid models',
      'Data replication configuration achieving target RPO across all systems',
      'Network configuration ensuring transparent failover to DR site',
    ],
  },
  {
    icon: RefreshCw,
    title: 'DR Testing & Simulation',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'A disaster recovery plan that has never been tested is not a disaster recovery plan — it is a hypothesis. The only way to know whether your DR capability will work in a real incident is to test it under conditions that as closely as possible simulate a genuine failure. DR testing is also a regulatory and compliance requirement under frameworks including ISO 22301 and is increasingly required by cyber insurance underwriters as a condition of coverage. Our DR testing service designs and executes annual DR tests that exercise the full recovery procedure — activating the DR environment, restoring critical systems, verifying data integrity, confirming application functionality, and measuring actual RTO and RPO against the targets in the DR plan. Test results are documented in a formal test report with findings, issues identified, and a remediation plan for any gaps discovered.',
    points: [
      'Annual DR test planning, execution, and results documentation',
      'Tabletop exercises for leadership team DR awareness and decision-making',
      'Technical failover tests validating RTO and RPO against agreed targets',
      'DR test remediation planning and resolution tracking',
    ],
  },
  {
    icon: CheckCircle,
    title: 'Failover & Failback Procedures',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'When a disaster occurs, the speed and accuracy of the response depends entirely on the quality of the documented procedures available to the team executing the recovery. Unclear, incomplete, or outdated runbooks cause delays and errors at the worst possible time. Our DR engineers develop detailed failover and failback runbooks for every system and application in scope — step-by-step procedural guides written to a standard that allows a competent IT professional to execute the recovery even under stress, even if they were not involved in the original DR design. Failback procedures — the process of returning operations to the primary environment once it has been restored — are equally important and often overlooked; we document both directions of the recovery process.',
    points: [
      'Step-by-step failover runbooks for every critical system and application',
      'Failback procedures to return operations to primary environment post-recovery',
      'Communication plan for incident declaration, escalation, and stakeholder updates',
      'Annual runbook review and update to reflect infrastructure changes',
    ],
  },
]

const FAQS = [
  {
    question: 'What is disaster recovery?',
    answer: 'Disaster recovery (DR) is the set of policies, tools, and procedures that enable an organisation to restore its technology systems and data following a disruptive event. Disruptive events include cyberattacks such as ransomware, hardware failure, data centre outages, natural disasters, and human error. An effective DR capability means that when one of these events occurs, the organisation has a tested plan, a configured recovery environment, and the documented procedures to restore critical systems within the maximum tolerable downtime window. Without DR, an organisation facing a major incident may face days or weeks of outage, significant data loss, and the associated financial, reputational, and regulatory consequences.',
  },
  {
    question: 'What is the difference between disaster recovery and business continuity?',
    answer: 'Disaster recovery focuses specifically on the restoration of technology systems and data following a disruptive event — it is an IT function with clearly defined technical objectives (RTO and RPO) and procedures. Business Continuity Planning (BCP) is a broader discipline that addresses how the organisation continues to function during and after a disruption, covering not just IT but also people, premises, suppliers, and communications. DR is a component of a BCP, but a BCP also addresses questions such as where staff work if the office is inaccessible, how the business communicates with customers during an incident, and how supply chain disruptions are managed. We provide both DR and BCP services, and the two are typically developed together to ensure they are aligned.',
  },
  {
    question: 'What are RTO and RPO?',
    answer: 'RTO — Recovery Time Objective — is the maximum acceptable time between a system failure and the restoration of that system to operational status. If your RTO for your CRM system is four hours, that means the business can tolerate the CRM being unavailable for up to four hours before the financial and operational impact becomes unacceptable. RPO — Recovery Point Objective — is the maximum acceptable data loss measured in time. If your RPO for your financial database is one hour, that means you can accept losing up to one hour of transaction data in a worst-case recovery scenario. Defining RTO and RPO for each critical system is the first step in DR planning because they determine the technical architecture and investment required — achieving a one-hour RPO requires more frequent backup and potentially real-time replication, which costs more than a 24-hour RPO.',
  },
  {
    question: 'How often should we test our DR plan?',
    answer: 'Industry best practice and the ISO 22301 business continuity standard both recommend DR testing at least annually, with a full failover test — where you actually activate the DR environment and restore systems — rather than just a paper-based review. In practice, we recommend a minimum of one full technical failover test per year, supplemented by a tabletop exercise for the senior leadership team that walks through the decision-making process during a simulated incident. Organisations in regulated industries (financial services, healthcare) or those with active cyber insurance should test more frequently — many cyber insurers now require evidence of recent DR testing as a condition of policy renewal or as part of the incident response process following a ransomware claim.',
  },
  {
    question: 'Do you offer cloud-based disaster recovery?',
    answer: 'Yes. Cloud-based DR is now the most cost-effective and scalable approach for the majority of organisations. Rather than maintaining a dedicated secondary physical data centre — which requires capital investment, floor space, and ongoing maintenance — cloud DR uses platforms such as Microsoft Azure Site Recovery, AWS Elastic Disaster Recovery, or Zerto to replicate your workloads to cloud infrastructure that only incurs significant cost when activated during a failover. In normal operation, the cost is primarily the replication bandwidth and minimal standby storage. We design and implement cloud DR solutions for on-premise environments, hybrid environments, and multi-cloud architectures, choosing the platform and replication approach that best matches your existing infrastructure, technical capabilities, and recovery objectives.',
  },
]

export default function DisasterRecoveryPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Disaster Recovery', href: '/services/disaster-recovery' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#1a0000' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#DC2626,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#DC2626' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#DC2626' }}>Disaster Recovery</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Disaster Recovery —{' '}
              <span style={{ color: '#DC2626' }}>Back Online in Hours, Not Days.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Ransomware, hardware failure, human error, and natural disasters do not announce their arrival. When they strike, the difference between recovering in four hours and recovering in four days is whether you had a tested disaster recovery plan in place before the incident. Infraspine designs, implements, and tests DR strategies that restore your critical systems within agreed RTO and RPO targets — aligned to ISO 22301 and including annual DR testing as standard in every engagement.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-3 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[22px] font-black mb-1 leading-tight" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[11px] font-semibold leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#DC2626', color: '#fff' }}>
                Get a DR Assessment <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Discuss Your RTO & RPO
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
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#DC2626' }}>The Cost of No DR Plan</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                60% of Small Businesses That Suffer Major Data Loss Close Within 6 Months
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The consequences of a major IT outage without a disaster recovery plan are severe. Every hour of downtime costs a business through lost sales, idle staff, customer attrition, and regulatory exposure. For businesses that process payments, operate e-commerce, or rely on real-time systems, the financial impact of a 24-hour outage can reach tens or hundreds of thousands of pounds. For businesses subject to GDPR or PCI-DSS, an outage that results in data loss triggers mandatory regulatory reporting and potential fines.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Ransomware has made DR planning more urgent than ever. Ransomware attacks encrypt your data and demand payment for the decryption key — but paying the ransom does not guarantee recovery, and even when the key is provided, manual decryption of large data volumes can take days. The only reliable defence against ransomware is a tested DR capability with air-gapped or immutable backups that cannot themselves be encrypted, and a recovery process that has been proven to work within your required RTO.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Infraspine\'s DR service is not a document exercise — we design, configure, and test real recovery capability. Every engagement includes annual DR testing to prove that the plan works in practice and to identify gaps before they are discovered during a real incident.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#DC2626', text: 'RTO under 4 hours for critical systems — tested annually' },
                  { color: '#2563EB', text: 'ISO 22301 aligned — satisfies regulatory and cyber insurance requirements' },
                  { color: '#00C853', text: 'Immutable backups that ransomware cannot encrypt or delete' },
                  { color: '#7C3AED', text: 'Cloud DR options available — no dedicated secondary site required' },
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
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>With DR vs Without DR</p>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2 text-[10px] font-bold uppercase tracking-wider pb-1 border-b" style={{ color: '#94A3B8', borderColor: '#E2E8F0' }}>
                  <div></div><div>Without DR Plan</div><div>With Infraspine DR</div>
                </div>
                {[
                  { label: 'Ransomware Recovery', withoutDR: 'Days to weeks', withDR: 'Hours (tested plan)', color: '#00C853' },
                  { label: 'Data Loss Risk', withoutDR: 'Last backup (days)', withDR: 'RPO <1 hour', color: '#00C853' },
                  { label: 'Regulatory Exposure', withoutDR: 'High (GDPR/PCI)', withDR: 'Mitigated', color: '#00C853' },
                  { label: 'Cyber Insurance', withoutDR: 'Difficult to obtain', withDR: 'Demonstrates controls', color: '#00C853' },
                  { label: 'Staff Downtime', withoutDR: 'Full organisation', withDR: 'Minimal disruption', color: '#00C853' },
                  { label: 'Revenue Impact', withoutDR: 'Severe', withDR: 'Contained', color: '#00C853' },
                ].map(p => (
                  <div key={p.label} className="grid grid-cols-3 gap-2 py-2 border-b last:border-0 text-[12px]" style={{ borderColor: '#E2E8F0' }}>
                    <div className="font-semibold" style={{ color: '#0A1628' }}>{p.label}</div>
                    <div style={{ color: '#DC2626' }}>{p.withoutDR}</div>
                    <div className="font-semibold" style={{ color: '#00C853' }}>{p.withDR}</div>
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
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#DC2626' }}>DR Service Capabilities</span>
              <div className="h-px w-6" style={{ background: '#DC2626' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Core Disaster Recovery Service Areas
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From DR strategy design and RTO/RPO definition through backup infrastructure, DR site configuration, annual testing, and failover procedures.
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

      <FAQAccordion faqs={FAQS} accent="#DC2626"
        title="Disaster Recovery Questions Answered"
        subtitle="Common questions from organisations planning their disaster recovery capability." />

      <CTABanner
        heading="Do Not Wait for an Incident to Test Your DR Plan"
        subheading="Get a DR assessment today. We will identify your recovery gaps and design a tested capability that protects your business before disaster strikes."
        primaryCTA={{ label: 'Get a DR Assessment', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
