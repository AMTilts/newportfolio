module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Using Inter font
      },
      colors: {
        // Example dark theme palette - Adjust as needed
        'primary-dark': '#1a1a1a', // Very dark grey/black
        'secondary-dark': '#2a2a2a', // Slightly lighter dark grey
        'accent': '#00ffff', // Cyan/Electric Blue accent
        'accent-hover': '#00e6e6', // Darker cyan for hover
        'text-light': '#f0f0f0', // Light grey for text
        'text-medium': '#a0a0a0', // Medium grey for secondary text
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
