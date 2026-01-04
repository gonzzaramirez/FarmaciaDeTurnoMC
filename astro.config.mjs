// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server',
  integrations: [
    react(),
    sitemap({
      // Forzar la inclusión de tu home con el dominio principal
      customPages: ['https://farmaciadeturnomc.site/'],
    }),
  ],
  site: 'https://farmaciadeturnomc.site',
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