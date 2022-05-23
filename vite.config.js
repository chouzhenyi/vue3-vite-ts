import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import styleImport, { VantResolve } from 'vite-plugin-style-import';

export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
      'request': path.resolve(__dirname, './src/js/utils/request.js'),
      'api': path.resolve(__dirname, './src/js/api'),
    },
  },
  server: {
    host: '0.0.0.0',
    open: true,
  },
})
