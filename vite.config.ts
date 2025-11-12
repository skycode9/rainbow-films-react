import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    glsl()
  ],
  server: {
    port: 3002,
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'],
        passes: 2,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
      },
      mangle: {
        safari10: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Separate heavy libraries into their own chunks
          if (id.includes('node_modules')) {
            // Three.js ecosystem - separate chunk
            if (id.includes('three') || id.includes('@react-three')) {
              return 'three-vendor';
            }
            // Animation libraries
            if (id.includes('framer-motion') || id.includes('lenis')) {
              return 'animation-vendor';
            }
            // React core
            if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) {
              return 'react-vendor';
            }
            // Postprocessing effects
            if (id.includes('postprocessing')) {
              return 'postprocessing-vendor';
            }
            // Lucide icons
            if (id.includes('lucide-react')) {
              return 'icons-vendor';
            }
            // Everything else from node_modules
            return 'vendor';
          }
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'three', 'lenis'],
    exclude: [],
  },
})
