import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import { BookOpen, Award, Users, Monitor, ShieldCheck, Cloud, Code2, CheckCircle, ArrowRight, Calendar } from 'lucide-react'

export const metadata = {
  title: 'IT Training Courses Pakistan — Microsoft, Cisco, AWS, Cybersecurity & More | Infraspine',
  description: 'Professional IT training: Microsoft Azure, Microsoft 365, Cisco networking, AWS, cybersecurity certifications, ethical hacking, Python, and Power Platform. Instructor-led and online. Infraspine Academy.',
  alternates: { canonical: 'https://www.infraspine.com/services/it-trainings' },
  openGraph: {
    title: 'IT Training Courses Pakistan — Microsoft, Cisco, AWS, Cybersecurity & More | Infraspine',
    description: 'Microsoft, Cisco, AWS, cybersecurity, and software development training. Instructor-led and online from Infraspine Academy.',
    url: 'https://www.infraspine.com/services/it-trainings',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Infraspine IT Academy',
  description: 'Professional IT training for Microsoft, Cisco, AWS, cybersecurity, and software development certifications.',
  url: 'https://www.infraspine.com/services/it-trainings',
  parentOrganization: { '@id': 'https://www.infraspine.com/#organization' },
}

const STATS = [
  { value: '2,500+', label: 'professionals trained',           color: '#2563EB' },
  { value: '94%',    label: 'exam first-pass rate',            color: '#00C853' },
  { value: '40+',    label: 'active courses available',        color: '#D97706' },
  { value: '15+',    label: 'years of training experience',    color: '#7C3AED' },
]

const TRACKS = [
  {
    icon: Cloud,
    title: 'Microsoft Azure & Microsoft 365',
    color: '#0078D4',
    bg: '#EFF6FF',
    exams: ['AZ-900', 'AZ-104', 'AZ-305', 'MS-900', 'MS-102', 'MD-102'],
    desc: 'From foundational Azure cloud concepts through to advanced enterprise administration and architecture. Our Microsoft training track covers the complete Azure Administrator (AZ-104) and Azure Solutions Architect (AZ-305) paths, plus Microsoft 365 administration for organisations running Exchange Online, SharePoint, Teams, and Intune. All courses include hands-on lab environments with real Azure subscriptions — not just slides and theory. Exam vouchers available on request.',
    points: ['Azure Fundamentals to Expert level (AZ-900 through AZ-305)', 'Microsoft 365 Administrator certification (MS-102)', 'Hands-on lab environments with real Azure subscription access', 'Exam preparation with practice tests and mock exams'],
  },
  {
    icon: Monitor,
    title: 'Cisco Networking (CCNA & CCNP)',
    color: '#1BA0D7',
    bg: '#F0F9FF',
    exams: ['CCNA 200-301', 'CCNP ENCOR', 'CCNP ENARSI', 'DevNet Associate'],
    desc: 'Industry-recognised Cisco networking certifications that prepare candidates for real-world network engineering roles. Our CCNA (200-301) programme covers switching, routing, IP connectivity, IP services, network automation, and security fundamentals across 80 hours of instructor-led training and lab time. CCNP Enterprise builds advanced skills in dual-stack IPv4/IPv6, wireless, SD-WAN, and network programmability for engineers targeting senior roles.',
    points: ['CCNA 200-301 (80 hours instructor-led training plus labs)', 'CCNP Enterprise ENCOR and ENARSI advanced routing', 'Physical and Packet Tracer lab environments', 'Exam registration assistance and preparation support'],
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity & Ethical Hacking',
    color: '#DC2626',
    bg: '#FEF2F2',
    exams: ['CompTIA Security+', 'CEH v12', 'eJPT', 'OSCP prep'],
    desc: 'Cybersecurity training from foundational Security+ through to hands-on ethical hacking and penetration testing. The Certified Ethical Hacker (CEH v12) course covers the attack lifecycle from reconnaissance through to post-exploitation and reporting, using EC-Council methodology. Practical hacking labs using dedicated vulnerable machines — not theoretical exercises. For engineers pursuing OSCP, we offer a dedicated preparatory programme using Hack The Box and TryHackMe environments.',
    points: ['CompTIA Security+ for cybersecurity fundamentals', 'CEH v12 Certified Ethical Hacker (EC-Council accredited)', 'Practical penetration testing labs with vulnerable machines', 'OSCP preparation programme with HTB and THM lab access'],
  },
  {
    icon: Cloud,
    title: 'AWS Cloud Practitioner to Solutions Architect',
    color: '#FF9900',
    bg: '#FFFBEB',
    exams: ['CLF-C02', 'SAA-C03', 'DVA-C02', 'SOA-C02'],
    desc: 'Amazon Web Services certification training from Cloud Practitioner foundation through to Solutions Architect Associate and Professional. All AWS training includes dedicated hands-on lab time in live AWS accounts — covering EC2, S3, VPC, RDS, Lambda, IAM, CloudFormation, and cost management. Our Cloud Practitioner (CLF-C02) is ideal for non-technical professionals who need to understand cloud concepts. Solutions Architect (SAA-C03) prepares engineers for cloud design roles.',
    points: ['AWS Cloud Practitioner (CLF-C02) for all roles', 'AWS Solutions Architect Associate (SAA-C03)', 'Hands-on labs in live AWS accounts (not simulators)', 'Developer and SysOps Associate tracks also available'],
  },
  {
    icon: Code2,
    title: 'Software Development & Power Platform',
    color: '#7C3AED',
    bg: '#F5F3FF',
    exams: ['PL-900', 'PL-100', 'Python PCEP/PCAP', 'JavaScript ES2024'],
    desc: 'Practical software development and low-code automation training for developers, IT professionals, and business analysts. Python programming from complete beginner through to PCAP certification covers data types, OOP, file I/O, modules, and error handling with real-world projects. Microsoft Power Platform training (Power Apps, Power Automate, Power BI) enables non-developers to build business applications and automation without writing code — increasingly a required skill for business analysts and operations staff.',
    points: ['Python programming from beginner to PCAP certification', 'JavaScript and web development fundamentals', 'Microsoft Power Platform: Power Apps, Power Automate, Power BI', 'Git version control and DevOps fundamentals'],
  },
  {
    icon: Users,
    title: 'Corporate & Team Training',
    color: '#0891B2',
    bg: '#ECFEFF',
    exams: ['Custom curriculum', 'On-site delivery', 'Group enrolments'],
    desc: 'Customised training programmes delivered on-site at your premises or as private online cohorts for corporate teams. We design bespoke curriculum aligned to your specific technology stack and organisational goals — not generic off-the-shelf content. Group pricing for 5+ employees, flexible scheduling around your business calendar, and post-training competency assessments to measure knowledge transfer. Popular programmes: security awareness, Microsoft 365 user adoption, Power Platform for business teams.',
    points: ['Bespoke curriculum design aligned to your technology stack', 'On-site instructor-led delivery at your office location', 'Group pricing from 5 employees, volume discounts available', 'Post-training assessments and competency reports per employee'],
  },
]

const UPCOMING = [
  { course: 'AZ-104 Microsoft Azure Administrator', dates: 'Saturdays — 4-week programme', mode: 'Online + Labs', seats: '8 remaining' },
  { course: 'CCNA 200-301 — Cohort 12',            dates: 'Weekday evenings — 10 weeks',  mode: 'In-person Karachi', seats: '5 remaining' },
  { course: 'CEH v12 Ethical Hacking',              dates: 'Saturdays — 6-week programme', mode: 'Online + Labs', seats: '12 remaining' },
  { course: 'AWS Solutions Architect SAA-C03',       dates: 'Weekday evenings — 8 weeks',   mode: 'Online + Labs', seats: '10 remaining' },
]

const FAQS = [
  {
    question: 'Are your training courses officially accredited or vendor-authorised?',
    answer: 'Our Microsoft training is delivered through Microsoft Partner Network training content. Our Cisco training follows official Cisco curriculum and is delivered by CCNP/CCIE certified instructors. Our EC-Council courses (CEH) are delivered under EC-Council Authorised Training Partner status. AWS training uses AWS-official curriculum and practice labs. All certifications you earn after completing our training are vendor-issued and globally recognised.',
  },
  {
    question: 'What is the difference between instructor-led training and self-paced learning?',
    answer: 'Instructor-led training (ILT) runs on a fixed schedule with a live instructor, real-time Q&A, and a structured peer learning environment — completion rates are significantly higher than self-paced. Self-paced (on-demand) gives you recorded content to study at your own pace, accessible 24/7. Infraspine primarily delivers instructor-led training because exam pass rates are higher and the structured schedule helps working professionals stay accountable. Recordings of sessions are provided to enrolled students for revision.',
  },
  {
    question: 'Do you provide exam vouchers with the training?',
    answer: 'Exam vouchers can be bundled with any course at a discounted rate — ask when enquiring. We work with Pearson VUE and Prometric testing centres across Pakistan. If you do not pass the exam on the first attempt, our exam preparation guarantee (on selected courses) entitles you to one free course re-take within 6 months.',
  },
  {
    question: 'Can you train our entire IT team as a group?',
    answer: 'Yes. Corporate group training is one of our most popular offerings. We design a custom programme aligned to your technology stack and team skill levels, deliver it at your premises or as a private online cohort, and provide post-training competency assessments and individual skills gap reports. Pricing for groups of 5+ is significantly lower than individual enrolment. We can also design a multi-module upskilling programme spanning 3–6 months for large teams.',
  },
  {
    question: 'What experience level is needed to start your cybersecurity or networking courses?',
    answer: 'CCNA: we recommend at least 6 months of IT experience and a basic understanding of networking concepts (IP addresses, basic routing). CompTIA Security+: basic IT literacy and 1+ years of IT experience recommended. CEH v12: requires Security+ level knowledge or equivalent experience. Azure and AWS fundamentals courses (AZ-900, CLF-C02) have no prerequisites — they are designed for IT professionals and business users with no prior cloud experience.',
  },
  {
    question: 'Is training delivered in English, Urdu, or both?',
    answer: 'All Infraspine training is delivered in English, as certification exams are in English and working in the IT industry requires English proficiency. However, instructors naturally incorporate Urdu explanations for complex technical concepts where it helps understanding. Course materials, lab guides, and documentation are in English. We find this bilingual delivery approach significantly improves both comprehension and exam readiness for our Pakistani students.',
  },
]

export default function ItTrainingsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'IT Trainings' },
      ]} />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>IT Academy</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Industry Certifications.<br />
              <span style={{ color: '#00C853' }}>Practical Skills. Real Results.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              Infraspine Academy trains IT professionals, fresh graduates, and corporate teams on the technology certifications that employers actually value — Microsoft Azure, Cisco networking, AWS, cybersecurity, and software development. Instructor-led training with real lab environments, not just slides. A 94% first-time exam pass rate across all programmes.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-3 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[17px] font-black mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[10.5px] leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <Link href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
              style={{ background: '#00C853', color: '#0A1628' }}>
              Enquire About Upcoming Batches <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming batches */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-[clamp(1.4rem,2.5vw,2rem)] font-black" style={{ color: '#0A1628' }}>Upcoming Course Batches</h2>
              <p className="text-[13.5px] mt-1" style={{ color: '#64748B' }}>Contact us to confirm current dates and availability.</p>
            </div>
            <Calendar size={24} style={{ color: '#2563EB' }} />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {UPCOMING.map(({ course, dates, mode, seats }) => (
              <div key={course} className="rounded-xl p-5 border flex items-start justify-between gap-4" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
                <div>
                  <p className="text-[14px] font-black mb-1" style={{ color: '#0A1628' }}>{course}</p>
                  <p className="text-[13px] mb-1.5" style={{ color: '#64748B' }}>{dates} · {mode}</p>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full" style={{ background: '#F0FDF4', color: '#00C853' }}>{seats}</span>
                </div>
                <Link href="/contact-us" className="flex-shrink-0 text-[12px] font-bold px-4 py-2 rounded-xl border transition-all hover:opacity-80"
                  style={{ borderColor: '#2563EB', color: '#2563EB' }}>Enrol</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training tracks */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black mb-4" style={{ color: '#0A1628' }}>Training Tracks</h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Six certification tracks from cloud and networking through to cybersecurity, software development, and corporate team training.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRACKS.map(track => (
              <div key={track.title} className="bg-white rounded-2xl border p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: '#E2E8F0', boxShadow: '0 4px 20px rgba(10,22,40,0.06)' }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: track.bg }}>
                  <track.icon size={22} style={{ color: track.color }} strokeWidth={1.5} />
                </div>
                <h3 className="text-[16px] font-black mb-2" style={{ color: '#0A1628' }}>{track.title}</h3>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {track.exams.map(e => (
                    <span key={e} className="text-[10.5px] font-bold px-2 py-0.5 rounded-full border"
                      style={{ background: track.bg, borderColor: track.color + '40', color: track.color }}>{e}</span>
                  ))}
                </div>
                <p className="text-[13px] leading-relaxed mb-4" style={{ color: '#64748B' }}>{track.desc}</p>
                <ul className="space-y-1.5">
                  {track.points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-[12px]" style={{ color: '#475569' }}>
                      <CheckCircle size={12} style={{ color: track.color, marginTop: '2px', flexShrink: 0 }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        title="IT Training — Frequently Asked Questions"
        subtitle="Answers to the questions candidates and organisations ask before enrolling."
        faqs={FAQS}
      />

      <CTABanner
        heading="Invest in Your Team's Skills. See the Return in Weeks."
        subheading="Speak to our training team about upcoming batches, corporate programmes, or a custom training needs assessment for your organisation."
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
