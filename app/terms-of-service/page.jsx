'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-4xl mx-auto px-5 lg:px-8 py-24 sm:py-32">
        <h1 className="text-[32px] sm:text-[42px] font-black text-slate-900 mb-4">
          Terms of Service
        </h1>
        <p className="text-[14px] text-slate-500 mb-10">Last Updated: April 10, 2026</p>

        <div className="space-y-8 text-[15px] leading-relaxed text-slate-600">
          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing our website and utilizing the IT infrastructure, software, and cybersecurity services provided by InfraSpine Technologies ("the Company"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you are prohibited from using our services.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-3">2. Description of Services</h2>
            <p>
              InfraSpine provides enterprise-grade IT infrastructure design, deployment, managed IT support, custom ERP development, business automation workflows, and cybersecurity auditing. Specific deliverables, timelines, and SLAs for projects will be outlined in a separate Service Level Agreement (SLA) or Statement of Work (SOW).
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-3">3. Client Responsibilities</h2>
            <p>
              Clients are expected to provide timely access to necessary facilities, technical environments, and required documentation to allow InfraSpine engineers to perform their duties. Delays caused by the client may affect project timelines.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-3">4. Limitation of Liability</h2>
            <p>
              While we adhere to the highest cybersecurity and infrastructure standards (including ISO 27001 readiness), InfraSpine shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business interruptions arising out of the use or inability to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-3">5. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which InfraSpine operates, without regard to its conflict of law provisions.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
