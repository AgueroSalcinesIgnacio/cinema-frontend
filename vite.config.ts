import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    define: {
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
      __API_URL__: JSON.stringify(env.VITE_BASE_URL),
    },
    server: {
      port: 9000,
      host: true,
      watch: {
        usePolling: true,
      },
    },
  };
});
