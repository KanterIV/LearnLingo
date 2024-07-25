import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// export default defineConfig({
//   server: { host: "0.0.0.0" },
//   plugins: [react(), svgr()],
//   base: "/LearnLingo/",
// });

export default defineConfig({
  plugins: [react(), svgr()],
  server: { host: "0.0.0.0" },
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      pages: "/src/pages",
      assets: "/src/assets",
    },
  },
  base: "/LearnLingo/",
});
