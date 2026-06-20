import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Database, Package, Clock, ShoppingCart, FileText,
  Trash2, ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'IT Asset Management Services Pakistan — Hardware & Software ITAM | Infraspine',
  description: 'Infraspine IT Asset Management: complete hardware and software ITAM for businesses in Pakistan. 100% asset visibility, 30% average IT cost reduction, real-time inventory and full audit trail.',
  alternates: { canonical: 'https://www.infraspine.com/services/managed-it-services/it-asset-management' },
  openGraph: {
    title: 'IT Asset Management Services Pakistan — Hardware & Software ITAM | Infraspine',
    description: 'Full ITAM service covering hardware discovery, software licence management, lifecycle planning and ITAD. 100% asset visibility and 30% average IT cost reduction.',
    url: 'https://www.infraspine.com/services/managed-it-services/it-asset-management',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'IT Asset Management',
  name: 'Infraspine IT Asset Management',
  description: 'Comprehensive ITAM covering hardware discovery, software licence management, asset lifecycle planning, procurement support, and certified IT asset disposal.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/managed-it-services/it-asset-management',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '100%', label: 'Asset Visibility', color: '#D97706' },
  { value: '30%', label: 'Avg IT Cost Reduction', color: '#00C853' },
  { value: 'Real-time', label: 'Inventory Updates', color: '#2563EB' },
  { value: 'Full', label: 'Audit Trail', color: '#7C3AED' },
]

