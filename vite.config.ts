import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // Serving from https://artjac19.github.io/glcwsa for now.
  // When glcwsa.org is live: change base to '/' and add a CNAME file (see README).
  base: '/glcwsa/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
