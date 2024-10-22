/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        RighteousFont: ['Righteous', 'sans-serif'],
        PTSans: ['PT Sans', 'sans-serif'],
      }
    },
    // colors: {
    //   transparentWhite: 'rgba(255, 255, 255, 0.02)'
    // }
  },
  plugins: [],
}

