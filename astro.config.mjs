import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://rrana-21.github.io',
  base: '/web',
  trailingSlash: 'ignore',
  build: {
    assets: '_astro'
  },
  devToolbar: {
    enabled: false
  },
  integrations: [react(), tailwind(), sitemap()]
});