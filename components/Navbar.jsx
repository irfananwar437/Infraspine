'use client'
import { useState, useEffect, useRef, Suspense } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  ChevronDown, Menu, X,
  Server, Camera, Fingerprint, Zap, Database, ShieldCheck,
  Cloud, Headset, Rocket,
  BarChart2, Users, MessageSquare, Package, Globe, Phone,
} from 'lucide-react'

const SERVICES_ITEMS = [
  { label: 'IT Infrastructure',  href: '/services?tab=infra',      icon: Server,      color: '#2563EB', bg: '#EFF6FF', desc: 'Servers, cloud, networking & managed IT' },
  { label: 'CCTV & Security',    href: '/services?tab=cctv',       icon: Camera,      color: '#7C3AED', bg: '#F5F3FF', desc: 'IP cameras, NVR & surveillance systems' },
  { label: 'Biometric & Access', href: '/services?tab=biometric',  icon: Fingerprint, color: '#0891B2', bg: '#ECFEFF', desc: 'Fingerprint, face ID & access control' },
  { label: 'AI & Automation',    href: '/services?tab=automation', icon: Zap,         color: '#D97706', bg: '#FFFBEB', desc: 'n8n workflows, bots & AI agents' },
  { label: 'ERP Development',    href: '/services?tab=erp',        icon: Database,    color: '#16A34A', bg: '#F0FDF4', desc: 'Custom ERP, CRM & business systems' },
  { label: 'Cybersecurity',      href: '/services?tab=cyber',      icon: ShieldCheck, color: '#DC2626', bg: '#FEF2F2', desc: 'Firewall, endpoint protection & compliance' },
  { label: 'Call Center Setup',  href: '/services?tab=callcenter', icon: Phone,       color: '#0F766E', bg: '#F0FDFA', desc: 'PBX, VoIP, IVR & contact center systems' },
]

const SOLUTIONS_ITEMS = [
  { label: 'ERP Systems',            href: '/solutions', icon: Database, color: '#16A34A', bg: '#F0FDF4', desc: 'Custom ERP for finance, HR, inventory & ops' },
  { label: 'Cloud Migration',        href: '/solutions', icon: Cloud,    color: '#2563EB', bg: '#EFF6FF', desc: 'Seamless move to AWS, Azure or hybrid cloud' },
  { label: 'Managed IT Services',    href: '/solutions', icon: Headset,  color: '#7C3AED', bg: '#F5F3FF', desc: 'Fully outsourced 24/7 IT department' },
  { label: 'Digital Transformation', href: '/solutions', icon: Rocket,   color: '#D97706', bg: '#FFFBEB', desc: 'AI, automation & process modernisation' },
]

const PRODUCTS_ITEMS = [
  { label: 'InfraSpine ERP',      href: '/products', icon: BarChart2,      color: '#2563EB', bg: '#EFF6FF', desc: 'HR, finance, inventory & operations' },
  { label: 'InfraSpine CRM',      href: '/products', icon: Users,          color: '#7C3AED', bg: '#F5F3FF', desc: 'Sales pipeline & client management' },
  { label: 'InfraSpine Automate', href: '/products', icon: Zap,            color: '#D97706', bg: '#FFFBEB', desc: 'n8n workflows, bots & integrations' },
  { label: 'InfraSpine Comms',    href: '/products', icon: MessageSquare,  color: '#16A34A', bg: '#F0FDF4', desc: 'WhatsApp Business & PBX unified' },
  { label: 'InfraSpine Monitor',  href: '/products', icon: ShieldCheck,    color: '#0891B2', bg: '#ECFEFF', desc: 'Real-time IT infrastructure monitoring' },
  { label: 'InfraSpine Stock',    href: '/products', icon: Package,        color: '#EA580C', bg: '#FFF7ED', desc: 'Inventory & warehouse management' },
  { label: 'InfraSpine Web',      href: '/products', icon: Globe,          color: '#0F766E', bg: '#F0FDFA', desc: 'Custom websites & eCommerce stores' },
]

