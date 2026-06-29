import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "spa-fallback",
      configureServer(server) {
        return () => {
          server.middlewares.use((req, _res, next) => {
            const url = req.url || "";

            // Если это запрос на файл, пропускаем
            if (url.match(/\.\w+$/)) {
              next();
              return;
            }
            // Если это запрос на API, пропускаем
            if (url.startsWith("/api")) {
              next();
              return;
            }
            // Для всех остальных запросов перенаправляем на index.html
            req.url = "/index.html";
            next();
          });
        };
      },
    },
  ],
  server: {
    open: true,
  },
});
