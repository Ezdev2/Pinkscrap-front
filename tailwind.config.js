/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        primaryScale: "var(--color-primaryScale)",
        black: "var(--color-black)",
        blackScale: "var(--color-blackScale)",
        bgBlack: "var(--color-bgBlack)",
        // gray: "var(--color-gray)",
        // hr: "var(--color-hr)",
        // stroke: "var(--color-stroke)",
        // red: "var(--color-red)",
        // textGray: "var(--color-text-gray)",
        // green: "var(--color-green)",
        // linear: "var(--color-linear)",
      },
    },
  },
  plugins: [],
};