const NAV_LINKS = [
  { label: 'Home',    href: '#home'    },
  { label: 'Contact', href: '/contact' },
]

function NavbarInner() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const isServicesPage = pathname === '/services'
  const isSolutionsPage = pathname === '/solutions'
  const isProductsPage = pathname === '/products'
  const isCaseStudiesPage = pathname === '/case-studies'
  const isContactPage = pathname === '/contact'

  const [mobileOpen, setMobileOpen]       = useState(false)
  const [servicesOpen, setServicesOpen]   = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [productsOpen, setProductsOpen]   = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = ['home', 'solutions', 'products', 'case-studies']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const fn = (e) => {
      if (!e.target.closest('[data-dropdown]')) {
        setSolutionsOpen(false)
        setServicesOpen(false)
        setProductsOpen(false)
      }
    }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [])

  const scrollTo = (href) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
    setSolutionsOpen(false)
    setServicesOpen(false)
    setProductsOpen(false)
  }

  const isActive = (href) => isHomePage && activeSection === href.replace('#', '')

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 border-b border-[#17355f] bg-[#071a37]/95 shadow-[0_10px_32px_rgba(3,14,32,0.32)] backdrop-blur"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">

          {/* Logo */}
          <button onClick={() => isHomePage ? scrollTo('#home') : window.location.href='/'} className="flex items-center gap-2.5 group" aria-label="Go to homepage">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <circle cx="18" cy="8" r="4" fill="#00C853"/>
              <circle cx="8" cy="26" r="4" fill="#22C55E"/>
              <circle cx="28" cy="26" r="4" fill="#22C55E"/>
              <circle cx="18" cy="20" r="3" fill="#fff" opacity="0.9"/>
              <line x1="18" y1="12" x2="18" y2="17" stroke="#94a3b8" strokeWidth="1.5"/>
              <line x1="10" y1="24" x2="16" y2="21" stroke="#94a3b8" strokeWidth="1.5"/>
              <line x1="26" y1="24" x2="20" y2="21" stroke="#94a3b8" strokeWidth="1.5"/>
            </svg>
            <span className="font-display text-[18px] font-black tracking-[0.15em] text-white">INFRASPINE</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">

            {/* Home */}
            <Link
              href="/"
              onClick={(e) => { if (isHomePage) { e.preventDefault(); scrollTo('#home') } }}
              className={`px-4 py-2 text-[14px] font-medium transition-colors relative ${
                isHomePage
                  ? 'text-white after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-[#55b7ff] after:rounded-full'
                  : 'text-slate-200 hover:text-white'
              }`}>
              Home
            </Link>

            {/* Services dropdown */}
            <div className="relative" data-dropdown>
              <button
                onClick={() => { setServicesOpen(!servicesOpen); setSolutionsOpen(false); setProductsOpen(false) }}
                onKeyDown={e => e.key === 'Escape' && setServicesOpen(false)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 px-4 py-2 text-[14px] font-medium transition-colors relative ${
                  isServicesPage
                    ? 'text-white after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-[#55b7ff] after:rounded-full'
                    : 'text-slate-200 hover:text-white'
                }`}>
                Services
                <ChevronDown size={13} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Services mega dropdown */}
              {servicesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 w-[620px]"
                  role="menu"
                >
                  {/* Arrow pointer */}
                  <div className="flex justify-center">
                    <div className="w-3 h-3 rotate-45 -mb-1.5 relative z-10" style={{ background: '#fff', border: '1px solid #E2E8F0', borderBottom: 'none', borderRight: 'none' }} />
                  </div>

                  <div className="rounded-2xl overflow-hidden" style={{ background: '#fff', border: '1px solid #E2E8F0', boxShadow: '0 16px 48px rgba(10,22,40,0.1), 0 2px 8px rgba(10,22,40,0.06)' }}>

                    {/* Two-panel layout */}
                    <div className="flex">

                      {/* LEFT - service list */}
                      <div className="flex-1 py-3">
                        <p className="px-5 pt-2 pb-3 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: '#0A1628' }}>Services</p>
                        {SERVICES_ITEMS.map(s => (
                          <Link
                            key={s.label}
                            href={s.href}
                            role="menuitem"
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center gap-3.5 px-5 py-2.5 transition-colors duration-100 group cursor-pointer"
                            onMouseEnter={e => e.currentTarget.style.background = '#F8FAFC'}
                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                          >
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: s.bg }}>
                              <s.icon size={15} style={{ color: s.color }} strokeWidth={1.8} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[13px] font-bold leading-none mb-0.5" style={{ color: '#0A1628' }}>{s.label}</p>
                              <p className="text-[11.5px] font-medium truncate" style={{ color: '#475569' }}>{s.desc}</p>
                            </div>
                            <ChevronDown size={12} className="-rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: s.color }} />
                          </Link>
                        ))}
                        <div className="mx-5 mt-3 pt-3" style={{ borderTop: '1px solid #F1F5F9' }}>
                          <Link href="/services" className="flex items-center gap-1.5 text-[12px] font-semibold transition-colors" style={{ color: '#00C853' }}
                            onMouseEnter={e => e.currentTarget.style.color = '#059669'}
                            onMouseLeave={e => e.currentTarget.style.color = '#00C853'}>
                            View all services <ChevronDown size={11} className="-rotate-90" />
                          </Link>
                        </div>
                        <div className="pb-3" />
                      </div>

                      {/* RIGHT - CTA panel */}
                      <div className="w-[190px] flex-shrink-0 flex flex-col p-5" style={{ background: '#F8FAFC', borderLeft: '1px solid #F1F5F9' }}>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: '#0A1628' }}>Get Started</p>

                        <div className="flex flex-col gap-3 flex-1">
                          <div className="p-3.5 rounded-xl" style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2.5" style={{ background: '#F0FDF4' }}>
                              <span className="text-base">🚀</span>
                            </div>
                            <p className="text-[12px] font-bold mb-1" style={{ color: '#0A1628' }}>Free Audit</p>
                            <p className="text-[11px] leading-relaxed" style={{ color: '#0A1628' }}>Get a free IT infrastructure assessment</p>
                          </div>

                          <div className="p-3.5 rounded-xl" style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2.5" style={{ background: '#EFF6FF' }}>
                              <span className="text-base">💬</span>
                            </div>
                            <p className="text-[12px] font-bold mb-1" style={{ color: '#0A1628' }}>Talk to Us</p>
                            <p className="text-[11px] leading-relaxed" style={{ color: '#0A1628' }}>Speak with an IT specialist today</p>
                          </div>
                        </div>

                        <Link
                          href="/services"
                          onClick={() => setServicesOpen(false)}
                          className="mt-4 w-full py-2.5 rounded-xl text-[12px] font-bold text-center transition-opacity hover:opacity-90"
                          style={{ background: '#00C853', color: '#0A1628' }}
                        >
                          Get a Free Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions dropdown */}
            <div className="relative" data-dropdown>
              <button
                onClick={() => { setSolutionsOpen(!solutionsOpen); setServicesOpen(false); setProductsOpen(false) }}
                onKeyDown={e => e.key === 'Escape' && setSolutionsOpen(false)}
                aria-expanded={solutionsOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 px-4 py-2 text-[14px] font-medium transition-colors relative ${
                  isSolutionsPage
                    ? 'text-white after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-[#55b7ff] after:rounded-full'
                    : 'text-slate-200 hover:text-white'
                }`}>
                Solutions
                <ChevronDown size={13} className={`transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {solutionsOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 w-[520px]"
                  role="menu"
                >
                  {/* Arrow pointer */}
                  <div className="flex justify-center">
                    <div className="w-3 h-3 rotate-45 -mb-1.5 relative z-10" style={{ background: '#fff', border: '1px solid #E2E8F0', borderBottom: 'none', borderRight: 'none' }} />
                  </div>

                  <div className="rounded-2xl overflow-hidden" style={{ background: '#fff', border: '1px solid #E2E8F0', boxShadow: '0 16px 48px rgba(10,22,40,0.1), 0 2px 8px rgba(10,22,40,0.06)' }}>
                    <div className="flex">

                      {/* LEFT - solution list */}
                      <div className="flex-1 py-3">
                        <p className="px-5 pt-2 pb-3 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: '#0A1628' }}>Solutions</p>
                        {SOLUTIONS_ITEMS.map(s => (
                          <Link
                            key={s.label}
                            href={s.href}
                            role="menuitem"
                            className="flex items-center gap-3.5 px-5 py-2.5 transition-colors duration-100 group"
                            onMouseEnter={e => e.currentTarget.style.background = '#F8FAFC'}
                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                          >
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: s.bg }}>
                              <s.icon size={15} style={{ color: s.color }} strokeWidth={1.8} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[13px] font-semibold leading-none mb-0.5" style={{ color: '#0F172A' }}>{s.label}</p>
                              <p className="text-[11.5px] truncate" style={{ color: '#475569' }}>{s.desc}</p>
                            </div>
                            <ChevronDown size={12} className="-rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: s.color }} />
                          </Link>
                        ))}
                        <div className="mx-5 mt-3 pt-3" style={{ borderTop: '1px solid #F1F5F9' }}>
                          <Link href="/solutions" className="flex items-center gap-1.5 text-[12px] font-semibold transition-colors" style={{ color: '#00C853' }}
                            onMouseEnter={e => e.currentTarget.style.color = '#059669'}
                            onMouseLeave={e => e.currentTarget.style.color = '#00C853'}>
                            View all solutions <ChevronDown size={11} className="-rotate-90" />
                          </Link>
                        </div>
                        <div className="pb-3" />
                      </div>

                      {/* RIGHT - CTA panel */}
                      <div className="w-[180px] flex-shrink-0 flex flex-col p-5" style={{ background: '#F8FAFC', borderLeft: '1px solid #F1F5F9' }}>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: '#0A1628' }}>Quick Start</p>

                        <div className="p-3.5 rounded-xl" style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2.5" style={{ background: '#F0FDF4' }}>
                            <span className="text-base">💡</span>
                          </div>
                          <p className="text-[12px] font-bold mb-1" style={{ color: '#0F172A' }}>Not Sure?</p>
                          <p className="text-[11px] leading-relaxed" style={{ color: '#0A1628' }}>Book a free consultation and we'll recommend the right solution</p>
                        </div>
                        <Link
                          href="/solutions"
                          onClick={() => setSolutionsOpen(false)}
                          className="mt-4 w-full py-2.5 rounded-xl text-[12px] font-bold text-center transition-opacity hover:opacity-90"
                          style={{ background: '#00C853', color: '#0A1628' }}
                        >
                          Explore Solutions
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Products dropdown */}
            <div className="relative" data-dropdown>
              <button
                onClick={() => { setProductsOpen(!productsOpen); setServicesOpen(false); setSolutionsOpen(false) }}
                onKeyDown={e => e.key === 'Escape' && setProductsOpen(false)}
                aria-expanded={productsOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 px-4 py-2 text-[14px] font-medium transition-colors relative ${
                  isProductsPage
                    ? 'text-white after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-[#55b7ff] after:rounded-full'
                    : 'text-slate-200 hover:text-white'
                }`}>
                Products
                <ChevronDown size={13} className={`transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
              </button>
              {productsOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 w-[580px]"
                  role="menu"
                >
                  <div className="flex justify-center">
                    <div className="w-3 h-3 rotate-45 -mb-1.5 relative z-10" style={{ background: '#fff', border: '1px solid #E2E8F0', borderBottom: 'none', borderRight: 'none' }} />
                  </div>

                  <div className="rounded-2xl overflow-hidden" style={{ background: '#fff', border: '1px solid #E2E8F0', boxShadow: '0 16px 48px rgba(10,22,40,0.1), 0 2px 8px rgba(10,22,40,0.06)' }}>
                    <div className="flex">
                      <div className="flex-1 py-3">
                        <p className="px-5 pt-2 pb-3 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: '#0A1628' }}>Products</p>
                        {PRODUCTS_ITEMS.map(s => (
                          <Link
                            key={s.label}
                            href={s.href}
                            role="menuitem"
                            className="flex items-center gap-3.5 px-5 py-2.5 transition-colors duration-100 group"
                            onMouseEnter={e => e.currentTarget.style.background = '#F8FAFC'}
                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                          >
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: s.bg }}>
                              <s.icon size={15} style={{ color: s.color }} strokeWidth={1.8} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[13px] font-semibold leading-none mb-0.5" style={{ color: '#0F172A' }}>{s.label}</p>
                              <p className="text-[11.5px] truncate" style={{ color: '#475569' }}>{s.desc}</p>
                            </div>
                            <ChevronDown size={12} className="-rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: s.color }} />
                          </Link>
                        ))}
                        <div className="mx-5 mt-3 pt-3" style={{ borderTop: '1px solid #F1F5F9' }}>
                          <Link href="/products" className="flex items-center gap-1.5 text-[12px] font-semibold transition-colors" style={{ color: '#00C853' }}
                            onMouseEnter={e => e.currentTarget.style.color = '#059669'}
                            onMouseLeave={e => e.currentTarget.style.color = '#00C853'}>
                            View all products <ChevronDown size={11} className="-rotate-90" />
                          </Link>
                        </div>
                        <div className="pb-3" />
                      </div>

                      <div className="w-[180px] flex-shrink-0 flex flex-col p-5" style={{ background: '#F8FAFC', borderLeft: '1px solid #F1F5F9' }}>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: '#0A1628' }}>Quick Links</p>
                        <div className="flex flex-col gap-3 flex-1">
                          <div className="p-3.5 rounded-xl" style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2.5" style={{ background: '#EFF6FF' }}>
                              <span className="text-base">🎯</span>
                            </div>
                            <p className="text-[12px] font-bold mb-1" style={{ color: '#0F172A' }}>Live Demo</p>
                            <p className="text-[11px] leading-relaxed" style={{ color: '#0A1628' }}>See any product in action with a free walkthrough</p>
                          </div>
                          <div className="p-3.5 rounded-xl" style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2.5" style={{ background: '#F0FDF4' }}>
                              <span className="text-base">💰</span>
                            </div>
                            <p className="text-[12px] font-bold mb-1" style={{ color: '#0F172A' }}>Get Pricing</p>
                            <p className="text-[11px] leading-relaxed" style={{ color: '#0A1628' }}>Custom pricing based on your requirements</p>
                          </div>
                        </div>
                        <Link
                          href="/products"
                          onClick={() => setProductsOpen(false)}
                          className="mt-4 w-full py-2.5 rounded-xl text-[12px] font-bold text-center transition-opacity hover:opacity-90"
                          style={{ background: '#00C853', color: '#0A1628' }}
                        >
                          Explore Products
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Case Studies */}
            <Link
              href="/case-studies"
              className={`px-4 py-2 text-[14px] font-medium transition-colors relative ${
                isCaseStudiesPage
                  ? 'text-white after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-[#55b7ff] after:rounded-full'
                  : 'text-slate-200 hover:text-white'
              }`}>
              Case Studies
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`px-4 py-2 text-[14px] font-medium transition-colors relative ${
                isContactPage
                  ? 'text-white after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-[#55b7ff] after:rounded-full'
                  : 'text-slate-200 hover:text-white'
              }`}>
              Contact
            </Link>
          </div>

          {/* Right: System status + CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-2 text-[12px] font-semibold text-slate-100" role="status" aria-label="System operational">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inset-0 rounded-full bg-[#22c55e] opacity-60"/>
                <span className="relative rounded-full h-2 w-2 bg-[#22c55e]"/>
              </span>
              System: Operational
            </div>
            <Link
              href="/contact"
              className="btn-green text-sm py-2.5 px-5">
              Get Started
            </Link>
          </div>

          {/* Mobile burger */}
          <button className="lg:hidden text-slate-200 hover:text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#17355f] bg-[#071a37] px-4 py-5 space-y-1" role="menu">
          <Link href="/" role="menuitem"
            onClick={(e) => { if (isHomePage) { e.preventDefault(); scrollTo('#home') } setMobileOpen(false) }}
            className={`block w-full py-3 text-[14px] border-b border-[#17355f] hover:text-white ${isHomePage ? 'text-white' : 'text-slate-200'}`}>
            Home
          </Link>

          {/* Mobile Services accordion */}
          <div className="border-b border-[#17355f]">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`flex items-center justify-between w-full py-3 text-[14px] font-medium ${
                isServicesPage ? 'text-white' : 'text-slate-200'
              }`}>
              Services
              <ChevronDown size={14} className={`text-slate-200 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pb-3 space-y-1">
                {SERVICES_ITEMS.map(s => (
                  <Link key={s.label} href={s.href}
                    className="flex items-center gap-3 py-2 pl-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: s.bg }}>
                      <s.icon size={13} style={{ color: s.color }} strokeWidth={1.8} />
                    </div>
                    <span className="text-[13px] text-slate-200">{s.label}</span>
                  </Link>
                ))}
                <Link href="/services" className="flex items-center gap-1.5 pl-3 pt-1 text-[12px] font-semibold text-green-400 hover:text-green-300">
                  View all services →
                </Link>
              </div>
            )}
          </div>

          <div className="border-b border-[#17355f]">
            <Link href="/solutions" className="flex items-center justify-between w-full py-3 text-[14px] font-medium text-slate-200 hover:text-white">
              Solutions
              <ChevronDown size={14} className="text-slate-200 -rotate-90" />
            </Link>
            <div className="pb-3 space-y-1">
              {SOLUTIONS_ITEMS.map(s => (
                <Link key={s.label} href={s.href}
                  className="flex items-center gap-3 py-2 pl-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: s.bg }}>
                    <s.icon size={13} style={{ color: s.color }} strokeWidth={1.8} />
                  </div>
                  <span className="text-[13px] text-slate-200">{s.label}</span>
                </Link>
              ))}
              <Link href="/solutions" className="flex items-center gap-1.5 pl-3 pt-1 text-[12px] font-semibold text-green-400 hover:text-green-300">
                View all solutions →
              </Link>
            </div>
          </div>
          <div className="border-b border-[#17355f]">
            <Link href="/products" className="flex items-center justify-between w-full py-3 text-[14px] font-medium text-slate-200 hover:text-white">
              Products
              <ChevronDown size={14} className="text-slate-200 -rotate-90" />
            </Link>
            <div className="pb-3 space-y-1">
              {PRODUCTS_ITEMS.map(s => (
                <Link key={s.label} href={s.href}
                  className="flex items-center gap-3 py-2 pl-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: s.bg }}>
                    <s.icon size={13} style={{ color: s.color }} strokeWidth={1.8} />
                  </div>
                  <span className="text-[13px] text-slate-200">{s.label}</span>
                </Link>
              ))}
              <Link href="/products" className="flex items-center gap-1.5 pl-3 pt-1 text-[12px] font-semibold text-green-400 hover:text-green-300">
                View all products →
              </Link>
            </div>
          </div>
          <Link href="/case-studies" role="menuitem"
            className="block w-full text-left py-3 text-slate-200 text-[14px] border-b border-[#17355f] hover:text-white">
            Case Studies
          </Link>
          <Link href="/contact" role="menuitem"
            className="block w-full text-left py-3 text-slate-200 text-[14px] border-b border-[#17355f] hover:text-white">
            Contact
          </Link>
          <div className="pt-4 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-100">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] flex-shrink-0" />
              System: Operational
            </div>
            <Link href="/contact" className="btn-green text-sm py-2.5 px-5">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default function Navbar() {
  return (
    <Suspense fallback={null}>
      <NavbarInner />
    </Suspense>
  )
}
