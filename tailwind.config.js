/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./App.{js,jsx,ts,tsx}",
      "./app/**/*.{js,jsx,ts,tsx}", 
      "./components/**/*.{js,jsx,ts,tsx}", 
      "./app/(tabs)/meditate.tsx",
  ],
  theme: {
      extend: {
          fontFamily: {
              quick: ["Quicksand-Regular", "sans-serif"],
              kanit:["Kanit-SemiBold","sans-serif"]
          },
      },
  },
  plugins: [],
};