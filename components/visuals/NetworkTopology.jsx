'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Monitor,
  Wifi,
  Share2,
  Router,
  Shield,
  Globe,
  Network,
  Cloud,
} from 'lucide-react'

// Static ID — one instance per page, so no collision risk, and always a valid
// XML name (starts with a letter). Avoids useId() colon-stripping edge cases.
const FILTER_ID = 'nt-glow-pkt'

/**
 * Node centers in viewBox (0–780 × 0–260).
 * Flow: PC → Access Point → Switch → Router → Firewall → ISP → Multi-ISP → Cloud,
 * then response returns along the lower path back to PC.
 */
const VB = { w: 780, h: 260 }

const NODES = [
  { id: 'pc', label: 'PC', icon: Monitor, x: 42, y: 128, color: '#60a5fa' },
  { id: 'ap', label: 'Access point', icon: Wifi, x: 118, y: 128, color: '#22d3ee' },
  { id: 'switch', label: 'Switch', icon: Share2, x: 196, y: 128, color: '#a78bfa' },
  { id: 'router', label: 'Router', icon: Router, x: 274, y: 128, color: '#818cf8' },
  { id: 'firewall', label: 'Firewall', icon: Shield, x: 352, y: 128, color: '#f87171' },
  { id: 'isp', label: 'ISP', icon: Globe, x: 430, y: 128, color: '#fbbf24' },
  { id: 'multiIsp', label: 'Multi-ISP', icon: Network, x: 512, y: 128, color: '#fb923c' },
  { id: 'cloud', label: 'Cloud', icon: Cloud, x: 668, y: 68, color: '#34d399' },
]

/** Keyframed request (outbound) through every hop including diagonal to cloud */
const OUT_CX = [42, 118, 196, 274, 352, 430, 512, 668]
const OUT_CY = [125, 125, 125, 125, 125, 125, 125, 65]

/** Keyframed response (inbound) cloud → PC */
const IN_CX = [668, 512, 430, 352, 274, 196, 118, 42]
const IN_CY = [71, 131, 131, 131, 131, 131, 131, 131]

const OUT_POINTS = OUT_CX.map((x, i) => `${x},${OUT_CY[i]}`).join(' ')
const IN_POINTS = IN_CX.map((x, i) => `${x},${IN_CY[i]}`).join(' ')

function PathPacket({ cxKeyframes, cyKeyframes, fill, duration, delay }) {
  const n = cxKeyframes.length
  const times = Array.from({ length: n }, (_, i) => (n === 1 ? 0 : i / (n - 1)))
  return (
    <motion.circle
      suppressHydrationWarning
      r={4}
      fill={fill}
      cx={cxKeyframes[0]}
      cy={cyKeyframes[0]}
      filter={`url(#${FILTER_ID})`}
      animate={{ cx: cxKeyframes, cy: cyKeyframes }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
        delay,
        times,
      }}
    />
  )
}

function fitStageToBounds(parentW, parentH) {
  if (parentW <= 1 || parentH <= 1) return { w: 0, h: 0 }
  const ar = VB.w / VB.h
  let w = parentW
  let h = w / ar
  if (h > parentH) {
    h = parentH
    w = h * ar
  }
  return { w: Math.max(1, Math.floor(w)), h: Math.max(1, Math.floor(h)) }
}

