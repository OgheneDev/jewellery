/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-color': '#374151',
        'background': '#FAFAFA',
        'hero-bg': '#1C2333',
        'card-bg': '#1F2937',
        'custom-pink': '#F7C59F',
        'custom-brown': '#4F0F0F',
        'custom-thing': '#F9FAFB0D'
      }
    },
  },
  plugins: [],
}

