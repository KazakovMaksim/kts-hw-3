import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      assets: '/src/assets',
      constants: '/src/constants',
      styles: '/src/styles',
      types: '/src/types',
      utils: '/src/utils',
      api: '/src/api',
      store: '/src/store',
      hooks: '/src/hooks',
      pages: '/src/pages',
      config: '/src/config',
    },
  },
});
