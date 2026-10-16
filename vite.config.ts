import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { nitro } from 'nitro/vite';
import { defineConfig } from 'vite';
import { locales } from './i18n/routing';

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    tailwindcss(),
    tanstackStart({
      srcDirectory: 'app',
      pages: locales.map((locale) => ({ path: `/${locale}` })),
      prerender: { enabled: true, autoStaticPathsDiscovery: false },
    }),
    nitro(),
    viteReact(),
  ],
});
