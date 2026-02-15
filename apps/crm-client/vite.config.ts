import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM Shim for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        id: '/',
        name: 'ACTIVA OS | Enterprise Intelligence',
        short_name: 'ACTIVA OS',
        description: 'Sistema Operativo Empresarial Basado en Evidencia',
        theme_color: '#050505',
        background_color: '#050505',
        display: 'standalone',
        orientation: 'portrait',
        categories: ['business', 'productivity', 'enterprise'],
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
        screenshots: [
          {
            src: 'screenshot-clinic-1.jpg',
            sizes: '1170x2532',
            type: 'image/jpg',
            form_factor: 'narrow',
            label: 'Dashboard Estratégico Móvil',
          },
          {
            src: 'screenshot-clinic-4.jpg',
            sizes: '2880x1800',
            type: 'image/jpg',
            form_factor: 'wide',
            label: 'Centro de Mando Escritorio',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [{
          urlPattern: /^https:\/\/firestore\.googleapis\.com\/.*/i,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'activa-api-cache',
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 60 * 60 * 24 // 24 hours
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }]
      }
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@monorepo/ui-system': path.resolve(__dirname, '../../packages/ui-system/src/index.ts'),
      '@monorepo/engine-auth': path.resolve(__dirname, '../../packages/engine-auth/src/index.ts'),
    },
    dedupe: ['react', 'react-dom', '@tanstack/react-query', 'react-router-dom'],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@tanstack/react-query'],
  },
});
