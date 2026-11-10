import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://taleemmarkaz.com',
  integrations: [sitemap()],
  vite: {
    build: {
      cssMinify: 'esbuild'
    }
  }
});