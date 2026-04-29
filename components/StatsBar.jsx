const STATS = [
  { value: '10+',   label: 'Enterprise Clients' },
  { value: '99.9%', label: 'Uptime SLA'         },
  { value: '24/7',  label: 'Expert Support'     },
  { value: '10+',   label: 'Years Experience'   },
]

export default function StatsBar() {
  return (
    <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {STATS.map(({ value, label }, i) => (
            <div
              key={label}
              className="flex flex-col items-center py-6 sm:py-8 px-3 sm:px-4"
              style={{
                borderRight: i % 2 === 0 ? '1px solid #E2E8F0' : 'none',
                borderBottom: i < 2 ? '1px solid #E2E8F0' : 'none',
              }}
            >
              <span
                className="text-[28px] sm:text-[32px] font-black leading-none mb-1"
                style={{ color: '#00C853' }}
              >
                {value}
              </span>
              <span
                className="text-[12px] font-medium tracking-wide text-center"
                style={{ color: '#64748B' }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
