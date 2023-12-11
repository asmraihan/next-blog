/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '300px',
        sm: '600px',
        md: '900px',
        lg: '1200px',
        "2xl": '1400px',
      }
    },
  },
  plugins: [],
}
