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
        name: "Activa Musicoterapia Cl\xEDnica",
        short_name: "ActivaCRM",
        description: "Sistema Operativo Cl\xEDnico Soberano",
        theme_color: "#EC008C",
        background_color: "#ffffff",
        display: "standalone",
        orientation: "portrait",
        categories: ["medical", "productivity", "health"],
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
            label: "Dashboard Cl\xEDnico M\xF3vil"
          },
          {
            src: "screenshot-clinic-4.jpg",
            sizes: "2880x1800",
            type: "image/jpg",
            form_factor: "wide",
            label: "Gesti\xF3n de Pacientes Escritorio"
          }
        ],
        shortcuts: [
          {
            name: "Nuevo Paciente",
            short_name: "Paciente",
            description: "Registrar una nueva ficha cl\xEDnica",
            url: "/patients",
            icons: [{ src: "pwa-192x192.png", sizes: "192x192" }]
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@monorepo/ui-system": path.resolve(__dirname, "../../packages/ui-system/src/index.ts")
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc3VhcmlvXFxcXC5nZW1pbmlcXFxcYW50aWdyYXZpdHlcXFxcc2NyYXRjaFxcXFxtb25vcmVwby1hY3RpdmEtc2xcXFxcYXBwc1xcXFxjcm0tY2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc3VhcmlvXFxcXC5nZW1pbmlcXFxcYW50aWdyYXZpdHlcXFxcc2NyYXRjaFxcXFxtb25vcmVwby1hY3RpdmEtc2xcXFxcYXBwc1xcXFxjcm0tY2xpZW50XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9Vc3VhcmlvLy5nZW1pbmkvYW50aWdyYXZpdHkvc2NyYXRjaC9tb25vcmVwby1hY3RpdmEtc2wvYXBwcy9jcm0tY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xuXG4vLyBFU00gU2hpbSBmb3IgX19kaXJuYW1lXG5jb25zdCBfX2ZpbGVuYW1lID0gZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpO1xuY29uc3QgX19kaXJuYW1lID0gcGF0aC5kaXJuYW1lKF9fZmlsZW5hbWUpO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgVml0ZVBXQSh7XG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcbiAgICAgIGluY2x1ZGVBc3NldHM6IFsnZmF2aWNvbi5pY28nLCAnYXBwbGUtdG91Y2gtaWNvbi5wbmcnLCAnbWFza2VkLWljb24uc3ZnJ10sXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBpZDogJy8nLFxuICAgICAgICBuYW1lOiAnQWN0aXZhIE11c2ljb3RlcmFwaWEgQ2xcdTAwRURuaWNhJyxcbiAgICAgICAgc2hvcnRfbmFtZTogJ0FjdGl2YUNSTScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU2lzdGVtYSBPcGVyYXRpdm8gQ2xcdTAwRURuaWNvIFNvYmVyYW5vJyxcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjRUMwMDhDJyxcbiAgICAgICAgYmFja2dyb3VuZF9jb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICBkaXNwbGF5OiAnc3RhbmRhbG9uZScsXG4gICAgICAgIG9yaWVudGF0aW9uOiAncG9ydHJhaXQnLFxuICAgICAgICBjYXRlZ29yaWVzOiBbJ21lZGljYWwnLCAncHJvZHVjdGl2aXR5JywgJ2hlYWx0aCddLFxuICAgICAgICBpY29uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJ3B3YS0xOTJ4MTkyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55IG1hc2thYmxlJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJ3B3YS01MTJ4NTEyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55IG1hc2thYmxlJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBzY3JlZW5zaG90czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJ3NjcmVlbnNob3QtY2xpbmljLTEuanBnJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTE3MHgyNTMyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9qcGcnLFxuICAgICAgICAgICAgZm9ybV9mYWN0b3I6ICduYXJyb3cnLFxuICAgICAgICAgICAgbGFiZWw6ICdEYXNoYm9hcmQgQ2xcdTAwRURuaWNvIE1cdTAwRjN2aWwnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnc2NyZWVuc2hvdC1jbGluaWMtNC5qcGcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcyODgweDE4MDAnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL2pwZycsXG4gICAgICAgICAgICBmb3JtX2ZhY3RvcjogJ3dpZGUnLFxuICAgICAgICAgICAgbGFiZWw6ICdHZXN0aVx1MDBGM24gZGUgUGFjaWVudGVzIEVzY3JpdG9yaW8nLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHNob3J0Y3V0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdOdWV2byBQYWNpZW50ZScsXG4gICAgICAgICAgICBzaG9ydF9uYW1lOiAnUGFjaWVudGUnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdSZWdpc3RyYXIgdW5hIG51ZXZhIGZpY2hhIGNsXHUwMEVEbmljYScsXG4gICAgICAgICAgICB1cmw6ICcvcGF0aWVudHMnLFxuICAgICAgICAgICAgaWNvbnM6IFt7IHNyYzogJ3B3YS0xOTJ4MTkyLnBuZycsIHNpemVzOiAnMTkyeDE5MicgfV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcbiAgICAgICdAbW9ub3JlcG8vdWktc3lzdGVtJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uL3BhY2thZ2VzL3VpLXN5c3RlbS9zcmMvaW5kZXgudHMnKSxcbiAgICB9LFxuICAgIGRlZHVwZTogWydyZWFjdCcsICdyZWFjdC1kb20nLCAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JywgJ3JlYWN0LXJvdXRlci1kb20nXSxcbiAgfSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgaW5jbHVkZTogWydyZWFjdCcsICdyZWFjdC1kb20nLCAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5J10sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaWIsU0FBUyxvQkFBb0I7QUFDOWMsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTtBQUN4QixPQUFPLFVBQVU7QUFDakIsU0FBUyxxQkFBcUI7QUFKeVAsSUFBTSwyQ0FBMkM7QUFPeFUsSUFBTSxhQUFhLGNBQWMsd0NBQWU7QUFDaEQsSUFBTSxZQUFZLEtBQUssUUFBUSxVQUFVO0FBR3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLGVBQWUsQ0FBQyxlQUFlLHdCQUF3QixpQkFBaUI7QUFBQSxNQUN4RSxVQUFVO0FBQUEsUUFDUixJQUFJO0FBQUEsUUFDSixNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsUUFDWixhQUFhO0FBQUEsUUFDYixhQUFhO0FBQUEsUUFDYixrQkFBa0I7QUFBQSxRQUNsQixTQUFTO0FBQUEsUUFDVCxhQUFhO0FBQUEsUUFDYixZQUFZLENBQUMsV0FBVyxnQkFBZ0IsUUFBUTtBQUFBLFFBQ2hELE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsUUFDRjtBQUFBLFFBQ0EsYUFBYTtBQUFBLFVBQ1g7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLGFBQWE7QUFBQSxZQUNiLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sYUFBYTtBQUFBLFlBQ2IsT0FBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FBQUEsUUFDQSxXQUFXO0FBQUEsVUFDVDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sWUFBWTtBQUFBLFlBQ1osYUFBYTtBQUFBLFlBQ2IsS0FBSztBQUFBLFlBQ0wsT0FBTyxDQUFDLEVBQUUsS0FBSyxtQkFBbUIsT0FBTyxVQUFVLENBQUM7QUFBQSxVQUN0RDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsV0FBVyxPQUFPO0FBQUEsTUFDcEMsdUJBQXVCLEtBQUssUUFBUSxXQUFXLHVDQUF1QztBQUFBLElBQ3hGO0FBQUEsSUFDQSxRQUFRLENBQUMsU0FBUyxhQUFhLHlCQUF5QixrQkFBa0I7QUFBQSxFQUM1RTtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLFNBQVMsYUFBYSx1QkFBdUI7QUFBQSxFQUN6RDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
