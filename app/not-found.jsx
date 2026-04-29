'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight, AlertTriangle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-20 px-5 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <AlertTriangle size={36} className="text-red-500" strokeWidth={1.5} />
          </div>
          
          <h1 className="text-[80px] sm:text-[120px] font-black leading-none tracking-tight mb-2 text-slate-100">
            404
          </h1>
          
          <h2 className="text-[28px] sm:text-[36px] font-black text-slate-900 mb-4">
            Page Not Found
          </h2>
          
          <p className="text-[15px] sm:text-[16px] text-slate-500 mb-10 max-w-lg mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:-translate-y-0.5"
              style={{ background: '#00C853', color: '#0A1628' }}
            >
              Back to Home <ArrowRight size={16} />
            </a>
            <a 
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-[14px] font-bold border transition-all hover:bg-slate-50"
              style={{ borderColor: '#E2E8F0', color: '#0A1628' }}
            >
              Explore Services
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
