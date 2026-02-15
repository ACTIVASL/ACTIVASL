/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/*/src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'], // Added Outfit for Titanium
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#020617', // Slate-950 (Deep Space)
          primary: '#6366f1', // Indigo-500 (Executive Trust)
          secondary: '#94a3b8', // Slate-400 (Titanium Gray)
          accent: '#22d3ee', // Cyan-400 (Energy Data)
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'atomic-spin': 'atomic-spin 10s linear infinite',
        'atomic-spin-reverse': 'atomic-spin-reverse 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'atomic-spin': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'atomic-spin-reverse': {
          'from': { transform: 'rotate(360deg)' },
          'to': { transform: 'rotate(0deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      },
      boxShadow: {
        'glow': '0 0 20px -5px rgba(236, 72, 153, 0.4)',
        'glow-lg': '0 0 40px -10px rgba(236, 72, 153, 0.5)',
        'titanium-glow': '0 0 20px rgba(34, 211, 238, 0.2)', // Cyan glow
        '3d': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
