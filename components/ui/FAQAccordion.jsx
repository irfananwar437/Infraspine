'use client'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

/**
 * FAQAccordion — reusable FAQ with schema markup.
 * faqs: Array<{ q: string, a: string }>
 * title: string (optional section title)
 * subtitle: string (optional)
 * accent: hex color (default #00C853)
 */
export default function FAQAccordion({
  faqs = [],
  title = 'Frequently Asked Questions',
  subtitle = 'Common questions from clients before they engage with us.',
  accent = '#00C853',
  dark = false,
}) {
  const [open, setOpen] = useState(null)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question || faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer || faq.a,
      },
    })),
  }

  const bg       = dark ? '#0A1628' : '#F8FAFC'
  const cardBg   = dark ? 'rgba(255,255,255,0.04)' : '#fff'
  const headingC = dark ? '#fff' : '#0A1628'
  const textC    = dark ? '#94A3B8' : '#475569'
  const qColor   = dark ? '#fff' : '#0A1628'
  const borderC  = dark ? 'rgba(255,255,255,0.08)' : '#E2E8F0'

  return (
    <section className="py-12 sm:py-14" style={{ background: bg }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-6" style={{ background: accent }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: accent }}>
              FAQs
            </span>
            <div className="h-px w-6" style={{ background: accent }} />
          </div>
          <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: headingC }}>
            {title}
          </h2>
          <p className="text-[14px]" style={{ color: textC }}>
            {subtitle}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border transition-all"
              style={{
                background: cardBg,
                borderColor: open === i ? accent : borderC,
                boxShadow: open === i ? `0 4px 20px ${accent}15` : 'none',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                aria-expanded={open === i}
              >
                <span className="text-[14px] font-bold leading-snug" style={{ color: qColor }}>
                  {faq.question || faq.q}
                </span>
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
                  style={{
                    background: open === i ? accent : dark ? 'rgba(255,255,255,0.08)' : '#F1F5F9',
                    transform: open === i ? 'rotate(90deg)' : 'rotate(0deg)',
                  }}
                >
                  <ChevronRight
                    size={14}
                    style={{ color: open === i ? (dark ? '#0A1628' : '#fff') : '#64748B' }}
                  />
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <div className="h-px mb-4" style={{ background: dark ? 'rgba(255,255,255,0.06)' : '#F1F5F9' }} />
                  <p className="text-[13.5px] leading-relaxed" style={{ color: textC }}>
                    {faq.answer || faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
