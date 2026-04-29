'use client'
import { useState, useEffect, useCallback } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const SLIDES = [
  {
    image: '/images/hero-home.png',
    alt: 'Enterprise data infrastructure and city operations at night',
    badge: 'Enterprise Infrastructure Platform',
    heading: '10+ Years of Excellence in Tech & Infrastructure Solutions',
    description:
      'Empowering Your Business with Cutting-Edge Technology',
    cta: { label: 'Book a Consultation', href: '/contact' },
    secondary: { label: 'Learn More', href: '#solutions' },
  },
  {
    image: '/images/hero-home1.png',
    alt: 'Security surveillance and biometric access systems',
    badge: 'Security & Surveillance',
    heading: 'Complete Security Solutions for Modern Businesses',
    description:
      'IP CCTV, biometric access control, cybersecurity, and 24/7 monitoring — all managed under one roof to keep your business safe.',
    cta: { label: 'Get Protected', href: '/contact' },
    secondary: { label: 'Our Services', href: '/services' },
  },
  {
    image: '/images/hero-home2.png',
    alt: 'AI automation and ERP dashboard systems',
    badge: 'AI & Smart Automation',
    heading: 'Automate Operations with Intelligent Systems',
    description:
      'Custom ERP, CRM, AI-powered workflows, and WhatsApp automation — transforming how your business operates, every single day.',
    cta: { label: 'Start Automating', href: '/contact' },
    secondary: { label: 'View Products', href: '/products' },
  },
]

const INTERVAL = 6000

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: [0.7, 0, 0.84, 0] } }
}

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((idx) => setCurrent(idx), [])
  const next = useCallback(() => setCurrent((p) => (p + 1) % SLIDES.length), [])
  const prev = useCallback(() => setCurrent((p) => (p - 1 + SLIDES.length) % SLIDES.length), [])

  useEffect(() => {
    const id = setInterval(next, INTERVAL)
    return () => clearInterval(id)
  }, [next])

  return (
    <section
      suppressHydrationWarning
      className="relative isolate flex w-full min-h-[min(100svh,800px)] md:min-h-[min(100svh,1000px)] items-center justify-center overflow-hidden pt-[calc(5.5rem+env(safe-area-inset-top,0px))] pb-16 md:pt-[70px] md:pb-24 lg:pb-28 bg-slate-100"
      aria-labelledby="hero-heading"
      aria-roledescription="carousel"
    >
      {/* Background Images with AnimatePresence for smooth crossfade & Ken Burns */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          className="absolute inset-0 z-0 overflow-hidden bg-slate-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.img
            src={SLIDES[current].image}
            alt={SLIDES[current].alt}
            className="absolute inset-0 h-full w-full max-w-none object-cover object-[50%_center] min-[400px]:object-[40%_center] sm:object-[32%_center] lg:object-[38%_center]"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
            fetchPriority={current === 0 ? 'high' : 'auto'}
          />
        </motion.div>
      </AnimatePresence>

      <div
        className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(3,14,32,0.84)_0%,rgba(7,26,55,0.68)_35%,rgba(7,26,55,0.30)_68%,rgba(7,26,55,0.10)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_28%_40%,rgba(59,130,246,0.18)_0%,rgba(3,14,32,0)_42%)]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 min-[400px]:px-5 sm:px-8 lg:px-12 xl:px-16 translate-y-0 sm:-translate-y-3 lg:-translate-y-7 flex justify-start">
        <div className="relative w-full max-w-[650px] ml-0 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20 h-[380px] sm:h-[340px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="absolute inset-0 w-full space-y-4 sm:space-y-5 text-left flex flex-col justify-center"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                exit: { opacity: 0, transition: { staggerChildren: 0.04, staggerDirection: -1 } }
              }}
            >
            <motion.h1
              variants={textVariants}
              id="hero-heading"
              className="max-w-[680px] font-display text-[clamp(1.7rem,3.4vw+0.7rem,3.2rem)] leading-[1.08] tracking-tight text-slate-100 font-extrabold drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]"
            >
              {SLIDES[current].heading}
            </motion.h1>

            <motion.div
              variants={textVariants}
              className="h-px w-full max-w-[520px] bg-slate-200/35"
              aria-hidden="true"
            />

            <motion.p
              variants={textVariants}
              className="max-w-[560px] text-[14px] sm:text-[16px] leading-snug text-slate-200 font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
            >
              {SLIDES[current].description}
            </motion.p>

            <motion.div variants={textVariants} className="flex flex-row flex-wrap gap-3 pt-2">
              <a
                href={SLIDES[current].cta.href}
                className="inline-flex min-h-[46px] items-center justify-center rounded-md border border-transparent bg-[#22c55e] px-6 sm:px-8 text-[14px] sm:text-[15px] font-bold leading-none text-white shadow-[0_10px_28px_rgba(34,197,94,0.34)] transition-all duration-200 hover:bg-[#16a34a] hover:scale-[1.02]"
              >
                {SLIDES[current].cta.label}
              </a>
              <a
                href={SLIDES[current].secondary.href}
                className="inline-flex min-h-[46px] items-center justify-center gap-1.5 rounded-md border border-slate-200/40 bg-white/5 px-6 sm:px-8 text-[14px] sm:text-[15px] font-bold leading-none text-slate-100 backdrop-blur-sm transition-all duration-200 hover:border-slate-100/70 hover:bg-white/12 hover:scale-[1.02]"
              >
                {SLIDES[current].secondary.label}
                <ChevronRight size={18} strokeWidth={2.5} aria-hidden="true" className="shrink-0 opacity-90" />
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white hover:scale-105 hover:border-slate-300 transition-all duration-300"
      >
        <ChevronLeft size={24} strokeWidth={2.5} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white hover:scale-105 hover:border-slate-300 transition-all duration-300"
      >
        <ChevronRight size={24} strokeWidth={2.5} />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`relative overflow-hidden h-1.5 rounded-full transition-all duration-500 ${
              i === current ? 'w-10 sm:w-12 bg-slate-300/80' : 'w-2 sm:w-2.5 bg-slate-400/70 hover:bg-slate-500/80'
            }`}
          >
            {i === current && (
              <motion.div
                className="absolute inset-y-0 left-0 bg-[#00C853]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  )
}
