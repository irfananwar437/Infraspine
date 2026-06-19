'use client'
import { useState, useEffect, useRef, useCallback, Suspense } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { m, AnimatePresence } from 'framer-motion'
import {
  Server, ShieldCheck, Cloud, Network, Code2, Zap, Users, BookOpen,
  Briefcase, Database, Camera, Fingerprint, Shield, Phone, Mail,
  MessageCircle, ChevronDown, Menu, X, ArrowRight, Building2, Heart,
  Truck, BarChart2, Factory, Package, Home, ChevronRight, Sparkles,
  MonitorSmartphone,
} from 'lucide-react'

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */

/** Three grouped columns for the mega-menu */
const MEGA_COLS = [
  {
    heading: 'Managed IT & Field',
    icon: Server,
    color: '#2563EB',
    groups: [
      {
        parent: { label: 'Managed IT Services', href: '/services/managed-it-services', icon: Server },
        items: [
          { label: '24/7 NOC Monitoring',    href: '/services/managed-it-services/noc-monitoring' },
          { label: 'Server Management',      href: '/services/server-management' },
          { label: 'Service Desk',           href: '/services/managed-it-services/service-desk' },
          { label: 'Remote Support',         href: '/services/managed-it-services/remote-support' },
          { label: 'Patch Management',       href: '/services/managed-it-services/patch-management' },
          { label: 'IT Asset Management',    href: '/services/managed-it-services/it-asset-management' },
          { label: 'Data Backup & Recovery', href: '/services/data-backup-recovery' },
        ],
      },
      {
        parent: { label: 'Global Field Services', href: '/services/field-services', icon: MonitorSmartphone },
        items: [
          { label: 'Hardware Break Fix',    href: '/services/field-services/hardware-break-fix' },
          { label: 'Desktop & IT Support',  href: '/services/field-services/desktop-support' },
          { label: 'Rollouts & Migrations', href: '/services/field-services/rollouts-migrations' },
          { label: 'Network Support',       href: '/services/field-services/network-support' },
          { label: 'Audio Video Support',   href: '/services/field-services/audio-video-support' },
        ],
      },
      {
        parent: { label: 'Cloud Solutions', href: '/services/cloud-solutions', icon: Cloud },
        items: [
          { label: 'Microsoft 365',               href: '/services/cloud-solutions/microsoft-365' },
          { label: 'Microsoft Azure',             href: '/services/cloud-solutions/azure' },
          { label: 'Amazon AWS',                  href: '/services/cloud-solutions/aws' },
          { label: 'SharePoint & Power Platform', href: '/services/cloud-solutions/sharepoint' },
        ],
      },
    ],
  },
  {
    heading: 'Security & Compliance',
    icon: ShieldCheck,
    color: '#DC2626',
    groups: [
      {
        parent: { label: 'Cybersecurity', href: '/services/cyber-security', icon: ShieldCheck },
        items: [
          { label: 'SOC as a Service',         href: '/services/cyber-security/soc' },
          { label: 'Penetration Testing',      href: '/services/cyber-security/penetration-testing' },
          { label: 'Vulnerability Assessment', href: '/services/cyber-security/vulnerability-assessment' },
          { label: 'Incident Response',        href: '/services/cyber-security/incident-response' },
          { label: 'Cloud Security',           href: '/services/cyber-security/cloud-security' },
          { label: 'Data Loss Prevention',     href: '/services/cyber-security/data-loss-prevention' },
        ],
      },
      {
        parent: { label: 'Compliance & Standards', href: '/services/cyber-security', icon: Briefcase },
        items: [
          { label: 'ISO 27001 Consulting', href: '/services/cyber-security/iso-27001' },
          { label: 'PCI-DSS Assessments',  href: '/services/cyber-security/pci-dss' },
          { label: 'Cyber Essentials',     href: '/services/cyber-security/cyber-essentials' },
          { label: 'NHS-DSPT Assessment',  href: '/services/cyber-security/nhs-dspt' },
          { label: 'DPO as a Service',     href: '/services/cyber-security/dpo-as-a-service' },
          { label: 'IT Security Auditing', href: '/services/cyber-security/security-auditing' },
        ],
      },
      {
        parent: { label: 'Physical Security', href: '/services/physical-security', icon: Camera },
        items: [
          { label: 'CCTV & Surveillance', href: '/services/physical-security/cctv' },
          { label: 'Access Control',      href: '/services/physical-security/access-control' },
          { label: 'Biometric Systems',   href: '/services/physical-security/biometrics' },
          { label: 'Alarm Systems',       href: '/services/physical-security/alarm-systems' },
        ],
      },
    ],
  },
  {
    heading: 'Technology & Professional',
    icon: Code2,
    color: '#16A34A',
    groups: [
      {
        parent: { label: 'Software Development', href: '/services/software-development', icon: Code2 },
        items: [
          { label: 'Mobile App Development', href: '/services/software-development/mobile-apps' },
          { label: 'Custom ERP Development', href: '/services/software-development/erp' },
          { label: 'CRM Implementation',     href: '/services/crm' },
          { label: 'AI & Automation',        href: '/services/ai-automation' },
        ],
      },
      {
        parent: { label: 'Network & Infrastructure', href: '/services/network-infrastructure', icon: Network },
        items: [
          { label: 'Network Design & Maintenance', href: '/services/network-infrastructure/network-design' },
          { label: 'Structured Cabling',           href: '/services/network-infrastructure/structured-cabling' },
          { label: 'VoIP & Communications',        href: '/services/network-infrastructure/voip' },
          { label: 'Data Center Services',         href: '/services/data-center' },
        ],
      },
      {
        parentLabel: 'Professional & More', parentIcon: Users,
        items: [
          { label: 'Project Management',  href: '/services/project-management' },
          { label: 'IT Recruitment',      href: '/services/it-recruitment' },
          { label: 'CIO as a Service',    href: '/services/cio-as-a-service' },
          { label: 'Disaster Recovery',   href: '/services/disaster-recovery' },
          { label: 'Business Continuity', href: '/services/cyber-security/business-continuity' },
          { label: 'IT Consultancy',      href: '/services/it-consultancy' },
          { label: 'IT Training & Certs', href: '/services/it-trainings' },
          { label: 'BPO & Outsourcing',   href: '/services/bpo-services' },
        ],
      },
    ],
  },
]

