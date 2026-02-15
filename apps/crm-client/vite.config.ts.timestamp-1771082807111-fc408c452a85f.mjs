// vite.config.ts
import { defineConfig } from "file:///C:/Users/Usuario/.gemini/antigravity/scratch/monorepo-activa-sl/node_modules/.pnpm/vite@5.4.21_@types+node@25.0.10/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Usuario/.gemini/antigravity/scratch/monorepo-activa-sl/node_modules/.pnpm/@vitejs+plugin-react@4.7.0_vite@5.4.21/node_modules/@vitejs/plugin-react/dist/index.js";
import { VitePWA } from "file:///C:/Users/Usuario/.gemini/antigravity/scratch/monorepo-activa-sl/node_modules/.pnpm/vite-plugin-pwa@0.19.8_vite@5.4.21_workbox-build@7.4.0_workbox-window@7.4.0/node_modules/vite-plugin-pwa/dist/index.js";
import path from "path";
import { fileURLToPath } from "url";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Usuario/.gemini/antigravity/scratch/monorepo-activa-sl/apps/crm-client/vite.config.ts";
var __filename = fileURLToPath(__vite_injected_original_import_meta_url);
var __dirname = path.dirname(__filename);
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        id: "/",
        name: "ACTIVA OS | Enterprise Intelligence",
        short_name: "ACTIVA OS",
        description: "Sistema Operativo Empresarial Basado en Evidencia",
        theme_color: "#050505",
        background_color: "#050505",
        display: "standalone",
        orientation: "portrait",
        categories: ["business", "productivity", "enterprise"],
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ],
        screenshots: [
          {
            src: "screenshot-clinic-1.jpg",
            sizes: "1170x2532",
            type: "image/jpg",
            form_factor: "narrow",
            label: "Dashboard Estrat\xE9gico M\xF3vil"
          },
          {
            src: "screenshot-clinic-4.jpg",
            sizes: "2880x1800",
            type: "image/jpg",
            form_factor: "wide",
            label: "Centro de Mando Escritorio"
          }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        runtimeCaching: [{
          urlPattern: /^https:\/\/firestore\.googleapis\.com\/.*/i,
          handler: "NetworkFirst",
          options: {
            cacheName: "activa-api-cache",
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 60 * 60 * 24
              // 24 hours
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@monorepo/ui-system": path.resolve(__dirname, "../../packages/ui-system/src/index.ts"),
      "@monorepo/engine-auth": path.resolve(__dirname, "../../packages/engine-auth/src/index.ts")
    },
    dedupe: ["react", "react-dom", "@tanstack/react-query", "react-router-dom"]
  },
  optimizeDeps: {
    include: ["react", "react-dom", "@tanstack/react-query"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc3VhcmlvXFxcXC5nZW1pbmlcXFxcYW50aWdyYXZpdHlcXFxcc2NyYXRjaFxcXFxtb25vcmVwby1hY3RpdmEtc2xcXFxcYXBwc1xcXFxjcm0tY2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc3VhcmlvXFxcXC5nZW1pbmlcXFxcYW50aWdyYXZpdHlcXFxcc2NyYXRjaFxcXFxtb25vcmVwby1hY3RpdmEtc2xcXFxcYXBwc1xcXFxjcm0tY2xpZW50XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9Vc3VhcmlvLy5nZW1pbmkvYW50aWdyYXZpdHkvc2NyYXRjaC9tb25vcmVwby1hY3RpdmEtc2wvYXBwcy9jcm0tY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xuXG4vLyBFU00gU2hpbSBmb3IgX19kaXJuYW1lXG5jb25zdCBfX2ZpbGVuYW1lID0gZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpO1xuY29uc3QgX19kaXJuYW1lID0gcGF0aC5kaXJuYW1lKF9fZmlsZW5hbWUpO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgVml0ZVBXQSh7XG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcbiAgICAgIGluY2x1ZGVBc3NldHM6IFsnZmF2aWNvbi5pY28nLCAnYXBwbGUtdG91Y2gtaWNvbi5wbmcnLCAnbWFza2VkLWljb24uc3ZnJ10sXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBpZDogJy8nLFxuICAgICAgICBuYW1lOiAnQUNUSVZBIE9TIHwgRW50ZXJwcmlzZSBJbnRlbGxpZ2VuY2UnLFxuICAgICAgICBzaG9ydF9uYW1lOiAnQUNUSVZBIE9TJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdTaXN0ZW1hIE9wZXJhdGl2byBFbXByZXNhcmlhbCBCYXNhZG8gZW4gRXZpZGVuY2lhJyxcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjMDUwNTA1JyxcbiAgICAgICAgYmFja2dyb3VuZF9jb2xvcjogJyMwNTA1MDUnLFxuICAgICAgICBkaXNwbGF5OiAnc3RhbmRhbG9uZScsXG4gICAgICAgIG9yaWVudGF0aW9uOiAncG9ydHJhaXQnLFxuICAgICAgICBjYXRlZ29yaWVzOiBbJ2J1c2luZXNzJywgJ3Byb2R1Y3Rpdml0eScsICdlbnRlcnByaXNlJ10sXG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAncHdhLTE5MngxOTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTkyeDE5MicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAncHdhLTUxMng1MTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHNjcmVlbnNob3RzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnc2NyZWVuc2hvdC1jbGluaWMtMS5qcGcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxMTcweDI1MzInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL2pwZycsXG4gICAgICAgICAgICBmb3JtX2ZhY3RvcjogJ25hcnJvdycsXG4gICAgICAgICAgICBsYWJlbDogJ0Rhc2hib2FyZCBFc3RyYXRcdTAwRTlnaWNvIE1cdTAwRjN2aWwnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnc2NyZWVuc2hvdC1jbGluaWMtNC5qcGcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcyODgweDE4MDAnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL2pwZycsXG4gICAgICAgICAgICBmb3JtX2ZhY3RvcjogJ3dpZGUnLFxuICAgICAgICAgICAgbGFiZWw6ICdDZW50cm8gZGUgTWFuZG8gRXNjcml0b3JpbycsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB3b3JrYm94OiB7XG4gICAgICAgIGdsb2JQYXR0ZXJuczogWycqKi8qLntqcyxjc3MsaHRtbCxpY28scG5nLHN2Z30nXSxcbiAgICAgICAgcnVudGltZUNhY2hpbmc6IFt7XG4gICAgICAgICAgdXJsUGF0dGVybjogL15odHRwczpcXC9cXC9maXJlc3RvcmVcXC5nb29nbGVhcGlzXFwuY29tXFwvLiovaSxcbiAgICAgICAgICBoYW5kbGVyOiAnTmV0d29ya0ZpcnN0JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBjYWNoZU5hbWU6ICdhY3RpdmEtYXBpLWNhY2hlJyxcbiAgICAgICAgICAgIGV4cGlyYXRpb246IHtcbiAgICAgICAgICAgICAgbWF4RW50cmllczogMTAwLFxuICAgICAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiA2MCAqIDYwICogMjQgLy8gMjQgaG91cnNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYWNoZWFibGVSZXNwb25zZToge1xuICAgICAgICAgICAgICBzdGF0dXNlczogWzAsIDIwMF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgICB9XG4gICAgfSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcbiAgICAgICdAbW9ub3JlcG8vdWktc3lzdGVtJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uL3BhY2thZ2VzL3VpLXN5c3RlbS9zcmMvaW5kZXgudHMnKSxcbiAgICAgICdAbW9ub3JlcG8vZW5naW5lLWF1dGgnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vcGFja2FnZXMvZW5naW5lLWF1dGgvc3JjL2luZGV4LnRzJyksXG4gICAgfSxcbiAgICBkZWR1cGU6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ0B0YW5zdGFjay9yZWFjdC1xdWVyeScsICdyZWFjdC1yb3V0ZXItZG9tJ10sXG4gIH0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGluY2x1ZGU6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSddLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWliLFNBQVMsb0JBQW9CO0FBQzljLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMscUJBQXFCO0FBSnlQLElBQU0sMkNBQTJDO0FBT3hVLElBQU0sYUFBYSxjQUFjLHdDQUFlO0FBQ2hELElBQU0sWUFBWSxLQUFLLFFBQVEsVUFBVTtBQUd6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxlQUFlLENBQUMsZUFBZSx3QkFBd0IsaUJBQWlCO0FBQUEsTUFDeEUsVUFBVTtBQUFBLFFBQ1IsSUFBSTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBLFFBQ2Isa0JBQWtCO0FBQUEsUUFDbEIsU0FBUztBQUFBLFFBQ1QsYUFBYTtBQUFBLFFBQ2IsWUFBWSxDQUFDLFlBQVksZ0JBQWdCLFlBQVk7QUFBQSxRQUNyRCxPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFFBQ0Y7QUFBQSxRQUNBLGFBQWE7QUFBQSxVQUNYO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixhQUFhO0FBQUEsWUFDYixPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLGFBQWE7QUFBQSxZQUNiLE9BQU87QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLGNBQWMsQ0FBQyxnQ0FBZ0M7QUFBQSxRQUMvQyxnQkFBZ0IsQ0FBQztBQUFBLFVBQ2YsWUFBWTtBQUFBLFVBQ1osU0FBUztBQUFBLFVBQ1QsU0FBUztBQUFBLFlBQ1AsV0FBVztBQUFBLFlBQ1gsWUFBWTtBQUFBLGNBQ1YsWUFBWTtBQUFBLGNBQ1osZUFBZSxLQUFLLEtBQUs7QUFBQTtBQUFBLFlBQzNCO0FBQUEsWUFDQSxtQkFBbUI7QUFBQSxjQUNqQixVQUFVLENBQUMsR0FBRyxHQUFHO0FBQUEsWUFDbkI7QUFBQSxVQUNGO0FBQUEsUUFDRixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLFdBQVcsT0FBTztBQUFBLE1BQ3BDLHVCQUF1QixLQUFLLFFBQVEsV0FBVyx1Q0FBdUM7QUFBQSxNQUN0Rix5QkFBeUIsS0FBSyxRQUFRLFdBQVcseUNBQXlDO0FBQUEsSUFDNUY7QUFBQSxJQUNBLFFBQVEsQ0FBQyxTQUFTLGFBQWEseUJBQXlCLGtCQUFrQjtBQUFBLEVBQzVFO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsU0FBUyxhQUFhLHVCQUF1QjtBQUFBLEVBQ3pEO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
