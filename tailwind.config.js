/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        toyo: {
          blue:      '#0062B0',
          'blue-mid':'#0077cc',
          'blue-lt': '#3a9de8',
          black:     '#0a0a0a',
          dark:      '#111111',
          surface:   '#1a1a1a',
          'surface-2':'#222222',
          border:    'rgba(255,255,255,0.08)',
          gray:      '#6b7280',
          'gray-lt': '#9ca3af',
          lightgray: '#f4f5f7',
        },
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '8xl':  ['6rem',   { lineHeight: '1' }],
        '9xl':  ['7rem',   { lineHeight: '1' }],
        '10xl': ['8.5rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        superwide: '0.25em',
        ultrawide: '0.4em',
      },
      boxShadow: {
        'blue-glow': '0 0 40px rgba(0,98,176,0.35)',
        'card':      '0 4px 24px rgba(0,0,0,0.12)',
        'card-hover':'0 12px 48px rgba(0,0,0,0.22)',
        'dark-card': '0 4px 24px rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        'blue-radial': 'radial-gradient(ellipse at center, #0062B0 0%, #003d6e 100%)',
        'dark-vignette':'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-48px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%':   { opacity: '0', transform: 'translateX(48px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        spinSlow: {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        floatTire: {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(-4deg)',
            filter:    'drop-shadow(-24px 0px 60px rgba(0,98,176,0.22))',
          },
          '50%': {
            transform: 'translateY(-22px) rotate(0deg)',
            filter:    'drop-shadow(-24px 18px 90px rgba(0,98,176,0.40))',
          },
        },
      },
      animation: {
        'fade-in-up':    'fadeInUp 0.7s ease both',
        'fade-in-up-d1': 'fadeInUp 0.7s 0.15s ease both',
        'fade-in-up-d2': 'fadeInUp 0.7s 0.30s ease both',
        'fade-in-up-d3': 'fadeInUp 0.7s 0.45s ease both',
        'fade-in':       'fadeIn 0.6s ease both',
        'slide-left':    'slideInLeft 0.7s ease both',
        'slide-right':   'slideInRight 0.7s ease both',
        'scale-in':      'scaleIn 0.5s ease both',
        'spin-slow':     'spinSlow 18s linear infinite',
        'float-tire':    'floatTire 7s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
