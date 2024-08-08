/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm':'240px',
        'md':'640px',
        'lg':'830px',
        'xl':'1080px',
        '2xl':'1302px'
      }
      ,
      colors:{
        'primary': '#56d1c1',
        'secondary': '#F9FAFB',
      }
    },
  },
  plugins: [],
}

