/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#FEF3E2",
      },
      colors: {
        primary: "#2A1A0E",
        secondary: "#F4AE52",
        tertiary: "#D4621A",
      },
      fontSize: {
        hero: "clamp(5rem, 3rem + 9vw, 11.5rem)",
      },
      fontFamily: {
        sans: ["Khand", "serif"],
        display: ["Array", "serif"],
      },
    },
  },
  plugins: [],
};
