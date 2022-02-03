module.exports = {
  content: [
    './index.html',
    './js/*.js',
    './dev/*.css',
    './html/*.html'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        'gara': ['EB Garamond', 'serif']
      },
      height: {
        'leftover-phone': 'calc(100vh - 10rem)',
        'leftover': 'calc(100vh - 5rem)'
      },
      keyframes: {
        across: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(-600px, 0, 0)' },
        }
      },
      animation: {
        across: 'across 5s linear infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
