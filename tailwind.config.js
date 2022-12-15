/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        backdrop: '#121212',
        primary: '#1db954',
        active: '#282828',
        link: '#b3b3b3',
        footer: '#181818',
        secondary: '#1ed760',
        player: '#1BB954',
      },
      boxShadow: {
        custom: '0px 11px 27px 1px rgba(0,0,0,0.75)',
        spotify: '0 2px 4px 0 rgb(0,0,0 / 20%)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
