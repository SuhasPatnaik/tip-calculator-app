/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "hsl(172, 67%, 45%)",
        },
        neutral: {
          100: "hsl(0, 0%, 100%)",
          200: "hsl(189, 41%, 97%)",
          300: "hsl(185, 41%, 84%)",
          400: "hsl(184, 14%, 56%)",
          500: "hsl(186, 14%, 43%)",
          600: "hsl(183, 100%, 15%)",
        },
      },
    },
    fontFamily: {
      spaceMono: ["Space Mono", "monospace"],
    },
    fontSize: {
      xsm: "0.8125rem",
      sm: "1rem",
      base: "1.5rem",
    },
  },
  plugins: [],
};
