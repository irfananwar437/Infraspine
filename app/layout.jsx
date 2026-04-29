import './globals.css'
import { Outfit, Source_Sans_3 } from 'next/font/google'

const fontDisplay = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const fontBody = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'Infraspine — Build. Automate. Control. Your Entire Business Infrastructure.',
  description: 'Infraspine designs and deploys complete enterprise infrastructure, custom ERP systems, automation platforms, and real-time monitoring — all under one unified architecture.',
  keywords: 'ERP development, IT infrastructure, business automation, enterprise systems, monitoring, AI workflows',
  authors: [{ name: 'Infraspine Technologies' }],
  openGraph: {
    title: 'Infraspine — Build. Automate. Control.',
    description: 'We design and deploy complete infrastructure, ERP platforms, and automation systems for enterprise businesses.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Infraspine',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Infraspine — Build. Automate. Control.',
    description: 'Enterprise infrastructure, ERP, automation and monitoring — all under one system.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`relative scroll-smooth ${fontDisplay.variable} ${fontBody.variable}`}
    >
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'><circle cx='18' cy='8' r='4' fill='%2322C55E'/><circle cx='8' cy='26' r='4' fill='%233B82F6'/><circle cx='28' cy='26' r='4' fill='%233B82F6'/><circle cx='18' cy='20' r='3' fill='white'/><line x1='18' y1='12' x2='18' y2='17' stroke='%2394a3b8' stroke-width='1.5'/><line x1='10' y1='24' x2='16' y2='21' stroke='%2394a3b8' stroke-width='1.5'/><line x1='26' y1='24' x2='20' y2='21' stroke='%2394a3b8' stroke-width='1.5'/></svg>" />
      </head>
      <body>{children}</body>
    </html>
  )
}
