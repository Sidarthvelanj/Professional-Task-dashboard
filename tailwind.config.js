/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        elfonze: {
          base: '#0F0F0F',       // Dark background
          accent: '#F97316',     // Bold orange
          highlight: '#FACC15',  // Yellow highlight
          muted: '#374151',      // CTA button / border
          soft: '#D1D5DB',       // Nav text / subtle UI
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
