import CaseStudiesClient from './CaseStudiesClient'
import { SITE_URL } from '@/lib/site'

export const metadata = {
  title: 'Case Studies — Real IT Project Results for Pakistani Businesses',
  description: 'Real results from Infraspine IT projects: ERP rollouts, cybersecurity hardening, cloud migrations, and managed IT engagements for manufacturing, healthcare, retail, and financial services clients.',
  alternates: { canonical: `${SITE_URL}/case-studies` },
  openGraph: {
    title: 'Case Studies — Real IT Project Results | Infraspine',
    description: 'Real results from Infraspine IT projects across manufacturing, healthcare, retail, and financial services in Pakistan.',
    url: `${SITE_URL}/case-studies`,
  },
}

export default function CaseStudiesPage() {
  return <CaseStudiesClient />
}
