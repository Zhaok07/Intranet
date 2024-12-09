import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    base: "/Intranet",
    host: '0.0.0.0', // Permite conexões de qualquer IP
    port: 3000, // Ou qualquer porta que você preferir
    strictPort: true, // Garante que a porta escolhida seja usada, sem tentar outras portas
  }
})
