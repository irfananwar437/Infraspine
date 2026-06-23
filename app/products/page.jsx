import ProductsClient from './ProductsClient'
import { SITE_URL } from '@/lib/site'

export const metadata = {
  title: 'Software Products — ERP, CRM, Automation & More',
  description: 'Infraspine Software products: custom ERP, CRM, automation tools, monitoring dashboards, inventory systems, and web platforms built for enterprise growth.',
  alternates: { canonical: `${SITE_URL}/products` },
  openGraph: {
    title: 'Software Products | Infraspine',
    description: 'Custom ERP, CRM, automation, and enterprise software products from Infraspine.',
    url: `${SITE_URL}/products`,
  },
}

export default function ProductsPage() {
  return <ProductsClient />
}
