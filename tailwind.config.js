/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        grey:{
          100: '#F1F1F1',
          200: '#F5F5F5',
          300: '#D9D9D9',
          400: '#E4E7E9',
          700:'#6F6F6F',
          800:'#969696',
        
        },
        colorPrimary: "#015907",
       
       
      },
    },
  },
  plugins: [],
})