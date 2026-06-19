'use client'

import { m, useReducedMotion } from 'framer-motion'
import { Activity, ShieldAlert, ShieldCheck, Server } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function DashboardMockup() {
  const reduce = useReducedMotion()
  const [resolved, setResolved] = useState(false)

  // Trigger a visual "resolution" after component mounts
  useEffect(() => {
    if (reduce) {
      setResolved(true)
      return
    }
    const timer = setTimeout(() => setResolved(true), 3500)
    return () => clearTimeout(timer)
  }, [reduce])

  const chartHeights = [40, 65, 45, 80, 55, 90, 75, 100]

  return (
    <div className="relative w-full h-full min-h-[400px] overflow-hidden bg-slate-900 flex flex-col items-center justify-center p-6">
      {/* Deep blurry background shapes */}
      <div className="absolute top-[-10%] -left-10 w-[60%] h-[60%] rounded-full bg-emerald-500/20 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-10%] -right-10 w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[80px] pointer-events-none" />

      <div className="w-full max-w-sm flex flex-col gap-4 relative z-10">
        
        {/* Top Stat Card */}
        <m.div 
          className="bg-slate-800/80 backdrop-blur-md border border-slate-700/50 rounded-2xl p-4 shadow-2xl flex justify-between items-center"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <div>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">System Uptime</p>
            <div className="flex items-end gap-2">
              <m.span 
                className="text-2xl font-bold text-white leading-none"
                initial={reduce ? {} : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                99.99%
              </m.span>
              <span className="text-emerald-400 text-xs font-medium mb-0.5 flex items-center gap-1">
                <Activity size={12} /> Live
              </span>
            </div>
          </div>
          
          {/* Mini Bar Chart */}
          <div className="flex items-end gap-1 h-10">
            {chartHeights.map((h, i) => (
              <m.div
                key={i}
                className="w-1.5 rounded-t-sm bg-emerald-500/80"
                initial={reduce ? { height: `${h}%` } : { height: '0%' }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + (i * 0.05), ease: 'easeOut' }}
              />
            ))}
          </div>
        </m.div>

        {/* Threat Alert Card */}
        <m.div 
          className="bg-slate-800/80 backdrop-blur-md border border-slate-700/50 rounded-2xl p-4 shadow-2xl"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="flex items-start gap-3">
            <m.div 
              className="mt-1 flex-shrink-0"
              animate={resolved ? { color: '#10b981' } : { color: '#ef4444' }}
              transition={{ duration: 0.5 }}
            >
              {resolved ? <ShieldCheck size={20} /> : <ShieldAlert size={20} />}
            </m.div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <m.p 
                  className="text-sm font-semibold text-white"
                  animate={{ color: resolved ? '#fff' : '#fca5a5' }}
                >
                  {resolved ? 'Threat Neutralized' : 'Anomaly Detected'}
                </m.p>
                <span className="text-slate-500 text-[10px]">Just now</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                {resolved 
                  ? 'Automated policies isolated the affected node and restored normal operation.' 
                  : 'Unusual traffic pattern observed on Gateway-04. Initiating auto-isolation protocols...'}
              </p>
              
              {/* Progress bar */}
              <div className="mt-3 h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                <m.div 
                  className="h-full"
                  initial={{ width: '0%', backgroundColor: '#ef4444' }}
                  animate={resolved 
                    ? { width: '100%', backgroundColor: '#10b981' } 
                    : { width: ['0%', '65%'], backgroundColor: '#ef4444' }
                  }
                  transition={resolved 
                    ? { duration: 0.4, ease: 'easeOut' }
                    : { duration: 3, ease: 'easeInOut' }
                  }
                />
              </div>
            </div>
          </div>
        </m.div>

        {/* Nodes Status */}
        <m.div 
          className="flex gap-2"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex-1 bg-slate-800/80 backdrop-blur-md border border-slate-700/50 rounded-xl p-3 flex flex-col items-center justify-center gap-1 shadow-lg">
              <Server size={16} className="text-slate-400 mb-1" />
              <p className="text-white text-xs font-medium">Node 0{n}</p>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                <span className="text-slate-400 text-[10px]">Active</span>
              </div>
            </div>
          ))}
        </m.div>

      </div>
    </div>
  )
}
