import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Apps run only inside CodeSandbox's modern Chromium, so target esnext.
  // Vite's default "modules" target (es2020/safari14/chrome87) makes esbuild
  // try to down-level modern destructuring (e.g. Radix's `{ ...props }` and
  // param defaults) and fail with "Transforming destructuring ... not supported yet".
  build: {
    target: "esnext",
  },
  esbuild: {
    target: "esnext",
  },
  optimizeDeps: {
    exclude: ["@supabase/auth-js", "@supabase/supabase-js"],
    esbuildOptions: {
      target: "esnext",
    },
  },
});
