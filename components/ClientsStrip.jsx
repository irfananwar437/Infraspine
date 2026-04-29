const PARTNERS = [
  'Microsoft', 'Cisco', 'Dell Technologies', 'HP Enterprise', 'Fortinet', 'Hikvision',
]

const INDUSTRIES = [
  'Enterprise IT', 'Financial Services', 'Logistics & Supply Chain', 'Manufacturing', 'Healthcare', 'Retail',
]

export default function ClientsStrip() {
  return (
    <section className="bg-white border-b border-slate-100" id="clients">
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">

          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] mb-8" style={{ color: '#94A3B8' }}>
            Trusted Technology Partners &amp; Vendors
          </p>

          {/* Partner names — typographic style */}
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 mb-10">
            {PARTNERS.map((name) => (
              <span
                key={name}
                className="text-[15px] font-black tracking-tight"
                style={{ color: '#CBD5E1' }}
              >
                {name}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px mb-8" style={{ background: '#F1F5F9' }} />

          {/* Industry tags */}
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] mb-5" style={{ color: '#94A3B8' }}>
            Industries We Serve
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {INDUSTRIES.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wide"
                style={{ background: '#EFF6FF', color: '#1D4ED8', border: '1px solid #BFDBFE' }}
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
