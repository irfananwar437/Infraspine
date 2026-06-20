import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  BookOpen, Award, Users, Clock, Monitor, Shield,
  CheckCircle, ArrowRight, Cpu, Cloud, Network, Zap,
} from 'lucide-react'

export const metadata = {
  title: 'IT Training Courses Pakistan — Certified IT Programs | Infraspine',
  description: 'Infraspine IT Training Academy: Microsoft, Cisco, cybersecurity, cloud, networking, and AI automation courses. Instructor-led, lab-based, and corporate batch programs in Karachi.',
  alternates: { canonical: 'https://www.infraspine.com/trainings' },
  openGraph: {
    title: 'IT Training Courses Pakistan — Certified IT Programs | Infraspine',
    description: 'Microsoft, Cisco, cybersecurity, cloud, and AI automation training programs. Instructor-led with hands-on labs, corporate batches, and certification exam prep.',
    url: 'https://www.infraspine.com/trainings',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Infraspine IT Training Academy',
  description: 'IT training center offering Microsoft, Cisco, cybersecurity, cloud, networking, and AI automation courses with certification exam preparation.',
  url: 'https://www.infraspine.com/trainings',
  address: { '@type': 'PostalAddress', addressLocality: 'Karachi', addressCountry: 'PK' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IT Training Programs',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Microsoft Azure Fundamentals (AZ-900)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Cisco CCNA Network Associate' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'CompTIA Security+ Certification' } },
    ],
  },
}

const TRACKS = [
  {
    icon: Cloud,
    title: 'Microsoft & Cloud Certifications',
    color: '#2563EB',
    bg: '#EFF6FF',
    courses: ['AZ-900: Azure Fundamentals', 'AZ-104: Azure Administrator', 'MS-900: Microsoft 365 Fundamentals', 'SC-900: Security Fundamentals', 'DP-900: Data Fundamentals'],
    desc: 'Microsoft-aligned curriculum with official study materials, practice labs via Azure sandbox environments, and exam voucher guidance. All instructors are Microsoft Certified.',
  },
  {
    icon: Network,
    title: 'Cisco Networking Tracks',
    color: '#D97706',
    bg: '#FFFBEB',
    courses: ['CCNA 200-301 Full Program', 'CCNP Enterprise (ENCOR)', 'Network Design Fundamentals', 'Switching & Routing Labs', 'Packet Tracer Practicals'],
    desc: 'Hands-on Cisco networking with Packet Tracer and real-lab equipment. From CCNA fundamentals through CCNP-level enterprise network architecture and design.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity Programs',
    color: '#DC2626',
    bg: '#FEF2F2',
    courses: ['CompTIA Security+', 'Ethical Hacking (CEH Prep)', 'Network Security Fundamentals', 'Penetration Testing Basics', 'Security Operations (SOC L1)'],
    desc: 'Cybersecurity training from defensive fundamentals through ethical hacking and SOC analyst preparation. Real-world attack simulations in isolated lab environments.',
  },
  {
    icon: Cpu,
    title: 'AI & Automation for IT',
    color: '#7C3AED',
    bg: '#F5F3FF',
    courses: ['n8n Workflow Automation', 'AI Tools for Business (ChatGPT, Claude)', 'Python for IT Automation', 'WhatsApp Bot Development', 'Introduction to LLM APIs'],
    desc: 'Practical AI and automation skills for IT professionals. Build real automation workflows, integrate AI into business processes, and develop basic bot applications.',
  },
  {
    icon: Monitor,
    title: 'Server & Infrastructure Administration',
    color: '#0891B2',
    bg: '#ECFEFF',
    courses: ['Windows Server 2022 Administration', 'Linux System Administration', 'Active Directory & Group Policy', 'VMware Virtualization', 'Hyper-V Administration'],
    desc: 'Full server administration training covering Windows Server, Linux, virtualization platforms, and enterprise directory services with hands-on lab environments.',
  },
  {
    icon: BookOpen,
    title: 'Corporate IT Upskilling Programs',
    color: '#00C853',
    bg: '#F0FDF4',
    courses: ['Custom corporate curriculum design', 'On-site or remote delivery', 'Batch programs for 5–50 staff', 'Pre/post assessment testing', 'Certificate of completion issuance'],
    desc: 'Tailored corporate training programs designed around your team\'s current skill gaps and your organization\'s technology stack. Delivered at your office or our training center.',
  },
]

const STATS = [
  { value: '1,200+', label: 'Students Trained',     color: '#00C853' },
  { value: '95%',    label: 'Exam Pass Rate',        color: '#2563EB' },
  { value: '20+',    label: 'Active Courses',        color: '#7C3AED' },
  { value: '18',     label: 'Corporate Clients',     color: '#D97706' },
]

const FAQS = [
  {
    question: 'Are your IT training programs affiliated with Microsoft or Cisco?',
    answer: 'Our instructors hold active Microsoft Certified and Cisco Certified (CCNA/CCNP) credentials. We follow official curriculum guidelines and use authorized study materials. For Microsoft courses, we can provide exam discount vouchers. We are not an official Microsoft Learning Partner but follow partner-aligned delivery standards.',
  },
  {
    question: 'Do you offer online or remote training options?',
    answer: 'Yes. All programs are available in three formats: (1) in-person at our Karachi training center, (2) live online via Zoom with shared lab environments, and (3) blended — a combination of recorded lessons and live instructor sessions. Corporate clients can book on-site delivery at their premises.',
  },
  {
    question: 'What is the batch size for standard programs?',
    answer: 'Standard batch sizes are 8–15 students to ensure each participant gets sufficient lab time and instructor attention. Corporate programs can be customized for larger groups with additional instructors and lab stations.',
  },
  {
    question: 'Do students receive a certificate upon completion?',
    answer: 'Yes. All students receive an Infraspine IT Training Academy certificate of completion. This is separate from the official vendor certification exams (Microsoft, Cisco, CompTIA). Our certificate indicates successful completion of the course with a passing assessment score.',
  },
  {
    question: 'Can you design a custom training program for our company?',
    answer: 'Absolutely. Corporate training programs begin with a skills gap assessment. We then design a curriculum specific to your tech stack, team level, and learning objectives. Delivery is scheduled around your operational requirements, either weekday batches or weekend intensives.',
  },
]

