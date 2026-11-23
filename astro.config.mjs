import { defineConfig } from "astro/config";
import { readFileSync, writeFileSync } from "node:fs";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

const islandStyle =
  "<style>astro-island,astro-slot,astro-static-slot{display:contents}</style>";

/** @type {import("astro").AstroIntegration} */
const validatorFix = {
  name: "validator-fix",
  hooks: {
    "astro:build:done": ({ dir, pages }) => {
      for (const { pathname } of pages) {
        const file = new URL(`${pathname}index.html`, dir);
        const html = readFileSync(file, "utf-8").replace(islandStyle, "");
        writeFileSync(file, html.replace("</head>", `${islandStyle}</head>`));
      }
    },
  },
};

// https://astro.build/config
export default defineConfig({
  integrations: [react(), validatorFix],
  output: "static",
  base: "/tpw1a-semestralni-projekt/",
  vite: {
    plugins: [tailwindcss()],
  },
});
