import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
var __dirname = path.dirname(fileURLToPath(import.meta.url));
// optimization for production build, can be removed if not needed
export default defineConfig(function (_a) {
    var mode = _a.mode;
    var env = loadEnv(mode, process.cwd(), '');
    return {
        plugins: [
            react(),
            visualizer({
                open: true,
                gzipSize: true,
                brotliSize: true,
            }),
        ],
        base: env.VITE_BASE || '/',
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        css: {
            postcss: './postcss.config.js',
        },
    };
});
