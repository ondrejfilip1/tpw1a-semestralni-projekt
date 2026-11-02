/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#FEF3E2",
        line: "#2A1A0E",
      },
      colors: {
        primary: "#2A1A0E",
        secondary: "#F4AE52",
        tertiary: "#D4621A",
      },
      spacing: {
        micro: "0.25rem",
        tight: "0.5rem",
        base: "1rem",
        relaxed: "1.5rem",
        wide: "2rem",
        roomy: "2.5rem",
        wider: "3rem",
        section: "6rem",
      },
      fontSize: {
        caption: ["0.875rem", "calc(1.25 / 0.875)"],
        body: ["1rem", "calc(1.5 / 1)"],
        lead: ["1.25rem", "calc(1.75 / 1.25)"],
        large: ["1.5rem", "calc(2 / 1.5)"],
        subheading: ["1.875rem", "calc(2.25 / 1.875)"],
        heading: ["2.25rem", "calc(2.5 / 2.25)"],
        "heading-lg": ["3.75rem", "1"],
        hero: "clamp(5rem, 3rem + 9vw, 11.5rem)",
      },
      minWidth: {
        "timeline-label": "7.5rem",
      },
      minHeight: {
        timeline: "8rem",
      },
      fontFamily: {
        sans: ["Khand", "serif"],
        display: ["Array", "serif"],
      },
    },
  },
  plugins: [],
};
