import { resolve } from 'node:path';
import minifyHTML from '@lit-labs/rollup-plugin-minify-html-literals';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
      },
      plugins: [minifyHTML()],
    },
  },
});
