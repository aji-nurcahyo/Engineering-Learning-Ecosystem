import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function normalizeBasePath(value?: string): string {
  const trimmed = value?.trim();
  if (!trimmed) return './';
  if (trimmed === '.' || trimmed === './') return './';
  return trimmed.endsWith('/') ? trimmed : `${trimmed}/`;
}

function resolveBase(): string {
  if (process.env.VITE_BASE_PATH) {
    return normalizeBasePath(process.env.VITE_BASE_PATH);
  }
  try {
    const distIndex = path.resolve(__dirname, 'dist/index.html');
    if (fs.existsSync(distIndex)) {
      const html = fs.readFileSync(distIndex, 'utf8');
      if (html.includes('/Engineering-Learning-Ecosystem/')) {
        return '/Engineering-Learning-Ecosystem/';
      }
    }
  } catch {
    // fallback
  }
  return './';
}

const base = resolveBase();

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'preview-base-redirect',
      configurePreviewServer(server) {
        if (base && base !== './' && base !== '/') {
          server.middlewares.use((req, res, next) => {
            if (req.url === '/' || req.url === '') {
              res.writeHead(302, { Location: base });
              res.end();
              return;
            }
            next();
          });
        }
      }
    }
  ],
  base,
  build: {
    target: 'es2022',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});

