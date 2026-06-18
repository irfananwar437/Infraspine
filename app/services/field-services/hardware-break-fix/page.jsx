import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Server, Monitor, Network, Printer, Package, FileText,
  ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'Hardware Break Fix Services Pakistan | On-Site Repair | Infraspine',
  description: 'Rapid on-site diagnosis and repair of failed hardware across Pakistan. Servers, workstations, networking kit, printers, and peripherals with 4hr response SLA and 95% same-day fix rate.',
  alternates: { canonical: 'https://www.infraspine.com/services/field-services/hardware-break-fix' },
  openGraph: {
    title: 'Hardware Break Fix Services Pakistan | On-Site Repair | Infraspine',
    description: 'Rapid on-site diagnosis and repair of failed hardware across Pakistan with 4hr response SLA.',
    url: 'https://www.infraspine.com/services/field-services/hardware-break-fix',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Hardware Break Fix',
  name: 'Infraspine Hardware Break Fix Services Pakistan',
  description: 'Rapid on-site diagnosis and repair of failed hardware including servers, workstations, networking kit, printers, and peripherals across Pakistan.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/field-services/hardware-break-fix',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '4hr', label: 'Response SLA', color: '#EA580C' },
  { value: '95%', label: 'Same-Day Fix Rate', color: '#F97316' },
  { value: '500+', label: 'Hardware SKUs', color: '#7C3AED' },
  { value: '24/7', label: 'Call Logging', color: '#16A34A' },
]

