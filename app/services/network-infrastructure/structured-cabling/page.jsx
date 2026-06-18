import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Network, Zap, CheckCircle, Settings, Building2, FileText, BarChart2, ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'Structured Cabling Pakistan — CAT6A & Fiber Optic Installation | Infraspine',
  description: 'Infraspine Structured Cabling: TIA-568 certified CAT6A and fiber optic installation, cable testing, patch panel management, and complete documentation for offices and data centers in Pakistan.',
  alternates: { canonical: 'https://www.infraspine.com/services/network-infrastructure/structured-cabling' },
  openGraph: {
    title: 'Structured Cabling Pakistan — CAT6A & Fiber Optic Installation | Infraspine',
    description: 'Infraspine Structured Cabling: TIA-568 certified CAT6A and fiber optic installation, cable testing, patch panel management, and complete documentation for offices and data centers in Pakistan.',
    url: 'https://www.infraspine.com/services/network-infrastructure/structured-cabling',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Structured Cabling',
  name: 'Infraspine Structured Cabling Services',
  description: 'TIA-568 certified CAT6A copper and fiber optic cabling installation, Fluke DSX cable testing and certification, patch panel management, infrastructure survey and design, and as-built documentation for offices and data centres in Pakistan.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/network-infrastructure/structured-cabling',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: 'TIA-568', label: 'Certified Installation', color: '#D97706' },
  { value: '10,000+', label: 'Ports Installed', color: '#D97706' },
  { value: '100%', label: 'Fluke Test Pass Rate', color: '#D97706' },
  { value: '25 Year', label: 'Channel Link Warranty', color: '#D97706' },
]

