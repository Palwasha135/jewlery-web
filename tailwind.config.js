/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // screens:{
    //   'xs':'250px',
    //   'sm':'400px',
    //   'md': '960px',
    //   'lg': '1440px',
      
    //       },
          fontFamily:{
            CormorantGaramond:'Cormorant Garamond ',
            Lato:'Lato',
          },
    extend: {

      keyframes: {
        wobble: {
          '0%': { transform: 'translateX(0%)' },
          '15%': { transform: 'translateX(-2%)' },
          '30%': { transform: 'translateX(2%)' },
          '45%': { transform: 'translateX(-2%)' },
          '60%': { transform: 'translateX(2%)' },
          '75%': { transform: 'translateX(-2%)' },
          '100%': { transform: 'translateX(0%)' },
      
        }
      },
      animation: {
        // wobble: '',
        wobble:'wobble 1s ease-in-out forwards',
   
      },

  },
  plugins: [],
}
}