/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['content/**/*.md', 'layouts/**/*.html'],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      'blue-dark': 'var(--color-blue-dark)'
    },
    extend: {}
  },
  plugins: []
}