const CAPABILITIES = [
  {
    icon: Network,
    title: 'CAT6A Data Cabling',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'CAT6A is the current gold standard for horizontal copper data cabling and the minimum specification we recommend for any new office or data centre installation. Augmented Category 6A cable supports 10 Gigabit Ethernet (10GbE) at full 100-metre channel length — future-proofing your infrastructure for network upgrades without requiring a full recable in three to five years. We install solid copper CAT6A in both UTP (Unshielded Twisted Pair) and F/UTP (Foil-shielded) variants, selecting the appropriate type based on your building\'s electromagnetic environment and the equipment being connected. Cable routing follows TIA-568 standards throughout: J-hooks maintain the cable\'s bend radius along horizontal runs, surface raceways provide a clean finish in areas where concealment is not possible, and perforated cable trays or ladder tray containment systems carry high-density runs above suspended ceilings and in data rooms. EMI separation is maintained between data cabling and power circuits at all times to prevent interference. Plenum-rated cable (CMP) is used in air-handling spaces and riser-rated cable (CMR) in vertical shaft installations to comply with fire safety codes. Every outlet is terminated to the TIA-568 T568B standard using 110-style punch-down keystone jacks, and faceplates are labelled in accordance with the project\'s labelling scheme before we leave site.',
    points: [
      'Solid copper CAT6A UTP and F/UTP supporting 10GbE at 100m channel length',
      'Plenum (CMP) and riser (CMR) rated cable for compliant installation in all areas',
      'J-hook, surface raceway, and cable tray containment to TIA-568 routing standards',
      'EMI separation from power circuits maintained throughout all runs',
    ],
  },
  {
    icon: Zap,
    title: 'Fiber Optic Cabling',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Fiber optic cabling is the correct solution for backbone runs between communications rooms, campus connectivity between buildings, and any horizontal run where distance exceeds the 100-metre copper limit or where complete electrical isolation is required. We install both single-mode and multimode fiber across the full spectrum of current standards. OS2 single-mode fiber carries wavelengths of 1310nm and 1550nm over distances of kilometres without signal degradation, making it the standard choice for building-to-building backbone runs and WAN demarcation connections. OM3 aqua multimode fiber supports 10GbE to 300 metres and 40GbE to 100 metres using 850nm laser sources, while OM4 extends these distances further and supports 100GbE for data centre inter-switch connections. Fusion splicing produces low-loss permanent joins with typical splice loss below 0.1dB, used where cable lengths exceed what can be pulled in a single run. Connector selection is application-driven: LC duplex connectors for small-form-factor SFP transceivers, SC duplex for legacy equipment, and MPO/MTP 12-fibre and 24-fibre array connectors for high-density data centre pre-terminated systems that allow entire trunk cables to be installed and connected in minutes rather than hours. OTDR (Optical Time Domain Reflectometer) testing verifies end-to-end continuity, locates splice points and connectors, and confirms that insertion loss and return loss meet specification for every installed fiber run.',
    points: [
      'OS2 single-mode for campus and building backbone runs up to kilometres',
      'OM3 and OM4 multimode for 10GbE, 40GbE, and 100GbE data centre links',
      'Fusion splicing with sub-0.1dB splice loss and LC, SC, MPO/MTP termination',
      'OTDR testing of every fiber run to confirm insertion loss and return loss compliance',
    ],
  },
  {
    icon: CheckCircle,
    title: 'Cable Testing & Certification',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Installation quality cannot be verified by eye — a cable that looks perfectly installed may fail to support Gigabit or 10 Gigabit Ethernet due to a tight bend at a corner, excessive untwist at a jack termination, or a cable that was kinked during pulling. Certification testing with a calibrated field tester is the only way to prove that every installed link meets the performance standard it was designed to achieve. We test every copper port using the Fluke DSX-8000 CableAnalyzer, the most accurate field certification tester available, calibrated to NIST-traceable standards. Each port is tested as either a Permanent Link (from the wall jack to the patch panel, excluding patch cords) or a Channel (including patch cords at both ends), depending on the requirement. Tests performed on every port include wiremap (confirming correct pin-to-pin continuity and absence of opens, shorts, reversed pairs, split pairs, and transpositions), insertion loss, near-end crosstalk (NEXT), power sum NEXT (PSNEXT), equal-level far-end crosstalk (ELFEXT), power sum ELFEXT (PSELFEXT), return loss (RL), and propagation delay and delay skew. Every test result is stored digitally and exported as a printed or PDF report that forms part of the project handover documentation. Any port that does not achieve a PASS result is re-terminated or recabled at no additional cost and retested until it passes.',
    points: [
      'Fluke DSX-8000 certification testing of every port to TIA-568 or ISO 11801 standard',
      'Full parameter testing: wiremap, insertion loss, NEXT, PSNEXT, ELFEXT, RL, delay skew',
      'Permanent link and channel test modes to suit the installation configuration',
      'Digital test reports exported as PDF included in project handover documentation',
    ],
  },
  {
    icon: Settings,
    title: 'Patch Panel & Cable Management',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'A structured cabling system is only as useful as the patch panel and cable management infrastructure that sits at its heart. A poorly organised communications room — with cables bundled in unsorted masses, unlabelled ports, and patch cords draped across equipment — makes adds, moves, and changes time-consuming and error-prone, and creates the risk that the wrong cable is disconnected during maintenance. We install 24-port and 48-port CAT6A patch panels in 1U and 2U configurations from Panduit, Leviton, and CommScope, terminated and labelled to match the outlet numbering scheme agreed during design. Horizontal cable managers — 1U and 2U finger-duct panels — are installed above and below every patch panel to guide patch cords neatly to the adjacent switch ports without crossing other equipment. Vertical cable managers route patch cords between units in tall cabinets and between adjacent racks. All cables within cabinets are dressed and bundled using Velcro hook-and-loop straps rather than cable ties, which can be repositioned during future changes without cutting and replacing every fastener. Colour coding is applied systematically: a consistent colour scheme distinguishes data ports from voice ports, management network connections, and uplink cables, allowing the function of any cable to be identified at a glance without consulting documentation. Every patch panel port and every wall outlet is labelled in accordance with the agreed labelling standard before the project handover.',
    points: [
      '24-port and 48-port CAT6A patch panels from Panduit, Leviton, and CommScope',
      'Horizontal and vertical finger-duct cable managers for neat patch cord routing',
      'Velcro bundling throughout — no cable ties that prevent future moves',
      'Colour-coded labelling scheme distinguishing data, voice, management, and uplink cables',
    ],
  },
  {
    icon: Building2,
    title: 'Infrastructure Survey & Design',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'A structured cabling project that is well designed before installation begins is invariably faster to install, cheaper to complete, easier to certify, and simpler to maintain than one where design decisions are made on the fly by the installation team. Our infrastructure survey and design service ensures that every element of your cabling system is planned in advance, reviewed against your network and technology requirements, and documented clearly before a single cable is pulled. The survey begins with a site walkthrough accompanied by your facilities or IT representative: we walk every area of the building to understand the space, identify the proposed outlet locations based on desk layouts and equipment positions, assess the proposed cable routing paths for practicality, and identify any obstacles such as fire compartment walls that require fire-stopping, asbestos surveys, or structural elements that cannot be penetrated. Riser shaft capacity is assessed to confirm that sufficient space exists for the planned vertical backbone runs. Cabinet and communications room placement is evaluated for proximity to the areas served, power availability, cooling requirements, and physical security. We produce AutoCAD or Visio floor plan drawings showing every outlet location, cable routing path, and communications room position. Cable count schedules list every run by outlet number, origin, destination, cable type, and estimated length. PDU and power requirements for each communications room are documented for input to the electrical design.',
    points: [
      'Full site walkthrough with outlet location planning and routing path assessment',
      'Riser shaft capacity survey and communications room placement evaluation',
      'AutoCAD or Visio floor plan drawings with outlet locations and cable routing paths',
      'Cable count schedule, cabinet specification, and PDU requirement documentation',
    ],
  },
  {
    icon: FileText,
    title: 'As-Built Documentation',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'The value of a structured cabling installation is significantly reduced without accurate as-built documentation. When a network fault occurs at 2am, the engineer responding needs to know immediately which patch panel port connects to which wall outlet, which cabinet serves which floor zone, and where the fiber backbone runs between communications rooms. When you add new staff and need to provide a network connection at a desk, you need to know which outlet numbers are available in that area and which patch panel ports they connect to. When you sell or lease the building, the next occupant needs to understand what infrastructure is in place. We provide a complete as-built documentation package with every structured cabling project. The port schedule is a spreadsheet listing every outlet in the building by outlet identifier, floor, room, position, patch panel, patch panel port, and cable type — the definitive reference for all moves, adds, and changes. Floor plans are updated to reflect the as-installed outlet positions and cable routing paths, with any deviations from the original design clearly marked. Patch panel schedules show the layout of each panel with port numbers and the outlet each port connects to. The Fluke test report binder contains the printed or PDF certification results for every port. A photo documentation folder contains photographs of each communications room showing the installed cabinets, patch panels, and cable management. The labelling scheme guide documents the naming convention used for outlets and patch panel ports so future contractors can maintain consistency.',
    points: [
      'Complete port schedule spreadsheet: outlet identifier, floor, room, patch panel, and cable type',
      'Updated floor plans with as-installed outlet positions and cable routing paths',
      'Fluke DSX-8000 certification test reports for every installed port',
      'Communications room photography, patch panel schedules, and labelling scheme guide',
    ],
  },
]

