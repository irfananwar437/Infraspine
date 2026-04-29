'use client'
import { useState } from 'react'
import { Send, Phone, Mail, MapPin, CheckCircle2, Loader2 } from 'lucide-react'

const SERVICES = [
  'IT Infrastructure',
  'ERP Development',
  'Automation & AI',
  'Monitoring & Control',
  'Full System Build',
  'Other',
]

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate submission — replace with your real API endpoint
    await new Promise(r => setTimeout(r, 1500))
    setStatus('sent')
  }

  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-tag mb-4">Get In Touch</div>
          <h2 className="text-[38px] lg:text-[48px] font-black text-navy-900 leading-tight mb-5">
            Ready to Build Your<br />
            <span className="text-blue-600">Complete System?</span>
          </h2>
          <p className="text-[16px] text-slate-500 max-w-xl mx-auto leading-relaxed">
            Tell us about your infrastructure needs. We'll respond within 24 hours with a custom proposal.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start">

          {/* ── Form ── */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-10 shadow-card">
            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle2 size={32} className="text-green-500" />
                </div>
                <h3 className="text-[22px] font-black text-navy-900 mb-2">Message Received!</h3>
                <p className="text-slate-500 text-[15px] max-w-xs leading-relaxed">
                  Our team will review your requirements and get back to you within 24 hours.
                </p>
                <button onClick={() => setStatus('idle')} className="mt-6 text-[13px] text-blue-600 hover:underline font-medium">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-[13px] font-semibold text-slate-700 mb-1.5">Full Name <span className="text-red-400">*</span></label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-[14px] text-slate-800 placeholder:text-slate-400 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-[13px] font-semibold text-slate-700 mb-1.5">Company Name <span className="text-red-400">*</span></label>
                    <input id="company" name="company" type="text" required value={form.company} onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-[14px] text-slate-800 placeholder:text-slate-400 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-[13px] font-semibold text-slate-700 mb-1.5">Email Address <span className="text-red-400">*</span></label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-[14px] text-slate-800 placeholder:text-slate-400 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[13px] font-semibold text-slate-700 mb-1.5">Phone Number</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                      placeholder="+92 300 0000000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-[14px] text-slate-800 placeholder:text-slate-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-[13px] font-semibold text-slate-700 mb-1.5">Service Interested In</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-[14px] text-slate-800 bg-white transition-all appearance-none">
                    <option value="">Select a service...</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[13px] font-semibold text-slate-700 mb-1.5">Tell Us About Your Needs <span className="text-red-400">*</span></label>
                  <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange}
                    placeholder="Describe your current infrastructure, challenges, and what you're looking to build or improve..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none text-[14px] text-slate-800 placeholder:text-slate-400 transition-all resize-none"
                  />
                </div>

                <button type="submit" disabled={status === 'sending'}
                  className="btn-green w-full justify-center py-3.5 text-[15px] disabled:opacity-70 disabled:cursor-not-allowed">
                  {status === 'sending' ? (
                    <><Loader2 size={18} className="animate-spin" aria-hidden="true" /> Sending...</>
                  ) : (
                    <><Send size={17} aria-hidden="true" /> Send Message</>
                  )}
                </button>

                <p className="text-[12px] text-slate-400 text-center">
                  We respond within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </div>

          {/* ── Contact info sidebar ── */}
          <div className="space-y-6">

            {/* Info cards */}
            {[
              { icon: Phone, label: 'Call Us', value: '+92 300 1234567', sub: 'Mon–Fri, 9am–6pm PKT', href: 'tel:+923001234567', color: 'bg-blue-50 text-blue-600' },
              { icon: Mail,  label: 'Email Us', value: 'hello@infraspine.io', sub: 'We reply within 24 hours', href: 'mailto:hello@infraspine.io', color: 'bg-green-50 text-green-600' },
              { icon: MapPin,label: 'Head Office', value: 'Karachi, Pakistan', sub: 'Global remote operations', href: '#', color: 'bg-purple-50 text-purple-600' },
            ].map(c => (
              <a key={c.label} href={c.href}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-card transition-all group">
                <div className={`w-11 h-11 rounded-xl ${c.color} flex items-center justify-center flex-shrink-0`}>
                  <c.icon size={20} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{c.label}</div>
                  <div className="text-[15px] font-bold text-navy-900 group-hover:text-blue-600 transition-colors">{c.value}</div>
                  <div className="text-[12px] text-slate-400 mt-0.5">{c.sub}</div>
                </div>
              </a>
            ))}

            {/* What happens next */}
            <div className="bg-navy-900 rounded-2xl p-6 text-white">
              <div className="text-[13px] font-bold text-slate-400 uppercase tracking-wider mb-5">What Happens Next</div>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'We Review Your Needs', desc: 'Our team analyzes your requirements within 24 hours.' },
                  { step: '02', title: 'Architecture Proposal', desc: 'We send a custom system design tailored to your business.' },
                  { step: '03', title: 'Kick-off Call', desc: 'A free 60-minute consultation to align on scope and timelines.' },
                ].map(s => (
                  <div key={s.step} className="flex gap-3">
                    <span className="text-[12px] font-black font-mono text-blue-400 w-6 flex-shrink-0 mt-0.5">{s.step}</span>
                    <div>
                      <div className="text-[13px] font-semibold text-white">{s.title}</div>
                      <div className="text-[12px] text-slate-400 mt-0.5">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
