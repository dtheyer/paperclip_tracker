import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/manifest.json',
          dest: '.',
        },
        {
          src: 'src/content_scripts/spy.js',
          dest: '.',
        },
        {
          src: 'src/content_scripts/writer.js',
          dest: '.',
        },
      ],
    }),
  ],
  build: {
    minify: false,
    outDir: 'build',
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});

