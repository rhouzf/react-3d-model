// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs', // Change this to your desired output directory
    rollupOptions: {
      input: {
        main: 'index.html', // Ensure your main entry point is correctly configured
      }
    }
  }
});
