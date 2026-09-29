import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // GitHub Pages: /artechel-website/
  // Custom domain (artechel.pl): /
  base: mode === 'production' ? '/artechel-website/' : '/',
}))
