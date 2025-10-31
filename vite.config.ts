import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"

// FIXME - remove proxy and configure backend CORS
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      '/employee-api': {
        target: 'http://localhost:9001',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/employee-api/, '/api/v1')
      },
      '/user-api': {
        target: 'http://localhost:9002',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/user-api/, '/api/v1')
      }
    }
  }
})