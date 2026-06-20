import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Smartphone, Monitor, Code, Layers, Store, Settings,
  ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'Mobile App Development Pakistan — iOS, Android & React Native Apps | Infraspine',
  description: 'Infraspine Mobile App Development: React Native, iOS Swift and Android Kotlin development in Pakistan. 50+ apps delivered, 4.8-star average App Store rating, cross-platform efficiency with native performance.',
  alternates: { canonical: 'https://www.infraspine.com/services/software-development/mobile-apps' },
  openGraph: {
    title: 'Mobile App Development Pakistan — iOS, Android & React Native Apps | Infraspine',
    description: 'Professional mobile app development in Pakistan — React Native, iOS, and Android. 50+ apps delivered, 4.8-star App Store rating, post-launch support included.',
    url: 'https://www.infraspine.com/services/software-development/mobile-apps',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Mobile App Development',
  name: 'Infraspine Mobile App Development',
  description: 'Professional mobile app development covering React Native cross-platform, iOS Swift, Android Kotlin, UI/UX design, App Store submission, and post-launch support.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/software-development/mobile-apps',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '50+', label: 'Apps Delivered', color: '#7C3AED' },
  { value: 'iOS & Android', label: 'Both Platforms', color: '#00C853' },
  { value: '4.8★', label: 'Avg App Store Rating', color: '#D97706' },
  { value: 'React Native', label: 'Primary Stack', color: '#2563EB' },
]

const CAPABILITIES = [
  {
    icon: Smartphone,
    title: 'React Native Cross-Platform Development',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'React Native is our primary mobile development framework for the majority of client projects because it delivers the best balance of development efficiency, performance, and maintainability. A single React Native codebase targets both iOS and Android simultaneously — reducing development time and ongoing maintenance cost by 40–60% compared to building separate native apps. React Native renders to native UI components (not WebView), delivering genuine native performance and access to platform-specific APIs. For most business applications, React Native is indistinguishable from a fully native app.',
    points: [
      'Single codebase targeting both iOS and Android simultaneously',
      'Native UI rendering — not WebView-based hybrid performance',
      '40–60% development cost reduction versus separate native apps',
      'Access to native device APIs through Expo and community libraries',
    ],
  },
  {
    icon: Monitor,
    title: 'iOS (Swift) Native Development',
    color: '#2563EB',
    bg: '#EFF6FF',
    desc: 'When an application requires the absolute best iOS performance, deepest Apple platform integration, or cutting-edge iOS-exclusive features — ARKit, Core ML, HealthKit, HomeKit, Apple Watch integration — native Swift development is the right approach. Our iOS engineers write idiomatic Swift using modern concurrency (async/await), SwiftUI for new interfaces alongside UIKit for complex custom views, and follow Apple&apos;s Human Interface Guidelines throughout. We have experience shipping applications through the App Store review process and understand the requirements and edge cases that can delay approval.',
    points: [
      'Swift with modern concurrency and SwiftUI development',
      'Deep Apple platform integration (ARKit, Core ML, HealthKit)',
      'Apple Human Interface Guidelines compliance throughout',
      'App Store review process expertise — fast, successful submissions',
    ],
  },
  {
    icon: Code,
    title: 'Android (Kotlin) Native Development',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'Android&apos;s 71% global mobile market share makes it impossible to ignore, and its diversity of devices, screen sizes, and Android versions requires engineering discipline to handle correctly. Our Android engineers write in Kotlin with Jetpack Compose for modern UI, Coroutines for asynchronous operations, and Architecture Components (ViewModel, Room, WorkManager) for maintainable app structure. We handle the Android fragmentation challenge systematically — defining a minimum API level, testing across device tiers, and implementing adaptive layouts that work from budget handsets to foldables.',
    points: [
      'Kotlin with Jetpack Compose and Architecture Components',
      'Coroutines for non-blocking async operations throughout',
      'Adaptive layouts tested across screen sizes and densities',
      'Google Play Store submission with ASO (App Store Optimisation)',
    ],
  },
  {
    icon: Layers,
    title: 'UI/UX Design & Prototyping',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'Great mobile apps begin with great design. Our design process starts with user research and persona definition, moves to information architecture and user flow mapping, then produces interactive Figma prototypes that simulate the real app experience before a line of code is written. This prototype-first approach means stakeholders can experience the app on their own device, provide feedback on navigation and interaction patterns, and approve the design with confidence — eliminating the expensive rebuild cycles that come from discovering UX problems late in development.',
    points: [
      'User research, persona definition, and user flow mapping',
      'Interactive Figma prototypes testable on real devices',
      'Platform-specific design following iOS HIG and Material Design',
      'Accessibility compliance (WCAG 2.1 AA) integrated from design phase',
    ],
  },
  {
    icon: Store,
    title: 'App Store Submission & Optimisation',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'Getting an app into the App Store and Google Play is not automatic — and App Store Optimisation (ASO) determines whether anyone finds it once it is there. We handle the complete submission process: App Store Connect and Google Play Console account setup, metadata preparation (descriptions, keywords, screenshots), content rating questionnaires, privacy policy requirements, age rating configuration, and the technical build and signing process. Post-launch, we apply ASO practices to improve your app&apos;s search ranking and conversion rate in both stores.',
    points: [
      'Complete App Store Connect and Google Play Console submission',
      'Metadata, screenshots, and preview video preparation',
      'App Store review process management and resubmission if needed',
      'Post-launch ASO keyword and conversion rate optimisation',
    ],
  },
  {
    icon: Settings,
    title: 'Post-Launch Support & Updates',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'An app launch is the beginning of the product lifecycle, not the end. iOS and Android release major OS updates annually, and each update can break previously working functionality, require new privacy permission declarations, or create new opportunities to use platform capabilities. Our post-launch support service covers OS compatibility updates, bug fix releases, feature enhancement sprints, App Store / Google Play policy compliance updates, and performance monitoring through Crashlytics and other production observability tools. We offer both retainer-based ongoing support and project-based update engagements.',
    points: [
      'Annual iOS and Android OS compatibility update releases',
      'Bug fix and performance optimisation sprints on retainer',
      'Crashlytics and analytics-driven quality monitoring',
      'Feature enhancement roadmap planning and execution',
    ],
  },
]

