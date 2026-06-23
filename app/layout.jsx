import './globals.css'
import { Outfit, Source_Sans_3 } from 'next/font/google'
import MotionProvider from '@/components/motion/MotionProvider'
import { AnalyticsHeadScripts, GtmNoScript } from '@/components/Analytics'
import { SITE_URL, CONTACT_PHONE_TEL, CONTACT_EMAIL } from '@/lib/site'
import { GOOGLE_SITE_VERIFICATION, BING_SITE_VERIFICATION } from '@/lib/seo'

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
  // No `images` array here — app/opengraph-image.jsx is generated on the fly
  // (via next/og) and Next.js injects the correct og:image / twitter:image
  // tags from that file automatically. The previous hardcoded
  // `${BASE_URL}/og-image.png` pointed at a file that never existed in
  // public/, so every shared link had a broken preview image.
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Infraspine',
    title: 'Infraspine — Global IT Services, AI Solutions & Digital Infrastructure',
    description: 'Enterprise IT services, AI automation, cloud, cybersecurity, software development, BPO, and training — all under one accountable technology partner.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@infraspine',
    creator: '@infraspine',
    title: 'Infraspine — Global IT Services, AI Solutions & Digital Infrastructure',
    description: 'Enterprise IT services, AI automation, cloud, cybersecurity, software development, BPO, and training.',
  },
  alternates: {
    canonical: BASE_URL,
  },
  // Omitted entirely (not rendered as an empty/placeholder tag) unless the
  // real code is set — see lib/seo.js and .env.example.
  verification: {
    ...(GOOGLE_SITE_VERIFICATION ? { google: GOOGLE_SITE_VERIFICATION } : {}),
    ...(BING_SITE_VERIFICATION ? { other: { 'msvalidate.01': BING_SITE_VERIFICATION } } : {}),
  },
}

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Infraspine',
  legalName: 'Infraspine Technologies',
  url: BASE_URL,
  // /apple-icon is generated on the fly by app/apple-icon.jsx (next/og) —
  // a real, fetchable 180x180 image, unlike the previous /logo.png which
  // pointed at a file that didn't exist anywhere in public/.
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/apple-icon`,
    width: 180,
    height: 180,
  },
  description: 'Infraspine is a global IT services company delivering managed IT, cloud solutions, cybersecurity, AI automation, software development, BPO, and IT training.',
  foundingDate: '2014',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: CONTACT_PHONE_TEL,
      contactType: 'customer service',
      availableLanguage: ['English', 'Urdu'],
      contactOption: 'TollFree',
      areaServed: 'Worldwide',
    },
  ],
  email: CONTACT_EMAIL,
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
  // No SearchAction: the site has no /search route. Advertising a sitelinks
  // search box for a page that 404s does more harm than leaving it out.
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
        {/* apple-touch-icon is auto-injected by Next.js from app/apple-icon.jsx
            (a real generated image) — no manual <link> needed/wanted here. */}
        <meta name="theme-color" content="#071a37" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
        />
        <AnalyticsHeadScripts />
      </head>
      <body>
        <GtmNoScript />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
