import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HeroCards from '@/components/HeroCards'
import WhatsAppButton from '@/components/WhatsAppButton'

// Below-the-fold sections: code-split into separate chunks so the initial
// JS bundle (parsed/executed before TTI) only contains above-the-fold code.
// SSR stays on (default) so content/SEO and CLS are unaffected.
const CoreOffer = dynamic(() => import('@/components/CoreOffer'))
const Products = dynamic(() => import('@/components/Products'))
const InfraSpineSystem = dynamic(() => import('@/components/InfraSpineSystem'))
const StatsBar = dynamic(() => import('@/components/StatsBar'))
const ClientsStrip = dynamic(() => import('@/components/ClientsStrip'))
const ProblemSolution = dynamic(() => import('@/components/ProblemSolution'))
const OurApproach = dynamic(() => import('@/components/OurApproach'))
const NetworkFlowSection = dynamic(() => import('@/components/NetworkFlowSection'))
const InfraEcosystem = dynamic(() => import('@/components/InfraEcosystem'))
const Testimonials = dynamic(() => import('@/components/Testimonials'))
const CaseStudies = dynamic(() => import('@/components/CaseStudies'))
const CTASection = dynamic(() => import('@/components/CTASection'))
const Footer = dynamic(() => import('@/components/Footer'))
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'))

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <section id="home" className="relative">
        <Hero />
        <HeroCards />
      </section>
      <CoreOffer />
      <Products />
      <InfraSpineSystem />
      <StatsBar />
      <section id="clients"><ClientsStrip /></section>
      <ProblemSolution />
      <OurApproach />
      <NetworkFlowSection />
      <InfraEcosystem />
      <section id="case-studies"><CaseStudies /></section>
      <Testimonials />
      <CTASection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
