'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Loader } from 'lucide-react'

const SERVICES = [
  'Managed IT Services', 'Cybersecurity', 'Physical Security (CCTV / Access Control)',
  'Cloud Solutions (M365 / Azure / AWS)', 'Network Infrastructure',
  'Software Development', 'Mobile App Development', 'ERP Development',
  'AI & Automation', 'IT Consultancy', 'IT Training', 'BPO Services',
  'Data Backup & Recovery', 'IT Procurement', 'Other',
]

const TIMELINES = ['ASAP', 'Within 1 month', '1–3 months', '3–6 months', 'Just exploring']
const SIZES = ['1–10 employees', '11–50 employees', '51–200 employees', '201–500 employees', '500+ employees']
const BUDGETS = ['Under PKR 500K', 'PKR 500K – 2M', 'PKR 2M – 10M', 'PKR 10M+', 'Not sure yet']

export default function QuoteForm() {
  const [selected, setSelected] = useState([])
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  function toggleService(s) {
    setSelected(p => p.includes(s) ? p.filter(x => x !== s) : [...p, s])
  }

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1400)
  }

  if (sent) {
    return (
      <div className="py-12 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: '#F0FDF4' }}>
          <CheckCircle size={32} style={{ color: '#00C853' }} />
        </div>
        <h3 className="text-[20px] font-black mb-2" style={{ color: '#0A1628' }}>Quote Request Received</h3>
        <p className="text-[14px] max-w-sm mx-auto" style={{ color: '#64748B' }}>
          Thank you! A senior Infraspine consultant will review your requirements and reach out within 4 business hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name + company */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-bold mb-1.5" style={{ color: '#374151' }}>Full Name *</label>
          <input required type="text" placeholder="Ahmed Khan"
            className="w-full rounded-xl px-4 py-3 text-[13.5px] border outline-none transition-all focus:ring-2"
            style={{ borderColor: '#D1D5DB', background: '#F9FAFB', color: '#111827' }} />
        </div>
        <div>
          <label className="block text-[13px] font-bold mb-1.5" style={{ color: '#374151' }}>Company Name *</label>
          <input required type="text" placeholder="ABC Corporation"
            className="w-full rounded-xl px-4 py-3 text-[13.5px] border outline-none transition-all focus:ring-2"
            style={{ borderColor: '#D1D5DB', background: '#F9FAFB', color: '#111827' }} />
        </div>
      </div>

      {/* Email + phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-bold mb-1.5" style={{ color: '#374151' }}>Work Email *</label>
          <input required type="email" placeholder="ahmed@company.com"
            className="w-full rounded-xl px-4 py-3 text-[13.5px] border outline-none transition-all"
            style={{ borderColor: '#D1D5DB', background: '#F9FAFB', color: '#111827' }} />
        </div>
        <div>
          <label className="block text-[13px] font-bold mb-1.5" style={{ color: '#374151' }}>Phone Number</label>
          <input type="tel" placeholder="+92 21 ..."
            className="w-full rounded-xl px-4 py-3 text-[13.5px] border outline-none transition-all"
            style={{ borderColor: '#D1D5DB', background: '#F9FAFB', color: '#111827' }} />
        </div>
      </div>

      {/* Services */}
      <div>
        <label className="block text-[13px] font-bold mb-2.5" style={{ color: '#374151' }}>Services Required * <span className="font-normal" style={{ color: '#9CA3AF' }}>(select all that apply)</span></label>
        <div className="flex flex-wrap gap-2">
          {SERVICES.map(s => (
            <button key={s} type="button" onClick={() => toggleService(s)}
              className="px-3.5 py-2 rounded-full text-[12px] font-semibold border transition-all"
              style={selected.includes(s)
                ? { background: '#00C853', color: '#0A1628', borderColor: '#00C853' }
                : { background: '#F9FAFB', color: '#374151', borderColor: '#D1D5DB' }}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Company size + timeline + budget */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-[13px] font-bold mb-1.5" style={{ color: '#374151' }}>Company Size</label>
          <select className="w-full rounded-xl px-4 py-3 text-[13.5px] border outline-none appearance-none"
            style={{ borderColor: '#D1D5DB', background: '#F9FAFB', color: '#111827' }}>
            <option value="">Select...</option>
            {SIZES.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-[13px] font-bold mb-1.5" style={{ color: '#374151' }}>Timeline</label>
          <select className="w-full rounded-xl px-4 py-3 text-[13.5px] border outline-none appearance-none"
            style={{ borderColor: '#D1D5DB', background: '#F9FAFB', color: '#111827' }}>
            <option value="">Select...</option>
            {TIMELINES.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-[13px] font-bold mb-1.5" style={{ color: '#374151' }}>Budget Range</label>
          <select className="w-full rounded-xl px-4 py-3 text-[13.5px] border outline-none appearance-none"
            style={{ borderColor: '#D1D5DB', background: '#F9FAFB', color: '#111827' }}>
            <option value="">Select...</option>
            {BUDGETS.map(b => <option key={b}>{b}</option>)}
          </select>
        </div>
      </div>

      {/* Requirements */}
      <div>
        <label className="block text-[13px] font-bold mb-1.5" style={{ color: '#374151' }}>Describe Your IT Challenge *</label>
        <textarea required rows={4} placeholder="Tell us about your current IT setup, what is not working, or what you are looking to achieve..."
          className="w-full rounded-xl px-4 py-3 text-[13.5px] border outline-none resize-none transition-all"
          style={{ borderColor: '#D1D5DB', background: '#F9FAFB', color: '#111827' }} />
      </div>

      <button type="submit" disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-[14px] font-black transition-all hover:opacity-90 disabled:opacity-70"
        style={{ background: '#00C853', color: '#0A1628' }}>
        {loading ? <Loader size={16} className="animate-spin" /> : <ArrowRight size={16} />}
        {loading ? 'Sending Request...' : 'Submit Quote Request'}
      </button>

      <p className="text-center text-[11.5px]" style={{ color: '#9CA3AF' }}>
        By submitting, you agree to our Privacy Policy. We never share your information with third parties.
      </p>
    </form>
  )
}
