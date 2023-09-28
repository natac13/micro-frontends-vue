import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginSingleSpa from 'vite-plugin-single-spa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginSingleSpa({
      type: 'root',
      imo: '2.4.2'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
