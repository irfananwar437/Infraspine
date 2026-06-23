import SolutionsClient from './SolutionsClient'
import { SITE_URL } from '@/lib/site'

export const metadata = {
  title: 'Complete Business Solutions — Not Just Technology',
  description: 'Infraspine delivers complete, integrated business solutions — combining IT infrastructure, software, automation, and security into one accountable technology partnership.',
  alternates: { canonical: `${SITE_URL}/solutions` },
  openGraph: {
    title: 'Complete Business Solutions | Infraspine',
    description: 'Integrated IT infrastructure, software, automation, and security solutions for enterprise businesses.',
    url: `${SITE_URL}/solutions`,
  },
}

export default function SolutionsPage() {
  return <SolutionsClient />
}
