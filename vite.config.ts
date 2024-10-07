import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@ui": path.resolve(__dirname, "./src/components/ui"),
      "@domain": path.resolve(__dirname, "./src/application/domain"),
      "@repo": path.resolve(__dirname, "./src/application/repositories"),
      "@service": path.resolve(__dirname, "./src/application/services"),
      "@adapt": path.resolve(__dirname, "./src/gateways/adapters"),
      "@transform": path.resolve(__dirname, "./src/gateways/transform"),
    },
  },
})
