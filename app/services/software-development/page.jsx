import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import { Code2, Smartphone, Globe, Database, Cpu, GitBranch, CheckCircle, ArrowRight, Layers, Zap } from 'lucide-react'

export const metadata = {
  title: 'Software Development Services Pakistan — Web, Mobile & Enterprise Apps | Infraspine',
  description: 'Custom software development: enterprise web applications, mobile apps (iOS & Android), API development, SaaS platforms, ERP integrations, and legacy system modernisation. Built by Infraspine.',
  alternates: { canonical: 'https://www.infraspine.com/services/software-development' },
  openGraph: {
    title: 'Software Development Services Pakistan — Web, Mobile & Enterprise Apps | Infraspine',
    description: 'Custom web and mobile software development, API integration, SaaS platforms, and legacy system modernisation from Infraspine.',
    url: 'https://www.infraspine.com/services/software-development',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Software Development Services',
  name: 'Infraspine Software Development Services',
  description: 'Custom enterprise software development including web applications, mobile apps, API development, SaaS platforms, ERP integrations, and legacy modernisation.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/software-development',
}

const STATS = [
  { value: '150+', label: 'software projects delivered',      color: '#2563EB' },
  { value: '6 wks', label: 'average MVP to production',       color: '#00C853' },
  { value: '99.5%', label: 'on-time delivery rate',           color: '#D97706' },
  { value: '3yr+',  label: 'average client relationship',     color: '#7C3AED' },
]

const PROCESS = [
  { step: '01', title: 'Discovery & Requirements',   desc: 'Stakeholder workshops, user journey mapping, and a functional specification document before a single line of code is written.' },
  { step: '02', title: 'Architecture & Design',      desc: 'System architecture, database schema design, API contract definition, and UI/UX wireframes agreed before development begins.' },
  { step: '03', title: 'Agile Development Sprints',  desc: '2-week sprints with working software demonstrated at the end of each sprint. You see real progress, not just status updates.' },
  { step: '04', title: 'QA & Testing',               desc: 'Automated unit and integration testing, manual QA, performance testing, and security scanning before any release to production.' },
  { step: '05', title: 'Deployment & CI/CD',         desc: 'Automated CI/CD pipelines, staged rollouts, database migrations, and zero-downtime deployments to cloud or on-premise environments.' },
  { step: '06', title: 'Support & Enhancement',      desc: 'Post-launch monitoring, bug fixing, performance optimisation, and iterative feature development based on real user feedback.' },
]

const CAPABILITIES = [
  {
    icon: Globe,
    title: 'Web Application Development',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'Full-stack web application development using Next.js, React, Node.js, Django, and Laravel. From customer-facing portals that handle thousands of concurrent users to complex internal business applications that replace manual processes. Every web application is built with accessibility (WCAG 2.1 AA), responsive design, Core Web Vitals optimisation, and security hardening as non-negotiable baseline requirements — not optional extras added after launch.',
    points: ['Next.js and React for fast, SEO-friendly frontends', 'Node.js, Django, or Laravel backend APIs', 'WCAG 2.1 AA accessibility and Core Web Vitals optimisation', 'PostgreSQL, MySQL, or MongoDB database design and optimisation'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'Cross-platform mobile applications using React Native that run natively on both iOS and Android from a single codebase — reducing development cost and maintenance overhead by up to 60% versus building two separate native apps. For applications requiring platform-specific features or maximum performance, we also build dedicated Swift (iOS) and Kotlin (Android) applications. App Store and Google Play submission, review optimisation, and ongoing release management are included.',
    points: ['React Native cross-platform iOS and Android development', 'Swift (iOS) and Kotlin (Android) for platform-specific builds', 'App Store and Google Play submission and optimisation', 'Push notifications, biometric auth, offline mode, and deep linking'],
  },
  {
    icon: Database,
    title: 'API Development & Integration',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'RESTful and GraphQL API development that connects your web and mobile applications, third-party services, and existing business systems into a single coherent platform. We document every API endpoint with OpenAPI (Swagger) specifications so your internal development team or future contractors can extend and maintain the system without guessing. Third-party integrations: payment gateways (Stripe, JazzCash, EasyPaisa), CRM, ERP, accounting, and logistics APIs.',
    points: ['RESTful and GraphQL API design with OpenAPI documentation', 'OAuth 2.0 / JWT authentication and role-based access control', 'Payment gateway integration: Stripe, JazzCash, EasyPaisa, HBL', 'CRM, ERP, accounting, and logistics system integrations'],
  },
  {
    icon: Layers,
    title: 'SaaS Platform Development',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Multi-tenant SaaS platform development from initial MVP through to scaled production systems serving thousands of paying customers. We architect for multi-tenancy from day one — data isolation, tenant-level customisation, subdomain routing, and usage-based billing integration. Experience with SaaS products in HR, accounting, field service management, healthcare, and logistics verticals across Pakistan and international markets.',
    points: ['Multi-tenant architecture with data isolation and customisation', 'Subscription billing via Stripe or custom payment integration', 'Tenant admin portals and self-service onboarding flows', 'Usage analytics dashboard and feature flag management'],
  },
  {
    icon: Cpu,
    title: 'Legacy System Modernisation',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Thousands of Pakistani businesses run critical operations on legacy software — Access databases, VB6 applications, AS/400 systems, or outdated PHP monoliths — that are expensive to maintain, impossible to scale, and increasingly a security liability. We assess your legacy system, document the business logic it encodes (often poorly documented), and rebuild it as a modern, cloud-native application with the same workflows your team already knows, eliminating the organisational resistance to change.',
    points: ['Legacy code audit and business logic documentation', 'Phased migration with parallel running to reduce risk', 'Data migration from legacy databases with full validation', 'Retraining and adoption support for existing users'],
  },
  {
    icon: GitBranch,
    title: 'DevOps & Cloud-Native Development',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Software that cannot be deployed reliably and frequently becomes a bottleneck. Infraspine builds DevOps practices into every project from the start: Git-based version control, automated CI/CD pipelines (GitHub Actions, GitLab CI, Azure DevOps), containerised deployment with Docker and Kubernetes, infrastructure-as-code with Terraform, and comprehensive application monitoring with Prometheus, Grafana, and Sentry. Your team can deploy to production confidently, multiple times per day.',
    points: ['GitHub Actions, GitLab CI, or Azure DevOps CI/CD pipelines', 'Docker containerisation and Kubernetes orchestration', 'Infrastructure-as-code with Terraform and Ansible', 'Application monitoring: Prometheus, Grafana, Sentry'],
  },
]

const FAQS = [
  {
    question: 'How do you estimate the cost and timeline of a custom software project?',
    answer: 'We begin every project with a paid discovery and scoping engagement (typically 1–2 weeks) that produces a functional specification document, system architecture diagram, and a detailed project estimate broken down by feature and sprint. This upfront investment eliminates the most common source of budget overruns — vague or changing requirements. Fixed-price contracts are available for well-defined projects; time-and-materials is better for projects where scope is likely to evolve.',
  },
  {
    question: 'Who owns the source code after the project is complete?',
    answer: 'You do. Full intellectual property transfer to the client is standard in all our software development contracts. At project completion, we transfer all source code repositories, database schemas, infrastructure-as-code scripts, and documentation to accounts you control. We do not retain any rights to resell, reuse, or build other products on top of your codebase.',
  },
  {
    question: 'How do you handle changes to requirements during development?',
    answer: 'Requirement changes are normal and expected. Our Agile process handles them through a formal change request process: the change is scoped, its impact on timeline and cost is estimated, and it is added to the sprint backlog once approved. We do not let scope creep accumulate invisibly — every change is documented and agreed before it enters development. This protects both you and our team from the surprises that sink software projects.',
  },
  {
    question: 'Can you take over development of an existing project built by another team?',
    answer: 'Yes, we regularly inherit partially built or abandoned software projects. We start with a code audit that assesses code quality, test coverage, security vulnerabilities, documentation gaps, and technical debt. You receive an honest report on the state of what you have and a recommended path forward — which may be continuing development, refactoring specific components, or in some cases a rebuild if the existing codebase is beyond economical repair.',
  },
  {
    question: 'Do you provide hosting and infrastructure for the software you build?',
    answer: 'Yes. We can host and manage the infrastructure for applications we build on AWS, Azure, or Google Cloud, including server provisioning, database management, SSL certificates, CDN configuration, automated backups, and 24/7 uptime monitoring. Alternatively, if you have an existing cloud account or on-premise infrastructure, we can deploy to your environment and hand over operational control to your team. Both options are equally supported.',
  },
  {
    question: 'What happens if there are bugs after the software is launched?',
    answer: 'All projects include a warranty period (typically 90 days post-launch) during which we fix any bugs at no additional charge. After the warranty period, we offer maintenance retainer packages that include bug fixes, security patches, minor enhancements, and priority response. For critical production issues, we provide emergency support response regardless of whether you have an active retainer — we will not leave a client with a broken production system.',
  },
]

export default function SoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Software Development' },
      ]} />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-10 sm:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Software Development</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Custom Software That Solves<br />
              <span style={{ color: '#00C853' }}>Real Business Problems.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              Off-the-shelf software forces your business to adapt to the software. Custom software adapts to your business. Infraspine builds enterprise web applications, mobile apps, SaaS platforms, API integrations, and modernised legacy systems — all with transparent Agile delivery, full source code ownership, and ongoing support from the same team that built it.
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
              Discuss Your Project <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Development process */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>How We Work</span>
            </div>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Our Software Delivery Process
            </h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Six phases from discovery to post-launch support — built to eliminate the surprises that sink most software projects.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS.map(({ step, title, desc }) => (
              <div key={step} className="rounded-2xl p-6 border" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
                <div className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: '#00C853' }}>{step}</div>
                <h3 className="text-[16px] font-black mb-2" style={{ color: '#0A1628' }}>{title}</h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-black mb-4" style={{ color: '#0A1628' }}>What We Build</h2>
            <p className="text-[16px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Six development disciplines covering the full range of enterprise software requirements.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map(cap => (
              <div key={cap.title} className="bg-white rounded-2xl border p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: '#E2E8F0', boxShadow: '0 4px 20px rgba(10,22,40,0.06)' }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: cap.bg }}>
                  <cap.icon size={22} style={{ color: cap.color }} strokeWidth={1.5} />
                </div>
                <h3 className="text-[17px] font-black mb-3" style={{ color: '#0A1628' }}>{cap.title}</h3>
                <p className="text-[13.5px] leading-relaxed mb-5" style={{ color: '#64748B' }}>{cap.desc}</p>
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

      {/* Tech stack */}
      <section className="py-12 bg-white border-y" style={{ borderColor: '#E2E8F0' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-7" style={{ color: '#94A3B8' }}>Technologies & Frameworks</p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {['Next.js', 'React', 'React Native', 'Node.js', 'Python / Django', 'Laravel / PHP', 'Swift', 'Kotlin', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Terraform', 'GitHub Actions'].map(t => (
              <span key={t} className="px-3.5 py-1.5 rounded-full text-[12px] font-semibold border"
                style={{ background: '#F8FAFC', borderColor: '#E2E8F0', color: '#475569' }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        title="Software Development — Frequently Asked Questions"
        subtitle="Honest answers to the questions every client asks before commissioning custom software."
        faqs={FAQS}
      />

      <CTABanner
        heading="Ready to Build Something That Actually Works?"
        subheading="Book a free 45-minute discovery call. Tell us your business problem and we will outline a solution — no pitch, no pressure."
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