export default function NetworkTopology() {
  const reduce = useReducedMotion()
  const fitRef = useRef(null)
  const [stage, setStage] = useState({ w: 0, h: 0 })

  useEffect(() => {
    const el = fitRef.current
    if (!el) return

    const update = () => {
      const r = el.getBoundingClientRect()
      const next = fitStageToBounds(r.width, r.height)
      setStage((prev) => (prev.w === next.w && prev.h === next.h ? prev : next))
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div className="relative flex h-full min-h-[220px] w-full min-w-0 flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] md:min-h-[320px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 18% 22%, rgba(59,130,246,0.10), transparent 30%), radial-gradient(circle at 82% 18%, rgba(34,197,94,0.08), transparent 22%), radial-gradient(circle at 55% 72%, rgba(14,165,233,0.08), transparent 30%)',
        }}
      />

      {/* Explicit stage size = largest 780:260 rect inside the slot. Avoids CSS where w-full + max-height letterboxes the SVG while icons use full width (PC/AP/cloud looked disconnected). */}
      <div className="relative z-0 flex min-h-0 min-w-0 flex-1 px-2 pb-16 pt-2 md:px-3 md:pb-[4.5rem]">
        <div
          ref={fitRef}
          className="flex min-h-0 min-w-0 flex-1 items-center justify-center"
        >
          <div
            className="relative isolate shrink-0"
            style={{
              width: stage.w > 0 ? stage.w : undefined,
              height: stage.h > 0 ? stage.h : undefined,
              aspectRatio: stage.w > 0 ? undefined : `${VB.w} / ${VB.h}`,
              maxWidth: '100%',
              maxHeight: '100%',
            }}
          >
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox={`0 0 ${VB.w} ${VB.h}`}
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
          >
            <defs>
              <filter id={FILTER_ID} x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.2" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Outbound track */}
            <polyline
              points={OUT_POINTS}
              stroke="rgba(74, 222, 128, 0.15)"
              strokeWidth={1.5}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {!reduce && (
              <motion.polyline
                suppressHydrationWarning
                points={OUT_POINTS}
                stroke="rgba(74, 222, 128, 0.5)"
                strokeWidth={1.5}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="4 8"
                animate={{ strokeDashoffset: [0, -12] }}
                transition={{ repeat: Infinity, duration: 0.6, ease: 'linear' }}
              />
            )}

            {/* Inbound track */}
            <polyline
              points={IN_POINTS}
              stroke="rgba(56, 189, 248, 0.15)"
              strokeWidth={1.5}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {!reduce && (
              <motion.polyline
                suppressHydrationWarning
                points={IN_POINTS}
                stroke="rgba(56, 189, 248, 0.5)"
                strokeWidth={1.5}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="4 8"
                animate={{ strokeDashoffset: [0, -12] }}
                transition={{ repeat: Infinity, duration: 0.6, ease: 'linear' }}
              />
            )}

            {!reduce && (
              <>
                <PathPacket cxKeyframes={OUT_CX} cyKeyframes={OUT_CY} fill="#4ade80"  duration={11}  delay={0}   />
                <PathPacket cxKeyframes={OUT_CX} cyKeyframes={OUT_CY} fill="#86efac"  duration={11}  delay={4}   />
                <PathPacket cxKeyframes={IN_CX}  cyKeyframes={IN_CY}  fill="#38bdf8"  duration={6.8} delay={5.5} />
                <PathPacket cxKeyframes={IN_CX}  cyKeyframes={IN_CY}  fill="#7dd3fc"  duration={6.8} delay={9}   />
              </>
            )}
          </svg>

          {NODES.map((node, i) => {
            const Icon = node.icon
            const leftPct = (node.x / VB.w) * 100
            const topPct = (node.y / VB.h) * 100
            return (
              <motion.div
                suppressHydrationWarning
                key={node.id}
                title={node.label}
                className="absolute flex h-[42px] w-[42px] items-center justify-center rounded-xl border border-white/80 bg-white/92 shadow-lg backdrop-blur-[2px] md:h-[46px] md:w-[46px]"
                style={{
                  left: `${leftPct}%`,
                  top: `${topPct}%`,
                  x: '-50%',
                  y: '-50%',
                  boxShadow: `0 14px 30px -18px ${node.color}55, 0 0 20px -8px ${node.color}40, inset 0 0 10px -6px ${node.color}35`,
                }}
                initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 22,
                  delay: reduce ? 0 : i * 0.06,
                }}
              >
                <Icon className="h-[18px] w-[18px] md:h-5 md:w-5" style={{ color: node.color }} strokeWidth={2} />

                {!reduce && (
                  <motion.span
                    suppressHydrationWarning
                    className="pointer-events-none absolute inset-0 rounded-xl border border-transparent"
                    style={{
                      borderColor: node.color,
                      boxShadow: `0 0 12px 0 ${node.color}40`,
                    }}
                    initial={{ opacity: 0.6, scale: 1 }}
                    animate={{ opacity: 0, scale: 1.45 }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: 'easeOut',
                      delay: i * 0.28,
                    }}
                  />
                )}
              </motion.div>
            )
          })}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#eef5ff] via-[#eef5ff]/88 to-transparent px-4 pb-4 pt-14 md:px-8 md:pb-6">
        <p className="max-w-3xl text-[12px] font-semibold leading-snug text-slate-800 md:text-[14px]">
          Request: PC → access point → switch → router → firewall → ISP → multi-ISP → cloud. Response returns to your PC through the same route.
        </p>
        <p className="mt-1 hidden text-[11px] text-slate-500 sm:block">
          Green pulses: outbound | Cyan pulses: data returning
        </p>
      </div>
    </div>
  )
}
