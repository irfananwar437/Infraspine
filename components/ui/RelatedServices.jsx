import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getRelatedServices } from '@/data/relatedServices'

/**
 * Internal-linking block — renders links to sibling pages within the same
 * service category (e.g. on a Cybersecurity sub-page, links to the other
 * Cybersecurity sub-pages). currentHref must match an href in
 * data/relatedServices.js exactly.
 */
export default function RelatedServices({ currentHref, accent = '#2563EB' }) {
  const related = getRelatedServices(currentHref)
  if (!related || related.items.length === 0) return null

  return (
    <section className="py-12 sm:py-16 border-t" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] mb-2" style={{ color: accent }}>
            Related Services
          </p>
          <h2 className="text-[22px] sm:text-[28px] font-black" style={{ color: '#0A1628' }}>
            More {related.category.label} Services
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {related.items.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between gap-2 px-5 py-4 rounded-xl bg-white border transition-all hover:-translate-y-0.5 hover:shadow-md"
              style={{ borderColor: '#E2E8F0' }}
            >
              <span className="text-[13.5px] font-bold" style={{ color: '#0A1628' }}>{item.label}</span>
              <ArrowRight size={15} className="flex-shrink-0 opacity-40 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" style={{ color: accent }} />
            </Link>
          ))}
        </div>
        <Link
          href={related.category.href}
          className="inline-flex items-center gap-1.5 mt-6 text-[13px] font-bold transition-colors hover:opacity-75"
          style={{ color: accent }}
        >
          View all {related.category.label} services <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  )
}
