import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://samina-tenso.github.io/Tic-tac-toe/",
  plugins: [react()]
})
