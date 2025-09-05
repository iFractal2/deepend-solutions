// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175,    // force dev build to use port 5175
    strictPort: true // fail if 5175 is already taken instead of picking another
  }
})
