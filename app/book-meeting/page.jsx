import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import BookingForm from './BookingForm'
import { CheckCircle, User, Clock, Video, Phone } from 'lucide-react'

export const metadata = {
  title: 'Book a Free IT Consultation — 60 Minutes with an Infraspine Expert',
  description: 'Schedule a free 60-minute IT consultation with an Infraspine specialist. Choose your topic: IT strategy, cybersecurity, cloud, networking, or software. Available in-person (Karachi) or online.',
  alternates: { canonical: 'https://www.infraspine.com/book-meeting' },
  openGraph: {
    title: 'Book a Free IT Consultation | Infraspine',
    description: 'Schedule 60 minutes with a senior Infraspine IT specialist — strategy, security, cloud, or software.',
    url: 'https://www.infraspine.com/book-meeting',
  },
}

const MEETING_TYPES = [
  {
    id: 'strategy', label: 'IT Strategy Session', duration: '60 min',
    desc: 'Discuss your technology challenges, current state, and 12–24 month IT priorities with a senior consultant.',
    icon: User, color: '#2563EB', bg: '#EFF6FF',
  },
  {
    id: 'security', label: 'Cybersecurity Review', duration: '60 min',
    desc: 'Review your current security posture, identify the highest-priority gaps, and discuss remediation options.',
    icon: CheckCircle, color: '#DC2626', bg: '#FEF2F2',
  },
  {
    id: 'cloud', label: 'Cloud Readiness Call', duration: '45 min',
    desc: 'Assess your cloud readiness for M365, Azure, or AWS — and get a migration approach tailored to your environment.',
    icon: Video, color: '#0078D4', bg: '#EFF6FF',
  },
  {
    id: 'software', label: 'Software Discovery', duration: '60 min',
    desc: 'Scope a software development, mobile app, or ERP project — get an honest assessment of complexity and timeline.',
    icon: Phone, color: '#00C853', bg: '#F0FDF4',
  },
]

const WHY = [
  { label: 'No sales pitch', desc: 'This is a working session. We diagnose your IT situation and tell you honestly what we think you should do — even if it is not with us.' },
  { label: 'Senior consultant', desc: 'Every meeting is led by a consultant with at least 10 years of experience in their specialist area — not a junior sales development rep.' },
  { label: 'Actionable output', desc: 'You leave every meeting with a written summary of our recommendations, not a brochure and a follow-up call request.' },
  { label: 'No obligation', desc: 'There is no obligation to proceed, no pressure to sign, and no follow-up sequence unless you ask for one.' },
]

export default function BookMeetingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-14 sm:py-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Free · No Obligation</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.08] tracking-tight text-white mb-5">
              Book a Free 60-Minute<br />
              <span style={{ color: '#00C853' }}>IT Consultation</span>
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed" style={{ color: '#94A3B8' }}>
              Sit down (in person in Karachi, or via video call anywhere in Pakistan) with a senior Infraspine specialist. Choose your topic, pick a time that works, and come away with clear, honest recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Meeting types */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-black mb-7" style={{ color: '#0A1628' }}>
            Choose Your Session Type
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {MEETING_TYPES.map(m => (
              <div key={m.id} className="rounded-2xl border p-5 hover:-translate-y-0.5 transition-all hover:shadow-lg"
                style={{ borderColor: '#E2E8F0' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: m.bg }}>
                  <m.icon size={18} style={{ color: m.color }} strokeWidth={1.6} />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[14px] font-black" style={{ color: '#0A1628' }}>{m.label}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full mb-2.5"
                  style={{ background: m.bg, color: m.color }}>
                  <Clock size={10} /> {m.duration}
                </span>
                <p className="text-[13px] leading-relaxed" style={{ color: '#64748B' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form + why */}
      <section className="pb-16 sm:pb-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-12">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border p-7 sm:p-10" style={{ borderColor: '#E2E8F0', boxShadow: '0 8px 40px rgba(10,22,40,0.08)' }}>
                <h2 className="text-[19px] font-black mb-1.5" style={{ color: '#0A1628' }}>Book Your Session</h2>
                <p className="text-[13.5px] mb-7" style={{ color: '#64748B' }}>Complete the form and we will confirm your slot within 2 hours on the same business day.</p>
                <BookingForm />
              </div>
            </div>

            {/* Why sidebar */}
            <div className="lg:col-span-2 space-y-4">
              <div className="rounded-2xl p-6" style={{ background: '#071a37' }}>
                <h3 className="text-[15px] font-black text-white mb-5">Why Book With Infraspine?</h3>
                <div className="space-y-4">
                  {WHY.map(w => (
                    <div key={w.label} className="flex items-start gap-3">
                      <CheckCircle size={14} style={{ color: '#00C853', marginTop: '2px', flexShrink: 0 }} />
                      <div>
                        <p className="text-[13px] font-black text-white mb-0.5">{w.label}</p>
                        <p className="text-[13px] leading-relaxed" style={{ color: '#64748B' }}>{w.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border p-6" style={{ borderColor: '#E2E8F0' }}>
                <h3 className="text-[14px] font-black mb-4" style={{ color: '#0A1628' }}>Available Formats</h3>
                <div className="space-y-3">
                  {[
                    { icon: Video, label: 'Video Call', desc: 'Microsoft Teams or Google Meet — available for all Pakistan locations', color: '#2563EB' },
                    { icon: User, label: 'In-Person', desc: 'Our office in Karachi — DHA Phase 5 (address sent on confirmation)', color: '#00C853' },
                    { icon: Phone, label: 'Phone Call', desc: 'For a shorter 30-minute overview call before committing to a full session', color: '#D97706' },
                  ].map(f => (
                    <div key={f.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center" style={{ background: '#F8FAFC' }}>
                        <f.icon size={14} style={{ color: f.color }} />
                      </div>
                      <div>
                        <p className="text-[13px] font-black" style={{ color: '#0A1628' }}>{f.label}</p>
                        <p className="text-[11.5px]" style={{ color: '#64748B' }}>{f.desc}</p>
                      </div>
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
