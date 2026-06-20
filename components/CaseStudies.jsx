'use client'

import { m, useReducedMotion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Star } from 'lucide-react'
import {
  Reveal,
  Stagger,
  StaggerItem,
  revealViewport,
  defaultRevealTransition,
} from '@/components/motion/Reveal'

const CASES = [
  {
    number: '01',
    industry: 'Financial Services',
    color: '#16A34A',
    title: 'Custom ERP for a Multi-Branch Financial Services Company',
    desc: 'Replaced a 10-year-old accounting system and spreadsheets with a unified ERP covering finance, HR, payroll, and compliance across 6 branches.',
    results: ['Month-end close reduced from 5 days to 2', 'Real-time branch-level P&L visibility', 'Automated regulatory compliance reports'],
    visual: (
      <svg viewBox="0 0 280 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="280" height="120" fill="#F0FDF4" />
        <rect x="20" y="70" width="28" height="40" rx="2" fill="#16A34A" opacity="0.25" />
        <rect x="56" y="50" width="28" height="60" rx="2" fill="#16A34A" opacity="0.45" />
        <rect x="92" y="35" width="28" height="75" rx="2" fill="#16A34A" opacity="0.65" />
        <rect x="128" y="20" width="28" height="90" rx="2" fill="#16A34A" opacity="0.85" />
        <rect x="164" y="40" width="28" height="70" rx="2" fill="#16A34A" opacity="0.55" />
        <rect x="200" y="55" width="28" height="55" rx="2" fill="#16A34A" opacity="0.35" />
        <polyline points="34,74 70,54 106,39 142,24 178,44 214,59" stroke="#16A34A" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="34" cy="74" r="4" fill="#16A34A" />
        <circle cx="70" cy="54" r="4" fill="#16A34A" />
        <circle cx="106" cy="39" r="4" fill="#16A34A" />
        <circle cx="142" cy="24" r="4" fill="#16A34A" />
        <circle cx="178" cy="44" r="4" fill="#16A34A" />
        <circle cx="214" cy="59" r="4" fill="#16A34A" />
        <text x="240" y="24" fontSize="11" fill="#16A34A" fontWeight="700">ERP</text>
        <text x="240" y="38" fontSize="9" fill="#64748B">Finance</text>
      </svg>
    ),
  },
  {
    number: '02',
    industry: 'Manufacturing',
    color: '#2563EB',
    title: 'IT Infrastructure Overhaul for a Textile Manufacturing Group',
    desc: 'Replaced aging servers with a virtualized, redundant infrastructure across 3 factory sites with centralized monitoring and disaster recovery.',
    results: ['Unplanned downtime reduced by 82%', 'All sites connected via SD-WAN with failover', 'Real-time infrastructure health monitoring'],
    visual: (
      <svg viewBox="0 0 280 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="280" height="120" fill="#EFF6FF" />
        {/* 3 site nodes */}
        <circle cx="60" cy="60" r="22" fill="#2563EB" opacity="0.12" stroke="#2563EB" strokeWidth="1.5" />
        <circle cx="140" cy="30" r="22" fill="#2563EB" opacity="0.2" stroke="#2563EB" strokeWidth="1.5" />
        <circle cx="220" cy="60" r="22" fill="#2563EB" opacity="0.12" stroke="#2563EB" strokeWidth="1.5" />
        <circle cx="140" cy="88" r="16" fill="#2563EB" opacity="0.15" stroke="#2563EB" strokeWidth="1.5" />
        {/* Connections */}
        <line x1="80" y1="52" x2="120" y2="38" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="160" y1="38" x2="200" y2="52" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="80" y1="68" x2="125" y2="80" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="155" y1="80" x2="200" y2="68" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="140" y1="52" x2="140" y2="72" stroke="#2563EB" strokeWidth="2" />
        <text x="42" y="63" fontSize="9" fill="#2563EB" fontWeight="700">Site 1</text>
        <text x="122" y="33" fontSize="9" fill="#2563EB" fontWeight="700">NOC</text>
        <text x="202" y="63" fontSize="9" fill="#2563EB" fontWeight="700">Site 3</text>
        <text x="125" y="91" fontSize="9" fill="#2563EB" fontWeight="700">DR</text>
      </svg>
    ),
  },
  {
    number: '03',
    industry: 'Retail',
    color: '#7C3AED',
    title: 'Network Standardization for a 22-Branch Retail Chain',
    desc: 'Standardized IT infrastructure and POS connectivity across 22 retail locations with centralized remote management.',
    results: ['99.5% POS uptime achieved', 'Physical site visits reduced by 90%', 'New store rollout in under 2 days'],
    visual: (
      <svg viewBox="0 0 280 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="280" height="120" fill="#F5F3FF" />
        {/* Central hub */}
        <circle cx="140" cy="60" r="20" fill="#7C3AED" opacity="0.2" stroke="#7C3AED" strokeWidth="2" />
        <text x="133" y="64" fontSize="9" fill="#7C3AED" fontWeight="700">HQ</text>
        {/* Branch dots arranged around hub */}
        {[
          [80, 30], [120, 18], [160, 18], [200, 30],
          [220, 60], [200, 90], [160, 102], [120, 102],
          [80, 90], [60, 60],
        ].map(([x, y], i) => (
          <g key={i}>
            <line x1="140" y1="60" x2={x} y2={y} stroke="#7C3AED" strokeWidth="1" opacity="0.35" />
            <circle cx={x} cy={y} r="7" fill="#7C3AED" opacity={0.2 + (i % 3) * 0.1} stroke="#7C3AED" strokeWidth="1" />
          </g>
        ))}
        <text x="235" y="20" fontSize="10" fill="#7C3AED" fontWeight="700">22</text>
        <text x="232" y="32" fontSize="8" fill="#64748B">Branches</text>
      </svg>
    ),
  },
]

