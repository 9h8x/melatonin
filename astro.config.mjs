// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://9h8x.github.io",
  base: "melatonin",
  integrations: [tailwind({ applyBaseStyles: false }), react()],
});
