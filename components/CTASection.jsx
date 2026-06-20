import { ArrowRight, ChevronRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-8 sm:py-12 lg:py-14" style={{ background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
      <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">

        <span
          className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] px-4 py-1.5 rounded-full mb-5"
          style={{ background: 'rgba(0,200,83,0.1)', color: '#00C853', border: '1px solid rgba(0,200,83,0.2)' }}
        >
          Ready to Get Started?
        </span>

        <h2 className="text-[22px] sm:text-[32px] lg:text-[44px] font-extrabold leading-tight" style={{ color: '#0A1628' }}>
          Let&apos;s Build Your Complete<br />
          <span style={{ color: '#00C853' }}>Technology Infrastructure</span>
        </h2>

        <p className="text-[14px] sm:text-[16px] max-w-lg mx-auto mt-4 mb-8 sm:mb-10 leading-relaxed" style={{ color: '#64748B' }}>
          From first consultation to full deployment — Infraspine manages every layer of your IT backbone.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="/contact-us"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-[14px] sm:text-[15px] transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: '#00C853', color: '#0A1628' }}
          >
            Book a Free Consultation
            <ArrowRight size={16} />
          </a>
          <a
            href="#case-studies"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-[14px] sm:text-[15px] transition-all hover:bg-slate-100"
            style={{ border: '2px solid #E2E8F0', color: '#0A1628' }}
          >
            View Case Studies
            <ChevronRight size={16} />
          </a>
        </div>

        <div
          className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center mt-12 pt-8"
          style={{ borderTop: '1px solid #E2E8F0' }}
        >
          {['No long-term lock-in', 'Dedicated account manager', 'SLA-backed delivery'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#00C853' }} />
              <span className="text-[13px]" style={{ color: '#64748B' }}>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
