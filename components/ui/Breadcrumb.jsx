import Link from 'next/link'

/**
 * Breadcrumb — renders a semantic nav with schema markup.
 * items: Array<{ label: string, href?: string }>
 */
export default function Breadcrumb({ items = [] }) {
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
          navbar and is entirely hidden on every page that uses it. */}
      <nav aria-label="Breadcrumb" className="pt-[61px] lg:pt-[94px] pb-3 border-b" style={{ borderColor: '#E2E8F0', background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-[12px]">
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && (
                  <span aria-hidden="true" style={{ color: '#CBD5E1' }}>/</span>
                )}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-blue-600"
                    style={{ color: '#64748B' }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span style={{ color: '#0A1628' }} className="font-semibold" aria-current="page">
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
