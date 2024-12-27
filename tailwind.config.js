/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        'pulse-ring': 'pulseRing 3s infinite ease-in-out',
      },
      keyframes: {
        pulseRing: {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.1)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
      borderRadius: {
        'custom-blob': '47% 53% 53% 47% / 65% 46% 54% 35%',
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
