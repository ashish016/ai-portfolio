import { cloudflare } from '@cloudflare/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// import historyApiFallback from 'vite-plugin-history-api-fallback'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS === 'true' ? '/ai-portfolio/' : '/',
  plugins: [
    react(),
    tailwindcss(),
    cloudflare(),
    // GitHub Pages (and any static host) serves 404 for unknown routes.
    // This serves index.html (and the 404.html fallback) so the SPA
    // renders clean URLs like /work/aurora instead of a 404 page.
    // historyApiFallback({
    //   rewrites: [
    //     { from: /.*/, to: (context) => {
    //         // If the request is for a real file, let it through.
    //         // Otherwise serve index.html (which 404.html falls back to).
    //         // When 404.html exists, Vite's fallback serves it for unknown routes.
    //         return '/index.html';
    //       } },
    //     // Allow /404.html and other assets to pass through when they exist
    //   ],
    //   // Fallback HTML is served for any non-file route
    //   verbose: true,
    // }),
  ],
  server: { port: 5173, strictPort: false },
})
