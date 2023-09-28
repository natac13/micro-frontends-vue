import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginSingleSpa from 'vite-plugin-single-spa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vue(),
    vue(),
    vitePluginSingleSpa({
      type: 'mife',
      serverPort: 5001,
      spaEntryPoint: 'src/main.ts'
    })
  ],
  build: {
    rollupOptions: {
      preserveEntrySignatures: true,
      input: 'src/main.ts',
      output: {
        format: 'esm',
        entryFileNames: 'src/[name].js'
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
