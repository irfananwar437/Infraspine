import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion'
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

const VB = { w: 780, h: 260 }

const NODES = [
  { id: 'pc',       label: 'PC',        Icon: Monitor, x: 42,  y: 128, color: '#60a5fa' },
  { id: 'ap',       label: 'Access Pt', Icon: Wifi,    x: 118, y: 128, color: '#22d3ee' },
  { id: 'switch',   label: 'Switch',    Icon: Share2,  x: 196, y: 128, color: '#a78bfa' },
  { id: 'router',   label: 'Router',    Icon: Router,  x: 274, y: 128, color: '#818cf8' },
  { id: 'firewall', label: 'Firewall',  Icon: Shield,  x: 352, y: 128, color: '#f87171' },
  { id: 'isp',      label: 'ISP',       Icon: Globe,   x: 430, y: 128, color: '#fbbf24' },
  { id: 'multiIsp', label: 'Multi-ISP', Icon: Network, x: 512, y: 128, color: '#fb923c' },
  { id: 'cloud',    label: 'Cloud',     Icon: Cloud,   x: 668, y: 68,  color: '#34d399' },
]

const OUT_CX = [42, 118, 196, 274, 352, 430, 512, 668]
const OUT_CY = [125, 125, 125, 125, 125, 125, 125, 65]
const IN_CX  = [668, 512, 430, 352, 274, 196, 118, 42]
const IN_CY  = [71, 131, 131, 131, 131, 131, 131, 131]

const OUT_POINTS = OUT_CX.map((x, i) => `${x},${OUT_CY[i]}`).join(' ')
const IN_POINTS  = IN_CX.map((x, i)  => `${x},${IN_CY[i]}`).join(' ')

function polylineLength(xs, ys) {
  let len = 0
  for (let i = 1; i < xs.length; i++) {
    const dx = xs[i] - xs[i - 1]
    const dy = ys[i] - ys[i - 1]
    len += Math.sqrt(dx * dx + dy * dy)
  }
  return len
}

function posOnPolyline(xs, ys, t) {
  const totalLen = polylineLength(xs, ys)
  const target = t * totalLen
  let acc = 0
  for (let i = 1; i < xs.length; i++) {
    const dx = xs[i] - xs[i - 1]
    const dy = ys[i] - ys[i - 1]
    const segLen = Math.sqrt(dx * dx + dy * dy)
    if (acc + segLen >= target) {
      const ratio = (target - acc) / segLen
      return { x: xs[i - 1] + dx * ratio, y: ys[i - 1] + dy * ratio }
    }
    acc += segLen
  }
  return { x: xs[xs.length - 1], y: ys[ys.length - 1] }
}

function Packet({ xs, ys, fill, durationFrames, delayFrames, frame }) {
  const adjusted = frame - delayFrames
  if (adjusted < 0) return null
  const t = (adjusted % durationFrames) / durationFrames
  const { x, y } = posOnPolyline(xs, ys, t)
  return <circle r={5} cx={x} cy={y} fill={fill} filter="url(#glow)" />
}

const NODE_STAGGER = 6
const NODE_IN_DUR  = 18
const CARD_SIZE    = 42
const ICON_PX      = 18

