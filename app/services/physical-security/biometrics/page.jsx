import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Fingerprint, Users, Monitor, Shield, Database, Activity,
  CheckCircle, ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'Biometric Systems Pakistan — Fingerprint, Face Recognition & Attendance | Infraspine',
  description: 'Biometric attendance and access systems across Pakistan. Fingerprint, face recognition, multi-modal terminals. HR and payroll integration. ZKTeco, Suprema, Hikvision certified.',
  alternates: { canonical: 'https://www.infraspine.com/services/physical-security/biometrics' },
  openGraph: {
    title: 'Biometric Systems Pakistan — Fingerprint, Face Recognition & Attendance | Infraspine',
    description: 'Enterprise biometric attendance, access control, and identity verification in Pakistan. Fingerprint, face, and multi-modal terminals with payroll integration.',
    url: 'https://www.infraspine.com/services/physical-security/biometrics',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Biometric Attendance & Access Control Systems',
  name: 'Infraspine Biometric Systems',
  description: 'Enterprise biometric attendance and access control systems — fingerprint, facial recognition, and multi-modal terminals with HR and payroll integration — deployed across Pakistan.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/physical-security/biometrics',
}

const STATS = [
  { value: '200+',    label: 'biometric deployments completed', color: '#7C3AED' },
  { value: '0.01%',  label: 'false acceptance rate (FAR)',      color: '#DC2626' },
  { value: '0.1s',   label: 'average recognition speed',        color: '#2563EB' },
  { value: '50,000', label: 'template capacity per device',      color: '#00C853' },
]

