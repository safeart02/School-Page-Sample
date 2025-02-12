import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 2700,
    proxy: {
      '/api': {
        target: 'http://localhost:4020',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
    }
  }}
})
