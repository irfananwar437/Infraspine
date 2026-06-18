'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Layers, TrendingUp, Shield, Clock, ArrowRight, CheckCircle2, Zap, Star } from 'lucide-react'
import {
  Reveal,
  Stagger,
  StaggerItem,
  revealViewport,
  defaultRevealTransition,
} from '@/components/motion/Reveal'
import DashboardMockup from '@/components/visuals/DashboardMockup'

const STATS = [
  { value: '99.9%', label: 'Uptime SLA',         color: '#00C853', bg: '#F0FDF4', border: '#BBF7D0' },
  { value: '10+',   label: 'Enterprise Clients',  color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE' },
  { value: '10+',   label: 'Years Experience',    color: '#EA580C', bg: '#FFF7ED', border: '#FED7AA' },
  { value: '24/7',  label: 'Expert Support',      color: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE' },
]

const FEATURES = [
  {
    icon: Layers,
    color: '#7C3AED',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    title: 'One Unified Platform',
    desc: 'ERP, CRM, CCTV, Biometrics, and Cloud — all connected under one control plane. No more switching between 10 different tools.',
    tags: ['ERP', 'CRM', 'CCTV', 'Cloud', 'Automation'],
    tagColor: '#7C3AED',
    tagBg: '#EDE9FE',
  },
  {
    icon: Shield,
    color: '#00C853',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    title: 'Proactive, Not Reactive',
    desc: 'Most IT teams find out about problems from users. We detect and fix issues 24/7 before anyone notices.',
    checks: ['Smart threshold alerts', 'Auto incident escalation', 'Zero blind spots'],
    checkColor: '#00C853',
    checkTextColor: '#166534',
  },
  {
    icon: TrendingUp,
    color: '#0891B2',
    bg: '#ECFEFF',
    border: '#A5F3FC',
    title: 'Built to Scale',
    desc: 'Cheap IT setups break when your business grows. Our architecture is designed for multi-site, multi-country expansion from day one.',
    badge: 'Supports multi-branch & multi-country',
    badgeColor: '#0E7490',
    badgeBg: '#CFFAFE',
  },
]

export default function ProblemSolution() {
  const reduce = useReducedMotion()

  return (
    <section className="py-12 sm:py-16 lg:py-20" style={{ background: '#F8FAFC' }} id="why">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <Stagger className="flex flex-col">
            <StaggerItem className="inline-flex mb-5">
              <div className="inline-flex items-center gap-2">
                <div className="h-px w-6" style={{ background: '#00C853' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>
                  Why InfraSpine
                </span>
              </div>
            </StaggerItem>
            <StaggerItem>
              <h2 className="text-[26px] sm:text-[36px] lg:text-[48px] font-black leading-[1.06] tracking-tight" style={{ color: '#0A1628' }}>
                The Smarter Way to<br />
                <span style={{ color: '#00C853' }}>Run Your IT.</span>
              </h2>
            </StaggerItem>
          </Stagger>
          <Stagger className="lg:max-w-xs flex flex-col">
            <StaggerItem>
              <p className="text-[15px] leading-relaxed mb-6" style={{ color: '#64748B' }}>
                10+ enterprises ditched fragmented IT and chose one unified, proactive, SLA-backed infrastructure partner.
              </p>
            </StaggerItem>
            <StaggerItem>
              <motion.a
                href="/contact-us"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-bold transition-colors hover:opacity-95"
                style={{ background: '#00C853', color: '#0A1628' }}
                whileHover={reduce ? undefined : { scale: 1.02, y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 450, damping: 22 }}
              >
                See How It Works <ArrowRight size={14} />
              </motion.a>
            </StaggerItem>
          </Stagger>
        </div>

        <Reveal className="lg:hidden mb-8">
          <div className="relative h-[220px] sm:h-[260px] overflow-hidden rounded-2xl border border-slate-200/80 shadow-md">
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0F2A4A 55%, #163352 100%)' }}>
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <div className="absolute rounded-full" style={{ top: '10%', left: '15%', width: 120, height: 120, background: 'radial-gradient(circle, rgba(0,200,83,0.14) 0%, transparent 70%)' }} />
              <div className="absolute rounded-full" style={{ top: '40%', right: '10%', width: 90, height: 90, background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)' }} />
            </div>
            <div className="pointer-events-none absolute bottom-2 right-2 z-10 hidden min-[400px]:block h-[130px] w-[140px] overflow-hidden rounded-lg border border-slate-200/90 bg-slate-950 shadow-xl ring-1 ring-black/5">
              <div className="origin-top-left scale-[0.42] translate-x-[-8%] translate-y-[-6%] w-[240%] h-[240%]">
                <DashboardMockup />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start">
          <div className="hidden lg:block lg:col-span-5">
            <div className="sticky top-28 relative h-[min(560px,calc(100vh-8rem))] overflow-hidden rounded-2xl border border-slate-200/80 shadow-lg">
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0F2A4A 55%, #163352 100%)' }}>
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
                <div className="absolute rounded-full" style={{ top: '8%', left: '10%', width: 200, height: 200, background: 'radial-gradient(circle, rgba(0,200,83,0.12) 0%, transparent 70%)' }} />
                <div className="absolute rounded-full" style={{ top: '45%', right: '8%', width: 160, height: 160, background: 'radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 70%)' }} />
                <div className="absolute rounded-full" style={{ bottom: '15%', left: '25%', width: 120, height: 120, background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)' }} />
              </div>
              <div className="pointer-events-none absolute bottom-4 right-4 z-10 h-[200px] w-[220px] overflow-hidden rounded-xl border border-slate-200/90 bg-slate-950 shadow-2xl ring-1 ring-black/10">
                <div className="origin-top-left scale-[0.48] translate-x-[-6%] translate-y-[-4%] w-[210%] h-[210%]">
                  <DashboardMockup />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
              {STATS.map((s, idx) => (
                <motion.div
                  key={s.label}
                  className="flex flex-col items-center justify-center py-7 px-4 text-center rounded-2xl"
                  style={{ background: s.bg, border: `1px solid ${s.border}` }}
                  initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={revealViewport}
                  transition={{ ...defaultRevealTransition, delay: reduce ? 0 : idx * 0.06 }}
                >
                  <span className="text-[38px] font-black leading-none mb-1" style={{ color: s.color }}>
                    {s.value}
                  </span>
                  <span className="text-[12px] font-semibold" style={{ color: s.color }}>{s.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-5">
              {FEATURES.map((f, idx) => (
                <motion.div
                  key={f.title}
                  className="group flex flex-col rounded-2xl p-6"
                  style={{
                    background: '#FFFFFF',
                    border: `1px solid ${f.border}`,
                    boxShadow: '0 2px 12px rgba(10,22,40,0.06)',
                  }}
                  initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={revealViewport}
                  transition={{ ...defaultRevealTransition, delay: reduce ? 0 : 0.12 + idx * 0.07 }}
                  whileHover={
                    reduce
                      ? undefined
                      : {
                          y: -5,
                          boxShadow: '0 16px 36px -12px rgba(10,22,40,0.14)',
                          transition: { type: 'spring', stiffness: 400, damping: 26 },
                        }
                  }
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: f.bg }}
                  >
                    <f.icon size={20} style={{ color: f.color }} strokeWidth={1.7} />
                  </div>

                  <h3 className="text-[16px] font-bold mb-2.5" style={{ color: '#0A1628' }}>{f.title}</h3>
                  <p className="text-[13px] leading-relaxed flex-1" style={{ color: '#64748B' }}>{f.desc}</p>

                  {f.tags && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {f.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                          style={{ background: f.tagBg, color: f.tagColor }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {f.checks && (
                    <div className="mt-5 space-y-2">
                      {f.checks.map((c) => (
                        <div key={c} className="flex items-center gap-2">
                          <CheckCircle2 size={13} style={{ color: f.checkColor }} />
                          <span className="text-[11.5px] font-medium" style={{ color: f.checkTextColor }}>{c}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {f.badge && (
                    <div
                      className="mt-5 flex items-center gap-2 px-3 py-2 rounded-xl"
                      style={{ background: f.badgeBg }}
                    >
                      <Zap size={12} style={{ color: f.badgeColor }} />
                      <span className="text-[11px] font-semibold" style={{ color: f.badgeColor }}>{f.badge}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-5 rounded-2xl px-7 py-5"
              style={{ background: '#FFF1F2', border: '1px solid #FECDD3' }}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{ ...defaultRevealTransition, delay: reduce ? 0 : 0.08 }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: '#FFE4E6' }}
              >
                <Clock size={22} color="#E11D48" strokeWidth={1.5} />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <span className="text-[15px] font-bold" style={{ color: '#0A1628' }}>SLA-Backed Reliability</span>
                <p className="text-[13px] mt-0.5" style={{ color: '#64748B' }}>
                  Written SLAs, dedicated support, and guaranteed response times — not vague promises.
                </p>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#E11D48" style={{ color: '#E11D48' }} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}
