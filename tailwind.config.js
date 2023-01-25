const colors = require('./src/assets/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: [
          'Open Sans, sans-serif',
          { fontFeatureSettings: '"cv11", "ss01"' }
        ]
      },
      backgroundImage: {
        'auth-bg': 'url("assets/images/auth-img.svg")',
        logo: 'url("assets/images/logo.svg")',
        'google-icon': 'url("assets/images/google.svg")'
      }
    }
  },
  plugins: []
}
