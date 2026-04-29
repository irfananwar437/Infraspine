import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HeroCards from '@/components/HeroCards'
import CoreOffer from '@/components/CoreOffer'
import Products from '@/components/Products'
import InfraSpineSystem from '@/components/InfraSpineSystem'
import StatsBar from '@/components/StatsBar'
import ClientsStrip from '@/components/ClientsStrip'
import ProblemSolution from '@/components/ProblemSolution'
import OurApproach from '@/components/OurApproach'
import NetworkFlowSection from '@/components/NetworkFlowSection'
import InfraEcosystem from '@/components/InfraEcosystem'
import Testimonials from '@/components/Testimonials'
import CaseStudies from '@/components/CaseStudies'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'

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
