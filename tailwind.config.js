module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
