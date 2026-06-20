import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

/**
 * CTABanner — reusable dark CTA section.
 * heading, subheading, primaryCTA { label, href }, secondaryCTA { label, href }
 */
export default function CTABanner({
  heading = 'Ready to Transform Your IT Infrastructure?',
  subheading = 'Speak with an Infraspine specialist and get a free assessment of your current technology environment.',
  primaryCTA = { label: 'Get a Free Consultation', href: '/contact-us' },
  secondaryCTA = { label: 'Call Us Now', href: 'tel:+923001234567' },
  showPhone = true,
}) {
  return (
    <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      {/* Green glow */}
      <div
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(ellipse, #00C853, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 lg:px-8 py-12 sm:py-16 text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="h-px w-6" style={{ background: '#00C853' }} />
          <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>
            Let&apos;s Work Together
          </span>
          <div className="h-px w-6" style={{ background: '#00C853' }} />
        </div>

        <h2
          className="text-[clamp(1.7rem,3.5vw,3rem)] font-black leading-tight text-white mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {heading}
        </h2>

        <p className="text-[15px] sm:text-[17px] leading-relaxed mb-7 max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>
          {subheading}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryCTA.href}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[15px] font-bold transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: '#00C853', color: '#0A1628' }}
          >
            {primaryCTA.label} <ArrowRight size={16} />
          </Link>

          {showPhone && (
            <a
              href={secondaryCTA.href}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[15px] font-bold transition-all hover:bg-white/10"
              style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}
            >
              <Phone size={15} />
              {secondaryCTA.label}
            </a>
          )}
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-7">
          {[
            'No obligation consultation',
            'Response within 2 hours',
            '10+ years enterprise experience',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-[12px] font-semibold" style={{ color: '#64748B' }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#00C853' }} />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
