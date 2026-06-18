'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Loader } from 'lucide-react'

const MEETING_TYPES = [
  { id: 'strategy',  label: 'IT Strategy Session',   duration: '60 min' },
  { id: 'security',  label: 'Cybersecurity Review',  duration: '60 min' },
  { id: 'cloud',     label: 'Cloud Readiness Call',  duration: '45 min' },
  { id: 'software',  label: 'Software Discovery',    duration: '60 min' },
]

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday']
const SLOTS = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM']
const FORMATS = ['Video Call (Teams / Meet)', 'In-Person (Karachi)', 'Phone Call']

export default function BookingForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedType, setSelectedType] = useState('')
  const [selectedDay, setSelectedDay] = useState('')
  const [selectedSlot, setSelectedSlot] = useState('')

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
      <div className="py-10 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: '#F0FDF4' }}>
          <CheckCircle size={32} style={{ color: '#00C853' }} />
        </div>
        <h3 className="text-[20px] font-black mb-2" style={{ color: '#0A1628' }}>Booking Request Received!</h3>
        <p className="text-[14px] max-w-sm mx-auto" style={{ color: '#64748B' }}>
          We will confirm your session within 2 business hours and send a calendar invite with the meeting link or address.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Session type */}
      <div>
        <label className="block text-[13px] font-bold mb-2" style={{ color: '#374151' }}>Session Type *</label>
        <div className="grid sm:grid-cols-2 gap-2">
          {MEETING_TYPES.map(m => (
            <button key={m.id} type="button" onClick={() => setSelectedType(m.id)}
              className="text-left rounded-xl px-4 py-3 border text-[13px] font-semibold transition-all"
              style={selectedType === m.id
                ? { background: '#F0FDF4', borderColor: '#00C853', color: '#0A1628' }
                : { background: '#F9FAFB', borderColor: '#D1D5DB', color: '#374151' }}>
              {m.label}
              <span className="block text-[11px] font-normal mt-0.5" style={{ color: '#9CA3AF' }}>{m.duration}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Name + company */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-bold mb-1.5" style={{ color: '#374151' }}>Full Name *</label>
          <input required type="text" placeholder="Ahmed Khan"
            className="w-full rounded-xl px-4 py-3 text-[13.5px] border outline-none"
            style={{ borderColor: '#D1D5DB', background: '#F9FAFB', color: '#111827' }} />
        </div>
        <div>
          <label className="block text-[13px] font-bold mb-1.5" style={{ color: '#374151' }}>Company *</label>
          <input required type="text" placeholder="Your Company"
            className="w-full rounded-xl px-4 py-3 text-[13.5px] border outline-none"
            style={{ borderColor: '#D1D5DB', background: '#F9FAFB', color: '#111827' }} />
        </div>
      </div>

      {/* Email + phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-bold mb-1.5" style={{ color: '#374151' }}>Work Email *</label>
          <input required type="email" placeholder="ahmed@company.com"
            className="w-full rounded-xl px-4 py-3 text-[13.5px] border outline-none"
            style={{ borderColor: '#D1D5DB', background: '#F9FAFB', color: '#111827' }} />
        </div>
        <div>
          <label className="block text-[13px] font-bold mb-1.5" style={{ color: '#374151' }}>Phone *</label>
          <input required type="tel" placeholder="+92 21 ..."
            className="w-full rounded-xl px-4 py-3 text-[13.5px] border outline-none"
            style={{ borderColor: '#D1D5DB', background: '#F9FAFB', color: '#111827' }} />
        </div>
      </div>

      {/* Format */}
      <div>
        <label className="block text-[13px] font-bold mb-2" style={{ color: '#374151' }}>Meeting Format *</label>
        <div className="flex flex-wrap gap-2">
          {FORMATS.map(f => (
            <button key={f} type="button"
              className="px-3.5 py-2 rounded-full text-[12px] font-semibold border transition-all"
              style={{ background: '#F9FAFB', borderColor: '#D1D5DB', color: '#374151' }}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Day preference */}
      <div>
        <label className="block text-[13px] font-bold mb-2" style={{ color: '#374151' }}>Preferred Day *</label>
        <div className="grid grid-cols-4 gap-2">
          {DAYS.map(d => (
            <button key={d} type="button" onClick={() => setSelectedDay(d)}
              className="py-2.5 rounded-xl text-[12px] font-bold border transition-all"
              style={selectedDay === d
                ? { background: '#00C853', borderColor: '#00C853', color: '#0A1628' }
                : { background: '#F9FAFB', borderColor: '#D1D5DB', color: '#374151' }}>
              {d.slice(0, 3)}
            </button>
          ))}
        </div>
      </div>

      {/* Time slot */}
      <div>
        <label className="block text-[13px] font-bold mb-2" style={{ color: '#374151' }}>Preferred Time *</label>
        <div className="grid grid-cols-3 gap-2">
          {SLOTS.map(s => (
            <button key={s} type="button" onClick={() => setSelectedSlot(s)}
              className="py-2.5 rounded-xl text-[12px] font-bold border transition-all"
              style={selectedSlot === s
                ? { background: '#00C853', borderColor: '#00C853', color: '#0A1628' }
                : { background: '#F9FAFB', borderColor: '#D1D5DB', color: '#374151' }}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Context */}
      <div>
        <label className="block text-[13px] font-bold mb-1.5" style={{ color: '#374151' }}>
          What would you like to discuss? <span className="font-normal" style={{ color: '#9CA3AF' }}>(optional)</span>
        </label>
        <textarea rows={3} placeholder="Brief overview of your IT situation or question..."
          className="w-full rounded-xl px-4 py-3 text-[13.5px] border outline-none resize-none"
          style={{ borderColor: '#D1D5DB', background: '#F9FAFB', color: '#111827' }} />
      </div>

      <button type="submit" disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-[14px] font-black transition-all hover:opacity-90 disabled:opacity-70"
        style={{ background: '#00C853', color: '#0A1628' }}>
        {loading ? <Loader size={16} className="animate-spin" /> : <ArrowRight size={16} />}
        {loading ? 'Booking Session...' : 'Confirm Booking Request'}
      </button>

      <p className="text-center text-[11.5px]" style={{ color: '#9CA3AF' }}>
        We will send a calendar confirmation with video link or address within 2 business hours.
      </p>
    </form>
  )
}
