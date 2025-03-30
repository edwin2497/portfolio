import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      types: path.resolve("src/types"),
      pages: path.resolve("src/pages"),
      const: path.resolve("src/const"),
      assets: path.resolve("src/assets"),
      components: path.resolve("src/components"),
    },
  },
});
