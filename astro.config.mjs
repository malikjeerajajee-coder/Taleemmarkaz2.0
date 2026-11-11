import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://malikjeerajajee-coder.github.io',
  base: '/Taleemmarkaz2.0',
  trailingSlash: 'always', // <-- THIS IS THE CRITICAL FIX
  integrations: [sitemap()],
  vite: { build: { cssMinify: 'esbuild' } }
});