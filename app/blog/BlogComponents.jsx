import Link from 'next/link'
import {
  ArrowRight, Clock, Calendar,
  Shield, Cloud, Bot, Network, GraduationCap, Settings2, Code2, FileBarChart, Camera,
} from 'lucide-react'

const CATEGORY_ICONS = {
  Cybersecurity: Shield,
  Cloud: Cloud,
  AI: Bot,
  Networking: Network,
  Training: GraduationCap,
  'Managed IT': Settings2,
  Software: Code2,
  'Case Study': FileBarChart,
  'Physical Security': Camera,
}

export function PostCard({ post }) {
  const CategoryIcon = CATEGORY_ICONS[post.category] || Shield
  return (
    <article
      className="bg-white rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col"
      style={{ borderColor: '#E2E8F0' }}
    >
      <div
        className="h-[140px] relative overflow-hidden flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${post.gradientFrom} 0%, ${post.gradientTo} 100%)` }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: post.accentColor }} />
        <div className="absolute -right-4 -bottom-5 text-[90px] font-black leading-none select-none opacity-[0.07]" style={{ color: post.accentColor }}>
          {post.category.charAt(0)}
        </div>
        <div
          className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{ background: '#fff', boxShadow: `0 6px 20px -4px ${post.accentColor}40` }}
        >
          <CategoryIcon size={26} strokeWidth={1.8} style={{ color: post.accentColor }} />
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full"
            style={{ background: `${post.categoryColor}12`, color: post.categoryColor }}
          >
            {post.category}
          </span>
          <div className="flex items-center gap-1" style={{ color: '#94A3B8' }}>
            <Clock size={11} />
            <span className="text-[11px]">{post.readTime}</span>
          </div>
        </div>
        <h2 className="text-[15px] font-bold leading-snug mb-3" style={{ color: '#0A1628' }}>
          {post.title}
        </h2>
        <p className="text-[13px] leading-relaxed mb-4 flex-1" style={{ color: '#64748B' }}>
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: '#F1F5F9' }}>
          <div className="flex items-center gap-1.5" style={{ color: '#94A3B8' }}>
            <Calendar size={11} />
            <span className="text-[11px]">{post.date}</span>
          </div>
          <Link
            href={post.href}
            className="inline-flex items-center gap-1 text-[12px] font-bold transition-all hover:gap-2"
            style={{ color: post.accentColor }}
          >
            Read More <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </article>
  )
}

export function NewsletterSection() {
  return (
    <section className="py-16 sm:py-20 border-y" style={{ background: '#fff', borderColor: '#E2E8F0' }}>
      <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-5">
          <div className="h-px w-6" style={{ background: '#00C853' }} />
          <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Newsletter</span>
          <div className="h-px w-6" style={{ background: '#00C853' }} />
        </div>
        <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-black mb-4" style={{ color: '#0A1628' }}>
          Subscribe to Our IT Newsletter
        </h2>
        <p className="text-[15px] leading-relaxed mb-8" style={{ color: '#64748B' }}>
          Monthly IT insights, cybersecurity alerts, cloud technology updates, and practical guidance — delivered directly to your inbox. No spam, unsubscribe any time.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            name="email"
            placeholder="Enter your work email address"
            autoComplete="email"
            className="flex-1 px-4 py-3 rounded-xl text-[14px] border outline-none focus:border-green-400"
            style={{ borderColor: '#E2E8F0', background: '#F8FAFC', color: '#0A1628' }}
          />
          <button
            type="button"
            className="px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90 whitespace-nowrap"
            style={{ background: '#00C853', color: '#0A1628' }}
          >
            Subscribe
          </button>
        </div>
        <p className="text-[11px] mt-4" style={{ color: '#94A3B8' }}>
          We respect your privacy. Unsubscribe at any time. No third-party sharing.
        </p>
      </div>
    </section>
  )
}
