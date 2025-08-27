import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/jak-card/sympathy-site/',
  plugins: [react(), tailwindcss()],
})