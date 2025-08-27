// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://ellenmartin11.github.io",
  base: "/devportfolio", // This is the name of your repository
  vite: {
    plugins: [tailwindcss()],
  },
});
