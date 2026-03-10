/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: '#0B1F3A',
        gold: '#C8922A',
        teal: '#1A7A6E',
        'light-gray': '#F5F6F8',
        'text-primary': '#0B1F3A',
        'text-muted': '#6B7280',
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'hero-md': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '800' }],
        'section': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }],
        'card-title': ['1.375rem', { lineHeight: '1.3', fontWeight: '600' }],
        'label': ['0.75rem', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
}
