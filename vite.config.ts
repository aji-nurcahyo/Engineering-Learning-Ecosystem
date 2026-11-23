import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function normalizeBasePath(value?: string): string {
  const trimmed = value?.trim();
  if (!trimmed) return './';
  if (trimmed === '.' || trimmed === './') return './';
  return trimmed.endsWith('/') ? trimmed : `${trimmed}/`;
}

const base = normalizeBasePath(process.env.VITE_BASE_PATH);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
  build: {
    target: 'es2022',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});

