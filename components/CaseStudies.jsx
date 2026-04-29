'use client'

import Image from 'next/image'
import { MouseSpotlight } from '@/components/motion/MouseSpotlight'
import { motion, useReducedMotion } from 'framer-motion'
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
    image: '/images/sections/case-finance.jpg',
    imageAlt: 'Financial trading screens and market analytics',
    title: 'Custom ERP for a Multi-Branch Financial Services Company',
    desc: 'Replaced a 10-year-old accounting system and spreadsheets with a unified ERP covering finance, HR, payroll, and compliance across 6 branches.',
    results: ['Month-end close reduced from 5 days to 2', 'Real-time branch-level P&L visibility', 'Automated regulatory compliance reports'],
  },
  {
    number: '02',
    industry: 'Manufacturing',
    color: '#2563EB',
    image: '/images/sections/case-manufacturing.jpg',
    imageAlt: 'Manufacturing floor with industrial equipment and automation',
    title: 'IT Infrastructure Overhaul for a Textile Manufacturing Group',
    desc: 'Replaced aging servers with a virtualized, redundant infrastructure across 3 factory sites with centralized monitoring and disaster recovery.',
    results: ['Unplanned downtime reduced by 82%', 'All sites connected via SD-WAN with failover', 'Real-time infrastructure health monitoring'],
  },
  {
    number: '03',
    industry: 'Retail',
    color: '#7C3AED',
    image: '/images/sections/case-retail.jpg',
    imageAlt: 'Retail clothing store interior and merchandising',
    title: 'Network Standardization for a 22-Branch Retail Chain',
    desc: 'Standardized IT infrastructure and POS connectivity across 22 retail locations with centralized remote management.',
    results: ['99.5% POS uptime achieved', 'Physical site visits reduced by 90%', 'New store rollout in under 2 days'],
  },
]

export default function CaseStudies() {
  const reduce = useReducedMotion()

  return (
    <section className="pt-8 pb-8" style={{ background: '#F8FAFC' }} id="case-studies">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">

        <div className="text-center mb-12">
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
            <motion.article
              key={i}
              className="group relative flex flex-col rounded-2xl"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{ ...defaultRevealTransition, delay: reduce ? 0 : i * 0.1 }}
              whileHover={
                reduce
                  ? undefined
                  : {
                      y: -4,
                      transition: { type: 'spring', stiffness: 380, damping: 28 },
                    }
              }
            >
              <MouseSpotlight
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_2px_16px_rgba(10,22,40,0.06)]"
                spotlightColor="rgba(0, 200, 83, 0.08)"
                radius={180}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.04]">
                  {c.industry === 'Retail' && (
                    <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[32px] border-slate-900" />
                  )}
                  {c.industry === 'Manufacturing' && (
                    <div className="absolute -bottom-12 -right-8 h-48 w-48 rotate-45 border-[28px] border-slate-900" />
                  )}
                  {c.industry === 'Financial Services' && (
                    <svg className="absolute right-0 top-8 h-56 w-56 text-slate-900" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="12">
                      <path d="M0 100 L40 60 L60 80 L100 20" />
                    </svg>
                  )}
                </div>

                <div className="relative h-44 w-full shrink-0 overflow-hidden bg-slate-100">
                  <div
                    className={`absolute inset-0 z-[1] ${reduce ? '' : 'transition-transform duration-500 ease-out group-hover:scale-[1.04]'}`}
                  >
                    <Image
                      src={c.image}
                      alt={c.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                    />
                  </div>
                  <div
                    className="absolute inset-x-0 top-0 z-[2] h-[3px]"
                    style={{ background: `linear-gradient(90deg, ${c.color}, ${c.color}40)` }}
                    aria-hidden
                  />
                </div>

                <div className="relative flex flex-1 flex-col p-6 pt-7">
                  <div
                    className="absolute -top-4 left-1/2 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full text-[12px] font-bold text-white shadow-md ring-2 ring-white"
                    style={{ background: '#00C853' }}
                  >
                    {c.number}
                  </div>

                  <div className="mb-3 mt-1">
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                      style={{
                        background: `${c.color}12`,
                        color: c.color,
                        border: `1px solid ${c.color}30`,
                      }}
                    >
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

                  <a
                    href="/case-studies"
                    className="inline-flex w-fit items-center gap-2 rounded-xl px-5 py-2.5 text-[13px] font-bold transition-opacity hover:opacity-90"
                    style={{ background: '#00C853', color: '#0A1628' }}
                  >
                    Read Full Case Study <ArrowRight size={14} />
                  </a>
                </div>
              </MouseSpotlight>
            </motion.article>
          ))}
        </div>

        <Reveal>
          <div
            className="rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-200/90"
            style={{ background: '#FFFFFF', boxShadow: '0 2px 16px rgba(10,22,40,0.06)' }}
          >
            <div className="flex-1">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#00C853" color="#00C853" />
                ))}
              </div>
              <p className="text-[14px] font-medium leading-relaxed mb-2" style={{ color: '#0A1628' }}>
                &ldquo;Before InfraSpine, we were firefighting every week. Now our factories run without IT interruptions.&rdquo;
              </p>
              <p className="text-[12px]" style={{ color: '#94A3B8' }}>— Group IT Manager, Textile Manufacturing Group</p>
            </div>

            <div className="hidden sm:block w-px self-stretch" style={{ background: '#E2E8F0' }} />

            <div className="flex-shrink-0 text-center sm:text-right">
              <p className="text-[12px] mb-3" style={{ color: '#94A3B8' }}>20+ projects delivered across 6 industries</p>
              <a
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[13px] font-bold transition-opacity hover:opacity-95"
                style={{ background: '#00C853', color: '#0A1628' }}
              >
                View All Case Studies <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
