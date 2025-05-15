import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      vue: "vue/dist/vue.esm-browser.js", // Явное указание сборки для браузера
    },
  },
  server: {
    headers: {
      "Content-Security-Policy":
        "default-src 'self' data:; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' http://localhost:*; " +
        "style-src 'self' 'unsafe-inline'; " +
        "connect-src 'self' ws://localhost:*; " +
        "img-src 'self' data: blob:",
    },
  },
  plugins: [vue()],
});

// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";

// export default defineConfig({
//   server: {
//     headers: {
//       "Content-Security-Policy": "script-src 'self' 'unsafe-inline'",
//     },
//   },
//   plugins: [vue()],
// });
