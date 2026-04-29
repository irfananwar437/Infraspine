'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight, BookOpen, ShieldCheck, Server, Zap } from 'lucide-react'

const POSTS = [
  {
    id: 1,
    title: 'Why Cloud Migration is Essential for Modern ERPs',
    excerpt: 'Discover the hidden costs of on-premise ERP hosting and how hybrid cloud architectures improve uptime by 99.9%.',
    category: 'Cloud & Infrastructure',
    icon: Server,
    color: '#2563EB',
    bg: '#EFF6FF',
    date: 'April 02, 2026',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Zero Trust Network Architecture Explained',
    excerpt: 'A comprehensive guide to implementing identity-based access controls and micro-segmentation in your corporate network.',
    category: 'Cybersecurity',
    icon: ShieldCheck,
    color: '#DC2626',
    bg: '#FEF2F2',
    date: 'March 28, 2026',
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'Automating HR Onboarding with n8n Workflows',
    excerpt: 'How we reduced employee onboarding time from 3 days to 4 hours using visual workflow automation and API integrations.',
    category: 'Business Automation',
    icon: Zap,
    color: '#D97706',
    bg: '#FFFBEB',
    date: 'March 15, 2026',
    readTime: '6 min read'
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative overflow-hidden" style={{ background: '#0A1628' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        
        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Knowledge Base</span>
            </div>
            <h1 className="text-[30px] sm:text-[46px] lg:text-[56px] font-black leading-[1.06] tracking-tight text-white mb-5">
              Insights & <br />
              <span style={{ color: '#00C853' }}>Technical Guides</span>
            </h1>
            <p className="text-[15px] sm:text-[17px] leading-relaxed max-w-2xl" style={{ color: '#94A3B8' }}>
              Expert articles, security advisories, and deep dives into enterprise IT architecture, business automation, and custom software development.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-5 lg:px-8 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map(post => (
            <article key={post.id} className="flex flex-col rounded-2xl overflow-hidden border bg-white transition-all hover:-translate-y-1 hover:shadow-xl" style={{ borderColor: '#E2E8F0', boxShadow: '0 2px 12px rgba(10,22,40,0.06)' }}>
              <div className="p-6 border-b" style={{ borderColor: '#F1F5F9' }}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: post.bg }}>
                    <post.icon size={16} style={{ color: post.color }} strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: post.color }}>
                    {post.category}
                  </span>
                </div>
                <h2 className="text-[20px] font-black leading-tight mb-2 text-slate-900 line-clamp-2">
                  {post.title}
                </h2>
                <div className="flex items-center gap-3 text-[12px] text-slate-400 font-medium">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-[14px] leading-relaxed text-slate-500 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <button className="inline-flex items-center gap-2 text-[13px] font-bold transition-colors hover:text-green-600" style={{ color: '#0A1628' }}>
                    Read Article <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
