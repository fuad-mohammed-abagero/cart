/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "red-hat-text": ["Red Hat Text", "sans-serif"],
      },
      screens: {
        sm: "640px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px",
        xm: "900px", // Large screens
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
