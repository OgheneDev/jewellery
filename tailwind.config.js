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
        'custom-thing': '#F9FAFB0D',
        'enquire': '#111827',
        'discount': '#9CA3AF',
        'custom-red': '#C81E1E',
        'custom-blue': '#0D3F64',
        'custom-orange': '#DE4F46',
        'custom-ash': '#6B7280',
        'dark-gold': '#333333',
        'gold': '#B88E2F',
        'custom-red': '#F64B4B',
        'paragraph': '#161C2D',
        'dark-blue': '#1E1E1E'
      }
    },
  },
  plugins: [],
}

