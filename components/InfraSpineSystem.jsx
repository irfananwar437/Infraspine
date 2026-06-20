import { Layers, GitBranch, BarChart3, Plug, Users, DollarSign, Package, Activity, ChevronRight } from 'lucide-react'

const FEATURES = [
  { icon: Layers,    title: 'Centralized Control Plane',    desc: 'Manage servers, ERP modules, automations, and users from one interface across every location.' },
  { icon: GitBranch, title: 'Visual Workflow Builder',      desc: 'Build business automation pipelines without code — approvals, notifications, triggers.' },
  { icon: BarChart3, title: 'Live Business Intelligence',   desc: 'Real-time KPIs, operational metrics, and custom reports for every department.' },
  { icon: Plug,      title: '200+ Integrations',            desc: 'WhatsApp, Slack, payment gateways, accounting tools — pre-built connectors.' },
]

const MODULES = [
  { icon: Users,      label: 'HR & Payroll',    color: '#2563EB', bg: '#EFF6FF', active: true  },
  { icon: DollarSign, label: 'Finance',          color: '#16A34A', bg: '#F0FDF4', active: false },
  { icon: Package,    label: 'CRM & Sales',      color: '#7C3AED', bg: '#F5F3FF', active: false },
  { icon: Activity,   label: 'Monitoring',       color: '#0891B2', bg: '#ECFEFF', active: false },
]

export default function InfraSpineSystem() {
  return (
    <section className="py-8 sm:py-12 lg:py-14" style={{ background: '#FFFFFF' }} id="platform">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="text-center mb-5 sm:mb-8">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.16em] mb-4"
            style={{ color: '#00C853' }}
          >
            Signature Platform
          </p>
          <h2 className="text-[26px] sm:text-[38px] lg:text-[48px] font-black leading-tight mb-5" style={{ color: '#0A1628' }}>
            The{' '}
            <span style={{ color: '#00C853' }}>InfraSpine System</span>
          </h2>
          <p className="text-[16px] max-w-2xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
            One unified platform combining ERP, infrastructure control, automation, and real-time monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-6 sm:gap-8 lg:gap-12 items-start">

          {/* Dashboard mockup — dark navy product screenshot, kept as-is */}
          <div className="bg-navy-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">

            {/* Chrome bar */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-navy-950">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60"/>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60"/>
                  <div className="w-3 h-3 rounded-full bg-green-500/60"/>
                </div>
                <span className="text-[11px] font-mono text-slate-500 ml-2">InfraSpine OS — v4.1.0</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"/>LIVE
              </div>
            </div>

            <div className="flex" style={{ minHeight: '360px' }}>
              {/* Sidebar */}
              <div className="w-[52px] border-r border-white/5 flex flex-col items-center gap-4 py-5 bg-navy-950">
                {[Layers, BarChart3, GitBranch, Plug, Activity, Users].map((Icon, i) => (
                  <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer ${i === 0 ? 'text-slate-300' : 'text-slate-600 hover:text-slate-400'}`} style={i === 0 ? { background: 'rgba(0,200,83,0.15)' } : {}}>
                    <Icon size={15}/>
                  </div>
                ))}
              </div>

              {/* Main */}
              <div className="flex-1 p-5 space-y-4">

                {/* Module tabs */}
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {MODULES.map(m => (
                    <div
                      key={m.label}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl border text-[11px] font-mono whitespace-nowrap cursor-pointer transition-all"
                      style={m.active
                        ? { background: 'rgba(0,200,83,0.15)', borderColor: 'rgba(0,200,83,0.3)', color: '#00C853' }
                        : { borderColor: 'rgba(255,255,255,0.08)', color: '#64748B' }
                      }
                    >
                      <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: `${m.color}22` }}>
                        <m.icon size={11} style={{ color: m.color }}/>
                      </div>
                      {m.label}
                    </div>
                  ))}
                </div>

                {/* KPI row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Employees', val: '248',  delta: '+4 this month', c: '#3B82F6', bg: 'rgba(59,130,246,0.1)'   },
                    { label: 'Payroll',   val: '$184k', delta: 'On-time',      c: '#22C55E', bg: 'rgba(34,197,94,0.1)'    },
                    { label: 'Open Req.', val: '12',   delta: '-3 vs last',    c: '#A78BFA', bg: 'rgba(167,139,250,0.1)'  },
                  ].map(k => (
                    <div key={k.label} className="rounded-xl p-3 border border-white/5" style={{ background: k.bg }}>
                      <div className="text-[10px] font-mono text-slate-500 mb-1">{k.label}</div>
                      <div className="text-[20px] font-black font-mono" style={{ color: k.c }}>{k.val}</div>
                      <div className="text-[10px] text-slate-600 mt-0.5">{k.delta}</div>
                    </div>
                  ))}
                </div>

                {/* Event feed */}
                <div className="bg-white/[0.04] rounded-xl p-4 border border-white/5">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-3">Automation Events</div>
                  <div className="space-y-2">
                    {[
                      { evt: 'Payroll processed — 248 employees', t: '2m ago',  c: '#22C55E' },
                      { evt: 'Leave auto-approved: J. Smith',     t: '8m ago',  c: '#3B82F6' },
                      { evt: 'WhatsApp alert: CPU spike 85%',     t: '14m ago', c: '#F59E0B' },
                      { evt: 'Monthly P&L report generated',      t: '1h ago',  c: '#22D3EE' },
                    ].map((r, i) => (
                      <div key={i} className="flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: r.c }}/>
                          <span className="font-mono text-slate-400">{r.evt}</span>
                        </div>
                        <span className="font-mono text-slate-600 ml-2 flex-shrink-0">{r.t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Health bars */}
                <div className="space-y-2.5">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Infrastructure Health</div>
                  {[
                    { label: 'CPU Avg',  val: 38, c: '#3B82F6' },
                    { label: 'RAM Util', val: 62, c: '#22D3EE' },
                    { label: 'Disk I/O', val: 21, c: '#A78BFA' },
                    { label: 'Net I/O',  val: 74, c: '#22C55E' },
                  ].map(b => (
                    <div key={b.label} className="flex items-center gap-3">
                      <span className="text-[10px] font-mono text-slate-500 w-16">{b.label}</span>
                      <div className="flex-1 h-[3px] bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${b.val}%`, background: b.c }}/>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 w-8 text-right">{b.val}%</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Feature list */}
          <div className="space-y-4">
            {FEATURES.map(f => (
              <div
                key={f.title}
                className="group flex gap-4 p-5 rounded-2xl border border-[#E2E8F0] hover:border-[#00C853] transition-all cursor-pointer bg-white"
                style={{ boxShadow: '0 2px 16px rgba(10,22,40,0.08)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: '#EBF5FF' }}
                >
                  <f.icon size={20} style={{ color: '#0A1628' }}/>
                </div>
                <div className="flex-1">
                  <div className="text-[14px] font-bold mb-1" style={{ color: '#0A1628' }}>{f.title}</div>
                  <div className="text-[13px] leading-relaxed" style={{ color: '#64748B' }}>{f.desc}</div>
                </div>
                <ChevronRight
                  size={16}
                  className="self-center flex-shrink-0 text-slate-300 group-hover:text-[#00C853] group-hover:translate-x-1 transition-all"
                />
              </div>
            ))}
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 mt-2 text-[13px] font-semibold transition-colors group"
              style={{ color: '#00C853' }}
            >
              Request a Platform Demo
              <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform"/>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
