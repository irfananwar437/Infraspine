'use client'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2, Loader2, MessageCircle } from 'lucide-react'

const SERVICES = [
  'IT Infrastructure & Support',
  'CCTV & Physical Security',
  'Biometric & Access Control',
  'ERP / CRM Development',
  'AI & Automation (n8n)',
  'Cloud & Server Management',
  'Call Center Setup',
  'Networking & Cabling',
  'Other',
]

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' })

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate API call — replace with your real endpoint (e.g. /api/contact)
    await new Promise(r => setTimeout(r, 1500))
    setStatus('sent')
  }

  const reset = () => {
    setForm({ name: '', company: '', email: '', phone: '', service: '', message: '' })
    setStatus('idle')
  }

  return (
    <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
      <div className="max-w-6xl mx-auto px-5 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8" style={{ background: '#00C853' }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>
              Get In Touch
            </span>
            <div className="h-px w-8" style={{ background: '#00C853' }} />
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold leading-tight" style={{ color: '#0A1628' }}>
            Let&apos;s Build Your <span style={{ color: '#00C853' }}>Infrastructure</span>
          </h2>
          <p className="mt-3 text-[15px] max-w-lg mx-auto" style={{ color: '#64748B' }}>
            Tell us about your project and we&apos;ll get back to you within 24 hours with a tailored solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8">

          {/* Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border" style={{ border: '1px solid #E2E8F0' }}>
            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: '#F0FDF4' }}>
                  <CheckCircle2 size={32} color="#00C853" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#0A1628' }}>Message Sent!</h3>
                <p className="text-[14px] max-w-xs" style={{ color: '#64748B' }}>
                  We&apos;ll review your request and get back to you within 24 hours.
                </p>
                <button onClick={reset} className="mt-6 text-[13px] font-semibold hover:underline" style={{ color: '#00C853' }}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[12px] font-semibold mb-1.5" style={{ color: '#374151' }}>Full Name <span style={{ color: '#DC2626' }}>*</span></label>
                    <input
                      name="name" value={form.name} onChange={handle} required
                      placeholder="Ahmed Khan"
                      className="w-full px-4 py-2.5 rounded-xl text-[13px] outline-none transition-all"
                      style={{ border: '1.5px solid #E2E8F0', color: '#0A1628', background: '#F8FAFC' }}
                      onFocus={e => e.target.style.borderColor = '#00C853'}
                      onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold mb-1.5" style={{ color: '#374151' }}>Company Name <span style={{ color: '#DC2626' }}>*</span></label>
                    <input
                      name="company" value={form.company} onChange={handle} required
                      placeholder="Your Company Ltd."
                      className="w-full px-4 py-2.5 rounded-xl text-[13px] outline-none transition-all"
                      style={{ border: '1.5px solid #E2E8F0', color: '#0A1628', background: '#F8FAFC' }}
                      onFocus={e => e.target.style.borderColor = '#00C853'}
                      onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[12px] font-semibold mb-1.5" style={{ color: '#374151' }}>Email Address <span style={{ color: '#DC2626' }}>*</span></label>
                    <input
                      name="email" type="email" value={form.email} onChange={handle} required
                      placeholder="ahmed@company.com"
                      className="w-full px-4 py-2.5 rounded-xl text-[13px] outline-none transition-all"
                      style={{ border: '1.5px solid #E2E8F0', color: '#0A1628', background: '#F8FAFC' }}
                      onFocus={e => e.target.style.borderColor = '#00C853'}
                      onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold mb-1.5" style={{ color: '#374151' }}>Phone Number</label>
                    <input
                      name="phone" value={form.phone} onChange={handle}
                      placeholder="+92 300 0000000"
                      className="w-full px-4 py-2.5 rounded-xl text-[13px] outline-none transition-all"
                      style={{ border: '1.5px solid #E2E8F0', color: '#0A1628', background: '#F8FAFC' }}
                      onFocus={e => e.target.style.borderColor = '#00C853'}
                      onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-semibold mb-1.5" style={{ color: '#374151' }}>Service Required <span style={{ color: '#DC2626' }}>*</span></label>
                  <select
                    name="service" value={form.service} onChange={handle} required
                    className="w-full px-4 py-2.5 rounded-xl text-[13px] outline-none transition-all appearance-none"
                    style={{ border: '1.5px solid #E2E8F0', color: form.service ? '#0A1628' : '#94A3B8', background: '#F8FAFC' }}
                  >
                    <option value="">Select a service...</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-semibold mb-1.5" style={{ color: '#374151' }}>Tell us about your project <span style={{ color: '#DC2626' }}>*</span></label>
                  <textarea
                    name="message" value={form.message} onChange={handle} required rows={4}
                    placeholder="Describe your current setup, challenges, and what you're looking to achieve..."
                    className="w-full px-4 py-2.5 rounded-xl text-[13px] outline-none transition-all resize-none"
                    style={{ border: '1.5px solid #E2E8F0', color: '#0A1628', background: '#F8FAFC' }}
                    onFocus={e => e.target.style.borderColor = '#00C853'}
                    onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: '#00C853', color: '#0A1628' }}
                >
                  {status === 'sending' ? (
                    <><Loader2 size={16} className="animate-spin" /> Sending...</>
                  ) : (
                    <><ArrowRight size={16} /> Send Message</>
                  )}
                </button>

                <p className="text-center text-[11px]" style={{ color: '#94A3B8' }}>
                  We respond within 24 hours · No spam, ever
                </p>
              </form>
            )}
          </div>

          {/* Contact info sidebar */}
          <div className="flex flex-col gap-5">

            <div className="bg-white rounded-2xl p-6 border" style={{ border: '1px solid #E2E8F0' }}>
              <h3 className="text-[14px] font-bold mb-5" style={{ color: '#0A1628' }}>Contact Information</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail,    label: 'Email',    value: 'hello@infraspine.io',       href: 'mailto:hello@infraspine.io',  color: '#2563EB', bg: '#EFF6FF' },
                  { icon: Phone,   label: 'Phone',    value: '+92 300 1234567',            href: 'tel:+923001234567',           color: '#16A34A', bg: '#F0FDF4' },
                  { icon: MapPin,  label: 'Location', value: 'Karachi, Pakistan',          href: null,                          color: '#7C3AED', bg: '#F5F3FF' },
                  { icon: Clock,   label: 'Hours',    value: 'Mon–Fri, 9 AM – 6 PM PKT',  href: null,                          color: '#D97706', bg: '#FFFBEB' },
                ].map((item, i) => {
                  const Wrapper = item.href ? 'a' : 'div'
                  return (
                    <Wrapper key={i} {...(item.href ? { href: item.href } : {})} className="flex items-center gap-3 group">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: item.bg }}>
                        <item.icon size={16} color={item.color} />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: '#94A3B8' }}>{item.label}</p>
                        <p className="text-[13px] font-medium group-hover:text-green-600 transition-colors" style={{ color: '#0A1628' }}>{item.value}</p>
                      </div>
                    </Wrapper>
                  )
                })}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full mt-5 py-2.5 rounded-xl text-[13px] font-bold text-white transition-all hover:opacity-90"
                style={{ background: '#25D366' }}
              >
                <MessageCircle size={15} /> Chat on WhatsApp
              </a>
            </div>

            <div className="rounded-2xl p-6 border" style={{ background: '#F0FDF4', border: '1px solid #BBF7D0' }}>
              <h3 className="text-[13px] font-bold mb-3" style={{ color: '#0A1628' }}>What happens next?</h3>
              <div className="space-y-3">
                {[
                  'We review your requirements within 24 hours',
                  'A senior engineer schedules a discovery call',
                  'You receive a tailored proposal & timeline',
                  'Project kickoff within 1 week of approval',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5" style={{ background: '#00C853', color: '#fff' }}>
                      {i + 1}
                    </div>
                    <p className="text-[12.5px] leading-snug" style={{ color: '#475569' }}>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: '50+', label: 'Projects Delivered' },
                { value: '24hr', label: 'Response Time' },
                { value: '99%', label: 'Client Satisfaction' },
              ].map((s, i) => (
                <div key={i} className="text-center py-3 rounded-xl border" style={{ background: '#fff', borderColor: '#E2E8F0' }}>
                  <p className="text-[16px] font-black" style={{ color: '#00C853' }}>{s.value}</p>
                  <p className="text-[9px] font-medium" style={{ color: '#94A3B8' }}>{s.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
