import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: false })],
    }),
    VitePWA({
      base: '/',
      registerType: 'autoUpdate',
      mode: 'development',
      includeAssets: ['/favicon.ico', 'robots.txt'],
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/116\.62\.232\.127:4000\/.*/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'project-static-cache',
              expiration: {
                maxEntries: 5,
                maxAgeSeconds: 60 * 60 * 24,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      manifest: {
        name: 'Project',
        short_name: 'project',
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        description: '',
        lang: 'zh-Hans-CN',
        start_url: '/',
        icons: [
          {
            src: 'pwa/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa/pwa-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'pwa/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  server: {
    fs: {
      allow: ['..'],
    },
    proxy: {
      '/data': {
        target: 'http://116.62.232.127:4000/data/',
        changeOrigin: true,
      },
    },
  },
  build: {
    cssCodeSplit: false,
    brotliSize: true,
  },
})