const VENDORS = [
  'React Native', 'Swift', 'Kotlin', 'Flutter',
  'Firebase', 'Supabase', 'Expo', 'App Center',
  'Fastlane', 'Figma', 'Crashlytics', 'TestFlight',
]

const FAQS = [
  {
    question: 'Should we build a React Native app or separate iOS and Android apps?',
    answer: 'For the majority of business applications — customer portals, e-commerce apps, internal tools, booking systems, field service apps — React Native is the right choice. It delivers native performance on both platforms from a single codebase, reducing development cost and ongoing maintenance burden significantly. Separate native apps make sense when the application requires deep platform-specific features (iOS ARKit, Android-specific hardware integration), when maximum performance is critical (high-frame-rate gaming, intensive graphics), or when the iOS and Android experiences need to be fundamentally different. During our initial consultation, we assess your specific requirements and recommend the approach that delivers the best outcome for your goals and budget.',
  },
  {
    question: 'What is the difference between React Native and Flutter?',
    answer: 'Both are cross-platform mobile frameworks but with different approaches. React Native uses JavaScript and React to create native UI components — developers familiar with React web development can transition quickly, and the JavaScript ecosystem provides a vast library of packages. Flutter uses Dart and renders all UI components itself using the Skia graphics engine, which means pixel-perfect consistency across platforms but no use of native UI components. React Native has a larger talent pool, wider ecosystem, and tighter integration with React-based web development. Flutter offers more consistent cross-platform appearance. We primarily use React Native because of our existing React expertise and the ecosystem maturity, but we can deliver Flutter projects where it is the better fit.',
  },
  {
    question: 'How long does it take to develop a mobile app?',
    answer: 'Timeline depends significantly on complexity. A minimum viable product (MVP) with 5–8 core screens and basic authentication typically takes 8–12 weeks. A mid-complexity application (15–25 screens, API integrations, payment processing, push notifications, offline capability) typically takes 16–24 weeks. A complex application with real-time features, complex business logic, custom hardware integration, or extensive third-party integrations can take 6–12 months. We always build from a detailed specification and provide a phased delivery plan so you can launch an MVP quickly and add features iteratively rather than waiting for everything to be complete before any user value is delivered.',
  },
  {
    question: 'Do you develop the backend/API as well as the mobile app?',
    answer: 'Yes — most mobile app projects require a backend API, and we offer full-stack development covering both the mobile app and its backend. Our standard backend stack for mobile APIs is Node.js with Express or NestJS, PostgreSQL or MongoDB for data storage, Redis for caching and session management, and deployment on AWS or Azure. For projects where speed to market is the priority, we can use Firebase or Supabase as a backend-as-a-service to accelerate development. If you already have an existing API, we connect to it rather than building a new one — our requirement is simply that the API is documented and performant enough to support mobile use.',
  },
  {
    question: 'How do you handle app security and sensitive user data?',
    answer: 'Mobile app security is built into our development process, not added as an afterthought. Key practices include: secure storage (using iOS Keychain and Android Keystore for sensitive data — never unencrypted local storage), certificate pinning to prevent man-in-the-middle attacks against API traffic, JWT-based authentication with appropriate expiry and refresh token rotation, biometric authentication integration where appropriate, code obfuscation for release builds, and jailbreak/root detection for high-security applications. For applications handling financial data, healthcare information, or other regulated data types, we conduct security code review as part of the development process.',
  },
  {
    question: 'Who owns the source code and App Store accounts?',
    answer: 'You do, completely. On project completion, all source code is delivered to your repository of choice (GitHub, GitLab, Bitbucket), and all App Store and Google Play Console accounts are registered in your business name. We do not retain any ownership of code, IP, or store accounts. This is specified explicitly in our development agreement before work begins. We recommend that you maintain administrative access to your own App Store Connect and Google Play Console accounts throughout the project, with us as invited developers, so there is never a dependency on us for access to your own published applications.',
  },
]

