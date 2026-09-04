/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: '#080a0d',
          raised: '#11151c',
          soft: '#171c26',
          line: '#2a3140',
        },
        gold: {
          DEFAULT: '#c9a227',
          soft: '#e2c56a',
          mist: 'rgba(201, 162, 39, 0.12)',
        },
        cream: {
          DEFAULT: '#f3efe6',
          mute: '#a39e93',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'atelier':
          'radial-gradient(ellipse 80% 55% at 15% -10%, rgba(201,162,39,0.14), transparent 55%), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(80,110,160,0.08), transparent 50%), linear-gradient(180deg, #080a0d 0%, #0c1016 100%)',
        'section-fade':
          'linear-gradient(180deg, transparent, rgba(201,162,39,0.04), transparent)',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'image-in': {
          '0%': { opacity: '0', transform: 'scale(1.04)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'line-grow': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        rise: 'rise 0.7s ease-out both',
        'image-in': 'image-in 1.1s ease-out both',
        'line-grow': 'line-grow 0.8s ease-out both',
      },
    },
  },
  plugins: [],
}
