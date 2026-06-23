import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTABanner from '@/components/ui/CTABanner'
import FAQAccordion from '@/components/ui/FAQAccordion'
import Link from 'next/link'
import {
  Server, Package, Handshake, BarChart2, Scale, Trash2,
  ArrowRight, CheckCircle,
} from 'lucide-react'

export const metadata = {
  title: 'IT Procurement Services Pakistan — Hardware, Software & Vendor Management',
  description: 'Infraspine IT Procurement: 200+ vendor relationships, 15-25% cost savings vs retail, same-day quotes for hardware, software, and networking equipment in Pakistan. 3-year warranty coverage included.',
  alternates: { canonical: 'https://www.infraspine.com/services/it-procurement' },
  openGraph: {
    title: 'IT Procurement Services Pakistan — Hardware, Software & Vendor Management | Infraspine',
    description: 'Professional IT procurement in Pakistan — 200+ vendor relationships, 15-25% cost savings, same-day quotes for servers, networking, endpoints, and software licences.',
    url: 'https://www.infraspine.com/services/it-procurement',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'IT Procurement Services',
  name: 'Infraspine IT Procurement Services',
  description: 'Professional IT procurement covering hardware, software licensing, vendor management, TCO analysis, lease vs buy advisory, and certified IT asset disposal for businesses in Pakistan.',
  provider: { '@id': 'https://www.infraspine.com/#organization' },
  url: 'https://www.infraspine.com/services/it-procurement',
  areaServed: { '@type': 'Place', name: 'Pakistan' },
}

const STATS = [
  { value: '200+', label: 'Vendor Relationships', color: '#0891B2' },
  { value: '15-25%', label: 'Cost Savings vs Retail', color: '#00C853' },
  { value: 'Same-day', label: 'Quote Turnaround', color: '#7C3AED' },
  { value: '3-year', label: 'Warranty Coverage', color: '#D97706' },
]

const CAPABILITIES = [
  {
    icon: Server,
    title: 'Hardware Procurement (Servers, Networking, Endpoints)',
    color: '#0891B2',
    bg: '#ECFEFF',
    desc: 'Hardware procurement in Pakistan carries risks that professional buyers know how to navigate: counterfeit equipment in the grey market, warranty voiding through unofficial channels, products without local authorised service centre coverage, and pricing that varies by 30–40% between suppliers without any difference in the product. We source from authorised distributors only — no grey market, no repackaged refurbished as new — and apply our consolidated purchasing relationships to negotiate pricing significantly below what individual organisations can achieve. All hardware comes with verified manufacturer warranty and local service centre coverage.',
    points: [
      'Dell, HP, Lenovo, and Apple servers and endpoints from authorised distributors',
      'Cisco, Fortinet, HPE, and Aruba networking equipment — genuine, warranted',
      'UPS, rack, and power infrastructure from APC and Eaton',
      'Storage systems from Seagate, Synology, and NetApp partner network',
    ],
  },
  {
    icon: Package,
    title: 'Software Licensing (Microsoft, Adobe, Antivirus)',
    color: '#7C3AED',
    bg: '#F5F3FF',
    desc: 'Software licence procurement is surprisingly complex. Microsoft alone offers over a dozen licensing programmes — CSP, EA, Open Value, MPSA — and choosing the wrong vehicle for your organisation&apos;s size and usage pattern can result in overpaying by tens of thousands of rupees annually. We are an authorised Microsoft CSP partner, meaning we can provision Microsoft 365, Azure, Windows, and Server products directly from Microsoft at partner pricing. Adobe Creative Cloud, Autodesk, and enterprise antivirus licences are similarly procured through authorised channel relationships at volume pricing unavailable to individual purchasers.',
    points: [
      'Microsoft CSP partner — M365, Azure, Windows, and Server licensing',
      'Adobe Creative Cloud and Autodesk volume licensing',
      'Enterprise antivirus: Symantec, Sophos, Trend Micro, Kaspersky',
      'Licence programme selection — CSP vs EA vs Open based on your profile',
    ],
  },
  {
    icon: Handshake,
    title: 'IT Vendor Management & SLA Negotiation',
    color: '#00C853',
    bg: '#F0FDF4',
    desc: 'Managing multiple IT vendors — internet providers, hardware maintainers, software vendors, cloud providers — is a significant administrative burden and a source of accountability gaps. When something goes wrong, vendors point fingers at each other and the customer is left in the middle. Our vendor management service acts as your single point of contact for all IT vendor relationships: managing SLA monitoring and enforcement, escalating service failures, handling renewal negotiations, and ensuring vendors deliver what their contracts promise. We have the commercial relationships and technical credibility to escalate effectively — which individual customers often do not.',
    points: [
      'Single point of contact for all IT vendor relationships',
      'SLA monitoring and vendor performance reporting monthly',
      'Renewal negotiation with benchmarked market pricing',
      'Escalation management for underperforming vendors',
    ],
  },
  {
    icon: BarChart2,
    title: 'IT Budget Planning & TCO Analysis',
    color: '#DC2626',
    bg: '#FEF2F2',
    desc: 'IT budgets that are not based on actual asset data and lifecycle planning consistently underestimate by 20–40%. The common failure: budgeting for the hardware refresh you know about while missing the warranty renewals that are expiring, the licence agreements coming up for renewal, and the capacity additions that your growth trajectory will require. Our TCO analysis service looks at your complete IT estate and builds a 3-year forward cost model covering hardware refresh, software renewal, support contract costs, cloud spend trajectory, and planned project spend — giving your finance team a reliable basis for IT budget planning rather than an educated guess.',
    points: [
      '3-year IT cost model covering all capital and operational expenditure',
      'Hardware refresh schedule aligned to warranty and end-of-life data',
      'Software renewal calendar with cost projection',
      'Cloud spend trajectory modelling for Azure and AWS workloads',
    ],
  },
  {
    icon: Scale,
    title: 'Lease vs Buy Analysis',
    color: '#D97706',
    bg: '#FFFBEB',
    desc: 'The decision between leasing and purchasing IT equipment has significant financial and operational implications that depend on your organisation&apos;s cash flow profile, tax position, technology refresh requirements, and risk appetite. Leasing typically converts a large capital outlay into predictable monthly operating expenditure, includes refresh at end of term, and simplifies asset disposal — but costs more over the full term. Purchasing has a higher upfront cost but lower total cost over the asset&apos;s useful life. We model both scenarios for your specific requirements and recommend the approach that best serves your financial and operational objectives.',
    points: [
      'Full financial modelling of lease vs buy for specific procurement decisions',
      'Operating vs capital expenditure impact on your P&L analysis',
      'End-of-term technology refresh planning for leased assets',
      'Lease agreement review and negotiation support',
    ],
  },
  {
    icon: Trash2,
    title: 'IT Asset Disposal (ITAD & Certified Data Destruction)',
    color: '#16A34A',
    bg: '#F0FDF4',
    desc: 'When IT equipment reaches end of life, improper disposal creates two serious risks. Data security risk: storage media that has not been properly wiped or destroyed can be recovered by determined actors even after formatting. Environmental and legal risk: electronic waste must be disposed of through licensed e-waste handlers under Pakistan&apos;s EPA regulations. Our ITAD service handles both: certified data destruction to DoD 5220.22-M standards (or physical shredding for higher assurance requirements), environmentally compliant e-waste disposal through EPA-registered partners, and a certificate of destruction for every disposed asset to maintain your audit trail.',
    points: [
      'DoD 5220.22-M certified data wiping for all functional storage media',
      'Physical drive shredding with certificate for compliance requirements',
      'EPA-registered e-waste disposal partners for all retired equipment',
      'Per-asset certificate of destruction for complete audit trail',
    ],
  },
]

const VENDORS = [
  'Dell Technologies', 'HP Enterprise', 'Lenovo', 'Cisco Systems',
  'Fortinet', 'Microsoft', 'Apple', 'Samsung',
  'Seagate', 'Synology', 'APC by Schneider', 'Eaton',
]

const FAQS = [
  {
    question: 'Why use a procurement service rather than buying directly from suppliers?',
    answer: 'The primary reason is price: our consolidated purchasing volume across multiple clients gives us access to pricing tiers that individual organisations cannot achieve on their own. 15–25% below retail is a consistent result for hardware procurement, and our Microsoft CSP pricing is significantly below what direct Microsoft purchases cost at similar volumes. Beyond price, we provide specification expertise (ensuring you buy the right product for the requirement, not the wrong product at a good price), warranty verification (critical in Pakistan where grey market products are common), and procurement process management that frees your IT team from the administrative overhead of competitive quotation processes.',
  },
  {
    question: 'How do you protect against counterfeit or grey market IT equipment?',
    answer: 'We source exclusively from authorised distributors and resellers for every major brand we work with. For Dell, HP, Lenovo, and Cisco equipment, we purchase through their official Pakistan distribution channel — not from grey market importers or unauthorised resellers. Every item comes with manufacturer serial numbers that can be verified on vendor portals, genuine manufacturer warranty registered in Pakistan, and access to local authorised service centres. We verify these details before delivery. For any procurement we handle, if a product proves counterfeit or non-genuine, we handle the return and replacement at no cost to you.',
  },
  {
    question: 'Can you handle urgent or same-day procurement requirements?',
    answer: 'Yes — same-day and urgent procurement is a standard part of our service for common products. For typical items (laptops, network switches, UPS units, common server configurations) that are available from local distributor stock, we can provide a quote within hours and arrange delivery the same or next day. For complex or custom-configured equipment (rack servers with specific configurations, specialised networking hardware, large storage systems), lead times vary by product and may require import if not available locally. We maintain visibility of distributor stock levels for common products and can advise on lead times accurately before you commit to a purchase.',
  },
  {
    question: 'Do you provide warranty and support management after purchase?',
    answer: 'Yes — procurement and warranty management go together in our service. For all hardware we procure, we register warranty in your organisation&apos;s name, track warranty expiry dates in our ITAM system, and alert you 6 months before warranties expire so you can renew or plan replacement proactively. When a warranty claim is needed, we manage the process on your behalf — logging the case with the manufacturer, coordinating collection or on-site repair, and following up to ensure timely resolution. Dealing with manufacturer warranty support is time-consuming; we handle it so your team does not have to.',
  },
  {
    question: 'What is the process for getting an IT procurement quote?',
    answer: 'Contact us with your requirements — a product specification, a list of items, or simply a description of what you need to achieve (and we will help define the specification). We will request quotes from our supplier network, evaluate the options for price, specification match, warranty, and availability, and deliver a consolidated procurement recommendation typically within the same business day for standard items. For larger procurements, we prepare a formal comparison document presenting options at different price points with clear recommendation. Once you approve the quote, we handle ordering, tracking, delivery coordination, and warranty registration.',
  },
  {
    question: 'Can you manage our Microsoft 365 and cloud licensing alongside hardware procurement?',
    answer: 'Yes — as a Microsoft CSP partner, we manage Microsoft 365, Azure, Windows Server, and other Microsoft product licences directly. This means you have a single vendor for both your hardware and Microsoft licensing, a single invoice for your Microsoft cloud spend, and a knowledgeable partner managing licence assignment, renewal timing, and licence right-sizing. For other software — Adobe, Autodesk, antivirus, backup software — we similarly manage procurement and licence administration, keeping all your software licences in a single register with renewal alerts and optimisation recommendations.',
  },
]

export default function ITProcurementPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'IT Procurement' },
      ]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: '#071a37' }}>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '52px 52px' }}
          aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle,#0891B2,transparent 70%)' }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-5 sm:pt-7 pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#0891B2' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0891B2' }}>IT Procurement</span>
            </div>
            <h1 className="text-[clamp(2rem,4vw,3.1rem)] font-black leading-[1.05] tracking-tight text-white mb-4">
              IT Procurement —{' '}
              <span style={{ color: '#0891B2' }}>Right Technology, Right Price, Right Time.</span>
            </h1>
            <p className="text-[16px] sm:text-[17px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
              IT procurement in Pakistan requires navigating grey market risks, volatile pricing, import lead times, and warranty complexities that most organisations are not equipped to handle efficiently. Infraspine&apos;s procurement service gives you access to 200+ authorised vendor relationships, consistently 15–25% below retail pricing, same-day quotes, and warranty management that protects your investment for years after purchase. From a single laptop to a full data centre refresh — we handle it all.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {STATS.map(s => (
                <div key={s.label} className="rounded-xl p-3 border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="text-[18px] font-black mb-1" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[11px] font-semibold leading-snug" style={{ color: '#64748B' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:opacity-90"
                style={{ background: '#0891B2', color: '#fff' }}>
                Get a Free Procurement Consultation <ArrowRight size={14} />
              </Link>
              <Link href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Business Case ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="h-px w-6" style={{ background: '#0891B2' }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0891B2' }}>The Business Case</span>
              </div>
              <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-5" style={{ color: '#0A1628' }}>
                Professional IT Procurement Pays for Itself
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Most organisations approach IT procurement the same way they approach office supply purchasing — they find what they need, get a quote from the first supplier who responds, and approve it if it seems reasonable. This approach consistently overpays. Without market benchmarks for comparison, without volume purchasing relationships, and without the technical knowledge to ensure the specified product is actually the right one for the requirement, organisations routinely pay 15–30% more than necessary and occasionally buy entirely the wrong product.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                The grey market problem in Pakistan is real and significant. Counterfeit networking equipment, refurbished equipment sold as new, and products imported through unofficial channels without local warranty coverage are all common in the market. A Cisco switch purchased from an unauthorised reseller at a 30% discount has no manufacturer warranty in Pakistan and may be a sophisticated counterfeit — problems that only become apparent when you need the warranty or the equipment fails within months. Our exclusive use of authorised distribution channels eliminates this risk entirely.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: '#64748B' }}>
                Total cost of ownership is a more honest metric than sticker price for IT procurement decisions. The cheapest server is not the cheapest server if it costs twice as much to support, runs less reliably, or fails to qualify for the manufacturer&apos;s next-generation upgrade programme. Our TCO analysis for procurement decisions looks beyond the invoice price to factor in warranty costs, support contract pricing, energy consumption, rack space requirements, and vendor support quality — giving you a genuinely informed purchasing decision rather than just the lowest quote.
              </p>
              <div className="space-y-3">
                {[
                  { color: '#0891B2', text: '15-25% below retail pricing through consolidated vendor relationships' },
                  { color: '#00C853', text: 'Authorised channels only — no grey market, no counterfeit risk' },
                  { color: '#7C3AED', text: 'TCO analysis looks beyond sticker price to total cost of ownership' },
                  { color: '#D97706', text: 'Warranty management and registration handled for every purchase' },
                ].map(({ color, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${color}15` }}>
                      <CheckCircle size={12} style={{ color }} />
                    </div>
                    <span className="text-[14px]" style={{ color: '#374151' }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border p-8" style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-6" style={{ color: '#94A3B8' }}>
                Vendor Authorisations We Hold
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { vendor: 'Dell Technologies', tier: 'Authorised Partner', color: '#007DB8' },
                  { vendor: 'HP Enterprise', tier: 'Silver Partner', color: '#0096D6' },
                  { vendor: 'Lenovo', tier: 'Authorised Reseller', color: '#E2231A' },
                  { vendor: 'Cisco', tier: 'Registered Partner', color: '#1BA0D7' },
                  { vendor: 'Fortinet', tier: 'Silver Partner', color: '#EE3124' },
                  { vendor: 'Microsoft', tier: 'CSP Partner', color: '#00A4EF' },
                  { vendor: 'APC / Schneider', tier: 'Authorised Reseller', color: '#3DCD58' },
                  { vendor: 'Synology', tier: 'Silver Partner', color: '#B6002D' },
                ].map(v => (
                  <div key={v.vendor} className="p-3 rounded-xl border" style={{ borderColor: '#E2E8F0', background: '#fff' }}>
                    <div className="text-[12px] font-bold mb-0.5" style={{ color: '#0A1628' }}>{v.vendor}</div>
                    <div className="text-[10.5px]" style={{ color: v.color }}>{v.tier}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-16 sm:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-6" style={{ background: '#0891B2' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#0891B2' }}>Procurement Capabilities</span>
              <div className="h-px w-6" style={{ background: '#0891B2' }} />
            </div>
            <h2 className="text-[clamp(1.7rem,3vw,2.6rem)] font-black mb-4" style={{ color: '#0A1628' }}>
              The Complete IT Procurement Service
            </h2>
            <p className="text-[15px] max-w-2xl mx-auto" style={{ color: '#64748B' }}>
              From hardware and software procurement through vendor management, TCO analysis, lease advisory, and certified asset disposal.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map(cap => (
              <div key={cap.title}
                className="bg-white rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: '#E2E8F0' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: cap.bg }}>
                  <cap.icon size={20} style={{ color: cap.color }} />
                </div>
                <h3 className="text-[16px] font-bold mb-3" style={{ color: '#0A1628' }}>{cap.title}</h3>
                <p className="text-[13.5px] leading-relaxed mb-4" style={{ color: '#64748B' }}>{cap.desc}</p>
                <ul className="space-y-2">
                  {cap.points.map(pt => (
                    <li key={pt} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: cap.color }} />
                      <span className="text-[13px]" style={{ color: '#475569' }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vendor Strip ── */}
      <section className="py-12 bg-white border-y" style={{ borderColor: '#E2E8F0' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] mb-8" style={{ color: '#94A3B8' }}>
            Brands We Procure — Authorised Channels Only
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {VENDORS.map(v => (
              <span key={v} className="px-4 py-2 rounded-full text-[12px] font-semibold border"
                style={{ background: '#F8FAFC', borderColor: '#E2E8F0', color: '#374151' }}>
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion faqs={FAQS} accent="#0891B2"
        title="IT Procurement Questions Answered"
        subtitle="Common questions from organisations looking to improve their IT purchasing process." />

      <CTABanner
        heading="Get a Free IT Procurement Consultation"
        subheading="Stop overpaying for IT equipment and managing vendor relationships yourself. Let our procurement team handle it — at better prices than you can access alone."
        primaryCTA={{ label: 'Get a Free Consultation', href: '/contact-us' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:+923001234567' }}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