const CAPABILITIES = [
  {
    icon: Fingerprint,
    title: 'Fingerprint Attendance Terminals',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Fingerprint recognition is the most widely deployed biometric modality globally — it is mature, cost-effective, highly accurate, and reliable across a wide range of environmental conditions. We deploy fingerprint attendance terminals from ZKTeco, Suprema, Hikvision, Anviz, and Hanvon depending on your throughput requirements, environmental conditions, and integration needs. For high-traffic environments such as factory floors with hundreds of employees clocking in simultaneously, we deploy multi-reader configurations with fast-match processors that achieve sub-second identification even for template databases exceeding 50,000 records. All fingerprint data is stored as an encrypted mathematical template — not as an image — meaning it cannot be reverse-engineered to recreate an actual fingerprint.',
    points: [
      'Optical, capacitive, and multi-spectral fingerprint sensors to suit environments',
      'Multi-reader configuration for high-throughput shift changeovers',
      'Encrypted template storage — no actual fingerprint images retained',
      'Sub-second identification in databases of 50,000+ templates',
    ],
  },
  {
    icon: Monitor,
    title: 'Face Recognition Terminals',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Facial recognition terminals eliminate the need for physical contact with a reader — ideal for hygiene-sensitive environments, clean rooms, medical facilities, and any location where PPE or gloves make fingerprint scanning impractical. We deploy facial recognition terminals from Hikvision MinMoe DeepInMind, Dahua WizMind, and ZKTeco SpeedFace series — all capable of accurate recognition even with face masks, glasses, and hard hats. Terminals range from standard single-face recognition for one-to-one verification to multi-target recognition capable of simultaneously identifying multiple individuals in a single frame for crowd flow monitoring. All facial recognition processing occurs locally on the device — no images or recognition data are transmitted to external cloud servers.',
    points: [
      'Accurate recognition with masks, glasses, and hard hats',
      'Contact-free operation — no hygiene or infection-control issues',
      'Local processing — no cloud dependency or external image transmission',
      'Multi-target recognition for simultaneous identification of multiple individuals',
    ],
  },
  {
    icon: Shield,
    title: 'Multi-Modal Biometric Systems',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'For high-security areas requiring absolute identity certainty, multi-modal biometric systems combine two or more biometric factors — typically fingerprint plus face recognition — for double-verification before granting access. This approach is used for server rooms, data centres, cash handling areas, pharmaceutical storage, and other environments where a single biometric false acceptance, however unlikely, could result in a serious security breach. We deploy multi-modal terminals from Suprema BioStation and ZKTeco Series G3 for these applications. The system requires both biometric factors to match before granting access — a single factor match is insufficient, providing a level of assurance that card-and-PIN systems cannot match.',
    points: [
      'Fingerprint plus face recognition for two-factor biometric verification',
      'Used for server rooms, data centres, cash handling, and pharmaceutical areas',
      'Suprema BioStation and ZKTeco G3 multi-modal terminals',
      'Both factors required — one match alone never grants access',
    ],
  },
  {
    icon: Database,
    title: 'HR & Payroll Integration',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'A biometric attendance system only delivers its full operational value when attendance data flows automatically into your payroll calculation without manual re-entry. We implement integration between biometric terminals and HR and payroll systems through SFTP data export, REST API, or direct database integration depending on what your payroll platform supports. We have successfully integrated biometric systems with SAP HCM, Oracle Fusion HCM, Microsoft Dynamics 365 HR, Odoo, and the most common locally deployed payroll packages in Pakistan. Shift patterns, break allowances, overtime rules, and grace periods are configured in the biometric management software and applied automatically to the raw attendance data before export, so your payroll team receives ready-to-process figures rather than raw timestamps.',
    points: [
      'Integration with SAP, Oracle, Dynamics 365, Odoo, and local payroll',
      'Shift patterns, overtime, grace periods, and break allowances configured in system',
      'Automated export eliminating manual re-entry and transcription errors',
      'Exception reporting: late arrivals, early departures, and absences flagged automatically',
    ],
  },
  {
    icon: Activity,
    title: 'Multi-Site Centralised Control',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Organisations with employees working across multiple locations need a centralised biometric management platform that provides a single view of attendance across all sites, consistent policy enforcement, and the ability to enrol an employee once and have their credentials available at any location. Our multi-site biometric deployments use ZKTeco ZKBioSecurity, Suprema BioStar 2, or custom cloud platforms to provide this central management capability. Employee enrolment is performed once at any device or through a central enrolment station, and templates are automatically synchronised to all devices across all sites. Attendance data from all sites consolidates into a single dashboard and exports in a combined feed to payroll.',
    points: [
      'Single platform managing biometric devices across unlimited sites',
      'Enrol once — credentials automatically sync to all devices',
      'Centralised attendance dashboard with per-site and aggregate views',
      'Combined payroll export from all sites with consistent policy application',
    ],
  },
  {
    icon: Users,
    title: 'Visitor Biometric Enrolment',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'For sites where visitor access must be tightly controlled and identity-verified — including government facilities, financial institutions, industrial sites, and data centres — visitor biometric enrolment provides a level of accountability beyond a signed visitors book. Visitors are enrolled on arrival with a fingerprint or facial recognition capture against a photo ID document, issued a time-limited biometric credential, and their entry and exit are recorded biometrically. When the visitor departs, their biometric template is automatically deleted from the system after a configurable retention period, complying with your data privacy policies. The system creates an irrefutable record of who was on-site, when they arrived, which areas they accessed, and when they left.',
    points: [
      'Visitor enrolment with biometric capture against photo ID verification',
      'Time-limited biometric credentials — automatically expired on departure',
      'Automatic template deletion after configurable retention period',
      'Irrefutable visit log with precise entry, access, and exit records',
    ],
  },
]

const VENDORS = ['ZKTeco', 'Suprema', 'Hikvision', 'Anviz', 'IDEMIA', 'Hanvon', 'Dahua']

