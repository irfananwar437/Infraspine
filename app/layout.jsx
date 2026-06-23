import './globals.css'
import { Outfit, Source_Sans_3 } from 'next/font/google'
import MotionProvider from '@/components/motion/MotionProvider'
import { SITE_URL } from '@/lib/site'

const fontDisplay = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['700', '800', '900'],
  preload: true,
  adjustFontFallback: true,
})

const fontBody = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '600'],
  preload: true,
  adjustFontFallback: true,
})

const BASE_URL = SITE_URL

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Infraspine — Global IT Services, AI Solutions & Digital Infrastructure',
    template: '%s | Infraspine',
  },
  description: 'Infraspine delivers enterprise IT services, AI automation, cloud solutions, cybersecurity, software development, BPO, and IT training globally. Your technology. Our responsibility.',
  keywords: [
    'IT services company', 'managed IT services', 'cloud solutions', 'cybersecurity services',
    'AI automation', 'software development', 'enterprise IT infrastructure', 'BPO services',
    'IT training', 'network infrastructure', 'data backup recovery', 'IT consultancy',
    'digital transformation', 'Infraspine', 'global IT company',
  ],
  authors: [{ name: 'Infraspine Technologies', url: BASE_URL }],
  creator: 'Infraspine Technologies',
  publisher: 'Infraspine Technologies',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Infraspine',
    title: 'Infraspine — Global IT Services, AI Solutions & Digital Infrastructure',
    description: 'Enterprise IT services, AI automation, cloud, cybersecurity, software development, BPO, and training — all under one accountable technology partner.',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Infraspine — Global IT Services & AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@infraspine',
    creator: '@infraspine',
    title: 'Infraspine — Global IT Services, AI Solutions & Digital Infrastructure',
    description: 'Enterprise IT services, AI automation, cloud, cybersecurity, software development, BPO, and training.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Infraspine',
  legalName: 'Infraspine Technologies',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/logo.png`,
    width: 200,
    height: 60,
  },
  description: 'Infraspine is a global IT services company delivering managed IT, cloud solutions, cybersecurity, AI automation, software development, BPO, and IT training.',
  foundingDate: '2014',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+92-300-1234567',
      contactType: 'customer service',
      availableLanguage: ['English', 'Urdu'],
      contactOption: 'TollFree',
      areaServed: 'Worldwide',
    },
  ],
  email: 'hello@infraspine.com',
  sameAs: [
    'https://www.linkedin.com/company/infraspine',
    'https://twitter.com/infraspine',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IT Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Managed IT Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Solutions' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cybersecurity' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Software Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'BPO Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IT Training' } },
    ],
  },
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'Infraspine',
  description: 'Global IT Services, AI Solutions & Digital Infrastructure',
  publisher: { '@id': `${BASE_URL}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/search?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
  inLanguage: 'en-US',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`relative scroll-smooth ${fontDisplay.variable} ${fontBody.variable}`}
    >
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'><circle cx='18' cy='8' r='4' fill='%2300C853'/><circle cx='8' cy='26' r='4' fill='%232563EB'/><circle cx='28' cy='26' r='4' fill='%232563EB'/><circle cx='18' cy='20' r='3' fill='white'/><line x1='18' y1='12' x2='18' y2='17' stroke='%2394a3b8' stroke-width='1.5'/><line x1='10' y1='24' x2='16' y2='21' stroke='%2394a3b8' stroke-width='1.5'/><line x1='26' y1='24' x2='20' y2='21' stroke='%2394a3b8' stroke-width='1.5'/></svg>" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#071a37" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
        />
      </head>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
