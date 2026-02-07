// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://jonnykcode.me',
  output: 'static',
  adapter: cloudflare(),
  integrations: [
    tailwind(),
    react(),
    keystatic(),
    sitemap(),
    mdx()
  ],
  vite: {
    resolve: {
      alias: {
        ...(process.env.NODE_ENV === 'production'
          ? { 'react-dom/server': 'react-dom/server.edge' }
          : {}
        )
      }
    }
  }
});