const FAQS = [
  {
    question: 'What is the difference between fingerprint and face recognition biometrics?',
    answer: 'Fingerprint recognition requires a user to place their finger on a physical sensor. It is highly accurate, fast, and cost-effective, making it the most widely deployed biometric for attendance in Pakistan. However, it is unsuitable for environments requiring PPE such as gloves, sterile environments, or where workers have worn fingerprints from manual labour. Facial recognition uses a camera and AI model to identify individuals at a distance, without physical contact, and works with PPE like masks and hard hats (modern terminals can recognise masked individuals with over 99% accuracy). Face recognition terminals are more expensive but provide a better user experience in environments where physical contact is impractical. Multi-modal systems combine both for the highest security applications.',
  },
  {
    question: 'Can fingerprint biometrics be fooled with a fake finger or printed image?',
    answer: 'Modern biometric terminals include anti-spoofing (liveness detection) technology that prevents presentation attacks using fake fingers, gelatin replicas, or photographs. Optical sensors with infrared liveness detection analyse subsurface blood flow patterns that cannot be replicated with fake materials. Capacitive sensors detect the electrical properties of live skin tissue. Multi-spectral sensors analyse both surface and subsurface fingerprint features simultaneously. All devices we deploy include liveness detection as a standard feature — we do not specify or install devices without this capability in any environment where security is a genuine requirement.',
  },
  {
    question: 'Is biometric data stored securely and compliant with privacy requirements?',
    answer: 'Yes. All biometric data in our implementations is stored as an encrypted mathematical template — a numerical representation of the biometric feature — not as the original fingerprint image or facial photograph. These templates cannot be reverse-engineered to recreate the original biometric. Storage is on-premises in your facility by default, with no transmission to cloud servers. Template databases are encrypted at rest using AES-256. Access to the biometric management server is restricted by role-based access control and all administrative actions are logged. We advise all clients to obtain employee consent, document their biometric data processing in their privacy policy, and establish a template deletion procedure for leavers — all of which we assist with during implementation.',
  },
  {
    question: 'How do we handle employees with difficult fingerprints — worn, damaged, or dry skin?',
    answer: 'A small percentage of the population — typically 2–5% — have fingerprints that are difficult to capture reliably due to dry skin, worn patterns from manual work, age-related ridge reduction, or skin conditions. We address this through several approaches: multi-spectral fingerprint sensors that image below the skin surface and work better on difficult fingers, multi-finger enrolment that captures four to ten fingers so the system can match on any available finger, fallback to PIN or card for individuals where biometric quality is genuinely insufficient, and facial recognition terminals as a parallel option for individuals with consistently poor fingerprint quality. In practice, with proper enrolment technique and high-quality sensors, fewer than 1% of users require a non-biometric fallback.',
  },
  {
    question: 'Can the biometric system work without an internet connection?',
    answer: 'Yes. All biometric terminals operate standalone — they store templates locally and make identification decisions on-device without requiring any network connectivity. Terminals continue to record attendance and control access even when the management server or internet connection is unavailable, and synchronise all records when connectivity is restored. This is important for sites with intermittent connectivity such as construction sites, remote facilities, and warehouses. The only functions that require connectivity are real-time data synchronisation to the management platform, remote configuration changes, and data export to payroll — the core attendance and access functions are always available regardless of connectivity.',
  },
  {
    question: 'How long does biometric enrolment take and how is it managed for large workforces?',
    answer: 'Individual biometric enrolment on a fingerprint terminal takes approximately 30 to 60 seconds per person, including capturing multiple fingers and a test verification. Facial recognition enrolment takes approximately 10 to 15 seconds. For large workforces — factories, industrial sites, or organisations with several hundred employees — we establish a temporary enrolment station with dedicated devices and trained enrolment staff, and schedule enrolment sessions by department or shift. A typical enrolment rate of 2–4 minutes per person including data entry means a 500-person workforce can be enrolled in 2 to 4 full working days. We provide an enrolment plan, trained enrolment staff, and quality verification for every large-scale deployment.',
  },
]

