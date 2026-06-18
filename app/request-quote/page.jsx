import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import QuoteForm from './QuoteForm'
import { CheckCircle, Clock, Shield, Phone, Mail } from 'lucide-react'

export const metadata = {
  title: 'Request a Free IT Quote — Infraspine Technology Solutions',
  description: 'Get a free, no-obligation quote for managed IT services, cybersecurity, cloud solutions, networking, software development, and IT consultancy in Pakistan. Response within 4 hours.',
  alternates: { canonical: 'https://www.infraspine.com/request-quote' },
  openGraph: {
    title: 'Request a Free IT Quote | Infraspine',
    description: 'Tell us about your IT challenge and receive a tailored, no-obligation proposal within 4 business hours.',
    url: 'https://www.infraspine.com/request-quote',
  },
}

const PROMISES = [
  { icon: Clock,       label: 'Response within 4 hours',    desc: 'A senior consultant reviews your request and responds the same business day.' },
  { icon: Shield,      label: 'No sales pressure',           desc: 'We provide honest, tailored advice — even if the answer is that you do not need us yet.' },
  { icon: CheckCircle, label: 'Free consultation included',  desc: 'Every quote includes a 45-minute discovery call to ensure we understand your requirements fully.' },
]

export default function RequestQuotePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      {/* Hero banner */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Free, No-Obligation</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.08] tracking-tight text-white mb-5">
              Get a Tailored IT Quote<br />
              <span style={{ color: '#00C853' }}>for Your Business</span>
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed" style={{ color: '#94A3B8' }}>
              Tell us about your IT challenge. A senior Infraspine consultant will review your requirements and send a detailed, costed proposal — no generic pricing, no obligation.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 sm:py-16" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Form column */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border p-7 sm:p-10" style={{ borderColor: '#E2E8F0', boxShadow: '0 8px 40px rgba(10,22,40,0.08)' }}>
                <h2 className="text-[20px] font-black mb-1.5" style={{ color: '#0A1628' }}>Request Your Quote</h2>
                <p className="text-[13.5px] mb-7" style={{ color: '#64748B' }}>All fields help us scope your requirements accurately — most take under 3 minutes to complete.</p>
                <QuoteForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              {/* Our promise */}
              <div className="bg-white rounded-2xl border p-6" style={{ borderColor: '#E2E8F0' }}>
                <h3 className="text-[15px] font-black mb-5" style={{ color: '#0A1628' }}>Our Commitment to You</h3>
                <div className="space-y-5">
                  {PROMISES.map(p => (
                    <div key={p.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center" style={{ background: '#F0FDF4' }}>
                        <p.icon size={15} style={{ color: '#00C853' }} strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-[13.5px] font-black mb-0.5" style={{ color: '#0A1628' }}>{p.label}</p>
                        <p className="text-[13px] leading-relaxed" style={{ color: '#64748B' }}>{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct contact */}
              <div className="rounded-2xl p-6" style={{ background: '#071a37' }}>
                <h3 className="text-[15px] font-black text-white mb-4">Prefer to Talk First?</h3>
                <div className="space-y-3">
                  <a href="tel:+922134567890"
                    className="flex items-center gap-3 rounded-xl p-3.5 transition-all hover:opacity-90"
                    style={{ background: 'rgba(255,255,255,0.07)' }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#00C853' }}>
                      <Phone size={14} style={{ color: '#0A1628' }} />
                    </div>
                    <div>
                      <p className="text-[11px]" style={{ color: '#64748B' }}>Call Us</p>
                      <p className="text-[13px] font-black text-white">+92 21 3456 7890</p>
                    </div>
                  </a>
                  <a href="mailto:sales@infraspine.com"
                    className="flex items-center gap-3 rounded-xl p-3.5 transition-all hover:opacity-90"
                    style={{ background: 'rgba(255,255,255,0.07)' }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#2563EB' }}>
                      <Mail size={14} style={{ color: '#fff' }} />
                    </div>
                    <div>
                      <p className="text-[11px]" style={{ color: '#64748B' }}>Email</p>
                      <p className="text-[13px] font-black text-white">sales@infraspine.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Services covered */}
              <div className="bg-white rounded-2xl border p-6" style={{ borderColor: '#E2E8F0' }}>
                <h3 className="text-[14px] font-black mb-4" style={{ color: '#0A1628' }}>Services We Quote</h3>
                <div className="space-y-1.5">
                  {[
                    'Managed IT Services', 'Cybersecurity & SOC', 'Cloud (M365, Azure, AWS)',
                    'Network Infrastructure', 'Physical Security (CCTV)', 'Software Development',
                    'AI & Automation', 'IT Consultancy', 'IT Training', 'BPO Services',
                    'Data Backup & Recovery', 'IT Procurement',
                  ].map(s => (
                    <div key={s} className="flex items-center gap-2 text-[13px]" style={{ color: '#475569' }}>
                      <CheckCircle size={12} style={{ color: '#00C853', flexShrink: 0 }} />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
