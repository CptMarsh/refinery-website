import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'

// GitHub Pages serves 404.html for any unknown path. For a single-page app we
// copy the built index.html to 404.html so unknown URLs boot the SPA and let
// React Router render the in-app 404 page.
const spaFallback = () => ({
  name: 'spa-404-fallback',
  closeBundle() {
    const dist = path.resolve(__dirname, 'dist');
    const index = path.join(dist, 'index.html');
    if (fs.existsSync(index)) {
      fs.copyFileSync(index, path.join(dist, '404.html'));
    }
  },
});

export default defineConfig({
  base: '/',
  plugins: [react(), spaFallback()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});