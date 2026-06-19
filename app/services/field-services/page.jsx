import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Globe, Wrench, Zap, Search, Settings, BarChart2,
  ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'Global Field Services Pakistan | On-Site IT Support | Infraspine',
  description: 'Nationwide on-site IT deployment, break-fix, migrations, and support across Pakistan. 500+ sites served, 4hr response SLA, 50+ engineers nationwide.',
  alternates: { canonical: 'https://www.infraspine.com/services/field-services' },
  openGraph: {
    title: 'Global Field Services Pakistan | On-Site IT Support | Infraspine',
    description: 'Nationwide on-site IT deployment, break-fix, migrations, and support across Pakistan.',
    url: 'https://www.infraspine.com/services/field-services',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Global Field Services',
  name: 'Infraspine Global Field Services Pakistan',
  description: 'Nationwide on-site IT deployment, break-fix, migrations, and support across Pakistan with 500+ sites served and 4-hour response SLA.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/field-services',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '500+', label: 'Sites Served', color: '#F97316' },
  { value: '4hr', label: 'Response SLA', color: '#EA580C' },
  { value: '50+', label: 'Engineers Nationwide', color: '#7C3AED' },
  { value: '98%', label: 'First-Visit Fix Rate', color: '#16A34A' },
]

const CAPABILITIES = [
  {
    icon: Globe,
    title: 'National Coverage & Dispatch',
    color: '#F97316',
    bg: '#FFF7ED',
    desc: 'Infraspine maintains a network of field engineers deployed across Pakistan\'s major cities and industrial corridors, including Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, and Quetta. Our centralised dispatch system routes service requests to the nearest available engineer, minimising travel time and ensuring our four-hour response SLA is met consistently. Each engineer is GPS-tracked and connected to our service desk via mobile tooling, enabling real-time job updates and instant escalation when additional expertise is required. Whether you operate a single site or a distributed estate spanning dozens of branches, our national presence ensures that every location receives the same standard of on-site service. We maintain regional spares hubs so that commonly required hardware components are pre-positioned close to client sites, avoiding the delays associated with central warehousing. Our dispatch team operates during extended business hours with emergency call-out capability outside standard windows for critical infrastructure environments.',
    points: [
      'Engineer network covering all major Pakistani cities and regions',
      'Centralised GPS-tracked dispatch with real-time job status',
      'Four-hour on-site response SLA as standard',
      'Regional spares hubs for rapid parts availability',
    ],
  },
  {
    icon: Wrench,
    title: 'Break-Fix & Hardware Repair',
    color: '#EA580C',
    bg: '#FFF7ED',
    desc: 'Hardware failure is an unavoidable reality of running an IT estate, and the speed with which faults are resolved directly determines how long your users and operations are impacted. Our break-fix service covers the full spectrum of end-user and infrastructure hardware: servers, workstations, laptops, networking devices, printers, scanners, and peripherals. Engineers arrive on-site with a comprehensive toolkit and access to our parts inventory system, allowing them to diagnose and repair the majority of faults during the first visit without waiting for parts to be ordered. For complex failures requiring specialist components or depot-level repair, we provide loan equipment to keep affected users productive while the primary device is off-site. All completed repairs are documented in our service management platform, creating a full asset history that informs future maintenance planning and supports warranty claims. Our 98% first-visit fix rate reflects the combination of experienced engineers, well-stocked spares inventory, and a structured diagnostic methodology.',
    points: [
      'On-site repair covering servers, workstations, networking, and peripherals',
      'Same-day parts availability from regional spares hubs',
      'Loan device provision for extended repairs',
      'Full repair documentation linked to asset history records',
    ],
  },
  {
    icon: Zap,
    title: 'Technology Rollouts',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Deploying new technology across an organisation is a logistically complex undertaking that carries significant risk if not executed with precision. Our technology rollout service manages the complete lifecycle from device imaging and configuration through physical installation to user handover and post-deployment verification. We work from a detailed rollout plan agreed with your project team, specifying the sequence of deployments, the standard configuration applied to each device type, the data migration approach for refreshed devices, and the acceptance criteria that must be met before each site is signed off. Our engineers are trained in imaging and configuration methodologies that ensure every device arrives at the user\'s desk in an identical, fully configured state. For large-scale rollouts spanning multiple sites, we deploy coordinated teams who work to a master schedule, providing daily progress reports against the agreed plan. Our zero data loss record across all technology migrations reflects the rigour of our data backup and verification processes before any existing device is decommissioned.',
    points: [
      'End-to-end rollout management from imaging through user handover',
      'Coordinated multi-site deployment teams with daily progress reporting',
      'Standard configuration templates ensuring consistent device builds',
      'Zero data loss methodology with verified backup before decommission',
    ],
  },
  {
    icon: Search,
    title: 'Site Surveys & Assessments',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Accurate site intelligence is the foundation of every successful IT project. Whether you are planning a network infrastructure upgrade, a technology rollout, an office relocation, or a new wireless deployment, a professional site survey provides the information needed to produce accurate scoping, realistic timelines, and reliable cost estimates. Our site survey engineers capture a detailed inventory of the physical environment: cabling infrastructure, power availability, rack space, floor plan dimensions, interference sources for wireless surveys, and the condition of existing equipment. Survey findings are documented in a structured report with photographs, schematic drawings, and specific recommendations. We also conduct technical assessments of existing IT infrastructure to identify capacity constraints, security vulnerabilities, end-of-life equipment, and configuration issues that represent risk to the planned project. Assessment outputs feed directly into project scoping documents and statements of work.',
    points: [
      'Physical environment surveys covering cabling, power, and rack capacity',
      'Wireless site surveys for access point placement planning',
      'Infrastructure assessments identifying risks and constraints',
      'Structured survey reports with photographs and schematics',
    ],
  },
  {
    icon: Settings,
    title: 'Multi-Vendor Support',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Most enterprise IT environments contain hardware and software from multiple vendors accumulated over years of procurement cycles. Managing support relationships with each vendor individually — tracking warranty expiry dates, navigating different support portals, and coordinating between vendors when fault isolation requires it — is a significant operational burden. Our multi-vendor support capability consolidates this complexity behind a single service desk. We maintain technical expertise across the major hardware and software vendors deployed in Pakistani enterprises: Dell, HP, Lenovo, Cisco, Juniper, HPE, Fortinet, Ubiquiti, and others. When a fault occurs, our engineers diagnose across the full stack regardless of vendor, isolating the root cause before engaging vendor support channels where replacement parts or firmware fixes are required. This single point of accountability eliminates the blame-shifting between vendors that leaves problems unresolved and eliminates the need for your team to manage multiple vendor relationships.',
    points: [
      'Single point of contact for hardware support across all vendors',
      'Technical expertise covering Dell, HP, Cisco, Juniper, Fortinet, and more',
      'Vendor liaison and case management on your behalf',
      'Cross-vendor fault isolation to identify root cause before escalation',
    ],
  },
  {
    icon: BarChart2,
    title: 'Project Coordination',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'Successful field service delivery at scale requires more than technical expertise — it requires disciplined project management that keeps complex, multi-site engagements on time and on budget. Our project coordination function provides a dedicated project manager for engagements above a defined complexity threshold, supported by our service management platform which tracks every task, dependency, and milestone across the programme. We use structured project methodologies adapted from PRINCE2 and PMBoK principles, producing project initiation documents, risk registers, communication plans, and regular status reports that give your stakeholders full visibility into progress. Where field services integrate with third-party activities — network provisioning by an ISP, building works by a facilities team, or software deployment by an application vendor — our project manager owns the coordination interface, ensuring dependencies are tracked and delays are surfaced early. Post-project, we conduct a lessons learned review and produce a handover pack that transfers all relevant documentation to your operations team.',
    points: [
      'Dedicated project manager for complex multi-site engagements',
      'Structured project methodology with milestone tracking and risk management',
      'Third-party coordination across ISPs, facilities, and application vendors',
      'Post-project handover documentation and lessons learned review',
    ],
  },
]

