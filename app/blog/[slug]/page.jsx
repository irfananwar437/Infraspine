import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import CTABanner from '@/components/ui/CTABanner'
import Link from 'next/link'
import { BLOG_POSTS } from '@/data/blogPosts'
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react'

export async function generateStaticParams() {
  return BLOG_POSTS.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.metaDesc,
    alternates: { canonical: `https://www.infraspine.com/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDesc,
      url: `https://www.infraspine.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)

  if (!post) notFound()

  const related = BLOG_POSTS.filter(p => p.slug !== slug && p.category === post.category).slice(0, 3)
  const fallbackRelated = related.length > 0 ? related : BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 3)

  const SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDesc,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Infraspine', url: 'https://www.infraspine.com' },
    publisher: { '@id': 'https://www.infraspine.com/#organization' },
    url: `https://www.infraspine.com/blog/${post.slug}`,
    articleSection: post.category,
    keywords: post.category,
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pb-20" style={{ background: '#071a37' }}>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[12px] mb-8" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:opacity-80" style={{ color: '#64748B' }}>Home</Link>
            <span style={{ color: '#334155' }}>/</span>
            <Link href="/blog" className="transition-colors hover:opacity-80" style={{ color: '#64748B' }}>Blog</Link>
            <span style={{ color: '#334155' }}>/</span>
            <span style={{ color: '#94A3B8' }}>{post.category}</span>
          </nav>

          {/* Category badge */}
          <div className="mb-5">
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full"
              style={{ background: `${post.categoryColor}22`, color: post.categoryColor, border: `1px solid ${post.categoryColor}44` }}
            >
              {post.category}
            </span>
          </div>

          <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-black leading-[1.1] tracking-tight text-white mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 mb-6">
            <div className="flex items-center gap-1.5" style={{ color: '#64748B' }}>
              <Calendar size={13} />
              <span className="text-[13px]">{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5" style={{ color: '#64748B' }}>
              <Clock size={13} />
              <span className="text-[13px]">{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5" style={{ color: '#64748B' }}>
              <span className="text-[13px]">By Infraspine</span>
            </div>
          </div>

          <p className="text-[16px] leading-relaxed" style={{ color: '#94A3B8' }}>
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Main content + sidebar */}
      <section className="py-14 sm:py-18" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Article body */}
            <article className="bg-white rounded-2xl border p-8 sm:p-10 flex-1 min-w-0 max-w-3xl"
              style={{ borderColor: '#E2E8F0', boxShadow: '0 4px 20px rgba(10,22,40,0.06)' }}>

              <div className="space-y-6">
                {post.content.map((para, i) => (
                  <p key={i} className="text-[15px] sm:text-[16px] leading-[1.85]" style={{ color: '#374151' }}>
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t flex flex-wrap gap-3 items-center justify-between" style={{ borderColor: '#F1F5F9' }}>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-[13px] font-bold transition-all hover:gap-3"
                  style={{ color: '#0A1628' }}
                >
                  <ArrowLeft size={14} /> Back to Blog
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all hover:opacity-90"
                  style={{ background: '#071a37', color: '#fff' }}
                >
                  Talk to an Expert <ArrowRight size={13} />
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-72 xl:w-80 flex-shrink-0 space-y-6">

              {/* Related posts */}
              {fallbackRelated.length > 0 && (
                <div className="bg-white rounded-2xl border p-6" style={{ borderColor: '#E2E8F0', boxShadow: '0 4px 20px rgba(10,22,40,0.06)' }}>
                  <h3 className="text-[14px] font-black mb-5" style={{ color: '#0A1628' }}>Related Articles</h3>
                  <div className="space-y-5">
                    {fallbackRelated.map(rel => (
                      <div key={rel.slug} className="border-b pb-5 last:border-0 last:pb-0" style={{ borderColor: '#F1F5F9' }}>
                        <span
                          className="text-[10px] font-bold uppercase tracking-[0.14em] mb-1.5 block"
                          style={{ color: rel.categoryColor }}
                        >
                          {rel.category}
                        </span>
                        <Link
                          href={`/blog/${rel.slug}`}
                          className="text-[13px] font-bold leading-snug block mb-2 transition-colors hover:opacity-70"
                          style={{ color: '#0A1628' }}
                        >
                          {rel.title}
                        </Link>
                        <div className="flex items-center gap-1" style={{ color: '#94A3B8' }}>
                          <Clock size={10} />
                          <span className="text-[11px]">{rel.readTime}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA sidebar card */}
              <div className="rounded-2xl p-6" style={{ background: '#071a37' }}>
                <div className="h-px w-8 mb-4" style={{ background: '#00C853' }} />
                <h3 className="text-[16px] font-black text-white mb-3 leading-snug">
                  Need Expert IT Support?
                </h3>
                <p className="text-[13px] leading-relaxed mb-5" style={{ color: '#64748B' }}>
                  Our team can help you implement the right solutions for your business. Get a free consultation today.
                </p>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all hover:opacity-90 w-full justify-center"
                  style={{ background: '#00C853', color: '#0A1628' }}
                >
                  Get Free Consultation <ArrowRight size={13} />
                </Link>
              </div>

              {/* Browse all */}
              <div className="bg-white rounded-2xl border p-6" style={{ borderColor: '#E2E8F0' }}>
                <h3 className="text-[14px] font-black mb-4" style={{ color: '#0A1628' }}>Browse All Posts</h3>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-[13px] font-bold transition-all hover:gap-3"
                  style={{ color: '#2563EB' }}
                >
                  View All Articles <ArrowRight size={13} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Put These Insights into Practice?"
        subheading="Our specialists are available to assess your current technology environment and recommend the right solutions for your business goals."
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
