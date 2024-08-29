// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-3d-model/',
  plugins: [react()],
  build: {
    outDir: 'docs', // Change this to your desired output directory
    
  }
});

 