import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { CATEGORIES, POSTS } from '../../data'
import { PostCard, NewsletterSection } from '../../BlogComponents'

export function generateStaticParams() {
  return CATEGORIES.filter(c => c.slug).map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const cat = CATEGORIES.find(c => c.slug === slug)
  if (!cat) return {}
  const postCount = POSTS.filter(p => p.category === cat.label).length
  return {
    title: `${cat.label} Articles & Insights | Infraspine IT Blog Pakistan`,
    description: `${postCount} expert ${cat.label} articles from Infraspine Pakistan. Practical guidance and deep dives for Pakistani businesses on ${cat.label.toLowerCase()} technology.`,
    alternates: { canonical: `https://www.infraspine.com/blog/category/${cat.slug}` },
    openGraph: {
      title: `${cat.label} Articles & Insights | Infraspine IT Blog Pakistan`,
      description: `Expert ${cat.label} articles and insights from Infraspine Pakistan.`,
      url: `https://www.infraspine.com/blog/category/${cat.slug}`,
    },
  }
}

export default async function CategoryPage({ params }) {
  const { slug } = await params
  const cat = CATEGORIES.find(c => c.slug === slug)
  if (!cat) notFound()

  const posts = POSTS.filter(p => p.category === cat.label)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${cat.label} Articles | Infraspine IT Blog`,
    description: `Expert ${cat.label} articles and insights from Infraspine Pakistan.`,
    url: `https://www.infraspine.com/blog/category/${cat.slug}`,
    publisher: { '@id': 'https://www.infraspine.com/#organization' },
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: `radial-gradient(circle,${cat.color},transparent 70%)` }} aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <Link href="/blog"
              className="inline-flex items-center gap-1.5 mb-6 text-[12px] font-semibold transition-colors hover:opacity-75"
              style={{ color: '#64748B' }}>
              <ArrowLeft size={13} /> All Articles
            </Link>
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="h-px w-6" style={{ background: cat.color }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: cat.color }}>
                {cat.label}
              </span>
            </div>
            <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[1.05] tracking-tight text-white mb-5">
              {cat.label}{' '}
              <span style={{ color: cat.color }}>Insights & Articles</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              Expert {cat.label.toLowerCase()} guidance from our engineers — written specifically for technology decisions facing Pakistani businesses.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-bold"
              style={{ background: `${cat.color}20`, color: cat.color }}>
              {posts.length} {posts.length === 1 ? 'article' : 'articles'} in this category
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <div className="border-b bg-white sticky top-0 z-30" style={{ borderColor: '#E2E8F0' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => {
              const href = c.slug ? `/blog/category/${c.slug}` : '/blog'
              const isActive = c.slug === cat.slug
              return (
                <Link
                  key={c.label}
                  href={href}
                  className="px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all hover:opacity-90"
                  style={isActive
                    ? { background: c.color, color: '#fff' }
                    : { background: '#F1F5F9', color: c.color, border: '1px solid #E2E8F0' }
                  }
                >
                  {c.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: `${cat.color}15` }}>
                <span className="text-[32px] font-black" style={{ color: cat.color }}>{cat.label.charAt(0)}</span>
              </div>
              <p className="text-[17px] font-bold mb-2" style={{ color: '#0A1628' }}>No articles yet in {cat.label}</p>
              <p className="text-[14px] mb-6" style={{ color: '#64748B' }}>We publish new content regularly — check back soon or browse all articles.</p>
              <Link href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: cat.color, color: '#fff' }}>
                <ArrowLeft size={14} /> Browse All Articles
              </Link>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.href} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Browse other categories */}
      {posts.length > 0 && (
        <section className="py-12 border-t" style={{ background: '#fff', borderColor: '#E2E8F0' }}>
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <p className="text-[12px] font-bold uppercase tracking-widest mb-5" style={{ color: '#94A3B8' }}>Browse other topics</p>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.filter(c => c.slug && c.slug !== cat.slug).map((c) => (
                <Link
                  key={c.label}
                  href={`/blog/category/${c.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-semibold transition-all hover:opacity-90"
                  style={{ background: `${c.color}12`, color: c.color, border: `1px solid ${c.color}30` }}
                >
                  {c.label}
                  <ArrowRight size={10} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <NewsletterSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
