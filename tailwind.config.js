/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'personal-blue':'#363467',
        'personal-blue-200':'#8B8AE1',
        'personal-black':'#2E2D4E',
        'personal-black-200':'#363653',
        'personal-white':'#f0f0f0',
        'personal-gray':'#C1BDBD',
      },
    },
  },
  plugins: [],
}

