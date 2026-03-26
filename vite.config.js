import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ML_P4AI_Website/', // Tên Repository của bạn trên GitHub
})