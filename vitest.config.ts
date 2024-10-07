import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ['./vitest.setup.ts']
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@ui": path.resolve(__dirname, "./src/components/ui"),
      "@domain": path.resolve(__dirname, "./src/application/domain"),
      "@repo": path.resolve(__dirname, "./src/application/repositories"),
      "@service": path.resolve(__dirname, "./src/application/services"),
      "@adapt": path.resolve(__dirname, "./src/gateways/adapters"),
      "@transform": path.resolve(__dirname, "./src/gateways/transform"),
    }
  }
})