/**  @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#00d09c',
        'primary-dark': '#00b386',
        'secondary': '#44475b',
        'heading': '#2a2f4e',
        'light': '#f0f8f6',
      },
    },
  },
  plugins: [],
};
 