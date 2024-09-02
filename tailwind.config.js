/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['content/**/*.md', 'layouts/**/*.html'],
  theme: {
    extend: {
      colors: {
        dark: 'rgb(var(--color-dark) / <alpha-value>)',
        light: 'rgb(var(--color-light) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        black: 'rgb(var(--color-black) / <alpha-value>)',
        'blue-dark': 'rgb(var(--color-blue-dark) / <alpha-value>)',
        'gray-dark': 'rgb(var(--color-gray-dark) / <alpha-value>)'
      }
    },
    fontFamily: {
      sans: [
        '"Inter"',
        '"ui-sans-serif"',
        '"system-ui"',
        '"sans-serif"',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: [
        '"ui-serif"',
        '"Georgia"',
        '"Cambria"',
        '"Times New Roman"',
        '"Times"',
        '"serif"'
      ],
      mono: [
        '"ui-monospace"',
        '"SFMono-Regular"',
        '"Menlo"',
        '"Monaco"',
        '"Consolas"',
        '"Liberation Mono"',
        '"Courier New"',
        '"monospace"'
      ]
    }
  },
  plugins: [],
  darkMode: 'selector'
}
