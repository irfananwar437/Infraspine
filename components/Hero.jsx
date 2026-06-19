'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { ChevronRight, ArrowRight } from 'lucide-react'

/* ── Network node SVG visual ─────────────────────────────────────────────── */
function NetworkVisual() {
  return (
    <div className="relative w-full h-full" aria-hidden="true">
      <svg
        viewBox="0 0 480 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background subtle circles */}
        <circle cx="240" cy="190" r="170" stroke="#17355f" strokeWidth="1" strokeDasharray="4 6" opacity="0.5" />
        <circle cx="240" cy="190" r="120" stroke="#17355f" strokeWidth="1" strokeDasharray="3 8" opacity="0.35" />
        <circle cx="240" cy="190" r="70" stroke="#1E3A5F" strokeWidth="1" opacity="0.3" />

        {/* Connection lines */}
        <line x1="240" y1="190" x2="100" y2="80"  stroke="#1E3A8A" strokeWidth="1" opacity="0.5" />
        <line x1="240" y1="190" x2="380" y2="80"  stroke="#1E3A8A" strokeWidth="1" opacity="0.5" />
        <line x1="240" y1="190" x2="60"  y2="250" stroke="#1E3A8A" strokeWidth="1" opacity="0.5" />
        <line x1="240" y1="190" x2="420" y2="250" stroke="#1E3A8A" strokeWidth="1" opacity="0.5" />
        <line x1="240" y1="190" x2="240" y2="340" stroke="#1E3A8A" strokeWidth="1" opacity="0.5" />
        <line x1="240" y1="190" x2="150" y2="320" stroke="#0F2158" strokeWidth="1" opacity="0.4" />
        <line x1="240" y1="190" x2="330" y2="320" stroke="#0F2158" strokeWidth="1" opacity="0.4" />
        <line x1="100"  y1="80"  x2="380" y2="80"  stroke="#0F2158" strokeWidth="1" opacity="0.3" />
        <line x1="60"   y1="250" x2="150" y2="320" stroke="#0F2158" strokeWidth="1" opacity="0.3" />
        <line x1="420"  y1="250" x2="330" y2="320" stroke="#0F2158" strokeWidth="1" opacity="0.3" />

        {/* Animated pulse lines */}
        <line x1="240" y1="190" x2="100" y2="80" stroke="#2563EB" strokeWidth="1.5" opacity="0.7">
          <animate attributeName="opacity" values="0.7;0.1;0.7" dur="3s" begin="2s" repeatCount="indefinite" />
        </line>
        <line x1="240" y1="190" x2="420" y2="250" stroke="#00C853" strokeWidth="1.5" opacity="0.6">
          <animate attributeName="opacity" values="0.1;0.6;0.1" dur="2.5s" begin="2s" repeatCount="indefinite" />
        </line>
        <line x1="240" y1="190" x2="240" y2="340" stroke="#2563EB" strokeWidth="1.5" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.1;0.5" dur="4s" begin="2s" repeatCount="indefinite" />
        </line>

        {/* Central hub */}
        <circle cx="240" cy="190" r="22" fill="#0B1A3B" stroke="#2563EB" strokeWidth="2" />
        <circle cx="240" cy="190" r="14" fill="#1E3A8A" />
        <circle cx="240" cy="190" r="7" fill="#2563EB">
          <animate attributeName="r" values="7;9;7" dur="2s" begin="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="240" cy="190" r="28" fill="none" stroke="#2563EB" strokeWidth="1" opacity="0.3">
          <animate attributeName="r" values="22;36;22" dur="2s" begin="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" begin="2s" repeatCount="indefinite" />
        </circle>

        {/* Outer nodes — primary */}
        {[
          { cx: 100,  cy: 80,   r: 14, fill: '#0B1A3B', stroke: '#00C853',  dot: '#00C853',  label: 'Cloud',    dur: '3s'   },
          { cx: 380,  cy: 80,   r: 14, fill: '#0B1A3B', stroke: '#2563EB',  dot: '#2563EB',  label: 'Security', dur: '2.2s' },
          { cx: 60,   cy: 250,  r: 12, fill: '#0B1A3B', stroke: '#7C3AED',  dot: '#7C3AED',  label: 'AI',       dur: '3.5s' },
          { cx: 420,  cy: 250,  r: 12, fill: '#0B1A3B', stroke: '#00C853',  dot: '#00C853',  label: 'Network',  dur: '2.8s' },
          { cx: 240,  cy: 340,  r: 12, fill: '#0B1A3B', stroke: '#2563EB',  dot: '#2563EB',  label: 'ERP',      dur: '4s'   },
        ].map((node, i) => (
          <g key={i}>
            <circle cx={node.cx} cy={node.cy} r={node.r} fill={node.fill} stroke={node.stroke} strokeWidth="1.5" />
            <circle cx={node.cx} cy={node.cy} r={node.r * 0.45} fill={node.dot} />
            <circle cx={node.cx} cy={node.cy} r={node.r + 6} fill="none" stroke={node.stroke} strokeWidth="1" opacity="0.2">
              <animate attributeName="opacity" values="0.2;0;0.2" dur={node.dur} begin="2s" repeatCount="indefinite" />
              <animate attributeName="r" values={`${node.r + 4};${node.r + 12};${node.r + 4}`} dur={node.dur} begin="2s" repeatCount="indefinite" />
            </circle>
          </g>
        ))}

        {/* Small satellite nodes */}
        {[
          { cx: 150, cy: 320, r: 8, stroke: '#0891B2' },
          { cx: 330, cy: 320, r: 8, stroke: '#D97706' },
          { cx: 40,  cy: 140, r: 7, stroke: '#16A34A' },
          { cx: 440, cy: 140, r: 7, stroke: '#7C3AED' },
        ].map((n, i) => (
          <g key={i}>
            <circle cx={n.cx} cy={n.cy} r={n.r} fill="#060E23" stroke={n.stroke} strokeWidth="1.5" />
            <circle cx={n.cx} cy={n.cy} r={n.r * 0.5} fill={n.stroke} />
          </g>
        ))}

        {/* Data flow dots moving along lines */}
        <circle r="3" fill="#00C853" opacity="0.9">
          <animateMotion dur="3s" begin="2s" repeatCount="indefinite" path="M240,190 L100,80" />
        </circle>
        <circle r="3" fill="#2563EB" opacity="0.9">
          <animateMotion dur="2.5s" begin="2s" repeatCount="indefinite" path="M240,190 L420,250" />
        </circle>
        <circle r="3" fill="#7C3AED" opacity="0.8">
          <animateMotion dur="4s" begin="2s" repeatCount="indefinite" path="M240,190 L60,250" />
        </circle>
        <circle r="2.5" fill="#00C853" opacity="0.7">
          <animateMotion dur="3.5s" begin="2s" repeatCount="indefinite" path="M240,190 L380,80" />
        </circle>
      </svg>
    </div>
  )
}

