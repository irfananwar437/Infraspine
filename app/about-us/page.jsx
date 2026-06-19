import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import Link from 'next/link'
import {
  ShieldCheck, Server, Target, Zap, Check, ArrowRight,
  Award, History, Users, Globe, Layers, TrendingUp,
  CheckCircle, Building2, Network,
} from 'lucide-react'

export const metadata = {
  title: 'About Infraspine — Global IT Services Company & Technology Partner',
  description: 'Infraspine is a global IT services company delivering managed IT, cloud solutions, AI automation, cybersecurity, software development, BPO, and IT training. Learn who we are and how we work.',
  alternates: { canonical: 'https://www.infraspine.com/about-us' },
  openGraph: {
    title: 'About Infraspine — Global IT Services Company & Technology Partner',
    description: 'Learn about Infraspine — our mission, values, delivery model, and why enterprises across industries trust us to manage their entire IT environment.',
    url: 'https://www.infraspine.com/about-us',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Infraspine',
  description: 'Infraspine is a global IT services company delivering enterprise IT management, AI automation, cloud solutions, cybersecurity, and software development.',
  url: 'https://www.infraspine.com/about-us',
  mainEntity: { '@id': 'https://www.infraspine.com/#organization' },
}

const MILESTONES = [
  { year: '2014', title: 'Founded', desc: 'Infraspine was established as an IT infrastructure and networking company serving enterprises in Pakistan.' },
  { year: '2016', title: 'ERP Division Launched', desc: 'Expanded into custom enterprise software, delivering the first fully custom ERP for a manufacturing group.' },
  { year: '2018', title: 'Cybersecurity Practice', desc: 'Established a dedicated cybersecurity team with certified penetration testers and compliance specialists.' },
  { year: '2020', title: 'AI & Automation Unit', desc: 'Launched the AI & Automation division, building n8n workflows, WhatsApp bots, and AI-agent integrations for enterprise clients.' },
  { year: '2022', title: 'BPO & Training Divisions', desc: 'Added BPO services and the IT Training Academy, broadening Infraspine into a full-spectrum technology partner.' },
  { year: '2024', title: 'Infraspine AI Platform', desc: 'Released Infraspine AI — our proprietary AI automation and intelligence platform powering client workflows globally.' },
]

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: 'Accountability Without Exception',
    color: '#00C853', bg: '#F0FDF4', border: '#BBF7D0',
    desc: 'We take full ownership of everything we deliver. One team. One SLA. No passing the blame between vendors. If something is under our management, we are responsible for its performance, security, and uptime.',
  },
  {
    icon: Target,
    title: 'Business Outcomes, Not Just Technology',
    color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE',
    desc: 'Technology is not the goal — business results are. Every project we take on is scoped around measurable outcomes: reduced downtime, faster processes, lower cost, better security posture, or improved team productivity.',
  },
  {
    icon: Zap,
    title: 'Speed Without Compromise',
    color: '#D97706', bg: '#FFFBEB', border: '#FDE68A',
    desc: 'We move fast. Projects are delivered on time, without cutting corners on quality, documentation, or security hardening. Our structured delivery model ensures speed and discipline operate together, not against each other.',
  },
  {
    icon: Layers,
    title: 'Integrated Systems Thinking',
    color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE',
    desc: 'Isolated solutions create isolated problems. We design every system with your broader technology environment in mind — ensuring your ERP, network, security, and automation layers work as one cohesive platform, not a collection of disconnected tools.',
  },
]

const WHY_ITEMS = [
  { title: 'Single Point of Accountability',    desc: 'One contract, one team, one escalation path. No multi-vendor chaos when something goes wrong.' },
  { title: 'SLA-Backed Everything',             desc: 'Every engagement includes a written SLA with documented response times, uptime guarantees, and escalation paths.' },
  { title: 'Deep Technical Bench',              desc: 'Our team covers infrastructure, cloud, cybersecurity, software engineering, AI, and BPO — rare in a single firm.' },
  { title: 'Enterprise-Proven Processes',       desc: 'Our delivery framework was built for enterprise complexity — structured, documented, and repeatable at scale.' },
  { title: 'No Offshore Quality Compromise',    desc: 'Our engineers are senior specialists, not juniors supervised from offshore. Quality is consistent, never outsourced away.' },
  { title: 'Long-Term Partnership Model',       desc: 'Most of our clients have been with us for 3+ years. We build relationships designed for growth, not just contracts.' },
]

