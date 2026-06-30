import { GA_MEASUREMENT_ID, GTM_ID } from '@/lib/seo'

/**
 * Renders nothing if the corresponding env var isn't set — see lib/seo.js
 * and .env.example. Safe to include unconditionally in layout.
 *
 * Deliberately plain native <script> tags, not next/script's <Script>
 * component. <Script strategy="afterInteractive"> (the default, including
 * in Next's own @next/third-parties/google package) only appears in the
 * live DOM after hydration — it's injected client-side via JS, so it never
 * shows up in curl/view-source output even when working correctly. A plain
 * <script> tag is part of the React tree Next.js renders server-side, so it
 * ships in the actual response HTML. `async` on the gtag.js fetch keeps the
 * non-blocking behavior afterInteractive was for.
 */
export function AnalyticsHeadScripts() {
  return (
    <>
      {GA_MEASUREMENT_ID && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');`,
            }}
          />
        </>
      )}
      {GTM_ID && (
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      )}
    </>
  )
}

/** Must be the first child of <body> per Google's GTM install instructions. */
export function GtmNoScript() {
  if (!GTM_ID) return null
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  )
}