const FAQS = [
  {
    question: 'What is covered under Global Field Services?',
    answer: 'Global Field Services covers all aspects of on-site IT support and deployment including hardware break-fix repair, technology rollouts and device deployments, desktop and end-user support, network device installation and troubleshooting, audio-visual system maintenance, wireless network deployment, and site surveys. Our field engineers are generalist IT professionals with additional specialisations, meaning a single engineer can resolve the majority of on-site issues without requiring a second visit by a specialist. Where specialist skills are required — for example, complex network configuration or structured cabling — we dispatch the appropriate specialist from our nationwide engineer pool.',
  },
  {
    question: 'What are your response time SLAs?',
    answer: 'Our standard on-site response SLA is four hours from the time a service request is logged and accepted, during business hours Monday to Friday. We offer enhanced SLA tiers for business-critical environments including two-hour response and same-day response options. For 24/7 coverage, we offer an emergency call-out service with a four-hour response at any time of day or night including weekends and public holidays. Response SLAs are contractually committed and tracked in our service management platform, with automatic escalation if the response timer approaches breach. Monthly SLA performance reports are provided to all contracted clients.',
  },
  {
    question: 'Which cities do you cover in Pakistan?',
    answer: 'We provide on-site field services across Pakistan\'s major urban and industrial centres. Our primary coverage cities include Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Quetta, Sialkot, Gujranwala, Hyderabad, and Abbottabad. For locations outside our primary coverage areas, we dispatch engineers from the nearest hub city, which may affect response times. We regularly review our coverage map and expand based on client demand — if you have sites in locations not listed, please contact us to discuss coverage options. For remote or offshore installations, we can arrange travel-based field support with advanced scheduling.',
  },
  {
    question: 'Can you support multi-vendor hardware?',
    answer: 'Yes. Our field engineers are trained and certified across the major hardware vendors deployed in Pakistani enterprise environments. This includes server platforms from Dell, HP, and Lenovo; networking equipment from Cisco, Juniper, HPE Aruba, and Fortinet; storage systems from NetApp, Dell EMC, and HPE; workstations and laptops from all major manufacturers; and specialist equipment including industrial workstations and ruggedised devices. We maintain vendor authorisation agreements with key manufacturers that allow our engineers to perform warranty repairs and replacements without voiding device warranties. For exotic or specialist hardware outside our standard competency, we will advise you directly and, where appropriate, arrange for a vendor field engineer to attend with our coordination support.',
  },
  {
    question: 'Do you offer 24/7 field support?',
    answer: 'Yes, we offer 24/7 field support under our extended coverage contracts. Standard field services operate during business hours (8am to 6pm, Monday to Friday) with four-hour response SLAs. Our 24/7 option extends this coverage to include nights, weekends, and public holidays, with the same four-hour on-site response commitment. Emergency call-out is activated through our 24/7 service desk, which triages the request, confirms the urgency and scope, and dispatches the nearest available engineer. A 24/7 coverage premium applies, and this option is most commonly taken by clients operating critical infrastructure, financial services environments, or manufacturing facilities where IT downtime carries significant operational cost.',
  },
]

