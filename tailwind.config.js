/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060E23',
          900: '#0B1A3B',
          800: '#0F2158',
          700: '#1A2E6B',
          600: '#1E3A8A',
        },
        brand: {
          green: '#16A34A',
          'green-light': '#22C55E',
          blue: '#2563EB',
          'blue-light': '#3B82F6',
        },
        ink: '#0A1628',
        accent: '#00C853',
        mist: '#F0F4F8',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(105deg, rgba(6,14,35,0.92) 0%, rgba(11,26,59,0.75) 45%, rgba(11,26,59,0.35) 100%)',
      },
      keyframes: {
        ticker: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        borderFlow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        ticker: 'ticker 30s linear infinite',
        fadeUp: 'fadeUp 0.7s ease forwards',
        float: 'float 4s ease-in-out infinite',
        borderFlow: 'borderFlow 10s ease-in-out infinite',
        shimmer: 'shimmer 2.8s ease-in-out infinite',
      },
      boxShadow: {
        card: '0 8px 40px rgba(0,0,0,0.10)',
        'card-hover': '0 16px 60px rgba(0,0,0,0.16)',
        nav: '0 2px 20px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
}
