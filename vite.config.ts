import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import reactRefresh from '@vitejs/plugin-react-refresh'

const vitePWA = VitePWA({ 
  includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
  manifest: {
    name: 'Vite App',
    short_name: 'Vite App',
    description: 'Vite App',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      }
    ]
  }
})

export default defineConfig({
  plugins: [
    vitePWA,
    reactRefresh(),
  ]
})
