import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#060E23',
        }}
      >
        <svg width="110" height="110" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="8" r="4.5" fill="#00C853" />
          <circle cx="8" cy="26" r="4.5" fill="#2563EB" />
          <circle cx="28" cy="26" r="4.5" fill="#2563EB" />
          <circle cx="18" cy="20" r="3.5" fill="#fff" />
          <line x1="18" y1="12" x2="18" y2="17" stroke="#94a3b8" strokeWidth="2" />
          <line x1="10" y1="24" x2="16" y2="21" stroke="#94a3b8" strokeWidth="2" />
          <line x1="26" y1="24" x2="20" y2="21" stroke="#94a3b8" strokeWidth="2" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