/* ── Dashboard mini-card visual ─────────────────────────────────────────── */
function DashboardVisual() {
  return (
    <div
      className="rounded-2xl overflow-hidden border text-[10px] font-mono"
      style={{ background: '#0B1A3B', borderColor: '#17355f', boxShadow: '0 24px 64px rgba(0,0,0,0.4)' }}
      aria-hidden="true"
    >
      {/* Top bar */}
      <div className="flex items-center gap-1.5 px-3 py-2.5 border-b" style={{ background: '#071a37', borderColor: '#17355f' }}>
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#DC2626' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#D97706' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#16A34A' }} />
        <div className="ml-2 flex-1 h-5 rounded px-2 flex items-center text-[9px]" style={{ background: '#0A1628', color: '#475569' }}>
          infraspine.com/dashboard
        </div>
        <div className="flex items-center gap-1 text-[9px] font-bold" style={{ color: '#00C853' }}>
          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#00C853' }} />
          Live
        </div>
      </div>

      {/* Content */}
      <div className="p-3 space-y-2.5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: '#475569' }}>
            Infrastructure Overview
          </span>
          <span className="text-[9px]" style={{ color: '#00C853' }}>All systems nominal</span>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Uptime', value: '99.98%', color: '#00C853' },
            { label: 'Servers', value: '47 OK', color: '#2563EB' },
            { label: 'Alerts', value: '0 Active', color: '#00C853' },
          ].map(({ label, value, color }, i) => (
            <div key={i} className="rounded-xl p-2.5" style={{ background: '#0A1628', border: '1px solid #17355f' }}>
              <div className="text-[8px] mb-0.5" style={{ color: '#475569' }}>{label}</div>
              <div className="text-[12px] font-black leading-none" style={{ color }}>{value}</div>
            </div>
          ))}
        </div>

        {/* Bar chart visual */}
        <div className="rounded-xl p-2.5" style={{ background: '#0A1628', border: '1px solid #17355f' }}>
          <div className="text-[8px] mb-2" style={{ color: '#475569' }}>Network throughput — last 7 days</div>
          <div className="flex items-end gap-1 h-[32px]">
            {[65, 80, 55, 90, 75, 95, 88].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t"
                style={{
                  height: `${h}%`,
                  background: i === 6 ? '#00C853' : '#1E3A8A',
                  opacity: 0.8 + i * 0.02,
                }}
              />
            ))}
          </div>
        </div>

        {/* Status rows */}
        {[
          { name: 'Core Network',   status: 'Operational', color: '#00C853' },
          { name: 'Cloud Workloads', status: 'Operational', color: '#00C853' },
          { name: 'Security Layer',  status: 'Protected',   color: '#2563EB' },
          { name: 'Backup Jobs',     status: '3/3 Complete',color: '#00C853' },
        ].map(({ name, status, color }, i) => (
          <div key={i} className="flex items-center justify-between py-1 border-b" style={{ borderColor: '#0F2158' }}>
            <span className="text-[9px] font-medium" style={{ color: '#94A3B8' }}>{name}</span>
            <span className="text-[9px] font-bold" style={{ color }}>{status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Slide definitions ───────────────────────────────────────────────────── */
const SLIDES = [
  {
    tag: 'Global IT Services Partner',
    heading: 'Enterprise Technology,',
    headingAccent: 'Built for Scale.',
    desc: 'From network infrastructure and cloud to AI automation and cybersecurity — Infraspine is the single technology partner that manages your entire IT environment, end-to-end.',
    cta: { label: 'Book a Free Consultation', href: '/contact-us' },
    secondary: { label: 'Our Services', href: '/services' },
    visual: 'network',
  },
  {
    tag: 'AI Solutions & Automation',
    heading: 'Automate Every Layer',
    headingAccent: 'of Your Business.',
    desc: 'Intelligent n8n workflows, AI agents, WhatsApp automation, and custom ERP systems — Infraspine eliminates manual work so your team can focus on growth.',
    cta: { label: 'Explore AI Services', href: '/services/ai-automation' },
    secondary: { label: 'Infraspine AI', href: '/infraspine-ai' },
    visual: 'dashboard',
  },
  {
    tag: 'Cybersecurity & Compliance',
    heading: 'Secure. Compliant.',
    headingAccent: 'Always On.',
    desc: 'Firewall hardening, EDR, penetration testing, ISO 27001 compliance, and 24/7 SIEM monitoring — enterprise-grade security without compromise.',
    cta: { label: 'Get Security Assessment', href: '/services/cyber-security' },
    secondary: { label: 'View All Services', href: '/services' },
    visual: 'network',
  },
]

const INTERVAL = 7000

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent(p => (p + 1) % SLIDES.length), [])

  useEffect(() => {
    const id = setInterval(next, INTERVAL)
    return () => clearInterval(id)
  }, [next])

  const slide = SLIDES[current]

  return (
    <section
      suppressHydrationWarning
      className="relative isolate flex w-full min-h-[min(80svh,560px)] items-center overflow-hidden pt-[72px] lg:pt-[106px]"
      style={{ background: '#060E23' }}
      aria-labelledby="hero-heading"
    >
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',
          backgroundSize: '56px 56px',
        }}
        aria-hidden="true"
      />

      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full z-0 opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent 65%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full z-0 opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #00C853, transparent 65%)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-5 md:py-7">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

          {/* Left: Text */}
          <div className="flex-1 max-w-[620px]">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.14em]"
                style={{
                  background: 'rgba(0,200,83,0.1)',
                  border: '1px solid rgba(0,200,83,0.25)',
                  color: '#00C853',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {slide.tag}
              </span>
            </div>

            {/* Heading */}
            <h1
              id="hero-heading"
              className="text-[clamp(2rem,4.2vw,3.4rem)] font-black leading-[1.04] tracking-tight text-white mb-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {slide.heading}{' '}
              <span style={{ color: '#00C853' }}>{slide.headingAccent}</span>
            </h1>

            {/* Divider */}
            <div className="h-px w-20 mb-3" style={{ background: 'linear-gradient(90deg,#2563EB,#00C853)' }} aria-hidden="true" />

            {/* Description */}
            <p
              className="text-[15px] sm:text-[17px] leading-relaxed mb-4 max-w-[540px]"
              style={{ color: '#94A3B8' }}
            >
              {slide.desc}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-5">
              <Link
                href={slide.cta.href}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl text-[14px] sm:text-[15px] font-bold transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: '#00C853', color: '#0A1628' }}
              >
                {slide.cta.label}
                <ArrowRight size={16} />
              </Link>
              <Link
                href={slide.secondary.href}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl text-[14px] sm:text-[15px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.18)', color: '#fff' }}
              >
                {slide.secondary.label}
                <ChevronRight size={15} />
              </Link>
            </div>

            {/* Trust metrics */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '10+',   label: 'Years Experience' },
                { value: '24/7',  label: 'Monitoring' },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-[22px] font-black leading-none" style={{ color: '#fff' }}>{value}</span>
                  <span className="text-[11px] font-medium mt-0.5" style={{ color: '#475569' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="lg:w-[400px] xl:w-[440px] flex-shrink-0 w-full max-w-[440px] mx-auto lg:mx-0">
            {slide.visual === 'network' ? (
              <div className="relative h-[150px] sm:h-[280px] lg:h-[320px]">
                <NetworkVisual />
              </div>
            ) : (
              <DashboardVisual />
            )}
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative overflow-hidden h-1.5 rounded-full transition-all duration-500"
            style={{
              width: i === current ? 40 : 8,
              background: i === current ? 'rgba(148,163,184,0.5)' : 'rgba(148,163,184,0.3)',
            }}
          >
            {i === current && (
              <div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  background: '#00C853',
                  animation: `slideProgress ${INTERVAL}ms linear forwards`,
                  width: '100%',
                }}
              />
            )}
          </button>
        ))}
      </div>

      <style>{`
        @keyframes slideProgress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  )
}
