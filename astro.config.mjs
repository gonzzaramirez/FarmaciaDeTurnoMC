// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [react(), sitemap()],
  site: 'https://farmaciasdeturnomc.vercel.app',
  trailingSlash: 'never',

  build: {
    inlineStylesheets: 'auto',
  },

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['@radix-ui/*'],
    },
  },

  adapter: vercel(),
});