export default function FieldServicesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Global Field Services', href: '/services/field-services' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#1a0a00' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#F97316,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#F97316' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#F97316' }}>Global Field Services</span>
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              On-Site IT Support —{' '}
              <span style={{ color: '#F97316' }}>Nationwide Field Services.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Infraspine deploys experienced field engineers across Pakistan to handle break-fix repairs, technology rollouts, desktop support, and infrastructure projects. With a four-hour response SLA, 50+ engineers nationwide, and a 98% first-visit fix rate, we keep your IT estate running regardless of location.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-3 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[20px] font-black mb-0.5" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[11px] font-semibold leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#F97316', color: '#fff' }}>
                Request a Field Engineer <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Get a Site Survey
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
                <div className="h-px w-6" style={{ background: '#F97316' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#F97316' }}>Why Field Services Matter</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                On-Site Expertise When Remote Support Cannot Solve It
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Remote support resolves a significant proportion of day-to-day IT issues, but there are entire categories of problems that can only be addressed by a trained engineer physically on-site. Hardware failures cannot be fixed remotely. Network cabling faults require someone with a cable tester in hand. Technology rollouts require engineers to physically unbox, configure, and install devices at user desks. Wireless surveys require someone walking the floor with survey equipment.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                For organisations operating across multiple Pakistani cities, maintaining a permanent bench of field engineers at every location is prohibitively expensive. Staff hired for IT support at branch offices are often generalists who lack the specialist skills for complex infrastructure work, and they sit idle between incidents — an expensive model for problems that occur infrequently.
              </p>
              <p className="text-[15px] leading-relaxed mb-6" style={{ color: '#64748B' }}>
                Infraspine\'s field services model provides access to a pool of experienced, specialist engineers on demand. You pay for the work, not the headcount. Our engineers arrive equipped and prepared, backed by a service desk, a spares inventory, and an escalation path — delivering outcomes that an individual site technician simply cannot match.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#F97316', text: 'On-demand field engineers without permanent headcount cost' },
                  { color: '#EA580C', text: '98% first-visit fix rate across all break-fix engagements' },
                  { color: '#7C3AED', text: 'Specialist skills for networking, AV, wireless, and rollouts' },
                  { color: '#16A34A', text: 'Single supplier for all on-site IT work across Pakistan' },
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

            <div className="rounded-2xl border p-8" style={{ background: '#FFF7ED', borderColor: '#FED7AA' }}>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>Field Services at a Glance</p>
              <div className="space-y-4">
                {[
                  { label: 'Response SLA', value: '4 hours on-site', color: '#F97316' },
                  { label: 'Coverage', value: 'Nationwide Pakistan', color: '#F97316' },
                  { label: 'First-Visit Fix Rate', value: '98%', color: '#F97316' },
                  { label: 'Engineer Pool', value: '50+ nationwide', color: '#F97316' },
                  { label: 'Sites Served', value: '500+ and growing', color: '#F97316' },
                  { label: 'Availability', value: 'Business hours + 24/7 option', color: '#F97316' },
                ].map(p => (
                  <div key={p.label} className="flex items-center justify-between py-2 border-b last:border-0 text-[13px]" style={{ borderColor: '#FED7AA' }}>
                    <div className="font-semibold" style={{ color: '#0A1628' }}>{p.label}</div>
                    <div className="font-bold" style={{ color: p.color }}>{p.value}</div>
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
              <div className="h-px w-6" style={{ background: '#F97316' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#F97316' }}>Service Capabilities</span>
              <div className="h-px w-6" style={{ background: '#F97316' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Core Field Service Areas
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From emergency break-fix through planned technology rollouts to ongoing multi-vendor support management.
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

      <FAQAccordion faqs={FAQS} accent="#F97316"
        title="Global Field Services Questions Answered"
        subtitle="Common questions from organisations evaluating on-site IT field support." />

      <CTABanner
        heading="Get a Field Engineer On-Site Today"
        subheading="Log a service request now and have an Infraspine field engineer on your doorstep within four hours."
        primaryCTA={{ label: 'Request an Engineer', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
