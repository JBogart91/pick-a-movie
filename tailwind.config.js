/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'jb-icon': 'url("/src/assets/cheesesteaklogo.png")',
      },
    },
  },
  plugins: [],
};
