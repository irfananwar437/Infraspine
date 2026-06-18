'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/**
 * PageHero — reusable dark hero for all interior pages.
 *
 * Props:
 *   tag       string   — small uppercase label above heading
 *   h1        string   — main heading (can include <span> via dangerouslySetInnerHTML on parent)
 *   highlight string   — portion of h1 rendered in green
 *   desc      string   — paragraph below heading
 *   breadcrumbs Array<{ label, href? }> — breadcrumb trail
 *   cta       { label, href }  — primary CTA button
 *   ctaSecondary { label, href } — optional secondary button
 *   children  ReactNode — optional right-side visual slot
 */
export default function PageHero({
  tag,
  h1,
  highlight,
  desc,
  breadcrumbs,
  cta,
  ctaSecondary,
  children,
}) {
  return (
    <section
      className="relative overflow-hidden pt-[70px]"
      style={{ background: '#071a37' }}
    >
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',
          backgroundSize: '52px 52px',
        }}
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #00C853, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-16 sm:py-24">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol
              className="flex flex-wrap items-center gap-1.5 text-[12px]"
              style={{ color: '#64748B' }}
            >
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  {i > 0 && (
                    <span aria-hidden="true" style={{ color: '#334155' }}>/</span>
                  )}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-white"
                      style={{ color: '#64748B' }}
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span style={{ color: '#94A3B8' }} aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className={`flex ${children ? 'lg:flex-row flex-col gap-12 lg:items-center' : ''}`}>
          {/* Left: text */}
          <div className={children ? 'flex-1 max-w-2xl' : 'max-w-3xl'}>
            {tag && (
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="h-px w-6" style={{ background: '#00C853' }} />
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.22em]"
                  style={{ color: '#00C853' }}
                >
                  {tag}
                </span>
              </div>
            )}

            <h1
              className="text-[clamp(1.9rem,4.5vw,3.5rem)] font-black leading-[1.06] tracking-tight text-white mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {h1}
              {highlight && (
                <>
                  {' '}
                  <span style={{ color: '#00C853' }}>{highlight}</span>
                </>
              )}
            </h1>

            {desc && (
              <p
                className="text-[15px] sm:text-[17px] leading-relaxed mb-8 max-w-2xl"
                style={{ color: '#94A3B8' }}
              >
                {desc}
              </p>
            )}

            {(cta || ctaSecondary) && (
              <div className="flex flex-wrap gap-3">
                {cta && (
                  <Link
                    href={cta.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90 hover:-translate-y-0.5"
                    style={{ background: '#00C853', color: '#0A1628' }}
                  >
                    {cta.label} <ArrowRight size={15} />
                  </Link>
                )}
                {ctaSecondary && (
                  <Link
                    href={ctaSecondary.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                    style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}
                  >
                    {ctaSecondary.label}
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Right: optional visual */}
          {children && (
            <div className="lg:w-[420px] flex-shrink-0">{children}</div>
          )}
        </div>
      </div>

      {/* Bottom border glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #17355f 30%, #17355f 70%, transparent)' }}
        aria-hidden="true"
      />
    </section>
  )
}