const CAPABILITIES = [
  {
    icon: Server,
    title: 'Server Hardware Repair',
    color: '#EA580C',
    bg: '#FFF7ED',
    desc: 'Server hardware failures carry the highest operational impact of any IT fault — they take applications, databases, and shared services offline for every user who depends on them. Our field engineers are trained and certified on the major server platforms deployed in Pakistani data centres and server rooms, including Dell PowerEdge, HP ProLiant, Lenovo ThinkSystem, and Huawei FusionServer. We carry diagnostic tooling specific to each platform, allowing us to isolate failed components — whether a failed hard drive, faulty RAM module, dead power supply, or failed network interface card — quickly and accurately. Our spares inventory covers the most frequently failed components for the top server models, enabling same-day replacement in the majority of cases. Where a repair requires specialist skills or parts not available locally, we coordinate with the manufacturer\'s support channel and manage the case through to resolution on your behalf. All server repairs are documented with before-and-after diagnostic reports.',
    points: [
      'Certified repair for Dell PowerEdge, HP ProLiant, and Lenovo ThinkSystem',
      'Component-level diagnosis of drives, RAM, PSU, NIC, and RAID controllers',
      'Same-day parts availability for high-frequency failure components',
      'Manufacturer support coordination for complex cases and warranty repairs',
    ],
  },
  {
    icon: Monitor,
    title: 'Workstation & Desktop Repair',
    color: '#F97316',
    bg: '#FFF7ED',
    desc: 'End-user device failures create immediate productivity loss — a user with a dead workstation or a laptop that will not power on cannot do their job. Our break-fix service for workstations and desktops covers the full range of hardware faults: failed displays, dead motherboards, overheating processors, failed storage drives, broken keyboards and trackpads, damaged ports and connectors, and battery failures on laptops. Engineers carry standard replacement parts for the most common device models and fault types, resolving the majority of end-user device failures during the first visit. For devices requiring depot-level repair — such as motherboard replacements or physical damage restoration — we collect the device and issue a loan unit to keep the user productive. We support all major desktop and laptop manufacturers including Dell, HP, Lenovo, Asus, Acer, and Microsoft Surface devices.',
    points: [
      'On-site repair of desktops, laptops, and all-in-one workstations',
      'Component replacement for displays, storage, RAM, ports, and keyboards',
      'Loan device provision during depot-level repairs',
      'Support for Dell, HP, Lenovo, Asus, Acer, and Microsoft Surface',
    ],
  },
  {
    icon: Network,
    title: 'Network Device Replacement',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Failed network hardware — a dead switch, a malfunctioning router, or a failed firewall — can take entire offices or facilities offline in seconds. Network device failures require more than a replacement unit: the replacement must be correctly configured to match the failed device, or the network will not function even after the hardware is swapped. Our field engineers are trained in network device configuration for the major enterprise platforms, enabling them to replace a failed switch or router and restore the configuration from backup — or recreate it from documentation — so the replacement device functions identically to its predecessor. We maintain a spares pool of the most widely deployed network devices to enable rapid replacement without waiting for procurement. For firewall replacements, which carry higher configuration complexity, we coordinate with our network team to ensure configurations are restored accurately.',
    points: [
      'Emergency replacement of switches, routers, firewalls, and access points',
      'Configuration restoration from backup or documentation on replacement hardware',
      'Cisco, Juniper, Fortinet, HPE Aruba, and Ubiquiti device expertise',
      'Network connectivity restoration verified before site sign-off',
    ],
  },
  {
    icon: Printer,
    title: 'Printer & Peripheral Support',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Printers remain a persistent source of IT support demand across virtually every organisation in Pakistan, from government offices and financial institutions to manufacturing facilities and healthcare providers. Our printer support service covers the full spectrum of fault types including paper feed jams, fuser unit failures, drum and toner cartridge issues, network connectivity problems, print queue corruption, and driver conflicts. We support laser, inkjet, and industrial label printers from all major manufacturers including HP, Canon, Epson, Kyocera, Brother, and Zebra. Beyond printers, we support all categories of workplace peripherals: scanners, barcode readers, signature pads, POS terminals, external drives, and docking stations. Our engineers carry consumable spares and commonly required replacement parts, resolving the majority of printer faults during the first visit.',
    points: [
      'On-site repair for laser, inkjet, and industrial label printers',
      'Support for HP, Canon, Epson, Kyocera, Brother, and Zebra devices',
      'Peripheral support including scanners, barcode readers, and POS terminals',
      'Driver and network configuration support for shared print environments',
    ],
  },
  {
    icon: Package,
    title: 'Parts Logistics & Spares',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'The speed of hardware repair is directly constrained by parts availability. An engineer who arrives on-site and correctly diagnoses a failed component achieves nothing if the replacement part must be ordered and delivered from a warehouse days later. Infraspine operates regional spares hubs positioned close to client sites across Pakistan, pre-stocked with the most frequently required replacement components for the hardware platforms in our supported estate. Our spares inventory is managed through our service management platform, which tracks stock levels, consumption patterns, and component lead times to maintain optimal inventory levels. For client sites with critical uptime requirements, we offer dedicated on-site spares kits — a curated set of spare components stored at the client\'s premises and replenished after use, ensuring the most critical failure scenarios can be resolved without any parts logistics delay at all. All parts used in repairs are tracked against the relevant asset and service record.',
    points: [
      'Regional spares hubs positioned across Pakistan for rapid parts dispatch',
      'Pre-stocked inventory for high-frequency failure components',
      'On-site spares kits available for critical environment clients',
      'Full parts traceability linked to asset and service records',
    ],
  },
  {
    icon: FileText,
    title: 'Warranty & Contract Management',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'Managing hardware warranties and support contracts across a large IT estate is a significant administrative burden. Warranty expiry dates are spread across hundreds of assets, each with different terms, different support channels, and different response commitments. Missing a warranty renewal can leave critical equipment unprotected, while paying for support on equipment that is still under manufacturer warranty wastes budget. Our warranty and contract management service tracks every asset in your estate against its warranty and support contract status, providing advance notification of upcoming expiries and facilitating renewal. When a warranty repair is required, we manage the entire process: logging the case with the manufacturer, arranging collection or on-site repair, and tracking the case through to completion. We also act as the single point of contact for all hardware support contracts, consolidating what would otherwise be a complex web of vendor relationships into a single managed service.',
    points: [
      'Centralised tracking of warranty expiry dates across all estate assets',
      'Advance renewal notifications to prevent coverage gaps',
      'Manufacturer warranty case management on your behalf',
      'Contract consolidation providing a single support interface',
    ],
  },
]

