/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1f1b16',
        paper: '#fbf7f0',
        nabe: {
          red: '#e4572e',
          coral: '#f4a261',
          sage: '#8aa399',
          cream: '#fdf6ec',
          line: '#e7ddcf',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 0 0 #1f1b16',
        card: '0 10px 40px -12px rgba(31,27,22,0.25)',
      },
    },
  },
  plugins: [],
}
