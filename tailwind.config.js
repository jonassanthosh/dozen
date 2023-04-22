/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    require('@tailwindcss/forms'),
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: '300px auto'
      },
      gridTemplateRows: {
        header: '90px auto'
      }
    },
  },
  plugins: [],
}
