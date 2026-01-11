import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// import sitemap from '@astrojs/sitemap'; // TODO: Fix sitemap plugin compatibility

// https://astro.build/config
export default defineConfig({
  // Site URL - update when domain changes
  site: 'https://transport.voogt.co.za',

  integrations: [
    tailwind(),
    // sitemap(), // Temporarily disabled - compatibility issue
  ],
  
  // Build configuration for static export
  output: 'static',
  
  // Build optimizations
  build: {
    // Inline small stylesheets
    inlineStylesheets: 'auto',
    // Generate assets with hashes for cache busting
    assets: 'assets',
  },
  
  // Image optimization
  image: {
    // Use sharp for image optimization
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  
  // Vite configuration
  vite: {
    build: {
      // Optimize chunk splitting
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
    // CSS handling
    css: {
      devSourcemap: true,
    },
  },
  
  // Prefetch configuration for faster navigation
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  
  // Compression settings
  compressHTML: true,
  
  // Development server
  server: {
    port: 4321,
    host: true, // Allow external connections (for Docker)
  },
});
