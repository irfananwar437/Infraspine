import { Star, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    initials: 'AK',
    name: 'Ahmad Khalil',
    role: 'CTO',
    company: 'NexGen Logistics',
    color: '#2563EB',
    bg: '#EFF6FF',
    rating: 5,
    quote: 'InfraSpine completely transformed our IT operations. We went from constant downtime and fragmented tools to a single, reliable system. Our team productivity increased by 40% within the first quarter.',
  },
  {
    initials: 'SR',
    name: 'Sara Rehman',
    role: 'COO',
    company: 'MedCore Healthcare',
    color: '#16A34A',
    bg: '#F0FDF4',
    rating: 5,
    quote: 'Their CCTV, biometric, and IT infrastructure deployment was seamless. What impressed me most was how one team handled everything — from planning to 24/7 monitoring. Zero disruption to our operations.',
  },
  {
    initials: 'FM',
    name: 'Faisal Mirza',
    role: 'CEO',
    company: 'Gulf Trading Group',
    color: '#7C3AED',
    bg: '#F5F3FF',
    rating: 5,
    quote: 'The automation workflows they built using n8n saved us literally hundreds of hours per month. Our WhatsApp business bot now handles 70% of customer queries automatically. Incredible ROI.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-10 sm:py-14 lg:py-16" style={{ background: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto px-5 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8" style={{ background: '#00C853' }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>
              Client Testimonials
            </span>
            <div className="h-px w-8" style={{ background: '#00C853' }} />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold" style={{ color: '#0A1628' }}>
            What Our Clients Say
          </h2>
          <p className="mt-3 text-[15px] max-w-lg mx-auto" style={{ color: '#64748B' }}>
            Real results from real enterprise clients who trusted Infraspine to transform their IT infrastructure.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col border transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
              style={{ border: '1px solid #E2E8F0', background: '#FAFAFA' }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} fill="#00C853" color="#00C853" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote size={24} className="mb-3" style={{ color: '#E2E8F0' }} />

              {/* Quote text */}
              <p className="text-[15px] leading-[1.7] flex-1 mb-6" style={{ color: '#374151' }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid #F1F5F9' }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0"
                  style={{ background: t.bg, color: t.color, border: `2px solid ${t.color}30` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-[14px] font-bold" style={{ color: '#0A1628' }}>{t.name}</p>
                  <p className="text-[12px]" style={{ color: '#64748B' }}>{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {[
            { value: '10+', label: 'Enterprise Clients' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '98%', label: 'Client Retention' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-extrabold" style={{ color: '#00C853' }}>{s.value}</p>
              <p className="text-[12px] mt-0.5" style={{ color: '#94A3B8' }}>{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
