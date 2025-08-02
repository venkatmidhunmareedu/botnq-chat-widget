import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { resolve } from 'path'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
  libInjectCss()
    , dts({
      tsconfigPath: resolve(__dirname, "tsconfig.lib.json"),
      rollupTypes: true
    }),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es']
    }
  }
})
