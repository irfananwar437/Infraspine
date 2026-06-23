import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #060E23 0%, #0B1A3B 55%, #071a37 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <svg width="120" height="120" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="8" r="4" fill="#00C853" />
          <circle cx="8" cy="26" r="4" fill="#2563EB" />
          <circle cx="28" cy="26" r="4" fill="#2563EB" />
          <circle cx="18" cy="20" r="3" fill="#fff" opacity="0.9" />
          <line x1="18" y1="12" x2="18" y2="17" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="10" y1="24" x2="16" y2="21" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="26" y1="24" x2="20" y2="21" stroke="#94a3b8" strokeWidth="1.5" />
        </svg>
        <div
          style={{
            marginTop: 28,
            fontSize: 64,
            fontWeight: 900,
            letterSpacing: 6,
            color: '#fff',
          }}
        >
          INFRASPINE
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 28,
            fontWeight: 600,
            color: '#94A3B8',
            letterSpacing: 1,
          }}
        >
          Global IT Services, AI Solutions &amp; Digital Infrastructure
        </div>
      </div>
    ),
    { ...size }
  )
}
