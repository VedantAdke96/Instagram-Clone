/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./views/**/*.ejs",
    "./*.{html,js,ejs}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'segoe': ["Segoe UI",'Roboto','Helvetica']
    }
  },
  plugins: [],
}

