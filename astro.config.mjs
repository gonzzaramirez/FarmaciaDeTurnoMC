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
      // AGREGA ESTO: Forzar la inclusión de tu home
      customPages: ['https://farmaciadeturnomc.vercel.app/'],
    }),
  ],
  site: 'https://farmaciadeturnomc.vercel.app',
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