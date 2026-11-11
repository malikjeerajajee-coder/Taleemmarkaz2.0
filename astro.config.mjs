import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://malikjeerajajee-coder.github.io',
  base: '/Taleemmarkaz2.0',
  integrations: [sitemap()],
  vite: {
    build: {
      cssMinify: 'esbuild'
    }
  }
});