/** Flat list used for mobile menu (derived from MEGA_COLS) */
const ALL_SERVICE_LINKS = MEGA_COLS.flatMap(col =>
  col.groups.flatMap(g => [
    ...(g.parent ? [g.parent] : []),
    ...g.items,
  ])
)

const INDUSTRIES = [
  { label: 'Manufacturing',      href: '/industries/manufacturing', icon: Factory   },
  { label: 'Healthcare',         href: '/industries/healthcare',    icon: Heart     },
  { label: 'Retail',             href: '/industries/retail',        icon: Package   },
  { label: 'Financial Services', href: '/industries/financial',     icon: BarChart2 },
  { label: 'Construction',       href: '/industries/construction',  icon: Building2 },
  { label: 'Logistics',          href: '/industries/logistics',     icon: Truck     },
  { label: 'Real Estate',        href: '/industries/real-estate',   icon: Home      },
]

const ABOUT_ITEMS = [
  { label: 'About Infraspine',   href: '/about-us'         },
  { label: 'Our Organisation',   href: '/our-organization' },
  { label: 'Projects & Results', href: '/projects'         },
  { label: 'Contact Us',         href: '/contact-us'       },
]

/* ─────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────────────────────── */
const megaV = {
  hidden:  { opacity: 0, y: -6, scale: 0.99 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, y: -4, scale: 0.99, transition: { duration: 0.13 } },
}
const dropV = {
  hidden:  { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.15, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -4, transition: { duration: 0.11 } },
}

