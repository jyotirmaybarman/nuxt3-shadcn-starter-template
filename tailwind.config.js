module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      'xsm': '480px',
      'sm': '640px',
      'md': '768px',
      '2md': '900px',
      'lg': '1024px',
      '2lg':'1110px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.gray.300'),
            '[class~="lead"]': {
              color: theme('colors.gray.300'),
            },
            a: {
              color: theme('colors.blue.400'),
            },
            strong: {
              color: theme('colors.gray.200'),
            },
            'ol > li::before': {
              color: theme('colors.gray.400'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.600'),
            },
            hr: {
              borderColor: theme('colors.gray.700'),
            },
            blockquote: {
              color: theme('colors.gray.200'),
              borderLeftColor: theme('colors.gray.700'),
            },
            h1: {
              color: theme('colors.gray.200'),
            },
            h2: {
              color: theme('colors.gray.200'),
            },
            h3: {
              color: theme('colors.gray.200'),
            },
            h4: {
              color: theme('colors.gray.200'),
            },
            'figure figcaption': {
              color: theme('colors.gray.400'),
            },
            code: {
              color: theme('colors.gray.200'),
            },
            'a code': {
              color: theme('colors.gray.200'),
            },
            pre: {
              color: theme('colors.white'),
              backgroundColor: theme('colors.gray.800'),
            },
            thead: {
              color: theme('colors.gray.200'),
              borderBottomColor: theme('colors.gray.600'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
