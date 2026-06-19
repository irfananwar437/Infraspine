'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import CTABanner from '@/components/ui/CTABanner'
import Link from 'next/link'
import {
  FileText, Download, Video, ShieldCheck, Cloud, Network,
  Cpu, Server, X, CheckCircle, Play, ArrowRight, Loader, ExternalLink,
} from 'lucide-react'
import { WEBINARS } from './webinar-data'

const CATEGORIES = ['All', 'Cybersecurity', 'Cloud & Microsoft', 'Networking', 'AI & Automation', 'IT Management']

const RESOURCES = [
  {
    type: 'Checklist', cat: 'Cybersecurity', icon: ShieldCheck, color: '#DC2626', bg: '#FEF2F2',
    title: 'The Ultimate Cybersecurity Checklist for SMBs',
    desc: '47 actionable security controls your business should have in place — covering network, endpoint, email, access, and backup security. Includes a priority scoring framework.',
    pages: '12 pages', format: 'PDF',
  },
  {
    type: 'Guide', cat: 'Cloud & Microsoft', icon: Cloud, color: '#2563EB', bg: '#EFF6FF',
    title: 'Microsoft 365 Migration Guide: Exchange to M365',
    desc: 'Step-by-step migration guide covering DNS records, mailbox migration tools, coexistence period, Teams setup, and SharePoint configuration for Pakistan businesses.',
    pages: '28 pages', format: 'PDF',
  },
  {
    type: 'Whitepaper', cat: 'Networking', icon: Network, color: '#7C3AED', bg: '#F5F3FF',
    title: 'SD-WAN vs MPLS: The Full Business Case Analysis',
    desc: 'Detailed technical and commercial comparison of SD-WAN and MPLS for multi-branch organisations. Includes cost modelling spreadsheet and vendor evaluation matrix.',
    pages: '18 pages', format: 'PDF',
  },
  {
    type: 'Guide', cat: 'AI & Automation', icon: Cpu, color: '#D97706', bg: '#FFFBEB',
    title: 'AI & Automation ROI Calculator Guide',
    desc: 'How to calculate the return on investment for your first automation project — with process selection criteria, cost modelling templates, and real examples from Pakistan businesses.',
    pages: '16 pages', format: 'PDF',
  },
  {
    type: 'Checklist', cat: 'IT Management', icon: Server, color: '#00C853', bg: '#F0FDF4',
    title: 'IT Infrastructure Audit Checklist',
    desc: '80-point infrastructure audit checklist covering servers, networking, storage, cloud, endpoints, security, and backup — with risk rating and remediation priority guidance.',
    pages: '20 pages', format: 'PDF',
  },
  {
    type: 'Guide', cat: 'Cybersecurity', icon: ShieldCheck, color: '#DC2626', bg: '#FEF2F2',
    title: 'ISO 27001 Readiness Assessment for Pakistan Businesses',
    desc: 'A practical guide to ISO 27001 certification — what controls are required, how to document them, common gaps in Pakistan organisations, and how to prepare for the certification audit.',
    pages: '32 pages', format: 'PDF',
  },
  {
    type: 'Template', cat: 'IT Management', icon: FileText, color: '#D97706', bg: '#FFFBEB',
    title: 'IT Budget Planning Template 2025',
    desc: 'Annual IT budget template covering hardware refresh cycles, software licensing, cloud costs, security, training, and support contracts — with 3-year projection model.',
    pages: '8 pages', format: 'XLSX',
  },
  {
    type: 'Guide', cat: 'Cloud & Microsoft', icon: Cloud, color: '#2563EB', bg: '#EFF6FF',
    title: 'AWS Well-Architected Framework: Getting Started',
    desc: 'A practical introduction to the AWS Well-Architected Framework for solution architects and IT managers — covering the 6 pillars with Pakistan-specific implementation guidance.',
    pages: '24 pages', format: 'PDF',
  },
  {
    type: 'Whitepaper', cat: 'IT Management', icon: Server, color: '#0891B2', bg: '#ECFEFF',
    title: 'Custom ERP vs Off-the-Shelf: How to Decide',
    desc: 'Framework for evaluating whether your business should build a custom ERP or implement SAP, Oracle, or Odoo — with decision matrix, cost comparison, and implementation timeline analysis.',
    pages: '22 pages', format: 'PDF',
  },
]

// WEBINARS imported from ./webinar-data

