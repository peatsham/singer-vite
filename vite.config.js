import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/singer-vite/", // 👈 Make sure this line is exactly here!
});
