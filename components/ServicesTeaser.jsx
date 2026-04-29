import { Server, Camera, Fingerprint, Zap, ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    icon: Server,
    number: '01',
    title: 'IT Infrastructure & Support',
    desc: 'Server setup, network architecture, firewall, VPN, and ongoing managed IT support for your entire business.',
    features: ['Server & cloud management', 'Network & VPN setup', 'Firewall & cybersecurity', 'Helpdesk & SLA support'],
  },
  {
    icon: Camera,
    number: '02',
    title: 'CCTV & Physical Security',
    desc: 'Professional IP camera systems, NVR/DVR, remote viewing, and centralized security monitoring.',
    features: ['IP & HD camera systems', 'NVR/DVR installation', 'Remote mobile viewing', 'Security control rooms'],
  },
  {
    icon: Fingerprint,
    number: '03',
    title: 'Biometric & Access Control',
    desc: 'Fingerprint, face recognition, and smart card systems for secure access management across all sites.',
    features: ['Fingerprint & face ID devices', 'Door access control', 'Attendance management', 'Multi-site integration'],
  },
  {
    icon: Zap,
    number: '04',
    title: 'AI Integration & Automation',
    desc: 'n8n-powered workflows, WhatsApp automation, AI bots, and end-to-end business process automation.',
    features: ['n8n workflow automation', 'WhatsApp bot integration', 'AI agent deployment', 'ERP & API integrations'],
  },
]

export default function ServicesTeaser() {
  return (
    <section className="py-12 sm:py-16 lg:py-24" style={{ background: '#F8FAFC' }} id="services">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.16em] mb-4"
            style={{ color: '#00C853' }}
          >
            Core Services
          </p>
          <h2
            className="text-[32px] sm:text-[40px] lg:text-[46px] font-black leading-tight mb-4"
            style={{ color: '#0A1628' }}
          >
            Everything Your Business Needs,{' '}
            <span style={{ color: '#00C853' }}>Under One Roof</span>
          </h2>
          <p className="text-[15px] max-w-xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
            From physical security cameras to AI-powered automation — we design, install, and manage it all.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="group flex flex-col rounded-2xl p-5 sm:p-7 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '16px',
                boxShadow: '0 2px 16px rgba(10,22,40,0.08)',
              }}
            >
              {/* Number + Icon row */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: '#EBF5FF' }}
                >
                  <svc.icon size={22} style={{ color: '#0A1628' }} strokeWidth={1.8} />
                </div>
                <span
                  className="text-[13px] font-black tabular-nums"
                  style={{ color: '#00C853' }}
                >
                  {svc.number}
                </span>
              </div>

              <h3
                className="text-[15px] font-bold mb-2.5 leading-tight"
                style={{ color: '#0A1628' }}
              >
                {svc.title}
              </h3>
              <p
                className="text-[12.5px] leading-relaxed mb-5 flex-1"
                style={{ color: '#64748B' }}
              >
                {svc.desc}
              </p>

              <ul className="space-y-2 mb-5">
                {svc.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-[12px]" style={{ color: '#64748B' }}>
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: '#00C853' }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Arrow link */}
              <div
                className="pt-4 flex items-center justify-between"
                style={{ borderTop: '1px solid #E2E8F0' }}
              >
                <span className="text-[12px] font-medium" style={{ color: '#64748B' }}>
                  Learn more
                </span>
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1"
                  style={{ border: '1.5px solid #00C853' }}
                >
                  <ArrowRight size={13} style={{ color: '#00C853' }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="/contact" className="btn-green inline-flex">
            Get a Free Consultation
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  )
}
