/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1f2937", // Dark gray
        secondary: "#4b5563", // Light gray
        accent: "#10b981", // Green accent
      },
    },
  },
  darkMode: "class", // Enable dark mode
  plugins: [],
};

