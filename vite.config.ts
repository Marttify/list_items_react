/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/list_items_react/',
  plugins: [react()],
  test: {
    environment: 'happy-dom'
  }
})
