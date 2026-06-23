// SEO-related environment variables — see .env.example for where to set
// these after deployment. Every value here is `undefined` when its env var
// isn't set, and every place that consumes these checks for that and omits
// the corresponding tag/script entirely — never render a fake placeholder
// verification code or tracking ID into the page.

export const GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION || undefined
export const BING_SITE_VERIFICATION = process.env.BING_SITE_VERIFICATION || undefined
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || undefined
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || undefined
