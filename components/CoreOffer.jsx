'use client'

import { m, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Shield,
  Users,
  Building2,
  Clock3,
  Database,
  Cloud,
  Bot,
  Headset,
  Lock,
  Settings2,
} from 'lucide-react'
import {
  Reveal,
  Stagger,
  StaggerItem,
  revealViewport,
  defaultRevealTransition,
} from '@/components/motion/Reveal'
import NetworkTopology from '@/components/visuals/NetworkTopology'

const SOLUTIONS = [
  {
    icon: Database,
    title: 'ERP Development',
    accent: '#16A34A',
    iconBg: '#F0FDF4',
    cardGradient: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 55%, #BBF7D0 100%)',
    gridColor: 'rgba(22,163,74,0.10)',
    description: 'Custom ERP systems for finance, HR, operations, and enterprise workflows tailored to your business model.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    accent: '#2563EB',
    iconBg: '#EFF6FF',
    cardGradient: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 55%, #BFDBFE 100%)',
    gridColor: 'rgba(37,99,235,0.10)',
    description: 'Secure servers, cloud platforms, networking, storage, and disaster recovery designed for resilient growth.',
  },
  {
    icon: Bot,
    title: 'Automation & AI Systems',
    accent: '#059669',
    iconBg: '#ECFDF5',
    cardGradient: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 55%, #A7F3D0 100%)',
    gridColor: 'rgba(5,150,105,0.10)',
    description: 'AI agents, WhatsApp automation, and workflow integrations that remove repetitive work and improve speed.',
  },
  {
    icon: Headset,
    title: 'CRM & Call Center',
    accent: '#0891B2',
    iconBg: '#ECFEFF',
    cardGradient: 'linear-gradient(135deg, #ECFEFF 0%, #CFFAFE 55%, #A5F3FC 100%)',
    gridColor: 'rgba(8,145,178,0.10)',
    description: 'Sales, support, and communication systems with lead management, analytics, and omnichannel visibility.',
  },
  {
    icon: Lock,
    title: 'Cybersecurity Solutions',
    accent: '#DC2626',
    iconBg: '#FFF1F2',
    cardGradient: 'linear-gradient(135deg, #FFF1F2 0%, #FFE4E6 55%, #FECDD3 100%)',
    gridColor: 'rgba(220,38,38,0.10)',
    description: 'Firewall hardening, endpoint protection, threat monitoring, and access control to protect critical operations.',
  },
  {
    icon: Settings2,
    title: 'IT Management Systems',
    accent: '#7C3AED',
    iconBg: '#F5F3FF',
    cardGradient: 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 55%, #DDD6FE 100%)',
    gridColor: 'rgba(124,58,237,0.10)',
    description: 'Integrated platforms for IT assets, operational visibility, reporting, and business-wide systems management.',
  },
]

const METRICS = [
  { icon: Shield, value: '10+', label: 'Years Experience' },
  { icon: Users, value: '500+', label: 'Projects Delivered' },
  { icon: Building2, value: '120+', label: 'Enterprise Clients' },
  { icon: Clock3, value: '99.9%', label: 'Uptime Focus' },
]

