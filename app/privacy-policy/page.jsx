import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_URL } from '@/lib/site'

export const metadata = {
  title: 'Privacy Policy',
  description: "Infraspine's privacy policy: how we collect, use, disclose, and safeguard personal data for visitors and clients of our IT, ERP, automation, and cybersecurity services.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  robots: { index: true, follow: true },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-4xl mx-auto px-5 lg:px-8 py-24 sm:py-32">
        <h1 className="text-[32px] sm:text-[42px] font-black text-slate-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-[14px] text-slate-500 mb-10">Last Updated: April 10, 2026</p>

        <div className="space-y-8 text-[15px] leading-relaxed text-slate-600">
          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-3">1. Introduction</h2>
            <p>
              At InfraSpine Technologies ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our IT infrastructure, ERP, automation, and cybersecurity services.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-3">2. Information We Collect</h2>
            <p className="mb-2">We may collect personal identification information, including but not limited to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name and job title</li>
              <li>Contact information including email address and phone number</li>
              <li>Demographic information such as postcode, preferences, and interests</li>
              <li>Technical data related to your IT infrastructure (during audits or deployments)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-3">3. How We Use Your Information</h2>
            <p className="mb-2">We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Internal record keeping and account management.</li>
              <li>To improve our products and services.</li>
              <li>To periodically send promotional emails about new products, special offers or other information.</li>
              <li>To contact you for market research purposes.</li>
              <li>To perform technical audits and deploy IT infrastructure solutions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-3">4. Security</h2>
            <p>
              We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-3">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:privacy@infraspine.com" className="text-green-600 hover:underline">privacy@infraspine.com</a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
