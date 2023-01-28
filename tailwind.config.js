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
        'hero-image': 'url("assets/images/hero-image.png")',
        logo: 'url("assets/images/logo.svg")',
        'google-icon': 'url("assets/images/google.svg")',
        'wavy-line': 'url("assets/images/wavy-line.svg")',
        clock: 'url("assets/images/what-to-expect/clock.svg")',
        finance: 'url("assets/images/what-to-expect/finance.svg")',
        laptop: 'url("assets/images/what-to-expect/laptop.svg")',
        secured: 'url("assets/images/what-to-expect/secured.svg")',
        'coloured-banner': 'url("assets/images/rent-a-tool/header.svg")',
        locations: 'url("assets/images/rent-a-tool/locations.svg")',
        'reviews-bg': 'url("assets/images/reviews/bg.svg")',
        farmer: 'url("assets/images/reviews/farmer.png")'
      },
      content: {
        'check-mark': 'url("assets/images/rent-a-tool/check.svg")'
      },
      boxShadow: {
        '3xl': '0px 0px 88px rgba(85, 85, 85, 0.25);',
        '4xl': '51px 51px 84px rgba(135, 140, 189, 0.06)'
      }
    }
  },
  plugins: []
}
