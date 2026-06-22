import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Package, Zap, Settings, Building2, RefreshCw, Database,
  ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'IT Rollouts & Migrations Pakistan | Device Deployment | Infraspine',
  description: 'Large-scale deployment of new devices, OS migrations, office relocations, and technology refresh programmes across Pakistan. 5,000+ devices deployed, 99.5% on-time delivery.',
  alternates: { canonical: 'https://www.infraspine.com/services/field-services/rollouts-migrations' },
  openGraph: {
    title: 'IT Rollouts & Migrations Pakistan | Device Deployment | Infraspine',
    description: 'Large-scale IT rollouts and migrations across Pakistan with 99.5% on-time delivery and zero data loss record.',
    url: 'https://www.infraspine.com/services/field-services/rollouts-migrations',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'IT Rollouts & Migrations',
  name: 'Infraspine IT Rollouts & Migrations Pakistan',
  description: 'Large-scale deployment of new devices, OS migrations, office relocations, and technology refresh programmes across Pakistan with zero data loss record.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/field-services/rollouts-migrations',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '5,000+', label: 'Devices Deployed', color: '#7C3AED' },
  { value: '99.5%', label: 'On-Time Delivery', color: '#2563EB' },
  { value: '30+', label: 'Sites Simultaneously', color: '#F97316' },
  { value: 'Zero', label: 'Data Loss Record', color: '#16A34A' },
]

