/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4361ee',
        'primary-dark': '#3a56d4',
        'gray-700': '#2d3748',
        'gray-500': '#718096',
        'gray-400': '#a0aec0',
        'gray-200': '#e2e8f0',
        'gray-100': '#f7fafc',
        'gray-50': '#f5f7fb',
        'green-500': '#38a169',
        'green-100': '#c6f6d5',
        'green-800': '#22543d',
        'red-100': '#fed7d7',
        'red-800': '#742a2a',
        'orange-100': '#feebcb',
        'orange-800': '#744210',
      }
    },
  },
  plugins: [],
}