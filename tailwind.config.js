/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily:{
        anderson: 'Anderson, Black',
      },
      fontSize: {
        'siteVersion' : '0.875rem',
        '0.75rem' : '0.75rem',
        '7.5': '7.5rem',
        'linkProyects': '10rem',
        'notFound' : '20rem'
      },
      lineHeight: {
        'proyectLineHeight': '1.3',
      },
      width: {
        '700': '700px',
      },
      height: {
        '2px': '2px',
        '70': '4rem',
        '60vh':'60vh',
        '80vh':'80vh',
        '90vh':'90vh',
      },
      minHeight: {
        'min': '100vh',
        '90': '90vh',
        '80': '80vh',
        '70': '70vh',
        '60': '60vh',
        '50': '50vh',
      },
      maxWidth:{
        '85': '85rem',
      },
      borderRadius: {
        50: '50%',
      },
      colors: {
        whiteProject: '#f6f6f6',
        blackProject: '#171717',
        // COLOR MENU
        blackMenu: '#191919',
        blackMenuDark: '#212121',

        orangeSoft:'#fdddad',
        html: '#e34f26',
        css: '#2965f1',
        javascript: '#f7df1e',
        bootstrap: '#563d7c',
        react: '#61dafb',
        sass: '#cd6799',
        tailwind: '#cbe86b',
        docker: '#0db7ed',
        git: '#f05032',
        github: '#fafafa',
      },
      spacing: {
        'min80': '-80px',
        '50': '50%',
      },
      transitionTimingFunction: {
        'proyectTransition': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
      zIndex: {
        '1': '1',
        '-1': '-1',
        '15': '15',
        '60': '60',
        '99': '99',
        '999':'999',
        '1000': '1000',
      },
      screens: {
        '480Max': {'max':'480px'},
        '680Max': {'max':'680px'},
        '768Max': {'max': '768px'},
        '876Max': {'max': '876px'},
        '1024Max': {'max': '1024px'},
        '1216Max': {'max': '1216px'},
        '1280Max': {'max': '1280px'},
        '1480Max': {'max': '1480px'},
        '1600Max': {'max': '1600px'},
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1600px',
      }
    },
  },
  plugins: [],
}
