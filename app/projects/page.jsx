import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import Link from 'next/link'
import { PROJECTS } from '@/data/projects'
import { ArrowRight, BarChart2, Clock, Users, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Projects & Case Studies — Enterprise IT Delivery Results',
  description: 'Explore Infraspine\'s enterprise project portfolio — real case studies covering ERP deployment, CCTV surveillance, AI automation, cybersecurity, and CRM development with measurable business outcomes.',
  alternates: { canonical: 'https://www.infraspine.com/projects' },
  openGraph: {
    title: 'Projects & Case Studies — Enterprise IT Delivery Results | Infraspine',
    description: 'Real enterprise IT projects with measurable outcomes. ERP systems, AI automation, cybersecurity, cloud solutions, and more — delivered and proven.',
    url: 'https://www.infraspine.com/projects',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Infraspine Projects & Case Studies',
  description: 'Enterprise IT project portfolio with measurable business outcomes across manufacturing, healthcare, financial services, retail, and logistics.',
  url: 'https://www.infraspine.com/projects',
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Projects & Case Studies' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#2563EB,transparent 70%)' }}
          aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Projects & Case Studies</span>
            </div>
            <h1 className="text-[clamp(2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              Enterprise Delivery.<br />
              <span style={{ color: '#00C853' }}>Measurable Results.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
              Every project in our portfolio represents a real business challenge, a designed solution, and a documented result. We do not publish vague testimonials — we publish measurable outcomes from production deployments.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              {[
                { value: '50+', label: 'Projects Delivered', color: '#00C853' },
                { value: '6',   label: 'Industries Served',  color: '#2563EB' },
                { value: '99%', label: 'On-Time Delivery',   color: '#D97706' },
              ].map(({ value, label, color }) => (
                <div key={label}>
                  <div className="text-[28px] font-black" style={{ color }}>{value}</div>
                  <div className="text-[12px] font-semibold" style={{ color: '#64748B' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <article
                key={project.slug}
                className="flex flex-col rounded-2xl overflow-hidden border bg-white transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: project.tagBorder, boxShadow: '0 4px 20px rgba(10,22,40,0.06)' }}
              >
                {/* Card header */}
                <div className="p-6 border-b" style={{ background: project.tagBg, borderColor: project.tagBorder }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 rounded-full text-[10px] font-bold"
                          style={{ background: project.tagBg, color: project.tagColor, border: `1px solid ${project.tagBorder}` }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h2 className="text-[16px] font-black leading-snug" style={{ color: '#0A1628' }}>
                    {project.title}
                  </h2>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[13.5px] leading-relaxed mb-5 flex-1" style={{ color: '#475569' }}>
                    {project.headline}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 mb-5 pt-4 border-t" style={{ borderColor: '#F1F5F9' }}>
                    <div className="flex items-center gap-1.5 text-[11.5px]" style={{ color: '#64748B' }}>
                      <Clock size={12} style={{ color: project.tagColor }} />
                      {project.duration}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11.5px]" style={{ color: '#64748B' }}>
                      <Users size={12} style={{ color: project.tagColor }} />
                      {project.teamSize}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11.5px]" style={{ color: '#64748B' }}>
                      <BarChart2 size={12} style={{ color: project.tagColor }} />
                      {project.industry}
                    </div>
                  </div>

                  {/* Key metrics */}
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {project.metrics.slice(0, 2).map((m, j) => (
                      <div key={j} className="rounded-xl p-3 border" style={{ background: project.tagBg, borderColor: project.tagBorder }}>
                        <div className="text-[15px] font-black leading-none" style={{ color: project.tagColor }}>{m.value}</div>
                        <div className="text-[10px] font-medium mt-0.5" style={{ color: '#64748B' }}>{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[13px] font-bold transition-all hover:opacity-90"
                    style={{ background: project.tagColor, color: '#fff' }}
                  >
                    Read Full Case Study <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industry coverage strip ── */}
      <section className="py-12 border-y" style={{ background: '#fff', borderColor: '#E2E8F0' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-6" style={{ color: '#94A3B8' }}>
            Industries Covered in Our Project Portfolio
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['Manufacturing', 'Healthcare', 'Financial Services', 'Retail & eCommerce', 'Logistics', 'Real Estate', 'Construction', 'Education'].map(ind => (
              <span key={ind} className="px-4 py-2 rounded-full text-[12px] font-semibold border"
                style={{ background: '#F8FAFC', borderColor: '#E2E8F0', color: '#475569' }}>
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Have a Project in Mind? Let's Talk."
        subheading="Tell us about your business challenge and we will tell you how we have solved it before — and how we can solve it for you."
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
