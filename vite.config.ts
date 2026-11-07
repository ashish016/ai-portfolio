import { cloudflare } from '@cloudflare/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import historyApiFallback from 'vite-plugin-history-api-fallback'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    cloudflare(),
    // GitHub Pages (and any static host) serves 404 for unknown routes.
    // This serves index.html (and the 404.html fallback) so the SPA
    // renders clean URLs like /work/aurora instead of a 404 page.
    
  ],
  server: { port: 5173, strictPort: false },
})
