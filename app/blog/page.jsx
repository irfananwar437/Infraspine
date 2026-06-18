import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CATEGORIES, POSTS } from './data'
import { PostCard, NewsletterSection } from './BlogComponents'

export const metadata = {
  title: 'IT Blog & Insights Pakistan — Cybersecurity, Cloud & Technology Tips | Infraspine',
  description: 'Expert IT insights from Infraspine Pakistan: cybersecurity guidance, cloud migration tips, AI automation, networking advice, and technology training resources for Pakistani businesses.',
  alternates: { canonical: 'https://www.infraspine.com/blog' },
  openGraph: {
    title: 'IT Blog & Insights Pakistan — Cybersecurity, Cloud & Technology Tips | Infraspine',
    description: 'Expert IT insights covering cybersecurity, cloud, AI, networking, and technology training for businesses in Pakistan.',
    url: 'https://www.infraspine.com/blog',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Infraspine IT Blog & Insights',
  description: 'Expert IT insights covering cybersecurity, cloud infrastructure, AI automation, networking, and technology training for Pakistani businesses.',
  url: 'https://www.infraspine.com/blog',
  publisher: { '@id': 'https://www.infraspine.com/#organization' },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle,#00C853,transparent 70%)' }} aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>IT Blog &amp; Insights</span>
            </div>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white mb-5">
              Expert IT Insights for{' '}
              <span style={{ color: '#00C853' }}>Pakistani Businesses.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed" style={{ color: '#94A3B8' }}>
              Practical cybersecurity guidance, cloud migration insights, AI automation explainers, networking deep-dives, and technology training resources. Written by our engineers for the technology decisions your business faces today.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <div className="border-b bg-white sticky top-0 z-30" style={{ borderColor: '#E2E8F0' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const href = cat.slug ? `/blog/category/${cat.slug}` : '/blog'
              const isActive = cat.slug === null
              return (
                <Link
                  key={cat.label}
                  href={href}
                  className="px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all hover:opacity-90"
                  style={isActive
                    ? { background: cat.color, color: '#fff' }
                    : { background: '#F1F5F9', color: cat.color, border: '1px solid #E2E8F0' }
                  }
                >
                  {cat.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post) => (
              <PostCard key={post.href} post={post} />
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />

      {/* Bottom CTA */}
      <section className="py-16" style={{ background: '#F8FAFC' }}>
        <div className="max-w-5xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-black mb-4" style={{ color: '#0A1628' }}>
            Ready to Put These Insights into Practice?
          </h2>
          <p className="text-[15px] mb-8" style={{ color: '#64748B' }}>
            Our team of specialists is available to assess your current technology environment and recommend the right solutions for your business.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
              style={{ background: '#071a37', color: '#fff' }}>
              Talk to an Expert <ArrowRight size={14} />
            </Link>
            <Link href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-bold transition-all border"
              style={{ borderColor: '#E2E8F0', color: '#374151' }}>
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}

