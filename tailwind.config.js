/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily:{
        anderson: 'Anderson, Black',
        EngraversGothic: 'EngraversGothicBT, Normal',
        Sohne: 'Sohne, Normal'
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
        '1|3': '33.3333333333px',
      },
      height: {
        '2px': '2px',
        '70': '4rem',
        '60vh':'60vh',
        '80vh':'80vh',
        '90vh':'90vh',
        '1|3': '33.3333333333px',
      },
      minHeight: {
        'min': '100vh',
        '90': '90vh',
        '80': '80vh',
        '70': '70vh',
        '60': '60vh',
        '50': '50vh',
        '600vh':'600vh',
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
        neonBlue: 'rgba(98, 110, 255,0.3)',

        imageProject: 'rgba(211, 204, 202,0.2)',
        imageProjectDark:'rgba(30,30,30,0.8)',
        textProject: '#9c9c9e',
        textProjectDark: '#525356',

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
      },
      animation:{
        'arrow-bounce': 'arrow-bounce 1.5s infinite',
        'blob-1-anim': 'blob-1-anim 3s cubic-bezier(0.77, 0, 0.175, 1) infinite',
        'blob-2-anim': 'blob-2-anim 3s cubic-bezier(0.77, 0, 0.175, 1) infinite',
        'scrolly': 'scrolly 3s cubic-bezier(0.77, 0, 0.175, 1) forwards infinite',
      },
      keyframes:{
        'arrow-bounce': {
          '0%, 100%': { transform: 'translateY(-50%)' },
          '50%': { transform: 'translateY(0)' },
        },
        'blob-1-anim': {
          '0%': { transform: 'translateX(-50%) translateY(0)' },
          '14%': { transform: 'translateX(-50%) translateY(-8px)' },
          '24%': { transform:'translateX(-50%) translateY(0)' },
          '100%': { transform: 'translateX(-50%) translateY(0)' },
        },
        'blob-2-anim': {
          '0%': { transform: 'scale(1) translate(-50%, 10px)' },
          '30%': { transform: 'scale(1) translate(-50%, 10px)' },
          '70%': { transform: 'scale(1) translate(-50%, 10px)' },
          '95%': { transform: 'scale(1) translate(-50%, 26px)' },
          '100%': { transform: 'scale(1) translate(-50%, 10px)' },
        },
        "scrolly": {
          '0%': {  transform: 'translate3d(0, -150%, 0) rotateX(90deg) scale(0.5) skewX(3deg)' },
          '30%': {  transform: 'translate3d(0, 0, 0) rotateX(0deg) scale(1) skewX(0deg)' },
          '70%': {  transform: 'translate3d(0, 0, 0) rotateX(0deg) scale(1) skewX(0deg)' },
          '95%': {  transform: 'translate3d(0, 50%, 0) rotateX(-90deg) scale(0.5) skewX(-3deg)' },
          '100%': {  transform: 'translate3d(0, 50%, 0) rotateX(-90deg) scale(0.5) skewX(-3deg)' },
        }
      },
      boxShadow: {
        'ShadowImages': '10px 10px 20px -10px rgba(0,0,0,0.23)',
        'ShadowImagesDark': '8px 12px 10px -4px rgba(255,255,255,0.03)',
      }
    }, 
  },
  plugins: [],
}