export default function MobileAppsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Software Development', href: '/services/software-development' },
        { label: 'Mobile App Development' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#7C3AED,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-10 sm:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#7C3AED' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#7C3AED' }}>Mobile App Development</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Mobile App Development —{' '}
              <span style={{ color: '#7C3AED' }}>Native Performance, Cross-Platform Efficiency.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Mobile is not a channel — it is the primary computing platform for your customers and staff. Infraspine builds iOS and Android apps that deliver genuine native performance using React Native, Swift, and Kotlin. Fifty-plus apps delivered, an average 4.8-star App Store rating, and a development process that runs from interactive prototype through App Store submission and post-launch support. All source code and store accounts in your name, always.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-3 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[18px] font-black mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[11px] font-semibold leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#7C3AED', color: '#fff' }}>
                Build Your Mobile App <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Get a Free Discovery Call
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
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#7C3AED' }}>The Business Case</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Mobile-First Is Not a Trend — It Is Where Your Users Are
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Pakistan has over 190 million mobile internet users, with smartphone penetration growing rapidly. More critically, your customers and staff spend more time on their mobile devices than on any other computing platform. Businesses that deliver a genuinely excellent mobile experience — fast, intuitive, offline-capable where needed, and integrated with device capabilities like camera, GPS, and biometrics — create engagement and loyalty advantages that web-only competitors cannot match.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The React Native vs native development question comes up in every mobile project conversation. React Native has matured dramatically since Facebook open-sourced it in 2015 — major consumer apps including Facebook itself, Instagram, and Shopify use it in production. For most business applications, React Native delivers the same user experience as native at 40–60% of the development cost, because you are building once rather than twice. This cost advantage compounds on every future update: a single codebase means half the testing effort and half the release engineering work on every subsequent release.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                App Store Optimisation is the often-overlooked factor that determines whether a well-built app actually gets found. Over 65% of app downloads on the App Store come from search. Apps that rank on the first page for their target keywords get dramatically more organic downloads than apps buried on page three. Our ASO process — keyword research, metadata optimisation, screenshot design, and ongoing ranking monitoring — starts during development and continues post-launch to maximise the organic visibility of your investment.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#7C3AED', text: '190M+ mobile internet users in Pakistan — your market is on mobile' },
                  { color: '#00C853', text: 'React Native: one codebase, both platforms, 40–60% cost saving' },
                  { color: '#D97706', text: '65%+ of App Store downloads come from search — ASO is essential' },
                  { color: '#2563EB', text: 'Full source code ownership — no lock-in to our team or tooling' },
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
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>Our App Development Process</p>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Discovery & Requirements', desc: 'User research, feature scope, technical requirements', color: '#7C3AED' },
                  { step: '02', title: 'UX Design & Prototype', desc: 'User flows, wireframes, interactive Figma prototype', color: '#2563EB' },
                  { step: '03', title: 'UI Design', desc: 'Visual design, design system, component library', color: '#0891B2' },
                  { step: '04', title: 'Development Sprints', desc: 'Agile 2-week sprints with working app demos', color: '#00C853' },
                  { step: '05', title: 'Testing & QA', desc: 'Device testing, performance, security review', color: '#D97706' },
                  { step: '06', title: 'Launch & Support', desc: 'App Store submission, ASO, post-launch monitoring', color: '#DC2626' },
                ].map(p => (
                  <div key={p.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-[11px] font-black" style={{ background: `${p.color}15`, color: p.color }}>{p.step}</div>
                    <div>
                      <div className="text-[13px] font-bold mb-0.5" style={{ color: '#0A1628' }}>{p.title}</div>
                      <div className="text-[12px]" style={{ color: '#64748B' }}>{p.desc}</div>
                    </div>
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
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#7C3AED' }}>Mobile Development Capabilities</span>
              <div className="h-px w-6" style={{ background: '#7C3AED' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Full-Stack Mobile Development
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From cross-platform React Native through native iOS and Android, UI/UX design, App Store submission, and post-launch support.
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
            Mobile Development Technologies We Use
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

      <FAQAccordion faqs={FAQS} accent="#7C3AED"
        title="Mobile App Development Questions Answered"
        subtitle="Common questions from organisations planning their first or next mobile app." />

      <CTABanner
        heading="Build Your Mobile App with Infraspine"
        subheading="50+ apps delivered, 4.8-star average rating. From React Native MVP to native iOS and Android — we build apps your users love."
        primaryCTA={{ label: 'Start Your App Project', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