export default function CaseStudies() {
  const reduce = useReducedMotion()

  return (
    <section className="pt-8 pb-8" style={{ background: '#F8FAFC' }} id="case-studies">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">

        <div className="text-center mb-8">
          <Stagger className="flex flex-col items-center">
            <StaggerItem className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>
                Case Studies
              </span>
              <div className="h-px w-8" style={{ background: '#00C853' }} />
            </StaggerItem>
            <StaggerItem>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight" style={{ color: '#0A1628' }}>
                Client Success Stories
              </h2>
            </StaggerItem>
            <StaggerItem className="max-w-2xl mt-4">
              <p className="text-[15px] mx-auto leading-relaxed" style={{ color: '#64748B' }}>
                Real projects, real results. Client identities are protected under NDA — but the challenges, solutions, and outcomes are all authentic.
              </p>
            </StaggerItem>
          </Stagger>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {CASES.map((c, i) => (
            <m.article
              key={i}
              className="group relative flex flex-col rounded-2xl overflow-hidden border bg-white"
              style={{ borderColor: '#E2E8F0', boxShadow: '0 2px 16px rgba(10,22,40,0.06)' }}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{ ...defaultRevealTransition, delay: reduce ? 0 : i * 0.1 }}
              whileHover={reduce ? undefined : { y: -4, transition: { type: 'spring', stiffness: 380, damping: 28 } }}
            >
              {/* SVG visual */}
              <div className="relative h-44 w-full shrink-0 overflow-hidden">
                <div className="absolute inset-x-0 top-0 z-10 h-[3px]"
                  style={{ background: `linear-gradient(90deg, ${c.color}, ${c.color}40)` }}
                  aria-hidden="true" />
                {c.visual}
              </div>

              <div className="relative flex flex-1 flex-col p-6 pt-7">
                <div className="absolute -top-4 left-1/2 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full text-[12px] font-bold text-white shadow-md ring-2 ring-white"
                  style={{ background: '#00C853' }}>
                  {c.number}
                </div>

                <div className="mb-3 mt-1">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                    style={{ background: `${c.color}12`, color: c.color, border: `1px solid ${c.color}30` }}>
                    {c.industry}
                  </span>
                </div>

                <h3 className="mb-3 text-[15px] font-bold leading-snug" style={{ color: '#0A1628' }}>
                  {c.title}
                </h3>

                <p className="mb-4 text-[12.5px] leading-relaxed" style={{ color: '#64748B' }}>
                  {c.desc}
                </p>

                <ul className="mb-6 flex-1 space-y-2">
                  {c.results.map((r, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <CheckCircle2 size={14} color="#00C853" className="flex-shrink-0" />
                      <span className="text-[12.5px]" style={{ color: '#475569' }}>{r}</span>
                    </li>
                  ))}
                </ul>

                <a href="/projects"
                  className="inline-flex w-fit items-center gap-2 rounded-xl px-5 py-2.5 text-[13px] font-bold transition-opacity hover:opacity-90"
                  style={{ background: '#00C853', color: '#0A1628' }}>
                  Read Full Case Study <ArrowRight size={14} />
                </a>
              </div>
            </m.article>
          ))}
        </div>

        <Reveal>
          <div className="rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-200/90"
            style={{ background: '#FFFFFF', boxShadow: '0 2px 16px rgba(10,22,40,0.06)' }}>
            <div className="flex-1">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#00C853" color="#00C853" />
                ))}
              </div>
              <p className="text-[14px] font-medium leading-relaxed mb-2" style={{ color: '#0A1628' }}>
                &ldquo;Before Infraspine, we were firefighting every week. Now our factories run without IT interruptions.&rdquo;
              </p>
              <p className="text-[12px]" style={{ color: '#94A3B8' }}>— Group IT Manager, Textile Manufacturing Group</p>
            </div>

            <div className="hidden sm:block w-px self-stretch" style={{ background: '#E2E8F0' }} />

            <div className="flex-shrink-0 text-center sm:text-right">
              <p className="text-[12px] mb-3" style={{ color: '#94A3B8' }}>50+ projects delivered across 6 industries</p>
              <a href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[13px] font-bold transition-opacity hover:opacity-95"
                style={{ background: '#00C853', color: '#0A1628' }}>
                View All Projects <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
