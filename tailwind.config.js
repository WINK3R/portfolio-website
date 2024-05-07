module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'grey': '#E7E7E7',
        'grey-50': '#DBDBDB',
        'grey-75': '#F5F5F5',
        'grey-90': '#3B3B3B',
        'grey-95': '#C6C6C6',
        'grey-100': '#8B8B8B',
        'grey-200': '#7D7D7E',
        'grey-250': '#747475',
        'grey-300': '#242424',
        'grey-400': '#141314',
        'grey-900': '#111111',
        'blue': '#0075FF',
        'blue-50': '#006AE6',
        'blue-100': '#DEEEFF',
        'blue-500': '#0CA8FF',
        'blue-600': '#0075FF',
        'black': '#0F0F0F',
        'black-50': '#161616',
        'pink': '#FF007A',
      },
      fontFamily: {
        sofia: ['Sofia Sans', 'sans-serif'],
      },
      fontSize: {
        '1.5xl': '1.1rem',
        '2.5xl': '1.6rem',
        '8.5xl': '6rem',
      },
      borderWidth: {
        DEFAULT: '0.5px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      scale: {
        '101': '1.015',
      },
      width: {
        '18': '4rem',
      },
      height: {
        '18': '4rem',
        '50': '50rem',
        '200': '450rem',
        '300': '3780px',
        '999': '9000rem'
      },
      rotate: {
        '12': '12deg',
        '24': '24deg',
        '30': '30deg',
        '45': '45deg',
        '60': '60deg',
      },
    },
  },
  variants: {
  },
  plugins: [
    require('tailwindcss-3d')({ legacy: true }),
  ],
}
