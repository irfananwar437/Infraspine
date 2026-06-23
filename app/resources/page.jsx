import ResourcesClient from './ResourcesClient'

export const metadata = {
  title: 'IT Resources & Free Downloads — Guides, Checklists & Whitepapers',
  description: 'Free IT resources for Pakistan businesses: cybersecurity checklists, cloud migration guides, network templates, ERP selection guides, and technology whitepapers. Download instantly.',
  alternates: { canonical: 'https://www.infraspine.com/resources' },
  openGraph: {
    title: 'IT Resources & Downloads | Infraspine',
    description: 'Free guides, checklists, and whitepapers on cybersecurity, cloud, networking, AI, and IT management for Pakistan businesses.',
    url: 'https://www.infraspine.com/resources',
  },
}

export default function ResourcesPage() {
  return <ResourcesClient />
}
