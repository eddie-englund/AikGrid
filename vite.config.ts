import { fileURLToPath, URL } from 'node:url';
import path from 'node:path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import typescript2 from 'rollup-plugin-typescript2';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: './dist',
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'aikgrid',
      fileName: fmt => `aik-grid.${fmt}.js`,
      formats: ['cjs', 'es', 'iife', 'umd'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        sourcemap: false,
        globals: { vue: 'Vue' },
      },
    },
  },
});
