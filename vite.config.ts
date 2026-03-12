import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Vite configuration for NextERP Systems
export default defineConfig({
  server: {
    host: true, // allows access from local network
    port: 5173,
    open: true
  },

  plugins: [
    react()
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },

  build: {
    outDir: "dist",
    sourcemap: false,
    chunkSizeWarningLimit: 1000
  }
});