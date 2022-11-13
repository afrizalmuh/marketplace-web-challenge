/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ['Audiowide', 'sans-serif'],
        spacegrotesk: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'blue-1': '#2C6BCA',
        'yellow-1': '#EBCC24'
      },
      maxWidth: {
        desk: '1440px'
      },
      width: {
        desk: '1440px',
        cont: '1318'
      }
    },
  },
  plugins: [],
}