export default function NetworkTopologyComp() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const dashOffset = -(frame * 0.5) % 12
  const outDur = Math.round(fps * 11)
  const inDur  = Math.round(fps * 6.8)

  return (
    <AbsoluteFill style={{ background: 'linear-gradient(180deg,#f8fbff 0%,#eef5ff 100%)', overflow: 'hidden', fontFamily: 'Inter,system-ui,sans-serif' }}>

      {/* Grid */}
      <AbsoluteFill style={{ backgroundImage: 'linear-gradient(rgba(148,163,184,0.12) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,0.12) 1px,transparent 1px)', backgroundSize: '24px 24px', opacity: 0.6 }} />

      {/* Glow blobs */}
      <AbsoluteFill style={{ background: 'radial-gradient(circle at 18% 22%,rgba(59,130,246,0.10),transparent 30%),radial-gradient(circle at 82% 18%,rgba(34,197,94,0.08),transparent 22%),radial-gradient(circle at 55% 72%,rgba(14,165,233,0.08),transparent 30%)' }} />

      {/* SVG layer — tracks + packets + node cards */}
      <AbsoluteFill style={{ top: 0, bottom: 90 }}>
        <svg viewBox={`0 0 ${VB.w} ${VB.h}`} preserveAspectRatio="xMidYMid meet" width="100%" height="100%" style={{ display: 'block', overflow: 'visible' }}>
          <defs>
            <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="2.5" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="card" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="3" stdDeviation="5" floodOpacity="0.14" />
            </filter>
          </defs>

          {/* Tracks */}
          <polyline points={OUT_POINTS} stroke="rgba(74,222,128,0.15)" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points={IN_POINTS}  stroke="rgba(56,189,248,0.15)" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points={OUT_POINTS} stroke="rgba(74,222,128,0.55)" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 8" strokeDashoffset={dashOffset} />
          <polyline points={IN_POINTS}  stroke="rgba(56,189,248,0.55)" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 8" strokeDashoffset={dashOffset} />

          {/* Packets */}
          <Packet xs={OUT_CX} ys={OUT_CY} fill="#4ade80" durationFrames={outDur} delayFrames={0}                    frame={frame} />
          <Packet xs={OUT_CX} ys={OUT_CY} fill="#86efac" durationFrames={outDur} delayFrames={Math.round(fps*4)}    frame={frame} />
          <Packet xs={IN_CX}  ys={IN_CY}  fill="#38bdf8" durationFrames={inDur}  delayFrames={Math.round(fps*5.5)}  frame={frame} />
          <Packet xs={IN_CX}  ys={IN_CY}  fill="#7dd3fc" durationFrames={inDur}  delayFrames={Math.round(fps*9)}    frame={frame} />

          {/* Node cards — white rect + foreignObject for real Lucide icon */}
          {NODES.map((node, i) => {
            const enterStart = i * NODE_STAGGER
            const enterEnd   = enterStart + NODE_IN_DUR
            const scale   = interpolate(frame, [enterStart, enterEnd], [0.5, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.back(1.7)) })
            const opacity = interpolate(frame, [enterStart, enterStart + 8], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })

            const pingPeriod  = Math.round(fps * 2.5)
            const pingFrame   = Math.max(0, frame - enterEnd)
            const pingT       = (pingFrame % pingPeriod) / pingPeriod
            const pingScale   = interpolate(pingT, [0, 1], [1, 1.7])
            const pingOpacity = interpolate(pingT, [0, 0.4, 1], [0.55, 0.15, 0])

            const half = CARD_SIZE / 2

            return (
              <g key={node.id} transform={`translate(${node.x},${node.y}) scale(${scale})`} opacity={opacity}>
                {/* Ping ring */}
                {frame >= enterEnd && (
                  <rect x={-half} y={-half} width={CARD_SIZE} height={CARD_SIZE} rx={10}
                    fill="none" stroke={node.color} strokeWidth={1.5}
                    transform={`scale(${pingScale})`} opacity={pingOpacity} />
                )}
                {/* Card background */}
                <rect x={-half} y={-half} width={CARD_SIZE} height={CARD_SIZE} rx={10}
                  fill="rgba(255,255,255,0.95)" stroke="rgba(255,255,255,0.85)" strokeWidth={1} filter="url(#card)" />
                {/* Colored border */}
                <rect x={-half} y={-half} width={CARD_SIZE} height={CARD_SIZE} rx={10}
                  fill="none" stroke={node.color} strokeWidth={1} opacity={0.4} />
                {/* Lucide icon via foreignObject */}
                <foreignObject x={-ICON_PX / 2} y={-ICON_PX / 2} width={ICON_PX} height={ICON_PX}>
                  <node.Icon
                    // @ts-ignore — xmlns needed for SVG foreignObject
                    xmlns="http://www.w3.org/1999/xhtml"
                    width={ICON_PX}
                    height={ICON_PX}
                    color={node.color}
                    strokeWidth={2}
                    style={{ display: 'block', color: node.color }}
                  />
                </foreignObject>
              </g>
            )
          })}
        </svg>
      </AbsoluteFill>

      {/* Caption bar */}
      <AbsoluteFill style={{ top: 'auto', height: 90, background: 'linear-gradient(to top,#eef5ff 60%,transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 40px 18px' }}>
        {(() => {
          const op = interpolate(frame, [NODES.length * NODE_STAGGER, NODES.length * NODE_STAGGER + 20], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
          return (
            <>
              <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: '#1e293b', opacity: op, lineHeight: 1.4 }}>
                Request: PC → access point → switch → router → firewall → ISP → multi-ISP → cloud. Response returns through the same route.
              </p>
              <p style={{ margin: '4px 0 0', fontSize: 11, color: '#64748b', opacity: op }}>
                Green pulses: outbound &nbsp;|&nbsp; Cyan pulses: data returning
              </p>
            </>
          )
        })()}
      </AbsoluteFill>
    </AbsoluteFill>
  )
}
