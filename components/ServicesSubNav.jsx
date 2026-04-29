'use client'

export default function ServicesSubNav({ services, active, onSelect }) {
  const handleClick = (id) => {
    onSelect(id)
    setTimeout(() => {
      document.getElementById('service-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  return (
    <div
      className="sticky z-40 border-b"
      style={{ top: '70px', background: '#0A1628', borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex overflow-x-auto scrollbar-hide gap-0">
          {services.map(s => {
            const isActive = active === s.id
            return (
              <button
                key={s.id}
                onClick={() => handleClick(s.id)}
                className="flex items-center gap-2 px-4 py-3.5 text-[13px] font-semibold flex-shrink-0 transition-all duration-200 relative whitespace-nowrap"
                style={{
                  color: isActive ? s.color : 'rgba(255,255,255,0.5)',
                  borderBottom: isActive ? `2px solid ${s.color}` : '2px solid transparent',
                  marginBottom: '-1px',
                }}
              >
                <span
                  className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 transition-all duration-200"
                  style={{
                    background: isActive ? s.bg : 'rgba(255,255,255,0.06)',
                  }}
                >
                  <s.icon size={12} style={{ color: isActive ? s.color : 'rgba(255,255,255,0.4)' }} strokeWidth={2} />
                </span>
                {s.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