const FAQS = [
  {
    question: 'What hardware do you repair on-site?',
    answer: 'We repair a comprehensive range of IT hardware on-site including servers (Dell PowerEdge, HP ProLiant, Lenovo ThinkSystem), workstations and desktops from all major manufacturers, laptops and notebooks, networking devices (switches, routers, firewalls, access points), printers (laser, inkjet, and industrial label), scanners, barcode readers, POS terminals, and general office peripherals. For hardware with high component complexity such as industrial workstations or specialist devices, we will advise on feasibility at the point of fault diagnosis. If a device cannot be repaired on-site, we arrange collection for depot repair and provide a loan unit to keep your user productive in the interim.',
  },
  {
    question: 'What is your break-fix response time?',
    answer: 'Our standard response SLA for hardware break-fix is four hours from the time a service request is logged and accepted through our service desk. This means an engineer will be on-site within four hours during standard business hours (Monday to Friday, 8am to 6pm). We offer enhanced SLA options including two-hour response for business-critical environments and same-day response for high-priority incidents. Our 24/7 emergency call-out service provides the same four-hour response outside standard business hours for clients on extended coverage contracts. Response SLA performance is tracked and reported monthly, and we have consistently maintained over 96% SLA compliance across our contracted client base.',
  },
  {
    question: 'Do you carry spare parts?',
    answer: 'Yes. We maintain regional spares hubs across Pakistan pre-stocked with the most frequently required replacement components for the hardware platforms in our supported estate. This includes hard drives, RAM modules, power supply units, network interface cards, laptop batteries, display units, keyboards, and network device components. Our parts inventory is managed dynamically based on consumption patterns and the installed base of our client estate. For clients with critical uptime requirements, we offer dedicated on-site spares kits — a curated set of spare components stored at your premises and replenished after use. This eliminates parts logistics delay entirely for the most common failure scenarios.',
  },
  {
    question: 'Is break-fix covered under a support contract?',
    answer: 'Break-fix can be consumed on a time-and-materials basis for ad hoc faults, or it can be included within a managed hardware support contract that provides fixed monthly pricing with defined SLAs and unlimited call-outs for covered devices. Managed support contracts are more cost-effective for organisations with a significant hardware estate, as they provide predictable IT support expenditure and typically include proactive maintenance visits to identify and address potential failures before they occur. Contract options include business-hours coverage and 24/7 coverage tiers. We will work with you to design the right contract structure based on your device inventory, criticality requirements, and budget.',
  },
  {
    question: 'What if a device cannot be repaired on-site?',
    answer: 'Where a device cannot be repaired on-site — due to component complexity, physical damage requiring specialist equipment, or the need for a manufacturer warranty repair — we collect the device and transfer it to our service depot or the relevant manufacturer repair facility. We provide a loan device of equivalent specification to keep the affected user productive throughout the repair period. We track the repair progress and communicate expected return dates, escalating if timelines extend beyond agreed parameters. Once the repaired device is returned, we redeploy it to the user and verify full functionality before closing the job. The entire process is managed through our service management platform, giving you visibility at every stage.',
  },
]

