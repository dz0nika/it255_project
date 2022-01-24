const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./resources/**/*.blade.php', './resources/**/*.js', './resources/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      fill: (theme) => theme('colors'),
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      colors: {
        modal: {
          container: 'rgba(255, 255, 255, 0.85)',
          body: 'rgba(0, 0, 0, 0.3)',
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
