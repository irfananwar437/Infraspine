'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import {
  ArrowRight, Check, ChevronRight, ChevronDown, Star, Mail, Phone, MapPin,
  Clock, CheckCircle2, Loader2, MessageCircle, Building2, Globe, Headset,
  Shield, Zap, Server, Users,
} from 'lucide-react'

// ─── Services for dropdown ──────────────────────────────────────────────────
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

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const FAQS = [
  { q: 'How quickly do you respond to inquiries?', a: 'We respond to all inquiries within 24 hours during business days. For urgent infrastructure issues, our support team is available via WhatsApp for faster response.' },
  { q: 'Do you offer free consultations?', a: 'Yes — every engagement starts with a free 60-minute discovery call where we understand your current setup, challenges, and goals. There\'s no obligation or sales pressure.' },
  { q: 'Can you work with companies outside Pakistan?', a: 'Absolutely. While our head office is in Karachi, we serve clients across the Middle East, Southeast Asia, and beyond. Many of our projects are managed remotely with on-site visits as needed.' },
  { q: 'What information should I include in my message?', a: 'The more detail the better — describe your current IT setup, the problems you\'re facing, your team size, and what you\'re hoping to achieve. This helps us prepare a relevant proposal faster.' },
  { q: 'How long does a typical project take?', a: 'It varies by scope — from 5 weeks for automation projects to 20 weeks for large infrastructure overhauls. We provide milestone-based timelines in every proposal so you know exactly what to expect.' },
]

