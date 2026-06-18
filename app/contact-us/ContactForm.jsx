'use client'
import { useState } from 'react'
import {
  Phone, Mail, MapPin, MessageCircle, Clock, Send,
  Server, Cloud, ShieldCheck, Zap, Users, BookOpen, Briefcase,
  CheckCircle,
} from 'lucide-react'

const INQUIRY_TYPES = [
  { value: 'managed-it',    label: 'Managed IT Services', icon: Server       },
  { value: 'cloud',         label: 'Cloud Solutions',      icon: Cloud        },
  { value: 'cybersecurity', label: 'Cyber Security',       icon: ShieldCheck  },
  { value: 'ai-automation', label: 'AI & Automation',      icon: Zap          },
  { value: 'software',      label: 'Software Development', icon: Briefcase    },
  { value: 'bpo',           label: 'BPO Services',         icon: Users        },
  { value: 'training',      label: 'IT Training',          icon: BookOpen     },
  { value: 'general',       label: 'General Enquiry',      icon: MessageCircle},
]

export default function ContactForm() {
  const [selected, setSelected] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="grid lg:grid-cols-[1fr_420px] gap-12">

      {/* Form */}
      <div className="bg-white rounded-2xl border p-8 sm:p-10" style={{ borderColor: '#E2E8F0', boxShadow: '0 8px 40px rgba(10,22,40,0.06)' }}>
        {submitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: '#F0FDF4' }}>
              <CheckCircle size={32} style={{ color: '#00C853' }} />
            </div>
            <h2 className="text-[22px] font-black mb-3" style={{ color: '#0A1628' }}>Message Received</h2>
            <p className="text-[14px] leading-relaxed max-w-sm mx-auto" style={{ color: '#64748B' }}>
              Thank you for reaching out. A member of our team will be in touch within 2 business hours.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-[22px] sm:text-[26px] font-black mb-2" style={{ color: '#0A1628' }}>Send Us a Message</h2>
              <p className="text-[13.5px]" style={{ color: '#64748B' }}>Fill in the form below and we will respond within 2 business hours.</p>
            </div>

            <div className="mb-6">
              <label className="block text-[12px] font-bold uppercase tracking-widest mb-3" style={{ color: '#64748B' }}>
                What are you enquiring about?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {INQUIRY_TYPES.map(type => (
                  <button key={type.value} type="button" onClick={() => setSelected(type.value)}
                    className="flex flex-col items-center gap-1.5 p-3 rounded-xl border text-[11px] font-bold text-center transition-all"
                    style={selected === type.value
                      ? { background: '#F0FDF4', borderColor: '#00C853', color: '#00C853' }
                      : { background: '#F8FAFC', borderColor: '#E2E8F0', color: '#64748B' }
                    }>
                    <type.icon size={16} strokeWidth={1.8} />
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: '#64748B' }}>Full Name *</label>
                  <input id="name" type="text" required placeholder="Your full name"
                    value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border text-[14px]"
                    style={{ borderColor: '#E2E8F0', color: '#0A1628', background: '#fff', outline: 'none' }}
                    onFocus={e => e.target.style.borderColor = '#00C853'}
                    onBlur={e => e.target.style.borderColor = '#E2E8F0'} />
                </div>
                <div>
                  <label htmlFor="company" className="block text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: '#64748B' }}>Company Name</label>
                  <input id="company" type="text" placeholder="Your company name"
                    value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border text-[14px]"
                    style={{ borderColor: '#E2E8F0', color: '#0A1628', background: '#fff', outline: 'none' }}
                    onFocus={e => e.target.style.borderColor = '#00C853'}
                    onBlur={e => e.target.style.borderColor = '#E2E8F0'} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: '#64748B' }}>Email Address *</label>
                  <input id="email" type="email" required placeholder="your@company.com"
                    value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border text-[14px]"
                    style={{ borderColor: '#E2E8F0', color: '#0A1628', background: '#fff', outline: 'none' }}
                    onFocus={e => e.target.style.borderColor = '#00C853'}
                    onBlur={e => e.target.style.borderColor = '#E2E8F0'} />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: '#64748B' }}>Phone Number</label>
                  <input id="phone" type="tel" placeholder="+92 300 000 0000"
                    value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border text-[14px]"
                    style={{ borderColor: '#E2E8F0', color: '#0A1628', background: '#fff', outline: 'none' }}
                    onFocus={e => e.target.style.borderColor = '#00C853'}
                    onBlur={e => e.target.style.borderColor = '#E2E8F0'} />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[12px] font-bold uppercase tracking-widest mb-2" style={{ color: '#64748B' }}>Tell Us About Your Project *</label>
                <textarea id="message" required rows={5}
                  placeholder="Describe your requirements, current setup, or the challenge you are trying to solve..."
                  value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border text-[14px] resize-none"
                  style={{ borderColor: '#E2E8F0', color: '#0A1628', background: '#fff', outline: 'none' }}
                  onFocus={e => e.target.style.borderColor = '#00C853'}
                  onBlur={e => e.target.style.borderColor = '#E2E8F0'} />
              </div>

              <button type="submit"
                className="w-full py-4 rounded-xl text-[14px] font-bold transition-all hover:opacity-90 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                style={{ background: '#00C853', color: '#0A1628' }}>
                <Send size={15} />
                Send Message
              </button>

              <p className="text-[11px] text-center" style={{ color: '#94A3B8' }}>
                By submitting, you agree to our privacy policy. We will respond within 2 business hours.
              </p>
            </form>
          </>
        )}
      </div>

      {/* Contact Info */}
      <div className="space-y-5">
        <div className="rounded-2xl p-6 border bg-white" style={{ borderColor: '#E2E8F0' }}>
          <h3 className="text-[16px] font-black mb-5" style={{ color: '#0A1628' }}>Direct Contact</h3>
          <div className="space-y-4">
            <a href="tel:+923001234567"
              className="flex items-center gap-4 p-4 rounded-xl border transition-all hover:border-green-200 hover:bg-green-50"
              style={{ borderColor: '#E2E8F0' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#F0FDF4' }}>
                <Phone size={18} style={{ color: '#00C853' }} />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider mb-0.5" style={{ color: '#94A3B8' }}>Phone</p>
                <p className="text-[14px] font-bold" style={{ color: '#0A1628' }}>+92 300 123 4567</p>
              </div>
            </a>

            <a href="mailto:hello@infraspine.com"
              className="flex items-center gap-4 p-4 rounded-xl border transition-all hover:border-blue-200 hover:bg-blue-50"
              style={{ borderColor: '#E2E8F0' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#EFF6FF' }}>
                <Mail size={18} style={{ color: '#2563EB' }} />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider mb-0.5" style={{ color: '#94A3B8' }}>Email</p>
                <p className="text-[14px] font-bold" style={{ color: '#0A1628' }}>hello@infraspine.com</p>
              </div>
            </a>

            <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border transition-all hover:border-green-300 hover:bg-green-50"
              style={{ borderColor: '#E2E8F0' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#F0FDF4' }}>
                <MessageCircle size={18} style={{ color: '#25D366' }} />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider mb-0.5" style={{ color: '#94A3B8' }}>WhatsApp</p>
                <p className="text-[14px] font-bold" style={{ color: '#0A1628' }}>Chat Now</p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-4 rounded-xl border" style={{ borderColor: '#E2E8F0' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#F5F3FF' }}>
                <MapPin size={18} style={{ color: '#7C3AED' }} />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider mb-0.5" style={{ color: '#94A3B8' }}>Location</p>
                <p className="text-[14px] font-bold" style={{ color: '#0A1628' }}>Karachi, Pakistan</p>
                <p className="text-[12px]" style={{ color: '#64748B' }}>Serving clients globally</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-6 border bg-white" style={{ borderColor: '#E2E8F0' }}>
          <div className="flex items-center gap-2.5 mb-5">
            <Clock size={16} style={{ color: '#2563EB' }} />
            <h3 className="text-[15px] font-black" style={{ color: '#0A1628' }}>Response Commitments</h3>
          </div>
          <div className="space-y-3">
            {[
              { channel: 'WhatsApp',        time: 'Under 30 minutes', color: '#25D366' },
              { channel: 'Email (General)', time: 'Under 2 hours',    color: '#2563EB' },
              { channel: 'Phone',           time: 'Immediate',        color: '#00C853' },
              { channel: 'Quote Request',   time: 'Under 24 hours',   color: '#D97706' },
            ].map(({ channel, time, color }) => (
              <div key={channel} className="flex items-center justify-between py-2.5 border-b last:border-0" style={{ borderColor: '#F1F5F9' }}>
                <span className="text-[13px]" style={{ color: '#475569' }}>{channel}</span>
                <span className="text-[12px] font-bold" style={{ color }}>{time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl p-6 border" style={{ background: '#071a37', borderColor: '#17355f' }}>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#00C853' }} />
            <p className="text-[12px] font-bold text-white">24/7 Emergency IT Support</p>
          </div>
          <p className="text-[13px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
            For managed service clients with critical infrastructure incidents, our NOC team is available around the clock.
          </p>
          <a href="tel:+923001234567" className="inline-flex items-center gap-2 text-[13px] font-bold" style={{ color: '#00C853' }}>
            <Phone size={13} />
            Emergency Line
          </a>
        </div>
      </div>

    </div>
  )
}
