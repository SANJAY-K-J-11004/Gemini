import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY) // Allows access to all environment variables in `process.env`
  },
  server: {
    host: true,
    strictPort: true,
    port: 8000,
    },
});