export default function CoreOffer() {
  const reduce = useReducedMotion()

  return (
    <section
      id="solutions"
      className="relative overflow-hidden px-4 py-16 sm:px-5 sm:py-20 lg:px-8 lg:py-24"
      style={{ background: '#FFFFFF' }}
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-6 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#2563EB]">
            Network Flow
          </p>
          <h2 className="mt-3 text-[1.8rem] font-black leading-tight tracking-tight text-[#0A1628] sm:text-[2.2rem]">
            How Traffic Moves Across Your Infrastructure
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-7 text-slate-500 sm:text-[15px]">
            A visual look at how requests travel through your network stack and return through the same secured path.
          </p>
        </div>

        <Reveal>
          <div className="relative mb-8 rounded-[24px] p-[1px] bg-gradient-to-r from-slate-300/70 via-emerald-300/50 to-slate-300/70 shadow-[0_20px_50px_-24px_rgba(10,22,40,0.24)]">
            <div className="overflow-hidden bg-white rounded-[23px]">
              <NetworkTopology />
            </div>
          </div>
        </Reveal>

        <div className="relative px-6 pb-8 pt-12 sm:px-8 sm:pb-10 sm:pt-14 lg:px-12 lg:pb-12 lg:pt-16">
            <div className="mb-12 text-center">
              <Stagger className="flex flex-col items-center">
                <StaggerItem className="mb-5">
                  <div className="inline-flex items-center gap-4">
                    <span className="h-px w-12 bg-slate-300" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#2563EB]">
                      Our Core Solutions
                    </span>
                    <span className="h-px w-12 bg-slate-300" />
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <h2 className="max-w-4xl text-[1.6rem] font-black leading-[1.08] tracking-tight text-[#0A1628] sm:text-[2.1rem] lg:text-[2.8rem]">
                    Integrated Solutions.
                    <span className="text-[#16A34A]"> Real Business Impact.</span>
                  </h2>
                </StaggerItem>

                <StaggerItem className="max-w-3xl">
                  <p className="mx-auto mt-5 text-[15px] leading-8 text-slate-500 sm:text-[17px]">
                    From infrastructure to intelligence, we deliver end-to-end technology systems that help businesses automate,
                    scale, and stay ahead.
                  </p>
                </StaggerItem>
              </Stagger>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {SOLUTIONS.map((solution, index) => (
              <m.a
                key={solution.title}
                href="/services"
                className="group flex flex-col rounded-2xl bg-white overflow-hidden"
                style={{
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 1px 4px rgba(10,22,40,0.06), 0 8px 24px rgba(10,22,40,0.04)',
                }}
                initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={revealViewport}
                transition={{ ...defaultRevealTransition, delay: reduce ? 0 : index * 0.06 }}
                whileHover={reduce ? undefined : {
                  y: -4,
                  boxShadow: `0 4px 8px rgba(10,22,40,0.06), 0 20px 40px rgba(10,22,40,0.10)`,
                  transition: { type: 'spring', stiffness: 380, damping: 24 },
                }}
              >
                {/* Colored header band */}
                <div
                  className="relative px-6 pt-6 pb-5 overflow-hidden"
                  style={{
                    background: solution.cardGradient,
                    borderBottom: `1px solid ${solution.accent}20`,
                  }}
                >
                  {/* Subtle grid texture */}
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      backgroundImage: `linear-gradient(${solution.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${solution.gridColor} 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <div className="relative z-10 flex items-center justify-between">
                    <div
                      className="flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-white transition-transform duration-300 group-hover:scale-105"
                      style={{ boxShadow: `0 2px 12px ${solution.accent}30` }}
                    >
                      <solution.icon size={34} strokeWidth={1.6} style={{ color: solution.accent }} aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="relative z-10 mt-4 text-[15.5px] font-extrabold leading-snug text-[#0A1628]">
                    {solution.title}
                  </h3>
                  <div className="relative z-10 mt-2 h-[3px] w-10 rounded-full" style={{ background: solution.accent }} />
                </div>


                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex-1 text-[13.5px] leading-[1.8] text-slate-500">
                    {solution.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 font-semibold text-[13px] transition-colors duration-200"
                    style={{ color: solution.accent }}>
                    <span>Learn More</span>
                    <ArrowRight
                      size={14}
                      strokeWidth={2.5}
                      className="transition-transform duration-200 group-hover:translate-x-1.5"
                    />
                  </div>
                </div>
              </m.a>
            ))}
            </div>

            <div className="mt-8 grid overflow-hidden rounded-[22px] border border-slate-200/80 bg-slate-50 sm:grid-cols-2 xl:grid-cols-4">
              {METRICS.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`flex items-center gap-4 px-6 py-5 ${
                    index < METRICS.length - 1 ? 'border-b border-slate-200 xl:border-b-0 xl:border-r' : ''
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                    <metric.icon size={24} strokeWidth={1.9} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="text-[1.1rem] font-black leading-none text-[#0A1628]">{metric.value}</div>
                    <div className="mt-1 text-[13px] text-slate-500">{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}
