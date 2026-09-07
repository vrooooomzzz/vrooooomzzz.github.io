import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? '/',
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});