const CAPABILITIES = [
  {
    icon: Package,
    title: 'Device Imaging & Configuration',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'The efficiency and consistency of a technology rollout depends fundamentally on the quality of the device imaging and configuration process. Deploying devices one at a time, installing software manually, and configuring settings individually is not only slow — it produces inconsistent results, with each device subtly different in ways that cause support problems later. Our device imaging service uses enterprise deployment tooling to create a master image for each device type in scope, capturing the OS, security configuration, standard applications, and domain settings in a single deployable image. This master image is tested against a representative set of use cases before rollout commences, and any issues identified during testing are resolved before mass deployment begins. Devices are imaged in our logistics facility or at a designated staging area, allowing large quantities to be processed in parallel, dramatically reducing the time from delivery to deployment-ready.',
    points: [
      'Master image creation using MECM, MDT, or Windows Autopilot',
      'Pre-deployment image testing against representative use cases',
      'Parallel imaging of large device batches at our staging facility',
      'Consistent configuration across all deployed devices, every time',
    ],
  },
  {
    icon: Zap,
    title: 'Mass Desktop Rollouts',
    color: '#F97316',
    bg: '#FFF7ED',
    desc: 'Rolling out hundreds or thousands of new desktop devices across an organisation requires the logistical discipline of a supply chain operation combined with the technical expertise of IT deployment specialists. Our mass desktop rollout service manages the complete process: coordinating device delivery from the hardware vendor, staging and imaging at our logistics facility, scheduling on-site deployment waves by department or floor, physically installing and cabling the new devices, transferring user data and personal settings, and removing the old equipment. We work from a detailed rollout schedule agreed with your project team, specifying the deployment sequence, the daily throughput targets, the communication to affected users, and the acceptance process. Our rollout teams can sustain high daily throughput rates when running at full capacity, enabling even large estates of several thousand devices to be refreshed within a tight project window. User disruption is minimised by scheduling deployments outside peak working hours wherever possible.',
    points: [
      'End-to-end rollout management from device delivery through old kit removal',
      'Sustained high daily throughput with coordinated multi-team deployment',
      'User communication planning and pre-deployment notification',
      'Out-of-hours scheduling to minimise business disruption',
    ],
  },
  {
    icon: Settings,
    title: 'OS & Application Migration',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Operating system migrations — particularly large-scale upgrades from Windows 10 to Windows 11, or migrations from on-premise applications to cloud-based equivalents — carry significant risk if not managed with rigour. Application compatibility issues, driver incompatibilities, profile migration failures, and unexpected changes to user workflows can all derail a migration if they are not identified and addressed before the production rollout begins. Our OS and application migration methodology begins with a compatibility assessment: scanning the existing estate to identify applications, drivers, and configurations that may require attention. This assessment feeds a remediation plan, and issues are resolved before the migration begins. The migration itself follows a phased approach — pilot users first, then department by department — with a defined rollback capability at each stage. User communication and training are included to help staff adapt to any workflow changes the migration introduces.',
    points: [
      'Pre-migration compatibility assessment covering applications, drivers, and settings',
      'Phased migration methodology with pilot phase and rollback capability',
      'Application remediation for compatibility issues before production rollout',
      'User communication and targeted training for workflow changes',
    ],
  },
  {
    icon: Building2,
    title: 'Office Relocation Support',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Office relocations are among the most logistically complex IT projects an organisation undertakes. Every user\'s equipment must be disconnected, transported, reconnected, and verified at the new location, while network infrastructure must be operational before users arrive. Sequencing these activities correctly — and recovering quickly when things do not go to plan on the day — requires a level of coordination that exceeds what most internal IT teams can provide while also keeping the existing environment running. Our office relocation service provides end-to-end IT relocation support: surveying the new premises to confirm infrastructure readiness, planning the equipment packing and labelling scheme, coordinating with removals teams on equipment handling requirements, leading the reconnection and setup at the new location, and conducting systematic post-move verification before users are allowed in. We maintain a rapid-response team on relocation day to deal with issues as they arise, minimising the time between users leaving the old site and being productive at the new one.',
    points: [
      'New premises infrastructure survey and readiness confirmation',
      'Equipment packing coordination with removals teams',
      'Post-move reconnection, configuration, and systematic verification',
      'On-the-day rapid-response team for issue resolution',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Hardware Refresh Programmes',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Technology refresh — the systematic replacement of end-of-life or underperforming hardware across an estate — is a planned programme of work that recurs every three to five years for most device categories. Done well, a hardware refresh improves user productivity, reduces support costs, and eliminates the risk of operating hardware beyond its supported lifecycle. Done poorly, it is a disruptive, expensive project that leaves users with misconfigured devices and lost data. Our hardware refresh programme service manages the complete lifecycle: beginning with an estate assessment to identify devices due for replacement based on age, performance, and support status, through procurement support to develop specifications and tender documents, to deployment of new devices and the controlled decommissioning and disposal of old equipment. We maintain accurate programme tracking throughout, providing regular progress reports against the refresh schedule and flagging any deviations requiring management attention.',
    points: [
      'Estate assessment identifying devices due for replacement by age and support status',
      'Procurement specification and tender support for new hardware',
      'Structured deployment and decommissioning with progress tracking',
      'Secure disposal and ITAD certification for end-of-life equipment',
    ],
  },
  {
    icon: Database,
    title: 'Data Migration & Transfer',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'Data migration is the aspect of any technology rollout or hardware refresh that carries the highest risk of causing permanent harm. A user whose data is lost or corrupted during a device migration loses irreplaceable work — and the reputational and trust damage to the IT function is severe. Our data migration service applies a disciplined, verified approach to every migration. Before any data is moved from an existing device, we create a verified backup to a secure staging location. Data is migrated using professional migration tooling that handles large file sets, complex directory structures, Outlook PST files, browser profiles, and application settings reliably. Post-migration, we conduct a verification check with the user to confirm all expected data is present and accessible on the new device. The old device is only decommissioned after the user has confirmed data completeness — our zero data loss record across all completed migrations reflects this uncompromising approach.',
    points: [
      'Verified backup of all user data before migration commences',
      'Professional migration tooling handling files, profiles, and application settings',
      'Post-migration user verification before old device decommissioning',
      'Zero data loss record across all completed device migrations',
    ],
  },
]

const FAQS = [
  {
    question: 'What is a technology rollout?',
    answer: 'A technology rollout is the large-scale deployment of new IT devices, software, or infrastructure across an organisation. Common examples include deploying new laptops or desktops to replace an ageing device fleet, rolling out a new operating system version to all users, deploying new networking equipment across multiple sites, or implementing a new application across the business. Rollouts differ from ongoing support in that they are project-based, time-bounded, and involve deploying identical or similar technology to a large number of users in a coordinated way. Infraspine manages the complete rollout lifecycle from planning and staging through on-site deployment to user handover and post-deployment support.',
  },
  {
    question: 'How do you ensure zero data loss during migration?',
    answer: 'Our zero data loss methodology follows a strict sequence: first, a complete backup of all user data is created to a secure staging location and verified for completeness before any migration activity begins. We use professional migration tooling capable of handling complex data sets including large file shares, nested directory structures, Outlook mailbox files, browser bookmarks and profiles, and application-specific data folders. After migration, a post-migration verification is conducted with the user present to confirm that all expected data categories are accessible on the new device. The original device is retained and the backup is preserved until the user confirms data completeness — we never decommission source data before receiving explicit user sign-off. This process has resulted in a zero data loss record across all completed migrations.',
  },
  {
    question: 'Can you run rollouts across multiple sites at once?',
    answer: 'Yes. We have delivered simultaneous rollouts across 30+ sites across Pakistan, deploying coordinated teams to each location working from a unified master schedule. Multi-site rollouts are managed from our project coordination function, which tracks progress at each site against the agreed schedule, identifies and resolves blockers in real time, and escalates where a site is at risk of missing its deployment window. Each site team reports daily progress to the central project manager, and a consolidated status dashboard is maintained for client reporting. Pre-staging devices centrally before dispatch to each site ensures that every device arriving on-site is already imaged, configured, and ready for user deployment without on-site preparation time.',
  },
  {
    question: 'How long does a typical rollout take?',
    answer: 'Rollout duration depends on the scope: the number of devices, the number of sites, the complexity of the imaging and configuration process, and the scheduling constraints imposed by business operations. As a general guide, a single-site rollout of 100 devices can typically be completed within two to three working days. A multi-site rollout of 1,000 devices across 10 locations would typically be scoped as a four to six week programme. Very large programmes of 5,000+ devices across many sites are planned as structured programmes with multiple phases. We provide a detailed project plan during the scoping phase that shows the projected deployment timeline, the resource plan, the key milestones, and the dependencies that must be met to keep the programme on track.',
  },
  {
    question: 'Do you handle the disposal of old hardware?',
    answer: 'Yes. Secure hardware disposal is included as part of our hardware refresh and rollout services. Decommissioned devices are collected from site, transported to our secure disposal facility, and processed in accordance with data security requirements. Hard drives and SSDs undergo certified data wiping using NIST 800-88-compliant wiping procedures, with a destruction certificate issued for each device. Devices that can be refurbished are processed through our ITAD (IT Asset Disposition) partner for resale or donation, maximising residual value. Devices that cannot be refurbished are recycled through certified e-waste facilities. A full disposal manifest is provided at the end of the programme, documenting every decommissioned device and its disposal method — essential for compliance and audit purposes.',
  },
]

export default function RolloutsMigrationsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Field Services', href: '/services/field-services' },
        { label: 'Rollouts & Migrations', href: '/services/field-services/rollouts-migrations' },
      ]} bg="#0f0020" />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#0f0020' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#7C3AED,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#7C3AED' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#7C3AED' }}>Rollouts & Migrations</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              IT Rollouts & Migrations —{' '}
              <span style={{ color: '#7C3AED' }}>Zero Data Loss. On Time.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Deploying new technology at scale demands the precision of a logistics operation and the technical rigour of expert IT engineers. Infraspine has deployed over 5,000 devices across Pakistan with a 99.5% on-time delivery rate and a zero data loss record — delivering technology refresh programmes that keep organisations moving forward without operational disruption.
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
                style={{ background: '#7C3AED', color: '#fff' }}>
                Plan Your Rollout <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Get a Project Estimate
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
                <div className="h-px w-6" style={{ background: '#7C3AED' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#7C3AED' }}>Why Professional Rollout Management Matters</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Technology Rollouts Done Poorly Cost More Than They Save
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Technology refresh programmes are often approved on the basis of hardware cost savings from consolidating vendors or replacing expensive-to-maintain legacy equipment. But the hardware cost is only one component of the total programme cost — and often not the largest one. A poorly executed rollout generates significant hidden costs: user productivity losses during migration, IT support demand spikes from misconfigured devices, remediation costs for data loss incidents, and schedule slippage that delays the business benefits.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The largest risk in any technology migration is data. Users accumulate years of work on their devices, and the stress of migration creates a window of vulnerability where that data can be lost. A single significant data loss incident can destroy confidence in the IT function and generate legal and compliance exposure if the lost data included regulated information.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Infraspine\'s rollout and migration service invests heavily in the processes that prevent these failure modes: rigorous pre-migration data backup and verification, standardised device imaging that eliminates configuration inconsistency, and a user verification step before any source data is decommissioned. The result is a programme that delivers the planned benefits without the unplanned costs.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#7C3AED', text: 'Zero data loss record across all completed migrations' },
                  { color: '#2563EB', text: '99.5% on-time delivery across 5,000+ deployed devices' },
                  { color: '#F97316', text: 'Simultaneous deployment across 30+ sites at once' },
                  { color: '#16A34A', text: 'Secure ITAD disposal of decommissioned hardware included' },
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

            <div className="rounded-2xl border p-8" style={{ background: '#F5F3FF', borderColor: '#DDD6FE' }}>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>Rollout Programme Summary</p>
              <div className="space-y-4">
                {[
                  { label: 'Devices Deployed', value: '5,000+ and counting' },
                  { label: 'On-Time Delivery Rate', value: '99.5%' },
                  { label: 'Max Simultaneous Sites', value: '30+' },
                  { label: 'Data Loss Record', value: 'Zero incidents' },
                  { label: 'Disposal Certification', value: 'NIST 800-88 compliant' },
                  { label: 'Coverage', value: 'Nationwide Pakistan' },
                ].map(p => (
                  <div key={p.label} className="flex items-center justify-between py-2 border-b last:border-0 text-[13px]" style={{ borderColor: '#DDD6FE' }}>
                    <div className="font-semibold" style={{ color: '#0A1628' }}>{p.label}</div>
                    <div className="font-bold" style={{ color: '#7C3AED' }}>{p.value}</div>
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
              <div className="h-px w-6" style={{ background: '#7C3AED' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#7C3AED' }}>Rollout Capabilities</span>
              <div className="h-px w-6" style={{ background: '#7C3AED' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Rollout & Migration Service Areas
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From device imaging and mass deployments through OS migrations to office relocations and secure disposal.
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

      <FAQAccordion faqs={FAQS} accent="#7C3AED"
        title="Rollouts & Migrations Questions Answered"
        subtitle="Common questions from organisations planning technology deployments and device migrations." />

      <CTABanner
        heading="Plan Your Technology Rollout with Infraspine"
        subheading="5,000+ devices deployed. 99.5% on-time. Zero data loss. Talk to us about your rollout or migration."
        primaryCTA={{ label: 'Start Planning', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
