'use client'
import { useEffect, useState, useRef } from 'react'
import { Shield, Server, Cloud, Phone, BarChart2, Database, Smartphone, Users, Zap, Wifi, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const CX = 500
const CY = 295

const NODES = [
  { id: 'hq',         icon: Users,      color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE', label: 'HQ Users',               cx: 110,  cy: 100 },
  { id: 'remote',     icon: Wifi,       color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE', label: 'Remote Users',           cx: 85,   cy: 260 },
  { id: 'mobile',     icon: Smartphone, color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE', label: 'Mobile Devices',         cx: 105,  cy: 430 },
  { id: 'servers',    icon: Server,     color: '#0891B2', bg: '#ECFEFF', border: '#A5F3FC', label: 'Servers & Data Center',  cx: 455,  cy: 48  },
  { id: 'cloud',      icon: Cloud,      color: '#0891B2', bg: '#ECFEFF', border: '#A5F3FC', label: 'Cloud Platform',         cx: 800,  cy: 58  },
  { id: 'pbx',        icon: Phone,      color: '#16A34A', bg: '#F0FDF4', border: '#BBF7D0', label: 'PBX & Communications',   cx: 875,  cy: 258 },
  { id: 'monitoring', icon: BarChart2,  color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE', label: 'Monitoring & Analytics', cx: 800,  cy: 450 },
  { id: 'crm',        icon: Database,   color: '#EA580C', bg: '#FFF7ED', border: '#FED7AA', label: 'CRM / ERP System',       cx: 360,  cy: 508 },
  { id: 'automation', icon: Zap,        color: '#D97706', bg: '#FFFBEB', border: '#FDE68A', label: 'IT Automation',          cx: 565,  cy: 528 },
]

const STEPS = [
  {
    activeNodes: [],
    chapter: 'Your IT Ecosystem',
    headline: 'One Platform. Everything Connected.',
    desc: 'Modern enterprises run on dozens of disconnected tools. InfraSpine brings every system — users, servers, cloud, and automation — under one unified, intelligent infrastructure.',
    color: '#00C853',
    bg: '#F0FDF4',
  },
  {
    activeNodes: ['hq', 'remote', 'mobile'],
    chapter: 'Chapter 01 — Connectivity',
    headline: 'Your Entire Workforce Connects Securely',
    desc: 'HQ teams, remote workers, and mobile endpoints all route through InfraSpine\'s managed security gateway. No VPN complexity. Every device protected and monitored in real time.',
    color: '#2563EB',
    bg: '#EFF6FF',
  },
  {
    activeNodes: ['hq', 'remote', 'mobile', 'servers', 'cloud'],
    chapter: 'Chapter 02 — Infrastructure',
    headline: 'Enterprise Servers & Cloud, Always On',
    desc: 'On-premise data centers and hybrid cloud environments managed as one. InfraSpine ensures 99.9% uptime with automated failover, health checks, and real-time capacity monitoring.',
    color: '#0891B2',
    bg: '#ECFEFF',
  },
  {
    activeNodes: ['hq', 'remote', 'mobile', 'servers', 'cloud', 'pbx'],
    chapter: 'Chapter 03 — Communications',
    headline: 'Voice, Messaging & Business Comms Unified',
    desc: 'PBX systems, WhatsApp Business, and enterprise communication tools in one platform. Your team stays connected without juggling apps or missing critical business messages.',
    color: '#16A34A',
    bg: '#F0FDF4',
  },
  {
    activeNodes: ['hq', 'remote', 'mobile', 'servers', 'cloud', 'pbx', 'crm', 'automation'],
    chapter: 'Chapter 04 — Business Systems',
    headline: 'CRM, ERP & Automation, Fully Integrated',
    desc: 'Finance, HR, Sales, and Operations modules run on your infrastructure. n8n-powered workflows automate approvals, reports, and alerts — saving hundreds of hours every month.',
    color: '#EA580C',
    bg: '#FFF7ED',
  },
  {
    activeNodes: ['hq', 'remote', 'mobile', 'servers', 'cloud', 'pbx', 'crm', 'automation', 'monitoring'],
    chapter: 'Chapter 05 — Command & Control',
    headline: 'Everything Monitored. Nothing Slips Through.',
    desc: 'Real-time dashboards, smart anomaly detection, and 24/7 alerting ensure your IT team sees every issue before it becomes an outage. SLA-backed response. Zero blind spots.',
    color: '#7C3AED',
    bg: '#F5F3FF',
  },
]

const AUTO_INTERVAL = 4000

export default function InfraEcosystem() {
  const [step, setStep] = useState(0)
  const [paused, setPaused] = useState(false)
  const [animKey, setAnimKey] = useState(0)
  const timerRef = useRef(null)

  const goTo = (i) => {
    setStep(i)
    setAnimKey(k => k + 1)
    setPaused(true)
    setTimeout(() => setPaused(false), 8000)
  }

  const prev = () => goTo((step - 1 + STEPS.length) % STEPS.length)
  const next = () => goTo((step + 1) % STEPS.length)

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => {
      setStep(s => {
        const next = (s + 1) % STEPS.length
        setAnimKey(k => k + 1)
        return next
      })
    }, AUTO_INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [paused])

  const current = STEPS[step]
  const activeSet = new Set(current.activeNodes)

  return (
    <section id="ecosystem" className="pt-8 pb-8" style={{ background: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <span
            className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-4"
            style={{ background: 'rgba(0,200,83,0.1)', color: '#00C853', border: '1px solid rgba(0,200,83,0.2)' }}
          >
            Infrastructure Ecosystem
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight" style={{ color: '#0A1628' }}>
            Your Entire IT Infrastructure,{' '}
            <span style={{ color: '#00C853' }}>Connected & Controlled</span>
          </h2>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {STEPS.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-300 focus:outline-none"
              style={{
                width: i === step ? '32px' : '10px',
                height: '10px',
                background: i === step ? current.color : '#CBD5E1',
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-[1fr_360px] gap-6 items-stretch">

          {/* LEFT — Diagram */}
          <div
            className="rounded-2xl border p-4 flex items-center justify-center transition-all duration-500"
            style={{ borderColor: '#E2E8F0', background: '#FFFFFF', minHeight: '300px' }}
          >
            <div className="relative w-full pb-[88%] sm:pb-[54%]" style={{ maxWidth: '620px' }}>

              <svg viewBox="0 0 1000 590" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <filter id="glow-eco">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>

                {NODES.map((n) => {
                  const active = activeSet.has(n.id)
                  return (
                    <line
                      key={n.id}
                      x1={CX} y1={CY} x2={n.cx} y2={n.cy}
                      stroke={active ? n.color : '#E2E8F0'}
                      strokeWidth={active ? '2' : '1.5'}
                      strokeOpacity={active ? '0.6' : '1'}
                      strokeDasharray={active ? '7 4' : '4 5'}
                      style={{ transition: 'all 0.7s ease' }}
                    />
                  )
                })}

                {/* Animated dots on active lines */}
                {NODES.map((n, i) => activeSet.has(n.id) && (
                  <circle key={`${animKey}-${n.id}`} r="4" fill={n.color} filter="url(#glow-eco)" opacity="0.9">
                    <animateMotion dur={`${1.6 + i * 0.25}s`} repeatCount="indefinite">
                      <mpath><path d={`M${CX},${CY} L${n.cx},${n.cy}`} /></mpath>
                    </animateMotion>
                  </circle>
                ))}

                {/* Center pulse ring */}
                <circle cx={CX} cy={CY} r="48" fill="none" stroke="#DC2626" strokeWidth="1.5" strokeOpacity="0.25">
                  <animate attributeName="r" values="42;56;42" dur="3s" begin="2s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.15;0.45;0.15" dur="3s" begin="2s" repeatCount="indefinite" />
                </circle>
              </svg>

              {/* Satellite nodes */}
              {NODES.map((n) => {
                const active = activeSet.has(n.id)
                return (
                  <div
                    key={n.id}
                    className="absolute flex flex-col items-center"
                    style={{
                      left: `${(n.cx / 1000) * 100}%`,
                      top: `${(n.cy / 590) * 100}%`,
                      transform: 'translate(-50%, -50%)',
                      opacity: active ? 1 : 0.2,
                      transition: 'opacity 0.6s ease, transform 0.6s ease',
                    }}
                  >
                    <div
                      className="rounded-xl flex items-center justify-center border-2 w-8 h-8 sm:w-[46px] sm:h-[46px]"
                      style={{
                        background: active ? n.bg : '#F1F5F9',
                        borderColor: active ? n.border : '#E2E8F0',
                        boxShadow: active ? `0 4px 20px ${n.color}30` : 'none',
                        transform: active ? 'scale(1.12)' : 'scale(1)',
                        transition: 'all 0.6s ease',
                      }}
                    >
                      <n.icon size={16} color={active ? n.color : '#94A3B8'} strokeWidth={1.5} />
                    </div>
                    <p className="text-[9px] font-bold mt-1 text-center leading-tight max-w-[72px]"
                      style={{ color: active ? '#0A1628' : '#94A3B8', transition: 'color 0.6s ease' }}>
                      {n.label}
                    </p>
                  </div>
                )
              })}

              {/* Center Firewall node */}
              <div
                className="absolute flex flex-col items-center"
                style={{ left: `${(CX / 1000) * 100}%`, top: `${(CY / 590) * 100}%`, transform: 'translate(-50%, -50%)' }}
              >
                <div className="rounded-2xl flex items-center justify-center" style={{ width: '68px', height: '68px', background: '#FEF2F2', border: '2px solid rgba(220,38,38,0.4)', boxShadow: '0 0 24px rgba(220,38,38,0.2)' }}>
                  <Shield size={28} color="#DC2626" strokeWidth={1.5} />
                </div>
                <p className="text-[10px] font-bold mt-1.5 text-center leading-tight" style={{ color: '#0A1628' }}>Firewall &<br />Security</p>
              </div>
            </div>
          </div>

          {/* RIGHT — Story panel */}
          <div
            className="rounded-2xl border p-7 flex flex-col justify-between transition-all duration-500"
            style={{ borderColor: '#E2E8F0', background: current.bg }}
          >
            <div>
              {/* Timer bar */}
              <div className="w-full h-1 rounded-full mb-6 overflow-hidden" style={{ background: '#E2E8F0' }}>
                {!paused && (
                  <div
                    key={`${step}-${animKey}`}
                    className="h-full rounded-full"
                    style={{
                      background: current.color,
                      animation: `fillBar ${AUTO_INTERVAL}ms linear forwards`,
                    }}
                  />
                )}
              </div>

              <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: current.color }}>
                {current.chapter}
              </span>

              <h3 className="text-xl lg:text-2xl font-extrabold leading-snug mt-2 mb-4" style={{ color: '#0A1628' }}>
                {current.headline}
              </h3>

              <p className="text-[13.5px] leading-relaxed" style={{ color: '#475569' }}>
                {current.desc}
              </p>

              {/* Active node pills */}
              {current.activeNodes.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {current.activeNodes.map(id => {
                    const n = NODES.find(x => x.id === id)
                    return (
                      <span
                        key={id}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold"
                        style={{ background: n.bg, color: n.color, border: `1px solid ${n.border}` }}
                      >
                        <n.icon size={9} />
                        {n.label}
                      </span>
                    )
                  })}
                </div>
              )}
            </div>

            <div>
              {/* Nav buttons */}
              <div className="flex items-center justify-between mt-6 pt-5" style={{ borderTop: '1px solid #E2E8F0' }}>
                <button
                  onClick={prev}
                  className="flex items-center gap-1.5 text-[12px] font-semibold px-3 py-2 rounded-lg transition-all hover:bg-white"
                  style={{ color: '#64748B' }}
                >
                  <ChevronLeft size={14} /> Prev
                </button>

                <span />

                {step < STEPS.length - 1 ? (
                  <button
                    onClick={next}
                    className="flex items-center gap-1.5 text-[12px] font-semibold px-3 py-2 rounded-lg transition-all hover:bg-white"
                    style={{ color: current.color }}
                  >
                    Next <ChevronRight size={14} />
                  </button>
                ) : (
                  <a
                    href="/contact-us"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[12px] font-bold transition-all hover:opacity-90"
                    style={{ background: '#00C853', color: '#0A1628' }}
                  >
                    Get Started <ArrowRight size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fillBar {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  )
}
