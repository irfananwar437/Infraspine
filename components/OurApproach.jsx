'use client'

import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion'
import { Search, PenTool, Settings, Zap, Activity } from 'lucide-react'
import {
  Reveal,
  Stagger,
  StaggerItem,
  revealViewport,
  defaultRevealTransition,
} from '@/components/motion/Reveal'

const STEPS = [
  {
    number: '01',
    icon: Search,
    iconColor: '#2563EB',
    iconBg: '#EFF6FF',
    title: 'Assessment',
    desc: 'We analyze your current infrastructure, systems, and business needs.',
  },
  {
    number: '02',
    icon: PenTool,
    iconColor: '#7C3AED',
    iconBg: '#F5F3FF',
    title: 'Architecture Design',
    desc: 'We design a customized IT architecture and ERP structure aligned with your goals.',
  },
  {
    number: '03',
    icon: Settings,
    iconColor: '#EA580C',
    iconBg: '#FFF7ED',
    title: 'Implementation',
    desc: 'We deploy, integrate, and configure systems for seamless operations.',
  },
  {
    number: '04',
    icon: Zap,
    iconColor: '#D97706',
    iconBg: '#FFFBEB',
    title: 'Automation',
    desc: 'We automate workflows and leverage AI to improve efficiency and performance.',
  },
  {
    number: '05',
    icon: Activity,
    iconColor: '#00C853',
    iconBg: '#F0FDF4',
    title: 'Monitoring & Support',
    desc: 'We provide 24/7 monitoring, maintenance, and support to ensure optimal performance.',
  },
]

/** Horizontal process line in viewBox 0 0 900 40 */
const TIMELINE_PATH =
  'M 40 20 L 200 20 Q 220 20 230 28 T 260 20 L 420 20 Q 440 20 450 28 T 480 20 L 640 20 Q 660 20 670 28 T 700 20 L 860 20'

export default function OurApproach() {
  const reduce = useReducedMotion()
  const stepInitial = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }

  const containerRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.75', 'end 0.35'],
  })

  const pathDrawn = useTransform(scrollYProgress, [0, 1], [0, 1])

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(STEPS.length - 1, Math.max(0, Math.floor(v * STEPS.length)))
    setActiveStep(idx)
  })

  useEffect(() => {
    if (reduce) setActiveStep(STEPS.length - 1)
  }, [reduce])

  return (
    <section className="py-12 sm:py-16 lg:py-20" style={{ background: '#FFFFFF' }} id="approach" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-5 lg:px-8">

        <div className="text-center mb-12">
          <Stagger className="flex flex-col items-center">
            <StaggerItem className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>
                Our Approach
              </span>
              <div className="h-px w-8" style={{ background: '#00C853' }} />
            </StaggerItem>
            <StaggerItem>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight" style={{ color: '#0A1628' }}>
                Our Approach to Building<br />Your IT Infrastructure
              </h2>
            </StaggerItem>
            <StaggerItem className="max-w-xl mt-4">
              <p className="text-[15px] mx-auto leading-relaxed" style={{ color: '#64748B' }}>
                We follow a proven, structured process to deliver reliable, scalable, and future-ready IT solutions that drive your business forward.
              </p>
            </StaggerItem>
          </Stagger>
        </div>

        <Reveal>
          <div className="relative mb-10 overflow-hidden rounded-2xl border border-slate-200/90 shadow-md ring-1 ring-slate-900/5 h-44 sm:h-52 md:h-56">
            <Image
              src="/images/sections/our-approach.jpg"
              alt="Business team collaborating on IT strategy and delivery"
              fill
              className="object-cover"
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0A1628]/45 to-transparent" aria-hidden />
          </div>
        </Reveal>

        <div className="hidden lg:block relative mb-10 px-2 h-14 w-full">
          <svg className="h-full w-full" viewBox="0 0 900 40" preserveAspectRatio="none">
            <path
              d={TIMELINE_PATH}
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="3"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            {reduce ? (
              <path
                d={TIMELINE_PATH}
                fill="none"
                stroke="#00C853"
                strokeWidth="3"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            ) : (
              <motion.path
                d={TIMELINE_PATH}
                fill="none"
                stroke="#00C853"
                strokeWidth="3"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength: pathDrawn }}
              />
            )}
          </svg>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-10">
          {STEPS.map((step, i) => {
            const isLit = reduce ? true : i <= activeStep
            return (
              <motion.div
                key={i}
                className="relative group"
                initial={stepInitial}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={revealViewport}
                transition={{ ...defaultRevealTransition, delay: reduce ? 0 : i * 0.07 }}
                whileHover={
                  reduce
                    ? undefined
                    : {
                        y: -5,
                        transition: { type: 'spring', stiffness: 400, damping: 24 },
                      }
                }
              >
                <div
                  className={`relative z-10 rounded-2xl border bg-white p-5 text-center shadow-sm transition-[box-shadow,border-color] duration-300 ${
                    isLit ? 'ring-1 ring-emerald-500/25 shadow-md border-emerald-200/80' : 'border-slate-200'
                  } group-hover:shadow-lg`}
                  style={{ borderWidth: 1 }}
                >
                  <div
                    className="absolute -top-3 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full text-[11px] font-bold text-white shadow-md"
                    style={{
                      background: isLit ? '#00C853' : '#94a3b8',
                      transition: 'background 0.35s ease',
                    }}
                  >
                    {step.number}
                  </div>

                  <div
                    className="mx-auto mb-4 mt-3 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                    style={{ background: step.iconBg }}
                  >
                    <step.icon size={24} color={step.iconColor} strokeWidth={1.5} />
                  </div>

                  <p className="mb-2 text-[13px] font-bold" style={{ color: '#0A1628' }}>{step.title}</p>
                  <p className="text-[11.5px] leading-relaxed" style={{ color: '#64748B' }}>{step.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
