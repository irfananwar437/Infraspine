'use client'
import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  if (!visible) return null

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className="fixed bottom-[76px] right-4 sm:right-6 z-40 w-[44px] h-[44px] rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-lg hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all duration-200 hover:scale-110"
    >
      <ArrowUp size={18} aria-hidden="true" />
    </button>
  )
}