const VENDORS = [
  'Panduit', 'Leviton', 'CommScope', 'Belden', 'Fluke Networks',
  'Corning', 'Legrand', 'Rittal', 'APC', 'Yealink',
]

const FAQS = [
  {
    question: 'What is the difference between CAT6 and CAT6A cabling?',
    answer: 'CAT6 (Category 6) cable supports Gigabit Ethernet (1GbE) reliably at 100 metres and 10 Gigabit Ethernet (10GbE) only up to approximately 37–55 metres — well short of the 100-metre horizontal cable distance that most building layouts require. CAT6A (Augmented Category 6) was specifically designed to extend 10GbE support to the full 100-metre channel length, making it future-proof for 10 Gigabit switching deployments. CAT6A cable is physically larger in diameter than CAT6 because it uses a thicker jacket and often a spline separator between the four pairs to maintain tight geometric spacing that controls crosstalk at the higher frequencies (500MHz) the standard requires. This larger diameter means that cable trays and conduits sized for CAT6 may need to be upsized for CAT6A installations. CAT6A also comes in shielded variants (F/UTP, S/FTP) that provide additional immunity to electromagnetic interference, which is relevant in environments with heavy electrical equipment or dense wireless access point deployments. For any new installation today, we recommend CAT6A as standard — the incremental cost over CAT6 is modest and the infrastructure will comfortably support any switching technology available for the foreseeable future.',
  },
  {
    question: 'How long does structured cabling installation take for a 100-person office?',
    answer: 'A 100-person office typically requires between 200 and 300 data outlets (two outlets per workstation plus additional outlets for network equipment, access points, printers, and meeting room equipment). The installation timeline depends on several factors: the physical complexity of the building (number of floors, riser shaft access, ceiling type, fire compartment crossings), whether the office is occupied during installation or vacant, whether a survey and design have already been completed, and the number of installation engineers deployed. For an occupied, single-floor 100-person office with pre-completed design documentation, a team of four experienced engineers would typically complete the physical installation in five to eight working days, followed by one to two days of termination and labelling, and one to two days of Fluke certification testing and snagging. The total elapsed project time from survey to certified handover documentation is typically three to four weeks when accounting for design review, materials procurement, and scheduling. We provide a detailed project programme during the design phase so you can plan around the installation works and minimise disruption to your business operations.',
  },
  {
    question: 'Do I need to replace my cabling if I am upgrading to 10 Gigabit networking?',
    answer: 'It depends entirely on what cabling is already installed. If your existing infrastructure is CAT6A certified to TIA-568-C.2-1 or ISO 11801 Class EA, you do not need to replace the cabling — it already meets the specification for 10GbE at 100 metres and you simply need to upgrade your network switches and SFP+ transceivers. If you have CAT6 cabling, the answer is more nuanced: CAT6 supports 10GbE on runs up to approximately 37–55 metres depending on the specific cable brand and the electromagnetic environment. If the majority of your runs are shorter than 37 metres, you may be able to run 10GBASE-T over existing CAT6 infrastructure and save the recabling cost. However, if you have runs approaching 100 metres, those specific runs would need to be replaced with CAT6A. If your building is cabled with CAT5e or older, replacement is strongly recommended — CAT5e is rated only for Gigabit Ethernet and does not reliably support 10GbE regardless of run length. We can perform a survey of your existing cabling infrastructure and provide a clear recommendation on what can be retained and what needs to be replaced, avoiding unnecessary expenditure while ensuring your 10 Gigabit upgrade succeeds.',
  },
  {
    question: 'What certification do you provide after completing a cabling installation?',
    answer: 'Every structured cabling project we complete is accompanied by a full Fluke DSX-8000 certification test report covering every installed copper port and OTDR trace for every fiber run. For copper, each port is tested as either a Permanent Link or Channel (depending on the configuration) against the TIA-568-C.2-1 CAT6A standard or ISO 11801 Class EA standard as agreed at project outset. The test report lists every measured parameter — wiremap, insertion loss, NEXT, PSNEXT, ELFEXT, PSELFEXT, return loss, propagation delay, and delay skew — and records a PASS or FAIL result for each. Every port must achieve PASS on all parameters before we consider it complete. The test reports are delivered digitally (as Fluke LinkWare project files and PDF exports) and in printed form as part of the handover documentation binder. Where the installation is carried out using manufacturer-certified products and in accordance with manufacturer installation guidelines, we can also register the installation with the cable manufacturer for a 25-year system warranty covering both the cable and connectivity components. This warranty provides long-term assurance that the infrastructure will be replaced at the manufacturer\'s cost if it fails to perform to specification.',
  },
  {
    question: 'Can structured cabling be installed without disrupting our ongoing office operations?',
    answer: 'Yes, and we have extensive experience managing structured cabling projects in live, occupied office environments across Pakistan. The key to minimising disruption is thorough planning before work begins: we agree with your facilities team which areas will be worked in on which days, schedule ceiling work outside business hours (evenings and weekends) where required, use dust sheets and barriers to contain debris from ceiling access, and stage materials deliveries to avoid cluttering working areas. Cabinet and patch panel work in communications rooms typically has no impact on the office at all since it takes place in a separate room. The most disruptive phase is usually outlet installation at desk positions, which involves lifting carpet tiles or surface-mounting trunking, and this is scheduled in agreement with the teams occupying those desks. Where a desk position is being actively used, we can defer that outlet until the user is away from their desk. Network cut-overs — the moment when the old cabling is disconnected and the new cabling is patched in — are planned for out-of-hours to eliminate any risk of service interruption. We provide a pre-installation disruption plan as part of our project documentation so your management team can communicate clearly with staff about what to expect and when.',
  },
]

