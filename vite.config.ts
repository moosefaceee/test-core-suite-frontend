// https://vitest.dev/config/#configuration
/// <reference types="vitest" />
import react from '@vitejs/plugin-react'
import { configDefaults, defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    exclude: [...configDefaults.exclude, 'packages/template/*'],
    environment: 'happy-dom', // js-dom but with ts
    coverage: {
      reporter: ['text', 'json', 'html']
    }
  },
  server: {
    port: 3000
  }
})