const CAPABILITIES = [
  {
    icon: Database,
    title: 'Hardware Asset Discovery & Inventory',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'You cannot manage what you cannot see. Our asset discovery process uses agent-based scanning and network discovery tools to automatically identify every physical and virtual asset in your environment — workstations, laptops, servers, switches, routers, firewalls, printers, mobile devices, and IoT endpoints. The resulting asset register is continuously updated, capturing hardware specifications, serial numbers, warranty expiry dates, physical location, assigned user, and maintenance history in a single live inventory.',
    points: [
      'Automated network discovery of all connected hardware',
      'Agent-based hardware specs collection (CPU, RAM, disk, serial)',
      'Warranty and support contract expiry tracking per device',
      'Physical location and user assignment tracking',
    ],
  },
  {
    icon: Package,
    title: 'Software Licence Management',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Software licence overspending and under-compliance are both expensive — one wastes budget, the other creates legal and audit risk. Our software licence management service discovers every application installed across your estate, maps installations against licence entitlements, flags over-deployment (more installs than licences) and under-utilisation (licences paid for but barely used), and provides actionable recommendations to right-size your licence portfolio at every renewal cycle.',
    points: [
      'Automated software inventory across all managed endpoints',
      'Licence entitlement vs installation compliance reporting',
      'Unused and under-utilised licence identification',
      'Renewal calendar with cost optimisation recommendations',
    ],
  },
  {
    icon: Clock,
    title: 'Asset Lifecycle Management',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Every IT asset has a lifecycle: procurement, deployment, active service, end-of-life, and disposal. Without lifecycle management, organisations end up with assets running past their warranty, missing planned replacements, and no budget visibility for upcoming refresh cycles. Our ITAM service tracks every asset through its entire lifecycle, flags devices approaching end-of-life 6–12 months in advance, and feeds this data into annual IT budget planning so capital expenditure is never a surprise.',
    points: [
      'End-of-life flagging 6–12 months before warranty or support expiry',
      'Device refresh scheduling integrated into IT budget planning',
      'Manufacturer end-of-support date tracking for all hardware',
      'Full asset history from procurement to disposal documented',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'Procurement & Vendor Management',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'Asset management is only valuable if procurement decisions are informed by accurate data. Our procurement support service connects asset lifecycle intelligence directly to the buying process — we know what you have, when it is expiring, and what the right replacement specification is. We prepare technical specifications for tenders, evaluate vendor quotes against established benchmarks, and manage vendor relationships to ensure you receive consistent pricing and service quality on every purchase.',
    points: [
      'Technical specification writing for hardware tenders',
      'Vendor quote evaluation against market benchmarks',
      'Consolidated vendor relationships for better pricing',
      'Purchase order tracking and delivery confirmation',
    ],
  },
  {
    icon: FileText,
    title: 'Compliance & Audit Reporting',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Regulatory frameworks including ISO 27001, PCI-DSS, and many industry-specific standards require organisations to maintain an accurate and current IT asset register. Our compliance reporting service provides the evidence auditors need — a complete asset inventory with classification, ownership, location, and security status for each item. Asset registers are exported in formats compatible with common audit workflows, and can be configured to highlight assets that fall outside security baseline requirements.',
    points: [
      'Complete asset register in audit-ready format',
      'Asset classification and security status labelling',
      'ISO 27001 and PCI-DSS asset control evidence packages',
      'Scheduled automated asset reports delivered to stakeholders',
    ],
  },
  {
    icon: Trash2,
    title: 'IT Asset Disposal (ITAD)',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Disposing of IT assets incorrectly creates two problems: data security risk from improperly wiped storage media, and environmental and legal liability from non-compliant electronics disposal. Our ITAD process covers certified data destruction (DoD 5220.22-M and NIST 800-88 wipe standards), physical destruction certification for drives that cannot be wiped, and environmentally compliant disposal through certified e-waste partners. You receive a certificate of destruction for every disposed asset maintaining your audit trail through the full lifecycle.',
    points: [
      'DoD 5220.22-M and NIST 800-88 certified data wiping',
      'Physical drive shredding with certificate of destruction',
      'Environmentally compliant e-waste disposal partners',
      'Full asset disposal records maintaining lifecycle audit trail',
    ],
  },
]

const VENDORS = [
  'ServiceNow ITAM', 'Lansweeper', 'ManageEngine AssetExplorer',
  'Snipe-IT', 'Flexera', 'Snow Software',
  'Ivanti ITAM', 'Freshservice', 'Jira Service Management',
]

const FAQS = [
  {
    question: 'What is IT Asset Management and why does my business need it?',
    answer: 'IT Asset Management (ITAM) is the systematic process of tracking, managing, and optimising every piece of hardware and software your organisation owns or licenses. You need it because without it, IT costs spiral through licence overspending, missed warranty renewals, security risks from untracked devices, and reactive procurement decisions. Businesses that implement ITAM consistently find 20–30% cost savings in their IT budget within the first year simply by eliminating duplicate licences, unused subscriptions, and unplanned emergency hardware purchases.',
  },
  {
    question: 'How do you discover assets we might not know about?',
    answer: 'Shadow IT — devices and software connected to your network without IT&apos;s knowledge — is more common than most organisations realise. Our discovery process uses both agent-based collection (installing a lightweight agent on known managed devices) and agentless network scanning (scanning IP ranges to discover all connected devices). This combination catches everything from unauthorised personal laptops connected to the office Wi-Fi to cloud subscriptions being bought on personal credit cards. The first ITAM audit typically reveals 15–25% more assets than the organisation knew about.',
  },
  {
    question: 'Can you manage software licences across Microsoft, Adobe, and cloud subscriptions?',
    answer: 'Yes. Our software licence management covers perpetual licences (Microsoft Office, Adobe Creative Cloud, AutoCAD), subscription-based SaaS (Microsoft 365, Salesforce, Zoom), and volume licensing agreements (Microsoft EA, Google Workspace). We connect to vendor licence management portals and reconcile entitlements against actual installations or active user counts. For Microsoft 365, we can identify licences assigned to inactive users or ex-employees that should be reclaimed, which alone often saves significant budget.',
  },
  {
    question: 'How does ITAM help with cybersecurity?',
    answer: 'Asset management and security are tightly linked. You cannot patch what you do not know exists. Untracked devices are typically unpatched devices, and unpatched devices are the primary entry point for ransomware and other attacks. Our ITAM service feeds directly into patch management by ensuring the patch management platform knows about every device. It also supports vulnerability management by providing an accurate hardware and software inventory against which vulnerability scans can be run. An accurate asset register is also a prerequisite for effective incident response — knowing what you have is the first step to containing a breach.',
  },
  {
    question: 'What does the initial ITAM discovery process involve?',
    answer: 'The initial discovery phase typically runs over 5–10 business days. We deploy our discovery agents to known managed devices, run network scans across all IP ranges you own, pull software inventory from existing tools where available, collect hardware documentation from procurement records, and interview IT staff about known infrastructure components. The output is a first-pass asset register that we then clean, classify, and validate against your existing documentation. By the end of discovery, you have a complete, accurate baseline inventory for the first time.',
  },
  {
    question: 'What is included in the certified data destruction service?',
    answer: 'Our ITAD service includes collection of assets to be disposed of (or we can work with assets you deliver to our authorised partner), data destruction using DoD 5220.22-M compliant wiping software for functional drives, physical shredding for drives that cannot be wiped or that require higher assurance, and a detailed certificate of destruction for every asset processed. The certificate includes the asset serial number, destruction method used, date of destruction, and technician signature. These records are provided to you for retention in your audit trail.',
  },
]

export default function ITAssetManagementPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Managed IT Services', href: '/services/managed-it-services' },
        { label: 'IT Asset Management' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#D97706,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#D97706' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#D97706' }}>IT Asset Management</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              IT Asset Management —{' '}
              <span style={{ color: '#D97706' }}>Know Every Device, Control Every Cost.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Shadow IT, licence sprawl, unexpected hardware failures, and surprise renewal invoices are all symptoms of the same underlying problem: you do not have a complete, accurate picture of your IT estate. Infraspine&apos;s IT Asset Management service gives you 100% visibility into every device and licence in your organisation — then puts that data to work reducing costs, improving security, and eliminating procurement surprises.
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
                style={{ background: '#D97706', color: '#fff' }}>
                Get Full Asset Visibility <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Request a Discovery Audit
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
                <div className="h-px w-6" style={{ background: '#D97706' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#D97706' }}>The Business Case</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                What Businesses Lose Without ITAM
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The Gartner estimate that organisations waste 30% of their software licence spending on unused or duplicated licences is widely cited — and in our experience of ITAM audits across Pakistani businesses, the reality is often worse. We routinely find Microsoft 365 licences assigned to staff who left the company two years ago, Adobe Creative Cloud subscriptions running on machines where the applications have never been opened, and antivirus licences covering 150 seats when only 90 devices exist.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Beyond licence waste, untracked hardware creates serious security risk. Every unmanaged device on your network is a device that is not being patched, not being monitored, and not subject to your security policies. These shadow IT assets are frequently the initial access point in breaches — attackers know that unmanaged devices are soft targets. An accurate, continuously updated asset register is the foundation of both cost control and security posture.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Compliance requirements add another dimension. ISO 27001 Clause A.8.1 explicitly requires an asset inventory. PCI-DSS Requirement 2.4 mandates a hardware and software inventory. The SECP&apos;s technology risk guidelines for financial institutions require asset registers as a baseline control. Failing to maintain these records is not just an operational gap — it is a compliance failure with potential regulatory consequences.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#D97706', text: 'Average 30% reduction in IT spend from licence right-sizing' },
                  { color: '#DC2626', text: 'Untracked devices eliminated — zero security blind spots' },
                  { color: '#7C3AED', text: 'Compliance evidence for ISO 27001, PCI-DSS, and SECP guidelines' },
                  { color: '#00C853', text: 'Planned hardware refresh — no more emergency replacements' },
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
                What a Typical ITAM Audit Uncovers
              </p>
              <div className="space-y-4">
                {[
                  { finding: '15–25% more assets than IT knew about', color: '#DC2626', icon: '!' },
                  { finding: 'Licences assigned to departed employees', color: '#D97706', icon: '$' },
                  { finding: 'Software installed but never opened', color: '#D97706', icon: '$' },
                  { finding: 'Unmanaged devices missing security patches', color: '#DC2626', icon: '!' },
                  { finding: 'Warranty-expired servers in production use', color: '#D97706', icon: '!' },
                  { finding: 'Duplicate tools doing the same job', color: '#D97706', icon: '$' },
                  { finding: 'Cloud subscriptions bought outside IT', color: '#DC2626', icon: '!' },
                  { finding: 'No certified disposal for retired assets', color: '#DC2626', icon: '!' },
                ].map(({ finding, color, icon }) => (
                  <div key={finding} className="flex items-center gap-3 py-2 border-b last:border-0" style={{ borderColor: '#E2E8F0' }}>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-[11px] font-black" style={{ background: `${color}15`, color }}>{icon}</div>
                    <span className="text-[13px]" style={{ color: '#374151' }}>{finding}</span>
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
              <div className="h-px w-6" style={{ background: '#D97706' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#D97706' }}>ITAM Capabilities</span>
              <div className="h-px w-6" style={{ background: '#D97706' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Full-Lifecycle IT Asset Management
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From initial discovery through active management to certified disposal — every stage of the asset lifecycle covered.
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
            ITAM Platforms We Work With
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

      <FAQAccordion faqs={FAQS} accent="#D97706"
        title="IT Asset Management Questions Answered"
        subtitle="Common questions from businesses starting their ITAM journey." />

      <CTABanner
        heading="Get Full Visibility of Your IT Assets"
        subheading="Find out exactly what you own, what you are paying for, and where you can save. Start with a free ITAM discovery audit."
        primaryCTA={{ label: 'Request a Discovery Audit', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