export default function BiometricsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Physical Security', href: '/services/physical-security' },
        { label: 'Biometric Systems' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[400px] opacity-[0.07]"
          style={{ background: 'radial-gradient(ellipse at top right, #7C3AED, transparent 60%)' }}
          aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: '#7C3AED' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#7C3AED' }}>Biometric Systems</span>
            </div>
            <h1 className="text-[clamp(2.1rem,4.5vw,3.7rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Biometric Security & Attendance —{' '}
              <span style={{ color: '#7C3AED' }}>Identity You Cannot Fake.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              Proxy attendance, buddy punching, shared access cards, and password sharing are problems that passwords and cards can never solve — because credentials can always be transferred between people. Biometrics cannot. A fingerprint or a face is definitively tied to a specific individual — the only way to beat it is to be present in person. Infraspine deploys biometric attendance and access control systems across Pakistan that eliminate identity fraud and provide irrefutable attendance records for payroll and compliance purposes.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-4 border"
                  style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[18px] font-black mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[10.5px] leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#7C3AED', color: '#fff' }}>
                Book a Free Consultation <ArrowRight size={14} />
              </Link>
              <Link href="/request-quote"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '1.5px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Business Case ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="h-px w-6" style={{ background: '#7C3AED' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#7C3AED' }}>Eliminating Identity Fraud</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Proxy Attendance, Buddy Punching, and Card Sharing — Eliminated at the Point of Entry
              </h2>
              <p className="text-[15px] leading-relaxed mb-5" style={{ color: '#64748B' }}>
                Manual timesheets and even punch-card systems rely entirely on honest self-reporting — which creates the conditions for systematic falsification. Buddy punching, where one employee clocks in on behalf of a colleague who has not arrived, is estimated to cost organisations between 2% and 5% of gross payroll annually. In a factory or call centre with 300 employees, that translates to a direct financial loss of hundreds of thousands of rupees per year — before considering the associated compliance exposure if labour regulations require accurate time and attendance records.
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: '#64748B' }}>
                Biometric systems solve identity fraud at the most fundamental level: every attendance transaction requires physical presence of the individual, not their card or their colleague. Fingerprints and faces cannot be shared, transferred, or delegated. The system creates an irrefutable record of exactly when each individual was present, enabling accurate payroll calculation, overtime verification, and shift pattern compliance without the need for supervisors to manually verify attendance. For organisations in regulated industries — healthcare, pharmaceuticals, finance — biometric attendance records provide the audit trail necessary to demonstrate workforce compliance to regulators without reliance on manual documentation.
              </p>
            </div>

            <div className="rounded-2xl p-7 border" style={{ background: '#F5F3FF', borderColor: '#DDD6FE' }}>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-5" style={{ color: '#7C3AED' }}>Problems Biometrics Solve</p>
              <div className="space-y-3">
                {[
                  { problem: 'Buddy punching',          impact: 'Eliminated — physical presence required for every transaction' },
                  { problem: 'Proxy attendance',         impact: 'Impossible — credential is the individual, not a card' },
                  { problem: 'Password sharing',         impact: 'Removed from the equation — no passwords in biometric systems' },
                  { problem: 'Card loss and duplication',impact: 'Irrelevant — biometric is always with the individual' },
                  { problem: 'Manual timesheet fraud',   impact: 'Replaced by tamper-proof digital records' },
                  { problem: 'Payroll calculation errors',impact: 'Eliminated by automated payroll integration' },
                ].map(({ problem, impact }) => (
                  <div key={problem} className="rounded-xl p-3.5 bg-white border" style={{ borderColor: '#DDD6FE' }}>
                    <p className="text-[12px] font-bold mb-1" style={{ color: '#6D28D9' }}>{problem}</p>
                    <p className="text-[12px]" style={{ color: '#64748B' }}>{impact}</p>
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
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Biometric System Capabilities
            </h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Fingerprint, facial recognition, multi-modal systems, and HR integration — deployed at any scale.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map(cap => (
              <div key={cap.title} className="bg-white rounded-2xl border p-7 flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: '#E2E8F0', boxShadow: '0 4px 20px rgba(10,22,40,0.06)' }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: cap.bg }}>
                  <cap.icon size={22} style={{ color: cap.color }} strokeWidth={1.5} />
                </div>
                <h3 className="text-[17px] font-black mb-3" style={{ color: '#0A1628' }}>{cap.title}</h3>
                <p className="text-[13.5px] leading-relaxed mb-5 flex-1" style={{ color: '#64748B' }}>{cap.desc}</p>
                <ul className="space-y-1.5">
                  {cap.points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-[13px]" style={{ color: '#475569' }}>
                      <CheckCircle size={13} style={{ color: cap.color, marginTop: '2px', flexShrink: 0 }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vendor strip ── */}
      <section className="py-12 bg-white border-y" style={{ borderColor: '#E2E8F0' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-7" style={{ color: '#94A3B8' }}>
            Biometric Brands & Platforms We Deploy
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {VENDORS.map(v => (
              <span key={v} className="px-3.5 py-1.5 rounded-full text-[12px] font-semibold border"
                style={{ background: '#F8FAFC', borderColor: '#E2E8F0', color: '#475569' }}>{v}</span>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        title="Biometric Systems — Frequently Asked Questions"
        subtitle="Common questions from organisations considering biometric attendance and access control."
        faqs={FAQS}
      />

      <CTABanner
        heading="Eliminate Attendance Fraud and Proxy Access."
        subheading="Book a free biometric consultation. We will assess your workforce size, integration requirements, and environment to recommend the right system for your organisation."
        primaryCTA={{ label: 'Book a Free Consultation', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
