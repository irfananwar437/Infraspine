// Centralized site configuration, sourced from environment variables (see
// .env.example) with the current production values as fallback defaults —
// nothing breaks if the env vars aren't set anywhere a deploy runs.
//
// NEXT_PUBLIC_ prefix is required for any of these to be readable in client
// components ('use client'), not just server components/metadata.

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.infraspine.com'

export const CONTACT_PHONE_DISPLAY = process.env.NEXT_PUBLIC_CONTACT_PHONE || '+92 300 123 4567'
export const CONTACT_PHONE_TEL = process.env.NEXT_PUBLIC_CONTACT_PHONE_TEL || '+923001234567'
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@infraspine.com'
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '923001234567'

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`
export const PHONE_LINK = `tel:${CONTACT_PHONE_TEL}`
export const EMAIL_LINK = `mailto:${CONTACT_EMAIL}`
