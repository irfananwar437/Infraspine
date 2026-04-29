export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923001234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 sm:right-6 z-40 w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      style={{
        background: '#25D366',
        boxShadow: '0 4px 24px rgba(37,211,102,0.45)',
        width: '52px',
        height: '52px',
        marginBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
      aria-label="Chat with us on WhatsApp"
    >
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd"
          d="M14 2C7.373 2 2 7.373 2 14c0 2.126.555 4.122 1.528 5.854L2 26l6.293-1.508A11.945 11.945 0 0014 26c6.627 0 12-5.373 12-12S20.627 2 14 2zm-2.3 6.5c-.2-.5-.41-.51-.6-.52l-.51-.01c-.18 0-.46.07-.7.34-.24.27-.9.88-.9 2.14s.92 2.49 1.05 2.66c.13.18 1.79 2.84 4.39 3.87 2.17.86 2.61.69 3.08.65.47-.04 1.51-.62 1.72-1.21.21-.59.21-1.1.15-1.21-.07-.11-.25-.18-.52-.31-.27-.13-1.61-.8-1.86-.89-.25-.09-.43-.13-.61.13-.18.26-.7.89-.86 1.07-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.31.41-.46.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.61-1.47-.85-2.01z"
          fill="white"/>
      </svg>
    </a>
  )
}