export default function HardwareBreakFixPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Field Services', href: '/services/field-services' },
        { label: 'Hardware Break Fix', href: '/services/field-services/hardware-break-fix' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#1c0800' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#EA580C,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: '#EA580C' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#EA580C' }}>Hardware Break Fix</span>
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white mb-6">
              On-Site Hardware Repair —{' '}
              <span style={{ color: '#EA580C' }}>Fixed Fast, First Time.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              Hardware failure brings operations to a halt. Infraspine\'s break-fix service dispatches certified engineers to your site within four hours, carrying the parts and tools needed to resolve 95% of faults the same day. Servers, workstations, network devices, printers, and peripherals — all covered under a single service relationship.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-4 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[24px] font-black mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[11px] font-semibold leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#EA580C', color: '#fff' }}>
                Log a Break-Fix Call <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Get a Support Contract
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
                <div className="h-px w-6" style={{ background: '#EA580C' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#EA580C' }}>The Case for Managed Break-Fix</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Every Hour of Hardware Downtime Has a Price Tag
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Hardware failure is not a question of if — it is a question of when. Hard drives fail. Power supplies blow. Network switches stop forwarding packets. When they do, the business impact accumulates by the hour: lost productivity, delayed transactions, frustrated customers, and in critical environments, direct revenue loss. The question is not whether to have a break-fix capability — it is whether your current capability is fast and reliable enough.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Many organisations rely on individual IT staff to handle hardware failures, which creates several problems. IT generalists often lack the diagnostic expertise to identify the failed component without extensive trial and error. They rarely have spare parts on hand, meaning the repair waits for procurement. And when the failure affects critical infrastructure like a server or a core switch, the pressure to resolve it quickly can lead to rushed decisions that make the situation worse.
              </p>
              <p className="text-[15px] leading-relaxed mb-6" style={{ color: '#64748B' }}>
                Infraspine\'s break-fix service replaces this ad hoc model with a professional, SLA-backed capability. Our engineers are specialists in hardware diagnosis and repair, backed by a spares inventory, a service management system, and an escalation path to senior technical expertise. You get faster resolution, better documentation, and the confidence of a contractual service commitment.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#EA580C', text: 'Four-hour on-site response SLA contractually committed' },
                  { color: '#F97316', text: '95% of hardware faults resolved on the same day' },
                  { color: '#7C3AED', text: 'Loan devices provided to maintain user productivity during repairs' },
                  { color: '#16A34A', text: 'Full repair documentation for every job completed' },
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

            <div className="rounded-2xl border p-8" style={{ background: '#FFF7ED', borderColor: '#FDBA74' }}>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>Break-Fix Service Summary</p>
              <div className="space-y-4">
                {[
                  { label: 'Response SLA', value: '4 hours on-site' },
                  { label: 'Same-Day Fix Rate', value: '95%' },
                  { label: 'Hardware SKUs Supported', value: '500+' },
                  { label: 'Call Logging', value: '24/7 service desk' },
                  { label: 'Loan Devices', value: 'Available on request' },
                  { label: 'Coverage', value: 'Nationwide Pakistan' },
                ].map(p => (
                  <div key={p.label} className="flex items-center justify-between py-2 border-b last:border-0 text-[13px]" style={{ borderColor: '#FDBA74' }}>
                    <div className="font-semibold" style={{ color: '#0A1628' }}>{p.label}</div>
                    <div className="font-bold" style={{ color: '#EA580C' }}>{p.value}</div>
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
              <div className="h-px w-6" style={{ background: '#EA580C' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#EA580C' }}>Break-Fix Capabilities</span>
              <div className="h-px w-6" style={{ background: '#EA580C' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Hardware Support Areas
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From critical server infrastructure through end-user devices to printers and peripherals, covered under a single support relationship.
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

      <FAQAccordion faqs={FAQS} accent="#EA580C"
        title="Hardware Break-Fix Questions Answered"
        subtitle="Common questions from organisations evaluating on-site hardware repair services." />

      <CTABanner
        heading="Hardware Failed? We\'ll Be On-Site in 4 Hours"
        subheading="Log your break-fix call now and have a certified Infraspine engineer on-site with parts in hand within four hours."
        primaryCTA={{ label: 'Log a Fault Now', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
