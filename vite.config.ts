import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  // base: '/dili-trading-website/', // 替换为您的GitHub仓库名
  build: {
    outDir: 'docs',
    assetsDir: 'assets'
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

