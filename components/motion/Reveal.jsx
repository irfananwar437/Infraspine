'use client'

import { m, useReducedMotion } from 'framer-motion'

export const revealViewport = { once: true, amount: 0.2, margin: '-60px' }

export const easeOutExpo = [0.16, 1, 0.3, 1]

export const defaultRevealTransition = {
  duration: 0.55,
  ease: easeOutExpo,
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultRevealTransition,
  },
}

/**
 * Single block reveal on scroll (opacity + translateY).
 */
export function Reveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div suppressHydrationWarning className={className}>{children}</div>
  }

  return (
    <m.div
      suppressHydrationWarning
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{ ...defaultRevealTransition, delay }}
    >
      {children}
    </m.div>
  )
}

/**
 * Parent for staggered children; wrap each child in StaggerItem.
 */
export function Stagger({ children, className = '' }) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div suppressHydrationWarning className={className}>{children}</div>
  }

  return (
    <m.div
      suppressHydrationWarning
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      {children}
    </m.div>
  )
}

export function StaggerItem({ children, className = '' }) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div suppressHydrationWarning className={className}>{children}</div>
  }

  return (
    <m.div suppressHydrationWarning className={className} variants={staggerItem}>
      {children}
    </m.div>
  )
}

