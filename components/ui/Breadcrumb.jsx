import Link from 'next/link'

/**
 * Breadcrumb — renders a semantic nav with schema markup.
 * items: Array<{ label: string, href?: string }>
 * bg: optional override for pages whose hero uses a non-default dark
 *     accent (e.g. the field-services category pages) — pass that same
 *     color so the breadcrumb matches it exactly instead of the default.
 */
export default function Breadcrumb({ items = [], bg }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: item.href ? `https://www.infraspine.com${item.href}` : undefined,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* pt clears the fixed Navbar (60px mobile/tablet nav, ~94px lg+ with the
          utility bar) — without it this breadcrumb renders directly under the
          navbar and is entirely hidden on every page that uses it.
          bg-navy-925 matches the dark hero section every page that uses this
          component renders directly underneath, via the shared Tailwind
          theme color (tailwind.config.js) rather than a hardcoded hex here —
          the white bar this used to be created a visible seam and made the
          gap above the hero look like dead space. */}
      <nav
        aria-label="Breadcrumb"
        className={`pt-[61px] lg:pt-[94px] pb-2.5 border-b border-white/10 ${bg ? '' : 'bg-navy-925'}`}
        style={bg ? { background: bg } : undefined}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-[12px]">
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && (
                  <span aria-hidden="true" className="text-slate-600">/</span>
                )}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-white" aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
