import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import react from '@astrojs/react';

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://ciok-espresso.vercel.app',
  integrations: [tailwind(), react(), sitemap()],
});