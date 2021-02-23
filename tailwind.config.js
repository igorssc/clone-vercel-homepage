// eslint-disable-next-line @typescript-eslint/no-var-requires

module.exports = {
  purge: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  theme: {
    darkSelector: '.dark-mode',
    container: {
      center: true,
      padding: '1rem'
    },
    fontFamily: {
      header: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif']
    },
    extend: {
      colors: {
        primary: {
          lighter: '#000',
          default: '#000',
          darker: '#fff' //hover
        },
        secondary: {
          lighter: '#fff',
          default: '#fff',
          darker: '#000'
        }
      }
    }
  },
  variants: {
    backgroundColor: ['dark', 'responsive', 'hover', 'focus'],
    borderColor: [
      'dark',
      'dark-focus-within',
      'responsive',
      'hover',
      'focus',
      'focus-within'
    ],
    borderWidth: ['dark', 'responsive'],
    textColor: ['dark', 'responsive', 'hover', 'focus']
  },
  corePlugins: {},
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  plugins: [
    require('tailwindcss-dark-mode')(),
    require('tailwindcss-css-filters')
  ]
}