export default function TrainingsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'IT Training Academy' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="h-px w-6" style={{ background: '#00C853' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>IT Training Academy</span>
              </div>
              <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
                Build Real IT Skills.<br />
                <span style={{ color: '#00C853' }}>Earn Vendor Certifications.</span>
              </h1>
              <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
                Infraspine IT Training Academy offers instructor-led, lab-based programs in Microsoft, Cisco, cybersecurity, cloud, and AI automation. With a 95% exam pass rate and 1,200+ students trained, we are Karachi&apos;s leading technical IT training center for individuals and corporate teams.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                  style={{ background: '#00C853', color: '#0A1628' }}>
                  Enrol in a Course <ArrowRight size={14} />
                </Link>
                <Link href="/services/it-trainings"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold border"
                  style={{ borderColor: '#ffffff22', color: '#CBD5E1' }}>
                  View All Courses
                </Link>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map(s => (
                <div key={s.label} className="rounded-2xl p-5 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[28px] font-black mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[11px] font-semibold" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Training Tracks ── */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Training Tracks & Programs
            </h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Six specialised training tracks covering every major area of modern enterprise IT — from networking to AI automation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRACKS.map(track => (
              <div key={track.title} className="bg-white rounded-2xl border p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: '#E2E8F0', boxShadow: '0 4px 20px rgba(10,22,40,0.06)' }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: track.bg }}>
                  <track.icon size={22} style={{ color: track.color }} strokeWidth={1.5} />
                </div>
                <h3 className="text-[17px] font-black mb-2" style={{ color: '#0A1628' }}>{track.title}</h3>
                <p className="text-[13px] leading-relaxed mb-5" style={{ color: '#64748B' }}>{track.desc}</p>
                <ul className="space-y-1.5">
                  {track.courses.map(c => (
                    <li key={c} className="flex items-start gap-2 text-[13px]" style={{ color: '#475569' }}>
                      <CheckCircle size={13} style={{ color: track.color, marginTop: '2px', flexShrink: 0 }} />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Train with Infraspine ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-6" style={{ color: '#0A1628' }}>
                Why Students Choose Infraspine Training Academy
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Infraspine Training Academy is run by the same engineers who build enterprise IT infrastructure for real clients. This means our curriculum is grounded in real-world scenarios — not textbook theory. Students leave with skills they can apply on day one. Our pass rates speak for themselves: 95% of our students pass their first certification attempt.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Monitor,  color: '#2563EB', text: 'Dedicated lab environments per student during practice sessions'     },
                  { icon: Users,    color: '#00C853', text: 'Small batches of 8–15 students for individual attention'             },
                  { icon: Award,    color: '#7C3AED', text: 'Certificate of completion issued for every course'                   },
                  { icon: Clock,    color: '#D97706', text: 'Flexible schedules: weekday, evening, and weekend batches'          },
                  { icon: Zap,      color: '#DC2626', text: 'Corporate programs delivered on-site or remotely'                   },
                ].map(({ icon: Icon, color, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}15` }}>
                      <Icon size={16} style={{ color }} />
                    </div>
                    <span className="text-[14px] font-semibold" style={{ color: '#374151' }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enrollment CTA card */}
            <div className="rounded-2xl p-8 border" style={{ background: '#071a37', borderColor: '#17355f' }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-6" style={{ color: '#64748B' }}>Upcoming Intakes</p>
              <div className="space-y-4 mb-8">
                {[
                  { course: 'CCNA 200-301',           date: 'Next batch: Monthly',  seats: '4 seats left' },
                  { course: 'AZ-900 Azure Fundamentals', date: 'Next batch: Bi-monthly', seats: '6 seats left' },
                  { course: 'CompTIA Security+',       date: 'Next batch: Monthly',  seats: '3 seats left' },
                  { course: 'n8n Automation Bootcamp', date: 'Next batch: Quarterly', seats: '8 seats left' },
                ].map(({ course, date, seats }) => (
                  <div key={course} className="flex items-start justify-between py-3.5 border-b" style={{ borderColor: '#17355f' }}>
                    <div>
                      <p className="text-[13px] font-bold text-white">{course}</p>
                      <p className="text-[11px]" style={{ color: '#64748B' }}>{date}</p>
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full" style={{ background: '#F0FDF4', color: '#00C853' }}>
                      {seats}
                    </span>
                  </div>
                ))}
              </div>
              <Link href="/contact-us"
                className="block w-full py-3 rounded-xl text-[14px] font-bold text-center transition-all hover:opacity-90"
                style={{ background: '#00C853', color: '#0A1628' }}>
                Reserve Your Seat
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion
        title="IT Training — Frequently Asked Questions"
        subtitle="Everything you need to know before enrolling in a program."
        faqs={FAQS}
      />

      <CTABanner
        heading="Ready to Advance Your IT Career or Upskill Your Team?"
        subheading="Speak with our training coordinator to find the right program, batch schedule, and format for your needs."
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
