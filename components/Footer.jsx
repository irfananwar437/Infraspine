'use client'
import { Mail, Phone, Linkedin, Twitter, MessageCircle } from 'lucide-react'

const NAV_COLS = {
  Solutions: [
    { label: 'IT Infrastructure', href: '/services?tab=infra' },
    { label: 'CCTV & Security', href: '/services?tab=cctv' },
    { label: 'Biometric Systems', href: '/services?tab=biometric' },
    { label: 'AI & Automation', href: '/services?tab=automation' }
  ],
  Services: [
    { label: 'Managed IT Support', href: '/services' },
    { label: 'Server Management', href: '/services' },
    { label: 'Network Setup', href: '/services' },
    { label: 'ERP Development', href: '/services?tab=erp' }
  ],
  Company: [
    { label: 'About InfraSpine', href: '/about' },
    { label: 'Knowledge Base', href: '/blog' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact Us', href: '/contact' }
  ],
}

const SOCIALS = [
  { icon: Twitter, label: 'Follow on X (Twitter)', href: 'https://twitter.com/infraspine' },
  { icon: Linkedin, label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/company/infraspine' },
  { icon: Mail, label: 'Email us', href: 'mailto:hello@infraspine.io' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#17355f] bg-[#071a37]" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 pb-8 sm:pb-10 pt-12 sm:pt-16 lg:px-8">
        <div className="mb-10 sm:mb-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12">
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <circle cx="18" cy="8" r="4" fill="#00C853" />
                <circle cx="8" cy="26" r="4" fill="#22C55E" />
                <circle cx="28" cy="26" r="4" fill="#22C55E" />
                <circle cx="18" cy="20" r="3" fill="#fff" opacity="0.9" />
                <line x1="18" y1="12" x2="18" y2="17" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="10" y1="24" x2="16" y2="21" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="26" y1="24" x2="20" y2="21" stroke="#94a3b8" strokeWidth="1.5" />
              </svg>
              <span className="font-display text-[18px] font-black tracking-[0.15em] text-white">INFRASPINE</span>
            </div>

            <p className="max-w-xs sm:max-w-[240px] text-[13px] italic leading-relaxed text-slate-300">
              "Your Technology. Our Responsibility."
            </p>

            <p className="max-w-[240px] text-[12.5px] leading-relaxed text-slate-300">
              We design, deploy and manage complete IT infrastructure, security systems, and AI automation for growing businesses.
            </p>

            <div className="space-y-3">
              <a href="tel:+923001234567" className="flex items-center gap-2.5 text-[13px] text-slate-300 transition-colors hover:text-green-400">
                <Phone size={13} className="shrink-0 text-green-500" aria-hidden="true" />
                +92 300 1234567
              </a>
              <a href="mailto:hello@infraspine.io" className="flex items-center gap-2.5 text-[13px] text-slate-300 transition-colors hover:text-green-400">
                <Mail size={13} className="shrink-0 text-green-500" aria-hidden="true" />
                hello@infraspine.io
              </a>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-[12.5px] font-semibold text-white transition-all hover:opacity-90"
                style={{ background: '#25D366', boxShadow: '0 2px 12px rgba(37,211,102,0.30)' }}
              >
                <MessageCircle size={13} aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="flex gap-2.5 pt-1">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#17355f] bg-white/5 text-slate-300 transition-all hover:border-green-500/30 hover:text-green-400"
                >
                  <Icon size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(NAV_COLS).map(([cat, items]) => (
            <div key={cat}>
              <div className="mb-5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-200">{cat}</div>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[13px] text-slate-300 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-8 h-px bg-[#17355f]" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-[11px] text-slate-300">
            Copyright {new Date().getFullYear()} InfraSpine. All rights reserved.
          </div>
          <div className="flex items-center gap-5 text-[11px] text-slate-300">
            <a href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="transition-colors hover:text-white">
              Terms of Service
            </a>
            <div className="flex items-center gap-1.5" role="status" aria-label="System status: operational">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-green-400" />
              </span>
              All systems operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
