import { defineConfig } from 'vite'
import react from '@vitejs/react-swc' // or '@vitejs/plugin-react' if using standard react

export default defineConfig({
  plugins: [react()],
  base: '/singer-vite/',
})