/* ─────────────────────────────────────────────────────────────
   MEGA-MENU
   Outer div handles positioning (CSS transform not subject to
   Framer Motion override). Inner m.div handles animation.
   utility bar 32px + main nav 60px + 2px borders = ~94px top

   The CTA footer is OUTSIDE the scrollable region (flex-shrink-0)
   so it's always visible without scrolling — previously it was
   the last item inside the scrollable list and was invisible
   unless the user scrolled all the way down.
───────────────────────────────────────────────────────────── */
function ServicesMega() {
  return (
    <div
      className="fixed z-50"
      style={{ top: 94, left: '50%', transform: 'translateX(-50%)', width: 920, maxWidth: 'calc(100vw - 24px)' }}
    >
      <m.div
        variants={megaV} initial="hidden" animate="visible" exit="exit"
        className="rounded-b-2xl origin-top bg-white border border-slate-200 overflow-hidden flex flex-col"
        style={{
          boxShadow: '0 24px 64px rgba(7,26,55,0.20), 0 4px 16px rgba(7,26,55,0.10)',
          maxHeight: 'min(82vh, 600px)',
        }}
        role="menu"
        aria-label="Services menu"
      >

        {/* ── Scrollable region: column headers + items ── */}
        <div className="overflow-y-auto flex-1 min-h-0">

          {/* Column headers — sticky to the scrollable region */}
          <div className="grid grid-cols-3 divide-x divide-slate-100 sticky top-0 z-10 bg-white">
            {MEGA_COLS.map((col, ci) => (
              <div
                key={ci}
                className="flex items-center gap-2.5 px-4 py-2.5"
                style={{ background: `${col.color}0d`, borderBottom: `1px solid ${col.color}22` }}
              >
                <span
                  className="inline-flex items-center justify-center rounded-lg w-6 h-6 flex-shrink-0"
                  style={{ background: `${col.color}22` }}
                >
                  <col.icon size={13} style={{ color: col.color }} strokeWidth={2} />
                </span>
                <span className="text-[11px] font-black uppercase tracking-[0.15em]" style={{ color: col.color }}>
                  {col.heading}
                </span>
              </div>
            ))}
          </div>

          {/* Service items */}
          <div className="grid grid-cols-3 divide-x divide-slate-100">
            {MEGA_COLS.map((col, ci) => (
              <div key={ci} className="px-4 py-3">
                {col.groups.map((g, gi) => (
                  <div key={gi} className={gi > 0 ? 'mt-2.5 pt-2.5 border-t border-slate-100' : ''}>

                    {/* Parent heading */}
                    {g.parent ? (
                      <Link
                        href={g.parent.href}
                        className="group flex items-center gap-2.5 px-2 py-1.5 rounded-xl mb-1 transition-colors hover:bg-slate-50"
                      >
                        <span
                          className="flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                          style={{ background: `${col.color}15` }}
                        >
                          {g.parent.icon && (
                            <g.parent.icon size={12} style={{ color: col.color }} strokeWidth={1.8} />
                          )}
                        </span>
                        <span className="text-[13px] font-bold flex-1 leading-tight" style={{ color: col.color }}>
                          {g.parent.label}
                        </span>
                        <ChevronRight
                          size={10}
                          className="flex-shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150"
                          style={{ color: col.color }}
                        />
                      </Link>
                    ) : (
                      <div className="flex items-center gap-2.5 px-2 py-1 mb-1">
                        {g.parentIcon && (
                          <span
                            className="flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center"
                            style={{ background: `${col.color}15` }}
                          >
                            <g.parentIcon size={12} style={{ color: col.color }} strokeWidth={1.8} />
                          </span>
                        )}
                        <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
                          {g.parentLabel || 'More'}
                        </p>
                      </div>
                    )}

                    {/* Sub-items */}
                    <div>
                      {g.items.map(item => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group/item flex items-center gap-2 px-2 py-1 rounded-md text-[12.5px] leading-tight text-slate-500 transition-colors hover:text-slate-900 hover:bg-slate-50"
                        >
                          <span
                            className="flex-shrink-0 w-1.5 h-1.5 rounded-full transition-transform duration-150 group-hover/item:scale-125"
                            style={{ background: `${col.color}55` }}
                          />
                          {item.label}
                        </Link>
                      ))}
                    </div>

                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA — pinned, always visible, never scrolls away ── */}
        <div className="border-t-2 border-blue-600 flex-shrink-0">

          {/* Secondary links */}
          <div
            className="flex items-center gap-5 px-5 py-2 border-b"
            style={{ background: '#040f20', borderColor: '#17355f' }}
          >
            <Link
              href="/services"
              className="flex items-center gap-1.5 text-[12px] font-bold text-slate-400 transition-colors hover:text-white"
            >
              View all services <ArrowRight size={11} />
            </Link>
            <span className="text-slate-700 select-none">|</span>
            <Link
              href="/book-meeting"
              className="text-[12px] font-bold text-slate-400 transition-colors hover:text-white"
            >
              Book a consultation
            </Link>
          </div>

          {/* Primary CTA */}
          <div
            className="flex items-center justify-between gap-4 px-5 py-2.5"
            style={{ background: 'linear-gradient(90deg, #071a37 0%, #0a2347 100%)', borderTop: '1px solid #17355f' }}
          >
            <div className="min-w-0">
              <p className="text-[14px] font-black leading-tight text-slate-100">
                Not sure where to start?
              </p>
              <p className="text-[12px] mt-0.5 font-medium text-slate-400">
                Free 60-min IT assessment — no commitment
              </p>
            </div>
            <Link
              href="/request-quote"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-[14px] font-black whitespace-nowrap transition-all hover:scale-[1.03] active:scale-95"
              style={{
                background: '#00C853',
                color: '#022215',
                boxShadow: '0 0 32px rgba(0,200,83,0.7), 0 0 12px rgba(0,200,83,0.5), 0 4px 16px rgba(0,200,83,0.4)',
              }}
            >
              Get Free Assessment <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </m.div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   SIMPLE DROPDOWN (Industries / About)
───────────────────────────────────────────────────────────── */
function SimpleDropdown({ items }) {
  return (
    <m.div
      variants={dropV} initial="hidden" animate="visible" exit="exit"
      className="absolute top-full left-0 z-50"
      style={{ width: 228 }}
      role="menu"
    >
      <div
        className="rounded-xl overflow-hidden"
        style={{
          background: '#fff',
          border: '1px solid #E2E8F0',
          boxShadow: '0 12px 36px rgba(7,26,55,0.12)',
        }}
      >
        <div className="py-1.5">
          {items.map(item => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              className="flex items-center gap-2.5 px-4 py-2.5 transition-all hover:bg-slate-50"
              style={{ color: '#1E293B' }}
            >
              {item.icon && (
                <span
                  className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                  style={{ background: '#F1F5F9' }}
                >
                  <item.icon size={12} style={{ color: '#64748B' }} strokeWidth={1.8} />
                </span>
              )}
              <span className="text-[13px] font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </m.div>
  )
}

/* ─────────────────────────────────────────────────────────────
   BODY SCROLL LOCK — shared, ref-counted so multiple menu
   instances (desktop hover menus + mobile accordion) can lock/
   unlock independently without one clobbering another's lock.
   This is the primary defense against "menu stays visible while
   the page scrolls": instead of reacting to scroll events after
   the fact (which has gaps — scrollbar-drag, momentum scroll,
   keyboard paging), it makes the page unable to scroll at all
   for as long as any menu is open.
───────────────────────────────────────────────────────────── */
let scrollLockCount = 0
let savedHtmlOverflow = ''

function lockBodyScroll() {
  if (scrollLockCount === 0) {
    savedHtmlOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
  }
  scrollLockCount++
}

function unlockBodyScroll() {
  scrollLockCount = Math.max(0, scrollLockCount - 1)
  if (scrollLockCount === 0) {
    document.documentElement.style.overflow = savedHtmlOverflow
  }
}

/* ─────────────────────────────────────────────────────────────
   HOVER WRAPPER — click navigates to href, hover opens dropdown
   Closes on: mouse leave, scroll, outside click, route change, ESC.
───────────────────────────────────────────────────────────── */
function HoverMenu({ label, href, active, children }) {
  const [open, setOpen] = useState(false)
  const timer = useRef(null)
  const rootRef = useRef(null)
  const pathname = usePathname()

  const show = useCallback(() => { clearTimeout(timer.current); setOpen(true) }, [])
  const hide = useCallback(() => { timer.current = setTimeout(() => setOpen(false), 220) }, [])
  const closeNow = useCallback(() => { clearTimeout(timer.current); setOpen(false) }, [])

  useEffect(() => () => clearTimeout(timer.current), [])

  // Route change — always close (covers Link clicks inside the menu too)
  useEffect(() => { closeNow() }, [pathname, closeNow])

  // Lock page scroll for as long as this menu is open
  useEffect(() => {
    if (!open) return
    lockBodyScroll()
    return () => unlockBodyScroll()
  }, [open])

  // Scroll / outside click / ESC — only listen while open.
  // Uses 'wheel' + 'touchmove' on document (not window's 'scroll') because the
  // mega-menu panel has its own overflow-y-auto: when the cursor is over the
  // panel, the browser scroll-chains into that inner panel and the window
  // never scrolls, so window's 'scroll' event never fires and the menu
  // never closes. 'wheel'/'touchmove' fire on whatever element is under the
  // cursor and bubble to document regardless of which element ends up
  // scrolling, so this reliably closes the menu on ANY scroll input.
  useEffect(() => {
    if (!open) return

    const onScrollIntent = () => closeNow()
    const onPointerDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) closeNow()
    }
    const onKeyDown = (e) => { if (e.key === 'Escape') closeNow() }

    window.addEventListener('scroll', onScrollIntent, { passive: true })
    document.addEventListener('wheel', onScrollIntent, { passive: true })
    document.addEventListener('touchmove', onScrollIntent, { passive: true })
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown, { passive: true })
    document.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('scroll', onScrollIntent)
      document.removeEventListener('wheel', onScrollIntent)
      document.removeEventListener('touchmove', onScrollIntent)
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, closeNow])

  const cls = `flex items-center gap-1.5 px-3.5 py-2 text-[13.5px] font-medium rounded-md transition-colors ${
    active || open
      ? 'text-white bg-white/10'
      : 'text-slate-300 hover:text-white hover:bg-white/5'
  }`

  return (
    <div ref={rootRef} className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <Link href={href} className={cls} aria-expanded={open} aria-haspopup="true">
        {label}
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </Link>
      {/* Invisible bridge — fills the gap between the trigger link and the dropdown so
          mouse movement downward stays inside the onMouseEnter zone */}
      {open && (
        <div
          className="absolute top-full"
          style={{ height: 24, left: '50%', transform: 'translateX(-50%)', width: 960, maxWidth: '100vw' }}
          aria-hidden="true"
        />
      )}
      <AnimatePresence>
        {open && (
          <div onMouseEnter={show} onMouseLeave={hide}>
            {children}
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   NAVBAR INNER
───────────────────────────────────────────────────────────── */
function NavbarInner() {
  const pathname = usePathname()
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [mobileExp,   setMobileExp]   = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mobile menu: close on route change so it never lingers after navigation
  useEffect(() => { setMobileOpen(false); setMobileExp(null) }, [pathname])

  // Mobile menu: close on ESC
  useEffect(() => {
    if (!mobileOpen) return
    const onKeyDown = (e) => { if (e.key === 'Escape') setMobileOpen(false) }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  // Mobile menu: lock page scroll while open. The menu's own services/industries/
  // about accordions keep their own overflow-y-auto, so this only blocks the
  // page behind it from scrolling — it doesn't block scrolling inside the menu.
  useEffect(() => {
    if (!mobileOpen) return
    lockBodyScroll()
    return () => unlockBodyScroll()
  }, [mobileOpen])

  const isActive = base => pathname === base || pathname.startsWith(base + '/')

  const linkCls = active =>
    `flex items-center px-3.5 py-2 text-[13.5px] font-medium rounded-md transition-colors ${
      active ? 'text-white bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/5'
    }`

  return (
    <div className="fixed inset-x-0 top-0 z-50" role="navigation" aria-label="Main navigation">

      {/* ── Top utility bar ── */}
      <div className="hidden lg:block border-b" style={{ background: '#040f20', borderColor: '#0d2444' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-8">
          <div className="flex items-center gap-6">
            <a
              href="tel:+923001234567"
              className="flex items-center gap-1.5 text-[11.5px] font-medium transition-colors hover:text-white"
              style={{ color: '#94A3B8' }}
            >
              <Phone size={10} style={{ color: '#2563EB' }} />
              +92 300 123 4567
            </a>
            <a
              href="mailto:hello@infraspine.com"
              className="flex items-center gap-1.5 text-[11.5px] font-medium transition-colors hover:text-white"
              style={{ color: '#94A3B8' }}
            >
              <Mail size={10} style={{ color: '#2563EB' }} />
              hello@infraspine.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-semibold" style={{ color: '#475569' }}>
              24/7 Enterprise Support
            </span>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full transition-all hover:opacity-90"
              style={{ background: '#25D366', color: '#fff' }}
            >
              <MessageCircle size={10} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Main sticky navbar ── */}
      <nav
        className="relative transition-all duration-300"
        style={{
          borderBottom: '1px solid #17355f',
          boxShadow: scrolled
            ? '0 8px 40px rgba(3,10,24,0.4)'
            : '0 4px 20px rgba(3,10,24,0.2)',
        }}
      >
        {/* Blur layer lives here — as a child, NOT an ancestor of ServicesMega's
            fixed panel. backdrop-filter on a non-ancestor cannot shift the fixed
            containing block, so ServicesMega's top:104 stays viewport-relative. */}
        <div
          className="absolute inset-0 -z-10"
          aria-hidden="true"
          style={{
            background: scrolled ? 'rgba(7,26,55,0.98)' : 'rgba(7,26,55,0.95)',
            backdropFilter: 'blur(16px)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-[60px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="Infraspine">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <circle cx="18" cy="8"  r="4" fill="#00C853" />
                <circle cx="8"  cy="26" r="4" fill="#2563EB" />
                <circle cx="28" cy="26" r="4" fill="#2563EB" />
                <circle cx="18" cy="20" r="3" fill="#fff" opacity="0.9" />
                <line x1="18" y1="12" x2="18" y2="17" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="10" y1="24" x2="16" y2="21" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="26" y1="24" x2="20" y2="21" stroke="#94a3b8" strokeWidth="1.5" />
              </svg>
              <span className="text-[17px] font-black tracking-[0.15em] text-white">INFRASPINE</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              <Link href="/" className={linkCls(pathname === '/')}>Home</Link>

              <HoverMenu label="Services" href="/services" active={isActive('/services')}>
                <ServicesMega />
              </HoverMenu>

              <HoverMenu label="Industries" href="/industries" active={isActive('/industries')}>
                <SimpleDropdown items={INDUSTRIES} />
              </HoverMenu>

              <Link href="/blog"          className={linkCls(isActive('/blog'))}>Blog</Link>
              <Link href="/resources"    className={linkCls(isActive('/resources'))}>Resources</Link>
              <Link href="/infraspine-ai"
                className={`flex items-center gap-1 px-3.5 py-2 text-[13.5px] font-medium rounded-md transition-all ${
                  isActive('/infraspine-ai')
                    ? 'text-white bg-white/10'
                    : 'hover:bg-white/5'
                }`}
                style={{ color: isActive('/infraspine-ai') ? '#fff' : '#B7FF58' }}>
                <Sparkles size={12} style={{ color: '#B7FF58' }} />
                Infraspine AI
              </Link>

              <HoverMenu
                label="About"
                href="/about-us"
                active={
                  isActive('/about-us') ||
                  isActive('/our-organization') ||
                  isActive('/projects') ||
                  isActive('/contact-us')
                }
              >
                <SimpleDropdown items={ABOUT_ITEMS} />
              </HoverMenu>
            </div>

            {/* CTA buttons */}
            <div className="hidden lg:flex items-center gap-2.5">
              <Link
                href="/book-meeting"
                className="px-4 py-2 rounded-xl text-[13px] font-semibold transition-all hover:bg-white/10"
                style={{ border: '1.5px solid rgba(255,255,255,0.22)', color: '#e2e8f0' }}
              >
                Book Meeting
              </Link>
              <Link
                href="/request-quote"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all hover:opacity-90"
                style={{ background: '#00C853', color: '#071a37' }}
              >
                Free Quote <ArrowRight size={12} />
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              className="lg:hidden text-slate-300 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(p => !p)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <m.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden border-t overflow-y-auto"
            style={{ background: '#071a37', borderColor: '#17355f', maxHeight: '82vh' }}
            role="menu"
          >
            <div className="px-4 py-4 space-y-1">

              {/* Utility row */}
              <div className="flex flex-wrap gap-4 pb-4 border-b" style={{ borderColor: '#17355f' }}>
                <a href="tel:+923001234567" className="flex items-center gap-1.5 text-[12px]" style={{ color: '#94A3B8' }}>
                  <Phone size={11} style={{ color: '#2563EB' }} /> +92 300 123 4567
                </a>
                <a href="mailto:hello@infraspine.com" className="flex items-center gap-1.5 text-[12px]" style={{ color: '#94A3B8' }}>
                  <Mail size={11} style={{ color: '#2563EB' }} /> hello@infraspine.com
                </a>
                <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[12px] font-semibold" style={{ color: '#25D366' }}>
                  <MessageCircle size={11} /> WhatsApp
                </a>
              </div>

              <Link href="/" onClick={() => setMobileOpen(false)}
                className="block py-3 text-[14px] font-medium border-b text-slate-200 hover:text-white"
                style={{ borderColor: '#17355f' }}>
                Home
              </Link>

              {/* ── Services accordion (grouped by category) ── */}
              <div className="border-b" style={{ borderColor: '#17355f' }}>
                <div className="flex items-center justify-between py-3">
                  <Link href="/services" onClick={() => setMobileOpen(false)}
                    className="text-[14px] font-medium text-slate-200 hover:text-white">
                    Services
                  </Link>
                  <button
                    onClick={() => setMobileExp(p => p === 'services' ? null : 'services')}
                    className="p-1.5 rounded-md hover:bg-white/10 transition-colors"
                    aria-label="Expand Services"
                  >
                    <ChevronDown size={14} className={`text-slate-400 transition-transform duration-200 ${mobileExp === 'services' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                <AnimatePresence>
                  {mobileExp === 'services' && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-3">
                        {MEGA_COLS.map((col, ci) => (
                          <div key={ci} className={ci > 0 ? 'mt-3 pt-3' : ''} style={ci > 0 ? { borderTop: '1px solid #17355f' } : {}}>
                            {/* Category label */}
                            <div className="flex items-center gap-2 px-2 py-1.5 mb-1">
                              <col.icon size={11} style={{ color: col.color }} strokeWidth={2} />
                              <span className="text-[10.5px] font-black uppercase tracking-[0.16em]" style={{ color: col.color }}>
                                {col.heading}
                              </span>
                            </div>
                            {/* All items flat within this column */}
                            {col.groups.map(g => (
                              <div key={g.parent?.href || g.parentLabel}>
                                {g.parent && (
                                  <Link href={g.parent.href} onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-2 py-2 pl-3 pr-2 rounded-lg hover:bg-white/5 transition-colors">
                                    <span className="text-[13px] font-semibold" style={{ color: col.color }}>{g.parent.label}</span>
                                  </Link>
                                )}
                                {!g.parent && g.parentLabel && (
                                  <p className="px-3 pt-1.5 pb-0.5 text-[10px] font-black uppercase tracking-[0.12em]" style={{ color: '#475569' }}>
                                    {g.parentLabel}
                                  </p>
                                )}
                                {g.items.map(item => (
                                  <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-2.5 py-2 pl-6 pr-2 rounded-lg hover:bg-white/5 transition-colors">
                                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: `${col.color}60` }} />
                                    <span className="text-[13px] text-slate-300 hover:text-white">{item.label}</span>
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ── Industries & About accordions ── */}
              {[
                { key: 'industries', label: 'Industries', href: '/industries', links: INDUSTRIES },
                { key: 'about',      label: 'About',      href: '/about-us',   links: ABOUT_ITEMS },
              ].map(g => (
                <div key={g.key} className="border-b" style={{ borderColor: '#17355f' }}>
                  <div className="flex items-center justify-between py-3">
                    <Link href={g.href} onClick={() => setMobileOpen(false)}
                      className="text-[14px] font-medium text-slate-200 hover:text-white">
                      {g.label}
                    </Link>
                    <button
                      onClick={() => setMobileExp(p => p === g.key ? null : g.key)}
                      className="p-1.5 rounded-md hover:bg-white/10 transition-colors"
                      aria-label={`Expand ${g.label}`}
                    >
                      <ChevronDown
                        size={14}
                        className={`text-slate-400 transition-transform duration-200 ${mobileExp === g.key ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
                  <AnimatePresence>
                    {mobileExp === g.key && (
                      <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-3 space-y-0.5">
                          {g.links.map(item => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-2.5 py-2 pl-3 pr-2 rounded-lg hover:bg-white/5 transition-colors"
                            >
                              {item.icon && (
                                <item.icon size={13} style={{ color: '#64748B' }} strokeWidth={1.8} />
                              )}
                              <span className="text-[13px] text-slate-300">{item.label}</span>
                            </Link>
                          ))}
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link href="/blog" onClick={() => setMobileOpen(false)}
                className="block py-3 text-[14px] font-medium border-b text-slate-200 hover:text-white"
                style={{ borderColor: '#17355f' }}>
                Blog
              </Link>
              <Link href="/resources" onClick={() => setMobileOpen(false)}
                className="block py-3 text-[14px] font-medium border-b text-slate-200 hover:text-white"
                style={{ borderColor: '#17355f' }}>
                Resources
              </Link>
              <Link href="/infraspine-ai" onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 py-3 text-[14px] font-bold border-b"
                style={{ borderColor: '#17355f', color: '#B7FF58' }}>
                <Sparkles size={14} style={{ color: '#B7FF58' }} />
                Infraspine AI
              </Link>

              <div className="flex flex-col gap-3 pt-4">
                <Link href="/book-meeting" onClick={() => setMobileOpen(false)}
                  className="w-full py-3 rounded-xl text-[14px] font-bold text-center"
                  style={{ border: '1.5px solid rgba(255,255,255,0.25)', color: '#fff' }}>
                  Book a Meeting
                </Link>
                <Link href="/request-quote" onClick={() => setMobileOpen(false)}
                  className="w-full py-3 rounded-xl text-[14px] font-bold text-center"
                  style={{ background: '#00C853', color: '#071a37' }}>
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   EXPORT
───────────────────────────────────────────────────────────── */
export default function Navbar() {
  return (
    <Suspense fallback={null}>
      <NavbarInner />
    </Suspense>
  )
}
