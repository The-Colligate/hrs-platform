/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#283E55",
        light: "#F2F2F2",
        active: "#EA8146",
        priority: {
          high: "#FF4842",
          medium: "#B78103",
          low: "#229A16",
        },
      },
    },
  },
  plugins: [],
};
