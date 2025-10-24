import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { 
    sourcemap: false, 
    minify: "esbuild", 
    target: "es2018", 
    chunkSizeWarningLimit: 1200, 
    rollupOptions: { 
      output: { 
        manualChunks: { 
          vendor: ["react","react-dom"] 
        }
      }
    }
  }
})