/* ─── Download modal ─────────────────────────────────────── */
function DownloadModal({ resource, onClose }) {
  const [email, setEmail]     = useState('')
  const [name, setName]       = useState('')
  const [ready, setReady]     = useState(false)
  const [loading, setLoading] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    // Build the download URL for the API route
    const params = new URLSearchParams({
      title: resource.title,
      type:  resource.type,
      pages: resource.pages || '',
    })
    const url = `/api/download?${params.toString()}`
    setDownloadUrl(url)
    setTimeout(() => { setLoading(false); setReady(true) }, 800)
  }

  function triggerDownload() {
    const a = document.createElement('a')
    a.href = downloadUrl
    a.download = resource.title.replace(/\s+/g, '-').toLowerCase() + '.pdf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(7,26,55,0.7)', backdropFilter: 'blur(6px)' }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl" onClick={e => e.stopPropagation()}>
        {ready ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#F0FDF4' }}>
              <CheckCircle size={30} style={{ color: '#00C853' }} />
            </div>
            <h3 className="text-[18px] font-black mb-2" style={{ color: '#0A1628' }}>Your File is Ready!</h3>
            <p className="text-[13.5px] mb-5 leading-relaxed" style={{ color: '#64748B' }}>
              Click the button below to download <strong>{resource.title}</strong> directly to your device.
            </p>
            <button
              onClick={triggerDownload}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-[14px] font-black transition-all hover:opacity-90 mb-3"
              style={{ background: '#00C853', color: '#0A1628' }}>
              <Download size={16} /> Download Now
            </button>
            <button onClick={onClose}
              className="w-full py-3 rounded-xl text-[14px] font-semibold border transition-colors hover:bg-slate-50"
              style={{ borderColor: '#E2E8F0', color: '#64748B' }}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: '#E2E8F0' }}>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider mb-1" style={{ color: resource.color }}>{resource.type} · {resource.format}</p>
                <h3 className="text-[15px] font-black leading-snug" style={{ color: '#0A1628' }}>{resource.title}</h3>
              </div>
              <button onClick={onClose} className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-slate-100">
                <X size={16} style={{ color: '#64748B' }} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <p className="text-[13px]" style={{ color: '#64748B' }}>Enter your details for instant access — your download starts immediately.</p>
              <div>
                <label className="block text-[12px] font-bold mb-1.5" style={{ color: '#374151' }}>Full Name *</label>
                <input required type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Ahmed Khan"
                  className="w-full rounded-xl px-4 py-3 text-[13.5px] border outline-none"
                  style={{ borderColor: '#D1D5DB', background: '#F9FAFB', color: '#111827' }} />
              </div>
              <div>
                <label className="block text-[12px] font-bold mb-1.5" style={{ color: '#374151' }}>Work Email *</label>
                <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="ahmed@company.com"
                  className="w-full rounded-xl px-4 py-3 text-[13.5px] border outline-none"
                  style={{ borderColor: '#D1D5DB', background: '#F9FAFB', color: '#111827' }} />
              </div>
              <button type="submit" disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-[14px] font-black transition-all hover:opacity-90"
                style={{ background: resource.color, color: '#fff' }}>
                {loading ? <Loader size={15} className="animate-spin" /> : <Download size={15} />}
                {loading ? 'Preparing your file...' : `Download ${resource.format} — Free`}
              </button>
              <p className="text-center text-[11px]" style={{ color: '#9CA3AF' }}>Instant download. No spam. Unsubscribe anytime.</p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

