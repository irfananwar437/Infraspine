import { ShieldCheck, Cpu, Headset } from 'lucide-react'

const CARDS = [
  {
    icon: ShieldCheck,
    iconColor: '#059669',
    iconBg: '#D1FAE5',
    title: 'Proven Expertise',
    desc: '10+ Years of Industry Experience',
  },
  {
    icon: Cpu,
    iconColor: '#2563EB',
    iconBg: '#DBEAFE',
    title: 'Advanced Solutions',
    desc: 'Innovative & Scalable Technologies',
  },
  {
    icon: Headset,
    iconColor: '#7C3AED',
    iconBg: '#EDE9FE',
    title: 'Reliable Support',
    desc: '24/7 Monitoring & Assistance',
  },
]

export default function HeroCards() {
  return (
    <div
      className="relative z-[35] -mt-3 px-3 min-[400px]:px-4 sm:px-6 sm:-mt-4 md:mt-0 md:pointer-events-none md:absolute md:inset-x-0 md:bottom-0 md:translate-y-1/2 lg:px-8"
      aria-label="Highlights"
    >
      <div className="pointer-events-auto mx-auto w-full max-w-[900px]">
        <div className="grid grid-cols-3 gap-1.5 min-[400px]:gap-2 sm:gap-3 md:gap-4">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex min-w-0 flex-col items-center text-center bg-white rounded-lg px-1.5 py-3 min-[400px]:px-2 min-[400px]:py-4 sm:rounded-xl sm:px-4 sm:py-5 transition-transform duration-300 hover:-translate-y-1 shadow-[0_6px_24px_-6px_rgba(0,0,0,0.12)] border border-slate-100"
            >
              <div
                className="mb-1.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg min-[400px]:mb-2 min-[400px]:h-10 min-[400px]:w-10 sm:mb-3 sm:h-11 sm:w-11 sm:rounded-xl"
                style={{ backgroundColor: card.iconBg }}
              >
                <card.icon
                  className="h-[18px] w-[18px] min-[400px]:h-5 min-[400px]:w-5 sm:h-[22px] sm:w-[22px]"
                  strokeWidth={2}
                  style={{ color: card.iconColor }}
                />
              </div>
              <h3 className="text-[11px] font-bold leading-tight tracking-tight text-slate-900 min-[400px]:text-[12px] sm:mb-1 sm:text-[15px] sm:leading-snug">
                {card.title}
              </h3>
              <p className="mt-0.5 text-[10px] font-medium leading-tight text-slate-600 min-[400px]:text-[11px] sm:mt-0 sm:text-[12px] sm:leading-snug">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
