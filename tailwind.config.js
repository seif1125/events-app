module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
       colors: {
        primary: '#c59534',
        secondary: '#ffffff',
        accent:'#1f2937'
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
