import {
  Server, Camera, Fingerprint, Zap,
  LayoutGrid, ShieldCheck, ArrowRight,
} from 'lucide-react'

const SERVICES = [
  {
    icon: Server,
    title: 'IT Infrastructure & Support',
    desc: 'Enterprise servers, cloud architecture, and managed networks built for 24/7 uptime.',
    iconColor: '#2563EB',
    iconBg: '#EFF6FF',
  },
  {
    icon: Camera,
    title: 'CCTV & Surveillance',
    desc: 'IP camera systems, NVR/DVR, remote live monitoring, and security control rooms.',
    iconColor: '#7C3AED',
    iconBg: '#F5F3FF',
  },
  {
    icon: Fingerprint,
    title: 'Biometric & Access Control',
    desc: 'Face recognition, fingerprint readers, and smart cards for secure entry and attendance.',
    iconColor: '#0891B2',
    iconBg: '#ECFEFF',
  },
  {
    icon: Zap,
    title: 'AI & Business Automation',
    desc: 'n8n workflows, WhatsApp bots, and AI agents that eliminate manual processes.',
    iconColor: '#D97706',
    iconBg: '#FFFBEB',
  },
  {
    icon: LayoutGrid,
    title: 'ERP Development',
    desc: 'Custom ERP for HR, payroll, finance, CRM, and operations — built for your business.',
    iconColor: '#16A34A',
    iconBg: '#F0FDF4',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity & Compliance',
    desc: 'Firewall hardening, endpoint protection, and security audits keeping you protected.',
    iconColor: '#DC2626',
    iconBg: '#FEF2F2',
  },
]

export default function FeatureCards() {
  return (
    <section className="py-24" style={{ background: '#F0F4F8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p
              className="text-[11px] font-bold uppercase tracking-[0.22em] mb-4"
              style={{ color: '#00C853' }}
            >
              Our Services
            </p>
            <h2
              className="text-[36px] sm:text-[44px] font-black leading-[1.06] tracking-tight"
              style={{ color: '#0A1628' }}
            >
              Every Layer of Your<br />Technology, Covered.
            </h2>
          </div>
          <p className="text-[15px] leading-[1.8] lg:max-w-xs" style={{ color: '#64748B' }}>
            From the camera on your wall to AI running your back office — one team manages it all.
          </p>
        </div>

        {/* Consistent card grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="group relative flex flex-col bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{
                border: '1px solid #E2E8F0',
                boxShadow: '0 1px 3px rgba(10,22,40,0.06), 0 4px 12px rgba(10,22,40,0.05)',
              }}
            >
              {/* Navy top bar → green on hover */}
              <div className="absolute top-0 inset-x-0 h-[3px]" style={{ background: '#0A1628' }} />
              <div className="absolute top-0 inset-x-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: '#00C853' }} />

              <div className="flex flex-col flex-1 p-6">
                {/* Icon + Title row */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: svc.iconBg }}
                  >
                    <svc.icon size={19} strokeWidth={1.8} style={{ color: svc.iconColor }} />
                  </div>
                  <h3
                    className="text-[15px] font-bold leading-snug flex-1 transition-colors duration-300 group-hover:text-[#00C853]"
                    style={{ color: '#0A1628' }}
                  >
                    {svc.title}
                  </h3>
                </div>

                {/* Desc */}
                <p
                  className="text-[12.5px] leading-[1.75] flex-1"
                  style={{ color: '#64748B' }}
                >
                  {svc.desc}
                </p>

                {/* Footer */}
                <div
                  className="flex items-center justify-between mt-5 pt-4"
                  style={{ borderTop: '1px solid #F1F5F9' }}
                >
                  <span
                    className="text-[12px] font-semibold transition-colors duration-300 group-hover:text-[#00C853]"
                    style={{ color: '#2563EB' }}
                  >
                    Learn more
                  </span>
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#00C853] group-hover:border-[#00C853]"
                    style={{ border: '1.5px solid #CBD5E1' }}
                  >
                    <ArrowRight
                      size={11}
                      className="transition-colors duration-300 group-hover:text-white"
                      style={{ color: '#CBD5E1' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer strip */}
        <div
          className="mt-10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid #E2E8F0' }}
        >
          <div className="flex items-center gap-2.5">
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: '#00C853', boxShadow: '0 0 0 3px rgba(0,200,83,0.15)' }}
            />
            <span className="text-[13px]" style={{ color: '#94A3B8' }}>
              Currently accepting new enterprise clients
            </span>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-[13px] font-semibold px-5 py-2.5 rounded-xl transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{
              background: '#0A1628',
              color: '#fff',
              boxShadow: '0 2px 8px rgba(10,22,40,0.18)',
            }}
          >
            Book a free consultation
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  )
}
