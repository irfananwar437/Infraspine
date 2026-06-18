import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import CTABanner from '@/components/ui/CTABanner'
import Link from 'next/link'
import { Factory, Heart, Package, BarChart2, Building2, Truck, Home, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Industries We Serve — IT Solutions for Every Sector | Infraspine',
  description: 'Infraspine delivers managed IT, cybersecurity, and technology solutions for manufacturing, healthcare, retail, financial services, construction, logistics, and real estate businesses across Pakistan.',
  alternates: { canonical: 'https://www.infraspine.com/industries' },
}

const INDUSTRIES = [
  { slug: 'manufacturing',  name: 'Manufacturing',       icon: Factory,   color: '#F97316', desc: 'Industrial network design, OT/IT integration, ERP systems, and cybersecurity for Pakistan\'s factory floor.' },
  { slug: 'healthcare',     name: 'Healthcare',           icon: Heart,     color: '#DC2626', desc: 'Secure, compliant IT for hospitals, clinics, diagnostic labs, and pharmaceutical companies.' },
  { slug: 'retail',         name: 'Retail',               icon: Package,   color: '#7C3AED', desc: 'Multi-branch connectivity, POS integration, CCTV, and PCI DSS compliance for retail businesses.' },
  { slug: 'financial',      name: 'Financial Services',   icon: BarChart2, color: '#0EA5E9', desc: 'SBP-aligned cybersecurity, SOC, disaster recovery, and compliance for banks and financial institutions.' },
  { slug: 'construction',   name: 'Construction',         icon: Building2, color: '#D97706', desc: 'Site connectivity, project ERP, CCTV security, and IT management for construction companies.' },
  { slug: 'logistics',      name: 'Logistics',            icon: Truck,     color: '#0F766E', desc: 'Fleet telematics, warehouse management systems, multi-depot connectivity, and IoT cold chain monitoring.' },
  { slug: 'real-estate',    name: 'Real Estate',          icon: Home,      color: '#16A34A', desc: 'Development network design, gated community security, smart building systems, and property management tech.' },
]

export default function IndustriesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      <section className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-6" style={{ background: '#00C853' }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#00C853' }}>Sector Expertise</span>
            <div className="h-px w-6" style={{ background: '#00C853' }} />
          </div>
          <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[1.05] tracking-tight text-white mb-5">
            Industries We Serve
          </h1>
          <p className="text-[16px] sm:text-[17px] leading-relaxed max-w-2xl mx-auto" style={{ color: '#94A3B8' }}>
            Infraspine delivers technology solutions tailored to the specific operational, regulatory, and competitive context of seven key industries across Pakistan.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map(ind => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`}
                className="group bg-white rounded-2xl border p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: '#E2E8F0', boxShadow: '0 4px 20px rgba(10,22,40,0.06)' }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${ind.color}15`, border: `1px solid ${ind.color}30` }}>
                  <ind.icon size={22} style={{ color: ind.color }} strokeWidth={1.5} />
                </div>
                <h2 className="text-[18px] font-black mb-2" style={{ color: '#0A1628' }}>{ind.name}</h2>
                <p className="text-[13.5px] leading-relaxed mb-5" style={{ color: '#64748B' }}>{ind.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-bold transition-all group-hover:gap-2.5" style={{ color: ind.color }}>
                  Explore Solutions <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Don't See Your Industry Listed?"
        subheading="Infraspine works across all sectors. Book a free consultation to discuss your specific technology requirements."
      />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
