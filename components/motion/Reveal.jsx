'use client'

import { m, useReducedMotion } from 'framer-motion'

// Trigger well before the element is actually scrolled into view (positive
// bottom margin expands the intersection root downward) so the fade/slide-in
// has already finished by the time a user — especially scrolling fast, or on
// a slower device — would see it. The old '-60px' margin + 0.2 amount only
// fired once content was nearly on-screen, which on anything slower than a
// dev machine reads as a visible blank gap or "card popping in late" right
// where cards meet headings — the exact overlap/gap pattern reported
// repeatedly even after the underlying spacing was already correct.
export const revealViewport = { once: true, amount: 0.1, margin: '0px 0px 240px 0px' }

export const easeOutExpo = [0.16, 1, 0.3, 1]

export const defaultRevealTransition = {
  duration: 0.4,
  ease: easeOutExpo,
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.04,
    },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 12 },
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

