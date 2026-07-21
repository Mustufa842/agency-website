/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F1F4F2",
        ink: "#10161C",
        teal: {
          DEFAULT: "#0E6E5E",
          dark: "#0A4F44",
          light: "#12876F",
        },
        coral: {
          DEFAULT: "#FF5A36",
          dark: "#E2451F",
        },
        amber: "#FFC145",
        slate: {
          soft: "#6B7680",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
    },
  },
  plugins: [],
}