export default function AboutUsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'About Us' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-0" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#00C853,transparent 70%)' }}
          aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-20 sm:py-28">
          <div className="flex flex-col lg:flex-row lg:items-center gap-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="h-px w-6" style={{ background: '#00C853' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>About Infraspine</span>
              </div>
              <h1 className="text-[clamp(2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white mb-6">
                The Technology Partner<br />
                <span style={{ color: '#00C853' }}>Built for Enterprise Scale.</span>
              </h1>
              <p className="text-[16px] sm:text-[18px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
                Infraspine is a global IT services company that designs, deploys, and manages the complete technology environments of enterprise businesses — from network infrastructure and cloud to AI automation, cybersecurity, custom software, and BPO operations.
              </p>
              <p className="text-[15px] leading-relaxed mb-8" style={{ color: '#64748B' }}>
                We are not a reseller. We are not a consulting firm that hands over a report. We are a full-delivery technology partner — one team that handles strategy, execution, and long-term support as a single, accountable unit.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                  style={{ background: '#00C853', color: '#0A1628' }}>
                  Book a Consultation <ArrowRight size={15} />
                </Link>
                <Link href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                  style={{ border: '2px solid rgba(255,255,255,0.18)', color: '#fff' }}>
                  Our Services
                </Link>
              </div>
            </div>

            {/* Right visual — stats grid */}
            <div className="lg:flex-1 grid grid-cols-2 gap-4 max-w-sm lg:max-w-none">
              {[
                { value: '10+',   label: 'Years in Operation',    color: '#00C853', bg: 'rgba(0,200,83,0.06)',   border: 'rgba(0,200,83,0.15)' },
                { value: '50+',   label: 'Enterprise Clients',    color: '#2563EB', bg: 'rgba(37,99,235,0.06)',  border: 'rgba(37,99,235,0.15)' },
                { value: '99.9%', label: 'Uptime SLA Delivered',  color: '#D97706', bg: 'rgba(217,119,6,0.06)',  border: 'rgba(217,119,6,0.15)' },
                { value: '24/7',  label: 'Monitoring Coverage',   color: '#7C3AED', bg: 'rgba(124,58,237,0.06)', border: 'rgba(124,58,237,0.15)' },
              ].map((stat, i) => (
                <div key={i} className="rounded-2xl p-6 flex flex-col"
                  style={{ background: stat.bg, border: `1px solid ${stat.border}` }}>
                  <div className="text-[34px] font-black leading-none mb-2" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-[12px] font-semibold" style={{ color: '#94A3B8' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Why We Exist</span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.8rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              Mission, Vision & Philosophy
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white border transition-all hover:-translate-y-1 hover:shadow-lg" style={{ borderColor: '#E2E8F0' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: '#EFF6FF' }}>
                <Target size={24} style={{ color: '#2563EB' }} strokeWidth={1.5} />
              </div>
              <h3 className="text-[18px] font-black mb-3" style={{ color: '#0A1628' }}>Our Mission</h3>
              <p className="text-[14px] leading-relaxed" style={{ color: '#475569' }}>
                To be the single, accountable technology partner that enterprise businesses rely on — managing every layer of their IT environment with the discipline, expertise, and transparency that complex organizations demand. We exist to make enterprise technology simple, reliable, and purposefully aligned to business growth.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border transition-all hover:-translate-y-1 hover:shadow-lg" style={{ borderColor: '#E2E8F0' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: '#F0FDF4' }}>
                <Globe size={24} style={{ color: '#00C853' }} strokeWidth={1.5} />
              </div>
              <h3 className="text-[18px] font-black mb-3" style={{ color: '#0A1628' }}>Our Vision</h3>
              <p className="text-[14px] leading-relaxed" style={{ color: '#475569' }}>
                To build zero-friction enterprise environments where IT infrastructure is invisible, highly secure, and inherently tied to accelerating business outcomes — across every industry, geography, and scale of operation. We envision a future where no business is held back by technology complexity.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border transition-all hover:-translate-y-1 hover:shadow-lg" style={{ borderColor: '#E2E8F0' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: '#FFF7ED' }}>
                <Layers size={24} style={{ color: '#EA580C' }} strokeWidth={1.5} />
              </div>
              <h3 className="text-[18px] font-black mb-3" style={{ color: '#0A1628' }}>Why &ldquo;InfraSpine&rdquo;</h3>
              <p className="text-[14px] leading-relaxed" style={{ color: '#475569' }}>
                The spine is the central support structure of the body — the column that connects the brain to every nerve, supports the framework, and enables movement. We view enterprise IT the same way. Your servers, network, security, and software are the central nervous system of your business. That is your InfraSpine. Our job is to ensure it is resilient, scalable, and impenetrable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Principles ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#2563EB' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>How We Operate</span>
              <div className="h-px w-6" style={{ background: '#2563EB' }} />
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.8rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              The Principles That Guide Every Engagement
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              These are not marketing statements. They are operational standards that every Infraspine engineer, project manager, and account lead is held to on every project.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {PRINCIPLES.map((p, i) => (
              <div key={i} className="flex gap-5 p-6 rounded-2xl border transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: p.border, background: p.bg }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#fff', border: `1.5px solid ${p.border}` }}>
                  <p.icon size={22} style={{ color: p.color }} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold mb-2" style={{ color: '#0A1628' }}>{p.title}</h3>
                  <p className="text-[13.5px] leading-relaxed" style={{ color: '#475569' }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Our Journey</span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.8rem)] font-black" style={{ color: '#0A1628' }}>
              10+ Years of Enterprise Delivery
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[28px] sm:left-1/2 top-0 bottom-0 w-px" style={{ background: '#E2E8F0' }} aria-hidden="true" />

            <div className="space-y-8">
              {MILESTONES.map((m, i) => (
                <div key={i} className={`relative flex gap-6 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`sm:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'} pl-14 sm:pl-0`}>
                    <div className="p-5 rounded-2xl bg-white border transition-all hover:shadow-md" style={{ borderColor: '#E2E8F0' }}>
                      <div className="text-[11px] font-black uppercase tracking-widest mb-1.5" style={{ color: '#00C853' }}>{m.year}</div>
                      <h3 className="text-[15px] font-bold mb-2" style={{ color: '#0A1628' }}>{m.title}</h3>
                      <p className="text-[13px] leading-relaxed" style={{ color: '#64748B' }}>{m.desc}</p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="absolute left-0 sm:left-1/2 top-5 -translate-y-0 sm:-translate-x-1/2 w-14 h-14 sm:w-5 sm:h-5 flex items-center justify-center sm:mt-4">
                    <div className="w-4 h-4 rounded-full border-2 border-white" style={{ background: '#00C853', boxShadow: '0 0 0 3px rgba(0,200,83,0.2)' }} />
                  </div>
                  {/* Spacer for opposite side */}
                  <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Infraspine ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Why Infraspine</span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.8rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              What Makes Us Different from Every<br />Other IT Company
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              Hundreds of IT companies exist. Very few operate at our depth, breadth, and accountability level simultaneously. Here is what clients actually tell us sets us apart.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_ITEMS.map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl border bg-white transition-all hover:-translate-y-0.5 hover:shadow-md" style={{ borderColor: '#E2E8F0' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#F0FDF4' }}>
                  <CheckCircle size={16} style={{ color: '#00C853' }} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold mb-1.5" style={{ color: '#0A1628' }}>{item.title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: '#64748B' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology Partners ── */}
      <section className="py-14 border-y" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-8" style={{ color: '#94A3B8' }}>
            Certified Technology Partners & Vendors
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {[
              { name: 'Cisco',       color: '#049FD9' },
              { name: 'Microsoft',   color: '#00A4EF' },
              { name: 'AWS',         color: '#FF9900' },
              { name: 'Fortinet',    color: '#EE3124' },
              { name: 'VMware',      color: '#607078' },
              { name: 'CrowdStrike', color: '#E3001B' },
              { name: 'Azure',       color: '#0089D6' },
              { name: 'n8n',         color: '#EA4B71' },
            ].map(p => (
              <div key={p.name} className="py-3 px-2 rounded-xl border flex items-center justify-center bg-white transition-all hover:shadow-sm" style={{ borderColor: '#E2E8F0' }}>
                <span className="text-[12px] font-black tracking-tight" style={{ color: p.color }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to See What Infraspine Can Do for Your Business?"
        subheading="Book a no-obligation discovery call with our specialists. We will audit your current setup, identify gaps, and present a clear roadmap — at no cost to you."
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
