/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9E7FFF',
        secondary: '#38bdf8',
        accent: '#f472b6',
        background: '#171717',
        surface: '#262626',
        text: '#FFFFFF',
        textSecondary: '#A3A3A3',
        border: '#2F2F2F',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      keyframes: {
        'gradient-move': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        'blob-pulse': {
          '0%, 100%': { transform: 'scale(1) translate(0, 0)', opacity: '0.7' },
          '50%': { transform: 'scale(1.2) translate(20px, -20px)', opacity: '0.9' },
        },
        'blob-pulse-alt': {
          '0%, 100%': { transform: 'scale(1.1) translate(0, 0)', opacity: '0.8' },
          '50%': { transform: 'scale(0.9) translate(-15px, 15px)', opacity: '0.6' },
        },
      },
      animation: {
        'gradient-move': 'gradient-move 10s ease infinite alternate',
        'blob-pulse': 'blob-pulse 8s ease-in-out infinite alternate',
        'blob-pulse-alt': 'blob-pulse-alt 10s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
