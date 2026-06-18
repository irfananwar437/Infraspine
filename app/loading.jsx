export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#FAFAFA' }}>
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full animate-bounce" style={{ background: '#00C853', animationDelay: '0ms' }} />
          <div className="w-4 h-0.5 rounded-full" style={{ background: '#E2E8F0' }} />
          <div className="w-3 h-3 rounded-full animate-bounce" style={{ background: '#2563EB', animationDelay: '150ms' }} />
          <div className="w-4 h-0.5 rounded-full" style={{ background: '#E2E8F0' }} />
          <div className="w-3 h-3 rounded-full animate-bounce" style={{ background: '#2563EB', animationDelay: '300ms' }} />
        </div>
        <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: '#94A3B8' }}>Loading</p>
      </div>
    </div>
  )
}
