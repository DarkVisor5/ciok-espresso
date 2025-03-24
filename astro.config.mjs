import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  vite: {
    server: {
      host: true,
    },
    preview: {
      allowedHosts: [".ngrok-free.app"]
    }
  }
});
