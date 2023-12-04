/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        pi: {
          'primary-purple': '#8C41A6',
          'secondary-purple': '#B767D3',
        },
      },
      backgroundImage: {
        radial: 'radial-gradient(circle, #8C41A6 45%, #B767D3 40%)',
        'radial-secondary': 'radial-gradient(circle, #B767D3 45%, #8C41A6 40%)',
        degrade: 'linear-gradient(-45deg, #8C41A6, #B767D3, #a867bd, #d695eb)',
      },
      backgroundSize: {
        '400%': '400% 400%',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        degrade: {
          '0%': { backgroundPosition: '0% 10%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        degrade: 'degrade 10s ease infinite alternate',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
