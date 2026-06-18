'use client'
import Link from 'next/link'
import { Mail, Phone, Linkedin, Twitter, MessageCircle, MapPin } from 'lucide-react'

const FOOTER_COLS = {
  'IT Services': [
    { label: 'Managed IT Services',    href: '/services/managed-it-services'    },
    { label: 'Cloud Solutions',        href: '/services/cloud-solutions'         },
    { label: 'Cyber Security',         href: '/services/cyber-security'          },
    { label: 'Network Infrastructure', href: '/services/network-infrastructure'  },
    { label: 'Software Development',   href: '/services/software-development'    },
    { label: 'AI Automation',          href: '/services/ai-automation'           },
  ],
  'More Services': [
    { label: 'BPO Services',           href: '/services/bpo-services'            },
    { label: 'IT Trainings',           href: '/services/it-trainings'            },
    { label: 'IT Consultancy',         href: '/services/it-consultancy'          },
    { label: 'Data Backup & Recovery', href: '/services/data-backup-recovery'    },
    { label: 'Infraspine AI',          href: '/infraspine-ai'                    },
    { label: 'Solutions Overview',     href: '/solutions'                        },
  ],
  Company: [
    { label: 'About Infraspine',       href: '/about-us'                         },
    { label: 'Our Organization',       href: '/our-organization'                 },
    { label: 'Projects & Results',     href: '/projects'                         },
    { label: 'BPO Services',           href: '/services/bpo-services'            },
    { label: 'IT Training Programs',   href: '/services/it-trainings'            },
    { label: 'Contact Us',             href: '/contact-us'                       },
  ],
}

const SOCIALS = [
  { icon: Twitter,   label: 'Follow on X (Twitter)', href: 'https://twitter.com/infraspine'                   },
  { icon: Linkedin,  label: 'Connect on LinkedIn',   href: 'https://www.linkedin.com/company/infraspine'      },
  { icon: Mail,      label: 'Email us',              href: 'mailto:hello@infraspine.com'                      },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#17355f] bg-[#071a37]" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 pb-8 sm:pb-10 pt-12 sm:pt-16 lg:px-8">

        {/* Grid */}
        <div className="mb-10 sm:mb-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-10">

          {/* Brand column */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-2.5" aria-label="Infraspine homepage">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <circle cx="18" cy="8" r="4" fill="#00C853" />
                <circle cx="8" cy="26" r="4" fill="#2563EB" />
                <circle cx="28" cy="26" r="4" fill="#2563EB" />
                <circle cx="18" cy="20" r="3" fill="#fff" opacity="0.9" />
                <line x1="18" y1="12" x2="18" y2="17" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="10" y1="24" x2="16" y2="21" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="26" y1="24" x2="20" y2="21" stroke="#94a3b8" strokeWidth="1.5" />
              </svg>
              <span className="font-display text-[18px] font-black tracking-[0.15em] text-white">INFRASPINE</span>
            </Link>

            <p className="max-w-[240px] text-[13px] italic leading-relaxed text-slate-300">
              &ldquo;Your Technology. Our Responsibility.&rdquo;
            </p>

            <p className="max-w-[260px] text-[12.5px] leading-relaxed text-slate-400">
              Global IT services, AI automation, cloud infrastructure, cybersecurity, software development, BPO, and professional IT training — all under one accountable partner.
            </p>

            <div className="space-y-2.5">
              <a href="tel:+923001234567" className="flex items-center gap-2.5 text-[13px] text-slate-300 transition-colors hover:text-[#00C853]">
                <Phone size={13} className="flex-shrink-0 text-[#00C853]" aria-hidden="true" />
                +92 300 123 4567
              </a>
              <a href="mailto:hello@infraspine.com" className="flex items-center gap-2.5 text-[13px] text-slate-300 transition-colors hover:text-[#00C853]">
                <Mail size={13} className="flex-shrink-0 text-[#00C853]" aria-hidden="true" />
                hello@infraspine.com
              </a>
              <div className="flex items-start gap-2.5 text-[13px] text-slate-300">
                <MapPin size={13} className="flex-shrink-0 text-[#2563EB] mt-0.5" aria-hidden="true" />
                <span>Karachi, Pakistan &nbsp;·&nbsp; Serving Globally</span>
              </div>
            </div>

            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-[12.5px] font-semibold text-white transition-all hover:opacity-90"
              style={{ background: '#25D366', boxShadow: '0 2px 12px rgba(37,211,102,0.25)' }}
            >
              <MessageCircle size={13} aria-hidden="true" />
              Chat on WhatsApp
            </a>

            <div className="flex gap-2.5 pt-1">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#17355f] bg-white/5 text-slate-300 transition-all hover:border-[#00C853]/30 hover:text-[#00C853]"
                >
                  <Icon size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_COLS).map(([category, items]) => (
            <div key={category}>
              <div className="mb-5 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-200">
                {category}
              </div>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[12.5px] text-slate-400 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mb-6 h-px" style={{ background: '#17355f' }} />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-[11px] text-slate-400">
            &copy; {new Date().getFullYear()} Infraspine Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-5 text-[11px] text-slate-400">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="transition-colors hover:text-white">
              Sitemap
            </Link>
            <div className="flex items-center gap-1.5" role="status" aria-label="System status: operational">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#00C853] opacity-60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-[#00C853]" />
              </span>
              All systems operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