function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section className="py-16 sm:py-20" style={{ background: '#fff' }}>
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-6" style={{ background: '#00C853' }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>FAQ</span>
            <div className="h-px w-6" style={{ background: '#00C853' }} />
          </div>
          <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
            Frequently Asked <span style={{ color: '#00C853' }}>Questions</span>
          </h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-xl border overflow-hidden transition-all"
              style={{ borderColor: open === i ? '#00C85340' : '#E2E8F0', background: open === i ? '#F0FDF4' : '#fff' }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className="flex items-center justify-between w-full px-6 py-4 text-left">
                <span className="text-[14px] font-bold pr-4" style={{ color: '#0A1628' }}>{faq.q}</span>
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all"
                  style={{ background: open === i ? '#00C853' : '#F1F5F9', transform: open === i ? 'rotate(90deg)' : '' }}>
                  <ChevronRight size={14} style={{ color: open === i ? '#fff' : '#64748B' }} />
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <div className="h-px mb-4" style={{ background: '#E2E8F0' }} />
                  <p className="text-[13.5px] leading-relaxed" style={{ color: '#475569' }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Main page ──────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [status, setStatus] = useState('idle')
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
    <div className="min-h-screen" style={{ background: '#fff' }}>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#0A1628' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-6xl mx-auto px-5 lg:px-8 pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Contact Us</span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </div>
            <h1 className="text-[32px] sm:text-[44px] lg:text-[52px] font-black leading-[1.08] tracking-tight text-white mb-5">
              Let&apos;s Build Your<br />
              <span style={{ color: '#00C853' }}>Infrastructure Together</span>
            </h1>
            <p className="text-[15px] sm:text-[17px] leading-relaxed mb-8 max-w-xl" style={{ color: '#94A3B8' }}>
              Whether you need a complete IT overhaul, a custom ERP, or a call center from scratch — tell us about your project and we&apos;ll respond within 24 hours.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#form"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#00C853', color: '#0A1628' }}>
                Send a Message <ArrowRight size={15} />
              </a>
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                <MessageCircle size={15} /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 mt-10">
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '24hr', label: 'Response Time' },
              { value: '99%', label: 'Client Satisfaction' },
              { value: '6+', label: 'Industries Served' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-[22px] sm:text-[28px] font-black" style={{ color: '#00C853' }}>{s.value}</span>
                <span className="text-[11px] font-medium leading-tight" style={{ color: '#64748B' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Contact Cards ── */}
      <section className="py-12 sm:py-16" style={{ background: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Mail,    label: 'Email Us',       value: 'hello@infraspine.io',       sub: 'We reply within 24 hours',      href: 'mailto:hello@infraspine.io',  color: '#2563EB', bg: '#EFF6FF' },
              { icon: Phone,   label: 'Call Us',        value: '+92 300 1234567',            sub: 'Mon–Fri, 9 AM – 6 PM PKT',      href: 'tel:+923001234567',           color: '#16A34A', bg: '#F0FDF4' },
              { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with Us',               sub: 'Fastest way to reach us',        href: 'https://wa.me/923001234567',  color: '#25D366', bg: '#F0FDF4' },
              { icon: MapPin,  label: 'Visit Us',       value: 'Karachi, Pakistan',          sub: 'Head office + remote ops',       href: null,                          color: '#7C3AED', bg: '#F5F3FF' },
            ].map((c, i) => {
              const Wrapper = c.href ? 'a' : 'div'
              return (
                <Wrapper key={i} {...(c.href ? { href: c.href, ...(c.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {}) } : {})}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border hover:shadow-lg transition-all group"
                  style={{ borderColor: '#E2E8F0' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: c.bg }}>
                    <c.icon size={20} color={c.color} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider mb-0.5" style={{ color: '#94A3B8' }}>{c.label}</p>
                    <p className="text-[14px] font-bold group-hover:text-green-600 transition-colors" style={{ color: '#0A1628' }}>{c.value}</p>
                    <p className="text-[11px] mt-0.5" style={{ color: '#94A3B8' }}>{c.sub}</p>
                  </div>
                </Wrapper>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Form + Sidebar ── */}
      <section id="form" className="py-16 sm:py-20" style={{ background: '#fff' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Send a Message</span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </div>
            <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
              Tell Us About Your <span style={{ color: '#00C853' }}>Project</span>
            </h2>
            <p className="text-[15px] max-w-lg mx-auto" style={{ color: '#64748B' }}>
              Fill out the form below and our team will get back to you with a tailored solution within 24 hours.
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
                      name="message" value={form.message} onChange={handle} required rows={5}
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

            {/* Sidebar */}
            <div className="flex flex-col gap-5">

              {/* What happens next */}
              <div className="rounded-2xl p-6" style={{ background: '#0A1628' }}>
                <h3 className="text-[13px] font-bold uppercase tracking-wider mb-5" style={{ color: '#94A3B8' }}>What Happens Next</h3>
                <div className="space-y-4">
                  {[
                    { step: '01', title: 'We Review Your Needs', desc: 'Our team analyzes your requirements within 24 hours.' },
                    { step: '02', title: 'Discovery Call', desc: 'A free 60-minute consultation to understand your business.' },
                    { step: '03', title: 'Custom Proposal', desc: 'You receive a tailored system design with timeline & pricing.' },
                    { step: '04', title: 'Project Kickoff', desc: 'We start building within 1 week of approval.' },
                  ].map(s => (
                    <div key={s.step} className="flex gap-3">
                      <span className="text-[12px] font-black font-mono w-6 flex-shrink-0 mt-0.5" style={{ color: '#00C853' }}>{s.step}</span>
                      <div>
                        <p className="text-[13px] font-semibold text-white">{s.title}</p>
                        <p className="text-[12px] mt-0.5" style={{ color: '#64748B' }}>{s.desc}</p>
                      </div>
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

              {/* WhatsApp */}
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[14px] font-bold text-white transition-all hover:opacity-90"
                style={{ background: '#25D366' }}
              >
                <MessageCircle size={16} /> Prefer WhatsApp? Chat Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services We Offer ── */}
      <section className="py-16" style={{ background: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Our Expertise</span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </div>
            <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
              How Can We <span style={{ color: '#00C853' }}>Help?</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Server,   title: 'IT Infrastructure',     desc: 'Server rooms, networking, cabling, cloud migration, and managed IT support.',              color: '#2563EB', bg: '#EFF6FF' },
              { icon: Shield,   title: 'Security Systems',      desc: 'CCTV, access control, biometrics, and AI-powered surveillance for your facilities.',       color: '#7C3AED', bg: '#F5F3FF' },
              { icon: Building2,title: 'ERP & CRM Development', desc: 'Custom business software — finance, HR, inventory, and compliance modules.',               color: '#16A34A', bg: '#F0FDF4' },
              { icon: Zap,      title: 'AI & Automation',       desc: 'n8n workflows, chatbots, WhatsApp automation, and intelligent process optimization.',      color: '#D97706', bg: '#FFFBEB' },
              { icon: Headset,  title: 'Call Center Setup',     desc: 'Complete PBX, IVR, agent workstations, CRM integration, and quality monitoring.',          color: '#0F766E', bg: '#F0FDFA' },
              { icon: Globe,    title: 'Digital Transformation', desc: 'End-to-end modernization — from legacy systems to unified, automated operations.',        color: '#DC2626', bg: '#FEF2F2' },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl border hover:shadow-lg transition-all"
                style={{ borderColor: '#E2E8F0' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: s.bg }}>
                  <s.icon size={18} color={s.color} />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold mb-1" style={{ color: '#0A1628' }}>{s.title}</h3>
                  <p className="text-[12px] leading-relaxed" style={{ color: '#64748B' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ />

      {/* ── Map / Office ── */}
      <section className="py-16" style={{ background: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Our Office</span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </div>
            <h2 className="text-[24px] sm:text-[36px] font-black mb-3" style={{ color: '#0A1628' }}>
              Based in <span style={{ color: '#00C853' }}>Karachi</span>, Serving Globally
            </h2>
            <p className="text-[15px] max-w-lg mx-auto" style={{ color: '#64748B' }}>
              Our head office is in Karachi, Pakistan with remote teams supporting clients across the Middle East and Asia.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: '#E2E8F0', minHeight: 320 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6828820993!2d66.88500674!3d25.19361575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1"
                width="100%" height="100%" style={{ border: 0, minHeight: 320 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="InfraSpine Office Location"
              />
            </div>

            {/* Office details */}
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-2xl p-6 border" style={{ borderColor: '#E2E8F0' }}>
                <h3 className="text-[14px] font-bold mb-4" style={{ color: '#0A1628' }}>Head Office</h3>
                <div className="space-y-3">
                  {[
                    { icon: MapPin, label: 'Karachi, Sindh, Pakistan',      color: '#7C3AED', bg: '#F5F3FF' },
                    { icon: Clock,  label: 'Mon–Fri, 9:00 AM – 6:00 PM PKT', color: '#D97706', bg: '#FFFBEB' },
                    { icon: Mail,   label: 'hello@infraspine.io',            color: '#2563EB', bg: '#EFF6FF' },
                    { icon: Phone,  label: '+92 300 1234567',                color: '#16A34A', bg: '#F0FDF4' },
                  ].map((d, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: d.bg }}>
                        <d.icon size={14} color={d.color} />
                      </div>
                      <span className="text-[13px] font-medium" style={{ color: '#0A1628' }}>{d.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border" style={{ borderColor: '#E2E8F0' }}>
                <h3 className="text-[14px] font-bold mb-4" style={{ color: '#0A1628' }}>Remote Operations</h3>
                <div className="space-y-2">
                  {[
                    'Remote IT management & monitoring worldwide',
                    'On-site deployment teams available across Pakistan',
                    'Regional support for Middle East & Southeast Asia',
                    'Flexible engagement — project-based or retainer',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#F0FDF4' }}>
                        <Check size={9} color="#16A34A" strokeWidth={3} />
                      </div>
                      <span className="text-[12.5px] leading-relaxed" style={{ color: '#475569' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-20 text-center" style={{ background: '#0A1628' }}>
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-6" style={{ background: '#00C853' }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Ready?</span>
            <div className="h-px w-6" style={{ background: '#00C853' }} />
          </div>
          <h2 className="text-[24px] sm:text-[40px] font-black text-white mb-4 leading-tight">
            Don&apos;t Wait — Let&apos;s<br /><span style={{ color: '#00C853' }}>Get Started Today</span>
          </h2>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
            Every day without proper infrastructure costs you time, money, and competitive edge. Reach out now and get a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#form"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
              style={{ background: '#00C853', color: '#0A1628' }}>
              Send a Message <ArrowRight size={15} />
            </a>
            <a href="tel:+923001234567"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
              style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
              <Phone size={15} /> Call Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
