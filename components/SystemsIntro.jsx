import { Server, LayoutGrid, Zap, BarChart3 } from 'lucide-react'

const CARDS = [
  {
    icon: Server,
    title: 'Infrastructure Systems',
    desc: 'Servers, networks, and security architecture built for scale.',
  },
  {
    icon: LayoutGrid,
    title: 'ERP Development',
    desc: 'Custom HR, Finance, CRM & Operations systems.',
  },
  {
    icon: Zap,
    title: 'Automation & AI',
    desc: 'WhatsApp automation, workflows, and AI agents.',
  },
  {
    icon: BarChart3,
    title: 'Monitoring & Control',
    desc: 'Real-time dashboards, alerts, and analytics.',
  },
]

export default function SystemsIntro() {
  return (
    <section className="py-20" style={{ background: '#F0F4F8' }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Headline */}
        <div className="text-center mb-14">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.16em] mb-4"
            style={{ color: '#00C853' }}
          >
            Our Approach
          </p>
          <h2
            className="text-[32px] sm:text-[40px] lg:text-[46px] font-black leading-[1.12] tracking-tight mb-5"
            style={{ color: '#0A1628' }}
          >
            We Don&apos;t Offer Services.{' '}
            <span style={{ color: '#00C853' }}>We Build Systems.</span>
          </h2>
          <p className="text-[15px] max-w-xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
            Complete infrastructure and ERP solutions designed for the most complex business environments.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="group text-center flex flex-col items-center p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '16px',
                boxShadow: '0 2px 16px rgba(10,22,40,0.08)',
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: '#EBF5FF' }}
              >
                <card.icon size={26} style={{ color: '#0A1628' }} strokeWidth={1.6} />
              </div>
              <h3
                className="text-[15px] font-bold mb-2 leading-tight transition-colors duration-200 group-hover:text-[#00C853]"
                style={{ color: '#0A1628' }}
              >
                {card.title}
              </h3>
              <p className="text-[13px] leading-relaxed" style={{ color: '#64748B' }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
