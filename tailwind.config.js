/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#BABDBF',
        'secondary': '#3F7373',
        'tertiary': '#BF754B',
        'quaternary': '#A64826',
        'quinary': '#732B1A',
      },
    },
    plugins: [],
  }
}

