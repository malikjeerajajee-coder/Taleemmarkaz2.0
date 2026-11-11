import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://malikjeerajajee-coder.github.io',
  base: '/Taleemmarkaz2.0', // This is required for GitHub Pages subfolder
  integrations: [sitemap()],
  vite: { build: { cssMinify: 'esbuild' } }
});