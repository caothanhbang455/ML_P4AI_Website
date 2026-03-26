import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ML_P4AI_Website/', // GIẢ SỬ tên repo của bạn là ML_P4AI_Website
})