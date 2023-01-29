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
        primary: {
          high: "#283E55",
          low: "#E0E5EC",
        },
        secondary: {
          high: "#9B9B9B",
          low: "#F2F2F2",
        },
        active: "#EA8146",
        priority: {
          high: "#FF4842",
          medium: "#B78103",
          low: "#229A16",
        },
        files: {
          pdf: "#EDC8C8",
          "pdf-text": "#DE231B",
          word: "#CEE2F3",
          "word-text": "#134CB1",
          excel: "#CBE8DD",
          "excel-text": "#185C37",
          powerpoint: "#F4DED8",
          "powerpoint-text": "#BB3417",
        },
        status: {
          pending: "#283E55",
          approved: "#1EBF8F",
          "approved-bg": "#D4F3EA",
          declined: "#F64E1F",
          "declined-bg": "#FDDFD7",
        },
        "bright-red": "#F64E1F",
      },
    },
  },
  plugins: [],
};