/* ─── Webinar modal ──────────────────────────────────────── */
function WebinarModal({ webinar, onClose }) {
  const [email, setEmail]     = useState('')
  const [name, setName]       = useState('')
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 900)
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(7,26,55,0.8)', backdropFilter: 'blur(6px)' }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: '#E2E8F0' }}>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider mb-1" style={{ color: webinar.color }}>On-Demand Webinar · {webinar.duration}</p>
            <h3 className="text-[15px] font-black leading-snug" style={{ color: '#0A1628' }}>{webinar.title}</h3>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-slate-100 ml-3 flex-shrink-0">
            <X size={16} style={{ color: '#64748B' }} />
          </button>
        </div>

        {sent ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: webinar.bg }}>
              <CheckCircle size={30} style={{ color: webinar.color }} />
            </div>
            <h3 className="text-[18px] font-black mb-2" style={{ color: '#0A1628' }}>You are registered!</h3>
            <p className="text-[13px] mb-5 leading-relaxed" style={{ color: '#64748B' }}>
              Thanks <strong>{name}</strong>. Open the webinar details page below — it has all topics covered, key takeaways, and a direct link to request the full recording.
            </p>
            <a
              href={`/resources/webinars/${webinar.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-[14px] font-black transition-all hover:opacity-90 mb-2"
              style={{ background: webinar.color, color: '#fff' }}
            >
              <ExternalLink size={15} /> Open Webinar Page
            </a>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[13px] font-bold transition-all hover:opacity-90 mb-3"
              style={{ background: '#25D366', color: '#fff' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp for Instant Recording Link
            </a>
            <button onClick={onClose}
              className="w-full py-2.5 rounded-xl text-[13px] font-semibold border transition-colors hover:bg-slate-50"
              style={{ borderColor: '#E2E8F0', color: '#64748B' }}>
              Close
            </button>
          </div>
        ) : (
          <div className="p-6">
            <div className="rounded-xl flex flex-col items-center justify-center mb-5"
              style={{ background: webinar.bg, height: 140, border: `2px solid ${webinar.color}25` }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-2"
                style={{ background: webinar.color }}>
                <Play size={20} style={{ color: '#fff', marginLeft: '3px' }} />
              </div>
              <p className="text-[13px] font-bold" style={{ color: webinar.color }}>{webinar.duration} recording</p>
              <p className="text-[11px] mt-0.5" style={{ color: '#94A3B8' }}>Register below — we send the link to your inbox</p>
            </div>
            <p className="text-[13.5px] leading-relaxed mb-5" style={{ color: '#64748B' }}>{webinar.desc}</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-[12px] font-bold mb-1.5" style={{ color: '#374151' }}>Full Name *</label>
                <input required type="text" value={name} onChange={e => setName(e.target.value)}
                  placeholder="Ahmed Khan"
                  className="w-full rounded-xl px-4 py-3 text-[13.5px] border outline-none"
                  style={{ borderColor: '#D1D5DB', background: '#F9FAFB', color: '#111827' }} />
              </div>
              <div>
                <label className="block text-[12px] font-bold mb-1.5" style={{ color: '#374151' }}>Work Email *</label>
                <input required type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="ahmed@company.com"
                  className="w-full rounded-xl px-4 py-3 text-[13.5px] border outline-none"
                  style={{ borderColor: '#D1D5DB', background: '#F9FAFB', color: '#111827' }} />
              </div>
              <button type="submit" disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-[14px] font-black transition-all hover:opacity-90"
                style={{ background: webinar.color, color: '#fff' }}>
                {loading ? <Loader size={15} className="animate-spin" /> : <Play size={14} />}
                {loading ? 'Registering...' : 'Register for Free Access'}
              </button>
              <p className="text-center text-[11px]" style={{ color: '#9CA3AF' }}>No spam. We only send the recording link.</p>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

/* ─── Main component ─────────────────────────────────────── */
export default function ResourcesClient() {
  const [activeCat, setActiveCat] = useState('All')
  const [downloadModal, setDownloadModal] = useState(null)
  const [webinarModal, setWebinarModal]   = useState(null)

  const filtered = activeCat === 'All' ? RESOURCES : RESOURCES.filter(r => r.cat === activeCat)

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      {downloadModal && <DownloadModal resource={downloadModal} onClose={() => setDownloadModal(null)} />}
      {webinarModal  && <WebinarModal  webinar={webinarModal}   onClose={() => setWebinarModal(null)}  />}

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 pb-14 sm:pb-18" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-6" style={{ background: '#00C853' }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Free · No Registration Required for Downloads</span>
            <div className="h-px w-6" style={{ background: '#00C853' }} />
          </div>
          <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[1.05] tracking-tight text-white mb-5">
            IT Knowledge Library
          </h1>
          <p className="text-[16px] sm:text-[17px] leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: '#94A3B8' }}>
            Free guides, checklists, whitepapers, and templates from the Infraspine team — practical resources written for IT professionals and business leaders across Pakistan.
          </p>
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setActiveCat(c)}
                suppressHydrationWarning
                className="px-4 py-2 rounded-full text-[13px] font-bold border transition-all hover:opacity-90"
                style={activeCat === c
                  ? { background: '#00C853', color: '#0A1628', borderColor: '#00C853' }
                  : { background: 'rgba(255,255,255,0.06)', color: '#94A3B8', borderColor: 'rgba(255,255,255,0.12)' }}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources grid */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-black" style={{ color: '#0A1628' }}>
              {activeCat === 'All' ? 'All Resources' : activeCat}
            </h2>
            <span className="text-[13px] font-semibold px-3 py-1.5 rounded-full" style={{ background: '#EFF6FF', color: '#2563EB' }}>
              {filtered.length} {filtered.length === 1 ? 'resource' : 'resources'}
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-[15px]" style={{ color: '#94A3B8' }}>No resources in this category yet — check back soon.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((r, i) => (
                <div key={i} className="bg-white rounded-2xl border overflow-hidden hover:-translate-y-1 transition-all hover:shadow-xl"
                  style={{ borderColor: '#E2E8F0', boxShadow: '0 4px 20px rgba(10,22,40,0.06)' }}>
                  <div className="px-6 py-5 border-b" style={{ background: r.bg, borderColor: '#E2E8F0' }}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10.5px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full"
                        style={{ background: '#fff', color: r.color, border: `1px solid ${r.color}30` }}>{r.type}</span>
                      <span className="text-[11px] font-medium" style={{ color: '#94A3B8' }}>{r.format} · {r.pages}</span>
                    </div>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#fff' }}>
                      <r.icon size={18} style={{ color: r.color }} strokeWidth={1.6} />
                    </div>
                  </div>
                  <div className="px-6 py-5">
                    <h3 className="text-[15px] font-black mb-2 leading-snug" style={{ color: '#0A1628' }}>{r.title}</h3>
                    <p className="text-[13px] leading-relaxed mb-5" style={{ color: '#64748B' }}>{r.desc}</p>
                    <button
                      onClick={() => setDownloadModal(r)}
                      className="inline-flex items-center gap-2 w-full justify-center py-2.5 rounded-xl text-[13px] font-bold border transition-all hover:opacity-80 active:scale-95"
                      style={{ borderColor: r.color, color: r.color, background: `${r.color}08` }}>
                      <Download size={13} />
                      Free Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Webinars */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-black" style={{ color: '#0A1628' }}>On-Demand Webinars</h2>
              <p className="text-[14px] mt-1" style={{ color: '#64748B' }}>Watch recordings of our most popular IT briefings — free for all viewers.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {WEBINARS.map((w, i) => (
              <div key={i} className="rounded-2xl border overflow-hidden hover:-translate-y-0.5 transition-all hover:shadow-lg cursor-pointer"
                style={{ borderColor: '#E2E8F0' }}
                onClick={() => setWebinarModal(w)}>
                <div className="flex items-center justify-center" style={{ background: w.bg, height: 120 }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                    style={{ background: w.color }}>
                    <Play size={20} style={{ color: '#fff', marginLeft: '3px' }} />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold" style={{ color: '#94A3B8' }}>{w.date}</span>
                    <span className="text-[11px]" style={{ color: '#CBD5E1' }}>·</span>
                    <span className="text-[11px] font-bold" style={{ color: w.color }}>{w.duration}</span>
                  </div>
                  <h3 className="text-[14px] font-black mb-3 leading-snug" style={{ color: '#0A1628' }}>{w.title}</h3>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-bold" style={{ color: w.color }}>
                    <Video size={12} /> Watch Recording
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-2xl mx-auto px-5 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-black mb-3" style={{ color: '#0A1628' }}>
            Get New Resources in Your Inbox
          </h2>
          <p className="text-[14px] mb-6" style={{ color: '#64748B' }}>
            New guides, checklists, and webinar recordings delivered once a month — no spam, unsubscribe anytime.
          </p>
          <NewsletterForm />
        </div>
      </section>

      <CTABanner
        heading="Want Tailored IT Advice for Your Business?"
        subheading="Book a free 60-minute consultation with an Infraspine specialist — specific to your situation, not a sales pitch."
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [done, setDone]   = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setDone(true) }, 1000)
  }

  if (done) return (
    <div className="flex items-center justify-center gap-2 py-3">
      <CheckCircle size={18} style={{ color: '#00C853' }} />
      <span className="text-[14px] font-bold" style={{ color: '#0A1628' }}>Subscribed! You will receive the next edition soon.</span>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
      <input required type="email" value={email} onChange={e => setEmail(e.target.value)}
        placeholder="your@company.com"
        className="flex-1 rounded-xl px-4 py-3 text-[14px] border outline-none"
        style={{ borderColor: '#D1D5DB', background: '#fff', color: '#111827' }} />
      <button type="submit" disabled={loading}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-[13.5px] font-bold transition-all hover:opacity-90 whitespace-nowrap"
        style={{ background: '#00C853', color: '#0A1628' }}>
        {loading ? <Loader size={14} className="animate-spin" /> : <ArrowRight size={14} />}
        Subscribe Free
      </button>
    </form>
  )
}
