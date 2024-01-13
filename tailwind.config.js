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
        bgFooter: "var(--color-bgFooter)",
      },
    },
  },
  plugins: [],
};
