'use client'

import { useRef } from 'react'
import Image from 'next/image'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'

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
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{ ...defaultRevealTransition, delay }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Parent for staggered children; wrap each child in StaggerItem.
 */
export function Stagger({ children, className = '' }) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  )
}

/**
 * Subtle vertical parallax for section imagery (disabled when reduced motion).
 */
export function ParallaxImage({
  src,
  alt,
  sizes,
  className = '',
  priority = false,
  imgClassName = 'object-cover',
  unoptimized = false,
}) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [28, -28]
  )

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        className="absolute inset-x-0 top-[-8%] h-[116%] w-full"
        style={{ y }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={imgClassName}
          sizes={sizes}
          priority={priority}
          unoptimized={unoptimized}
        />
      </motion.div>
    </div>
  )
}
