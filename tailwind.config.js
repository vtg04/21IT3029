/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [ 
      
    ], // This will effectively disable all themes in daisyUI
  },
  plugins: [
    require('daisyui'),
  ],
}

