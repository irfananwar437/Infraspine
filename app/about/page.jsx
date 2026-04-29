'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import { ShieldCheck, Server, Target, Zap, Check, ArrowRight, Award, History, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#0A1628' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        
        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>About Us</span>
            </div>
            <h1 className="text-[30px] sm:text-[46px] lg:text-[56px] font-black leading-[1.06] tracking-tight text-white mb-5">
              Architecting the <br />
              <span style={{ color: '#00C853' }}>Enterprise Backbone</span>
            </h1>
            <p className="text-[15px] sm:text-[17px] leading-relaxed mb-8 max-w-2xl" style={{ color: '#94A3B8' }}>
              InfraSpine is a specialized technology firm dedicated to building, securing, and automating the core IT infrastructure for growing enterprises. We don't just supply technology—we build the spine your business runs on.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Mission & Vision ── */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Mission */}
            <div className="p-8 rounded-2xl bg-white border" style={{ borderColor: '#E2E8F0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: '#EFF6FF' }}>
                <Target size={24} style={{ color: '#2563EB' }} strokeWidth={1.5} />
              </div>
              <h2 className="text-[24px] font-black mb-3" style={{ color: '#0A1628' }}>Our Mission</h2>
              <p className="text-[14px] leading-relaxed text-slate-500">
                To simplify and secure complex IT environments for businesses. We aim to be the single, accountable partner that organizations rely on for their physical infrastructure, software automation, and cybersecurity defense.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-2xl bg-white border" style={{ borderColor: '#E2E8F0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: '#F0FDF4' }}>
                <Zap size={24} style={{ color: '#00C853' }} strokeWidth={1.5} />
              </div>
              <h2 className="text-[24px] font-black mb-3" style={{ color: '#0A1628' }}>Our Vision</h2>
              <p className="text-[14px] leading-relaxed text-slate-500">
                To build zero-friction enterprise environments where IT operations are invisible, highly secure, and intrinsically tied to accelerating business growth rather than just maintaining the status quo.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Why "InfraSpine"? ── */}
      <section className="py-16 sm:py-24 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-6" style={{ background: '#2563EB' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#2563EB' }}>The Philosophy</span>
              </div>
              <h2 className="text-[28px] sm:text-[36px] font-black mb-5 leading-tight" style={{ color: '#0A1628' }}>
                Why we call it the <br/><span style={{ color: '#2563EB' }}>InfraSpine</span>.
              </h2>
              <div className="space-y-4 text-[14.5px] leading-relaxed text-slate-600">
                <p>
                  In the human body, the spine is the central support structure. It connects the brain to every nerve, supports the framework of the body, and enables movement. If the spine is weak, the entire system fails.
                </p>
                <p>
                  We view Enterprise IT the exact same way.
                </p>
                <p>
                  Your servers, network, security protocols, and ERP systems are the central nervous system of your business. That is your <strong>InfraSpine</strong>. Our job is to ensure that this spine is resilient, scalable, and impenetrable.
                </p>
              </div>
              
              <ul className="mt-8 space-y-3">
                {['Single point of accountability', 'Proactive 24/7 monitoring', 'Scalable from day one'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[13.5px] font-semibold text-slate-700">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center bg-blue-50">
                      <Check size={12} className="text-blue-600" strokeWidth={3} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Visual representation */}
            <div className="relative h-[400px] rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#E2E8F0 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center relative z-20">
                  <Server size={28} className="text-slate-800" />
                </div>
                <div className="w-1 h-12 bg-blue-500 rounded-full" />
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-blue-200 flex items-center justify-center relative z-20">
                  <ShieldCheck size={28} className="text-blue-600" />
                </div>
                <div className="w-1 h-12 bg-green-500 rounded-full" />
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-green-200 flex items-center justify-center relative z-20">
                  <Zap size={28} className="text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats/Numbers ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '10+', label: 'Years Experience', icon: History, color: '#00C853' },
              { value: '50+', label: 'Enterprise Clients', icon: Users, color: '#2563EB' },
              { value: '99.9%', label: 'Uptime Maintained', icon: Server, color: '#7C3AED' },
              { value: '15+', label: 'Tech Certifications', icon: Award, color: '#EA580C' },
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl border text-center transition-transform hover:-translate-y-1" style={{ borderColor: '#E2E8F0', background: '#F8FAFC' }}>
                <stat.icon size={24} className="mx-auto mb-4" style={{ color: stat.color }} strokeWidth={1.5} />
                <div className="text-[32px] font-black mb-1" style={{ color: '#0A1628' }}>{stat.value}</div>
                <div className="text-[12px] font-semibold uppercase tracking-wider text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications & Partners ── */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-6" style={{ background: '#00C853' }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Technology Partners</span>
            <div className="h-px w-6" style={{ background: '#00C853' }} />
          </div>
          <h2 className="text-[24px] sm:text-[32px] font-black mb-10" style={{ color: '#0A1628' }}>
            Certified to Deploy the Best
          </h2>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Cisco', color: '#049FD9' },
              { name: 'Microsoft', color: '#00A4EF' },
              { name: 'AWS', color: '#FF9900' },
              { name: 'Fortinet', color: '#EE3124' },
              { name: 'VMware', color: '#607078' },
              { name: 'CrowdStrike', color: '#E3001B' },
              { name: 'Hikvision', color: '#CC0000' },
              { name: 'n8n', color: '#EA4B71' },
              { name: 'ZKTeco', color: '#003087' },
              { name: 'Dell', color: '#007DB8' },
              { name: 'Azure', color: '#0089D6' },
              { name: 'Suprema', color: '#00529B' },
            ].map((p, i) => (
              <div key={i} className="py-4 px-2 rounded-xl border flex items-center justify-center bg-white transition-all hover:shadow-md" style={{ borderColor: '#E2E8F0' }}>
                <span className="text-[13px] font-black tracking-tight" style={{ color: p.color }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-[28px] sm:text-[36px] font-black mb-4 text-slate-900">Ready to fortify your business?</h2>
          <p className="text-[15px] text-slate-500 mb-8 max-w-xl mx-auto">
            Book a free, no-obligation consultation with our infrastructure architects to discuss your IT requirements.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:-translate-y-0.5" style={{ background: '#00C853', color: '#0A1628' }}>
            Book Consultation <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
