import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from "vite-plugin-mock"

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    viteMockServe({
      mockPath: "mock",
      enable: true,
    })
  ],
})
