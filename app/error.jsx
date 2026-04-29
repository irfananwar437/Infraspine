'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-20 px-5 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <AlertTriangle size={36} className="text-red-500" strokeWidth={1.5} />
          </div>
          
          <h1 className="text-[28px] sm:text-[36px] font-black text-slate-900 mb-4">
            Something went wrong!
          </h1>
          
          <p className="text-[15px] sm:text-[16px] text-slate-500 mb-10 max-w-lg mx-auto">
            We apologize for the inconvenience. An unexpected error occurred while trying to load this page. Our team has been notified.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => reset()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-[14px] font-bold transition-all hover:-translate-y-0.5"
              style={{ background: '#00C853', color: '#0A1628' }}
            >
              Try Again <RefreshCw size={16} />
            </button>
            <a 
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-[14px] font-bold border transition-all hover:bg-slate-50"
              style={{ borderColor: '#E2E8F0', color: '#0A1628' }}
            >
              Go to Home
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
