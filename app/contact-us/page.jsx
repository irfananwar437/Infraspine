import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ContactForm from './ContactForm'

export const metadata = {
  title: 'Contact Us — Get a Free IT Consultation | Infraspine',
  description: 'Contact Infraspine for managed IT services, cloud solutions, cybersecurity, AI automation, BPO, and IT training. Response within 2 hours. Based in Karachi, serving clients globally.',
  alternates: { canonical: 'https://www.infraspine.com/contact-us' },
  openGraph: {
    title: 'Contact Us — Get a Free IT Consultation | Infraspine',
    description: 'Reach Infraspine for IT services, AI automation, cloud solutions, cybersecurity, BPO, and training. Response within 2 business hours.',
    url: 'https://www.infraspine.com/contact-us',
  },
}

const CONTACT_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Infraspine',
  description: 'Get in touch with Infraspine for IT services, AI automation, cloud solutions, cybersecurity, software development, BPO, and IT training.',
  url: 'https://www.infraspine.com/contact-us',
  mainEntity: {
    '@type': 'Organization',
    '@id': 'https://www.infraspine.com/#organization',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+92-300-123-4567',
      contactType: 'customer service',
      email: 'hello@infraspine.com',
      availableLanguage: ['English', 'Urdu'],
      areaServed: 'Worldwide',
    },
  },
}

export default function ContactUsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(CONTACT_SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Contact Us' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-14 sm:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-6" style={{ background: '#00C853' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Contact Us</span>
            </div>
            <h1 className="text-[clamp(2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-white mb-6">
              Let&apos;s Talk About<br />
              <span style={{ color: '#00C853' }}>Your IT Requirements.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed" style={{ color: '#94A3B8' }}>
              Whether you need a free infrastructure audit, a project quote, or just want to explore what Infraspine can do for your business — our specialists are available to speak with you today. No sales pressure. Just honest advice from people who have been solving enterprise IT problems for over a decade.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Grid ── */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <ContactForm />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
