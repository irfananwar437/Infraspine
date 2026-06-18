import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import { Play, Clock, Calendar, CheckCircle, ArrowRight, ArrowLeft, Mail, Phone } from 'lucide-react'
import { WEBINARS } from '../../webinar-data'

export function generateStaticParams() {
  return WEBINARS.map(w => ({ slug: w.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const w = WEBINARS.find(x => x.slug === slug)
  if (!w) return {}
  return {
    title: `${w.title} | Infraspine Webinar`,
    description: w.desc,
    alternates: { canonical: `https://www.infraspine.com/resources/webinars/${w.slug}` },
  }
}

export default async function WebinarPage({ params }) {
  const { slug } = await params
  const w = WEBINARS.find(x => x.slug === slug)
  if (!w) notFound()

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 pb-14" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-8">
          <Link href="/resources"
            className="inline-flex items-center gap-1.5 mb-6 text-[12px] font-semibold transition-colors hover:text-white"
            style={{ color: '#64748B' }}>
            <ArrowLeft size={13} /> Back to Resources
          </Link>
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-6" style={{ background: w.color }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: w.color }}>
              On-Demand Webinar
            </span>
          </div>
          <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-black leading-[1.1] tracking-tight text-white mb-5">
            {w.title}
          </h1>
          <p className="text-[16px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>{w.desc}</p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2" style={{ color: '#64748B' }}>
              <Calendar size={14} />
              <span className="text-[13px]">{w.date}</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: '#64748B' }}>
              <Clock size={14} />
              <span className="text-[13px]">{w.duration} recording</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-4xl mx-auto px-5 lg:px-8 grid lg:grid-cols-3 gap-8">

          {/* Topics covered */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl border p-8" style={{ borderColor: '#E2E8F0' }}>
              <h2 className="text-[18px] font-black mb-5" style={{ color: '#0A1628' }}>What This Webinar Covers</h2>
              <ul className="space-y-3">
                {w.topics.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[11px] font-black"
                      style={{ background: `${w.color}15`, color: w.color }}>{i + 1}</span>
                    <span className="text-[14px] leading-relaxed" style={{ color: '#374151' }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border p-8" style={{ borderColor: '#E2E8F0' }}>
              <h2 className="text-[18px] font-black mb-5" style={{ color: '#0A1628' }}>Key Takeaways</h2>
              <ul className="space-y-3">
                {w.takeaways.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#00C853' }} />
                    <span className="text-[14px] leading-relaxed" style={{ color: '#374151' }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar — access CTA */}
          <div className="space-y-5">
            {/* Play card */}
            <div className="rounded-2xl border overflow-hidden" style={{ borderColor: '#E2E8F0' }}>
              <div className="flex items-center justify-center h-[160px]" style={{ background: w.bg }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: w.color, boxShadow: `0 0 32px ${w.color}60` }}>
                  <Play size={24} style={{ color: '#fff', marginLeft: '3px' }} />
                </div>
              </div>
              <div className="p-5">
                <p className="text-[13px] font-bold mb-1" style={{ color: '#0A1628' }}>
                  {w.duration} On-Demand Recording
                </p>
                <p className="text-[12px] mb-4" style={{ color: '#64748B' }}>
                  Contact us to receive your private viewing link — our team responds within 1 hour.
                </p>
                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[13px] font-black transition-all hover:opacity-90 mb-2"
                  style={{ background: '#25D366', color: '#fff' }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  WhatsApp for Instant Access
                </a>
                <a
                  href="mailto:hello@infraspine.com"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-semibold border transition-colors hover:bg-slate-50"
                  style={{ borderColor: '#E2E8F0', color: '#374151' }}
                >
                  <Mail size={13} /> Email Us
                </a>
              </div>
            </div>

            {/* Contact card */}
            <div className="rounded-2xl border p-5" style={{ borderColor: '#E2E8F0', background: '#fff' }}>
              <p className="text-[12px] font-black uppercase tracking-widest mb-3" style={{ color: '#94A3B8' }}>Direct Contact</p>
              <a href="tel:+923001234567" className="flex items-center gap-2 py-2 text-[13px] font-semibold transition-colors hover:text-slate-900" style={{ color: '#374151' }}>
                <Phone size={13} style={{ color: w.color }} /> +92 300 123 4567
              </a>
              <a href="mailto:hello@infraspine.com" className="flex items-center gap-2 py-2 text-[13px] font-semibold transition-colors hover:text-slate-900" style={{ color: '#374151' }}>
                <Mail size={13} style={{ color: w.color }} /> hello@infraspine.com
              </a>
            </div>

            <Link href="/resources"
              className="flex items-center gap-2 text-[13px] font-semibold transition-colors hover:text-slate-900"
              style={{ color: '#64748B' }}>
              <ArrowLeft size={13} /> Browse all resources
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
