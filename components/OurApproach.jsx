'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useReducedMotion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Search, PenTool, Settings, Zap, Activity } from 'lucide-react'
import { Stagger, StaggerItem, revealViewport, defaultRevealTransition } from '@/components/motion/Reveal'

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
    desc: 'We design a customized IT architecture aligned with your business goals.',
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
    desc: 'We provide 24/7 monitoring and support to ensure optimal performance.',
  },
]

export default function OurApproach() {
  const reduce = useReducedMotion()
  const containerRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.75', 'end 0.35'],
  })

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

        {/* Header */}
        <div className="text-center mb-14">
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

        {/* Process steps */}
        <div className="relative">

          {/* Connector line (desktop) — runs through the vertical center of the icon circles */}
          <div
            className="hidden lg:block absolute"
            aria-hidden="true"
            style={{ top: 28, left: '10%', right: '10%', height: 2, background: '#E2E8F0', zIndex: 0 }}
          >
            <motion.div
              className="h-full origin-left"
              style={{ background: '#00C853' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: reduce ? 1 : (activeStep + 1) / STEPS.length }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {STEPS.map((step, i) => {
              const isLit = reduce ? true : i <= activeStep
              return (
                <motion.div
                  key={i}
                  className="group flex flex-col items-center"
                  initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={revealViewport}
                  transition={{ ...defaultRevealTransition, delay: reduce ? 0 : i * 0.07 }}
                  whileHover={reduce ? undefined : { y: -4, transition: { type: 'spring', stiffness: 400, damping: 24 } }}
                >
                  {/* Icon circle — sits on the connector line (z-10 so it's above the line) */}
                  <div
                    className="relative z-10 mb-4 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-2 bg-white shadow-sm transition-all duration-300"
                    style={{
                      borderColor: isLit ? step.iconColor : '#E2E8F0',
                      background: isLit ? step.iconBg : '#F8FAFC',
                    }}
                  >
                    {/* Number badge floats above the circle */}
                    <span
                      className="absolute -top-3 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full text-[11px] font-bold text-white shadow-md transition-all duration-300"
                      style={{ background: isLit ? '#00C853' : '#94A3B8' }}
                    >
                      {step.number}
                    </span>
                    <step.icon size={22} color={isLit ? step.iconColor : '#94A3B8'} strokeWidth={1.5} />
                  </div>

                  {/* Card */}
                  <div
                    className="w-full rounded-2xl bg-white p-5 text-center transition-all duration-300 group-hover:shadow-lg"
                    style={{
                      border: `1px solid ${isLit ? `${step.iconColor}30` : '#E2E8F0'}`,
                      boxShadow: isLit ? `0 2px 16px ${step.iconColor}14` : '0 1px 4px rgba(10,22,40,0.04)',
                    }}
                  >
                    <p className="mb-2 text-[14px] font-bold" style={{ color: '#0A1628' }}>{step.title}</p>
                    <p className="text-[12.5px] leading-relaxed" style={{ color: '#64748B' }}>{step.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