export default function StructuredCablingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Network Infrastructure', href: '/services/network-infrastructure' },
        { label: 'Structured Cabling' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#D97706,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: '#D97706' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#D97706' }}>Structured Cabling</span>
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white mb-6">
              Structured Cabling —{' '}
              <span style={{ color: '#D97706' }}>TIA-568 Certified CAT6A & Fiber.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              Poor cabling is the hidden cause of most network performance problems — and the hardest to fix after the walls are closed. Infraspine installs and certifies TIA-568 compliant CAT6A copper and fiber optic structured cabling systems for offices, data centres, and campuses across Pakistan. Every port is Fluke DSX-8000 tested and certified, and every project is delivered with complete as-built documentation and a 25-year channel link warranty.
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
                style={{ background: '#D97706', color: '#fff' }}>
                Get a Cabling Survey <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Request a Quote
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
                Why Cabling Quality Determines Network Performance
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Network switches, routers, and firewalls receive enormous attention during infrastructure planning — but the structured cabling that connects every device to the network is frequently treated as a commodity afterthought. The result is recurring network intermittency, inexplicably slow throughput on specific links, and VoIP call quality problems that IT teams spend months chasing with expensive diagnostic tools, not realising that the root cause is a cable with excessive untwist at a termination or a patch cord routed over a fluorescent light fitting.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Certified structured cabling eliminates this class of problem entirely. When every port in your building carries a Fluke DSX-8000 PASS result and a TIA-568 certification report, you know with certainty that the physical layer is not the problem. Troubleshooting network issues becomes vastly faster because the cabling can be ruled out immediately. And when your business grows and you add switching infrastructure to support 10 Gigabit to the desktop or wireless access points operating at Wi-Fi 6E speeds, CAT6A cabling is already in place to support it.
              </p>
              <p className="text-[15px] leading-relaxed mb-6" style={{ color: '#64748B' }}>
                Structured cabling is also a property asset. A professionally installed and documented cabling system adds demonstrable value to an office fit-out — it is an asset that prospective tenants and building purchasers can verify through the certification documentation and that reduces their fit-out cost when they take occupation. The 25-year manufacturer warranty we register on qualifying installations means the infrastructure is supported for the life of the building fit-out cycle.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#D97706', text: 'TIA-568 certified installation eliminates physical layer faults' },
                  { color: '#D97706', text: 'CAT6A supports 10GbE now and future switching upgrades' },
                  { color: '#D97706', text: '100% Fluke test pass rate — every port certified before handover' },
                  { color: '#D97706', text: '25-year channel link warranty on qualifying installations' },
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
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>Uncertified vs Certified Cabling</p>
              <div className="space-y-4">
                {[
                  { label: 'Performance Assurance', internal: 'None', managed: 'Fluke certified every port' },
                  { label: 'Fault Diagnosis', internal: 'Hours or days', managed: 'Physical layer ruled out' },
                  { label: '10GbE Readiness', internal: 'Unknown', managed: 'Guaranteed CAT6A' },
                  { label: 'Documentation', internal: 'Rarely provided', managed: 'Full as-built package' },
                  { label: 'Warranty', internal: 'None', managed: '25-year channel link' },
                  { label: 'Compliance', internal: 'Unverifiable', managed: 'TIA-568 certified' },
                ].map(p => (
                  <div key={p.label} className="grid grid-cols-3 gap-2 py-2 border-b last:border-0 text-[12px]" style={{ borderColor: '#E2E8F0' }}>
                    <div className="font-semibold" style={{ color: '#0A1628' }}>{p.label}</div>
                    <div style={{ color: '#DC2626' }}>{p.internal}</div>
                    <div className="font-semibold" style={{ color: '#D97706' }}>{p.managed}</div>
                  </div>
                ))}
                <div className="grid grid-cols-3 gap-2 text-[10px] font-bold uppercase tracking-wider pt-1" style={{ color: '#94A3B8' }}>
                  <div></div><div>Uncertified</div><div>Infraspine</div>
                </div>
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
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#D97706' }}>Cabling Capabilities</span>
              <div className="h-px w-6" style={{ background: '#D97706' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Six Core Structured Cabling Services
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From initial infrastructure survey and CAD design through CAT6A and fiber installation to Fluke certification testing and complete as-built documentation.
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
                      <span className="text-[12.5px]" style={{ color: '#475569' }}>{pt}</span>
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
            Cabling Brands &amp; Test Equipment Partners
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
        title="Structured Cabling Questions Answered"
        subtitle="Common questions from facilities managers and IT teams planning a cabling installation or upgrade." />

      <CTABanner
        heading="Get Your Cabling Survey Booked Today"
        subheading="Certified CAT6A and fiber optic structured cabling for Pakistan offices and data centres. Every port tested, every run documented."
        primaryCTA={{ label: 'Get Started', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
