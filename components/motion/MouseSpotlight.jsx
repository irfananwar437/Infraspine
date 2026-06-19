'use client'

import { useRef, useState } from 'react'
import { m, useReducedMotion } from 'framer-motion'

export function MouseSpotlight({ children, className = '', spotlightColor = 'rgba(0, 200, 83, 0.15)', radius = 300 }) {
  const divRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const reduce = useReducedMotion()

  const handleMouseMove = (e) => {
    if (!divRef.current || reduce) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseEnter = () => {
    if (reduce) return
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    if (reduce) return
    setOpacity(0)
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden group ${className}`}
    >
      {/* Background spotlight */}
      <m.div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-2xl"
        animate={{
          opacity,
          background: `radial-gradient(${radius}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
        style={{ zIndex: 0 }}
      />
      
      {/* Border gradient effect */}
      <m.div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 rounded-2xl"
        animate={{
          opacity,
          borderImageSource: `radial-gradient(${radius * 1.5}px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.8), transparent 40%)`,
          borderImageSlice: 1,
        }}
        style={{
          border: '1px solid transparent',
          maskImage: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
        }}
      />
      
      <div className="relative z-20 h-full w-full">
        {children}
      </div>
    </div>
  )
}
