import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import Link from 'next/link'
import { PROJECTS, PROJECT_SLUGS } from '@/data/projects'
import { ArrowRight, ArrowLeft, Clock, Users, CheckCircle, TrendingUp, Target, Cpu } from 'lucide-react'

export async function generateStaticParams() {
  return PROJECT_SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = PROJECTS.find(p => p.slug === slug)
  if (!project) return {}
  return {
    title: project.metaTitle,
    description: project.metaDesc,
    alternates: { canonical: `https://www.infraspine.com/projects/${project.slug}` },
    openGraph: {
      title: project.metaTitle,
      description: project.metaDesc,
      url: `https://www.infraspine.com/projects/${project.slug}`,
    },
  }
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params
  const project = PROJECTS.find(p => p.slug === slug)
  if (!project) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://www.infraspine.com/projects/${project.slug}`,
    headline: project.title,
    description: project.metaDesc,
    url: `https://www.infraspine.com/projects/${project.slug}`,
    publisher: { '@id': 'https://www.infraspine.com/#organization' },
    about: { '@type': 'Organization', name: project.client },
    keywords: project.tags.join(', '),
  }

  const otherProjects = PROJECTS.filter(p => p.slug !== project.slug).slice(0, 3)

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '/projects' },
        { label: project.title.split('—')[0].trim() },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 py-20 sm:py-28">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-[11px] font-bold"
                style={{ background: `${project.tagColor}18`, color: project.tagColor, border: `1px solid ${project.tagColor}30` }}>
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-[clamp(1.8rem,4vw,3.2rem)] font-black leading-[1.06] tracking-tight text-white mb-6 max-w-4xl">
            {project.title}
          </h1>

          <p className="text-[16px] sm:text-[17px] leading-relaxed mb-8 max-w-2xl" style={{ color: '#94A3B8' }}>
            {project.headline}
          </p>

          {/* Project meta strip */}
          <div className="flex flex-wrap gap-6">
            {[
              { icon: Clock, label: 'Duration', value: project.duration },
              { icon: Users, label: 'Team Size', value: project.teamSize },
              { icon: Target, label: 'Industry', value: project.industry },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <Icon size={14} style={{ color: project.tagColor }} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: '#475569' }}>{label}</div>
                  <div className="text-[13px] font-semibold text-white">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Metrics Bar ── */}
      <div style={{ background: '#fff', borderBottom: '1px solid #E2E8F0' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {project.metrics.map((metric, i, arr) => (
              <div key={i} className="flex flex-col items-center py-8 px-4"
                style={{ borderRight: i < arr.length - 1 ? '1px solid #E2E8F0' : 'none' }}>
                <span className="text-[30px] sm:text-[36px] font-black leading-none mb-1.5" style={{ color: project.tagColor }}>
                  {metric.value}
                </span>
                <span className="text-[11.5px] font-medium text-center" style={{ color: '#64748B' }}>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">

            {/* Main article */}
            <article>

              {/* Business Challenge */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#FEF2F2' }}>
                    <Target size={18} style={{ color: '#DC2626' }} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-[22px] sm:text-[26px] font-black" style={{ color: '#0A1628' }}>
                    The Business Challenge
                  </h2>
                </div>
                <div className="rounded-2xl p-6 sm:p-8 border bg-white" style={{ borderColor: '#FECACA' }}>
                  <p className="text-[15px] leading-relaxed" style={{ color: '#374151' }}>
                    {project.challenge}
                  </p>
                </div>
              </div>

              {/* Solution Approach */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#EFF6FF' }}>
                    <Cpu size={18} style={{ color: '#2563EB' }} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-[22px] sm:text-[26px] font-black" style={{ color: '#0A1628' }}>
                    The Infraspine Solution
                  </h2>
                </div>
                <div className="rounded-2xl p-6 sm:p-8 border bg-white" style={{ borderColor: '#BFDBFE' }}>
                  <p className="text-[15px] leading-relaxed" style={{ color: '#374151' }}>
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Technology Stack */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#F0FDF4' }}>
                    <Cpu size={18} style={{ color: '#16A34A' }} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-[22px] sm:text-[26px] font-black" style={{ color: '#0A1628' }}>
                    Technology & Tools
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3.5 py-2 rounded-xl text-[13px] font-bold border"
                      style={{ background: project.tagBg, color: project.tagColor, borderColor: project.tagBorder }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#F0FDF4' }}>
                    <TrendingUp size={18} style={{ color: '#00C853' }} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-[22px] sm:text-[26px] font-black" style={{ color: '#0A1628' }}>
                    Results & Business Impact
                  </h2>
                </div>
                <div className="rounded-2xl p-6 sm:p-8 border bg-white"
                  style={{ borderColor: project.tagBorder, background: project.tagBg }}>
                  <p className="text-[15px] leading-relaxed" style={{ color: '#374151' }}>
                    {project.outcome}
                  </p>
                </div>
              </div>

              {/* Key Outcomes */}
              <div className="mb-12">
                <h2 className="text-[22px] sm:text-[26px] font-black mb-5" style={{ color: '#0A1628' }}>
                  Key Outcomes at a Glance
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-2xl border bg-white"
                      style={{ borderColor: project.tagBorder }}>
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: project.tagBg }}>
                        <CheckCircle size={20} style={{ color: project.tagColor }} strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="text-[24px] font-black" style={{ color: project.tagColor }}>{m.value}</div>
                        <div className="text-[13px] font-semibold" style={{ color: '#64748B' }}>{m.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-6 border-t" style={{ borderColor: '#E2E8F0' }}>
                <Link href="/projects"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold transition-colors hover:text-slate-900"
                  style={{ color: '#64748B' }}>
                  <ArrowLeft size={14} /> All Projects
                </Link>
                <Link href="/contact-us"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all hover:opacity-90"
                  style={{ background: '#00C853', color: '#0A1628' }}>
                  Start a Similar Project <ArrowRight size={13} />
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-5">

              {/* CTA card */}
              <div className="rounded-2xl p-6 border" style={{ background: '#071a37', borderColor: '#17355f' }}>
                <p className="text-[13px] font-bold text-white mb-2">Ready to achieve similar results?</p>
                <p className="text-[13px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                  Book a free consultation and we will map how we can apply this approach to your business.
                </p>
                <Link href="/contact-us"
                  className="block w-full py-3 rounded-xl text-[13px] font-bold text-center transition-all hover:opacity-90"
                  style={{ background: '#00C853', color: '#0A1628' }}>
                  Book Free Consultation
                </Link>
              </div>

              {/* Project info */}
              <div className="rounded-2xl p-6 border bg-white" style={{ borderColor: '#E2E8F0' }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: '#94A3B8' }}>Project Details</p>
                <div className="space-y-3">
                  {[
                    { label: 'Industry', value: project.industry },
                    { label: 'Duration', value: project.duration },
                    { label: 'Team', value: project.teamSize },
                    { label: 'Services', value: project.tags.join(', ') },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-[10px] font-bold uppercase tracking-wider mb-0.5" style={{ color: '#94A3B8' }}>{label}</p>
                      <p className="text-[13px] font-semibold" style={{ color: '#0A1628' }}>{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related projects */}
              <div className="rounded-2xl p-6 border" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: '#94A3B8' }}>More Case Studies</p>
                <div className="space-y-3">
                  {otherProjects.map(p => (
                    <Link key={p.slug} href={`/projects/${p.slug}`}
                      className="flex gap-3 group">
                      <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ background: p.tagColor }} />
                      <span className="text-[13px] font-medium leading-snug group-hover:underline" style={{ color: '#0A1628' }}>
                        {p.title.split('—')[0].trim()}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      <CTABanner
        heading="Want Results Like These for Your Business?"
        subheading="Every project started with a conversation. Yours can too — no obligation, no cost, just a clear plan."
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
