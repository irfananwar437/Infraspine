'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { Shield, Globe, Zap, Lock, Activity, ChevronRight } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'

const Player = dynamic(() => import('@remotion/player').then(m => m.Player), { ssr: false })
const NetworkTopologyComp = dynamic(() => import('@/remotion/NetworkTopologyComp'), { ssr: false })

const FEATURES = [
  { icon: Shield,   label: 'Firewall Protected',   color: '#2563EB', bg: '#EFF6FF' },
  { icon: Globe,    label: 'Multi-ISP Redundancy',  color: '#16A34A', bg: '#F0FDF4' },
  { icon: Zap,      label: 'Low-Latency Routing',   color: '#D97706', bg: '#FFFBEB' },
  { icon: Lock,     label: 'End-to-End Encrypted',  color: '#7C3AED', bg: '#F5F3FF' },
  { icon: Activity, label: '99.9% Uptime SLA',      color: '#0891B2', bg: '#ECFEFF' },
]

export default function NetworkFlowSection() {
  const [playing, setPlaying] = useState(true)

  return (
    <section id="network" className="py-14 sm:py-20" style={{ background: '#F8FAFC' }}>
      <div className="max-w-6xl mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <Stagger className="flex flex-col items-center">
            <StaggerItem className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: '#00C853' }}>
                Network Architecture
              </span>
              <div className="h-px w-6" style={{ background: '#00C853' }} />
            </StaggerItem>
            <StaggerItem>
              <h2 className="text-[24px] sm:text-[34px] lg:text-[44px] font-black leading-tight tracking-tight mb-4" style={{ color: '#0A1628' }}>
                How Your Data Travels,{' '}
                <span style={{ color: '#00C853' }}>End to End</span>
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="text-[15px] max-w-xl leading-relaxed" style={{ color: '#64748B' }}>
                Every hop secured and optimized — from your PC through our managed firewall, multi-ISP backbone, all the way to the cloud.
              </p>
            </StaggerItem>
          </Stagger>
        </div>

        {/* Player card */}
        <Reveal>
          <div
            className="rounded-2xl overflow-hidden mb-8"
            style={{
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 24px rgba(10,22,40,0.07)',
              background: '#FFFFFF',
            }}
          >
            {/* Top bar */}
            <div
              className="flex items-center justify-between px-4 py-2.5 border-b"
              style={{ borderColor: '#F1F5F9', background: '#F8FAFC' }}
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 ml-1">Network Flow — InfraSpine</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Live
                </span>
                <button
                  onClick={() => setPlaying(p => !p)}
                  className="text-[11px] font-medium px-2.5 py-0.5 rounded-full border transition-colors"
                  style={{ borderColor: '#E2E8F0', color: '#64748B', background: '#fff' }}
                >
                  {playing ? '⏸ Pause' : '▶ Play'}
                </button>
              </div>
            </div>

            {/* Remotion Player */}
            <div className="w-full" style={{ aspectRatio: '1280 / 520', minHeight: 120 }}>
              {NetworkTopologyComp && (
                <Player
                  component={NetworkTopologyComp}
                  durationInFrames={300}
                  fps={30}
                  compositionWidth={1280}
                  compositionHeight={520}
                  style={{ width: '100%', height: '100%' }}
                  autoPlay={playing}
                  loop
                  controls={false}
                  clickToPlay={false}
                  acknowledgeRemotionLicense
                />
              )}
            </div>
          </div>
        </Reveal>

        {/* Feature row */}
        <Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {FEATURES.map(f => (
              <div
                key={f.label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border"
                style={{ background: f.bg, borderColor: '#E2E8F0' }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: '#fff' }}
                >
                  <f.icon size={15} style={{ color: f.color }} strokeWidth={2} />
                </div>
                <span className="text-[12px] font-semibold leading-tight" style={{ color: '#0A1628' }}>
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-[13px] font-bold"
              style={{ background: '#00C853', color: '#0A1628' }}
            >
              Design My Network <ChevronRight size={15} />
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-[13px] font-semibold border"
              style={{ borderColor: '#E2E8F0', color: '#475569', background: '#fff' }}
            >
              Explore Services
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
