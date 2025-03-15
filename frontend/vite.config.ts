import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import relay from "vite-plugin-relay-lite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), relay({ codegen: false })],
  server: {
    host: true, // Listen on all available network interfaces
    port: 3000,
    strictPort: true, // Fail if port is already in use
    proxy: {
      "/graphql": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
});
